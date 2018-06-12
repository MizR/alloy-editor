/**
 * AlloyEditor v1.5.6
 *
 * Copyright 2014-present, Liferay, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the GNU LGPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function() {
    function deployCKEditor() {
        /*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return;window.CKEDITOR||(window.CKEDITOR=function(){var a=/(^|.*[\\\/])alloy-editor-no-react\.js(?:\?.*|;.*)?$/i,d={timestamp:"H8DA",version:"4.7.3",revision:"dee99e2",rnd:Math.floor(900*Math.random())+100,_:{pending:[],basePathSrcPattern:a},status:"unloaded",basePath:function(){var b=window.CKEDITOR_BASEPATH||"";if(!b)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var k=c[d].src.match(a);if(k){b=k[1];break}}-1==b.indexOf(":/")&&"//"!=b.slice(0,2)&&(b=0===b.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+
b:location.href.match(/^[^\?]*\/(?:)/)[0]+b);if(!b)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return b}(),getUrl:function(a){-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=this.basePath+a);this.timestamp&&"/"!=a.charAt(a.length-1)&&!/[&?]t=/.test(a)&&(a+=(0<=a.indexOf("?")?"\x26":"?")+"t\x3d"+this.timestamp);return a},domReady:function(){function a(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded",
a,!1),b()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",a),b())}catch(c){}}function b(){for(var a;a=c.shift();)a()}var c=[];return function(b){function n(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(n,1);return}a()}c.push(b);"complete"===document.readyState&&setTimeout(a,1);if(1==c.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",
a);window.attachEvent("onload",a);b=!1;try{b=!window.frameElement}catch(q){}document.documentElement.doScroll&&b&&n()}}}()},b=window.CKEDITOR_GETURL;if(b){var c=d.getUrl;d.getUrl=function(a){return b.call(d,a)||c.call(d,a)}}return d}());
CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var d=CKEDITOR.event.prototype,b;for(b in d)null==a[b]&&(a[b]=d[b])},CKEDITOR.event.prototype=function(){function a(a){var e=d(this);return e[a]||(e[a]=new b(a))}var d=function(a){a=a.getPrivate&&a.getPrivate()||a._||(a._={});return a.events||(a.events={})},b=function(a){this.name=a;this.listeners=[]};b.prototype={getListenerIndex:function(a){for(var b=0,d=this.listeners;b<d.length;b++)if(d[b].fn==a)return b;return-1}};
return{define:function(b,d){var g=a.call(this,b);CKEDITOR.tools.extend(g,d,!0)},on:function(b,d,g,h,k){function n(a,f,D,k){a={name:b,sender:this,editor:a,data:f,listenerData:h,stop:D,cancel:k,removeListener:q};return!1===d.call(g,a)?!1:a.data}function q(){D.removeListener(b,d)}var f=a.call(this,b);if(0>f.getListenerIndex(d)){f=f.listeners;g||(g=this);isNaN(k)&&(k=10);var D=this;n.fn=d;n.priority=k;for(var w=f.length-1;0<=w;w--)if(f[w].priority<=k)return f.splice(w+1,0,n),{removeListener:q};f.unshift(n)}return{removeListener:q}},
once:function(){var a=Array.prototype.slice.call(arguments),b=a[1];a[1]=function(a){a.removeListener();return b.apply(this,arguments)};return this.on.apply(this,a)},capture:function(){CKEDITOR.event.useCapture=1;var a=this.on.apply(this,arguments);CKEDITOR.event.useCapture=0;return a},fire:function(){var a=0,b=function(){a=1},g=0,h=function(){g=1};return function(k,n,q){var f=d(this)[k];k=a;var D=g;a=g=0;if(f){var w=f.listeners;if(w.length)for(var w=w.slice(0),A,G=0;G<w.length;G++){if(f.errorProof)try{A=
w[G].call(this,q,n,b,h)}catch(x){}else A=w[G].call(this,q,n,b,h);!1===A?g=1:"undefined"!=typeof A&&(n=A);if(a||g)break}}n=g?!1:"undefined"==typeof n?!0:n;a=k;g=D;return n}}(),fireOnce:function(a,b,g){b=this.fire(a,b,g);delete d(this)[a];return b},removeListener:function(a,b){var g=d(this)[a];if(g){var h=g.getListenerIndex(b);0<=h&&g.listeners.splice(h,1)}},removeAllListeners:function(){var a=d(this),b;for(b in a)delete a[b]},hasListeners:function(a){return(a=d(this)[a])&&0<a.listeners.length}}}());
CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]);CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=function(a,d){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fire.call(this,a,d,this)},CKEDITOR.editor.prototype.fireOnce=function(a,d){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fireOnce.call(this,a,d,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));
CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),d=a.match(/edge[ \/](\d+.?\d*)/),b=-1<a.indexOf("trident/"),b=!(!d&&!b),b={ie:b,edge:!!d,webkit:!b&&-1<a.indexOf(" applewebkit/"),air:-1<a.indexOf(" adobeair/"),mac:-1<a.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode&&(!document.documentMode||10>document.documentMode),mobile:-1<a.indexOf("mobile"),iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return!1;var a=document.domain,b=window.location.hostname;
return a!=b&&a!="["+b+"]"},secure:"https:"==location.protocol};b.gecko="Gecko"==navigator.product&&!b.webkit&&!b.ie;b.webkit&&(-1<a.indexOf("chrome")?b.chrome=!0:b.safari=!0);var c=0;b.ie&&(c=d?parseFloat(d[1]):b.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode,b.ie9Compat=9==c,b.ie8Compat=8==c,b.ie7Compat=7==c,b.ie6Compat=7>c||b.quirks);b.gecko&&(d=a.match(/rv:([\d\.]+)/))&&(d=d[1].split("."),c=1E4*d[0]+100*(d[1]||0)+1*(d[2]||0));b.air&&(c=parseFloat(a.match(/ adobeair\/(\d+)/)[1]));
b.webkit&&(c=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));b.version=c;b.isCompatible=!(b.ie&&7>c)&&!(b.gecko&&4E4>c)&&!(b.webkit&&534>c);b.hidpi=2<=window.devicePixelRatio;b.needsBrFiller=b.gecko||b.webkit||b.ie&&10<c;b.needsNbspFiller=b.ie&&11>c;b.cssClass="cke_browser_"+(b.ie?"ie":b.gecko?"gecko":b.webkit?"webkit":"unknown");b.quirks&&(b.cssClass+=" cke_browser_quirks");b.ie&&(b.cssClass+=" cke_browser_ie"+(b.quirks?"6 cke_browser_iequirks":b.version));b.air&&(b.cssClass+=" cke_browser_air");
b.iOS&&(b.cssClass+=" cke_browser_ios");b.hidpi&&(b.cssClass+=" cke_hidpi");return b}());
"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR);CKEDITOR.loadFullCore=function(){if("basic_ready"!=CKEDITOR.status)CKEDITOR.loadFullCore._load=1;else{delete CKEDITOR.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=CKEDITOR.basePath+"ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a)}};CKEDITOR.loadFullCoreTimeout=0;CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)};(function(){CKEDITOR.domReady(function(){var a=
CKEDITOR.loadFullCore,d=CKEDITOR.loadFullCoreTimeout;a&&(CKEDITOR.status="basic_ready",a&&a._load?a():d&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},1E3*d))})})();CKEDITOR.status="basic_loaded"}();"use strict";CKEDITOR.VERBOSITY_WARN=1;CKEDITOR.VERBOSITY_ERROR=2;CKEDITOR.verbosity=CKEDITOR.VERBOSITY_WARN|CKEDITOR.VERBOSITY_ERROR;CKEDITOR.warn=function(a,d){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_WARN&&CKEDITOR.fire("log",{type:"warn",errorCode:a,additionalData:d})};
CKEDITOR.error=function(a,d){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_ERROR&&CKEDITOR.fire("log",{type:"error",errorCode:a,additionalData:d})};
CKEDITOR.on("log",function(a){if(window.console&&window.console.log){var d=console[a.data.type]?a.data.type:"log",b=a.data.errorCode;if(a=a.data.additionalData)console[d]("[CKEDITOR] Error code: "+b+".",a);else console[d]("[CKEDITOR] Error code: "+b+".");console[d]("[CKEDITOR] For more information about this error go to http://docs.ckeditor.com/#!/guide/dev_errors-section-"+b)}},null,null,999);CKEDITOR.dom={};
(function(){var a=[],d=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?"-ms-":"",b=/&/g,c=/>/g,e=/</g,g=/"/g,h=/&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,k={lt:"\x3c",gt:"\x3e",amp:"\x26",quot:'"',nbsp:" ",shy:"­"},n=function(a,f){return"#"==f[0]?String.fromCharCode(parseInt(f.slice(1),10)):k[f]};CKEDITOR.on("reset",function(){a=[]});CKEDITOR.tools={arrayCompare:function(a,f){if(!a&&!f)return!0;if(!a||!f||a.length!=f.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!=f[b])return!1;
return!0},getIndex:function(a,f){for(var b=0;b<a.length;++b)if(f(a[b]))return b;return-1},clone:function(a){var f;if(a&&a instanceof Array){f=[];for(var b=0;b<a.length;b++)f[b]=CKEDITOR.tools.clone(a[b]);return f}if(null===a||"object"!=typeof a||a instanceof String||a instanceof Number||a instanceof Boolean||a instanceof Date||a instanceof RegExp||a.nodeType||a.window===a)return a;f=new a.constructor;for(b in a)f[b]=CKEDITOR.tools.clone(a[b]);return f},capitalize:function(a,f){return a.charAt(0).toUpperCase()+
(f?a.slice(1):a.slice(1).toLowerCase())},extend:function(a){var f=arguments.length,b,c;"boolean"==typeof(b=arguments[f-1])?f--:"boolean"==typeof(b=arguments[f-2])&&(c=arguments[f-1],f-=2);for(var k=1;k<f;k++){var d=arguments[k],n;for(n in d)if(!0===b||null==a[n])if(!c||n in c)a[n]=d[n]}return a},prototypedCopy:function(a){var f=function(){};f.prototype=a;return new f},copy:function(a){var f={},b;for(b in a)f[b]=a[b];return f},isArray:function(a){return"[object Array]"==Object.prototype.toString.call(a)},
isEmpty:function(a){for(var f in a)if(a.hasOwnProperty(f))return!1;return!0},cssVendorPrefix:function(a,f,b){if(b)return d+a+":"+f+";"+a+":"+f;b={};b[a]=f;b[d+a]=f;return b},cssStyleToDomStyle:function(){var a=document.createElement("div").style,f="undefined"!=typeof a.cssFloat?"cssFloat":"undefined"!=typeof a.styleFloat?"styleFloat":"float";return function(a){return"float"==a?f:a.replace(/-./g,function(a){return a.substr(1).toUpperCase()})}}(),buildStyleHtml:function(a){a=[].concat(a);for(var f,
b=[],c=0;c<a.length;c++)if(f=a[c])/@import|[{}]/.test(f)?b.push("\x3cstyle\x3e"+f+"\x3c/style\x3e"):b.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"'+f+'"\x3e');return b.join("")},htmlEncode:function(a){return void 0===a||null===a?"":String(a).replace(b,"\x26amp;").replace(c,"\x26gt;").replace(e,"\x26lt;")},htmlDecode:function(a){return a.replace(h,n)},htmlEncodeAttr:function(a){return CKEDITOR.tools.htmlEncode(a).replace(g,"\x26quot;")},htmlDecodeAttr:function(a){return CKEDITOR.tools.htmlDecode(a)},
transformPlainTextToHtml:function(a,f){var b=f==CKEDITOR.ENTER_BR,c=this.htmlEncode(a.replace(/\r\n/g,"\n")),c=c.replace(/\t/g,"\x26nbsp;\x26nbsp; \x26nbsp;"),k=f==CKEDITOR.ENTER_P?"p":"div";if(!b){var d=/\n{2}/g;if(d.test(c))var n="\x3c"+k+"\x3e",m="\x3c/"+k+"\x3e",c=n+c.replace(d,function(){return m+n})+m}c=c.replace(/\n/g,"\x3cbr\x3e");b||(c=c.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/"+k+"\x3e)"),function(a){return CKEDITOR.tools.repeat(a,2)}));c=c.replace(/^ | $/g,"\x26nbsp;");return c=c.replace(/(>|\s) /g,
function(a,f){return f+"\x26nbsp;"}).replace(/ (?=<)/g,"\x26nbsp;")},getNextNumber:function(){var a=0;return function(){return++a}}(),getNextId:function(){return"cke_"+this.getNextNumber()},getUniqueId:function(){for(var a="e",f=0;8>f;f++)a+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return a},override:function(a,f){var b=f(a);b.prototype=a.prototype;return b},setTimeout:function(a,f,b,c,k){k||(k=window);b||(b=k);return k.setTimeout(function(){c?a.apply(b,[].concat(c)):a.apply(b)},
f||0)},trim:function(){var a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(f){return f.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g;return function(f){return f.replace(a,"")}}(),rtrim:function(){var a=/[ \t\n\r]+$/g;return function(f){return f.replace(a,"")}}(),indexOf:function(a,f){if("function"==typeof f)for(var b=0,c=a.length;b<c;b++){if(f(a[b]))return b}else{if(a.indexOf)return a.indexOf(f);b=0;for(c=a.length;b<c;b++)if(a[b]===f)return b}return-1},search:function(a,f){var b=CKEDITOR.tools.indexOf(a,
f);return 0<=b?a[b]:null},bind:function(a,f){return function(){return a.apply(f,arguments)}},createClass:function(a){var f=a.$,b=a.base,c=a.privates||a._,k=a.proto;a=a.statics;!f&&(f=function(){b&&this.base.apply(this,arguments)});if(c)var d=f,f=function(){var a=this._||(this._={}),f;for(f in c){var b=c[f];a[f]="function"==typeof b?CKEDITOR.tools.bind(b,this):b}d.apply(this,arguments)};b&&(f.prototype=this.prototypedCopy(b.prototype),f.prototype.constructor=f,f.base=b,f.baseProto=b.prototype,f.prototype.base=
function(){this.base=b.prototype.base;b.apply(this,arguments);this.base=arguments.callee});k&&this.extend(f.prototype,k,!0);a&&this.extend(f,a,!0);return f},addFunction:function(b,f){return a.push(function(){return b.apply(f||this,arguments)})-1},removeFunction:function(b){a[b]=null},callFunction:function(b){var f=a[b];return f&&f.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a=/^-?\d+\.?\d*px$/,f;return function(b){f=CKEDITOR.tools.trim(b+"")+"px";return a.test(f)?
f:b||""}}(),convertToPx:function(){var a;return function(f){a||(a=CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e',CKEDITOR.document),CKEDITOR.document.getBody().append(a));return/%$/.test(f)?f:(a.setStyle("width",f),a.$.clientWidth)}}(),repeat:function(a,f){return Array(f+1).join(a)},tryThese:function(){for(var a,f=0,b=arguments.length;f<b;f++){var c=arguments[f];try{a=c();break}catch(k){}}return a},
genKey:function(){return Array.prototype.slice.call(arguments).join("-")},defer:function(a){return function(){var f=arguments,b=this;window.setTimeout(function(){a.apply(b,f)},0)}},normalizeCssText:function(a,f){var b=[],c,k=CKEDITOR.tools.parseCssText(a,!0,f);for(c in k)b.push(c+":"+k[c]);b.sort();return b.length?b.join(";")+";":""},convertRgbToHex:function(a){return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,function(a,b,c,k){a=[b,c,k];for(b=0;3>b;b++)a[b]=("0"+parseInt(a[b],10).toString(16)).slice(-2);
return"#"+a.join("")})},normalizeHex:function(a){return a.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi,function(a,b,c,k){a=b.toLowerCase();3==a.length&&(a=a.split(""),a=[a[0],a[0],a[1],a[1],a[2],a[2]].join(""));return"#"+a+k})},parseCssText:function(a,f,b){var c={};b&&(a=(new CKEDITOR.dom.element("span")).setAttribute("style",a).getAttribute("style")||"");a&&(a=CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(a)));if(!a||";"==a)return c;a.replace(/&quot;/g,'"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g,
function(a,b,k){f&&(b=b.toLowerCase(),"font-family"==b&&(k=k.replace(/\s*,\s*/g,",")),k=CKEDITOR.tools.trim(k));c[b]=k});return c},writeCssText:function(a,f){var b,c=[];for(b in a)c.push(b+":"+a[b]);f&&c.sort();return c.join("; ")},objectCompare:function(a,f,b){var c;if(!a&&!f)return!0;if(!a||!f)return!1;for(c in a)if(a[c]!=f[c])return!1;if(!b)for(c in f)if(a[c]!=f[c])return!1;return!0},objectKeys:function(a){var f=[],b;for(b in a)f.push(b);return f},convertArrayToObject:function(a,f){var b={};1==
arguments.length&&(f=!0);for(var c=0,k=a.length;c<k;++c)b[a[c]]=f;return b},fixDomain:function(){for(var a;;)try{a=window.parent.document.domain;break}catch(f){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain;if(!a)break;document.domain=a}return!!a},eventsBuffer:function(a,f,b){function c(){d=(new Date).getTime();k=!1;b?f.call(b):f()}var k,d=0;return{input:function(){if(!k){var f=(new Date).getTime()-d;f<a?k=setTimeout(c,a-f):c()}},reset:function(){k&&clearTimeout(k);k=d=0}}},enableHtml5Elements:function(a,
f){for(var b="abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "),c=b.length,k;c--;)k=a.createElement(b[c]),f&&a.appendChild(k)},checkIfAnyArrayItemMatches:function(a,f){for(var b=0,c=a.length;b<c;++b)if(a[b].match(f))return!0;return!1},checkIfAnyObjectPropertyMatches:function(a,f){for(var b in a)if(b.match(f))return!0;return!1},keystrokeToString:function(a,b){var c=b&16711680,k=
b&65535,d=CKEDITOR.env.mac,n=[],e=[];c&CKEDITOR.CTRL&&(n.push(d?"⌘":a[17]),e.push(d?a[224]:a[17]));c&CKEDITOR.ALT&&(n.push(d?"⌥":a[18]),e.push(a[18]));c&CKEDITOR.SHIFT&&(n.push(d?"⇧":a[16]),e.push(a[16]));k&&(a[k]?(n.push(a[k]),e.push(a[k])):(n.push(String.fromCharCode(k)),e.push(String.fromCharCode(k))));return{display:n.join("+"),aria:e.join("+")}},transparentImageData:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d",getCookie:function(a){a=a.toLowerCase();
for(var b=document.cookie.split(";"),c,k,d=0;d<b.length;d++)if(c=b[d].split("\x3d"),k=decodeURIComponent(CKEDITOR.tools.trim(c[0]).toLowerCase()),k===a)return decodeURIComponent(1<c.length?c[1]:"");return null},setCookie:function(a,b){document.cookie=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b)+";path\x3d/"},getCsrfToken:function(){var a=CKEDITOR.tools.getCookie("ckCsrfToken");if(!a||40!=a.length){var a=[],b="";if(window.crypto&&window.crypto.getRandomValues)a=new Uint8Array(40),window.crypto.getRandomValues(a);
else for(var c=0;40>c;c++)a.push(Math.floor(256*Math.random()));for(c=0;c<a.length;c++)var k="abcdefghijklmnopqrstuvwxyz0123456789".charAt(a[c]%36),b=b+(.5<Math.random()?k.toUpperCase():k);a=b;CKEDITOR.tools.setCookie("ckCsrfToken",a)}return a},escapeCss:function(a){return a?window.CSS&&CSS.escape?CSS.escape(a):isNaN(parseInt(a.charAt(0),10))?a:"\\3"+a.charAt(0)+" "+a.substring(1,a.length):""},getMouseButton:function(a){var b=(a=a.data)&&a.$;return a&&b?CKEDITOR.env.ie&&9>CKEDITOR.env.version?4===
b.button?CKEDITOR.MOUSE_BUTTON_MIDDLE:1===b.button?CKEDITOR.MOUSE_BUTTON_LEFT:CKEDITOR.MOUSE_BUTTON_RIGHT:b.button:!1},style:{parse:{_colors:{aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",
crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",
dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",
lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",
mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",
red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},
_borderStyle:"none hidden dotted dashed solid double groove ridge inset outset".split(" "),_widthRegExp:/^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/,_rgbaRegExp:/rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi,_hslaRegExp:/hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi,background:function(a){var b={},c=this._findColor(a);c.length&&(b.color=c[0],CKEDITOR.tools.array.forEach(c,function(b){a=a.replace(b,"")}));if(a=CKEDITOR.tools.trim(a))b.unprocessed=
a;return b},margin:function(a){function b(a){c.top=k[a[0]];c.right=k[a[1]];c.bottom=k[a[2]];c.left=k[a[3]]}var c={},k=a.match(/(?:\-?[\.\d]+(?:%|\w*)|auto|inherit|initial|unset)/g)||["0px"];switch(k.length){case 1:b([0,0,0,0]);break;case 2:b([0,1,0,1]);break;case 3:b([0,1,2,1]);break;case 4:b([0,1,2,3])}return c},border:function(a){var b={};a=a.split(/\s+/);CKEDITOR.tools.array.forEach(a,function(a){if(!b.color){var c=CKEDITOR.tools.style.parse._findColor(a);if(c.length){b.color=c[0];return}}b.style||
-1===CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle,a)?!b.width&&CKEDITOR.tools.style.parse._widthRegExp.test(a)&&(b.width=a):b.style=a});return b},_findColor:function(a){var b=[],c=CKEDITOR.tools.array,b=b.concat(a.match(this._rgbaRegExp)||[]),b=b.concat(a.match(this._hslaRegExp)||[]);return b=b.concat(c.filter(a.split(/\s+/),function(a){return a.match(/^\#[a-f0-9]{3}(?:[a-f0-9]{3})?$/gi)?!0:a.toLowerCase()in CKEDITOR.tools.style.parse._colors}))}}},array:{filter:function(a,b,c){var k=
[];this.forEach(a,function(d,n){b.call(c,d,n,a)&&k.push(d)});return k},forEach:function(a,b,c){var k=a.length,d;for(d=0;d<k;d++)b.call(c,a[d],d,a)},map:function(a,b,c){for(var k=[],d=0;d<a.length;d++)k.push(b.call(c,a[d],d,a));return k},reduce:function(a,b,c,k){for(var d=0;d<a.length;d++)c=b.call(k,c,a[d],d,a);return c}},object:{findKey:function(a,b){if("object"!==typeof a)return null;for(var c in a)if(a[c]===b)return c;return null}}};CKEDITOR.tools.array.indexOf=CKEDITOR.tools.indexOf;CKEDITOR.tools.array.isArray=
CKEDITOR.tools.isArray;CKEDITOR.MOUSE_BUTTON_LEFT=0;CKEDITOR.MOUSE_BUTTON_MIDDLE=1;CKEDITOR.MOUSE_BUTTON_RIGHT=2})();
CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,d=function(a,b){for(var c=CKEDITOR.tools.clone(a),k=1;k<arguments.length;k++){b=arguments[k];for(var d in b)delete c[d]}return c},b={},c={},e={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},g={command:1,link:1,meta:1,noscript:1,script:1,style:1},h={},k={"#":1},n={center:1,dir:1,noframes:1};
a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},k,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});a(c,e,b,n);d={a:d(b,{a:1,button:1}),abbr:b,address:c,
area:h,article:c,aside:c,audio:a({source:1,track:1},c),b:b,base:h,bdi:b,bdo:b,blockquote:c,body:c,br:h,button:d(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:h,colgroup:{col:1},command:h,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:c,dl:{dt:1,dd:1},dt:c,em:b,embed:h,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},g),header:c,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:h,html:a({head:1,
body:1},c,g),i:b,iframe:k,img:h,input:h,ins:b,kbd:b,keygen:h,label:b,legend:b,li:c,link:h,main:c,map:c,mark:b,menu:a({li:1},c),meta:h,meter:d(b,{meter:1}),nav:c,noscript:a({link:1,meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:k,output:b,p:b,param:h,pre:b,progress:d(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,script:k,section:c,select:{optgroup:1,option:1},small:b,source:h,span:b,strong:b,style:k,sub:b,summary:a({h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},b),
sup:b,table:{caption:1,colgroup:1,thead:1,tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:k,tfoot:{tr:1},th:c,thead:{tr:1},time:d(b,{time:1}),title:k,tr:{th:1,td:1},track:h,u:b,ul:{li:1},"var":b,video:a({source:1,track:1},c),wbr:h,acronym:b,applet:a({param:1},c),basefont:h,big:b,center:c,dialog:h,dir:{li:1},font:b,isindex:h,noframes:c,strike:b,tt:b};a(d,{$block:a({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},e,n),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,
fieldset:1,figcaption:1,figure:1,footer:1,form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,
track:1,wbr:1},$inline:b,$list:{dl:1,ol:1,ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},d.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,
s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return d}();
CKEDITOR.dom.event=function(a){this.$=a};
CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey();if(this.$.ctrlKey||this.$.metaKey)a+=CKEDITOR.CTRL;this.$.shiftKey&&(a+=CKEDITOR.SHIFT);this.$.altKey&&(a+=CKEDITOR.ALT);return a},preventDefault:function(a){var d=this.$;d.preventDefault?d.preventDefault():d.returnValue=!1;a&&this.stopPropagation()},stopPropagation:function(){var a=this.$;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},getTarget:function(){var a=
this.$.target||this.$.srcElement;return a?new CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$;return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}};CKEDITOR.CTRL=1114112;CKEDITOR.SHIFT=2228224;CKEDITOR.ALT=4456448;CKEDITOR.EVENT_PHASE_CAPTURING=1;CKEDITOR.EVENT_PHASE_AT_TARGET=2;
CKEDITOR.EVENT_PHASE_BUBBLING=3;CKEDITOR.dom.domObject=function(a){a&&(this.$=a)};
CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){"undefined"!=typeof CKEDITOR&&a.fire(b,new CKEDITOR.dom.event(c))}};return{getPrivate:function(){var a;(a=this.getCustomData("_"))||this.setCustomData("_",a={});return a},on:function(d){var b=this.getCustomData("_cke_nativeListeners");b||(b={},this.setCustomData("_cke_nativeListeners",b));b[d]||(b=b[d]=a(this,d),this.$.addEventListener?this.$.addEventListener(d,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&&this.$.attachEvent("on"+
d,b));return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,arguments);if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a];c&&(this.$.removeEventListener?this.$.removeEventListener(a,c,!1):this.$.detachEvent&&this.$.detachEvent("on"+a,c),delete b[a])}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b;for(b in a){var c=a[b];this.$.detachEvent?this.$.detachEvent("on"+
b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,!1);delete a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}();
(function(a){var d={};CKEDITOR.on("reset",function(){d={}});a.equals=function(a){try{return a&&a.$===this.$}catch(c){return!1}};a.setCustomData=function(a,c){var e=this.getUniqueId();(d[e]||(d[e]={}))[a]=c;return this};a.getCustomData=function(a){var c=this.$["data-cke-expando"];return(c=c&&d[c])&&a in c?c[a]:null};a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&d[c],e,g;c&&(e=c[a],g=a in c,delete c[a]);return g?e:null};a.clearCustomData=function(){this.removeAllListeners();var a=
this.$["data-cke-expando"];a&&delete d[a]};a.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())};CKEDITOR.event.implementOn(a)})(CKEDITOR.dom.domObject.prototype);
CKEDITOR.dom.node=function(a){return a?new CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?"documentFragment":"domObject"](a):this};CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject;CKEDITOR.NODE_ELEMENT=1;CKEDITOR.NODE_DOCUMENT=9;CKEDITOR.NODE_TEXT=3;CKEDITOR.NODE_COMMENT=8;CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;
CKEDITOR.POSITION_IDENTICAL=0;CKEDITOR.POSITION_DISCONNECTED=1;CKEDITOR.POSITION_FOLLOWING=2;CKEDITOR.POSITION_PRECEDING=4;CKEDITOR.POSITION_IS_CONTAINED=8;CKEDITOR.POSITION_CONTAINS=16;
CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,d){a.append(this,d);return a},clone:function(a,d){function b(c){c["data-cke-expando"]&&(c["data-cke-expando"]=!1);if(c.nodeType==CKEDITOR.NODE_ELEMENT||c.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)if(d||c.nodeType!=CKEDITOR.NODE_ELEMENT||c.removeAttribute("id",!1),a){c=c.childNodes;for(var e=0;e<c.length;e++)b(c[e])}}function c(b){if(b.type==CKEDITOR.NODE_ELEMENT||b.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT){if(b.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var d=
b.getName();":"==d[0]&&b.renameNode(d.substring(1))}if(a)for(d=0;d<b.getChildCount();d++)c(b.getChild(d))}}var e=this.$.cloneNode(a);b(e);e=new CKEDITOR.dom.node(e);CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(this.type==CKEDITOR.NODE_ELEMENT||this.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)&&c(e);return e},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$,a.$.nextSibling);return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,
a.$);return a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,this.$);return a},getAddress:function(a){for(var d=[],b=this.getDocument().$.documentElement,c=this.$;c&&c!=b;){var e=c.parentNode;e&&d.unshift(this.getIndex.call({$:c},a));c=e}return d},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){function d(a,c){var n=c?a.nextSibling:a.previousSibling;return n&&n.nodeType==CKEDITOR.NODE_TEXT?b(n)?d(n,
c):n:null}function b(a){return!a.nodeValue||a.nodeValue==CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE}var c=this.$,e=-1,g;if(!this.$.parentNode||a&&c.nodeType==CKEDITOR.NODE_TEXT&&b(c)&&!d(c)&&!d(c,!0))return-1;do a&&c!=this.$&&c.nodeType==CKEDITOR.NODE_TEXT&&(g||b(c))||(e++,g=c.nodeType==CKEDITOR.NODE_TEXT);while(c=c.previousSibling);return e},getNextSourceNode:function(a,d,b){if(b&&!b.call){var c=b;b=function(a){return!a.equals(c)}}a=!a&&this.getFirst&&this.getFirst();var e;if(!a){if(this.type==
CKEDITOR.NODE_ELEMENT&&b&&!1===b(this,!0))return null;a=this.getNext()}for(;!a&&(e=(e||this).getParent());){if(b&&!1===b(e,!0))return null;a=e.getNext()}return!a||b&&!1===b(a)?null:d&&d!=a.type?a.getNextSourceNode(!1,d,b):a},getPreviousSourceNode:function(a,d,b){if(b&&!b.call){var c=b;b=function(a){return!a.equals(c)}}a=!a&&this.getLast&&this.getLast();var e;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&!1===b(this,!0))return null;a=this.getPrevious()}for(;!a&&(e=(e||this).getParent());){if(b&&!1===
b(e,!0))return null;a=e.getPrevious()}return!a||b&&!1===b(a)?null:d&&a.type!=d?a.getPreviousSourceNode(!1,d,b):a},getPrevious:function(a){var d=this.$,b;do b=(d=d.previousSibling)&&10!=d.nodeType&&new CKEDITOR.dom.node(d);while(b&&a&&!a(b));return b},getNext:function(a){var d=this.$,b;do b=(d=d.nextSibling)&&new CKEDITOR.dom.node(d);while(b&&a&&!a(b));return b},getParent:function(a){var d=this.$.parentNode;return d&&(d.nodeType==CKEDITOR.NODE_ELEMENT||a&&d.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?
new CKEDITOR.dom.node(d):null},getParents:function(a){var d=this,b=[];do b[a?"push":"unshift"](d);while(d=d.getParent());return b},getCommonAncestor:function(a){if(a.equals(this))return this;if(a.contains&&a.contains(this))return a;var d=this.contains?this:this.getParent();do if(d.contains(a))return d;while(d=d.getParent());return null},getPosition:function(a){var d=this.$,b=a.$;if(d.compareDocumentPosition)return d.compareDocumentPosition(b);if(d==b)return CKEDITOR.POSITION_IDENTICAL;if(this.type==
CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(d.contains){if(d.contains(b))return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING;if(b.contains(d))return CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in d)return 0>d.sourceIndex||0>b.sourceIndex?CKEDITOR.POSITION_DISCONNECTED:d.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}d=this.getAddress();a=a.getAddress();for(var b=Math.min(d.length,a.length),c=0;c<b;c++)if(d[c]!=
a[c])return d[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING;return d.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING},getAscendant:function(a,d){var b=this.$,c,e;d||(b=b.parentNode);"function"==typeof a?(e=!0,c=a):(e=!1,c=function(b){b="string"==typeof b.nodeName?b.nodeName.toLowerCase():"";return"string"==typeof a?b==a:b in a});for(;b;){if(c(e?new CKEDITOR.dom.node(b):b))return new CKEDITOR.dom.node(b);
try{b=b.parentNode}catch(g){b=null}}return null},hasAscendant:function(a,d){var b=this.$;d||(b=b.parentNode);for(;b;){if(b.nodeName&&b.nodeName.toLowerCase()==a)return!0;b=b.parentNode}return!1},move:function(a,d){a.append(this.remove(),d)},remove:function(a){var d=this.$,b=d.parentNode;if(b){if(a)for(;a=d.firstChild;)b.insertBefore(d.removeChild(a),d);b.removeChild(d)}return this},replace:function(a){this.insertBefore(a);a.remove()},trim:function(){this.ltrim();this.rtrim()},ltrim:function(){for(var a;this.getFirst&&
(a=this.getFirst());){if(a.type==CKEDITOR.NODE_TEXT){var d=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength();if(d)d.length<b&&(a.split(b-d.length),this.$.removeChild(this.$.firstChild));else{a.remove();continue}}break}},rtrim:function(){for(var a;this.getLast&&(a=this.getLast());){if(a.type==CKEDITOR.NODE_TEXT){var d=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength();if(d)d.length<b&&(a.split(d.length),this.$.lastChild.parentNode.removeChild(this.$.lastChild));else{a.remove();continue}}break}CKEDITOR.env.needsBrFiller&&
(a=this.$.lastChild)&&1==a.type&&"br"==a.nodeName.toLowerCase()&&a.parentNode.removeChild(a)},isReadOnly:function(a){var d=this;this.type!=CKEDITOR.NODE_ELEMENT&&(d=this.getParent());CKEDITOR.env.edge&&d&&d.is("textarea","input")&&(a=!0);if(!a&&d&&"undefined"!=typeof d.$.isContentEditable)return!(d.$.isContentEditable||d.data("cke-editable"));for(;d;){if(d.data("cke-editable"))return!1;if(d.hasAttribute("contenteditable"))return"false"==d.getAttribute("contenteditable");d=d.getParent()}return!0}});
CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},getViewPaneSize:function(){var a=this.$.document,d="CSS1Compat"==a.compatMode;return{width:(d?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(d?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var a=this.$;if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||
a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement;return a?new CKEDITOR.dom.element.get(a):null}});CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a);else{var d=new CKEDITOR.dom.element("link");d.setAttributes({rel:"stylesheet",type:"text/css",href:a});this.getHead().append(d)}},appendStyleText:function(a){if(this.$.createStyleSheet){var d=this.$.createStyleSheet("");d.cssText=a}else{var b=new CKEDITOR.dom.element("style",this);b.append(new CKEDITOR.dom.text(a,this));this.getHead().append(b)}return d||
b.$.sheet},createElement:function(a,d){var b=new CKEDITOR.dom.element(a,this);d&&(d.attributes&&b.setAttributes(d.attributes),d.styles&&b.setStyles(d.styles));return b},createText:function(a){return new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){var a;try{a=this.$.activeElement}catch(d){return null}return new CKEDITOR.dom.element(a)},getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,d){for(var b=
this.$.documentElement,c=0;b&&c<a.length;c++){var e=a[c];if(d)for(var g=-1,h=0;h<b.childNodes.length;h++){var k=b.childNodes[h];if(!0!==d||3!=k.nodeType||!k.previousSibling||3!=k.previousSibling.nodeType)if(g++,g==e){b=k;break}}else b=b.childNodes[e]}return b?new CKEDITOR.dom.node(b):null},getElementsByTag:function(a,d){CKEDITOR.env.ie&&8>=document.documentMode||!d||(a=d+":"+a);return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];
return a=a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),!0)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html","replace");CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e('+
CKEDITOR.tools.fixDomain+")();\x3c/script\x3e"));this.$.write(a);this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag");a||(a=this.$.createDocumentFragment(),CKEDITOR.tools.enableHtml5Elements(a,!0),this.setCustomData("html5ShivFrag",a));return a}});CKEDITOR.dom.nodeList=function(a){this.$=a};
CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){return 0>a||a>=this.$.length?null:(a=this.$[a])?new CKEDITOR.dom.node(a):null},toArray:function(){return CKEDITOR.tools.array.map(this.$,function(a){return new CKEDITOR.dom.node(a)})}};CKEDITOR.dom.element=function(a,d){"string"==typeof a&&(a=(d?d.$:document).createElement(a));CKEDITOR.dom.domObject.call(this,a)};
CKEDITOR.dom.element.get=function(a){return(a="string"==typeof a?document.getElementById(a)||document.getElementsByName(a)[0]:a)&&(a.$?a:new CKEDITOR.dom.element(a))};CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node;CKEDITOR.dom.element.createFromHtml=function(a,d){var b=new CKEDITOR.dom.element("div",d);b.setHtml(a);return b.getFirst().remove()};
CKEDITOR.dom.element.setMarker=function(a,d,b,c){var e=d.getCustomData("list_marker_id")||d.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),g=d.getCustomData("list_marker_names")||d.setCustomData("list_marker_names",{}).getCustomData("list_marker_names");a[e]=d;g[b]=1;return d.setCustomData(b,c)};CKEDITOR.dom.element.clearAllMarkers=function(a){for(var d in a)CKEDITOR.dom.element.clearMarkers(a,a[d],1)};
CKEDITOR.dom.element.clearMarkers=function(a,d,b){var c=d.getCustomData("list_marker_names"),e=d.getCustomData("list_marker_id"),g;for(g in c)d.removeCustomData(g);d.removeCustomData("list_marker_names");b&&(d.removeCustomData("list_marker_id"),delete a[e])};
(function(){function a(a,b){return-1<(" "+a+" ").replace(g," ").indexOf(" "+b+" ")}function d(a){var b=!0;a.$.id||(a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber(),b=!1);return function(){b||a.removeAttribute("id")}}function b(a,b){var c=CKEDITOR.tools.escapeCss(a.$.id);return"#"+c+" "+b.split(/,\s*/).join(", #"+c+" ")}function c(a){for(var b=0,c=0,f=h[a].length;c<f;c++)b+=parseFloat(this.getComputedStyle(h[a][c])||0,10)||0;return b}var e=document.createElement("_").classList,e="undefined"!==typeof e&&
null!==String(e.add).match(/\[Native code\]/gi),g=/[\n\t\r]/g;CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:e?function(a){this.$.classList.add(a);return this}:function(b){var c=this.$.className;c&&(a(c,b)||(c+=" "+b));this.$.className=c||b;return this},removeClass:e?function(a){var b=this.$;b.classList.remove(a);b.className||b.removeAttribute("class");return this}:function(b){var c=this.getAttribute("class");c&&a(c,b)&&((c=c.replace(new RegExp("(?:^|\\s+)"+
b+"(?\x3d\\s|$)"),"").replace(/^\s+/,""))?this.setAttribute("class",c):this.removeAttribute("class"));return this},hasClass:function(b){return a(this.$.className,b)},append:function(a,b){"string"==typeof a&&(a=this.getDocument().createElement(a));b?this.$.insertBefore(a.$,this.$.firstChild):this.$.appendChild(a.$);return a},appendHtml:function(a){if(this.$.childNodes.length){var b=new CKEDITOR.dom.element("div",this.getDocument());b.setHtml(a);b.moveChildren(this)}else this.setHtml(a)},appendText:function(a){null!=
this.$.text&&CKEDITOR.env.ie&&9>CKEDITOR.env.version?this.$.text+=a:this.append(new CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller){for(a=this.getLast();a&&a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText());)a=a.getPrevious();a&&a.is&&a.is("br")||(a=this.getDocument().createElement("br"),CKEDITOR.env.gecko&&a.setAttribute("type","_moz"),this.append(a))}},breakParent:function(a,b){var c=new CKEDITOR.dom.range(this.getDocument());c.setStartAfter(this);c.setEndAfter(a);
var f=c.extractContents(!1,b||!1),d;c.insertNode(this.remove());if(CKEDITOR.env.ie&&!CKEDITOR.env.edge){for(c=new CKEDITOR.dom.element("div");d=f.getFirst();)d.$.style.backgroundColor&&(d.$.style.backgroundColor=d.$.style.backgroundColor),c.append(d);c.insertAfter(this);c.remove(!0)}else f.insertAfterNode(this)},contains:document.compareDocumentPosition?function(a){return!!(this.$.compareDocumentPosition(a.$)&16)}:function(a){var b=this.$;return a.type!=CKEDITOR.NODE_ELEMENT?b.contains(a.getParent().$):
b!=a.$&&b.contains(a.$)},focus:function(){function a(){try{this.$.focus()}catch(b){}}return function(b){b?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML;return CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,"");var a=this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(!0));return a.innerHTML},getClientRect:function(){var a=CKEDITOR.tools.extend({},
this.$.getBoundingClientRect());!a.width&&(a.width=a.right-a.left);!a.height&&(a.height=a.bottom-a.top);return a},setHtml:CKEDITOR.env.ie&&9>CKEDITOR.env.version?function(a){try{var b=this.$;if(this.getParent())return b.innerHTML=a;var c=this.getDocument()._getHtml5ShivFrag();c.appendChild(b);b.innerHTML=a;c.removeChild(b);return a}catch(f){this.$.innerHTML="";b=new CKEDITOR.dom.element("body",this.getDocument());b.$.innerHTML=a;for(b=b.getChildren();b.count();)this.append(b.getItem(0));return a}}:
function(a){return this.$.innerHTML=a},setText:function(){var a=document.createElement("p");a.innerHTML="x";a=a.textContent;return function(b){this.$[a?"textContent":"innerText"]=b}}(),getAttribute:function(){var a=function(a){return this.$.getAttribute(a,2)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){switch(a){case "class":a="className";break;case "http-equiv":a="httpEquiv";break;case "name":return this.$.name;case "tabindex":return a=this.$.getAttribute(a,
2),0!==a&&0===this.$.tabIndex&&(a=null),a;case "checked":return a=this.$.attributes.getNamedItem(a),(a.specified?a.nodeValue:this.$.checked)?"checked":null;case "hspace":case "value":return this.$[a];case "style":return this.$.style.cssText;case "contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return this.$.getAttribute(a,2)}:a}(),getAttributes:function(a){var b={},c=this.$.attributes,f;a=CKEDITOR.tools.isArray(a)?
a:[];for(f=0;f<c.length;f++)-1===CKEDITOR.tools.indexOf(a,c[f].name)&&(b[c[f].name]=c[f].value);return b},getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},getComputedStyle:document.defaultView&&document.defaultView.getComputedStyle?function(a){var b=this.getWindow().$.getComputedStyle(this.$,null);return b?b.getPropertyValue(a):""}:function(a){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]},getDtd:function(){var a=CKEDITOR.dtd[this.getName()];this.getDtd=
function(){return a};return a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:function(){var a=this.$.tabIndex;return 0!==a||CKEDITOR.dtd.$tabIndex[this.getName()]||0===parseInt(this.getAttribute("tabindex"),10)?a:-1},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var a=this.$.nodeName.toLowerCase();
if(CKEDITOR.env.ie&&8>=document.documentMode){var b=this.$.scopeName;"HTML"!=b&&(a=b.toLowerCase()+":"+a)}this.getName=function(){return a};return this.getName()},getValue:function(){return this.$.value},getFirst:function(a){var b=this.$.firstChild;(b=b&&new CKEDITOR.dom.node(b))&&a&&!a(b)&&(b=b.getNext(a));return b},getLast:function(a){var b=this.$.lastChild;(b=b&&new CKEDITOR.dom.node(b))&&a&&!a(b)&&(b=b.getPrevious(a));return b},getStyle:function(a){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},
is:function(){var a=this.getName();if("object"==typeof arguments[0])return!!arguments[0][a];for(var b=0;b<arguments.length;b++)if(arguments[b]==a)return!0;return!1},isEditable:function(a){var b=this.getName();return this.isReadOnly()||"none"==this.getComputedStyle("display")||"hidden"==this.getComputedStyle("visibility")||CKEDITOR.dtd.$nonEditable[b]||CKEDITOR.dtd.$empty[b]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount()?!1:!1!==a?(a=CKEDITOR.dtd[b]||
CKEDITOR.dtd.span,!(!a||!a["#"])):!0},isIdentical:function(a){var b=this.clone(0,1);a=a.clone(0,1);b.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);if(b.$.isEqualNode)return b.$.style.cssText=CKEDITOR.tools.normalizeCssText(b.$.style.cssText),a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText),b.$.isEqualNode(a.$);b=b.getOuterHtml();a=
a.getOuterHtml();if(CKEDITOR.env.ie&&9>CKEDITOR.env.version&&this.is("a")){var c=this.getParent();c.type==CKEDITOR.NODE_ELEMENT&&(c=c.clone(),c.setHtml(b),b=c.getHtml(),c.setHtml(a),a=c.getHtml())}return b==a},isVisible:function(){var a=(this.$.offsetHeight||this.$.offsetWidth)&&"hidden"!=this.getComputedStyle("visibility"),b,c;a&&CKEDITOR.env.webkit&&(b=this.getWindow(),!b.equals(CKEDITOR.document.getWindow())&&(c=b.$.frameElement)&&(a=(new CKEDITOR.dom.element(c)).isVisible()));return!!a},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return!1;
for(var a=this.getChildren(),b=0,c=a.count();b<c;b++){var f=a.getItem(b);if(f.type!=CKEDITOR.NODE_ELEMENT||!f.data("cke-bookmark"))if(f.type==CKEDITOR.NODE_ELEMENT&&!f.isEmptyInlineRemoveable()||f.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(f.getText()))return!1}return!0},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(){for(var a=this.$.attributes,b=0;b<a.length;b++){var c=a[b];switch(c.nodeName){case "class":if(this.getAttribute("class"))return!0;case "data-cke-expando":continue;
default:if(c.specified)return!0}}return!1}:function(){var a=this.$.attributes,b=a.length,c={"data-cke-expando":1,_moz_dirty:1};return 0<b&&(2<b||!c[a[0].nodeName]||2==b&&!c[a[1].nodeName])},hasAttribute:function(){function a(b){var c=this.$.attributes.getNamedItem(b);if("input"==this.getName())switch(b){case "class":return 0<this.$.className.length;case "checked":return!!this.$.checked;case "value":return b=this.getAttribute("type"),"checkbox"==b||"radio"==b?"on"!=this.$.value:!!this.$.value}return c?
c.specified:!1}return CKEDITOR.env.ie?8>CKEDITOR.env.version?function(b){return"name"==b?!!this.$.name:a.call(this,b)}:a:function(a){return!!this.$.attributes.getNamedItem(a)}}(),hide:function(){this.setStyle("display","none")},moveChildren:function(a,b){var c=this.$;a=a.$;if(c!=a){var f;if(b)for(;f=c.lastChild;)a.insertBefore(c.removeChild(f),a.firstChild);else for(;f=c.firstChild;)a.appendChild(c.removeChild(f))}},mergeSiblings:function(){function a(b,c,f){if(c&&c.type==CKEDITOR.NODE_ELEMENT){for(var d=
[];c.data("cke-bookmark")||c.isEmptyInlineRemoveable();)if(d.push(c),c=f?c.getNext():c.getPrevious(),!c||c.type!=CKEDITOR.NODE_ELEMENT)return;if(b.isIdentical(c)){for(var k=f?b.getLast():b.getFirst();d.length;)d.shift().move(b,!f);c.moveChildren(b,!f);c.remove();k&&k.type==CKEDITOR.NODE_ELEMENT&&k.mergeSiblings()}}}return function(b){if(!1===b||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a"))a(this,this.getNext(),!0),a(this,this.getPrevious())}}(),show:function(){this.setStyles({display:"",
visibility:""})},setAttribute:function(){var a=function(a,b){this.$.setAttribute(a,b);return this};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(b,c){"class"==b?this.$.className=c:"style"==b?this.$.style.cssText=c:"tabindex"==b?this.$.tabIndex=c:"checked"==b?this.$.checked=c:"contenteditable"==b?a.call(this,"contentEditable",c):a.apply(this,arguments);return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(b,c){if("src"==b&&c.match(/^http:\/\//))try{a.apply(this,
arguments)}catch(f){}else a.apply(this,arguments);return this}:a}(),setAttributes:function(a){for(var b in a)this.setAttribute(b,a[b]);return this},setValue:function(a){this.$.value=a;return this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){"class"==a?a="className":"tabindex"==a?a="tabIndex":"contenteditable"==a&&(a="contentEditable");this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=
0;b<a.length;b++)this.removeAttribute(a[b]);else for(b in a=a||this.getAttributes(),a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=this.$.style;if(b.removeProperty||"border"!=a&&"margin"!=a&&"padding"!=a)b.removeProperty?b.removeProperty(a):b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)),this.$.style.cssText||this.removeAttribute("style");else{var c=["top","left","right","bottom"],f;"border"==a&&(f=["color","style","width"]);for(var b=[],d=0;d<c.length;d++)if(f)for(var w=
0;w<f.length;w++)b.push([a,c[d],f[w]].join("-"));else b.push([a,c[d]].join("-"));for(a=0;a<b.length;a++)this.removeStyle(b[a])}},setStyle:function(a,b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b;return this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]);return this},setOpacity:function(a){CKEDITOR.env.ie&&9>CKEDITOR.env.version?(a=Math.round(100*a),this.setStyle("filter",100<=a?"":"progid:DXImageTransform.Microsoft.Alpha(opacity\x3d"+a+")")):this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select",
"none"));if(CKEDITOR.env.ie){this.setAttribute("unselectable","on");for(var a,b=this.getElementsByTag("*"),c=0,f=b.count();c<f;c++)a=b.getItem(c),a.setAttribute("unselectable","on")}},getPositionedAncestor:function(){for(var a=this;"html"!=a.getName();){if("static"!=a.getComputedStyle("position"))return a;a=a.getParent()}return null},getDocumentPosition:function(a){var b=0,c=0,f=this.getDocument(),d=f.getBody(),w="BackCompat"==f.$.compatMode;if(document.documentElement.getBoundingClientRect&&(CKEDITOR.env.ie?
8!==CKEDITOR.env.version:1)){var e=this.$.getBoundingClientRect(),g=f.$.documentElement,x=g.clientTop||d.$.clientTop||0,m=g.clientLeft||d.$.clientLeft||0,h=!0;CKEDITOR.env.ie&&(h=f.getDocumentElement().contains(this),f=f.getBody().contains(this),h=w&&f||!w&&h);h&&(CKEDITOR.env.webkit||CKEDITOR.env.ie&&12<=CKEDITOR.env.version?(b=d.$.scrollLeft||g.scrollLeft,c=d.$.scrollTop||g.scrollTop):(c=w?d.$:g,b=c.scrollLeft,c=c.scrollTop),b=e.left+b-m,c=e.top+c-x)}else for(x=this,m=null;x&&"body"!=x.getName()&&
"html"!=x.getName();){b+=x.$.offsetLeft-x.$.scrollLeft;c+=x.$.offsetTop-x.$.scrollTop;x.equals(this)||(b+=x.$.clientLeft||0,c+=x.$.clientTop||0);for(;m&&!m.equals(x);)b-=m.$.scrollLeft,c-=m.$.scrollTop,m=m.getParent();m=x;x=(e=x.$.offsetParent)?new CKEDITOR.dom.element(e):null}a&&(e=this.getWindow(),x=a.getWindow(),!e.equals(x)&&e.$.frameElement&&(a=(new CKEDITOR.dom.element(e.$.frameElement)).getDocumentPosition(a),b+=a.x,c+=a.y));document.documentElement.getBoundingClientRect||!CKEDITOR.env.gecko||
w||(b+=this.$.clientLeft?1:0,c+=this.$.clientTop?1:0);return{x:b,y:c}},scrollIntoView:function(a){var b=this.getParent();if(b){do if((b.$.clientWidth&&b.$.clientWidth<b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1),b.is("html")){var c=b.getWindow();try{var f=c.$.frameElement;f&&(b=new CKEDITOR.dom.element(f))}catch(d){}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var f,d,w,e;function g(b,c){/body|html/.test(a.getName())?
a.getWindow().$.scrollBy(b,c):(a.$.scrollLeft+=b,a.$.scrollTop+=c)}function x(a,b){var c={x:0,y:0};if(!a.is(h?"body":"html")){var f=a.$.getBoundingClientRect();c.x=f.left;c.y=f.top}f=a.getWindow();f.equals(b)||(f=x(CKEDITOR.dom.element.get(f.$.frameElement),b),c.x+=f.x,c.y+=f.y);return c}function m(a,b){return parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow());w=a.getDocument();var h="BackCompat"==w.$.compatMode;a instanceof CKEDITOR.dom.window&&(a=h?w.getBody():w.getDocumentElement());
CKEDITOR.env.webkit&&(w=this.getEditor(!1))&&(w._.previousScrollTop=null);w=a.getWindow();d=x(this,w);var z=x(a,w),I=this.$.offsetHeight;f=this.$.offsetWidth;var l=a.$.clientHeight,r=a.$.clientWidth;w=d.x-m(this,"left")-z.x||0;e=d.y-m(this,"top")-z.y||0;f=d.x+f+m(this,"right")-(z.x+r)||0;d=d.y+I+m(this,"bottom")-(z.y+l)||0;(0>e||0<d)&&g(0,!0===b?e:!1===b?d:0>e?e:d);c&&(0>w||0<f)&&g(0>w?w:f,0)},setState:function(a,b,c){b=b||"cke";switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on");this.removeClass(b+
"_off");this.removeClass(b+"_disabled");c&&this.setAttribute("aria-pressed",!0);c&&this.removeAttribute("aria-disabled");break;case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+"_disabled");this.removeClass(b+"_off");this.removeClass(b+"_on");c&&this.setAttribute("aria-disabled",!0);c&&this.removeAttribute("aria-pressed");break;default:this.addClass(b+"_off"),this.removeClass(b+"_on"),this.removeClass(b+"_disabled"),c&&this.removeAttribute("aria-pressed"),c&&this.removeAttribute("aria-disabled")}},
getFrameDocument:function(){var a=this.$;try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)},copyAttributes:function(a,b){var c=this.$.attributes;b=b||{};for(var f=0;f<c.length;f++){var d=c[f],w=d.nodeName.toLowerCase(),e;if(!(w in b))if("checked"==w&&(e=this.getAttribute(w)))a.setAttribute(w,e);else if(!CKEDITOR.env.ie||this.hasAttribute(w))e=this.getAttribute(w),null===e&&(e=d.nodeValue),a.setAttribute(w,e)}""!==this.$.style.cssText&&
(a.$.style.cssText=this.$.style.cssText)},renameNode:function(a){if(this.getName()!=a){var b=this.getDocument();a=new CKEDITOR.dom.element(a,b);this.copyAttributes(a);this.moveChildren(a);this.getParent(!0)&&this.$.parentNode.replaceChild(a.$,this.$);a.$["data-cke-expando"]=this.$["data-cke-expando"];this.$=a.$;delete this.getName}},getChild:function(){function a(b,c){var f=b.childNodes;if(0<=c&&c<f.length)return f[c]}return function(b){var c=this.$;if(b.slice)for(b=b.slice();0<b.length&&c;)c=a(c,
b.shift());else c=a(c,b);return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return this.$.childNodes.length},disableContextMenu:function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT&&b.hasClass("cke_enable_context_menu")}this.on("contextmenu",function(b){b.data.getTarget().getAscendant(a,!0)||b.data.preventDefault()})},getDirection:function(a){return a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||
"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a;if(void 0===b)return this.getAttribute(a);!1===b?this.removeAttribute(a):this.setAttribute(a,b);return null},getEditor:function(a){var b=CKEDITOR.instances,c,f,d;a=a||void 0===a;for(c in b)if(f=b[c],f.element.equals(this)&&f.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO||!a&&(d=f.editable())&&(d.equals(this)||d.contains(this)))return f;return null},find:function(a){var c=d(this);a=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(b(this,
a)));c();return a},findOne:function(a){var c=d(this);a=this.$.querySelector(b(this,a));c();return a?new CKEDITOR.dom.element(a):null},forEach:function(a,b,c){if(!(c||b&&this.type!=b))var f=a(this);if(!1!==f){c=this.getChildren();for(var d=0;d<c.count();d++)f=c.getItem(d),f.type==CKEDITOR.NODE_ELEMENT?f.forEach(a,b):b&&f.type!=b||a(f)}}});var h={width:["border-left-width","border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};
CKEDITOR.dom.element.prototype.setSize=function(a,b,d){"number"==typeof b&&(!d||CKEDITOR.env.ie&&CKEDITOR.env.quirks||(b-=c.call(this,a)),this.setStyle(a,b+"px"))};CKEDITOR.dom.element.prototype.getSize=function(a,b){var d=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],this.$["client"+CKEDITOR.tools.capitalize(a)])||0;b&&(d-=c.call(this,a));return d}})();CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document;this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a};
CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$;a.parentNode.insertBefore(this.$,a.nextSibling)},getHtml:function(){var a=new CKEDITOR.dom.element("div");this.clone(1,1).appendTo(a);return a.getHtml().replace(/\s*data-cke-expando=".*?"/g,"")}},!0,{append:1,appendBogus:1,clone:1,getFirst:1,getHtml:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,
insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});
(function(){function a(a,b){var c=this.range;if(this._.end)return null;if(!this._.start){this._.start=1;if(c.collapsed)return this.end(),null;c.optimize()}var f,d=c.startContainer;f=c.endContainer;var e=c.startOffset,D=c.endOffset,g,l=this.guard,r=this.type,J=a?"getPreviousSourceNode":"getNextSourceNode";if(!a&&!this._.guardLTR){var H=f.type==CKEDITOR.NODE_ELEMENT?f:f.getParent(),k=f.type==CKEDITOR.NODE_ELEMENT?f.getChild(D):f.getNext();this._.guardLTR=function(a,b){return(!b||!H.equals(a))&&(!k||
!a.equals(k))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}if(a&&!this._.guardRTL){var u=d.type==CKEDITOR.NODE_ELEMENT?d:d.getParent(),y=d.type==CKEDITOR.NODE_ELEMENT?e?d.getChild(e-1):null:d.getPrevious();this._.guardRTL=function(a,b){return(!b||!u.equals(a))&&(!y||!a.equals(y))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}var v=a?this._.guardRTL:this._.guardLTR;g=l?function(a,b){return!1===v(a,b)?!1:l(a,b)}:v;this.current?f=this.current[J](!1,r,g):(a?f.type==CKEDITOR.NODE_ELEMENT&&
(f=0<D?f.getChild(D-1):!1===g(f,!0)?null:f.getPreviousSourceNode(!0,r,g)):(f=d,f.type==CKEDITOR.NODE_ELEMENT&&((f=f.getChild(e))||(f=!1===g(d,!0)?null:d.getNextSourceNode(!0,r,g)))),f&&!1===g(f)&&(f=null));for(;f&&!this._.end;){this.current=f;if(!this.evaluator||!1!==this.evaluator(f)){if(!b)return f}else if(b&&this.evaluator)return!1;f=f[J](!1,r,g)}this.end();return this.current=null}function d(b){for(var c,f=null;c=a.call(this,b);)f=c;return f}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(a){this.range=
a;this._={}},proto:{end:function(){this._.end=1},next:function(){return a.call(this)},previous:function(){return a.call(this,1)},checkForward:function(){return!1!==a.call(this,0,1)},checkBackward:function(){return!1!==a.call(this,1,1)},lastForward:function(){return d.call(this)},lastBackward:function(){return d.call(this,1)},reset:function(){delete this.current;this._={}}}});var b={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,
"table-column":1,"table-cell":1,"table-caption":1},c={absolute:1,fixed:1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return"none"!=this.getComputedStyle("float")||this.getComputedStyle("position")in c||!b[this.getComputedStyle("display")]?!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a)):!0};CKEDITOR.dom.walker.blockBoundary=function(a){return function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}};CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})};
CKEDITOR.dom.walker.bookmark=function(a,b){function c(a){return a&&a.getName&&"span"==a.getName()&&a.data("cke-bookmark")}return function(f){var d,e;d=f&&f.type!=CKEDITOR.NODE_ELEMENT&&(e=f.getParent())&&c(e);d=a?d:d||c(f);return!!(b^d)}};CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var c;b&&b.type==CKEDITOR.NODE_TEXT&&(c=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&b.getText()==CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE);return!!(a^c)}};CKEDITOR.dom.walker.invisible=
function(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.env.webkit?1:0;return function(f){b(f)?f=1:(f.type==CKEDITOR.NODE_TEXT&&(f=f.getParent()),f=f.$.offsetWidth<=c);return!!(a^f)}};CKEDITOR.dom.walker.nodeType=function(a,b){return function(c){return!!(b^c.type==a)}};CKEDITOR.dom.walker.bogus=function(a){function b(a){return!g(a)&&!h(a)}return function(c){var f=CKEDITOR.env.needsBrFiller?c.is&&c.is("br"):c.getText&&e.test(c.getText());f&&(f=c.getParent(),c=c.getNext(b),f=f.isBlockBoundary()&&
(!c||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary()));return!!(a^f)}};CKEDITOR.dom.walker.temp=function(a){return function(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());b=b&&b.hasAttribute("data-cke-temp");return!!(a^b)}};var e=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,g=CKEDITOR.dom.walker.whitespaces(),h=CKEDITOR.dom.walker.bookmark(),k=CKEDITOR.dom.walker.temp(),n=function(a){return h(a)||g(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty)};CKEDITOR.dom.walker.ignored=
function(a){return function(b){b=g(b)||h(b)||k(b);return!!(a^b)}};var q=CKEDITOR.dom.walker.ignored();CKEDITOR.dom.walker.empty=function(a){return function(b){for(var c=0,f=b.getChildCount();c<f;++c)if(!q(b.getChild(c)))return!!a;return!a}};var f=CKEDITOR.dom.walker.empty(),D=CKEDITOR.dom.walker.validEmptyBlockContainers=CKEDITOR.tools.extend(function(a){var b={},c;for(c in a)CKEDITOR.dtd[c]["#"]&&(b[c]=1);return b}(CKEDITOR.dtd.$block),{caption:1,td:1,th:1});CKEDITOR.dom.walker.editable=function(a){return function(b){b=
q(b)?!1:b.type==CKEDITOR.NODE_TEXT||b.type==CKEDITOR.NODE_ELEMENT&&(b.is(CKEDITOR.dtd.$inline)||b.is("hr")||"false"==b.getAttribute("contenteditable")||!CKEDITOR.env.needsBrFiller&&b.is(D)&&f(b))?!0:!1;return!!(a^b)}};CKEDITOR.dom.element.prototype.getBogus=function(){var a=this;do a=a.getPreviousSourceNode();while(n(a));return a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&e.test(a.getText()))?a:!1}})();
CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=null;this.collapsed=!0;var d=a instanceof CKEDITOR.dom.document;this.document=d?a:a.getDocument();this.root=d?a.getBody():a};
(function(){function a(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset}function d(a,b,c,d,e){function g(a,b,c,f){var X=c?a.getPrevious():a.getNext();if(f&&h)return X;l||f?b.append(a.clone(!0,e),c):(a.remove(),q&&b.append(a,c));return X}function m(){var a,b,c,f=Math.min(O.length,p.length);for(a=0;a<f;a++)if(b=O[a],c=p[a],!b.equals(c))return a;return a-1}function k(){var b=C-1,c=v&&B&&!r.equals(J);b<t-1||b<F-1||c?(c?a.moveToPosition(J,
CKEDITOR.POSITION_BEFORE_START):F==b+1&&y?a.moveToPosition(p[b],CKEDITOR.POSITION_BEFORE_END):a.moveToPosition(p[b+1],CKEDITOR.POSITION_BEFORE_START),d&&(b=O[b+1])&&b.type==CKEDITOR.NODE_ELEMENT&&(c=CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e',a.document),c.insertAfter(b),b.mergeSiblings(!1),a.moveToBookmark({startNode:c}))):a.collapse(!0)}a.optimizeBookmark();var h=0===b,q=1==b,l=2==b;b=l||q;var r=a.startContainer,J=a.endContainer,
H=a.startOffset,E=a.endOffset,u,y,v,B,L,n;if(l&&J.type==CKEDITOR.NODE_TEXT&&(r.equals(J)||r.type===CKEDITOR.NODE_ELEMENT&&r.getFirst().equals(J)))c.append(a.document.createText(J.substring(H,E)));else{J.type==CKEDITOR.NODE_TEXT?l?n=!0:J=J.split(E):0<J.getChildCount()?E>=J.getChildCount()?(J=J.getChild(E-1),y=!0):J=J.getChild(E):B=y=!0;r.type==CKEDITOR.NODE_TEXT?l?L=!0:r.split(H):0<r.getChildCount()?0===H?(r=r.getChild(H),u=!0):r=r.getChild(H-1):v=u=!0;for(var O=r.getParents(),p=J.getParents(),C=m(),
t=O.length-1,F=p.length-1,N=c,X,Y,U,ea=-1,P=C;P<=t;P++){Y=O[P];U=Y.getNext();for(P!=t||Y.equals(p[P])&&t<F?b&&(X=N.append(Y.clone(0,e))):u?g(Y,N,!1,v):L&&N.append(a.document.createText(Y.substring(H)));U;){if(U.equals(p[P])){ea=P;break}U=g(U,N)}N=X}N=c;for(P=C;P<=F;P++)if(c=p[P],U=c.getPrevious(),c.equals(O[P]))b&&(N=N.getChild(0));else{P!=F||c.equals(O[P])&&F<t?b&&(X=N.append(c.clone(0,e))):y?g(c,N,!1,B):n&&N.append(a.document.createText(c.substring(0,E)));if(P>ea)for(;U;)U=g(U,N,!0);N=X}l||k()}}
function b(){var a=!1,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(!0),d=CKEDITOR.dom.walker.bogus();return function(e){return c(e)||b(e)?!0:d(e)&&!a?a=!0:e.type==CKEDITOR.NODE_TEXT&&(e.hasAscendant("pre")||CKEDITOR.tools.trim(e.getText()).length)||e.type==CKEDITOR.NODE_ELEMENT&&!e.is(g)?!1:!0}}function c(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(1);return function(d){return c(d)||b(d)?!0:!a&&h(d)||d.type==CKEDITOR.NODE_ELEMENT&&d.is(CKEDITOR.dtd.$removeEmpty)}}
function e(a){return function(){var b;return this[a?"getPreviousNode":"getNextNode"](function(a){!b&&q(a)&&(b=a);return n(a)&&!(h(a)&&a.equals(b))})}}var g={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},h=CKEDITOR.dom.walker.bogus(),k=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,n=CKEDITOR.dom.walker.editable(),q=CKEDITOR.dom.walker.ignored(!0);CKEDITOR.dom.range.prototype={clone:function(){var a=
new CKEDITOR.dom.range(this.root);a._setStartContainer(this.startContainer);a.startOffset=this.startOffset;a._setEndContainer(this.endContainer);a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},collapse:function(a){a?(this._setEndContainer(this.startContainer),this.endOffset=this.startOffset):(this._setStartContainer(this.endContainer),this.startOffset=this.endOffset);this.collapsed=!0},cloneContents:function(a){var b=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||
d(this,2,b,!1,"undefined"==typeof a?!0:a);return b},deleteContents:function(a){this.collapsed||d(this,0,null,a)},extractContents:function(a,b){var c=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||d(this,1,c,a,"undefined"==typeof b?!0:b);return c},createBookmark:function(a){var b,c,d,e,g=this.collapsed;b=this.document.createElement("span");b.data("cke-bookmark",1);b.setStyle("display","none");b.setHtml("\x26nbsp;");a&&(d="cke_bm_"+CKEDITOR.tools.getNextNumber(),b.setAttribute("id",
d+(g?"C":"S")));g||(c=b.clone(),c.setHtml("\x26nbsp;"),a&&c.setAttribute("id",d+"E"),e=this.clone(),e.collapse(),e.insertNode(c));e=this.clone();e.collapse(!0);e.insertNode(b);c?(this.setStartAfter(b),this.setEndBefore(c)):this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END);return{startNode:a?d+(g?"C":"S"):b,endNode:a?d+"E":c,serializable:a,collapsed:g}},createBookmark2:function(){function a(b){var f=b.container,d=b.offset,e;e=f;var g=d;e=e.type!=CKEDITOR.NODE_ELEMENT||0===g||g==e.getChildCount()?
0:e.getChild(g-1).type==CKEDITOR.NODE_TEXT&&e.getChild(g).type==CKEDITOR.NODE_TEXT;e&&(f=f.getChild(d-1),d=f.getLength());if(f.type==CKEDITOR.NODE_ELEMENT&&0<d){a:{for(e=f;d--;)if(g=e.getChild(d).getIndex(!0),0<=g){d=g;break a}d=-1}d+=1}if(f.type==CKEDITOR.NODE_TEXT){e=f;for(g=0;(e=e.getPrevious())&&e.type==CKEDITOR.NODE_TEXT;)g+=e.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE,"").length;e=g;f.getText()?d+=e:(g=f.getPrevious(c),e?(d=e,f=g?g.getNext():f.getParent().getFirst()):(f=
f.getParent(),d=g?g.getIndex(!0)+1:0))}b.container=f;b.offset=d}function b(a,c){var f=c.getCustomData("cke-fillingChar");if(f){var d=a.container;f.equals(d)&&(a.offset-=CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length,0>=a.offset&&(a.offset=d.getIndex(),a.container=d.getParent()))}}var c=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,!0);return function(c){var d=this.collapsed,e={container:this.startContainer,offset:this.startOffset},m={container:this.endContainer,offset:this.endOffset};c&&(a(e),
b(e,this.root),d||(a(m),b(m,this.root)));return{start:e.container.getAddress(c),end:d?null:m.container.getAddress(c),startOffset:e.offset,endOffset:m.offset,normalized:c,collapsed:d,is2:!0}}}(),moveToBookmark:function(a){if(a.is2){var b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,d=a.end&&this.document.getByAddress(a.end,a.normalized);a=a.endOffset;this.setStart(b,c);d?this.setEnd(d,a):this.collapse(!0)}else b=(c=a.serializable)?this.document.getById(a.startNode):a.startNode,
a=c?this.document.getById(a.endNode):a.endNode,this.setStartBefore(b),b.remove(),a?(this.setEndBefore(a),a.remove()):this.collapse(!0)},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset,e;if(a.type==CKEDITOR.NODE_ELEMENT)if(e=a.getChildCount(),e>c)a=a.getChild(c);else if(1>e)a=a.getPreviousSourceNode();else{for(a=a.$;a.lastChild;)a=a.lastChild;a=new CKEDITOR.dom.node(a);a=a.getNextSourceNode()||a}if(b.type==CKEDITOR.NODE_ELEMENT)if(e=b.getChildCount(),
e>d)b=b.getChild(d).getPreviousSourceNode(!0);else if(1>e)b=b.getPreviousSourceNode();else{for(b=b.$;b.lastChild;)b=b.lastChild;b=new CKEDITOR.dom.node(b)}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var c=this.startContainer,d=this.endContainer,c=c.equals(d)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-1?c.getChild(this.startOffset):c:c.getCommonAncestor(d);return b&&!c.is?c.getParent():c},optimize:function(){var a=
this.startContainer,b=this.startOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a.is&&a.is("span")&&a.data("cke-bookmark")&&this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START);b&&b.is&&b.is("span")&&b.data("cke-bookmark")&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},
trim:function(a,b){var c=this.startContainer,d=this.startOffset,e=this.collapsed;if((!a||e)&&c&&c.type==CKEDITOR.NODE_TEXT){if(d)if(d>=c.getLength())d=c.getIndex()+1,c=c.getParent();else{var g=c.split(d),d=c.getIndex()+1,c=c.getParent();this.startContainer.equals(this.endContainer)?this.setEnd(g,this.endOffset-this.startOffset):c.equals(this.endContainer)&&(this.endOffset+=1)}else d=c.getIndex(),c=c.getParent();this.setStart(c,d);if(e){this.collapse(!0);return}}c=this.endContainer;d=this.endOffset;
b||e||!c||c.type!=CKEDITOR.NODE_TEXT||(d?(d>=c.getLength()||c.split(d),d=c.getIndex()+1):d=c.getIndex(),c=c.getParent(),this.setEnd(c,d))},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var d=new RegExp(/[^\s\ufeff]/);switch(a){case CKEDITOR.ENLARGE_INLINE:var e=1;case CKEDITOR.ENLARGE_ELEMENT:var g=function(a,b){var c=new CKEDITOR.dom.range(k);c.setStart(a,b);c.setEndAt(k,CKEDITOR.POSITION_BEFORE_END);var c=new CKEDITOR.dom.walker(c),
f;for(c.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())};f=c.next();){if(f.type!=CKEDITOR.NODE_TEXT)return!1;u=f!=a?f.getText():f.substring(b);if(d.test(u))return!1}return!0};if(this.collapsed)break;var m=this.getCommonAncestor(),k=this.root,h,q,l,r,J,H=!1,E,u;E=this.startContainer;var y=this.startOffset;E.type==CKEDITOR.NODE_TEXT?(y&&(E=!CKEDITOR.tools.trim(E.substring(0,y)).length&&E,H=!!E),E&&((r=E.getPrevious())||(l=E.getParent()))):(y&&(r=E.getChild(y-1)||E.getLast()),
r||(l=E));for(l=c(l);l||r;){if(l&&!r){!J&&l.equals(m)&&(J=!0);if(e?l.isBlockBoundary():!k.contains(l))break;H&&"inline"==l.getComputedStyle("display")||(H=!1,J?h=l:this.setStartBefore(l));r=l.getPrevious()}for(;r;)if(E=!1,r.type==CKEDITOR.NODE_COMMENT)r=r.getPrevious();else{if(r.type==CKEDITOR.NODE_TEXT)u=r.getText(),d.test(u)&&(r=null),E=/[\s\ufeff]$/.test(u);else if((r.$.offsetWidth>(CKEDITOR.env.webkit?1:0)||b&&r.is("br"))&&!r.data("cke-bookmark"))if(H&&CKEDITOR.dtd.$removeEmpty[r.getName()]){u=
r.getText();if(d.test(u))r=null;else for(var y=r.$.getElementsByTagName("*"),v=0,B;B=y[v++];)if(!CKEDITOR.dtd.$removeEmpty[B.nodeName.toLowerCase()]){r=null;break}r&&(E=!!u.length)}else r=null;E&&(H?J?h=l:l&&this.setStartBefore(l):H=!0);if(r){E=r.getPrevious();if(!l&&!E){l=r;r=null;break}r=E}else l=null}l&&(l=c(l.getParent()))}E=this.endContainer;y=this.endOffset;l=r=null;J=H=!1;E.type==CKEDITOR.NODE_TEXT?CKEDITOR.tools.trim(E.substring(y)).length?H=!0:(H=!E.getLength(),y==E.getLength()?(r=E.getNext())||
(l=E.getParent()):g(E,y)&&(l=E.getParent())):(r=E.getChild(y))||(l=E);for(;l||r;){if(l&&!r){!J&&l.equals(m)&&(J=!0);if(e?l.isBlockBoundary():!k.contains(l))break;H&&"inline"==l.getComputedStyle("display")||(H=!1,J?q=l:l&&this.setEndAfter(l));r=l.getNext()}for(;r;){E=!1;if(r.type==CKEDITOR.NODE_TEXT)u=r.getText(),g(r,0)||(r=null),E=/^[\s\ufeff]/.test(u);else if(r.type==CKEDITOR.NODE_ELEMENT){if((0<r.$.offsetWidth||b&&r.is("br"))&&!r.data("cke-bookmark"))if(H&&CKEDITOR.dtd.$removeEmpty[r.getName()]){u=
r.getText();if(d.test(u))r=null;else for(y=r.$.getElementsByTagName("*"),v=0;B=y[v++];)if(!CKEDITOR.dtd.$removeEmpty[B.nodeName.toLowerCase()]){r=null;break}r&&(E=!!u.length)}else r=null}else E=1;E&&H&&(J?q=l:this.setEndAfter(l));if(r){E=r.getNext();if(!l&&!E){l=r;r=null;break}r=E}else l=null}l&&(l=c(l.getParent()))}h&&q&&(m=h.contains(q)?q:h,this.setStartBefore(m),this.setEndAfter(m));break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:l=new CKEDITOR.dom.range(this.root);
k=this.root;l.setStartAt(k,CKEDITOR.POSITION_AFTER_START);l.setEnd(this.startContainer,this.startOffset);l=new CKEDITOR.dom.walker(l);var L,n,O=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),p=null,C=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&"false"==a.getAttribute("contenteditable"))if(p){if(p.equals(a)){p=null;return}}else p=a;else if(p)return;var b=O(a);b||(L=a);return b},e=function(a){var b=C(a);!b&&a.is&&a.is("br")&&(n=a);return b};l.guard=C;l=l.lastBackward();
L=L||k;this.setStartAt(L,!L.is("br")&&(!l&&this.checkStartOfBlock()||l&&L.contains(l))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){l=this.clone();l=new CKEDITOR.dom.walker(l);var t=CKEDITOR.dom.walker.whitespaces(),F=CKEDITOR.dom.walker.bookmark();l.evaluator=function(a){return!t(a)&&!F(a)};if((l=l.previous())&&l.type==CKEDITOR.NODE_ELEMENT&&l.is("br"))break}l=this.clone();l.collapse();l.setEndAt(k,CKEDITOR.POSITION_BEFORE_END);l=new CKEDITOR.dom.walker(l);
l.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?e:C;L=p=n=null;l=l.lastForward();L=L||k;this.setEndAt(L,!l&&this.checkEndOfBlock()||l&&L.contains(l)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);n&&this.setEndAfter(n)}},shrink:function(a,b,c){var d="boolean"===typeof c?c:c&&"boolean"===typeof c.shrinkOnBlockBoundary?c.shrinkOnBlockBoundary:!0,e=c&&c.skipBogus;if(!this.collapsed){a=a||CKEDITOR.SHRINK_TEXT;var g=this.clone(),m=this.startContainer,k=this.endContainer,h=this.startOffset,
q=this.endOffset,l=c=1;m&&m.type==CKEDITOR.NODE_TEXT&&(h?h>=m.getLength()?g.setStartAfter(m):(g.setStartBefore(m),c=0):g.setStartBefore(m));k&&k.type==CKEDITOR.NODE_TEXT&&(q?q>=k.getLength()?g.setEndAfter(k):(g.setEndAfter(k),l=0):g.setEndBefore(k));var g=new CKEDITOR.dom.walker(g),r=CKEDITOR.dom.walker.bookmark(),J=CKEDITOR.dom.walker.bogus();g.evaluator=function(b){return b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)};var H;g.guard=function(b,c){if(e&&J(b)||r(b))return!0;
if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||c&&b.equals(H)||!1===d&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||b.type==CKEDITOR.NODE_ELEMENT&&b.hasAttribute("contenteditable"))return!1;c||b.type!=CKEDITOR.NODE_ELEMENT||(H=b);return!0};c&&(m=g[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(m,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);l&&(g.reset(),(g=g[a==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(g,b?CKEDITOR.POSITION_BEFORE_END:
CKEDITOR.POSITION_AFTER_END));return!(!c&&!l)}},insertNode:function(a){this.optimizeBookmark();this.trim(!1,!0);var b=this.startContainer,c=b.getChild(this.startOffset);c?a.insertBefore(c):b.append(a);a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(!0)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset);this.setEnd(a.endContainer,a.endOffset)},selectNodeContents:function(a){this.setStart(a,
0);this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(b,c){b.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[b.getName()]&&(c=b.getIndex(),b=b.getParent());this._setStartContainer(b);this.startOffset=c;this.endContainer||(this._setEndContainer(b),this.endOffset=c);a(this)},setEnd:function(b,c){b.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[b.getName()]&&(c=b.getIndex()+1,b=b.getParent());this._setEndContainer(b);this.endOffset=c;this.startContainer||
(this._setStartContainer(b),this.startOffset=c);a(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setStart(b,0);break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setStart(b,
b.getLength()):this.setStart(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(b);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(b)}a(this)},setEndAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setEnd(b,0);break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setEnd(b,b.getLength()):this.setEnd(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(b);break;case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(b)}a(this)},
fixBlock:function(a,b){var c=this.createBookmark(),d=this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(d);d.trim();this.insertNode(d);var e=d.getBogus();e&&e.remove();d.appendBogus();this.moveToBookmark(c);return d},splitBlock:function(a,b){var c=new CKEDITOR.dom.elementPath(this.startContainer,this.root),d=new CKEDITOR.dom.elementPath(this.endContainer,this.root),e=c.block,g=d.block,m=null;if(!c.blockLimit.equals(d.blockLimit))return null;
"br"!=a&&(e||(e=this.fixBlock(!0,a),g=(new CKEDITOR.dom.elementPath(this.endContainer,this.root)).block),g||(g=this.fixBlock(!1,a)));c=e&&this.checkStartOfBlock();d=g&&this.checkEndOfBlock();this.deleteContents();e&&e.equals(g)&&(d?(m=new CKEDITOR.dom.elementPath(this.startContainer,this.root),this.moveToPosition(g,CKEDITOR.POSITION_AFTER_END),g=null):c?(m=new CKEDITOR.dom.elementPath(this.startContainer,this.root),this.moveToPosition(e,CKEDITOR.POSITION_BEFORE_START),e=null):(g=this.splitElement(e,
b||!1),e.is("ul","ol")||e.appendBogus()));return{previousBlock:e,nextBlock:g,wasStartOfBlock:c,wasEndOfBlock:d,elementPath:m}},splitElement:function(a,b){if(!this.collapsed)return null;this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);var c=this.extractContents(!1,b||!1),d=a.clone(!1,b||!1);c.appendTo(d);d.insertAfter(a);this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);return d},removeEmptyBlocksAtEnd:function(){function a(d){return function(a){return b(a)||c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable()||
d.is("table")&&a.is("caption")?!1:!0}}var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(!1);return function(b){for(var c=this.createBookmark(),d=this[b?"endPath":"startPath"](),e=d.block||d.blockLimit,g;e&&!e.equals(d.root)&&!e.getFirst(a(e));)g=e.getParent(),this[b?"setEndAt":"setStartAt"](e,CKEDITOR.POSITION_AFTER_END),e.remove(1),e=g;this.moveToBookmark(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,
this.root)},checkBoundaryOfElement:function(a,b){var d=b==CKEDITOR.START,e=this.clone();e.collapse(d);e[d?"setStartAt":"setEndAt"](a,d?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);e=new CKEDITOR.dom.walker(e);e.evaluator=c(d);return e[d?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var a=this.startContainer,c=this.startOffset;CKEDITOR.env.ie&&c&&a.type==CKEDITOR.NODE_TEXT&&(a=CKEDITOR.tools.ltrim(a.substring(0,c)),k.test(a)&&this.trim(0,1));this.trim();a=new CKEDITOR.dom.elementPath(this.startContainer,
this.root);c=this.clone();c.collapse(!0);c.setStartAt(a.block||a.blockLimit,CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(c);a.evaluator=b();return a.checkBackward()},checkEndOfBlock:function(){var a=this.endContainer,c=this.endOffset;CKEDITOR.env.ie&&a.type==CKEDITOR.NODE_TEXT&&(a=CKEDITOR.tools.rtrim(a.substring(c)),k.test(a)&&this.trim(1,0));this.trim();a=new CKEDITOR.dom.elementPath(this.endContainer,this.root);c=this.clone();c.collapse(!1);c.setEndAt(a.block||a.blockLimit,CKEDITOR.POSITION_BEFORE_END);
a=new CKEDITOR.dom.walker(c);a.evaluator=b();return a.checkForward()},getPreviousNode:function(a,b,c){var d=this.clone();d.collapse(1);d.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.previous()},getNextNode:function(a,b,c){var d=this.clone();d.collapse();d.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.next()},checkReadOnly:function(){function a(b,c){for(;b;){if(b.type==
CKEDITOR.NODE_ELEMENT){if("false"==b.getAttribute("contentEditable")&&!b.data("cke-editable"))return 0;if(b.is("html")||"true"==b.getAttribute("contentEditable")&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var b=this.startContainer,c=this.endContainer;return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(!1))return this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START),
!0;for(var c=0;a;){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&this.checkEndOfBlock()&&k.test(a.getText())?this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);c=1;break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable())this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START),c=1;else if(b&&a.is("br")&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);
else if("false"==a.getAttribute("contenteditable")&&a.is(CKEDITOR.dtd.$block))return this.setStartBefore(a),this.setEndAfter(a),!0;var d=a,e=c,g=void 0;d.type==CKEDITOR.NODE_ELEMENT&&d.isEditable(!1)&&(g=d[b?"getLast":"getFirst"](q));e||g||(g=d[b?"getPrevious":"getNext"](q));a=g}return!!c},moveToClosestEditablePosition:function(a,b){var c,d=0,e,g,m=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];a?(c=new CKEDITOR.dom.range(this.root),c.moveToPosition(a,m[b?0:1])):c=this.clone();if(a&&
!a.is(CKEDITOR.dtd.$block))d=1;else if(e=c[b?"getNextEditableNode":"getPreviousEditableNode"]())d=1,(g=e.type==CKEDITOR.NODE_ELEMENT)&&e.is(CKEDITOR.dtd.$block)&&"false"==e.getAttribute("contenteditable")?(c.setStartAt(e,CKEDITOR.POSITION_BEFORE_START),c.setEndAt(e,CKEDITOR.POSITION_AFTER_END)):!CKEDITOR.env.needsBrFiller&&g&&e.is(CKEDITOR.dom.walker.validEmptyBlockContainers)?(c.setEnd(e,0),c.collapse()):c.moveToPosition(e,m[b?1:0]);d&&this.moveToRange(c);return!!d},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},
moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,!0)},getEnclosedNode:function(){var a=this.clone();a.optimize();if(a.startContainer.type!=CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var a=new CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(!1,!0),c=CKEDITOR.dom.walker.whitespaces(!0);a.evaluator=function(a){return c(a)&&b(a)};var d=a.next();a.reset();return d&&d.equals(a.previous())?d:null},getTouchedStartNode:function(){var a=this.startContainer;
return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||a},getTouchedEndNode:function(){var a=this.endContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:e(),getPreviousEditableNode:e(1),_getTableElement:function(a){a=a||{td:1,th:1,tr:1,tbody:1,thead:1,tfoot:1,table:1};var b=this.startContainer,c=this.endContainer,d=b.getAscendant("table",!0),e=c.getAscendant("table",!0);return CKEDITOR.env.safari&&d&&c.equals(this.root)?
b.getAscendant(a,!0):this.getEnclosedNode()?this.getEnclosedNode().getAscendant(a,!0):d&&e&&(d.equals(e)||d.contains(e)||e.contains(d))?b.getAscendant(a,!0):null},scrollIntoView:function(){var a=new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",this.document),b,c,d,e=this.clone();e.optimize();(d=e.startContainer.type==CKEDITOR.NODE_TEXT)?(c=e.startContainer.getText(),b=e.startContainer.split(e.startOffset),a.insertAfter(e.startContainer)):e.insertNode(a);a.scrollIntoView();
d&&(e.startContainer.setText(c),b.remove());a.remove()},_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=a},_find:function(a,b){var c=this.getCommonAncestor(),d=this.getBoundaryNodes(),e=[],g,m,k,h;if(c&&c.find)for(m=c.find(a),g=0;g<m.count();g++)if(c=m.getItem(g),b||!c.isReadOnly())k=c.getPosition(d.startNode)&CKEDITOR.POSITION_FOLLOWING||d.startNode.equals(c),h=c.getPosition(d.endNode)&CKEDITOR.POSITION_PRECEDING+CKEDITOR.POSITION_IS_CONTAINED||
d.endNode.equals(c),k&&h&&e.push(c);return e}};CKEDITOR.dom.range.mergeRanges=function(a){return CKEDITOR.tools.array.reduce(a,function(a,b){var c=a[a.length-1],d=!1;b=b.clone();b.enlarge(CKEDITOR.ENLARGE_ELEMENT);if(c){var e=new CKEDITOR.dom.range(b.root),d=new CKEDITOR.dom.walker(e),f=CKEDITOR.dom.walker.whitespaces();e.setStart(c.endContainer,c.endOffset);e.setEnd(b.startContainer,b.startOffset);for(e=d.next();f(e)||b.endContainer.equals(e);)e=d.next();d=!e}d?c.setEnd(b.endContainer,b.endOffset):
a.push(b);return a},[])}})();CKEDITOR.POSITION_AFTER_START=1;CKEDITOR.POSITION_BEFORE_END=2;CKEDITOR.POSITION_BEFORE_START=3;CKEDITOR.POSITION_AFTER_END=4;CKEDITOR.ENLARGE_ELEMENT=1;CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;CKEDITOR.ENLARGE_INLINE=4;CKEDITOR.START=1;CKEDITOR.END=2;CKEDITOR.SHRINK_ELEMENT=1;CKEDITOR.SHRINK_TEXT=2;"use strict";
(function(){function a(a){1>arguments.length||(this.range=a,this.forceBrBreak=0,this.enlargeBr=1,this.enforceRealBlocks=0,this._||(this._={}))}function d(a){var b=[];a.forEach(function(a){if("true"==a.getAttribute("contenteditable"))return b.push(a),!1},CKEDITOR.NODE_ELEMENT,!0);return b}function b(a,c,e,g){a:{null==g&&(g=d(e));for(var k;k=g.shift();)if(k.getDtd().p){g={element:k,remaining:g};break a}g=null}if(!g)return 0;if((k=CKEDITOR.filter.instances[g.element.data("cke-filter")])&&!k.check(c))return b(a,
c,e,g.remaining);c=new CKEDITOR.dom.range(g.element);c.selectNodeContents(g.element);c=c.createIterator();c.enlargeBr=a.enlargeBr;c.enforceRealBlocks=a.enforceRealBlocks;c.activeFilter=c.filter=k;a._.nestedEditable={element:g.element,container:e,remaining:g.remaining,iterator:c};return 1}function c(a,b,c){if(!b)return!1;a=a.clone();a.collapse(!c);return a.checkBoundaryOfElement(b,c?CKEDITOR.START:CKEDITOR.END)}var e=/^[\r\n\t ]+$/,g=CKEDITOR.dom.walker.bookmark(!1,!0),h=CKEDITOR.dom.walker.whitespaces(!0),
k=function(a){return g(a)&&h(a)},n={dd:1,dt:1,li:1};a.prototype={getNextParagraph:function(a){var d,h,w,A,G;a=a||"p";if(this._.nestedEditable){if(d=this._.nestedEditable.iterator.getNextParagraph(a))return this.activeFilter=this._.nestedEditable.iterator.activeFilter,d;this.activeFilter=this.filter;if(b(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining))return this.activeFilter=this._.nestedEditable.iterator.activeFilter,this._.nestedEditable.iterator.getNextParagraph(a);this._.nestedEditable=
null}if(!this.range.root.getDtd()[a])return null;if(!this._.started){var x=this.range.clone();h=x.startPath();var m=x.endPath(),K=!x.collapsed&&c(x,h.block),z=!x.collapsed&&c(x,m.block,1);x.shrink(CKEDITOR.SHRINK_ELEMENT,!0);K&&x.setStartAt(h.block,CKEDITOR.POSITION_BEFORE_END);z&&x.setEndAt(m.block,CKEDITOR.POSITION_AFTER_START);h=x.endContainer.hasAscendant("pre",!0)||x.startContainer.hasAscendant("pre",!0);x.enlarge(this.forceBrBreak&&!h||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);
x.collapsed||(h=new CKEDITOR.dom.walker(x.clone()),m=CKEDITOR.dom.walker.bookmark(!0,!0),h.evaluator=m,this._.nextNode=h.next(),h=new CKEDITOR.dom.walker(x.clone()),h.evaluator=m,h=h.previous(),this._.lastNode=h.getNextSourceNode(!0,null,x.root),this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()&&(m=this.range.clone(),m.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END),m.checkEndOfBlock()&&
(m=new CKEDITOR.dom.elementPath(m.endContainer,m.root),this._.lastNode=(m.block||m.blockLimit).getNextSourceNode(!0))),this._.lastNode&&x.root.contains(this._.lastNode)||(this._.lastNode=this._.docEndMarker=x.document.createText(""),this._.lastNode.insertAfter(h)),x=null);this._.started=1;h=x}m=this._.nextNode;x=this._.lastNode;for(this._.nextNode=null;m;){var K=0,z=m.hasAscendant("pre"),I=m.type!=CKEDITOR.NODE_ELEMENT,l=0;if(I)m.type==CKEDITOR.NODE_TEXT&&e.test(m.getText())&&(I=0);else{var r=m.getName();
if(CKEDITOR.dtd.$block[r]&&"false"==m.getAttribute("contenteditable")){d=m;b(this,a,d);break}else if(m.isBlockBoundary(this.forceBrBreak&&!z&&{br:1})){if("br"==r)I=1;else if(!h&&!m.getChildCount()&&"hr"!=r){d=m;w=m.equals(x);break}h&&(h.setEndAt(m,CKEDITOR.POSITION_BEFORE_START),"br"!=r&&(this._.nextNode=m));K=1}else{if(m.getFirst()){h||(h=this.range.clone(),h.setStartAt(m,CKEDITOR.POSITION_BEFORE_START));m=m.getFirst();continue}I=1}}I&&!h&&(h=this.range.clone(),h.setStartAt(m,CKEDITOR.POSITION_BEFORE_START));
w=(!K||I)&&m.equals(x);if(h&&!K)for(;!m.getNext(k)&&!w;){r=m.getParent();if(r.isBlockBoundary(this.forceBrBreak&&!z&&{br:1})){K=1;I=0;w||r.equals(x);h.setEndAt(r,CKEDITOR.POSITION_BEFORE_END);break}m=r;I=1;w=m.equals(x);l=1}I&&h.setEndAt(m,CKEDITOR.POSITION_AFTER_END);m=this._getNextSourceNode(m,l,x);if((w=!m)||K&&h)break}if(!d){if(!h)return this._.docEndMarker&&this._.docEndMarker.remove(),this._.nextNode=null;d=new CKEDITOR.dom.elementPath(h.startContainer,h.root);m=d.blockLimit;K={div:1,th:1,td:1};
d=d.block;!d&&m&&!this.enforceRealBlocks&&K[m.getName()]&&h.checkStartOfBlock()&&h.checkEndOfBlock()&&!m.equals(h.root)?d=m:!d||this.enforceRealBlocks&&d.is(n)?(d=this.range.document.createElement(a),h.extractContents().appendTo(d),d.trim(),h.insertNode(d),A=G=!0):"li"!=d.getName()?h.checkStartOfBlock()&&h.checkEndOfBlock()||(d=d.clone(!1),h.extractContents().appendTo(d),d.trim(),G=h.splitBlock(),A=!G.wasStartOfBlock,G=!G.wasEndOfBlock,h.insertNode(d)):w||(this._.nextNode=d.equals(x)?null:this._getNextSourceNode(h.getBoundaryNodes().endNode,
1,x))}A&&(A=d.getPrevious())&&A.type==CKEDITOR.NODE_ELEMENT&&("br"==A.getName()?A.remove():A.getLast()&&"br"==A.getLast().$.nodeName.toLowerCase()&&A.getLast().remove());G&&(A=d.getLast())&&A.type==CKEDITOR.NODE_ELEMENT&&"br"==A.getName()&&(!CKEDITOR.env.needsBrFiller||A.getPrevious(g)||A.getNext(g))&&A.remove();this._.nextNode||(this._.nextNode=w||d.equals(x)||!x?null:this._getNextSourceNode(d,1,x));return d},_getNextSourceNode:function(a,b,c){function d(a){return!(a.equals(c)||a.equals(e))}var e=
this.range.root;for(a=a.getNextSourceNode(b,null,d);!g(a);)a=a.getNextSourceNode(b,null,d);return a}};CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}})();
CKEDITOR.command=function(a,d){this.uiItems=[];this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return!1;this.editorFocus&&a.focus();return!1===this.fire("exec")?!0:!1!==d.exec.call(this,a,b)};this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return!0;if(this.context&&!b.isContextFor(this.context)||!this.checkAllowed(!0))return this.disable(),!0;this.startDisabled||this.enable();this.modes&&!this.modes[a.mode]&&this.disable();return!1===this.fire("refresh",
{editor:a,path:b})?!0:d.refresh&&!1!==d.refresh.apply(this,arguments)};var b;this.checkAllowed=function(c){return c||"boolean"!=typeof b?b=a.activeFilter.checkFeature(this):b};CKEDITOR.tools.extend(this,d,{modes:{wysiwyg:1},editorFocus:1,contextSensitive:!!d.context,state:CKEDITOR.TRISTATE_DISABLED});CKEDITOR.event.call(this)};
CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(this.preserveState&&"undefined"!=typeof this.previousState?this.previousState:CKEDITOR.TRISTATE_OFF)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return!1;this.previousState=this.state;this.state=a;this.fire("state");return!0},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?
this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.event.implementOn(CKEDITOR.command.prototype);CKEDITOR.ENTER_P=1;CKEDITOR.ENTER_BR=2;CKEDITOR.ENTER_DIV=3;
CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"\x3c!DOCTYPE html\x3e",bodyId:"",bodyClass:"",fullPage:!1,height:200,contentsCss:CKEDITOR.getUrl("contents.css"),extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]};
(function(){function a(a,b,c,d,e){var f,l;a=[];for(f in b){l=b[f];l="boolean"==typeof l?{}:"function"==typeof l?{match:l}:v(l);"$"!=f.charAt(0)&&(l.elements=f);c&&(l.featureName=c.toLowerCase());var t=l;t.elements=h(t.elements,/\s+/)||null;t.propertiesOnly=t.propertiesOnly||!0===t.elements;var u=/\s*,\s*/,g=void 0;for(g in V){t[g]=h(t[g],u)||null;var p=t,r=O[g],m=h(t[O[g]],u),F=t[g],y=[],B=!0,C=void 0;m?B=!1:m={};for(C in F)"!"==C.charAt(0)&&(C=C.slice(1),y.push(C),m[C]=!0,B=!1);for(;C=y.pop();)F[C]=
F["!"+C],delete F["!"+C];p[r]=(B?!1:m)||null}t.match=t.match||null;d.push(l);a.push(l)}b=e.elements;e=e.generic;var k;c=0;for(d=a.length;c<d;++c){f=v(a[c]);l=!0===f.classes||!0===f.styles||!0===f.attributes;t=f;g=r=u=void 0;for(u in V)t[u]=K(t[u]);p=!0;for(g in O){u=O[g];r=t[u];m=[];F=void 0;for(F in r)-1<F.indexOf("*")?m.push(new RegExp("^"+F.replace(/\*/g,".*")+"$")):m.push(F);r=m;r.length&&(t[u]=r,p=!1)}t.nothingRequired=p;t.noProperties=!(t.attributes||t.classes||t.styles);if(!0===f.elements||
null===f.elements)e[l?"unshift":"push"](f);else for(k in t=f.elements,delete f.elements,t)if(b[k])b[k][l?"unshift":"push"](f);else b[k]=[f]}}function d(a,c,d,e){if(!a.match||a.match(c))if(e||k(a,c))if(a.propertiesOnly||(d.valid=!0),d.allAttributes||(d.allAttributes=b(a.attributes,c.attributes,d.validAttributes)),d.allStyles||(d.allStyles=b(a.styles,c.styles,d.validStyles)),!d.allClasses){a=a.classes;c=c.classes;e=d.validClasses;if(a)if(!0===a)a=!0;else{for(var f=0,l=c.length,t;f<l;++f)t=c[f],e[t]||
(e[t]=a(t));a=!1}else a=!1;d.allClasses=a}}function b(a,b,c){if(!a)return!1;if(!0===a)return!0;for(var d in b)c[d]||(c[d]=a(d));return!1}function c(a,b,c){if(!a.match||a.match(b)){if(a.noProperties)return!1;c.hadInvalidAttribute=e(a.attributes,b.attributes)||c.hadInvalidAttribute;c.hadInvalidStyle=e(a.styles,b.styles)||c.hadInvalidStyle;a=a.classes;b=b.classes;if(a){for(var d=!1,f=!0===a,t=b.length;t--;)if(f||a(b[t]))b.splice(t,1),d=!0;a=d}else a=!1;c.hadInvalidClass=a||c.hadInvalidClass}}function e(a,
b){if(!a)return!1;var c=!1,d=!0===a,e;for(e in b)if(d||a(e))delete b[e],c=!0;return c}function g(a,b,c){if(a.disabled||a.customConfig&&!c||!b)return!1;a._.cachedChecks={};return!0}function h(a,b){if(!a)return!1;if(!0===a)return a;if("string"==typeof a)return a=B(a),"*"==a?!0:CKEDITOR.tools.convertArrayToObject(a.split(b));if(CKEDITOR.tools.isArray(a))return a.length?CKEDITOR.tools.convertArrayToObject(a):!1;var c={},d=0,e;for(e in a)c[e]=a[e],d++;return d?c:!1}function k(a,b){if(a.nothingRequired)return!0;
var c,d,e,f;if(e=a.requiredClasses)for(f=b.classes,c=0;c<e.length;++c)if(d=e[c],"string"==typeof d){if(-1==CKEDITOR.tools.indexOf(f,d))return!1}else if(!CKEDITOR.tools.checkIfAnyArrayItemMatches(f,d))return!1;return n(b.styles,a.requiredStyles)&&n(b.attributes,a.requiredAttributes)}function n(a,b){if(!b)return!0;for(var c=0,d;c<b.length;++c)if(d=b[c],"string"==typeof d){if(!(d in a))return!1}else if(!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a,d))return!1;return!0}function q(a){if(!a)return{};
a=a.split(/\s*,\s*/).sort();for(var b={};a.length;)b[a.shift()]="cke-test";return b}function f(a){var b,c,d,e,f={},t=1;for(a=B(a);b=a.match(p);)(c=b[2])?(d=D(c,"styles"),e=D(c,"attrs"),c=D(c,"classes")):d=e=c=null,f["$"+t++]={elements:b[1],classes:c,styles:d,attributes:e},a=a.slice(b[0].length);return f}function D(a,b){var c=a.match(C[b]);return c?B(c[1]):null}function w(a){var b=a.styleBackup=a.attributes.style,c=a.classBackup=a.attributes["class"];a.styles||(a.styles=CKEDITOR.tools.parseCssText(b||
"",1));a.classes||(a.classes=c?c.split(/\s+/):[])}function A(a,b,e,f){var l=0,u;f.toHtml&&(b.name=b.name.replace(t,"$1"));if(f.doCallbacks&&a.elementCallbacks){a:{u=a.elementCallbacks;for(var v=0,g=u.length,p;v<g;++v)if(p=u[v](b)){u=p;break a}u=void 0}if(u)return u}if(f.doTransform&&(u=a._.transformations[b.name])){w(b);for(v=0;v<u.length;++v)r(a,b,u[v]);x(b)}if(f.doFilter){a:{v=b.name;g=a._;a=g.allowedRules.elements[v];u=g.allowedRules.generic;v=g.disallowedRules.elements[v];g=g.disallowedRules.generic;
p=f.skipRequired;var y={valid:!1,validAttributes:{},validClasses:{},validStyles:{},allAttributes:!1,allClasses:!1,allStyles:!1,hadInvalidAttribute:!1,hadInvalidClass:!1,hadInvalidStyle:!1},B,C;if(a||u){w(b);if(v)for(B=0,C=v.length;B<C;++B)if(!1===c(v[B],b,y)){a=null;break a}if(g)for(B=0,C=g.length;B<C;++B)c(g[B],b,y);if(a)for(B=0,C=a.length;B<C;++B)d(a[B],b,y,p);if(u)for(B=0,C=u.length;B<C;++B)d(u[B],b,y,p);a=y}else a=null}if(!a||!a.valid)return e.push(b),1;C=a.validAttributes;var h=a.validStyles;
u=a.validClasses;var v=b.attributes,k=b.styles,g=b.classes;p=b.classBackup;var J=b.styleBackup,H,N,E=[],y=[],O=/^data-cke-/;B=!1;delete v.style;delete v["class"];delete b.classBackup;delete b.styleBackup;if(!a.allAttributes)for(H in v)C[H]||(O.test(H)?H==(N=H.replace(/^data-cke-saved-/,""))||C[N]||(delete v[H],B=!0):(delete v[H],B=!0));if(!a.allStyles||a.hadInvalidStyle){for(H in k)a.allStyles||h[H]?E.push(H+":"+k[H]):B=!0;E.length&&(v.style=E.sort().join("; "))}else J&&(v.style=J);if(!a.allClasses||
a.hadInvalidClass){for(H=0;H<g.length;++H)(a.allClasses||u[g[H]])&&y.push(g[H]);y.length&&(v["class"]=y.sort().join(" "));p&&y.length<p.split(/\s+/).length&&(B=!0)}else p&&(v["class"]=p);B&&(l=1);if(!f.skipFinalValidation&&!m(b))return e.push(b),1}f.toHtml&&(b.name=b.name.replace(F,"cke:$1"));return l}function G(a){var b=[],c;for(c in a)-1<c.indexOf("*")&&b.push(c.replace(/\*/g,".*"));return b.length?new RegExp("^(?:"+b.join("|")+")$"):null}function x(a){var b=a.attributes,c;delete b.style;delete b["class"];
if(c=CKEDITOR.tools.writeCssText(a.styles,!0))b.style=c;a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function m(a){switch(a.name){case "a":if(!(a.children.length||a.attributes.name||a.attributes.id))return!1;break;case "img":if(!a.attributes.src)return!1}return!0}function K(a){if(!a)return!1;if(!0===a)return!0;var b=G(a);return function(c){return c in a||b&&c.match(b)}}function z(){return new CKEDITOR.htmlParser.element("br")}function I(a){return a.type==CKEDITOR.NODE_ELEMENT&&("br"==
a.name||y.$block[a.name])}function l(a,b,c){var d=a.name;if(y.$empty[d]||!a.children.length)"hr"==d&&"br"==b?a.replaceWith(z()):(a.parent&&c.push({check:"it",el:a.parent}),a.remove());else if(y.$block[d]||"tr"==d)if("br"==b)a.previous&&!I(a.previous)&&(b=z(),b.insertBefore(a)),a.next&&!I(a.next)&&(b=z(),b.insertAfter(a)),a.replaceWithChildren();else{var d=a.children,e;b:{e=y[b];for(var f=0,t=d.length,l;f<t;++f)if(l=d[f],l.type==CKEDITOR.NODE_ELEMENT&&!e[l.name]){e=!1;break b}e=!0}if(e)a.name=b,a.attributes=
{},c.push({check:"parent-down",el:a});else{e=a.parent;for(var f=e.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||"body"==e.name,v,u,t=d.length;0<t;)l=d[--t],f&&(l.type==CKEDITOR.NODE_TEXT||l.type==CKEDITOR.NODE_ELEMENT&&y.$inline[l.name])?(v||(v=new CKEDITOR.htmlParser.element(b),v.insertAfter(a),c.push({check:"parent-down",el:v})),v.add(l,0)):(v=null,u=y[e.name]||y.span,l.insertAfter(a),e.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||l.type!=CKEDITOR.NODE_ELEMENT||u[l.name]||c.push({check:"el-up",el:l}));a.remove()}}else d in
{style:1,script:1}?a.remove():(a.parent&&c.push({check:"it",el:a.parent}),a.replaceWithChildren())}function r(a,b,c){var d,e;for(d=0;d<c.length;++d)if(e=c[d],!(e.check&&!a.check(e.check,!1)||e.left&&!e.left(b))){e.right(b,N);break}}function J(a,b){var c=b.getDefinition(),d=c.attributes,e=c.styles,f,l,t,v;if(a.name!=c.element)return!1;for(f in d)if("class"==f)for(c=d[f].split(/\s+/),t=a.classes.join("|");v=c.pop();){if(-1==t.indexOf(v))return!1}else if(a.attributes[f]!=d[f])return!1;for(l in e)if(a.styles[l]!=
e[l])return!1;return!0}function H(a,b){var c,d;"string"==typeof a?c=a:a instanceof CKEDITOR.style?d=a:(c=a[0],d=a[1]);return[{element:c,left:d,right:function(a,c){c.transform(a,b)}}]}function E(a){return function(b){return J(b,a)}}function u(a){return function(b,c){c[a](b)}}var y=CKEDITOR.dtd,v=CKEDITOR.tools.copy,B=CKEDITOR.tools.trim,L=["","p","br","div"];CKEDITOR.FILTER_SKIP_TREE=2;CKEDITOR.filter=function(a){this.allowedContent=[];this.disallowedContent=[];this.elementCallbacks=null;this.disabled=
!1;this.editor=null;this.id=CKEDITOR.tools.getNextNumber();this._={allowedRules:{elements:{},generic:[]},disallowedRules:{elements:{},generic:[]},transformations:{},cachedTests:{},cachedChecks:{}};CKEDITOR.filter.instances[this.id]=this;if(a instanceof CKEDITOR.editor){a=this.editor=a;this.customConfig=!0;var b=a.config.allowedContent;!0===b?this.disabled=!0:(b||(this.customConfig=!1),this.allow(b,"config",1),this.allow(a.config.extraAllowedContent,"extra",1),this.allow(L[a.enterMode]+" "+L[a.shiftEnterMode],
"default",1),this.disallow(a.config.disallowedContent))}else this.customConfig=!1,this.allow(a,"default",1)};CKEDITOR.filter.instances={};CKEDITOR.filter.prototype={allow:function(b,c,d){if(!g(this,b,d))return!1;var e,l;if("string"==typeof b)b=f(b);else if(b instanceof CKEDITOR.style){if(b.toAllowedContentRules)return this.allow(b.toAllowedContentRules(this.editor),c,d);e=b.getDefinition();b={};d=e.attributes;b[e.element]=e={styles:e.styles,requiredStyles:e.styles&&CKEDITOR.tools.objectKeys(e.styles)};
d&&(d=v(d),e.classes=d["class"]?d["class"].split(/\s+/):null,e.requiredClasses=e.classes,delete d["class"],e.attributes=d,e.requiredAttributes=d&&CKEDITOR.tools.objectKeys(d))}else if(CKEDITOR.tools.isArray(b)){for(e=0;e<b.length;++e)l=this.allow(b[e],c,d);return l}a(this,b,c,this.allowedContent,this._.allowedRules);return!0},applyTo:function(a,b,c,d){if(this.disabled)return!1;var e=this,f=[],t=this.editor&&this.editor.config.protectedSource,v,u=!1,g={doFilter:!c,doTransform:!0,doCallbacks:!0,toHtml:b};
a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if("off"==a.attributes["data-cke-filter"])return!1;if(!b||"span"!=a.name||!~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-"))if(v=A(e,a,f,g),v&1)u=!0;else if(v&2)return!1}else if(a.type==CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c;a:{var d=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,""));c=[];var l,p,r;if(t)for(p=0;p<t.length;++p)if((r=d.match(t[p]))&&r[0].length==d.length){c=!0;
break a}d=CKEDITOR.htmlParser.fragment.fromHtml(d);1==d.children.length&&(l=d.children[0]).type==CKEDITOR.NODE_ELEMENT&&A(e,l,c,g);c=!c.length}c||f.push(a)}},null,!0);f.length&&(u=!0);var p;a=[];d=L[d||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)];for(var r;c=f.pop();)c.type==CKEDITOR.NODE_ELEMENT?l(c,d,a):c.remove();for(;p=a.pop();)if(c=p.el,c.parent)switch(r=y[c.parent.name]||y.span,p.check){case "it":y.$removeEmpty[c.name]&&!c.children.length?l(c,d,a):m(c)||l(c,d,a);break;case "el-up":c.parent.type==
CKEDITOR.NODE_DOCUMENT_FRAGMENT||r[c.name]||l(c,d,a);break;case "parent-down":c.parent.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||r[c.name]||l(c.parent,d,a)}return u},checkFeature:function(a){if(this.disabled||!a)return!0;a.toFeature&&(a=a.toFeature(this.editor));return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=!0},disallow:function(b){if(!g(this,b,!0))return!1;"string"==typeof b&&(b=f(b));a(this,b,null,this.disallowedContent,this._.disallowedRules);return!0},
addContentForms:function(a){if(!this.disabled&&a){var b,c,d=[],e;for(b=0;b<a.length&&!e;++b)c=a[b],("string"==typeof c||c instanceof CKEDITOR.style)&&this.check(c)&&(e=c);if(e){for(b=0;b<a.length;++b)d.push(H(a[b],e));this.addTransformations(d)}}},addElementCallback:function(a){this.elementCallbacks||(this.elementCallbacks=[]);this.elementCallbacks.push(a)},addFeature:function(a){if(this.disabled||!a)return!0;a.toFeature&&(a=a.toFeature(this.editor));this.allow(a.allowedContent,a.name);this.addTransformations(a.contentTransformations);
this.addContentForms(a.contentForms);return a.requiredContent&&(this.customConfig||this.disallowedContent.length)?this.check(a.requiredContent):!0},addTransformations:function(a){var b,c;if(!this.disabled&&a){var d=this._.transformations,e;for(e=0;e<a.length;++e){b=a[e];var f=void 0,l=void 0,t=void 0,v=void 0,g=void 0,p=void 0;c=[];for(l=0;l<b.length;++l)t=b[l],"string"==typeof t?(t=t.split(/\s*:\s*/),v=t[0],g=null,p=t[1]):(v=t.check,g=t.left,p=t.right),f||(f=t,f=f.element?f.element:v?v.match(/^([a-z0-9]+)/i)[0]:
f.left.getDefinition().element),g instanceof CKEDITOR.style&&(g=E(g)),c.push({check:v==f?null:v,left:g,right:"string"==typeof p?u(p):p});b=f;d[b]||(d[b]=[]);d[b].push(c)}}},check:function(a,b,c){if(this.disabled)return!0;if(CKEDITOR.tools.isArray(a)){for(var d=a.length;d--;)if(this.check(a[d],b,c))return!0;return!1}var e,l;if("string"==typeof a){l=a+"\x3c"+(!1===b?"0":"1")+(c?"1":"0")+"\x3e";if(l in this._.cachedChecks)return this._.cachedChecks[l];d=f(a).$1;e=d.styles;var t=d.classes;d.name=d.elements;
d.classes=t=t?t.split(/\s*,\s*/):[];d.styles=q(e);d.attributes=q(d.attributes);d.children=[];t.length&&(d.attributes["class"]=t.join(" "));e&&(d.attributes.style=CKEDITOR.tools.writeCssText(d.styles));e=d}else d=a.getDefinition(),e=d.styles,t=d.attributes||{},e&&!CKEDITOR.tools.isEmpty(e)?(e=v(e),t.style=CKEDITOR.tools.writeCssText(e,!0)):e={},e={name:d.element,attributes:t,classes:t["class"]?t["class"].split(/\s+/):[],styles:e,children:[]};var t=CKEDITOR.tools.clone(e),u=[],g;if(!1!==b&&(g=this._.transformations[e.name])){for(d=
0;d<g.length;++d)r(this,e,g[d]);x(e)}A(this,t,u,{doFilter:!0,doTransform:!1!==b,skipRequired:!c,skipFinalValidation:!c});b=0<u.length?!1:CKEDITOR.tools.objectCompare(e.attributes,t.attributes,!0)?!0:!1;"string"==typeof a&&(this._.cachedChecks[l]=b);return b},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,br:CKEDITOR.ENTER_BR};return function(c,d){var e=a.slice(),f;if(this.check(L[c]))return c;for(d||(e=e.reverse());f=e.pop();)if(this.check(f))return b[f];
return CKEDITOR.ENTER_BR}}(),clone:function(){var a=new CKEDITOR.filter,b=CKEDITOR.tools.clone;a.allowedContent=b(this.allowedContent);a._.allowedRules=b(this._.allowedRules);a.disallowedContent=b(this.disallowedContent);a._.disallowedRules=b(this._.disallowedRules);a._.transformations=b(this._.transformations);a.disabled=this.disabled;a.editor=this.editor;return a},destroy:function(){delete CKEDITOR.filter.instances[this.id];delete this._;delete this.allowedContent;delete this.disallowedContent}};
var V={styles:1,attributes:1,classes:1},O={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},p=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,C={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},t=/^cke:(object|embed|param)$/,F=/^(object|embed|param)$/,N;N=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,"height")},sizeToAttribute:function(a){this.lengthToAttribute(a,
"width");this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||b;if(!(c in a.styles)){var d=a.attributes[b];d&&(/^\d+$/.test(d)&&(d+="px"),a.styles[c]=d)}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b;if(!(c in a.attributes)){var d=a.styles[b],e=d&&d.match(/^(\d+)(?:\.\d*)?px$/);e?a.attributes[c]=e[1]:"cke-test"==d&&(a.attributes[c]="cke-test")}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b=a.attributes.align;if("left"==b||"right"==
b)a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in a.attributes)){var b=a.styles["float"];if("left"==b||"right"==b)a.attributes.align=b}delete a.styles["float"]},splitBorderShorthand:function(a){function b(d){a.styles["border-top-width"]=c[d[0]];a.styles["border-right-width"]=c[d[1]];a.styles["border-bottom-width"]=c[d[2]];a.styles["border-left-width"]=c[d[3]]}if(a.styles.border){var c=a.styles.border.match(/([\.\d]+\w+)/g)||["0px"];switch(c.length){case 1:a.styles["border-width"]=
c[0];break;case 2:b([0,1,0,1]);break;case 3:b([0,1,2,1]);break;case 4:b([0,1,2,3])}a.styles["border-style"]=a.styles["border-style"]||(a.styles.border.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit)/)||[])[0];a.styles["border-style"]||delete a.styles["border-style"];delete a.styles.border}},listTypeToStyle:function(a){if(a.attributes.type)switch(a.attributes.type){case "a":a.styles["list-style-type"]="lower-alpha";break;case "A":a.styles["list-style-type"]=
"upper-alpha";break;case "i":a.styles["list-style-type"]="lower-roman";break;case "I":a.styles["list-style-type"]="upper-roman";break;case "1":a.styles["list-style-type"]="decimal";break;default:a.styles["list-style-type"]=a.attributes.type}},splitMarginShorthand:function(a){function b(d){a.styles["margin-top"]=c[d[0]];a.styles["margin-right"]=c[d[1]];a.styles["margin-bottom"]=c[d[2]];a.styles["margin-left"]=c[d[3]]}if(a.styles.margin){var c=a.styles.margin.match(/(\-?[\.\d]+\w+)/g)||["0px"];switch(c.length){case 1:b([0,
0,0,0]);break;case 2:b([0,1,0,1]);break;case 3:b([0,1,2,1]);break;case 4:b([0,1,2,3])}delete a.styles.margin}},matchesStyle:J,transform:function(a,b){if("string"==typeof b)a.name=b;else{var c=b.getDefinition(),d=c.styles,e=c.attributes,f,t,l,v;a.name=c.element;for(f in e)if("class"==f)for(c=a.classes.join("|"),l=e[f].split(/\s+/);v=l.pop();)-1==c.indexOf(v)&&a.classes.push(v);else a.attributes[f]=e[f];for(t in d)a.styles[t]=d[t]}}}})();
(function(){CKEDITOR.focusManager=function(a){if(a.focusManager)return a.focusManager;this.hasFocus=!1;this.currentActive=null;this._={editor:a};return this};CKEDITOR.focusManager._={blurDelay:200};CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer);a&&(this.currentActive=a);this.hasFocus||this._.locked||((a=CKEDITOR.currentInstance)&&a.focusManager.blur(1),this.hasFocus=!0,(a=this._.editor.container)&&a.addClass("cke_focus"),this._.editor.fire("focus"))},lock:function(){this._.locked=
1},unlock:function(){delete this._.locked},blur:function(a){function d(){if(this.hasFocus){this.hasFocus=!1;var a=this._.editor.container;a&&a.removeClass("cke_focus");this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer);var b=CKEDITOR.focusManager._.blurDelay;a||!b?d.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer;d.call(this)},b,this)}},add:function(a,d){var b=a.getCustomData("focusmanager");if(!b||b!=this){b&&b.remove(a);var b=
"focus",c="blur";d&&(CKEDITOR.env.ie?(b="focusin",c="focusout"):CKEDITOR.event.useCapture=1);var e={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}};a.on(b,e.focus,this);a.on(c,e.blur,this);d&&(CKEDITOR.event.useCapture=0);a.setCustomData("focusmanager",this);a.setCustomData("focusmanager_handlers",e)}},remove:function(a){a.removeCustomData("focusmanager");var d=a.removeCustomData("focusmanager_handlers");a.removeListener("blur",d.blur);a.removeListener("focus",
d.focus)}}})();CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this};
(function(){var a,d=function(b){b=b.data;var d=b.getKeystroke(),g=this.keystrokes[d],h=this._.editor;a=!1===h.fire("key",{keyCode:d,domEvent:b});a||(g&&(a=!1!==h.execCommand(g,{from:"keystrokeHandler"})),a||(a=!!this.blockedKeystrokes[d]));a&&b.preventDefault(!0);return!a},b=function(b){a&&(a=!1,b.data.preventDefault(!0))};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",d,this);if(CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",b,this)}}})();
(function(){CKEDITOR.lang={languages:{af:1,ar:1,az:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,"de-ch":1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,"es-mx":1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,oc:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,ku:1,ug:1},load:function(a,d,b){a&&CKEDITOR.lang.languages[a]||
(a=this.detect(d,a));var c=this;d=function(){c[a].dir=c.rtl[a]?"rtl":"ltr";b(a,c[a])};this[a]?d():CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+a+".js"),d,this)},detect:function(a,d){var b=this.languages;d=d||navigator.userLanguage||navigator.language||a;var c=d.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),e=c[1],c=c[2];b[e+"-"+c]?e=e+"-"+c:b[e]||(e=null);CKEDITOR.lang.detect=e?function(){return e}:function(a){return a};return e||a}}})();
CKEDITOR.scriptLoader=function(){var a={},d={};return{load:function(b,c,e,g){var h="string"==typeof b;h&&(b=[b]);e||(e=CKEDITOR);var k=b.length,n=[],q=[],f=function(a){c&&(h?c.call(e,a):c.call(e,n,q))};if(0===k)f(!0);else{var D=function(a,b){(b?n:q).push(a);0>=--k&&(g&&CKEDITOR.document.getDocumentElement().removeStyle("cursor"),f(b))},w=function(b,c){a[b]=1;var e=d[b];delete d[b];for(var f=0;f<e.length;f++)e[f](b,c)},A=function(b){if(a[b])D(b,!0);else{var e=d[b]||(d[b]=[]);e.push(D);if(!(1<e.length)){var f=
new CKEDITOR.dom.element("script");f.setAttributes({type:"text/javascript",src:b});c&&(CKEDITOR.env.ie&&(8>=CKEDITOR.env.version||CKEDITOR.env.ie9Compat)?f.$.onreadystatechange=function(){if("loaded"==f.$.readyState||"complete"==f.$.readyState)f.$.onreadystatechange=null,w(b,!0)}:(f.$.onload=function(){setTimeout(function(){w(b,!0)},0)},f.$.onerror=function(){w(b,!1)}));f.appendTo(CKEDITOR.document.getHead())}}};g&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");for(var G=0;G<k;G++)A(b[G])}},
queue:function(){function a(){var b;(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[];return function(d,g){var h=this;c.push({scriptUrl:d,callback:function(){g&&g.apply(this,arguments);c.shift();a.call(h)}});1==c.length&&a.call(this)}}()}}();CKEDITOR.resourceManager=function(a,d){this.basePath=a;this.fileName=d;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}};
CKEDITOR.resourceManager.prototype={add:function(a,d){if(this.registered[a])throw Error('[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already registered.');var b=this.registered[a]=d||{};b.name=a;b.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b);return this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var d=this.externals[a];return CKEDITOR.getUrl(d&&d.dir||this.basePath+a+"/")},getFilePath:function(a){var d=this.externals[a];
return CKEDITOR.getUrl(this.getPath(a)+(d?d.file:this.fileName+".js"))},addExternal:function(a,d,b){a=a.split(",");for(var c=0;c<a.length;c++){var e=a[c];b||(d=d.replace(/[^\/]+$/,function(a){b=a;return""}));this.externals[e]={dir:d,file:b||this.fileName+".js"}}},load:function(a,d,b){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]);for(var c=this.loaded,e=this.registered,g=[],h={},k={},n=0;n<a.length;n++){var q=a[n];if(q)if(c[q]||e[q])k[q]=this.get(q);else{var f=this.getFilePath(q);g.push(f);f in h||(h[f]=
[]);h[f].push(q)}}CKEDITOR.scriptLoader.load(g,function(a,e){if(e.length)throw Error('[CKEDITOR.resourceManager.load] Resource name "'+h[e[0]].join(",")+'" was not found at "'+e[0]+'".');for(var f=0;f<a.length;f++)for(var g=h[a[f]],n=0;n<g.length;n++){var m=g[n];k[m]=this.get(m);c[m]=1}d.call(b,k)},this)}};CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var d={};return function(b,c,e){var g={},h=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(g,a);var b=[],f;for(f in a){var k=a[f],w=k&&k.requires;if(!d[f]){if(k.icons)for(var A=k.icons.split(","),G=A.length;G--;)CKEDITOR.skin.addIcon(A[G],k.path+"icons/"+(CKEDITOR.env.hidpi&&k.hidpi?"hidpi/":"")+A[G]+".png");d[f]=1}if(w)for(w.split&&(w=w.split(",")),k=0;k<w.length;k++)g[w[k]]||b.push(w[k])}if(b.length)h.call(this,
b);else{for(f in g)k=g[f],k.onLoad&&!k.onLoad._called&&(!1===k.onLoad()&&delete g[f],k.onLoad._called=1);c&&c.call(e||window,g)}},this)};h.call(this,b)}});CKEDITOR.plugins.setLang=function(a,d,b){var c=this.get(a);a=c.langEntries||(c.langEntries={});c=c.lang||(c.lang=[]);c.split&&(c=c.split(","));-1==CKEDITOR.tools.indexOf(c,d)&&c.push(d);a[d]=b};CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this};
CKEDITOR.ui.prototype={add:function(a,d,b){b.name=a.toLowerCase();var c=this.items[a]={type:d,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(c,b)},get:function(a){return this.instances[a]},create:function(a){var d=this.items[a],b=d&&this._.handlers[d.type],c=d&&d.command&&this.editor.getCommand(d.command),b=b&&b.create.apply(this,d.args);this.instances[a]=b;c&&c.uiItems.push(b);b&&!b.type&&(b.type=d.type);return b},addHandler:function(a,d){this._.handlers[a]=
d},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}};CKEDITOR.event.implementOn(CKEDITOR.ui);
(function(){function a(a,e,f){CKEDITOR.event.call(this);a=a&&CKEDITOR.tools.clone(a);if(void 0!==e){if(!(e instanceof CKEDITOR.dom.element))throw Error("Expect element of type CKEDITOR.dom.element.");if(!f)throw Error("One of the element modes must be specified.");if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&f==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks.");if(!b(e,f))throw Error('The specified element mode is not supported on element: "'+e.getName()+'".');
this.element=e;this.elementMode=f;this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(e.getId()||e.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE;this._={};this.commands={};this.templates={};this.name=this.name||d();this.id=CKEDITOR.tools.getNextId();this.status="unloaded";this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui=new CKEDITOR.ui(this);this.focusManager=new CKEDITOR.focusManager(this);this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this);this.on("readOnly",
c);this.on("selectionChange",function(a){g(this,a.data.path)});this.on("activeFilterChange",function(){g(this,this.elementPath(),!0)});this.on("mode",c);this.on("instanceReady",function(){this.config.startupFocus&&this.focus()});CKEDITOR.fire("instanceCreated",null,this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function(){"destroyed"!==this.status?k(this,a):CKEDITOR.warn("editor-incorrect-destroy")},0,this)}function d(){do var a="editor"+ ++G;while(CKEDITOR.instances[a]);return a}function b(a,
b){return b==CKEDITOR.ELEMENT_MODE_INLINE?a.is(CKEDITOR.dtd.$editable)||a.is("textarea"):b==CKEDITOR.ELEMENT_MODE_REPLACE?!a.is(CKEDITOR.dtd.$nonBodyContent):1}function c(){var a=this.commands,b;for(b in a)e(this,a[b])}function e(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function g(a,b,c){if(b){var d,e,f=a.commands;for(e in f)d=f[e],(c||d.contextSensitive)&&d.refresh(a,b)}}function h(a){var b=a.config.customConfig;if(!b)return!1;var b=
CKEDITOR.getUrl(b),c=x[b]||(x[b]={});c.fn?(c.fn.call(a,a.config),CKEDITOR.getUrl(a.config.customConfig)!=b&&h(a)||a.fireOnce("customConfigLoaded")):CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){};h(a)});return!0}function k(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]);CKEDITOR.tools.extend(a.config,b,!0);delete a.config.on}c=a.config;a.readOnly=c.readOnly?!0:a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?
a.element.is("textarea")?a.element.hasAttribute("disabled")||a.element.hasAttribute("readonly"):a.element.isReadOnly():a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?a.element.hasAttribute("disabled")||a.element.hasAttribute("readonly"):!1;a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):!1;a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0;a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode;
a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:c.shiftEnterMode;c.skin&&(CKEDITOR.skinName=c.skin);a.fireOnce("configLoaded");a.dataProcessor=new CKEDITOR.htmlDataProcessor(a);a.filter=a.activeFilter=new CKEDITOR.filter(a);n(a)});b&&null!=b.customConfig&&(a.config.customConfig=b.customConfig);h(a)||a.fireOnce("customConfigLoaded")}function n(a){CKEDITOR.skin.loadPart("editor",function(){q(a)})}function q(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,
c){var d=a.config.title;a.langCode=b;a.lang=CKEDITOR.tools.prototypedCopy(c);a.title="string"==typeof d||!1===d?d:[a.lang.editor,a.name].join(", ");a.config.contentsLangDirection||(a.config.contentsLangDirection=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir);a.fire("langLoaded");f(a)})}function f(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1);D(a)})}function D(a){var b=a.config,c=b.plugins,d=b.extraPlugins,e=
b.removePlugins;if(d)var f=new RegExp("(?:^|,)(?:"+d.replace(/\s*,\s*/g,"|")+")(?\x3d,|$)","g"),c=c.replace(f,""),c=c+(","+d);if(e)var g=new RegExp("(?:^|,)(?:"+e.replace(/\s*,\s*/g,"|")+")(?\x3d,|$)","g"),c=c.replace(g,"");CKEDITOR.env.air&&(c+=",adobeair");CKEDITOR.plugins.load(c.split(","),function(c){var d=[],e=[],f=[];a.plugins=c;for(var l in c){var r=c[l],k=r.lang,h=null,O=r.requires,p;CKEDITOR.tools.isArray(O)&&(O=O.join(","));if(O&&(p=O.match(g)))for(;O=p.pop();)CKEDITOR.error("editor-plugin-required",
{plugin:O.replace(",",""),requiredBy:l});k&&!a.lang[l]&&(k.split&&(k=k.split(",")),0<=CKEDITOR.tools.indexOf(k,a.langCode)?h=a.langCode:(h=a.langCode.replace(/-.*/,""),h=h!=a.langCode&&0<=CKEDITOR.tools.indexOf(k,h)?h:0<=CKEDITOR.tools.indexOf(k,"en")?"en":k[0]),r.langEntries&&r.langEntries[h]?(a.lang[l]=r.langEntries[h],h=null):f.push(CKEDITOR.getUrl(r.path+"lang/"+h+".js")));e.push(h);d.push(r)}CKEDITOR.scriptLoader.load(f,function(){for(var c=["beforeInit","init","afterInit"],f=0;f<c.length;f++)for(var l=
0;l<d.length;l++){var v=d[l];0===f&&e[l]&&v.lang&&v.langEntries&&(a.lang[v.name]=v.langEntries[e[l]]);if(v[c[f]])v[c[f]](a)}a.fireOnce("pluginsLoaded");b.keystrokes&&a.setKeystroke(a.config.keystrokes);for(l=0;l<a.config.blockedKeystrokes.length;l++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[l]]=1;a.status="loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded",null,a)})})}function w(){var a=this.element;if(a&&this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData();
this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b));a.is("textarea")?a.setValue(b):a.setHtml(b);return!0}return!1}function A(a,b){function c(a){var b=a.startContainer,d=a.endContainer;return b.is&&(b.is("tr")||b.is("td")&&b.equals(d)&&a.endOffset===b.getChildCount())?!0:!1}function d(a){var b=a.startContainer;return b.is("tr")?a.cloneContents():b.clone(!0)}for(var e=new CKEDITOR.dom.documentFragment,f,g,k,h=0;h<a.length;h++){var u=a[h],y=u.startContainer.getAscendant("tr",!0);c(u)?(f||
(f=y.getAscendant("table").clone(),f.append(y.getAscendant({thead:1,tbody:1,tfoot:1}).clone()),e.append(f),f=f.findOne("thead, tbody, tfoot")),g&&g.equals(y)||(g=y,k=y.clone(),f.append(k)),k.append(d(u))):e.append(u.cloneContents())}return f?e:b.getHtmlFromRange(a[0])}a.prototype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var G=0,x={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(a,b){b.name=a.toLowerCase();var c=new CKEDITOR.command(this,b);this.mode&&e(this,c);return this.commands[a]=
c},_attachToForm:function(){function a(b){c.updateElement();c._.required&&!d.getValue()&&!1===c.fire("required")&&b.data.preventDefault()}function b(a){return!!(a&&a.call&&a.apply)}var c=this,d=c.element,e=new CKEDITOR.dom.element(d.$.form);d.is("textarea")&&e&&(e.on("submit",a),b(e.$.submit)&&(e.$.submit=CKEDITOR.tools.override(e.$.submit,function(b){return function(){a();b.apply?b.apply(this):b()}})),c.on("destroy",function(){e.removeListener("submit",a)}))},destroy:function(a){this.fire("beforeDestroy");
!a&&w.call(this);this.editable(null);this.filter&&(this.filter.destroy(),delete this.filter);delete this.activeFilter;this.status="destroyed";this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed",null,this)},elementPath:function(a){if(!a){a=this.getSelection();if(!a)return null;a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable();return a?new CKEDITOR.dom.range(a):null},execCommand:function(a,
b){var c=this.getCommand(a),d={name:a,commandData:b||{},command:c};return c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&!1!==this.fire("beforeCommandExec",d)&&(d.returnValue=c.exec(d.commandData),!c.async&&!1!==this.fire("afterCommandExec",d))?d.returnValue:!1},getCommand:function(a){return this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData");var b=this._.data;"string"!=typeof b&&(b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():
"");b={dataValue:b};!a&&this.fire("getData",b);return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot");"string"!=typeof a&&(a=(a=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?a.is("textarea")?a.getValue():a.getHtml():"");return a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){var d=!0,e=b;b&&"object"==typeof b&&(c=b.internal,e=b.callback,d=!b.noSnapshot);!c&&d&&this.fire("saveSnapshot");if(e||!c)this.once("dataReady",function(a){!c&&
d&&this.fire("saveSnapshot");e&&e.call(a.editor)});a={dataValue:a};!c&&this.fire("setData",a);this._.data=a.dataValue;!c&&this.fire("afterSetData",a)},setReadOnly:function(a){a=null==a||a;this.readOnly!=a&&(this.readOnly=a,this.keystrokeHandler.blockedKeystrokes[8]=+a,this.editable().setReadOnly(a),this.fire("readOnly"))},insertHtml:function(a,b,c){this.fire("insertHtml",{dataValue:a,mode:b,range:c})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",
a)},getSelectedHtml:function(a){var b=this.editable(),c=this.getSelection(),c=c&&c.getRanges();if(!b||!c||0===c.length)return null;b=A(c,b);return a?b.getHtml():b},extractSelectedHtml:function(a,b){var c=this.editable(),d=this.getSelection().getRanges(),e=new CKEDITOR.dom.documentFragment,f;if(!c||0===d.length)return null;for(f=0;f<d.length;f++)e.append(c.extractHtmlFromRange(d[f],b));b||this.getSelection().selectRanges([d[0]]);return a?e.getHtml():e},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return"ready"==
this.status&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=this.getSnapshot()},updateElement:function(){return w.call(this)},setKeystroke:function(){for(var a=this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?arguments[0]:[[].slice.call(arguments,0)],c,d,e=b.length;e--;)c=b[e],d=0,CKEDITOR.tools.isArray(c)&&(d=c[1],c=c[0]),d?a[c]=d:delete a[c]},getCommandKeystroke:function(a){if(a="string"===typeof a?this.getCommand(a):a){var b=CKEDITOR.tools.object.findKey(this.commands,
a),c=this.keystrokeHandler.keystrokes,d;if(a.fakeKeystroke)return a.fakeKeystroke;for(d in c)if(c.hasOwnProperty(d)&&c[d]==b)return d}return null},addFeature:function(a){return this.filter.addFeature(a)},setActiveFilter:function(a){a||(a=this.filter);this.activeFilter!==a&&(this.activeFilter=a,this.fire("activeFilterChange"),a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode),a.getAllowedEnterMode(this.shiftEnterMode,!0)))},setActiveEnterMode:function(a,
b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode;b=b?this.blockless?CKEDITOR.ENTER_BR:b:this.shiftEnterMode;if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b)this.activeEnterMode=a,this.activeShiftEnterMode=b,this.fire("activeEnterModeChange")},showNotification:function(a){alert(a)}})})();CKEDITOR.ELEMENT_MODE_NONE=0;CKEDITOR.ELEMENT_MODE_REPLACE=1;CKEDITOR.ELEMENT_MODE_APPENDTO=2;CKEDITOR.ELEMENT_MODE_INLINE=3;CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}};
(function(){var a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,d={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var c,e,g=0,h;c=this._.htmlPartsRegex.exec(b);){e=c.index;if(e>g)if(g=b.substring(g,e),h)h.push(g);else this.onText(g);
g=this._.htmlPartsRegex.lastIndex;if(e=c[1])if(e=e.toLowerCase(),h&&CKEDITOR.dtd.$cdata[e]&&(this.onCDATA(h.join("")),h=null),!h){this.onTagClose(e);continue}if(h)h.push(c[0]);else if(e=c[3]){if(e=e.toLowerCase(),!/="/.test(e)){var k={},n,q=c[4];c=!!c[5];if(q)for(;n=a.exec(q);){var f=n[1].toLowerCase();n=n[2]||n[3]||n[4]||"";k[f]=!n&&d[f]?f:CKEDITOR.tools.htmlDecodeAttr(n)}this.onTagOpen(e,k,c);!h&&CKEDITOR.dtd.$cdata[e]&&(h=[])}}else if(e=c[2])this.onComment(e)}if(b.length>g)this.onText(b.substring(g,
b.length))}}})();
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("\x3c",a)},openTagClose:function(a,d){d?this._.output.push(" /\x3e"):this._.output.push("\x3e")},attribute:function(a,d){"string"==typeof d&&(d=CKEDITOR.tools.htmlEncodeAttr(d));this._.output.push(" ",a,'\x3d"',d,'"')},closeTag:function(a){this._.output.push("\x3c/",a,"\x3e")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("\x3c!--",a,
"--\x3e")},write:function(a){this._.output.push(a)},reset:function(){this._.output=[];this._.indent=!1},getHtml:function(a){var d=this._.output.join("");a&&this.reset();return d}}});"use strict";
(function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype={remove:function(){var a=this.parent.children,d=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next;b&&(b.next=c);c&&(c.previous=b);a.splice(d,1);this.parent=null},replaceWith:function(a){var d=this.parent.children,b=CKEDITOR.tools.indexOf(d,this),c=a.previous=this.previous,e=a.next=this.next;c&&(c.next=a);e&&(e.previous=a);d[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var d=a.parent.children,
b=CKEDITOR.tools.indexOf(d,a),c=a.next;d.splice(b+1,0,this);this.next=a.next;this.previous=a;a.next=this;c&&(c.previous=this);this.parent=a.parent},insertBefore:function(a){var d=a.parent.children,b=CKEDITOR.tools.indexOf(d,a);d.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var d="function"==typeof a?a:"string"==typeof a?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&
b.type==CKEDITOR.NODE_ELEMENT;){if(d(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}})();"use strict";CKEDITOR.htmlParser.comment=function(a){this.value=a;this._={isBlockLike:!1}};
CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,d){var b=this.value;if(!(b=a.onComment(d,b,this)))return this.remove(),!1;if("string"!=typeof b)return this.replaceWith(b),!1;this.value=b;return!0},writeHtml:function(a,d){d&&this.filter(d);a.comment(this.value)}});"use strict";
(function(){CKEDITOR.htmlParser.text=function(a){this.value=a;this._={isBlockLike:!1}};CKEDITOR.htmlParser.text.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,d){if(!(this.value=a.onText(d,this.value,this)))return this.remove(),!1},writeHtml:function(a,d){d&&this.filter(d);a.text(this.value)}})})();"use strict";
(function(){CKEDITOR.htmlParser.cdata=function(a){this.value=a};CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})})();"use strict";CKEDITOR.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:!0,hasInlineStarted:!1}};
(function(){function a(a){return a.attributes["data-cke-survive"]?!1:"a"==a.name&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var d=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),e={ul:"li",ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"};CKEDITOR.htmlParser.fragment.fromHtml=
function(g,h,k){function n(a){var b;if(0<m.length)for(var c=0;c<m.length;c++){var d=m[c],e=d.name,f=CKEDITOR.dtd[e],l=z.name&&CKEDITOR.dtd[z.name];l&&!l[e]||a&&f&&!f[a]&&CKEDITOR.dtd[a]?e==z.name&&(D(z,z.parent,1),c--):(b||(q(),b=1),d=d.clone(),d.parent=z,z=d,m.splice(c,1),c--)}}function q(){for(;K.length;)D(K.shift(),z)}function f(a){if(a._.isBlockLike&&"pre"!=a.name&&"textarea"!=a.name){var b=a.children.length,c=a.children[b-1],d;c&&c.type==CKEDITOR.NODE_TEXT&&((d=CKEDITOR.tools.rtrim(c.value))?
c.value=d:a.children.length=b-1)}}function D(b,c,d){c=c||z||x;var e=z;void 0===b.previous&&(w(c,b)&&(z=c,G.onTagOpen(k,{}),b.returnPoint=c=z),f(b),a(b)&&!b.children.length||c.add(b),"pre"==b.name&&(l=!1),"textarea"==b.name&&(I=!1));b.returnPoint?(z=b.returnPoint,delete b.returnPoint):z=d?c:e}function w(a,b){if((a==x||"body"==a.name)&&k&&(!a.name||CKEDITOR.dtd[a.name][k])){var c,d;return(c=b.attributes&&(d=b.attributes["data-cke-real-element-type"])?d:b.name)&&c in CKEDITOR.dtd.$inline&&!(c in CKEDITOR.dtd.head)&&
!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function A(a,b){return a in CKEDITOR.dtd.$listItem||a in CKEDITOR.dtd.$tableContent?a==b||"dt"==a&&"dd"==b||"dd"==a&&"dt"==b:!1}var G=new CKEDITOR.htmlParser,x=h instanceof CKEDITOR.htmlParser.element?h:"string"==typeof h?new CKEDITOR.htmlParser.element(h):new CKEDITOR.htmlParser.fragment,m=[],K=[],z=x,I="textarea"==x.name,l="pre"==x.name;G.onTagOpen=function(e,f,g,k){f=new CKEDITOR.htmlParser.element(e,f);f.isUnknown&&g&&(f.isEmpty=!0);f.isOptionalClose=k;
if(a(f))m.push(f);else{if("pre"==e)l=!0;else{if("br"==e&&l){z.add(new CKEDITOR.htmlParser.text("\n"));return}"textarea"==e&&(I=!0)}if("br"==e)K.push(f);else{for(;!(k=(g=z.name)?CKEDITOR.dtd[g]||(z._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c,f.isUnknown||z.isUnknown||k[e]);)if(z.isOptionalClose)G.onTagClose(g);else if(e in b&&g in b)g=z.children,(g=g[g.length-1])&&"li"==g.name||D(g=new CKEDITOR.htmlParser.element("li"),z),!f.returnPoint&&(f.returnPoint=z),z=g;else if(e in CKEDITOR.dtd.$listItem&&
!A(e,g))G.onTagOpen("li"==e?"ul":"dl",{},0,1);else if(g in d&&!A(e,g))!f.returnPoint&&(f.returnPoint=z),z=z.parent;else if(g in CKEDITOR.dtd.$inline&&m.unshift(z),z.parent)D(z,z.parent,1);else{f.isOrphan=1;break}n(e);q();f.parent=z;f.isEmpty?D(f):z=f}}};G.onTagClose=function(a){for(var b=m.length-1;0<=b;b--)if(a==m[b].name){m.splice(b,1);return}for(var c=[],d=[],e=z;e!=x&&e.name!=a;)e._.isBlockLike||d.unshift(e),c.push(e),e=e.returnPoint||e.parent;if(e!=x){for(b=0;b<c.length;b++){var f=c[b];D(f,f.parent)}z=
e;e._.isBlockLike&&q();D(e,e.parent);e==z&&(z=z.parent);m=m.concat(d)}"body"==a&&(k=!1)};G.onText=function(a){if(!(z._.hasInlineStarted&&!K.length||l||I)&&(a=CKEDITOR.tools.ltrim(a),0===a.length))return;var b=z.name,f=b?CKEDITOR.dtd[b]||(z._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!I&&!f["#"]&&b in d)G.onTagOpen(e[b]||""),G.onText(a);else{q();n();l||I||(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));a=new CKEDITOR.htmlParser.text(a);if(w(z,a))this.onTagOpen(k,{},0,1);z.add(a)}};G.onCDATA=
function(a){z.add(new CKEDITOR.htmlParser.cdata(a))};G.onComment=function(a){q();n();z.add(new CKEDITOR.htmlParser.comment(a))};G.parse(g);for(q();z!=x;)D(z,z.parent,1);f(x);return x};CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length);var c=0<b?this.children[b-1]:null;if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT&&(c.value=CKEDITOR.tools.rtrim(c.value),0===c.value.length)){this.children.pop();this.add(a);return}c.next=
a}a.previous=c;a.parent=this;this.children.splice(b,0,a);this._.hasInlineStarted||(this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike)},filter:function(a,b){b=this.getFilterContext(b);a.onRoot(b,this);this.filterChildren(a,!1,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c);if(b&&!this.parent)a.onRoot(c,this);this.childrenFilteredBy=a.id;for(b=0;b<this.children.length;b++)!1===this.children[b].filter(a,
c)&&b--}},writeHtml:function(a,b){b&&this.filter(b);this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var d=this.getFilterContext();if(c&&!this.parent&&b)b.onRoot(d,this);b&&this.filterChildren(b,!1,d);b=0;c=this.children;for(d=c.length;b<d;b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!(c||b&&this.type!=b))var d=a(this);if(!1!==d){c=this.children;for(var e=0;e<c.length;e++)d=c[e],d.type==CKEDITOR.NODE_ELEMENT?d.forEach(a,b):b&&d.type!=b||a(d)}},getFilterContext:function(a){return a||
{}}}})();"use strict";
(function(){function a(){this.rules=[]}function d(b,c,d,g){var h,k;for(h in c)(k=b[h])||(k=b[h]=new a),k.add(c[h],d,g)}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=CKEDITOR.tools.getNextNumber();this.elementNameRules=new a;this.attributeNameRules=new a;this.elementsRules={};this.attributesRules={};this.textRules=new a;this.commentRules=new a;this.rootRules=new a;b&&this.addRules(b,10)},proto:{addRules:function(a,c){var e;"number"==typeof c?e=c:c&&"priority"in c&&(e=
c.priority);"number"!=typeof e&&(e=10);"object"!=typeof c&&(c={});a.elementNames&&this.elementNameRules.addMany(a.elementNames,e,c);a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,e,c);a.elements&&d(this.elementsRules,a.elements,e,c);a.attributes&&d(this.attributesRules,a.attributes,e,c);a.text&&this.textRules.add(a.text,e,c);a.comment&&this.commentRules.add(a.comment,e,c);a.root&&this.rootRules.add(a.root,e,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a,
c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,d){return this.textRules.exec(a,c,d)},onComment:function(a,c,d){return this.commentRules.exec(a,c,d)},onRoot:function(a,c){return this.rootRules.exec(a,c)},onElement:function(a,c){for(var d=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],g,h=0;3>h;h++)if(g=d[h]){g=g.exec(a,c,this);if(!1===g)return null;if(g&&g!=c)return this.onNode(a,g);if(c.parent&&!c.name)break}return c},
onNode:function(a,c){var d=c.type;return d==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):d==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(a,c.value)):d==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,d,g){return(d=this.attributesRules[d])?d.exec(a,g,c,this):g}}});CKEDITOR.htmlParser.filterRulesGroup=a;a.prototype={add:function(a,c,d){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:d})},addMany:function(a,
c,d){for(var g=[this.findIndex(c),0],h=0,k=a.length;h<k;h++)g.push({value:a[h],priority:c,options:d});this.rules.splice.apply(this.rules,g)},findIndex:function(a){for(var c=this.rules,d=c.length-1;0<=d&&a<c[d].priority;)d--;return d+1},exec:function(a,c){var d=c instanceof CKEDITOR.htmlParser.node||c instanceof CKEDITOR.htmlParser.fragment,g=Array.prototype.slice.call(arguments,1),h=this.rules,k=h.length,n,q,f,D;for(D=0;D<k;D++)if(d&&(n=c.type,q=c.name),f=h[D],!(a.nonEditable&&!f.options.applyToAll||
a.nestedEditable&&f.options.excludeNestedEditable)){f=f.value.apply(null,g);if(!1===f||d&&f&&(f.name!=q||f.type!=n))return f;null!=f&&(g[0]=c=f)}return c},execOnName:function(a,c){for(var d=0,g=this.rules,h=g.length,k;c&&d<h;d++)k=g[d],a.nonEditable&&!k.options.applyToAll||a.nestedEditable&&k.options.excludeNestedEditable||(c=c.replace(k.value[0],k.value[1]));return c}}})();
(function(){function a(a,d){function f(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function v(a,d){return function(e){if(e.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var t=[],l=b(e),v,p;if(l)for(u(l,1)&&t.push(l);l;)g(l)&&(v=c(l))&&u(v)&&((p=c(v))&&!g(p)?t.push(v):(f(y).insertAfter(v),v.remove())),l=l.previous;for(l=0;l<t.length;l++)t[l].remove();if(t=!a||!1!==("function"==typeof d?d(e):d))y||CKEDITOR.env.needsBrFiller||
e.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT?y||CKEDITOR.env.needsBrFiller||!(7<document.documentMode||e.name in CKEDITOR.dtd.tr||e.name in CKEDITOR.dtd.$listItem)?(t=b(e),t=!t||"form"==e.name&&"input"==t.name):t=!1:t=!1;t&&e.add(f(a))}}}function u(a,b){if((!y||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&"br"==a.name&&!a.attributes["data-cke-eol"])return!0;var c;return a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(m))&&(c.index&&((new CKEDITOR.htmlParser.text(a.value.substring(0,c.index))).insertBefore(a),
a.value=c[0]),!CKEDITOR.env.needsBrFiller&&y&&(!b||a.parent.name in B)||!y&&((c=a.previous)&&"br"==c.name||!c||g(c)))?!0:!1}var p={elements:{}},y="html"==d,B=CKEDITOR.tools.extend({},l),C;for(C in B)"#"in z[C]||delete B[C];for(C in B)p.elements[C]=v(y,a.config.fillEmptyBlocks);p.root=v(y,!1);p.elements.br=function(a){return function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var d=b.attributes;if("data-cke-bogus"in d||"data-cke-eol"in d)delete d["data-cke-bogus"];else{for(d=b.next;d&&e(d);)d=
d.next;var t=c(b);!d&&g(b.parent)?h(b.parent,f(a)):g(d)&&t&&!g(t)&&f(a).insertBefore(d)}}}}(y);return p}function d(a,b){return a!=CKEDITOR.ENTER_BR&&!1!==b?a==CKEDITOR.ENTER_DIV?"div":"p":!1}function b(a){for(a=a.children[a.children.length-1];a&&e(a);)a=a.previous;return a}function c(a){for(a=a.previous;a&&e(a);)a=a.previous;return a}function e(a){return a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&&a.attributes["data-cke-bookmark"]}function g(a){return a&&
(a.type==CKEDITOR.NODE_ELEMENT&&a.name in l||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function h(a,b){var c=a.children[a.children.length-1];a.children.push(b);b.parent=a;c&&(c.next=b,b.previous=c)}function k(a){a=a.attributes;"false"!=a.contenteditable&&(a["data-cke-editable"]=a.contenteditable?"true":1);a.contenteditable="false"}function n(a){a=a.attributes;switch(a["data-cke-editable"]){case "true":a.contenteditable="true";break;case "1":delete a.contenteditable}}function q(a){return a.replace(u,
function(a,b,c){return"\x3c"+b+c.replace(y,function(a,b){return v.test(b)&&-1==c.indexOf("data-cke-saved-"+b)?" data-cke-saved-"+a+" data-cke-"+CKEDITOR.rnd+"-"+a:a})+"\x3e"})}function f(a,b){return a.replace(b,function(a,b,c){0===a.indexOf("\x3ctextarea")&&(a=b+A(c).replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;")+"\x3c/textarea\x3e");return"\x3ccke:encoded\x3e"+encodeURIComponent(a)+"\x3c/cke:encoded\x3e"})}function D(a){return a.replace(V,function(a,b){return decodeURIComponent(b)})}function w(a){return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g,
function(a){return"\x3c!--"+K+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\x3e"})}function A(a){return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g,function(a,b){return decodeURIComponent(b)})}function G(a,b){var c=b._.dataStore;return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return c&&c[b]||""})}function x(a,b){var c=[],d=b.config.protectedSource,e=b._.dataStore||(b._.dataStore=
{id:1}),f=/<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g,d=[/<script[\s\S]*?(<\/script>|$)/gi,/<noscript[\s\S]*?<\/noscript>/gi,/<meta[\s\S]*?\/?>/gi].concat(d);a=a.replace(/\x3c!--[\s\S]*?--\x3e/g,function(a){return"\x3c!--{cke_tempcomment}"+(c.push(a)-1)+"--\x3e"});for(var l=0;l<d.length;l++)a=a.replace(d[l],function(a){a=a.replace(f,function(a,b,d){return c[d]});return/cke_temp(comment)?/.test(a)?a:"\x3c!--{cke_temp}"+(c.push(a)-1)+"--\x3e"});a=a.replace(f,function(a,b,d){return"\x3c!--"+K+(b?"{C}":
"")+encodeURIComponent(c[d]).replace(/--/g,"%2D%2D")+"--\x3e"});a=a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g,function(a){return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g,function(a,b){e[e.id]=decodeURIComponent(b);return"{cke_protected_"+e.id++ +"}"})});return a=a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g,function(a,c,d,e){return"\x3c"+c+d+"\x3e"+G(A(e),b)+"\x3c/"+c+"\x3e"})}CKEDITOR.htmlDataProcessor=function(b){var c,
e,l=this;this.editor=b;this.dataFilter=c=new CKEDITOR.htmlParser.filter;this.htmlFilter=e=new CKEDITOR.htmlParser.filter;this.writer=new CKEDITOR.htmlParser.basicWriter;c.addRules(r);c.addRules(J,{applyToAll:!0});c.addRules(a(b,"data"),{applyToAll:!0});e.addRules(H);e.addRules(E,{applyToAll:!0});e.addRules(a(b,"html"),{applyToAll:!0});b.on("toHtml",function(a){a=a.data;var c=a.dataValue,e,c=x(c,b),c=f(c,L),c=q(c),c=f(c,B),c=c.replace(O,"$1cke:$2"),c=c.replace(C,"\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"),
c=c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi,"$1data-cke-"+CKEDITOR.rnd+"-$2");e=a.context||b.editable().getName();var l;CKEDITOR.env.ie&&9>CKEDITOR.env.version&&"pre"==e&&(e="div",c="\x3cpre\x3e"+c+"\x3c/pre\x3e",l=1);e=b.document.createElement(e);e.setHtml("a"+c);c=e.getHtml().substr(1);c=c.replace(new RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),"");l&&(c=c.replace(/^<pre>|<\/pre>$/gi,""));c=c.replace(p,"$1$2");c=D(c);c=A(c);e=!1===a.fixForBody?!1:
d(a.enterMode,b.config.autoParagraph);c=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,e);e&&(l=c,!l.children.length&&CKEDITOR.dtd[l.name][e]&&(e=new CKEDITOR.htmlParser.element(e),l.add(e)));a.dataValue=c},null,null,5);b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,!0,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6);b.on("toHtml",function(a){a.data.dataValue.filterChildren(l.dataFilter,!0)},null,null,10);b.on("toHtml",function(a){a=a.data;var b=a.dataValue,
c=new CKEDITOR.htmlParser.basicWriter;b.writeChildrenHtml(c);b=c.getHtml(!0);a.dataValue=w(b)},null,null,15);b.on("toDataFormat",function(a){var c=a.data.dataValue;a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,""));a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.data.context,d(a.data.enterMode,b.config.autoParagraph))},null,null,5);b.on("toDataFormat",function(a){a.data.dataValue.filterChildren(l.htmlFilter,!0)},null,null,10);b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,
!1,!0)},null,null,11);b.on("toDataFormat",function(a){var c=a.data.dataValue,d=l.writer;d.reset();c.writeChildrenHtml(d);c=d.getHtml(!0);c=A(c);c=G(c,b);a.data.dataValue=c},null,null,15)};CKEDITOR.htmlDataProcessor.prototype={toHtml:function(a,b,c,d){var e=this.editor,f,l,v,g;b&&"object"==typeof b?(f=b.context,c=b.fixForBody,d=b.dontFilter,l=b.filter,v=b.enterMode,g=b.protectedWhitespaces):f=b;f||null===f||(f=e.editable().getName());return e.fire("toHtml",{dataValue:a,context:f,fixForBody:c,dontFilter:d,
filter:l||e.filter,enterMode:v||e.enterMode,protectedWhitespaces:g}).dataValue},toDataFormat:function(a,b){var c,d,e;b&&(c=b.context,d=b.filter,e=b.enterMode);c||null===c||(c=this.editor.editable().getName());return this.editor.fire("toDataFormat",{dataValue:a,filter:d||this.editor.filter,context:c,enterMode:e||this.editor.enterMode}).dataValue}};var m=/(?:&nbsp;|\xa0)$/,K="{cke_protected}",z=CKEDITOR.dtd,I="caption colgroup col thead tfoot tbody".split(" "),l=CKEDITOR.tools.extend({},z.$blockLimit,
z.$block),r={elements:{input:k,textarea:k}},J={attributeNames:[[/^on/,"data-cke-pa-on"],[/^srcdoc/,"data-cke-pa-srcdoc"],[/^data-cke-expando$/,""]],elements:{iframe:function(a){if(a.attributes&&a.attributes.src){var b=a.attributes.src.toLowerCase().replace(/[^a-z]/gi,"");if(0===b.indexOf("javascript")||0===b.indexOf("data"))a.attributes["data-cke-pa-src"]=a.attributes.src,delete a.attributes.src}}}},H={elements:{embed:function(a){var b=a.parent;if(b&&"object"==b.name){var c=b.attributes.width,b=b.attributes.height;
c&&(a.attributes.width=c);b&&(a.attributes.height=b)}},a:function(a){var b=a.attributes;if(!(a.children.length||b.name||b.id||a.attributes["data-cke-saved-name"]))return!1}}},E={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var b=a.attributes;if(b){if(b["data-cke-temp"])return!1;for(var c=["name","href","src"],d,e=0;e<c.length;e++)d="data-cke-saved-"+c[e],d in b&&delete b[c[e]]}return a},
table:function(a){a.children.slice(0).sort(function(a,b){var c,d;a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type&&(c=CKEDITOR.tools.indexOf(I,a.name),d=CKEDITOR.tools.indexOf(I,b.name));-1<c&&-1<d&&c!=d||(c=a.parent?a.getIndex():-1,d=b.parent?b.getIndex():-1);return c>d?1:-1})},param:function(a){a.children=[];a.isEmpty=!0;return a},span:function(a){"Apple-style-span"==a.attributes["class"]&&delete a.name},html:function(a){delete a.attributes.contenteditable;delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck;
delete a.attributes.contenteditable},style:function(a){var b=a.children[0];b&&b.value&&(b.value=CKEDITOR.tools.trim(b.value));a.attributes.type||(a.attributes.type="text/css")},title:function(a){var b=a.children[0];!b&&h(a,b=new CKEDITOR.htmlParser.text);b.value=a.attributes["data-cke-title"]||""},input:n,textarea:n},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,""))||!1}}};CKEDITOR.env.ie&&(E.attributes.style=function(a){return a.replace(/(^|;)([^\:]+)/g,
function(a){return a.toLowerCase()})});var u=/<(a|area|img|input|source)\b([^>]*)>/gi,y=/([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,v=/^(href|src|name)$/i,B=/(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,L=/(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,V=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,O=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,p=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,C=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi})();
"use strict";CKEDITOR.htmlParser.element=function(a,d){this.name=a;this.attributes=d||{};this.children=[];var b=a||"",c=b.match(/^cke:(.*)/);c&&(b=c[1]);b=!!(CKEDITOR.dtd.$nonBodyContent[b]||CKEDITOR.dtd.$block[b]||CKEDITOR.dtd.$listItem[b]||CKEDITOR.dtd.$tableContent[b]||CKEDITOR.dtd.$nonEditable[b]||"br"==b);this.isEmpty=!!CKEDITOR.dtd.$empty[a];this.isUnknown=!CKEDITOR.dtd[a];this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}};
CKEDITOR.htmlParser.cssStyle=function(a){var d={};((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:a)||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,c,e){"font-family"==c&&(e=e.replace(/["']/g,""));d[c.toLowerCase()]=e});return{rules:d,populate:function(a){var c=this.toString();c&&(a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c)},toString:function(){var a=[],c;
for(c in d)d[c]&&a.push(c,":",d[c],";");return a.join("")}}};
(function(){function a(a){return function(b){return b.type==CKEDITOR.NODE_ELEMENT&&("string"==typeof a?b.name==a:b.name in a)}}var d=function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var d=this,h,k;b=d.getFilterContext(b);if(b.off)return!0;
if(!d.parent)a.onRoot(b,d);for(;;){h=d.name;if(!(k=a.onElementName(b,h)))return this.remove(),!1;d.name=k;if(!(d=a.onElement(b,d)))return this.remove(),!1;if(d!==this)return this.replaceWith(d),!1;if(d.name==h)break;if(d.type!=CKEDITOR.NODE_ELEMENT)return this.replaceWith(d),!1;if(!d.name)return this.replaceWithChildren(),!1}h=d.attributes;var n,q;for(n in h){for(k=h[n];;)if(q=a.onAttributeName(b,n))if(q!=n)delete h[n],n=q;else break;else{delete h[n];break}q&&(!1===(k=a.onAttribute(b,d,q,k))?delete h[q]:
h[q]=k)}d.isEmpty||this.filterChildren(a,!1,b);return!0},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b);var g=this.name,h=[],k=this.attributes,n,q;a.openTag(g,k);for(n in k)h.push([n,k[n]]);a.sortAttributes&&h.sort(d);n=0;for(q=h.length;n<q;n++)k=h[n],a.attribute(k[0],k[1]);a.openTagClose(g,this.isEmpty);this.writeChildrenHtml(a);this.isEmpty||a.closeTag(g)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a=this.children,b=a.length;b;)a[--b].insertAfter(this);
this.remove()},forEach:b.forEach,getFirst:function(b){if(!b)return this.children.length?this.children[0]:null;"function"!=typeof b&&(b=a(b));for(var d=0,g=this.children.length;d<g;++d)if(b(this.children[d]))return this.children[d];return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml(a);return a.getHtml()},setHtml:function(a){a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children;for(var b=0,d=a.length;b<d;++b)a[b].parent=this},getOuterHtml:function(){var a=
new CKEDITOR.htmlParser.basicWriter;this.writeHtml(a);return a.getHtml()},split:function(a){for(var b=this.children.splice(a,this.children.length-a),d=this.clone(),h=0;h<b.length;++h)b[h].parent=d;d.children=b;b[0]&&(b[0].previous=null);0<a&&(this.children[a-1].next=null);this.parent.add(d,this.getIndex()+1);return d},find:function(a,b){void 0===b&&(b=!1);var d=[],h;for(h=0;h<this.children.length;h++){var k=this.children[h];"function"==typeof a&&a(k)?d.push(k):"string"==typeof a&&k.name===a&&d.push(k);
b&&k.find&&(d=d.concat(k.find(a,b)))}return d},addClass:function(a){if(!this.hasClass(a)){var b=this.attributes["class"]||"";this.attributes["class"]=b+(b?" ":"")+a}},removeClass:function(a){var b=this.attributes["class"];b&&((b=CKEDITOR.tools.trim(b.replace(new RegExp("(?:\\s+|^)"+a+"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete this.attributes["class"])},hasClass:function(a){var b=this.attributes["class"];return b?(new RegExp("(?:^|\\s)"+a+"(?\x3d\\s|$)")).test(b):!1},getFilterContext:function(a){var b=
[];a||(a={off:!1,nonEditable:!1,nestedEditable:!1});a.off||"off"!=this.attributes["data-cke-processor"]||b.push("off",!0);a.nonEditable||"false"!=this.attributes.contenteditable?a.nonEditable&&!a.nestedEditable&&"true"==this.attributes.contenteditable&&b.push("nestedEditable",!0):b.push("nonEditable",!0);if(b.length){a=CKEDITOR.tools.copy(a);for(var d=0;d<b.length;d+=2)a[b[d]]=b[d+1]}return a}},!0)})();
(function(){var a=/{([^}]+)}/g;CKEDITOR.template=function(a){this.source=String(a)};CKEDITOR.template.prototype.output=function(d,b){var c=this.source.replace(a,function(a,b){return void 0!==d[b]?d[b]:a});return b?b.push(c):c}})();delete CKEDITOR.loadFullCore;CKEDITOR.instances={};CKEDITOR.document=new CKEDITOR.dom.document(document);
CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a;a.on("focus",function(){CKEDITOR.currentInstance!=a&&(CKEDITOR.currentInstance=a,CKEDITOR.fire("currentInstance"))});a.on("blur",function(){CKEDITOR.currentInstance==a&&(CKEDITOR.currentInstance=null,CKEDITOR.fire("currentInstance"))});CKEDITOR.fire("instance",null,a)};CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]};
(function(){var a={};CKEDITOR.addTemplate=function(d,b){var c=a[d];if(c)return c;c={name:d,source:b};CKEDITOR.fire("template",c);return a[d]=new CKEDITOR.template(c.source)};CKEDITOR.getTemplate=function(d){return a[d]}})();(function(){var a=[];CKEDITOR.addCss=function(d){a.push(d)};CKEDITOR.getCss=function(){return a.join("\n")}})();CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")});CKEDITOR.TRISTATE_ON=1;CKEDITOR.TRISTATE_OFF=2;
CKEDITOR.TRISTATE_DISABLED=0;
(function(){CKEDITOR.inline=function(a,d){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var b=new CKEDITOR.editor(d,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null;c?(b.setData(c.getValue(),null,!0),a=CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"'+!!b.readOnly+'" class\x3d"cke_textarea_inline"\x3e'+c.getValue()+"\x3c/div\x3e",CKEDITOR.document),
a.insertAfter(c),c.hide(),c.$.form&&b._attachToForm()):b.setData(a.getHtml(),null,!0);b.on("loaded",function(){b.fire("uiReady");b.editable(a);b.container=a;b.ui.contentsElement=a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode="wysiwyg";b.fire("mode");b.status="ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,b)},null,null,1E4);b.on("destroy",function(){c&&(b.container.clearCustomData(),b.container.remove(),c.show());b.element.clearCustomData();delete b.element});
return b};CKEDITOR.inlineAll=function(){var a,d,b;for(b in CKEDITOR.dtd.$editable)for(var c=CKEDITOR.document.getElementsByTag(b),e=0,g=c.count();e<g;e++)a=c.getItem(e),"true"==a.getAttribute("contenteditable")&&(d={element:a,config:{}},!1!==CKEDITOR.fire("inline",d)&&CKEDITOR.inline(a,d.config))};CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})})();CKEDITOR.replaceClass="ckeditor";
(function(){function a(a,e,g,h){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var k=new CKEDITOR.editor(e,a,h);h==CKEDITOR.ELEMENT_MODE_REPLACE&&(a.setStyle("visibility","hidden"),k._.required=a.hasAttribute("required"),a.removeAttribute("required"));g&&k.setData(g,null,!0);k.on("loaded",function(){b(k);h==CKEDITOR.ELEMENT_MODE_REPLACE&&k.config.autoUpdateElement&&
a.$.form&&k._attachToForm();k.setMode(k.config.startupMode,function(){k.resetDirty();k.status="ready";k.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,k)})});k.on("destroy",d);return k}function d(){var a=this.container,b=this.element;a&&(a.clearCustomData(),a.remove());b&&(b.clearCustomData(),this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&(b.show(),this._.required&&b.setAttribute("required","required")),delete this.element)}function b(a){var b=a.name,d=a.element,h=a.elementMode,k=
a.fire("uiSpace",{space:"top",html:""}).html,n=a.fire("uiSpace",{space:"bottom",html:""}).html,q=new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+CKEDITOR.env.cssClass+'"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"'+(a.title?' aria-labelledby\x3d"cke_{name}_arialbl"':"")+"\x3e"+(a.title?'\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e':"")+'\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
b=CKEDITOR.dom.element.createFromHtml(q.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:a.title,topHtml:k?'\x3cspan id\x3d"'+a.ui.spaceId("top")+'" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e'+k+"\x3c/span\x3e":"",contentId:a.ui.spaceId("contents"),bottomHtml:n?'\x3cspan id\x3d"'+a.ui.spaceId("bottom")+'" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e'+n+"\x3c/span\x3e":"",outerEl:CKEDITOR.env.ie?"span":"div"}));h==CKEDITOR.ELEMENT_MODE_REPLACE?
(d.hide(),b.insertAfter(d)):d.append(b);a.container=b;a.ui.contentsElement=a.ui.space("contents");k&&a.ui.space("top").unselectable();n&&a.ui.space("bottom").unselectable();d=a.config.width;h=a.config.height;d&&b.setStyle("width",CKEDITOR.tools.cssLength(d));h&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(h));b.disableContextMenu();CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});a.fireOnce("uiReady")}CKEDITOR.replace=function(b,d){return a(b,d,null,CKEDITOR.ELEMENT_MODE_REPLACE)};
CKEDITOR.appendTo=function(b,d,g){return a(b,d,g,CKEDITOR.ELEMENT_MODE_APPENDTO)};CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0;b<a.length;b++){var d=null,h=a[b];if(h.name||h.id){if("string"==typeof arguments[0]){if(!(new RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)")).test(h.className))continue}else if("function"==typeof arguments[0]&&(d={},!1===arguments[0](h,d)))continue;this.replace(h,d)}}};CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes=
{}))[a]=b};CKEDITOR.editor.prototype.setMode=function(a,b){var d=this,h=this._.modes;if(a!=d.mode&&h&&h[a]){d.fire("beforeSetMode",a);if(d.mode){var k=d.checkDirty(),h=d._.previousModeData,n,q=0;d.fire("beforeModeUnload");d.editable(0);d._.previousMode=d.mode;d._.previousModeData=n=d.getData(1);"source"==d.mode&&h==n&&(d.fire("lockSnapshot",{forceUpdate:!0}),q=1);d.ui.space("contents").setHtml("");d.mode=""}else d._.previousModeData=d.getData(1);this._.modes[a](function(){d.mode=a;void 0!==k&&!k&&
d.resetDirty();q?d.fire("unlockSnapshot"):"wysiwyg"==a&&d.fire("saveSnapshot");setTimeout(function(){d.fire("mode");b&&b.call(d)},0)})}};CKEDITOR.editor.prototype.resize=function(a,b,d,h){var k=this.container,n=this.ui.space("contents"),q=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement;h=h?this.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}):k;h.setSize("width",a,!0);q&&(q.style.width="1%");var f=(h.$.offsetHeight||0)-(n.$.clientHeight||
0),k=Math.max(b-(d?0:f),0);b=d?b+f:b;n.setStyle("height",k+"px");q&&(q.style.width="100%");this.fire("resize",{outerHeight:b,contentsHeight:k,outerWidth:a||h.getSize("width")})};CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container};CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})})();CKEDITOR.config.startupMode="wysiwyg";
(function(){function a(a){var b=a.editor,e=a.data.path,f=e.blockLimit,g=a.data.selection,u=g.getRanges()[0],y;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(g=d(g,e))g.appendBogus(),y=CKEDITOR.env.ie;h(b,e.block,f)&&u.collapsed&&!u.getCommonAncestor().isReadOnly()&&(e=u.clone(),e.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS),f=new CKEDITOR.dom.walker(e),f.guard=function(a){return!c(a)||a.type==CKEDITOR.NODE_COMMENT||a.isReadOnly()},!f.checkForward()||e.checkStartOfBlock()&&e.checkEndOfBlock())&&
(b=u.fixBlock(!0,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p"),CKEDITOR.env.needsBrFiller||(b=b.getFirst(c))&&b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/)&&b.remove(),y=1,a.cancel());y&&u.select()}function d(a,b){if(a.isFake)return 0;var d=b.block||b.blockLimit,e=d&&d.getLast(c);if(!(!d||!d.isBlockBoundary()||e&&e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary()||d.is("pre")||d.getBogus()))return d}function b(a){var b=a.data.getTarget();b.is("input")&&
(b=b.getAttribute("type"),"submit"!=b&&"reset"!=b||a.data.preventDefault())}function c(a){return f(a)&&D(a)}function e(a,b){return function(c){var d=c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget;(d=d&&d.nodeType==CKEDITOR.NODE_ELEMENT?new CKEDITOR.dom.element(d):null)&&(b.equals(d)||b.contains(d))||a.call(this,c)}}function g(a){function b(a){return function(b,e){e&&b.type==CKEDITOR.NODE_ELEMENT&&b.is(f)&&(d=b);if(!(e||!c(b)||a&&A(b)))return!1}}var d,e=a.getRanges()[0];a=a.root;
var f={table:1,ul:1,ol:1,dl:1};if(e.startPath().contains(f)){var u=e.clone();u.collapse(1);u.setStartAt(a,CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(u);a.guard=b();a.checkBackward();if(d)return u=e.clone(),u.collapse(),u.setEndAt(d,CKEDITOR.POSITION_AFTER_END),a=new CKEDITOR.dom.walker(u),a.guard=b(!0),d=!1,a.checkForward(),d}return null}function h(a,b,c){return!1!==a.config.autoParagraph&&a.activeEnterMode!=CKEDITOR.ENTER_BR&&(a.editable().equals(c)&&!b||b&&"true"==b.getAttribute("contenteditable"))}
function k(a){return a.activeEnterMode!=CKEDITOR.ENTER_BR&&!1!==a.config.autoParagraph?a.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p":!1}function n(a){var b=a.editor;b.getSelection().scrollIntoView();setTimeout(function(){b.fire("saveSnapshot")},0)}function q(a,b,c){var d=a.getCommonAncestor(b);for(b=a=c?b:a;(a=a.getParent())&&!d.equals(a)&&1==a.getChildCount();)b=a;b.remove()}var f,D,w,A,G,x,m,K,z,I;CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||
b);this.editor=a;this.status="unloaded";this.hasFocus=!1;this.setup()},proto:{focus:function(){var a;if(CKEDITOR.env.webkit&&!this.hasFocus&&(a=this.editor._.previousActive||this.getDocument().getActive(),this.contains(a))){a.focus();return}CKEDITOR.env.edge&&14<CKEDITOR.env.version&&!this.hasFocus&&this.getDocument().equals(CKEDITOR.document)&&(this.editor._.previousScrollTop=this.$.scrollTop);try{if(!CKEDITOR.env.ie||CKEDITOR.env.edge&&14<CKEDITOR.env.version||!this.getDocument().equals(CKEDITOR.document))if(CKEDITOR.env.chrome){var b=
this.$.scrollTop;this.$.focus();this.$.scrollTop=b}else this.$.focus();else this.$.setActive()}catch(c){if(!CKEDITOR.env.ie)throw c;}CKEDITOR.env.safari&&!this.isInline()&&(a=CKEDITOR.document.getActive(),a.equals(this.getWindow().getFrame())||this.getWindow().focus())},on:function(a,b){var c=Array.prototype.slice.call(arguments,0);CKEDITOR.env.ie&&/^focus|blur$/.exec(a)&&(a="focus"==a?"focusin":"focusout",b=e(b,this),c[0]=a,c[1]=b);return CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a){!this._.listeners&&
(this._.listeners=[]);var b=Array.prototype.slice.call(arguments,1),b=a.on.apply(a,b);this._.listeners.push(b);return b},clearListeners:function(){var a=this._.listeners;try{for(;a.length;)a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c;for(c in a)a.hasOwnProperty(c)&&(b=a[c],null!==b?this.setAttribute(c,b):this.removeAttribute(c))},attachClass:function(a){var b=this.getCustomData("classes");this.hasClass(a)||(!b&&(b=[]),b.push(a),this.setCustomData("classes",
b),this.addClass(a))},changeAttr:function(a,b){var c=this.getAttribute(a);b!==c&&(!this._.attrChanges&&(this._.attrChanges={}),a in this._.attrChanges||(this._.attrChanges[a]=c),this.setAttribute(a,b))},insertText:function(a){this.editor.focus();this.insertHtml(this.transformPlainTextToHtml(a),"text")},transformPlainTextToHtml:function(a){var b=this.editor.getSelection().getStartElement().hasAscendant("pre",!0)?CKEDITOR.ENTER_BR:this.editor.activeEnterMode;return CKEDITOR.tools.transformPlainTextToHtml(a,
b)},insertHtml:function(a,b,c){var d=this.editor;d.focus();d.fire("saveSnapshot");c||(c=d.getSelection().getRanges()[0]);x(this,b||"html",a,c);c.select();n(this);this.editor.fire("afterInsertHtml",{})},insertHtmlIntoRange:function(a,b,c){x(this,c||"html",a,b);this.editor.fire("afterInsertHtml",{intoRange:b})},insertElement:function(a,b){var d=this.editor;d.focus();d.fire("saveSnapshot");var e=d.activeEnterMode,d=d.getSelection(),f=a.getName(),f=CKEDITOR.dtd.$block[f];b||(b=d.getRanges()[0]);this.insertElementIntoRange(a,
b)&&(b.moveToPosition(a,CKEDITOR.POSITION_AFTER_END),f&&((f=a.getNext(function(a){return c(a)&&!A(a)}))&&f.type==CKEDITOR.NODE_ELEMENT&&f.is(CKEDITOR.dtd.$block)?f.getDtd()["#"]?b.moveToElementEditStart(f):b.moveToElementEditEnd(a):f||e==CKEDITOR.ENTER_BR||(f=b.fixBlock(!0,e==CKEDITOR.ENTER_DIV?"div":"p"),b.moveToElementEditStart(f))));d.selectRanges([b]);n(this)},insertElementIntoSelection:function(a){this.insertElement(a)},insertElementIntoRange:function(a,b){var c=this.editor,d=c.config.enterMode,
e=a.getName(),f=CKEDITOR.dtd.$block[e];if(b.checkReadOnly())return!1;b.deleteContents(1);b.startContainer.type==CKEDITOR.NODE_ELEMENT&&(b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})?m(b):b.startContainer.is(CKEDITOR.dtd.$list)&&K(b));var g,v;if(f)for(;(g=b.getCommonAncestor(0,1))&&(v=CKEDITOR.dtd[g.getName()])&&(!v||!v[e]);)g.getName()in CKEDITOR.dtd.span?b.splitElement(g):b.checkStartOfBlock()&&b.checkEndOfBlock()?(b.setStartBefore(g),b.collapse(!0),g.remove()):b.splitBlock(d==CKEDITOR.ENTER_DIV?
"div":"p",c.editable());b.insertNode(a);return!0},setData:function(a,b){b||(a=this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.fixInitialSelection();"unloaded"==this.status&&(this.status="ready");this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();a||(b=this.editor.dataProcessor.toDataFormat(b));return b},setReadOnly:function(a){this.setAttribute("contenteditable",!a)},detach:function(){this.removeClass("cke_editable");this.status="detached";var a=this.editor;this._.detach();
delete a.document;delete a.window},isInline:function(){return this.getDocument().equals(CKEDITOR.document)},fixInitialSelection:function(){function a(){var b=c.getDocument().$,d=b.getSelection(),e;a:if(d.anchorNode&&d.anchorNode==c.$)e=!0;else{if(CKEDITOR.env.webkit&&(e=c.getDocument().getActive())&&e.equals(c)&&!d.anchorNode){e=!0;break a}e=void 0}e&&(e=new CKEDITOR.dom.range(c),e.moveToElementEditStart(c),b=b.createRange(),b.setStart(e.startContainer.$,e.startOffset),b.collapse(!0),d.removeAllRanges(),
d.addRange(b))}function b(){var a=c.getDocument().$,d=a.selection,e=c.getDocument().getActive();"None"==d.type&&e.equals(c)&&(d=new CKEDITOR.dom.range(c),a=a.body.createTextRange(),d.moveToElementEditStart(c),d=d.startContainer,d.type!=CKEDITOR.NODE_ELEMENT&&(d=d.getParent()),a.moveToElementText(d.$),a.collapse(!0),a.select())}var c=this;if(CKEDITOR.env.ie&&(9>CKEDITOR.env.version||CKEDITOR.env.quirks))this.hasFocus&&(this.focus(),b());else if(this.hasFocus)this.focus(),a();else this.once("focus",
function(){a()},null,null,-999)},getHtmlFromRange:function(a){if(a.collapsed)return new CKEDITOR.dom.documentFragment(a.document);a={doc:this.getDocument(),range:a.clone()};z.eol.detect(a,this);z.bogus.exclude(a);z.cell.shrink(a);a.fragment=a.range.cloneContents();z.tree.rebuild(a,this);z.eol.fix(a,this);return new CKEDITOR.dom.documentFragment(a.fragment.$)},extractHtmlFromRange:function(a,b){var c=I,d={range:a,doc:a.document},e=this.getHtmlFromRange(a);if(a.collapsed)return a.optimize(),e;a.enlarge(CKEDITOR.ENLARGE_INLINE,
1);c.table.detectPurge(d);d.bookmark=a.createBookmark();delete d.range;var f=this.editor.createRange();f.moveToPosition(d.bookmark.startNode,CKEDITOR.POSITION_BEFORE_START);d.targetBookmark=f.createBookmark();c.list.detectMerge(d,this);c.table.detectRanges(d,this);c.block.detectMerge(d,this);d.tableContentsRanges?(c.table.deleteRanges(d),a.moveToBookmark(d.bookmark),d.range=a):(a.moveToBookmark(d.bookmark),d.range=a,a.extractContents(c.detectExtractMerge(d)));a.moveToBookmark(d.targetBookmark);a.optimize();
c.fixUneditableRangePosition(a);c.list.merge(d,this);c.table.purge(d,this);c.block.merge(d,this);if(b){c=a.startPath();if(d=a.checkStartOfBlock()&&a.checkEndOfBlock()&&c.block&&!a.root.equals(c.block)){a:{var d=c.block.getElementsByTag("span"),f=0,g;if(d)for(;g=d.getItem(f++);)if(!D(g)){d=!0;break a}d=!1}d=!d}d&&(a.moveToPosition(c.block,CKEDITOR.POSITION_BEFORE_START),c.block.remove())}else c.autoParagraph(this.editor,a),w(a.startContainer)&&a.startContainer.appendBogus();a.startContainer.mergeSiblings();
return e},setup:function(){var a=this.editor;this.attachListener(a,"beforeGetData",function(){var b=this.getData();this.is("textarea")||!1!==a.config.ignoreEmptyParagraph&&(b=b.replace(G,function(a,b){return b}));a.setData(b,null,1)},this);this.attachListener(a,"getSnapshot",function(a){a.data=this.getData(1)},this);this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this);this.attachListener(a,"loadSnapshot",function(a){this.setData(a.data,1)},this);this.attachListener(a,
"beforeFocus",function(){var b=a.getSelection();(b=b&&b.getNative())&&"Control"==b.type||this.focus()},this);this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode,a.data.range)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},this);this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?this.attachClass("cke_editable_inline"):
a.elementMode!=CKEDITOR.ELEMENT_MODE_REPLACE&&a.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO||this.attachClass("cke_editable_themed");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",function(){this.hasFocus=!1},null,null,-1);this.on("focus",function(){this.hasFocus=!0},null,null,-1);if(CKEDITOR.env.webkit)this.on("scroll",function(){a._.previousScrollTop=a.editable().$.scrollTop},null,
null,-1);if(CKEDITOR.env.edge&&14<CKEDITOR.env.version){var d=function(){var b=a.editable();null!=a._.previousScrollTop&&b.getDocument().equals(CKEDITOR.document)&&(b.$.scrollTop=a._.previousScrollTop,a._.previousScrollTop=null,this.removeListener("scroll",d))};this.on("scroll",d)}a.focusManager.add(this);this.equals(CKEDITOR.document.getActive())&&(this.hasFocus=!0,a.once("contentDom",function(){a.focusManager.focus(this)},this));this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=
this.getDocument();a.window=this.getWindow();var e=a.document;this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker);var k=a.config.contentsLangDirection;this.getDirection(1)!=k&&this.changeAttr("dir",k);var h=CKEDITOR.getCss();if(h){var k=e.getHead(),u=k.getCustomData("stylesheet");u?h!=u.getText()&&(CKEDITOR.env.ie&&9>CKEDITOR.env.version?u.$.styleSheet.cssText=h:u.setText(h)):(h=e.appendStyleText(h),h=new CKEDITOR.dom.element(h.ownerNode||h.owningElement),k.setCustomData("stylesheet",
h),h.data("cke-temp",1))}k=e.getCustomData("stylesheet_ref")||0;e.setCustomData("stylesheet_ref",k+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(this,"click",function(a){a=a.data;var b=(new CKEDITOR.dom.elementPath(a.getTarget(),this)).contains("a");b&&2!=a.$.button&&b.isReadOnly()&&a.preventDefault()});var y={8:1,46:1};this.attachListener(a,"key",function(b){if(a.readOnly)return!0;var c=b.data.domEvent.getKey(),d;b=a.getSelection();if(0!==b.getRanges().length){if(c in
y){var e,u=b.getRanges()[0],p=u.startPath(),C,t,k,c=8==c;CKEDITOR.env.ie&&11>CKEDITOR.env.version&&(e=b.getSelectedElement())||(e=g(b))?(a.fire("saveSnapshot"),u.moveToPosition(e,CKEDITOR.POSITION_BEFORE_START),e.remove(),u.select(),a.fire("saveSnapshot"),d=1):u.collapsed&&((C=p.block)&&(k=C[c?"getPrevious":"getNext"](f))&&k.type==CKEDITOR.NODE_ELEMENT&&k.is("table")&&u[c?"checkStartOfBlock":"checkEndOfBlock"]()?(a.fire("saveSnapshot"),u[c?"checkEndOfBlock":"checkStartOfBlock"]()&&C.remove(),u["moveToElementEdit"+
(c?"End":"Start")](k),u.select(),a.fire("saveSnapshot"),d=1):p.blockLimit&&p.blockLimit.is("td")&&(t=p.blockLimit.getAscendant("table"))&&u.checkBoundaryOfElement(t,c?CKEDITOR.START:CKEDITOR.END)&&(k=t[c?"getPrevious":"getNext"](f))?(a.fire("saveSnapshot"),u["moveToElementEdit"+(c?"End":"Start")](k),u.checkStartOfBlock()&&u.checkEndOfBlock()?k.remove():u.select(),a.fire("saveSnapshot"),d=1):(t=p.contains(["td","th","caption"]))&&u.checkBoundaryOfElement(t,c?CKEDITOR.START:CKEDITOR.END)&&(d=1))}return!d}});
a.blockless&&CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller&&this.attachListener(this,"keyup",function(b){b.data.getKeystroke()in y&&!this.getFirst(c)&&(this.appendBogus(),b=a.createRange(),b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START),b.select())});this.attachListener(this,"dblclick",function(b){if(a.readOnly)return!1;b={element:b.data.getTarget()};a.fire("doubleclick",b)});CKEDITOR.env.ie&&this.attachListener(this,"click",b);CKEDITOR.env.ie&&!CKEDITOR.env.edge||this.attachListener(this,"mousedown",
function(b){var c=b.data.getTarget();c.is("img","hr","input","textarea","select")&&!c.isReadOnly()&&(a.getSelection().selectElement(c),c.is("input","textarea","select")&&b.data.preventDefault())});CKEDITOR.env.edge&&this.attachListener(this,"mouseup",function(b){(b=b.data.getTarget())&&b.is("img")&&a.getSelection().selectElement(b)});CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(2==b.data.$.button&&(b=b.data.getTarget(),!b.getOuterHtml().replace(G,""))){var c=a.createRange();
c.moveToElementEditStart(b);c.select(!0)}});CKEDITOR.env.webkit&&(this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()}),this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()}));CKEDITOR.env.webkit&&this.attachListener(a,"key",function(b){if(a.readOnly)return!0;var c=b.data.domEvent.getKey();if(c in y&&(b=a.getSelection(),0!==b.getRanges().length)){var c=8==c,d=b.getRanges()[0];b=d.startPath();
if(d.collapsed)a:{var e=b.block;if(e&&d[c?"checkStartOfBlock":"checkEndOfBlock"]()&&d.moveToClosestEditablePosition(e,!c)&&d.collapsed){if(d.startContainer.type==CKEDITOR.NODE_ELEMENT){var f=d.startContainer.getChild(d.startOffset-(c?1:0));if(f&&f.type==CKEDITOR.NODE_ELEMENT&&f.is("hr")){a.fire("saveSnapshot");f.remove();b=!0;break a}}d=d.startPath().block;if(!d||d&&d.contains(e))b=void 0;else{a.fire("saveSnapshot");var p;(p=(c?d:e).getBogus())&&p.remove();p=a.getSelection();f=p.createBookmarks();
(c?e:d).moveChildren(c?d:e,!1);b.lastElement.mergeSiblings();q(e,d,!c);p.selectBookmarks(f);b=!0}}else b=!1}else c=d,p=b.block,d=c.endPath().block,p&&d&&!p.equals(d)?(a.fire("saveSnapshot"),(e=p.getBogus())&&e.remove(),c.enlarge(CKEDITOR.ENLARGE_INLINE),c.deleteContents(),d.getParent()&&(d.moveChildren(p,!1),b.lastElement.mergeSiblings(),q(p,d,!0)),c=a.getSelection().getRanges()[0],c.collapse(1),c.optimize(),""===c.startContainer.getHtml()&&c.startContainer.appendBogus(),c.select(),b=!0):b=!1;if(!b)return;
a.getSelection().scrollIntoView();a.fire("saveSnapshot");return!1}},this,null,100)}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();var a;if(a=this.removeCustomData("classes"))for(;a.length;)this.removeClass(a.pop());if(!this.is("textarea")){a=this.getDocument();var b=a.getHead();if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref");--c?a.setCustomData("stylesheet_ref",c):(a.removeCustomData("stylesheet_ref"),b.removeCustomData("stylesheet").remove())}}this.editor.fire("contentDomUnload");
delete this.editor}}});CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable;if(b&&a)return 0;arguments.length&&(b=this._.editable=a?a instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),null));return b};CKEDITOR.on("instanceLoaded",function(b){var c=b.editor;c.on("insertElement",function(a){a=a.data;a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))&&("false"!=a.getAttribute("contentEditable")&&a.data("cke-editable",a.hasAttribute("contenteditable")?
"true":"1"),a.setAttribute("contentEditable",!1))});c.on("selectionChange",function(b){if(!c.readOnly){var d=c.getSelection();d&&!d.isLocked&&(d=c.checkDirty(),c.fire("lockSnapshot"),a(b),c.fire("unlockSnapshot"),!d&&c.resetDirty())}})});CKEDITOR.on("instanceCreated",function(a){var b=a.editor;b.on("mode",function(){var a=b.editable();if(a&&a.isInline()){var c=b.title;a.changeAttr("role","textbox");a.changeAttr("aria-label",c);c&&a.changeAttr("title",c);var d=b.fire("ariaEditorHelpLabel",{}).label;
if(d&&(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"top":"contents"))){var e=CKEDITOR.tools.getNextId(),d=CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"'+e+'" class\x3d"cke_voice_label"\x3e'+d+"\x3c/span\x3e");c.append(d);a.changeAttr("aria-describedby",e)}}})});CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");f=CKEDITOR.dom.walker.whitespaces(!0);D=CKEDITOR.dom.walker.bookmark(!1,!0);w=CKEDITOR.dom.walker.empty();
A=CKEDITOR.dom.walker.bogus();G=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi;x=function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT}function b(c,d){var e,f,u,g,y=[],k=d.range.startContainer;e=d.range.startPath();for(var k=v[k.getName()],h=0,B=c.getChildren(),n=B.count(),L=-1,q=-1,E=0,H=e.contains(v.$list);h<n;++h)e=B.getItem(h),a(e)?(u=e.getName(),H&&u in CKEDITOR.dtd.$list?y=y.concat(b(e,d)):(g=!!k[u],
"br"!=u||!e.data("cke-eol")||h&&h!=n-1||(E=(f=h?y[h-1].node:B.getItem(h+1))&&(!a(f)||!f.is("br")),f=f&&a(f)&&v.$block[f.getName()]),-1!=L||g||(L=h),g||(q=h),y.push({isElement:1,isLineBreak:E,isBlock:e.isBlockBoundary(),hasBlockSibling:f,node:e,name:u,allowed:g}),f=E=0)):y.push({isElement:0,node:e,allowed:1});-1<L&&(y[L].firstNotAllowed=1);-1<q&&(y[q].lastNotAllowed=1);return y}function d(b,c){var e=[],f=b.getChildren(),u=f.count(),g,y=0,k=v[c],h=!b.is(v.$inline)||b.is("br");for(h&&e.push(" ");y<u;y++)g=
f.getItem(y),a(g)&&!g.is(k)?e=e.concat(d(g,c)):e.push(g);h&&e.push(" ");return e}function e(b){return a(b.startContainer)&&b.startContainer.getChild(b.startOffset-1)}function f(b){return b&&a(b)&&(b.is(v.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function u(b,c,d,e){var f=b.clone(),g,v;f.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);(g=(new CKEDITOR.dom.walker(f)).next())&&a(g)&&B[g.getName()]&&(v=g.getPrevious())&&a(v)&&!v.getParent().equals(b.startContainer)&&d.contains(v)&&e.contains(g)&&g.isIdentical(v)&&
(g.moveChildren(v),g.remove(),u(b,c,d,e))}function g(b,c){function d(b,c){if(c.isBlock&&c.isElement&&!c.node.is("br")&&a(b)&&b.is("br"))return b.remove(),1}var e=c.endContainer.getChild(c.endOffset),f=c.endContainer.getChild(c.endOffset-1);e&&d(e,b[b.length-1]);f&&d(f,b[0])&&(c.setEnd(c.endContainer,c.endOffset-1),c.collapse())}var v=CKEDITOR.dtd,B={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},L={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},n=CKEDITOR.tools.extend({},
v.$inline);delete n.br;return function(B,p,C,t){var F=B.editor,N=!1;"unfiltered_html"==p&&(p="html",N=!0);if(!t.checkReadOnly()){var q=(new CKEDITOR.dom.elementPath(t.startContainer,t.root)).blockLimit||t.root;B={type:p,dontFilter:N,editable:B,editor:F,range:t,blockLimit:q,mergeCandidates:[],zombies:[]};p=B.range;t=B.mergeCandidates;var m,w;"text"==B.type&&p.shrink(CKEDITOR.SHRINK_ELEMENT,!0,!1)&&(m=CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",p.document),p.insertNode(m),
p.setStartAfter(m));N=new CKEDITOR.dom.elementPath(p.startContainer);B.endPath=q=new CKEDITOR.dom.elementPath(p.endContainer);if(!p.collapsed){var F=q.block||q.blockLimit,x=p.getCommonAncestor();F&&!F.equals(x)&&!F.contains(x)&&p.checkEndOfBlock()&&B.zombies.push(F);p.deleteContents()}for(;(w=e(p))&&a(w)&&w.isBlockBoundary()&&N.contains(w);)p.moveToPosition(w,CKEDITOR.POSITION_BEFORE_END);u(p,B.blockLimit,N,q);m&&(p.setEndBefore(m),p.collapse(),m.remove());m=p.startPath();if(F=m.contains(f,!1,1))p.splitElement(F),
B.inlineStylesRoot=F,B.inlineStylesPeak=m.lastElement;m=p.createBookmark();(F=m.startNode.getPrevious(c))&&a(F)&&f(F)&&t.push(F);(F=m.startNode.getNext(c))&&a(F)&&f(F)&&t.push(F);for(F=m.startNode;(F=F.getParent())&&f(F);)t.push(F);p.moveToBookmark(m);if(m=C){m=B.range;if("text"==B.type&&B.inlineStylesRoot){w=B.inlineStylesPeak;p=w.getDocument().createText("{cke-peak}");for(t=B.inlineStylesRoot.getParent();!w.equals(t);)p=p.appendTo(w.clone()),w=w.getParent();C=p.getOuterHtml().split("{cke-peak}").join(C)}w=
B.blockLimit.getName();if(/^\s+|\s+$/.test(C)&&"span"in CKEDITOR.dtd[w]){var D='\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e';C=D+C+D}C=B.editor.dataProcessor.toHtml(C,{context:null,fixForBody:!1,protectedWhitespaces:!!D,dontFilter:B.dontFilter,filter:B.editor.activeFilter,enterMode:B.editor.activeEnterMode});w=m.document.createElement("body");w.setHtml(C);D&&(w.getFirst().remove(),w.getLast().remove());if((D=m.startPath().block)&&(1!=D.getChildCount()||!D.getBogus()))a:{var A;if(1==
w.getChildCount()&&a(A=w.getFirst())&&A.is(L)&&!A.hasAttribute("contenteditable")){D=A.getElementsByTag("*");m=0;for(t=D.count();m<t;m++)if(p=D.getItem(m),!p.is(n))break a;A.moveChildren(A.getParent(1));A.remove()}}B.dataWrapper=w;m=C}if(m){A=B.range;m=A.document;var M;w=B.blockLimit;t=0;var z,D=[],G,S;C=F=0;var I,K;p=A.startContainer;var N=B.endPath.elements[0],W,q=N.getPosition(p),x=!!N.getCommonAncestor(p)&&q!=CKEDITOR.POSITION_IDENTICAL&&!(q&CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);
p=b(B.dataWrapper,B);for(g(p,A);t<p.length;t++){q=p[t];if(M=q.isLineBreak){M=A;I=w;var R=void 0,Z=void 0;q.hasBlockSibling?M=1:(R=M.startContainer.getAscendant(v.$block,1))&&R.is({div:1,p:1})?(Z=R.getPosition(I),Z==CKEDITOR.POSITION_IDENTICAL||Z==CKEDITOR.POSITION_CONTAINS?M=0:(I=M.splitElement(R),M.moveToPosition(I,CKEDITOR.POSITION_AFTER_START),M=1)):M=0}if(M)C=0<t;else{M=A.startPath();!q.isBlock&&h(B.editor,M.block,M.blockLimit)&&(S=k(B.editor))&&(S=m.createElement(S),S.appendBogus(),A.insertNode(S),
CKEDITOR.env.needsBrFiller&&(z=S.getBogus())&&z.remove(),A.moveToPosition(S,CKEDITOR.POSITION_BEFORE_END));if((M=A.startPath().block)&&!M.equals(G)){if(z=M.getBogus())z.remove(),D.push(M);G=M}q.firstNotAllowed&&(F=1);if(F&&q.isElement){M=A.startContainer;for(I=null;M&&!v[M.getName()][q.name];){if(M.equals(w)){M=null;break}I=M;M=M.getParent()}if(M)I&&(K=A.splitElement(I),B.zombies.push(K),B.zombies.push(I));else{I=w.getName();W=!t;M=t==p.length-1;I=d(q.node,I);for(var R=[],Z=I.length,aa=0,ca=void 0,
da=0,T=-1;aa<Z;aa++)ca=I[aa]," "==ca?(da||W&&!aa||(R.push(new CKEDITOR.dom.text(" ")),T=R.length),da=1):(R.push(ca),da=0);M&&T==R.length&&R.pop();W=R}}if(W){for(;M=W.pop();)A.insertNode(M);W=0}else A.insertNode(q.node);q.lastNotAllowed&&t<p.length-1&&((K=x?N:K)&&A.setEndAt(K,CKEDITOR.POSITION_AFTER_START),F=0);A.collapse()}}1!=p.length?z=!1:(z=p[0],z=z.isElement&&"false"==z.node.getAttribute("contenteditable"));z&&(C=!0,M=p[0].node,A.setStartAt(M,CKEDITOR.POSITION_BEFORE_START),A.setEndAt(M,CKEDITOR.POSITION_AFTER_END));
B.dontMoveCaret=C;B.bogusNeededBlocks=D}z=B.range;var Q;K=B.bogusNeededBlocks;for(W=z.createBookmark();G=B.zombies.pop();)G.getParent()&&(S=z.clone(),S.moveToElementEditStart(G),S.removeEmptyBlocksAtEnd());if(K)for(;G=K.pop();)CKEDITOR.env.needsBrFiller?G.appendBogus():G.append(z.document.createText(" "));for(;G=B.mergeCandidates.pop();)G.mergeSiblings();z.moveToBookmark(W);if(!B.dontMoveCaret){for(G=e(z);G&&a(G)&&!G.is(v.$empty);){if(G.isBlockBoundary())z.moveToPosition(G,CKEDITOR.POSITION_BEFORE_END);
else{if(f(G)&&G.getHtml().match(/(\s|&nbsp;)$/g)){Q=null;break}Q=z.clone();Q.moveToPosition(G,CKEDITOR.POSITION_BEFORE_END)}G=G.getLast(c)}Q&&z.moveToRange(Q)}}}}();m=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return!1;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT};return b}function b(a,c,d){c=a.getDocument().createElement(c);a.append(c,d);return c}function c(a){var b=a.count(),
d;for(b;0<b--;)d=a.getItem(b),CKEDITOR.tools.trim(d.getHtml())||(d.appendBogus(),CKEDITOR.env.ie&&9>CKEDITOR.env.version&&d.getChildCount()&&d.getFirst().remove())}return function(d){var e=d.startContainer,f=e.getAscendant("table",1),g=!1;c(f.getElementsByTag("td"));c(f.getElementsByTag("th"));f=d.clone();f.setStart(e,0);f=a(f).lastBackward();f||(f=d.clone(),f.setEndAt(e,CKEDITOR.POSITION_BEFORE_END),f=a(f).lastForward(),g=!0);f||(f=e);f.is("table")?(d.setStartAt(f,CKEDITOR.POSITION_BEFORE_START),
d.collapse(!0),f.remove()):(f.is({tbody:1,thead:1,tfoot:1})&&(f=b(f,"tr",g)),f.is("tr")&&(f=b(f,f.getParent().is("thead")?"th":"td",g)),(e=f.getBogus())&&e.remove(),d.moveToPosition(f,g?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END))}}();K=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return!1;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$list)||a.is(CKEDITOR.dtd.$listItem)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&
a.is(CKEDITOR.dtd.$listItem)};return b}return function(b){var c=b.startContainer,d=!1,e;e=b.clone();e.setStart(c,0);e=a(e).lastBackward();e||(e=b.clone(),e.setEndAt(c,CKEDITOR.POSITION_BEFORE_END),e=a(e).lastForward(),d=!0);e||(e=c);e.is(CKEDITOR.dtd.$list)?(b.setStartAt(e,CKEDITOR.POSITION_BEFORE_START),b.collapse(!0),e.remove()):((c=e.getBogus())&&c.remove(),b.moveToPosition(e,d?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END),b.select())}}();z={eol:{detect:function(a,b){var c=a.range,
d=c.clone(),e=c.clone(),f=new CKEDITOR.dom.elementPath(c.startContainer,b),g=new CKEDITOR.dom.elementPath(c.endContainer,b);d.collapse(1);e.collapse();f.block&&d.checkBoundaryOfElement(f.block,CKEDITOR.END)&&(c.setStartAfter(f.block),a.prependEolBr=1);g.block&&e.checkBoundaryOfElement(g.block,CKEDITOR.START)&&(c.setEndBefore(g.block),a.appendEolBr=1)},fix:function(a,b){var c=b.getDocument(),d;a.appendEolBr&&(d=this.createEolBr(c),a.fragment.append(d));!a.prependEolBr||d&&!d.getPrevious()||a.fragment.append(this.createEolBr(c),
1)},createEolBr:function(a){return a.createElement("br",{attributes:{"data-cke-eol":1}})}},bogus:{exclude:function(a){var b=a.range.getBoundaryNodes(),c=b.startNode,b=b.endNode;!b||!A(b)||c&&c.equals(b)||a.range.setEndBefore(b)}},tree:{rebuild:function(a,b){var c=a.range,d=c.getCommonAncestor(),e=new CKEDITOR.dom.elementPath(d,b),f=new CKEDITOR.dom.elementPath(c.startContainer,b),c=new CKEDITOR.dom.elementPath(c.endContainer,b),g;d.type==CKEDITOR.NODE_TEXT&&(d=d.getParent());if(e.blockLimit.is({tr:1,
table:1})){var v=e.contains("table").getParent();g=function(a){return!a.equals(v)}}else if(e.block&&e.block.is(CKEDITOR.dtd.$listItem)&&(f=f.contains(CKEDITOR.dtd.$list),c=c.contains(CKEDITOR.dtd.$list),!f.equals(c))){var k=e.contains(CKEDITOR.dtd.$list).getParent();g=function(a){return!a.equals(k)}}g||(g=function(a){return!a.equals(e.block)&&!a.equals(e.blockLimit)});this.rebuildFragment(a,b,d,g)},rebuildFragment:function(a,b,c,d){for(var e;c&&!c.equals(b)&&d(c);)e=c.clone(0,1),a.fragment.appendTo(e),
a.fragment=e,c=c.getParent()}},cell:{shrink:function(a){a=a.range;var b=a.startContainer,c=a.endContainer,d=a.startOffset,e=a.endOffset;b.type==CKEDITOR.NODE_ELEMENT&&b.equals(c)&&b.is("tr")&&++d==e&&a.shrink(CKEDITOR.SHRINK_TEXT)}}};I=function(){function a(b,c){var d=b.getParent();if(d.is(CKEDITOR.dtd.$inline))b[c?"insertBefore":"insertAfter"](d)}function b(c,d,e){a(d);a(e,1);for(var f;f=e.getNext();)f.insertAfter(d),d=f;w(c)&&c.remove()}function c(a,b){var d=new CKEDITOR.dom.range(a);d.setStartAfter(b.startNode);
d.setEndBefore(b.endNode);return d}return{list:{detectMerge:function(a,b){var d=c(b,a.bookmark),e=d.startPath(),f=d.endPath(),g=e.contains(CKEDITOR.dtd.$list),k=f.contains(CKEDITOR.dtd.$list);a.mergeList=g&&k&&g.getParent().equals(k.getParent())&&!g.equals(k);a.mergeListItems=e.block&&f.block&&e.block.is(CKEDITOR.dtd.$listItem)&&f.block.is(CKEDITOR.dtd.$listItem);if(a.mergeList||a.mergeListItems)d=d.clone(),d.setStartBefore(a.bookmark.startNode),d.setEndAfter(a.bookmark.endNode),a.mergeListBookmark=
d.createBookmark()},merge:function(a,c){if(a.mergeListBookmark){var d=a.mergeListBookmark.startNode,e=a.mergeListBookmark.endNode,f=new CKEDITOR.dom.elementPath(d,c),g=new CKEDITOR.dom.elementPath(e,c);if(a.mergeList){var k=f.contains(CKEDITOR.dtd.$list),h=g.contains(CKEDITOR.dtd.$list);k.equals(h)||(h.moveChildren(k),h.remove())}a.mergeListItems&&(f=f.contains(CKEDITOR.dtd.$listItem),g=g.contains(CKEDITOR.dtd.$listItem),f.equals(g)||b(g,d,e));d.remove();e.remove()}}},block:{detectMerge:function(a,
b){if(!a.tableContentsRanges&&!a.mergeListBookmark){var c=new CKEDITOR.dom.range(b);c.setStartBefore(a.bookmark.startNode);c.setEndAfter(a.bookmark.endNode);a.mergeBlockBookmark=c.createBookmark()}},merge:function(a,c){if(a.mergeBlockBookmark&&!a.purgeTableBookmark){var d=a.mergeBlockBookmark.startNode,e=a.mergeBlockBookmark.endNode,f=new CKEDITOR.dom.elementPath(d,c),g=new CKEDITOR.dom.elementPath(e,c),f=f.block,g=g.block;f&&g&&!f.equals(g)&&b(g,d,e);d.remove();e.remove()}}},table:function(){function a(c){var e=
[],f,g=new CKEDITOR.dom.walker(c),k=c.startPath().contains(d),h=c.endPath().contains(d),p={};g.guard=function(a,g){if(a.type==CKEDITOR.NODE_ELEMENT){var F="visited_"+(g?"out":"in");if(a.getCustomData(F))return;CKEDITOR.dom.element.setMarker(p,a,F,1)}if(g&&k&&a.equals(k))f=c.clone(),f.setEndAt(k,CKEDITOR.POSITION_BEFORE_END),e.push(f);else if(!g&&h&&a.equals(h))f=c.clone(),f.setStartAt(h,CKEDITOR.POSITION_AFTER_START),e.push(f);else{if(F=!g)F=a.type==CKEDITOR.NODE_ELEMENT&&a.is(d)&&(!k||b(a,k))&&(!h||
b(a,h));F&&(f=c.clone(),f.selectNodeContents(a),e.push(f))}};g.lastForward();CKEDITOR.dom.element.clearAllMarkers(p);return e}function b(a,c){var d=CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED,e=a.getPosition(c);return e===CKEDITOR.POSITION_IDENTICAL?!1:0===(e&d)}var d={td:1,th:1,caption:1};return{detectPurge:function(a){var b=a.range,c=b.clone();c.enlarge(CKEDITOR.ENLARGE_ELEMENT);var c=new CKEDITOR.dom.walker(c),e=0;c.evaluator=function(a){a.type==CKEDITOR.NODE_ELEMENT&&a.is(d)&&++e};
c.checkForward();if(1<e){var c=b.startPath().contains("table"),f=b.endPath().contains("table");c&&f&&b.checkBoundaryOfElement(c,CKEDITOR.START)&&b.checkBoundaryOfElement(f,CKEDITOR.END)&&(b=a.range.clone(),b.setStartBefore(c),b.setEndAfter(f),a.purgeTableBookmark=b.createBookmark())}},detectRanges:function(e,f){var g=c(f,e.bookmark),k=g.clone(),h,l,p=g.getCommonAncestor();p.is(CKEDITOR.dtd.$tableContent)&&!p.is(d)&&(p=p.getAscendant("table",!0));l=p;p=new CKEDITOR.dom.elementPath(g.startContainer,
l);l=new CKEDITOR.dom.elementPath(g.endContainer,l);p=p.contains("table");l=l.contains("table");if(p||l)p&&l&&b(p,l)?(e.tableSurroundingRange=k,k.setStartAt(p,CKEDITOR.POSITION_AFTER_END),k.setEndAt(l,CKEDITOR.POSITION_BEFORE_START),k=g.clone(),k.setEndAt(p,CKEDITOR.POSITION_AFTER_END),h=g.clone(),h.setStartAt(l,CKEDITOR.POSITION_BEFORE_START),h=a(k).concat(a(h))):p?l||(e.tableSurroundingRange=k,k.setStartAt(p,CKEDITOR.POSITION_AFTER_END),g.setEndAt(p,CKEDITOR.POSITION_AFTER_END)):(e.tableSurroundingRange=
k,k.setEndAt(l,CKEDITOR.POSITION_BEFORE_START),g.setStartAt(l,CKEDITOR.POSITION_AFTER_START)),e.tableContentsRanges=h?h:a(g)},deleteRanges:function(a){for(var b;b=a.tableContentsRanges.pop();)b.extractContents(),w(b.startContainer)&&b.startContainer.appendBogus();a.tableSurroundingRange&&a.tableSurroundingRange.extractContents()},purge:function(a){if(a.purgeTableBookmark){var b=a.doc,c=a.range.clone(),b=b.createElement("p");b.insertBefore(a.purgeTableBookmark.startNode);c.moveToBookmark(a.purgeTableBookmark);
c.deleteContents();a.range.moveToPosition(b,CKEDITOR.POSITION_AFTER_START)}}}}(),detectExtractMerge:function(a){return!(a.range.startPath().contains(CKEDITOR.dtd.$listItem)&&a.range.endPath().contains(CKEDITOR.dtd.$listItem))},fixUneditableRangePosition:function(a){a.startContainer.getDtd()["#"]||a.moveToClosestEditablePosition(null,!0)},autoParagraph:function(a,b){var c=b.startPath(),d;h(a,c.block,c.blockLimit)&&(d=k(a))&&(d=b.document.createElement(d),d.appendBogus(),b.insertNode(d),b.moveToPosition(d,
CKEDITOR.POSITION_AFTER_START))}}}()})();
(function(){function a(a,b){if(0===a.length)return!1;var c,d;if((c=!b&&1===a.length)&&!(c=a[0].collapsed)){var e=a[0];c=e.startContainer.getAscendant({td:1,th:1},!0);var f=e.endContainer.getAscendant({td:1,th:1},!0);d=CKEDITOR.tools.trim;c&&c.equals(f)&&!c.findOne("td, th, tr, tbody, table")?(e=e.cloneContents(),c=e.getFirst()?d(e.getFirst().getText())!==d(c.getText()):!0):c=!1}if(c)return!1;for(d=0;d<a.length;d++)if(c=a[d]._getTableElement(),!c)return!1;return!0}function d(a){function b(a){a=a.find("td, th");
var c=[],d;for(d=0;d<a.count();d++)c.push(a.getItem(d));return c}var c=[],d,e;for(e=0;e<a.length;e++)d=a[e]._getTableElement(),d.is&&d.is({td:1,th:1})?c.push(d):c=c.concat(b(d));return c}function b(a){a=d(a);var b="",c=[],e,f;for(f=0;f<a.length;f++)e&&!e.equals(a[f].getAscendant("tr"))?(b+=c.join("\t")+"\n",e=a[f].getAscendant("tr"),c=[]):0===f&&(e=a[f].getAscendant("tr")),c.push(a[f].getText());return b+=c.join("\t")}function c(a){var c=this.root.editor,d=c.getSelection(1);this.reset();I=!0;d.root.once("selectionchange",
function(a){a.cancel()},null,null,0);d.selectRanges([a[0]]);d=this._.cache;d.ranges=new CKEDITOR.dom.rangeList(a);d.type=CKEDITOR.SELECTION_TEXT;d.selectedElement=a[0]._getTableElement();d.selectedText=b(a);d.nativeSel=null;this.isFake=1;this.rev=m++;c._.fakeSelection=this;I=!1;this.root.fire("selectionchange")}function e(){var b=this._.fakeSelection,c;if(b){c=this.getSelection(1);var d;if(!(d=!c)&&(d=!c.isHidden())){d=b;var e=c.getRanges(),f=d.getRanges(),g=e.length&&e[0]._getTableElement()&&e[0]._getTableElement().getAscendant("table",
!0),k=f.length&&f[0]._getTableElement()&&f[0]._getTableElement().getAscendant("table",!0),p=1===e.length&&e[0]._getTableElement()&&e[0]._getTableElement().is("table"),h=1===f.length&&f[0]._getTableElement()&&f[0]._getTableElement().is("table"),t=1===e.length&&e[0].collapsed,f=a(e,!!CKEDITOR.env.webkit)&&a(f);g=g&&k?g.equals(k)||k.contains(g):!1;g&&(t||f)?(p&&!h&&d.selectRanges(e),d=!0):d=!1;d=!d}d&&(b.reset(),b=0)}if(!b&&(b=c||this.getSelection(1),!b||b.getType()==CKEDITOR.SELECTION_NONE))return;
this.fire("selectionCheck",b);c=this.elementPath();c.compare(this._.selectionPreviousPath)||(d=this._.selectionPreviousPath&&this._.selectionPreviousPath.blockLimit.equals(c.blockLimit),CKEDITOR.env.webkit&&!d&&(this._.previousActive=this.document.getActive()),this._.selectionPreviousPath=c,this.fire("selectionChange",{selection:b,path:c}))}function g(){r=!0;l||(h.call(this),l=CKEDITOR.tools.setTimeout(h,200,this))}function h(){l=null;r&&(CKEDITOR.tools.setTimeout(e,0,this),r=!1)}function k(a){return J(a)||
a.type==CKEDITOR.NODE_ELEMENT&&!a.is(CKEDITOR.dtd.$empty)?!0:!1}function n(a){function b(c,d){return c&&c.type!=CKEDITOR.NODE_TEXT?a.clone()["moveToElementEdit"+(d?"End":"Start")](c):!1}if(!(a.root instanceof CKEDITOR.editable))return!1;var c=a.startContainer,d=a.getPreviousNode(k,null,c),e=a.getNextNode(k,null,c);return b(d)||b(e,1)||!(d||e||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary()&&c.getBogus())?!0:!1}function q(a){f(a,!1);var b=a.getDocument().createText(K);a.setCustomData("cke-fillingChar",
b);return b}function f(a,b){var c=a&&a.removeCustomData("cke-fillingChar");if(c){if(!1!==b){var d=a.getDocument().getSelection().getNative(),e=d&&"None"!=d.type&&d.getRangeAt(0),f=K.length;if(c.getLength()>f&&e&&e.intersectsNode(c.$)){var g=[{node:d.anchorNode,offset:d.anchorOffset},{node:d.focusNode,offset:d.focusOffset}];d.anchorNode==c.$&&d.anchorOffset>f&&(g[0].offset-=f);d.focusNode==c.$&&d.focusOffset>f&&(g[1].offset-=f)}}c.setText(D(c.getText(),1));g&&(c=a.getDocument().$,d=c.getSelection(),
c=c.createRange(),c.setStart(g[0].node,g[0].offset),c.collapse(!0),d.removeAllRanges(),d.addRange(c),d.extend(g[1].node,g[1].offset))}}function D(a,b){return b?a.replace(z,function(a,b){return b?" ":""}):a.replace(K,"")}function w(a,b){var c=CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"'+(CKEDITOR.env.ie&&14>CKEDITOR.env.version?"display:none":"position:fixed;top:0;left:-1000px")+'"\x3e'+(b||"\x26nbsp;")+"\x3c/div\x3e",a.document);a.fire("lockSnapshot");
a.editable().append(c);var d=a.getSelection(1),e=a.createRange(),f=d.root.on("selectionchange",function(a){a.cancel()},null,null,0);e.setStartAt(c,CKEDITOR.POSITION_AFTER_START);e.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);d.selectRanges([e]);f.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer=c}function A(a){var b={37:1,39:1,8:1,46:1};return function(c){var d=c.data.getKeystroke();if(b[d]){var e=a.getSelection().getRanges(),f=e[0];1==e.length&&f.collapsed&&(d=f[38>d?"getPreviousEditableNode":
"getNextEditableNode"]())&&d.type==CKEDITOR.NODE_ELEMENT&&"false"==d.getAttribute("contenteditable")&&(a.getSelection().fake(d),c.data.preventDefault(),c.cancel())}}}function G(a){for(var b=0;b<a.length;b++){var c=a[b];c.getCommonAncestor().isReadOnly()&&a.splice(b,1);if(!c.collapsed){if(c.startContainer.isReadOnly())for(var d=c.startContainer,e;d&&!((e=d.type==CKEDITOR.NODE_ELEMENT)&&d.is("body")||!d.isReadOnly());)e&&"false"==d.getAttribute("contentEditable")&&c.setStartAfter(d),d=d.getParent();
d=c.startContainer;e=c.endContainer;var f=c.startOffset,g=c.endOffset,p=c.clone();d&&d.type==CKEDITOR.NODE_TEXT&&(f>=d.getLength()?p.setStartAfter(d):p.setStartBefore(d));e&&e.type==CKEDITOR.NODE_TEXT&&(g?p.setEndAfter(e):p.setEndBefore(e));d=new CKEDITOR.dom.walker(p);d.evaluator=function(d){if(d.type==CKEDITOR.NODE_ELEMENT&&d.isReadOnly()){var e=c.clone();c.setEndBefore(d);c.collapsed&&a.splice(b--,1);d.getPosition(p.endContainer)&CKEDITOR.POSITION_CONTAINS||(e.setStartAfter(d),e.collapsed||a.splice(b+
1,0,e));return!0}return!1};d.next()}}return a}var x="function"!=typeof window.getSelection,m=1,K=CKEDITOR.tools.repeat("​",7),z=new RegExp(K+"( )?","g"),I,l,r,J=CKEDITOR.dom.walker.invisible(1),H=function(){function a(b){return function(a){var c=a.editor.createRange();c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]);return!1}}function b(a){return function(b){var c=b.editor,d=c.createRange(),e;(e=d.moveToClosestEditablePosition(b.selected,a))||(e=d.moveToClosestEditablePosition(b.selected,
!a));e&&c.getSelection().selectRanges([d]);c.fire("saveSnapshot");b.selected.remove();e||(d.moveToElementEditablePosition(c.editable()),c.getSelection().selectRanges([d]));c.fire("saveSnapshot");return!1}}var c=a(),d=a(1);return{37:c,38:c,39:d,40:d,8:b(),46:b(1)}}();CKEDITOR.on("instanceCreated",function(a){function b(){var a=c.getSelection();a&&a.removeAllRanges()}var c=a.editor;c.on("contentDom",function(){function a(){q=new CKEDITOR.dom.selection(c.getSelection());q.lock()}function b(){p.removeListener("mouseup",
b);u.removeListener("mouseup",b);var a=CKEDITOR.document.$.selection,c=a.createRange();"None"!=a.type&&c.parentElement()&&c.parentElement().ownerDocument==k.$&&c.select()}function d(a){if(CKEDITOR.env.ie){var b=(a=a.getRanges()[0])?a.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&("false"==a.getAttribute("contenteditable")||"true"==a.getAttribute("contenteditable"))},!0):null;return a&&"false"==b.getAttribute("contenteditable")&&b}}var k=c.document,p=CKEDITOR.document,
h=c.editable(),t=k.getBody(),u=k.getDocumentElement(),l=h.isInline(),y,q;CKEDITOR.env.gecko&&h.attachListener(h,"focus",function(a){a.removeListener();0!==y&&(a=c.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==h.$&&(a=c.createRange(),a.moveToElementEditStart(h),a.select())},null,null,-2);h.attachListener(h,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){y&&CKEDITOR.env.webkit&&(y=c._.previousActive&&c._.previousActive.equals(k.getActive()))&&null!=c._.previousScrollTop&&c._.previousScrollTop!=
h.$.scrollTop&&(h.$.scrollTop=c._.previousScrollTop);c.unlockSelection(y);y=0},null,null,-1);h.attachListener(h,"mousedown",function(){y=0});if(CKEDITOR.env.ie||l)x?h.attachListener(h,"beforedeactivate",a,null,null,-1):h.attachListener(c,"selectionCheck",a,null,null,-1),h.attachListener(h,CKEDITOR.env.webkit?"DOMFocusOut":"blur",function(){c.lockSelection(q);y=1},null,null,-1),h.attachListener(h,"mousedown",function(){y=0});if(CKEDITOR.env.ie&&!l){var n;h.attachListener(h,"mousedown",function(a){2==
a.data.$.button&&((a=c.document.getSelection())&&a.getType()!=CKEDITOR.SELECTION_NONE||(n=c.window.getScrollPosition()))});h.attachListener(h,"mouseup",function(a){2==a.data.$.button&&n&&(c.document.$.documentElement.scrollLeft=n.x,c.document.$.documentElement.scrollTop=n.y);n=null});if("BackCompat"!=k.$.compatMode){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat){var m,w;u.on("mousedown",function(a){function b(a){a=a.data.$;if(m){var c=t.$.createTextRange();try{c.moveToPoint(a.clientX,a.clientY)}catch(d){}m.setEndPoint(0>
w.compareEndPoints("StartToStart",c)?"EndToEnd":"StartToStart",c);m.select()}}function c(){u.removeListener("mousemove",b);p.removeListener("mouseup",c);u.removeListener("mouseup",c);m.select()}a=a.data;if(a.getTarget().is("html")&&a.$.y<u.$.clientHeight&&a.$.x<u.$.clientWidth){m=t.$.createTextRange();try{m.moveToPoint(a.$.clientX,a.$.clientY)}catch(d){}w=m.duplicate();u.on("mousemove",b);p.on("mouseup",c);u.on("mouseup",c)}})}if(7<CKEDITOR.env.version&&11>CKEDITOR.env.version)u.on("mousedown",function(a){a.data.getTarget().is("html")&&
(p.on("mouseup",b),u.on("mouseup",b))})}}h.attachListener(h,"selectionchange",e,c);h.attachListener(h,"keyup",g,c);h.attachListener(h,"keydown",function(a){var b=this.getSelection(1);d(b)&&(b.selectElement(d(b)),a.data.preventDefault())},c);h.attachListener(h,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){c.forceNextSelectionCheck();c.selectionChange(1)});if(l&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){var r;h.attachListener(h,"mousedown",function(){r=1});h.attachListener(k.getDocumentElement(),
"mouseup",function(){r&&g.call(c);r=0})}else h.attachListener(CKEDITOR.env.ie?h:k.getDocumentElement(),"mouseup",g,c);CKEDITOR.env.webkit&&h.attachListener(k,"keydown",function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:h.hasFocus&&f(h)}},null,null,-1);h.attachListener(h,"keydown",A(c),null,null,-1)});c.on("setData",function(){c.unlockSelection();CKEDITOR.env.webkit&&b()});c.on("contentDomUnload",function(){c.unlockSelection()});if(CKEDITOR.env.ie9Compat)c.on("beforeDestroy",
b,null,null,9);c.on("dataReady",function(){delete c._.fakeSelection;delete c._.hiddenSelectionContainer;c.selectionChange(1)});c.on("loadSnapshot",function(){var a=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),b=c.editable().getLast(a);b&&b.hasAttribute("data-cke-hidden-sel")&&(b.remove(),CKEDITOR.env.gecko&&(a=c.editable().getFirst(a))&&a.is("br")&&a.getAttribute("_moz_editor_bogus_node")&&a.remove())},null,null,100);c.on("key",function(a){if("wysiwyg"==c.mode){var b=c.getSelection();if(b.isFake){var d=
H[a.data.keyCode];if(d)return d({editor:c,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})});if(CKEDITOR.env.webkit)CKEDITOR.on("instanceReady",function(a){var b=a.editor;b.on("selectionChange",function(){var a=b.editable(),c=a.getCustomData("cke-fillingChar");c&&(c.getCustomData("ready")?(f(a),a.editor.fire("selectionCheck")):c.setCustomData("ready",1))},null,null,-1);b.on("beforeSetMode",function(){f(b.editable())},null,null,-1);b.on("getSnapshot",function(a){a.data&&(a.data=D(a.data))},
b,null,20);b.on("toDataFormat",function(a){a.data.dataValue=D(a.data.dataValue)},null,null,0)});CKEDITOR.editor.prototype.selectionChange=function(a){(a?e:g).call(this)};CKEDITOR.editor.prototype.getSelection=function(a){return!this._.savedSelection&&!this._.fakeSelection||a?(a=this.editable())&&"wysiwyg"==this.mode?new CKEDITOR.dom.selection(a):null:this._.savedSelection||this._.fakeSelection};CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1);return a.getType()!=CKEDITOR.SELECTION_NONE?
(!a.isLocked&&a.lock(),this._.savedSelection=a,!0):!1};CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection;return b?(b.unlock(a),delete this._.savedSelection,!0):!1};CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)};CKEDITOR.dom.range.prototype.select=function(){var a=this.root instanceof CKEDITOR.editable?this.root.editor.getSelection():
new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;CKEDITOR.SELECTION_ELEMENT=3;CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection){var b=a;a=a.root}var c=a instanceof CKEDITOR.dom.element;this.rev=b?b.rev:m++;this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument();this.root=c?a:this.document.getBody();this.isLocked=0;this._={cache:{}};if(b)return CKEDITOR.tools.extend(this._.cache,b._.cache),
this.isFake=b.isFake,this.isLocked=b.isLocked,this;a=this.getNative();var d,e;if(a)if(a.getRangeAt)d=(e=a.rangeCount&&a.getRangeAt(0))&&new CKEDITOR.dom.node(e.commonAncestorContainer);else{try{e=a.createRange()}catch(f){}d=e&&CKEDITOR.dom.element.get(e.item&&e.item(0)||e.parentElement())}if(!d||d.type!=CKEDITOR.NODE_ELEMENT&&d.type!=CKEDITOR.NODE_TEXT||!this.root.equals(d)&&!this.root.contains(d))this._.cache.type=CKEDITOR.SELECTION_NONE,this._.cache.startElement=null,this._.cache.selectedElement=
null,this._.cache.selectedText="",this._.cache.ranges=new CKEDITOR.dom.rangeList;return this};var E={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.tools.extend(CKEDITOR.dom.selection,{_removeFillingCharSequenceString:D,_createFillingCharSequenceNode:q,FILLING_CHAR_SEQUENCE:K});CKEDITOR.dom.selection.prototype={getNative:function(){return void 0!==this._.cache.nativeSel?this._.cache.nativeSel:this._.cache.nativeSel=
x?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:x?function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_NONE;try{var c=this.getNative(),d=c.type;"Text"==d&&(b=CKEDITOR.SELECTION_TEXT);"Control"==d&&(b=CKEDITOR.SELECTION_ELEMENT);c.createRange().parentElement()&&(b=CKEDITOR.SELECTION_TEXT)}catch(e){}return a.type=b}:function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_TEXT,c=this.getNative();if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE;
else if(1==c.rangeCount){var c=c.getRangeAt(0),d=c.startContainer;d==c.endContainer&&1==d.nodeType&&1==c.endOffset-c.startOffset&&E[d.childNodes[c.startOffset].nodeName.toLowerCase()]&&(b=CKEDITOR.SELECTION_ELEMENT)}return a.type=b},getRanges:function(){var a=x?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}var b=function(b,c){b=b.duplicate();b.collapse(c);var d=b.parentElement();if(!d.hasChildNodes())return{container:d,offset:0};for(var e=d.children,f,g,h=b.duplicate(),k=0,
l=e.length-1,u=-1,q,n;k<=l;)if(u=Math.floor((k+l)/2),f=e[u],h.moveToElementText(f),q=h.compareEndPoints("StartToStart",b),0<q)l=u-1;else if(0>q)k=u+1;else return{container:d,offset:a(f)};if(-1==u||u==e.length-1&&0>q){h.moveToElementText(d);h.setEndPoint("StartToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;e=d.childNodes;if(!h)return f=e[e.length-1],f.nodeType!=CKEDITOR.NODE_TEXT?{container:d,offset:e.length}:{container:f,offset:f.nodeValue.length};for(d=e.length;0<h&&0<d;)g=e[--d],g.nodeType==
CKEDITOR.NODE_TEXT&&(n=g,h-=g.nodeValue.length);return{container:n,offset:-h}}h.collapse(0<q?!0:!1);h.setEndPoint(0<q?"StartToStart":"EndToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;if(!h)return{container:d,offset:a(f)+(0<q?0:1)};for(;0<h;)try{g=f[0<q?"previousSibling":"nextSibling"],g.nodeType==CKEDITOR.NODE_TEXT&&(h-=g.nodeValue.length,n=g),f=g}catch(m){return{container:d,offset:a(f)}}return{container:n,offset:0<q?-h:n.nodeValue.length+h}};return function(){var a=this.getNative(),c=a&&
a.createRange(),d=this.getType();if(!a)return[];if(d==CKEDITOR.SELECTION_TEXT)return a=new CKEDITOR.dom.range(this.root),d=b(c,!0),a.setStart(new CKEDITOR.dom.node(d.container),d.offset),d=b(c),a.setEnd(new CKEDITOR.dom.node(d.container),d.offset),a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&a.collapse(),[a];if(d==CKEDITOR.SELECTION_ELEMENT){for(var d=[],e=0;e<c.length;e++){for(var f=c.item(e),g=f.parentNode,h=0,a=new CKEDITOR.dom.range(this.root);h<
g.childNodes.length&&g.childNodes[h]!=f;h++);a.setStart(new CKEDITOR.dom.node(g),h);a.setEnd(new CKEDITOR.dom.node(g),h+1);d.push(a)}return d}return[]}}():function(){var a=[],b,c=this.getNative();if(!c)return a;for(var d=0;d<c.rangeCount;d++){var e=c.getRangeAt(d);b=new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(e.startContainer),e.startOffset);b.setEnd(new CKEDITOR.dom.node(e.endContainer),e.endOffset);a.push(b)}return a};return function(b){var c=this._.cache,d=c.ranges;d||(c.ranges=
d=new CKEDITOR.dom.rangeList(a.call(this)));return b?G(new CKEDITOR.dom.rangeList(d.slice())):d}}(),getStartElement:function(){var a=this._.cache;if(void 0!==a.startElement)return a.startElement;var b;switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0];if(c){if(c.collapsed)b=c.startContainer,b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());else{for(c.optimize();b=c.startContainer,c.startOffset==(b.getChildCount?
b.getChildCount():b.getLength())&&!b.isBlockBoundary();)c.setStartAfter(b);b=c.startContainer;if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent();if((b=b.getChild(c.startOffset))&&b.type==CKEDITOR.NODE_ELEMENT)for(c=b.getFirst();c&&c.type==CKEDITOR.NODE_ELEMENT;)b=c,c=c.getFirst();else b=c.startContainer}b=b.$}}return a.startElement=b?new CKEDITOR.dom.element(b):null},getSelectedElement:function(){var a=this._.cache;if(void 0!==a.selectedElement)return a.selectedElement;var b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},
function(){for(var a=b.getRanges()[0].clone(),c,d,e=2;e&&!((c=a.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&E[c.getName()]&&(d=c));e--)a.shrink(CKEDITOR.SHRINK_ELEMENT);return d&&d.$});return a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=this._.cache;if(void 0!==a.selectedText)return a.selectedText;var b=this.getNative(),b=x?"Control"==b.type?"":b.createRange().text:b.toString();return a.selectedText=b},lock:function(){this.getRanges();this.getStartElement();
this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel=null;this.isLocked=1},unlock:function(b){if(this.isLocked){if(b)var d=this.getSelectedElement(),e=this.getRanges(),f=this.isFake;this.isLocked=0;this.reset();b&&(b=d||e[0]&&e[0].getCommonAncestor())&&b.getAscendant("body",1)&&(a(e)?c.call(this,e):f?this.fake(d):d?this.selectElement(d):this.selectRanges(e))}},reset:function(){this._.cache={};this.isFake=0;var a=this.root.editor;if(a&&a._.fakeSelection)if(this.rev==a._.fakeSelection.rev){delete a._.fakeSelection;
var b=a._.hiddenSelectionContainer;if(b){var c=a.checkDirty();a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot");!c&&a.resetDirty()}delete a._.hiddenSelectionContainer}else CKEDITOR.warn("selection-fake-reset");this.rev=m++},selectElement:function(a){var b=new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);this.selectRanges([b])},selectRanges:function(b){var d=this.root.editor,e=d&&d._.hiddenSelectionContainer;this.reset();if(e)for(var e=this.root,g,h=0;h<b.length;++h)g=
b[h],g.endContainer.equals(e)&&(g.endOffset=Math.min(g.endOffset,e.getChildCount()));if(b.length)if(this.isLocked){var k=CKEDITOR.document.getActive();this.unlock();this.selectRanges(b);this.lock();k&&!k.equals(this.root)&&k.focus()}else{var l;a:{var p,C;if(1==b.length&&!(C=b[0]).collapsed&&(l=C.getEnclosedNode())&&l.type==CKEDITOR.NODE_ELEMENT&&(C=C.clone(),C.shrink(CKEDITOR.SHRINK_ELEMENT,!0),(p=C.getEnclosedNode())&&p.type==CKEDITOR.NODE_ELEMENT&&(l=p),"false"==l.getAttribute("contenteditable")))break a;
l=void 0}if(l)this.fake(l);else if(d&&d.plugins.tableselection&&CKEDITOR.plugins.tableselection.isSupportedEnvironment&&a(b)&&!I)c.call(this,b);else{if(x){p=CKEDITOR.dom.walker.whitespaces(!0);l=/\ufeff|\u00a0/;C={table:1,tbody:1,tr:1};1<b.length&&(d=b[b.length-1],b[0].setEnd(d.endContainer,d.endOffset));d=b[0];b=d.collapsed;var t,F,m;if((e=d.getEnclosedNode())&&e.type==CKEDITOR.NODE_ELEMENT&&e.getName()in E&&(!e.is("a")||!e.getText()))try{m=e.$.createControlRange();m.addElement(e.$);m.select();return}catch(w){}if(d.startContainer.type==
CKEDITOR.NODE_ELEMENT&&d.startContainer.getName()in C||d.endContainer.type==CKEDITOR.NODE_ELEMENT&&d.endContainer.getName()in C)d.shrink(CKEDITOR.NODE_ELEMENT,!0),b=d.collapsed;m=d.createBookmark();C=m.startNode;b||(k=m.endNode);m=d.document.$.body.createTextRange();m.moveToElementText(C.$);m.moveStart("character",1);k?(l=d.document.$.body.createTextRange(),l.moveToElementText(k.$),m.setEndPoint("EndToEnd",l),m.moveEnd("character",-1)):(t=C.getNext(p),F=C.hasAscendant("pre"),t=!(t&&t.getText&&t.getText().match(l))&&
(F||!C.hasPrevious()||C.getPrevious().is&&C.getPrevious().is("br")),F=d.document.createElement("span"),F.setHtml("\x26#65279;"),F.insertBefore(C),t&&d.document.createText("﻿").insertBefore(C));d.setStartBefore(C);C.remove();b?(t?(m.moveStart("character",-1),m.select(),d.document.$.selection.clear()):m.select(),d.moveToPosition(F,CKEDITOR.POSITION_BEFORE_START),F.remove()):(d.setEndBefore(k),k.remove(),m.select())}else{k=this.getNative();if(!k)return;this.removeAllRanges();for(m=0;m<b.length;m++){if(m<
b.length-1&&(t=b[m],F=b[m+1],l=t.clone(),l.setStart(t.endContainer,t.endOffset),l.setEnd(F.startContainer,F.startOffset),!l.collapsed&&(l.shrink(CKEDITOR.NODE_ELEMENT,!0),d=l.getCommonAncestor(),l=l.getEnclosedNode(),d.isReadOnly()||l&&l.isReadOnly()))){F.setStart(t.startContainer,t.startOffset);b.splice(m--,1);continue}d=b[m];F=this.document.$.createRange();d.collapsed&&CKEDITOR.env.webkit&&n(d)&&(l=q(this.root),d.insertNode(l),(t=l.getNext())&&!l.getPrevious()&&t.type==CKEDITOR.NODE_ELEMENT&&"br"==
t.getName()?(f(this.root),d.moveToPosition(t,CKEDITOR.POSITION_BEFORE_START)):d.moveToPosition(l,CKEDITOR.POSITION_AFTER_END));F.setStart(d.startContainer.$,d.startOffset);try{F.setEnd(d.endContainer.$,d.endOffset)}catch(r){if(0<=r.toString().indexOf("NS_ERROR_ILLEGAL_VALUE"))d.collapse(1),F.setEnd(d.endContainer.$,d.endOffset);else throw r;}k.addRange(F)}}this.reset();this.root.fire("selectionchange")}}},fake:function(a,b){var c=this.root.editor;void 0===b&&a.hasAttribute("aria-label")&&(b=a.getAttribute("aria-label"));
this.reset();w(c,b);var d=this._.cache,e=new CKEDITOR.dom.range(this.root);e.setStartBefore(a);e.setEndAfter(a);d.ranges=new CKEDITOR.dom.rangeList(e);d.selectedElement=d.startElement=a;d.type=CKEDITOR.SELECTION_ELEMENT;d.selectedText=d.nativeSel=null;this.isFake=1;this.rev=m++;c._.fakeSelection=this;this.root.fire("selectionchange")},isHidden:function(){var a=this.getCommonAncestor();a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent());return!(!a||!a.data("cke-hidden-sel"))},isInTable:function(b){return a(this.getRanges(),
b)},isCollapsed:function(){var a=this.getRanges();return 1===a.length&&a[0].collapsed},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);this.isFake&&(a.isFake=1);return a},createBookmarks2:function(a){a=this.getRanges().createBookmarks2(a);this.isFake&&(a.isFake=1);return a},selectBookmarks:function(b){for(var c=[],d,e=0;e<b.length;e++){var f=new CKEDITOR.dom.range(this.root);f.moveToBookmark(b[e]);c.push(f)}b.isFake&&(d=a(c)?c[0]._getTableElement():c[0].getEnclosedNode(),d&&d.type==
CKEDITOR.NODE_ELEMENT||(CKEDITOR.warn("selection-not-fake"),b.isFake=0));b.isFake&&!a(c)?this.fake(d):this.selectRanges(c);return this},getCommonAncestor:function(){var a=this.getRanges();return a.length?a[0].startContainer.getCommonAncestor(a[a.length-1].endContainer):null},scrollIntoView:function(){this.type!=CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var a=this.getNative();try{a&&a[x?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}})();
"use strict";CKEDITOR.STYLE_BLOCK=1;CKEDITOR.STYLE_INLINE=2;CKEDITOR.STYLE_OBJECT=3;
(function(){function a(a,b){for(var c,d;(a=a.getParent())&&!a.equals(b);)if(a.getAttribute("data-nostyle"))c=a;else if(!d){var e=a.getAttribute("contentEditable");"false"==e?c=a:"true"==e&&(d=1)}return c}function d(a,b,c,d){return(a.getPosition(b)|d)==d&&(!c.childRule||c.childRule(a))}function b(c){var f=c.document;if(c.collapsed)f=K(this,f),c.insertNode(f),c.moveToPosition(f,CKEDITOR.POSITION_BEFORE_END);else{var g=this.element,h=this._.definition,k,l=h.ignoreReadonly,m=l||h.includeReadonly;null==
m&&(m=c.root.getCustomData("cke_includeReadonly"));var q=CKEDITOR.dtd[g];q||(k=!0,q=CKEDITOR.dtd.span);c.enlarge(CKEDITOR.ENLARGE_INLINE,1);c.trim();var n=c.createBookmark(),w=n.startNode,u=n.endNode,r=w,v;if(!l){var x=c.getCommonAncestor(),l=a(w,x),x=a(u,x);l&&(r=l.getNextSourceNode(!0));x&&(u=x)}for(r.getPosition(u)==CKEDITOR.POSITION_FOLLOWING&&(r=0);r;){l=!1;if(r.equals(u))r=null,l=!0;else{var A=r.type==CKEDITOR.NODE_ELEMENT?r.getName():null,x=A&&"false"==r.getAttribute("contentEditable"),D=A&&
r.getAttribute("data-nostyle");if(A&&r.data("cke-bookmark")){r=r.getNextSourceNode(!0);continue}if(x&&m&&CKEDITOR.dtd.$block[A])for(var z=r,y=e(z),E=void 0,H=y.length,I=0,z=H&&new CKEDITOR.dom.range(z.getDocument());I<H;++I){var E=y[I],J=CKEDITOR.filter.instances[E.data("cke-filter")];if(J?J.check(this):1)z.selectNodeContents(E),b.call(this,z)}y=A?!q[A]||D?0:x&&!m?0:d(r,u,h,V):1;if(y)if(E=r.getParent(),y=h,H=g,I=k,!E||!(E.getDtd()||CKEDITOR.dtd.span)[H]&&!I||y.parentRule&&!y.parentRule(E))l=!0;else{if(v||
A&&CKEDITOR.dtd.$removeEmpty[A]&&(r.getPosition(u)|V)!=V||(v=c.clone(),v.setStartBefore(r)),A=r.type,A==CKEDITOR.NODE_TEXT||x||A==CKEDITOR.NODE_ELEMENT&&!r.getChildCount()){for(var A=r,L;(l=!A.getNext(B))&&(L=A.getParent(),q[L.getName()])&&d(L,w,h,O);)A=L;v.setEndAfter(A)}}else l=!0;r=r.getNextSourceNode(D||x)}if(l&&v&&!v.collapsed){for(var l=K(this,f),x=l.hasAttributes(),D=v.getCommonAncestor(),A={},y={},E={},H={},T,Q,ba;l&&D;){if(D.getName()==g){for(T in h.attributes)!H[T]&&(ba=D.getAttribute(Q))&&
(l.getAttribute(T)==ba?y[T]=1:H[T]=1);for(Q in h.styles)!E[Q]&&(ba=D.getStyle(Q))&&(l.getStyle(Q)==ba?A[Q]=1:E[Q]=1)}D=D.getParent()}for(T in y)l.removeAttribute(T);for(Q in A)l.removeStyle(Q);x&&!l.hasAttributes()&&(l=null);l?(v.extractContents().appendTo(l),v.insertNode(l),G.call(this,l),l.mergeSiblings(),CKEDITOR.env.ie||l.$.normalize()):(l=new CKEDITOR.dom.element("span"),v.extractContents().appendTo(l),v.insertNode(l),G.call(this,l),l.remove(!0));v=null}}c.moveToBookmark(n);c.shrink(CKEDITOR.SHRINK_TEXT);
c.shrink(CKEDITOR.NODE_ELEMENT,!0)}}function c(a){function b(){for(var a=new CKEDITOR.dom.elementPath(d.getParent()),c=new CKEDITOR.dom.elementPath(q.getParent()),e=null,f=null,g=0;g<a.elements.length;g++){var h=a.elements[g];if(h==a.block||h==a.blockLimit)break;n.checkElementRemovable(h,!0)&&(e=h)}for(g=0;g<c.elements.length;g++){h=c.elements[g];if(h==c.block||h==c.blockLimit)break;n.checkElementRemovable(h,!0)&&(f=h)}f&&q.breakParent(f);e&&d.breakParent(e)}a.enlarge(CKEDITOR.ENLARGE_INLINE,1);var c=
a.createBookmark(),d=c.startNode,e=this._.definition.alwaysRemoveElement;if(a.collapsed){for(var f=new CKEDITOR.dom.elementPath(d.getParent(),a.root),g,h=0,k;h<f.elements.length&&(k=f.elements[h])&&k!=f.block&&k!=f.blockLimit;h++)if(this.checkElementRemovable(k)){var m;!e&&a.collapsed&&(a.checkBoundaryOfElement(k,CKEDITOR.END)||(m=a.checkBoundaryOfElement(k,CKEDITOR.START)))?(g=k,g.match=m?"start":"end"):(k.mergeSiblings(),k.is(this.element)?A.call(this,k):x(k,l(this)[k.getName()]))}if(g){e=d;for(h=
0;;h++){k=f.elements[h];if(k.equals(g))break;else if(k.match)continue;else k=k.clone();k.append(e);e=k}e["start"==g.match?"insertBefore":"insertAfter"](g)}}else{var q=c.endNode,n=this;b();for(f=d;!f.equals(q);)g=f.getNextSourceNode(),f.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(f)&&(f.getName()==this.element?A.call(this,f):x(f,l(this)[f.getName()]),g.type==CKEDITOR.NODE_ELEMENT&&g.contains(d)&&(b(),g=d.getNext())),f=g}a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT,!0)}function e(a){var b=
[];a.forEach(function(a){if("true"==a.getAttribute("contenteditable"))return b.push(a),!1},CKEDITOR.NODE_ELEMENT,!0);return b}function g(a){var b=a.getEnclosedNode()||a.getCommonAncestor(!1,!0);(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&z(a,this)}function h(a){var b=a.getCommonAncestor(!0,!0);if(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes;if(c)for(var d in c)a.removeAttribute(d,c[d]);if(b.styles)for(var e in b.styles)b.styles.hasOwnProperty(e)&&
a.removeStyle(e)}}function k(a){var b=a.createBookmark(!0),c=a.createIterator();c.enforceRealBlocks=!0;this._.enterMode&&(c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR);for(var d,e=a.document,f;d=c.getNextParagraph();)!d.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):1)&&(f=K(this,e,d),q(d,f));a.moveToBookmark(b)}function n(a){var b=a.createBookmark(1),c=a.createIterator();c.enforceRealBlocks=!0;c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e;d=c.getNextParagraph();)this.checkElementRemovable(d)&&
(d.is("pre")?((e=this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))&&d.copyAttributes(e),q(d,e)):A.call(this,d));a.moveToBookmark(b)}function q(a,b){var c=!b;c&&(b=a.getDocument().createElement("div"),a.copyAttributes(b));var d=b&&b.is("pre"),e=a.is("pre"),g=!d&&e;if(d&&!e){e=b;(g=a.getBogus())&&g.remove();g=a.getHtml();g=D(g,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");g=g.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");g=g.replace(/([ \t\n\r]+|&nbsp;)/g,
" ");g=g.replace(/<br\b[^>]*>/gi,"\n");if(CKEDITOR.env.ie){var h=a.getDocument().createElement("div");h.append(e);e.$.outerHTML="\x3cpre\x3e"+g+"\x3c/pre\x3e";e.copyAttributes(h.getFirst());e=h.getFirst().remove()}else e.setHtml(g);b=e}else g?b=w(c?[a.getHtml()]:f(a),b):a.moveChildren(b);b.replace(a);if(d){var c=b,k;(k=c.getPrevious(L))&&k.type==CKEDITOR.NODE_ELEMENT&&k.is("pre")&&(d=D(k.getHtml(),/\n$/,"")+"\n\n"+D(c.getHtml(),/^\n/,""),CKEDITOR.env.ie?c.$.outerHTML="\x3cpre\x3e"+d+"\x3c/pre\x3e":
c.setHtml(d),k.remove())}else c&&m(b)}function f(a){var b=[];D(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,function(a,b,c){return b+"\x3c/pre\x3e"+c+"\x3cpre\x3e"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,c){b.push(c)});return b}function D(a,b,c){var d="",e="";a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(d=b);c&&(e=c);return""});return d+a.replace(b,c)+e}function w(a,b){var c;
1<a.length&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));for(var d=0;d<a.length;d++){var e=a[d],e=e.replace(/(\r\n|\r)/g,"\n"),e=D(e,/^[ \t]*\n/,""),e=D(e,/\n$/,""),e=D(e,/^[ \t]+|[ \t]+$/g,function(a,b){return 1==a.length?"\x26nbsp;":b?" "+CKEDITOR.tools.repeat("\x26nbsp;",a.length-1):CKEDITOR.tools.repeat("\x26nbsp;",a.length-1)+" "}),e=e.replace(/\n/g,"\x3cbr\x3e"),e=e.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("\x26nbsp;",a.length-1)+" "});if(c){var f=b.clone();f.setHtml(e);
c.append(f)}else b.setHtml(e)}return c||b}function A(a,b){var c=this._.definition,d=c.attributes,c=c.styles,e=l(this)[a.getName()],f=CKEDITOR.tools.isEmpty(d)&&CKEDITOR.tools.isEmpty(c),g;for(g in d)if("class"!=g&&!this._.definition.fullMatch||a.getAttribute(g)==r(g,d[g]))b&&"data-"==g.slice(0,5)||(f=a.hasAttribute(g),a.removeAttribute(g));for(var h in c)this._.definition.fullMatch&&a.getStyle(h)!=r(h,c[h],!0)||(f=f||!!a.getStyle(h),a.removeStyle(h));x(a,e,E[a.getName()]);f&&(this._.definition.alwaysRemoveElement?
m(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode==CKEDITOR.ENTER_BR&&!a.hasAttributes()?m(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))}function G(a){for(var b=l(this),c=a.getElementsByTag(this.element),d,e=c.count();0<=--e;)d=c.getItem(e),d.isReadOnly()||A.call(this,d,!0);for(var f in b)if(f!=this.element)for(c=a.getElementsByTag(f),e=c.count()-1;0<=e;e--)d=c.getItem(e),d.isReadOnly()||x(d,b[f])}function x(a,b,c){if(b=b&&b.attributes)for(var d=0;d<b.length;d++){var e=b[d][0],
f;if(f=a.getAttribute(e)){var g=b[d][1];(null===g||g.test&&g.test(f)||"string"==typeof g&&f==g)&&a.removeAttribute(e)}}c||m(a)}function m(a,b){if(!a.hasAttributes()||b)if(CKEDITOR.dtd.$block[a.getName()]){var c=a.getPrevious(L),d=a.getNext(L);!c||c.type!=CKEDITOR.NODE_TEXT&&c.isBlockBoundary({br:1})||a.append("br",1);!d||d.type!=CKEDITOR.NODE_TEXT&&d.isBlockBoundary({br:1})||a.append("br");a.remove(!0)}else c=a.getFirst(),d=a.getLast(),a.remove(!0),c&&(c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings(),
d&&!c.equals(d)&&d.type==CKEDITOR.NODE_ELEMENT&&d.mergeSiblings())}function K(a,b,c){var d;d=a.element;"*"==d&&(d="span");d=new CKEDITOR.dom.element(d,b);c&&c.copyAttributes(d);d=z(d,a);b.getCustomData("doc_processing_style")&&d.hasAttribute("id")?d.removeAttribute("id"):b.setCustomData("doc_processing_style",1);return d}function z(a,b){var c=b._.definition,d=c.attributes,c=CKEDITOR.style.getStyleText(c);if(d)for(var e in d)a.setAttribute(e,d[e]);c&&a.setAttribute("style",c);return a}function I(a,
b){for(var c in a)a[c]=a[c].replace(v,function(a,c){return b[c]})}function l(a){if(a._.overrides)return a._.overrides;var b=a._.overrides={},c=a._.definition.overrides;if(c){CKEDITOR.tools.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++){var e=c[d],f,g;"string"==typeof e?f=e.toLowerCase():(f=e.element?e.element.toLowerCase():a.element,g=e.attributes);e=b[f]||(b[f]={});if(g){var e=e.attributes=e.attributes||[],h;for(h in g)e.push([h.toLowerCase(),g[h]])}}}return b}function r(a,b,c){var d=new CKEDITOR.dom.element("span");
d[c?"setStyle":"setAttribute"](a,b);return d[c?"getStyle":"getAttribute"](a)}function J(a,b){function c(a,b){return"font-family"==b.toLowerCase()?a.replace(/["']/g,""):a}"string"==typeof a&&(a=CKEDITOR.tools.parseCssText(a));"string"==typeof b&&(b=CKEDITOR.tools.parseCssText(b,!0));for(var d in a)if(!(d in b)||c(b[d],d)!=c(a[d],d)&&"inherit"!=a[d]&&"inherit"!=b[d])return!1;return!0}function H(a,b,c){var d=a.document,e=a.getRanges();b=b?this.removeFromRange:this.applyToRange;var f,g;if(a.isFake&&a.isInTable())for(f=
[],g=0;g<e.length;g++)f.push(e[g].clone());for(var h=e.createIterator();g=h.getNextRange();)b.call(this,g,c);a.selectRanges(f||e);d.removeCustomData("doc_processing_style")}var E={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},u={a:1,blockquote:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,
dd:1,form:1,audio:1,video:1},y=/\s*(?:;\s*|$)/,v=/#\((.+?)\)/g,B=CKEDITOR.dom.walker.bookmark(0,1),L=CKEDITOR.dom.walker.whitespaces(1);CKEDITOR.style=function(a,b){if("string"==typeof a.type)return new CKEDITOR.style.customHandlers[a.type](a);var c=a.attributes;c&&c.style&&(a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style)),delete c.style);b&&(a=CKEDITOR.tools.clone(a),I(a.attributes,b),I(a.styles,b));c=this.element=a.element?"string"==typeof a.element?a.element.toLowerCase():
a.element:"*";this.type=a.type||(E[c]?CKEDITOR.STYLE_BLOCK:u[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE);"object"==typeof this.element&&(this.type=CKEDITOR.STYLE_OBJECT);this._={definition:a}};CKEDITOR.style.prototype={apply:function(a){if(a instanceof CKEDITOR.dom.document)return H.call(this,a.getSelection());if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;b||(this._.enterMode=a.activeEnterMode);H.call(this,a.getSelection(),0,a);this._.enterMode=b}},remove:function(a){if(a instanceof
CKEDITOR.dom.document)return H.call(this,a.getSelection(),1);if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;b||(this._.enterMode=a.activeEnterMode);H.call(this,a.getSelection(),1,a);this._.enterMode=b}},applyToRange:function(a){this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?k:this.type==CKEDITOR.STYLE_OBJECT?g:null;return this.applyToRange(a)},removeFromRange:function(a){this.removeFromRange=this.type==CKEDITOR.STYLE_INLINE?c:this.type==CKEDITOR.STYLE_BLOCK?
n:this.type==CKEDITOR.STYLE_OBJECT?h:null;return this.removeFromRange(a)},applyToObject:function(a){z(a,this)},checkActive:function(a,b){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(a.block||a.blockLimit,!0,b);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var c=a.elements,d=0,e;d<c.length;d++)if(e=c[d],this.type!=CKEDITOR.STYLE_INLINE||e!=a.block&&e!=a.blockLimit){if(this.type==CKEDITOR.STYLE_OBJECT){var f=e.getName();if(!("string"==typeof this.element?
f==this.element:f in this.element))continue}if(this.checkElementRemovable(e,!0,b))return!0}}return!1},checkApplicable:function(a,b,c){b&&b instanceof CKEDITOR.filter&&(c=b);if(c&&!c.check(this))return!1;switch(this.type){case CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element);case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return!0},checkElementMatch:function(a,b){var c=this._.definition;if(!a||!c.ignoreReadonly&&a.isReadOnly())return!1;var d=a.getName();if("string"==typeof this.element?
d==this.element:d in this.element){if(!b&&!a.hasAttributes())return!0;if(d=c._AC)c=d;else{var d={},e=0,f=c.attributes;if(f)for(var g in f)e++,d[g]=f[g];if(g=CKEDITOR.style.getStyleText(c))d.style||e++,d.style=g;d._length=e;c=c._AC=d}if(c._length){for(var h in c)if("_length"!=h)if(d=a.getAttribute(h)||"","style"==h?J(c[h],d):c[h]==d){if(!b)return!0}else if(b)return!1;if(b)return!0}else return!0}return!1},checkElementRemovable:function(a,b,c){if(this.checkElementMatch(a,b,c))return!0;if(b=l(this)[a.getName()]){var d;
if(!(b=b.attributes))return!0;for(c=0;c<b.length;c++)if(d=b[c][0],d=a.getAttribute(d)){var e=b[c][1];if(null===e)return!0;if("string"==typeof e){if(d==e)return!0}else if(e.test(d))return!0}}return!1},buildPreview:function(a){var b=this._.definition,c=[],d=b.element;"bdo"==d&&(d="span");var c=["\x3c",d],e=b.attributes;if(e)for(var f in e)c.push(" ",f,'\x3d"',e[f],'"');(e=CKEDITOR.style.getStyleText(b))&&c.push(' style\x3d"',e,'"');c.push("\x3e",a||b.name,"\x3c/",d,"\x3e");return c.join("")},getDefinition:function(){return this._.definition}};
CKEDITOR.style.getStyleText=function(a){var b=a._ST;if(b)return b;var b=a.styles,c=a.attributes&&a.attributes.style||"",d="";c.length&&(c=c.replace(y,";"));for(var e in b){var f=b[e],g=(e+":"+f).replace(y,";");"inherit"==f?d+=g:c+=g}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,!0));return a._ST=c+d};CKEDITOR.style.customHandlers={};CKEDITOR.style.addCustomHandler=function(a){var b=function(a){this._={definition:a};this.setup&&this.setup(a)};b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),
{assignedTo:CKEDITOR.STYLE_OBJECT},a,!0);return this.customHandlers[a.type]=b};var V=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,O=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED})();CKEDITOR.styleCommand=function(a,d){this.requiredContent=this.allowedContent=this.style=a;CKEDITOR.tools.extend(this,d,!0)};
CKEDITOR.styleCommand.prototype.exec=function(a){a.focus();this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&a.removeStyle(this.style)};CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet");CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet);CKEDITOR.loadStylesSet=function(a,d,b){CKEDITOR.stylesSet.addExternal(a,d,"");CKEDITOR.stylesSet.load(a,b)};
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{attachStyleStateChange:function(a,d){var b=this._.styleStateChangeCallbacks;b||(b=this._.styleStateChangeCallbacks=[],this.on("selectionChange",function(a){for(var d=0;d<b.length;d++){var g=b[d],h=g.style.checkActive(a.data.path,this)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;g.fn.call(this,h)}}));b.push({style:a,fn:d})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)},getStylesSet:function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);
else{var d=this,b=d.config.stylesCombo_stylesSet||d.config.stylesSet;if(!1===b)a(null);else if(b instanceof Array)d._.stylesDefinitions=b,a(b);else{b||(b="default");var b=b.split(":"),c=b[0];CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),"");CKEDITOR.stylesSet.load(c,function(b){d._.stylesDefinitions=b[c];a(d._.stylesDefinitions)})}}}});
CKEDITOR.dom.comment=function(a,d){"string"==typeof a&&(a=(d?d.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node;CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"\x3c!--"+this.$.nodeValue+"--\x3e"}});"use strict";
(function(){var a={},d={},b;for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1);for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b in CKEDITOR.dtd.$empty||(d[b]=1);CKEDITOR.dom.elementPath=function(b,e){var g=null,h=null,k=[],n=b,q;e=e||b.getDocument().getBody();n||(n=e);do if(n.type==CKEDITOR.NODE_ELEMENT){k.push(n);if(!this.lastElement&&(this.lastElement=n,n.is(CKEDITOR.dtd.$object)||"false"==n.getAttribute("contenteditable")))continue;if(n.equals(e))break;if(!h&&(q=n.getName(),
"true"==n.getAttribute("contenteditable")?h=n:!g&&d[q]&&(g=n),a[q])){if(q=!g&&"div"==q){a:{q=n.getChildren();for(var f=0,D=q.count();f<D;f++){var w=q.getItem(f);if(w.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[w.getName()]){q=!0;break a}}q=!1}q=!q}q?g=n:h=n}}while(n=n.getParent());h||(h=e);this.block=g;this.blockLimit=h;this.root=e;this.elements=k}})();
CKEDITOR.dom.elementPath.prototype={compare:function(a){var d=this.elements;a=a&&a.elements;if(!a||d.length!=a.length)return!1;for(var b=0;b<d.length;b++)if(!d[b].equals(a[b]))return!1;return!0},contains:function(a,d,b){var c=0,e;"string"==typeof a&&(e=function(b){return b.getName()==a});a instanceof CKEDITOR.dom.element?e=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?e=function(b){return-1<CKEDITOR.tools.indexOf(a,b.getName())}:"function"==typeof a?e=a:"object"==typeof a&&(e=function(b){return b.getName()in
a});var g=this.elements,h=g.length;d&&(b?c+=1:--h);b&&(g=Array.prototype.slice.call(g,0),g.reverse());for(;c<h;c++)if(e(g[c]))return g[c];return null},isContextFor:function(a){var d;return a in CKEDITOR.dtd.$block?(d=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit,!!d.getDtd()[a]):!0},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}};
CKEDITOR.dom.text=function(a,d){"string"==typeof a&&(a=(d?d.$:document).createTextNode(a));this.$=a};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var d=this.$.parentNode,b=d.childNodes.length,c=this.getLength(),e=this.getDocument(),g=new CKEDITOR.dom.text(this.$.splitText(a),e);d.childNodes.length==b&&(a>=c?(g=e.createText(""),g.insertAfter(this)):(a=e.createText(""),a.insertAfter(g),a.remove()));return g},substring:function(a,
d){return"number"!=typeof d?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,d)}});
(function(){function a(a,c,d){var g=a.serializable,h=c[d?"endContainer":"startContainer"],k=d?"endOffset":"startOffset",n=g?c.document.getById(a.startNode):a.startNode;a=g?c.document.getById(a.endNode):a.endNode;h.equals(n.getPrevious())?(c.startOffset=c.startOffset-h.getLength()-a.getPrevious().getLength(),h=a.getNext()):h.equals(a.getPrevious())&&(c.startOffset-=h.getLength(),h=a.getNext());h.equals(n.getParent())&&c[k]++;h.equals(a.getParent())&&c[k]++;c[d?"endContainer":"startContainer"]=h;return c}
CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,d)};var d={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),d=[],g;return{getNextRange:function(h){g=void 0===g?0:g+1;var k=a[g];if(k&&1<a.length){if(!g)for(var n=a.length-1;0<=n;n--)d.unshift(a[n].createBookmark(!0));if(h)for(var q=0;a[g+q+1];){var f=k.document;h=0;n=f.getById(d[q].endNode);for(f=f.getById(d[q+1].startNode);;){n=
n.getNextSourceNode(!1);if(f.equals(n))h=1;else if(c(n)||n.type==CKEDITOR.NODE_ELEMENT&&n.isBlockBoundary())continue;break}if(!h)break;q++}for(k.moveToBookmark(d.shift());q--;)n=a[++g],n.moveToBookmark(d.shift()),k.setEnd(n.endContainer,n.endOffset)}return k}}},createBookmarks:function(b){for(var c=[],d,g=0;g<this.length;g++){c.push(d=this[g].createBookmark(b,!0));for(var h=g+1;h<this.length;h++)this[h]=a(d,this[h]),this[h]=a(d,this[h],!0)}return c},createBookmarks2:function(a){for(var c=[],d=0;d<
this.length;d++)c.push(this[d].createBookmark2(a));return c},moveToBookmarks:function(a){for(var c=0;c<this.length;c++)this[c].moveToBookmark(a[c])}}})();
(function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function d(b){var c=CKEDITOR.skin["ua_"+b],d=CKEDITOR.env;if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),e=0,g;e<c.length;e++)if(g=c[e],d.ie&&(g.replace(/^ie/,"")==d.version||d.quirks&&"iequirks"==g)&&(g="ie"),d[g]){b+="_"+c[e];break}return CKEDITOR.getUrl(a()+b+".css")}function b(a,b){g[a]||(CKEDITOR.document.appendStyleSheet(d(a)),g[a]=1);b&&b()}function c(a){var b=
a.getById(h);b||(b=a.getHead().append("style"),b.setAttribute("id",h),b.setAttribute("type","text/css"));return b}function e(a,b,c){var d,e,g;if(CKEDITOR.env.webkit)for(b=b.split("}").slice(0,-1),e=0;e<b.length;e++)b[e]=b[e].split("{");for(var h=0;h<a.length;h++)if(CKEDITOR.env.webkit)for(e=0;e<b.length;e++){g=b[e][1];for(d=0;d<c.length;d++)g=g.replace(c[d][0],c[d][1]);a[h].$.sheet.addRule(b[e][0],g)}else{g=b;for(d=0;d<c.length;d++)g=g.replace(c[d][0],c[d][1]);CKEDITOR.env.ie&&11>CKEDITOR.env.version?
a[h].$.styleSheet.cssText+=g:a[h].$.innerHTML+=g}}var g={};CKEDITOR.skin={path:a,loadPart:function(c,d){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,d)}):b(c,d)},getPath:function(a){return CKEDITOR.getUrl(d(a))},icons:{},addIcon:function(a,b,c,d){a=a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a,b,c,d,e){var g;a&&(a=a.toLowerCase(),b&&(g=this.icons[a+"-rtl"]),
g||(g=this.icons[a]));a=c||g&&g.path||"";d=d||g&&g.offset;e=e||g&&g.bgsize||"16px";a&&(a=a.replace(/'/g,"\\'"));return a&&"background-image:url('"+CKEDITOR.getUrl(a)+"');background-position:0 "+d+"px;background-size:"+e+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=c(CKEDITOR.document);return(this.setUiColor=function(a){this.uiColor=a;var c=CKEDITOR.skin.chameleon,d="",g="";"function"==typeof c&&(d=c(this,"editor"),g=
c(this,"panel"));a=[[n,a]];e([b],d,a);e(k,g,a)}).call(this,a)}});var h="cke_ui_color",k=[],n=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=a.editor;a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=c(a);k.push(a);var d=b.getUiColor();d&&e([a],CKEDITOR.skin.chameleon(b,"panel"),[[n,d]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&b.setUiColor(b.config.uiColor)}})})();
(function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=!1;else{var a=CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e',CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try{var d=a.getComputedStyle("border-top-color"),b=a.getComputedStyle("border-right-color");CKEDITOR.env.hc=!(!d||d!=b)}catch(c){CKEDITOR.env.hc=!1}a.remove()}CKEDITOR.env.hc&&(CKEDITOR.env.cssClass+=" cke_hc");CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");
CKEDITOR.status="loaded";CKEDITOR.fireOnce("loaded");if(a=CKEDITOR._.pending)for(delete CKEDITOR._.pending,d=0;d<a.length;d++)CKEDITOR.editor.prototype.constructor.apply(a[d][0],a[d][1]),CKEDITOR.add(a[d][0])})();/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.skin.name="moono";CKEDITOR.skin.ua_editor="ie,iequirks,ie7,ie8,gecko";CKEDITOR.skin.ua_dialog="ie,iequirks,ie7,ie8";
CKEDITOR.skin.chameleon=function(){var b=function(){return function(b,e){for(var a=b.match(/[^#]./g),c=0;3>c;c++){var f=c,d;d=parseInt(a[c],16);d=("0"+(0>e?0|d*(1+e):0|d+(255-d)*e).toString(16)).slice(-2);a[f]=d}return"#"+a.join("")}}(),c=function(){var b=new CKEDITOR.template("background:#{to};background-image:linear-gradient(to bottom,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType\x3d0,startColorstr\x3d'{from}',endColorstr\x3d'{to}');");return function(c,a){return b.output({from:c,
to:a})}}(),f={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
panel:new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")};
return function(g,e){var a=g.uiColor,a={id:"."+g.id,defaultBorder:b(a,-.1),defaultGradient:c(b(a,.9),a),lightGradient:c(b(a,1),b(a,.7)),mediumGradient:c(b(a,.8),b(a,.5)),ckeButtonOn:c(b(a,.6),b(a,.7)),ckeResizer:b(a,-.4),ckeToolbarSeparator:b(a,.5),ckeColorauto:b(a,.8),dialogBody:b(a,.7),dialogTabSelected:c("#FFFFFF","#FFFFFF"),dialogTabSelectedBorder:"#FFF",elementsPathColor:b(a,-.6),elementsPathBg:a,menubuttonIcon:b(a,.5),menubuttonIconHover:b(a,.3)};return f[e].output(a).replace(/\[/g,"{").replace(/\]/g,
"}")}}();CKEDITOR.plugins.add("basicstyles",{init:function(c){var e=0,d=function(g,d,b,a){if(a){a=new CKEDITOR.style(a);var f=h[b];f.unshift(a);c.attachStyleStateChange(a,function(a){!c.readOnly&&c.getCommand(b).setState(a)});c.addCommand(b,new CKEDITOR.styleCommand(a,{contentForms:f}));c.ui.addButton&&c.ui.addButton(g,{label:d,command:b,toolbar:"basicstyles,"+(e+=10)})}},h={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==
a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},b=c.config,a=c.lang.basicstyles;d("Bold",a.bold,"bold",b.coreStyles_bold);d("Italic",a.italic,"italic",b.coreStyles_italic);d("Underline",a.underline,"underline",b.coreStyles_underline);d("Strike",a.strike,"strike",b.coreStyles_strike);d("Subscript",a.subscript,
"subscript",b.coreStyles_subscript);d("Superscript",a.superscript,"superscript",b.coreStyles_superscript);c.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}});CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};CKEDITOR.config.coreStyles_underline={element:"u"};CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"};CKEDITOR.config.coreStyles_subscript={element:"sub"};
CKEDITOR.config.coreStyles_superscript={element:"sup"};(function(){var m={exec:function(g){var a=g.getCommand("blockquote").state,k=g.getSelection(),c=k&&k.getRanges()[0];if(c){var h=k.createBookmarks();if(CKEDITOR.env.ie){var e=h[0].startNode,b=h[0].endNode,d;if(e&&"blockquote"==e.getParent().getName())for(d=e;d=d.getNext();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){e.move(d,!0);break}if(b&&"blockquote"==b.getParent().getName())for(d=b;d=d.getPrevious();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){b.move(d);break}}var f=c.createIterator();
f.enlargeBr=g.config.enterMode!=CKEDITOR.ENTER_BR;if(a==CKEDITOR.TRISTATE_OFF){for(e=[];a=f.getNextParagraph();)e.push(a);1>e.length&&(a=g.document.createElement(g.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),b=h.shift(),c.insertNode(a),a.append(new CKEDITOR.dom.text("﻿",g.document)),c.moveToBookmark(b),c.selectNodeContents(a),c.collapse(!0),b=c.createBookmark(),e.push(a),h.unshift(b));d=e[0].getParent();c=[];for(b=0;b<e.length;b++)a=e[b],d=d.getCommonAncestor(a.getParent());for(a={table:1,tbody:1,
tr:1,ol:1,ul:1};a[d.getName()];)d=d.getParent();for(b=null;0<e.length;){for(a=e.shift();!a.getParent().equals(d);)a=a.getParent();a.equals(b)||c.push(a);b=a}for(;0<c.length;)if(a=c.shift(),"blockquote"==a.getName()){for(b=new CKEDITOR.dom.documentFragment(g.document);a.getFirst();)b.append(a.getFirst().remove()),e.push(b.getLast());b.replace(a)}else e.push(a);c=g.document.createElement("blockquote");for(c.insertBefore(e[0]);0<e.length;)a=e.shift(),c.append(a)}else if(a==CKEDITOR.TRISTATE_ON){b=[];
for(d={};a=f.getNextParagraph();){for(e=c=null;a.getParent();){if("blockquote"==a.getParent().getName()){c=a.getParent();e=a;break}a=a.getParent()}c&&e&&!e.getCustomData("blockquote_moveout")&&(b.push(e),CKEDITOR.dom.element.setMarker(d,e,"blockquote_moveout",!0))}CKEDITOR.dom.element.clearAllMarkers(d);a=[];e=[];for(d={};0<b.length;)f=b.shift(),c=f.getParent(),f.getPrevious()?f.getNext()?(f.breakParent(f.getParent()),e.push(f.getNext())):f.remove().insertAfter(c):f.remove().insertBefore(c),c.getCustomData("blockquote_processed")||
(e.push(c),CKEDITOR.dom.element.setMarker(d,c,"blockquote_processed",!0)),a.push(f);CKEDITOR.dom.element.clearAllMarkers(d);for(b=e.length-1;0<=b;b--){c=e[b];a:{d=c;for(var f=0,m=d.getChildCount(),l=void 0;f<m&&(l=d.getChild(f));f++)if(l.type==CKEDITOR.NODE_ELEMENT&&l.isBlockBoundary()){d=!1;break a}d=!0}d&&c.remove()}if(g.config.enterMode==CKEDITOR.ENTER_BR)for(c=!0;a.length;)if(f=a.shift(),"div"==f.getName()){b=new CKEDITOR.dom.documentFragment(g.document);!c||!f.getPrevious()||f.getPrevious().type==
CKEDITOR.NODE_ELEMENT&&f.getPrevious().isBlockBoundary()||b.append(g.document.createElement("br"));for(c=f.getNext()&&!(f.getNext().type==CKEDITOR.NODE_ELEMENT&&f.getNext().isBlockBoundary());f.getFirst();)f.getFirst().remove().appendTo(b);c&&b.append(g.document.createElement("br"));b.replace(f);c=!1}}k.selectBookmarks(h);g.focus()}},refresh:function(g,a){this.setState(g.elementPath(a.block||a.blockLimit).contains("blockquote",1)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)},context:"blockquote",allowedContent:"blockquote",
requiredContent:"blockquote"};CKEDITOR.plugins.add("blockquote",{init:function(g){g.blockless||(g.addCommand("blockquote",m),g.ui.addButton&&g.ui.addButton("Blockquote",{label:g.lang.blockquote.toolbar,command:"blockquote",toolbar:"blocks,10"}))}})})();CKEDITOR.plugins.add("notification",{init:function(b){function a(b){var a=new CKEDITOR.dom.element("div");a.setStyles({position:"fixed","margin-left":"-9999px"});a.setAttributes({"aria-live":"assertive","aria-atomic":"true"});a.setText(b);CKEDITOR.document.getBody().append(a);setTimeout(function(){a.remove()},100)}b._.notificationArea=new Area(b);b.showNotification=function(a,d,e){var f,l;"progress"==d?f=e:l=e;a=new CKEDITOR.plugins.notification(b,{message:a,type:d,progress:f,duration:l});a.show();
return a};b.on("key",function(c){if(27==c.data.keyCode){var d=b._.notificationArea.notifications;d.length&&(a(b.lang.notification.closed),d[d.length-1].hide(),c.cancel())}})}});function Notification(b,a){CKEDITOR.tools.extend(this,a,{editor:b,id:"cke-"+CKEDITOR.tools.getUniqueId(),area:b._.notificationArea});a.type||(this.type="info");this.element=this._createElement();b.plugins.clipboard&&CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(this.element)}
Notification.prototype={show:function(){!1!==this.editor.fire("notificationShow",{notification:this})&&(this.area.add(this),this._hideAfterTimeout())},update:function(b){var a=!0;!1===this.editor.fire("notificationUpdate",{notification:this,options:b})&&(a=!1);var c=this.element,d=c.findOne(".cke_notification_message"),e=c.findOne(".cke_notification_progress"),f=b.type;c.removeAttribute("role");b.progress&&"progress"!=this.type&&(f="progress");f&&(c.removeClass(this._getClass()),c.removeAttribute("aria-label"),
this.type=f,c.addClass(this._getClass()),c.setAttribute("aria-label",this.type),"progress"!=this.type||e?"progress"!=this.type&&e&&e.remove():(e=this._createProgressElement(),e.insertBefore(d)));void 0!==b.message&&(this.message=b.message,d.setHtml(this.message));void 0!==b.progress&&(this.progress=b.progress,e&&e.setStyle("width",this._getPercentageProgress()));a&&b.important&&(c.setAttribute("role","alert"),this.isVisible()||this.area.add(this));this.duration=b.duration;this._hideAfterTimeout()},
hide:function(){!1!==this.editor.fire("notificationHide",{notification:this})&&this.area.remove(this)},isVisible:function(){return 0<=CKEDITOR.tools.indexOf(this.area.notifications,this)},_createElement:function(){var b=this,a,c,d=this.editor.lang.common.close;a=new CKEDITOR.dom.element("div");a.addClass("cke_notification");a.addClass(this._getClass());a.setAttributes({id:this.id,role:"alert","aria-label":this.type});"progress"==this.type&&a.append(this._createProgressElement());c=new CKEDITOR.dom.element("p");
c.addClass("cke_notification_message");c.setHtml(this.message);a.append(c);c=CKEDITOR.dom.element.createFromHtml('\x3ca class\x3d"cke_notification_close" href\x3d"javascript:void(0)" title\x3d"'+d+'" role\x3d"button" tabindex\x3d"-1"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e');a.append(c);c.on("click",function(){b.editor.focus();b.hide()});return a},_getClass:function(){return"progress"==this.type?"cke_notification_info":"cke_notification_"+this.type},_createProgressElement:function(){var b=
new CKEDITOR.dom.element("span");b.addClass("cke_notification_progress");b.setStyle("width",this._getPercentageProgress());return b},_getPercentageProgress:function(){return Math.round(100*(this.progress||0))+"%"},_hideAfterTimeout:function(){var b=this,a;this._hideTimeoutId&&clearTimeout(this._hideTimeoutId);if("number"==typeof this.duration)a=this.duration;else if("info"==this.type||"success"==this.type)a="number"==typeof this.editor.config.notification_duration?this.editor.config.notification_duration:
5E3;a&&(b._hideTimeoutId=setTimeout(function(){b.hide()},a))}};function Area(b){var a=this;this.editor=b;this.notifications=[];this.element=this._createElement();this._uiBuffer=CKEDITOR.tools.eventsBuffer(10,this._layout,this);this._changeBuffer=CKEDITOR.tools.eventsBuffer(500,this._layout,this);b.on("destroy",function(){a._removeListeners();a.element.remove()})}
Area.prototype={add:function(b){this.notifications.push(b);this.element.append(b.element);1==this.element.getChildCount()&&(CKEDITOR.document.getBody().append(this.element),this._attachListeners());this._layout()},remove:function(b){var a=CKEDITOR.tools.indexOf(this.notifications,b);0>a||(this.notifications.splice(a,1),b.element.remove(),this.element.getChildCount()||(this._removeListeners(),this.element.remove()))},_createElement:function(){var b=this.editor,a=b.config,c=new CKEDITOR.dom.element("div");
c.addClass("cke_notifications_area");c.setAttribute("id","cke_notifications_area_"+b.name);c.setStyle("z-index",a.baseFloatZIndex-2);return c},_attachListeners:function(){var b=CKEDITOR.document.getWindow(),a=this.editor;b.on("scroll",this._uiBuffer.input);b.on("resize",this._uiBuffer.input);a.on("change",this._changeBuffer.input);a.on("floatingSpaceLayout",this._layout,this,null,20);a.on("blur",this._layout,this,null,20)},_removeListeners:function(){var b=CKEDITOR.document.getWindow(),a=this.editor;
b.removeListener("scroll",this._uiBuffer.input);b.removeListener("resize",this._uiBuffer.input);a.removeListener("change",this._changeBuffer.input);a.removeListener("floatingSpaceLayout",this._layout);a.removeListener("blur",this._layout)},_layout:function(){function b(){a.setStyle("left",k(n+d.width-g-h))}var a=this.element,c=this.editor,d=c.ui.contentsElement.getClientRect(),e=c.ui.contentsElement.getDocumentPosition(),f,l,r=a.getClientRect(),m,g=this._notificationWidth,h=this._notificationMargin;
m=CKEDITOR.document.getWindow();var p=m.getScrollPosition(),q=m.getViewPaneSize(),t=CKEDITOR.document.getBody(),u=t.getDocumentPosition(),k=CKEDITOR.tools.cssLength;g&&h||(m=this.element.getChild(0),g=this._notificationWidth=m.getClientRect().width,h=this._notificationMargin=parseInt(m.getComputedStyle("margin-left"),10)+parseInt(m.getComputedStyle("margin-right"),10));c.toolbar&&(f=c.ui.space("top"),l=f.getClientRect());f&&f.isVisible()&&l.bottom>d.top&&l.bottom<d.bottom-r.height?a.setStyles({position:"fixed",
top:k(l.bottom)}):0<d.top?a.setStyles({position:"absolute",top:k(e.y)}):e.y+d.height-r.height>p.y?a.setStyles({position:"fixed",top:0}):a.setStyles({position:"absolute",top:k(e.y+d.height-r.height)});var n="fixed"==a.getStyle("position")?d.left:"static"!=t.getComputedStyle("position")?e.x-u.x:e.x;d.width<g+h?e.x+g+h>p.x+q.width?b():a.setStyle("left",k(n)):e.x+g+h>p.x+q.width?a.setStyle("left",k(n)):e.x+d.width/2+g/2+h>p.x+q.width?a.setStyle("left",k(n-e.x+p.x+q.width-g-h)):0>d.left+d.width-g-h?b():
0>d.left+d.width/2-g/2?a.setStyle("left",k(n-e.x+p.x)):a.setStyle("left",k(n+d.width/2-g/2-h/2))}};CKEDITOR.plugins.notification=Notification;(function(){var c='\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href\x3d\"javascript:void('{titleJs}')\"")+' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(c+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(c+=
' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var c=c+(' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"'),c=c+'\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e',
t=CKEDITOR.addTemplate("buttonArrow",'\x3cspan class\x3d"cke_button_arrow"\x3e'+(CKEDITOR.env.hc?"\x26#9660;":"")+"\x3c/span\x3e"),u=CKEDITOR.addTemplate("button",c);CKEDITOR.plugins.add("button",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTON="button";CKEDITOR.ui.button=function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};
CKEDITOR.ui.button.prototype={render:function(a,b){function c(){var f=a.mode;f&&(f=this.modes[f]?void 0!==m[f]?m[f]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,f=a.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:f,this.setState(f),this.refresh&&this.refresh())}var n=CKEDITOR.env,p=this._.id=CKEDITOR.tools.getNextId(),g="",d=this.command,q,k,h;this._.editor=a;var e={id:p,button:this,editor:a,focus:function(){CKEDITOR.document.getById(p).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},
v=CKEDITOR.tools.addFunction(function(a){if(e.onkey)return a=new CKEDITOR.dom.event(a),!1!==e.onkey(e,a.getKeystroke())}),w=CKEDITOR.tools.addFunction(function(a){var b;e.onfocus&&(b=!1!==e.onfocus(e,new CKEDITOR.dom.event(a)));return b}),r=0;e.clickFn=q=CKEDITOR.tools.addFunction(function(){r&&(a.unlockSelection(1),r=0);e.execute();n.iOS&&a.focus()});if(this.modes){var m={};a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(m[a.mode]=this._.state)},this);a.on("activeFilterChange",
c,this);a.on("mode",c,this);!this.readOnly&&a.on("readOnly",c,this)}else d&&(d=a.getCommand(d))&&(d.on("state",function(){this.setState(d.state)},this),g+=d.state==CKEDITOR.TRISTATE_ON?"on":d.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off");if(this.directional)a.on("contentDirChanged",function(b){var c=CKEDITOR.document.getById(this._.id),d=c.getFirst();b=b.data;b!=a.lang.dir?c.addClass("cke_"+b):c.removeClass("cke_ltr").removeClass("cke_rtl");d.setAttribute("style",CKEDITOR.skin.getIconStyle(l,
"rtl"==b,this.icon,this.iconOffset))},this);d?(k=a.getCommandKeystroke(d))&&(h=CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard,k)):g+="off";var l=k=this.name||this.command;this.icon&&!/\./.test(this.icon)&&(l=this.icon,this.icon=null);g={id:p,name:k,iconName:l,label:this.label,cls:this.className||"",state:g,ariaDisabled:"disabled"==g?"true":"false",title:this.title+(h?" ("+h.display+")":""),ariaShortcut:h?a.lang.common.keyboardShortcut+" "+h.aria:"",titleJs:n.gecko&&!n.hc?"":(this.title||
"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:v,focusFn:w,clickFn:q,style:CKEDITOR.skin.getIconStyle(l,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?t.output():""};u.output(g,b);if(this.onRender)this.onRender();return e},setState:function(a){if(this._.state==a)return!1;this._.state=a;var b=CKEDITOR.document.getById(this._.id);return b?(b.setState(a,"cke_button"),a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",!0):b.removeAttribute("aria-disabled"),
this.hasArrow?(a=a==CKEDITOR.TRISTATE_ON?this._.editor.lang.button.selectedLabel.replace(/%1/g,this.label):this.label,CKEDITOR.document.getById(this._.id+"_label").setText(a)):a==CKEDITOR.TRISTATE_ON?b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return this._.state},toFeature:function(a){if(this._.feature)return this._.feature;var b=this;this.allowedContent||this.requiredContent||!this.command||(b=a.getCommand(this.command)||b);return this._.feature=
b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}})();(function(){function D(a){function d(){for(var b=f(),e=CKEDITOR.tools.clone(a.config.toolbarGroups)||v(a),n=0;n<e.length;n++){var g=e[n];if("/"!=g){"string"==typeof g&&(g=e[n]={name:g});var l,d=g.groups;if(d)for(var h=0;h<d.length;h++)l=d[h],(l=b[l])&&c(g,l);(l=b[g.name])&&c(g,l)}}return e}function f(){var b={},c,e,g;for(c in a.ui.items)e=a.ui.items[c],g=e.toolbar||"others",g=g.split(","),e=g[0],g=parseInt(g[1]||-1,10),b[e]||(b[e]=[]),b[e].push({name:c,order:g});for(e in b)b[e]=b[e].sort(function(b,
a){return b.order==a.order?0:0>a.order?-1:0>b.order?1:b.order<a.order?-1:1});return b}function c(c,e){if(e.length){c.items?c.items.push(a.ui.create("-")):c.items=[];for(var d;d=e.shift();)d="string"==typeof d?d:d.name,b&&-1!=CKEDITOR.tools.indexOf(b,d)||(d=a.ui.create(d))&&a.addFeature(d)&&c.items.push(d)}}function h(b){var a=[],e,d,h;for(e=0;e<b.length;++e)d=b[e],h={},"/"==d?a.push(d):CKEDITOR.tools.isArray(d)?(c(h,CKEDITOR.tools.clone(d)),a.push(h)):d.items&&(c(h,CKEDITOR.tools.clone(d.items)),
h.name=d.name,a.push(h));return a}var b=a.config.removeButtons,b=b&&b.split(","),e=a.config.toolbar;"string"==typeof e&&(e=a.config["toolbar_"+e]);return a.toolbar=e?h(e):d()}function v(a){return a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list",
"indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},"/",{name:"styles"},{name:"colors"},{name:"tools"},{name:"others"},{name:"about"}])}var z=function(){this.toolbars=[];this.focusCommandExecuted=!1};z.prototype.focus=function(){for(var a=0,d;d=this.toolbars[a++];)for(var f=0,c;c=d.items[f++];)if(c.focus){c.focus();return}};var E={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()},
100):a.toolbox.focus())}};CKEDITOR.plugins.add("toolbar",{requires:"button",init:function(a){var d,f=function(c,h){var b,e="rtl"==a.lang.dir,k=a.config.toolbarGroupCycling,q=e?37:39,e=e?39:37,k=void 0===k||k;switch(h){case 9:case CKEDITOR.SHIFT+9:for(;!b||!b.items.length;)if(b=9==h?(b?b.next:c.toolbar.next)||a.toolbox.toolbars[0]:(b?b.previous:c.toolbar.previous)||a.toolbox.toolbars[a.toolbox.toolbars.length-1],b.items.length)for(c=b.items[d?b.items.length-1:0];c&&!c.focus;)(c=d?c.previous:c.next)||
(b=0);c&&c.focus();return!1;case q:b=c;do b=b.next,!b&&k&&(b=c.toolbar.items[0]);while(b&&!b.focus);b?b.focus():f(c,9);return!1;case 40:return c.button&&c.button.hasArrow?c.execute():f(c,40==h?q:e),!1;case e:case 38:b=c;do b=b.previous,!b&&k&&(b=c.toolbar.items[c.toolbar.items.length-1]);while(b&&!b.focus);b?b.focus():(d=1,f(c,CKEDITOR.SHIFT+9),d=0);return!1;case 27:return a.focus(),!1;case 13:case 32:return c.execute(),!1}return!0};a.on("uiSpace",function(c){if(c.data.space==a.config.toolbarLocation){c.removeListener();
a.toolbox=new z;var d=CKEDITOR.tools.getNextId(),b=['\x3cspan id\x3d"',d,'" class\x3d"cke_voice_label"\x3e',a.lang.toolbar.toolbars,"\x3c/span\x3e",'\x3cspan id\x3d"'+a.ui.spaceId("toolbox")+'" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"',d,'" onmousedown\x3d"return false;"\x3e'],d=!1!==a.config.toolbarStartupExpanded,e,k;a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&b.push('\x3cspan class\x3d"cke_toolbox_main"'+(d?"\x3e":' style\x3d"display:none"\x3e'));
for(var q=a.toolbox.toolbars,n=D(a),g=n.length,l=0;l<g;l++){var r,m=0,w,p=n[l],v="/"!==p&&("/"===n[l+1]||l==g-1),x;if(p)if(e&&(b.push("\x3c/span\x3e"),k=e=0),"/"===p)b.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e');else{x=p.items||p;for(var y=0;y<x.length;y++){var t=x[y],A;if(t){var B=function(c){c=c.render(a,b);u=m.items.push(c)-1;0<u&&(c.previous=m.items[u-1],c.previous.next=c);c.toolbar=m;c.onkey=f;c.onfocus=function(){a.toolbox.focusCommandExecuted||a.focus()}};if(t.type==CKEDITOR.UI_SEPARATOR)k=
e&&t;else{A=!1!==t.canGroup;if(!m){r=CKEDITOR.tools.getNextId();m={id:r,items:[]};w=p.name&&(a.lang.toolbar.toolbarGroups[p.name]||p.name);b.push('\x3cspan id\x3d"',r,'" class\x3d"cke_toolbar'+(v?' cke_toolbar_last"':'"'),w?' aria-labelledby\x3d"'+r+'_label"':"",' role\x3d"toolbar"\x3e');w&&b.push('\x3cspan id\x3d"',r,'_label" class\x3d"cke_voice_label"\x3e',w,"\x3c/span\x3e");b.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e');var u=q.push(m)-1;0<u&&(m.previous=q[u-1],m.previous.next=
m)}A?e||(b.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'),e=1):e&&(b.push("\x3c/span\x3e"),e=0);k&&(B(k),k=0);B(t)}}}e&&(b.push("\x3c/span\x3e"),k=e=0);m&&b.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e')}}a.config.toolbarCanCollapse&&b.push("\x3c/span\x3e");if(a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var C=CKEDITOR.tools.addFunction(function(){a.execCommand("toolbarCollapse")});a.on("destroy",function(){CKEDITOR.tools.removeFunction(C)});
a.addCommand("toolbarCollapse",{readOnly:1,exec:function(b){var a=b.ui.space("toolbar_collapser"),c=a.getPrevious(),d=b.ui.space("contents"),e=c.getParent(),h=parseInt(d.$.style.height,10),g=e.$.offsetHeight,f=a.hasClass("cke_toolbox_collapser_min");f?(c.show(),a.removeClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarCollapse)):(c.hide(),a.addClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarExpand));a.getFirst().setText(f?"▲":"◀");d.setStyle("height",
h-(e.$.offsetHeight-g)+"px");b.fire("resize",{outerHeight:b.container.$.offsetHeight,contentsHeight:d.$.offsetHeight,outerWidth:b.container.$.offsetWidth})},modes:{wysiwyg:1,source:1}});a.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?189:109),"toolbarCollapse");b.push('\x3ca title\x3d"'+(d?a.lang.toolbar.toolbarCollapse:a.lang.toolbar.toolbarExpand)+'" id\x3d"'+a.ui.spaceId("toolbar_collapser")+'" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser');d||b.push(" cke_toolbox_collapser_min");
b.push('" onclick\x3d"CKEDITOR.tools.callFunction('+C+')"\x3e','\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e',"\x3c/a\x3e")}b.push("\x3c/span\x3e");c.data.html+=b.join("")}});a.on("destroy",function(){if(this.toolbox){var a,d=0,b,e,f;for(a=this.toolbox.toolbars;d<a.length;d++)for(e=a[d].items,b=0;b<e.length;b++)f=e[b],f.clickFn&&CKEDITOR.tools.removeFunction(f.clickFn),f.keyDownFn&&CKEDITOR.tools.removeFunction(f.keyDownFn)}});a.on("uiReady",function(){var c=a.ui.space("toolbox");c&&a.focusManager.add(c,
1)});a.addCommand("toolbarFocus",E);a.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus");a.ui.add("-",CKEDITOR.UI_SEPARATOR,{});a.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,d){d.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e');return{}}}}})}});CKEDITOR.ui.prototype.addToolbarGroup=function(a,d,f){var c=v(this.editor),h=0===d,b={name:a};if(f){if(f=CKEDITOR.tools.search(c,function(a){return a.name==f})){!f.groups&&(f.groups=[]);if(d&&
(d=CKEDITOR.tools.indexOf(f.groups,d),0<=d)){f.groups.splice(d+1,0,a);return}h?f.groups.splice(0,0,a):f.groups.push(a);return}d=null}d&&(d=CKEDITOR.tools.indexOf(c,function(a){return a.name==d}));h?c.splice(0,0,a):"number"==typeof d?c.splice(d+1,0,b):c.push(a)}})();CKEDITOR.UI_SEPARATOR="separator";CKEDITOR.config.toolbarLocation="top";(function(){function q(b,a,c){a.type||(a.type="auto");if(c&&!1===b.fire("beforePaste",a)||!a.dataValue&&a.dataTransfer.isEmpty())return!1;a.dataValue||(a.dataValue="");if(CKEDITOR.env.gecko&&"drop"==a.method&&b.toolbox)b.once("afterPaste",function(){b.toolbox.focus()});return b.fire("paste",a)}function y(b){function a(){var a=b.editable();if(CKEDITOR.plugins.clipboard.isCustomCopyCutSupported){var c=function(a){b.readOnly&&"cut"==a.name||m.initPasteDataTransfer(a,b);a.data.preventDefault()};a.on("copy",
c);a.on("cut",c);a.on("cut",function(){b.readOnly||b.extractSelectedHtml()},null,null,999)}a.on(m.mainPasteEvent,function(b){"beforepaste"==m.mainPasteEvent&&n||t(b)});"beforepaste"==m.mainPasteEvent&&(a.on("paste",function(b){u||(f(),b.data.preventDefault(),t(b),e("paste"))}),a.on("contextmenu",g,null,null,0),a.on("beforepaste",function(b){!b.data||b.data.$.ctrlKey||b.data.$.shiftKey||g()},null,null,0));a.on("beforecut",function(){!n&&h(b)});var d;a.attachListener(CKEDITOR.env.ie?a:b.document.getDocumentElement(),
"mouseup",function(){d=setTimeout(function(){r()},0)});b.on("destroy",function(){clearTimeout(d)});a.on("keyup",r)}function c(a){return{type:a,canUndo:"cut"==a,startDisabled:!0,fakeKeystroke:"cut"==a?CKEDITOR.CTRL+88:CKEDITOR.CTRL+67,exec:function(){"cut"==this.type&&h();var a;var c=this.type;if(CKEDITOR.env.ie)a=e(c);else try{a=b.document.$.execCommand(c,!1,null)}catch(d){a=!1}a||b.showNotification(b.lang.clipboard[this.type+"Error"]);return a}}}function d(){return{canUndo:!1,async:!0,fakeKeystroke:CKEDITOR.CTRL+
86,exec:function(b,a){function c(a,g){g="undefined"!==typeof g?g:!0;a?(a.method="paste",a.dataTransfer||(a.dataTransfer=m.initPasteDataTransfer()),q(b,a,g)):d&&b.showNotification(l,"info",b.config.clipboard_notificationDuration);b.fire("afterCommandExec",{name:"paste",command:e,returnValue:!!a})}a="undefined"!==typeof a&&null!==a?a:{};var e=this,d="undefined"!==typeof a.notification?a.notification:!0,g=a.type,h=CKEDITOR.tools.keystrokeToString(b.lang.common.keyboard,b.getCommandKeystroke(this)),l=
"string"===typeof d?d:b.lang.clipboard.pasteNotification.replace(/%1/,'\x3ckbd aria-label\x3d"'+h.aria+'"\x3e'+h.display+"\x3c/kbd\x3e"),h="string"===typeof a?a:a.dataValue;g?b._.nextPasteType=g:delete b._.nextPasteType;"string"===typeof h?c({dataValue:h}):b.getClipboardData(c)}}}function f(){u=1;setTimeout(function(){u=0},100)}function g(){n=1;setTimeout(function(){n=0},10)}function e(a){var c=b.document,d=c.getBody(),e=!1,g=function(){e=!0};d.on(a,g);7<CKEDITOR.env.version?c.$.execCommand(a):c.$.selection.createRange().execCommand(a);
d.removeListener(a,g);return e}function h(){if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var a=b.getSelection(),c,d,e;a.getType()==CKEDITOR.SELECTION_ELEMENT&&(c=a.getSelectedElement())&&(d=a.getRanges()[0],e=b.document.createText(""),e.insertBefore(c),d.setStartBefore(e),d.setEndAfter(c),a.selectRanges([d]),setTimeout(function(){c.getParent()&&(e.remove(),a.selectElement(c))},0))}}function k(a,c){var d=b.document,e=b.editable(),g=function(b){b.cancel()},h;if(!d.getById("cke_pastebin")){var l=b.getSelection(),
t=l.createBookmarks();CKEDITOR.env.ie&&l.root.fire("selectionchange");var f=new CKEDITOR.dom.element(!CKEDITOR.env.webkit&&!e.is("body")||CKEDITOR.env.ie?"div":"body",d);f.setAttributes({id:"cke_pastebin","data-cke-temp":"1"});var k=0,d=d.getWindow();CKEDITOR.env.webkit?(e.append(f),f.addClass("cke_editable"),e.is("body")||(k="static"!=e.getComputedStyle("position")?e:CKEDITOR.dom.element.get(e.$.offsetParent),k=k.getDocumentPosition().y)):e.getAscendant(CKEDITOR.env.ie?"body":"html",1).append(f);
f.setStyles({position:"absolute",top:d.getScrollPosition().y-k+10+"px",width:"1px",height:Math.max(1,d.getViewPaneSize().height-20)+"px",overflow:"hidden",margin:0,padding:0});CKEDITOR.env.safari&&f.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","text"));(k=f.getParent().isReadOnly())?(f.setOpacity(0),f.setAttribute("contenteditable",!0)):f.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-10000px");b.on("selectionChange",g,null,null,0);if(CKEDITOR.env.webkit||CKEDITOR.env.gecko)h=
e.once("blur",g,null,null,-100);k&&f.focus();k=new CKEDITOR.dom.range(f);k.selectNodeContents(f);var r=k.select();CKEDITOR.env.ie&&(h=e.once("blur",function(){b.lockSelection(r)}));var p=CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function(){CKEDITOR.env.webkit&&(CKEDITOR.document.getBody().$.scrollTop=p);h&&h.removeListener();CKEDITOR.env.ie&&e.focus();l.selectBookmarks(t);f.remove();var a;CKEDITOR.env.webkit&&(a=f.getFirst())&&a.is&&a.hasClass("Apple-style-span")&&(f=a);b.removeListener("selectionChange",
g);c(f.getHtml())},0)}}function v(){if("paste"==m.mainPasteEvent)return b.fire("beforePaste",{type:"auto",method:"paste"}),!1;b.focus();f();var a=b.focusManager;a.lock();if(b.editable().fire(m.mainPasteEvent)&&!e("paste"))return a.unlock(),!1;a.unlock();return!0}function l(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();f();"paste"==m.mainPasteEvent&&a.fire("beforepaste");break;case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:b.fire("saveSnapshot"),
setTimeout(function(){b.fire("saveSnapshot")},50)}}function t(a){var c={type:"auto",method:"paste",dataTransfer:m.initPasteDataTransfer(a)};c.dataTransfer.cacheData();var e=!1!==b.fire("beforePaste",c);e&&m.canClipboardApiBeTrusted(c.dataTransfer,b)?(a.data.preventDefault(),setTimeout(function(){q(b,c)},0)):k(a,function(a){c.dataValue=a.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"");e&&q(b,c)})}function r(){if("wysiwyg"==b.mode){var a=p("paste");b.getCommand("cut").setState(p("cut"));b.getCommand("copy").setState(p("copy"));
b.getCommand("paste").setState(a);b.fire("pasteState",a)}}function p(a){if(w&&a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED;if("paste"==a)return CKEDITOR.TRISTATE_OFF;a=b.getSelection();var c=a.getRanges();return a.getType()==CKEDITOR.SELECTION_NONE||1==c.length&&c[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var m=CKEDITOR.plugins.clipboard,n=0,u=0,w=0;(function(){b.on("key",l);b.on("contentDom",a);b.on("selectionChange",function(b){w=b.data.selection.getRanges()[0].checkReadOnly();
r()});b.contextMenu&&b.contextMenu.addListener(function(b,a){w=a.getRanges()[0].checkReadOnly();return{cut:p("cut"),copy:p("copy"),paste:p("paste")}})})();(function(){function a(c,e,d,g,h){var l=b.lang.clipboard[e];b.addCommand(e,d);b.ui.addButton&&b.ui.addButton(c,{label:l,command:e,toolbar:"clipboard,"+g});b.addMenuItems&&b.addMenuItem(e,{label:l,command:e,group:"clipboard",order:h})}a("Cut","cut",c("cut"),10,1);a("Copy","copy",c("copy"),20,4);a("Paste","paste",d(),30,8)})();b.getClipboardData=
function(a,c){function e(b){b.removeListener();b.cancel();c(b.data)}c||(c=a,a=null);b.on("paste",e,null,null,0);!1===v()&&(b.removeListener("paste",e),c(null))}}function z(b){if(CKEDITOR.env.webkit){if(!b.match(/^[^<]*$/g)&&!b.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else if(CKEDITOR.env.ie){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi)&&!b.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else if(CKEDITOR.env.gecko){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html";
return"htmlifiedtext"}function A(b,a){function c(b){return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e",~~(b/2))+(1==b%2?"\x3cbr\x3e":"")}a=a.replace(/\s+/g," ").replace(/> +</g,"\x3e\x3c").replace(/<br ?\/>/gi,"\x3cbr\x3e");a=a.replace(/<\/?[A-Z]+>/g,function(b){return b.toLowerCase()});if(a.match(/^[^<]$/))return a;CKEDITOR.env.webkit&&-1<a.indexOf("\x3cdiv\x3e")&&(a=a.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g,"\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"\x3cdiv\x3e\x3c/div\x3e"),
a.match(/<div>(<br>|)<\/div>/)&&(a="\x3cp\x3e"+a.replace(/(<div>(<br>|)<\/div>)+/g,function(b){return c(b.split("\x3c/div\x3e\x3cdiv\x3e").length+1)})+"\x3c/p\x3e"),a=a.replace(/<\/div><div>/g,"\x3cbr\x3e"),a=a.replace(/<\/?div>/g,""));CKEDITOR.env.gecko&&b.enterMode!=CKEDITOR.ENTER_BR&&(CKEDITOR.env.gecko&&(a=a.replace(/^<br><br>$/,"\x3cbr\x3e")),-1<a.indexOf("\x3cbr\x3e\x3cbr\x3e")&&(a="\x3cp\x3e"+a.replace(/(<br>){2,}/g,function(b){return c(b.length/4)})+"\x3c/p\x3e"));return B(b,a)}function C(){function b(){var b=
{},a;for(a in CKEDITOR.dtd)"$"!=a.charAt(0)&&"div"!=a&&"span"!=a&&(b[a]=1);return b}var a={};return{get:function(c){return"plain-text"==c?a.plainText||(a.plainText=new CKEDITOR.filter("br")):"semantic-content"==c?((c=a.semanticContent)||(c=new CKEDITOR.filter,c.allow({$1:{elements:b(),attributes:!0,styles:!1,classes:!1}}),c=a.semanticContent=c),c):c?new CKEDITOR.filter(c):null}}}function x(b,a,c){a=CKEDITOR.htmlParser.fragment.fromHtml(a);var d=new CKEDITOR.htmlParser.basicWriter;c.applyTo(a,!0,!1,
b.activeEnterMode);a.writeHtml(d);return d.getHtml()}function B(b,a){b.enterMode==CKEDITOR.ENTER_BR?a=a.replace(/(<\/p><p>)+/g,function(b){return CKEDITOR.tools.repeat("\x3cbr\x3e",b.length/7*2)}).replace(/<\/?p>/g,""):b.enterMode==CKEDITOR.ENTER_DIV&&(a=a.replace(/<(\/)?p>/g,"\x3c$1div\x3e"));return a}function D(b){b.data.preventDefault();b.data.$.dataTransfer.dropEffect="none"}function E(b){var a=CKEDITOR.plugins.clipboard;b.on("contentDom",function(){function c(a,c,e){c.select();q(b,{dataTransfer:e,
method:"drop"},1);e.sourceEditor.fire("saveSnapshot");e.sourceEditor.editable().extractHtmlFromRange(a);e.sourceEditor.getSelection().selectRanges([a]);e.sourceEditor.fire("saveSnapshot")}function d(c,e){c.select();q(b,{dataTransfer:e,method:"drop"},1);a.resetDragDataTransfer()}function f(a,c,e){var g={$:a.data.$,target:a.data.getTarget()};c&&(g.dragRange=c);e&&(g.dropRange=e);!1===b.fire(a.name,g)&&a.data.preventDefault()}function g(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());return b.getChildCount()}
var e=b.editable(),h=CKEDITOR.plugins.clipboard.getDropTarget(b),k=b.ui.space("top"),v=b.ui.space("bottom");a.preventDefaultDropOnElement(k);a.preventDefaultDropOnElement(v);e.attachListener(h,"dragstart",f);e.attachListener(b,"dragstart",a.resetDragDataTransfer,a,null,1);e.attachListener(b,"dragstart",function(c){a.initDragDataTransfer(c,b)},null,null,2);e.attachListener(b,"dragstart",function(){var c=a.dragRange=b.getSelection().getRanges()[0];CKEDITOR.env.ie&&10>CKEDITOR.env.version&&(a.dragStartContainerChildCount=
c?g(c.startContainer):null,a.dragEndContainerChildCount=c?g(c.endContainer):null)},null,null,100);e.attachListener(h,"dragend",f);e.attachListener(b,"dragend",a.initDragDataTransfer,a,null,1);e.attachListener(b,"dragend",a.resetDragDataTransfer,a,null,100);e.attachListener(h,"dragover",function(b){if(CKEDITOR.env.edge)b.data.preventDefault();else{var a=b.data.getTarget();a&&a.is&&a.is("html")?b.data.preventDefault():CKEDITOR.env.ie&&CKEDITOR.plugins.clipboard.isFileApiSupported&&b.data.$.dataTransfer.types.contains("Files")&&
b.data.preventDefault()}});e.attachListener(h,"drop",function(c){if(!c.data.$.defaultPrevented){c.data.preventDefault();var e=c.data.getTarget();if(!e.isReadOnly()||e.type==CKEDITOR.NODE_ELEMENT&&e.is("html")){var e=a.getRangeAtDropPosition(c,b),g=a.dragRange;e&&f(c,g,e)}}},null,null,9999);e.attachListener(b,"drop",a.initDragDataTransfer,a,null,1);e.attachListener(b,"drop",function(e){if(e=e.data){var g=e.dropRange,h=e.dragRange,f=e.dataTransfer;f.getTransferType(b)==CKEDITOR.DATA_TRANSFER_INTERNAL?
setTimeout(function(){a.internalDrop(h,g,f,b)},0):f.getTransferType(b)==CKEDITOR.DATA_TRANSFER_CROSS_EDITORS?c(h,g,f):d(g,f)}},null,null,9999)})}CKEDITOR.plugins.add("clipboard",{requires:"notification,toolbar",init:function(b){var a,c=C();b.config.forcePasteAsPlainText?a="plain-text":b.config.pasteFilter?a=b.config.pasteFilter:!CKEDITOR.env.webkit||"pasteFilter"in b.config||(a="semantic-content");b.pasteFilter=c.get(a);y(b);E(b);if(CKEDITOR.env.gecko){var d=["image/png","image/jpeg","image/gif"],
f;b.on("paste",function(a){var c=a.data,h=c.dataTransfer;if(!c.dataValue&&"paste"==c.method&&h&&1==h.getFilesCount()&&f!=h.id&&(h=h.getFile(0),-1!=CKEDITOR.tools.indexOf(d,h.type))){var k=new FileReader;k.addEventListener("load",function(){a.data.dataValue='\x3cimg src\x3d"'+k.result+'" /\x3e';b.fire("paste",a.data)},!1);k.addEventListener("abort",function(){b.fire("paste",a.data)},!1);k.addEventListener("error",function(){b.fire("paste",a.data)},!1);k.readAsDataURL(h);f=c.dataTransfer.id;a.stop()}},
null,null,1)}b.on("paste",function(a){a.data.dataTransfer||(a.data.dataTransfer=new CKEDITOR.plugins.clipboard.dataTransfer);if(!a.data.dataValue){var c=a.data.dataTransfer,d=c.getData("text/html");if(d)a.data.dataValue=d,a.data.type="html";else if(d=c.getData("text/plain"))a.data.dataValue=b.editable().transformPlainTextToHtml(d),a.data.type="text"}},null,null,1);b.on("paste",function(b){var a=b.data.dataValue,c=CKEDITOR.dtd.$block;-1<a.indexOf("Apple-")&&(a=a.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi,
" "),"html"!=b.data.type&&(a=a.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,function(a,b){return b.replace(/\t/g,"\x26nbsp;\x26nbsp; \x26nbsp;")})),-1<a.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e')&&(b.data.startsWithEOL=1,b.data.preSniffing="html",a=a.replace(/<br class="Apple-interchange-newline">/,"")),a=a.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1"));if(a.match(/^<[^<]+cke_(editable|contents)/i)){var d,f,l=new CKEDITOR.dom.element("div");for(l.setHtml(a);1==l.getChildCount()&&
(d=l.getFirst())&&d.type==CKEDITOR.NODE_ELEMENT&&(d.hasClass("cke_editable")||d.hasClass("cke_contents"));)l=f=d;f&&(a=f.getHtml().replace(/<br>$/i,""))}CKEDITOR.env.ie?a=a.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g,function(a,e){return e.toLowerCase()in c?(b.data.preSniffing="html","\x3c"+e):a}):CKEDITOR.env.webkit?a=a.replace(/<\/(\w+)><div><br><\/div>$/,function(a,e){return e in c?(b.data.endsWithEOL=1,"\x3c/"+e+"\x3e"):a}):CKEDITOR.env.gecko&&(a=a.replace(/(\s)<br>$/,"$1"));b.data.dataValue=a},null,
null,3);b.on("paste",function(a){a=a.data;var e=b._.nextPasteType||a.type,d=a.dataValue,f,n=b.config.clipboard_defaultContentType||"html",l=a.dataTransfer.getTransferType(b);f="html"==e||"html"==a.preSniffing?"html":z(d);delete b._.nextPasteType;"htmlifiedtext"==f&&(d=A(b.config,d));"text"==e&&"html"==f?d=x(b,d,c.get("plain-text")):l==CKEDITOR.DATA_TRANSFER_EXTERNAL&&b.pasteFilter&&!a.dontFilter&&(d=x(b,d,b.pasteFilter));a.startsWithEOL&&(d='\x3cbr data-cke-eol\x3d"1"\x3e'+d);a.endsWithEOL&&(d+='\x3cbr data-cke-eol\x3d"1"\x3e');
"auto"==e&&(e="html"==f||"html"==n?"html":"text");a.type=e;a.dataValue=d;delete a.preSniffing;delete a.startsWithEOL;delete a.endsWithEOL},null,null,6);b.on("paste",function(a){a=a.data;a.dataValue&&(b.insertHtml(a.dataValue,a.type,a.range),setTimeout(function(){b.fire("afterPaste")},0))},null,null,1E3)}});CKEDITOR.plugins.clipboard={isCustomCopyCutSupported:!CKEDITOR.env.ie&&!CKEDITOR.env.iOS,isCustomDataTypesSupported:!CKEDITOR.env.ie,isFileApiSupported:!CKEDITOR.env.ie||9<CKEDITOR.env.version,
mainPasteEvent:CKEDITOR.env.ie&&!CKEDITOR.env.edge?"beforepaste":"paste",canClipboardApiBeTrusted:function(b,a){return b.getTransferType(a)!=CKEDITOR.DATA_TRANSFER_EXTERNAL||CKEDITOR.env.chrome&&!b.isEmpty()||CKEDITOR.env.gecko&&(b.getData("text/html")||b.getFilesCount())||CKEDITOR.env.safari&&603<=CKEDITOR.env.version&&!CKEDITOR.env.iOS?!0:!1},getDropTarget:function(b){var a=b.editable();return CKEDITOR.env.ie&&9>CKEDITOR.env.version||a.isInline()?a:b.document},fixSplitNodesAfterDrop:function(b,
a,c,d){function f(b,c,d){var f=b;f.type==CKEDITOR.NODE_TEXT&&(f=b.getParent());if(f.equals(c)&&d!=c.getChildCount())return b=a.startContainer.getChild(a.startOffset-1),c=a.startContainer.getChild(a.startOffset),b&&b.type==CKEDITOR.NODE_TEXT&&c&&c.type==CKEDITOR.NODE_TEXT&&(d=b.getLength(),b.setText(b.getText()+c.getText()),c.remove(),a.setStart(b,d),a.collapse(!0)),!0}var g=a.startContainer;"number"==typeof d&&"number"==typeof c&&g.type==CKEDITOR.NODE_ELEMENT&&(f(b.startContainer,g,c)||f(b.endContainer,
g,d))},isDropRangeAffectedByDragRange:function(b,a){var c=a.startContainer,d=a.endOffset;return b.endContainer.equals(c)&&b.endOffset<=d||b.startContainer.getParent().equals(c)&&b.startContainer.getIndex()<d||b.endContainer.getParent().equals(c)&&b.endContainer.getIndex()<d?!0:!1},internalDrop:function(b,a,c,d){var f=CKEDITOR.plugins.clipboard,g=d.editable(),e,h;d.fire("saveSnapshot");d.fire("lockSnapshot",{dontUpdate:1});CKEDITOR.env.ie&&10>CKEDITOR.env.version&&this.fixSplitNodesAfterDrop(b,a,f.dragStartContainerChildCount,
f.dragEndContainerChildCount);(h=this.isDropRangeAffectedByDragRange(b,a))||(e=b.createBookmark(!1));f=a.clone().createBookmark(!1);h&&(e=b.createBookmark(!1));b=e.startNode;a=e.endNode;h=f.startNode;a&&b.getPosition(h)&CKEDITOR.POSITION_PRECEDING&&a.getPosition(h)&CKEDITOR.POSITION_FOLLOWING&&h.insertBefore(b);b=d.createRange();b.moveToBookmark(e);g.extractHtmlFromRange(b,1);a=d.createRange();a.moveToBookmark(f);q(d,{dataTransfer:c,method:"drop",range:a},1);d.fire("unlockSnapshot")},getRangeAtDropPosition:function(b,
a){var c=b.data.$,d=c.clientX,f=c.clientY,g=a.getSelection(!0).getRanges()[0],e=a.createRange();if(b.data.testRange)return b.data.testRange;if(document.caretRangeFromPoint&&a.document.$.caretRangeFromPoint(d,f))c=a.document.$.caretRangeFromPoint(d,f),e.setStart(CKEDITOR.dom.node(c.startContainer),c.startOffset),e.collapse(!0);else if(c.rangeParent)e.setStart(CKEDITOR.dom.node(c.rangeParent),c.rangeOffset),e.collapse(!0);else{if(CKEDITOR.env.ie&&8<CKEDITOR.env.version&&g&&a.editable().hasFocus)return g;
if(document.body.createTextRange){a.focus();c=a.document.getBody().$.createTextRange();try{for(var h=!1,k=0;20>k&&!h;k++){if(!h)try{c.moveToPoint(d,f-k),h=!0}catch(n){}if(!h)try{c.moveToPoint(d,f+k),h=!0}catch(l){}}if(h){var t="cke-temp-"+(new Date).getTime();c.pasteHTML('\x3cspan id\x3d"'+t+'"\x3e​\x3c/span\x3e');var r=a.document.getById(t);e.moveToPosition(r,CKEDITOR.POSITION_BEFORE_START);r.remove()}else{var p=a.document.$.elementFromPoint(d,f),m=new CKEDITOR.dom.element(p),q;if(m.equals(a.editable())||
"html"==m.getName())return g&&g.startContainer&&!g.startContainer.equals(a.editable())?g:null;q=m.getClientRect();d<q.left?e.setStartAt(m,CKEDITOR.POSITION_AFTER_START):e.setStartAt(m,CKEDITOR.POSITION_BEFORE_END);e.collapse(!0)}}catch(u){return null}}else return null}return e},initDragDataTransfer:function(b,a){var c=b.data.$?b.data.$.dataTransfer:null,d=new this.dataTransfer(c,a);c?this.dragData&&d.id==this.dragData.id?d=this.dragData:this.dragData=d:this.dragData?d=this.dragData:this.dragData=
d;b.data.dataTransfer=d},resetDragDataTransfer:function(){this.dragData=null},initPasteDataTransfer:function(b,a){if(this.isCustomCopyCutSupported){if(b&&b.data&&b.data.$){var c=new this.dataTransfer(b.data.$.clipboardData,a);this.copyCutData&&c.id==this.copyCutData.id?(c=this.copyCutData,c.$=b.data.$.clipboardData):this.copyCutData=c;return c}return new this.dataTransfer(null,a)}return new this.dataTransfer(CKEDITOR.env.edge&&b&&b.data.$&&b.data.$.clipboardData||null,a)},preventDefaultDropOnElement:function(b){b&&
b.on("dragover",D)}};var n=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?"cke/id":"Text";CKEDITOR.plugins.clipboard.dataTransfer=function(b,a){b&&(this.$=b);this._={metaRegExp:/^<meta.*?>/i,bodyRegExp:/<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i,fragmentRegExp:/\x3c!--(?:Start|End)Fragment--\x3e/g,data:{},files:[],normalizeType:function(a){a=a.toLowerCase();return"text"==a||"text/plain"==a?"Text":"url"==a?"URL":a}};this.id=this.getData(n);this.id||(this.id="Text"==n?"":"cke-"+CKEDITOR.tools.getUniqueId());
if("Text"!=n)try{this.$.setData(n,this.id)}catch(c){}a&&(this.sourceEditor=a,this.setData("text/html",a.getSelectedHtml(1)),"Text"==n||this.getData("text/plain")||this.setData("text/plain",a.getSelection().getSelectedText()))};CKEDITOR.DATA_TRANSFER_INTERNAL=1;CKEDITOR.DATA_TRANSFER_CROSS_EDITORS=2;CKEDITOR.DATA_TRANSFER_EXTERNAL=3;CKEDITOR.plugins.clipboard.dataTransfer.prototype={getData:function(b,a){b=this._.normalizeType(b);var c=this._.data[b],d;if(void 0===c||null===c||""===c)try{c=this.$.getData(b)}catch(f){}if(void 0===
c||null===c||""===c)c="";"text/html"!=b||a?"Text"==b&&CKEDITOR.env.gecko&&this.getFilesCount()&&"file://"==c.substring(0,7)&&(c=""):(c=c.replace(this._.metaRegExp,""),(d=this._.bodyRegExp.exec(c))&&d.length&&(c=d[1],c=c.replace(this._.fragmentRegExp,"")));"string"===typeof c&&(d=c.indexOf("\x3c/html\x3e"),c=-1!==d?c.substring(0,d+7):c);return c},setData:function(b,a){b=this._.normalizeType(b);this._.data[b]=a;if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported||"URL"==b||"Text"==b){"Text"==n&&
"Text"==b&&(this.id=a);try{this.$.setData(b,a)}catch(c){}}},getTransferType:function(b){return this.sourceEditor?this.sourceEditor==b?CKEDITOR.DATA_TRANSFER_INTERNAL:CKEDITOR.DATA_TRANSFER_CROSS_EDITORS:CKEDITOR.DATA_TRANSFER_EXTERNAL},cacheData:function(){function b(b){b=a._.normalizeType(b);var c=a.getData(b,!0);c&&(a._.data[b]=c)}if(this.$){var a=this,c,d;if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported){if(this.$.types)for(c=0;c<this.$.types.length;c++)b(this.$.types[c])}else b("Text"),
b("URL");d=this._getImageFromClipboard();if(this.$&&this.$.files||d){this._.files=[];if(this.$.files&&this.$.files.length)for(c=0;c<this.$.files.length;c++)this._.files.push(this.$.files[c]);0===this._.files.length&&d&&this._.files.push(d)}}},getFilesCount:function(){return this._.files.length?this._.files.length:this.$&&this.$.files&&this.$.files.length?this.$.files.length:this._getImageFromClipboard()?1:0},getFile:function(b){return this._.files.length?this._.files[b]:this.$&&this.$.files&&this.$.files.length?
this.$.files[b]:0===b?this._getImageFromClipboard():void 0},isEmpty:function(){var b={},a;if(this.getFilesCount())return!1;for(a in this._.data)b[a]=1;if(this.$)if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported){if(this.$.types)for(var c=0;c<this.$.types.length;c++)b[this.$.types[c]]=1}else b.Text=1,b.URL=1;"Text"!=n&&(b[n]=0);for(a in b)if(b[a]&&""!==this.getData(a))return!1;return!0},_getImageFromClipboard:function(){var b;if(this.$&&this.$.items&&this.$.items[0])try{if((b=this.$.items[0].getAsFile())&&
b.type)return b}catch(a){}}}})();CKEDITOR.config.clipboard_notificationDuration=1E4;(function(){function q(b,d,a){a=b.config.forceEnterMode||a;if("wysiwyg"==b.mode){d||(d=b.activeEnterMode);var h=b.elementPath();h&&!h.isContextFor("p")&&(d=CKEDITOR.ENTER_BR,a=1);b.fire("saveSnapshot");d==CKEDITOR.ENTER_BR?t(b,d,null,a):u(b,d,null,a);b.fire("saveSnapshot")}}function v(b){b=b.getSelection().getRanges(!0);for(var d=b.length-1;0<d;d--)b[d].deleteContents();return b[0]}function y(b){var d=b.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"true"==a.getAttribute("contenteditable")},
!0);if(b.root.equals(d))return b;d=new CKEDITOR.dom.range(d);d.moveToRange(b);return d}CKEDITOR.plugins.add("enterkey",{init:function(b){b.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){q(b)}});b.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){q(b,b.activeShiftEnterMode,1)}});b.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}});var z=CKEDITOR.dom.walker.whitespaces(),A=CKEDITOR.dom.walker.bookmark();CKEDITOR.plugins.enterkey={enterBlock:function(b,
d,a,h){if(a=a||v(b)){a=y(a);var f=a.document,k=a.checkStartOfBlock(),m=a.checkEndOfBlock(),l=b.elementPath(a.startContainer),c=l.block,n=d==CKEDITOR.ENTER_DIV?"div":"p",e;if(k&&m){if(c&&(c.is("li")||c.getParent().is("li"))){c.is("li")||(c=c.getParent());a=c.getParent();e=a.getParent();h=!c.hasPrevious();var p=!c.hasNext(),n=b.getSelection(),g=n.createBookmarks(),k=c.getDirection(1),m=c.getAttribute("class"),r=c.getAttribute("style"),q=e.getDirection(1)!=k;b=b.enterMode!=CKEDITOR.ENTER_BR||q||r||m;
if(e.is("li"))h||p?(h&&p&&a.remove(),c[p?"insertAfter":"insertBefore"](e)):c.breakParent(e);else{if(b)if(l.block.is("li")?(e=f.createElement(d==CKEDITOR.ENTER_P?"p":"div"),q&&e.setAttribute("dir",k),r&&e.setAttribute("style",r),m&&e.setAttribute("class",m),c.moveChildren(e)):e=l.block,h||p)e[h?"insertBefore":"insertAfter"](a);else c.breakParent(a),e.insertAfter(a);else if(c.appendBogus(!0),h||p)for(;f=c[h?"getFirst":"getLast"]();)f[h?"insertBefore":"insertAfter"](a);else for(c.breakParent(a);f=c.getLast();)f.insertAfter(a);
c.remove()}n.selectBookmarks(g);return}if(c&&c.getParent().is("blockquote")){c.breakParent(c.getParent());c.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getPrevious().remove();c.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getNext().remove();a.moveToElementEditStart(c);a.select();return}}else if(c&&c.is("pre")&&!m){t(b,d,a,h);return}if(k=a.splitBlock(n)){d=k.previousBlock;c=k.nextBlock;l=k.wasStartOfBlock;b=k.wasEndOfBlock;c?(g=c.getParent(),g.is("li")&&(c.breakParent(g),
c.move(c.getNext(),1))):d&&(g=d.getParent())&&g.is("li")&&(d.breakParent(g),g=d.getNext(),a.moveToElementEditStart(g),d.move(d.getPrevious()));if(l||b){if(d){if(d.is("li")||!w.test(d.getName())&&!d.is("pre"))e=d.clone()}else c&&(e=c.clone());e?h&&!e.is("li")&&e.renameNode(n):g&&g.is("li")?e=g:(e=f.createElement(n),d&&(p=d.getDirection())&&e.setAttribute("dir",p));if(f=k.elementPath)for(h=0,n=f.elements.length;h<n;h++){g=f.elements[h];if(g.equals(f.block)||g.equals(f.blockLimit))break;CKEDITOR.dtd.$removeEmpty[g.getName()]&&
(g=g.clone(),e.moveChildren(g),e.append(g))}e.appendBogus();e.getParent()||a.insertNode(e);e.is("li")&&e.removeAttribute("value");!CKEDITOR.env.ie||!l||b&&d.getChildCount()||(a.moveToElementEditStart(b?d:e),a.select());a.moveToElementEditStart(l&&!b?c:e)}else c.is("li")&&(e=a.clone(),e.selectNodeContents(c),e=new CKEDITOR.dom.walker(e),e.evaluator=function(a){return!(A(a)||z(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in CKEDITOR.dtd.$empty))},(g=e.next())&&
g.type==CKEDITOR.NODE_ELEMENT&&g.is("ul","ol")&&(CKEDITOR.env.needsBrFiller?f.createElement("br"):f.createText(" ")).insertBefore(g)),c&&a.moveToElementEditStart(c);a.select();a.scrollIntoView()}}},enterBr:function(b,d,a,h){if(a=a||v(b)){var f=a.document,k=a.checkEndOfBlock(),m=new CKEDITOR.dom.elementPath(b.getSelection().getStartElement()),l=m.block,c=l&&m.block.getName();h||"li"!=c?(!h&&k&&w.test(c)?(k=l.getDirection())?(f=f.createElement("div"),f.setAttribute("dir",k),f.insertAfter(l),a.setStart(f,
0)):(f.createElement("br").insertAfter(l),CKEDITOR.env.gecko&&f.createText("").insertAfter(l),a.setStartAt(l.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(b="pre"==c&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?f.createText("\r"):f.createElement("br"),a.deleteContents(),a.insertNode(b),CKEDITOR.env.needsBrFiller?(f.createText("﻿").insertAfter(b),k&&(l||m.blockLimit).appendBogus(),b.getNext().$.nodeValue="",a.setStartAt(b.getNext(),CKEDITOR.POSITION_AFTER_START)):
a.setStartAt(b,CKEDITOR.POSITION_AFTER_END)),a.collapse(!0),a.select(),a.scrollIntoView()):u(b,d,a,h)}}};var x=CKEDITOR.plugins.enterkey,t=x.enterBr,u=x.enterBlock,w=/^h[1-6]$/})();(function(){var b={canUndo:!1,exec:function(a){var b=a.document.createElement("hr");a.insertElement(b)},allowedContent:"hr",requiredContent:"hr"};CKEDITOR.plugins.add("horizontalrule",{init:function(a){a.blockless||(a.addCommand("horizontalrule",b),a.ui.addButton&&a.ui.addButton("HorizontalRule",{label:a.lang.horizontalrule.toolbar,command:"horizontalrule",toolbar:"insert,40"}))}})})();(function(){function m(a,b){var e,f;b.on("refresh",function(a){var b=[k],c;for(c in a.data.states)b.push(a.data.states[c]);this.setState(CKEDITOR.tools.search(b,p)?p:k)},b,null,100);b.on("exec",function(b){e=a.getSelection();f=e.createBookmarks(1);b.data||(b.data={});b.data.done=!1},b,null,0);b.on("exec",function(){a.forceNextSelectionCheck();e.selectBookmarks(f)},b,null,100)}var k=CKEDITOR.TRISTATE_DISABLED,p=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent",{init:function(a){var b=CKEDITOR.plugins.indent.genericDefinition;
m(a,a.addCommand("indent",new b(!0)));m(a,a.addCommand("outdent",new b));a.ui.addButton&&(a.ui.addButton("Indent",{label:a.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),a.ui.addButton("Outdent",{label:a.lang.indent.outdent,command:"outdent",directional:!0,toolbar:"indent,10"}));a.on("dirChanged",function(b){var f=a.createRange(),l=b.data.node;f.setStartBefore(l);f.setEndAfter(l);for(var n=new CKEDITOR.dom.walker(f),c;c=n.next();)if(c.type==CKEDITOR.NODE_ELEMENT)if(!c.equals(l)&&
c.getDirection())f.setStartAfter(c),n=new CKEDITOR.dom.walker(f);else{var d=a.config.indentClasses;if(d)for(var g="ltr"==b.data.dir?["_rtl",""]:["","_rtl"],h=0;h<d.length;h++)c.hasClass(d[h]+g[0])&&(c.removeClass(d[h]+g[0]),c.addClass(d[h]+g[1]));d=c.getStyle("margin-right");g=c.getStyle("margin-left");d?c.setStyle("margin-left",d):c.removeStyle("margin-left");g?c.setStyle("margin-right",g):c.removeStyle("margin-right")}})}});CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent=!!a;
this.startDisabled=!this.isIndent},specificDefinition:function(a,b,e){this.name=b;this.editor=a;this.jobs={};this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR;this.isIndent=!!e;this.relatedGlobal=e?"indent":"outdent";this.indentKey=e?9:CKEDITOR.SHIFT+9;this.database={}},registerCommands:function(a,b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var e=a.getCommand(b.relatedGlobal),c;for(c in b.jobs)e.on("exec",function(d){d.data.done||(a.fire("lockSnapshot"),b.execJob(a,c)&&(d.data.done=
!0),a.fire("unlockSnapshot"),CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,c),e.on("refresh",function(d){d.data.states||(d.data.states={});d.data.states[b.name+"@"+c]=b.refreshJob(a,c,d.data.path)},this,null,c);a.addFeature(b)})(this,b[a])})}};CKEDITOR.plugins.indent.genericDefinition.prototype={context:"p",exec:function(){}};CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var e=this.jobs[b];if(e.state!=k)return e.exec.call(this,a)},refreshJob:function(a,
b,e){b=this.jobs[b];a.activeFilter.checkFeature(this)?b.state=b.refresh.call(this,a,e):b.state=k;return b.state},getContext:function(a){return a.contains(this.context)}}})();(function(){function f(b,c,a){if(!b.getCustomData("indent_processed")){var d=this.editor,l=this.isIndent;if(c){d=b.$.className.match(this.classNameRegex);a=0;d&&(d=d[1],a=CKEDITOR.tools.indexOf(c,d)+1);if(0>(a+=l?1:-1))return;a=Math.min(a,c.length);a=Math.max(a,0);b.$.className=CKEDITOR.tools.ltrim(b.$.className.replace(this.classNameRegex,""));0<a&&b.addClass(c[a-1])}else{c=m(b,a);a=parseInt(b.getStyle(c),10);var g=d.config.indentOffset||40;isNaN(a)&&(a=0);a+=(l?1:-1)*g;if(0>a)return;a=Math.max(a,
0);a=Math.ceil(a/g)*g;b.setStyle(c,a?a+(d.config.indentUnit||"px"):"");""===b.getAttribute("style")&&b.removeAttribute("style")}CKEDITOR.dom.element.setMarker(this.database,b,"indent_processed",1)}}function m(b,c){return"ltr"==(c||b.getComputedStyle("direction"))?"margin-left":"margin-right"}var h=CKEDITOR.dtd.$listItem,p=CKEDITOR.dtd.$list,k=CKEDITOR.TRISTATE_DISABLED,n=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentblock",{requires:"indent",init:function(b){function c(){a.specificDefinition.apply(this,
arguments);this.allowedContent={"div h1 h2 h3 h4 h5 h6 ol p pre ul":{propertiesOnly:!0,styles:d?null:"margin-left,margin-right",classes:d||null}};this.contentTransformations=[["div: splitMarginShorthand"],["h1: splitMarginShorthand"],["h2: splitMarginShorthand"],["h3: splitMarginShorthand"],["h4: splitMarginShorthand"],["h5: splitMarginShorthand"],["h6: splitMarginShorthand"],["ol: splitMarginShorthand"],["p: splitMarginShorthand"],["pre: splitMarginShorthand"],["ul: splitMarginShorthand"]];this.enterBr&&
(this.allowedContent.div=!0);this.requiredContent=(this.enterBr?"div":"p")+(d?"("+d.join(",")+")":"{margin-left}");this.jobs={20:{refresh:function(a,b){var e=b.block||b.blockLimit;if(!e.is(h))var c=e.getAscendant(h),e=c&&b.contains(c)||e;e.is(h)&&(e=e.getParent());if(this.enterBr||this.getContext(b)){if(d){var c=d,e=e.$.className.match(this.classNameRegex),f=this.isIndent,c=e?f?e[1]!=c.slice(-1):!0:f;return c?n:k}return this.isIndent?n:e?CKEDITOR[0>=(parseInt(e.getStyle(m(e)),10)||0)?"TRISTATE_DISABLED":
"TRISTATE_OFF"]:k}return k},exec:function(a){var b=a.getSelection(),b=b&&b.getRanges()[0],c;if(c=a.elementPath().contains(p))f.call(this,c,d);else for(b=b.createIterator(),a=a.config.enterMode,b.enforceRealBlocks=!0,b.enlargeBr=a!=CKEDITOR.ENTER_BR;c=b.getNextParagraph(a==CKEDITOR.ENTER_P?"p":"div");)c.isReadOnly()||f.call(this,c,d);return!0}}}}var a=CKEDITOR.plugins.indent,d=b.config.indentClasses;a.registerCommands(b,{indentblock:new c(b,"indentblock",!0),outdentblock:new c(b,"outdentblock")});
CKEDITOR.tools.extend(c.prototype,a.specificDefinition.prototype,{context:{div:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,p:1,pre:1,table:1},classNameRegex:d?new RegExp("(?:^|\\s+)("+d.join("|")+")(?\x3d$|\\s)"):null})}})})();(function(){function w(d){function f(b){for(var e=c.startContainer,a=c.endContainer;e&&!e.getParent().equals(b);)e=e.getParent();for(;a&&!a.getParent().equals(b);)a=a.getParent();if(!e||!a)return!1;for(var g=e,e=[],k=!1;!k;)g.equals(a)&&(k=!0),e.push(g),g=g.getNext();if(1>e.length)return!1;g=b.getParents(!0);for(a=0;a<g.length;a++)if(g[a].getName&&p[g[a].getName()]){b=g[a];break}for(var g=l.isIndent?1:-1,a=e[0],e=e[e.length-1],k=CKEDITOR.plugins.list.listToArray(b,q),h=k[e.getCustomData("listarray_index")].indent,
a=a.getCustomData("listarray_index");a<=e.getCustomData("listarray_index");a++)if(k[a].indent+=g,0<g){var n=k[a].parent;k[a].parent=new CKEDITOR.dom.element(n.getName(),n.getDocument())}for(a=e.getCustomData("listarray_index")+1;a<k.length&&k[a].indent>h;a++)k[a].indent+=g;e=CKEDITOR.plugins.list.arrayToList(k,q,null,d.config.enterMode,b.getDirection());if(!l.isIndent){var f;if((f=b.getParent())&&f.is("li"))for(var g=e.listNode.getChildren(),r=[],m,a=g.count()-1;0<=a;a--)(m=g.getItem(a))&&m.is&&m.is("li")&&
r.push(m)}e&&e.listNode.replace(b);if(r&&r.length)for(a=0;a<r.length;a++){for(m=b=r[a];(m=m.getNext())&&m.is&&m.getName()in p;)CKEDITOR.env.needsNbspFiller&&!b.getFirst(x)&&b.append(c.document.createText(" ")),b.append(m);b.insertAfter(f)}e&&d.fire("contentDomInvalidated");return!0}for(var l=this,q=this.database,p=this.context,c,n=d.getSelection(),n=(n&&n.getRanges()).createIterator();c=n.getNextRange();){for(var b=c.getCommonAncestor();b&&(b.type!=CKEDITOR.NODE_ELEMENT||!p[b.getName()]);){if(d.editable().equals(b)){b=
!1;break}b=b.getParent()}b||(b=c.startPath().contains(p))&&c.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);if(!b){var h=c.getEnclosedNode();h&&h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in p&&(c.setStartAt(h,CKEDITOR.POSITION_AFTER_START),c.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),b=h)}b&&c.startContainer.type==CKEDITOR.NODE_ELEMENT&&c.startContainer.getName()in p&&(h=new CKEDITOR.dom.walker(c),h.evaluator=t,c.startContainer=h.next());b&&c.endContainer.type==CKEDITOR.NODE_ELEMENT&&c.endContainer.getName()in
p&&(h=new CKEDITOR.dom.walker(c),h.evaluator=t,c.endContainer=h.previous());if(b)return f(b)}return 0}function t(d){return d.type==CKEDITOR.NODE_ELEMENT&&d.is("li")}function x(d){return y(d)&&z(d)}var y=CKEDITOR.dom.walker.whitespaces(!0),z=CKEDITOR.dom.walker.bookmark(!1,!0),u=CKEDITOR.TRISTATE_DISABLED,v=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(d){function f(d){l.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];d.on("key",
function(f){var c=d.elementPath();if("wysiwyg"==d.mode&&f.data.keyCode==this.indentKey&&c){var n=this.getContext(c);!n||this.isIndent&&CKEDITOR.plugins.indentList.firstItemInPath(this.context,c,n)||(d.execCommand(this.relatedGlobal),f.cancel())}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(d,c){var f=this.getContext(c),b=CKEDITOR.plugins.indentList.firstItemInPath(this.context,c,f);return f&&this.isIndent&&!b?v:u}:function(d,c){return!this.getContext(c)||this.isIndent?u:v},
exec:CKEDITOR.tools.bind(w,this)}}var l=CKEDITOR.plugins.indent;l.registerCommands(d,{indentlist:new f(d,"indentlist",!0),outdentlist:new f(d,"outdentlist")});CKEDITOR.tools.extend(f.prototype,l.specificDefinition.prototype,{context:{ol:1,ul:1}})}});CKEDITOR.plugins.indentList={};CKEDITOR.plugins.indentList.firstItemInPath=function(d,f,l){var q=f.contains(t);l||(l=f.contains(d));return l&&q&&q.equals(l.getFirst(t))}})();(function(){function q(a,c){c=void 0===c||c;var b;if(c)b=a.getComputedStyle("text-align");else{for(;!a.hasAttribute||!a.hasAttribute("align")&&!a.getStyle("text-align");){b=a.getParent();if(!b)break;a=b}b=a.getStyle("text-align")||a.getAttribute("align")||""}b&&(b=b.replace(/(?:-(?:moz|webkit)-)?(?:start|auto)/i,""));!b&&c&&(b="rtl"==a.getComputedStyle("direction")?"right":"left");return b}function h(a,c,b){this.editor=a;this.name=c;this.value=b;this.context="p";c=a.config.justifyClasses;var f=a.config.enterMode==
CKEDITOR.ENTER_P?"p":"div";if(c){switch(b){case "left":this.cssClassName=c[0];break;case "center":this.cssClassName=c[1];break;case "right":this.cssClassName=c[2];break;case "justify":this.cssClassName=c[3]}this.cssClassRegex=new RegExp("(?:^|\\s+)(?:"+c.join("|")+")(?\x3d$|\\s)");this.requiredContent=f+"("+this.cssClassName+")"}else this.requiredContent=f+"{text-align}";this.allowedContent={"caption div h1 h2 h3 h4 h5 h6 p pre td th li":{propertiesOnly:!0,styles:this.cssClassName?null:"text-align",
classes:this.cssClassName||null}};a.config.enterMode==CKEDITOR.ENTER_BR&&(this.allowedContent.div=!0)}function m(a){var c=a.editor,b=c.createRange();b.setStartBefore(a.data.node);b.setEndAfter(a.data.node);for(var f=new CKEDITOR.dom.walker(b),d;d=f.next();)if(d.type==CKEDITOR.NODE_ELEMENT)if(!d.equals(a.data.node)&&d.getDirection())b.setStartAfter(d),f=new CKEDITOR.dom.walker(b);else{var e=c.config.justifyClasses;e&&(d.hasClass(e[0])?(d.removeClass(e[0]),d.addClass(e[2])):d.hasClass(e[2])&&(d.removeClass(e[2]),
d.addClass(e[0])));e=d.getStyle("text-align");"left"==e?d.setStyle("text-align","right"):"right"==e&&d.setStyle("text-align","left")}}h.prototype={exec:function(a){var c=a.getSelection(),b=a.config.enterMode;if(c){for(var f=c.createBookmarks(),d=c.getRanges(),e=this.cssClassName,h,g,k=a.config.useComputedState,k=void 0===k||k,n=d.length-1;0<=n;n--)for(h=d[n].createIterator(),h.enlargeBr=b!=CKEDITOR.ENTER_BR;g=h.getNextParagraph(b==CKEDITOR.ENTER_P?"p":"div");)if(!g.isReadOnly()){var l=g.getName(),
p;p=a.activeFilter.check(l+"{text-align}");if((l=a.activeFilter.check(l+"("+e+")"))||p){g.removeAttribute("align");g.removeStyle("text-align");var m=e&&(g.$.className=CKEDITOR.tools.ltrim(g.$.className.replace(this.cssClassRegex,""))),r=this.state==CKEDITOR.TRISTATE_OFF&&(!k||q(g,!0)!=this.value);e&&l?r?g.addClass(e):m||g.removeAttribute("class"):r&&p&&g.setStyle("text-align",this.value)}}a.focus();a.forceNextSelectionCheck();c.selectBookmarks(f)}},refresh:function(a,c){var b=c.block||c.blockLimit,
f=b.getName(),d=b.equals(a.editable()),f=this.cssClassName?a.activeFilter.check(f+"("+this.cssClassName+")"):a.activeFilter.check(f+"{text-align}");d&&1===c.elements.length?this.setState(CKEDITOR.TRISTATE_OFF):!d&&f?this.setState(q(b,this.editor.config.useComputedState)==this.value?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_DISABLED)}};CKEDITOR.plugins.add("justify",{init:function(a){if(!a.blockless){var c=new h(a,"justifyleft","left"),b=new h(a,"justifycenter","center"),
f=new h(a,"justifyright","right"),d=new h(a,"justifyblock","justify");a.addCommand("justifyleft",c);a.addCommand("justifycenter",b);a.addCommand("justifyright",f);a.addCommand("justifyblock",d);a.ui.addButton&&(a.ui.addButton("JustifyLeft",{label:a.lang.justify.left,command:"justifyleft",toolbar:"align,10"}),a.ui.addButton("JustifyCenter",{label:a.lang.justify.center,command:"justifycenter",toolbar:"align,20"}),a.ui.addButton("JustifyRight",{label:a.lang.justify.right,command:"justifyright",toolbar:"align,30"}),
a.ui.addButton("JustifyBlock",{label:a.lang.justify.block,command:"justifyblock",toolbar:"align,40"}));a.on("dirChanged",m)}}})})();(function(){function I(b,m,e){function c(c){if(!(!(a=d[c?"getFirst":"getLast"]())||a.is&&a.isBlockBoundary()||!(p=m.root[c?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))||p.is&&p.isBlockBoundary({br:1})))b.document.createElement("br")[c?"insertBefore":"insertAfter"](a)}for(var f=CKEDITOR.plugins.list.listToArray(m.root,e),g=[],k=0;k<m.contents.length;k++){var h=m.contents[k];(h=h.getAscendant("li",!0))&&!h.getCustomData("list_item_processed")&&(g.push(h),CKEDITOR.dom.element.setMarker(e,
h,"list_item_processed",!0))}h=null;for(k=0;k<g.length;k++)h=g[k].getCustomData("listarray_index"),f[h].indent=-1;for(k=h+1;k<f.length;k++)if(f[k].indent>f[k-1].indent+1){g=f[k-1].indent+1-f[k].indent;for(h=f[k].indent;f[k]&&f[k].indent>=h;)f[k].indent+=g,k++;k--}var d=CKEDITOR.plugins.list.arrayToList(f,e,null,b.config.enterMode,m.root.getAttribute("dir")).listNode,a,p;c(!0);c();d.replace(m.root);b.fire("contentDomInvalidated")}function B(b,m){this.name=b;this.context=this.type=m;this.allowedContent=
m+" li";this.requiredContent=m}function E(b,m,e,c){for(var f,g;f=b[c?"getLast":"getFirst"](J);)(g=f.getDirection(1))!==m.getDirection(1)&&f.setAttribute("dir",g),f.remove(),e?f[c?"insertBefore":"insertAfter"](e):m.append(f,c)}function F(b){function m(e){var c=b[e?"getPrevious":"getNext"](u);c&&c.type==CKEDITOR.NODE_ELEMENT&&c.is(b.getName())&&(E(b,c,null,!e),b.remove(),b=c)}m();m(1)}function G(b){return b.type==CKEDITOR.NODE_ELEMENT&&(b.getName()in CKEDITOR.dtd.$block||b.getName()in CKEDITOR.dtd.$listItem)&&
CKEDITOR.dtd[b.getName()]["#"]}function C(b,m,e){b.fire("saveSnapshot");e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var c=e.extractContents();m.trim(!1,!0);var f=m.createBookmark(),g=new CKEDITOR.dom.elementPath(m.startContainer),k=g.block,g=g.lastElement.getAscendant("li",1)||k,h=new CKEDITOR.dom.elementPath(e.startContainer),d=h.contains(CKEDITOR.dtd.$listItem),h=h.contains(CKEDITOR.dtd.$list);k?(k=k.getBogus())&&k.remove():h&&(k=h.getPrevious(u))&&z(k)&&k.remove();(k=c.getLast())&&k.type==CKEDITOR.NODE_ELEMENT&&
k.is("br")&&k.remove();(k=m.startContainer.getChild(m.startOffset))?c.insertBefore(k):m.startContainer.append(c);d&&(c=A(d))&&(g.contains(d)?(E(c,d.getParent(),d),c.remove()):g.append(c));for(;e.checkStartOfBlock()&&e.checkEndOfBlock();){h=e.startPath();c=h.block;if(!c)break;c.is("li")&&(g=c.getParent(),c.equals(g.getLast(u))&&c.equals(g.getFirst(u))&&(c=g));e.moveToPosition(c,CKEDITOR.POSITION_BEFORE_START);c.remove()}e=e.clone();c=b.editable();e.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);e=new CKEDITOR.dom.walker(e);
e.evaluator=function(a){return u(a)&&!z(a)};(e=e.next())&&e.type==CKEDITOR.NODE_ELEMENT&&e.getName()in CKEDITOR.dtd.$list&&F(e);m.moveToBookmark(f);m.select();b.fire("saveSnapshot")}function A(b){return(b=b.getLast(u))&&b.type==CKEDITOR.NODE_ELEMENT&&b.getName()in v?b:null}var v={ol:1,ul:1},K=CKEDITOR.dom.walker.whitespaces(),H=CKEDITOR.dom.walker.bookmark(),u=function(b){return!(K(b)||H(b))},z=CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list={listToArray:function(b,m,e,c,f){if(!v[b.getName()])return[];
c||(c=0);e||(e=[]);for(var g=0,k=b.getChildCount();g<k;g++){var h=b.getChild(g);h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(h,m,e,c+1);if("li"==h.$.nodeName.toLowerCase()){var d={parent:b,indent:c,element:h,contents:[]};f?d.grandparent=f:(d.grandparent=b.getParent(),d.grandparent&&"li"==d.grandparent.$.nodeName.toLowerCase()&&(d.grandparent=d.grandparent.getParent()));m&&CKEDITOR.dom.element.setMarker(m,h,"listarray_index",e.length);e.push(d);
for(var a=0,p=h.getChildCount(),l;a<p;a++)l=h.getChild(a),l.type==CKEDITOR.NODE_ELEMENT&&v[l.getName()]?CKEDITOR.plugins.list.listToArray(l,m,e,c+1,d.grandparent):d.contents.push(l)}}return e},arrayToList:function(b,m,e,c,f){e||(e=0);if(!b||b.length<e+1)return null;for(var g,k=b[e].parent.getDocument(),h=new CKEDITOR.dom.documentFragment(k),d=null,a=e,p=Math.max(b[e].indent,0),l=null,q,n,t=c==CKEDITOR.ENTER_P?"p":"div";;){var r=b[a];g=r.grandparent;q=r.element.getDirection(1);if(r.indent==p){d&&b[a].parent.getName()==
d.getName()||(d=b[a].parent.clone(!1,1),f&&d.setAttribute("dir",f),h.append(d));l=d.append(r.element.clone(0,1));q!=d.getDirection(1)&&l.setAttribute("dir",q);for(g=0;g<r.contents.length;g++)l.append(r.contents[g].clone(1,1));a++}else if(r.indent==Math.max(p,0)+1)r=b[a-1].element.getDirection(1),a=CKEDITOR.plugins.list.arrayToList(b,null,a,c,r!=q?q:null),!l.getChildCount()&&CKEDITOR.env.needsNbspFiller&&7>=k.$.documentMode&&l.append(k.createText(" ")),l.append(a.listNode),a=a.nextIndex;else if(-1==
r.indent&&!e&&g){v[g.getName()]?(l=r.element.clone(!1,!0),q!=g.getDirection(1)&&l.setAttribute("dir",q)):l=new CKEDITOR.dom.documentFragment(k);var d=g.getDirection(1)!=q,y=r.element,D=y.getAttribute("class"),z=y.getAttribute("style"),A=l.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(c!=CKEDITOR.ENTER_BR||d||z||D),w,B=r.contents.length,x;for(g=0;g<B;g++)if(w=r.contents[g],H(w)&&1<B)A?x=w.clone(1,1):l.append(w.clone(1,1));else if(w.type==CKEDITOR.NODE_ELEMENT&&w.isBlockBoundary()){d&&!w.getDirection()&&
w.setAttribute("dir",q);n=w;var C=y.getAttribute("style");C&&n.setAttribute("style",C.replace(/([^;])$/,"$1;")+(n.getAttribute("style")||""));D&&w.addClass(D);n=null;x&&(l.append(x),x=null);l.append(w.clone(1,1))}else A?(n||(n=k.createElement(t),l.append(n),d&&n.setAttribute("dir",q)),z&&n.setAttribute("style",z),D&&n.setAttribute("class",D),x&&(n.append(x),x=null),n.append(w.clone(1,1))):l.append(w.clone(1,1));x&&((n||l).append(x),x=null);l.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&a!=b.length-1&&(CKEDITOR.env.needsBrFiller&&
(q=l.getLast())&&q.type==CKEDITOR.NODE_ELEMENT&&q.is("br")&&q.remove(),(q=l.getLast(u))&&q.type==CKEDITOR.NODE_ELEMENT&&q.is(CKEDITOR.dtd.$block)||l.append(k.createElement("br")));q=l.$.nodeName.toLowerCase();"div"!=q&&"p"!=q||l.appendBogus();h.append(l);d=null;a++}else return null;n=null;if(b.length<=a||Math.max(b[a].indent,0)<p)break}if(m)for(b=h.getFirst();b;){if(b.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(m,b),b.getName()in CKEDITOR.dtd.$listItem&&(e=b,k=f=c=void 0,c=e.getDirection()))){for(f=
e.getParent();f&&!(k=f.getDirection());)f=f.getParent();c==k&&e.removeAttribute("dir")}b=b.getNextSourceNode()}return{listNode:h,nextIndex:a}}};var L=/^h[1-6]$/,J=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);B.prototype={exec:function(b){this.refresh(b,b.elementPath());var m=b.config,e=b.getSelection(),c=e&&e.getRanges();if(this.state==CKEDITOR.TRISTATE_OFF){var f=b.editable();if(f.getFirst(u)){var g=1==c.length&&c[0];(m=g&&g.getEnclosedNode())&&m.is&&this.type==m.getName()&&this.setState(CKEDITOR.TRISTATE_ON)}else m.enterMode==
CKEDITOR.ENTER_BR?f.appendBogus():c[0].fixBlock(1,m.enterMode==CKEDITOR.ENTER_P?"p":"div"),e.selectRanges(c)}for(var m=e.createBookmarks(!0),f=[],k={},c=c.createIterator(),h=0;(g=c.getNextRange())&&++h;){var d=g.getBoundaryNodes(),a=d.startNode,p=d.endNode;a.type==CKEDITOR.NODE_ELEMENT&&"td"==a.getName()&&g.setStartAt(d.startNode,CKEDITOR.POSITION_AFTER_START);p.type==CKEDITOR.NODE_ELEMENT&&"td"==p.getName()&&g.setEndAt(d.endNode,CKEDITOR.POSITION_BEFORE_END);g=g.createIterator();for(g.forceBrBreak=
this.state==CKEDITOR.TRISTATE_OFF;d=g.getNextParagraph();)if(!d.getCustomData("list_block")){CKEDITOR.dom.element.setMarker(k,d,"list_block",1);for(var l=b.elementPath(d),a=l.elements,p=0,l=l.blockLimit,q,n=a.length-1;0<=n&&(q=a[n]);n--)if(v[q.getName()]&&l.contains(q)){l.removeCustomData("list_group_object_"+h);(a=q.getCustomData("list_group_object"))?a.contents.push(d):(a={root:q,contents:[d]},f.push(a),CKEDITOR.dom.element.setMarker(k,q,"list_group_object",a));p=1;break}p||(p=l,p.getCustomData("list_group_object_"+
h)?p.getCustomData("list_group_object_"+h).contents.push(d):(a={root:p,contents:[d]},CKEDITOR.dom.element.setMarker(k,p,"list_group_object_"+h,a),f.push(a)))}}for(q=[];0<f.length;)if(a=f.shift(),this.state==CKEDITOR.TRISTATE_OFF)if(v[a.root.getName()]){c=b;h=a;a=k;g=q;p=CKEDITOR.plugins.list.listToArray(h.root,a);l=[];for(d=0;d<h.contents.length;d++)n=h.contents[d],(n=n.getAscendant("li",!0))&&!n.getCustomData("list_item_processed")&&(l.push(n),CKEDITOR.dom.element.setMarker(a,n,"list_item_processed",
!0));for(var n=h.root.getDocument(),t=void 0,r=void 0,d=0;d<l.length;d++){var y=l[d].getCustomData("listarray_index"),t=p[y].parent;t.is(this.type)||(r=n.createElement(this.type),t.copyAttributes(r,{start:1,type:1}),r.removeStyle("list-style-type"),p[y].parent=r)}a=CKEDITOR.plugins.list.arrayToList(p,a,null,c.config.enterMode);p=void 0;l=a.listNode.getChildCount();for(d=0;d<l&&(p=a.listNode.getChild(d));d++)p.getName()==this.type&&g.push(p);a.listNode.replace(h.root);c.fire("contentDomInvalidated")}else{p=
b;g=a;d=q;l=g.contents;c=g.root.getDocument();h=[];1==l.length&&l[0].equals(g.root)&&(a=c.createElement("div"),l[0].moveChildren&&l[0].moveChildren(a),l[0].append(a),l[0]=a);g=g.contents[0].getParent();for(n=0;n<l.length;n++)g=g.getCommonAncestor(l[n].getParent());t=p.config.useComputedState;p=a=void 0;t=void 0===t||t;for(n=0;n<l.length;n++)for(r=l[n];y=r.getParent();){if(y.equals(g)){h.push(r);!p&&r.getDirection()&&(p=1);r=r.getDirection(t);null!==a&&(a=a&&a!=r?null:r);break}r=y}if(!(1>h.length)){l=
h[h.length-1].getNext();n=c.createElement(this.type);d.push(n);for(t=d=void 0;h.length;)d=h.shift(),t=c.createElement("li"),r=d,r.is("pre")||L.test(r.getName())||"false"==r.getAttribute("contenteditable")?d.appendTo(t):(d.copyAttributes(t),a&&d.getDirection()&&(t.removeStyle("direction"),t.removeAttribute("dir")),d.moveChildren(t),d.remove()),t.appendTo(n);a&&p&&n.setAttribute("dir",a);l?n.insertBefore(l):n.appendTo(g)}}else this.state==CKEDITOR.TRISTATE_ON&&v[a.root.getName()]&&I.call(this,b,a,k);
for(n=0;n<q.length;n++)F(q[n]);CKEDITOR.dom.element.clearAllMarkers(k);e.selectBookmarks(m);b.focus()},refresh:function(b,m){var e=m.contains(v,1),c=m.blockLimit||m.root;e&&c.contains(e)?this.setState(e.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(b){b.blockless||(b.addCommand("numberedlist",new B("numberedlist","ol")),b.addCommand("bulletedlist",new B("bulletedlist","ul")),b.ui.addButton&&
(b.ui.addButton("NumberedList",{label:b.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),b.ui.addButton("BulletedList",{label:b.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),b.on("key",function(m){var e=m.data.domEvent.getKey(),c;if("wysiwyg"==b.mode&&e in{8:1,46:1}){var f=b.getSelection().getRanges()[0],g=f&&f.startPath();if(f&&f.collapsed){var k=8==e,h=b.editable(),d=new CKEDITOR.dom.walker(f.clone());d.evaluator=function(a){return u(a)&&
!z(a)};d.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))};e=f.clone();if(k){var a;(a=g.contains(v))&&f.checkBoundaryOfElement(a,CKEDITOR.START)&&(a=a.getParent())&&a.is("li")&&(a=A(a))?(c=a,a=a.getPrevious(u),e.moveToPosition(a&&z(a)?a:c,CKEDITOR.POSITION_BEFORE_START)):(d.range.setStartAt(h,CKEDITOR.POSITION_AFTER_START),d.range.setEnd(f.startContainer,f.startOffset),(a=d.previous())&&a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in v||a.is("li"))&&(a.is("li")||(d.range.selectNodeContents(a),
d.reset(),d.evaluator=G,a=d.previous()),c=a,e.moveToElementEditEnd(c),e.moveToPosition(e.endPath().block,CKEDITOR.POSITION_BEFORE_END)));if(c)C(b,e,f),m.cancel();else{var p=g.contains(v);p&&f.checkBoundaryOfElement(p,CKEDITOR.START)&&(c=p.getFirst(u),f.checkBoundaryOfElement(c,CKEDITOR.START)&&(a=p.getPrevious(u),A(c)?a&&(f.moveToElementEditEnd(a),f.select()):b.execCommand("outdent"),m.cancel()))}}else if(c=g.contains("li")){if(d.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),k=(h=c.getLast(u))&&
G(h)?h:c,g=0,(a=d.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in v&&a.equals(h)?(g=1,a=d.next()):f.checkBoundaryOfElement(k,CKEDITOR.END)&&(g=2),g&&a){f=f.clone();f.moveToElementEditStart(a);if(1==g&&(e.optimize(),!e.startContainer.equals(c))){for(c=e.startContainer;c.is(CKEDITOR.dtd.$inline);)p=c,c=c.getParent();p&&e.moveToPosition(p,CKEDITOR.POSITION_AFTER_END)}2==g&&(e.moveToPosition(e.endPath().block,CKEDITOR.POSITION_BEFORE_END),f.endPath().block&&f.moveToPosition(f.endPath().block,CKEDITOR.POSITION_AFTER_START));
C(b,e,f);m.cancel()}}else d.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),(a=d.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is(v)&&(a=a.getFirst(u),g.block&&f.checkStartOfBlock()&&f.checkEndOfBlock()?(g.block.remove(),f.moveToElementEditStart(a),f.select()):A(a)?(f.moveToElementEditStart(a),f.select()):(f=f.clone(),f.moveToElementEditStart(a),C(b,e,f)),m.cancel());setTimeout(function(){b.selectionChange(1)})}}}))}})})();(function(){function l(a,c,f){var d=CKEDITOR.cleanWord;d?f():(a=CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile||c+"filter/default.js"),CKEDITOR.scriptLoader.load(a,f,null,!0));return!d}CKEDITOR.plugins.add("pastefromword",{requires:"clipboard",init:function(a){var c=0,f=this.path;a.addCommand("pastefromword",{canUndo:!1,async:!0,exec:function(a,b){c=1;a.execCommand("paste",{type:"html",notification:b&&"undefined"!==typeof b.notification?b.notification:!0})}});a.ui.addButton&&a.ui.addButton("PasteFromWord",
{label:a.lang.pastefromword.toolbar,command:"pastefromword",toolbar:"clipboard,50"});a.on("paste",function(d){var b=d.data,g=(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?b.dataTransfer.getData("text/html",!0):null)||b.dataValue,e={dataValue:g},h=/(class=\"?Mso|style=(?:\"|\')[^\"]*?\bmso\-|w:WordDocument|<o:\w+>|<\/font>)/,h=/<meta\s*name=(?:\"|\')?generator(?:\"|\')?\s*content=(?:\"|\')?microsoft/gi.test(g)||h.test(g);if(g&&(c||h)&&(!1!==a.fire("pasteFromWord",e)||c)){b.dontFilter=!0;var k=
l(a,f,function(){if(k)a.fire("paste",b);else if(!a.config.pasteFromWordPromptCleanup||c||confirm(a.lang.pastefromword.confirmCleanup))e.dataValue=CKEDITOR.cleanWord(e.dataValue,a),a.fire("afterPasteFromWord",e),b.dataValue=e.dataValue;c=0});k&&d.cancel()}},null,null,3)}})})();CKEDITOR.plugins.add("removeformat",{init:function(a){a.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);a.ui.addButton&&a.ui.addButton("RemoveFormat",{label:a.lang.removeformat.toolbar,command:"removeFormat",toolbar:"cleanup,10"})}});
CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(a){for(var h=a._.removeFormatRegex||(a._.removeFormatRegex=new RegExp("^(?:"+a.config.removeFormatTags.replace(/,/g,"|")+")$","i")),e=a._.removeAttributes||(a._.removeAttributes=a.config.removeFormatAttributes.split(",")),f=CKEDITOR.plugins.removeformat.filter,m=a.getSelection().getRanges(),n=m.createIterator(),p=function(a){return a.type==CKEDITOR.NODE_ELEMENT},c;c=n.getNextRange();){c.collapsed||c.enlarge(CKEDITOR.ENLARGE_ELEMENT);
var l=c.createBookmark(),b=l.startNode,d=l.endNode,k=function(b){for(var c=a.elementPath(b),e=c.elements,d=1,g;(g=e[d])&&!g.equals(c.block)&&!g.equals(c.blockLimit);d++)h.test(g.getName())&&f(a,g)&&b.breakParent(g)};k(b);if(d)for(k(d),b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);b&&!b.equals(d);)if(b.isReadOnly()){if(b.getPosition(d)&CKEDITOR.POSITION_CONTAINS)break;b=b.getNext(p)}else k=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),"img"==b.getName()&&b.data("cke-realelement")||!f(a,b)||(h.test(b.getName())?
b.remove(1):(b.removeAttributes(e),a.fire("removeFormatCleanup",b))),b=k;c.moveToBookmark(l)}a.forceNextSelectionCheck();a.getSelection().selectRanges(m)}}},filter:function(a,h){for(var e=a._.removeFormatFilters||[],f=0;f<e.length;f++)if(!1===e[f](h))return!1;return!0}};CKEDITOR.editor.prototype.addRemoveFormatFilter=function(a){this._.removeFormatFilters||(this._.removeFormatFilters=[]);this._.removeFormatFilters.push(a)};CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var";
CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";(function(){function k(c){return{editorFocus:!1,canUndo:!1,modes:{wysiwyg:1},exec:function(d){if(d.editable().hasFocus){var e=d.getSelection(),b;if(b=(new CKEDITOR.dom.elementPath(e.getCommonAncestor(),e.root)).contains({td:1,th:1},1)){var e=d.createRange(),a=CKEDITOR.tools.tryThese(function(){var a=b.getParent().$.cells[b.$.cellIndex+(c?-1:1)];a.parentNode.parentNode;return a},function(){var a=b.getParent(),a=a.getAscendant("table").$.rows[a.$.rowIndex+(c?-1:1)];return a.cells[c?a.cells.length-1:
0]});if(a||c)if(a)a=new CKEDITOR.dom.element(a),e.moveToElementEditStart(a),e.checkStartOfBlock()&&e.checkEndOfBlock()||e.selectNodeContents(a);else return!0;else{for(var f=b.getAscendant("table").$,a=b.getParent().$.cells,f=new CKEDITOR.dom.element(f.insertRow(-1),d.document),g=0,h=a.length;g<h;g++)f.append((new CKEDITOR.dom.element(a[g],d.document)).clone(!1,!1)).appendBogus();e.moveToElementEditStart(f)}e.select(!0);return!0}}return!1}}}var h={editorFocus:!1,modes:{wysiwyg:1,source:1}},g={exec:function(c){c.container.focusNext(!0,
c.tabIndex)}},f={exec:function(c){c.container.focusPrevious(!0,c.tabIndex)}};CKEDITOR.plugins.add("tab",{init:function(c){for(var d=!1!==c.config.enableTabKeyTools,e=c.config.tabSpaces||0,b="";e--;)b+=" ";if(b)c.on("key",function(a){9==a.data.keyCode&&(c.insertText(b),a.cancel())});if(d)c.on("key",function(a){(9==a.data.keyCode&&c.execCommand("selectNextCell")||a.data.keyCode==CKEDITOR.SHIFT+9&&c.execCommand("selectPreviousCell"))&&a.cancel()});c.addCommand("blur",CKEDITOR.tools.extend(g,h));c.addCommand("blurBack",
CKEDITOR.tools.extend(f,h));c.addCommand("selectNextCell",k());c.addCommand("selectPreviousCell",k(!0))}})})();
CKEDITOR.dom.element.prototype.focusNext=function(k,h){var g=void 0===h?this.getTabIndex():h,f,c,d,e,b,a;if(0>=g)for(b=this.getNextSourceNode(k,CKEDITOR.NODE_ELEMENT);b;){if(b.isVisible()&&0===b.getTabIndex()){d=b;break}b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT)}else for(b=this.getDocument().getBody().getFirst();b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&b.equals(this)){if(c=!0,k){if(!(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(b)&&
(f=1);if(b.isVisible()&&!(0>(a=b.getTabIndex()))){if(f&&a==g){d=b;break}a>g&&(!d||!e||a<e)?(d=b,e=a):d||0!==a||(d=b,e=a)}}d&&d.focus()};
CKEDITOR.dom.element.prototype.focusPrevious=function(k,h){for(var g=void 0===h?this.getTabIndex():h,f,c,d,e=0,b,a=this.getDocument().getBody().getLast();a=a.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&a.equals(this)){if(c=!0,k){if(!(a=a.getPreviousSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(a)&&(f=1);if(a.isVisible()&&!(0>(b=a.getTabIndex())))if(0>=g){if(f&&0===b){d=a;break}b>e&&(d=a,e=b)}else{if(f&&b==g){d=a;break}b<g&&(!d||b>e)&&(d=a,e=b)}}d&&d.focus()};(function(){var g=[CKEDITOR.CTRL+90,CKEDITOR.CTRL+89,CKEDITOR.CTRL+CKEDITOR.SHIFT+90],n={8:1,46:1};CKEDITOR.plugins.add("undo",{init:function(a){function b(a){d.enabled&&!1!==a.data.command.canUndo&&d.save()}function c(){d.enabled=a.readOnly?!1:"wysiwyg"==a.mode;d.onChange()}var d=a.undoManager=new e(a),l=d.editingHandler=new k(d),f=a.addCommand("undo",{exec:function(){d.undo()&&(a.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),h=a.addCommand("redo",{exec:function(){d.redo()&&
(a.selectionChange(),this.fire("afterRedo"))},startDisabled:!0,canUndo:!1});a.setKeystroke([[g[0],"undo"],[g[1],"redo"],[g[2],"redo"]]);d.onChange=function(){f.setState(d.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);h.setState(d.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)};a.on("beforeCommandExec",b);a.on("afterCommandExec",b);a.on("saveSnapshot",function(a){d.save(a.data&&a.data.contentOnly)});a.on("contentDom",l.attachListeners,l);a.on("instanceReady",function(){a.fire("saveSnapshot")});
a.on("beforeModeUnload",function(){"wysiwyg"==a.mode&&d.save(!0)});a.on("mode",c);a.on("readOnly",c);a.ui.addButton&&(a.ui.addButton("Undo",{label:a.lang.undo.undo,command:"undo",toolbar:"undo,10"}),a.ui.addButton("Redo",{label:a.lang.undo.redo,command:"redo",toolbar:"undo,20"}));a.resetUndo=function(){d.reset();a.fire("saveSnapshot")};a.on("updateSnapshot",function(){d.currentImage&&d.update()});a.on("lockSnapshot",function(a){a=a.data;d.lock(a&&a.dontUpdate,a&&a.forceUpdate)});a.on("unlockSnapshot",
d.unlock,d)}});CKEDITOR.plugins.undo={};var e=CKEDITOR.plugins.undo.UndoManager=function(a){this.strokesRecorded=[0,0];this.locked=null;this.previousKeyGroup=-1;this.limit=a.config.undoStackSize||20;this.strokesLimit=25;this.editor=a;this.reset()};e.prototype={type:function(a,b){var c=e.getKeyGroup(a),d=this.strokesRecorded[c]+1;b=b||d>=this.strokesLimit;this.typing||(this.hasUndo=this.typing=!0,this.hasRedo=!1,this.onChange());b?(d=0,this.editor.fire("saveSnapshot")):this.editor.fire("change");this.strokesRecorded[c]=
d;this.previousKeyGroup=c},keyGroupChanged:function(a){return e.getKeyGroup(a)!=this.previousKeyGroup},reset:function(){this.snapshots=[];this.index=-1;this.currentImage=null;this.hasRedo=this.hasUndo=!1;this.locked=null;this.resetType()},resetType:function(){this.strokesRecorded=[0,0];this.typing=!1;this.previousKeyGroup=-1},refreshState:function(){this.hasUndo=!!this.getNextImage(!0);this.hasRedo=!!this.getNextImage(!1);this.resetType();this.onChange()},save:function(a,b,c){var d=this.editor;if(this.locked||
"ready"!=d.status||"wysiwyg"!=d.mode)return!1;var e=d.editable();if(!e||"ready"!=e.status)return!1;e=this.snapshots;b||(b=new f(d));if(!1===b.contents)return!1;if(this.currentImage)if(b.equalsContent(this.currentImage)){if(a||b.equalsSelection(this.currentImage))return!1}else!1!==c&&d.fire("change");e.splice(this.index+1,e.length-this.index-1);e.length==this.limit&&e.shift();this.index=e.push(b)-1;this.currentImage=b;!1!==c&&this.refreshState();return!0},restoreImage:function(a){var b=this.editor,
c;a.bookmarks&&(b.focus(),c=b.getSelection());this.locked={level:999};this.editor.loadSnapshot(a.contents);a.bookmarks?c.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(c=this.editor.document.getBody().$.createTextRange(),c.collapse(!0),c.select());this.locked=null;this.index=a.index;this.currentImage=this.snapshots[this.index];this.update();this.refreshState();b.fire("change")},getNextImage:function(a){var b=this.snapshots,c=this.currentImage,d;if(c)if(a)for(d=this.index-1;0<=d;d--){if(a=b[d],!c.equalsContent(a))return a.index=
d,a}else for(d=this.index+1;d<b.length;d++)if(a=b[d],!c.equalsContent(a))return a.index=d,a;return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return this.enabled&&this.hasUndo},undo:function(){if(this.undoable()){this.save(!0);var a=this.getNextImage(!0);if(a)return this.restoreImage(a),!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1);if(a)return this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a||
(a=new f(this.editor));for(var b=this.index,c=this.snapshots;0<b&&this.currentImage.equalsContent(c[b-1]);)--b;c.splice(b,this.index-b+1,a);this.index=b;this.currentImage=a}},updateSelection:function(a){if(!this.snapshots.length)return!1;var b=this.snapshots,c=b[b.length-1];return c.equalsContent(a)&&!c.equalsSelection(a)?(this.currentImage=b[b.length-1]=a,!0):!1},lock:function(a,b){if(this.locked)this.locked.level++;else if(a)this.locked={level:1};else{var c=null;if(b)c=!0;else{var d=new f(this.editor,
!0);this.currentImage&&this.currentImage.equalsContent(d)&&(c=d)}this.locked={update:c,level:1}}},unlock:function(){if(this.locked&&!--this.locked.level){var a=this.locked.update;this.locked=null;if(!0===a)this.update();else if(a){var b=new f(this.editor,!0);a.equalsContent(b)||this.update()}}}};e.navigationKeyCodes={37:1,38:1,39:1,40:1,36:1,35:1,33:1,34:1};e.keyGroups={PRINTABLE:0,FUNCTIONAL:1};e.isNavigationKey=function(a){return!!e.navigationKeyCodes[a]};e.getKeyGroup=function(a){var b=e.keyGroups;
return n[a]?b.FUNCTIONAL:b.PRINTABLE};e.getOppositeKeyGroup=function(a){var b=e.keyGroups;return a==b.FUNCTIONAL?b.PRINTABLE:b.FUNCTIONAL};e.ieFunctionalKeysBug=function(a){return CKEDITOR.env.ie&&e.getKeyGroup(a)==e.keyGroups.FUNCTIONAL};var f=CKEDITOR.plugins.undo.Image=function(a,b){this.editor=a;a.fire("beforeUndoImage");var c=a.getSnapshot();CKEDITOR.env.ie&&c&&(c=c.replace(/\s+data-cke-expando=".*?"/g,""));this.contents=c;b||(this.bookmarks=(c=c&&a.getSelection())&&c.createBookmarks2(!0));a.fire("afterUndoImage")},
h=/\b(?:href|src|name)="[^"]*?"/gi;f.prototype={equalsContent:function(a){var b=this.contents;a=a.contents;CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)&&(b=b.replace(h,""),a=a.replace(h,""));return b!=a?!1:!0},equalsSelection:function(a){var b=this.bookmarks;a=a.bookmarks;if(b||a){if(!b||!a||b.length!=a.length)return!1;for(var c=0;c<b.length;c++){var d=b[c],e=a[c];if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(d.start,e.start)||!CKEDITOR.tools.arrayCompare(d.end,
e.end))return!1}}return!0}};var k=CKEDITOR.plugins.undo.NativeEditingHandler=function(a){this.undoManager=a;this.ignoreInputEvent=!1;this.keyEventsStack=new m;this.lastKeydownImage=null};k.prototype={onKeydown:function(a){var b=a.data.getKey();if(229!==b)if(-1<CKEDITOR.tools.indexOf(g,a.data.getKeystroke()))a.data.preventDefault();else if(this.keyEventsStack.cleanUp(a),a=this.undoManager,this.keyEventsStack.getLast(b)||this.keyEventsStack.push(b),this.lastKeydownImage=new f(a.editor),e.isNavigationKey(b)||
this.undoManager.keyGroupChanged(b))if(a.strokesRecorded[0]||a.strokesRecorded[1])a.save(!1,this.lastKeydownImage,!1),a.resetType()},onInput:function(){if(this.ignoreInputEvent)this.ignoreInputEvent=!1;else{var a=this.keyEventsStack.getLast();a||(a=this.keyEventsStack.push(0));this.keyEventsStack.increment(a.keyCode);this.keyEventsStack.getTotalInputs()>=this.undoManager.strokesLimit&&(this.undoManager.type(a.keyCode,!0),this.keyEventsStack.resetInputs())}},onKeyup:function(a){var b=this.undoManager;
a=a.data.getKey();var c=this.keyEventsStack.getTotalInputs();this.keyEventsStack.remove(a);if(!(e.ieFunctionalKeysBug(a)&&this.lastKeydownImage&&this.lastKeydownImage.equalsContent(new f(b.editor,!0))))if(0<c)b.type(a);else if(e.isNavigationKey(a))this.onNavigationKey(!0)},onNavigationKey:function(a){var b=this.undoManager;!a&&b.save(!0,null,!1)||b.updateSelection(new f(b.editor));b.resetType()},ignoreInputEventListener:function(){this.ignoreInputEvent=!0},activateInputEventListener:function(){this.ignoreInputEvent=
!1},attachListeners:function(){var a=this.undoManager.editor,b=a.editable(),c=this;b.attachListener(b,"keydown",function(a){c.onKeydown(a);if(e.ieFunctionalKeysBug(a.data.getKey()))c.onInput()},null,null,999);b.attachListener(b,CKEDITOR.env.ie?"keypress":"input",c.onInput,c,null,999);b.attachListener(b,"keyup",c.onKeyup,c,null,999);b.attachListener(b,"paste",c.ignoreInputEventListener,c,null,999);b.attachListener(b,"drop",c.ignoreInputEventListener,c,null,999);a.on("afterPaste",c.activateInputEventListener,
c,null,999);b.attachListener(b.isInline()?b:a.document.getDocumentElement(),"click",function(){c.onNavigationKey()},null,null,999);b.attachListener(this.undoManager.editor,"blur",function(){c.keyEventsStack.remove(9)},null,null,999)}};var m=CKEDITOR.plugins.undo.KeyEventsStack=function(){this.stack=[]};m.prototype={push:function(a){a=this.stack.push({keyCode:a,inputs:0});return this.stack[a-1]},getLastIndex:function(a){if("number"!=typeof a)return this.stack.length-1;for(var b=this.stack.length;b--;)if(this.stack[b].keyCode==
a)return b;return-1},getLast:function(a){a=this.getLastIndex(a);return-1!=a?this.stack[a]:null},increment:function(a){this.getLast(a).inputs++},remove:function(a){a=this.getLastIndex(a);-1!=a&&this.stack.splice(a,1)},resetInputs:function(a){if("number"==typeof a)this.getLast(a).inputs=0;else for(a=this.stack.length;a--;)this.stack[a].inputs=0},getTotalInputs:function(){for(var a=this.stack.length,b=0;a--;)b+=this.stack[a].inputs;return b},cleanUp:function(a){a=a.data.$;a.ctrlKey||a.metaKey||this.remove(17);
a.shiftKey||this.remove(16);a.altKey||this.remove(18)}}})();(function(){function m(a,d){CKEDITOR.tools.extend(this,{editor:a,editable:a.editable(),doc:a.document,win:a.window},d,!0);this.inline=this.editable.isInline();this.inline||(this.frame=this.win.getFrame());this.target=this[this.inline?"editable":"doc"]}function n(a,d){CKEDITOR.tools.extend(this,d,{editor:a},!0)}function p(a,d){var b=a.editable();CKEDITOR.tools.extend(this,{editor:a,editable:b,inline:b.isInline(),doc:a.document,win:a.window,container:CKEDITOR.document.getBody(),winTop:CKEDITOR.document.getWindow()},
d,!0);this.hidden={};this.visible={};this.inline||(this.frame=this.win.getFrame());this.queryViewport();var c=CKEDITOR.tools.bind(this.queryViewport,this),e=CKEDITOR.tools.bind(this.hideVisible,this),g=CKEDITOR.tools.bind(this.removeAll,this);b.attachListener(this.winTop,"resize",c);b.attachListener(this.winTop,"scroll",c);b.attachListener(this.winTop,"resize",e);b.attachListener(this.win,"scroll",e);b.attachListener(this.inline?b:this.frame,"mouseout",function(a){var b=a.data.$.clientX;a=a.data.$.clientY;
this.queryViewport();(b<=this.rect.left||b>=this.rect.right||a<=this.rect.top||a>=this.rect.bottom)&&this.hideVisible();(0>=b||b>=this.winTopPane.width||0>=a||a>=this.winTopPane.height)&&this.hideVisible()},this);b.attachListener(a,"resize",c);b.attachListener(a,"mode",g);a.on("destroy",g);this.lineTpl=(new CKEDITOR.template('\x3cdiv data-cke-lineutils-line\x3d"1" class\x3d"cke_reset_all" style\x3d"{lineStyle}"\x3e\x3cspan style\x3d"{tipLeftStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3cspan style\x3d"{tipRightStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3c/div\x3e')).output({lineStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},
t,this.lineStyle,!0)),tipLeftStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},q,{left:"0px","border-left-color":"red","border-width":"6px 0 6px 6px"},this.tipCss,this.tipLeftStyle,!0)),tipRightStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},q,{right:"0px","border-right-color":"red","border-width":"6px 6px 6px 0"},this.tipCss,this.tipRightStyle,!0))})}function l(a){var d;if(d=a&&a.type==CKEDITOR.NODE_ELEMENT)d=!(r[a.getComputedStyle("float")]||r[a.getAttribute("align")]);return d&&
!u[a.getComputedStyle("position")]}CKEDITOR.plugins.add("lineutils");CKEDITOR.LINEUTILS_BEFORE=1;CKEDITOR.LINEUTILS_AFTER=2;CKEDITOR.LINEUTILS_INSIDE=4;m.prototype={start:function(a){var d=this,b=this.editor,c=this.doc,e,g,f,h,k=CKEDITOR.tools.eventsBuffer(50,function(){b.readOnly||"wysiwyg"!=b.mode||(d.relations={},(g=c.$.elementFromPoint(f,h))&&g.nodeType&&(e=new CKEDITOR.dom.element(g),d.traverseSearch(e),isNaN(f+h)||d.pixelSearch(e,f,h),a&&a(d.relations,f,h)))});this.listener=this.editable.attachListener(this.target,
"mousemove",function(a){f=a.data.$.clientX;h=a.data.$.clientY;k.input()});this.editable.attachListener(this.inline?this.editable:this.frame,"mouseout",function(){k.reset()})},stop:function(){this.listener&&this.listener.removeListener()},getRange:function(){var a={};a[CKEDITOR.LINEUTILS_BEFORE]=CKEDITOR.POSITION_BEFORE_START;a[CKEDITOR.LINEUTILS_AFTER]=CKEDITOR.POSITION_AFTER_END;a[CKEDITOR.LINEUTILS_INSIDE]=CKEDITOR.POSITION_AFTER_START;return function(d){var b=this.editor.createRange();b.moveToPosition(this.relations[d.uid].element,
a[d.type]);return b}}(),store:function(){function a(a,b,c){var e=a.getUniqueId();e in c?c[e].type|=b:c[e]={element:a,type:b}}return function(d,b){var c;b&CKEDITOR.LINEUTILS_AFTER&&l(c=d.getNext())&&c.isVisible()&&(a(c,CKEDITOR.LINEUTILS_BEFORE,this.relations),b^=CKEDITOR.LINEUTILS_AFTER);b&CKEDITOR.LINEUTILS_INSIDE&&l(c=d.getFirst())&&c.isVisible()&&(a(c,CKEDITOR.LINEUTILS_BEFORE,this.relations),b^=CKEDITOR.LINEUTILS_INSIDE);a(d,b,this.relations)}}(),traverseSearch:function(a){var d,b,c;do if(c=a.$["data-cke-expando"],
!(c&&c in this.relations)){if(a.equals(this.editable))break;if(l(a))for(d in this.lookups)(b=this.lookups[d](a))&&this.store(a,b)}while((!a||a.type!=CKEDITOR.NODE_ELEMENT||"true"!=a.getAttribute("contenteditable"))&&(a=a.getParent()))},pixelSearch:function(){function a(a,c,e,g,f){for(var h=0,k;f(e);){e+=g;if(25==++h)break;if(k=this.doc.$.elementFromPoint(c,e))if(k==a)h=0;else if(d(a,k)&&(h=0,l(k=new CKEDITOR.dom.element(k))))return k}}var d=CKEDITOR.env.ie||CKEDITOR.env.webkit?function(a,c){return a.contains(c)}:
function(a,c){return!!(a.compareDocumentPosition(c)&16)};return function(b,c,d){var g=this.win.getViewPaneSize().height,f=a.call(this,b.$,c,d,-1,function(a){return 0<a});c=a.call(this,b.$,c,d,1,function(a){return a<g});if(f)for(this.traverseSearch(f);!f.getParent().equals(b);)f=f.getParent();if(c)for(this.traverseSearch(c);!c.getParent().equals(b);)c=c.getParent();for(;f||c;){f&&(f=f.getNext(l));if(!f||f.equals(c))break;this.traverseSearch(f);c&&(c=c.getPrevious(l));if(!c||c.equals(f))break;this.traverseSearch(c)}}}(),
greedySearch:function(){this.relations={};for(var a=this.editable.getElementsByTag("*"),d=0,b,c,e;b=a.getItem(d++);)if(!b.equals(this.editable)&&b.type==CKEDITOR.NODE_ELEMENT&&(b.hasAttribute("contenteditable")||!b.isReadOnly())&&l(b)&&b.isVisible())for(e in this.lookups)(c=this.lookups[e](b))&&this.store(b,c);return this.relations}};n.prototype={locate:function(){function a(a,b){var c=a.element[b===CKEDITOR.LINEUTILS_BEFORE?"getPrevious":"getNext"]();return c&&l(c)?(a.siblingRect=c.getClientRect(),
b==CKEDITOR.LINEUTILS_BEFORE?(a.siblingRect.bottom+a.elementRect.top)/2:(a.elementRect.bottom+a.siblingRect.top)/2):b==CKEDITOR.LINEUTILS_BEFORE?a.elementRect.top:a.elementRect.bottom}return function(d){var b;this.locations={};for(var c in d)b=d[c],b.elementRect=b.element.getClientRect(),b.type&CKEDITOR.LINEUTILS_BEFORE&&this.store(c,CKEDITOR.LINEUTILS_BEFORE,a(b,CKEDITOR.LINEUTILS_BEFORE)),b.type&CKEDITOR.LINEUTILS_AFTER&&this.store(c,CKEDITOR.LINEUTILS_AFTER,a(b,CKEDITOR.LINEUTILS_AFTER)),b.type&
CKEDITOR.LINEUTILS_INSIDE&&this.store(c,CKEDITOR.LINEUTILS_INSIDE,(b.elementRect.top+b.elementRect.bottom)/2);return this.locations}}(),sort:function(){var a,d,b,c;return function(e,g){a=this.locations;d=[];for(var f in a)for(var h in a[f])if(b=Math.abs(e-a[f][h]),d.length){for(c=0;c<d.length;c++)if(b<d[c].dist){d.splice(c,0,{uid:+f,type:h,dist:b});break}c==d.length&&d.push({uid:+f,type:h,dist:b})}else d.push({uid:+f,type:h,dist:b});return"undefined"!=typeof g?d.slice(0,g):d}}(),store:function(a,
d,b){this.locations[a]||(this.locations[a]={});this.locations[a][d]=b}};var q={display:"block",width:"0px",height:"0px","border-color":"transparent","border-style":"solid",position:"absolute",top:"-6px"},t={height:"0px","border-top":"1px dashed red",position:"absolute","z-index":9999};p.prototype={removeAll:function(){for(var a in this.hidden)this.hidden[a].remove(),delete this.hidden[a];for(a in this.visible)this.visible[a].remove(),delete this.visible[a]},hideLine:function(a){var d=a.getUniqueId();
a.hide();this.hidden[d]=a;delete this.visible[d]},showLine:function(a){var d=a.getUniqueId();a.show();this.visible[d]=a;delete this.hidden[d]},hideVisible:function(){for(var a in this.visible)this.hideLine(this.visible[a])},placeLine:function(a,d){var b,c,e;if(b=this.getStyle(a.uid,a.type)){for(e in this.visible)if(this.visible[e].getCustomData("hash")!==this.hash){c=this.visible[e];break}if(!c)for(e in this.hidden)if(this.hidden[e].getCustomData("hash")!==this.hash){this.showLine(c=this.hidden[e]);
break}c||this.showLine(c=this.addLine());c.setCustomData("hash",this.hash);this.visible[c.getUniqueId()]=c;c.setStyles(b);d&&d(c)}},getStyle:function(a,d){var b=this.relations[a],c=this.locations[a][d],e={};e.width=b.siblingRect?Math.max(b.siblingRect.width,b.elementRect.width):b.elementRect.width;e.top=this.inline?c+this.winTopScroll.y-this.rect.relativeY:this.rect.top+this.winTopScroll.y+c;if(e.top-this.winTopScroll.y<this.rect.top||e.top-this.winTopScroll.y>this.rect.bottom)return!1;this.inline?
e.left=b.elementRect.left-this.rect.relativeX:(0<b.elementRect.left?e.left=this.rect.left+b.elementRect.left:(e.width+=b.elementRect.left,e.left=this.rect.left),0<(b=e.left+e.width-(this.rect.left+this.winPane.width))&&(e.width-=b));e.left+=this.winTopScroll.x;for(var g in e)e[g]=CKEDITOR.tools.cssLength(e[g]);return e},addLine:function(){var a=CKEDITOR.dom.element.createFromHtml(this.lineTpl);a.appendTo(this.container);return a},prepare:function(a,d){this.relations=a;this.locations=d;this.hash=Math.random()},
cleanup:function(){var a,d;for(d in this.visible)a=this.visible[d],a.getCustomData("hash")!==this.hash&&this.hideLine(a)},queryViewport:function(){this.winPane=this.win.getViewPaneSize();this.winTopScroll=this.winTop.getScrollPosition();this.winTopPane=this.winTop.getViewPaneSize();this.rect=this.getClientRect(this.inline?this.editable:this.frame)},getClientRect:function(a){a=a.getClientRect();var d=this.container.getDocumentPosition(),b=this.container.getComputedStyle("position");a.relativeX=a.relativeY=
0;"static"!=b&&(a.relativeY=d.y,a.relativeX=d.x,a.top-=a.relativeY,a.bottom-=a.relativeY,a.left-=a.relativeX,a.right-=a.relativeX);return a}};var r={left:1,right:1,center:1},u={absolute:1,fixed:1};CKEDITOR.plugins.lineutils={finder:m,locator:n,liner:p}})();(function(){function f(a){return a.getName&&!a.hasAttribute("data-cke-temp")}CKEDITOR.plugins.add("widgetselection",{init:function(a){if(CKEDITOR.env.webkit){var b=CKEDITOR.plugins.widgetselection;a.on("contentDom",function(a){a=a.editor;var d=a.document,e=a.editable();e.attachListener(d,"keydown",function(a){var c=a.data.$;65==a.data.getKey()&&(CKEDITOR.env.mac&&c.metaKey||!CKEDITOR.env.mac&&c.ctrlKey)&&CKEDITOR.tools.setTimeout(function(){b.addFillers(e)||b.removeFillers(e)},0)},null,null,-1);a.on("selectionCheck",
function(a){b.removeFillers(a.editor.editable())});a.on("paste",function(a){a.data.dataValue=b.cleanPasteData(a.data.dataValue)});"selectall"in a.plugins&&b.addSelectAllIntegration(a)})}}});CKEDITOR.plugins.widgetselection={startFiller:null,endFiller:null,fillerAttribute:"data-cke-filler-webkit",fillerContent:"\x26nbsp;",fillerTagName:"div",addFillers:function(a){var b=a.editor;if(!this.isWholeContentSelected(a)&&0<a.getChildCount()){var c=a.getFirst(f),d=a.getLast(f);c&&c.type==CKEDITOR.NODE_ELEMENT&&
!c.isEditable()&&(this.startFiller=this.createFiller(),a.append(this.startFiller,1));d&&d.type==CKEDITOR.NODE_ELEMENT&&!d.isEditable()&&(this.endFiller=this.createFiller(!0),a.append(this.endFiller,0));if(this.hasFiller(a))return b=b.createRange(),b.selectNodeContents(a),b.select(),!0}return!1},removeFillers:function(a){if(this.hasFiller(a)&&!this.isWholeContentSelected(a)){var b=a.findOne(this.fillerTagName+"["+this.fillerAttribute+"\x3dstart]"),c=a.findOne(this.fillerTagName+"["+this.fillerAttribute+
"\x3dend]");this.startFiller&&b&&this.startFiller.equals(b)?this.removeFiller(this.startFiller,a):this.startFiller=b;this.endFiller&&c&&this.endFiller.equals(c)?this.removeFiller(this.endFiller,a):this.endFiller=c}},cleanPasteData:function(a){a&&a.length&&(a=a.replace(this.createFillerRegex(),"").replace(this.createFillerRegex(!0),""));return a},isWholeContentSelected:function(a){var b=a.editor.getSelection().getRanges()[0];return!b||b&&b.collapsed?!1:(b=b.clone(),b.enlarge(CKEDITOR.ENLARGE_ELEMENT),
!!(b&&a&&b.startContainer&&b.endContainer&&0===b.startOffset&&b.endOffset===a.getChildCount()&&b.startContainer.equals(a)&&b.endContainer.equals(a)))},hasFiller:function(a){return 0<a.find(this.fillerTagName+"["+this.fillerAttribute+"]").count()},createFiller:function(a){var b=new CKEDITOR.dom.element(this.fillerTagName);b.setHtml(this.fillerContent);b.setAttribute(this.fillerAttribute,a?"end":"start");b.setAttribute("data-cke-temp",1);b.setStyles({display:"block",width:0,height:0,padding:0,border:0,
margin:0,position:"absolute",top:0,left:"-9999px",opacity:0,overflow:"hidden"});return b},removeFiller:function(a,b){if(a){var c=b.editor,d=b.editor.getSelection().getRanges()[0].startPath(),e=c.createRange(),g,f;d.contains(a)&&(g=a.getHtml(),f=!0);d="start"==a.getAttribute(this.fillerAttribute);a.remove();g&&0<g.length&&g!=this.fillerContent?(b.insertHtmlIntoRange(g,c.getSelection().getRanges()[0]),e.setStartAt(b.getChild(b.getChildCount()-1),CKEDITOR.POSITION_BEFORE_END),c.getSelection().selectRanges([e])):
f&&(d?e.setStartAt(b.getFirst().getNext(),CKEDITOR.POSITION_AFTER_START):e.setEndAt(b.getLast().getPrevious(),CKEDITOR.POSITION_BEFORE_END),b.editor.getSelection().selectRanges([e]))}},createFillerRegex:function(a){var b=this.createFiller(a).getOuterHtml().replace(/style="[^"]*"/gi,'style\x3d"[^"]*"').replace(/>[^<]*</gi,"\x3e[^\x3c]*\x3c");return new RegExp((a?"":"^")+b+(a?"$":""))},addSelectAllIntegration:function(a){var b=this;a.editable().attachListener(a,"beforeCommandExec",function(c){var d=
a.editable();"selectAll"==c.data.name&&d&&b.addFillers(d)},null,null,9999)}}})();(function(){function p(a){this.editor=a;this.registered={};this.instances={};this.selected=[];this.widgetHoldingFocusedEditable=this.focused=null;this._={nextId:0,upcasts:[],upcastCallbacks:[],filters:{}};F(this);G(this);this.on("checkWidgets",H);this.editor.on("contentDomInvalidated",this.checkWidgets,this);I(this);J(this);K(this);L(this);M(this)}function g(a,b,c,d,e){var f=a.editor;CKEDITOR.tools.extend(this,d,{editor:f,id:b,inline:"span"==c.getParent().getName(),element:c,data:CKEDITOR.tools.extend({},
"function"==typeof d.defaults?d.defaults():d.defaults),dataReady:!1,inited:!1,ready:!1,edit:g.prototype.edit,focusedEditable:null,definition:d,repository:a,draggable:!1!==d.draggable,_:{downcastFn:d.downcast&&"string"==typeof d.downcast?d.downcasts[d.downcast]:d.downcast}},!0);a.fire("instanceCreated",this);N(this,d);this.init&&this.init();this.inited=!0;(a=this.element.data("cke-widget-data"))&&this.setData(JSON.parse(decodeURIComponent(a)));e&&this.setData(e);this.data.classes||this.setData("classes",
this.getClasses());this.dataReady=!0;r(this);this.fire("data",this.data);this.isInited()&&f.editable().contains(this.wrapper)&&(this.ready=!0,this.fire("ready"))}function q(a,b,c){CKEDITOR.dom.element.call(this,b.$);this.editor=a;this._={};b=this.filter=c.filter;CKEDITOR.dtd[this.getName()].p?(this.enterMode=b?b.getAllowedEnterMode(a.enterMode):a.enterMode,this.shiftEnterMode=b?b.getAllowedEnterMode(a.shiftEnterMode,!0):a.shiftEnterMode):this.enterMode=this.shiftEnterMode=CKEDITOR.ENTER_BR}function O(a,
b){a.addCommand(b.name,{exec:function(a,d){function e(){a.widgets.finalizeCreation(k)}var f=a.widgets.focused;if(f&&f.name==b.name)f.edit();else if(b.insert)b.insert();else if(b.template){var f="function"==typeof b.defaults?b.defaults():b.defaults,f=CKEDITOR.dom.element.createFromHtml(b.template.output(f)),h,l=a.widgets.wrapElement(f,b.name),k=new CKEDITOR.dom.documentFragment(l.getDocument());k.append(l);(h=a.widgets.initOn(f,b,d&&d.startupData))?(f=h.once("edit",function(b){if(b.data.dialog)h.once("dialog",
function(b){b=b.data;var d,f;d=b.once("ok",e,null,null,20);f=b.once("cancel",function(b){b.data&&!1===b.data.hide||a.widgets.destroy(h,!0)});b.once("hide",function(){d.removeListener();f.removeListener()})});else e()},null,null,999),h.edit(),f.removeListener()):e()}},allowedContent:b.allowedContent,requiredContent:b.requiredContent,contentForms:b.contentForms,contentTransformations:b.contentTransformations})}function P(a,b){function c(b,d,c){var e=CKEDITOR.tools.getIndex(a._.upcasts,function(a){return a[2]>
c});0>e&&(e=a._.upcasts.length);a._.upcasts.splice(e,0,[b,d,c])}var d=b.upcast,e=b.upcastPriority||10;if(d)if("string"==typeof d)for(d=d.split(",");d.length;)c(b.upcasts[d.pop()],b.name,e);else c(d,b.name,e)}function t(a,b){a.focused=null;if(b.isInited()){var c=b.editor.checkDirty();a.fire("widgetBlurred",{widget:b});b.setFocused(!1);!c&&b.editor.resetDirty()}}function H(a){a=a.data;if("wysiwyg"==this.editor.mode){var b=this.editor.editable(),c=this.instances,d,e,f,h;if(b){for(d in c)c[d].isReady()&&
!b.contains(c[d].wrapper)&&this.destroy(c[d],!0);if(a&&a.initOnlyNew)c=this.initOnAll();else{var l=b.find(".cke_widget_wrapper"),c=[];d=0;for(e=l.count();d<e;d++){f=l.getItem(d);if(h=!this.getByElement(f,!0)){a:{h=Q;for(var k=f;k=k.getParent();)if(h(k)){h=!0;break a}h=!1}h=!h}h&&b.contains(f)&&(f.addClass("cke_widget_new"),c.push(this.initOn(f.getFirst(g.isDomWidgetElement))))}}a&&a.focusInited&&1==c.length&&c[0].focus()}}}function u(a,b,c){if(!c.allowedContent&&!c.disallowedContent)return null;var d=
this._.filters[a];d||(this._.filters[a]=d={});a=d[b];a||(a=c.allowedContent?new CKEDITOR.filter(c.allowedContent):this.editor.filter.clone(),d[b]=a,c.disallowedContent&&a.disallow(c.disallowedContent));return a}function R(a){var b=[],c=a._.upcasts,d=a._.upcastCallbacks;return{toBeWrapped:b,iterator:function(a){var f,h,l,k,m;if("data-cke-widget-wrapper"in a.attributes)return(a=a.getFirst(g.isParserWidgetElement))&&b.push([a]),!1;if("data-widget"in a.attributes)return b.push([a]),!1;if(m=c.length){if(a.attributes["data-cke-widget-upcasted"])return!1;
k=0;for(f=d.length;k<f;++k)if(!1===d[k](a))return;for(k=0;k<m;++k)if(f=c[k],l={},h=f[0](a,l))return h instanceof CKEDITOR.htmlParser.element&&(a=h),a.attributes["data-cke-widget-data"]=encodeURIComponent(JSON.stringify(l)),a.attributes["data-cke-widget-upcasted"]=1,b.push([a,f[1]]),!1}}}}function v(a,b){return{tabindex:-1,contenteditable:"false","data-cke-widget-wrapper":1,"data-cke-filter":"off","class":"cke_widget_wrapper cke_widget_new cke_widget_"+(a?"inline":"block")+(b?" cke_widget_"+b:"")}}
function w(a,b,c){if(a.type==CKEDITOR.NODE_ELEMENT){var d=CKEDITOR.dtd[a.name];if(d&&!d[c.name]){var d=a.split(b),e=a.parent;b=d.getIndex();a.children.length||(--b,a.remove());d.children.length||d.remove();return w(e,b,c)}}a.add(c,b)}function x(a,b){return"boolean"==typeof a.inline?a.inline:!!CKEDITOR.dtd.$inline[b]}function Q(a){return a.hasAttribute("data-cke-temp")}function n(a,b,c,d){var e=a.editor;e.fire("lockSnapshot");c?(d=c.data("cke-widget-editable"),d=b.editables[d],a.widgetHoldingFocusedEditable=
b,b.focusedEditable=d,c.addClass("cke_widget_editable_focused"),d.filter&&e.setActiveFilter(d.filter),e.setActiveEnterMode(d.enterMode,d.shiftEnterMode)):(d||b.focusedEditable.removeClass("cke_widget_editable_focused"),b.focusedEditable=null,a.widgetHoldingFocusedEditable=null,e.setActiveFilter(null),e.setActiveEnterMode(null,null));e.fire("unlockSnapshot")}function S(a){a.contextMenu&&a.contextMenu.addListener(function(b){if(b=a.widgets.getByElement(b,!0))return b.fire("contextMenu",{})})}function T(a,
b){return CKEDITOR.tools.trim(b)}function L(a){var b=a.editor,c=CKEDITOR.plugins.lineutils;b.on("dragstart",function(d){var c=d.data.target;g.isDomDragHandler(c)&&(c=a.getByElement(c),d.data.dataTransfer.setData("cke/widget-id",c.id),b.focus(),c.focus())});b.on("drop",function(c){var e=c.data.dataTransfer,f=e.getData("cke/widget-id"),h=e.getTransferType(b),e=b.createRange();""!==f&&h===CKEDITOR.DATA_TRANSFER_CROSS_EDITORS?c.cancel():""!==f&&h==CKEDITOR.DATA_TRANSFER_INTERNAL&&(f=a.instances[f])&&
(e.setStartBefore(f.wrapper),e.setEndAfter(f.wrapper),c.data.dragRange=e,delete CKEDITOR.plugins.clipboard.dragStartContainerChildCount,delete CKEDITOR.plugins.clipboard.dragEndContainerChildCount,c.data.dataTransfer.setData("text/html",b.editable().getHtmlFromRange(e).getHtml()),b.widgets.destroy(f,!0))});b.on("contentDom",function(){var d=b.editable();CKEDITOR.tools.extend(a,{finder:new c.finder(b,{lookups:{"default":function(b){if(!b.is(CKEDITOR.dtd.$listItem)&&b.is(CKEDITOR.dtd.$block)&&!g.isDomNestedEditable(b)&&
!a._.draggedWidget.wrapper.contains(b)){var c=g.getNestedEditable(d,b);if(c){b=a._.draggedWidget;if(a.getByElement(c)==b)return;c=CKEDITOR.filter.instances[c.data("cke-filter")];b=b.requiredContent;if(c&&b&&!c.check(b))return}return CKEDITOR.LINEUTILS_BEFORE|CKEDITOR.LINEUTILS_AFTER}}}}),locator:new c.locator(b),liner:new c.liner(b,{lineStyle:{cursor:"move !important","border-top-color":"#666"},tipLeftStyle:{"border-left-color":"#666"},tipRightStyle:{"border-right-color":"#666"}})},!0)})}function J(a){var b=
a.editor;b.on("contentDom",function(){var c=b.editable(),d=c.isInline()?c:b.document,e,f;c.attachListener(d,"mousedown",function(c){var d=c.data.getTarget();e=d instanceof CKEDITOR.dom.element?a.getByElement(d):null;f=0;e&&(e.inline&&d.type==CKEDITOR.NODE_ELEMENT&&d.hasAttribute("data-cke-widget-drag-handler")?(f=1,a.focused!=e&&b.getSelection().removeAllRanges()):g.getNestedEditable(e.wrapper,d)?e=null:(c.data.preventDefault(),CKEDITOR.env.ie||e.focus()))});c.attachListener(d,"mouseup",function(){f&&
e&&e.wrapper&&(f=0,e.focus())});CKEDITOR.env.ie&&c.attachListener(d,"mouseup",function(){setTimeout(function(){e&&e.wrapper&&c.contains(e.wrapper)&&(e.focus(),e=null)})})});b.on("doubleclick",function(b){var d=a.getByElement(b.data.element);if(d&&!g.getNestedEditable(d.wrapper,b.data.element))return d.fire("doubleclick",{element:b.data.element})},null,null,1)}function K(a){a.editor.on("key",function(b){var c=a.focused,d=a.widgetHoldingFocusedEditable,e;c?e=c.fire("key",{keyCode:b.data.keyCode}):d&&
(c=b.data.keyCode,b=d.focusedEditable,c==CKEDITOR.CTRL+65?(c=b.getBogus(),d=d.editor.createRange(),d.selectNodeContents(b),c&&d.setEndAt(c,CKEDITOR.POSITION_BEFORE_START),d.select(),e=!1):8==c||46==c?(e=d.editor.getSelection().getRanges(),d=e[0],e=!(1==e.length&&d.collapsed&&d.checkBoundaryOfElement(b,CKEDITOR[8==c?"START":"END"]))):e=void 0);return e},null,null,1)}function M(a){function b(b){a.focused&&y(a.focused,"cut"==b.name)}var c=a.editor;c.on("contentDom",function(){var a=c.editable();a.attachListener(a,
"copy",b);a.attachListener(a,"cut",b)})}function I(a){var b=a.editor;b.on("selectionCheck",function(){a.fire("checkSelection")});a.on("checkSelection",a.checkSelection,a);b.on("selectionChange",function(c){var d=(c=g.getNestedEditable(b.editable(),c.data.selection.getStartElement()))&&a.getByElement(c),e=a.widgetHoldingFocusedEditable;e?e===d&&e.focusedEditable.equals(c)||(n(a,e,null),d&&c&&n(a,d,c)):d&&c&&n(a,d,c)});b.on("dataReady",function(){z(a).commit()});b.on("blur",function(){var b;(b=a.focused)&&
t(a,b);(b=a.widgetHoldingFocusedEditable)&&n(a,b,null)})}function G(a){var b=a.editor,c={};b.on("toDataFormat",function(b){var e=CKEDITOR.tools.getNextNumber(),f=[];b.data.downcastingSessionId=e;c[e]=f;b.data.dataValue.forEach(function(b){var c=b.attributes,d;if("data-cke-widget-id"in c){if(c=a.instances[c["data-cke-widget-id"]])d=b.getFirst(g.isParserWidgetElement),f.push({wrapper:b,element:d,widget:c,editables:{}}),"1"!=d.attributes["data-cke-widget-keep-attr"]&&delete d.attributes["data-widget"]}else if("data-cke-widget-editable"in
c)return f[f.length-1].editables[c["data-cke-widget-editable"]]=b,!1},CKEDITOR.NODE_ELEMENT,!0)},null,null,8);b.on("toDataFormat",function(a){if(a.data.downcastingSessionId){a=c[a.data.downcastingSessionId];for(var b,f,h,l,g,m;b=a.shift();){f=b.widget;h=b.element;l=f._.downcastFn&&f._.downcastFn.call(f,h);for(m in b.editables)g=b.editables[m],delete g.attributes.contenteditable,g.setHtml(f.editables[m].getData());l||(l=h);b.wrapper.replaceWith(l)}}},null,null,13);b.on("contentDomUnload",function(){a.destroyAll(!0)})}
function F(a){var b=a.editor,c,d;b.on("toHtml",function(b){var d=R(a),h;for(b.data.dataValue.forEach(d.iterator,CKEDITOR.NODE_ELEMENT,!0);h=d.toBeWrapped.pop();){var l=h[0],k=l.parent;k.type==CKEDITOR.NODE_ELEMENT&&k.attributes["data-cke-widget-wrapper"]&&k.replaceWith(l);a.wrapElement(h[0],h[1])}c=b.data.protectedWhitespaces?3==b.data.dataValue.children.length&&g.isParserWidgetWrapper(b.data.dataValue.children[1]):1==b.data.dataValue.children.length&&g.isParserWidgetWrapper(b.data.dataValue.children[0])},
null,null,8);b.on("dataReady",function(){if(d)for(var c=b.editable().find(".cke_widget_wrapper"),f,h,l=0,k=c.count();l<k;++l)f=c.getItem(l),h=f.getFirst(g.isDomWidgetElement),h.type==CKEDITOR.NODE_ELEMENT&&h.data("widget")?(h.replace(f),a.wrapElement(h)):f.remove();d=0;a.destroyAll(!0);a.initOnAll()});b.on("loadSnapshot",function(b){/data-cke-widget/.test(b.data)&&(d=1);a.destroyAll(!0)},null,null,9);b.on("paste",function(a){a=a.data;a.dataValue=a.dataValue.replace(U,T);a.range&&(a=g.getNestedEditable(b.editable(),
a.range.startContainer))&&(a=CKEDITOR.filter.instances[a.data("cke-filter")])&&b.setActiveFilter(a)});b.on("afterInsertHtml",function(d){d.data.intoRange?a.checkWidgets({initOnlyNew:!0}):(b.fire("lockSnapshot"),a.checkWidgets({initOnlyNew:!0,focusInited:c}),b.fire("unlockSnapshot"))})}function z(a){var b=a.selected,c=[],d=b.slice(0),e=null;return{select:function(a){0>CKEDITOR.tools.indexOf(b,a)&&c.push(a);a=CKEDITOR.tools.indexOf(d,a);0<=a&&d.splice(a,1);return this},focus:function(a){e=a;return this},
commit:function(){var f=a.focused!==e,h,g;a.editor.fire("lockSnapshot");for(f&&(h=a.focused)&&t(a,h);h=d.pop();)b.splice(CKEDITOR.tools.indexOf(b,h),1),h.isInited()&&(g=h.editor.checkDirty(),h.setSelected(!1),!g&&h.editor.resetDirty());f&&e&&(g=a.editor.checkDirty(),a.focused=e,a.fire("widgetFocused",{widget:e}),e.setFocused(!0),!g&&a.editor.resetDirty());for(;h=c.pop();)b.push(h),h.setSelected(!0);a.editor.fire("unlockSnapshot")}}}function A(a,b,c){var d=0;b=B(b);var e=a.data.classes||{},f;if(b){for(e=
CKEDITOR.tools.clone(e);f=b.pop();)c?e[f]||(d=e[f]=1):e[f]&&(delete e[f],d=1);d&&a.setData("classes",e)}}function C(a){a.cancel()}function y(a,b){var c=a.editor,d=c.document;if(!d.getById("cke_copybin")){var e=c.blockless||CKEDITOR.env.ie?"span":"div",f=d.createElement(e),h=d.createElement(e),e=CKEDITOR.env.ie&&9>CKEDITOR.env.version;h.setAttributes({id:"cke_copybin","data-cke-temp":"1"});f.setStyles({position:"absolute",width:"1px",height:"1px",overflow:"hidden"});f.setStyle("ltr"==c.config.contentsLangDirection?
"left":"right","-5000px");var g=c.createRange();g.setStartBefore(a.wrapper);g.setEndAfter(a.wrapper);f.setHtml('\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e'+c.editable().getHtmlFromRange(g).getHtml()+'\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e');c.fire("saveSnapshot");c.fire("lockSnapshot");h.append(f);c.editable().append(h);var k=c.on("selectionChange",C,null,null,0),m=a.repository.on("checkSelection",C,null,null,0);if(e)var n=d.getDocumentElement().$,p=n.scrollTop;g=c.createRange();
g.selectNodeContents(f);g.select();e&&(n.scrollTop=p);setTimeout(function(){b||a.focus();h.remove();k.removeListener();m.removeListener();c.fire("unlockSnapshot");b&&(a.repository.del(a),c.fire("saveSnapshot"))},100)}}function B(a){return(a=(a=a.getDefinition().attributes)&&a["class"])?a.split(/\s+/):null}function D(){var a=CKEDITOR.document.getActive(),b=this.editor,c=b.editable();(c.isInline()?c:b.document.getWindow().getFrame()).equals(a)&&b.focusManager.focus(c)}function E(){CKEDITOR.env.gecko&&
this.editor.unlockSelection();CKEDITOR.env.webkit||(this.editor.forceNextSelectionCheck(),this.editor.selectionChange(1))}function V(a){var b=null;a.on("data",function(){var a=this.data.classes,d;if(b!=a){for(d in b)a&&a[d]||this.removeClass(d);for(d in a)this.addClass(d);b=a}})}function W(a){a.on("data",function(){if(a.wrapper){var b=this.getLabel?this.getLabel():this.editor.lang.widget.label.replace(/%1/,this.pathName||this.element.getName());a.wrapper.setAttribute("role","region");a.wrapper.setAttribute("aria-label",
b)}},null,null,9999)}function X(a){if(a.draggable){var b=a.editor,c=a.wrapper.getLast(g.isDomDragHandlerContainer),d;c?d=c.findOne("img"):(c=new CKEDITOR.dom.element("span",b.document),c.setAttributes({"class":"cke_reset cke_widget_drag_handler_container",style:"background:rgba(220,220,220,0.5);background-image:url("+b.plugins.widget.path+"images/handle.png)"}),d=new CKEDITOR.dom.element("img",b.document),d.setAttributes({"class":"cke_reset cke_widget_drag_handler","data-cke-widget-drag-handler":"1",
src:CKEDITOR.tools.transparentImageData,width:15,title:b.lang.widget.move,height:15,role:"presentation"}),a.inline&&d.setAttribute("draggable","true"),c.append(d),a.wrapper.append(c));a.wrapper.on("dragover",function(a){a.data.preventDefault()});a.wrapper.on("mouseenter",a.updateDragHandlerPosition,a);setTimeout(function(){a.on("data",a.updateDragHandlerPosition,a)},50);if(!a.inline&&(d.on("mousedown",Y,a),CKEDITOR.env.ie&&9>CKEDITOR.env.version))d.on("dragstart",function(a){a.data.preventDefault(!0)});
a.dragHandlerContainer=c}}function Y(a){function b(){var b;for(q.reset();b=g.pop();)b.removeListener();var c=k;b=a.sender;var d=this.repository.finder,e=this.repository.liner,f=this.editor,h=this.editor.editable();CKEDITOR.tools.isEmpty(e.visible)||(c=d.getRange(c[0]),this.focus(),f.fire("drop",{dropRange:c,target:c.startContainer}));h.removeClass("cke_widget_dragging");e.hideVisible();f.fire("dragend",{target:b})}var c=this.repository.finder,d=this.repository.locator,e=this.repository.liner,f=this.editor,
h=f.editable(),g=[],k=[],m,n;this.repository._.draggedWidget=this;var p=c.greedySearch(),q=CKEDITOR.tools.eventsBuffer(50,function(){m=d.locate(p);k=d.sort(n,1);k.length&&(e.prepare(p,m),e.placeLine(k[0]),e.cleanup())});h.addClass("cke_widget_dragging");g.push(h.on("mousemove",function(a){n=a.data.$.clientY;q.input()}));f.fire("dragstart",{target:a.sender});g.push(f.document.once("mouseup",b,this));h.isInline()||g.push(CKEDITOR.document.once("mouseup",b,this))}function Z(a){var b,c,d=a.editables;
a.editables={};if(a.editables)for(b in d)c=d[b],a.initEditable(b,"string"==typeof c?{selector:c}:c)}function aa(a){if(a.mask){var b=a.wrapper.findOne(".cke_widget_mask");b||(b=new CKEDITOR.dom.element("img",a.editor.document),b.setAttributes({src:CKEDITOR.tools.transparentImageData,"class":"cke_reset cke_widget_mask"}),a.wrapper.append(b));a.mask=b}}function ba(a){if(a.parts){var b={},c,d;for(d in a.parts)c=a.wrapper.findOne(a.parts[d]),b[d]=c;a.parts=b}}function N(a,b){ca(a);ba(a);Z(a);aa(a);X(a);
V(a);W(a);if(CKEDITOR.env.ie&&9>CKEDITOR.env.version)a.wrapper.on("dragstart",function(b){var d=b.data.getTarget();g.getNestedEditable(a,d)||a.inline&&g.isDomDragHandler(d)||b.data.preventDefault()});a.wrapper.removeClass("cke_widget_new");a.element.addClass("cke_widget_element");a.on("key",function(b){b=b.data.keyCode;if(13==b)a.edit();else{if(b==CKEDITOR.CTRL+67||b==CKEDITOR.CTRL+88){y(a,b==CKEDITOR.CTRL+88);return}if(b in da||CKEDITOR.CTRL&b||CKEDITOR.ALT&b)return}return!1},null,null,999);a.on("doubleclick",
function(b){a.edit()&&b.cancel()});if(b.data)a.on("data",b.data);if(b.edit)a.on("edit",b.edit)}function ca(a){(a.wrapper=a.element.getParent()).setAttribute("data-cke-widget-id",a.id)}function r(a){a.element.data("cke-widget-data",encodeURIComponent(JSON.stringify(a.data)))}CKEDITOR.plugins.add("widget",{requires:"lineutils,clipboard,widgetselection",onLoad:function(){CKEDITOR.addCss(".cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover\x3e.cke_widget_element{outline:2px solid yellow;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid yellow}.cke_widget_wrapper.cke_widget_focused\x3e.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #ace}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:15px;height:0;display:none;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover\x3e.cke_widget_drag_handler_container{height:15px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}img.cke_widget_drag_handler{cursor:move;width:15px;height:15px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}")},
beforeInit:function(a){a.widgets=new p(a)},afterInit:function(a){var b=a.widgets.registered,c,d,e;for(d in b)c=b[d],(e=c.button)&&a.ui.addButton&&a.ui.addButton(CKEDITOR.tools.capitalize(c.name,!0),{label:e,command:c.name,toolbar:"insert,10"});S(a)}});p.prototype={MIN_SELECTION_CHECK_INTERVAL:500,add:function(a,b){b=CKEDITOR.tools.prototypedCopy(b);b.name=a;b._=b._||{};this.editor.fire("widgetDefinition",b);b.template&&(b.template=new CKEDITOR.template(b.template));O(this.editor,b);P(this,b);return this.registered[a]=
b},addUpcastCallback:function(a){this._.upcastCallbacks.push(a)},checkSelection:function(){var a=this.editor.getSelection(),b=a.getSelectedElement(),c=z(this),d;if(b&&(d=this.getByElement(b,!0)))return c.focus(d).select(d).commit();a=a.getRanges()[0];if(!a||a.collapsed)return c.commit();a=new CKEDITOR.dom.walker(a);for(a.evaluator=g.isDomWidgetWrapper;b=a.next();)c.select(this.getByElement(b));c.commit()},checkWidgets:function(a){this.fire("checkWidgets",CKEDITOR.tools.copy(a||{}))},del:function(a){if(this.focused===
a){var b=a.editor,c=b.createRange(),d;(d=c.moveToClosestEditablePosition(a.wrapper,!0))||(d=c.moveToClosestEditablePosition(a.wrapper,!1));d&&b.getSelection().selectRanges([c])}a.wrapper.remove();this.destroy(a,!0)},destroy:function(a,b){this.widgetHoldingFocusedEditable===a&&n(this,a,null,b);a.destroy(b);delete this.instances[a.id];this.fire("instanceDestroyed",a)},destroyAll:function(a,b){var c,d,e=this.instances;if(b&&!a){d=b.find(".cke_widget_wrapper");for(var e=d.count(),f=0;f<e;++f)(c=this.getByElement(d.getItem(f),
!0))&&this.destroy(c)}else for(d in e)c=e[d],this.destroy(c,a)},finalizeCreation:function(a){(a=a.getFirst())&&g.isDomWidgetWrapper(a)&&(this.editor.insertElement(a),a=this.getByElement(a),a.ready=!0,a.fire("ready"),a.focus())},getByElement:function(){function a(a){return a.is(b)&&a.data("cke-widget-id")}var b={div:1,span:1};return function(b,d){if(!b)return null;var e=a(b);if(!d&&!e){var f=this.editor.editable();do b=b.getParent();while(b&&!b.equals(f)&&!(e=a(b)))}return this.instances[e]||null}}(),
initOn:function(a,b,c){b?"string"==typeof b&&(b=this.registered[b]):b=this.registered[a.data("widget")];if(!b)return null;var d=this.wrapElement(a,b.name);return d?d.hasClass("cke_widget_new")?(a=new g(this,this._.nextId++,a,b,c),a.isInited()?this.instances[a.id]=a:null):this.getByElement(a):null},initOnAll:function(a){a=(a||this.editor.editable()).find(".cke_widget_new");for(var b=[],c,d=a.count();d--;)(c=this.initOn(a.getItem(d).getFirst(g.isDomWidgetElement)))&&b.push(c);return b},onWidget:function(a){var b=
Array.prototype.slice.call(arguments);b.shift();for(var c in this.instances){var d=this.instances[c];d.name==a&&d.on.apply(d,b)}this.on("instanceCreated",function(d){d=d.data;d.name==a&&d.on.apply(d,b)})},parseElementClasses:function(a){if(!a)return null;a=CKEDITOR.tools.trim(a).split(/\s+/);for(var b,c={},d=0;b=a.pop();)-1==b.indexOf("cke_")&&(c[b]=d=1);return d?c:null},wrapElement:function(a,b){var c=null,d,e;if(a instanceof CKEDITOR.dom.element){b=b||a.data("widget");d=this.registered[b];if(!d)return null;
if((c=a.getParent())&&c.type==CKEDITOR.NODE_ELEMENT&&c.data("cke-widget-wrapper"))return c;a.hasAttribute("data-cke-widget-keep-attr")||a.data("cke-widget-keep-attr",a.data("widget")?1:0);a.data("widget",b);e=x(d,a.getName());c=new CKEDITOR.dom.element(e?"span":"div");c.setAttributes(v(e,b));c.data("cke-display-name",d.pathName?d.pathName:a.getName());a.getParent(!0)&&c.replace(a);a.appendTo(c)}else if(a instanceof CKEDITOR.htmlParser.element){b=b||a.attributes["data-widget"];d=this.registered[b];
if(!d)return null;if((c=a.parent)&&c.type==CKEDITOR.NODE_ELEMENT&&c.attributes["data-cke-widget-wrapper"])return c;"data-cke-widget-keep-attr"in a.attributes||(a.attributes["data-cke-widget-keep-attr"]=a.attributes["data-widget"]?1:0);b&&(a.attributes["data-widget"]=b);e=x(d,a.name);c=new CKEDITOR.htmlParser.element(e?"span":"div",v(e,b));c.attributes["data-cke-display-name"]=d.pathName?d.pathName:a.name;d=a.parent;var f;d&&(f=a.getIndex(),a.remove());c.add(a);d&&w(d,f,c)}return c},_tests_createEditableFilter:u};
CKEDITOR.event.implementOn(p.prototype);g.prototype={addClass:function(a){this.element.addClass(a);this.wrapper.addClass(g.WRAPPER_CLASS_PREFIX+a)},applyStyle:function(a){A(this,a,1)},checkStyleActive:function(a){a=B(a);var b;if(!a)return!1;for(;b=a.pop();)if(!this.hasClass(b))return!1;return!0},destroy:function(a){this.fire("destroy");if(this.editables)for(var b in this.editables)this.destroyEditable(b,a);a||("0"==this.element.data("cke-widget-keep-attr")&&this.element.removeAttribute("data-widget"),
this.element.removeAttributes(["data-cke-widget-data","data-cke-widget-keep-attr"]),this.element.removeClass("cke_widget_element"),this.element.replace(this.wrapper));this.wrapper=null},destroyEditable:function(a,b){var c=this.editables[a];c.removeListener("focus",E);c.removeListener("blur",D);this.editor.focusManager.remove(c);b||(this.repository.destroyAll(!1,c),c.removeClass("cke_widget_editable"),c.removeClass("cke_widget_editable_focused"),c.removeAttributes(["contenteditable","data-cke-widget-editable",
"data-cke-enter-mode"]));delete this.editables[a]},edit:function(){var a={dialog:this.dialog},b=this;if(!1===this.fire("edit",a)||!a.dialog)return!1;this.editor.openDialog(a.dialog,function(a){var d,e;!1!==b.fire("dialog",a)&&(d=a.on("show",function(){a.setupContent(b)}),e=a.on("ok",function(){var d,e=b.on("data",function(a){d=1;a.cancel()},null,null,0);b.editor.fire("saveSnapshot");a.commitContent(b);e.removeListener();d&&(b.fire("data",b.data),b.editor.fire("saveSnapshot"))}),a.once("hide",function(){d.removeListener();
e.removeListener()}))});return!0},getClasses:function(){return this.repository.parseElementClasses(this.element.getAttribute("class"))},hasClass:function(a){return this.element.hasClass(a)},initEditable:function(a,b){var c=this._findOneNotNested(b.selector);return c&&c.is(CKEDITOR.dtd.$editable)?(c=new q(this.editor,c,{filter:u.call(this.repository,this.name,a,b)}),this.editables[a]=c,c.setAttributes({contenteditable:"true","data-cke-widget-editable":a,"data-cke-enter-mode":c.enterMode}),c.filter&&
c.data("cke-filter",c.filter.id),c.addClass("cke_widget_editable"),c.removeClass("cke_widget_editable_focused"),b.pathName&&c.data("cke-display-name",b.pathName),this.editor.focusManager.add(c),c.on("focus",E,this),CKEDITOR.env.ie&&c.on("blur",D,this),c._.initialSetData=!0,c.setData(c.getHtml()),!0):!1},_findOneNotNested:function(a){a=this.wrapper.find(a);for(var b,c,d=0;d<a.count();d++)if(b=a.getItem(d),c=b.getAscendant(g.isDomWidgetWrapper),this.wrapper.equals(c))return b;return null},isInited:function(){return!(!this.wrapper||
!this.inited)},isReady:function(){return this.isInited()&&this.ready},focus:function(){var a=this.editor.getSelection();if(a){var b=this.editor.checkDirty();a.fake(this.wrapper);!b&&this.editor.resetDirty()}this.editor.focus()},removeClass:function(a){this.element.removeClass(a);this.wrapper.removeClass(g.WRAPPER_CLASS_PREFIX+a)},removeStyle:function(a){A(this,a,0)},setData:function(a,b){var c=this.data,d=0;if("string"==typeof a)c[a]!==b&&(c[a]=b,d=1);else{var e=a;for(a in e)c[a]!==e[a]&&(d=1,c[a]=
e[a])}d&&this.dataReady&&(r(this),this.fire("data",c));return this},setFocused:function(a){this.wrapper[a?"addClass":"removeClass"]("cke_widget_focused");this.fire(a?"focus":"blur");return this},setSelected:function(a){this.wrapper[a?"addClass":"removeClass"]("cke_widget_selected");this.fire(a?"select":"deselect");return this},updateDragHandlerPosition:function(){var a=this.editor,b=this.element.$,c=this._.dragHandlerOffset,b={x:b.offsetLeft,y:b.offsetTop-15};c&&b.x==c.x&&b.y==c.y||(c=a.checkDirty(),
a.fire("lockSnapshot"),this.dragHandlerContainer.setStyles({top:b.y+"px",left:b.x+"px",display:"block"}),a.fire("unlockSnapshot"),!c&&a.resetDirty(),this._.dragHandlerOffset=b)}};CKEDITOR.event.implementOn(g.prototype);g.getNestedEditable=function(a,b){return!b||b.equals(a)?null:g.isDomNestedEditable(b)?b:g.getNestedEditable(a,b.getParent())};g.isDomDragHandler=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-drag-handler")};g.isDomDragHandlerContainer=function(a){return a.type==
CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_widget_drag_handler_container")};g.isDomNestedEditable=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-editable")};g.isDomWidgetElement=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-widget")};g.isDomWidgetWrapper=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-wrapper")};g.isParserWidgetElement=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&!!a.attributes["data-widget"]};
g.isParserWidgetWrapper=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&!!a.attributes["data-cke-widget-wrapper"]};g.WRAPPER_CLASS_PREFIX="cke_widget_wrapper_";q.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype),{setData:function(a){this._.initialSetData||this.editor.widgets.destroyAll(!1,this);this._.initialSetData=!1;a=this.editor.dataProcessor.toHtml(a,{context:this.getName(),filter:this.filter,enterMode:this.enterMode});this.setHtml(a);this.editor.widgets.initOnAll(this)},
getData:function(){return this.editor.dataProcessor.toDataFormat(this.getHtml(),{context:this.getName(),filter:this.filter,enterMode:this.enterMode})}});var U=/^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,da={37:1,38:1,39:1,40:1,8:1,46:1};(function(){function a(){}
function b(a,b,c){return c&&this.checkElement(a)?(a=c.widgets.getByElement(a,!0))&&a.checkStyleActive(this):!1}var c={};CKEDITOR.style.addCustomHandler({type:"widget",setup:function(a){this.widget=a.widget;if(this.group="string"==typeof a.group?[a.group]:a.group){a=this.widget;var b;c[a]||(c[a]={});for(var f=0,h=this.group.length;f<h;f++)b=this.group[f],c[a][b]||(c[a][b]=[]),c[a][b].push(this)}},apply:function(a){var b;a instanceof CKEDITOR.editor&&this.checkApplicable(a.elementPath(),a)&&(b=a.widgets.focused,
this.group&&this.removeStylesFromSameGroup(a),b.applyStyle(this))},remove:function(a){a instanceof CKEDITOR.editor&&this.checkApplicable(a.elementPath(),a)&&a.widgets.focused.removeStyle(this)},removeStylesFromSameGroup:function(a){var b,f,h=!1;if(!(a instanceof CKEDITOR.editor))return!1;f=a.elementPath();if(this.checkApplicable(f,a))for(var g=0,k=this.group.length;g<k;g++){b=c[this.widget][this.group[g]];for(var m=0;m<b.length;m++)b[m]!==this&&b[m].checkActive(f,a)&&(a.widgets.focused.removeStyle(b[m]),
h=!0)}return h},checkActive:function(a,b){return this.checkElementMatch(a.lastElement,0,b)},checkApplicable:function(a,b){return b instanceof CKEDITOR.editor?this.checkElement(a.lastElement):!1},checkElementMatch:b,checkElementRemovable:b,checkElement:function(a){return g.isDomWidgetWrapper(a)?(a=a.getFirst(g.isDomWidgetElement))&&a.data("widget")==this.widget:!1},buildPreview:function(a){return a||this._.definition.name},toAllowedContentRules:function(a){if(!a)return null;a=a.widgets.registered[this.widget];
var b,c={};if(!a)return null;if(a.styleableElements){b=this.getClassesArray();if(!b)return null;c[a.styleableElements]={classes:b,propertiesOnly:!0};return c}return a.styleToAllowedContentRules?a.styleToAllowedContentRules(this):null},getClassesArray:function(){var a=this._.definition.attributes&&this._.definition.attributes["class"];return a?CKEDITOR.tools.trim(a).split(/\s+/):null},applyToRange:a,removeFromRange:a,applyToObject:a})})();CKEDITOR.plugins.widget=g;g.repository=p;g.nestedEditable=q})();CKEDITOR.config.plugins='basicstyles,blockquote,notification,button,toolbar,clipboard,enterkey,horizontalrule,indent,indentblock,indentlist,justify,list,pastefromword,removeformat,tab,undo,lineutils,widgetselection,widget';CKEDITOR.config.skin='moono';(function() {var setIcons = function(icons, strip) {var path = CKEDITOR.getUrl( 'plugins/' + strip );icons = icons.split( ',' );for ( var i = 0; i < icons.length; i++ )CKEDITOR.skin.icons[ icons[ i ] ] = { path: path, offset: -icons[ ++i ], bgsize : icons[ ++i ] };};if (CKEDITOR.env.hidpi) setIcons('bold,0,,italic,24,,strike,48,,subscript,72,,superscript,96,,underline,120,,blockquote,144,,copy-rtl,168,,copy,192,,cut-rtl,216,,cut,240,,paste-rtl,264,,paste,288,,horizontalrule,312,,indent-rtl,336,,indent,360,,outdent-rtl,384,,outdent,408,,justifyblock,432,,justifycenter,456,,justifyleft,480,,justifyright,504,,bulletedlist-rtl,528,,bulletedlist,552,,numberedlist-rtl,576,,numberedlist,600,,pastefromword-rtl,624,,pastefromword,648,,removeformat,672,,redo-rtl,696,,redo,720,,undo-rtl,744,,undo,768,','icons_hidpi.png');else setIcons('bold,0,auto,italic,24,auto,strike,48,auto,subscript,72,auto,superscript,96,auto,underline,120,auto,blockquote,144,auto,copy-rtl,168,auto,copy,192,auto,cut-rtl,216,auto,cut,240,auto,paste-rtl,264,auto,paste,288,auto,horizontalrule,312,auto,indent-rtl,336,auto,indent,360,auto,outdent-rtl,384,auto,outdent,408,auto,justifyblock,432,auto,justifycenter,456,auto,justifyleft,480,auto,justifyright,504,auto,bulletedlist-rtl,528,auto,bulletedlist,552,auto,numberedlist-rtl,576,auto,numberedlist,600,auto,pastefromword-rtl,624,auto,pastefromword,648,auto,removeformat,672,auto,redo-rtl,696,auto,redo,720,auto,undo-rtl,744,auto,undo,768,auto','icons.png');})();CKEDITOR.lang.languages={"af":1,"sq":1,"ar":1,"az":1,"eu":1,"bn":1,"bs":1,"bg":1,"ca":1,"zh-cn":1,"zh":1,"hr":1,"cs":1,"da":1,"nl":1,"en":1,"en-au":1,"en-ca":1,"en-gb":1,"eo":1,"et":1,"fo":1,"fi":1,"fr":1,"fr-ca":1,"gl":1,"ka":1,"de":1,"de-ch":1,"el":1,"gu":1,"he":1,"hi":1,"hu":1,"is":1,"id":1,"it":1,"ja":1,"km":1,"ko":1,"ku":1,"lv":1,"lt":1,"mk":1,"ms":1,"mn":1,"no":1,"nb":1,"oc":1,"fa":1,"pl":1,"pt-br":1,"pt":1,"ro":1,"ru":1,"sr":1,"sr-latn":1,"si":1,"sk":1,"sl":1,"es":1,"sv":1,"tt":1,"th":1,"tr":1,"ug":1,"uk":1,"vi":1,"cy":1};}());

        if (typeof CKEDITOR !== 'undefined') {
            CKEDITOR.disableAutoInline = true;
        }
    }

    'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    // An object containing all currently registered plugins in AlloyEditor.

    var BRIDGE_BUTTONS = {};

    /**
     * AlloyEditor static object.
     *
     * @class AlloyEditor
     */
    var AlloyEditor = {
        /**
         * Creates an instance of AlloyEditor.
         *
         * @memberof AlloyEditor
         * @method editable
         * @static
         * @param {String|Node} node The Node ID or HTMl node, which AlloyEditor should use as an editable area.
         * @param {Object} config Configuration attributes for the current instance of AlloyEditor.
         * @return {Object} An instance of {{#crossLink "Core"}}{{/crossLink}}
         */
        editable: function editable(node, config) {
            config = config || {};
            config.srcNode = node;

            AlloyEditor.implementEventTarget();

            return new AlloyEditor.Core(config);
        },

        /**
         * The full URL for the AlloyEditor installation directory.
         * It is possible to manually provide the base path by setting a
         * global variable named `ALLOYEDITOR_BASEPATH`. This global variable
         * must be set **before** the editor script loading.
         *
         * @memberof AlloyEditor
         * @method getBasePath
         * @static
         * @return {String} The found base path
         */
        getBasePath: function getBasePath() {
            // Find out the editor directory path, based on its <script> tag.
            var path = window.ALLOYEDITOR_BASEPATH || '';

            if (!path) {
                var scripts = document.getElementsByTagName('script');

                for (var i = 0; i < scripts.length; i++) {
                    var match = scripts[i].src.match(AlloyEditor.regexBasePath);

                    if (match) {
                        path = match[1];
                        break;
                    }
                }
            }

            // In IE (only) the script.src string is the raw value entered in the
            // HTML source. Other browsers return the full resolved URL instead.
            if (path.indexOf(':/') === -1 && path.slice(0, 2) !== '//') {
                // Absolute path.
                if (path.indexOf('/') === 0) {
                    path = location.href.match(/^.*?:\/\/[^\/]*/)[0] + path;
                }
                // Relative path.
                else {
                        path = location.href.match(/^[^\?]*\/(?:)/)[0] + path;
                    }
            }

            if (!path) {
                throw 'The AlloyEditor installation path could not be automatically detected. Please set the global variable "ALLOYEDITOR_BASEPATH" before creating editor instances.';
            }

            return path;
        },

        /**
         * Detects and load the corresponding language file if AlloyEditor language strings are not already present.
         * The function fires a {{#crossLink "AlloyEditor/languageResourcesLoaded:event"}}{{/crossLink}} event
         *
         * @memberof AlloyEditor
         * @method loadLanguageResources
         * @static
         * @param {Function} callback Optional callback to be called when AlloyEditor loads the language resource.
         */
        loadLanguageResources: function loadLanguageResources(callback) {
            AlloyEditor.implementEventTarget();

            if (AlloyEditor.Lang.isFunction(callback)) {
                if (AlloyEditor.Strings) {
                    setTimeout(callback, 0);
                } else {
                    AlloyEditor.once('languageResourcesLoaded', function () {
                        setTimeout(callback, 0);
                    });
                }
            }

            if (!AlloyEditor._langResourceRequested) {
                AlloyEditor._langResourceRequested = true;

                var languages = ['af', 'ar', 'bg', 'bn', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en-au', 'en-ca', 'en-gb', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr-ca', 'fr', 'gl', 'gu', 'he', 'hi', 'hr', 'hu', 'id', 'is', 'it', 'ja', 'ka', 'km', 'ko', 'ku', 'lt', 'lv', 'mk', 'mn', 'ms', 'nb', 'nl', 'no', 'pl', 'pt-br', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr-latn', 'sr', 'sv', 'th', 'tr', 'tt', 'ug', 'uk', 'vi', 'zh-cn', 'zh'];

                var userLanguage = navigator.language || navigator.userLanguage || 'en';

                var parts = userLanguage.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/);
                var lang = parts[1];
                var locale = parts[2];

                if (languages.indexOf(lang + '-' + locale) >= 0) {
                    lang = lang + '-' + locale;
                } else if (languages.indexOf(lang) === -1) {
                    lang = 'en';
                }

                CKEDITOR.scriptLoader.load(AlloyEditor.getUrl('lang/alloy-editor/' + lang + '.js'), function (loaded) {
                    if (loaded) {
                        AlloyEditor.fire('languageResourcesLoaded');
                    }
                }, this);
            }
        },

        /**
         * Gets the full URL for AlloyEditor resources. By default, URLs
         * returned by this function contain a querystring parameter ("t")
         * set to the {@link CKEDITOR#timestamp} value.
         *
         * @memberof AlloyEditor
         * @method getUrl
         * @static
         * @param {String} resource The resource whose full URL we want to get.
         * It may be a full, absolute, or relative URL.
         * @return {String} The full URL.
         */
        getUrl: function getUrl(resource) {
            var basePath = AlloyEditor.getBasePath();

            // If this is not a full or absolute path.
            if (resource.indexOf(':/') === -1 && resource.indexOf('/') !== 0) {
                resource = basePath + resource;
            }

            // Add the timestamp, except for directories.
            if (CKEDITOR.timestamp && resource.charAt(resource.length - 1) !== '/' && !/[&?]t=/.test(resource)) {
                resource += (resource.indexOf('?') >= 0 ? '&' : '?') + 't=' + CKEDITOR.timestamp;
            }

            return resource;
        },

        /**
         * Implements event firing and subscribing via CKEDITOR.event.
         *
         * @memberof AlloyEditor
         * @method implementEventTarget
         * @static
         */
        implementEventTarget: function implementEventTarget() {
            if (!AlloyEditor.fire && !AlloyEditor.on) {
                CKEDITOR.event.implementOn(AlloyEditor);
            }
        },

        /**
         * Regular expression which should match the script which have been used to load AlloyEditor.
         *
         * @memberof AlloyEditor
         * @property regexBasePath
         * @type {RegExp}
         * @static
         */
        regexBasePath: /(^|.*[\\\/])(?:alloy-editor[^/]+|alloy-editor)\.js(?:\?.*|;.*)?$/i,

        /**
         * And object, containing all currently registered buttons in AlloyEditor.
         *
         * @memberof AlloyEditor
         * @property Buttons
         * @type {Object}
         * @static
         */
        Buttons: {},

        /**
         * And object, containing all currently registered toolbars in AlloyEditor.
         *
         * @memberof AlloyEditor
         * @property Toolbars
         * @type {Object}
         * @static
         */
        Toolbars: {},

        /**
         * Fired when AlloyEditor detects the browser language and loads the corresponding language file. Once this event
         * is fired, AlloyEditor.Strings will be populated with data.
         *
         * @event languageResourcesLoaded
         */

        /**
         * Returns the required plugin names needed for a given plugin
         * if it is already registered or an empty array.
         *
         * @memberof AlloyEditor
         * @method getButtons
         * @param {Array} buttons An array of buttons or plugin names.
         * @return {Function} A function that can be invoked to resolve the requested button names.
         * @static
         */
        getButtons: function getButtons(buttons) {
            return function () {
                return buttons.reduce(function (acc, val) {
                    val = BRIDGE_BUTTONS[val] || [val];
                    return acc.concat(val);
                }, []);
            };
        },

        /**
         * Register a button and try to get its required plugins.
         *
         * @memberof AlloyEditor
         * @method registerBridgeButton
         * @param {String} buttonName The name of the button.
         * @param {String} pluginName The name of the plugin that registers the button.
         * @static
         */
        registerBridgeButton: function registerBridgeButton(buttonName, pluginName) {
            if (!BRIDGE_BUTTONS[pluginName]) {
                BRIDGE_BUTTONS[pluginName] = [];
            }

            BRIDGE_BUTTONS[pluginName].push(buttonName);
        }
    };

    if (typeof module !== 'undefined' && _typeof(module.exports) === 'object') {
        module.exports = AlloyEditor;
    }

    if (typeof window !== 'undefined') {
        window.AlloyEditor = AlloyEditor;
    } else if (typeof global !== 'undefined') {
        global.AlloyEditor = AlloyEditor;
    } else if (typeof self !== 'undefined') {
        self.AlloyEditor = AlloyEditor;
    } else {
        this.AlloyEditor = AlloyEditor;
    }
})();

    

    var React = (function() {
        return (0, eval)('this').React;
    }());

    if (typeof React === 'undefined' && typeof AlloyEditor !== 'undefined') {
        React = AlloyEditor.React;
    }

    if (typeof React === 'undefined' && typeof require === 'function') {
        React = require('react');
    }

    var ReactDOM = (function() {
        return (0, eval)('this').ReactDOM;
    }());

    if (typeof ReactDOM === 'undefined' && typeof AlloyEditor !== 'undefined') {
        ReactDOM = AlloyEditor.ReactDOM;
    }

    if (typeof ReactDOM === 'undefined' && typeof require === 'function') {
        ReactDOM = require('react-dom');
    }

     /**
  * React bridge between v16 and older version
  */
var PropTypes = (function() {
    return (0, eval)('this').PropTypes || React.PropTypes;
}());

var createReactClass = (function() {
    return (0, eval)('this').createReactClass || React.createClass;
}());    


    if (typeof window !== 'undefined') {
       deployCKEditor();

        'use strict';

(function () {
    'use strict';

    /**
     * Debounce util function. If a function execution is expensive, it might be debounced. This means
     * that it will be executed after some amount of time after its last call. For example, if we attach a
     * a function on scroll event, it might be called hundreds times per second. In this case it may be
     * debounced with, let's say 100ms. The real execution of this function will happen 100ms after last
     * scroll event.
     *
     * @memberof CKEDITOR.tools
     * @method debounce
     * @param {Array} args An array of arguments which the callback will receive.
     * @param {Function} callback The callback which has to be called after given timeout.
     * @param {Number} timeout Timeout in milliseconds after which the callback will be called.
     * @param {Object} context The context in which the callback will be called. This argument is optional.
     * @static
     */

    CKEDITOR.tools.debounce = CKEDITOR.tools.debounce || function (callback, timeout, context, args) {
        var debounceHandle;

        var callFn = function callFn() {
            var callContext = context || this;

            clearTimeout(debounceHandle);

            var result = [];

            for (var len = arguments.length, startIndex = 0; startIndex < len; ++startIndex) {
                result.push(arguments[startIndex]);
            }

            var callArgs = result.concat(args || []);

            debounceHandle = setTimeout(function () {
                callback.apply(callContext, callArgs);
            }, timeout);
        };

        callFn.detach = function () {
            clearTimeout(debounceHandle);
        };

        return callFn;
    };
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    var REGEX_BOOKMARK_SCHEME = /^#.*/i;
    var REGEX_EMAIL_SCHEME = /^[a-z0-9\u0430-\u044F\._-]+@/i;
    var REGEX_URI_SCHEME = /^(?:[a-z][a-z0-9+\-.]*)\:|^\//i;

    /**
     * Link class utility. Provides methods for create, delete and update links.
     *
     * @class CKEDITOR.Link
     * @constructor
     * @param {Object} editor The CKEditor instance.
     */
    function Link(editor, config) {
        this._editor = editor;
        this.appendProtocol = config && config.appendProtocol === false ? false : true;
    }

    Link.prototype = {
        constructor: Link,

        /**
         * Advances the editor selection to the next available position after a
         * given link or the one in the current selection.
         *
         * @instance
         * @memberof CKEDITOR.Link
         * @method advanceSelection
         * @param {CKEDITOR.dom.element} link The link element which link style should be removed.
         */
        advanceSelection: function advanceSelection(link) {
            link = link || this.getFromSelection();

            var range = this._editor.getSelection().getRanges()[0];

            if (link) {
                range.moveToElementEditEnd(link);

                var nextNode = range.getNextEditableNode();

                if (nextNode && !this._editor.element.equals(nextNode.getCommonAncestor(link))) {
                    var whitespace = /\s/.exec(nextNode.getText());

                    var offset = whitespace ? whitespace.index + 1 : 0;

                    range.setStart(nextNode, offset);
                    range.setEnd(nextNode, offset);
                }
            }

            this._editor.getSelection().selectRanges([range]);
        },

        /**
         * Create a link with given URI as href.
         *
         * @instance
         * @memberof CKEDITOR.Link
         * @method create
         * @param {Object} attrs A config object with link attributes. These might be arbitrary DOM attributes.
         * @param {Object} modifySelection A config object with an advance attribute to indicate if the selection should be moved after the link creation.
         * @param {String} URI The URI of the link.
         */
        create: function create(URI, attrs, modifySelection) {
            var selection = this._editor.getSelection();

            var range = selection.getRanges()[0];

            if (range.collapsed) {
                var text = new CKEDITOR.dom.text(URI, this._editor.document);
                range.insertNode(text);
                range.selectNodeContents(text);
            }

            URI = this._getCompleteURI(URI);

            var linkAttrs = CKEDITOR.tools.merge({
                'data-cke-saved-href': URI,
                href: URI
            }, attrs);

            var style = new CKEDITOR.style({
                attributes: linkAttrs,
                element: 'a'
            });

            style.type = CKEDITOR.STYLE_INLINE;
            style.applyToRange(range, this._editor);

            if (modifySelection && modifySelection.advance) {
                this.advanceSelection();
            } else {
                range.select();
            }
        },

        /**
         * Retrieves a link from the current selection.
         *
         * @instance
         * @memberof CKEDITOR.Link
         * @method getFromSelection
         * @return {CKEDITOR.dom.element} The retrieved link or null if not found.
         */
        getFromSelection: function getFromSelection() {
            var selection = this._editor.getSelection();

            var selectedElement = selection.getSelectedElement();

            if (selectedElement && selectedElement.is('a')) {
                return selectedElement;
            }

            if (selectedElement && CKEDITOR.env.ie) {
                return selectedElement.getChildren('a').getItem(0);
            }

            var range = selection.getRanges()[0];

            if (range) {
                range.shrink(CKEDITOR.SHRINK_TEXT);

                return this._editor.elementPath(range.getCommonAncestor()).contains('a', 1);
            }

            return null;
        },

        /**
         * Removes a link from the editor.
         *
         * @instance
         * @memberof CKEDITOR.Link
         * @method remove
         * @param {CKEDITOR.dom.element} link The link element which link style should be removed.
         * @param {Object} modifySelection A config object with an advance attribute to indicate if the selection should be moved after the link creation.
         */
        remove: function remove(link, modifySelection) {
            var editor = this._editor;

            if (link) {
                if (modifySelection && modifySelection.advance) {
                    this.advanceSelection();
                }

                link.remove(editor);
            } else {
                var style = new CKEDITOR.style({
                    alwaysRemoveElement: 1,
                    element: 'a',
                    type: CKEDITOR.STYLE_INLINE
                });

                // 'removeStyle()' removes the style from the editor's current selection.
                //  We need to force the selection to be the whole link element
                //  to remove it properly.

                var selection = editor.getSelection();
                selection.selectElement(selection.getStartElement());

                editor.removeStyle(style);
            }
        },

        /**
         * Updates the href of an already existing link.
         *
         * @instance
         * @memberof CKEDITOR.Link
         * @method update
         * @param {CKEDITOR.dom.element} link The link element which href should be removed.
         * @param {Object|String} attrs The attributes to update or remove. Attributes with null values will be removed.
         * @param {Object} modifySelection A config object with an advance attribute to indicate if the selection should be moved after the link creation.
         */
        update: function update(attrs, link, modifySelection) {
            var instance = this;

            link = link || this.getFromSelection();

            if (typeof attrs === 'string') {
                var uri = instance._getCompleteURI(attrs);

                link.setAttributes({
                    'data-cke-saved-href': uri,
                    href: uri
                });
            } else if ((typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs)) === 'object') {
                var removeAttrs = [];

                var setAttrs = {};

                Object.keys(attrs).forEach(function (key) {
                    if (attrs[key] === null) {
                        if (key === 'href') {
                            removeAttrs.push('data-cke-saved-href');
                        }

                        removeAttrs.push(key);
                    } else {
                        if (key === 'href') {
                            var uri = instance._getCompleteURI(attrs[key]);

                            setAttrs['data-cke-saved-href'] = uri;
                            setAttrs[key] = uri;
                        } else {
                            setAttrs[key] = attrs[key];
                        }
                    }
                });

                link.removeAttributes(removeAttrs);
                link.setAttributes(setAttrs);
            }

            if (modifySelection && modifySelection.advance) {
                this.advanceSelection(link);
            }
        },

        /**
         * Checks if the URI begins with a '#' symbol to determine if it's an on page bookmark.
         * If it doesn't, it then checks if the URI has an '@' symbol. If it does and the URI
         * looks like an email and doesn't have 'mailto:', 'mailto:' is added to the URI.
         * If it doesn't and the URI doesn't have a scheme, the default 'http' scheme with
         * hierarchical path '//' is added to the URI.
         *
         * @instance
         * @memberof CKEDITOR.Link
         * @method _getCompleteURI
         * @param {String} URI The URI of the link.
         * @protected
         * @return {String} The URI updated with the protocol.
         */
        _getCompleteURI: function _getCompleteURI(URI) {
            if (REGEX_BOOKMARK_SCHEME.test(URI)) {
                return URI;
            } else if (REGEX_EMAIL_SCHEME.test(URI)) {
                URI = 'mailto:' + URI;
            } else if (!REGEX_URI_SCHEME.test(URI)) {
                URI = this.appendProtocol ? 'http://' + URI : URI;
            }

            return URI;
        }
    };

    CKEDITOR.Link = CKEDITOR.Link || Link;
})();
'use strict';

(function () {
    'use strict';

    // Wraps each of the plugin lifecycle methods in a closure that will
    // set up the editor.__processingPlugin__ variable so it can be globally
    // accessed exposing the plugin being processed and the lifecycle phase
    // in which it is happening
    //
    // @param {Object} plugin The plugin to wrap lifecycle methods

    var wrapPluginLifecycle = function wrapPluginLifecycle(plugin) {
        var methods = ['beforeInit', 'init', 'afterInit'];

        methods.forEach(function (methodName) {
            if (plugin[methodName]) {
                plugin[methodName] = CKEDITOR.tools.override(plugin[methodName], function (originalPluginMethod) {
                    var payload = {
                        phase: methodName,
                        plugin: plugin
                    };

                    return function (editor) {
                        editor.__processingPlugin__ = payload;

                        originalPluginMethod.call(this, editor);

                        editor.__processingPlugin__ = null;
                    };
                });
            }
        });
    };

    // Filters the requires object to remove unwanted dependencies. At this point
    // only 'toolbar' has been identified, but more can appear. An unwanted plugin
    // dependency is one that prevents a necessary plugin from being removed
    //
    // @param {string|Array<string>} requires The requires object
    // @return {string} The filtered requires object
    var filterUnwantedDependencies = function filterUnwantedDependencies(requires) {
        if (typeof requires === 'string') {
            requires = requires.split(',');
        }

        return requires.filter(function (require) {
            return require !== 'toolbar';
        });
    };

    /**
     * CKEDITOR.plugins class utility which adds additional methods to those of CKEditor.
     *
     * @class CKEDITOR.plugins
     */

    /**
     * Overrides CKEDITOR.plugins.load method so we can extend the lifecycle methods of
     * the loaded plugins to add some metainformation about the plugin being processed
     *
    * @param {String/Array} names The name of the resource to load. It may be a
    * string with a single resource name, or an array with several names.
    * @param {Function} callback A function to be called when all resources
    * are loaded. The callback will receive an array containing all loaded names.
    * @param {Object} [scope] The scope object to be used for the callback call.
     * @memberof CKEDITOR.plugins
     * @method load
     * @static
     */
    CKEDITOR.plugins.load = CKEDITOR.tools.override(CKEDITOR.plugins.load, function (pluginsLoad) {
        // Wrap original load function so we can transform the plugin input parameter
        // before passing it down to the original callback
        return function (names, callback, scope) {
            pluginsLoad.call(this, names, function (plugins) {
                if (callback) {
                    Object.keys(plugins).forEach(function (pluginName) {
                        var plugin = plugins[pluginName];

                        if (plugin.requires) {
                            plugin.requires = filterUnwantedDependencies(plugin.requires);
                        }

                        wrapPluginLifecycle(plugin);
                    });

                    callback.call(scope, plugins);
                }
            });
        };
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_selectionregion')) {
        return;
    }

    CKEDITOR.SELECTION_TOP_TO_BOTTOM = 0;
    CKEDITOR.SELECTION_BOTTOM_TO_TOP = 1;
    CKEDITOR.SELECTION_LEFT_TO_RIGHT = 2;
    CKEDITOR.SELECTION_RIGHT_TO_LEFT = 3;

    /**
     * SelectionRegion utility class which provides metadata about the selection. The metadata may be the start and end
     * rectangles, caret region, etc. **This class is not intended to be used standalone. Its functions will
     * be merged into each editor instance, so the developer may use them directly via the editor, without making
     * an instance of this class**.
     *
     * @class SelectionRegion
     * @constructor
     */
    function SelectionRegion() {}

    SelectionRegion.prototype = {
        constructor: SelectionRegion,

        /**
         * Creates selection from two points in page coordinates.
         *
         * @instance
         * @memberof SelectionRegion
         * @method createSelectionFromPoint
         * @param {Number} x X point in page coordinates.
         * @param {Number} y Y point in page coordinates.
         */
        createSelectionFromPoint: function createSelectionFromPoint(x, y) {
            this.createSelectionFromRange(x, y, x, y);
        },

        /**
         * Creates selection from range. A range consists from two points in page coordinates.
         *
         * @instance
         * @memberof SelectionRegion
         * @method createSelectionFromRange
         * @param {Number} startX X coordinate of the first point.
         * @param {Number} startY Y coordinate of the first point.
         * @param {Number} endX X coordinate of the second point.
         * @param {Number} endY Y coordinate of the second point.
         */
        createSelectionFromRange: function createSelectionFromRange(startX, startY, endX, endY) {
            var end;
            var endContainer;
            var endOffset;
            var range;
            var start;
            var startContainer;
            var startOffset;

            if (typeof document.caretPositionFromPoint === 'function') {
                start = document.caretPositionFromPoint(startX, startY);
                end = document.caretPositionFromPoint(endX, endY);

                startContainer = start.offsetNode;
                endContainer = end.offsetNode;

                startOffset = start.offset;
                endOffset = end.offset;

                range = this.createRange();
            } else if (typeof document.caretRangeFromPoint === 'function') {
                start = document.caretRangeFromPoint(startX, startY);
                end = document.caretRangeFromPoint(endX, endY);

                startContainer = start.startContainer;
                endContainer = end.startContainer;

                startOffset = start.startOffset;
                endOffset = end.startOffset;

                range = this.createRange();
            }

            if (range && document.getSelection) {
                range.setStart(new CKEDITOR.dom.node(startContainer), startOffset);
                range.setEnd(new CKEDITOR.dom.node(endContainer), endOffset);

                this.getSelection().selectRanges([range]);
            } else if (typeof document.body.createTextRange === 'function') {
                var selection = this.getSelection();

                selection.unlock();

                range = document.body.createTextRange();
                range.moveToPoint(startX, startY);

                var endRange = range.duplicate();
                endRange.moveToPoint(endX, endY);

                range.setEndPoint('EndToEnd', endRange);
                range.select();

                this.getSelection().lock();
            }
        },

        /**
         * Returns the region of the current position of the caret. The points are in page coordinates.
         *
         * @instance
         * @memberof SelectionRegion
         * @method getCaretRegion
         * @return {Object} Returns object with the following properties:
         * - bottom
         * - left
         * - right
         * - top
         */
        getCaretRegion: function getCaretRegion() {
            var selection = this.getSelection();

            var region = {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0
            };

            var bookmarks = selection.createBookmarks();

            if (!bookmarks.length) {
                return region;
            }

            var bookmarkNodeEl = bookmarks[0].startNode.$;

            bookmarkNodeEl.style.display = 'inline-block';

            region = new CKEDITOR.dom.element(bookmarkNodeEl).getClientRect();

            bookmarkNodeEl.parentNode.removeChild(bookmarkNodeEl);

            var scrollPos = new CKEDITOR.dom.window(window).getScrollPosition();

            region.bottom = scrollPos.y + region.bottom;
            region.left = scrollPos.x + region.left;
            region.right = scrollPos.x + region.right;
            region.top = scrollPos.y + region.top;

            return region;
        },

        /**
         * Returns data for the current selection.
         *
         * @instance
         * @memberof SelectionRegion
         * @method getSelectionData
         * @return {Object|null} Returns an object with the following data:
         * - element - The currently selected element, if any
         * - text - The selected text
         * - region - The data, returned from {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getSelectionRegion:method"}}{{/crossLink}}
         */
        getSelectionData: function getSelectionData() {
            var selection = this.getSelection();

            if (!selection.getNative()) {
                return null;
            }

            var result = {
                element: selection.getSelectedElement(),
                text: selection.getSelectedText()
            };

            result.region = this.getSelectionRegion(selection);

            return result;
        },

        /**
         * Returns the region of the current selection.
         *
         * @instance
         * @memberof SelectionRegion
         * @method getSelectionRegion
         * @return {Object} Returns object which is being returned from
         * {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getClientRectsRegion:method"}}{{/crossLink}} with three more properties:
         * - direction - the direction of the selection. Can be one of these:
         *   1. CKEDITOR.SELECTION_TOP_TO_BOTTOM
         *   2. CKEDITOR.SELECTION_BOTTOM_TO_TOP
         * - height - The height of the selection region
         * - width - The width of the selection region
         */
        getSelectionRegion: function getSelectionRegion() {
            var region = this.getClientRectsRegion();

            region.direction = this.getSelectionDirection();

            region.height = region.bottom - region.top;
            region.width = region.right - region.left;

            return region;
        },

        /**
         * Returns true if the current selection is empty, false otherwise.
         *
         * @instance
         * @memberof SelectionRegion
         * @method isSelectionEmpty
         * @return {Boolean} Returns true if the current selection is empty, false otherwise.
         */
        isSelectionEmpty: function isSelectionEmpty() {
            var ranges;

            var selection = this.getSelection();

            return selection.getType() === CKEDITOR.SELECTION_NONE || (ranges = selection.getRanges()) && ranges.length === 1 && ranges[0].collapsed;
        },

        /**
         * Returns object with data about the [client rectangles](https://developer.mozilla.org/en-US/docs/Web/API/Element.getClientRects) of the selection,
         * normalized across browses. All offsets below are in page coordinates.
         *
         * @instance
         * @memberof SelectionRegion
         * @method getClientRectsRegion
         * @return {Object} Returns object with the following data:
         * - bottom - bottom offset of all client rectangles
         * - left - left offset of all client rectangles
         * - right - right offset of all client rectangles
         * - top - top offset of all client rectangles
         * - startRect - An Object, which contains the following information:
         *     + bottom - bottom offset
         *     + height - the height of the rectangle
         *     + left - left offset of the selection
         *     + right - right offset of the selection
         *     + top - top offset of the selection
         *     + width - the width of the rectangle
         * - endRect - An Object, which contains the following information:
         *     + bottom - bottom offset
         *     + height - the height of the rectangle
         *     + left - left offset of the selection
         *     + right - right offset of the selection
         *     + top - top offset of the selection
         *     + width - the width of the rectangle
         *
         * If there is no native selection, the objects will be filled with 0.
         */
        getClientRectsRegion: function getClientRectsRegion() {
            var selection = this.getSelection();
            var nativeSelection = selection.getNative();

            var defaultRect = {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
            };

            var region = {
                bottom: 0,
                endRect: defaultRect,
                left: 0,
                right: 0,
                top: 0,
                startRect: defaultRect
            };

            if (!nativeSelection) {
                return region;
            }

            var bottom = 0;
            var clientRects;
            var left = Infinity;
            var rangeCount;
            var right = -Infinity;
            var top = Infinity;

            if (nativeSelection.createRange) {
                clientRects = nativeSelection.createRange().getClientRects();
            } else {
                rangeCount = nativeSelection.rangeCount;
                clientRects = nativeSelection.rangeCount > 0 ? nativeSelection.getRangeAt(0).getClientRects() : [];
            }

            if (clientRects.length === 0) {
                region = this.getCaretRegion();
            } else {
                for (var i = 0, length = clientRects.length; i < length; i++) {
                    var item = clientRects[i];

                    if (item.left < left) {
                        left = item.left;
                    }

                    if (item.right > right) {
                        right = item.right;
                    }

                    if (item.top < top) {
                        top = item.top;
                    }

                    if (item.bottom > bottom) {
                        bottom = item.bottom;
                    }
                }

                var scrollPos = new CKEDITOR.dom.window(window).getScrollPosition();

                region.bottom = scrollPos.y + bottom;
                region.left = scrollPos.x + left;
                region.right = scrollPos.x + right;
                region.top = scrollPos.y + top;

                if (clientRects.length) {
                    var endRect = clientRects[clientRects.length - 1];
                    var startRect = clientRects[0];

                    region.endRect = {
                        bottom: scrollPos.y + endRect.bottom,
                        height: endRect.height,
                        left: scrollPos.x + endRect.left,
                        right: scrollPos.x + endRect.right,
                        top: scrollPos.y + endRect.top,
                        width: endRect.width
                    };

                    region.startRect = {
                        bottom: scrollPos.y + startRect.bottom,
                        height: startRect.height,
                        left: scrollPos.x + startRect.left,
                        right: scrollPos.x + startRect.right,
                        top: scrollPos.y + startRect.top,
                        width: startRect.width
                    };
                }
            }

            return region;
        },

        /**
         * Retrieves the direction of the selection. The direction is from top to bottom or from bottom to top.
         * For IE < 9 it is not possible, so the direction for these browsers will be always CKEDITOR.SELECTION_TOP_TO_BOTTOM.
         *
         * @instance
         * @memberof SelectionRegion
         * @method getSelectionDirection
         * @return {Number} Returns a number which represents selection direction. It might be one of these:
         * - CKEDITOR.SELECTION_TOP_TO_BOTTOM;
         * - CKEDITOR.SELECTION_BOTTOM_TO_TOP;
         */
        getSelectionDirection: function getSelectionDirection() {
            var direction = CKEDITOR.SELECTION_TOP_TO_BOTTOM;
            var selection = this.getSelection();
            var nativeSelection = selection.getNative();

            if (!nativeSelection) {
                return direction;
            }

            var anchorNode;

            if ((anchorNode = nativeSelection.anchorNode) && anchorNode.compareDocumentPosition) {
                var position = anchorNode.compareDocumentPosition(nativeSelection.focusNode);

                if (!position && nativeSelection.anchorOffset > nativeSelection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
                    direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP;
                }
            }

            return direction;
        }
    };

    CKEDITOR.plugins.add('ae_selectionregion', {
        init: function init(editor) {
            var attr, hasOwnProperty;

            hasOwnProperty = Object.prototype.hasOwnProperty;

            for (attr in SelectionRegion.prototype) {
                if (hasOwnProperty.call(SelectionRegion.prototype, attr) && typeof editor[attr] === 'undefined') {
                    editor[attr] = SelectionRegion.prototype[attr];
                }
            }
        }
    });
})();
'use strict';

(function () {
    'use strict';

    var IE_NON_DIRECTLY_EDITABLE_ELEMENT = {
        'table': 1,
        'col': 1,
        'colgroup': 1,
        'tbody': 1,
        'td': 1,
        'tfoot': 1,
        'th': 1,
        'thead': 1,
        'tr': 1
    };

    /**
     * Table class utility. Provides methods for create, delete and update tables.
     *
     * @class CKEDITOR.Table
     * @constructor
     * @param {Object} editor The CKEditor instance.
     */

    function Table(editor) {
        this._editor = editor;
    }

    Table.HEADING_BOTH = 'Both';
    Table.HEADING_COL = 'Column';
    Table.HEADING_NONE = 'None';
    Table.HEADING_ROW = 'Row';

    Table.prototype = {
        constructor: Table,

        /**
         * Creates a table.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method create
         * @param {Object} config Table configuration object
         * @return {Object} The created table
         */
        create: function create(config) {
            var editor = this._editor;
            var table = this._createElement('table');

            config = config || {};

            // Generate the rows and cols.
            var tbody = table.append(this._createElement('tbody'));
            var rows = config.rows || 1;
            var cols = config.cols || 1;

            for (var i = 0; i < rows; i++) {
                var row = tbody.append(this._createElement('tr'));
                for (var j = 0; j < cols; j++) {
                    var cell = row.append(this._createElement('td'));

                    cell.appendBogus();
                }
            }

            this.setAttributes(table, config.attrs);
            this.setHeading(table, config.heading);

            // Insert the table element if we're creating one.
            editor.insertElement(table);

            var firstCell = new CKEDITOR.dom.element(table.$.rows[0].cells[0]);
            var range = editor.createRange();
            range.moveToPosition(firstCell, CKEDITOR.POSITION_AFTER_START);
            range.select();

            return table;
        },

        /**
         * Retrieves a table from the current selection.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method getFromSelection
         * @return {CKEDITOR.dom.element} The retrieved table or null if not found.
         */
        getFromSelection: function getFromSelection() {
            var table;
            var selection = this._editor.getSelection();
            var selected = selection.getSelectedElement();

            if (selected && selected.is('table')) {
                table = selected;
            } else {
                var ranges = selection.getRanges();

                if (ranges.length > 0) {
                    // Webkit could report the following range on cell selection (#4948):
                    // <table><tr><td>[&nbsp;</td></tr></table>]

                    /* istanbul ignore else */
                    if (CKEDITOR.env.webkit) {
                        ranges[0].shrink(CKEDITOR.NODE_ELEMENT);
                    }

                    table = this._editor.elementPath(ranges[0].getCommonAncestor(true)).contains('table', 1);
                }
            }

            return table;
        },

        /**
         * Checks if a given table can be considered as editable. This method
         * workarounds a limitation of IE where for some elements (like table),
         * `isContentEditable` returns always false. This is because IE does not support
         * `contenteditable` on such elements. However, despite such elements
         * cannot be set as content editable directly, a content editable SPAN,
         * or DIV element can be placed inside the individual table cells.
         * See https://msdn.microsoft.com/en-us/library/ms537837%28v=VS.85%29.aspx
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method isEditable
         * @param {CKEDITOR.dom.element} el The table element to test if editable
         * @return {Boolean}
         */
        isEditable: function isEditable(el) {
            if (!CKEDITOR.env.ie || !el.is(IE_NON_DIRECTLY_EDITABLE_ELEMENT)) {
                return !el.isReadOnly();
            }

            if (el.hasAttribute('contenteditable')) {
                return el.getAttribute('contenteditable') !== 'false';
            }

            return this.isEditable(el.getParent());
        },

        /**
         * Returns which heading style is set for the given table.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method getHeading
         * @param {CKEDITOR.dom.element} table The table to gather the heading from. If null, it will be retrieved from the current selection.
         * @return {String} The heading of the table. Expected values are `CKEDITOR.Table.NONE`, `CKEDITOR.Table.ROW`, `CKEDITOR.Table.COL` and `CKEDITOR.Table.BOTH`.
         */
        getHeading: function getHeading(table) {
            table = table || this.getFromSelection();

            if (!table) {
                return null;
            }

            var rowHeadingSettings = table.$.tHead !== null;

            var colHeadingSettings = true;

            // Check if all of the first cells in every row are TH
            for (var row = 0; row < table.$.rows.length; row++) {
                // If just one cell isn't a TH then it isn't a header column
                var cell = table.$.rows[row].cells[0];

                if (cell && cell.nodeName.toLowerCase() !== 'th') {
                    colHeadingSettings = false;
                    break;
                }
            }

            var headingSettings = Table.HEADING_NONE;

            if (rowHeadingSettings) {
                headingSettings = Table.HEADING_ROW;
            }

            if (colHeadingSettings) {
                headingSettings = headingSettings === Table.HEADING_ROW ? Table.HEADING_BOTH : Table.HEADING_COL;
            }

            return headingSettings;
        },

        /**
         * Removes a table from the editor.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method remove
         * @param {CKEDITOR.dom.element} table The table element which table style should be removed.
         */
        remove: function remove(table) {
            var editor = this._editor;

            if (table) {
                table.remove();
            } else {
                table = editor.elementPath().contains('table', 1);

                if (table) {
                    // If the table's parent has only one child remove it as well (unless it's a table cell, or the editable element) (#5416, #6289, #12110)
                    var parent = table.getParent();
                    var editable = editor.editable();

                    if (parent.getChildCount() === 1 && !parent.is('td', 'th') && !parent.equals(editable)) {
                        table = parent;
                    }

                    var range = editor.createRange();
                    range.moveToPosition(table, CKEDITOR.POSITION_BEFORE_START);
                    table.remove();
                    range.select();
                }
            }
        },

        /**
         * Assigns provided attributes to a table.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method setAttributes
         * @param {Object} table The table to which the attributes should be assigned
         * @param {Object} attrs The attributes which have to be assigned to the table
         */
        setAttributes: function setAttributes(table, attrs) {
            if (attrs) {
                Object.keys(attrs).forEach(function (attr) {
                    table.setAttribute(attr, attrs[attr]);
                });
            }
        },

        /**
         * Sets the appropriate table heading style to a table.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @method setHeading
         * @param {CKEDITOR.dom.element} table The table element to which the heading should be set. If null, it will be retrieved from the current selection.
         * @param {String} heading The table heading to be set. Accepted values are: `CKEDITOR.Table.NONE`, `CKEDITOR.Table.ROW`, `CKEDITOR.Table.COL` and `CKEDITOR.Table.BOTH`.
         */
        setHeading: function setHeading(table, heading) {
            table = table || this.getFromSelection();

            var i, newCell;
            var tableHead;
            var tableBody = table.getElementsByTag('tbody').getItem(0);

            var tableHeading = this.getHeading(table);
            var hadColHeading = tableHeading === Table.HEADING_COL || tableHeading === Table.HEADING_BOTH;

            var needColHeading = heading === Table.HEADING_COL || heading === Table.HEADING_BOTH;
            var needRowHeading = heading === Table.HEADING_ROW || heading === Table.HEADING_BOTH;

            // If we need row heading and don't have a <thead> element yet, move the
            // first row of the table to the head and convert the nodes to <th> ones.
            if (!table.$.tHead && needRowHeading) {
                var tableFirstRow = tableBody.getElementsByTag('tr').getItem(0);
                var tableFirstRowChildCount = tableFirstRow.getChildCount();

                // Change TD to TH:
                for (i = 0; i < tableFirstRowChildCount; i++) {
                    var cell = tableFirstRow.getChild(i);

                    // Skip bookmark nodes. (#6155)
                    if (cell.type === CKEDITOR.NODE_ELEMENT && !cell.data('cke-bookmark')) {
                        cell.renameNode('th');
                        cell.setAttribute('scope', 'col');
                    }
                }

                tableHead = this._createElement(table.$.createTHead());
                tableHead.append(tableFirstRow.remove());
            }

            // If we don't need row heading and we have a <thead> element, move the
            // row out of there and into the <tbody> element.
            if (table.$.tHead !== null && !needRowHeading) {
                // Move the row out of the THead and put it in the TBody:
                tableHead = this._createElement(table.$.tHead);

                var previousFirstRow = tableBody.getFirst();

                while (tableHead.getChildCount() > 0) {
                    var newFirstRow = tableHead.getFirst();
                    var newFirstRowChildCount = newFirstRow.getChildCount();

                    for (i = 0; i < newFirstRowChildCount; i++) {
                        newCell = newFirstRow.getChild(i);

                        if (newCell.type === CKEDITOR.NODE_ELEMENT) {
                            newCell.renameNode('td');
                            newCell.removeAttribute('scope');
                        }
                    }

                    newFirstRow.insertBefore(previousFirstRow);
                }

                tableHead.remove();
            }

            tableHeading = this.getHeading(table);
            var hasColHeading = tableHeading === Table.HEADING_COL || tableHeading === Table.HEADING_BOTH;

            // If we need column heading and the table doesn't have it, convert every first cell in
            // every row into a `<th scope="row">` element.
            if (!hasColHeading && needColHeading) {
                for (i = 0; i < table.$.rows.length; i++) {
                    if (table.$.rows[i].cells[0].nodeName.toLowerCase() !== 'th') {
                        newCell = new CKEDITOR.dom.element(table.$.rows[i].cells[0]);
                        newCell.renameNode('th');
                        newCell.setAttribute('scope', 'row');
                    }
                }
            }

            // If we don't need column heading but the table has it, convert every first cell in every
            // row back into a `<td>` element.
            if (hadColHeading && !needColHeading) {
                for (i = 0; i < table.$.rows.length; i++) {
                    var row = new CKEDITOR.dom.element(table.$.rows[i]);

                    if (row.getParent().getName() === 'tbody') {
                        newCell = new CKEDITOR.dom.element(row.$.cells[0]);
                        newCell.renameNode('td');
                        newCell.removeAttribute('scope');
                    }
                }
            }
        },

        /**
         * Creates a new CKEDITOR.dom.element using the passed tag name.
         *
         * @instance
         * @memberof CKEDITOR.Table
         * @protected
         * @method _createElement
         * @param {String} name The tag name from which an element should be created
         * @return {CKEDITOR.dom.element} Instance of CKEDITOR DOM element class
         */
        _createElement: function _createElement(name) {
            return new CKEDITOR.dom.element(name, this._editor.document);
        }
    };

    CKEDITOR.on('instanceReady', function (event) {
        var headingCommands = [Table.HEADING_NONE, Table.HEADING_ROW, Table.HEADING_COL, Table.HEADING_BOTH];

        var tableUtils = new Table(event.editor);

        headingCommands.forEach(function (heading) {
            event.editor.addCommand('tableHeading' + heading, {
                exec: function exec(editor) {
                    tableUtils.setHeading(null, heading);
                }
            });
        });
    });

    CKEDITOR.Table = CKEDITOR.Table || Table;
})();
'use strict';

(function () {
    'use strict';

    /**
     * CKEDITOR.tools class utility which adds additional methods to those of CKEditor.
     *
     * @class CKEDITOR.tools
     */

    /**
     * Sends a request using the JSONP technique.
     *
     * @memberof CKEDITOR.tools
     * @method jsonp
     * @param {CKEDITOR.template} urlTemplate The template of the URL to be requested. All properties passed in `urlParams` can be used, plus a `{callback}`, which represent a JSONP callback, must be defined.
     * @param {Function} callback A function to be called in case of success.
     * @param {Function} errorCallback A function to be called in case of failure.
     * @param {Object} urlParams Parameters to be passed to the `urlTemplate`.
     * @return {Object} An object with the following properties:
     *  - id: the transaction ID
     *  - a `cancel()` method
     * @static
     */

    CKEDITOR.tools.jsonp = function (urlTemplate, urlParams, callback, errorCallback) {
        var callbackKey = CKEDITOR.tools.getNextNumber();

        urlParams = urlParams || {};
        urlParams.callback = 'CKEDITOR._.jsonpCallbacks[' + callbackKey + ']';

        if (!CKEDITOR._.jsonpCallbacks) {
            CKEDITOR._.jsonpCallbacks = {};
        }

        CKEDITOR._.jsonpCallbacks[callbackKey] = function (response) {
            setTimeout(function () {
                cleanUp();

                callback(response);
            });
        };

        var scriptElement = new CKEDITOR.dom.element('script');
        scriptElement.setAttribute('src', urlTemplate.output(urlParams));
        scriptElement.on('error', function () {
            cleanUp();

            if (errorCallback) {
                errorCallback();
            }
        });

        function cleanUp() {
            if (scriptElement) {
                scriptElement.remove();
                delete CKEDITOR._.jsonpCallbacks[callbackKey];
                scriptElement = null;
            }
        }

        CKEDITOR.document.getBody().append(scriptElement);

        return {
            cancel: cleanUp,
            id: callbackKey
        };
    };

    /**
     * Returns a new object containing all of the properties of all the supplied
     * objects. The properties from later objects will overwrite those in earlier
     * objects.
     *
     * Passing in a single object will create a shallow copy of it.
     *
     * @memberof CKEDITOR.tools
     * @method merge
     * @param {Object} objects* One or more objects to merge.
     * @return {Object} A new merged object.
     * @static
     */
    CKEDITOR.tools.merge = CKEDITOR.tools.merge || function () {
        var result = {};

        for (var i = 0; i < arguments.length; ++i) {
            var obj = arguments[i];

            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    result[key] = obj[key];
                }
            }
        }

        return result;
    };

    /**
     * Simulates event on a DOM element.
     *
     * @memberof CKEDITOR.tools
     * @method simulate
     * @param {DOMElement} element The element on which the event shoud be simualted.
     * @param {String} event The name of the event which have to be simulated.
     * @static
     */
    CKEDITOR.tools.simulate = function (element, event) {
        var eventInstance = document.createEvent('Events');
        eventInstance.initEvent(event, true, false);
        element.dispatchEvent(eventInstance);
    };
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_uicore')) {
        return;
    }

    /**
     * UICore class which will handle user interactions with the editor. These interactions
     * might be triggered via mouse, keyboard or touch devices. The class fill fire an event via
     * CKEditor's event system - "editorInteraction". The UI may listen to this event and
     * execute some actions - for example to show/hide toolbars.
     *
     * By default if user presses the Esc key, 'editorInteraction' event won't be fired. However, this behaviour can be changed
     * by setting {{#crossLink "CKEDITOR.plugins.ae_uicore/allowEsc:attribute"}}{{/crossLink}} config property in editor's configuration to true.
     *
     * @class ae_uicore
     */

    /**
     * Fired when user interacts somehow with the browser. This may be clicking with the mouse, pressing keyboard button,
     * or touching screen. This even will be not fired after each interaction. It will be debounced. By default the timeout
     * is 50ms. This value can be overwritten via {{#crossLink "CKEDITOR.plugins.ae_uicore/timeout:attribute"}}{{/crossLink}}
     * property of editor's configuration, like: editor.config.uicore.timeout = 100
     *
     * @memberof ae_uicore
     * @event ae_uicore#editorInteraction
     * @param {Object} data An object which contains the following properties:
     * - nativeEvent - The event as received from CKEditor.
     * - selectionData - The data, returned from {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getSelectionData:method"}}{{/crossLink}}
     */

    /**
     * Fired by UI elements like Toolbars or Buttons when their state changes. The listener updates the live region with the provided data.
     *
     * @memberof ae_uicore
     * @event ae_uicore#ariaUpdate
     * @param {Object} data An object which contains the following properties:
     * - message - The provided message from the UI element.
     */

    /**
     * If set to true, the editor will still fire {{#crossLink "CKEDITOR.plugins.ae_uicore/editorInteraction:event"}}{{/crossLink}} event,
     * if user presses Esc key.
     *
     * @memberof ae_uicore
     * @attribute allowEsc
     * @default false
     * @type Boolean
     */

    /**
     * Specifies the default timeout after which the {{#crossLink "CKEDITOR.plugins.ae_uicore/editorInteraction:event"}}{{/crossLink}} event
     * will be fired.
     *
     * @memberof ae_uicore
     * @attribute timeout
     * @default 50 (ms)
     * @type Number
     */

    CKEDITOR.plugins.add('ae_uicore', {
        /**
         * Initializer lifecycle implementation for the UICore plugin.
         *
         * @memberof ae_uicore
         * @method init
         * @param {Object} editor The current CKEditor instance.
         * @protected
         */
        init: function init(editor) {
            var ariaState = [];

            var ariaElement = this._createAriaElement(editor.id);

            var uiTasksTimeout = editor.config.uicore ? editor.config.uicore.timeout : 50;

            var handleUI = CKEDITOR.tools.debounce(function (event) {
                ariaState = [];

                if (event.name !== 'keyup' || event.data.$.keyCode !== 27 || editor.config.allowEsc) {
                    var selectionData = editor.getSelectionData();

                    if (selectionData) {
                        editor.fire('editorInteraction', {
                            nativeEvent: event.data.$,
                            selectionData: selectionData
                        });
                    }
                }
            }, uiTasksTimeout);

            var handleAria = CKEDITOR.tools.debounce(function (event) {
                ariaElement.innerHTML = ariaState.join('. ');
            }, uiTasksTimeout);

            var handleMouseLeave = CKEDITOR.tools.debounce(function (event) {
                var aeUINodes = document.querySelectorAll('.ae-ui');

                var found;

                for (var i = 0; i < aeUINodes.length; i++) {
                    if (aeUINodes[i].contains(event.data.$.relatedTarget)) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    handleUI(event);
                }
            }, uiTasksTimeout);

            editor.on('ariaUpdate', function (event) {
                // handleAria is debounced function, so if it is being called multiple times, it will
                // be canceled until some time passes.
                // For that reason here we explicitly append the current message to the list of messages
                // and call handleAria. Since it is debounced, when some timeout passes,
                // all the messages will be applied to the live region and not only the last one.

                ariaState.push(event.data.message);

                handleAria();
            });

            editor.once('contentDom', function () {
                var editable = editor.editable();

                var focusHandler = editable.attachListener(editable, 'focus', function (event) {
                    focusHandler.removeListener();

                    editable.attachListener(editable, 'keyup', handleUI);
                    editable.attachListener(editable, 'mouseup', handleUI);
                    editable.attachListener(editable, 'mouseleave', handleMouseLeave);

                    handleUI(event);
                });
            });

            editor.on('destroy', function (event) {
                ariaElement.parentNode.removeChild(ariaElement);

                handleUI.detach();
            });
        },

        /**
         * Creates and applies an HTML element to the body of the document which will contain ARIA messages.
         *
         * @memberof ae_uicore
         * @method _createAriaElement
         * @param {String} id The provided id of the element. It will be used as prefix for the final element Id.
         * @protected
         * @return {HTMLElement} The created and applied to DOM element.
         */
        _createAriaElement: function _createAriaElement(id) {
            var statusElement = document.createElement('div');

            statusElement.className = 'ae-sr-only';

            statusElement.setAttribute('aria-live', 'polite');
            statusElement.setAttribute('role', 'status');
            statusElement.setAttribute('id', id + 'LiveRegion');

            document.body.appendChild(statusElement);

            return statusElement;
        }
    });
})();
'use strict';

(function () {
    'use strict';

    var isIE = CKEDITOR.env.ie;

    if (CKEDITOR.plugins.get('ae_addimages')) {
        return;
    }

    /**
     * CKEditor plugin which allows Drag&Drop of images directly into the editable area. The image will be encoded
     * as Data URI. An event `beforeImageAdd` will be fired with the list of dropped images. If any of the listeners
     * returns `false` or cancels the event, the images won't be added to the content. Otherwise,
     * an event `imageAdd` will be fired with the inserted element into the editable area.
     *
     * @class CKEDITOR.plugins.ae_addimages
     */

    /**
     * Fired before adding images to the editor.
     *
     * @event CKEDITOR.plugins.ae_addimages#beforeImageAdd
     * @instance
     * @memberof CKEDITOR.plugins.ae_addimages
     * @param {Array} imageFiles Array of image files
     */

    /**
     * Fired when an image is being added to the editor successfully.
     *
     * @event CKEDITOR.plugins.ae_addimages#imageAdd
     * @instance
     * @memberof CKEDITOR.plugins.ae_addimages
     * @param {CKEDITOR.dom.element} el The created image with src as Data URI
     * @param {File} file The image file
     */

    CKEDITOR.plugins.add('ae_addimages', {
        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'dragenter', 'dragover', 'drop' and `paste` events on the editing area.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'dragenter', this._onDragEnter, this, {
                    editor: editor
                });

                editable.attachListener(editable, 'dragover', this._onDragOver, this, {
                    editor: editor
                });

                editable.attachListener(editable, 'drop', this._onDragDrop, this, {
                    editor: editor
                });

                editable.attachListener(editable, 'paste', this._onPaste, this, {
                    editor: editor
                });
            }.bind(this));
        },

        /**
         * Accepts an array of dropped files to the editor. Then, it filters the images and sends them for further
         * processing to {{#crossLink "CKEDITOR.plugins.ae_addimages/_processFile:method"}}{{/crossLink}}
         *
         * @fires CKEDITOR.plugins.ae_addimages#beforeImageAdd
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _handleFiles
         * @param {Array} files Array of dropped files. Only the images from this list will be processed.
         * @param {Object} editor The current editor instance
         * @protected
         */
        _handleFiles: function _handleFiles(files, editor) {
            var file;
            var i;

            var imageFiles = [];

            for (i = 0; i < files.length; i++) {
                file = files[i];

                if (file.type.indexOf('image') === 0) {
                    imageFiles.push(file);
                }
            }

            var result = editor.fire('beforeImageAdd', {
                imageFiles: imageFiles
            });

            if (!!result) {
                for (i = 0; i < imageFiles.length; i++) {
                    file = imageFiles[i];

                    this._processFile(file, editor);
                }
            }

            return false;
        },

        /**
         * Handles drag drop event. The function will create a selection from the current
         * point and will send a list of files to be processed to
         * {{#crossLink "CKEDITOR.plugins.ae_addimages/_handleFiles:method"}}{{/crossLink}} method.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _onDragDrop
         * @param {CKEDITOR.dom.event} event dragdrop event, as received natively from CKEditor
         * @protected
         */
        _onDragDrop: function _onDragDrop(event) {
            var nativeEvent = event.data.$;

            var transferFiles = nativeEvent.dataTransfer.files;

            if (transferFiles.length > 0) {
                new CKEDITOR.dom.event(nativeEvent).preventDefault();

                var editor = event.listenerData.editor;

                event.listenerData.editor.createSelectionFromPoint(nativeEvent.clientX, nativeEvent.clientY);

                this._handleFiles(transferFiles, editor);
            }
        },

        /**
         * Handles drag enter event. In case of IE, this function will prevent the event.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _onDragEnter
         * @param {DOM event} event dragenter event, as received natively from CKEditor
         * @protected
         */
        _onDragEnter: function _onDragEnter(event) {
            if (isIE) {
                this._preventEvent(event);
            }
        },

        /**
         * Handles drag over event. In case of IE, this function will prevent the event.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _onDragOver
         * @param {DOM event} event dragover event, as received natively from CKEditor
         * @protected
         */
        _onDragOver: function _onDragOver(event) {
            if (isIE) {
                this._preventEvent(event);
            }
        },

        /**
         * Checks if the pasted data is image and passes it to
         * {{#crossLink "CKEDITOR.plugins.ae_addimages/_processFile:method"}}{{/crossLink}} for processing.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _onPaste
         * @param {CKEDITOR.dom.event} event A `paste` event, as received natively from CKEditor
         * @protected
         */
        _onPaste: function _onPaste(event) {
            if (event.data && event.data.$ && event.data.$.clipboardData && event.data.$.clipboardData.items && event.data.$.clipboardData.items.length > 0) {
                var pastedData = event.data.$.clipboardData.items[0];

                if (pastedData.type.indexOf('image') === 0) {
                    var imageFile = pastedData.getAsFile();

                    this._processFile(imageFile, event.listenerData.editor);
                }
            }
        },

        /**
         * Prevents a native event.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _preventEvent
         * @param {DOM event} event The event to be prevented.
         * @protected
         */
        _preventEvent: function _preventEvent(event) {
            event = new CKEDITOR.dom.event(event.data.$);

            event.preventDefault();
            event.stopPropagation();
        },

        /**
         * Processes an image file. The function creates an img element and sets as source
         * a Data URI, then fires an 'imageAdd' event via CKEditor's event system.
         *
         * @fires CKEDITOR.plugins.ae_addimages#imageAdd
         * @instance
         * @memberof CKEDITOR.plugins.ae_addimages
         * @method _preventEvent
         * @param {DOM event} event The event to be prevented.
         * @protected
         */
        _processFile: function _processFile(file, editor) {
            var reader = new FileReader();

            reader.addEventListener('loadend', function () {
                var bin = reader.result;

                var el = CKEDITOR.dom.element.createFromHtml('<img src="' + bin + '">');

                editor.insertElement(el);

                var imageData = {
                    el: el,
                    file: file
                };

                editor.fire('imageAdd', imageData);
            });

            reader.readAsDataURL(file);
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_autolink')) {
        return;
    }

    // Disables the auto URL detection feature in IE, their lacks functionality:
    // They convert the links only on space. We do on space, comma, semicolon and Enter.
    if (/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/.test(navigator.userAgent)) {
        document.execCommand('AutoUrlDetect', false, false);
    }

    var KEY_BACK = 8;

    var KEY_COMMA = 188;

    var KEY_ENTER = 13;

    var KEY_SEMICOLON = 186;

    var KEY_SPACE = 32;

    var DELIMITERS = [KEY_COMMA, KEY_ENTER, KEY_SEMICOLON, KEY_SPACE];

    var REGEX_LAST_WORD = /[^\s]+/mg;

    var REGEX_URL = /((([A - Za - z]{ 3, 9}: (?: \/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(https?\:\/\/|www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))((.*):(\d*)\/?(.*))?)/i;

    /**
     * CKEditor plugin which automatically generates links when user types text which looks like URL.
     *
     * @class CKEDITOR.plugins.ae_autolink
     * @constructor
     */
    CKEDITOR.plugins.add('ae_autolink', {

        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers the `keyup` event on the editing area.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'keyup', this._onKeyUp, this, {
                    editor: editor
                });
            }.bind(this));

            editor.on('paste', function (event) {
                var data = event.data.dataValue;

                var match = data.match(REGEX_URL);

                if (match && match.length) {
                    match = match[0];

                    var remainder = data.replace(match, '');

                    if (this._isValidURL(match)) {
                        event.data.dataValue = '<a href=\"' + match + '\">' + match + '</a>' + remainder;
                    }
                }
            }.bind(this));
        },

        /**
         * Retrieves the last word introduced by the user. Reads from the current
         * caret position backwards until it finds the first white space.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method _getLastWord
         * @protected
         * @return {String} The last word introduced by user
         */
        _getLastWord: function _getLastWord(editor) {
            var range = editor.getSelection().getRanges()[0];

            var offset = range.startOffset;

            var previousText = '';

            // The user pressed Enter, so we have to look on the previous node
            if (this._currentKeyCode === KEY_ENTER) {
                var previousNode = range.startContainer.getPrevious();

                var lastChild;

                if (previousNode) {
                    // If previous node is a SPACE, (it does not have 'getLast' method),
                    // ignore it and find the previous text node
                    while (!previousNode.getLast) {
                        previousNode = previousNode.getPrevious();
                    }

                    lastChild = previousNode.getLast();

                    // Depending on the browser, the last child node may be a <BR>
                    // (which does not have 'getText' method),
                    // so ignore it and find the previous text node
                    while (lastChild && !lastChild.getText()) {
                        lastChild = lastChild.getPrevious();
                    }
                }

                // Check if the lastChild is already a link
                if (!(lastChild && lastChild.$.href)) {
                    this._startContainer = lastChild;
                    previousText = lastChild ? lastChild.getText() : '';
                    this._offset = previousText.length;
                }
            } else {
                this._startContainer = range.startContainer;

                // Last character is the delimiter, ignore it
                previousText = this._startContainer.getText().substring(0, offset - 1);

                this._offset = offset - 1;
            }

            var lastWord = '';

            var match = previousText.match(REGEX_LAST_WORD);

            if (match) {
                lastWord = match.pop();
            }

            return lastWord;
        },

        /**
         * Checks if the given link is a valid URL.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method isValidURL
         * @param {String} link The link we want to know if it is a valid URL
         * @protected
         * @return {Boolean} Returns true if the link is a valid URL, false otherwise
         */
        _isValidURL: function _isValidURL(link) {
            return REGEX_URL.test(link);
        },

        /**
         * Listens to the `keydown` event and if the keycode is `Backspace`, removes the previously
         * created link.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method _onKeyDown
         * @param {EventFacade} event EventFacade object
         * @protected
         */
        _onKeyDown: function _onKeyDown(event) {
            var nativeEvent = event.data.$;

            var editor = event.listenerData.editor;

            var editable = editor.editable();

            editable.removeListener('keydown', this._onKeyDown);

            if (nativeEvent.keyCode === KEY_BACK) {
                event.cancel();
                event.data.preventDefault();

                this._removeLink(editor);
            }

            this._ckLink = null;
        },

        /**
         * Listens to the `Enter` and `Space` key events in order to check if the last word
         * introduced by the user should be replaced by a link element.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method _onKeyUp
         * @param {EventFacade} event EventFacade object
         * @protected
         */
        _onKeyUp: function _onKeyUp(event) {
            var nativeEvent = event.data.$;

            this._currentKeyCode = nativeEvent.keyCode;

            if (DELIMITERS.indexOf(this._currentKeyCode) !== -1) {
                var editor = event.listenerData.editor;

                var lastWord = this._getLastWord(editor);

                if (this._isValidURL(lastWord)) {
                    this._replaceContentByLink(editor, lastWord);
                }
            }
        },

        /**
         * Replaces content by a link element.
         *
         * @fires CKEDITOR.plugins.ae_autolink#autolinkAdd
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method _replaceContentByLink
         * @param {String} content The text that has to be replaced by an link element
         * @protected
         */
        _replaceContentByLink: function _replaceContentByLink(editor, content) {
            var range = editor.createRange();
            var node = CKEDITOR.dom.element.get(this._startContainer);
            var offset = this._offset;

            // Select the content, so CKEDITOR.Link can properly replace it
            range.setStart(node, offset - content.length);
            range.setEnd(node, offset);
            range.select();

            var ckLink = new CKEDITOR.Link(editor);
            ckLink.create(content);
            this._ckLink = ckLink;

            var linkNode = ckLink.getFromSelection();
            editor.fire('autolinkAdd', linkNode);

            this._subscribeToKeyEvent(editor);

            // Now range is on the link and it is selected. We have to
            // return focus to the caret position.
            range = editor.getSelection().getRanges()[0];

            // If user pressed `Enter`, get the next editable node at position 0,
            // otherwise set the cursor at the next character of the link (the white space)
            if (this._currentKeyCode === KEY_ENTER) {
                var nextEditableNode = range.getNextEditableNode();

                range.setStart(nextEditableNode, 0);
                range.setEnd(nextEditableNode, 0);
            } else {
                var nextNode = range.getNextNode();

                range.setStart(nextNode, 1);
                range.setEnd(nextNode, 1);
            }

            range.select();
        },

        /**
         * Fired when a URL is detected in text and converted to a link.
         *
         * @event CKEDITOR.plugins.ae_autolink#autolinkAdd
         * @memberof CKEDITOR.plugins.ae_autolink
         * @param {CKEDITOR.dom.element} el Node of the created link.
         */

        /**
         * Removes the created link element, and replaces it by its text.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method _removeLink
         * @protected
         */
        _removeLink: function _removeLink(editor) {
            var range = editor.getSelection().getRanges()[0];
            var caretOffset = range.startOffset;

            // Select the link, so CKEDITOR.Link can properly remove it
            var linkNode = this._startContainer.getNext() || this._startContainer;

            var newRange = editor.createRange();
            newRange.setStart(linkNode, 0);
            newRange.setEndAfter(linkNode);
            newRange.select();

            this._ckLink.remove();

            // Return focus to the caret position
            range.setEnd(range.startContainer, caretOffset);
            range.setStart(range.startContainer, caretOffset);

            range.select();
        },

        /**
         * Subscribe to a key event of the editable aria.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolink
         * @method _subscribeToKeyEvent
         * @protected
         */
        _subscribeToKeyEvent: function _subscribeToKeyEvent(editor) {
            var editable = editor.editable();

            // Change the priority of keydown listener - 1 means the highest priority.
            // In Chrome on pressing `Enter` the listener is not being invoked.
            // See http://dev.ckeditor.com/ticket/11861 for more information.
            editable.attachListener(editable, 'keydown', this._onKeyDown, this, {
                editor: editor
            }, 1);
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_autolist')) {
        return;
    }

    var KEY_BACK = 8;

    var KEY_SPACE = 32;

    var DEFAULT_CONFIG = [{
        regex: /^\*$/,
        type: 'bulletedlist'
    }, {
        regex: /^1\.$/,
        type: 'numberedlist'
    }];

    /**
        * CKEditor plugin which automatically generates ordered/unordered list when user types text which looks like a list.
        *
        * @class CKEDITOR.plugins.ae_autolist
        * @constructor
        */
    CKEDITOR.plugins.add('ae_autolist', {

        /**
         * Initialization of the plugin, part of CKeditor plugin lifecycle.
         * The function registers the `keydown` event on the content editing area.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolist
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'keydown', this._onKeyDown, this, {
                    editor: editor
                });
            }.bind(this));
        },

        /**
         * Checks for pressing the `Backspace` key in order to undo the list creation.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolist
         * @method _checkForBackspaceAndUndo
         * @param {Event} event Event object
         * @protected
         */
        _checkForBackspaceAndUndo: function _checkForBackspaceAndUndo(event) {
            var editor = event.listenerData.editor;

            var nativeEvent = event.data.$;

            var editable = editor.editable();

            editable.removeListener('keydown', this._checkForBackspaceAndUndo);

            if (nativeEvent.keyCode === KEY_BACK) {
                editor.execCommand('undo');
                editor.insertHtml(event.listenerData.bullet + '&nbsp;');
                event.data.preventDefault();
            }
        },

        /**
         * Checks current line to find match with MATCHES object to create OL or UL.
         *
         * @instance
         * @memberof CKEDITOR.plugins.ae_autolist
         * @method _checkLine
         * @param {editor} Editor object
         * @protected
         * @return {Object|null} Returns an object which contains the detected list config if any
         */
        _getListConfig: function _getListConfig(editor) {
            var configRegex = editor.config.autolist || DEFAULT_CONFIG;

            var range = editor.getSelection().getRanges()[0];

            var textContainer = range.endContainer.getText();

            var bullet = textContainer.substring(0, range.startOffset);

            var text = textContainer.substring(range.startOffset, textContainer.length);

            var index = 0;

            var regexLen = configRegex.length;

            var autolistCfg = null;

            while (!autolistCfg && regexLen > index) {
                var regexItem = configRegex[index];

                if (regexItem.regex.test(bullet)) {
                    autolistCfg = {
                        bullet: bullet,
                        editor: editor,
                        text: text,
                        type: regexItem.type
                    };

                    break;
                }

                index++;
            }

            return autolistCfg;
        },

        /**
                  * Create list with different types: Bulleted or Numbered list
                  *
                  * @instance
                  * @memberof CKEDITOR.plugins.ae_autolist
                  * @method _createList
                  * @param {Object} listConfig Object that contains bullet, text and type for creating the list
                  * @protected
         */
        _createList: function _createList(listConfig) {
            var editor = listConfig.editor;

            var range = editor.getSelection().getRanges()[0];

            range.endContainer.setText(listConfig.text);
            editor.execCommand(listConfig.type);

            var editable = editor.editable();

            // Subscribe to keydown in order to check if the next key press is `Backspace`.
            // If so, the creation of the list will be discarded.
            editable.attachListener(editable, 'keydown', this._checkForBackspaceAndUndo, this, {
                editor: editor,
                bullet: listConfig.bullet
            }, 1);
        },

        /**
                  * Listens to the `Space` key events to check if the last word
                  * introduced by the user should be replaced by a list (OL or UL)
                  *
                  * @instance
                  * @memberof CKEDITOR.plugins.ae_autolist
                  * @method _onKeyDown
                  * @param {Event} event Event object
                  * @protected
                  */
        _onKeyDown: function _onKeyDown(event) {
            var nativeEvent = event.data.$;

            if (nativeEvent.keyCode === KEY_SPACE) {
                var listConfig = this._getListConfig(event.listenerData.editor);

                if (listConfig) {
                    event.data.preventDefault();
                    this._createList(listConfig);
                }
            }
        }
    });
})();
'use strict';

/**
 * CKEditor plugin: Dragable image resizing
 * https://github.com/sstur/ck-dragresize
 * - Shows semi-transparent overlay while resizing
 * - Enforces Aspect Ratio (unless holding shift)
 * - Snap to size of other images in editor
 * - Escape while dragging cancels resize
 */
(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_dragresize')) {
        return;
    }

    var IMAGE_HANDLES = {
        both: ['tl', 'tm', 'tr', 'lm', 'rm', 'bl', 'bm', 'br'],
        height: ['tl', 'tm', 'tr', 'bl', 'bm', 'br'],
        scale: ['tl', 'tr', 'bl', 'br'],
        width: ['tl', 'tr', 'lm', 'rm', 'bl', 'br']
    };

    var POSITION_ELEMENT_FN = {
        bl: function bl(handle, left, top, box) {
            positionElement(handle, -3 + left, box.height - 4 + top);
        },
        bm: function bm(handle, left, top, box) {
            positionElement(handle, Math.round(box.width / 2) - 3 + left, box.height - 4 + top);
        },
        br: function br(handle, left, top, box) {
            positionElement(handle, box.width - 4 + left, box.height - 4 + top);
        },
        lm: function lm(handle, left, top, box) {
            positionElement(handle, -3 + left, Math.round(box.height / 2) - 3 + top);
        },
        tl: function tl(handle, left, top, box) {
            positionElement(handle, left - 3, top - 3);
        },
        tm: function tm(handle, left, top, box) {
            positionElement(handle, Math.round(box.width / 2) - 3 + left, -3 + top);
        },
        tr: function tr(handle, left, top, box) {
            positionElement(handle, box.width - 4 + left, -3 + top);
        },
        rm: function rm(handle, left, top, box) {
            positionElement(handle, box.width - 4 + left, Math.round(box.height / 2) - 3 + top);
        }
    };

    var IMAGE_SNAP_TO_SIZE = 7;

    var isFirefox = 'MozAppearance' in document.documentElement.style;

    var isWebKit = 'WebkitAppearance' in document.documentElement.style;

    var enablePlugin = isWebKit || isFirefox;

    if (enablePlugin) {
        // CSS is added in a compressed form
        CKEDITOR.addCss('img::selection{color:rgba(0,0,0,0)}img.ckimgrsz{outline:1px dashed #000}#ckimgrsz{position:absolute;width:0;height:0;cursor:default;z-index:10001}#ckimgrsz span{display:none;position:absolute;top:0;left:0;width:0;height:0;background-size:100% 100%;opacity:.65;outline:1px dashed #000}#ckimgrsz i{position:absolute;display:block;width:5px;height:5px;background:#fff;border:1px solid #000}#ckimgrsz i.active,#ckimgrsz i:hover{background:#000}#ckimgrsz i.br,#ckimgrsz i.tl{cursor:nwse-resize}#ckimgrsz i.bm,#ckimgrsz i.tm{cursor:ns-resize}#ckimgrsz i.bl,#ckimgrsz i.tr{cursor:nesw-resize}#ckimgrsz i.lm,#ckimgrsz i.rm{cursor:ew-resize}body.dragging-br,body.dragging-br *,body.dragging-tl,body.dragging-tl *{cursor:nwse-resize!important}body.dragging-bm,body.dragging-bm *,body.dragging-tm,body.dragging-tm *{cursor:ns-resize!important}body.dragging-bl,body.dragging-bl *,body.dragging-tr,body.dragging-tr *{cursor:nesw-resize!important}body.dragging-lm,body.dragging-lm *,body.dragging-rm,body.dragging-rm *{cursor:ew-resize!important}');
    }

    /**
     * Initializes the plugin
     */
    CKEDITOR.plugins.add('ae_dragresize', {
        onLoad: function onLoad() {
            if (!enablePlugin) {
                return;
            }
        },
        init: function init(editor) {
            if (!enablePlugin) {
                return;
            }

            editor.once('contentDom', function (evt) {
                _init(editor);
            });
        }
    });

    function _init(editor) {
        var window = editor.window.$,
            document = editor.document.$;

        if (isFirefox) {
            // Disable the native image resizing
            document.execCommand('enableObjectResizing', false, false);
        }

        var snapToSize = typeof IMAGE_SNAP_TO_SIZE === 'undefined' ? null : IMAGE_SNAP_TO_SIZE;

        editor.config.imageScaleResize = editor.config.imageScaleResize || 'both';

        var resizer = new Resizer(editor, {
            imageScaleResize: editor.config.imageScaleResize,
            snapToSize: snapToSize
        });

        var mouseDownListener = function mouseDownListener(e) {
            if (resizer.isHandle(e.target)) {
                resizer.initDrag(e);
            }
        };

        document.addEventListener('mousedown', mouseDownListener, false);

        function selectionChange() {
            var selection = editor.getSelection();

            if (!selection) return;
            // If an element is selected and that element is an IMG
            if (selection.getType() !== CKEDITOR.SELECTION_NONE && selection.getStartElement().is('img')) {
                // And we're not right or middle clicking on the image
                if (!window.event || !window.event.button || window.event.button === 0) {
                    resizer.show(selection.getStartElement().$);
                }
            } else {
                resizer.hide();
            }
        }

        editor.on('selectionChange', selectionChange);

        editor.on('getData', function (e) {
            var html = e.data.dataValue || '';
            html = html.replace(/<div id="ckimgrsz"([\s\S]*?)<\/div>/i, '');
            html = html.replace(/\b(ckimgrsz)\b/g, '');
            e.data.dataValue = html;
        });

        editor.on('beforeUndoImage', function () {
            // Remove the handles before undo images are saved
            resizer.hide();
        });

        editor.on('afterUndoImage', function () {
            // Restore the handles after undo images are saved
            selectionChange();
        });

        editor.on('blur', function () {
            // Remove the handles when editor loses focus
            resizer.hide();
        });

        editor.on('beforeModeUnload', function self() {
            editor.removeListener('beforeModeUnload', self);
            resizer.hide();
        });

        editor.on('destroy', function () {
            var resizeElement = document.getElementById('ckimgrsz');

            if (resizeElement) {
                resizeElement.remove();
            }

            if (isFirefox) {
                document.execCommand('enableObjectResizing', false, true);
            }

            document.removeEventListener('mousedown', mouseDownListener);
        });

        // Update the selection when the browser window is resized
        var resizeTimeout;
        editor.window.on('resize', function () {
            // Cancel any resize waiting to happen
            clearTimeout(resizeTimeout);
            // Delay resize to "debounce"
            resizeTimeout = setTimeout(selectionChange, 50);
        });
    }

    function Resizer(editor, cfg) {
        this.editor = editor;
        this.window = editor.window.$;
        this.document = editor.document.$;
        this.cfg = cfg || {};
        this.init();
    }

    Resizer.prototype = {
        init: function init() {
            var instance = this;

            var container = this.container = this.document.createElement('div');

            container.id = 'ckimgrsz';
            this.preview = this.document.createElement('span');
            container.appendChild(this.preview);

            var handles = this.handles = {};

            IMAGE_HANDLES[this.cfg.imageScaleResize].forEach(function (handleName, index) {
                handles[handleName] = instance.handles[handleName] = instance.createHandle(handleName);
            });

            for (var n in handles) {
                container.appendChild(handles[n]);
            }
        },
        createHandle: function createHandle(name) {
            var el = this.document.createElement('i');
            el.classList.add(name);
            return el;
        },
        isHandle: function isHandle(el) {
            var handles = this.handles;
            for (var n in handles) {
                if (handles[n] === el) {
                    return true;
                }
            }
            return false;
        },
        show: function show(el) {
            this.el = el;
            if (this.cfg.snapToSize) {
                this.otherImages = toArray(this.document.getElementsByTagName('img'));
                this.otherImages.splice(this.otherImages.indexOf(el), 1);
            }
            var box = this.box = getBoundingBox(this.window, el);
            positionElement(this.container, box.left, box.top);
            this.document.body.appendChild(this.container);
            this.el.classList.add('ckimgrsz');
            this.showHandles();
        },
        hide: function hide() {
            // Remove class from all img.ckimgrsz
            var elements = this.document.getElementsByClassName('ckimgrsz');
            for (var i = 0; i < elements.length; ++i) {
                elements[i].classList.remove('ckimgrsz');
            }
            this.hideHandles();
            if (this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        },
        initDrag: function initDrag(e) {
            if (e.button !== 0) {
                //right-click or middle-click
                return;
            }
            var resizer = this;
            var drag = new DragEvent(this.window, this.document);
            drag.onStart = function () {
                resizer.showPreview();
                resizer.isDragging = true;
                resizer.editor.getSelection().lock();
            };
            drag.onDrag = function () {
                resizer.calculateSize(this);
                resizer.updatePreview();
                var box = resizer.previewBox;
                resizer.updateHandles(box, box.left, box.top);
            };
            drag.onRelease = function () {
                resizer.isDragging = false;
                resizer.hidePreview();
                resizer.hide();
                resizer.editor.getSelection().unlock();
                // Save an undo snapshot before the image is permanently changed
                resizer.editor.fire('saveSnapshot');
            };
            drag.onComplete = function () {
                resizer.resizeComplete();
                // Save another snapshot after the image is changed
                resizer.editor.fire('saveSnapshot');
            };
            drag.start(e);
        },
        updateHandles: function updateHandles(box, left, top) {
            left = left || 0;
            top = top || 0;
            var handles = this.handles;

            for (var handle in handles) {
                POSITION_ELEMENT_FN[handle](handles[handle], left, top, box);
            }
        },
        showHandles: function showHandles() {
            var handles = this.handles;
            this.updateHandles(this.box);
            for (var n in handles) {
                handles[n].style.display = 'block';
            }
        },
        hideHandles: function hideHandles() {
            var handles = this.handles;
            for (var n in handles) {
                handles[n].style.display = 'none';
            }
        },
        showPreview: function showPreview() {
            this.preview.style.backgroundImage = 'url("' + this.el.src + '")';
            this.calculateSize();
            this.updatePreview();
            this.preview.style.display = 'block';
        },
        updatePreview: function updatePreview() {
            var box = this.previewBox;
            positionElement(this.preview, box.left, box.top);
            this.preview.style.width = this.previewBox.width + 'px';
            this.preview.style.height = this.previewBox.height + 'px';
        },
        hidePreview: function hidePreview() {
            var box = getBoundingBox(this.window, this.preview);
            this.result = {
                width: box.width,
                height: box.height
            };
            this.preview.style.display = 'none';
        },
        calculateSize: function calculateSize(data) {
            var box = this.previewBox = {
                top: 0,
                left: 0,
                width: this.box.width,
                height: this.box.height
            };

            if (!data) return;

            var attr = data.target.className;

            if (~attr.indexOf('r')) {
                box.width = Math.max(32, this.box.width + data.delta.x);
            }
            if (~attr.indexOf('b')) {
                box.height = Math.max(32, this.box.height + data.delta.y);
            }
            if (~attr.indexOf('l')) {
                box.width = Math.max(32, this.box.width - data.delta.x);
            }
            if (~attr.indexOf('t')) {
                box.height = Math.max(32, this.box.height - data.delta.y);
            }
            //if dragging corner, enforce aspect ratio (unless shift key is being held)
            if (attr.indexOf('m') < 0 && !data.keys.shift) {
                var ratio = this.box.width / this.box.height;
                if (box.width / box.height > ratio) {
                    box.height = Math.round(box.width / ratio);
                } else {
                    box.width = Math.round(box.height * ratio);
                }
            }

            var snapToSize = this.cfg.snapToSize;

            if (snapToSize) {
                var others = this.otherImages;
                for (var i = 0; i < others.length; i++) {
                    var other = getBoundingBox(this.window, others[i]);
                    if (Math.abs(box.width - other.width) <= snapToSize && Math.abs(box.height - other.height) <= snapToSize) {
                        box.width = other.width;
                        box.height = other.height;
                        break;
                    }
                }
            }

            //recalculate left or top position
            if (~attr.indexOf('l')) {
                box.left = this.box.width - box.width;
            }
            if (~attr.indexOf('t')) {
                box.top = this.box.height - box.height;
            }
        },
        resizeComplete: function resizeComplete() {
            resizeElement.call(this, this.el, this.result.width, this.result.height);
        }
    };

    function DragEvent(window, document) {
        this.window = window;
        this.document = document;
        this.events = {
            mousemove: bind(this.mousemove, this),
            keydown: bind(this.keydown, this),
            mouseup: bind(this.mouseup, this)
        };
    }

    DragEvent.prototype = {
        start: function start(e) {
            e.preventDefault();
            e.stopPropagation();
            this.target = e.target;
            this.attr = e.target.className;
            this.startPos = {
                x: e.clientX,
                y: e.clientY
            };
            this.update(e);
            var events = this.events;
            this.document.addEventListener('mousemove', events.mousemove, false);
            this.document.addEventListener('keydown', events.keydown, false);
            this.document.addEventListener('mouseup', events.mouseup, false);
            this.document.body.classList.add('dragging-' + this.attr);
            this.onStart && this.onStart();
        },
        update: function update(e) {
            this.currentPos = {
                x: e.clientX,
                y: e.clientY
            };
            this.delta = {
                x: e.clientX - this.startPos.x,
                y: e.clientY - this.startPos.y
            };
            this.keys = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            };
        },
        mousemove: function mousemove(e) {
            this.update(e);
            this.onDrag && this.onDrag();
            if (e.which === 0) {
                //mouse button released outside window; mouseup wasn't fired (Chrome)
                this.mouseup(e);
            }
        },
        keydown: function keydown(e) {
            //escape key cancels dragging
            if (e.keyCode === 27) {
                this.release();
            }
        },
        mouseup: function mouseup(e) {
            this.update(e);
            this.release();
            this.onComplete && this.onComplete();
        },
        release: function release() {
            this.document.body.classList.remove('dragging-' + this.attr);
            var events = this.events;
            this.document.removeEventListener('mousemove', events.mousemove, false);
            this.document.removeEventListener('keydown', events.keydown, false);
            this.document.removeEventListener('mouseup', events.mouseup, false);
            this.onRelease && this.onRelease();
        }
    };

    //helper functions
    function toArray(obj) {
        var len = obj.length,
            arr = new Array(len);
        for (var i = 0; i < len; i++) {
            arr[i] = obj[i];
        }
        return arr;
    }

    function bind(fn, ctx) {
        if (fn.bind) {
            return fn.bind(ctx);
        }
        return function () {
            fn.apply(ctx, arguments);
        };
    }

    function positionElement(el, left, top) {
        el.style.left = String(left) + 'px';
        el.style.top = String(top) + 'px';
    }

    function resizeElement(el, width, height) {
        var imageScaleResize = this.editor.config.imageScaleResize;
        if (imageScaleResize === 'both') {
            el.style.width = String(width) + 'px';
            el.style.height = String(height) + 'px';
        } else if (imageScaleResize === 'width' || imageScaleResize === 'scale') {
            el.style.height = 'auto';
            el.style.width = String(width) + 'px';
        } else if (imageScaleResize === 'height') {
            el.style.height = String(height) + 'px';
            el.style.width = 'auto';
        }
    }

    function getBoundingBox(window, el) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            width: rect.width,
            height: rect.height
        };
    }
})();
'use strict';

/**
 * CKEditor plugin: Image2
 * - Show gripper to resize images on IE
 */
(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_dragresize_ie')) {
        return;
    }

    var alignmentsObj = {
        center: 1,
        left: 0,
        right: 2
    };

    /*
     * Set cursor css depend on imageScaleResize config
     **/

    var cursor = {
        both: 'nwse-resize',
        height: 'ns-resize',
        scale: 'nwse-resize',
        width: 'ew-resize'
    };

    var regexPercent = /^\s*(\d+\%)\s*$/i;

    var template = '<img alt="" src="" />';

    CKEDITOR.plugins.add('ae_dragresize_ie', {
        hidpi: true,

        icons: 'image',

        init: function init(editor) {
            var image = widgetDef(editor);

            // Register the widget.
            editor.widgets.add('image', image);
        },

        onLoad: function onLoad() {
            CKEDITOR.addCss('.cke_image_resizer_nwse-resize{' + 'cursor: nwse-resize;' + '}' + '.cke_image_resizer_ns-resize{' + 'cursor: ns-resize;' + '}' + '.cke_image_resizer_nwse-resize{' + 'cursor: nwse-resize;' + '}' + '.cke_image_resizer_ew-resize{' + 'cursor: ew-resize;' + '}' + '.cke_image_nocaption{' +
            // This is to remove unwanted space so resize
            // wrapper is displayed property.
            'line-height:0' + '}' + '.cke_image_resizer{' + 'display:none;' + 'position:absolute;' + 'width:10px;' + 'height:10px;' + 'bottom:-5px;' + 'right:-5px;' + 'background:#000;' + 'outline:1px solid #fff;' +
            // Prevent drag handler from being misplaced (#11207).
            'line-height:0;' + 'cursor:nwse-resize;' + '}' + '.cke_image_resizer_wrapper{' + 'position:relative;' + 'display:inline-block;' + 'line-height:0;' + '}' + '.cke_widget_wrapper:hover .cke_image_resizer,' + '.cke_image_resizer.cke_image_resizing{' + 'display:block' + '}');
        },

        requires: 'widget'
    });

    // Wiget states (forms) depending on alignment and configuration.
    //
    // Non-captioned widget (inline styles)
    // 		┌──────┬───────────────────────────────┬─────────────────────────────┐
    // 		│Align │Internal form                  │Data                         │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│none  │<wrapper>                      │<img />                      │
    // 		│      │ <img />                       │                             │
    // 		│      │</wrapper>                     │                             │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│left  │<wrapper style=”float:left”>   │<img style=”float:left” />   │
    // 		│      │ <img />                       │                             │
    // 		│      │</wrapper>                     │                             │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│center│<wrapper>                      │<p style=”text-align:center”>│
    // 		│      │ <p style=”text-align:center”> │  <img />                    │
    // 		│      │   <img />                     │</p>                         │
    // 		│      │ </p>                          │                             │
    // 		│      │</wrapper>                     │                             │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│right │<wrapper style=”float:right”>  │<img style=”float:right” />  │
    // 		│      │ <img />                       │                             │
    // 		│      │</wrapper>                     │                             │
    // 		└──────┴───────────────────────────────┴─────────────────────────────┘
    //
    // Non-captioned widget (config.image2_alignClasses defined)
    // 		┌──────┬───────────────────────────────┬─────────────────────────────┐
    // 		│Align │Internal form                  │Data                         │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│none  │<wrapper>                      │<img />                      │
    // 		│      │ <img />                       │                             │
    // 		│      │</wrapper>                     │                             │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│left  │<wrapper class=”left”>         │<img class=”left” />         │
    // 		│      │ <img />                       │                             │
    // 		│      │</wrapper>                     │                             │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│center│<wrapper>                      │<p class=”center”>           │
    // 		│      │ <p class=”center”>            │ <img />                     │
    // 		│      │   <img />                     │</p>                         │
    // 		│      │ </p>                          │                             │
    // 		│      │</wrapper>                     │                             │
    // 		├──────┼───────────────────────────────┼─────────────────────────────┤
    // 		│right │<wrapper class=”right”>        │<img class=”right” />        │
    // 		│      │ <img />                       │                             │
    // 		│      │</wrapper>                     │                             │
    // 		└──────┴───────────────────────────────┴─────────────────────────────┘
    //
    // Captioned widget (inline styles)
    // 		┌──────┬────────────────────────────────────────┬────────────────────────────────────────┐
    // 		│Align │Internal form                           │Data                                    │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│none  │<wrapper>                               │<figure />                              │
    // 		│      │ <figure />                             │                                        │
    // 		│      │</wrapper>                              │                                        │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│left  │<wrapper style=”float:left”>            │<figure style=”float:left” />           │
    // 		│      │ <figure />                             │                                        │
    // 		│      │</wrapper>                              │                                        │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│center│<wrapper style=”text-align:center”>     │<div style=”text-align:center”>         │
    // 		│      │ <figure style=”display:inline-block” />│ <figure style=”display:inline-block” />│
    // 		│      │</wrapper>                              │</p>                                    │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│right │<wrapper style=”float:right”>           │<figure style=”float:right” />          │
    // 		│      │ <figure />                             │                                        │
    // 		│      │</wrapper>                              │                                        │
    // 		└──────┴────────────────────────────────────────┴────────────────────────────────────────┘
    //
    // Captioned widget (config.image2_alignClasses defined)
    // 		┌──────┬────────────────────────────────────────┬────────────────────────────────────────┐
    // 		│Align │Internal form                           │Data                                    │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│none  │<wrapper>                               │<figure />                              │
    // 		│      │ <figure />                             │                                        │
    // 		│      │</wrapper>                              │                                        │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│left  │<wrapper class=”left”>                  │<figure class=”left” />                 │
    // 		│      │ <figure />                             │                                        │
    // 		│      │</wrapper>                              │                                        │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│center│<wrapper class=”center”>                │<div class=”center”>                    │
    // 		│      │ <figure />                             │ <figure />                             │
    // 		│      │</wrapper>                              │</p>                                    │
    // 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
    // 		│right │<wrapper class=”right”>                 │<figure class=”right” />                │
    // 		│      │ <figure />                             │                                        │
    // 		│      │</wrapper>                              │                                        │
    // 		└──────┴────────────────────────────────────────┴────────────────────────────────────────┘
    //
    // @param {CKEDITOR.editor}
    // @returns {Object}
    function widgetDef(editor) {
        editor.config.imageScaleResize = editor.config.imageScaleResize || 'both';

        editor.on('imageAdd', function (imageData) {
            editor.widgets.initOn(imageData.data.el, 'image');
        });

        var alignClasses = editor.config.image2_alignClasses;

        var captionedClass = editor.config.image2_captionedClass;

        return {
            init: function init() {
                var helpers = CKEDITOR.plugins.image2;

                var image = this.parts.image;

                var data = {
                    alt: image.getAttribute('alt') || '',
                    hasCaption: !!this.parts.caption,
                    height: image.getAttribute('height') || '',
                    // Lock ratio is on by default (#10833).
                    lock: this.ready ? helpers.checkHasNaturalRatio(image) : true,
                    src: image.getAttribute('src'),
                    width: image.getAttribute('width') || ''
                };

                // If we used 'a' in widget#parts definition, it could happen that
                // selected element is a child of widget.parts#caption. Since there's no clever
                // way to solve it with CSS selectors, it's done like that. (#11783).
                var link = image.getAscendant('a');

                if (link && this.wrapper.contains(link)) {
                    this.parts.link = link;
                }

                // Depending on configuration, read style/class from element and
                // then remove it. Removed style/class will be set on wrapper in #data listener.
                // Note: Center alignment is detected during upcast, so only left/right cases
                // are checked below.
                if (!data.align) {
                    var alignElement = data.hasCaption ? this.element : image;

                    // Read the initial left/right alignment from the class set on element.
                    if (alignClasses) {
                        if (alignElement.hasClass(alignClasses[0])) {
                            data.align = 'left';
                        } else if (alignElement.hasClass(alignClasses[2])) {
                            data.align = 'right';
                        }

                        if (data.align) {
                            alignElement.removeClass(alignClasses[alignmentsObj[data.align]]);
                        } else {
                            data.align = 'none';
                        }
                    }
                    // Read initial float style from figure/image and then remove it.
                    else {
                            data.align = alignElement.getStyle('float') || 'none';
                            alignElement.removeStyle('float');
                        }
                }

                // Get rid of extra vertical space when there's no caption.
                // It will improve the look of the resizer.
                this.wrapper[(data.hasCaption ? 'remove' : 'add') + 'Class']('cke_image_nocaption');

                this.setData(data);

                if (editor.config.image2_disableResizer !== true) {
                    setupResizer(this);
                }
            },

            // Overrides default method to handle internal mutability of Image2.
            // @see CKEDITOR.plugins.widget#addClass
            addClass: function addClass(className) {
                getStyleableElement(this).addClass(className);
            },

            allowedContent: getWidgetAllowedContent(editor),

            // This widget converts style-driven dimensions to attributes.
            contentTransformations: [['img[width]: sizeToAttribute']],

            data: function data() {
                var features = this.features;

                // Image can't be captioned when figcaption is disallowed (#11004).
                if (this.data.hasCaption && !editor.filter.checkFeature(features.caption)) {
                    this.data.hasCaption = false;
                }

                // Image can't be aligned when floating is disallowed (#11004).
                if (this.data.align != 'none' && !editor.filter.checkFeature(features.align)) {
                    this.data.align = 'none';
                }

                // Update widget.parts.link since it will not auto-update unless widget
                // is destroyed and re-inited.
                if (!this.data.link) {
                    if (this.parts.link) {
                        delete this.parts.link;
                    }
                } else {
                    if (!this.parts.link) {
                        this.parts.link = this.parts.image.getParent();
                    }
                }

                this.parts.image.setAttributes({
                    alt: this.data.alt,

                    contenteditable: this.parts.image.getAttribute('contenteditable') ? this.parts.image.getAttribute('contenteditable') : true,

                    // This internal is required by the editor.
                    'data-cke-saved-src': this.data.src,

                    src: this.data.src
                });

                // If shifting non-captioned -> captioned, remove classes
                // related to styles from <img/>.
                if (this.oldData && !this.oldData.hasCaption && this.data.hasCaption) {
                    for (var c in this.data.classes) {
                        this.parts.image.removeClass(c);
                    }
                }

                // Set dimensions of the image according to gathered data.
                // Do it only when the attributes are allowed (#11004).
                if (editor.filter.checkFeature(features.dimension)) {
                    setDimensions(this);
                }

                // Cache current data.
                this.oldData = CKEDITOR.tools.extend({}, this.data);
            },

            downcast: downcastWidgetElement(editor),

            draggable: false,

            // This widget has an editable caption.
            editables: {
                caption: {
                    selector: 'figcaption',
                    allowedContent: 'br em strong sub sup u s; a[!href,target]'
                }
            },

            features: getWidgetFeatures(editor),

            // Overrides default method to handle internal mutability of Image2.
            // @see CKEDITOR.plugins.widget#getClasses
            getClasses: function () {
                var classRegex = new RegExp('^(' + [].concat(captionedClass, alignClasses).join('|') + ')$');

                return function () {
                    var classes = this.repository.parseElementClasses(getStyleableElement(this).getAttribute('class'));

                    // Neither config.image2_captionedClass nor config.image2_alignClasses
                    // do not belong to style classes.
                    for (var c in classes) {
                        if (classRegex.test(c)) {
                            delete classes[c];
                        }
                    }

                    return classes;
                };
            }(),

            getLabel: function getLabel() {
                var label = (this.data.alt || '') + ' ' + this.pathName;

                return label;
            },

            // Overrides default method to handle internal mutability of Image2.
            // @see CKEDITOR.plugins.widget#hasClass
            hasClass: function hasClass(className) {
                return getStyleableElement(this).hasClass(className);
            },

            parts: {
                caption: 'figcaption',
                image: 'img'
            },

            // Overrides default method to handle internal mutability of Image2.
            // @see CKEDITOR.plugins.widget#removeClass
            removeClass: function removeClass(className) {
                getStyleableElement(this).removeClass(className);
            },

            requiredContent: 'img[src,alt]',

            styleableElements: 'img figure',

            // Template of the widget: plain image.
            template: template,

            upcast: upcastWidgetElement(editor)
        };
    }

    /**
     * A set of Enhanced Image (image2) plugin helpers.
     *
     * @class
     * @singleton
     */
    CKEDITOR.plugins.image2 = {
        /**
         * Checks whether the current image ratio matches the natural one
         * by comparing dimensions.
         *
         * @param {CKEDITOR.dom.element} image
         * @returns {Boolean}
         */
        checkHasNaturalRatio: function checkHasNaturalRatio(image) {
            var $ = image.$,
                natural = this.getNatural(image);

            // The reason for two alternative comparisons is that the rounding can come from
            // both dimensions, e.g. there are two cases:
            // 	1. height is computed as a rounded relation of the real height and the value of width,
            //	2. width is computed as a rounded relation of the real width and the value of heigh.
            return Math.round($.clientWidth / natural.width * natural.height) == $.clientHeight || Math.round($.clientHeight / natural.height * natural.width) == $.clientWidth;
        },

        /**
         * Returns natural dimensions of the image. For modern browsers
         * it uses natural(Width|Height). For old ones (IE8) it creates
         * a new image and reads the dimensions.
         *
         * @param {CKEDITOR.dom.element} image
         * @returns {Object}
         */
        getNatural: function getNatural(image) {
            var dimensions;

            if (image.$.naturalWidth) {
                dimensions = {
                    height: image.$.naturalHeigh,
                    width: image.$.naturalWidth
                };
            } else {
                var img = new Image();

                img.src = image.getAttribute('src');

                dimensions = {
                    height: img.heigh,
                    width: img.width
                };
            }

            return dimensions;
        }
    };

    // Returns a function that creates widgets from all <img> and
    // <figure class="{config.image2_captionedClass}"> elements.
    //
    // @param {CKEDITOR.editor} editor
    // @returns {Function}
    function upcastWidgetElement(editor) {
        var isCenterWrapper = centerWrapperChecker(editor);

        var captionedClass = editor.config.image2_captionedClass;

        // @param {CKEDITOR.htmlParser.element} el
        // @param {Object} data
        return function (el, data) {
            var dimensions = {
                height: 1,
                width: 1
            };

            var name = el.name;

            var image;

            // #11110 Don't initialize on pasted fake objects.
            if (el.attributes['data-cke-realelement']) {
                return;
            }

            // If a center wrapper is found, there are 3 possible cases:
            //
            // 1. <div style="text-align:center"><figure>...</figure></div>.
            //    In this case centering is done with a class set on widget.wrapper.
            //    Simply replace centering wrapper with figure (it's no longer necessary).
            //
            // 2. <p style="text-align:center"><img/></p>.
            //    Nothing to do here: <p> remains for styling purposes.
            //
            // 3. <div style="text-align:center"><img/></div>.
            //    Nothing to do here (2.) but that case is only possible in enterMode different
            //    than ENTER_P.
            if (isCenterWrapper(el)) {
                if (name == 'div') {
                    var figure = el.getFirst('figure');

                    // Case #1.
                    if (figure) {
                        el.replaceWith(figure);
                        el = figure;
                    }
                }
                // Cases #2 and #3 (handled transparently)

                // If there's a centering wrapper, save it in data.
                data.align = 'center';

                // Image can be wrapped in link <a><img/></a>.
                image = el.getFirst('img') || el.getFirst('a').getFirst('img');
            }

            // No center wrapper has been found.
            else if (name == 'figure' && el.hasClass(captionedClass)) {
                    image = el.getFirst('img') || el.getFirst('a').getFirst('img');

                    // Upcast linked image like <a><img/></a>.
                } else if (isLinkedOrStandaloneImage(el)) {
                    image = el.name == 'a' ? el.children[0] : el;
                }

            if (!image) {
                return;
            }

            // If there's an image, then cool, we got a widget.
            // Now just remove dimension attributes expressed with %.
            for (var d in dimensions) {
                var dimension = image.attributes[d];

                if (dimension && dimension.match(regexPercent)) {
                    delete image.attributes[d];
                }
            }

            return el;
        };
    }

    // Returns a function which transforms the widget to the external format
    // according to the current configuration.
    //
    // @param {CKEDITOR.editor}
    function downcastWidgetElement(editor) {
        var alignClasses = editor.config.image2_alignClasses;

        // @param {CKEDITOR.htmlParser.element} el
        return function (el) {
            // In case of <a><img/></a>, <img/> is the element to hold
            // inline styles or classes (image2_alignClasses).
            var attrsHolder = el.name == 'a' ? el.getFirst() : el;

            var attrs = attrsHolder.attributes;

            var align = this.data.align;

            // De-wrap the image from resize handle wrapper.
            // Only block widgets have one.
            if (!this.inline) {
                var resizeWrapper = el.getFirst('span');

                if (resizeWrapper) {
                    resizeWrapper.replaceWith(resizeWrapper.getFirst({
                        a: 1,
                        img: 1
                    }));
                }
            }

            if (align && align != 'none') {
                var styles = CKEDITOR.tools.parseCssText(attrs.style || '');

                // When the widget is captioned (<figure>) and internally centering is done
                // with widget's wrapper style/class, in the external data representation,
                // <figure> must be wrapped with an element holding an style/class:
                //
                // 	<div style="text-align:center">
                // 		<figure class="image" style="display:inline-block">...</figure>
                // 	</div>
                // or
                // 	<div class="some-center-class">
                // 		<figure class="image">...</figure>
                // 	</div>
                //
                if (align == 'center' && el.name == 'figure') {
                    el = el.wrapWith(new CKEDITOR.htmlParser.element('div', alignClasses ? {
                        'class': alignClasses[1]
                    } : {
                        style: 'text-align:center'
                    }));
                }

                // If left/right, add float style to the downcasted element.
                else if (align in {
                        left: 1,
                        right: 1
                    }) {
                        if (alignClasses) {
                            attrsHolder.addClass(alignClasses[alignmentsObj[align]]);
                        } else {
                            styles['float'] = align;
                        }
                    }

                // Update element styles.
                if (!alignClasses && !CKEDITOR.tools.isEmpty(styles)) {
                    attrs.style = CKEDITOR.tools.writeCssText(styles);
                }
            }

            return el;
        };
    }

    // Returns a function that checks if an element is a centering wrapper.
    //
    // @param {CKEDITOR.editor} editor
    // @returns {Function}
    function centerWrapperChecker(editor) {
        var captionedClass = editor.config.image2_captionedClass;

        var alignClasses = editor.config.image2_alignClasses;

        var validChildren = {
            a: 1,
            figure: 1,
            img: 1
        };

        return function (el) {
            // Wrapper must be either <div> or <p>.
            if (!(el.name in {
                div: 1,
                p: 1
            })) {
                return false;
            }

            var children = el.children;

            // Centering wrapper can have only one child.
            if (children.length !== 1) {
                return false;
            }

            var child = children[0];

            // Only <figure> or <img /> can be first (only) child of centering wrapper,
            // regardless of its type.
            if (!(child.name in validChildren)) {
                return false;
            }

            // If centering wrapper is <p>, only <img /> can be the child.
            //   <p style="text-align:center"><img /></p>
            if (el.name == 'p') {
                if (!isLinkedOrStandaloneImage(child)) {
                    return false;
                }
            }
            // Centering <div> can hold <img/> or <figure>, depending on enterMode.
            else {
                    // If a <figure> is the first (only) child, it must have a class.
                    //   <div style="text-align:center"><figure>...</figure><div>
                    if (child.name == 'figure') {
                        if (!child.hasClass(captionedClass)) {
                            return false;
                        }
                    } else {
                        // Centering <div> can hold <img/> or <a><img/></a> only when enterMode
                        // is ENTER_(BR|DIV).
                        //   <div style="text-align:center"><img /></div>
                        //   <div style="text-align:center"><a><img /></a></div>
                        if (editor.enterMode == CKEDITOR.ENTER_P) {
                            return false;
                        }

                        // Regardless of enterMode, a child which is not <figure> must be
                        // either <img/> or <a><img/></a>.
                        if (!isLinkedOrStandaloneImage(child)) {
                            return false;
                        }
                    }
                }

            // Centering wrapper got to be... centering. If image2_alignClasses are defined,
            // check for centering class. Otherwise, check the style.
            if (alignClasses ? el.hasClass(alignClasses[1]) : CKEDITOR.tools.parseCssText(el.attributes.style || '', true)['text-align'] == 'center') {
                return true;
            }

            return false;
        };
    }

    // Checks whether element is <img/> or <a><img/></a>.
    //
    // @param {CKEDITOR.htmlParser.element}
    function isLinkedOrStandaloneImage(el) {
        if (el.name == 'img') {
            return true;
        } else if (el.name == 'a') {
            return el.children.length == 1 && el.getFirst('img');
        }

        return false;
    }

    // Sets width and height of the widget image according to current widget data.
    //
    // @param {CKEDITOR.plugins.widget} widget
    function setDimensions(widget) {
        var data = widget.data;

        var dimensions = {
            height: data.height,
            width: data.width
        };

        var image = widget.parts.image;

        for (var d in dimensions) {
            if (dimensions[d]) {
                image.setAttribute(d, dimensions[d]);
            } else {
                image.removeAttribute(d);
            }
        }
    }

    // Defines all features related to drag-driven image resizing.
    //
    // @param {CKEDITOR.plugins.widget} widget
    function setupResizer(widget) {
        var editor = widget.editor;

        var editable = editor.editable();

        var doc = editor.document;

        // Store the resizer in a widget for testing (#11004).
        var resizer = widget.resizer = doc.createElement('span');

        resizer.addClass('cke_image_resizer');
        resizer.addClass('cke_image_resizer_' + cursor[editor.config.imageScaleResize]);
        resizer.append(new CKEDITOR.dom.text('\u200B', doc));

        // Inline widgets don't need a resizer wrapper as an image spans the entire widget.
        if (!widget.inline) {
            var imageOrLink = widget.parts.link || widget.parts.image;

            var oldResizeWrapper = imageOrLink.getParent();

            var resizeWrapper = doc.createElement('span');

            resizeWrapper.addClass('cke_image_resizer_wrapper');
            resizeWrapper.append(imageOrLink);
            resizeWrapper.append(resizer);
            widget.element.append(resizeWrapper, true);

            // Remove the old wrapper which could came from e.g. pasted HTML
            // and which could be corrupted (e.g. resizer span has been lost).
            if (oldResizeWrapper.is('span')) {
                oldResizeWrapper.remove();
            }
        } else {
            widget.wrapper.append(resizer);
        }

        // Calculate values of size variables and mouse offsets.
        resizer.on('mousedown', function (evt) {
            var image = widget.parts.image;

            // "factor" can be either 1 or -1. I.e.: For right-aligned images, we need to
            // subtract the difference to get proper width, etc. Without "factor",
            // resizer starts working the opposite way.
            var factor = widget.data.align == 'right' ? -1 : 1;

            // The x-coordinate of the mouse relative to the screen
            // when button gets pressed.
            var startX = evt.data.$.screenX;

            var startY = evt.data.$.screenY;

            // The initial dimensions and aspect ratio of the image.
            var startWidth = image.$.clientWidth;

            var startHeight = image.$.clientHeight;

            var listeners = [];

            // A class applied to editable during resizing.
            var cursorClass = 'cke_image_s' + (!~factor ? 'w' : 'e');

            var nativeEvt, newWidth, newHeight, updateData;

            var moveDiffX, moveDiffY, moveRatio;

            // Save the undo snapshot first: before resizing.
            editor.fire('saveSnapshot');

            // Mousemove listeners are removed on mouseup.
            attachToDocuments('mousemove', onMouseMove, listeners);

            // Clean up the mousemove listener. Update widget data if valid.
            attachToDocuments('mouseup', onMouseUp, listeners);

            // The entire editable will have the special cursor while resizing goes on.
            editable.addClass(cursorClass);

            // This is to always keep the resizer element visible while resizing.
            resizer.addClass('cke_image_resizing');

            // Attaches an event to a global document if inline editor.
            // Additionally, if classic (`iframe`-based) editor, also attaches the same event to `iframe`'s document.
            function attachToDocuments(name, callback, collection) {
                var globalDoc = CKEDITOR.document;

                var listeners = [];

                if (!doc.equals(globalDoc)) {
                    listeners.push(globalDoc.on(name, callback));
                }

                listeners.push(doc.on(name, callback));

                if (collection) {
                    for (var i = listeners.length; i--;) {
                        collection.push(listeners.pop());
                    }
                }
            }

            // This is how variables refer to the geometry.
            // Note: x corresponds to moveOffset, this is the position of mouse
            // Note: o corresponds to [startX, startY].
            //
            // 	+--------------+--------------+
            // 	|              |              |
            // 	|      I       |      II      |
            // 	|              |              |
            // 	+------------- o -------------+ _ _ _
            // 	|              |              |      ^

            // 	|      VI      |     III      |      | moveDiffY
            // 	|              |         x _ _ _ _ _ v
            // 	+--------------+---------|----+
            // 	               |         |
            // 	                <------->
            // 	                moveDiffX
            function onMouseMove(evt) {
                var imageScaleResize = editor.config.imageScaleResize;

                nativeEvt = evt.data.$;

                // This is how far the mouse is from the point the button was pressed.
                moveDiffX = nativeEvt.screenX - startX;
                moveDiffY = startY - nativeEvt.screenY;

                // This is the aspect ratio of the move difference.
                moveRatio = Math.abs(moveDiffX / moveDiffY);

                if (imageScaleResize === 'width' || imageScaleResize === 'both' || imageScaleResize === 'scale') {
                    newWidth = startWidth + factor * moveDiffX;
                }

                if (imageScaleResize === 'height' || imageScaleResize === 'both') {
                    newHeight = startHeight - moveDiffY;
                }

                if (imageScaleResize === 'scale') {
                    newHeight = 'auto';
                }

                newWidth = newWidth || startWidth;
                newHeight = newHeight || startHeight;

                // Don't update attributes if less than 10.
                // This is to prevent images to visually disappear.
                if (newWidth >= 15 && (newHeight >= 15 || newHeight === 'auto')) {
                    image.setAttributes({
                        width: newWidth,
                        height: newHeight
                    });
                    updateData = true;
                } else {
                    updateData = false;
                }
            }

            function onMouseUp() {
                var l;

                while (l = listeners.pop()) {
                    l.removeListener();
                }

                // Restore default cursor by removing special class.
                editable.removeClass(cursorClass);

                // This is to bring back the regular behaviour of the resizer.
                resizer.removeClass('cke_image_resizing');

                if (updateData) {
                    widget.setData({
                        height: newHeight,
                        width: newWidth
                    });

                    // Save another undo snapshot: after resizing.
                    editor.fire('saveSnapshot');
                }

                // Don't update data twice or more.
                updateData = false;
            }
        });

        // Change the position of the widget resizer when data changes.
        widget.on('data', function () {
            resizer[widget.data.align == 'right' ? 'addClass' : 'removeClass']('cke_image_resizer_left');
        });

        widget.parts.image.on('click', function () {
            var selection = editor.getSelection();

            if (selection) {
                var element = selection.getStartElement();

                if (element) {
                    var widgetElement = element.findOne('img');

                    if (widgetElement) {
                        var region = element.getClientRect();

                        var scrollPosition = new CKEDITOR.dom.window(window).getScrollPosition();
                        region.left -= scrollPosition.x;
                        region.top += scrollPosition.y;

                        region.direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP;

                        editor.fire('editorInteraction', {
                            nativeEvent: event,
                            selectionData: {
                                element: widgetElement,
                                region: region
                            }
                        });
                    }
                }
            }
        });
    }

    // Returns a set of widget allowedContent rules, depending
    // on configurations like config#image2_alignClasses or
    // config#image2_captionedClass.
    //
    // @param {CKEDITOR.editor}
    // @returns {Object}
    function getWidgetAllowedContent(editor) {
        var rules = {
            figcaption: true,
            figure: {
                classes: '!' + editor.config.image2_captionedClass
            },
            img: {
                attributes: '!src,alt,width,height'
            }
        };

        return rules;
    }

    // Returns a set of widget feature rules, depending
    // on editor configuration. Note that the following may not cover
    // all the possible cases since requiredContent supports a single
    // tag only.
    //
    // @param {CKEDITOR.editor}
    // @returns {Object}
    function getWidgetFeatures(editor) {
        var alignClasses = editor.config.image2_alignClasses;

        var features = {
            align: {
                requiredContent: 'img' + (alignClasses ? '(' + alignClasses[0] + ')' : '{float}')
            },
            caption: {
                requiredContent: 'figcaption'
            },
            dimension: {
                requiredContent: 'img[width,height]'
            }
        };

        return features;
    }

    // Returns element which is styled, considering current
    // state of the widget.
    //
    // @see CKEDITOR.plugins.widget#applyStyle
    // @param {CKEDITOR.plugins.widget} widget
    // @returns {CKEDITOR.dom.element}
    function getStyleableElement(widget) {
        return widget.data.hasCaption ? widget.element : widget.parts.image;
    }
})();

CKEDITOR.config.image2_captionedClass = 'image';
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_embed')) {
        return;
    }

    var REGEX_HTTP = /^https?/;

    var REGEX_DEFAULT_LINK = /<a href=/;

    var PROVIDERS = ['youtube', 'twitter'];

    CKEDITOR.DEFAULT_AE_EMBED_URL_TPL = 'http://alloy.iframe.ly/api/oembed?url={url}&callback={callback}';
    CKEDITOR.DEFAULT_AE_EMBED_WIDGET_TPL = '<div data-ae-embed-url="{url}"></div>';
    CKEDITOR.DEFAULT_AE_EMBED_DEFAULT_LINK_TPL = '<a href="{url}">{url}</a>';
    /**
     * CKEditor plugin which adds the infrastructure to embed urls as media objects using an oembed
     * service. By default, and for demoing purposes only, the oembed service is hosted in iframe.ly
     * at //alloy.iframe.ly/api/oembed?url={url}&callback={callback}. Note this should be changed to
     * a self-hosted or paid service in production environments. Access to the alloy.iframe.ly endpoint
     * may be restricted per domain due to significant traffic.
     *
     * This plugin adds an `embedUrl` command that can be used to easily embed a URL and transform it
     * to an embedded content.
     *
     * @class CKEDITOR.plugins.ae_embed
     */
    CKEDITOR.plugins.add('ae_embed', {
        requires: 'widget',
        init: function init(editor) {
            var AE_EMBED_URL_TPL = new CKEDITOR.template(editor.config.embedUrlTemplate || CKEDITOR.DEFAULT_AE_EMBED_URL_TPL);
            var AE_EMBED_WIDGET_TPL = new CKEDITOR.template(editor.config.embedWidgetTpl || CKEDITOR.DEFAULT_AE_EMBED_WIDGET_TPL);
            var AE_EMBED_DEFAULT_LINK_TPL = new CKEDITOR.template(editor.config.embedLinkDefaultTpl || CKEDITOR.DEFAULT_AE_EMBED_DEFAULT_LINK_TPL);

            // Default function to upcast DOM elements to embed widgets.
            // It matches CKEDITOR.DEFAULT_AE_EMBED_WIDGET_TPL
            var defaultEmbedWidgetUpcastFn = function defaultEmbedWidgetUpcastFn(element, data) {
                if (element.name === 'div' && element.attributes['data-ae-embed-url']) {
                    data.url = element.attributes['data-ae-embed-url'];

                    return true;
                }
            };

            // Create a embedUrl command that can be invoked to easily embed media URLs
            editor.addCommand('embedUrl', {
                exec: function exec(editor, data) {
                    editor.insertHtml(AE_EMBED_WIDGET_TPL.output({
                        url: data.url
                    }));
                }
            });

            // Create a widget to properly handle embed operations
            editor.widgets.add('ae_embed', {

                mask: true,
                requiredContent: 'div[data-ae-embed-url]',

                /**
                 * Listener to be executed every time the widget's data changes. It takes care of
                 * requesting the embed object to the configured oembed service and render it in
                 * the editor
                 *
                 * @method data
                 * @param {event} event Data change event
                 */
                data: function data(event) {
                    var widget = this;

                    var url = event.data.url;

                    if (url) {
                        CKEDITOR.tools.jsonp(AE_EMBED_URL_TPL, {
                            url: encodeURIComponent(url)
                        }, function (response) {
                            if (response.html) {
                                if (REGEX_DEFAULT_LINK.test(response.html)) {
                                    widget.createATag(url);
                                } else {
                                    widget.element.setHtml(response.html);
                                }
                            } else {
                                widget.createATag(url);
                            }
                        }, function (msg) {
                            widget.createATag(url);
                        });
                    }
                },

                createATag: function createATag(url) {
                    this.editor.execCommand('undo');

                    var currentSelection = this.editor.getSelection().getSelectedElement();

                    var aTagHtml = AE_EMBED_DEFAULT_LINK_TPL.output({
                        url: url
                    });

                    this.editor.insertHtml(aTagHtml);
                    this.editor.fire('actionPerformed', this);
                },

                /**
                 * Function used to upcast an element to ae_embed widgets.
                 *
                 * @method upcast
                 * @param {CKEDITOR.htmlParser.element} element The element to be checked
                 * @param {Object} data The object that will be passed to the widget
                 */
                upcast: function upcast(element, data) {
                    var embedWidgetUpcastFn = editor.config.embedWidgetUpcastFn || defaultEmbedWidgetUpcastFn;

                    return embedWidgetUpcastFn(element, data);
                }
            });

            // Add a listener to handle paste events and turn links into embed objects
            editor.once('contentDom', function () {
                editor.on('paste', function (event) {
                    var link = event.data.dataValue;

                    if (REGEX_HTTP.test(link)) {
                        event.stop();

                        editor.execCommand('embedUrl', {
                            url: event.data.dataValue
                        });
                    }
                });
            });

            // Add a listener to handle selection change events and properly detect editor
            // interactions on the widgets without messing with widget native selection
            editor.on('selectionChange', function (event) {
                var selection = editor.getSelection();

                if (selection) {
                    var element = selection.getSelectedElement();

                    if (element) {
                        var widgetElement = element.findOne('[data-widget="ae_embed"]');

                        if (widgetElement) {
                            var region = element.getClientRect();

                            var scrollPosition = new CKEDITOR.dom.window(window).getScrollPosition();
                            region.left -= scrollPosition.x;
                            region.top += scrollPosition.y;

                            region.direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP;

                            editor.fire('editorInteraction', {
                                nativeEvent: {},
                                selectionData: {
                                    element: widgetElement,
                                    region: region
                                }
                            });
                        }
                    }
                }
            });

            // Add a filter to skip filtering widget elements
            editor.filter.addElementCallback(function (element) {
                if ('data-ae-embed-url' in element.attributes) {
                    return CKEDITOR.FILTER_SKIP_TREE;
                }
            });
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_imagealignment')) {
        return;
    }

    /**
     * Enum for supported image alignments
     * @type {Object}
     */
    var IMAGE_ALIGNMENT = {
        CENTER: 'center',
        LEFT: 'left',
        RIGHT: 'right'
    };

    /**
     * Enum values for supported image alignments
     * @type {Array}
     */
    var ALIGN_VALUES = [IMAGE_ALIGNMENT.LEFT, IMAGE_ALIGNMENT.RIGHT, IMAGE_ALIGNMENT.CENTER];

    /**
     * Necessary styles for the center alignment
     * @type {Array.<Object>}
     */
    var CENTERED_IMAGE_STYLE = [{
        name: 'display',
        value: 'block'
    }, {
        name: 'margin-left',
        value: 'auto'
    }, {
        name: 'margin-right',
        value: 'auto'
    }];

    /**
     * Retrieves the alignment value of an image.
     *
     * @param {CKEDITOR.dom.element} image The image element
     * @return {String} The alignment value
     */
    var getImageAlignment = function getImageAlignment(image) {
        var imageAlignment = image.getStyle('float');

        if (!imageAlignment || imageAlignment === 'inherit' || imageAlignment === 'none') {
            imageAlignment = image.getAttribute('align');
        }

        if (!imageAlignment) {
            var centeredImage = CENTERED_IMAGE_STYLE.every(function (style) {
                var styleCheck = image.getStyle(style.name) === style.value;

                if (!styleCheck && style.vendorPrefixes) {
                    styleCheck = style.vendorPrefixes.some(function (vendorPrefix) {
                        return image.getStyle(vendorPrefix + style.name) === style.value;
                    });
                }

                return styleCheck;
            });

            imageAlignment = centeredImage ? IMAGE_ALIGNMENT.CENTER : null;
        }

        return imageAlignment;
    };

    /**
     * Removes the alignment value of an image
     *
     * @param {CKEDITOR.dom.element} image The image element
     * @param {String} imageAlignment The image alignment value to be removed
     */
    var removeImageAlignment = function removeImageAlignment(image, imageAlignment) {
        if (imageAlignment === IMAGE_ALIGNMENT.LEFT || imageAlignment === IMAGE_ALIGNMENT.RIGHT) {
            image.removeStyle('float');

            if (imageAlignment === getImageAlignment(image)) {
                image.removeAttribute('align');
            }
        } else if (imageAlignment === IMAGE_ALIGNMENT.CENTER) {
            CENTERED_IMAGE_STYLE.forEach(function (style) {
                image.removeStyle(style.name);

                if (style.vendorPrefixes) {
                    style.vendorPrefixes.forEach(function (vendorPrefix) {
                        image.removeStyle(vendorPrefix + style.name);
                    });
                }
            });
        }
    };

    /**
     * Sets the alignment value of an image
     *
     * @param {CKEDITOR.dom.element} image The image element
     * @param {String} imageAlignment The image alignment value to be set
     */
    var setImageAlignment = function setImageAlignment(image, imageAlignment) {
        removeImageAlignment(image, getImageAlignment(image));

        if (imageAlignment === IMAGE_ALIGNMENT.LEFT || imageAlignment === IMAGE_ALIGNMENT.RIGHT) {
            image.setStyle('float', imageAlignment);
        } else if (imageAlignment === IMAGE_ALIGNMENT.CENTER) {
            CENTERED_IMAGE_STYLE.forEach(function (style) {
                image.setStyle(style.name, style.value);

                if (style.vendorPrefixes) {
                    style.vendorPrefixes.forEach(function (vendorPrefix) {
                        image.setStyle(vendorPrefix + style.name, style.value);
                    });
                }
            });
        }
    };

    /**
     * CKEditor plugin which modifies the justify commands to properly align images. This
     * plugin is an excerpt of CKEditor's original image one that can be found at
     * https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/image/plugin.js
     *
     * @class CKEDITOR.plugins.ae_imagealignment
     */
    CKEDITOR.plugins.add('ae_imagealignment', {
        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'paste' event on the editing area.
         *
         * @method afterInit
         * @param {Object} editor The current editor instance
         */
        afterInit: function afterInit(editor) {
            var self = this;

            ALIGN_VALUES.forEach(function (value) {
                var command = editor.getCommand('justify' + value);

                if (command) {
                    command.on('exec', function (event) {
                        var selectionData = editor.getSelectionData();

                        if (selectionData && AlloyEditor.SelectionTest.image({ data: { selectionData: selectionData } })) {
                            var image = selectionData.element;

                            var imageAlignment = getImageAlignment(image);

                            if (imageAlignment === value) {
                                removeImageAlignment(image, value);
                            } else {
                                setImageAlignment(image, value);
                            }

                            event.cancel();

                            self.refreshCommands(editor, new CKEDITOR.dom.elementPath(image));
                        }
                    });

                    command.on('refresh', function (event) {
                        var selectionData = {
                            element: event.data.path.lastElement
                        };

                        if (AlloyEditor.SelectionTest.image({ data: { selectionData: selectionData } })) {
                            var imageAlignment = getImageAlignment(selectionData.element);

                            this.setState(imageAlignment === value ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF);

                            event.cancel();
                        }
                    });
                }
            });
        },

        /**
         * Forces a refresh of the modified justify commands. This is needed because the applied changes
         * do not modify the selection, so the refresh is never triggered and the UI does not update
         * properly until the next selectionChange event.
         *
         * @param {CKEDITOR.editor} editor The editor instance
         * @param {CKEDITOR.dom.elementPath} elementPath The path of the selected image
         */
        refreshCommands: function refreshCommands(editor, elementPath) {
            ALIGN_VALUES.forEach(function (value) {
                var command = editor.getCommand('justify' + value);

                if (command) {
                    command.refresh(editor, elementPath);
                }
            });
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_pasteimages')) {
        return;
    }

    /**
     * CKEditor plugin which allows pasting images directly into the editable area. The image will be encoded
     * as Data URI. An event `beforeImageAdd` will be fired with the list of pasted images. If any of the listeners
     * returns `false` or cancels the event, the images won't be added to the content. Otherwise,
     * an event `imageAdd` will be fired with the inserted element into the editable area.
     *
     * @class CKEDITOR.plugins.ae_pasteimages
     */

    /**
     * Fired before adding images to the editor.
     * @event beforeImageAdd
     * @param {Array} imageFiles Array of image files
     */

    /**
     * Fired when an image is being added to the editor successfully.
     *
     * @event imageAdd
     * @param {CKEDITOR.dom.element} el The created image with src as Data URI
     * @param {File} file The image file
     */

    CKEDITOR.plugins.add('ae_pasteimages', {
        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'paste' event on the editing area.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'paste', this._onPaste, this, {
                    editor: editor
                });
            }.bind(this));
        },

        /**
         * The function creates an img element with src the image data as Data URI.
         * Then, it fires an 'imageAdd' event via CKEditor's event system. The passed
         * params will be:
         * - `el` - the created img element
         * - `file` - the original pasted data
         *
         * @method _onPaste
         * @protected
         * @param {CKEDITOR.dom.event} event A `paste` event, as received natively from CKEditor
         */
        _onPaste: function _onPaste(event) {
            if (event.data.$.clipboardData) {
                var pastedData = event.data.$.clipboardData.items[0];
                var editor = event.listenerData.editor;

                if (pastedData.type.indexOf('image') === 0) {
                    var reader = new FileReader();
                    var imageFile = pastedData.getAsFile();

                    reader.onload = function (event) {
                        var result = editor.fire('beforeImageAdd', {
                            imageFiles: imageFile
                        });

                        if (!!result) {
                            var el = CKEDITOR.dom.element.createFromHtml('<img src="' + event.target.result + '">');

                            editor.insertElement(el);

                            var imageData = {
                                el: el,
                                file: imageFile
                            };

                            editor.fire('imageAdd', imageData);
                        }
                    }.bind(this);

                    reader.readAsDataURL(imageFile);
                }
            }
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_placeholder')) {
        return;
    }

    /**
     * CKEDITOR enterMode config set the behavior of paragraphs
     * When the content is empty CKEDITOR keeps the enterMode string
     * into the content
     * @property
     * @type {string}
     */
    var brFiller = CKEDITOR.env.needsBrFiller ? '<br>' : '';

    var enterModeEmptyValue = {
        1: ['<p>' + brFiller + '</p>'],
        2: ['', ' ', brFiller],
        3: ['<div>' + brFiller + '</div>']
    };

    /**
     * CKEditor plugin which allows adding a placeholder to the editor. In this case, if there
     * is no content to the editor, there will be hint to the user.
     *
     * @class CKEDITOR.plugins.ae_placeholder
     */

    /**
     * Specifies the placeholder class which have to be aded to editor when editor is not focused.
     *
     * @attribute placeholderClass
     * @default ae_placeholder
     * @type String
     */

    CKEDITOR.plugins.add('ae_placeholder', {

        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'blur' and 'contentDom' event listeners.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.on('blur', this._checkEmptyData, this);
            editor.on('change', this._checkEmptyData, this);
            editor.on('focus', this._removePlaceholderClass, this);
            editor.once('contentDom', this._checkEmptyData, this);
        },

        /**
         * Removes any data from the content and adds a class,
         * specified by the "placeholderClass" config attribute.
         *
         * @protected
         * @method _checkEmptyData
         * @param {CKEDITOR.dom.event} editor event, fired from CKEditor
         */
        _checkEmptyData: function _checkEmptyData(event) {
            var editor = event.editor;

            var editableNode = editor.editable();

            var innerHtml = editableNode.$.innerHTML.trim();

            var isEmpty = enterModeEmptyValue[editor.config.enterMode].some(function (element) {
                return innerHtml === element;
            });

            if (isEmpty) {
                editableNode.addClass(editor.config.placeholderClass);
            } else {
                editableNode.removeClass(editor.config.placeholderClass);
            }
        },

        /**
         * Remove placeholder class when input is focused
         *
         * @protected
         * @method _removePlaceholderClass
         + @param {CKEDITOR.dom.event} editor event, fired from CKEditor
         */
        _removePlaceholderClass: function _removePlaceholderClass(event) {
            var editor = event.editor;

            var editorNode = new CKEDITOR.dom.element(editor.element.$);

            editorNode.removeClass(editor.config.placeholderClass);
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_selectionkeystrokes')) {
        return;
    }

    /**
     * CKEditor plugin that simulates editor interaction events based on manual keystrokes. This
     * can be used to trigger different reactions in the editor.
     *
     * @class CKEDITOR.plugins.ae_selectionkeystrokes
     */
    CKEDITOR.plugins.add('ae_selectionkeystrokes', {
        requires: 'ae_selectionregion',

        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function adds a command to the editor for every defined selectionKeystroke
         * in the configuration and maps it to the specified keystroke.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            if (editor.config.selectionKeystrokes) {
                editor.config.selectionKeystrokes.forEach(function (selectionKeystroke) {
                    var command = new CKEDITOR.command(editor, {
                        exec: function exec(editor) {
                            editor.fire('editorInteraction', {
                                manualSelection: selectionKeystroke.selection,
                                nativeEvent: {},
                                selectionData: editor.getSelectionData()
                            });
                        }
                    });

                    var commandName = 'selectionKeystroke' + selectionKeystroke.selection;

                    editor.addCommand(commandName, command);
                    editor.setKeystroke(selectionKeystroke.keys, commandName);
                });
            }
        }
    });
})();
'use strict';

/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('ae_tableresize')) {
        return;
    }

    var pxUnit = CKEDITOR.tools.cssLength;

    function getWidth(el) {
        return CKEDITOR.env.ie ? el.$.clientWidth : parseInt(el.getComputedStyle('width'), 10);
    }

    function getBorderWidth(element, side) {
        var computed = element.getComputedStyle('border-' + side + '-width'),
            borderMap = {
            thin: '0px',
            medium: '1px',
            thick: '2px'
        };

        if (computed.indexOf('px') < 0) {
            // look up keywords
            if (computed in borderMap && element.getComputedStyle('border-style') != 'none') {
                computed = borderMap[computed];
            } else {
                computed = 0;
            }
        }

        return parseInt(computed, 10);
    }

    // Gets the table row that contains the most columns.
    function getMasterPillarRow(table) {
        var $rows = table.$.rows,
            maxCells = 0,
            cellsCount,
            $elected,
            $tr;

        for (var i = 0, len = $rows.length; i < len; i++) {
            $tr = $rows[i];
            cellsCount = $tr.cells.length;

            if (cellsCount > maxCells) {
                maxCells = cellsCount;
                $elected = $tr;
            }
        }

        return $elected;
    }

    function buildTableColumnPillars(table) {
        var pillars = [],
            pillarIndex = -1,
            rtl = table.getComputedStyle('direction') === 'rtl';

        // Get the raw row element that cointains the most columns.
        var $tr = getMasterPillarRow(table);

        // Get the tbody element and position, which will be used to set the
        // top and bottom boundaries.
        var tbody = new CKEDITOR.dom.element(table.$.tBodies[0]),
            tbodyPosition = tbody.getDocumentPosition();

        // Loop thorugh all cells, building pillars after each one of them.
        for (var i = 0, len = $tr.cells.length; i < len; i++) {
            // Both the current cell and the successive one will be used in the
            // pillar size calculation.
            var td = new CKEDITOR.dom.element($tr.cells[i]),
                nextTd = $tr.cells[i + 1] && new CKEDITOR.dom.element($tr.cells[i + 1]);

            pillarIndex += td.$.colSpan || 1;

            // Calculate the pillar boundary positions.
            var pillarLeft, pillarRight, pillarWidth;

            var x = td.getDocumentPosition().x;

            // Calculate positions based on the current cell.
            rtl ? pillarRight = x + getBorderWidth(td, 'left') : pillarLeft = x + td.$.offsetWidth - getBorderWidth(td, 'right');

            // Calculate positions based on the next cell, if available.
            if (nextTd) {
                x = nextTd.getDocumentPosition().x;

                rtl ? pillarLeft = x + nextTd.$.offsetWidth - getBorderWidth(nextTd, 'right') : pillarRight = x + getBorderWidth(nextTd, 'left');
            }
            // Otherwise calculate positions based on the table (for last cell).
            else {
                    x = table.getDocumentPosition().x;

                    rtl ? pillarLeft = x : pillarRight = x + table.$.offsetWidth;
                }

            pillarWidth = Math.max(pillarRight - pillarLeft, 4);

            // The pillar should reflects exactly the shape of the hovered
            // column border line.
            pillars.push({
                table: table,
                index: pillarIndex,
                x: pillarLeft,
                y: tbodyPosition.y,
                width: pillarWidth,
                height: tbody.$.offsetHeight,
                rtl: rtl
            });
        }

        return pillars;
    }

    function getPillarAtPosition(pillars, positionX) {
        for (var i = 0, len = pillars.length; i < len; i++) {
            var pillar = pillars[i];

            if (positionX >= pillar.x && positionX <= pillar.x + pillar.width) {
                return pillar;
            }
        }

        return null;
    }

    function cancel(evt) {
        (evt.data || evt).preventDefault();
    }

    function columnResizer(editor) {
        var pillar, document, resizer, isResizing, startOffset, currentShift;

        var leftSideCells, rightSideCells, leftShiftBoundary, rightShiftBoundary;

        function detach() {
            pillar = null;
            currentShift = 0;
            isResizing = 0;

            document.removeListener('mouseup', onMouseUp);
            resizer.removeListener('mousedown', onMouseDown);
            resizer.removeListener('mousemove', onMouseMove);

            document.getBody().setStyle('cursor', 'auto');
        }

        function resizeStart() {
            // Before starting to resize, figure out which cells to change
            // and the boundaries of this resizing shift.

            var columnIndex = pillar.index,
                map = CKEDITOR.tools.buildTableMap(pillar.table),
                leftColumnCells = [],
                rightColumnCells = [],
                leftMinSize = Number.MAX_VALUE,
                rightMinSize = leftMinSize,
                rtl = pillar.rtl;

            for (var i = 0, len = map.length; i < len; i++) {
                var row = map[i],
                    leftCell = row[columnIndex + (rtl ? 1 : 0)],
                    rightCell = row[columnIndex + (rtl ? 0 : 1)];

                leftCell = leftCell && new CKEDITOR.dom.element(leftCell);
                rightCell = rightCell && new CKEDITOR.dom.element(rightCell);

                if (!leftCell || !rightCell || !leftCell.equals(rightCell)) {
                    leftCell && (leftMinSize = Math.min(leftMinSize, getWidth(leftCell)));
                    rightCell && (rightMinSize = Math.min(rightMinSize, getWidth(rightCell)));

                    leftColumnCells.push(leftCell);
                    rightColumnCells.push(rightCell);
                }
            }

            // Cache the list of cells to be resized.
            leftSideCells = leftColumnCells;
            rightSideCells = rightColumnCells;

            // Cache the resize limit boundaries.
            leftShiftBoundary = pillar.x - leftMinSize;
            rightShiftBoundary = pillar.x + rightMinSize;

            resizer.setOpacity(0.5);
            startOffset = parseInt(resizer.getStyle('left'), 10);
            currentShift = 0;
            isResizing = 1;

            resizer.on('mousemove', onMouseMove);

            // Prevent the native drag behavior otherwise 'mousemove' won't fire.
            document.on('dragstart', cancel);
        }

        function resizeEnd() {
            isResizing = 0;

            resizer.setOpacity(0);

            currentShift && resizeColumn();

            var table = pillar.table;
            setTimeout(function () {
                table.removeCustomData('_cke_table_pillars');
            }, 0);

            document.removeListener('dragstart', cancel);
        }

        function resizeColumn() {
            var rtl = pillar.rtl,
                cellsCount = rtl ? rightSideCells.length : leftSideCells.length;

            // Perform the actual resize to table cells, only for those by side of the pillar.
            for (var i = 0; i < cellsCount; i++) {
                var leftCell = leftSideCells[i],
                    rightCell = rightSideCells[i],
                    table = pillar.table;

                // Defer the resizing to avoid any interference among cells.
                CKEDITOR.tools.setTimeout(function (leftCell, leftOldWidth, rightCell, rightOldWidth, tableWidth, sizeShift) {
                    // 1px is the minimum valid width (#11626).
                    leftCell && leftCell.setStyle('width', pxUnit(Math.max(leftOldWidth + sizeShift, 1)));
                    rightCell && rightCell.setStyle('width', pxUnit(Math.max(rightOldWidth - sizeShift, 1)));

                    // If we're in the last cell, we need to resize the table as well
                    if (tableWidth) {
                        table.setStyle('width', pxUnit(tableWidth + sizeShift * (rtl ? -1 : 1)));
                    }
                }, 0, this, [leftCell, leftCell && getWidth(leftCell), rightCell, rightCell && getWidth(rightCell), (!leftCell || !rightCell) && getWidth(table) + getBorderWidth(table, 'left') + getBorderWidth(table, 'right'), currentShift]);
            }
        }

        function onMouseDown(evt) {
            cancel(evt);

            resizeStart();

            document.on('mouseup', onMouseUp, this);
        }

        function onMouseUp(evt) {
            evt.removeListener();

            resizeEnd();
        }

        function onMouseMove(evt) {
            move(evt.data.getPageOffset().x);
        }

        document = editor.document;

        resizer = CKEDITOR.dom.element.createFromHtml('<div data-cke-temp=1 contenteditable=false unselectable=on ' + 'style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;' + 'padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>', document);

        // Clean DOM when editor is destroyed.
        editor.on('destroy', function () {
            resizer.remove();
        });

        // Place the resizer after body to prevent it
        // from being editable.
        document.getDocumentElement().append(resizer);

        this.attachTo = function (targetPillar) {
            // Accept only one pillar at a time.
            if (isResizing) {
                return;
            }

            pillar = targetPillar;

            resizer.setStyles({
                width: pxUnit(targetPillar.width),
                height: pxUnit(targetPillar.height),
                left: pxUnit(targetPillar.x),
                top: pxUnit(targetPillar.y)
            });

            resizer.on('mousedown', onMouseDown, this);

            document.getBody().setStyle('cursor', 'col-resize');

            // Display the resizer to receive events but don't show it,
            // only change the cursor to resizable shape.
            resizer.show();
        };

        var move = this.move = function (posX) {
            if (!pillar) {
                return 0;
            }

            if (!isResizing && (posX < pillar.x || posX > pillar.x + pillar.width)) {
                detach();
                return 0;
            }

            var resizerNewPosition = posX - Math.round(resizer.$.offsetWidth / 2);

            if (isResizing) {
                if (resizerNewPosition === leftShiftBoundary || resizerNewPosition === rightShiftBoundary) {
                    return 1;
                }

                resizerNewPosition = Math.max(resizerNewPosition, leftShiftBoundary);
                resizerNewPosition = Math.min(resizerNewPosition, rightShiftBoundary);

                currentShift = resizerNewPosition - startOffset;
            }

            resizer.setStyle('left', pxUnit(resizerNewPosition));

            return 1;
        };
    }

    function clearPillarsCache(evt) {
        var target = evt.data.getTarget();

        if (evt.name === 'mouseout') {
            // Bypass interal mouse move.
            if (!target.is('table')) {
                return;
            }

            var dest = new CKEDITOR.dom.element(evt.data.$.relatedTarget || evt.data.$.toElement);
            while (dest && dest.$ && !dest.equals(target) && !dest.is('body')) {
                dest = dest.getParent();
            }
            if (!dest || dest.equals(target)) {
                return;
            }
        }

        target.getAscendant('table', 1).removeCustomData('_cke_table_pillars');
        evt.removeListener();
    }

    CKEDITOR.plugins.add('ae_tableresize', {
        requires: 'ae_tabletools',

        init: function init(editor) {
            editor.on('contentDom', function () {
                var resizer,
                    editable = editor.editable();

                // In Classic editor it is better to use document
                // instead of editable so event will work below body.
                editable.attachListener(editable.isInline() ? editable : editor.document, 'mousemove', function (evt) {
                    evt = evt.data;

                    var target = evt.getTarget();

                    // FF may return document and IE8 some UFO (object with no nodeType property...)
                    // instead of an element (#11823).
                    if (target.type !== CKEDITOR.NODE_ELEMENT) {
                        return;
                    }

                    var pageX = evt.getPageOffset().x;

                    // If we're already attached to a pillar, simply move the
                    // resizer.
                    if (resizer && resizer.move(pageX)) {
                        cancel(evt);
                        return;
                    }

                    // Considering table, tr, td, tbody but nothing else.
                    var table, pillars;

                    if (!target.is('table') && !target.getAscendant('tbody', 1)) {
                        return;
                    }

                    table = target.getAscendant('table', 1);

                    // Make sure the table we found is inside the container
                    // (eg. we should not use tables the editor is embedded within)
                    if (!editor.editable().contains(table)) {
                        return;
                    }

                    if (!(pillars = table.getCustomData('_cke_table_pillars'))) {
                        // Cache table pillars calculation result.
                        table.setCustomData('_cke_table_pillars', pillars = buildTableColumnPillars(table));
                        table.on('mouseout', clearPillarsCache);
                        table.on('mousedown', clearPillarsCache);
                    }

                    var pillar = getPillarAtPosition(pillars, pageX);
                    if (pillar) {
                        !resizer && (resizer = new columnResizer(editor));
                        resizer.attachTo(pillar);
                    }
                });
            });
        }
    });
})();
'use strict';

/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

(function () {
	'use strict';

	if (CKEDITOR.plugins.get('ae_tabletools')) {
		return;
	}

	var cellNodeRegex = /^(?:td|th)$/;

	function getSelectedCells(selection) {
		var ranges = selection.getRanges();
		var retval = [];
		var database = {};

		function moveOutOfCellGuard(node) {
			// Apply to the first cell only.
			if (retval.length > 0) return;

			// If we are exiting from the first </td>, then the td should definitely be
			// included.
			if (node.type == CKEDITOR.NODE_ELEMENT && cellNodeRegex.test(node.getName()) && !node.getCustomData('selected_cell')) {
				CKEDITOR.dom.element.setMarker(database, node, 'selected_cell', true);
				retval.push(node);
			}
		}

		for (var i = 0; i < ranges.length; i++) {
			var range = ranges[i];

			if (range.collapsed) {
				// Walker does not handle collapsed ranges yet - fall back to old API.
				var startNode = range.getCommonAncestor();
				var nearestCell = startNode.getAscendant('td', true) || startNode.getAscendant('th', true);
				if (nearestCell) retval.push(nearestCell);
			} else {
				var walker = new CKEDITOR.dom.walker(range);
				var node;
				walker.guard = moveOutOfCellGuard;

				while (node = walker.next()) {
					// If may be possible for us to have a range like this:
					// <td>^1</td><td>^2</td>
					// The 2nd td shouldn't be included.
					//
					// So we have to take care to include a td we've entered only when we've
					// walked into its children.

					if (node.type != CKEDITOR.NODE_ELEMENT || !node.is(CKEDITOR.dtd.table)) {
						var parent = node.getAscendant('td', true) || node.getAscendant('th', true);
						if (parent && !parent.getCustomData('selected_cell')) {
							CKEDITOR.dom.element.setMarker(database, parent, 'selected_cell', true);
							retval.push(parent);
						}
					}
				}
			}
		}

		CKEDITOR.dom.element.clearAllMarkers(database);

		return retval;
	}

	function getFocusElementAfterDelCells(cellsToDelete) {
		var i = 0,
		    last = cellsToDelete.length - 1,
		    database = {},
		    cell,
		    focusedCell,
		    tr;

		while (cell = cellsToDelete[i++]) {
			CKEDITOR.dom.element.setMarker(database, cell, 'delete_cell', true);
		} // 1.first we check left or right side focusable cell row by row;
		i = 0;
		while (cell = cellsToDelete[i++]) {
			if ((focusedCell = cell.getPrevious()) && !focusedCell.getCustomData('delete_cell') || (focusedCell = cell.getNext()) && !focusedCell.getCustomData('delete_cell')) {
				CKEDITOR.dom.element.clearAllMarkers(database);
				return focusedCell;
			}
		}

		CKEDITOR.dom.element.clearAllMarkers(database);

		// 2. then we check the toppest row (outside the selection area square) focusable cell
		tr = cellsToDelete[0].getParent();
		if (tr = tr.getPrevious()) return tr.getLast();

		// 3. last we check the lowerest  row focusable cell
		tr = cellsToDelete[last].getParent();
		if (tr = tr.getNext()) return tr.getChild(0);

		return null;
	}

	function insertRow(selection, insertBefore) {
		var cells = getSelectedCells(selection),
		    firstCell = cells[0],
		    table = firstCell.getAscendant('table'),
		    doc = firstCell.getDocument(),
		    startRow = cells[0].getParent(),
		    startRowIndex = startRow.$.rowIndex,
		    lastCell = cells[cells.length - 1],
		    endRowIndex = lastCell.getParent().$.rowIndex + lastCell.$.rowSpan - 1,
		    endRow = new CKEDITOR.dom.element(table.$.rows[endRowIndex]),
		    rowIndex = insertBefore ? startRowIndex : endRowIndex,
		    row = insertBefore ? startRow : endRow;

		var map = CKEDITOR.tools.buildTableMap(table),
		    cloneRow = map[rowIndex],
		    nextRow = insertBefore ? map[rowIndex - 1] : map[rowIndex + 1],
		    width = map[0].length;

		var newRow = doc.createElement('tr');
		for (var i = 0; cloneRow[i] && i < width; i++) {
			var cell;
			// Check whether there's a spanning row here, do not break it.
			if (cloneRow[i].rowSpan > 1 && nextRow && cloneRow[i] == nextRow[i]) {
				cell = cloneRow[i];
				cell.rowSpan += 1;
			} else {
				cell = new CKEDITOR.dom.element(cloneRow[i]).clone();
				cell.removeAttribute('rowSpan');
				cell.appendBogus();
				newRow.append(cell);
				cell = cell.$;
			}

			i += cell.colSpan - 1;
		}

		insertBefore ? newRow.insertBefore(row) : newRow.insertAfter(row);
	}

	function deleteRows(selectionOrRow) {
		if (selectionOrRow instanceof CKEDITOR.dom.selection) {
			var cells = getSelectedCells(selectionOrRow),
			    firstCell = cells[0],
			    table = firstCell.getAscendant('table'),
			    map = CKEDITOR.tools.buildTableMap(table),
			    startRow = cells[0].getParent(),
			    startRowIndex = startRow.$.rowIndex,
			    lastCell = cells[cells.length - 1],
			    endRowIndex = lastCell.getParent().$.rowIndex + lastCell.$.rowSpan - 1,
			    rowsToDelete = [];

			// Delete cell or reduce cell spans by checking through the table map.
			for (var i = startRowIndex; i <= endRowIndex; i++) {
				var mapRow = map[i],
				    row = new CKEDITOR.dom.element(table.$.rows[i]);

				for (var j = 0; j < mapRow.length; j++) {
					var cell = new CKEDITOR.dom.element(mapRow[j]),
					    cellRowIndex = cell.getParent().$.rowIndex;

					if (cell.$.rowSpan == 1) cell.remove();
					// Row spanned cell.
					else {
							// Span row of the cell, reduce spanning.
							cell.$.rowSpan -= 1;
							// Root row of the cell, root cell to next row.
							if (cellRowIndex == i) {
								var nextMapRow = map[i + 1];
								nextMapRow[j - 1] ? cell.insertAfter(new CKEDITOR.dom.element(nextMapRow[j - 1])) : new CKEDITOR.dom.element(table.$.rows[i + 1]).append(cell, 1);
							}
						}

					j += cell.$.colSpan - 1;
				}

				rowsToDelete.push(row);
			}

			var rows = table.$.rows;

			// Where to put the cursor after rows been deleted?
			// 1. Into next sibling row if any;
			// 2. Into previous sibling row if any;
			// 3. Into table's parent element if it's the very last row.
			var cursorPosition = new CKEDITOR.dom.element(rows[endRowIndex + 1] || (startRowIndex > 0 ? rows[startRowIndex - 1] : null) || table.$.parentNode);

			for (i = rowsToDelete.length; i >= 0; i--) {
				deleteRows(rowsToDelete[i]);
			}return cursorPosition;
		} else if (selectionOrRow instanceof CKEDITOR.dom.element) {
			table = selectionOrRow.getAscendant('table');

			if (table.$.rows.length == 1) table.remove();else selectionOrRow.remove();
		}

		return null;
	}

	function getCellColIndex(cell, isStart) {
		var row = cell.getParent(),
		    rowCells = row.$.cells;

		var colIndex = 0;
		for (var i = 0; i < rowCells.length; i++) {
			var mapCell = rowCells[i];
			colIndex += isStart ? 1 : mapCell.colSpan;
			if (mapCell == cell.$) break;
		}

		return colIndex - 1;
	}

	function getColumnsIndices(cells, isStart) {
		var retval = isStart ? Infinity : 0;
		for (var i = 0; i < cells.length; i++) {
			var colIndex = getCellColIndex(cells[i], isStart);
			if (isStart ? colIndex < retval : colIndex > retval) retval = colIndex;
		}
		return retval;
	}

	function insertColumn(selection, insertBefore) {
		var cells = getSelectedCells(selection),
		    firstCell = cells[0],
		    table = firstCell.getAscendant('table'),
		    startCol = getColumnsIndices(cells, 1),
		    lastCol = getColumnsIndices(cells),
		    colIndex = insertBefore ? startCol : lastCol;

		var map = CKEDITOR.tools.buildTableMap(table),
		    cloneCol = [],
		    nextCol = [],
		    height = map.length;

		for (var i = 0; i < height; i++) {
			cloneCol.push(map[i][colIndex]);
			var nextCell = insertBefore ? map[i][colIndex - 1] : map[i][colIndex + 1];
			nextCol.push(nextCell);
		}

		for (i = 0; i < height; i++) {
			var cell;

			if (!cloneCol[i]) continue;

			// Check whether there's a spanning column here, do not break it.
			if (cloneCol[i].colSpan > 1 && nextCol[i] == cloneCol[i]) {
				cell = cloneCol[i];
				cell.colSpan += 1;
			} else {
				cell = new CKEDITOR.dom.element(cloneCol[i]).clone();
				cell.removeAttribute('colSpan');
				cell.appendBogus();
				cell[insertBefore ? 'insertBefore' : 'insertAfter'].call(cell, new CKEDITOR.dom.element(cloneCol[i]));
				cell = cell.$;
			}

			i += cell.rowSpan - 1;
		}
	}

	function deleteColumns(selectionOrCell) {
		var cells = getSelectedCells(selectionOrCell),
		    firstCell = cells[0],
		    lastCell = cells[cells.length - 1],
		    table = firstCell.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    startColIndex,
		    endColIndex,
		    rowsToDelete = [];

		// Figure out selected cells' column indices.
		for (var i = 0, rows = map.length; i < rows; i++) {
			for (var j = 0, cols = map[i].length; j < cols; j++) {
				if (map[i][j] == firstCell.$) startColIndex = j;
				if (map[i][j] == lastCell.$) endColIndex = j;
			}
		}

		// Delete cell or reduce cell spans by checking through the table map.
		for (i = startColIndex; i <= endColIndex; i++) {
			for (j = 0; j < map.length; j++) {
				var mapRow = map[j],
				    row = new CKEDITOR.dom.element(table.$.rows[j]),
				    cell = new CKEDITOR.dom.element(mapRow[i]);

				if (cell.$) {
					if (cell.$.colSpan == 1) cell.remove();
					// Reduce the col spans.
					else cell.$.colSpan -= 1;

					j += cell.$.rowSpan - 1;

					if (!row.$.cells.length) rowsToDelete.push(row);
				}
			}
		}

		var firstRowCells = table.$.rows[0] && table.$.rows[0].cells;

		// Where to put the cursor after columns been deleted?
		// 1. Into next cell of the first row if any;
		// 2. Into previous cell of the first row if any;
		// 3. Into table's parent element;
		var cursorPosition = new CKEDITOR.dom.element(firstRowCells[startColIndex] || (startColIndex ? firstRowCells[startColIndex - 1] : table.$.parentNode));

		// Delete table rows only if all columns are gone (do not remove empty row).
		if (rowsToDelete.length == rows) table.remove();

		return cursorPosition;
	}

	function insertCell(selection, insertBefore) {
		var startElement = selection.getStartElement();
		var cell = startElement.getAscendant('td', 1) || startElement.getAscendant('th', 1);

		if (!cell) return;

		// Create the new cell element to be added.
		var newCell = cell.clone();
		newCell.appendBogus();

		if (insertBefore) newCell.insertBefore(cell);else newCell.insertAfter(cell);
	}

	function deleteCells(selectionOrCell) {
		if (selectionOrCell instanceof CKEDITOR.dom.selection) {
			var cellsToDelete = getSelectedCells(selectionOrCell);
			var table = cellsToDelete[0] && cellsToDelete[0].getAscendant('table');
			var cellToFocus = getFocusElementAfterDelCells(cellsToDelete);

			for (var i = cellsToDelete.length - 1; i >= 0; i--) {
				deleteCells(cellsToDelete[i]);
			}if (cellToFocus) placeCursorInCell(cellToFocus, true);else if (table) table.remove();
		} else if (selectionOrCell instanceof CKEDITOR.dom.element) {
			var tr = selectionOrCell.getParent();
			if (tr.getChildCount() == 1) tr.remove();else selectionOrCell.remove();
		}
	}

	// Remove filler at end and empty spaces around the cell content.
	function trimCell(cell) {
		var bogus = cell.getBogus();
		bogus && bogus.remove();
		cell.trim();
	}

	function placeCursorInCell(cell, placeAtEnd) {
		var docInner = cell.getDocument(),
		    docOuter = CKEDITOR.document;

		// Fixing "Unspecified error" thrown in IE10 by resetting
		// selection the dirty and shameful way (#10308).
		// We can not apply this hack to IE8 because
		// it causes error (#11058).
		if (CKEDITOR.env.ie && CKEDITOR.env.version == 10) {
			docOuter.focus();
			docInner.focus();
		}

		var range = new CKEDITOR.dom.range(docInner);
		if (!range['moveToElementEdit' + (placeAtEnd ? 'End' : 'Start')](cell)) {
			range.selectNodeContents(cell);
			range.collapse(placeAtEnd ? false : true);
		}
		range.select(true);
	}

	function cellInRow(tableMap, rowIndex, cell) {
		var oRow = tableMap[rowIndex];
		if (typeof cell == 'undefined') return oRow;

		for (var c = 0; oRow && c < oRow.length; c++) {
			if (cell.is && oRow[c] == cell.$) return c;else if (c == cell) return new CKEDITOR.dom.element(oRow[c]);
		}
		return cell.is ? -1 : null;
	}

	function cellInCol(tableMap, colIndex) {
		var oCol = [];
		for (var r = 0; r < tableMap.length; r++) {
			var row = tableMap[r];
			oCol.push(row[colIndex]);

			// Avoid adding duplicate cells.
			if (row[colIndex].rowSpan > 1) r += row[colIndex].rowSpan - 1;
		}
		return oCol;
	}

	function mergeCells(selection, mergeDirection, isDetect) {
		var cells = getSelectedCells(selection);

		// Invalid merge request if:
		// 1. In batch mode despite that less than two selected.
		// 2. In solo mode while not exactly only one selected.
		// 3. Cells distributed in different table groups (e.g. from both thead and tbody).
		var commonAncestor;
		if ((mergeDirection ? cells.length != 1 : cells.length < 2) || (commonAncestor = selection.getCommonAncestor()) && commonAncestor.type == CKEDITOR.NODE_ELEMENT && commonAncestor.is('table')) return false;

		var cell,
		    firstCell = cells[0],
		    table = firstCell.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    mapHeight = map.length,
		    mapWidth = map[0].length,
		    startRow = firstCell.getParent().$.rowIndex,
		    startColumn = cellInRow(map, startRow, firstCell);

		if (mergeDirection) {
			var targetCell;
			try {
				var rowspan = parseInt(firstCell.getAttribute('rowspan'), 10) || 1;
				var colspan = parseInt(firstCell.getAttribute('colspan'), 10) || 1;

				targetCell = map[mergeDirection == 'up' ? startRow - rowspan : mergeDirection == 'down' ? startRow + rowspan : startRow][mergeDirection == 'left' ? startColumn - colspan : mergeDirection == 'right' ? startColumn + colspan : startColumn];
			} catch (er) {
				return false;
			}

			// 1. No cell could be merged.
			// 2. Same cell actually.
			if (!targetCell || firstCell.$ == targetCell) return false;

			// Sort in map order regardless of the DOM sequence.
			cells[mergeDirection == 'up' || mergeDirection == 'left' ? 'unshift' : 'push'](new CKEDITOR.dom.element(targetCell));
		}

		// Start from here are merging way ignorance (merge up/right, batch merge).
		var doc = firstCell.getDocument(),
		    lastRowIndex = startRow,
		    totalRowSpan = 0,
		    totalColSpan = 0,

		// Use a documentFragment as buffer when appending cell contents.
		frag = !isDetect && new CKEDITOR.dom.documentFragment(doc),
		    dimension = 0;

		for (var i = 0; i < cells.length; i++) {
			cell = cells[i];

			var tr = cell.getParent(),
			    cellFirstChild = cell.getFirst(),
			    colSpan = cell.$.colSpan,
			    rowSpan = cell.$.rowSpan,
			    rowIndex = tr.$.rowIndex,
			    colIndex = cellInRow(map, rowIndex, cell);

			// Accumulated the actual places taken by all selected cells.
			dimension += colSpan * rowSpan;
			// Accumulated the maximum virtual spans from column and row.
			totalColSpan = Math.max(totalColSpan, colIndex - startColumn + colSpan);
			totalRowSpan = Math.max(totalRowSpan, rowIndex - startRow + rowSpan);

			if (!isDetect) {
				// Trim all cell fillers and check to remove empty cells.
				if (trimCell(cell), cell.getChildren().count()) {
					// Merge vertically cells as two separated paragraphs.
					if (rowIndex != lastRowIndex && cellFirstChild && !(cellFirstChild.isBlockBoundary && cellFirstChild.isBlockBoundary({ br: 1 }))) {
						var last = frag.getLast(CKEDITOR.dom.walker.whitespaces(true));
						if (last && !(last.is && last.is('br'))) frag.append('br');
					}

					cell.moveChildren(frag);
				}
				i ? cell.remove() : cell.setHtml('');
			}
			lastRowIndex = rowIndex;
		}

		if (!isDetect) {
			frag.moveChildren(firstCell);

			firstCell.appendBogus();

			if (totalColSpan >= mapWidth) firstCell.removeAttribute('rowSpan');else firstCell.$.rowSpan = totalRowSpan;

			if (totalRowSpan >= mapHeight) firstCell.removeAttribute('colSpan');else firstCell.$.colSpan = totalColSpan;

			// Swip empty <tr> left at the end of table due to the merging.
			var trs = new CKEDITOR.dom.nodeList(table.$.rows),
			    count = trs.count();

			for (i = count - 1; i >= 0; i--) {
				var tailTr = trs.getItem(i);
				if (!tailTr.$.cells.length) {
					tailTr.remove();
					count++;
					continue;
				}
			}

			return firstCell;
		}
		// Be able to merge cells only if actual dimension of selected
		// cells equals to the caculated rectangle.
		else {
				return totalRowSpan * totalColSpan == dimension;
			}
	}

	function verticalSplitCell(selection, isDetect) {
		var cells = getSelectedCells(selection);
		if (cells.length > 1) return false;else if (isDetect) return true;

		var cell = cells[0],
		    tr = cell.getParent(),
		    table = tr.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    rowIndex = tr.$.rowIndex,
		    colIndex = cellInRow(map, rowIndex, cell),
		    rowSpan = cell.$.rowSpan,
		    newCell,
		    newRowSpan,
		    newCellRowSpan,
		    newRowIndex;

		if (rowSpan > 1) {
			newRowSpan = Math.ceil(rowSpan / 2);
			newCellRowSpan = Math.floor(rowSpan / 2);
			newRowIndex = rowIndex + newRowSpan;
			var newCellTr = new CKEDITOR.dom.element(table.$.rows[newRowIndex]),
			    newCellRow = cellInRow(map, newRowIndex),
			    candidateCell;

			newCell = cell.clone();

			// Figure out where to insert the new cell by checking the vitual row.
			for (var c = 0; c < newCellRow.length; c++) {
				candidateCell = newCellRow[c];
				// Catch first cell actually following the column.
				if (candidateCell.parentNode == newCellTr.$ && c > colIndex) {
					newCell.insertBefore(new CKEDITOR.dom.element(candidateCell));
					break;
				} else {
					candidateCell = null;
				}
			}

			// The destination row is empty, append at will.
			if (!candidateCell) newCellTr.append(newCell);
		} else {
			newCellRowSpan = newRowSpan = 1;

			newCellTr = tr.clone();
			newCellTr.insertAfter(tr);
			newCellTr.append(newCell = cell.clone());

			var cellsInSameRow = cellInRow(map, rowIndex);
			for (var i = 0; i < cellsInSameRow.length; i++) {
				cellsInSameRow[i].rowSpan++;
			}
		}

		newCell.appendBogus();

		cell.$.rowSpan = newRowSpan;
		newCell.$.rowSpan = newCellRowSpan;
		if (newRowSpan == 1) cell.removeAttribute('rowSpan');
		if (newCellRowSpan == 1) newCell.removeAttribute('rowSpan');

		return newCell;
	}

	function horizontalSplitCell(selection, isDetect) {
		var cells = getSelectedCells(selection);
		if (cells.length > 1) return false;else if (isDetect) return true;

		var cell = cells[0],
		    tr = cell.getParent(),
		    table = tr.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    rowIndex = tr.$.rowIndex,
		    colIndex = cellInRow(map, rowIndex, cell),
		    colSpan = cell.$.colSpan,
		    newCell,
		    newColSpan,
		    newCellColSpan;

		if (colSpan > 1) {
			newColSpan = Math.ceil(colSpan / 2);
			newCellColSpan = Math.floor(colSpan / 2);
		} else {
			newCellColSpan = newColSpan = 1;
			var cellsInSameCol = cellInCol(map, colIndex);
			for (var i = 0; i < cellsInSameCol.length; i++) {
				cellsInSameCol[i].colSpan++;
			}
		}
		newCell = cell.clone();
		newCell.insertAfter(cell);
		newCell.appendBogus();

		cell.$.colSpan = newColSpan;
		newCell.$.colSpan = newCellColSpan;
		if (newColSpan == 1) cell.removeAttribute('colSpan');
		if (newCellColSpan == 1) newCell.removeAttribute('colSpan');

		return newCell;
	}

	CKEDITOR.plugins.add('ae_tabletools', {
		init: function init(editor) {
			var lang = editor.lang.table;

			function createDef(def) {
				return CKEDITOR.tools.extend(def || {}, {
					contextSensitive: 1,
					refresh: function refresh(editor, path) {
						this.setState(path.contains({ td: 1, th: 1 }, 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED);
					}
				});
			}
			function addCmd(name, def) {
				var cmd = editor.getCommand(name);

				if (cmd) {
					return;
				}

				cmd = editor.addCommand(name, def);
				editor.addFeature(cmd);
			}

			addCmd('rowDelete', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					placeCursorInCell(deleteRows(selection));
				}
			}));

			addCmd('rowInsertBefore', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertRow(selection, true);
				}
			}));

			addCmd('rowInsertAfter', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertRow(selection);
				}
			}));

			addCmd('columnDelete', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					var element = deleteColumns(selection);
					element && placeCursorInCell(element, true);
				}
			}));

			addCmd('columnInsertBefore', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertColumn(selection, true);
				}
			}));

			addCmd('columnInsertAfter', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertColumn(selection);
				}
			}));

			addCmd('cellDelete', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					deleteCells(selection);
				}
			}));

			addCmd('cellMerge', createDef({
				allowedContent: 'td[colspan,rowspan]',
				requiredContent: 'td[colspan,rowspan]',
				exec: function exec(editor) {
					placeCursorInCell(mergeCells(editor.getSelection()), true);
				}
			}));

			addCmd('cellMergeRight', createDef({
				allowedContent: 'td[colspan]',
				requiredContent: 'td[colspan]',
				exec: function exec(editor) {
					placeCursorInCell(mergeCells(editor.getSelection(), 'right'), true);
				}
			}));

			addCmd('cellMergeDown', createDef({
				allowedContent: 'td[rowspan]',
				requiredContent: 'td[rowspan]',
				exec: function exec(editor) {
					placeCursorInCell(mergeCells(editor.getSelection(), 'down'), true);
				}
			}));

			addCmd('cellVerticalSplit', createDef({
				allowedContent: 'td[rowspan]',
				requiredContent: 'td[rowspan]',
				exec: function exec(editor) {
					placeCursorInCell(verticalSplitCell(editor.getSelection()));
				}
			}));

			addCmd('cellHorizontalSplit', createDef({
				allowedContent: 'td[colspan]',
				requiredContent: 'td[colspan]',
				exec: function exec(editor) {
					placeCursorInCell(horizontalSplitCell(editor.getSelection()));
				}
			}));

			addCmd('cellInsertBefore', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertCell(selection, true);
				}
			}));

			addCmd('cellInsertAfter', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertCell(selection);
				}
			}));
		},

		getSelectedCells: getSelectedCells

	});
})();

/**
 * Create a two-dimension array that reflects the actual layout of table cells,
 * with cell spans, with mappings to the original td elements.
 *
 * @param {CKEDITOR.dom.element} table
 * @member CKEDITOR.tools
 */
CKEDITOR.tools.buildTableMap = function (table) {
	var aRows = table.$.rows;

	// Row and Column counters.
	var r = -1;

	var aMap = [];

	for (var i = 0; i < aRows.length; i++) {
		r++;
		!aMap[r] && (aMap[r] = []);

		var c = -1;

		for (var j = 0; j < aRows[i].cells.length; j++) {
			var oCell = aRows[i].cells[j];

			c++;
			while (aMap[r][c]) {
				c++;
			}var iColSpan = isNaN(oCell.colSpan) ? 1 : oCell.colSpan;
			var iRowSpan = isNaN(oCell.rowSpan) ? 1 : oCell.rowSpan;

			for (var rs = 0; rs < iRowSpan; rs++) {
				if (!aMap[r + rs]) aMap[r + rs] = [];

				for (var cs = 0; cs < iColSpan; cs++) {
					aMap[r + rs][c + cs] = aRows[i].cells[j];
				}
			}

			c += iColSpan - 1;
		}
	}
	return aMap;
};
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_buttonbridge')) {
        return;
    }

    /* istanbul ignore next */
    function noop() {}

    // API not yet implemented inside the button bridge. By mocking the unsupported methods, we
    // prevent plugins from crashing if they make use of them.
    //
    // Some methods like `getState` and `setState` clash with React's own state methods. For them,
    // unsupported means that we don't account for the different meaning in the passed or returned
    // arguments.
    var UNSUPPORTED_BUTTON_API = {
        //getState: function() {},
        //setState: function(state) {},
        toFeature: noop
    };

    var BUTTON_DEFS = {};

    /**
     * Generates a ButtonBridge React class for a given button definition if it has not been
     * already created based on the button name and definition.
     *
     * @private
     * @method generateButtonBridge
     * @param {String} buttonName The button's name
     * @param {Object} buttonDefinition The button's definition
     * @return {Object} The generated or already existing React Button Class
     */

    function generateButtonBridge(buttonName, buttonDefinition, editor) {
        var ButtonBridge = AlloyEditor.Buttons[buttonName];

        BUTTON_DEFS[editor.name] = BUTTON_DEFS[editor.name] || {};
        BUTTON_DEFS[editor.name][buttonName] = BUTTON_DEFS[editor.name][buttonName] || buttonDefinition;

        if (!ButtonBridge) {
            ButtonBridge = createReactClass(CKEDITOR.tools.merge(UNSUPPORTED_BUTTON_API, {
                displayName: buttonName,

                propTypes: {
                    editor: PropTypes.object.isRequired,
                    tabIndex: PropTypes.number
                },

                statics: {
                    key: buttonName
                },

                render: function render() {
                    var editor = this.props.editor.get('nativeEditor');

                    var buttonClassName = 'ae-button ae-button-bridge';

                    var buttonDisplayName = BUTTON_DEFS[editor.name][buttonName].name || BUTTON_DEFS[editor.name][buttonName].command || buttonName;

                    var buttonLabel = BUTTON_DEFS[editor.name][buttonName].label;

                    var buttonType = 'button-' + buttonDisplayName;

                    var iconClassName = 'ae-icon-' + buttonDisplayName;

                    var iconStyle = {};

                    var cssStyle = CKEDITOR.skin.getIconStyle(buttonDisplayName);

                    if (cssStyle) {
                        var cssStyleParts = cssStyle.split(';');

                        iconStyle.backgroundImage = cssStyleParts[0].substring(cssStyleParts[0].indexOf(':') + 1);
                        iconStyle.backgroundPosition = cssStyleParts[1].substring(cssStyleParts[1].indexOf(':') + 1);
                        iconStyle.backgroundSize = cssStyleParts[2].substring(cssStyleParts[2].indexOf(':') + 1);
                    }

                    return React.createElement(
                        'button',
                        { 'aria-label': buttonLabel, className: buttonClassName, 'data-type': buttonType, onClick: this._handleClick, tabIndex: this.props.tabIndex, title: buttonLabel },
                        React.createElement('span', { className: iconClassName, style: iconStyle })
                    );
                },

                _handleClick: function _handleClick(event) {
                    var editor = this.props.editor.get('nativeEditor');

                    var buttonCommand = BUTTON_DEFS[editor.name][buttonName].command;

                    var buttonOnClick = BUTTON_DEFS[editor.name][buttonName].onClick;

                    if (buttonOnClick) {
                        buttonOnClick.call(this);
                    } else {
                        editor.execCommand(buttonCommand);
                    }

                    editor.fire('actionPerformed', this);
                }
            }));

            AlloyEditor.Buttons[buttonName] = ButtonBridge;
        }

        return ButtonBridge;
    }

    /* istanbul ignore else */
    if (!CKEDITOR.plugins.get('button')) {
        CKEDITOR.UI_BUTTON = 'button';

        CKEDITOR.plugins.add('button', {});
    }

    /**
     * CKEditor plugin that bridges the support offered by CKEditor Button plugin. It takes over the
     * responsibility of registering and creating buttons via:
     * - editor.ui.addButton(name, definition)
     * - editor.ui.add(name, CKEDITOR.UI_BUTTON, definition)
     *
     * @class CKEDITOR.plugins.ae_buttonbridge
     * @requires CKEDITOR.plugins.ae_uibridge
     * @constructor
     */
    CKEDITOR.plugins.add('ae_buttonbridge', {
        requires: ['ae_uibridge'],

        /**
         * Set the add handler for UI_BUTTON to our own. We do this in the init phase to override
         * the one in the native plugin in case it's present.
         *
         * @method init
         * @param {Object} editor The CKEditor instance being initialized
         */
        beforeInit: function beforeInit(editor) {
            editor.ui.addButton = function (buttonName, buttonDefinition) {
                this.add(buttonName, CKEDITOR.UI_BUTTON, buttonDefinition);
            };

            editor.ui.addHandler(CKEDITOR.UI_BUTTON, {
                add: generateButtonBridge,
                create: function create(buttonDefinition) {
                    var buttonName = 'buttonBridge' + (Math.random() * 1e9 >>> 0);
                    var ButtonBridge = generateButtonBridge(buttonName, buttonDefinition);

                    return new ButtonBridge();
                }
            });
        }
    });
})();
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_menubuttonbridge')) {
        return;
    }

    /* istanbul ignore next */
    function noop() {}

    // API not yet implemented inside the menubutton bridge. By mocking the unsupported methods, we
    // prevent plugins from crashing if they make use of them.
    //
    // Some methods like `getState` and `setState` clash with React's own state methods. For them,
    // unsupported means that we don't account for the different meaning in the passed or returned
    // arguments.
    var UNSUPPORTED_MENUBUTTON_API = {
        //getState: function() {},
        //setState: function(state) {},
        toFeature: noop
    };

    var MENUBUTTON_DEFS = {};

    /**
     * Generates a MenuButtonBridge React class for a given menuButton definition if it has not been
     * already created based on the button name and definition.
     *
     * @private
     * @method generateMenuButtonBridge
     * @param {String} menuButtonName The menuButton's name
     * @param {Object} menuButtonDefinition The menuButton's definition
     * @return {Object} The generated or already existing React MenuButton Class
     */
    function generateMenuButtonBridge(menuButtonName, menuButtonDefinition, editor) {
        var MenuButtonBridge = AlloyEditor.Buttons[menuButtonName];

        MENUBUTTON_DEFS[editor.name] = MENUBUTTON_DEFS[editor.name] || {};
        MENUBUTTON_DEFS[editor.name][menuButtonName] = MENUBUTTON_DEFS[editor.name][menuButtonName] || menuButtonDefinition;

        if (!MenuButtonBridge) {
            MenuButtonBridge = createReactClass(CKEDITOR.tools.merge(UNSUPPORTED_MENUBUTTON_API, {
                displayName: menuButtonName,

                propTypes: {
                    editor: PropTypes.object.isRequired,
                    tabIndex: PropTypes.number
                },

                statics: {
                    key: menuButtonName
                },

                render: function render() {
                    var editor = this.props.editor.get('nativeEditor');

                    var panelMenuButtonDisplayName = MENUBUTTON_DEFS[editor.name][menuButtonName].name || MENUBUTTON_DEFS[editor.name][menuButtonName].command || menuButtonName;

                    var buttonClassName = 'ae-button ae-button-bridge';

                    var iconClassName = 'ae-icon-' + panelMenuButtonDisplayName;

                    var iconStyle = {};

                    var cssStyle = CKEDITOR.skin.getIconStyle(panelMenuButtonDisplayName);

                    if (cssStyle) {
                        var cssStyleParts = cssStyle.split(';');

                        iconStyle.backgroundImage = cssStyleParts[0].substring(cssStyleParts[0].indexOf(':') + 1);
                        iconStyle.backgroundPosition = cssStyleParts[1].substring(cssStyleParts[1].indexOf(':') + 1);
                        iconStyle.backgroundSize = cssStyleParts[2].substring(cssStyleParts[2].indexOf(':') + 1);
                    }

                    var menu;

                    if (this.props.expanded) {
                        menu = this._getMenu();
                    }

                    return React.createElement(
                        'div',
                        { className: 'ae-container ae-has-dropdown' },
                        React.createElement(
                            'button',
                            { 'aria-expanded': this.props.expanded, 'aria-label': MENUBUTTON_DEFS[editor.name][menuButtonName].label, className: buttonClassName, onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: MENUBUTTON_DEFS[editor.name][menuButtonName].label },
                            React.createElement('span', { className: iconClassName, style: iconStyle })
                        ),
                        menu
                    );
                },

                _getMenu: function _getMenu() {
                    return React.createElement(
                        AlloyEditor.ButtonDropdown,
                        { onDismiss: this.props.toggleDropdown },
                        this._getMenuItems()
                    );
                },

                _getMenuItems: function _getMenuItems() {
                    var editor = this.props.editor.get('nativeEditor');
                    var items = menuButtonDefinition.onMenu();
                    var menuItems = Object.keys(items).map(function (key) {
                        var menuItem = editor.getMenuItem(key);

                        if (!menuItem) {
                            return null;
                        }

                        var menuItemDefinition = menuItem.definition || menuItem;
                        var menuItemState = items[key];

                        var className = 'ae-toolbar-element ' + (menuItemState === CKEDITOR.TRISTATE_ON ? 'active' : '');
                        var disabled = menuItemState === CKEDITOR.TRISTATE_DISABLED;
                        var onClick = function onClick() {
                            if (menuItemDefinition.command) {
                                editor.execCommand(menuItemDefinition.command);
                            } else if (menuItemDefinition.onClick) {
                                menuItemDefinition.onClick.apply(menuItemDefinition);
                            }
                        };

                        return React.createElement(
                            'li',
                            { key: menuItem.name, role: 'option' },
                            React.createElement(
                                'button',
                                { className: className, disabled: disabled, onClick: onClick },
                                menuItemDefinition.label
                            )
                        );
                    }.bind(this));

                    return menuItems;
                }
            }));

            AlloyEditor.Buttons[menuButtonName] = MenuButtonBridge;
        }

        return MenuButtonBridge;
    }

    /* istanbul ignore else */
    if (!CKEDITOR.plugins.get('menubutton')) {
        CKEDITOR.UI_MENU_BUTTON = 'menubutton';

        CKEDITOR.plugins.add('menubutton', {});
    }

    /**
     * CKEditor plugin that bridges the support offered by CKEditor MenuButton plugin. It takes over the
     * responsibility of registering and creating menuButtons via:
     * - editor.ui.addMenuButton(name, definition)
     * - editor.ui.add(name, CKEDITOR.UI_MENUBUTTON, definition)
     *
     * @class CKEDITOR.plugins.ae_menubuttonbridge
     * @requires CKEDITOR.plugins.ae_uibridge
     * @requires CKEDITOR.plugins.ae_menubridge
     * @constructor
     */
    CKEDITOR.plugins.add('ae_menubuttonbridge', {
        requires: ['ae_uibridge', 'ae_menubridge'],

        /**
         * Set the add handler for UI_MENUBUTTON to our own. We do this in the init phase to override
         * the one in the native plugin in case it's present.
         *
         * @method init
         * @param {Object} editor The CKEditor instance being initialized
         */
        beforeInit: function beforeInit(editor) {
            editor.ui.addMenuButton = function (menuButtonName, menuButtonDefinition) {
                this.add(menuButtonName, CKEDITOR.UI_MENUBUTTON, menuButtonDefinition);
            };

            editor.ui.addHandler(CKEDITOR.UI_MENUBUTTON, {
                add: generateMenuButtonBridge,
                create: function create(menuButtonDefinition) {
                    var menuButtonName = 'buttonBridge' + (Math.random() * 1e9 >>> 0);
                    var MenuButtonBridge = generateMenuButtonBridge(menuButtonName, menuButtonDefinition);

                    return new MenuButtonBridge();
                }
            });
        }
    });
})();
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_menubridge')) {
        return;
    }

    /**
     * CKEditor plugin that bridges the support offered by CKEditor Menu plugin. It takes over the
     * responsibility of adding, removing and retrieving menu groups and items
     * - editor.addMenuGroup(name, order)
     * - editor.addMenuItem(name, definition)
     * - editor.addMenuItems(definitions)
     * - editor.getMenuItem(name)
     * - editor.removeMenuItem(name)
     *
     * @class CKEDITOR.plugins.ae_menubridge
     * @constructor
     */
    CKEDITOR.plugins.add('ae_menubridge', {
        /**
         * Set the add handler for UI_BUTTON to our own. We do this in the init phase to override
         * the one in the native plugin in case it's present.
         *
         * @method init
         * @param {Object} editor The CKEditor instance being initialized
         */
        beforeInit: function beforeInit(editor) {
            // Do nothing if the real menu plugin is present
            if (CKEDITOR.plugins.get('menu')) {
                return;
            }

            var groups = [];
            var groupsOrder = editor._.menuGroups = {};
            var menuItems = editor._.menuItems = {};

            for (var i = 0; i < groups.length; i++) {
                groupsOrder[groups[i]] = i + 1;
            }

            /**
             * Registers an item group to the editor context menu in order to make it
             * possible to associate it with menu items later.
             *
             * @method addMenuGroup
             * @param {String} name Specify a group name.
             * @param {Number} [order=100] Define the display sequence of this group
             * inside the menu. A smaller value gets displayed first.
             */
            editor.addMenuGroup = function (name, order) {
                groupsOrder[name] = order || 100;
            };

            /**
             * Adds an item from the specified definition to the editor context menu.
             *
             * @method addMenuItem
             * @param {String} name The menu item name.
             * @param {Object} definition The menu item definition.
             */
            editor.addMenuItem = function (name, definition) {
                if (groupsOrder[definition.group]) {
                    menuItems[name] = {
                        name: name,
                        definition: definition
                    };
                }
            };

            /**
             * Adds one or more items from the specified definition object to the editor context menu.
             *
             * @method addMenuItems
             * @param {Object} definitions Object where keys are used as itemName and corresponding values as definition for a {@link #addMenuItem} call.
             */
            editor.addMenuItems = function (definitions) {
                for (var itemName in definitions) {
                    this.addMenuItem(itemName, definitions[itemName]);
                }
            };

            /**
             * Retrieves a particular menu item definition from the editor context menu.
             *
             * @method getMenuItem
             * @param {String} name The name of the desired menu item.
             * @return {Object}
             */
            editor.getMenuItem = function (name) {
                return menuItems[name];
            };

            /**
             * Removes a particular menu item added before from the editor context menu.
             *
             * @method  removeMenuItem
             * @param {String} name The name of the desired menu item.
             */
            editor.removeMenuItem = function (name) {
                delete menuItems[name];
            };
        }
    });
})();
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_panelmenubuttonbridge')) {
        return;
    }

    /* istanbul ignore next */
    function noop() {}

    // API not yet implemented inside the panel menu button bridge. By mocking the unsupported methods, we
    // prevent plugins from crashing if they make use of them.
    var UNSUPPORTED_PANEL_MENU_BUTTON_API = {
        createPanel: noop
    };

    var PANEL_MENU_DEFS = {};

    /**
     * Generates a PanelMenuButtonBridge React class for a given panelmenubutton definition if it has not been
     * already created based on the panelmenubutton name and definition.
     *
     * @private
     * @method generatePanelMenuButtonBridge
     * @param {String} panelMenuButtonName The panel button name
     * @param {Object} panelMenuButtonDefinition The panel button definition
     * @return {Object} The generated or already existing React PanelMenuButton Class
     */
    var generatePanelMenuButtonBridge = function generatePanelMenuButtonBridge(panelMenuButtonName, panelMenuButtonDefinition, editor) {
        var PanelMenuButtonBridge = AlloyEditor.Buttons[panelMenuButtonName];

        PANEL_MENU_DEFS[editor.name] = PANEL_MENU_DEFS[editor.name] || {};
        PANEL_MENU_DEFS[editor.name][panelMenuButtonName] = PANEL_MENU_DEFS[editor.name][panelMenuButtonName] || panelMenuButtonDefinition;

        if (!PanelMenuButtonBridge) {
            PanelMenuButtonBridge = createReactClass(CKEDITOR.tools.merge(UNSUPPORTED_PANEL_MENU_BUTTON_API, {
                displayName: panelMenuButtonName,

                propTypes: {
                    editor: PropTypes.object.isRequired
                },

                statics: {
                    key: panelMenuButtonName
                },

                render: function render() {
                    var editor = this.props.editor.get('nativeEditor');

                    var panelMenuButtonDisplayName = PANEL_MENU_DEFS[editor.name][panelMenuButtonName].name || PANEL_MENU_DEFS[editor.name][panelMenuButtonName].command || panelMenuButtonName;

                    var buttonClassName = 'ae-button ae-button-bridge';

                    var iconClassName = 'ae-icon-' + panelMenuButtonDisplayName;

                    var iconStyle = {};

                    var cssStyle = CKEDITOR.skin.getIconStyle(panelMenuButtonDisplayName);

                    if (cssStyle) {
                        var cssStyleParts = cssStyle.split(';');

                        iconStyle.backgroundImage = cssStyleParts[0].substring(cssStyleParts[0].indexOf(':') + 1);
                        iconStyle.backgroundPosition = cssStyleParts[1].substring(cssStyleParts[1].indexOf(':') + 1);
                        iconStyle.backgroundSize = cssStyleParts[2].substring(cssStyleParts[2].indexOf(':') + 1);
                    }

                    var panel;

                    if (this.props.expanded) {
                        panel = this._getPanel();
                    }

                    return React.createElement(
                        'div',
                        { className: 'ae-container ae-has-dropdown' },
                        React.createElement(
                            'button',
                            { 'aria-expanded': this.props.expanded, 'aria-label': PANEL_MENU_DEFS[editor.name][panelMenuButtonName].label, className: buttonClassName, onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: PANEL_MENU_DEFS[editor.name][panelMenuButtonName].label },
                            React.createElement('span', { className: iconClassName, style: iconStyle })
                        ),
                        panel
                    );
                },

                _getPanel: function _getPanel() {
                    var editor = this.props.editor.get('nativeEditor');

                    var panelMenuButtonOnBlock = PANEL_MENU_DEFS[editor.name][panelMenuButtonName].onBlock;

                    var panel = {
                        hide: this.props.toggleDropdown,
                        show: this.props.toggleDropdown
                    };

                    var blockElement = new CKEDITOR.dom.element('div');

                    var block = {
                        element: blockElement,
                        keys: {}
                    };

                    /* istanbul ignore else */
                    if (panelMenuButtonOnBlock) {
                        panelMenuButtonOnBlock.call(this, panel, block);
                    }

                    // TODO
                    // Use block.keys to configure the panel keyboard navigation

                    return React.createElement(
                        AlloyEditor.ButtonDropdown,
                        { onDismiss: this.props.toggleDropdown },
                        React.createElement('div', { className: blockElement.getAttribute('class'), dangerouslySetInnerHTML: { __html: blockElement.getHtml() } })
                    );
                }
            }));

            AlloyEditor.Buttons[panelMenuButtonName] = PanelMenuButtonBridge;
        }

        return PanelMenuButtonBridge;
    };

    /* istanbul ignore else */
    if (!CKEDITOR.plugins.get('panelmenubutton')) {
        CKEDITOR.UI_PANELBUTTON = 'panelmenubutton';

        CKEDITOR.plugins.add('panelmenubutton', {});
    }

    /* istanbul ignore else */
    if (!CKEDITOR.plugins.get('panelbutton')) {
        CKEDITOR.UI_PANELBUTTON = 'panelbutton';

        CKEDITOR.plugins.add('panelbutton', {});
    }

    /**
     * CKEditor plugin that bridges the support offered by CKEditor PanelButton plugin. It takes over the
     * responsibility of registering and creating buttons via:
     * - editor.ui.addPanelMenuButton(name, definition)
     * - editor.ui.add(name, CKEDITOR.UI_PANELBUTTON, definition)
     *
     * @class CKEDITOR.plugins.ae_panelmenubuttonbridge
     * @requires CKEDITOR.plugins.ae_uibridge
     * @constructor
     */
    CKEDITOR.plugins.add('ae_panelmenubuttonbridge', {
        requires: ['ae_uibridge'],

        /**
         * Set the add handler for UI_PANELBUTTON to our own. We do this in the init phase to override
         * the one in the native plugin in case it's present
         *
         * @method init
         * @param {Object} editor The CKEditor instance being initialized
         */
        beforeInit: function beforeInit(editor) {
            editor.ui.addPanelMenuButton = function (panelMenuButtonName, panelMenuButtonDefinition) {
                this.add(panelMenuButtonName, CKEDITOR.UI_PANELBUTTON, panelMenuButtonDefinition);
            };

            editor.ui.addHandler(CKEDITOR.UI_PANELBUTTON, {
                add: generatePanelMenuButtonBridge,
                create: function create(panelMenuButtonDefinition) {
                    var panelMenuButtonName = 'panelMenuButtonBridge' + (Math.random() * 1e9 >>> 0);
                    var PanelMenuButtonBridge = generatePanelMenuButtonBridge(panelMenuButtonName, panelMenuButtonDefinition);

                    return new PanelMenuButtonBridge();
                }
            });
        }
    });
})();
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_richcombobridge')) {
        return;
    }

    /* istanbul ignore next */
    function noop() {}

    // API not yet implemented inside the richcombo bridge. By mocking the unsupported methods, we
    // prevent plugins from crashing if they make use of them.
    //
    // Some methods like `setState` clash with React's own state methods. For them, unsupported means
    // that we don't account for the different meaning in the passed or returned arguments.
    var UNSUPPORTED_RICHCOMBO_API = {
        commit: noop,
        createPanel: noop,
        disable: noop,
        enable: noop,
        getState: noop,
        hideGroup: noop,
        hideItem: noop,
        mark: noop,
        //setState: noop,
        showAll: noop,
        startGroup: noop,
        unmarkAll: noop
    };

    var RICH_COMBO_DEFS = {};

    /**
     * Generates a RichComboBridge React class for a given richcombo definition if it has not been
     * already created based on the richcombo name and definition.
     *
     * @method generateRichComboBridge
     * @private
     * @param {String} richComboName The rich combo name
     * @param {Object} richComboDefinition The rich combo definition
     * @return {Object} The generated or already existing React RichCombo Class
     */
    var generateRichComboBridge = function generateRichComboBridge(richComboName, richComboDefinition, editor) {
        var RichComboBridge = AlloyEditor.Buttons[richComboName];

        RICH_COMBO_DEFS[editor.name] = RICH_COMBO_DEFS[editor.name] || {};
        RICH_COMBO_DEFS[editor.name][richComboName] = RICH_COMBO_DEFS[editor.name][richComboName] || richComboDefinition;
        RICH_COMBO_DEFS[editor.name][richComboName].currentValue = undefined;

        if (!RichComboBridge) {
            RichComboBridge = createReactClass(CKEDITOR.tools.merge(UNSUPPORTED_RICHCOMBO_API, {
                displayName: richComboName,

                propTypes: {
                    editor: PropTypes.object.isRequired
                },

                statics: {
                    key: richComboName
                },

                add: function add(value, preview, title) {
                    this._items.push({
                        preview: preview,
                        title: title,
                        value: value
                    });
                },

                componentWillMount: function componentWillMount() {
                    var editor = this.props.editor.get('nativeEditor');

                    var editorCombo = RICH_COMBO_DEFS[editor.name][richComboName];

                    this._items = [];

                    this.setValue = this._setValue;

                    if (editorCombo.init) {
                        editorCombo.init.call(this);
                    }

                    if (editorCombo.onRender) {
                        editorCombo.onRender.call(this);
                    }
                },

                componentWillUnmount: function componentWillUnmount() {
                    this._cacheValue(this.state.value);

                    this.setValue = this._cacheValue;
                },

                getInitialState: function getInitialState() {
                    return {
                        value: RICH_COMBO_DEFS[editor.name][richComboName].currentValue
                    };
                },

                getValue: function getValue() {
                    return this.state.value;
                },

                render: function render() {
                    var editor = this.props.editor.get('nativeEditor');

                    var richComboLabel = RICH_COMBO_DEFS[editor.name][richComboName].currentValue || richComboDefinition.label;

                    var itemsList;

                    if (this.props.expanded) {
                        itemsList = this._getItemsList();
                    }

                    return React.createElement(
                        'div',
                        { className: 'ae-container-dropdown ae-has-dropdown' },
                        React.createElement(
                            'button',
                            { 'aria-expanded': this.props.expanded, 'aria-label': richComboLabel, className: 'ae-toolbar-element', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: richComboLabel },
                            React.createElement(
                                'div',
                                { className: 'ae-container' },
                                React.createElement(
                                    'span',
                                    { className: 'ae-container-dropdown-selected-item' },
                                    richComboLabel
                                ),
                                React.createElement('span', { className: 'ae-icon-arrow' })
                            )
                        ),
                        itemsList
                    );
                },

                _cacheValue: function _cacheValue(value) {
                    var editor = this.props.editor.get('nativeEditor');

                    RICH_COMBO_DEFS[editor.name][richComboName].currentValue = value;
                },

                _getItems: function _getItems() {
                    var richCombo = this;

                    var items = this._items.map(function (item) {

                        var className = 'ae-toolbar-element ' + (item.value === this.state.value ? 'active' : '');

                        return React.createElement(
                            'li',
                            { key: item.title, role: 'option' },
                            React.createElement('button', { className: className, dangerouslySetInnerHTML: { __html: item.preview }, 'data-value': item.value, onClick: richCombo._onClick })
                        );
                    }.bind(this));

                    return items;
                },

                _getItemsList: function _getItemsList() {
                    return React.createElement(
                        AlloyEditor.ButtonDropdown,
                        { onDismiss: this.props.toggleDropdown },
                        this._getItems()
                    );
                },

                _onClick: function _onClick(event) {
                    var editor = this.props.editor.get('nativeEditor');

                    var editorCombo = RICH_COMBO_DEFS[editor.name][richComboName];

                    if (editorCombo.onClick) {
                        var newValue = event.currentTarget.getAttribute('data-value');

                        editorCombo.onClick.call(this, newValue);

                        RICH_COMBO_DEFS[editor.name][richComboName].currentValue = newValue;

                        editor.fire('actionPerformed', this);
                    }
                },

                _setValue: function _setValue(value) {
                    this._cacheValue(value);

                    this.setState({
                        value: value
                    });
                }
            }));

            AlloyEditor.Buttons[richComboName] = RichComboBridge;
        }

        return RichComboBridge;
    };

    /* istanbul ignore else */
    if (!CKEDITOR.plugins.get('richcombo')) {
        CKEDITOR.UI_RICHCOMBO = 'richcombo';

        CKEDITOR.plugins.add('richcombo', {});
    }

    /**
     * CKEditor plugin that bridges the support offered by CKEditor RichCombo plugin. It takes over the
     * responsibility of registering and creating rich combo elements via:
     * - editor.ui.addRichCombo(name, definition)
     * - editor.ui.add(name, CKEDITOR.UI_RICHCOMBO, definition)
     *
     * @class CKEDITOR.plugins.ae_richcombobridge
     * @requires CKEDITOR.plugins.ae_uibridge
     * @constructor
     */
    CKEDITOR.plugins.add('ae_richcombobridge', {
        requires: ['ae_uibridge'],

        /**
         * Set the add handler for UI_RICHCOMBO to our own. We do this in the init phase to override
         * the one in the original plugin in case it's present
         *
         * @method init
         * @param {Object} editor The CKEditor instance being initialized
         */
        beforeInit: function beforeInit(editor) {
            editor.ui.addRichCombo = function (richComboName, richComboDefinition) {
                this.add(richComboName, CKEDITOR.UI_RICHCOMBO, richComboDefinition);
            };

            editor.ui.addHandler(CKEDITOR.UI_RICHCOMBO, {
                add: generateRichComboBridge,
                create: function create(richComboDefinition) {
                    var richComboName = 'richComboBridge' + (Math.random() * 1e9 >>> 0);
                    var RichComboBridge = generateRichComboBridge(richComboName, richComboDefinition);

                    return new RichComboBridge();
                }
            });
        }
    });
})();
'use strict';

(function () {
    'use strict';

    /* istanbul ignore if */

    if (CKEDITOR.plugins.get('ae_uibridge')) {
        return;
    }

    /**
     * CKEditor plugin that extends CKEDITOR.ui.add function so an add handler can be specified
     * on top of the original ones. It bridges the calls to add components via:
     * - editor.ui.add(name, type, definition)
     *
     * @class CKEDITOR.plugins.ae_uibridge
     * @constructor
     */
    CKEDITOR.plugins.add('ae_uibridge', {
        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         *
         * @method beforeInit
         * @param {Object} editor The current editor instance
         */
        beforeInit: function beforeInit(editor) {
            var originalUIAddFn = editor.ui.add;

            editor.ui.add = function (name, type, definition) {
                originalUIAddFn.apply(this, arguments);

                var typeHandler = this._.handlers[type];

                if (typeHandler && typeHandler.add) {
                    typeHandler.add(name, definition, editor);
                    AlloyEditor.registerBridgeButton(name, editor.__processingPlugin__.plugin.name);
                }
            };
        }
    });
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    /**
     * Provides core language utilities.
     *
     * @class Lang
     */

    var Lang = {
        /**
         * Check if the passed value is an array.
         *
         * @memberof Lang
         * @method isArray
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is an array, false otherwise.
         * @static
         */
        isArray: function isArray(value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        },

        /**
         * Check if the passed value is boolean.
         *
         * @memberof Lang
         * @method isBoolean
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is boolean, false otherwise.
         * @static
         */
        isBoolean: function isBoolean(value) {
            return typeof value === 'boolean';
        },

        /**
         * Check if the passed value is a function.
         *
         * @memberof Lang
         * @method isFunction
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is a function, false otherwise.
         * @static
         */
        isFunction: function isFunction(value) {
            return typeof value === 'function';
        },

        /**
         * Check if the passed value is NULL.
         *
         * @memberof Lang
         * @method isNull
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is NULL, false otherwise.
         * @static
         */
        isNull: function isNull(value) {
            return value === null;
        },

        /**
         * Check if the passed value is number.
         *
         * @memberof Lang
         * @method isNumber
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is number, false otherwise.
         * @static
         */
        isNumber: function isNumber(value) {
            return typeof value === 'number' && isFinite(value);
        },

        /**
         * Check if the passed value is an object
         *
         * @memberof Lang
         * @method isObject
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is an object, false otherwise.
         * @static
         */
        isObject: function isObject(value) {
            var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);

            return value && (valueType === 'object' || Lang.isFunction(value));
        },

        /**
         * Check if the passed value is a string.
         *
         * @memberof Lang
         * @method isString
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is a string, false otherwise.
         * @static
         */
        isString: function isString(value) {
            return typeof value === 'string';
        },

        /**
         * Adds all properties from the supplier to the receiver.
         * The function will add all properties, not only these owned by the supplier.
         *
         * @memberof Lang
         * @method mix
         * @param {Object} receiver The object which will receive properties.
         * @param {Object} supplier The object which provides properties.
         * @return {Object} The modified receiver.
         * @static
         */
        mix: function mix(receiver, supplier) {
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            for (var key in supplier) {
                if (hasOwnProperty.call(supplier, key)) {
                    receiver[key] = supplier[key];
                }
            }
        },

        /**
         * Converts value to Integer.
         *
         * @memberof Lang
         * @method toInt
         * @param {Any} value The value which have to be converted to Integer.
         * @return {Integer} The converted value.
         * @static
         */
        toInt: function toInt(value) {
            return parseInt(value, 10);
        }
    };

    AlloyEditor.Lang = Lang;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides OOP utilities.
     *
     * @class OOP
     */

    var OOP = {
        /**
         * Sets the prototype, constructor and superclass properties to support an inheritance strategy
         * that can chain constructors and methods. Static members will not be inherited.
         *
         * @memberof OOP
         * @method extend
         * @param {Function} receiver The class which will extend another class.
         * @param {Function} supplier The class which will provide the properties the child class.
         * @param {Object} protoProps Prototype properties to add/override.
         * @param {Object} staticProps Static properties to add/overwrite.
         * @return {Function} The extended class.
         * @static
         */
        extend: function extend(receiver, supplier, protoProps, staticProps) {
            if (!supplier || !receiver) {
                throw 'extend failed, verify dependencies';
            }

            var supplierProto = supplier.prototype,
                receiverProto = Object.create(supplierProto);
            receiver.prototype = receiverProto;

            receiverProto.constructor = receiver;
            receiver.superclass = supplierProto;

            // assign constructor property
            if (supplier !== Object && supplierProto.constructor === Object.prototype.constructor) {
                supplierProto.constructor = supplier;
            }

            // add prototype overrides
            if (protoProps) {
                AlloyEditor.Lang.mix(receiverProto, protoProps);
            }

            // add object overrides
            if (staticProps) {
                AlloyEditor.Lang.mix(receiver, staticProps);
            }

            return receiver;
        }
    };

    AlloyEditor.OOP = OOP;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Attribute implementation.
     *
     * @class Attribute
     * @constructor
    */

    function Attribute(config) {
        this.__config__ = config || {};
        this.__ATTRS__ = {};
    }

    Attribute.prototype = {
        constructor: Attribute,

        /**
         * Retrieves the value of an attribute.
         *
         * @instance
         * @memberof Attribute
         * @method get
         * @param {String} attr The attribute which value should be retrieved.
         * @return {Any} The value of the attribute.
         */
        get: function get(attr) {
            var currentAttr = this.constructor.ATTRS[attr];

            if (!currentAttr) {
                return;
            }

            if (!this._isInitialized(attr)) {
                this._init(attr);
            }

            var curValue = this.__ATTRS__[attr];

            if (currentAttr.getter) {
                curValue = this._callStringOrFunction(currentAttr.getter, curValue);
            }

            return curValue;
        },

        /**
         * Sets the value of an attribute.
         *
         * @instance
         * @memberof Attribute
         * @method set
         * @param {String} attr The attribute which value should be set.
         * @param {Any} value The value which should be set to the attribute.
         */
        set: function set(attr, value) {
            var currentAttr = this.constructor.ATTRS[attr];

            if (!currentAttr) {
                return;
            }

            if (!this._isInitialized(attr)) {
                this._init(attr);
            }

            if (currentAttr.readOnly) {
                return;
            }

            if (currentAttr.writeOnce && this._isInitialized(attr)) {
                return;
            }

            if (currentAttr.validator && !this._callStringOrFunction(currentAttr.validator, value)) {
                return;
            }

            if (currentAttr.setter) {
                value = this._callStringOrFunction(currentAttr.setter, value);
            }

            this.__ATTRS__[attr] = value;
        },

        /**
         * Calls the provided param as function with the supplied arguments.
         * If param provided as string, a corresponding function in this object will
         * be called. If provided param is a function, it will be directly called.
         *
         * @instance
         * @memberof Attribute
         * @method _callStringOrFunction
         * @param  {Any|Array} args The arguments which will be provided to the called function
         * @param  {String|Function} stringOrFunction The function which should be called
         * @protected
         * @return {Any} The returned value from the called function
         */
        _callStringOrFunction: function _callStringOrFunction(stringOrFunction, args) {
            var result = null;

            if (!AlloyEditor.Lang.isArray(args)) {
                args = [args];
            }

            if (AlloyEditor.Lang.isString(stringOrFunction) && AlloyEditor.Lang.isFunction(this[stringOrFunction])) {
                result = this[stringOrFunction].apply(this, args);
            } else if (AlloyEditor.Lang.isFunction(stringOrFunction)) {
                result = stringOrFunction.apply(this, args);
            }

            return result;
        },

        /**
         * Initializes an attribute. Sets its default value depending on the flags of the
         * attribute and the passed configuration object to the constructor.
         *
         * @instance
         * @memberof Attribute
         * @method _init
         * @param {String} attr The name of the attribute which have to be initialized.
         * @protected
         */
        _init: function _init(attr) {
            var value;

            var currentAttr = this.constructor.ATTRS[attr];

            // Check if there is default value or passed one via configuration object
            var hasDefaultValue = Object.prototype.hasOwnProperty.call(currentAttr, 'value');
            var hasPassedValueViaConfig = Object.prototype.hasOwnProperty.call(this.__config__, attr);

            // If there is valueFn, set the value to be the result of invocation of this function
            if (currentAttr.valueFn) {
                value = this._callStringOrFunction(currentAttr.valueFn, value);

                this.__ATTRS__[attr] = value;
            }
            // else if the attribute has readOnly flag, set the default value from the attribute,
            // regardless if there is value or not
            else if (currentAttr.readOnly) {
                    value = currentAttr.value;
                }
                // else if the attribute has writeOnce value, set it from the passed configuration or from the
                // default value, in this order. Otherwise, return miserable.
                else if (currentAttr.writeOnce) {
                        if (hasPassedValueViaConfig) {
                            value = this.__config__[attr];
                        } else if (hasDefaultValue) {
                            value = currentAttr.value;
                        } else {
                            return;
                        }
                    }
                    // These two cases below are easy - set the value to be from the passed config or
                    // from the default value, in this order.
                    else if (hasPassedValueViaConfig) {
                            value = this.__config__[attr];
                        } else if (hasDefaultValue) {
                            value = currentAttr.value;
                        }

            // If there is validator, and user passed config object - check the returned value.
            // If it is false, then set as initial value the default one.
            // However, if there is no default value, just return.
            if (currentAttr.validator && hasPassedValueViaConfig && !this._callStringOrFunction(currentAttr.validator, value)) {
                if (hasDefaultValue) {
                    value = currentAttr.value;
                } else {
                    return;
                }
            }

            // If there is setter and user passed config object - pass the value thought the setter.
            // The value might be one from defaultFn, default value or provided from the config.
            if (currentAttr.setter && hasPassedValueViaConfig) {
                value = this._callStringOrFunction(currentAttr.setter, value);
            }

            // Finally, set the value as initial value to the storage with values.
            this.__ATTRS__[attr] = value;
        },

        /**
         * Checks if an attribute is initialized. An attribute is considered as initialized
         * when there is an own property with this name in the local collection of attribute values
         * for the current instance.
         *
         * @instance
         * @memberof Attribute
         * @method _isInitialized
         * @param {String} attr The attribute which should be checked if it is initialized.
         * @protected
         * @return {Boolean} Returns true if the attribute has been initialized, false otherwise.
         */
        _isInitialized: function _isInitialized(attr) {
            return Object.prototype.hasOwnProperty.call(this.__ATTRS__, attr);
        }
    };

    AlloyEditor.Attribute = Attribute;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Quick and dirty impl of Base class.
     *
     * @class Base
     * @constructor
     */

    function Base(config) {
        Base.superclass.constructor.call(this, config);

        this.init(config);
    }

    AlloyEditor.OOP.extend(Base, AlloyEditor.Attribute, {
        /**
         * Calls the `initializer` method of each class which extends Base starting from the parent to the child.
         * Will pass the configuration object to each initializer method.
         *
         * @instance
         * @memberof Base
         * @method init
         * @param {Object} config Configuration object
         */
        init: function init(config) {
            this._callChain('initializer', config);
        },

        /**
         * Calls the `destructor` method of each class which extends Base starting from the parent to the child.
         *
         * @instance
         * @memberof Base
         * @method destroy
         */
        destroy: function destroy() {
            this._callChain('destructor');
        },

        /**
         * Calls a method of each class, which is being present in the hierarchy starting from parent to the child.
         *
         * @instance
         * @memberof Base
         * @method _callChain
         * @param {Object|Array} args The arguments with which the method should be invoked
         * @param {String} wat  The method, which should be invoked
         * @protected
         */
        _callChain: function _callChain(wat, args) {
            var arr = [];

            var ctor = this.constructor;

            while (ctor) {
                if (AlloyEditor.Lang.isFunction(ctor.prototype[wat])) {
                    arr.push(ctor.prototype[wat]);
                }

                ctor = ctor.superclass ? ctor.superclass.constructor : null;
            }

            arr = arr.reverse();

            args = AlloyEditor.Lang.isArray(args) ? args : [args];

            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];

                item.apply(this, args);
            }
        }
    });

    AlloyEditor.Base = Base;
})();
'use strict';

(function () {
    'use strict';

    var tableSelectionGetArrowBoxClasses = function tableSelectionGetArrowBoxClasses() {
        return 'ae-arrow-box ae-arrow-box-bottom';
    };

    AlloyEditor.SelectionGetArrowBoxClasses = {
        table: tableSelectionGetArrowBoxClasses
    };
})();
'use strict';

(function () {
    'use strict';

    // Default gutter value for toolbar positioning

    var DEFAULT_GUTTER = {
        left: 0,
        top: 0
    };

    /**
     * Centers a Toolbar according to given rectangle
     *
     * @method centerToolbar
     * @param {Object} toolbar The toolbar to be centered
     * @param {Object} rect The rectangle according to which the Toolbar will be centered
     */
    var centerToolbar = function centerToolbar(toolbar, rect) {
        var toolbarNode = ReactDOM.findDOMNode(toolbar);

        var halfNodeWidth = toolbarNode.offsetWidth / 2;
        var scrollPosition = new CKEDITOR.dom.window(window).getScrollPosition();

        var gutter = toolbar.props.gutter || DEFAULT_GUTTER;

        var widgetXY = toolbar.getWidgetXYPoint(rect.left + rect.width / 2 - scrollPosition.x, rect.top + scrollPosition.y, CKEDITOR.SELECTION_BOTTOM_TO_TOP);

        toolbar.moveToPoint([widgetXY[0], widgetXY[1]], [rect.left + rect.width / 2 - halfNodeWidth - scrollPosition.x, rect.top - toolbarNode.offsetHeight + scrollPosition.y - gutter.top]);
    };

    /**
     * Sets the position of a toolbar according to the position of the selected image
     *
     * @method imageSelectionSetPosition
     * @param {Object} payload Payload, should contain the selection data for retrieving the
     * client rectangle of the selected image
     * @return {Boolean} True, in all cases
     */
    var imageSelectionSetPosition = function imageSelectionSetPosition(payload) {
        centerToolbar(this, payload.selectionData.element.getClientRect());

        return true;
    };

    /**
     * Sets the position of a toolbar according to the position of the selected image
     *
     * @method tableSelectionSetPosition
     * @param {Object} payload Object, which contains the selection data for retrieving the
     * client rectangle of the selected table
     * @return {Boolean} True, in all cases
     */
    var tableSelectionSetPosition = function tableSelectionSetPosition(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        var table = new CKEDITOR.Table(nativeEditor).getFromSelection();

        centerToolbar(this, table.getClientRect());

        return true;
    };

    AlloyEditor.SelectionSetPosition = {
        image: imageSelectionSetPosition,
        table: tableSelectionSetPosition
    };
})();
'use strict';

(function () {
    'use strict';

    var _isRangeAtElementEnd = function _isRangeAtElementEnd(range, element) {
        // Finding if a range is at the end of an element is somewhat tricky due to how CKEditor handles
        // ranges. It might depend on wether a source node inside the element is selected or not. For now,
        // we need to cover the following cases:
        //
        // - The text length of the element is the same as the endOffset of the range
        // - Both start and end containers match the element and the start and end offsets are 1

        return element.getText().length === range.endOffset || element.equals(range.startContainer) && element.equals(range.endContainer) && range.startOffset === range.endOffset && range.endOffset === 1;
    };

    var embedSelectionTest = function embedSelectionTest(payload) {
        var selectionData = payload.data.selectionData;

        return !!(selectionData.element && selectionData.element.getAttribute('data-widget') === 'ae_embed');
    };

    var linkSelectionTest = function linkSelectionTest(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');
        var range = nativeEditor.getSelection().getRanges()[0];
        var selectionData = payload.data.selectionData;

        var selectionDataName;

        var element;

        if (selectionData.element) selectionDataName = selectionData.element.getName();

        return !!(nativeEditor.isSelectionEmpty() && selectionDataName !== 'img' && (element = new CKEDITOR.Link(nativeEditor).getFromSelection()) && element.getText().length !== range.endOffset && !element.isReadOnly() && !_isRangeAtElementEnd(range, element));
    };

    var imageSelectionTest = function imageSelectionTest(payload) {
        var selectionData = payload.data.selectionData;

        var selectionEmpty = false;

        if (payload.editor) {
            var nativeEditor = payload.editor._getNativeEditor();

            selectionEmpty = nativeEditor.isSelectionEmpty();
        }

        return !!(selectionData.element && selectionData.element.getName() === 'img' && !selectionEmpty && !selectionData.element.isReadOnly());
    };

    var textSelectionTest = function textSelectionTest(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        var selectionEmpty = nativeEditor.isSelectionEmpty();

        var selectionData = payload.data.selectionData;

        return !!(!selectionData.element && selectionData.region && !selectionEmpty && !nativeEditor.getSelection().getCommonAncestor().isReadOnly());
    };

    var tableSelectionTest = function tableSelectionTest(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        var table = new CKEDITOR.Table(nativeEditor);
        var element = table.getFromSelection();

        return !!(element && table.isEditable(element));
    };

    AlloyEditor.SelectionTest = {
        embed: embedSelectionTest,
        image: imageSelectionTest,
        link: linkSelectionTest,
        table: tableSelectionTest,
        text: textSelectionTest
    };
})();
'use strict';

(function () {
    'use strict';

    var Selections = [{
        name: 'embed',
        buttons: ['embedRemove', 'embedEdit'],
        test: AlloyEditor.SelectionTest.embed
    }, {
        name: 'link',
        buttons: ['linkEdit'],
        test: AlloyEditor.SelectionTest.link
    }, {
        name: 'image',
        buttons: ['imageLeft', 'imageCenter', 'imageRight'],
        setPosition: AlloyEditor.SelectionSetPosition.image,
        test: AlloyEditor.SelectionTest.image
    }, {
        name: 'text',
        buttons: ['styles', 'bold', 'italic', 'underline', 'link', 'twitter'],
        test: AlloyEditor.SelectionTest.text
    }, {
        name: 'table',
        buttons: ['tableHeading', 'tableRow', 'tableColumn', 'tableCell', 'tableRemove'],
        getArrowBoxClasses: AlloyEditor.SelectionGetArrowBoxClasses.table,
        setPosition: AlloyEditor.SelectionSetPosition.table,
        test: AlloyEditor.SelectionTest.table
    }];

    AlloyEditor.Selections = Selections;
})();
'use strict';

(function () {
    'use strict';

    /**
     * AlloyEditor main class. Creates instance of the editor and provides the user configuration
     * to the UI.
     *
     * @class Core
     * @constructor
     */

    function Core(config) {
        Core.superclass.constructor.call(this, config);
    }

    AlloyEditor.OOP.extend(Core, AlloyEditor.Base, {
        /**
         * Initializer lifecycle implementation for the AlloyEditor class. Creates a CKEditor
         * instance, passing it the provided configuration attributes.
         *
         * @memberof Core
         * @instance
         * @protected
         * @method initializer
         * @param config {Object} Configuration object literal for the editor.
         */
        initializer: function initializer(config) {
            var node = this.get('srcNode');

            if (this.get('enableContentEditable')) {
                node.setAttribute('contenteditable', 'true');
            }

            var editor = CKEDITOR.inline(node);

            editor.config.allowedContent = this.get('allowedContent');

            editor.config.toolbars = this.get('toolbars');

            editor.config.removePlugins = this.get('removePlugins');
            editor.config.extraPlugins = this.get('extraPlugins');
            editor.config.placeholderClass = this.get('placeholderClass');

            editor.config.pasteFromWordRemoveStyles = false;
            editor.config.pasteFromWordRemoveFontStyles = false;

            editor.config.selectionKeystrokes = this.get('selectionKeystrokes');

            AlloyEditor.Lang.mix(editor.config, config);

            if (CKEDITOR.env.ie && !CKEDITOR.env.edge) {
                editor.config.extraPlugins = editor.config.extraPlugins.replace('ae_dragresize', 'ae_dragresize_ie');
                editor.config.removePlugins = editor.config.removePlugins.replace('ae_dragresize', 'ae_dragresize_ie');
            }

            editor.once('contentDom', function () {

                this._addReadOnlyLinkClickListener(editor);

                var editable = editor.editable();

                editable.addClass('ae-editable');
            }.bind(this));

            this._editor = editor;

            AlloyEditor.loadLanguageResources(this._renderUI.bind(this));
        },

        /**
         * Destructor lifecycle implementation for the AlloyEdtor class. Destroys the CKEditor
         * instance and destroys all created toolbars.
         *
         * @memberof Core
         * @instance
         * @protected
         * @method destructor
         */
        destructor: function destructor() {
            this._destroyed = true;

            if (this._editorUIElement) {
                ReactDOM.unmountComponentAtNode(this._editorUIElement);
                this._editorUIElement.parentNode.removeChild(this._editorUIElement);
            }

            var nativeEditor = this.get('nativeEditor');

            if (nativeEditor) {
                var editable = nativeEditor.editable();

                if (editable) {
                    editable.removeClass('ae-editable');

                    if (this.get('enableContentEditable')) {
                        this.get('srcNode').setAttribute('contenteditable', 'false');
                    }
                }

                this._clearSelections();

                nativeEditor.destroy();
            }
        },

        /**
         * Clear selections from window object
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _clearSelections
         */
        _clearSelections: function _clearSelections() {
            var nativeEditor = this.get('nativeEditor');
            var isMSSelection = typeof window.getSelection != 'function';

            if (isMSSelection) {
                nativeEditor.document.$.selection.empty();
            } else {
                nativeEditor.document.getWindow().$.getSelection().removeAllRanges();
            }
        },

        /**
         * Method to set default link behavior
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _addReadOnlyLinkClickListener
         * @param {Object} editor
         */
        _addReadOnlyLinkClickListener: function _addReadOnlyLinkClickListener(editor) {
            editor.editable().on('click', this._defaultReadOnlyClickFn, this, {
                editor: editor
            });
        },

        /**
         * Called on `click` event when the editor is in read only mode. Navigates to link's URL or opens
         * the link in a new window.
         *
         * @memberof Core
         * @instance
         * @event readOnlyClick
         * @protected
         * @method _defaultReadOnlyClickFn
         * @param {Object} event The fired `click` event payload
         */
        _defaultReadOnlyClickFn: function _defaultReadOnlyClickFn(event) {
            var mouseEvent = event.data.$;
            var hasCtrlKey = mouseEvent.ctrlKey || mouseEvent.metaKey;
            var shouldOpen = this._editor.config.readOnly || hasCtrlKey;

            mouseEvent.preventDefault();

            if (!shouldOpen) {
                return;
            }

            if (event.listenerData.editor.editable().editor.fire('readOnlyClick', event.data) !== false) {
                var ckElement = new CKEDITOR.dom.elementPath(event.data.getTarget(), this);
                var link = ckElement.lastElement;

                if (link) {
                    var href = link.$.attributes.href ? link.$.attributes.href.value : null;
                    var target = hasCtrlKey ? '_blank' : link.$.attributes.target ? link.$.attributes.target.value : null;
                    this._redirectLink(href, target);
                }
            }
        },

        /**
         * Retrieves the native CKEditor instance. Having this, the developer may use the API of CKEditor OOTB.
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _getNativeEditor
         * @return {Object} The current instance of CKEditor.
         */
        _getNativeEditor: function _getNativeEditor() {
            return this._editor;
        },

        /**
         * Redirects the browser to a given link
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _redirectLink
         * @param {string} href The href to take the browser to
         * @param {string=} target Specifies where to display the link
         */
        _redirectLink: function _redirectLink(href, target) {
            if (target && href) {
                window.open(href, target);
            } else if (href) {
                window.location.href = href;
            }
        },

        /**
         * Renders the specified from the user toolbars.
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _renderUI
         */
        _renderUI: function _renderUI() {
            if (!this._destroyed) {
                var editorUIElement = document.createElement('div');
                editorUIElement.className = 'ae-ui';

                var uiNode = this.get('uiNode') || document.body;

                uiNode.appendChild(editorUIElement);

                this._mainUI = ReactDOM.render(React.createElement(AlloyEditor.UI, {
                    editor: this,
                    eventsDelay: this.get('eventsDelay'),
                    toolbars: this.get('toolbars')
                }), editorUIElement);

                this._editorUIElement = editorUIElement;

                this.get('nativeEditor').fire('uiReady');
            }
        },

        /**
         * The function returns an HTML element from the passed value. If the passed value is a string, it should be
         * the Id of the element which have to be retrieved from the DOM.
         * If an HTML Element is passed, the element itself will be returned.
         *
         * @memberof Core
         * @instance
         * @method _toElement
         * @protected
         * @param {!(String|HTMLElement)} value String, which have to correspond to an HTML element from the DOM,
         * or the HTML element itself. If Id is passed, the HTML element will be retrieved from the DOM.
         * @return {HTMLElement} An HTML element.
         */
        _toElement: function _toElement(value) {
            if (AlloyEditor.Lang.isString(value)) {
                value = document.getElementById(value);
            }

            return value;
        },

        /**
         * Validates the allowed content attribute. Look
         * [here](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-allowedContent) for more information about the
         * supported values.
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _validateAllowedContent
         * @param {Any} The value to be checked
         * @return {Boolean} True if the current value is valid configuration, false otherwise
         */
        _validateAllowedContent: function _validateAllowedContent(value) {
            return AlloyEditor.Lang.isString(value) || AlloyEditor.Lang.isObject(value) || AlloyEditor.Lang.isBoolean(value);
        },

        /**
         * Validates the value of toolbars attribute
         *
         * @memberof Core
         * @instance
         * @protected
         * @method _validateToolbars
         * @param {Any} The value to be checked
         * @return {Boolean} True if the current value is valid toolbars configuration, false otherwise
         */
        _validateToolbars: function _validateToolbars(value) {
            return AlloyEditor.Lang.isObject(value) || AlloyEditor.Lang.isNull(value);
        }
    }, {
        ATTRS: {
            /**
             * Configures the allowed content for the current instance of AlloyEditor.
             * Look on the [official CKEditor API](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-allowedContent)
             * for more information about the valid values.
             *
             * @memberof Core
             * @instance
             * @property allowedContent
             * @default true
             * @writeOnce
             * @type {Boolean, String, Object}
             */
            allowedContent: {
                validator: '_validateAllowedContent',
                value: true,
                writeOnce: true
            },

            /**
             * Specifies whether AlloyEditor set the contenteditable attribute
             * to "true" on its srcNode.
             *
             * @memberof Core
             * @instance
             * @property enableContentEditable
             * @type Boolean
             * @default true
             * @writeOnce
             */
            enableContentEditable: {
                validator: AlloyEditor.Lang.isBoolean,
                value: true,
                writeOnce: true
            },

            /**
             * The delay (timeout), in ms, after which events such like key or mouse events will be processed.
             *
             * @memberof Core
             * @instance
             * @property eventsDelay
             * @type {Number}
             */
            eventsDelay: {
                validator: AlloyEditor.Lang.isNumber,
                value: 100
            },

            /**
             * Specifies the extra plugins which have to be loaded to the current CKEditor instance in order to
             * make AlloyEditor to work properly.
             *
             * @memberof Core
             * @instance
             * @property extraPlugins
             * @default 'uicore,selectionregion,dragresize,addimages,placeholder,tabletools,tableresize,autolink'
             * @writeOnce
             * @type {String}
             */
            extraPlugins: {
                validator: AlloyEditor.Lang.isString,
                value: 'ae_uicore,ae_selectionregion,ae_selectionkeystrokes,ae_imagealignment,ae_addimages,ae_placeholder,' + 'ae_tabletools,ae_tableresize,ae_autolink,ae_embed,ae_autolist,ae_dragresize,' + 'ae_uibridge,ae_richcombobridge,ae_panelmenubuttonbridge,ae_menubridge,ae_menubuttonbridge,ae_buttonbridge',
                writeOnce: true
            },

            /**
             * Retrieves the native CKEditor instance. Having this, the developer may use the full API of CKEditor.
             *
             * @memberof Core
             * @instance
             * @property nativeEditor
             * @readOnly
             * @type {Object}
             */
            nativeEditor: {
                getter: '_getNativeEditor',
                readOnly: true
            },

            /**
             * Specifies the class, which should be added by Placeholder plugin
             * {{#crossLink "CKEDITOR.plugins.ae_placeholder}}{{/crossLink}}
             * when editor is not focused.
             *
             * @memberof Core
             * @instance
             * @property placeholderClass
             * @default 'ae-placeholder'
             * @writeOnce
             * @type {String}
             */
            placeholderClass: {
                validator: AlloyEditor.Lang.isString,
                value: 'ae-placeholder',
                writeOnce: true
            },

            /**
             * Specifies the plugins, which come by default with CKEditor, but which are not needed by AlloyEditor.
             * These plugins add the default UI for CKeditor, which is no more needed. Please note that AlloyEdtor
             * comes with its own highly optimized copy of CKEditor (just customized via their official download page).
             * This version does not come with the unneeded plugins, so the value of this property won't be needed.
             * However, if you decide to go with the OOTB version of CKEditor, you will have to remove some of the
             * plugins if you decide to use AlloyEditor. Keep in mind that removing these plugins doesn't remove them
             * entirely from CKEditor. It just removes them from its current instance, in which you will use different
             * UI - those of AlloyEditor. You will be fully able to use both OOTB CKEditor and AlloyEditor on the same
             * page!
             *
             * @memberof Core
             * @instance
             * @property removePlugins
             * @default 'contextmenu,toolbar,elementspath,resize,liststyle,link'
             * @writeOnce
             * @type {String}
             */
            removePlugins: {
                validator: AlloyEditor.Lang.isString,
                value: 'contextmenu,toolbar,elementspath,resize,liststyle,link',
                writeOnce: true
            },

            /**
             * Array of manual selection triggers. They can be configured to manually show a specific selection toolbar
             * by forcing the selection type. A selectionKeystroke item consists of a keys property with a [CKEditor keystroke
             * definition](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-keystrokes) and a selection property with
             * the selection name to trigger.
             *
             * @memberof Core
             * @instance
             * @property selectionKeystrokes
             * @type {Array}
             */
            selectionKeystrokes: {
                validator: AlloyEditor.Lang.isArray,
                value: [{
                    keys: CKEDITOR.CTRL + 76 /*L*/
                    , selection: 'link'
                }, {
                    keys: CKEDITOR.CTRL + CKEDITOR.SHIFT + 76 /*L*/
                    , selection: 'embed'
                }]
            },

            /**
             * The Node ID or HTMl node, which AlloyEditor should use as an editable area.
             *
             * @memberof Core
             * @instance
             * @property srcNode
             * @type String | Node
             * @writeOnce
             */
            srcNode: {
                setter: '_toElement',
                writeOnce: true
            },

            /**
             * The toolbars configuration for this editor instance
             *
             * @memberof Core
             * @instance
             * @property {Object} toolbars
             */
            toolbars: {
                validator: '_validateToolbars',
                value: {
                    add: {
                        buttons: ['image', 'embed', 'camera', 'hline', 'table'],
                        tabIndex: 2
                    },
                    styles: {
                        selections: AlloyEditor.Selections,
                        tabIndex: 1
                    }
                }
            },

            /**
             * The Node ID or HTMl node, where AlloyEditor's UI should be rendered.
             *
             * @memberof Core
             * @instance
             * @property uiNode
             * @type String | Node
             * @writeOnce
             */
            uiNode: {
                setter: '_toElement',
                writeOnce: true
            }
        }
    });

    CKEDITOR.event.implementOn(Core);

    AlloyEditor.Core = Core;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonActionStyle is a mixin that provides applying style implementation for a
     * button based on the `applyStyle` and `removeStyle` API of CKEDITOR.
     *
     * To execute properly, the component has to expose the following methods which can be obtained
     * out of the box using the {{#crossLink "ButtonStyle"}}{{/crossLink}} mixin:
     * - `Function` {{#crossLink "ButtonStyle/isActive"}}{{/crossLink}} to check the active state
     * - `Function` {{#crossLink "ButtonStyle/getStyle"}}{{/crossLink}} to return the style that should be applied
     *
     * @class ButtonActionStyle
     */

    var ButtonActionStyle = {
        /**
         * Removes or applies the component style to the current selection.
         *
         * @instance
         * @memberof ButtonActionStyle
         * @method applyStyle
         */
        applyStyle: function applyStyle() {
            if (AlloyEditor.Lang.isFunction(this.isActive) && AlloyEditor.Lang.isFunction(this.getStyle)) {
                var editor = this.props.editor.get('nativeEditor');

                editor.getSelection().lock();

                if (this.isActive()) {
                    editor.removeStyle(this.getStyle());
                } else {
                    editor.applyStyle(this.getStyle());
                }

                editor.getSelection().unlock();

                editor.fire('actionPerformed', this);
            }
        }
    };

    AlloyEditor.ButtonActionStyle = ButtonActionStyle;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonCommandActive is a mixin that provides an `isActive` method to determine if
     * a context-aware command is currently in an active state.
     *
     * @class ButtonCommandActive
     */

    var ButtonCommandActive = {
        /**
         * Checks if the command is active in the current selection.
         *
         * @instance
         * @memberof ButtonCommandActive
         * @method isActive
         * @return {Boolean} True if the command is active, false otherwise.
         */
        isActive: function isActive() {
            var editor = this.props.editor.get('nativeEditor');

            var command = editor.getCommand(this.props.command);

            return command ? command.state === CKEDITOR.TRISTATE_ON : false;
        }
    };

    AlloyEditor.ButtonCommandActive = ButtonCommandActive;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonCommand is a mixin that executes a command via CKEDITOR's API.
     *
     * @class ButtonCommand
     */

    var ButtonCommand = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The command that should be executed.
             *
             * @instance
             * @memberof ButtonCommand
             * @property {String} command
             */
            command: PropTypes.string.isRequired,

            /**
             * Indicates that the command may cause the editor to have a different.
             *
             * @instance
             * @memberof ButtonCommand
             * @property {boolean} modifiesSelection
             */
            modifiesSelection: PropTypes.bool
        },

        /**
         * Executes a CKEditor command and fires `actionPerformed` event.
         *
         * @instance
         * @memberof ButtonCommand
         * @param {Object=} data Optional data to be passed to CKEDITOR's `execCommand` method.
         * @method execCommand
         */
        execCommand: function execCommand(data) {
            var editor = this.props.editor.get('nativeEditor');

            editor.execCommand(this.props.command, data);

            if (this.props.modifiesSelection) {
                editor.selectionChange(true);
            }

            editor.fire('actionPerformed', this);
        }
    };

    AlloyEditor.ButtonCommand = ButtonCommand;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonKeystroke is a mixin that provides a `keystroke` prop that allows configuring
     * a function of the instance to be invoked upon the keystroke activation.
     *
     * @class ButtonKeystroke
     */

    var ButtonKeystroke = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The keystroke definition. An object with the following properties:
             * - fn: The function to be executed
             * - keys: The keystroke definition, as expected by http://docs.ckeditor.com/#!/api/CKEDITOR.editor-method-setKeystroke
             * - name: The name for the CKEditor command that will be created. If empty,
             * a random name will be created on the fly
             *
             * @instance
             * @memberof ButtonKeystroke
             * @property {Object} keystroke
             */
            keystroke: PropTypes.object.isRequired
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @instance
         * @memberof ButtonKeystroke
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            var nativeEditor = this.props.editor.get('nativeEditor');
            var keystroke = this.props.keystroke;

            var commandName = keystroke.name || (Math.random() * 1e9 >>> 0).toString();

            var command = nativeEditor.getCommand(commandName);

            if (!command) {
                command = new CKEDITOR.command(nativeEditor, {
                    exec: function (editor) {
                        var keystrokeFn = keystroke.fn;

                        if (AlloyEditor.Lang.isString(keystrokeFn)) {
                            this[keystrokeFn].call(this, editor);
                        } else if (AlloyEditor.Lang.isFunction(keystrokeFn)) {
                            keystrokeFn.call(this, editor);
                        }
                    }.bind(this)
                });

                nativeEditor.addCommand(commandName, command);
            }

            this._defaultKeystrokeCommand = nativeEditor.keystrokeHandler.keystrokes[keystroke.keys];

            nativeEditor.setKeystroke(keystroke.keys, commandName);
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @instance
         * @memberof ButtonKeystroke
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            this.props.editor.get('nativeEditor').setKeystroke(this.props.keystroke.keys, this._defaultKeystrokeCommand);
        }
    };

    AlloyEditor.ButtonKeystroke = ButtonKeystroke;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonCfgProps is a mixin that provides a style prop and some methods to apply the resulting
     * style and checking if it is present in a given path or selection.
     *
     * @class ButtonCfgProps
     */

    var ButtonCfgProps = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonCfgProps
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired
        },

        /**
         * Merges the properties, passed to the current component with user's configuration
         * via `buttonCfg` property.
         *
         * @instance
         * @memberof ButtonCfgProps
         * @method mergeButtonCfgProps
         * @param {Object} props The properties to be merged with the provided configuration for this
         * button. If not passed, the user configuration will be merged with `this.props`
         * @return {Object} The merged properties
         */
        mergeButtonCfgProps: function mergeButtonCfgProps(props) {
            props = props || this.props;

            var nativeEditor = this.props.editor.get('nativeEditor');
            var buttonCfg = nativeEditor.config.buttonCfg || {};
            var result = CKEDITOR.tools.merge(props, buttonCfg[AlloyEditor.ButtonLinkEdit.key]);

            return result;
        }
    };

    AlloyEditor.ButtonCfgProps = ButtonCfgProps;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonStateClasses is a mixin that decorates the domElement of a component
     * with different CSS classes based on the current state of the element.
     *
     * To check for state, the component can expose the following methods:
     * - `Function` **isActive** to check the active state
     * - `Function` **isDisabled** to check the disabled state
     *
     * @class ButtonStateClasses
     */

    var ButtonStateClasses = {
        /**
         * Returns the list of state classes associated to the current element's state, according
         * to the results of the isActive and isDisabled methods.
         *
         * @instance
         * @memberof ButtonStateClasses
         * @method getStateClasses
         * @return {String} A string with the state CSS classes.
         */
        getStateClasses: function getStateClasses() {
            var stateClasses = '';

            // Check for active state
            if (AlloyEditor.Lang.isFunction(this.isActive) && this.isActive()) {
                stateClasses += 'ae-button-pressed';
            }

            // Check for disabled state
            if (AlloyEditor.Lang.isFunction(this.isDisabled) && this.isDisabled()) {
                stateClasses += ' ae-button-disabled';
            }

            return stateClasses;
        }
    };

    AlloyEditor.ButtonStateClasses = ButtonStateClasses;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonStyle is a mixin that provides a style prop and some methods to apply the resulting
     * style and checking if it is present in a given path or selection.
     *
     * @class ButtonStyle
     */

    var ButtonStyle = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The style the button should handle. Allowed values are:
             * - Object as described by http://docs.ckeditor.com/#!/api/CKEDITOR.style.
             * - String pointing to an object inside the editor instance configuration. For example, `style = 'coreStyles_bold'` will try to
             * retrieve the style object from `editor.config.coreStyles_bold`. Nested properties such as `style = 'myplugin.myConfig.myStyle'`
             * are also supported and will try to retrieve the style object from the editor configuration as well.
             *
             * @instance
             * @memberof ButtonStyle
             * @property {Object|String} style
             */
            style: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @instance
         * @memberof ButtonStyle
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            var Lang = AlloyEditor.Lang;
            var style = this.props.style;

            if (Lang.isString(style)) {
                var parts = style.split('.');
                var currentMember = this.props.editor.get('nativeEditor').config;
                var property = parts.shift();

                while (property && Lang.isObject(currentMember) && Lang.isObject(currentMember[property])) {
                    currentMember = currentMember[property];
                    property = parts.shift();
                }

                if (Lang.isObject(currentMember)) {
                    style = currentMember;
                }
            }

            this._style = new CKEDITOR.style(style);
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @instance
         * @memberof ButtonStyle
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            this._style = null;
        },

        /**
         * Returns instance of CKEDITOR.style which represents the current button style.
         *
         * @instance
         * @memberof ButtonStyle
         * @method getStyle
         * @return {CKEDITOR.style} The current style representation.
         */
        getStyle: function getStyle() {
            return this._style;
        },

        /**
         * Checks if style is active in the current selection.
         *
         * @instance
         * @memberof ButtonStyle
         * @method isActive
         * @return {Boolean} True if style is active, false otherwise.
         */
        isActive: function isActive() {
            var result;

            var editor = this.props.editor.get('nativeEditor');

            var elementPath = editor.elementPath();

            result = this.getStyle().checkActive(elementPath, editor);

            return result;
        }
    };

    AlloyEditor.ButtonStyle = ButtonStyle;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ToolbarButtons is a mixin which provides a list of buttons which have to be
     * displayed on the current toolbar depending on user preferences and given state.
     *
     * @class ToolbarButtons
     */

    var ToolbarButtons = {
        /**
         * Analyzes the current selection and the buttons exclusive mode value to figure out which
         * buttons should be present in a given state.
         *
         * @instance
         * @memberof ToolbarButtons
         * @method getToolbarButtons
         * @param {Array} buttons The buttons could be shown, prior to the state filtering.
         * @param {Object} additionalProps Additional props that should be passed down to the buttons.
         * @return {Array} An Array which contains the buttons that should be rendered.
         */
        getToolbarButtons: function getToolbarButtons(buttons, additionalProps) {
            var buttonProps = {};

            var nativeEditor = this.props.editor.get('nativeEditor');
            var buttonCfg = nativeEditor.config.buttonCfg || {};

            if (AlloyEditor.Lang.isFunction(buttons)) {
                buttons = buttons.call(this) || [];
            }

            var toolbarButtons = this.filterExclusive(buttons.filter(function (button) {
                return button && (AlloyEditor.Buttons[button] || AlloyEditor.Buttons[button.name]);
            }).map(function (button) {
                if (AlloyEditor.Lang.isString(button)) {
                    buttonProps[button] = buttonCfg[button];
                    button = AlloyEditor.Buttons[button];
                } else if (AlloyEditor.Lang.isString(button.name)) {
                    buttonProps[AlloyEditor.Buttons[button.name].key] = CKEDITOR.tools.merge(buttonCfg[button], button.cfg);
                    button = AlloyEditor.Buttons[button.name];
                }

                return button;
            })).map(function (button) {
                var props = this.mergeExclusiveProps({
                    editor: this.props.editor,
                    key: button.key,
                    tabKey: button.key,
                    tabIndex: this.props.trigger && this.props.trigger.props.tabKey === button.key ? 0 : -1,
                    trigger: this.props.trigger
                }, button.key);

                props = this.mergeDropdownProps(props, button.key);

                if (additionalProps) {
                    props = CKEDITOR.tools.merge(props, additionalProps);
                }

                props = CKEDITOR.tools.merge(props, buttonProps[button.key]);

                return React.createElement(button, props);
            }, this);

            return toolbarButtons;
        }
    };

    AlloyEditor.ToolbarButtons = ToolbarButtons;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for displaying Widget Arrow box on top or on bottom of the widget
     * depending on the point of user interaction with the editor.
     *
     * @class WidgetArrowBox
     */

    var WidgetArrowBox = {
        /**
         * Returns the list of arrow box classes associated to the current element's state. It relies
         * on the getInteractionPoint method to calculate the selection direction.
         *
         * @instance
         * @memberof WidgetArrowBox
         * @method getArrowBoxClasses
         * @return {String} A string with the arrow box CSS classes.
         */
        getArrowBoxClasses: function getArrowBoxClasses() {
            var arrowBoxClasses = 'ae-arrow-box';

            if (AlloyEditor.Lang.isFunction(this.getInteractionPoint) && this.getInteractionPoint()) {
                if (this.getInteractionPoint().direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM) {
                    arrowBoxClasses += ' ae-arrow-box-top';
                } else {
                    arrowBoxClasses += ' ae-arrow-box-bottom';
                }
            }

            return arrowBoxClasses;
        }
    };

    AlloyEditor.WidgetArrowBox = WidgetArrowBox;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for managing different dropdowns inside a widget.
     *
     * @class WidgetDropdown
     */

    var WidgetDropdown = {
        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         *
         * @instance
         * @memberof WidgetDropdown
         * @method componentWillReceiveProps
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            this.setState({
                dropdownTrigger: null,
                itemDropdown: null
            });
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         *
         * @instance
         * @memberof WidgetDropdown
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                dropdownTrigger: null,
                itemDropdown: null
            };
        },

        /**
         * Merges the provided object with two more properties:
         * - expanded - boolean flag which indicates if an widget should be rendered exclusively.
         * - toggleDropdown - function, which can be used by an widget in order to obtain exclusive state.
         *
         * @instance
         * @memberof WidgetDropdown
         * @method mergeDropdownProps
         * @param {Object} obj The properties container which should be merged with the properties, related
         *    to dropdown state.
         * @param {Object} itemKey They key of an React Widget which contains the dropdown.
         * @return {Object} The merged object.
         */
        mergeDropdownProps: function mergeDropdownProps(obj, itemKey) {
            return CKEDITOR.tools.merge(obj, {
                expanded: this.state.itemDropdown === itemKey ? true : false,
                tabIndex: this.state.dropdownTrigger === itemKey ? 0 : -1,
                toggleDropdown: this.toggleDropdown.bind(this, itemKey)
            });
        },

        /**
         * Sets the active dropdown of the widget or discards the toggled item from the state.
         *
         * @instance
         * @memberof WidgetDropdown
         * @method toggleDropdown
         * @param {Object} itemDropdown The widget which requests to toggle its dropdown.
         * @param {Number} toggleDirection User movement direction when toggled via keyboard.
         */
        toggleDropdown: function toggleDropdown(itemDropdown, toggleDirection) {
            this.setState({
                dropdownTrigger: itemDropdown,
                itemDropdown: itemDropdown !== this.state.itemDropdown ? itemDropdown : null
            }, function () {
                if (!this.state.itemDropdown) {
                    if (this.moveFocus) {
                        this.moveFocus(toggleDirection);
                    } else {
                        ReactDOM.findDOMNode(this).focus();
                    }
                }
            });
        }
    };

    AlloyEditor.WidgetDropdown = WidgetDropdown;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for managing exclusive state of an widget.
     * The exclusive state means that a button may request to be the only rendered
     * widget in its parent container. WidgetExclusive will manage this state by
     * filtering and suppressing the other sibling widgets from displaying.
     *
     * @class WidgetExclusive
     */

    var WidgetExclusive = {
        /**
         * Cancels the exclusive state of an widget.
         *
         * @instance
         * @memberof WidgetExclusive
         * @method cancelExclusive
         * @param {Object} itemExclusive The widget which exclusive state should be canceled.
         */
        cancelExclusive: function cancelExclusive(itemExclusive) {
            if (this.state.itemExclusive === itemExclusive) {
                this.setState({
                    itemExclusive: null
                });
            }
        },

        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         * Calling this.setState() within this function will not trigger an additional render.
         *
         * @instance
         * @memberof WidgetExclusive
         * @method componentWillReceiveProps
         * @param {Object} nextProps Object containing the current set of properties.
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            // Receiving properties means that the component is being re-rendered.
            // Re-rendering is triggered by editorInteraction, so we have to
            // reset the exclusive state and render the UI according to the new selection.
            this.setState({
                itemExclusive: null
            });
        },

        /**
         * Filters the items and returns only those with exclusive state.
         *
         * @instance
         * @memberof WidgetExclusive
         * @method filterExclusive
         * @param {Array} items The widgets to be filtered.
         * @return {Array|Object} The item with executive state.
         */
        filterExclusive: function filterExclusive(items) {
            return items.filter(function (item) {
                if (this.state.itemExclusive) {
                    if (this.state.itemExclusive === item.key) {
                        return item;
                    }
                } else {
                    return item;
                }
            }.bind(this));
        },

        /**
         * Merges the provided object with three more properties:
         * - cancelExclusive - function, which can be used by a widget in order to cancel executive state.
         * - renderExclusive - boolean flag which indicates if an widget should be rendered exclusively.
         * - requestExclusive - function, which can be used by a widget in order to obtain exclusive state.
         *
         * @instance
         * @memberof WidgetExclusive
         * @method mergeExclusiveProps
         * @param {Object} obj The properties container which should be merged with the properties, related
         *    to exclusive state.
         * @param {Object} itemKey They key of an React Widget which should be rendered exclusively.
         * @return {Object} The merged object.
         */
        mergeExclusiveProps: function mergeExclusiveProps(obj, itemKey) {
            return CKEDITOR.tools.merge(obj, {
                cancelExclusive: this.cancelExclusive.bind(this, itemKey),
                renderExclusive: this.state.itemExclusive === itemKey,
                requestExclusive: this.requestExclusive.bind(this, itemKey)
            });
        },

        /**
         * Requests and sets exclusive state of an widget.
         *
         * @instance
         * @memberof WidgetExclusive
         * @method requestExclusive
         * @param {Object} itemExclusive The widget which requests exclusive state.
         */
        requestExclusive: function requestExclusive(itemExclusive) {
            this.setState({
                itemExclusive: itemExclusive
            });
        }
    };

    AlloyEditor.WidgetExclusive = WidgetExclusive;
})();
'use strict';

(function () {
    'use strict';

    var DIRECTION_NONE = 0;
    var DIRECTION_NEXT = 1;
    var DIRECTION_PREV = -1;

    var ACTION_NONE = 0;
    var ACTION_MOVE_FOCUS = 1;
    var ACTION_DISMISS_FOCUS = 2;

    /**
     * WidgetFocusManager is a mixin that provides keyboard navigation inside a widget. To do this,
     * it exposes the following props and methods:
     *
     * @class WidgetFocusManager
     */
    var WidgetFocusManager = {
        // Allows validating props being passed to the component.
        propTypes: {

            /**
             * Callback method to be invoked when the focus manager is to be dismissed. This happens
             * in the following scenarios if a dismiss callback has been specified:
             * - A dismiss key has been pressed
             * - In a non-circular focus manager, when:
             *     - The active descendant is the first one and a prev key has been pressed.
             *     - The active descendant is the last one and a next key has been pressed.
             *
             * @instance
             * @memberof WidgetFocusManager
             * @property {Function} onDismiss
             */
            onDismiss: PropTypes.func,

            /**
             * Indicates if focus should be set to the first/last descendant when the limits are reached.
             *
             * @instance
             * @memberof WidgetFocusManager
             * @property {boolean} circular
             */
            circular: PropTypes.bool.isRequired,

            /**
             * Indicate if should focus the first child of a container
             * @instance
             * @memberof WidgetFocusManager
             * @property {Boolean} focusFirstChild
             */
            focusFirstChild: PropTypes.bool,

            /**
             * String representing the CSS selector used to define the elements that should be handled.
             *
             * @instance
             * @memberof WidgetFocusManager
             * @property {String} descendants
             */
            descendants: PropTypes.string.isRequired,

            /**
             * Object representing the keys used to navigate between descendants. The format for the prop is:
             * `{dismiss: value, dismissNext: value, dismissPrev: value, next: value, prev: value}` where
             * value can be both a number or an array of numbers with the allowed keyCodes.
             *
             * @instance
             * @memberof WidgetFocusManager
             * @property {Object} keys
             */
            keys: PropTypes.object.isRequired
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            this._refresh();
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * Refreshes the descendants list.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method componentDidUpdate
         */
        componentDidUpdate: function componentDidUpdate() {
            this._refresh();
        },

        /**
         * Focuses the current active descendant.
         *
         * Several Widgets can be nested in a component hierarchy by attaching this focus method to
         * the widget DOM node, transferring the DOM focus control to the inner FocusManager.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method focus
         */
        focus: function focus(event) {
            if (!event || this._isValidTarget(event.target)) {
                if (this._descendants && this._descendants.length) {
                    var activeDescendantEl = this._descendants[this._activeDescendant];
                    // When user clicks with the mouse, the activeElement is already set and there
                    // is no need to focus it. Focusing of the active descendant (usually some button) is required
                    // in case of keyboard navigation, because the focused element might be not the first button,
                    // but the div element, which contains the button.
                    if (document.activeElement !== activeDescendantEl && !this.props.focusFirstChild) {
                        if (this._descendants.indexOf(document.activeElement) === -1) {
                            activeDescendantEl.focus();
                        }
                    }

                    if (event) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                }
            }
        },

        /**
         * Handles the key events on a DOM node to execute the appropriate navigation when needed.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @param {Object} event The Keyboard event that was detected on the widget DOM node.
         * @method handleKey
         */
        handleKey: function handleKey(event) {
            if (this._isValidTarget(event.target) && this._descendants) {
                var action = this._getFocusAction(event);

                if (action.type) {
                    event.stopPropagation();
                    event.preventDefault();

                    if (action.type === ACTION_MOVE_FOCUS) {
                        this._moveFocus(action.direction);
                    }

                    if (action.type === ACTION_DISMISS_FOCUS) {
                        this.props.onDismiss(action.direction);
                    }
                }
            }
        },

        /**
         * Moves the focus among descendants in the especified direction.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method moveFocus
         * @param {number} direction The direction (1 or -1) of the focus movement among descendants.
         */
        moveFocus: function moveFocus(direction) {
            direction = AlloyEditor.Lang.isNumber(direction) ? direction : 0;

            this._moveFocus(direction);
        },

        /**
         * Returns the action, if any, that a keyboard event in the current focus manager state
         * should produce.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _getFocusAction
         * @param {object} event The Keyboard event.
         * @protected
         * @return {Object} An action object with type and direction properties.
         */
        _getFocusAction: function _getFocusAction(event) {
            var action = {
                type: ACTION_NONE
            };

            if (this.props.keys) {
                var direction = this._getFocusMoveDirection(event);

                if (direction) {
                    action.direction = direction;
                    action.type = ACTION_MOVE_FOCUS;
                }

                var dismissAction = this._getFocusDismissAction(event, direction);

                if (dismissAction.dismiss) {
                    action.direction = dismissAction.direction;
                    action.type = ACTION_DISMISS_FOCUS;
                }
            }

            return action;
        },

        /**
         * Returns the dismiss action, if any, the focus manager should execute to yield the focus. This
         * will happen in any of these scenarios if a dismiss callback has been specified:
         * - A dismiss key has been pressed
         * - In a non-circular focus manager, when:
         *     - The active descendant is the first one and a prev key has been pressed.
         *     - The active descendant is the last one and a next key has been pressed.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _getFocusDismissAction
         * @param {Number} focusMoveDirection The focus movement direction (if any).
         * @param {Object} event The Keyboard event.
         * @protected
         * @return {Object} A dismiss action with dismiss and direction properties.
         */
        _getFocusDismissAction: function _getFocusDismissAction(event, focusMoveDirection) {
            var dismissAction = {
                direction: focusMoveDirection,
                dismiss: false
            };

            if (this.props.onDismiss) {
                if (this._isValidKey(event.keyCode, this.props.keys.dismiss)) {
                    dismissAction.dismiss = true;
                }
                if (this._isValidKey(event.keyCode, this.props.keys.dismissNext)) {
                    dismissAction.dismiss = true;
                    dismissAction.direction = DIRECTION_NEXT;
                }
                if (this._isValidKey(event.keyCode, this.props.keys.dismissPrev)) {
                    dismissAction.dismiss = true;
                    dismissAction.direction = DIRECTION_PREV;
                }

                if (!dismissAction.dismiss && !this.props.circular && focusMoveDirection) {
                    dismissAction.dismiss = focusMoveDirection === DIRECTION_PREV && this._activeDescendant === 0 || focusMoveDirection === DIRECTION_NEXT && this._activeDescendant === this._descendants.length - 1;
                }
            }

            return dismissAction;
        },

        /**
         * Returns the direction, if any, in which the focus should be moved. In presence of the
         * shift key modifier, the direction of the movement is inverted.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _getFocusMoveDirection
         * @param {Object} event The Keyboard event.
         * @protected
         * @return {Number} The computed direction of the expected focus movement.
         */
        _getFocusMoveDirection: function _getFocusMoveDirection(event) {
            var direction = DIRECTION_NONE;

            if (this._isValidKey(event.keyCode, this.props.keys.next)) {
                direction = DIRECTION_NEXT;
            }
            if (this._isValidKey(event.keyCode, this.props.keys.prev)) {
                direction = DIRECTION_PREV;
            }

            if (event.shifKey) {
                direction *= -1;
            }

            return direction;
        },

        /**
         * Indicates if a given keyCode is valid for the given set of keys.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _isValidKey
         * @param {Array|Number} keys A key set. Can be a number an array of numbers representing the allowed keyCodes.
         * @param {Number} keyCode An event keyCode.
         * @protected
         * @return {Boolean} A boolean value indicating if the key is valid.
         */
        _isValidKey: function _isValidKey(keyCode, keys) {
            return AlloyEditor.Lang.isArray(keys) ? keys.indexOf(keyCode) !== -1 : keyCode === keys;
        },

        /**
         * Indicates if a given element is valid for focus management. User input elements such as
         * input, select or textarea are excluded.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _isValidKey
         * @param {DOMNode} element A DOM element.
         * @protected
         * @return {Boolean} A boolean value indicating if the element is valid.
         */
        _isValidTarget: function _isValidTarget(element) {
            var tagName = element.tagName.toLowerCase();

            return tagName !== 'input' && tagName !== 'select' && tagName !== 'textarea';
        },

        /**
         * Moves the focus among descendants in the especified direction.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _moveFocus
         * @param {number} direction The direction (1 or -1) of the focus movement among descendants.
         * @protected
         */
        _moveFocus: function _moveFocus(direction) {
            var numDescendants = this._descendants.length;

            var descendant = this._descendants[this._activeDescendant];

            descendant.setAttribute('tabIndex', -1);

            this._activeDescendant += direction;

            if (this.props.circular) {
                // Calculate proper modulo result since remainder operator doesn't behave in the
                // same way for negative numbers
                this._activeDescendant = (this._activeDescendant % numDescendants + numDescendants) % numDescendants;
            } else {
                this._activeDescendant = Math.max(Math.min(this._activeDescendant, numDescendants - 1), 0);
            }

            descendant = this._descendants[this._activeDescendant];

            descendant.setAttribute('tabIndex', 0);
            descendant.focus();
        },

        /**
         * Refreshes the descendants list by executing the CSS selector again and resets the descendants tabIndex.
         *
         * @instance
         * @memberof WidgetFocusManager
         * @method _refresh
         * @protected
         */
        _refresh: function _refresh() {
            var domNode = ReactDOM.findDOMNode(this);

            if (domNode) {
                var descendants = domNode.querySelectorAll(this.props.descendants);

                var priorityDescendants = [];

                this._descendants = [];

                Array.prototype.slice.call(descendants).forEach(function (item) {
                    var dataTabIndex = item.getAttribute('data-tabindex');

                    if (dataTabIndex) {
                        priorityDescendants.push(item);
                    } else {
                        this._descendants.push(item);
                    }
                }.bind(this));

                priorityDescendants = priorityDescendants.sort(function (a, b) {
                    return AlloyEditor.Lang.toInt(a.getAttribute('data-tabindex')) > AlloyEditor.Lang.toInt(b.getAttribute('data-tabindex'));
                });

                this._descendants = priorityDescendants.concat(this._descendants);

                this._activeDescendant = 0;

                this._descendants.some(function (item, index) {
                    if (item.getAttribute('tabindex') === '0') {
                        this._activeDescendant = index;
                        this.focus();

                        return true;
                    }
                }.bind(this));
            }
        }
    };

    AlloyEditor.WidgetFocusManager = WidgetFocusManager;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for calculating the point of interaction of the user with the Editor.
     *
     * @class WidgetInteractionPoint
     */

    var WidgetInteractionPoint = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The provided editor event.
             *
             * @instance
             * @memberof WidgetInteractionPoint
             * @property {SyntheticEvent} editorEvent
             */
            editorEvent: PropTypes.object
        },

        /**
         * Returns the position, in page coordinates, according to which a widget should appear.
         * Depending on the direction of the selection, the wdiget may appear above of or on bottom of the selection.
         *
         * It depends on the props editorEvent to analyze the following user-interaction parameters:
         * - {Object} selectionData The data about the selection in the editor as returned from
         * {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getSelectionData:method"}}{{/crossLink}}
         * - {Number} pos Contains the coordinates of the position, considered as most appropriate.
         * This may be the point where the user released the mouse, or just the beginning or the end of
         * the selection.
         *
         * @instance
         * @memberof WidgetInteractionPoint
         * @method getInteractionPoint
         * @return {Object} An Object which contains the following properties:
         * direction, x, y, where x and y are in page coordinates and direction can be one of these:
         * CKEDITOR.SELECTION_BOTTOM_TO_TOP or CKEDITOR.SELECTION_TOP_TO_BOTTOM
         */
        getInteractionPoint: function getInteractionPoint() {
            var eventPayload = this.props.editorEvent ? this.props.editorEvent.data : null;

            if (!eventPayload) {
                return;
            }

            var selectionData = eventPayload.selectionData;

            var nativeEvent = eventPayload.nativeEvent;

            var pos = {
                x: eventPayload.nativeEvent.pageX,
                y: selectionData.region.top
            };

            var direction = selectionData.region.direction;

            var endRect = selectionData.region.endRect;

            var startRect = selectionData.region.startRect;

            if (endRect && startRect && startRect.top === endRect.top) {
                direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP;
            }

            var x;
            var y;

            // If we have the point where user released the mouse, show Toolbar at this point
            // otherwise show it on the middle of the selection.

            if (pos.x && pos.y) {
                x = this._getXPoint(selectionData, pos.x);

                if (direction === CKEDITOR.SELECTION_BOTTOM_TO_TOP) {
                    y = Math.min(pos.y, selectionData.region.top);
                } else {
                    y = Math.max(pos.y, this._getYPoint(selectionData, nativeEvent));
                }
            } else {
                x = selectionData.region.left + selectionData.region.width / 2;

                if (direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM) {

                    y = this._getYPoint(selectionData, nativeEvent);
                } else {
                    y = selectionData.region.top;
                }
            }

            return {
                direction: direction,
                x: x,
                y: y
            };
        },

        /**
         * Returns the position of the Widget.
         *
         * @instance
         * @memberof WidgetInteractionPoint
         * @method _getXPoint
         * @param {Object} eventX The X coordinate received from the native event (mouseup).
         * @param {Object} selectionData The data about the selection in the editor as returned from {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getSelectionData:method"}}{{/crossLink}}
         * @protected
         * @return {Number} The calculated X point in page coordinates.
         */
        _getXPoint: function _getXPoint(selectionData, eventX) {
            var region = selectionData.region;

            var left = region.startRect ? region.startRect.left : region.left;
            var right = region.endRect ? region.endRect.right : region.right;

            var x;

            if (left < eventX && right > eventX) {
                x = eventX;
            } else {
                var leftDist = Math.abs(left - eventX);
                var rightDist = Math.abs(right - eventX);

                if (leftDist < rightDist) {
                    // user raised the mouse on left on the selection
                    x = left;
                } else {
                    x = right;
                }
            }

            return x;
        },

        /**
         * Returns the position of the Widget.
         *
         * @instance
         * @memberof WidgetInteractionPoint
         * @method _getYPoint
         * @param {Object} nativeEvent The data about event is fired
         * @param {Object} selectionData The data about the selection in the editor as returned from {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getSelectionData:method"}}{{/crossLink}}
         * @protected
         * @return {Number} The calculated Y point in page coordinates.
         */
        _getYPoint: function _getYPoint(selectionData, nativeEvent) {
            var y = 0;

            if (selectionData && nativeEvent) {
                var elementTarget = new CKEDITOR.dom.element(nativeEvent.target);

                if (elementTarget.$ && elementTarget.getStyle('overflow') === 'auto') {
                    y = nativeEvent.target.offsetTop + nativeEvent.target.offsetHeight;
                } else {
                    y = selectionData.region.bottom;
                }
            }

            return y;
        }
    };

    AlloyEditor.WidgetInteractionPoint = WidgetInteractionPoint;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Calculates the position where an Widget should be displayed based on the point
     * where user interacted with the editor.
     *
     * @class WidgetPosition
     * @uses WidgetInteractionPoint
     */

    var WidgetPosition = {
        mixins: [AlloyEditor.WidgetInteractionPoint],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * Should the widget to be restricted to the viewport, or not.
             *
             * @instance
             * @memberof WidgetPosition
             * @property {Boolean} constrainToViewport
             * @default true
             */
            constrainToViewport: PropTypes.bool,

            /**
             * The gutter (vertical and horizontal) between the interaction point and where the widget
             * should be rendered.
             *
             * @instance
             * @memberof WidgetPosition
             * @property {Object} gutter
             * @default {
             *     left: 0,
             *     top: 10
             * }
             */
            gutter: PropTypes.object
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof WidgetPosition
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                gutter: {
                    left: 0,
                    top: 10
                },
                constrainToViewport: true
            };
        },

        /**
         * Cancels an scheduled animation frame.
         *
         * @instance
         * @memberof WidgetPosition
         * @method cancelAnimation
         */
        cancelAnimation: function cancelAnimation() {
            if (window.cancelAnimationFrame) {
                window.cancelAnimationFrame(this._animationFrameId);
            }
        },

        /**
         * Returns an object which contains the position of the element in page coordinates,
         * restricted to fit to given viewport.
         *
         * @instance
         * @memberof WidgetPosition
         * @method getConstrainedPosition
         * @param {Object} attrs The following properties, provided as numbers:
         * - height
         * - left
         * - top
         * - width
         * @param {Object} viewPaneSize Optional. If not provided, the current viewport will be used. Should contain at least these properties:
         * - width
         * @return {Object} An object with `x` and `y` properties, which represent the constrained position of the
         * element.
         */
        getConstrainedPosition: function getConstrainedPosition(attrs, viewPaneSize) {
            viewPaneSize = viewPaneSize || new CKEDITOR.dom.window(window).getViewPaneSize();

            var x = attrs.left;
            var y = attrs.top;

            if (attrs.left + attrs.width > viewPaneSize.width) {
                x -= attrs.left + attrs.width - viewPaneSize.width;
            }

            if (y < 0) {
                y = 0;
            }

            return {
                x: x,
                y: y
            };
        },

        /**
         * Returns the position of the Widget taking in consideration the
         * {{#crossLink "WidgetPosition/gutter:attribute"}}{{/crossLink}} attribute.
         *
         * @instance
         * @memberof WidgetPosition
         * @protected
         * @method  getWidgetXYPoint
         * @param {Number} left The left offset in page coordinates where Toolbar should be shown.
         * @param {Number} top The top offset in page coordinates where Toolbar should be shown.
         * @param {Number} direction The direction of the selection. May be one of the following:
         * CKEDITOR.SELECTION_BOTTOM_TO_TOP or CKEDITOR.SELECTION_TOP_TO_BOTTOM
         * @return {Array} An Array with left and top offsets in page coordinates.
         */
        getWidgetXYPoint: function getWidgetXYPoint(left, top, direction) {
            var domNode = ReactDOM.findDOMNode(this);

            var gutter = this.props.gutter;

            if (direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM || direction === CKEDITOR.SELECTION_BOTTOM_TO_TOP) {
                left = left - gutter.left - domNode.offsetWidth / 2;

                top = direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM ? top + gutter.top : top - domNode.offsetHeight - gutter.top;
            } else if (direction === CKEDITOR.SELECTION_LEFT_TO_RIGHT || direction === CKEDITOR.SELECTION_RIGHT_TO_LEFT) {

                left = direction === CKEDITOR.SELECTION_LEFT_TO_RIGHT ? left + gutter.left + domNode.offsetHeight / 2 : left - 3 * domNode.offsetHeight / 2 - gutter.left;

                top = top - gutter.top - domNode.offsetHeight / 2;
            }

            if (left < 0) {
                left = 0;
            }

            if (top < 0) {
                top = 0;
            }

            return [left, top];
        },

        /**
         * Returns true if the widget is visible, false otherwise
         *
         * @instance
         * @memberof WidgetPosition
         * @method isVisible
         * @return {Boolean} True if the widget is visible, false otherwise
         */
        isVisible: function isVisible() {
            var domNode = ReactDOM.findDOMNode(this);

            if (domNode) {
                var domElement = new CKEDITOR.dom.element(domNode);

                return domElement.hasClass('alloy-editor-visible');
            }

            return false;
        },

        /**
         * Moves a widget from a starting point to a destination point.
         *
         * @instance
         * @memberof WidgetPosition
         * @method moveToPoint
         * @param  {Object} startPoint The starting point for the movement.
         * @param  {Object} endPoint The destination point for the movement.
         */
        moveToPoint: function moveToPoint(startPoint, endPoint) {
            var domElement = new CKEDITOR.dom.element(ReactDOM.findDOMNode(this));

            domElement.setStyles({
                left: startPoint[0] + 'px',
                top: startPoint[1] + 'px',
                opacity: 0
            });

            domElement.removeClass('alloy-editor-invisible');

            this._animate(function () {
                domElement.addClass('ae-toolbar-transition');
                domElement.addClass('alloy-editor-visible');
                domElement.setStyles({
                    left: endPoint[0] + 'px',
                    top: endPoint[1] + 'px',
                    opacity: 1
                });
            });
        },

        /**
         * Shows the widget with the default animation transition.
         *
         * @instance
         * @memberof WidgetPosition
         * @method show
         */
        show: function show() {
            var domNode = ReactDOM.findDOMNode(this);

            if (!this.isVisible() && domNode) {
                var interactionPoint = this.getInteractionPoint();

                if (interactionPoint) {
                    var domElement = new CKEDITOR.dom.element(domNode);

                    var finalX, finalY, initialX, initialY;

                    finalX = initialX = parseFloat(domElement.getStyle('left'));
                    finalY = initialY = parseFloat(domElement.getStyle('top'));

                    if (this.props.constrainToViewport) {
                        var res = this.getConstrainedPosition({
                            height: parseFloat(domNode.offsetHeight),
                            left: finalX,
                            top: finalY,
                            width: parseFloat(domNode.offsetWidth)
                        });

                        finalX = res.x;
                        finalY = res.y;
                    }

                    if (interactionPoint.direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM) {
                        initialY = this.props.selectionData.region.bottom;
                    } else {
                        initialY = this.props.selectionData.region.top;
                    }

                    this.moveToPoint([initialX, initialY], [finalX, finalY]);
                }
            }
        },

        /**
         * Updates the widget position based on the current interaction point.
         *
         * @instance
         * @memberof WidgetPosition
         * @method updatePosition
         */
        updatePosition: function updatePosition() {
            var interactionPoint = this.getInteractionPoint();

            var domNode = ReactDOM.findDOMNode(this);

            if (interactionPoint && domNode) {
                var xy = this.getWidgetXYPoint(interactionPoint.x, interactionPoint.y, interactionPoint.direction);

                new CKEDITOR.dom.element(domNode).setStyles({
                    left: xy[0] + 'px',
                    top: xy[1] + 'px'
                });
            }
        },

        /**
         * Requests an animation frame, if possible, to simulate an animation.
         *
         * @instance
         * @memberof WidgetPosition
         * @method _animate
         * @param {Function} callback The function to be executed on the scheduled frame.
         * @protected
         */
        _animate: function _animate(callback) {
            if (window.requestAnimationFrame) {
                this._animationFrameId = window.requestAnimationFrame(callback);
            } else {
                callback();
            }
        }
    };

    AlloyEditor.WidgetPosition = WidgetPosition;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonBold class provides functionality for styling an selection with strong (bold) style.
     *
     * @class ButtonBold
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonBold = createReactClass({
        displayName: 'ButtonBold',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonBold
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonBold
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonBold
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default bold
             * @memberof ButtonBold
             * @property {String} key
             * @static
             */
            key: 'bold'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonBold
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'bold',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 66 /*B*/
                },
                style: 'coreStyles_bold'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonBold
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.bold, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-bold', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.bold },
                React.createElement('span', { className: 'ae-icon-bold' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonBold.key] = AlloyEditor.ButtonBold = ButtonBold;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCameraImage class takes photo from camera and inserts it to the content.
     *
     * @class ButtonCameraImage
     */

    var ButtonCameraImage = createReactClass({
        displayName: 'ButtonCameraImage',

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default cameraImage
             * @memberof ButtonCameraImage
             * @property {String} key
             * @static
             */
            key: 'cameraImage'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonCameraImage
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                videoWidth: 320
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses the take photo button.
         *
         * @instance
         * @memberof ButtonCameraImage
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            ReactDOM.findDOMNode(this.refs.buttonTakePhoto).focus();
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @instance
         * @memberof ButtonCameraImage
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            if (this._stream) {
                if (this._stream.stop) {
                    this._stream.stop();
                } else if (this._stream.getVideoTracks) {
                    this._stream.getVideoTracks().forEach(function (track) {
                        track.stop();
                    });
                }
                this._stream = null;
            }
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonCameraImage
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            getUserMedia.call(navigator, {
                video: true,
                audio: false
            }, this._handleStreamSuccess, this._handleStreamError);

            return React.createElement(
                'div',
                { className: 'ae-camera' },
                React.createElement(
                    'video',
                    { ref: 'videoContainer' },
                    'Video stream not available.'
                ),
                React.createElement(
                    'button',
                    { className: 'ae-camera-shoot', onClick: this.takePhoto, ref: 'buttonTakePhoto' },
                    'Take photo'
                ),
                React.createElement('canvas', { className: 'ae-camera-canvas', ref: 'canvasContainer' })
            );
        },

        /**
         * Takes photo from the video stream and inserts in into editor's content.
         *
         * @fires ButtonCameraImage#imageCameraAdd
         * @instance
         * @memberof ButtonCameraImage
         * @method takePhoto
         */
        takePhoto: function takePhoto() {
            var videoEl = ReactDOM.findDOMNode(this.refs.videoContainer);
            var canvasEl = ReactDOM.findDOMNode(this.refs.canvasContainer);

            var context = canvasEl.getContext('2d');

            var height = this._videoHeight;
            var width = this.props.videoWidth;

            if (width && height) {
                canvasEl.width = width;
                canvasEl.height = height;

                context.drawImage(videoEl, 0, 0, width, height);

                var imgURL = canvasEl.toDataURL('image/png');

                var el = CKEDITOR.dom.element.createFromHtml('<img src="' + imgURL + '">');

                var editor = this.props.editor.get('nativeEditor');

                editor.insertElement(el);

                this.props.cancelExclusive();

                editor.fire('actionPerformed', this);

                editor.fire('imageCameraAdd', el);
            }
        },

        /**
         * Displays error message in case of video stream capturing failure.
         *
         * @instance
         * @memberof ButtonCameraImage
         * @method _handleStreamError
         * @param {Event} error The fired event in case of error.
         * @protected
         */
        _handleStreamError: function _handleStreamError(error) {
            window.alert('An error occurred! ' + error);
        },

        /**
         * Starts streaming video in the video element and sets width/height to the video
         * and canvas elements.
         *
         * @instance
         * @memberof ButtonCameraImage
         * @method _handleStreamSuccess
         * @param {Object} stream The video stream
         * @protected
         */
        _handleStreamSuccess: function _handleStreamSuccess(stream) {
            var videoEl = ReactDOM.findDOMNode(this.refs.videoContainer);
            var canvasEl = ReactDOM.findDOMNode(this.refs.canvasContainer);

            videoEl.addEventListener('canplay', function (event) {
                var height = videoEl.videoHeight / (videoEl.videoWidth / this.props.videoWidth);

                if (isNaN(height)) {
                    height = this.props.videoWidth / (4 / 3);
                }

                videoEl.setAttribute('width', this.props.videoWidth);
                videoEl.setAttribute('height', height);
                canvasEl.setAttribute('width', this.props.videoWidth);
                canvasEl.setAttribute('height', height);

                this._videoHeight = height;
            }.bind(this), false);

            this._stream = stream;

            if (navigator.mozGetUserMedia) {
                videoEl.mozSrcObject = stream;
            } else {
                videoEl.src = (window.URL || window.webkitURL).createObjectURL(stream);
            }

            videoEl.play();

            ReactDOM.findDOMNode(this.refs.buttonTakePhoto).disabled = false;
        }

        /**
         * Fired when an image is being taken from the camera and added as an element to the editor.
         *
         * @event ButtonCameraImage#imageCameraAdd
         * @memberof ButtonCameraImage
         * @param {CKEDITOR.dom.element} el The created img element in editor.
         */
    });

    AlloyEditor.ButtonCameraImage = ButtonCameraImage;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCamera class renders in two different ways:
     *
     * - Normal: Just a button that allows to switch to the edition mode.
     * - Exclusive: Renders ButtonCameraImage in order to take photo from the camera.
     *
     * @class ButtonCamera
     */

    var ButtonCamera = createReactClass({
        displayName: 'ButtonCamera',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             * @instance
             * @memberof ButtonCamera
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             * @instance
             * @memberof ButtonCamera
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             * @instance
             * @memberof ButtonCamera
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default camera
             * @memberof ButtonCamera
             * @property {String} key
             * @static
             */
            key: 'camera'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonCamera
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.renderExclusive) {
                return React.createElement(AlloyEditor.ButtonCameraImage, this.props);
            } else {
                var disabled = !(navigator.getUserMedia || navigator.webkitGetUserMedia && location.protocol === 'https' || navigator.mozGetUserMedia || navigator.msGetUserMedia);

                var label = disabled ? AlloyEditor.Strings.cameraDisabled : AlloyEditor.Strings.camera;

                return React.createElement(
                    'button',
                    { 'aria-label': label, className: 'ae-button', 'data-type': 'button-image-camera', disabled: disabled, onClick: this.props.requestExclusive.bind(ButtonCamera.key), tabIndex: this.props.tabIndex, title: label },
                    React.createElement('span', { className: 'ae-icon-camera' })
                );
            }
        }
    });

    AlloyEditor.Buttons[ButtonCamera.key] = AlloyEditor.ButtonCamera = ButtonCamera;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCode class provides wraps a selection in `pre` element.
     *
     * @class ButtonCode
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonCode = createReactClass({
        displayName: 'ButtonCode',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonCode
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonCode
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonCode
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default code
             * @memberof ButtonCode
             * @property {String} key
             * @static
             */
            key: 'code'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonCode
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'pre'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonCode
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.code, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-code', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.code },
                React.createElement('span', { className: 'ae-icon-code' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonCode.key] = AlloyEditor.ButtonCode = ButtonCode;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCommandListItem class is a UI class that renders a ButtonCommand that can be used inside
     * a list as an item, with a string representation of its behaviour.
     *
     * @class ButtonCommandListItem
     * @uses ButtonCommand
     */

    var ButtonCommandListItem = createReactClass({
        displayName: 'ButtonCommandListItem',

        mixins: [AlloyEditor.ButtonCommand],

        propTypes: {
            /**
             * The command label or description to render in the list entry.
             *
             * @instance
             * @memberof ButtonCommandListItem
             * @property {String} description
             */
            description: PropTypes.string.isRequired,

            /**
             * The command icon to render in the list entry.
             *
             * @instance
             * @memberof ButtonCommandListItem
             * @property {String} icon
             */
            icon: PropTypes.string
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default buttonCommandListItem
             * @memberof ButtonCommandListItem
             * @property {String} key
             * @static
             */
            key: 'buttonCommandListItem'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonCommandListItem
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': this.props.description, className: this._getClassName(), onClick: this.execCommand, tabIndex: this.props.tabIndex },
                this.props.description
            );
        },

        /**
         * Returns the class name of Widget.
         *
         * @instance
         * @memberof ButtonCommandListItem
         * @method _getClassName
         * @protected
         * @return {String} The class name of the Widget.
         */
        _getClassName: function _getClassName() {
            var className = 'ae-toolbar-element';

            if (this.props.icon) {
                className += ' ae-icon-' + this.props.icon;
            }

            return className;
        }
    });

    AlloyEditor.ButtonCommandListItem = ButtonCommandListItem;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCommandsList class provides functionality for showing a list of commands that can be
     * executed to the current selection..
     *
     * @class ButtonCommandsList
     * @uses WidgetFocusManager
     */

    var ButtonCommandsList = createReactClass({
        displayName: 'ButtonCommandsList',

        mixins: [AlloyEditor.WidgetFocusManager],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @instance
             * @memberof ButtonCommandsList
             * @property {Array} commands
             */
            commands: PropTypes.arrayOf(PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonCommandsList
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * List id to be used for accessibility purposes such as aria-owns.
             *
             * @instance
             * @memberof ButtonCommandsList
             * @property {String} listId
             */
            listId: PropTypes.string
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default buttonCommandsList
             * @memberof ButtonCommandsList
             * @property {String} key
             * @static
             */
            key: 'buttonCommandsList'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the list node to allow keyboard interaction.
         *
         * @instance
         * @memberof ButtonCommandsList
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            ReactDOM.findDOMNode(this).focus();
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonCommandsList
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: false,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the list.
         *
         * @instance
         * @memberof ButtonCommandsList
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'div',
                { className: 'ae-dropdown ae-arrow-box ae-arrow-box-top-left', onFocus: this.focus, onKeyDown: this.handleKey, tabIndex: '0' },
                React.createElement(
                    'ul',
                    { className: 'ae-listbox', id: this.props.listId, role: 'listbox' },
                    this._renderActions(this.props.commands)
                )
            );
        },

        /**
         * Renders instances of ButtonCommandListItem with the description of the row action that will be executed.
         *
         * @instance
         * @memberof ButtonCommandsList
         * @method _renderActions
         * @protected
         * @return {Array} Rendered instances of ButtonCommandListItem class
         */
        _renderActions: function _renderActions(commands) {
            var editor = this.props.editor;
            var items;

            if (commands && commands.length) {
                items = commands.map(function (item) {
                    return React.createElement(
                        'li',
                        { key: item.command, role: 'option' },
                        React.createElement(AlloyEditor.ButtonCommandListItem, { command: item.command, description: typeof item.label === 'string' ? item.label : item.label(), editor: editor })
                    );
                });
            }

            return items;
        }
    });

    AlloyEditor.ButtonCommandsList = ButtonCommandsList;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonDropdown class provides markup and keyboard navigation behaviour to a dropdown
     * opened from a button.
     *
     * @class ButtonDropdown
     */

    var ButtonDropdown = createReactClass({
        displayName: 'ButtonDropdown',

        mixins: [AlloyEditor.WidgetFocusManager],

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonDropdown
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: false,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the dropdown in the configuration.
             *
             * @default dropdown
             * @memberof ButtonDropdown
             * @property {String} key
             * @static
             */
            key: 'dropdown'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonDropdown
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'div',
                { className: 'ae-dropdown ae-arrow-box ae-arrow-box-top-left', onFocus: this.focus, onKeyDown: this.handleKey, tabIndex: '0' },
                React.createElement(
                    'ul',
                    { className: 'ae-listbox', role: 'listbox' },
                    this.props.children
                )
            );
        }
    });

    AlloyEditor.Buttons[ButtonDropdown.key] = AlloyEditor.ButtonDropdown = ButtonDropdown;
})();
'use strict';

(function () {
    'use strict';

    var KEY_ENTER = 13;
    var KEY_ESC = 27;

    /**
     * The ButtonEmbedEdit class provides functionality for creating and editing an embed link in a document.
     * Provides UI for creating and editing an embed link.
     *
     * @class ButtonEmbedEdit
     */
    var ButtonEmbedEdit = createReactClass({
        displayName: 'ButtonEmbedEdit',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonEmbedEdit
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default embedEdit
             * @memberof ButtonEmbedEdit
             * @property {String} key
             * @static
             */
            key: 'embedEdit'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the link input to immediately allow editing. This should only happen if the component
         * is rendered in exclusive mode to prevent aggressive focus stealing.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            if (this.props.renderExclusive || this.props.manualSelection) {
                // We need to wait for the next rendering cycle before focusing to avoid undesired
                // scrolls on the page
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(this._focusLinkInput);
                } else {
                    setTimeout(this._focusLinkInput, 0);
                }
            }
        },

        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method componentWillReceiveProps
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            this.replaceState(this.getInitialState());
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         * The return value will be used as the initial value of this.state.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            var editor = this.props.editor.get('nativeEditor');
            var embed;

            var selection = editor.getSelection();

            if (selection) {
                var selectedElement = selection.getSelectedElement();

                if (selectedElement) {
                    embed = selectedElement.findOne('[data-widget="ae_embed"]');
                }
            }

            var href = embed ? embed.getAttribute('data-ae-embed-url') : '';

            return {
                element: embed,
                initialLink: {
                    href: href
                },
                linkHref: href
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var clearLinkStyle = {
                opacity: this.state.linkHref ? 1 : 0
            };

            return React.createElement(
                'div',
                { className: 'ae-container-edit-link' },
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.deleteEmbed, className: 'ae-button', 'data-type': 'button-embed-remove', disabled: !this.state.element, onClick: this._removeEmbed, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.deleteEmbed },
                    React.createElement('span', { className: 'ae-icon-bin' })
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input xxl' },
                    React.createElement('input', { className: 'ae-input', onChange: this._handleLinkHrefChange, onKeyDown: this._handleKeyDown, placeholder: AlloyEditor.Strings.editLink, ref: 'linkInput', type: 'text', value: this.state.linkHref }),
                    React.createElement('button', { 'aria-label': AlloyEditor.Strings.clearInput, className: 'ae-button ae-icon-remove', onClick: this._clearLink, style: clearLinkStyle, title: AlloyEditor.Strings.clear })
                ),
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.confirm, className: 'ae-button', disabled: !this._isValidState(), onClick: this._embedLink, title: AlloyEditor.Strings.confirm },
                    React.createElement('span', { className: 'ae-icon-ok' })
                )
            );
        },

        /**
         * Clears the link input. This only changes the component internal state, but does not
         * affect the link element of the editor. Only the _removeLink and _updateLink methods
         * are translated to the editor element.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _clearLink
         * @protected
         */
        _clearLink: function _clearLink() {
            this.setState({
                linkHref: ''
            });
        },

        /**
         * Triggers the embedUrl command to transform the link into an embed media object
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _embedLink
         * @protected
         */
        _embedLink: function _embedLink() {
            var nativeEditor = this.props.editor.get('nativeEditor');

            nativeEditor.execCommand('embedUrl', {
                url: this.state.linkHref
            });

            // We need to cancelExclusive with the bound parameters in case the button is used
            // inside another in exclusive mode (such is the case of the link button)
            this.props.cancelExclusive();
        },

        /**
         * Focuses the user cursor on the widget's input.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _focusLinkInput
         * @protected
         */
        _focusLinkInput: function _focusLinkInput() {
            ReactDOM.findDOMNode(this.refs.linkInput).focus();
        },

        /**
         * Monitors key interaction inside the input element to respond to the keys:
         * - Enter: Creates/updates the link.
         * - Escape: Discards the changes.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _handleKeyDown
         * @param {SyntheticEvent} event The keyboard event.
         * @protected
         */
        _handleKeyDown: function _handleKeyDown(event) {
            if (event.keyCode === KEY_ENTER || event.keyCode === KEY_ESC) {
                event.preventDefault();
            }

            if (event.keyCode === KEY_ENTER) {
                this._embedLink();
            } else if (event.keyCode === KEY_ESC) {
                var editor = this.props.editor.get('nativeEditor');

                // We need to cancelExclusive with the bound parameters in case the button is used
                // inside another in exclusive mode (such is the case of the link button)
                this.props.cancelExclusive();

                editor.fire('actionPerformed', this);
            }
        },

        /**
         * Updates the component state when the link input changes on user interaction.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _handleLinkHrefChange
         * @param {SyntheticEvent} event The change event.
         * @protected
         */
        _handleLinkHrefChange: function _handleLinkHrefChange(event) {
            this.setState({
                linkHref: event.target.value
            });
        },

        /**
         * Verifies that the current link state is valid so the user can save the link. A valid state
         * means that we have a non-empty href that's different from the original one.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _isValidState
         * @protected
         * @return {Boolean} True if the state is valid, false otherwise
         */
        _isValidState: function _isValidState() {
            var validState = this.state.linkHref && this.state.linkHref !== this.state.initialLink.href;

            return validState;
        },

        /**
         * Removes the embed in the editor element.
         *
         * @instance
         * @memberof ButtonEmbedEdit
         * @method _removeEmbed
         * @protected
         */
        _removeEmbed: function _removeEmbed() {
            var editor = this.props.editor.get('nativeEditor');

            var embedWrapper = this.state.element.getAscendant(function (element) {
                return element.hasClass('cke_widget_wrapper');
            });

            embedWrapper.remove();

            editor.fire('actionPerformed', this);
        }
    });

    AlloyEditor.Buttons[ButtonEmbedEdit.key] = AlloyEditor.ButtonEmbedEdit = ButtonEmbedEdit;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonEmbed class provides functionality for creating and editing an embed link in a document.
     * ButtonEmbed renders in two different modes:
     *
     * - Normal: Just a button that allows to switch to the edition mode
     * - Exclusive: The ButtonEmbedEdit UI with all the link edition controls.
     *
     * @class ButtonEmbed
     * @uses ButtonKeystroke
     */

    var ButtonEmbed = createReactClass({
        displayName: 'ButtonEmbed',

        mixins: [AlloyEditor.ButtonKeystroke],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonEmbed
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonEmbed
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonEmbed
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default embed
             * @memberof ButtonEmbed
             * @property {String} key
             * @static
             */
            key: 'embed'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonEmbed
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                keystroke: {
                    fn: '_requestExclusive',
                    keys: CKEDITOR.CTRL + CKEDITOR.SHIFT + 76 /*L*/
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonEmbed
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.renderExclusive) {
                return React.createElement(AlloyEditor.ButtonEmbedEdit, this.props);
            } else {
                return React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.link, className: 'ae-button', 'data-type': 'button-embed', onClick: this._requestExclusive, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.link },
                    React.createElement('span', { className: 'ae-icon-add' })
                );
            }
        },

        /**
         * Requests the link button to be rendered in exclusive mode to allow the embedding of a link.
         *
         * @instance
         * @memberof ButtonEmbed
         * @method _requestExclusive
         * @protected
         */
        _requestExclusive: function _requestExclusive() {
            this.props.requestExclusive(ButtonEmbed.key);
        }
    });

    AlloyEditor.Buttons[ButtonEmbed.key] = AlloyEditor.ButtonEmbed = ButtonEmbed;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonH1 class provides wraps a selection in `h1` element.
     *
     * @class ButtonH1
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonH1 = createReactClass({
        displayName: 'ButtonH1',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonH1
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonH1
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonH1
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default h1
             * @memberof ButtonH1
             * @property {String} key
             * @static
             */
            key: 'h1'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonH1
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'h1'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonH1
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.h1, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-h1', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.h1 },
                React.createElement('span', { className: 'ae-icon-h1' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonH1.key] = AlloyEditor.ButtonH1 = ButtonH1;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonH2 class provides wraps a selection in `h2` element.
     *
     * @class ButtonH2
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonH2 = createReactClass({
        displayName: 'ButtonH2',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonH2
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonH2
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonH2
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default h2
             * @memberof ButtonH2
             * @property {String} key
             * @static
             */
            key: 'h2'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonH2
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'h2'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonH2
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.h2, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-h2', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.h2 },
                React.createElement('span', { className: 'ae-icon-h2' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonH2.key] = AlloyEditor.ButtonH2 = ButtonH2;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonHline class provides inserts horizontal line.
     *
     * @class ButtonHline
     * @uses ButtonCommand
     * @uses ButtonStyle
     */

    var ButtonHline = createReactClass({
        displayName: 'ButtonHline',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonHline
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonHline
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonHline
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default hline
             * @memberof ButtonHline
             * @property {String} key
             * @static
             */
            key: 'hline'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonHline
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'horizontalrule',
                style: {
                    element: 'hr'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonHline
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.horizontalrule, className: 'ae-button', 'data-type': 'button-hline', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.horizontalrule },
                React.createElement('span', { className: 'ae-icon-separator' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonHline.key] = AlloyEditor.ButtonHline = ButtonHline;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImageAlignCenter class provides functionality for aligning an image in the center.
     *
     * @class ButtonImageAlignCenter
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonImageAlignCenter = createReactClass({
        displayName: 'ButtonImageAlignCenter',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonImageAlignCenter
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonImageAlignCenter
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonImageAlignCenter
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default imageCenter
             * @memberof ButtonImageAlignCenter
             * @property {String} key
             * @static
             */
            key: 'imageCenter'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonImageAlignCenter
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifycenter'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonImageAlignCenter
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignCenter, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-image-align-center', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignCenter },
                React.createElement('span', { className: 'ae-icon-align-center' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonImageAlignCenter.key] = AlloyEditor.ButtonImageAlignCenter = ButtonImageAlignCenter;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImageAlignLeft class provides functionality for aligning an image on left.
     *
     * @class ButtonImageAlignLeft
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonImageAlignLeft = createReactClass({
        displayName: 'ButtonImageAlignLeft',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonImageAlignLeft
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonImageAlignLeft
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonImageAlignLeft
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default imageLeft
             * @memberof ButtonImageAlignLeft
             * @property {String} key
             * @static
             */
            key: 'imageLeft'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonImageAlignLeft
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifyleft'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonImageAlignLeft
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignLeft, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-image-align-left', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignLeft },
                React.createElement('span', { className: 'ae-icon-align-left' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonImageAlignLeft.key] = AlloyEditor.ButtonImageAlignLeft = ButtonImageAlignLeft;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImageAlignRight class provides functionality for aligning an image on right.
     *
     * @class ButtonImageAlignRight
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonImageAlignRight = createReactClass({
        displayName: 'ButtonImageAlignRight',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonImageAlignRight
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonImageAlignRight
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonImageAlignRight
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default imageRight
             * @memberof ButtonImageAlignRight
             * @property {String} key
             * @static
             */
            key: 'imageRight'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonImageAlignRight
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifyright'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonImageAlignRight
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignRight, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-image-align-right', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignRight },
                React.createElement('span', { className: 'ae-icon-align-right' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonImageAlignRight.key] = AlloyEditor.ButtonImageAlignRight = ButtonImageAlignRight;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImage class inserts an image to the content.
     *
     * @class ButtonImage
     */

    var ButtonImage = createReactClass({
        displayName: 'ButtonImage',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonImage
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonImage
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonImage
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default image
             * @memberof ButtonImage
             * @property {String} key
             * @static
             */
            key: 'image'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonImage
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var inputSyle = { display: 'none' };

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.image, className: 'ae-button', 'data-type': 'button-image', onClick: this.handleClick, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.image },
                    React.createElement('span', { className: 'ae-icon-image' })
                ),
                React.createElement('input', { accept: 'image/*', onChange: this._onInputChange, ref: 'fileInput', style: inputSyle, type: 'file' })
            );
        },

        /**
         * Simulates click on the input element. This will open browser's native file open dialog.
         *
         * @instance
         * @memberof ButtonImage
         * @method handleClick
         * @param {SyntheticEvent} event The received click event on the button.
         */
        handleClick: function handleClick(event) {
            ReactDOM.findDOMNode(this.refs.fileInput).click();
        },

        /**
         * On input change, reads the chosen file and fires an event `beforeImageAdd` with the image which will be added
         * to the content. The image file will be passed in the `imageFiles` property.
         * If any of the listeners returns `false` or cancels the event, the image won't be added to the content.
         * Otherwise, an event `imageAdd` will be fired with the inserted element into the editable area.
         * The passed params will be:
         * - `el` - the created img element
         * - `file` - the original image file from the input element
         *
         * @fires ButtonImage#beforeImageAdd
         * @fires ButtonImage#imageAdd
         * @instance
         * @memberof ButtonImage
         * @method _onInputChange
         * @protected
         */
        _onInputChange: function _onInputChange() {
            var inputEl = ReactDOM.findDOMNode(this.refs.fileInput);

            // On IE11 the function might be called with an empty array of
            // files. In such a case, no actions will be taken.
            if (!inputEl.files.length) {
                return;
            }

            var reader = new FileReader();
            var file = inputEl.files[0];

            reader.onload = function (event) {
                var editor = this.props.editor.get('nativeEditor');

                var result = editor.fire('beforeImageAdd', {
                    imageFiles: file
                });

                if (!!result) {
                    var el = CKEDITOR.dom.element.createFromHtml('<img src="' + event.target.result + '">');

                    editor.insertElement(el);

                    editor.fire('actionPerformed', this);

                    var imageData = {
                        el: el,
                        file: file
                    };

                    editor.fire('imageAdd', imageData);
                }
            }.bind(this);

            reader.readAsDataURL(file);

            inputEl.value = '';
        }

        /**
         * Fired before adding images to the editor.
         *
         * @event ButtonImage#beforeImageAdd
         * @instance
         * @memberof ButtonImage
         * @param {Array} imageFiles Array of image files
         */

        /**
         * Fired when an image is being added to the editor successfully.
         *
         * @event ButtonImage#imageAdd
         * @instance
         * @memberof ButtonImage
         * @param {CKEDITOR.dom.element} el The created image with src as Data URI
         * @param {File} file The image file
         */
    });

    AlloyEditor.Buttons[ButtonImage.key] = AlloyEditor.ButtonImage = ButtonImage;
})();
'use strict';

(function () {
    'use strict';

    /**
        * The ButtonIndentBlock class provides functionality for indenting the selected blocks.
        *
        * @class ButtonIndentBlock
        * @uses ButtonCommand
        * @uses ButtonCommandActive
        * @uses ButtonStateClasses
        */

    var ButtonIndentBlock = createReactClass({
        displayName: 'ButtonIndentBlock',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        //Allows validating props being passed to the component
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonIndentBlock
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonIndentBlock
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonIndentBlock
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default indentBlock
             * @memberof ButtonIndentBlock
             * @property {String} key
             * @static
             */
            key: 'indentBlock'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonIndentBlock
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'indent'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonIndentBlock
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.indent, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-indent-block', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.indent },
                React.createElement('span', { className: 'ae-icon-indent-block' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonIndentBlock.key] = AlloyEditor.ButtonIndentBlock = ButtonIndentBlock;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonItalic class provides functionality for styling an selection with italic (em) style.
     *
     * @class ButtonItalic
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonItalic = createReactClass({
        displayName: 'ButtonItalic',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonItalic
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonItalic
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonItalic
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default italic
             * @memberof ButtonItalic
             * @property {String} key
             * @static
             */
            key: 'italic'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonItalic
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'italic',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 73 /*I*/
                },
                style: 'coreStyles_italic'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonItalic
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.italic, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-italic', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.italic },
                React.createElement('span', { className: 'ae-icon-italic' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonItalic.key] = AlloyEditor.ButtonItalic = ButtonItalic;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonLinkAutocompleteList class provides functionality for showing a list of
     * items that can be selected for the link.
     *
     * @class ButtonLinkAutocompleteList
     * @uses WidgetFocusManager
     */

    var ButtonLinkAutocompleteList = createReactClass({
        displayName: 'ButtonLinkAutocompleteList',

        mixins: [AlloyEditor.WidgetFocusManager],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * Autocomplete function
             *
             * @instance
             * @memberof ButtonLinkAutocompleteList
             * @property {Function} data
             */
            data: PropTypes.func,

            /**
             * Indicates if this is focused when this component is updated
             *
             * @instance
             * @memberof ButtonLinkAutocompleteList
             * @property {Boolean} autocompleteSelected
             */
            autocompleteSelected: PropTypes.bool,

            /**
             * The current term to autocomplete for
             *
             * @instance
             * @memberof ButtonLinkAutocompleteList
             * @property {String} term
             */
            term: PropTypes.string,

            /**
            * Method to update parent selectautocomplete state
            *
             * @instance
             * @memberof ButtonLinkAutocompleteList
            * @property {Function} setAutocompleteState
            */
            setAutocompleteState: PropTypes.func

        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default buttonLinkAutocompleteList
             * @memberof ButtonLinkAutocompleteList
             * @property {String} key
             * @static
             */
            key: 'buttonLinkAutocompleteList'
        },

        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method componentWillReceiveProps
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            if (!nextProps.term || nextProps.term !== this.props.term) {
                clearTimeout(this._timeout);

                if (nextProps.term) {
                    this._timeout = setTimeout(this._updateItems, this.props.delay);
                } else {
                    this.setState({
                        items: []
                    });
                }
            }

            if (nextProps.autocompleteSelected) {
                setTimeout(this.focus, 0);
                this.props.setAutocompleteState({
                    selected: false
                });
            }
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            clearTimeout(this._timeout);
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: false,
                data: [],
                delay: 100,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         * The return value will be used as the initial value of this.state.
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                items: []
            };
        },

        /**
         * Lifecycle. Renders the UI of the list.
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (!this.props.expanded || !this.state.items.length) {
                return null;
            }

            return React.createElement(
                AlloyEditor.ButtonDropdown,
                null,
                this._renderAutocompleteItems(this.state.items)
            );
        },

        /**
         * Lifecycle. Invoked before rendering when new props or state are being received.
         * This method is not called for the initial render or when forceUpdate is used.
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method  shouldComponentUpdate
         * @return {Boolean} Returns false when the transition to the new props and state will not
         * require a component update.
         */
        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.expanded !== this.props.expanded || nextProps.term !== this.props.term || nextState.items !== this.state.items;
        },

        /**
         * Renders a set of list items for the provided items
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method _renderAutocompleteItems
         * @param {Array} items List of autocomplete items to render
         * @protected
         * @return {Array} Rendered list item instances
         */
        _renderAutocompleteItems: function _renderAutocompleteItems(items) {
            items = items || [];

            var handleLinkAutocompleteClick = this.props.handleLinkAutocompleteClick;

            return items.map(function (item) {
                var className = this.props.term === item.url ? 'ae-toolbar-element active' : 'ae-toolbar-element';

                return React.createElement(
                    'li',
                    { key: item.url, role: 'option' },
                    React.createElement(
                        'button',
                        { className: className, onClick: handleLinkAutocompleteClick, 'data-value': item.url },
                        item.title
                    )
                );
            }.bind(this));
        },

        /**
         * Retrieves the data according to {this.props.term} and calls setState() with the returned data
         *
         * @instance
         * @memberof ButtonLinkAutocompleteList
         * @method _updateItems
         * @protected
         */
        _updateItems: function _updateItems() {
            var instance = this;

            if (!this.props.term) {
                return;
            }

            var promise = Promise.resolve(this.props.data(this.props.term));

            promise.then(function (items) {
                if (items.length) {
                    !instance.props.expanded && instance.props.toggleDropdown();
                }

                instance.setState({
                    items: items
                });
            });
        }
    });

    AlloyEditor.ButtonLinkAutocompleteList = ButtonLinkAutocompleteList;
})();
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
    'use strict';

    /**
     * The ButtonLinkEdit class provides functionality for creating and editing a link in a document.
     * Provides UI for creating, editing and removing a link.
     *
     * @class ButtonLinkEdit
     * @uses ButtonCfgProps
     * @uses WidgetDropdown
     * @uses WidgetFocusManager
     */

    var ButtonLinkEdit = createReactClass({
        displayName: 'ButtonLinkEdit',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetFocusManager, AlloyEditor.ButtonCfgProps],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the allowed values for the target attribute.
             *
             * @instance
             * @memberof ButtonLinkEdit
             * @property {Array} allowedTargets
             */
            allowedTargets: PropTypes.arrayOf(PropTypes.object),

            /**
             * Indicate if we add http:// protocol to link or not
             *
             * @instance
             * @memberof ButtonLinkEdit
             * @property {Boolean} appendProtocol
             */
            appendProtocol: PropTypes.bool,

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonLinkEdit
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Default value of the link target attribute.
             *
             * @instance
             * @memberof ButtonLinkEdit
             * @property {String} defaultLinkTarget
             */
            defaultLinkTarget: PropTypes.string,

            /**
             * Indicates whether the link target selector should appear.
             *
             * @instance
             * @memberof ButtonLinkEdit
             * @property {Boolean} showTargetSelector
             */
            showTargetSelector: PropTypes.bool,

            /**
             * List of items to be rendered as possible values for the link or a function, which is
             * supposed to retrieve the data. The function should return a Promise.
             * The returned items must be objects with at least two properties:
             * - title
             * - url
             *
             * @instance
             * @memberof ButtonLinkEdit
             * @property {Function|Array} data
             */
            data: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.object)])
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default linkEdit
             * @memberof ButtonLinkEdit
             * @property {String} key
             * @static
             */
            key: 'linkEdit'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the link input to immediately allow editing. This should only happen if the component
         * is rendered in exclusive mode to prevent aggressive focus stealing.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            if (this.props.renderExclusive || this.props.manualSelection) {
                // We need to wait for the next rendering cycle before focusing to avoid undesired
                // scrolls on the page
                this._focusLinkInput();
            }
        },

        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method componentWillReceiveProps
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            this.replaceState(this.getInitialState());
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                appendProtocol: true,
                autocompleteUrl: '',
                circular: true,
                customIndexStart: true,
                defaultLinkTarget: '',
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                },
                showTargetSelector: true
            };
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         * The return value will be used as the initial value of this.state.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            var link = new CKEDITOR.Link(this.props.editor.get('nativeEditor')).getFromSelection();
            var href = link ? link.getAttribute('href') : '';
            var target = link ? link.getAttribute('target') : this.props.defaultLinkTarget;

            return {
                autocompleteSelected: false,
                element: link,
                initialLink: {
                    href: href,
                    target: target
                },
                linkHref: href,
                linkTarget: target
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var targetSelector = {
                allowedTargets: this.props.allowedTargets,
                editor: this.props.editor,
                handleLinkTargetChange: this._handleLinkTargetChange,
                selectedTarget: this.state.linkTarget || AlloyEditor.Strings.linkTargetDefault
            };

            targetSelector = this.mergeDropdownProps(targetSelector, AlloyEditor.ButtonLinkTargetEdit.key);

            var autocompleteDropdown;

            if (this.props.data) {
                var dataFn = this.props.data;

                if (!AlloyEditor.Lang.isFunction(dataFn)) {
                    var items = this.props.data;

                    dataFn = function dataFn(term) {
                        return items;
                    };
                }

                var autocompleteDropdownProps = {
                    autocompleteSelected: this.state.autocompleteSelected,
                    data: dataFn,
                    editor: this.props.editor,
                    handleLinkAutocompleteClick: this._handleLinkAutocompleteClick,
                    onDismiss: this.props.toggleDropdown,
                    setAutocompleteState: this._setAutocompleteState,
                    term: this.state.linkHref
                };

                autocompleteDropdownProps = this.mergeDropdownProps(autocompleteDropdownProps, AlloyEditor.ButtonLinkAutocompleteList.key);

                autocompleteDropdown = React.createElement(AlloyEditor.ButtonLinkAutocompleteList, autocompleteDropdownProps);
            }

            var targetButtonEdit;

            if (this.props.showTargetSelector) {
                targetButtonEdit = React.createElement(AlloyEditor.ButtonLinkTargetEdit, targetSelector);
            }

            var buttonClearLink;

            if (this.state.linkHref) {
                buttonClearLink = React.createElement('button', { 'aria-label': AlloyEditor.Strings.clearInput, className: 'ae-button ae-icon-remove', onClick: this._clearLink, title: AlloyEditor.Strings.clear });
            }

            var placeholderProp = {};

            if (!CKEDITOR.env.ie && AlloyEditor.Strings) {
                placeholderProp.placeholder = AlloyEditor.Strings.editLink;
            }

            return React.createElement(
                'div',
                { className: 'ae-container-edit-link' },
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.removeLink, className: 'ae-button', disabled: !this.state.element, onClick: this._removeLink, title: AlloyEditor.Strings.remove },
                    React.createElement('span', { className: 'ae-icon-unlink' })
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input xxl' },
                    targetButtonEdit,
                    React.createElement(
                        'div',
                        { className: 'ae-container-input' },
                        React.createElement('input', _extends({ className: 'ae-input', onChange: this._handleLinkHrefChange, onKeyDown: this._handleKeyDown }, placeholderProp, { ref: 'linkInput', type: 'text', value: this.state.linkHref })),
                        autocompleteDropdown
                    ),
                    buttonClearLink
                ),
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.confirm, className: 'ae-button', disabled: !this._isValidState(), onClick: this._updateLink, title: AlloyEditor.Strings.confirm },
                    React.createElement('span', { className: 'ae-icon-ok' })
                )
            );
        },

        /**
         * Clears the link input. This only changes the component internal state, but does not
         * affect the link element of the editor. Only the _removeLink and _updateLink methods
         * are translated to the editor element.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _clearLink
         * @protected
         */
        _clearLink: function _clearLink() {
            this.setState({
                linkHref: ''
            });

            this._focusLinkInput();
        },

        /**
         * Focuses the user cursor on the widget's input.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _focusLinkInput
         * @protected
         */
        _focusLinkInput: function _focusLinkInput() {
            var instance = this;

            var focusLinkEl = function focusLinkEl() {
                ReactDOM.findDOMNode(instance.refs.linkInput).focus();
            };

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(focusLinkEl);
            } else {
                setTimeout(focusLinkEl, 0);
            }
        },

        /**
         * Monitors key interaction inside the input element to respond to the keys:
         * - Enter: Creates/updates the link.
         * - Escape: Discards the changes.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _handleKeyDown
         * @param {SyntheticEvent} event The keyboard event.
         * @protected
         */
        _handleKeyDown: function _handleKeyDown(event) {
            if (event.keyCode === 13 || event.keyCode === 27) {
                event.preventDefault();
            }

            if (event.keyCode === 13) {
                this._updateLink();
            } else if (event.keyCode === 40) {
                this.setState({
                    autocompleteSelected: true
                });
            } else if (event.keyCode === 27) {
                var editor = this.props.editor.get('nativeEditor');

                new CKEDITOR.Link(editor).advanceSelection();

                this.props.editor.get('nativeEditor').fire('actionPerformed', this);
            }
        },

        /**
         * Updates the component state when the link input changes on user interaction.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _handleLinkHrefChange
         * @param {SyntheticEvent} event The change event.
         * @protected
         */
        _handleLinkHrefChange: function _handleLinkHrefChange(event) {
            this.setState({
                linkHref: event.target.value
            });

            this._focusLinkInput();
        },

        /**
         * Updates the component state when the link target changes on user interaction.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _handleLinkTargetChange
         * @param {SyntheticEvent} event The click event.
         * @protected
         */
        _handleLinkTargetChange: function _handleLinkTargetChange(event) {
            this.setState({
                itemDropdown: null,
                linkTarget: event.target.getAttribute('data-value')
            });

            this._focusLinkInput();
        },

        /**
         * Updates the component state when an autocomplete link result is selected by user interaction.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _handleLinkAutocompleteClick
         * @param {SyntheticEvent} event The click event.
         * @protected
         */
        _handleLinkAutocompleteClick: function _handleLinkAutocompleteClick(event) {
            this.setState({
                itemDropdown: null,
                linkHref: event.target.getAttribute('data-value')
            });

            this._focusLinkInput();
        },

        /**
         * Verifies that the current link state is valid so the user can save the link. A valid state
         * means that we have a non-empty href and that either that or the link target are different
         * from the original link.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _isValidState
         * @protected
         * @return {Boolean} [description]
         */
        _isValidState: function _isValidState() {
            var validState = this.state.linkHref && (this.state.linkHref !== this.state.initialLink.href || this.state.linkTarget !== this.state.initialLink.target);

            return validState;
        },

        /**
         * Removes the link in the editor element.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _removeLink
         * @protected
         */
        _removeLink: function _removeLink() {
            var editor = this.props.editor.get('nativeEditor');
            var linkUtils = new CKEDITOR.Link(editor);
            var selection = editor.getSelection();
            var bookmarks = selection.createBookmarks();

            linkUtils.remove(this.state.element, { advance: true });

            selection.selectBookmarks(bookmarks);

            // We need to cancelExclusive with the bound parameters in case the button is used
            // inside another in exclusive mode (such is the case of the link button)
            this.props.cancelExclusive();

            editor.fire('actionPerformed', this);
        },

        /**
         * Update autocompleteSelected state to focus and select autocomplete´s dropdown
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _setAutocompleteState
         * @protected
         */
        _setAutocompleteState: function _setAutocompleteState(state) {
            this.setState({
                autocompleteSelected: state.selected
            });
        },

        /**
         * Updates the link in the editor element. If the element didn't exist previously, it will
         * create a new <a> element with the href specified in the link input.
         *
         * @instance
         * @memberof ButtonLinkEdit
         * @method _updateLink
         * @protected
         */
        _updateLink: function _updateLink() {
            var editor = this.props.editor.get('nativeEditor');
            var linkUtils = new CKEDITOR.Link(editor, { appendProtocol: this.props.appendProtocol });
            var linkAttrs = {
                target: this.state.linkTarget
            };
            var modifySelection = { advance: true };

            if (this.state.linkHref) {
                if (this.state.element) {
                    linkAttrs.href = this.state.linkHref;

                    linkUtils.update(linkAttrs, this.state.element, modifySelection);
                } else {
                    linkUtils.create(this.state.linkHref, linkAttrs, modifySelection);
                }

                editor.fire('actionPerformed', this);
            }

            // We need to cancelExclusive with the bound parameters in case the button is used
            // inside another in exclusive mode (such is the case of the link button)
            this.props.cancelExclusive();
        }
    });

    AlloyEditor.Buttons[ButtonLinkEdit.key] = AlloyEditor.ButtonLinkEdit = ButtonLinkEdit;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonLinkTargetEdit class provides functionality for changing the target of a link
     * in the document.
     *
     * @class ButtonLinkTargetEdit
     */

    var ButtonLinkTargetEdit = createReactClass({
        displayName: 'ButtonLinkTargetEdit',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the allowed items for the target attribute. Every allowed target is an object
             * with a `label` attribute that will be shown in the dropdown and a `value` attribute
             * that will get set as the link target attribute.
             *
             * @instance
             * @memberof ButtonLinkTargetEdit
             * @property {Array<object>} allowedTargets
             */
            allowedTargets: PropTypes.arrayOf(PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonLinkTargetEdit
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Label of the current target value.
             *
             * @instance
             * @memberof ButtonLinkTargetEdit
             * @property {String} selectedTarget
             */
            selectedTarget: PropTypes.string
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default linkTargetEdit
             * @memberof ButtonLinkTargetEdit
             * @property {String} key
             * @static
             */
            key: 'linkTargetEdit'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonLinkTargetEdit
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonTargetsList;

            var handleLinkTargetChange = this.props.handleLinkTargetChange;
            var allowedLinkTargets = this.props.allowedTargets;

            if (this.props.expanded) {
                buttonTargetsList = React.createElement(AlloyEditor.ButtonTargetList, { editor: this.props.editor, onDismiss: this.props.toggleDropdown, allowedLinkTargets: allowedLinkTargets, handleLinkTargetChange: handleLinkTargetChange, selectedTarget: this.props.selectedTarget });
            }

            return React.createElement(
                'div',
                { className: 'ae-container-edit-link-target ae-container-dropdown ae-container-dropdown-medium ae-has-dropdown', tabIndex: '0' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': this.props.selectedTarget, className: 'ae-toolbar-element', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: this.props.selectedTarget },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        React.createElement(
                            'span',
                            { className: 'ae-container-dropdown-selected-item' },
                            this.props.selectedTarget
                        ),
                        React.createElement('span', { className: 'ae-icon-arrow' })
                    )
                ),
                buttonTargetsList
            );
        },

        /**
         * Lifecycle. Invoked before rendering when new props or state are being received.
         * This method is not called for the initial render or when forceUpdate is used.
         *
         * @instance
         * @memberof ButtonLinkTargetEdit
         * @method  shouldComponentUpdate
         * @return {Boolean} Returns false when the transition to the new props and state will not
         * require a component update.
         */
        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.expanded !== this.props.expanded || nextProps.selectedTarget !== this.props.selectedTarget;
        }
    });

    AlloyEditor.Buttons[ButtonLinkTargetEdit.key] = AlloyEditor.ButtonLinkTargetEdit = ButtonLinkTargetEdit;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonLink class provides functionality for creating and editing a link in a document. ButtonLink
     * renders in two different modes:
     *
     * - Normal: Just a button that allows to switch to the edition mode
     * - Exclusive: The ButtonLinkEdit UI with all the link edition controls.
     *
     * @class ButtonLink
     * @uses ButtonCfgProps
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     */

    var ButtonLink = createReactClass({
        displayName: 'ButtonLink',

        mixins: [AlloyEditor.ButtonKeystroke, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCfgProps],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonLink
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonLink
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonLink
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default link
             * @memberof ButtonLink
             * @property {String} key
             * @static
             */
            key: 'link'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonLink
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                keystroke: {
                    fn: '_requestExclusive',
                    keys: CKEDITOR.CTRL + 76 /*L*/
                }
            };
        },

        /**
         * Checks if the current selection is contained within a link.
         *
         * @instance
         * @memberof ButtonLink
         * @method isActive
         * @return {Boolean} True if the selection is inside a link, false otherwise.
         */
        isActive: function isActive() {
            return new CKEDITOR.Link(this.props.editor.get('nativeEditor')).getFromSelection() !== null;
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonLink
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            if (this.props.renderExclusive) {
                var props = this.mergeButtonCfgProps();

                return React.createElement(AlloyEditor.ButtonLinkEdit, props);
            } else {
                return React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.link, className: cssClass, 'data-type': 'button-link', onClick: this._requestExclusive, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.link },
                    React.createElement('span', { className: 'ae-icon-link' })
                );
            }
        },

        /**
         * Requests the link button to be rendered in exclusive mode to allow the creation of a link.
         *
         * @instance
         * @memberof ButtonLink
         * @method _requestExclusive
         * @protected
         */
        _requestExclusive: function _requestExclusive() {
            this.props.requestExclusive(ButtonLink.key);
        }
    });

    AlloyEditor.Buttons[ButtonLink.key] = AlloyEditor.ButtonLink = ButtonLink;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonOrderedList class provides functionality for creating ordered lists in an editor.
     *
     * @class ButtonOrderedList
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonOrderedList = createReactClass({
        displayName: 'ButtonOrderedList',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonOrderedList
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonOrderedList
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonOrderedList
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default ol
             * @memberof ButtonOrderedList
             * @property {String} key
             * @static
             */
            key: 'ol'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonOrderedList
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'numberedlist',
                style: {
                    element: 'ol'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonOrderedList
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.numberedlist, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-ol', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.numberedlist },
                React.createElement('span', { className: 'ae-icon-numbered-list' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonOrderedList.key] = AlloyEditor.ButtonOrderedList = ButtonOrderedList;
})();
'use strict';

(function () {
    'use strict';

    /**
        * The ButtonOutdentBlock class provides functionality for outdenting blocks.
        *
        * @class ButtonOutdentBlock
        * @uses ButtonCommand
        * @uses ButtonCommandActive
        * @uses ButtonStateClasses
        */

    var ButtonOutdentBlock = createReactClass({
        displayName: 'ButtonOutdentBlock',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        //Allows validating props being passed to the component
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonOutdentBlock
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonOutdentBlock
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonOutdentBlock
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default indentBlock
             * @memberof ButtonOutdentBlock
             * @property {String} key
             * @static
             */
            key: 'outdentBlock'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonOutdentBlock
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'outdent'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonOutdentBlock
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.outdent, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-outdent-block', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.outdent },
                React.createElement('span', { className: 'ae-icon-outdent-block' })
            );
        }

    });

    AlloyEditor.Buttons[ButtonOutdentBlock.key] = AlloyEditor.ButtonOutdentBlock = ButtonOutdentBlock;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphAlignLeft class provides functionality for aligning a paragraph on left.
     *
     * @class ButtonParagraphAlignLeft
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonParagraphAlignLeft = createReactClass({
        displayName: 'ButtonParagraphAlignLeft',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonParagraphAlignLeft
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonParagraphAlignLeft
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonParagraphAlignLeft
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default paragraphLeft
             * @memberof ButtonParagraphAlignLeft
             * @property {String} key
             * @static
             */
            key: 'paragraphLeft'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonParagraphAlignLeft
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifyleft'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonParagraphAlignLeft
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignLeft, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-align-left', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignLeft },
                React.createElement('span', { className: 'ae-icon-align-left' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphAlignLeft.key] = AlloyEditor.ButtonParagraphAlignLeft = ButtonParagraphAlignLeft;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphAlignRight class provides functionality for aligning a paragraph on right.
     *
     * @class ButtonParagraphAlignRight
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonParagraphAlignRight = createReactClass({
        displayName: 'ButtonParagraphAlignRight',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonParagraphAlignRight
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonParagraphAlignRight
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonParagraphAlignRight
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default paragraphRight
             * @memberof ButtonParagraphAlignRight
             * @property {String} key
             * @static
             */
            key: 'paragraphRight'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonParagraphAlignRight
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifyright'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonParagraphAlignRight
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignRight, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-align-right', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignRight },
                React.createElement('span', { className: 'ae-icon-align-right' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphAlignRight.key] = AlloyEditor.ButtonParagraphAlignRight = ButtonParagraphAlignRight;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphCenter class provides functionality for centering a paragraph.
     *
     * @class ButtonParagraphCenter
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonParagraphCenter = createReactClass({
        displayName: 'ButtonParagraphCenter',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonParagraphCenter
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonParagraphCenter
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonParagraphCenter
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default paragraphCenter
             * @memberof ButtonParagraphCenter
             * @property {String} key
             * @static
             */
            key: 'paragraphCenter'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonParagraphCenter
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifycenter'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonParagraphCenter
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignCenter, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-center', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignCenter },
                React.createElement('span', { className: 'ae-icon-align-center' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphCenter.key] = AlloyEditor.ButtonParagraphCenter = ButtonParagraphCenter;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphJustify class provides functionality for justfying a paragraph.
     *
     * @class ButtonParagraphJustify
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */

    var ButtonParagraphJustify = createReactClass({
        displayName: 'ButtonParagraphJustify',

        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonParagraphJustify
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonParagraphJustify
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonParagraphJustify
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default paragraphJustify
             * @memberof ButtonParagraphJustify
             * @property {String} key
             * @static
             */
            key: 'paragraphJustify'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonParagraphJustify
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'justifyblock'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonParagraphJustify
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignJustify, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-justify', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignJustify },
                React.createElement('span', { className: 'ae-icon-align-justified' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphJustify.key] = AlloyEditor.ButtonParagraphJustify = ButtonParagraphJustify;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonQuote class wraps a selection in `blockquote` element.
     *
     * @class ButtonQuote
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonQuote = createReactClass({
        displayName: 'ButtonQuote',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonQuote
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonQuote
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonQuote
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default quote
             * @memberof ButtonQuote
             * @property {String} key
             * @static
             */
            key: 'quote'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonQuote
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'blockquote',
                style: {
                    element: 'blockquote'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonQuote
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.quote, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-quote', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.quote },
                React.createElement('span', { className: 'ae-icon-quote' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonQuote.key] = AlloyEditor.ButtonQuote = ButtonQuote;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonRemoveFormat class removes style formatting.
     *
     * @class ButtonRemoveFormat
     * @uses ButtonCommand
     */

    var ButtonRemoveFormat = createReactClass({
        displayName: 'ButtonRemoveFormat',

        mixins: [AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonRemoveFormat
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonRemoveFormat
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonRemoveFormat
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default removeFormat
             * @memberof ButtonRemoveFormat
             * @property {String} key
             * @static
             */
            key: 'removeFormat'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonRemoveFormat
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'removeFormat'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonRemoveFormat
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.removeformat, className: 'ae-button', 'data-type': 'button-removeformat', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.removeformat },
                React.createElement('span', { className: 'ae-icon-removeformat' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonRemoveFormat.key] = AlloyEditor.ButtonRemoveFormat = ButtonRemoveFormat;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStrike class styles a selection with strike style.
     *
     * @class ButtonStrike
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonStrike = createReactClass({
        displayName: 'ButtonStrike',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonStrike
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonStrike
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonStrike
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default strike
             * @memberof ButtonStrike
             * @property {String} key
             * @static
             */
            key: 'strike'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonStrike
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'strike',
                style: 'coreStyles_strike'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         * @instance
         * @memberof ButtonStrike
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.strike, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-strike', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.strike },
                React.createElement('span', { className: 'ae-icon-strike' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonStrike.key] = AlloyEditor.ButtonStrike = ButtonStrike;
})();
"use strict";

(function () {
    'use strict';

    /**
     * The ButtonsStylesListHeader class provides the header of an list of style items.
     *
     * @class ButtonsStylesListHeader
     */

    var ButtonsStylesListHeader = createReactClass({
        displayName: "ButtonsStylesListHeader",

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonsStylesListHeader
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.styles && this.props.styles.length) {
                return React.createElement(
                    "span",
                    { className: "ae-list-header" },
                    this.props.name
                );
            } else {
                return null;
            }
        }
    });

    AlloyEditor.ButtonsStylesListHeader = ButtonsStylesListHeader;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStylesListItemRemove class provides functionality for previewing a style definition
     * inside a list and applying it to the current editor selection.
     *
     * @class ButtonStylesListItemRemove
     */

    var ButtonStylesListItemRemove = createReactClass({
        displayName: 'ButtonStylesListItemRemove',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonStylesListItemRemove
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonStylesListItemRemove
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * Block styles that should be removed in addition to all other inline styles
             *
             * @default ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']
             * @instance
             * @memberof ButtonStylesListItemRemove
             * @property {Array} removeBlocks
             */
            removeBlocks: PropTypes.array,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonStylesListItemRemove
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        //Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default buttonStylesListItemRemove
             * @memberof ButtonStylesListItemRemove
             * @property {String} key
             * @static
             */
            key: 'buttonStylesListItemRemove'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonStylesListItemRemove
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                removeBlocks: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonStylesListItemRemove
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'li',
                { role: 'option' },
                React.createElement(
                    'button',
                    { className: 'ae-toolbar-element', onClick: this._removeStyles, tabIndex: this.props.tabIndex },
                    AlloyEditor.Strings.normal
                )
            );
        },

        /**
         * Removes all inline styles and configured block elements applied to the current selection.
         *
         * @instance
         * @memberof ButtonStylesListItemRemove
         * @method _removeStyles
         * @protected
         */
        _removeStyles: function _removeStyles() {
            var editor = this.props.editor.get('nativeEditor');

            editor.execCommand('removeFormat');

            this.props.removeBlocks.forEach(function (blockItem) {
                var blockStyle = new CKEDITOR.style({ element: blockItem });

                editor.removeStyle(blockStyle);
            });

            editor.fire('actionPerformed', this);
        }
    });

    AlloyEditor.ButtonStylesListItemRemove = ButtonStylesListItemRemove;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStylesListItem class provides functionality for previewing a style definition
     * inside a list and applying it to the current editor selection.
     *
     * @class ButtonStylesListItem
     * @uses ButtonActionStyle
     * @uses ButtonStyle
     */

    var ButtonStylesListItem = createReactClass({
        displayName: 'ButtonStylesListItem',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonActionStyle],

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default buttonStylesListItem
             * @memberof ButtonStylesListItem
             * @property {String} key
             * @static
             */
            key: 'buttonStylesListItem'
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @instance
         * @memberof ButtonStylesListItem
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            // Styles with wildcard element (*) generate an empty tag in their preview < class="custom-class" />.
            // We default to element span and remove the margins to obtain a more consistent set of previews.
            var styleCfg = {
                element: 'span',
                styles: {
                    margin: 0
                }
            };

            styleCfg = CKEDITOR.tools.merge(styleCfg, this.props.style);

            this._preview = new CKEDITOR.style(styleCfg).buildPreview(this.props.name);
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonStylesListItem
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            // We need to use dangerouselySetInnterHTML since we're not in control of the style
            // preview that is generated by CKEditor.
            var className = this.props.name === this.props.activeStyle ? 'ae-toolbar-element active' : 'ae-toolbar-element';

            return React.createElement('button', { className: className, dangerouslySetInnerHTML: { __html: this._preview }, onClick: this._onClick, tabIndex: this.props.tabIndex });
        },

        /**
         * Applies the item style to the editor selection.
         *
         * @instance
         * @memberof ButtonStylesListItem
         * @method _onClick
         * @protected
         */
        _onClick: function _onClick() {
            // Typically, we want the style to be the only one applied to the current selection, so
            // we execute the 'removeFormat' command first. Note that block styles won't be cleaned.
            // However, this is consistent with other editors implementations of this feature.
            this.props.editor.get('nativeEditor').execCommand('removeFormat');

            this.applyStyle();
        }
    });

    AlloyEditor.ButtonStylesListItem = ButtonStylesListItem;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStylesList class provides functionality for showing a list of styles that can be
     * applied to the current selection..
     *
     * @class ButtonStylesList
     * @uses WidgetFocusManager
     */

    var ButtonStylesList = createReactClass({
        displayName: 'ButtonStylesList',

        mixins: [AlloyEditor.WidgetFocusManager],

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @memberof ButtonStylesList
             * @static
             * @property {String} key
             * @default buttonStylesList
             */
            key: 'buttonStylesList'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the list node to allow keyboard interaction.
         *
         * @instance
         * @memberof ButtonStylesList
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            ReactDOM.findDOMNode(this).focus();
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @instance
         * @memberof ButtonStylesList
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            var blockStyles = [];
            var inlineStyles = [];
            var objectStyles = [];

            this.props.styles.forEach(function (item) {
                var style = new CKEDITOR.style(item.style);

                if (style.type === CKEDITOR.STYLE_BLOCK) {
                    blockStyles.push(item);
                } else if (style.type === CKEDITOR.STYLE_INLINE) {
                    inlineStyles.push(item);
                } else if (style.type === CKEDITOR.STYLE_OBJECT) {
                    objectStyles.push(item);
                }
            });

            this._blockStyles = blockStyles;
            this._inlineStyles = inlineStyles;
            this._objectStyles = objectStyles;
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonStylesList
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: false,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                },
                showRemoveStylesItem: true
            };
        },

        /**
         * Lifecycle. Renders the UI of the list.
         *
         * @instance
         * @memberof ButtonStylesList
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var removeStylesItem;

            if (this.props.showRemoveStylesItem) {
                removeStylesItem = React.createElement(AlloyEditor.ButtonStylesListItemRemove, { editor: this.props.editor, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                AlloyEditor.ButtonDropdown,
                this.props,
                removeStylesItem,
                React.createElement(AlloyEditor.ButtonsStylesListHeader, { name: AlloyEditor.Strings.blockStyles, styles: this._blockStyles }),
                this._renderStylesItems(this._blockStyles),
                React.createElement(AlloyEditor.ButtonsStylesListHeader, { name: AlloyEditor.Strings.inlineStyles, styles: this._inlineStyles }),
                this._renderStylesItems(this._inlineStyles),
                React.createElement(AlloyEditor.ButtonsStylesListHeader, { name: AlloyEditor.Strings.objectStyles, styles: this._objectStyles }),
                this._renderStylesItems(this._objectStyles)
            );
        },

        /**
         * Renders instances of ButtonStylesListItem with the preview of the correspondent block, inline or object styles.
         *
         * @instance
         * @memberof ButtonStylesList
         * @method _renderStylesItems
         * @param {Array} styles List of styles for which preview should be rendered.
         * @protected
         * @return {Array} Rendered instances of ButtonStylesListItem class
         */
        _renderStylesItems: function _renderStylesItems(styles) {
            var editor = this.props.editor;
            var items;

            if (styles && styles.length) {
                items = styles.map(function (item) {
                    return React.createElement(
                        'li',
                        { key: item.name, role: 'option' },
                        React.createElement(AlloyEditor.ButtonStylesListItem, { activeStyle: this.props.activeStyle, editor: editor, name: item.name, style: item.style })
                    );
                }.bind(this));
            }

            return items;
        }
    });

    AlloyEditor.ButtonStylesList = ButtonStylesList;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStyles class provides functionality for styling a selection with a list of
     * configurable and customizable styles. The allowed styles follow CKEDITOR.Style configuration
     * (http://docs.ckeditor.com/#!/api/CKEDITOR.style)
     *
     * @class ButtonStyles
     */

    var ButtonStyles = createReactClass({
        displayName: 'ButtonStyles',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {Boolean} expanded
             */
            expanded: PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * Indicates whether the remove styles item should appear in the styles list.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {Boolean} showRemoveStylesItem
             */
            showRemoveStylesItem: PropTypes.bool,

            /**
             * List of the styles the button is able to handle.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {Array} styles
             */
            styles: PropTypes.arrayOf(PropTypes.object),

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @instance
             * @memberof ButtonStyles
             * @property {Function} toggleDropdown
             */
            toggleDropdown: PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default styles
             * @memberof ButtonStyles
             * @property {String} key
             * @static
             */
            key: 'styles'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonStyles
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var activeStyle = AlloyEditor.Strings.normal;

            var styles = this._getStyles();

            styles.forEach(function (item) {
                if (this._checkActive(item.style)) {
                    activeStyle = item.name;
                }
            }.bind(this));

            var buttonStylesList;

            if (this.props.expanded) {
                buttonStylesList = React.createElement(AlloyEditor.ButtonStylesList, { activeStyle: activeStyle, editor: this.props.editor, onDismiss: this.props.toggleDropdown, showRemoveStylesItem: this.props.showRemoveStylesItem, styles: styles });
            }

            return React.createElement(
                'div',
                { className: 'ae-container-dropdown ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.styles + ' ' + activeStyle, className: 'ae-toolbar-element', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.styles + ' ' + activeStyle },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        React.createElement(
                            'span',
                            { className: 'ae-container-dropdown-selected-item' },
                            activeStyle
                        ),
                        React.createElement('span', { className: 'ae-icon-arrow' })
                    )
                ),
                buttonStylesList
            );
        },

        /**
         * Checks if the given style definition is applied to the current selection in the editor.
         *
         * @instance
         * @memberof ButtonStyles
         * @method _checkActive
         * @param {Object} styleConfig Style definition as per http://docs.ckeditor.com/#!/api/CKEDITOR.style.
         * @protected
         * @return {Boolean} Returns true if the style is applied to the selection, false otherwise.
         */
        _checkActive: function _checkActive(styleConfig) {
            var nativeEditor = this.props.editor.get('nativeEditor');

            // Styles with wildcard element (*) won't be considered active by CKEditor. Defaulting
            // to a 'span' element works for most of those cases with no defined element.
            styleConfig = CKEDITOR.tools.merge({ element: 'span' }, styleConfig);

            var style = new CKEDITOR.style(styleConfig);

            return style.checkActive(nativeEditor.elementPath(), nativeEditor);
        },

        /**
         * Returns an array of styles. Each style consists from two properties:
         * - name - the style name, for example "h1"
         * - style - an object with one property, called `element` which value
         * represents the style which have to be applied to the element.
         *
         * @instance
         * @memberof ButtonStyles
         * @method _getStyles
         * @protected
         * @return {Array<object>} An array of objects containing the styles.
         */
        _getStyles: function _getStyles() {
            return this.props.styles || [{
                name: AlloyEditor.Strings.h1,
                style: {
                    element: 'h1'
                }
            }, {
                name: AlloyEditor.Strings.h2,
                style: {
                    element: 'h2'
                }
            }, {
                name: AlloyEditor.Strings.formatted,
                style: {
                    element: 'pre'
                }
            }, {
                name: AlloyEditor.Strings.cite,
                style: {
                    element: 'cite'
                }
            }, {
                name: AlloyEditor.Strings.code,
                style: {
                    element: 'code'
                }
            }];
        }
    });

    AlloyEditor.Buttons[ButtonStyles.key] = AlloyEditor.ButtonStyles = ButtonStyles;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonSubscript class provides functionality for applying subscript style to a text selection.
     *
     * @class ButtonSubscript
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonSubscript = createReactClass({
        displayName: 'ButtonSubscript',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonSubscript
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonSubscript
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonSubscript
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default subscript
             * @memberof ButtonSubscript
             * @property {String} key
             * @static
             */
            key: 'subscript'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonSubscript
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'subscript',
                style: 'coreStyles_subscript'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonSubscript
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.subscript, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-subscript', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.subscript },
                React.createElement('span', { className: 'ae-icon-subscript' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonSubscript.key] = AlloyEditor.ButtonSubscript = ButtonSubscript;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonSuperscript class provides functionality for applying superscript style to a text selection.
     *
     * @class ButtonSuperscript
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonSuperscript = createReactClass({
        displayName: 'ButtonSuperscript',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonSuperscript
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonSuperscript
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonSuperscript
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default superscript
             * @memberof ButtonSuperscript
             * @property {String} key
             * @static
             */
            key: 'superscript'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonSuperscript
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'superscript',
                style: 'coreStyles_superscript'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonSuperscript
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.superscript, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-superscript', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.superscript },
                React.createElement('span', { className: 'ae-icon-superscript' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonSuperscript.key] = AlloyEditor.ButtonSuperscript = ButtonSuperscript;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableCell class provides functionality to work with table cells.
     *
     * @class ButtonTableCell
     */

    var ButtonTableCell = createReactClass({
        displayName: 'ButtonTableCell',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @instance
             * @memberof ButtonTableCell
             * @property {Array} commands
             */
            commands: PropTypes.arrayOf(PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTableCell
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @instance
             * @memberof ButtonTableCell
             * @property {Boolean} expanded
             */
            expanded: PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTableCell
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTableCell
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @instance
             * @memberof ButtonTableCell
             * @property {Function} toggleDropdown
             */
            toggleDropdown: PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableCell
             * @memberof ButtonTableCell
             * @property {String} key
             * @static
             */
            key: 'tableCell'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableCell
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableCell.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                'div',
                { className: 'ae-container ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.cell, 'aria-owns': buttonCommandsListId, className: 'ae-button', onClick: this.props.toggleDropdown, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.cell },
                    React.createElement('span', { className: 'ae-icon-cell' })
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @instance
         * @memberof ButtonTableCell
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'cellInsertBefore',
                label: AlloyEditor.Strings.cellInsertBefore
            }, {
                command: 'cellInsertAfter',
                label: AlloyEditor.Strings.cellInsertAfter
            }, {
                command: 'cellDelete',
                label: AlloyEditor.Strings.cellDelete
            }, {
                command: 'cellMerge',
                label: AlloyEditor.Strings.cellMerge
            }, {
                command: 'cellMergeDown',
                label: AlloyEditor.Strings.cellMergeDown
            }, {
                command: 'cellMergeRight',
                label: AlloyEditor.Strings.cellMergeRight
            }, {
                command: 'cellHorizontalSplit',
                label: AlloyEditor.Strings.cellSplitHorizontal
            }, {
                command: 'cellVerticalSplit',
                label: AlloyEditor.Strings.cellSplitVertical
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableCell.key] = AlloyEditor.ButtonTableCell = ButtonTableCell;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableColumn class provides functionality to work with table columns.
     *
     * @class ButtonTableColumn
     */

    var ButtonTableColumn = createReactClass({
        displayName: 'ButtonTableColumn',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @instance
             * @memberof ButtonTableColumn
             * @property {Array} commands
             */
            commands: PropTypes.arrayOf(PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTableColumn
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @instance
             * @memberof ButtonTableColumn
             * @property {Boolean} expanded
             */
            expanded: PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTableColumn
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTableColumn
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @instance
             * @memberof ButtonTableColumn
             * @property {Function} toggleDropdown
             */
            toggleDropdown: PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableColumn
             * @memberof ButtonTableColumn
             * @property {String} key
             * @static
             */
            key: 'tableColumn'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableColumn
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList, buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableColumn.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                'div',
                { className: 'ae-container ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.column, 'aria-owns': buttonCommandsListId, className: 'ae-button', onClick: this.props.toggleDropdown, role: 'listbox', tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.column },
                    React.createElement('span', { className: 'ae-icon-column' })
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @instance
         * @memberof ButtonTableColumn
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'columnInsertBefore',
                label: AlloyEditor.Strings.columnInsertBefore
            }, {
                command: 'columnInsertAfter',
                label: AlloyEditor.Strings.columnInsertAfter
            }, {
                command: 'columnDelete',
                label: AlloyEditor.Strings.columnDelete
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableColumn.key] = AlloyEditor.ButtonTableColumn = ButtonTableColumn;
})();
'use strict';

(function () {
    'use strict';

    var KEY_ENTER = 13;
    var KEY_ESC = 27;

    /**
     * The ButtonTableEdit class provides functionality for creating and editing a table in a document.
     * Provides UI for creating a table.
     *
     * @class ButtonTableEdit
     */
    var ButtonTableEdit = createReactClass({
        displayName: 'ButtonTableEdit',

        // Allows validating props being passed to the component.
        propTypes: {

            /**
             * Method to notify the button abandons the exclusive rendering mode.
             *
             * @instance
             * @memberof ButtonTableEdit
             * @property {Function} cancelExclusive
             */
            cancelExclusive: PropTypes.func.isRequired,

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTableEdit
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableEdit
             * @memberof ButtonTableEdit
             * @property {String} key
             * @static
             */
            key: 'tableEdit'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                tableAttributes: {
                    border: 1,
                    cellPadding: 0,
                    cellSpacing: 0,
                    style: 'width: 100%'
                }
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * Focuses on the link input to immediately allow editing.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            ReactDOM.findDOMNode(this.refs.rows).focus();
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                cols: 3,
                rows: 3
            };
        },

        /**
         * Creates a table.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method _createTable
         * @protected
         */
        _createTable: function _createTable() {
            var editor = this.props.editor.get('nativeEditor');
            var tableUtils = new CKEDITOR.Table(editor);

            tableUtils.create({
                attrs: this.props.tableAttributes,
                cols: this.state.cols,
                rows: this.state.rows
            });

            this.props.cancelExclusive();

            editor.fire('actionPerformed', this);
        },

        /**
         * Handles a change in input value. Sets the provided value from the user back to the input.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method _handleChange
         * @param {String} inputName The name of the input which value should be updated.
         * @param {SyntheticEvent} event The provided event.
         * @protected
         */
        _handleChange: function _handleChange(inputName, event) {
            var state = {};
            state[inputName] = event.target.value;

            this.setState(state);
        },

        /**
         * Monitors key interaction inside the input element to respond to the keys:
         * - Enter: Creates the table.
         * - Escape: Discards the changes.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method _handleKeyDown
         * @param {SyntheticEvent} event The keyboard event.
         * @protected
         */
        _handleKeyDown: function _handleKeyDown(event) {
            if (event.keyCode === KEY_ENTER || event.keyCode === KEY_ESC) {
                event.preventDefault();
            }

            if (event.keyCode === KEY_ENTER) {
                this._createTable();
            } else if (event.keyCode === KEY_ESC) {
                this.props.cancelExclusive();
            }
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableEdit
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var time = Date.now();
            var rowsId = time + 'rows';
            var colsId = time + 'cols';

            return React.createElement(
                'div',
                { className: 'ae-container-edit-table' },
                React.createElement(
                    'label',
                    { htmlFor: rowsId },
                    AlloyEditor.Strings.rows
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input small' },
                    React.createElement('input', { className: 'ae-input', id: rowsId, onChange: this._handleChange.bind(this, 'rows'), min: '1', onKeyDown: this._handleKeyDown, placeholder: 'Rows', ref: 'rows', type: 'number', value: this.state.rows })
                ),
                React.createElement(
                    'label',
                    { htmlFor: colsId },
                    AlloyEditor.Strings.columns
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input small' },
                    React.createElement('input', { className: 'ae-input', id: colsId, onChange: this._handleChange.bind(this, 'cols'), min: '1', onKeyDown: this._handleKeyDown, placeholder: 'Colums', ref: 'cols', type: 'number', value: this.state.cols })
                ),
                React.createElement(
                    'button',
                    { 'aria-label': 'Confirm', className: 'ae-button', onClick: this._createTable },
                    React.createElement('span', { className: 'ae-icon-ok' })
                )
            );
        }
    });

    AlloyEditor.Buttons[ButtonTableEdit.key] = AlloyEditor.ButtonTableEdit = ButtonTableEdit;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableHeading class provides functionality to work with table heading.
     *
     * @class ButtonTableHeading
     */

    var ButtonTableHeading = createReactClass({
        displayName: 'ButtonTableHeading',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @instance
             * @memberof ButtonTableHeading
             * @property {Array} commands
             */
            commands: PropTypes.arrayOf(PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTableHeading
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @instance
             * @memberof ButtonTableHeading
             * @property {Boolean} expanded
             */
            expanded: PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTableHeading
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTableHeading
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @instance
             * @memberof ButtonTableHeading
             * @property {Function} toggleDropdown
             */
            toggleDropdown: PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableRow
             * @memberof ButtonTableHeading
             * @property {String} key
             * @static
             */
            key: 'tableHeading'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableHeading
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableHeading.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            var activeHeading = new CKEDITOR.Table(this.props.editor.get('nativeEditor')).getHeading();
            var activeHeadingIntro = AlloyEditor.Strings.headers + ':';
            var activeHeadingLabel = AlloyEditor.Strings['headers' + activeHeading];

            return React.createElement(
                'div',
                { className: 'ae-container-dropdown-xl ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': '', className: 'ae-toolbar-element', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: '' },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        React.createElement(
                            'span',
                            { className: 'ae-container-dropdown-selected-item' },
                            activeHeadingIntro,
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                activeHeadingLabel
                            )
                        ),
                        React.createElement('span', { className: 'ae-icon-arrow' })
                    )
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @instance
         * @memberof ButtonTableHeading
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'tableHeadingNone',
                label: AlloyEditor.Strings.headersNone
            }, {
                command: 'tableHeadingRow',
                label: AlloyEditor.Strings.headersRow
            }, {
                command: 'tableHeadingColumn',
                label: AlloyEditor.Strings.headersColumn
            }, {
                command: 'tableHeadingBoth',
                label: AlloyEditor.Strings.headersBoth
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableHeading.key] = AlloyEditor.ButtonTableHeading = ButtonTableHeading;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableRemove class provides functionality for removing a table
     *
     * @class ButtonTableRemove
     */

    var ButtonTableRemove = createReactClass({
        displayName: 'ButtonTableRemove',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTableRemove
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTableRemove
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTableRemove
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableRemove
             * @memberof ButtonTableRemove
             * @property {String} key
             * @static
             */
            key: 'tableRemove'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableRemove
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.deleteTable, className: 'ae-button', 'data-type': 'button-table-remove', onClick: this._removeTable, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.deleteTable },
                React.createElement('span', { className: 'ae-icon-bin' })
            );
        },

        /**
         * Removes the table in the editor element.
         *
         * @instance
         * @memberof ButtonTableRemove
         * @method _removeTable
         * @protected
         */
        _removeTable: function _removeTable() {
            var editor = this.props.editor.get('nativeEditor');
            var tableUtils = new CKEDITOR.Table(editor);

            tableUtils.remove();

            editor.fire('actionPerformed', this);
        }
    });

    AlloyEditor.Buttons[ButtonTableRemove.key] = AlloyEditor.ButtonTableRemove = ButtonTableRemove;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableRow class provides functionality to work with table rows.
     *
     * @class ButtonTableRow
     */

    var ButtonTableRow = createReactClass({
        displayName: 'ButtonTableRow',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @instance
             * @memberof ButtonTableRow
             * @property {Array} commands
             */
            commands: PropTypes.arrayOf(PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTableRow
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @instance
             * @memberof ButtonTableRow
             * @property {Boolean} expanded
             */
            expanded: PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTableRow
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTableRow
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @instance
             * @memberof ButtonTableRow
             * @property {Function} toggleDropdown
             */
            toggleDropdown: PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableRow
             * @memberof ButtonTableRow
             * @property {String} key
             * @static
             */
            key: 'tableRow'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableRow
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableRow.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                'div',
                { className: 'ae-container ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.row, 'aria-owns': buttonCommandsListId, className: 'ae-button', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.row },
                    React.createElement('span', { className: 'ae-icon-row' })
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @instance
         * @memberof ButtonTableRow
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'rowInsertBefore',
                label: AlloyEditor.Strings.rowInsertBefore
            }, {
                command: 'rowInsertAfter',
                label: AlloyEditor.Strings.rowInsertAfter
            }, {
                command: 'rowDelete',
                label: AlloyEditor.Strings.rowDelete
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableRow.key] = AlloyEditor.ButtonTableRow = ButtonTableRow;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTable class provides functionality for creating and editing a table in a document. ButtonTable
     * renders in two different modes:
     *
     * - Normal: Just a button that allows to switch to the edition mode
     * - Exclusive: The ButtonTableEdit UI with all the table edition controls.
     *
     * @class ButtonTable
     */

    var ButtonTable = createReactClass({
        displayName: 'ButtonTable',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTable
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTable
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTable
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default table
             * @memberof ButtonTable
             * @property {String} key
             * @static
             */
            key: 'table'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTable
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.renderExclusive) {
                return React.createElement(AlloyEditor.ButtonTableEdit, this.props);
            } else {
                return React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.table, className: 'ae-button', 'data-type': 'button-table', onClick: this.props.requestExclusive, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.table },
                    React.createElement('span', { className: 'ae-icon-table' })
                );
            }
        }
    });

    AlloyEditor.Buttons[ButtonTable.key] = AlloyEditor.ButtonTable = ButtonTable;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTargetList class provides functionality for changing the target of a link
     * in the document.
     *
     * @class ButtonTargetList
     * @uses WidgetFocusManager
     */

    var ButtonTargetList = createReactClass({
        displayName: 'ButtonTargetList',

        mixins: [AlloyEditor.WidgetFocusManager],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTargetList
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default linkTargetEdit
             * @memberof ButtonTargetList
             * @property {String} key
             * @static
             */
            key: 'targetList'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * @instance
         * @memberof ButtonTargetList
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            ReactDOM.findDOMNode(this).focus();
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonTargetList
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTargetList
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var listTargets = this._renderListTargets();

            return React.createElement(
                AlloyEditor.ButtonDropdown,
                this.props,
                listTargets
            );
        },

        /**
         * Returns the the allowed link target items.
         *
         * @instance
         * @memberof ButtonTargetList
         * @method _getAllowedTargetItems
         * @protected
         * @return {Array} The allowed target items.
         */
        _getAllowedTargetItems: function _getAllowedTargetItems() {
            return this.props.allowedLinkTargets || [{
                label: AlloyEditor.Strings.linkTargetDefault,
                value: ''
            }, {
                label: AlloyEditor.Strings.linkTargetSelf,
                value: '_self'
            }, {
                label: AlloyEditor.Strings.linkTargetBlank,
                value: '_blank'
            }, {
                label: AlloyEditor.Strings.linkTargetParent,
                value: '_parent'
            }, {
                label: AlloyEditor.Strings.linkTargetTop,
                value: '_top'
            }];
        },

        /**
         * Renders the allowed link target items.
         *
         * @instance
         * @memberof ButtonTargetList
         * @method _renderListTargets
         * @protected
         * @return {Object} Returns the rendered link items
         */
        _renderListTargets: function _renderListTargets() {
            var targets = this._getAllowedTargetItems();

            var handleLinkTargetChange = this.props.handleLinkTargetChange;

            targets = targets.map(function (target) {
                var className = this.props.selectedTarget === target.value ? 'ae-toolbar-element active' : 'ae-toolbar-element';

                return React.createElement(
                    'li',
                    { key: target.value, role: 'option' },
                    React.createElement(
                        'button',
                        { className: className, 'data-value': target.value, onClick: handleLinkTargetChange },
                        target.label
                    )
                );
            }.bind(this));

            return targets;
        }
    });

    AlloyEditor.Buttons[ButtonTargetList.key] = AlloyEditor.ButtonTargetList = ButtonTargetList;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTwitter class provides functionality for creating a link which
     * allows people to tweet part of the content in the editor.
     *
     * @class ButtonTwitter
     * @uses ButtonStateClasses
     */

    var ButtonTwitter = createReactClass({
        displayName: 'ButtonTwitter',

        mixins: [AlloyEditor.ButtonStateClasses],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonTwitter
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonTwitter
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonTwitter
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default twitter
             * @memberof ButtonTwitter
             * @property {String} key
             * @static
             */
            key: 'twitter'
        },

        /**
         * Creates or removes the twitter link on the selection.
         *
         * @instance
         * @memberof ButtonTwitter
         * @method handleClick
         */
        handleClick: function handleClick() {
            var editor = this.props.editor.get('nativeEditor');

            var linkUtils = new CKEDITOR.Link(editor);

            if (this.isActive()) {
                linkUtils.remove(linkUtils.getFromSelection());
            } else {
                linkUtils.create(this._getHref(), {
                    'class': 'ae-twitter-link',
                    'target': '_blank'
                });
            }

            editor.fire('actionPerformed', this);
        },

        /**
         * Checks if the current selection is contained within a link that points to twitter.com/intent/tweet.
         *
         * @instance
         * @memberof ButtonTwitter
         * @method isActive
         * @return {Boolean} True if the selection is inside a twitter link, false otherwise.
         */
        isActive: function isActive() {
            var link = new CKEDITOR.Link(this.props.editor.get('nativeEditor')).getFromSelection();

            return link && link.getAttribute('href').indexOf('twitter.com/intent/tweet') !== -1;
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTwitter
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.twitter, className: cssClass, 'data-type': 'button-twitter', onClick: this.handleClick, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.twitter },
                React.createElement('span', { className: 'ae-icon-twitter' })
            );
        },

        /**
         * Generates the appropriate twitter url based on the selected text and the configuration
         * options received via props.
         *
         * @instance
         * @memberof ButtonTwitter
         * @method _getHref
         * @protected
         * @return {String} A valid twitter url with the selected text and given configuration.
         */
        _getHref: function _getHref() {
            var nativeEditor = this.props.editor.get('nativeEditor');
            var selectedText = nativeEditor.getSelection().getSelectedText();
            var url = this.props.url;
            var via = this.props.via;
            var twitterHref = 'https://twitter.com/intent/tweet?text=' + selectedText;

            if (url) {
                twitterHref += '&url=' + url;
            }

            if (via) {
                twitterHref += '&via=' + via;
            }

            return twitterHref;
        }
    });

    AlloyEditor.Buttons[ButtonTwitter.key] = AlloyEditor.ButtonTwitter = ButtonTwitter;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonUnorderedlist class provides functionality for creating unordered lists in an editor.
     *
     * @class ButtonUnorderedlist
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonUnorderedlist = createReactClass({
        displayName: 'ButtonUnorderedlist',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonUnorderedlist
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonUnorderedlist
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonUnorderedlist
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default ul
             * @memberof ButtonUnorderedlist
             * @property {String} key
             * @static
             */
            key: 'ul'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonUnorderedlist
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'bulletedlist',
                style: {
                    element: 'ul'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonUnorderedlist
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.bulletedlist, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-ul', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.bulletedlist },
                React.createElement('span', { className: 'ae-icon-bulleted-list' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonUnorderedlist.key] = AlloyEditor.ButtonUnorderedlist = ButtonUnorderedlist;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonUnderline class provides functionality for underlying a text selection.
     *
     * @class ButtonUnderline
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonUnderline = createReactClass({
        displayName: 'ButtonUnderline',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonUnderline
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonUnderline
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonUnderline
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default underline
             * @memberof ButtonUnderline
             * @property {String} key
             * @static
             */
            key: 'underline'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonUnderline
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'underline',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 85 /*U*/
                },
                style: 'coreStyles_underline'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonUnderline
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.underline, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-underline', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.underline },
                React.createElement('span', { className: 'ae-icon-underline' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonUnderline.key] = AlloyEditor.ButtonUnderline = ButtonUnderline;
})();
'use strict';

(function () {
    'use strict';

    var POSITION_LEFT = 1;
    var POSITION_RIGHT = 2;

    /**
     * The ToolbarAdd class provides functionality for adding content to the editor.
     *
     * @class ToolbarAdd
     * @uses ToolbarButtons
     * @uses WidgetArrowBox
     * @uses WidgetDropdown
     * @uses WidgetExclusive
     * @uses WidgetFocusManager
     * @uses WidgetPosition
     */
    var ToolbarAdd = createReactClass({
        displayName: 'ToolbarAdd',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager, AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The toolbar configuration.
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Object} config
             */
            config: PropTypes.object,

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The payload from "editorInteraction" event
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Object} editorEvent
             */
            editorEvent: PropTypes.object,

            /**
             * The gutter to be applied to the widget when rendered in exclusive mode
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Object} gutterExclusive
             */
            gutterExclusive: PropTypes.object,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * Provides a callback which should be executed when a dismiss key is pressed over a toolbar to return the focus to the editor.
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Function} onDismiss
             */
            onDismiss: PropTypes.func,

            /**
             * Whether the Toolbar should be shown on left or on right of the editable area. Could be one of these:
             * - ToolbarAdd.left
             * - ToolbarAdd.right
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Enum} position
             */
            position: PropTypes.oneOf([POSITION_LEFT, POSITION_RIGHT]),

            /**
             * The data, returned from {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionData:method"}}{{/crossLink}}
             *
             * @instance
             * @memberof ToolbarAdd
             * @property {Object} selectionData
             */
            selectionData: PropTypes.object
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default add
             * @memberof ToolbarAdd
             * @property {String} key
             * @static
             */
            key: 'add',

            /**
             * Defines the constant for positioning the Toolbar on left of the editable area.
             *
             * @default 1
             * @memberof ToolbarAdd
             * @property {String} left
             * @static
             */
            left: POSITION_LEFT,

            /**
             * Defines the constant for positioning the Toolbar on right of the editable area.
             *
             * @default 2
             * @memberof ToolbarAdd
             * @property {String} right
             * @static
             */
            right: POSITION_RIGHT
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-button',
                gutterExclusive: {
                    left: 10,
                    top: 0
                },
                keys: {
                    dismiss: [27],
                    next: [39, 40],
                    prev: [37, 38]
                },
                position: POSITION_LEFT
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            this._updatePosition();
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * This method is not called for the initial render.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method componentDidUpdate
         * @param {Object} prevProps The previous state of the component's properties.
         * @param {Object} prevState Component's previous state.
         */
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            this._updatePosition();

            // In case of exclusive rendering, focus the first descendant (button)
            // so the user will be able to start interacting with the buttons immediately.
            if (this.props.renderExclusive) {
                this.focus();
            }
        },

        /**
         * Lifecycle. Renders the buttons for adding content or hides the toolbar
         * if user interacted with a non-editable element.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method render
         * @return {Object|null} The content which should be rendered.
         */
        render: function render() {
            // Some operations such as `requestExclusive` may force editor to blur which will
            // invalidate the `props.editorEvent` stored value, without causing a `props` change.
            // For example, if the editor is empty, `ae_placeholder` plugin will remove
            // the target from the DOM and will prevent `add` toolbar from rendering.
            //
            // It should be safe to assume that if you have been able to render the toolbar
            // and request the exclusive mode, then rendering might be kept until the exclusive mode is left.
            if (!this.state.itemExclusive && this.props.editorEvent && this.props.editorEvent.data.nativeEvent.target && !this.props.editorEvent.data.nativeEvent.target.isContentEditable) {
                return null;
            }

            var buttons = this._getButtons();
            var className = this._getToolbarClassName();

            return React.createElement(
                'div',
                { 'aria-label': AlloyEditor.Strings.add, className: className, 'data-tabindex': this.props.config.tabIndex || 0, onFocus: this.focus, onKeyDown: this.handleKey, role: 'toolbar', tabIndex: '-1' },
                React.createElement(
                    'div',
                    { className: 'ae-container' },
                    buttons
                )
            );
        },

        /**
         * Returns a list of buttons that will eventually render to HTML.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method _getButtons
         * @protected
         * @return {Object} The buttons which have to be rendered.
         */
        _getButtons: function _getButtons() {
            var buttons;

            if (this.props.renderExclusive) {
                buttons = this.getToolbarButtons(this.props.config.buttons);
            } else {
                if (this.props.selectionData && this.props.selectionData.region) {
                    buttons = React.createElement(
                        'button',
                        { 'aria-label': AlloyEditor.Strings.add, className: 'ae-button ae-button-add', onClick: this.props.requestExclusive.bind(this, ToolbarAdd.key), title: AlloyEditor.Strings.add },
                        React.createElement('span', { className: 'ae-icon-add' })
                    );
                }
            }

            return buttons;
        },

        /**
         * Returns the class name of the toolbar in case of both exclusive and normal mode.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method _getToolbarClassName
         * @protected
         * @return {String} The class name which have to be applied to the DOM element.
         */
        _getToolbarClassName: function _getToolbarClassName() {
            var cssClass = 'ae-toolbar-add';

            if (this.props.renderExclusive) {
                cssClass = 'ae-toolbar ' + this.getArrowBoxClasses();
            }

            return cssClass;
        },

        /**
         * Calculates and sets the position of the toolbar in exclusive or normal mode.
         *
         * @instance
         * @memberof ToolbarAdd
         * @method _updatePosition
         * @protected
         */
        _updatePosition: function _updatePosition() {
            var region;

            // If component is not mounted, there is nothing to do
            if (!ReactDOM.findDOMNode(this)) {
                return;
            }

            if (this.props.renderExclusive) {
                this.updatePosition();
                this.show();
            } else {
                if (this.props.selectionData) {
                    region = this.props.selectionData.region;
                }

                if (region) {
                    var domNode = ReactDOM.findDOMNode(this);

                    var domElement = new CKEDITOR.dom.element(domNode);

                    var startRect = region.startRect || region;

                    var nativeEditor = this.props.editor.get('nativeEditor');

                    var clientRect = nativeEditor.editable().getClientRect();

                    var offsetLeft;

                    var position = this.props.config.position || this.props.position;

                    if (position === POSITION_LEFT) {
                        offsetLeft = clientRect.left - domNode.offsetWidth - this.props.gutterExclusive.left + 'px';
                    } else {
                        offsetLeft = clientRect.right + this.props.gutterExclusive.left + 'px';
                    }

                    domNode.style.left = offsetLeft;

                    domNode.style.top = Math.floor((region.bottom + region.top) / 2) + 'px';

                    if (nativeEditor.element.getStyle('overflow') !== 'auto') {
                        domNode.style.top = Math.floor(region.top - domNode.offsetHeight / 2 + startRect.height / 2) + 'px';
                    } else {
                        domNode.style.top = Math.floor(nativeEditor.element.$.offsetTop + startRect.height / 2 - domNode.offsetHeight / 2) + 'px';
                    }

                    domNode.style.opacity = 1;

                    domElement.removeClass('ae-arrow-box');

                    this.cancelAnimation();
                }
            }
        }
    });

    AlloyEditor.Toolbars[ToolbarAdd.key] = AlloyEditor.ToolbarAdd = ToolbarAdd;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ToolbarStyles class hosts the buttons for styling a text selection.
     *
     * @class ToolbarStyles
     * @uses ToolbarButtons
     * @uses WidgetArrowBox
     * @uses WidgetDropdown
     * @uses WidgetExclusive
     * @uses WidgetFocusManager
     * @uses WidgetPosition
     */

    var ToolbarStyles = createReactClass({
        displayName: 'ToolbarStyles',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager, AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The toolbar configuration.
             *
             * @instance
             * @memberof ToolbarStyles
             * @property {Object} config
             */
            config: PropTypes.object,

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ToolbarStyles
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The payload from "editorInteraction" event
             *
             * @instance
             * @memberof ToolbarStyles
             * @property {Object} editorEvent
             */
            editorEvent: PropTypes.object,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ToolbarStyles
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * Provides a callback which should be executed when a dismiss key is pressed over a toolbar to return the focus to the editor.
             *
             * @instance
             * @memberof ToolbarStyles
             * @property {Function} onDismiss
             */
            onDismiss: PropTypes.func,

            /**
             * The data, returned from {{#crossLink "CKEDITOR.plugins.ae_selectionregion/getSelectionData:method"}}{{/crossLink}}
             *
             * @instance
             * @memberof ToolbarStyles
             * @property {Object} selectionData
             */
            selectionData: PropTypes.object
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default styles
             * @memberof ToolbarStyles
             * @property {String} key
             * @static
             */
            key: 'styles'
        },

        /**
         * Lifecycle. Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            this._updatePosition();
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * This method is not called for the initial render.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method componentDidUpdate
         * @param {Object} prevProps The previous state of the component's properties.
         * @param {Object} prevState Component's previous state.
         */
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            this._updatePosition();
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-input, .ae-button:not([disabled]), .ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    next: [39, 40],
                    prev: [37, 38]
                }
            };
        },

        /**
         * Lifecycle. Renders the buttons for adding content or hides the toolbar
         * if user interacted with a non-editable element.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method render
         * @return {Object|null} The content which should be rendered.
         */
        render: function render() {
            var currentSelection = this._getCurrentSelection();

            if (currentSelection) {
                var getArrowBoxClassesFn = this._getSelectionFunction(currentSelection.getArrowBoxClasses);
                var arrowBoxClasses;

                if (getArrowBoxClassesFn) {
                    arrowBoxClasses = getArrowBoxClassesFn();
                } else {
                    arrowBoxClasses = this.getArrowBoxClasses();
                }

                var cssClasses = 'ae-toolbar-styles ' + arrowBoxClasses;

                var buttons = this.getToolbarButtons(currentSelection.buttons, {
                    manualSelection: this.props.editorEvent ? this.props.editorEvent.data.manualSelection : null,
                    selectionType: currentSelection.name
                });

                return React.createElement(
                    'div',
                    { 'aria-label': AlloyEditor.Strings.styles, className: cssClasses, 'data-tabindex': this.props.config.tabIndex || 0, onFocus: this.focus, onKeyDown: this.handleKey, role: 'toolbar', tabIndex: '-1' },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        buttons
                    )
                );
            }

            return null;
        },

        /**
         * Retrieve a function from String. It converts a fully qualified string into the mapped function.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method _getSelectionFunction
         * @param {Function|String} selectionFn A function, or a fully qualified string pointing to the desired one (e.g. 'AlloyEditor.SelectionTest.image').
         * @protected
         * @return {Function} The mapped function.
         */
        _getSelectionFunction: function _getSelectionFunction(selectionFn) {
            var Lang = AlloyEditor.Lang;
            var selectionFunction;

            if (Lang.isFunction(selectionFn)) {
                selectionFunction = selectionFn;
            } else if (Lang.isString(selectionFn)) {
                var parts = selectionFn.split('.');
                var currentMember = window;
                var property = parts.shift();

                while (property && Lang.isObject(currentMember) && Lang.isObject(currentMember[property])) {
                    currentMember = currentMember[property];
                    property = parts.shift();
                }

                if (Lang.isFunction(currentMember)) {
                    selectionFunction = currentMember;
                }
            }

            return selectionFunction;
        },

        /**
         * Analyzes the current editor selection and returns the selection configuration that matches.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method _getCurrentSelection
         * @protected
         * @return {Object} The matched selection configuration.
         */
        _getCurrentSelection: function _getCurrentSelection() {
            var eventPayload = this.props.editorEvent ? this.props.editorEvent.data : null;
            var selection;

            if (eventPayload) {
                this.props.config.selections.some(function (item) {
                    var testFn = this._getSelectionFunction(item.test);
                    var result;

                    if (testFn) {
                        result = eventPayload.manualSelection === item.name || testFn({
                            data: eventPayload,
                            editor: this.props.editor
                        });
                    }

                    if (result) {
                        selection = item;
                    }

                    return result;
                }, this);
            }

            return selection;
        },

        /**
         * Calculates and sets the position of the toolbar.
         *
         * @instance
         * @memberof ToolbarStyles
         * @method _updatePosition
         * @protected
         */
        _updatePosition: function _updatePosition() {
            // If component is not mounted, there is nothing to do
            if (!ReactDOM.findDOMNode(this)) {
                return;
            }

            var currentSelection = this._getCurrentSelection();
            var result;

            // If current selection has a function called `setPosition`, call it
            // and check the returned value. If false, fallback to the default positioning logic.
            if (currentSelection) {
                var setPositionFn = this._getSelectionFunction(currentSelection.setPosition);

                if (setPositionFn) {
                    result = setPositionFn.call(this, {
                        editor: this.props.editor,
                        editorEvent: this.props.editorEvent,
                        selectionData: this.props.selectionData
                    });
                }
            }

            if (!result) {
                this.updatePosition();
                this.show();
            }
        }
    });

    AlloyEditor.Toolbars[ToolbarStyles.key] = AlloyEditor.ToolbarStyles = ToolbarStyles;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The main editor UI class manages a hierarchy of widgets (toolbars and buttons).
     *
     * @class UI
     * @uses WidgetExclusive
     * @uses WidgetFocusManager
     */

    var UI = createReactClass({
        displayName: 'UI',

        mixins: [AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * Localized messages for live aria updates. Should include the following messages:
             * - noToolbar: Notification for no available toolbar in the editor.
             * - oneToolbar: Notification for just one available toolbar in the editor.
             * - manyToolbars: Notification for more than one available toolbar in the editor.
             *
             * @instance
             * @memberof UI
             * @property {Object} ariaUpdates
             */
            ariaUpdates: PropTypes.object,

            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof UI
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The delay (ms), after which key or mouse events will be processed.
             *
             * @instance
             * @memberof UI
             * @property {Number} eventsDelay
             */
            eventsDelay: PropTypes.number,

            /**
             * The toolbars configuration for this editor instance
             *
             * @instance
             * @memberof UI
             * @property {Object} toolbars
             */
            toolbars: PropTypes.object.isRequired
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         *
         * @instance
         * @memberof UI
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                hidden: false
            };
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof UI
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '[class^=ae-toolbar-]',
                eventsDelay: 0,
                keys: {
                    next: 9
                }
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * @instance
         * @memberof UI
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            var editor = this.props.editor.get('nativeEditor');

            editor.on('editorInteraction', this._onEditorInteraction, this);
            editor.on('actionPerformed', this._onActionPerformed, this);
            editor.on('key', this._onEditorKey, this);

            // Set up events for hiding the UI when user stops interacting with the editor.
            // This may happen when he just clicks outside of the editor. However,
            // this does not include a situation when he clicks on some button, part of
            // editor's UI.

            // It is not easy to debounce _setUIHidden on mousedown, because if we
            // debounce it, when the handler is being invoked, the target might be no more part
            // of the editor's UI - onActionPerformed causes re-render.
            this._mousedownListener = function (event) {
                this._setUIHidden(event.target);
            }.bind(this);

            this._keyDownListener = CKEDITOR.tools.debounce(function (event) {
                this._setUIHidden(document.activeElement);
            }, this.props.eventsDelay, this);

            document.addEventListener('mousedown', this._mousedownListener);
            document.addEventListener('keydown', this._keyDownListener);
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * Fires `ariaUpdate` event passing ARIA related messages.
         * Fires `editorUpdate` event passing the previous and current properties and state.
         *
         * @instance
         * @memberof UI
         * @method componentDidUpdate
         */
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            var domNode = ReactDOM.findDOMNode(this);

            var editor = this.props.editor.get('nativeEditor');

            if (domNode) {
                editor.fire('ariaUpdate', {
                    message: this._getAvailableToolbarsMessage(domNode)
                });
            }

            editor.fire('editorUpdate', {
                prevProps: prevProps,
                prevState: prevState,
                props: this.props,
                state: this.state
            });
        },

        _getAriaUpdateTemplate: function _getAriaUpdateTemplate(ariaUpdate) {
            if (!this._ariaUpdateTemplates) {
                this._ariaUpdateTemplates = {};
            }

            if (!this._ariaUpdateTemplates[ariaUpdate]) {
                this._ariaUpdateTemplates[ariaUpdate] = new CKEDITOR.template(this._getAriaUpdates()[ariaUpdate]);
            }

            return this._ariaUpdateTemplates[ariaUpdate];
        },

        /**
         * Returns the templates for ARIA messages.
         *
         * @instance
         * @memberof UI
         * @protected
         * @method _getAriaUpdates
         * @return {Object} ARIA relates messages. Default:
         * {
         *      noToolbar: AlloyEditor.Strings.ariaUpdateNoToolbar,
         *      oneToolbar: AlloyEditor.Strings.ariaUpdateOneToolbar,
         *      manyToolbars: AlloyEditor.Strings.ariaUpdateManyToolbars
         *  }
         */
        _getAriaUpdates: function _getAriaUpdates() {
            return this.props.ariaUpdates || {
                noToolbar: AlloyEditor.Strings.ariaUpdateNoToolbar,
                oneToolbar: AlloyEditor.Strings.ariaUpdateOneToolbar,
                manyToolbars: AlloyEditor.Strings.ariaUpdateManyToolbars
            };
        },

        /**
         * Returns an ARIA message which represents the number of currently available toolbars.
         *
         * @instance
         * @memberof UI
         * @method _getAvailableToolbarsMessage
         * @protected
         * @param {CKEDITOR.dom.element} domNode The DOM node from which the available toolbars will be retrieved.
         * @return {String} The ARIA message for the number of available toolbars
         */
        _getAvailableToolbarsMessage: function _getAvailableToolbarsMessage(domNode) {
            var toolbarsNodeList = domNode.querySelectorAll('[role="toolbar"]');

            if (!toolbarsNodeList.length) {
                return this._getAriaUpdates().noToolbar;
            } else {
                var toolbarNames = Array.prototype.slice.call(toolbarsNodeList).map(function (toolbar) {
                    return toolbar.getAttribute('aria-label');
                });

                var ariaUpdate = toolbarNames.length === 1 ? 'oneToolbar' : 'manyToolbars';

                return this._getAriaUpdateTemplate(ariaUpdate).output({
                    toolbars: toolbarNames.join(',').replace(/,([^,]*)$/, ' and ' + '$1')
                });
            }
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @instance
         * @memberof UI
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            if (this._mousedownListener) {
                document.removeEventListener('mousedown', this._mousedownListener);
            }

            if (this._keyDownListener) {
                this._keyDownListener.detach();
                document.removeEventListener('keydown', this._keyDownListener);
            }
        },

        /**
         * Lifecycle. Renders the UI of the editor. This may include several toolbars and buttons.
         * The editor's UI also takes care of rendering the items in exclusive mode.
         *
         * @instance
         * @memberof UI
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.state.hidden) {
                return null;
            }

            var toolbars = Object.keys(this.props.toolbars).map(function (toolbar) {
                return AlloyEditor.Toolbars[toolbar] || window[toolbar];
            });

            toolbars = this.filterExclusive(toolbars).map(function (toolbar) {
                var props = this.mergeExclusiveProps({
                    config: this.props.toolbars[toolbar.key],
                    editor: this.props.editor,
                    editorEvent: this.state.editorEvent,
                    key: toolbar.key,
                    onDismiss: this._onDismissToolbarFocus,
                    selectionData: this.state.selectionData
                }, toolbar.key);

                return React.createElement(toolbar, props);
            }.bind(this));

            return React.createElement(
                'div',
                { className: 'ae-toolbars', onKeyDown: this.handleKey },
                toolbars
            );
        },

        /**
         * Listener to the editor's `actionPerformed` event. Sets state and redraws the UI of the editor.
         *
         * @instance
         * @memberof UI
         * @protected
         * @method _onActionPerformed
         * @param {SynteticEvent} event The provided event
         */
        _onActionPerformed: function _onActionPerformed(event) {
            var editor = this.props.editor.get('nativeEditor');

            editor.focus();

            this.setState({
                itemExclusive: null,
                selectionData: editor.getSelectionData()
            });
        },

        /**
         * Executed when a dismiss key is pressed over a toolbar to return the focus to the editor.
         *
         * @instance
         * @memberof UI
         * @protected
         * @method _onDismissToolbarFocus
         */
        _onDismissToolbarFocus: function _onDismissToolbarFocus() {
            var editor = this.props.editor.get('nativeEditor');

            editor.focus();
        },

        /**
         * Listener to the editor's `userInteraction` event. Retrieves the data about the user selection and
         * provides it via component's state property.
         *
         * @instance
         * @memberof UI
         * @protected
         * @method _onEditorInteraction
         * @param {SynteticEvent} event The provided event
         */
        _onEditorInteraction: function _onEditorInteraction(event) {
            this.setState({
                editorEvent: event,
                hidden: false,
                itemExclusive: null,
                selectionData: event.data.selectionData
            });
        },

        /**
         * Focuses on the active toolbar when the combination ALT+F10 is pressed inside the editor.
         *
         * @instance
         * @memberof UI
         * @protected
         * @method _onEditorKey
         */
        _onEditorKey: function _onEditorKey(event) {
            var nativeEvent = event.data.domEvent.$;

            if (nativeEvent.altKey && nativeEvent.keyCode === 121) {
                this.focus();
            }
        },

        /**
         * Checks if the target with which the user interacted is part of editor's UI or it is
         * the editable area. If none of these, sets the state of editor's UI to be hidden.
         *
         * @instance
         * @memberof UI
         * @protected
         * @method _setUIHidden
         * @param {DOMElement} target The DOM element with which user interacted lastly.
         */
        _setUIHidden: function _setUIHidden(target) {
            var domNode = ReactDOM.findDOMNode(this);

            if (domNode) {
                var editable = this.props.editor.get('nativeEditor').editable();
                var parentNode = target.parentNode;
                var targetNode = new CKEDITOR.dom.node(target);

                if (!editable) {
                    this.setState({
                        hidden: true
                    });
                } else {
                    var res = editable.$ === target || editable.contains(targetNode) || new CKEDITOR.dom.element(domNode).contains(targetNode);

                    if (parentNode) {
                        res = res || parentNode.id === "ckimgrsz";
                    }

                    if (!res) {
                        this.setState({
                            hidden: true
                        });
                    }
                }
            }
        }
    });

    /**
     * Fired when component updates and when it is rendered in the DOM.
     * The payload consists from a `message` property containing the ARIA message.
     *
     * @event ariaUpdate
     */

    /**
     * Fired when component updates. The payload consists from an object with the following
     * properties:
     * - prevProps - The previous properties of the component
     * - prevState - The previous state of the component
     * - props - The current properties of the component
     * - state - The current state of the component
     *
     * @event ariaUpdate
     */

    AlloyEditor.UI = UI;
})();
    }
}());
