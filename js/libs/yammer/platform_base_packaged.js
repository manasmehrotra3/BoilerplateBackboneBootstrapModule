/*!
  jQuery JavaScript Library v1.4.2
  http://jquery.com/
 
  Copyright 2010, John Resig
  Dual licensed under the MIT or GPL Version 2 licenses.
  http://jquery.org/license
 
  Includes Sizzle.js
  http://sizzlejs.com/
  Copyright 2010, The Dojo Foundation
  Released under the MIT, BSD, and GPL Licenses.
 
  Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(window,undefined){var jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},_jQuery=window.jQuery,_$=window.$,document=window.document,rootjQuery,quickExpr=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,isSimple=/^.[^:#\[\.,]*$/,rnotwhite=/\S/,rtrim=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,userAgent=navigator.userAgent,browserMatch,readyBound=false,readyList=[],DOMContentLoaded,toString=Object.prototype.toString,hasOwnProperty=Object.prototype.hasOwnProperty,push=Array.prototype.push,slice=Array.prototype.slice,indexOf=Array.prototype.indexOf;jQuery.fn=jQuery.prototype={init:function(selector,context){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(selector==="body"&&!context){this.context=document;this[0]=document.body;this.selector="body";this.length=1;return this;}
if(typeof selector==="string"){match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1]){doc=(context?context.ownerDocument||context:document);ret=rsingleTag.exec(selector);if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];jQuery.fn.attr.call(selector,context,true);}else{selector=[doc.createElement(ret[1])];}}else{ret=buildFragment([match[1]],[doc]);selector=(ret.cacheable?ret.fragment.cloneNode(true):ret.fragment).childNodes;}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context&&/^\w+$/.test(selector)){this.selector=selector;this.context=document;selector=document.getElementsByTagName(selector);return jQuery.merge(this,selector);}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return jQuery(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length;},toArray:function(){return slice.call(this,0);},get:function(num){return num==null?this.toArray():(num<0?this.slice(num)[0]:this[num]);},pushStack:function(elems,name,selector){var ret=jQuery();if(jQuery.isArray(elems)){push.apply(ret,elems);}else{jQuery.merge(ret,elems);}
ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.bindReady();if(jQuery.isReady){fn.call(document,jQuery);}else if(readyList){readyList.push(fn);}
return this;},eq:function(i){return i===-1?this.slice(i):this.slice(i,+i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||jQuery(null);},push:push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options,name,src,copy;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||jQuery.isArray(copy))){var clone=src&&(jQuery.isPlainObject(src)||jQuery.isArray(src))?src:jQuery.isArray(copy)?[]:{};target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep){window.jQuery=_jQuery;}
return jQuery;},isReady:false,ready:function(){if(!jQuery.isReady){if(!document.body){return setTimeout(jQuery.ready,13);}
jQuery.isReady=true;if(readyList){var fn,i=0;while((fn=readyList[i++])){fn.call(document,jQuery);}
readyList=null;}
if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");}}},bindReady:function(){if(readyBound){return;}
readyBound=true;if(document.readyState==="complete"){return jQuery.ready();}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var toplevel=false;try{toplevel=window.frameElement==null;}catch(e){}
if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},isFunction:function(obj){return toString.call(obj)==="[object Function]";},isArray:function(obj){return toString.call(obj)==="[object Array]";},isPlainObject:function(obj){if(!obj||toString.call(obj)!=="[object Object]"||obj.nodeType||obj.setInterval){return false;}
if(obj.constructor&&!hasOwnProperty.call(obj,"constructor")&&!hasOwnProperty.call(obj.constructor.prototype,"isPrototypeOf")){return false;}
var key;for(key in obj){}
return key===undefined||hasOwnProperty.call(obj,key);},isEmptyObject:function(obj){for(var name in obj){return false;}
return true;},error:function(msg){throw msg;},parseJSON:function(data){if(typeof data!=="string"||!data){return null;}
data=jQuery.trim(data);if(/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return window.JSON&&window.JSON.parse?window.JSON.parse(data):(new Function("return "+data))();}else{jQuery.error("Invalid JSON: "+data);}},noop:function(){},globalEval:function(data){if(data&&rnotwhite.test(data)){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.support.scriptEval){script.appendChild(document.createTextNode(data));}else{script.text=data;}
head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase();},each:function(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(object[i++],args)===false){break;}}}}else{if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else{for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}}
return object;},trim:function(text){return(text||"").replace(rtrim,"");},makeArray:function(array,results){var ret=results||[];if(array!=null){if(array.length==null||typeof array==="string"||jQuery.isFunction(array)||(typeof array!=="function"&&array.setInterval)){push.call(ret,array);}else{jQuery.merge(ret,array);}}
return ret;},inArray:function(elem,array){if(array.indexOf){return array.indexOf(elem);}
for(var i=0,length=array.length;i<length;i++){if(array[i]===elem){return i;}}
return-1;},merge:function(first,second){var i=first.length,j=0;if(typeof second.length==="number"){for(var l=second.length;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++){if(!inv!==!callback(elems[i],i)){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var ret=[],value;for(var i=0,length=elems.length;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,proxy,thisObject){if(arguments.length===2){if(typeof proxy==="string"){thisObject=fn;fn=thisObject[proxy];proxy=undefined;}else if(proxy&&!jQuery.isFunction(proxy)){thisObject=proxy;proxy=undefined;}}
if(!proxy&&fn){proxy=function(){return fn.apply(thisObject||this,arguments);};}
if(fn){proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;}
return proxy;},uaMatch:function(ua){ua=ua.toLowerCase();var match=/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||!/compatible/.test(ua)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};},browser:{}});browserMatch=jQuery.uaMatch(userAgent);if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;jQuery.browser.version=browserMatch.version;}
if(jQuery.browser.webkit){jQuery.browser.safari=true;}
if(indexOf){jQuery.inArray=function(elem,array){return indexOf.call(array,elem);};}
rootjQuery=jQuery(document);if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}};}
function doScrollCheck(){if(jQuery.isReady){return;}
try{document.documentElement.doScroll("left");}catch(error){setTimeout(doScrollCheck,1);return;}
jQuery.ready();}
function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"});}else{jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}
function access(elems,key,value,exec,fn,pass){var length=elems.length;if(typeof key==="object"){for(var k in key){access(elems,k,key[k],exec,fn,value);}
return elems;}
if(value!==undefined){exec=!pass&&exec&&jQuery.isFunction(value);for(var i=0;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}
return elems;}
return length?fn(elems[0],key):undefined;}
function now(){return(new Date).getTime();}
(function(){jQuery.support={};var root=document.documentElement,script=document.createElement("script"),div=document.createElement("div"),id="script"+now();div.style.display="none";div.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0];if(!all||!all.length||!a){return;}
jQuery.support={leadingWhitespace:div.firstChild.nodeType===3,tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:div.getElementsByTagName("input")[0].value==="on",optSelected:document.createElement("select").appendChild(document.createElement("option")).selected,parentNode:div.removeChild(div.appendChild(document.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};script.type="text/javascript";try{script.appendChild(document.createTextNode("window."+id+"=1;"));}catch(e){}
root.insertBefore(script,root.firstChild);if(window[id]){jQuery.support.scriptEval=true;delete window[id];}
try{delete script.test;}catch(e){jQuery.support.deleteExpando=false;}
root.removeChild(script);if(div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function click(){jQuery.support.noCloneEvent=false;div.detachEvent("onclick",click);});div.cloneNode(true).fireEvent("onclick");}
div=document.createElement("div");div.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var fragment=document.createDocumentFragment();fragment.appendChild(div.firstChild);jQuery.support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;jQuery(function(){var div=document.createElement("div");div.style.width=div.style.paddingLeft="1px";document.body.appendChild(div);jQuery.boxModel=jQuery.support.boxModel=div.offsetWidth===2;document.body.removeChild(div).style.display='none';div=null;});var eventSupported=function(eventName){var el=document.createElement("div");eventName="on"+eventName;var isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,"return;");isSupported=typeof el[eventName]==="function";}
el=null;return isSupported;};jQuery.support.submitBubbles=eventSupported("submit");jQuery.support.changeBubbles=eventSupported("change");root=script=div=all=a=null;})();jQuery.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var expando="jQuery"+now(),uuid=0,windowData={};jQuery.extend({cache:{},expando:expando,noData:{"embed":true,"object":true,"applet":true},data:function(elem,name,data){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){return;}
elem=elem==window?windowData:elem;var id=elem[expando],cache=jQuery.cache,thisCache;if(!id&&typeof name==="string"&&data===undefined){return null;}
if(!id){id=++uuid;}
if(typeof name==="object"){elem[expando]=id;thisCache=cache[id]=jQuery.extend(true,{},name);}else if(!cache[id]){elem[expando]=id;cache[id]={};}
thisCache=cache[id];if(data!==undefined){thisCache[name]=data;}
return typeof name==="string"?thisCache[name]:thisCache;},removeData:function(elem,name){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){return;}
elem=elem==window?windowData:elem;var id=elem[expando],cache=jQuery.cache,thisCache=cache[id];if(name){if(thisCache){delete thisCache[name];if(jQuery.isEmptyObject(thisCache)){jQuery.removeData(elem);}}}else{if(jQuery.support.deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}});jQuery.fn.extend({data:function(key,value){if(typeof key==="undefined"&&this.length){return jQuery.data(this[0]);}else if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length){data=jQuery.data(this[0],key);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}else{return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function(elem,type,data){if(!elem){return;}
type=(type||"fx")+"queue";var q=jQuery.data(elem,type);if(!data){return q||[];}
if(!q||jQuery.isArray(data)){q=jQuery.data(elem,type,jQuery.makeArray(data));}else{q.push(data);}
return q;},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),fn=queue.shift();if(fn==="inprogress"){fn=queue.shift();}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
fn.call(elem,function(){jQuery.dequeue(elem,type);});}}});jQuery.fn.extend({queue:function(type,data){if(typeof type!=="string"){data=type;type="fx";}
if(data===undefined){return jQuery.queue(this[0],type);}
return this.each(function(i,elem){var queue=jQuery.queue(this,type,data);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(){var elem=this;setTimeout(function(){jQuery.dequeue(elem,type);},time);});},clearQueue:function(type){return this.queue(type||"fx",[]);}});var rclass=/[\n\t]/g,rspace=/\s+/,rreturn=/\r/g,rspecialurl=/href|src|style/,rtype=/(button|input)/i,rfocusable=/(button|input|object|select|textarea)/i,rclickable=/^(a|area)$/i,rradiocheck=/radio|checkbox/;jQuery.fn.extend({attr:function(name,value){return access(this,name,value,true,jQuery.attr);},removeAttr:function(name,fn){return this.each(function(){jQuery.attr(this,name,"");if(this.nodeType===1){this.removeAttribute(name);}});},addClass:function(value){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.addClass(value.call(this,i,self.attr("class")));});}
if(value&&typeof value==="string"){var classNames=(value||"").split(rspace);for(var i=0,l=this.length;i<l;i++){var elem=this[i];if(elem.nodeType===1){if(!elem.className){elem.className=value;}else{var className=" "+elem.className+" ",setClass=elem.className;for(var c=0,cl=classNames.length;c<cl;c++){if(className.indexOf(" "+classNames[c]+" ")<0){setClass+=" "+classNames[c];}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.removeClass(value.call(this,i,self.attr("class")));});}
if((value&&typeof value==="string")||value===undefined){var classNames=(value||"").split(rspace);for(var i=0,l=this.length;i<l;i++){var elem=this[i];if(elem.nodeType===1&&elem.className){if(value){var className=(" "+elem.className+" ").replace(rclass," ");for(var c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ");}
elem.className=jQuery.trim(className);}else{elem.className="";}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.toggleClass(value.call(this,i,self.attr("class"),stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspace);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery.data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery.data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ";for(var i=0,l=this.length;i<l;i++){if((" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;},val:function(value){if(value===undefined){var elem=this[0];if(elem){if(jQuery.nodeName(elem,"option")){return(elem.attributes.value||{}).specified?elem.value:elem.text;}
if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";if(index<0){return null;}
for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;}
if(rradiocheck.test(elem.type)&&!jQuery.support.checkOn){return elem.getAttribute("value")===null?"on":elem.value;}
return(elem.value||"").replace(rreturn,"");}
return undefined;}
var isFunction=jQuery.isFunction(value);return this.each(function(i){var self=jQuery(this),val=value;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}
if(typeof val==="number"){val+="";}
if(jQuery.isArray(val)&&rradiocheck.test(this.type)){this.checked=jQuery.inArray(self.val(),val)>=0;}else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(val);jQuery("option",this).each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){this.selectedIndex=-1;}}else{this.value=val;}});}});jQuery.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(elem,name,value,pass){if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value);}
var notxml=elem.nodeType!==1||!jQuery.isXMLDoc(elem),set=value!==undefined;name=notxml&&jQuery.props[name]||name;if(elem.nodeType===1){var special=rspecialurl.test(name);if(name==="selected"&&!jQuery.support.optSelected){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}
if(name in elem&&notxml&&!special){if(set){if(name==="type"&&rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}
elem[name]=value;}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name)){return elem.getAttributeNode(name).nodeValue;}
if(name==="tabIndex"){var attributeNode=elem.getAttributeNode("tabIndex");return attributeNode&&attributeNode.specified?attributeNode.value:rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}
return elem[name];}
if(!jQuery.support.style&&notxml&&name==="style"){if(set){elem.style.cssText=""+value;}
return elem.style.cssText;}
if(set){elem.setAttribute(name,""+value);}
var attr=!jQuery.support.hrefNormalized&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}
return jQuery.style(elem,name,value);}});var rnamespaces=/\.(.*)$/,fcleanup=function(nm){return nm.replace(/[^\w\s\.\|`]/g,function(ch){return"\\"+ch;});};jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType===3||elem.nodeType===8){return;}
if(elem.setInterval&&(elem!==window&&!elem.frameElement)){elem=window;}
var handleObjIn,handleObj;if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;}
if(!handler.guid){handler.guid=jQuery.guid++;}
var elemData=jQuery.data(elem);if(!elemData){return;}
var events=elemData.events=elemData.events||{},eventHandle=elemData.handle,eventHandle;if(!eventHandle){elemData.handle=eventHandle=function(){return typeof jQuery!=="undefined"&&!jQuery.event.triggered?jQuery.event.handle.apply(eventHandle.elem,arguments):undefined;};}
eventHandle.elem=elem;types=types.split(" ");var type,i=0,namespaces;while((type=types[i++])){handleObj=handleObjIn?jQuery.extend({},handleObjIn):{handler:handler,data:data};if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();handleObj.namespace=namespaces.slice(0).sort().join(".");}else{namespaces=[];handleObj.namespace="";}
handleObj.type=type;handleObj.guid=handler.guid;var handlers=events[type],special=jQuery.event.special[type]||{};if(!handlers){handlers=events[type]=[];if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
handlers.push(handleObj);jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,pos){if(elem.nodeType===3||elem.nodeType===8){return;}
var ret,type,fn,i=0,all,namespaces,namespace,special,eventType,handleObj,origType,elemData=jQuery.data(elem),events=elemData&&elemData.events;if(!elemData||!events){return;}
if(types&&types.type){handler=types.handler;types=types.type;}
if(!types||typeof types==="string"&&types.charAt(0)==="."){types=types||"";for(type in events){jQuery.event.remove(elem,type+types);}
return;}
types=types.split(" ");while((type=types[i++])){origType=type;handleObj=null;all=type.indexOf(".")<0;namespaces=[];if(!all){namespaces=type.split(".");type=namespaces.shift();namespace=new RegExp("(^|\\.)"+
jQuery.map(namespaces.slice(0).sort(),fcleanup).join("\\.(?:.*\\.)?")+"(\\.|$)")}
eventType=events[type];if(!eventType){continue;}
if(!handler){for(var j=0;j<eventType.length;j++){handleObj=eventType[j];if(all||namespace.test(handleObj.namespace)){jQuery.event.remove(elem,origType,handleObj.handler,j);eventType.splice(j--,1);}}
continue;}
special=jQuery.event.special[type]||{};for(var j=pos||0;j<eventType.length;j++){handleObj=eventType[j];if(handler.guid===handleObj.guid){if(all||namespace.test(handleObj.namespace)){if(pos==null){eventType.splice(j--,1);}
if(special.remove){special.remove.call(elem,handleObj);}}
if(pos!=null){break;}}}
if(eventType.length===0||pos!=null&&eventType.length===1){if(!special.teardown||special.teardown.call(elem,namespaces)===false){removeEvent(elem,type,elemData.handle);}
ret=null;delete events[type];}}
if(jQuery.isEmptyObject(events)){var handle=elemData.handle;if(handle){handle.elem=null;}
delete elemData.events;delete elemData.handle;if(jQuery.isEmptyObject(elemData)){jQuery.removeData(elem);}}},trigger:function(event,data,elem){var type=event.type||event,bubbling=arguments[3];if(!bubbling){event=typeof event==="object"?event[expando]?event:jQuery.extend(jQuery.Event(type),event):jQuery.Event(type);if(type.indexOf("!")>=0){event.type=type=type.slice(0,-1);event.exclusive=true;}
if(!elem){event.stopPropagation();if(jQuery.event.global[type]){jQuery.each(jQuery.cache,function(){if(this.events&&this.events[type]){jQuery.event.trigger(event,data,this.handle.elem);}});}}
if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
event.result=undefined;event.target=elem;data=jQuery.makeArray(data);data.unshift(event);}
event.currentTarget=elem;var handle=jQuery.data(elem,"handle");if(handle){handle.apply(elem,data);}
var parent=elem.parentNode||elem.ownerDocument;try{if(!(elem&&elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()])){if(elem["on"+type]&&elem["on"+type].apply(elem,data)===false){event.result=false;}}}catch(e){}
if(!event.isPropagationStopped()&&parent){jQuery.event.trigger(event,data,parent,true);}else if(!event.isDefaultPrevented()){var target=event.target,old,isClick=jQuery.nodeName(target,"a")&&type==="click",special=jQuery.event.special[type]||{};if((!special._default||special._default.call(elem,event)===false)&&!isClick&&!(target&&target.nodeName&&jQuery.noData[target.nodeName.toLowerCase()])){try{if(target[type]){old=target["on"+type];if(old){target["on"+type]=null;}
jQuery.event.triggered=true;target[type]();}}catch(e){}
if(old){target["on"+type]=old;}
jQuery.event.triggered=false;}}},handle:function(event){var all,handlers,namespaces,namespace,events;event=arguments[0]=jQuery.event.fix(event||window.event);event.currentTarget=this;all=event.type.indexOf(".")<0&&!event.exclusive;if(!all){namespaces=event.type.split(".");event.type=namespaces.shift();namespace=new RegExp("(^|\\.)"+namespaces.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)");}
var events=jQuery.data(this,"events"),handlers=events[event.type];if(events&&handlers){handlers=handlers.slice(0);for(var j=0,l=handlers.length;j<l;j++){var handleObj=handlers[j];if(all||namespace.test(handleObj.namespace)){event.handler=handleObj.handler;event.data=handleObj.data;event.handleObj=handleObj;var ret=handleObj.handler.apply(this,arguments);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}
if(event.isImmediatePropagationStopped()){break;}}}}
return event.result;},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(event){if(event[expando]){return event;}
var originalEvent=event;event=jQuery.Event(originalEvent);for(var i=this.props.length,prop;i;){prop=this.props[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=event.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
if(!event.relatedTarget&&event.fromElement){event.relatedTarget=event.fromElement===event.target?event.toElement:event.fromElement;}
if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode)){event.which=event.charCode||event.keyCode;}
if(!event.metaKey&&event.ctrlKey){event.metaKey=event.ctrlKey;}
if(!event.which&&event.button!==undefined){event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));}
return event;},guid:1E8,proxy:jQuery.proxy,special:{ready:{setup:jQuery.bindReady,teardown:jQuery.noop},live:{add:function(handleObj){jQuery.event.add(this,handleObj.origType,jQuery.extend({},handleObj,{handler:liveHandler}));},remove:function(handleObj){var remove=true,type=handleObj.origType.replace(rnamespaces,"");jQuery.each(jQuery.data(this,"events").live||[],function(){if(type===this.origType.replace(rnamespaces,"")){remove=false;return false;}});if(remove){jQuery.event.remove(this,handleObj.origType,liveHandler);}}},beforeunload:{setup:function(data,namespaces,eventHandle){if(this.setInterval){this.onbeforeunload=eventHandle;}
return false;},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}}};var removeEvent=document.removeEventListener?function(elem,type,handle){elem.removeEventListener(type,handle,false);}:function(elem,type,handle){elem.detachEvent("on"+type,handle);};jQuery.Event=function(src){if(!this.preventDefault){return new jQuery.Event(src);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;}else{this.type=src;}
this.timeStamp=now();this[expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}
e.returnValue=false;},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};var withinElement=function(event){var parent=event.relatedTarget;try{while(parent&&parent!==this){parent=parent.parentNode;}
if(parent!==this){event.type=event.data;jQuery.event.handle.apply(this,arguments);}}catch(e){}},delegate=function(event){event.type=event.data;jQuery.event.handle.apply(this,arguments);};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={setup:function(data){jQuery.event.add(this,fix,data&&data.selector?delegate:withinElement,orig);},teardown:function(data){jQuery.event.remove(this,fix,data&&data.selector?delegate:withinElement);}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(data,namespaces){if(this.nodeName.toLowerCase()!=="form"){jQuery.event.add(this,"click.specialSubmit",function(e){var elem=e.target,type=elem.type;if((type==="submit"||type==="image")&&jQuery(elem).closest("form").length){return trigger("submit",this,arguments);}});jQuery.event.add(this,"keypress.specialSubmit",function(e){var elem=e.target,type=elem.type;if((type==="text"||type==="password")&&jQuery(elem).closest("form").length&&e.keyCode===13){return trigger("submit",this,arguments);}});}else{return false;}},teardown:function(namespaces){jQuery.event.remove(this,".specialSubmit");}};}
if(!jQuery.support.changeBubbles){var formElems=/textarea|input|select/i,changeFilters,getVal=function(elem){var type=elem.type,val=elem.value;if(type==="radio"||type==="checkbox"){val=elem.checked;}else if(type==="select-multiple"){val=elem.selectedIndex>-1?jQuery.map(elem.options,function(elem){return elem.selected;}).join("-"):"";}else if(elem.nodeName.toLowerCase()==="select"){val=elem.selectedIndex;}
return val;},testChange=function testChange(e){var elem=e.target,data,val;if(!formElems.test(elem.nodeName)||elem.readOnly){return;}
data=jQuery.data(elem,"_change_data");val=getVal(elem);if(e.type!=="focusout"||elem.type!=="radio"){jQuery.data(elem,"_change_data",val);}
if(data===undefined||val===data){return;}
if(data!=null||val){e.type="change";return jQuery.event.trigger(e,arguments[1],elem);}};jQuery.event.special.change={filters:{focusout:testChange,click:function(e){var elem=e.target,type=elem.type;if(type==="radio"||type==="checkbox"||elem.nodeName.toLowerCase()==="select"){return testChange.call(this,e);}},keydown:function(e){var elem=e.target,type=elem.type;if((e.keyCode===13&&elem.nodeName.toLowerCase()!=="textarea")||(e.keyCode===32&&(type==="checkbox"||type==="radio"))||type==="select-multiple"){return testChange.call(this,e);}},beforeactivate:function(e){var elem=e.target;jQuery.data(elem,"_change_data",getVal(elem));}},setup:function(data,namespaces){if(this.type==="file"){return false;}
for(var type in changeFilters){jQuery.event.add(this,type+".specialChange",changeFilters[type]);}
return formElems.test(this.nodeName);},teardown:function(namespaces){jQuery.event.remove(this,".specialChange");return formElems.test(this.nodeName);}};changeFilters=jQuery.event.special.change.filters;}
function trigger(type,elem,args){args[0].type=type;return jQuery.event.handle.apply(elem,args);}
if(document.addEventListener){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){jQuery.event.special[fix]={setup:function(){this.addEventListener(orig,handler,true);},teardown:function(){this.removeEventListener(orig,handler,true);}};function handler(e){e=jQuery.event.fix(e);e.type=fix;return jQuery.event.handle.call(this,e);}});}
jQuery.each(["bind","one"],function(i,name){jQuery.fn[name]=function(type,data,fn){if(typeof type==="object"){for(var key in type){this[name](key,data,type[key],fn);}
return this;}
if(jQuery.isFunction(data)){fn=data;data=undefined;}
var handler=name==="one"?jQuery.proxy(fn,function(event){jQuery(this).unbind(event,handler);return fn.apply(this,arguments);}):fn;if(type==="unload"&&name!=="one"){this.one(type,data,fn);}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.add(this[i],type,handler,data);}}
return this;};});jQuery.fn.extend({unbind:function(type,fn){if(typeof type==="object"&&!type.preventDefault){for(var key in type){this.unbind(key,type[key]);}}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.remove(this[i],type,fn);}}
return this;},delegate:function(selector,types,data,fn){return this.live(types,data,fn,selector);},undelegate:function(selector,types,fn){if(arguments.length===0){return this.unbind("live");}else{return this.die(types,null,fn,selector);}},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){var event=jQuery.Event(type);event.preventDefault();event.stopPropagation();jQuery.event.trigger(event,data,this[0]);return event.result;}},toggle:function(fn){var args=arguments,i=1;while(i<args.length){jQuery.proxy(fn,args[i++]);}
return this.click(jQuery.proxy(fn,function(event){var lastToggle=(jQuery.data(this,"lastToggle"+fn.guid)||0)%i;jQuery.data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});var liveMap={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};jQuery.each(["live","die"],function(i,name){jQuery.fn[name]=function(types,data,fn,origSelector){var type,i=0,match,namespaces,preType,selector=origSelector||this.selector,context=origSelector?this:jQuery(this.context);if(jQuery.isFunction(data)){fn=data;data=undefined;}
types=(types||"").split(" ");while((type=types[i++])!=null){match=rnamespaces.exec(type);namespaces="";if(match){namespaces=match[0];type=type.replace(rnamespaces,"");}
if(type==="hover"){types.push("mouseenter"+namespaces,"mouseleave"+namespaces);continue;}
preType=type;if(type==="focus"||type==="blur"){types.push(liveMap[type]+namespaces);type=type+namespaces;}else{type=(liveMap[type]||type)+namespaces;}
if(name==="live"){context.each(function(){jQuery.event.add(this,liveConvert(type,selector),{data:data,selector:selector,handler:fn,origType:type,origHandler:fn,preType:preType});});}else{context.unbind(liveConvert(type,selector),fn);}}
return this;}});function liveHandler(event){var stop,elems=[],selectors=[],args=arguments,related,match,handleObj,elem,j,i,l,data,events=jQuery.data(this,"events");if(event.liveFired===this||!events||!events.live||event.button&&event.type==="click"){return;}
event.liveFired=this;var live=events.live.slice(0);for(j=0;j<live.length;j++){handleObj=live[j];if(handleObj.origType.replace(rnamespaces,"")===event.type){selectors.push(handleObj.selector);}else{live.splice(j--,1);}}
match=jQuery(event.target).closest(selectors,event.currentTarget);for(i=0,l=match.length;i<l;i++){for(j=0;j<live.length;j++){handleObj=live[j];if(match[i].selector===handleObj.selector){elem=match[i].elem;related=null;if(handleObj.preType==="mouseenter"||handleObj.preType==="mouseleave"){related=jQuery(event.relatedTarget).closest(handleObj.selector)[0];}
if(!related||related!==elem){elems.push({elem:elem,handleObj:handleObj});}}}}
for(i=0,l=elems.length;i<l;i++){match=elems[i];event.currentTarget=match.elem;event.data=match.handleObj.data;event.handleObj=match.handleObj;if(match.handleObj.origHandler.apply(match.elem,args)===false){stop=false;break;}}
return stop;}
function liveConvert(type,selector){return"live."+(type&&type!=="*"?type+".":"")+selector.replace(/\./g,"`").replace(/ /g,"&");}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error").split(" "),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};if(jQuery.attrFn){jQuery.attrFn[name]=true;}});if(window.attachEvent&&!window.addEventListener){window.attachEvent("onunload",function(){for(var id in jQuery.cache){if(jQuery.cache[id].handle){try{jQuery.event.remove(jQuery.cache[id].handle.elem);}catch(e){}}}});}
/*!
  Sizzle CSS Selector Engine - v1.0
   Copyright 2009, The Dojo Foundation
   Released under the MIT, BSD, and GPL Licenses.
   More information: http://sizzlejs.com/
 */
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];var origContext=context=context||document;if(context.nodeType!==1&&context.nodeType!==9){return[];}
if(!selector||typeof selector!=="string"){return results;}
var parts=[],m,set,checkSet,extra,prune=true,contextXML=isXML(context),soFar=selector;while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}
if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}
set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
if(!checkSet){checkSet=set;}
if(!checkSet){Sizzle.error(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[];}
for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=context.getElementsByTagName("*");}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){var filter=Expr.filter[type],found,item,left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}
if(curLoop===result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr===old){if(anyFound==null){Sizzle.error(expr);}else{break;}}
old=expr;}
return curLoop;};Sizzle.error=function(msg){throw"Syntax error, unrecognized expression: "+msg;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=part.toLowerCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[];}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){return context.getElementsByTagName(match[1]);}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(/\\/g,"");},TAG:function(match,curLoop){return match[1].toLowerCase();},CHILD:function(match){if(match[1]==="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
if(match[2]==="~="){match[4]=" "+match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return/h\d/i.test(elem.nodeName);},text:function(elem){return"text"===elem.type;},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button";},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0===i;},eq:function(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false;}}
return true;}else{Sizzle.error("Syntax error, unrecognized expression: "+name);}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case'only':case'first':while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case'last':while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;case'nth':var first=match[2],last=match[3];if(first===1&&last===0){return true;}
var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent.sizcache=doneName;}
var diff=elem.nodeIndex-last;if(first===0){return diff===0;}else{return(diff%first===0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,function(all,num){return"\\"+(num-0+1);}));}
var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i]);}}else{for(var i=0;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true;}
return a.compareDocumentPosition?-1:1;}
var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true;}
return ret;};}else if("sourceIndex"in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true;}
return a.sourceIndex?-1:1;}
var ret=a.sourceIndex-b.sourceIndex;if(ret===0){hasDuplicate=true;}
return ret;};}else if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true;}
return a.ownerDocument?-1:1;}
var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.setStart(a,0);aRange.setEnd(a,0);bRange.setStart(b,0);bRange.setEnd(b,0);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true;}
return ret;};}
function getText(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue;}else if(elem.nodeType!==8){ret+=getText(elem.childNodes);}}
return ret;}
(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();form.innerHTML="<a name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra);}catch(e){}}
return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
div=null;})();}
(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;}
div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}
Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(elem.nodeName.toLowerCase()===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
var contains=document.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16);}:function(a,b){return a!==b&&(a.contains?a.contains(b):true);};var isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
return Sizzle.filter(later,tmpSet);};jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=Sizzle.uniqueSort;jQuery.text=getText;jQuery.isXMLDoc=isXML;jQuery.contains=contains;return;window.Sizzle=Sizzle;})();var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/,rmultiselector=/,/,slice=Array.prototype.slice;var winnow=function(elements,qualifier,keep){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});};jQuery.fn.extend({find:function(selector){var ret=this.pushStack("","find",selector),length=0;for(var i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(var n=length;n<ret.length;n++){for(var r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var targets=jQuery(target);return this.filter(function(){for(var i=0,l=targets.length;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&jQuery.filter(selector,this).length>0;},closest:function(selectors,context){if(jQuery.isArray(selectors)){var ret=[],cur=this[0],match,matches={},selector;if(cur&&selectors.length){for(var i=0,l=selectors.length;i<l;i++){selector=selectors[i];if(!matches[selector]){matches[selector]=jQuery.expr.match.POS.test(selector)?jQuery(selector,context||this.context):selector;}}
while(cur&&cur.ownerDocument&&cur!==context){for(selector in matches){match=matches[selector];if(match.jquery?match.index(cur)>-1:jQuery(cur).is(match)){ret.push({selector:selector,elem:cur});delete matches[selector];}}
cur=cur.parentNode;}}
return ret;}
var pos=jQuery.expr.match.POS.test(selectors)?jQuery(selectors,context||this.context):null;return this.map(function(i,cur){while(cur&&cur.ownerDocument&&cur!==context){if(pos?pos.index(cur)>-1:jQuery(cur).is(selectors)){return cur;}
cur=cur.parentNode;}
return null;});},index:function(elem){if(!elem||typeof elem==="string"){return jQuery.inArray(this[0],elem?jQuery(elem):this.parent().children());}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context||this.context):jQuery.makeArray(selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},andSelf:function(){return this.add(this.prevObject);}});function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1?jQuery.unique(ret):ret;if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,slice.call(arguments).join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType===1&&++num===result){break;}}
return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});var rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/(<([\w:]+)[^>]*?)\/>/g,rselfClosing=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnocache=/<script|<object|<embed|<option|<style/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,fcloseTag=function(all,front,tag){return rselfClosing.test(tag)?all:front+"></"+tag+">";},wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"];}
jQuery.fn.extend({text:function(text){if(jQuery.isFunction(text)){return this.each(function(i){var self=jQuery(this);self.text(text.call(this,i,self.text()));});}
if(typeof text!=="object"&&text!==undefined){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));}
return jQuery.text(this);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild);}});},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}else if(arguments.length){var set=jQuery(arguments[0]);set.push.apply(set,this.toArray());return this.pushStack(set,"before",arguments);}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}else if(arguments.length){var set=this.pushStack(this,"after",arguments);set.push.apply(set,jQuery(arguments[0]).toArray());return set;}},remove:function(selector,keepData){for(var i=0,elem;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){for(var i=0,elem;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(events){var ret=this.map(function(){if(!jQuery.support.noCloneEvent&&!jQuery.isXMLDoc(this)){var html=this.outerHTML,ownerDocument=this.ownerDocument;if(!html){var div=ownerDocument.createElement("div");div.appendChild(this.cloneNode(true));html=div.innerHTML;}
return jQuery.clean([html.replace(rinlinejQuery,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(rleadingWhitespace,"")],ownerDocument)[0];}else{return this.cloneNode(true);}});if(events===true){cloneCopyEvent(this,ret);cloneCopyEvent(this.find("*"),ret.find("*"));}
return ret;},html:function(value){if(value===undefined){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(rinlinejQuery,""):null;}else if(typeof value==="string"&&!rnocache.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,fcloseTag);try{for(var i=0,l=this.length;i<l;i++){if(this[i].nodeType===1){jQuery.cleanData(this[i].getElementsByTagName("*"));this[i].innerHTML=value;}}}catch(e){this.empty().append(value);}}else if(jQuery.isFunction(value)){this.each(function(i){var self=jQuery(this),old=self.html();self.empty().append(function(){return value.call(this,i,old);});});}else{this.empty().append(value);}
return this;},replaceWith:function(value){if(this[0]&&this[0].parentNode){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}else{return this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value);}},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){var results,first,value=args[0],scripts=[],fragment,parent;if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){parent=value&&value.parentNode;if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent};}else{results=buildFragment(args,this,scripts);}
fragment=results.fragment;if(fragment.childNodes.length===1){first=fragment=fragment.firstChild;}else{first=fragment.firstChild;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(var i=0,l=this.length;i<l;i++){callback.call(table?root(this[i],first):this[i],i>0||results.cacheable||this.length>1?fragment.cloneNode(true):fragment);}}
if(scripts.length){jQuery.each(scripts,evalScript);}}
return this;function root(elem,cur){return jQuery.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;}}});function cloneCopyEvent(orig,ret){var i=0;ret.each(function(){if(this.nodeName!==(orig[i]&&orig[i].nodeName)){return;}
var oldData=jQuery.data(orig[i++]),curData=jQuery.data(this,oldData),events=oldData&&oldData.events;if(events){delete curData.handle;curData.events={};for(var type in events){for(var handler in events[type]){jQuery.event.add(this,type,events[type][handler],events[type][handler].data);}}}});}
function buildFragment(args,nodes,scripts){var fragment,cacheable,cacheresults,doc=(nodes&&nodes[0]?nodes[0].ownerDocument||nodes[0]:document);if(args.length===1&&typeof args[0]==="string"&&args[0].length<512&&doc===document&&!rnocache.test(args[0])&&(jQuery.support.checkClone||!rchecked.test(args[0]))){cacheable=true;cacheresults=jQuery.fragments[args[0]];if(cacheresults){if(cacheresults!==1){fragment=cacheresults;}}}
if(!fragment){fragment=doc.createDocumentFragment();jQuery.clean(args,doc,fragment,scripts);}
if(cacheable){jQuery.fragments[args[0]]=cacheresults?fragment:1;}
return{fragment:fragment,cacheable:cacheable};}
jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);return this;}else{for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery.fn[original].apply(jQuery(insert[i]),elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});jQuery.extend({clean:function(elems,context,fragment,scripts){context=context||document;if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;}
var ret=[];for(var i=0,elem;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"&&!rhtml.test(elem)){elem=context.createTextNode(elem);}else if(typeof elem==="string"){elem=elem.replace(rxhtmlTag,fcloseTag);var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div");div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;}
if(elem.nodeType){ret.push(elem);}else{ret=jQuery.merge(ret,elem);}}
if(fragment){for(var i=0;ret[i];i++){if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);}else{if(ret[i].nodeType===1){ret.splice.apply(ret,[i+1,0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))));}
fragment.appendChild(ret[i]);}}}
return ret;},cleanData:function(elems){var data,id,cache=jQuery.cache,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;for(var i=0,elem;(elem=elems[i])!=null;i++){id=elem[jQuery.expando];if(id){data=cache[id];if(data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{removeEvent(elem,type,data.handle);}}}
if(deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}}});var rexclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,ralpha=/alpha\([^)]*\)/,ropacity=/opacity=([^)]*)/,rfloat=/float/i,rdashAlpha=/-([a-z])/ig,rupper=/([A-Z])/g,rnumpx=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssWidth=["Left","Right"],cssHeight=["Top","Bottom"],getComputedStyle=document.defaultView&&document.defaultView.getComputedStyle,styleFloat=jQuery.support.cssFloat?"cssFloat":"styleFloat",fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn.css=function(name,value){return access(this,name,value,true,function(elem,name,value){if(value===undefined){return jQuery.curCSS(elem,name);}
if(typeof value==="number"&&!rexclude.test(name)){value+="px";}
jQuery.style(elem,name,value);});};jQuery.extend({style:function(elem,name,value){if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
if((name==="width"||name==="height")&&parseFloat(value)<0){value=undefined;}
var style=elem.style||elem,set=value!==undefined;if(!jQuery.support.opacity&&name==="opacity"){if(set){style.zoom=1;var opacity=parseInt(value,10)+""==="NaN"?"":"alpha(opacity="+value*100+")";var filter=style.filter||jQuery.curCSS(elem,"filter")||"";style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):opacity;}
return style.filter&&style.filter.indexOf("opacity=")>=0?(parseFloat(ropacity.exec(style.filter)[1])/100)+"":"";}
if(rfloat.test(name)){name=styleFloat;}
name=name.replace(rdashAlpha,fcamelCase);if(set){style[name]=value;}
return style[name];},css:function(elem,name,force,extra){if(name==="width"||name==="height"){var val,props=cssShow,which=name==="width"?cssWidth:cssHeight;function getWH(){val=name==="width"?elem.offsetWidth:elem.offsetHeight;if(extra==="border"){return;}
jQuery.each(which,function(){if(!extra){val-=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.curCSS(elem,"margin"+this,true))||0;}else{val-=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;}});}
if(elem.offsetWidth!==0){getWH();}else{jQuery.swap(elem,props,getWH);}
return Math.max(0,Math.round(val));}
return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret,style=elem.style,filter;if(!jQuery.support.opacity&&name==="opacity"&&elem.currentStyle){ret=ropacity.test(elem.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return ret===""?"1":ret;}
if(rfloat.test(name)){name=styleFloat;}
if(!force&&style&&style[name]){ret=style[name];}else if(getComputedStyle){if(rfloat.test(name)){name="float";}
name=name.replace(rupper,"-$1").toLowerCase();var defaultView=elem.ownerDocument.defaultView;if(!defaultView){return null;}
var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle){ret=computedStyle.getPropertyValue(name);}
if(name==="opacity"&&ret===""){ret="1";}}else if(elem.currentStyle){var camelCase=name.replace(rdashAlpha,fcamelCase);ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!rnumpx.test(ret)&&rnum.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=camelCase==="fontSize"?"1em":(ret||0);ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft;}}
return ret;},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(var name in options){elem.style[name]=old[name];}}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight,skip=elem.nodeName.toLowerCase()==="tr";return width===0&&height===0&&!skip?true:width>0&&height>0&&!skip?false:jQuery.curCSS(elem,"display")==="none";};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
var jsc=now(),rscript=/<script(.|\s)*?\/script>/gi,rselectTextarea=/select|textarea/i,rinput=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,jsre=/=\?(&|$)/,rquery=/\?/,rts=/(\?|&)_=.*?(&|$)/,rurl=/^(\w+:)?\/\/([^\/?#]+)/,r20=/%20/g,_load=jQuery.fn.load;jQuery.fn.extend({load:function(url,params,callback){if(typeof url!=="string"){return _load.call(this,url);}else if(!this.length){return this;}
var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var type="GET";if(params){if(jQuery.isFunction(params)){callback=params;params=null;}else if(typeof params==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);type="POST";}}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status==="success"||status==="notmodified"){self.html(selector?jQuery("<div />").append(res.responseText.replace(rscript,"")).find(selector):res.responseText);}
if(callback){self.each(callback,[res.responseText,status,res]);}}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=null;}
return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data={};}
return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:window.XMLHttpRequest&&(window.location.protocol!=="file:"||!window.ActiveXObject)?function(){return new window.XMLHttpRequest();}:function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(origSettings){var s=jQuery.extend(true,{},jQuery.ajaxSettings,origSettings);var jsonp,status,data,callbackContext=origSettings&&origSettings.context||s,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
if(s.dataType==="jsonp"){if(type==="GET"){if(!jsre.test(s.url)){s.url+=(rquery.test(s.url)?"&":"?")+(s.jsonp||"callback")+"=?";}}else if(!s.data||!jsre.test(s.data)){s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";}
s.dataType="json";}
if(s.dataType==="json"&&(s.data&&jsre.test(s.data)||jsre.test(s.url))){jsonp=s.jsonpCallback||("jsonp"+jsc++);if(s.data){s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");}
s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=window[jsonp]||function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}
if(head){head.removeChild(script);}};}
if(s.dataType==="script"&&s.cache===null){s.cache=false;}
if(s.cache===false&&type==="GET"){var ts=now();var ret=s.url.replace(rts,"$1_="+ts+"$2");s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}
if(s.data&&type==="GET"){s.url+=(rquery.test(s.url)?"&":"?")+s.data;}
if(s.global&&!jQuery.active++){jQuery.event.trigger("ajaxStart");}
var parts=rurl.exec(s.url),remote=parts&&(parts[1]&&parts[1]!==location.protocol||parts[2]!==location.host);if(s.dataType==="script"&&type==="GET"&&remote){var head=document.getElementsByTagName("head")[0]||document.documentElement;var script=document.createElement("script");script.src=s.url;if(s.scriptCharset){script.charset=s.scriptCharset;}
if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;success();complete();script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}}};}
head.insertBefore(script,head.firstChild);return undefined;}
var requestDone=false;var xhr=s.xhr();if(!xhr){return;}
if(s.username){xhr.open(type,s.url,s.async,s.username,s.password);}else{xhr.open(type,s.url,s.async);}
try{if(s.data||origSettings&&origSettings.contentType){xhr.setRequestHeader("Content-Type",s.contentType);}
if(s.ifModified){if(jQuery.lastModified[s.url]){xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]);}
if(jQuery.etag[s.url]){xhr.setRequestHeader("If-None-Match",jQuery.etag[s.url]);}}
if(!remote){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}
xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}
if(s.beforeSend&&s.beforeSend.call(callbackContext,xhr,s)===false){if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop");}
xhr.abort();return false;}
if(s.global){trigger("ajaxSend",[xhr,s]);}
var onreadystatechange=xhr.onreadystatechange=function(isTimeout){if(!xhr||xhr.readyState===0||isTimeout==="abort"){if(!requestDone){complete();}
requestDone=true;if(xhr){xhr.onreadystatechange=jQuery.noop;}}else if(!requestDone&&xhr&&(xhr.readyState===4||isTimeout==="timeout")){requestDone=true;xhr.onreadystatechange=jQuery.noop;status=isTimeout==="timeout"?"timeout":!jQuery.httpSuccess(xhr)?"error":s.ifModified&&jQuery.httpNotModified(xhr,s.url)?"notmodified":"success";var errMsg;if(status==="success"){try{data=jQuery.httpData(xhr,s.dataType,s);}catch(err){status="parsererror";errMsg=err;}}
if(status==="success"||status==="notmodified"){if(!jsonp){success();}}else{jQuery.handleError(s,xhr,status,errMsg);}
complete();if(isTimeout==="timeout"){xhr.abort();}
if(s.async){xhr=null;}}};try{var oldAbort=xhr.abort;xhr.abort=function(){if(xhr){oldAbort.call(xhr);}
onreadystatechange("abort");};}catch(e){}
if(s.async&&s.timeout>0){setTimeout(function(){if(xhr&&!requestDone){onreadystatechange("timeout");}},s.timeout);}
try{xhr.send(type==="POST"||type==="PUT"||type==="DELETE"?s.data:null);}catch(e){jQuery.handleError(s,xhr,null,e);complete();}
if(!s.async){onreadystatechange();}
function success(){if(s.success){s.success.call(callbackContext,data,status,xhr);}
if(s.global){trigger("ajaxSuccess",[xhr,s]);}}
function complete(){if(s.complete){s.complete.call(callbackContext,xhr,status);}
if(s.global){trigger("ajaxComplete",[xhr,s]);}
if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop");}}
function trigger(type,args){(s.context?jQuery(s.context):jQuery.event).trigger(type,args);}
return xhr;},handleError:function(s,xhr,status,e){if(s.error){s.error.call(s.context||s,xhr,status,e);}
if(s.global){(s.context?jQuery(s.context):jQuery.event).trigger("ajaxError",[xhr,s,e]);}},active:0,httpSuccess:function(xhr){try{return!xhr.status&&location.protocol==="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status===304||xhr.status===1223||xhr.status===0;}catch(e){}
return false;},httpNotModified:function(xhr,url){var lastModified=xhr.getResponseHeader("Last-Modified"),etag=xhr.getResponseHeader("Etag");if(lastModified){jQuery.lastModified[url]=lastModified;}
if(etag){jQuery.etag[url]=etag;}
return xhr.status===304||xhr.status===0;},httpData:function(xhr,type,s){var ct=xhr.getResponseHeader("content-type")||"",xml=type==="xml"||!type&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.nodeName==="parsererror"){jQuery.error("parsererror");}
if(s&&s.dataFilter){data=s.dataFilter(data,type);}
if(typeof data==="string"){if(type==="json"||!type&&ct.indexOf("json")>=0){data=jQuery.parseJSON(data);}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){jQuery.globalEval(data);}}
return data;},param:function(a,traditional){var s=[];if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||a.jquery){jQuery.each(a,function(){add(this.name,this.value);});}else{for(var prefix in a){buildParams(prefix,a[prefix]);}}
return s.join("&").replace(r20,"+");function buildParams(prefix,obj){if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||/\[\]$/.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v);}});}else if(!traditional&&obj!=null&&typeof obj==="object"){jQuery.each(obj,function(k,v){buildParams(prefix+"["+k+"]",v);});}else{add(prefix,obj);}}
function add(key,value){value=jQuery.isFunction(value)?value():value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}}});var elemdisplay={},rfxtypes=/toggle|show|hide/,rfxnum=/^([+-]=)?([\d+-.]+)(.*)$/,timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];jQuery.fn.extend({show:function(speed,callback){if(speed||speed===0){return this.animate(genFx("show",3),speed,callback);}else{for(var i=0,l=this.length;i<l;i++){var old=jQuery.data(this[i],"olddisplay");this[i].style.display=old||"";if(jQuery.css(this[i],"display")==="none"){var nodeName=this[i].nodeName,display;if(elemdisplay[nodeName]){display=elemdisplay[nodeName];}else{var elem=jQuery("<"+nodeName+" />").appendTo("body");display=elem.css("display");if(display==="none"){display="block";}
elem.remove();elemdisplay[nodeName]=display;}
jQuery.data(this[i],"olddisplay",display);}}
for(var j=0,k=this.length;j<k;j++){this[j].style.display=jQuery.data(this[j],"olddisplay")||"";}
return this;}},hide:function(speed,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,callback);}else{for(var i=0,l=this.length;i<l;i++){var old=jQuery.data(this[i],"olddisplay");if(!old&&old!=="none"){jQuery.data(this[i],"olddisplay",jQuery.css(this[i],"display"));}}
for(var j=0,k=this.length;j<k;j++){this[j].style.display="none";}
return this;}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){var bool=typeof fn==="boolean";if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments);}else if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();});}else{this.animate(genFx("toggle",3),fn,fn2);}
return this;},fadeTo:function(speed,to,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);if(jQuery.isEmptyObject(prop)){return this.each(optall.complete);}
return this[optall.queue===false?"each":"queue"](function(){var opt=jQuery.extend({},optall),p,hidden=this.nodeType===1&&jQuery(this).is(":hidden"),self=this;for(p in prop){var name=p.replace(rdashAlpha,fcamelCase);if(p!==name){prop[name]=prop[p];delete prop[p];p=name;}
if(prop[p]==="hide"&&hidden||prop[p]==="show"&&!hidden){return opt.complete.call(this);}
if((p==="height"||p==="width")&&this.style){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}
if(jQuery.isArray(prop[p])){(opt.specialEasing=opt.specialEasing||{})[p]=prop[p][1];prop[p]=prop[p][0];}}
if(opt.overflow!=null){this.style.overflow="hidden";}
opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(rfxtypes.test(val)){e[val==="toggle"?hidden?"show":"hide":val](prop);}else{var parts=rfxnum.exec(val),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!=="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1]){end=((parts[1]==="-="?-1:1)*end)+start;}
e.custom(start,end,unit);}else{e.custom(start,val,"");}}});return true;});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue){this.queue([]);}
this.each(function(){for(var i=timers.length-1;i>=0;i--){if(timers[i].elem===this){if(gotoEnd){timers[i](true);}
timers.splice(i,1);}}});if(!gotoEnd){this.dequeue();}
return this;}});jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(name,props){jQuery.fn[name]=function(speed,callback){return this.animate(props,speed,callback);};});jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&typeof speed==="object"?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:jQuery.fx.speeds[opt.duration]||jQuery.fx.speeds._default;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false){jQuery(this).dequeue();}
if(jQuery.isFunction(opt.old)){opt.old.call(this);}};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig){options.orig={};}}});jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this);}
(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block";}},cur:function(force){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;var self=this;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(jQuery.fx.tick,13);}},show:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=now(),done=true;if(gotoEnd||t>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var i in this.options.curAnim){if(this.options.curAnim[i]!==true){done=false;}}
if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;var old=jQuery.data(this.elem,"olddisplay");this.elem.style.display=old?old:this.options.display;if(jQuery.css(this.elem,"display")==="none"){this.elem.style.display="block";}}
if(this.options.hide){jQuery(this.elem).hide();}
if(this.options.hide||this.options.show){for(var p in this.options.curAnim){jQuery.style(this.elem,p,this.options.orig[p]);}}
this.options.complete.call(this.elem);}
return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;var specialEasing=this.options.specialEasing&&this.options.specialEasing[this.prop];var defaultEasing=this.options.easing||(jQuery.easing.swing?"swing":"linear");this.pos=jQuery.easing[specialEasing||defaultEasing](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.extend(jQuery.fx,{tick:function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++){if(!timers[i]()){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}},stop:function(){clearInterval(timerId);timerId=null;},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.style(fx.elem,"opacity",fx.now);},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=(fx.prop==="width"||fx.prop==="height"?Math.max(0,fx.now):fx.now)+fx.unit;}else{fx.elem[fx.prop]=fx.now;}}}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;}
if("getBoundingClientRect"in document.documentElement){jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
var box=elem.getBoundingClientRect(),doc=elem.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(self.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft)-clientLeft;return{top:top,left:left};};}else{jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
jQuery.offset.initialize();var offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){break;}
computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;top-=elem.scrollTop;left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop;left+=elem.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevOffsetParent=offsetParent,offsetParent=elem.offsetParent;}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;left+=body.offsetLeft;}
if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);left+=Math.max(docElem.scrollLeft,body.scrollLeft);}
return{top:top,left:left};};}
jQuery.offset={initialize:function(){var body=document.body,container=document.createElement("div"),innerDiv,checkDiv,table,td,bodyMarginTop=parseFloat(jQuery.curCSS(body,"marginTop",true))||0,html="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";jQuery.extend(container.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});container.innerHTML=html;body.insertBefore(container,body.firstChild);innerDiv=container.firstChild;checkDiv=innerDiv.firstChild;td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);checkDiv.style.position="fixed",checkDiv.style.top="20px";this.supportsFixedPosition=(checkDiv.offsetTop===20||checkDiv.offsetTop===15);checkDiv.style.position=checkDiv.style.top="";innerDiv.style.overflow="hidden",innerDiv.style.position="relative";this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==bodyMarginTop);body.removeChild(container);body=container=innerDiv=checkDiv=table=td=null;jQuery.offset.initialize=jQuery.noop;},bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;jQuery.offset.initialize();if(jQuery.offset.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.curCSS(body,"marginTop",true))||0;left+=parseFloat(jQuery.curCSS(body,"marginLeft",true))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){if(/static/.test(jQuery.curCSS(elem,"position"))){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curTop=parseInt(jQuery.curCSS(elem,"top",true),10)||0,curLeft=parseInt(jQuery.curCSS(elem,"left",true),10)||0;if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
var props={top:(options.top-curOffset.top)+curTop,left:(options.left-curOffset.left)+curLeft};if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return null;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.curCSS(elem,"marginTop",true))||0;offset.left-=parseFloat(jQuery.curCSS(elem,"marginLeft",true))||0;parentOffset.top+=parseFloat(jQuery.curCSS(offsetParent[0],"borderTopWidth",true))||0;parentOffset.left+=parseFloat(jQuery.curCSS(offsetParent[0],"borderLeftWidth",true))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!/^body|html$/i.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent;});}});jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;jQuery.fn[method]=function(val){var elem=this[0],win;if(!elem){return null;}
if(val!==undefined){return this.each(function(){win=getWindow(this);if(win){win.scrollTo(!i?val:jQuery(win).scrollLeft(),i?val:jQuery(win).scrollTop());}else{this[method]=val;}});}else{win=getWindow(elem);return win?("pageXOffset"in win)?win[i?"pageYOffset":"pageXOffset"]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method];}};});function getWindow(elem){return("scrollTo"in elem&&elem.document)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn["inner"+name]=function(){return this[0]?jQuery.css(this[0],type,false,"padding"):null;};jQuery.fn["outer"+name]=function(margin){return this[0]?jQuery.css(this[0],type,false,margin?"margin":"border"):null;};jQuery.fn[type]=function(size){var elem=this[0];if(!elem){return size==null?null:this;}
if(jQuery.isFunction(size)){return this.each(function(i){var self=jQuery(this);self[type](size.call(this,i,self[type]()));});}
return("scrollTo"in elem&&elem.document)?elem.document.compatMode==="CSS1Compat"&&elem.document.documentElement["client"+name]||elem.document.body["client"+name]:(elem.nodeType===9)?Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name]):size===undefined?jQuery.css(elem,type):this.css(type,typeof size==="string"?size:size+"px");};});window.jQuery=window.$=jQuery;})(window);
/*!
  jQuery JSON Plugin
  version: 2.1 (2009-08-14)
 
  This document is licensed as free software under the terms of the
  MIT License: http://www.opensource.org/licenses/mit-license.php
 
  Brantley Harris wrote this plugin. It is based somewhat on the JSON.org 
  website's http://www.json.org/json2.js, which proclaims:
  "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
  I uphold.
 
  It is also influenced heavily by MochiKit's serializeJSON, which is 
  copyrighted 2005 by Bob Ippolito.
 */
(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);if(typeof dojo!=='undefined')
{dojo.provide('org.cometd');}
else
{this.org=this.org||{};org.cometd={};}
org.cometd.JSON={};org.cometd.JSON.toJSON=org.cometd.JSON.fromJSON=function(object)
{throw'Abstract';};org.cometd.Utils={};org.cometd.Utils.isString=function(value)
{if(value===undefined||value===null)
{return false;}
return typeof value==='string'||value instanceof String;};org.cometd.Utils.isArray=function(value)
{if(value===undefined||value===null)
{return false;}
return value instanceof Array;};org.cometd.Utils.inArray=function(element,array)
{for(var i=0;i<array.length;++i)
{if(element==array[i])
{return i;}}
return-1;};org.cometd.Utils.setTimeout=function(cometd,funktion,delay)
{return setTimeout(function()
{try
{funktion();}
catch(x)
{cometd._debug('Exception invoking timed function',funktion,x);}},delay);};org.cometd.TransportRegistry=function()
{var _types=[];var _transports={};this.getTransportTypes=function()
{return _types.slice(0);};this.findTransportTypes=function(version,crossDomain,url)
{var result=[];for(var i=0;i<_types.length;++i)
{var type=_types[i];if(_transports[type].accept(version,crossDomain,url)===true)
{result.push(type);}}
return result;};this.negotiateTransport=function(types,version,crossDomain,url)
{for(var i=0;i<_types.length;++i)
{var type=_types[i];for(var j=0;j<types.length;++j)
{if(type==types[j])
{var transport=_transports[type];if(transport.accept(version,crossDomain,url)===true)
{return transport;}}}}
return null;};this.add=function(type,transport,index)
{var existing=false;for(var i=0;i<_types.length;++i)
{if(_types[i]==type)
{existing=true;break;}}
if(!existing)
{if(typeof index!=='number')
{_types.push(type);}
else
{_types.splice(index,0,type);}
_transports[type]=transport;}
return!existing;};this.find=function(type)
{for(var i=0;i<_types.length;++i)
{if(_types[i]==type)
{return _transports[type];}}
return null;};this.remove=function(type)
{for(var i=0;i<_types.length;++i)
{if(_types[i]==type)
{_types.splice(i,1);var transport=_transports[type];delete _transports[type];return transport;}}
return null;};this.reset=function()
{for(var i=0;i<_types.length;++i)
{_transports[_types[i]].reset();}};};org.cometd.Transport=function()
{var _type;var _cometd;this.registered=function(type,cometd)
{_type=type;_cometd=cometd;};this.unregistered=function()
{_type=null;_cometd=null;};this._debug=function()
{_cometd._debug.apply(_cometd,arguments);};this._mixin=function()
{return _cometd._mixin.apply(_cometd,arguments);};this.getConfiguration=function()
{return _cometd.getConfiguration();};this.getAdvice=function()
{return _cometd.getAdvice();};this.setTimeout=function(funktion,delay)
{return org.cometd.Utils.setTimeout(_cometd,funktion,delay);};this.convertToMessages=function(response)
{if(org.cometd.Utils.isString(response))
{try
{return org.cometd.JSON.fromJSON(response);}
catch(x)
{this._debug('Could not convert to JSON the following string','"'+response+'"');throw x;}}
if(org.cometd.Utils.isArray(response))
{return response;}
if(response===undefined||response===null)
{return[];}
if(response instanceof Object)
{return[response];}
throw'Conversion Error '+response+', typeof '+(typeof response);};this.accept=function(version,crossDomain,url)
{throw'Abstract';};this.getType=function()
{return _type;};this.send=function(envelope,metaConnect)
{throw'Abstract';};this.reset=function()
{this._debug('Transport',_type,'reset');};this.abort=function()
{this._debug('Transport',_type,'aborted');};this.toString=function()
{return this.getType();};};org.cometd.Transport.derive=function(baseObject)
{function F(){}
F.prototype=baseObject;return new F();};org.cometd.RequestTransport=function()
{var _super=new org.cometd.Transport();var _self=org.cometd.Transport.derive(_super);var _requestIds=0;var _metaConnectRequest=null;var _requests=[];var _envelopes=[];function _coalesceEnvelopes(envelope)
{while(_envelopes.length>0)
{var envelopeAndRequest=_envelopes[0];var newEnvelope=envelopeAndRequest[0];var newRequest=envelopeAndRequest[1];if(newEnvelope.url===envelope.url&&newEnvelope.sync===envelope.sync)
{_envelopes.shift();envelope.messages=envelope.messages.concat(newEnvelope.messages);this._debug('Coalesced',newEnvelope.messages.length,'messages from request',newRequest.id);continue;}
break;}}
function _transportSend(envelope,request)
{this.transportSend(envelope,request);request.expired=false;if(!envelope.sync)
{var maxDelay=this.getConfiguration().maxNetworkDelay;var delay=maxDelay;if(request.metaConnect===true)
{delay+=this.getAdvice().timeout;}
this._debug('Transport',this.getType(),'waiting at most',delay,'ms for the response, maxNetworkDelay',maxDelay);var self=this;request.timeout=this.setTimeout(function()
{request.expired=true;if(request.xhr)
{request.xhr.abort();}
var errorMessage='Request '+request.id+' of transport '+self.getType()+' exceeded '+delay+' ms max network delay';self._debug(errorMessage);self.complete(request,false,request.metaConnect);envelope.onFailure(request.xhr,envelope.messages,'timeout',errorMessage);},delay);}}
function _queueSend(envelope)
{var requestId=++_requestIds;var request={id:requestId,metaConnect:false};if(_requests.length<this.getConfiguration().maxConnections-1)
{_requests.push(request);_transportSend.call(this,envelope,request);}
else
{this._debug('Transport',this.getType(),'queueing request',requestId,'envelope',envelope);_envelopes.push([envelope,request]);}}
function _metaConnectComplete(request)
{var requestId=request.id;this._debug('Transport',this.getType(),'metaConnect complete, request',requestId);if(_metaConnectRequest!==null&&_metaConnectRequest.id!==requestId)
{throw'Longpoll request mismatch, completing request '+requestId;}
_metaConnectRequest=null;}
function _complete(request,success)
{var index=org.cometd.Utils.inArray(request,_requests);if(index>=0)
{_requests.splice(index,1);}
if(_envelopes.length>0)
{var envelopeAndRequest=_envelopes.shift();var nextEnvelope=envelopeAndRequest[0];var nextRequest=envelopeAndRequest[1];this._debug('Transport dequeued request',nextRequest.id);if(success)
{if(this.getConfiguration().autoBatch)
{_coalesceEnvelopes.call(this,nextEnvelope);}
_queueSend.call(this,nextEnvelope);this._debug('Transport completed request',request.id,nextEnvelope);}
else
{var self=this;this.setTimeout(function()
{self.complete(nextRequest,false,nextRequest.metaConnect);nextEnvelope.onFailure(nextRequest.xhr,nextEnvelope.messages,'error','Previous request failed');},0);}}}
_self.complete=function(request,success,metaConnect)
{if(metaConnect)
{_metaConnectComplete.call(this,request);}
else
{_complete.call(this,request,success);}};_self.transportSend=function(envelope,request)
{throw'Abstract';};_self.transportSuccess=function(envelope,request,responses)
{if(!request.expired)
{clearTimeout(request.timeout);this.complete(request,true,request.metaConnect);if(responses&&responses.length>0)
{envelope.onSuccess(responses);}
else
{envelope.onFailure(request.xhr,envelope.messages,'Empty HTTP response');}}};_self.transportFailure=function(envelope,request,reason,exception)
{if(!request.expired)
{clearTimeout(request.timeout);this.complete(request,false,request.metaConnect);envelope.onFailure(request.xhr,envelope.messages,reason,exception);}};function _metaConnectSend(envelope)
{if(_metaConnectRequest!==null)
{throw'Concurrent metaConnect requests not allowed, request id='+_metaConnectRequest.id+' not yet completed';}
var requestId=++_requestIds;this._debug('Transport',this.getType(),'metaConnect send, request',requestId,'envelope',envelope);var request={id:requestId,metaConnect:true};_transportSend.call(this,envelope,request);_metaConnectRequest=request;}
_self.send=function(envelope,metaConnect)
{if(metaConnect)
{_metaConnectSend.call(this,envelope);}
else
{_queueSend.call(this,envelope);}};_self.abort=function()
{_super.abort();for(var i=0;i<_requests.length;++i)
{var request=_requests[i];this._debug('Aborting request',request);if(request.xhr)
{request.xhr.abort();}}
if(_metaConnectRequest)
{this._debug('Aborting metaConnect request',_metaConnectRequest);if(_metaConnectRequest.xhr)
{_metaConnectRequest.xhr.abort();}}
this.reset();};_self.reset=function()
{_super.reset();_metaConnectRequest=null;_requests=[];_envelopes=[];};return _self;};org.cometd.LongPollingTransport=function()
{var _super=new org.cometd.RequestTransport();var _self=org.cometd.Transport.derive(_super);var _supportsCrossDomain=true;_self.accept=function(version,crossDomain,url)
{return _supportsCrossDomain||!crossDomain;};_self.xhrSend=function(packet)
{throw'Abstract';};_self.transportSend=function(envelope,request)
{this._debug('Transport',this.getType(),'sending request',request.id,'envelope',envelope);var self=this;try
{var sameStack=true;request.xhr=this.xhrSend({transport:this,url:envelope.url,sync:envelope.sync,headers:this.getConfiguration().requestHeaders,body:org.cometd.JSON.toJSON(envelope.messages),onSuccess:function(response)
{self._debug('Transport',self.getType(),'received response',response);var success=false;try
{var received=self.convertToMessages(response);if(received.length===0)
{_supportsCrossDomain=false;self.transportFailure(envelope,request,'no response',null);}
else
{success=true;self.transportSuccess(envelope,request,received);}}
catch(x)
{self._debug(x);if(!success)
{_supportsCrossDomain=false;self.transportFailure(envelope,request,'bad response',x);}}},onError:function(reason,exception)
{_supportsCrossDomain=false;if(sameStack)
{self.setTimeout(function()
{self.transportFailure(envelope,request,reason,exception);},0);}
else
{self.transportFailure(envelope,request,reason,exception);}}});sameStack=false;}
catch(x)
{_supportsCrossDomain=false;this.setTimeout(function()
{self.transportFailure(envelope,request,'error',x);},0);}};_self.reset=function()
{_super.reset();_supportsCrossDomain=true;};return _self;};org.cometd.CallbackPollingTransport=function()
{var _super=new org.cometd.RequestTransport();var _self=org.cometd.Transport.derive(_super);var _maxLength=2000;_self.accept=function(version,crossDomain,url)
{return true;};_self.jsonpSend=function(packet)
{throw'Abstract';};_self.transportSend=function(envelope,request)
{var self=this;var start=0;var length=envelope.messages.length;var lengths=[];while(length>0)
{var json=org.cometd.JSON.toJSON(envelope.messages.slice(start,start+length));var urlLength=envelope.url.length+encodeURI(json).length;if(urlLength>_maxLength)
{if(length==1)
{var x='Bayeux message too big ('+urlLength+' bytes, max is '+_maxLength+') '+'for transport '+this.getType();this.setTimeout(function()
{self.transportFailure(envelope,request,'error',x);},0);return;}
--length;continue;}
lengths.push(length);start+=length;length=envelope.messages.length-start;}
var envelopeToSend=envelope;if(lengths.length>1)
{var begin=0;var end=lengths[0];this._debug('Transport',this.getType(),'split',envelope.messages.length,'messages into',lengths.join(' + '));envelopeToSend=this._mixin(false,{},envelope);envelopeToSend.messages=envelope.messages.slice(begin,end);envelopeToSend.onSuccess=envelope.onSuccess;envelopeToSend.onFailure=envelope.onFailure;for(var i=1;i<lengths.length;++i)
{var nextEnvelope=this._mixin(false,{},envelope);begin=end;end+=lengths[i];nextEnvelope.messages=envelope.messages.slice(begin,end);nextEnvelope.onSuccess=envelope.onSuccess;nextEnvelope.onFailure=envelope.onFailure;this.send(nextEnvelope,request.metaConnect);}}
this._debug('Transport',this.getType(),'sending request',request.id,'envelope',envelopeToSend);try
{var sameStack=true;this.jsonpSend({transport:this,url:envelopeToSend.url,sync:envelopeToSend.sync,headers:this.getConfiguration().requestHeaders,body:org.cometd.JSON.toJSON(envelopeToSend.messages),onSuccess:function(responses)
{var success=false;try
{var received=self.convertToMessages(responses);if(received.length===0)
{self.transportFailure(envelopeToSend,request,'no response');}
else
{success=true;self.transportSuccess(envelopeToSend,request,received);}}
catch(x)
{self._debug(x);if(!success)
{self.transportFailure(envelopeToSend,request,'bad response',x);}}},onError:function(reason,exception)
{if(sameStack)
{self.setTimeout(function()
{self.transportFailure(envelopeToSend,request,reason,exception);},0);}
else
{self.transportFailure(envelopeToSend,request,reason,exception);}}});sameStack=false;}
catch(xx)
{this.setTimeout(function()
{self.transportFailure(envelopeToSend,request,'error',xx);},0);}};return _self;};org.cometd.WebSocketTransport=function()
{var OPENED=1;var CLOSED=2;var _super=new org.cometd.Transport();var _self=org.cometd.Transport.derive(_super);var _cometd;var _supportsWebSocket=true;var _webSocketSupported=false;var _state=CLOSED;var _timeouts={};var _envelopes={};var _webSocket;var _successCallback;_self.registered=function(type,cometd)
{_super.registered(type,cometd);_cometd=cometd;};_self.accept=function(version,crossDomain,url)
{return _supportsWebSocket&&!!window.WebSocket&&_cometd.websocketEnabled===true;};function _websocketSend(envelope,metaConnect)
{try
{var json=org.cometd.JSON.toJSON(envelope.messages);_webSocket.send(json);this._debug('Transport',this.getType(),'sent',envelope,'metaConnect =',metaConnect);var maxDelay=this.getConfiguration().maxNetworkDelay;var delay=maxDelay;if(metaConnect)
{delay+=this.getAdvice().timeout;}
var messageIds=[];for(var i=0;i<envelope.messages.length;++i)
{var message=envelope.messages[i];if(message.id)
{messageIds.push(message.id);var self=this;_timeouts[message.id]=this.setTimeout(function()
{var errorMessage='Message '+message.id+' of transport '+self.getType()+' exceeded '+delay+' ms max network delay';self._debug(errorMessage);delete _timeouts[message.id];for(var ids in _envelopes)
{if(_envelopes[ids]===envelope)
{delete _envelopes[ids];break;}}
envelope.onFailure(_webSocket,envelope.messages,'timeout',errorMessage);},delay);}}
this._debug('Transport',this.getType(),'waiting at most',delay,' ms for messages',messageIds,'maxNetworkDelay',maxDelay,', timeouts:',_timeouts);}
catch(x)
{this.setTimeout(function()
{envelope.onFailure(_webSocket,envelope.messages,'error',x);},0);}}
_self.onMessage=function(wsMessage)
{this._debug('Transport',this.getType(),'received websocket message',wsMessage);if(_state===OPENED)
{var messages=this.convertToMessages(wsMessage.data);var messageIds=[];for(var i=0;i<messages.length;++i)
{var message=messages[i];if(/^\/meta\//.test(message.channel)||message.data===undefined)
{if(message.id)
{messageIds.push(message.id);var timeout=_timeouts[message.id];if(timeout)
{clearTimeout(timeout);delete _timeouts[message.id];this._debug('Transport',this.getType(),'removed timeout for message',message.id,', timeouts',_timeouts);}}}
if('/meta/disconnect'===message.channel&&message.successful)
{_webSocket.close();}}
var removed=false;for(var j=0;j<messageIds.length;++j)
{var id=messageIds[j];for(var key in _envelopes)
{var ids=key.split(',');var index=org.cometd.Utils.inArray(id,ids);if(index>=0)
{removed=true;ids.splice(index,1);var envelope=_envelopes[key];delete _envelopes[key];if(ids.length>0)
{_envelopes[ids.join(',')]=envelope;}
break;}}}
if(removed)
{this._debug('Transport',this.getType(),'removed envelope, envelopes',_envelopes);}
_successCallback.call(this,messages);}};_self.onClose=function()
{this._debug('Transport',this.getType(),'closed',_webSocket);_supportsWebSocket=_webSocketSupported;for(var id in _timeouts)
{clearTimeout(_timeouts[id]);delete _timeouts[id];}
for(var ids in _envelopes)
{_envelopes[ids].onFailure(_webSocket,_envelopes[ids].messages,'closed');delete _envelopes[ids];}
_state=CLOSED;};_self.send=function(envelope,metaConnect)
{this._debug('Transport',this.getType(),'sending',envelope,'metaConnect =',metaConnect);var messageIds=[];for(var i=0;i<envelope.messages.length;++i)
{var message=envelope.messages[i];if(message.id)
{messageIds.push(message.id);}}
_envelopes[messageIds.join(',')]=envelope;this._debug('Transport',this.getType(),'stored envelope, envelopes',_envelopes);if(_state===OPENED)
{_websocketSend.call(this,envelope,metaConnect);}
else
{var url=envelope.url.replace(/^http/,'ws');this._debug('Transport',this.getType(),'connecting to URL',url);_webSocket=new window.WebSocket(url);var self=this;_webSocket.onopen=function()
{self._debug('WebSocket opened',_webSocket);_webSocketSupported=true;_state=OPENED;_successCallback=envelope.onSuccess;_websocketSend.call(self,envelope,metaConnect);};_webSocket.onclose=function()
{self.onClose();};_webSocket.onmessage=function(message)
{self.onMessage(message);};}};_self.reset=function()
{_super.reset();if(_webSocket)
{_webSocket.close();}
_supportsWebSocket=true;_webSocketSupported=false;_state=CLOSED;_timeouts={};_envelopes={};_webSocket=null;_successCallback=null;};return _self;};org.cometd.Cometd=function(name)
{var _cometd=this;var _name=name||'default';var _crossDomain=false;var _transports=new org.cometd.TransportRegistry();var _transport;var _status='disconnected';var _messageId=0;var _clientId=null;var _batch=0;var _messageQueue=[];var _internalBatch=false;var _listeners={};var _backoff=0;var _scheduledSend=null;var _extensions=[];var _advice={};var _handshakeProps;var _reestablish=false;var _connected=false;var _config={maxConnections:2,backoffIncrement:1000,maxBackoff:60000,logLevel:'info',reverseIncomingExtensions:true,maxNetworkDelay:10000,requestHeaders:{},appendMessageTypeToURL:true,autoBatch:false,advice:{timeout:60000,interval:0,reconnect:'retry'}};function _mixin(deep,target,objects)
{var result=target||{};for(var i=2;i<arguments.length;++i)
{var object=arguments[i];if(object===undefined||object===null)
{continue;}
for(var propName in object)
{var prop=object[propName];if(prop===target)
{continue;}
if(prop===undefined)
{continue;}
if(deep&&typeof prop==='object'&&prop!==null)
{if(prop instanceof Array)
{result[propName]=_mixin(deep,[],prop);}
else
{result[propName]=_mixin(deep,{},prop);}}
else
{result[propName]=prop;}}}
return result;}
this._mixin=_mixin;function _isString(value)
{return org.cometd.Utils.isString(value);}
function _isFunction(value)
{if(value===undefined||value===null)
{return false;}
return typeof value==='function';}
function _log(level,args)
{if(window.console)
{var logger=window.console[level];if(_isFunction(logger))
{logger.apply(window.console,args);}}}
function _warn()
{_log('warn',arguments);}
this._warn=_warn;function _info()
{if(_config.logLevel!='warn')
{_log('info',arguments);}}
this._info=_info;function _debug()
{if(_config.logLevel=='debug')
{_log('debug',arguments);}}
this._debug=_debug;function _configure(configuration)
{_debug('Configuring cometd object with',configuration);if(_isString(configuration))
{configuration={url:configuration};}
if(!configuration)
{configuration={};}
_config=_mixin(false,_config,configuration);if(!_config.url)
{throw'Missing required configuration parameter \'url\' specifying the Bayeux server URL';}
var urlParts=/(^https?:)?(\/\/(([^:\/\?#]+)(:(\d+))?))?([^\?#]*)(.*)?/.exec(_config.url);_crossDomain=urlParts[3]&&urlParts[3]!=window.location.host;if(_config.appendMessageTypeToURL)
{if(urlParts[8]!==undefined&&urlParts[8].length>0)
{_info('Appending message type to URI '+urlParts[7]+urlParts[8]+' is not supported, disabling \'appendMessageTypeToURL\' configuration');_config.appendMessageTypeToURL=false;}
else
{var uriSegments=urlParts[7].split('/');var lastSegmentIndex=uriSegments.length-1;if(urlParts[7].match(/\/$/))
{lastSegmentIndex-=1;}
if(uriSegments[lastSegmentIndex].indexOf('.')>=0)
{_info('Appending message type to URI '+urlParts[7]+' is not supported, disabling \'appendMessageTypeToURL\' configuration');_config.appendMessageTypeToURL=false;}}}}
function _clearSubscriptions()
{for(var channel in _listeners)
{var subscriptions=_listeners[channel];for(var i=0;i<subscriptions.length;++i)
{var subscription=subscriptions[i];if(subscription&&!subscription.listener)
{delete subscriptions[i];_debug('Removed subscription',subscription,'for channel',channel);}}}}
function _setStatus(newStatus)
{if(_status!=newStatus)
{_debug('Status',_status,'->',newStatus);_status=newStatus;}}
function _isDisconnected()
{return _status=='disconnecting'||_status=='disconnected';}
function _nextMessageId()
{return++_messageId;}
function _applyExtension(scope,callback,name,message,outgoing)
{try
{return callback.call(scope,message);}
catch(x)
{_debug('Exception during execution of extension',name,x);var exceptionCallback=_cometd.onExtensionException;if(_isFunction(exceptionCallback))
{_debug('Invoking extension exception callback',name,x);try
{exceptionCallback.call(_cometd,x,name,outgoing,message);}
catch(xx)
{_info('Exception during execution of exception callback in extension',name,xx);}}
return message;}}
function _applyIncomingExtensions(message)
{for(var i=0;i<_extensions.length;++i)
{if(message===undefined||message===null)
{break;}
var index=_config.reverseIncomingExtensions?_extensions.length-1-i:i;var extension=_extensions[index];var callback=extension.extension.incoming;if(_isFunction(callback))
{var result=_applyExtension(extension.extension,callback,extension.name,message,false);message=result===undefined?message:result;}}
return message;}
function _applyOutgoingExtensions(message)
{for(var i=0;i<_extensions.length;++i)
{if(message===undefined||message===null)
{break;}
var extension=_extensions[i];var callback=extension.extension.outgoing;if(_isFunction(callback))
{var result=_applyExtension(extension.extension,callback,extension.name,message,true);message=result===undefined?message:result;}}
return message;}
function _notify(channel,message)
{var subscriptions=_listeners[channel];if(subscriptions&&subscriptions.length>0)
{for(var i=0;i<subscriptions.length;++i)
{var subscription=subscriptions[i];if(subscription)
{try
{subscription.callback.call(subscription.scope,message);}
catch(x)
{_debug('Exception during notification',subscription,message,x);var listenerCallback=_cometd.onListenerException;if(_isFunction(listenerCallback))
{_debug('Invoking listener exception callback',subscription,x);try
{listenerCallback.call(_cometd,x,subscription.handle,subscription.listener,message);}
catch(xx)
{_info('Exception during execution of listener callback',subscription,xx);}}}}}}}
function _notifyListeners(channel,message)
{_notify(channel,message);var channelParts=channel.split('/');var last=channelParts.length-1;for(var i=last;i>0;--i)
{var channelPart=channelParts.slice(0,i).join('/')+'/*';if(i==last)
{_notify(channelPart,message);}
channelPart+='*';_notify(channelPart,message);}}
function _cancelDelayedSend()
{if(_scheduledSend!==null)
{clearTimeout(_scheduledSend);}
_scheduledSend=null;}
function _delayedSend(operation)
{_cancelDelayedSend();var delay=_advice.interval+_backoff;_debug('Function scheduled in',delay,'ms, interval =',_advice.interval,'backoff =',_backoff,operation);_scheduledSend=org.cometd.Utils.setTimeout(_cometd,operation,delay);}
var _handleMessages;var _handleFailure;function _send(sync,messages,longpoll,extraPath)
{for(var i=0;i<messages.length;++i)
{var message=messages[i];message.id=''+_nextMessageId();if(_clientId)
{message.clientId=_clientId;}
message=_applyOutgoingExtensions(message);if(message!==undefined&&message!==null)
{messages[i]=message;}
else
{messages.splice(i--,1);}}
if(messages.length===0)
{return;}
var url=_config.url;if(_config.appendMessageTypeToURL)
{if(!url.match(/\/$/))
{url=url+'/';}
if(extraPath)
{url=url+extraPath;}}
var envelope={url:url,sync:sync,messages:messages,onSuccess:function(rcvdMessages)
{try
{_handleMessages.call(_cometd,rcvdMessages);}
catch(x)
{_debug('Exception during handling of messages',x);}},onFailure:function(conduit,messages,reason,exception)
{try
{_handleFailure.call(_cometd,conduit,messages,reason,exception);}
catch(x)
{_debug('Exception during handling of failure',x);}}};_debug('Send',envelope);_transport.send(envelope,longpoll);}
function _queueSend(message)
{if(_batch>0||_internalBatch===true)
{_messageQueue.push(message);}
else
{_send(false,[message],false);}}
this.send=_queueSend;function _resetBackoff()
{_backoff=0;}
function _increaseBackoff()
{if(_backoff<_config.maxBackoff)
{_backoff+=_config.backoffIncrement;}}
function _startBatch()
{++_batch;}
function _flushBatch()
{var messages=_messageQueue;_messageQueue=[];if(messages.length>0)
{_send(false,messages,false);}}
function _endBatch()
{--_batch;if(_batch<0)
{throw'Calls to startBatch() and endBatch() are not paired';}
if(_batch===0&&!_isDisconnected()&&!_internalBatch)
{_flushBatch();}}
function _connect()
{if(!_isDisconnected())
{var message={channel:'/meta/connect',connectionType:_transport.getType()};if(!_connected)
{message.advice={timeout:0};}
_setStatus('connecting');_debug('Connect sent',message);_send(false,[message],true,'connect');_setStatus('connected');}}
function _delayedConnect()
{_setStatus('connecting');_delayedSend(function()
{_connect();});}
function _updateAdvice(newAdvice)
{if(newAdvice)
{_advice=_mixin(false,{},_config.advice,newAdvice);_debug('New advice',_advice);}}
function _disconnect(abort)
{_cancelDelayedSend();if(abort)
{_transport.abort();}
_clientId=null;_setStatus('disconnected');_batch=0;_resetBackoff();if(_messageQueue.length>0)
{_handleFailure.call(_cometd,undefined,_messageQueue,'error','Disconnected');_messageQueue=[];}}
function _handshake(handshakeProps)
{_clientId=null;_clearSubscriptions();if(_isDisconnected())
{_transports.reset();_updateAdvice(_config.advice);}
else
{_updateAdvice(_mixin(false,_advice,{reconnect:'retry'}));}
_batch=0;_internalBatch=true;_handshakeProps=handshakeProps;var version='1.0';var transportTypes=_transports.findTransportTypes(version,_crossDomain,_config.url);var bayeuxMessage={version:version,minimumVersion:'0.9',channel:'/meta/handshake',supportedConnectionTypes:transportTypes,advice:{timeout:_advice.timeout,interval:_advice.interval}};var message=_mixin(false,{},_handshakeProps,bayeuxMessage);_transport=_transports.negotiateTransport(transportTypes,version,_crossDomain,_config.url);_debug('Initial transport is',_transport.getType());_setStatus('handshaking');_debug('Handshake sent',message);_send(false,[message],false,'handshake');}
function _delayedHandshake()
{_setStatus('handshaking');_internalBatch=true;_delayedSend(function()
{_handshake(_handshakeProps);});}
function _failHandshake(message)
{_notifyListeners('/meta/handshake',message);_notifyListeners('/meta/unsuccessful',message);var retry=!_isDisconnected()&&_advice.reconnect!='none';if(retry)
{_increaseBackoff();_delayedHandshake();}
else
{_disconnect(false);}}
function _handshakeResponse(message)
{if(message.successful)
{_clientId=message.clientId;var newTransport=_transports.negotiateTransport(message.supportedConnectionTypes,message.version,_crossDomain,_config.url);if(newTransport===null)
{throw'Could not negotiate transport with server; client '+
_transports.findTransportTypes(message.version,_crossDomain,_config.url)+', server '+message.supportedConnectionTypes;}
else if(_transport!=newTransport)
{_debug('Transport',_transport,'->',newTransport);_transport=newTransport;}
_internalBatch=false;_flushBatch();message.reestablish=_reestablish;_reestablish=true;_notifyListeners('/meta/handshake',message);var action=_isDisconnected()?'none':_advice.reconnect;switch(action)
{case'retry':_resetBackoff();_delayedConnect();break;case'none':_disconnect(false);break;default:throw'Unrecognized advice action '+action;}}
else
{_failHandshake(message);}}
function _handshakeFailure(xhr,message)
{_failHandshake({successful:false,failure:true,channel:'/meta/handshake',request:message,xhr:xhr,advice:{reconnect:'retry',interval:_backoff}});}
function _failConnect(message)
{_notifyListeners('/meta/connect',message);_notifyListeners('/meta/unsuccessful',message);var action=_isDisconnected()?'none':_advice.reconnect;switch(action)
{case'retry':_increaseBackoff();_delayedConnect();break;case'handshake':_transports.reset();_resetBackoff();_delayedHandshake();break;case'none':_disconnect(false);break;default:throw'Unrecognized advice action'+action;}}
function _connectResponse(message)
{_connected=message.successful;if(_connected)
{_notifyListeners('/meta/connect',message);var action=_isDisconnected()?'none':_advice.reconnect;switch(action)
{case'retry':_resetBackoff();_delayedConnect();break;case'none':_disconnect(false);break;default:throw'Unrecognized advice action '+action;}}
else
{_failConnect(message);}}
function _connectFailure(xhr,message)
{_connected=false;_failConnect({successful:false,failure:true,channel:'/meta/connect',request:message,xhr:xhr,advice:{reconnect:'retry',interval:_backoff}});}
function _failDisconnect(message)
{_disconnect(true);_notifyListeners('/meta/disconnect',message);_notifyListeners('/meta/unsuccessful',message);}
function _disconnectResponse(message)
{if(message.successful)
{_disconnect(false);_notifyListeners('/meta/disconnect',message);}
else
{_failDisconnect(message);}}
function _disconnectFailure(xhr,message)
{_failDisconnect({successful:false,failure:true,channel:'/meta/disconnect',request:message,xhr:xhr,advice:{reconnect:'none',interval:0}});}
function _failSubscribe(message)
{_notifyListeners('/meta/subscribe',message);_notifyListeners('/meta/unsuccessful',message);}
function _subscribeResponse(message)
{if(message.successful)
{_notifyListeners('/meta/subscribe',message);}
else
{_failSubscribe(message);}}
function _subscribeFailure(xhr,message)
{_failSubscribe({successful:false,failure:true,channel:'/meta/subscribe',request:message,xhr:xhr,advice:{reconnect:'none',interval:0}});}
function _failUnsubscribe(message)
{_notifyListeners('/meta/unsubscribe',message);_notifyListeners('/meta/unsuccessful',message);}
function _unsubscribeResponse(message)
{if(message.successful)
{_notifyListeners('/meta/unsubscribe',message);}
else
{_failUnsubscribe(message);}}
function _unsubscribeFailure(xhr,message)
{_failUnsubscribe({successful:false,failure:true,channel:'/meta/unsubscribe',request:message,xhr:xhr,advice:{reconnect:'none',interval:0}});}
function _failMessage(message)
{_notifyListeners('/meta/publish',message);_notifyListeners('/meta/unsuccessful',message);}
function _messageResponse(message)
{if(message.successful===undefined)
{if(message.data)
{_notifyListeners(message.channel,message);}
else
{_debug('Unknown message',message);}}
else
{if(message.successful)
{_notifyListeners('/meta/publish',message);}
else
{_failMessage(message);}}}
function _messageFailure(xhr,message)
{_failMessage({successful:false,failure:true,channel:message.channel,request:message,xhr:xhr,advice:{reconnect:'none',interval:0}});}
function _receive(message)
{message=_applyIncomingExtensions(message);if(message===undefined||message===null)
{return;}
_updateAdvice(message.advice);var channel=message.channel;switch(channel)
{case'/meta/handshake':_handshakeResponse(message);break;case'/meta/connect':_connectResponse(message);break;case'/meta/disconnect':_disconnectResponse(message);break;case'/meta/subscribe':_subscribeResponse(message);break;case'/meta/unsubscribe':_unsubscribeResponse(message);break;default:_messageResponse(message);break;}}
this.receive=_receive;_handleMessages=function _handleMessages(rcvdMessages)
{_debug('Received',rcvdMessages);for(var i=0;i<rcvdMessages.length;++i)
{var message=rcvdMessages[i];_receive(message);}};_handleFailure=function _handleFailure(conduit,messages,reason,exception)
{_debug('handleFailure',conduit,messages,reason,exception);for(var i=0;i<messages.length;++i)
{var message=messages[i];var channel=message.channel;switch(channel)
{case'/meta/handshake':_handshakeFailure(conduit,message);break;case'/meta/connect':_connectFailure(conduit,message);break;case'/meta/disconnect':_disconnectFailure(conduit,message);break;case'/meta/subscribe':_subscribeFailure(conduit,message);break;case'/meta/unsubscribe':_unsubscribeFailure(conduit,message);break;default:_messageFailure(conduit,message);break;}}};function _hasSubscriptions(channel)
{var subscriptions=_listeners[channel];if(subscriptions)
{for(var i=0;i<subscriptions.length;++i)
{if(subscriptions[i])
{return true;}}}
return false;}
function _resolveScopedCallback(scope,callback)
{var delegate={scope:scope,method:callback};if(_isFunction(scope))
{delegate.scope=undefined;delegate.method=scope;}
else
{if(_isString(callback))
{if(!scope)
{throw'Invalid scope '+scope;}
delegate.method=scope[callback];if(!_isFunction(delegate.method))
{throw'Invalid callback '+callback+' for scope '+scope;}}
else if(!_isFunction(callback))
{throw'Invalid callback '+callback;}}
return delegate;}
function _addListener(channel,scope,callback,isListener)
{var delegate=_resolveScopedCallback(scope,callback);_debug('Adding listener on',channel,'with scope',delegate.scope,'and callback',delegate.method);var subscription={channel:channel,scope:delegate.scope,callback:delegate.method,listener:isListener};var subscriptions=_listeners[channel];if(!subscriptions)
{subscriptions=[];_listeners[channel]=subscriptions;}
var subscriptionID=subscriptions.push(subscription)-1;subscription.id=subscriptionID;subscription.handle=[channel,subscriptionID];_debug('Added listener',subscription,'for channel',channel,'having id =',subscriptionID);return subscription.handle;}
function _removeListener(subscription)
{var subscriptions=_listeners[subscription[0]];if(subscriptions)
{delete subscriptions[subscription[1]];_debug('Removed listener',subscription);}}
this.registerTransport=function(type,transport,index)
{var result=_transports.add(type,transport,index);if(result)
{_debug('Registered transport',type);if(_isFunction(transport.registered))
{transport.registered(type,this);}}
return result;};this.getTransportTypes=function()
{return _transports.getTransportTypes();};this.unregisterTransport=function(type)
{var transport=_transports.remove(type);if(transport!==null)
{_debug('Unregistered transport',type);if(_isFunction(transport.unregistered))
{transport.unregistered();}}
return transport;};this.findTransport=function(name)
{return _transports.find(name);};this.configure=function(configuration)
{_configure.call(this,configuration);};this.init=function(configuration,handshakeProps)
{this.configure(configuration);this.handshake(handshakeProps);};this.handshake=function(handshakeProps)
{_setStatus('disconnected');_reestablish=false;_handshake(handshakeProps);};this.disconnect=function(sync,disconnectProps)
{if(_isDisconnected())
{return;}
if(disconnectProps===undefined)
{if(typeof sync!=='boolean')
{disconnectProps=sync;sync=false;}}
var bayeuxMessage={channel:'/meta/disconnect'};var message=_mixin(false,{},disconnectProps,bayeuxMessage);_setStatus('disconnecting');_send(sync===true,[message],false,'disconnect');};this.startBatch=function()
{_startBatch();};this.endBatch=function()
{_endBatch();};this.batch=function(scope,callback)
{var delegate=_resolveScopedCallback(scope,callback);this.startBatch();try
{delegate.method.call(delegate.scope);this.endBatch();}
catch(x)
{_debug('Exception during execution of batch',x);this.endBatch();throw x;}};this.addListener=function(channel,scope,callback)
{if(arguments.length<2)
{throw'Illegal arguments number: required 2, got '+arguments.length;}
if(!_isString(channel))
{throw'Illegal argument type: channel must be a string';}
return _addListener(channel,scope,callback,true);};this.removeListener=function(subscription)
{if(!org.cometd.Utils.isArray(subscription))
{throw'Invalid argument: expected subscription, not '+subscription;}
_removeListener(subscription);};this.clearListeners=function()
{_listeners={};};this.subscribe=function(channel,scope,callback,subscribeProps)
{if(arguments.length<2)
{throw'Illegal arguments number: required 2, got '+arguments.length;}
if(!_isString(channel))
{throw'Illegal argument type: channel must be a string';}
if(_isDisconnected())
{throw'Illegal state: already disconnected';}
if(_isFunction(scope))
{subscribeProps=callback;callback=scope;scope=undefined;}
var send=!_hasSubscriptions(channel);var subscription=_addListener(channel,scope,callback,false);if(send)
{var bayeuxMessage={channel:'/meta/subscribe',subscription:channel};var message=_mixin(false,{},subscribeProps,bayeuxMessage);_queueSend(message);}
return subscription;};this.unsubscribe=function(subscription,unsubscribeProps)
{if(arguments.length<1)
{throw'Illegal arguments number: required 1, got '+arguments.length;}
if(_isDisconnected())
{throw'Illegal state: already disconnected';}
this.removeListener(subscription);var channel=subscription[0];if(!_hasSubscriptions(channel))
{var bayeuxMessage={channel:'/meta/unsubscribe',subscription:channel};var message=_mixin(false,{},unsubscribeProps,bayeuxMessage);_queueSend(message);}};this.clearSubscriptions=function()
{_clearSubscriptions();};this.publish=function(channel,content,publishProps)
{if(arguments.length<1)
{throw'Illegal arguments number: required 1, got '+arguments.length;}
if(!_isString(channel))
{throw'Illegal argument type: channel must be a string';}
if(_isDisconnected())
{throw'Illegal state: already disconnected';}
var bayeuxMessage={channel:channel,data:content};var message=_mixin(false,{},publishProps,bayeuxMessage);_queueSend(message);};this.getStatus=function()
{return _status;};this.isDisconnected=_isDisconnected;this.setBackoffIncrement=function(period)
{_config.backoffIncrement=period;};this.getBackoffIncrement=function()
{return _config.backoffIncrement;};this.getBackoffPeriod=function()
{return _backoff;};this.setLogLevel=function(level)
{_config.logLevel=level;};this.registerExtension=function(name,extension)
{if(arguments.length<2)
{throw'Illegal arguments number: required 2, got '+arguments.length;}
if(!_isString(name))
{throw'Illegal argument type: extension name must be a string';}
var existing=false;for(var i=0;i<_extensions.length;++i)
{var existingExtension=_extensions[i];if(existingExtension.name==name)
{existing=true;break;}}
if(!existing)
{_extensions.push({name:name,extension:extension});_debug('Registered extension',name);if(_isFunction(extension.registered))
{extension.registered(name,this);}
return true;}
else
{_info('Could not register extension with name',name,'since another extension with the same name already exists');return false;}};this.unregisterExtension=function(name)
{if(!_isString(name))
{throw'Illegal argument type: extension name must be a string';}
var unregistered=false;for(var i=0;i<_extensions.length;++i)
{var extension=_extensions[i];if(extension.name==name)
{_extensions.splice(i,1);unregistered=true;_debug('Unregistered extension',name);var ext=extension.extension;if(_isFunction(ext.unregistered))
{ext.unregistered();}
break;}}
return unregistered;};this.getExtension=function(name)
{for(var i=0;i<_extensions.length;++i)
{var extension=_extensions[i];if(extension.name==name)
{return extension.extension;}}
return null;};this.getName=function()
{return _name;};this.getClientId=function()
{return _clientId;};this.getURL=function()
{return _config.url;};this.getTransport=function()
{return _transport;};this.getConfiguration=function()
{return _mixin(true,{},_config);};this.getAdvice=function()
{return _mixin(true,{},_advice);};};(function(){var JSON=typeof JSON!=='undefined'?JSON:{stringify:function(){return yam.json.stringify.apply(yam.json,arguments);},parse:function(){return yam.json.parse.apply(yam.json,arguments);}};
/*!
  Dual licensed under the Apache License 2.0 and the MIT license.
 */
(function($)
{org.cometd.JSON.toJSON=JSON.stringify;org.cometd.JSON.fromJSON=JSON.parse;function _setHeaders(xhr,headers)
{if(headers)
{for(var headerName in headers)
{if(headerName.toLowerCase()==='content-type')
{continue;}
xhr.setRequestHeader(headerName,headers[headerName]);}}}
function LongPollingTransport()
{var _super=new org.cometd.LongPollingTransport();var that=org.cometd.Transport.derive(_super);that.xhrSend=function(packet)
{return $.ajax({url:packet.url,async:packet.sync!==true,type:'POST',contentType:'application/json;charset=UTF-8',data:packet.body,beforeSend:function(xhr)
{_setHeaders(xhr,packet.headers);return true;},success:packet.onSuccess,error:function(xhr,reason,exception)
{packet.onError(reason,exception);}});};return that;}
function CallbackPollingTransport()
{var _super=new org.cometd.CallbackPollingTransport();var that=org.cometd.Transport.derive(_super);that.jsonpSend=function(packet)
{$.ajax({url:packet.url,async:packet.sync!==true,type:'GET',dataType:'jsonp',jsonp:'jsonp',data:{message:packet.body},beforeSend:function(xhr)
{_setHeaders(xhr,packet.headers);return true;},success:packet.onSuccess,error:function(xhr,reason,exception)
{packet.onError(reason,exception);}});};return that;}
$.Cometd=function(name)
{var cometd=new org.cometd.Cometd(name);if(window.WebSocket)
{cometd.registerTransport('websocket',new org.cometd.WebSocketTransport());}
cometd.registerTransport('long-polling',new LongPollingTransport());cometd.registerTransport('callback-polling',new CallbackPollingTransport());return cometd;};$.cometd=new $.Cometd();})(jQuery);})();
/*!
  Dual licensed under the Apache License 2.0 and the MIT license.
  $Revision: 740 $ $Date: 2009-12-16 17:59:25 +0100 (Wed, 16 Dec 2009) $
 */
(function($)
{var _defaultConfig={'max-age':30*60,path:'/'};function _set(key,value,options)
{var o=$.extend({},_defaultConfig,options);if(value===null||value===undefined)
{value='';o['max-age']=0;o.expires=new Date(new Date().getTime()-1000);}
var result=key+'='+encodeURIComponent(value);if(o.expires&&o.expires.toUTCString)
{result+='; expires='+o.expires.toUTCString();}
if(o['max-age']&&typeof o['max-age']==='number')
{result+='; max-age='+o['max-age'];}
if(o.path)
{result+='; path='+(o.path);}
if(o.domain)
{result+='; domain='+(o.domain);}
if(o.secure)
{result+='; secure';}
document.cookie=result;}
function _get(key)
{var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;++i)
{var cookie=$.trim(cookies[i]);if(cookie.substring(0,key.length+1)==(key+'='))
{return decodeURIComponent(cookie.substring(key.length+1));}}
return null;}
$.cookie=function(key,value,options)
{if(arguments.length>1)
{_set(key,value,options);return undefined;}
else
{return _get(key);}};})(jQuery);(function(){var root=this;var previousUnderscore=root._;var breaker={};var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;var slice=ArrayProto.slice,concat=ArrayProto.concat,unshift=ArrayProto.unshift,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;var
nativeForEach=ArrayProto.forEach,nativeMap=ArrayProto.map,nativeReduce=ArrayProto.reduce,nativeReduceRight=ArrayProto.reduceRight,nativeFilter=ArrayProto.filter,nativeEvery=ArrayProto.every,nativeSome=ArrayProto.some,nativeIndexOf=ArrayProto.indexOf,nativeLastIndexOf=ArrayProto.lastIndexOf,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind;var _=function(obj){return new wrapper(obj);};if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_;}
exports._=_;}else if(typeof define==='function'&&define.amd){define('underscore',function(){return _;});}else{root['_']=_;}
_.VERSION='1.2.3';var each=_.each=_.forEach=function(obj,iterator,context){if(obj==null)return;if(nativeForEach&&obj.forEach===nativeForEach){obj.forEach(iterator,context);}else if(obj.length===+obj.length){for(var i=0,l=obj.length;i<l;i++){if(i in obj&&iterator.call(context,obj[i],i,obj)===breaker)return;}}else{for(var key in obj){if(hasOwnProperty.call(obj,key)){if(iterator.call(context,obj[key],key,obj)===breaker)return;}}}};_.map=function(obj,iterator,context){var results=[];if(obj==null)return results;if(nativeMap&&obj.map===nativeMap)return obj.map(iterator,context);each(obj,function(value,index,list){results[results.length]=iterator.call(context,value,index,list);});return results;};_.reduce=_.foldl=_.inject=function(obj,iterator,memo,context){var initial=arguments.length>2;if(obj==null)obj=[];if(nativeReduce&&obj.reduce===nativeReduce){if(context)iterator=_.bind(iterator,context);return initial?obj.reduce(iterator,memo):obj.reduce(iterator);}
each(obj,function(value,index,list){if(!initial){memo=value;initial=true;}else{memo=iterator.call(context,memo,value,index,list);}});if(!initial)throw new TypeError('Reduce of empty array with no initial value');return memo;};_.reduceRight=_.foldr=function(obj,iterator,memo,context){var initial=arguments.length>2;if(obj==null)obj=[];if(nativeReduceRight&&obj.reduceRight===nativeReduceRight){if(context)iterator=_.bind(iterator,context);return initial?obj.reduceRight(iterator,memo):obj.reduceRight(iterator);}
var reversed=_.toArray(obj).reverse();if(context&&!initial)iterator=_.bind(iterator,context);return initial?_.reduce(reversed,iterator,memo,context):_.reduce(reversed,iterator);};_.find=_.detect=function(obj,iterator,context){var result;any(obj,function(value,index,list){if(iterator.call(context,value,index,list)){result=value;return true;}});return result;};_.filter=_.select=function(obj,iterator,context){var results=[];if(obj==null)return results;if(nativeFilter&&obj.filter===nativeFilter)return obj.filter(iterator,context);each(obj,function(value,index,list){if(iterator.call(context,value,index,list))results[results.length]=value;});return results;};_.reject=function(obj,iterator,context){var results=[];if(obj==null)return results;each(obj,function(value,index,list){if(!iterator.call(context,value,index,list))results[results.length]=value;});return results;};_.every=_.all=function(obj,iterator,context){var result=true;if(obj==null)return result;if(nativeEvery&&obj.every===nativeEvery)return obj.every(iterator,context);each(obj,function(value,index,list){if(!(result=result&&iterator.call(context,value,index,list)))return breaker;});return result;};var any=_.some=_.any=function(obj,iterator,context){iterator||(iterator=_.identity);var result=false;if(obj==null)return result;if(nativeSome&&obj.some===nativeSome)return obj.some(iterator,context);each(obj,function(value,index,list){if(result||(result=iterator.call(context,value,index,list)))return breaker;});return!!result;};_.include=_.contains=function(obj,target){var found=false;if(obj==null)return found;if(nativeIndexOf&&obj.indexOf===nativeIndexOf)return obj.indexOf(target)!=-1;found=any(obj,function(value){return value===target;});return found;};_.invoke=function(obj,method){var args=slice.call(arguments,2);return _.map(obj,function(value){return(method.call?method||value:value[method]).apply(value,args);});};_.pluck=function(obj,key){return _.map(obj,function(value){return value[key];});};_.max=function(obj,iterator,context){if(!iterator&&_.isArray(obj))return Math.max.apply(Math,obj);if(!iterator&&_.isEmpty(obj))return-Infinity;var result={computed:-Infinity};each(obj,function(value,index,list){var computed=iterator?iterator.call(context,value,index,list):value;computed>=result.computed&&(result={value:value,computed:computed});});return result.value;};_.min=function(obj,iterator,context){if(!iterator&&_.isArray(obj))return Math.min.apply(Math,obj);if(!iterator&&_.isEmpty(obj))return Infinity;var result={computed:Infinity};each(obj,function(value,index,list){var computed=iterator?iterator.call(context,value,index,list):value;computed<result.computed&&(result={value:value,computed:computed});});return result.value;};_.shuffle=function(obj){var shuffled=[],rand;each(obj,function(value,index,list){if(index==0){shuffled[0]=value;}else{rand=Math.floor(Math.random()*(index+1));shuffled[index]=shuffled[rand];shuffled[rand]=value;}});return shuffled;};_.sortBy=function(obj,iterator,context){return _.pluck(_.map(obj,function(value,index,list){return{value:value,criteria:iterator.call(context,value,index,list)};}).sort(function(left,right){var a=left.criteria,b=right.criteria;return a<b?-1:a>b?1:0;}),'value');};_.groupBy=function(obj,val){var result={};var iterator=_.isFunction(val)?val:function(obj){return obj[val];};each(obj,function(value,index){var key=iterator(value,index);(result[key]||(result[key]=[])).push(value);});return result;};_.sortedIndex=function(array,obj,iterator){iterator||(iterator=_.identity);var low=0,high=array.length;while(low<high){var mid=(low+high)>>1;iterator(array[mid])<iterator(obj)?low=mid+1:high=mid;}
return low;};_.toArray=function(iterable){if(!iterable)return[];if(iterable.toArray)return iterable.toArray();if(_.isArray(iterable))return slice.call(iterable);if(_.isArguments(iterable))return slice.call(iterable);return _.values(iterable);};_.size=function(obj){return _.toArray(obj).length;};_.first=_.head=function(array,n,guard){return(n!=null)&&!guard?slice.call(array,0,n):array[0];};_.initial=function(array,n,guard){return slice.call(array,0,array.length-((n==null)||guard?1:n));};_.last=function(array,n,guard){if((n!=null)&&!guard){return slice.call(array,Math.max(array.length-n,0));}else{return array[array.length-1];}};_.rest=_.tail=function(array,index,guard){return slice.call(array,(index==null)||guard?1:index);};_.compact=function(array){return _.filter(array,function(value){return!!value;});};_.flatten=function(array,shallow){return _.reduce(array,function(memo,value){if(_.isArray(value))return memo.concat(shallow?value:_.flatten(value));memo[memo.length]=value;return memo;},[]);};_.without=function(array){return _.difference(array,slice.call(arguments,1));};_.uniq=_.unique=function(array,isSorted,iterator){var initial=iterator?_.map(array,iterator):array;var result=[];_.reduce(initial,function(memo,el,i){if(0==i||(isSorted===true?_.last(memo)!=el:!_.include(memo,el))){memo[memo.length]=el;result[result.length]=array[i];}
return memo;},[]);return result;};_.union=function(){return _.uniq(_.flatten(arguments,true));};_.intersection=_.intersect=function(array){var rest=slice.call(arguments,1);return _.filter(_.uniq(array),function(item){return _.every(rest,function(other){return _.indexOf(other,item)>=0;});});};_.difference=function(array){var rest=_.flatten(slice.call(arguments,1));return _.filter(array,function(value){return!_.include(rest,value);});};_.zip=function(){var args=slice.call(arguments);var length=_.max(_.pluck(args,'length'));var results=new Array(length);for(var i=0;i<length;i++)results[i]=_.pluck(args,""+i);return results;};_.indexOf=function(array,item,isSorted){if(array==null)return-1;var i,l;if(isSorted){i=_.sortedIndex(array,item);return array[i]===item?i:-1;}
if(nativeIndexOf&&array.indexOf===nativeIndexOf)return array.indexOf(item);for(i=0,l=array.length;i<l;i++)if(i in array&&array[i]===item)return i;return-1;};_.lastIndexOf=function(array,item){if(array==null)return-1;if(nativeLastIndexOf&&array.lastIndexOf===nativeLastIndexOf)return array.lastIndexOf(item);var i=array.length;while(i--)if(i in array&&array[i]===item)return i;return-1;};_.range=function(start,stop,step){if(arguments.length<=1){stop=start||0;start=0;}
step=arguments[2]||1;var len=Math.max(Math.ceil((stop-start)/step),0);var idx=0;var range=new Array(len);while(idx<len){range[idx++]=start;start+=step;}
return range;};var ctor=function(){};_.bind=function bind(func,context){var bound,args;if(func.bind===nativeBind&&nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError;args=slice.call(arguments,2);return bound=function(){if(!(this instanceof bound))return func.apply(context,args.concat(slice.call(arguments)));ctor.prototype=func.prototype;var self=new ctor;var result=func.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result)return result;return self;};};_.bindAll=function(obj){var funcs=slice.call(arguments,1);if(funcs.length==0)funcs=_.functions(obj);each(funcs,function(f){obj[f]=_.bind(obj[f],obj);});return obj;};_.memoize=function(func,hasher){var memo={};hasher||(hasher=_.identity);return function(){var key=hasher.apply(this,arguments);return hasOwnProperty.call(memo,key)?memo[key]:(memo[key]=func.apply(this,arguments));};};_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(func,args);},wait);};_.defer=function(func){return _.delay.apply(_,[func,1].concat(slice.call(arguments,1)));};_.throttle=function(func,wait){var context,args,timeout,throttling,more;var whenDone=_.debounce(function(){more=throttling=false;},wait);return function(){context=this;args=arguments;var later=function(){timeout=null;if(more)func.apply(context,args);whenDone();};if(!timeout)timeout=setTimeout(later,wait);if(throttling){more=true;}else{func.apply(context,args);}
whenDone();throttling=true;};};_.debounce=function(func,wait){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;func.apply(context,args);};clearTimeout(timeout);timeout=setTimeout(later,wait);};};_.once=function(func){var ran=false,memo;return function(){if(ran)return memo;ran=true;return memo=func.apply(this,arguments);};};_.wrap=function(func,wrapper){return function(){var args=concat.apply([func],arguments);return wrapper.apply(this,args);};};_.compose=function(){var funcs=arguments;return function(){var args=arguments;for(var i=funcs.length-1;i>=0;i--){args=[funcs[i].apply(this,args)];}
return args[0];};};_.after=function(times,func){if(times<=0)return func();return function(){if(--times<1){return func.apply(this,arguments);}};};_.keys=nativeKeys||function(obj){if(obj!==Object(obj))throw new TypeError('Invalid object');var keys=[];for(var key in obj)if(hasOwnProperty.call(obj,key))keys[keys.length]=key;return keys;};_.values=function(obj){return _.map(obj,_.identity);};_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}
return names.sort();};_.extend=function(obj){each(slice.call(arguments,1),function(source){for(var prop in source){if(source[prop]!==void 0)obj[prop]=source[prop];}});return obj;};_.defaults=function(obj){each(slice.call(arguments,1),function(source){for(var prop in source){if(obj[prop]==null)obj[prop]=source[prop];}});return obj;};_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};_.tap=function(obj,interceptor){interceptor(obj);return obj;};function eq(a,b,stack){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return a===b;if(a._chain)a=a._wrapped;if(b._chain)b=b._wrapped;if(a.isEqual&&_.isFunction(a.isEqual))return a.isEqual(b);if(b.isEqual&&_.isFunction(b.isEqual))return b.isEqual(a);var className=toString.call(a);if(className!=toString.call(b))return false;switch(className){case'[object String]':return a==String(b);case'[object Number]':return a!=+a?b!=+b:(a==0?1/a==1/b:a==+b);case'[object Date]':case'[object Boolean]':return+a==+b;case'[object RegExp]':return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase;}
if(typeof a!='object'||typeof b!='object')return false;var length=stack.length;while(length--){if(stack[length]==a)return true;}
stack.push(a);var size=0,result=true;if(className=='[object Array]'){size=a.length;result=size==b.length;if(result){while(size--){if(!(result=size in a==size in b&&eq(a[size],b[size],stack)))break;}}}else{if('constructor'in a!='constructor'in b||a.constructor!=b.constructor)return false;for(var key in a){if(hasOwnProperty.call(a,key)){size++;if(!(result=hasOwnProperty.call(b,key)&&eq(a[key],b[key],stack)))break;}}
if(result){for(key in b){if(hasOwnProperty.call(b,key)&&!(size--))break;}
result=!size;}}
stack.pop();return result;}
_.isEqual=function(a,b){return eq(a,b,[]);};_.isEmpty=function(obj){if(_.isArray(obj)||_.isString(obj))return obj.length===0;for(var key in obj)if(hasOwnProperty.call(obj,key))return false;return true;};_.isElement=function(obj){return!!(obj&&obj.nodeType==1);};_.isArray=nativeIsArray||function(obj){return toString.call(obj)=='[object Array]';};_.isObject=function(obj){return obj===Object(obj);};_.isArguments=function(obj){return toString.call(obj)=='[object Arguments]';};if(!_.isArguments(arguments)){_.isArguments=function(obj){return!!(obj&&hasOwnProperty.call(obj,'callee'));};}
_.isFunction=function(obj){return toString.call(obj)=='[object Function]';};_.isString=function(obj){return toString.call(obj)=='[object String]';};_.isNumber=function(obj){return toString.call(obj)=='[object Number]';};_.isNaN=function(obj){return obj!==obj;};_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)=='[object Boolean]';};_.isDate=function(obj){return toString.call(obj)=='[object Date]';};_.isRegExp=function(obj){return toString.call(obj)=='[object RegExp]';};_.isNull=function(obj){return obj===null;};_.isUndefined=function(obj){return obj===void 0;};_.noConflict=function(){root._=previousUnderscore;return this;};_.identity=function(value){return value;};_.times=function(n,iterator,context){for(var i=0;i<n;i++)iterator.call(context,i);};_.escape=function(string){return(''+string).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;').replace(/\//g,'&#x2F;');};_.mixin=function(obj){each(_.functions(obj),function(name){addToWrapper(name,_[name]=obj[name]);});};var idCounter=0;_.uniqueId=function(prefix){var id=idCounter++;return prefix?prefix+id:id;};_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};_.template=function(str,data){var c=_.templateSettings;var tmpl='var __p=[],print=function(){__p.push.apply(__p,arguments);};'+'with(obj||{}){__p.push(\''+
str.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(c.escape,function(match,code){return"',_.escape("+code.replace(/\\'/g,"'")+"),'";}).replace(c.interpolate,function(match,code){return"',"+code.replace(/\\'/g,"'")+",'";}).replace(c.evaluate||null,function(match,code){return"');"+code.replace(/\\'/g,"'").replace(/[\r\n\t]/g,' ')+";__p.push('";}).replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/\t/g,'\\t')
+"');}return __p.join('');";var func=new Function('obj','_',tmpl);if(data)return func(data,_);return function(data){return func.call(this,data,_);};};var wrapper=function(obj){this._wrapped=obj;};_.prototype=wrapper.prototype;var result=function(obj,chain){return chain?_(obj).chain():obj;};var addToWrapper=function(name,func){wrapper.prototype[name]=function(){var args=slice.call(arguments);unshift.call(args,this._wrapped);return result(func.apply(_,args),this._chain);};};_.mixin(_);each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];wrapper.prototype[name]=function(){method.apply(this._wrapped,arguments);return result(this._wrapped,this._chain);};});each(['concat','join','slice'],function(name){var method=ArrayProto[name];wrapper.prototype[name]=function(){return result(method.apply(this._wrapped,arguments),this._chain);};});wrapper.prototype.chain=function(){this._chain=true;return this;};wrapper.prototype.value=function(){return this._wrapped;};}).call(this);yam=(typeof yam=='undefined')?{}:yam;yam._=_;yam.each=yam._.each;var FlashDetect=new function(){var self=this;self.installed=false;self.raw="";self.major=-1;self.minor=-1;self.revision=-1;self.revisionStr="";var activeXDetectRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7","version":function(obj){return getActiveXVersion(obj);}},{"name":"ShockwaveFlash.ShockwaveFlash.6","version":function(obj){var version="6,0,21";try{obj.AllowScriptAccess="always";version=getActiveXVersion(obj);}catch(err){}
return version;}},{"name":"ShockwaveFlash.ShockwaveFlash","version":function(obj){return getActiveXVersion(obj);}}];var getActiveXVersion=function(activeXObj){var version=-1;try{version=activeXObj.GetVariable("$version");}catch(err){}
return version;};var getActiveXObject=function(name){var obj=-1;try{obj=new ActiveXObject(name);}catch(err){obj={activeXError:true};}
return obj;};var parseActiveXVersion=function(str){var versionArray=str.split(",");return{"raw":str,"major":parseInt(versionArray[0].split(" ")[1],10),"minor":parseInt(versionArray[1],10),"revision":parseInt(versionArray[2],10),"revisionStr":versionArray[2]};};var parseStandardVersion=function(str){var descParts=str.split(/ +/);var majorMinor=descParts[2].split(/\./);var revisionStr=descParts[3];return{"raw":str,"major":parseInt(majorMinor[0],10),"minor":parseInt(majorMinor[1],10),"revisionStr":revisionStr,"revision":parseRevisionStrToInt(revisionStr)};};var parseRevisionStrToInt=function(str){return parseInt(str.replace(/[a-zA-Z]/g,""),10)||self.revision;};self.majorAtLeast=function(version){return self.major>=version;};self.minorAtLeast=function(version){return self.minor>=version;};self.revisionAtLeast=function(version){return self.revision>=version;};self.versionAtLeast=function(major){var properties=[self.major,self.minor,self.revision];var len=Math.min(properties.length,arguments.length);for(i=0;i<len;i++){if(properties[i]>=arguments[i]){if(i+1<len&&properties[i]==arguments[i]){continue;}else{return true;}}else{return false;}}};self.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var type='application/x-shockwave-flash';var mimeTypes=navigator.mimeTypes;if(mimeTypes&&mimeTypes[type]&&mimeTypes[type].enabledPlugin&&mimeTypes[type].enabledPlugin.description){var version=mimeTypes[type].enabledPlugin.description;var versionObj=parseStandardVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revisionStr=versionObj.revisionStr;self.revision=versionObj.revision;self.installed=true;}}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var version=-1;for(var i=0;i<activeXDetectRules.length&&version==-1;i++){var obj=getActiveXObject(activeXDetectRules[i].name);if(!obj.activeXError){self.installed=true;version=activeXDetectRules[i].version(obj);if(version!=-1){var versionObj=parseActiveXVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revision=versionObj.revision;self.revisionStr=versionObj.revisionStr;}}}}}();};FlashDetect.JS_RELEASE="1.0.4";if(typeof yam=='undefined'){yam={};}
yam.core=new(function(yam){this._handleCounter=0;this._subscriptions={};if(typeof this.global=='undefined'){this.global=(function(){return this;})();}
this.require=function(ns){var parentObj=this.global;var modules=typeof ns=="string"?ns.split("."):ns;for(var i=0;i<modules.length;i++){var m=modules[i];parentObj=parentObj[m];if(!parentObj){throw new Error('Error: '+ns+' required for this module.');}}
return parentObj;}
this.val=function(root,path,value){var prnt=root,parts=path.split('.'),setting=arguments.length==3,ordlen=parts.length-1;for(var i=0,ii=parts.length;i<ii;i++){var p=parts[i];if(!prnt[p]){if(!setting){return prnt[p];}
prnt[p]=(i==ordlen)?value:{};}else if(i==ordlen){return setting?prnt[p]=value:prnt[p];}
prnt=prnt[p];}};this.define=yam.define||function(mod,cb){var args=Array.prototype.slice.call(arguments,0),cb=args.pop(),modules=typeof args[0]!='string'?args[0]:args;var GLOBALS={'$':this.global.jq,'_':yam._,'JSON':yam.json,'Mustache':yam.global.Mustache};if(modules){for(var i=0,ii=modules.length;i<ii;i++){if(GLOBALS[modules[i]]){modules[i]=GLOBALS[modules[i]];}else{modules[i]=yam.require(modules[i]);}}}
cb.apply(null,modules||[]);};this.mixin=(function(){var _mix=function(targ,src,merge){for(var p in src){if(src.hasOwnProperty(p)){if(merge&&(typeof src[p]=='object')&&(src[p]!==null)&&!(src[p]instanceof Array)){if(typeof targ[p]=='undefined'){targ[p]={};}
_mix(targ[p],src[p],merge);}
else{targ[p]=src[p];}}}};return function(){var args=Array.prototype.slice.apply(arguments),merge=false,targ,sources;if(args.length>2){if(typeof args[args.length-1]=='boolean'){merge=args.pop();}}
targ=args.shift();sources=args;for(var i=0,ii=sources.length;i<ii;i++){_mix(targ,sources[i],merge);}
return targ;};}).call(this);this.ns=function(ns,obj){if(!ns){throw new Error('yam.ns requires at least one parameter');}
var parentObj=this.global;var modules=typeof ns=="string"?ns.split("."):ns;for(var i=0;i<modules.length;i++){var m=modules[i];if(!parentObj[m]){parentObj[m]={};}
parentObj=parentObj[m];}
if(obj){this.mixin(parentObj,obj);}
return parentObj;};this.ctor=(function(){var _mixin=function(obj,mixins){return yam.mixin.apply(yam,[obj].concat(mixins));},_isArray=function(obj){return obj&&typeof obj==='object'&&typeof obj.length==='number'&&typeof obj.splice==='function'&&!(obj.propertyIsEnumerable('length'));};return function(){var declaredClass=null,base=null,mixins=[],definition=null;var len=arguments.length;if(len<2){throw new Error('yam.ctor: ArgumentError: invalid argument combination');}else if(len==2){declaredClass=arguments[0];definition=arguments[1];}else if(len==3){declaredClass=arguments[0];definition=arguments[2];if(_isArray(arguments[1])){mixins=arguments[1];}else{base=arguments[1];}}else if(len==4){declaredClass=arguments[0];base=arguments[1];mixins=arguments[2];definition=arguments[3];}else{throw new Error('yam.ctor: ArgumentError: invalid argument combination');}
var moduleName=declaredClass.split('.'),ns=yam.ns(moduleName.slice(0,-1));definition.init=definition.init||(base&&base.prototype.init)||function(){};var ctor=function(){this.init.apply(this,arguments);};var composition=mixins.concat([definition]);if(!base){_mixin(ctor.prototype,composition);}else{ctor=function(){this._super=base;this.init.apply(this,arguments);this._super=null;};var proto=ctor.prototype;_mixin(proto,composition);var createMethodWithSuper=function(prop,func){return function(){this._super=base.prototype[prop];var ret=func.apply(this,arguments);this._super=null;return ret;};};for(var prop in base.prototype){if(!base.prototype.hasOwnProperty(prop)){continue;}
if(proto[prop]){if(typeof proto[prop]==='function'){proto[prop]=createMethodWithSuper(prop,proto[prop]);}}else{proto[prop]=base.prototype[prop];}}}
ns[moduleName[moduleName.length-1]]=ctor;ctor.prototype.declaredClass=declaredClass;return ctor;};}).call(this);this.publish=function(topic,args){var s=this._subscriptions;if(!s[topic]){return;}
for(var id in s[topic]){var fn=s[topic][id];fn.apply(fn,args||[]);}};this.subscribe=function(topic,fn){var self=this;if(this.isArray(topic)){var topics=[];yam._.each(topic,function(x){topics.push(self.subscribe(x,fn));});return topics;}
var id=this._handleCounter,s=this._subscriptions;if(!s[topic]){s[topic]={};}
s[topic][id]=fn;this._handleCounter++;return[topic,id];};this.unsubscribe=function(handle){var topic=handle[0],id=handle[1];var s=this._subscriptions;if(s[topic]&&s[topic][id]){s[topic][id]=null;delete s[topic][id];}};this.unsubscribeAll=function(){var s=this._subscriptions;for(var topic in s){for(var id in s[topic]){this.unsubscribe([topic,id]);}}};this.bind=function(scope,func){var fn=typeof func=="string"?scope[func]:func;return function(){return fn.apply(scope,arguments);};};this.curry=function(){var self=this,scope=arguments[0],func=arguments[1],curried=Array.prototype.slice.call(arguments,2);return function(){var f=self.bind(scope,func);var args=curried.concat(Array.prototype.slice.call(arguments,0));return f.apply(scope,args);};};this.hook=(function(){var self=this;var throwArgumentError=function(msg){throw new Error('yam.hook: ArgumentError: '+msg);};var throwBindError=function(){var args=Array.prototype.slice.call(arguments,0);var msg=args.splice(0,1);throw new Error('yam.hook: BindError: '+msg+': arguments:  '+args.join(', '));};var createLateBindingExecutor=function(target,targetScope,targetFunc){return function(){var func=target?target[targetFunc]:self.global[targetFunc];if(!func){throwBindError('could not bind to target function',target,targetScope,targetFunc);}
return func.apply(targetScope,arguments);};};var createEarlyBindingExecutor=function(target,targetScope,targetFunc){return self.bind(targetScope,targetFunc);};var createExecutor=function(target,targetScope,targetFunc){switch(typeof targetFunc){case'function':return createEarlyBindingExecutor(target,targetScope,targetFunc);case'string':return createLateBindingExecutor(target,targetScope,targetFunc);default:throwArgumentError('targetFunc must be a function or a string: '+targetFunc);}};var appendExecutor=function(proxy,executor){var id=self._handleCounter++,hooks=proxy.__h.hooks,positions=proxy.__h.positions;hooks.push(executor);positions[id]=hooks.length-1;return[proxy,id];};var createHandle=function(proxy,customData){var id=self._handleCounter++;return[proxy,id,customData];};var createProxy=function(src,srcFunc){var orig=src[srcFunc];var h={positions:{},hooks:[]};var proxy=function(){var ret=orig.apply(this,arguments);var hooks=h.hooks.concat();for(var i=0;i<hooks.length;++i){hooks[i].apply(this,arguments);}
return ret;};proxy.__h=h;src[srcFunc]=proxy;return proxy;};var findProxy=function(src,srcFunc){var func=src&&src[srcFunc];if(func&&func.__h){return func;}
return false;};return function(){var src,srcFunc,target,targetFunc;switch(arguments.length){case 2:srcFunc=arguments[0];targetFunc=arguments[1];break;case 3:src=arguments[0];srcFunc=arguments[1];targetFunc=arguments[2];break;case 4:src=arguments[0];srcFunc=arguments[1];target=arguments[2];targetFunc=arguments[3];break;default:throwArgumentError('invalid argument combination');}
var targetScope=target||src||yam.global,srcScope=src||yam.global,handle;if(self.hook.isCustomEvent(srcScope,srcFunc)){var customData=self.hook.hookCustomEvent(srcScope,srcFunc,target,targetScope,targetFunc);handle=createHandle(null,customData);}else{var executor=createExecutor(target,targetScope,targetFunc);var proxy=findProxy(src,srcFunc);if(proxy){handle=appendExecutor(proxy,executor);}else{proxy=createProxy(srcScope,srcFunc);handle=appendExecutor(proxy,executor);}}
return handle;};}).call(this);this.hook.isCustomEvent=function(src,evt){return false;};this.hook.hookCustomEvent=function(srcScope,evt){throw new Error('yam.hook.hookCustomEvent: not implemented');};this.hook.unhookCustomEvent=function(handle){throw new Error('yam.hook.unhookCustomEvent: not implemented');};this.hookOnce=function(src,evt,target,targetFunc){var self=this,h,funcIndex=target&&targetFunc?3:2,args=Array.prototype.slice.call(arguments,0);var fnOrString=args[funcIndex];args[funcIndex]=function(){self.unhook(h);self.bind(this,fnOrString).apply(this,arguments);};h=this.hook.apply(this,args);return h;};this.unhook=function(handle){if(!handle){return;}
var proxy=handle[0],id=handle[1],customData=handle[2];if(customData){this.hook.unhookCustomEvent(id,customData);}else{var __h=proxy.__h,positions=__h.positions,hooks=__h.hooks,position=positions[id];if(!(position||position===0)){return;}
hooks.splice(position,1);delete positions[id];for(var p in positions){if(positions[p]>position){positions[p]--;}}}};this.objectify=function(str,options){var opts=options||{};var d={};var consolidate=typeof opts.consolidate=='undefined'?true:opts.consolidate;if(str){var arr=str.split('&');for(var i=0;i<arr.length;i++){var pair=arr[i].split('=');var name=pair[0];var val=decodeURIComponent(pair[1]||'');if(typeof d[name]!='undefined'&&consolidate){if(typeof d[name]=='string'){d[name]=[d[name]];}
d[name].push(val);}
else{d[name]=val;}}}
return d;};this.paramify=function(obj,o){var opts=o||{},str='',key,val,isValid,itemArray,arr=[],arrVal;for(var p in obj){if(Object.prototype.hasOwnProperty.call(obj,p)){val=obj[p];isValid=!(val===null||val===undefined||(typeof val==='number'&&isNaN(val)));key=opts.snakeize?yam.snakeize(p):p;if(isValid){if(this.isArray(val)&&val.length){itemArray=[];for(var i=0,ii=val.length;i<ii;i++){arrVal=val[i];isValid=!(arrVal===null||arrVal===undefined||(typeof arrVal==='number'&&isNaN(arrVal)));itemArray[i]=isValid?encodeURIComponent(arrVal):'';if(opts.escapeVals){itemArray[i]=yam.escapeXML(itemArray[i]);}}
if(opts.consolidate){arr.push(key+'='+itemArray.join(','));}
else{arr.push(key+'='+itemArray.join('&'+key+'='));}}
else{if(opts.escapeVals){val=yam.escapeXML(val);}
arr.push(key+'='+encodeURIComponent(val));}
str+='&';}
else{if(opts.includeEmpty){arr.push(key+'=');}}}}
return arr.join('&');};this.isArray=function(obj){return obj&&typeof obj==='object'&&typeof obj.length==='number'&&typeof obj.splice==='function'&&!(obj.propertyIsEnumerable('length'));};this.log=(function(){if(typeof console!='undefined'&&typeof console.log=='function'){return function(){var args,time,config=typeof yam.config=='function'?yam.config():{},modules;modules=config.debugModules;modules=modules&&modules.split(',');if(config.debug||modules){var part=arguments[0],matched;if(typeof part=='string'){matched=_.detect(modules,function(module){return part.indexOf(module)!=-1;});}
else{console.log('First arg to yam.log must be a string so we can do module-filtering.');console.log(part);}
if(modules&&!matched){return;}
args=Array.prototype.slice.call(arguments);time=yam.clock.now().toString();args.push(time);console.log.apply(console,args);}};}
return function(){};}).call(this);this.warn=function(){var args=Array.prototype.slice.call(arguments,0)
args.unshift('YJ Warning:')
yam.log.apply(this,args)}
this.deprecate=function(objOrStr,method,message){return;var className=typeof objOrStr=='string'?objOrStr:objOrStr.declaredClass,msg='deprecation warning for '+className+'.'+method;if(message){msg+=': '+message;}
this.log(msg);};this.experimental=function(objOrStr,method,message){var className=typeof objOrStr=='string'?objOrStr:objOrStr.declaredClass,msg=className+'.'+method+' is experimental and subject to change';if(message){msg+=': '+message;}
this.log(msg);}
this.random=Math.random;this.clock={now:function(){return new Date();}};this.setTimeout=function(){return this.global.setTimeout(arguments[0],arguments[1]);};this.setInterval=function(){return this.global.setInterval(arguments[0],arguments[1]);};this.clearTimeout=function(){this.global.clearTimeout(arguments[0]);};this.clearInterval=function(){this.global.clearInterval(arguments[0]);};this.mixin(yam,this);})(yam);(function(yam){yam.uri={base:function(){var base='https://yammer.com';var config=yam.config();if(config.baseURI){yam.serviceURIBase=config.baseURI;}
if(yam.serviceURIBase){base=yam.serviceURIBase;}else if(yam.app&&yam.app.serviceURIBase){base=yam.app.serviceURIBase;}
return base;},app:function(relative){if(yam.appURIBase!==undefined){return this.join(yam.appURIBase,relative);}else{var base=this.base();if(yam.currentNetwork&&yam.currentNetwork.permalink){base=this.join(base,yam.currentNetwork.permalink);}
return this.join(base,relative);}},permalink:function(relative){var base=this.base();if(yam.currentNetwork&&yam.currentNetwork.permalink){base=this.join(base,yam.currentNetwork.permalink);}
return this.join(base,relative);},api:function(relative){var prefix=yam.apiPrefix||'api/v1';return this.join(this.base(),prefix,relative);},join:function(){var parts=[],joined,locIndex;for(var i=0,ii=arguments.length;i<ii;++i){if(arguments[i]){parts.push(arguments[i]);}}
joined=parts.join('/');locIndex=joined.indexOf('#');if(locIndex>=0&&joined.charAt(locIndex-1)=='/'){joined=joined.substring(0,locIndex-1)+joined.substring(locIndex,joined.length);}
return joined;}};})(yam);;(function(yam,undefined){
/*!
// a node.js module fork of
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
// see: http://blog.stevenlevithan.com/archives/parseuri
// see: http://stevenlevithan.com/demo/parseuri/js/
*/
function parseUri(str){var o=parseUri.options,m=o.parser[o.strictMode?"strict":"loose"].exec(str||''),uri={},i=o.key.length;while(i--)uri[o.key[i]]=m[i]||"";uri[o.q.name]=yam.objectify(uri["query"])||{};return uri;};parseUri.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};if(yam.uri===undefined){yam.uri={};}
yam.uri.parse=parseUri;yam.uri.stringify=function(parsedUrl){var parts=["protocol","user","password","host","port","directory","file","query","anchor"],uri='',key;for(var i=0,len=parts.length;i<len;i++){key=parts[i];if(key==='password'&&parsedUrl[key]){uri+=':';}
if(key==='host'&&parsedUrl['userInfo']){uri+='@';}
if(key==='port'&&parsedUrl[key]){uri+=':';}
if(key==='anchor'&&parsedUrl[key]){uri+='#';}
if(key==='query'&&parsedUrl['queryKey']){var queryStr=yam.paramify(parsedUrl['queryKey']);queryStr=queryStr||parsedUrl[key];if(queryStr){uri+='?'+queryStr;}}else{uri+=parsedUrl[key];}
if(key==='protocol'&&parsedUrl[key]){uri+='://';}}
return uri;}})(yam);(function(yam){yam.snakeize=(function(){var repl=/([A-Z]+)/g,lead=/^_/g;return function(s,separ){var sep=separ||'_',leading=separ?new RegExp('^'+sep,'g'):lead;return s.replace(repl,sep+'$1').toLowerCase().replace(leading,'');};})();yam.camelize=(function(){var repl=/[-_](\w)/g;return function(s,initCap){var res=s.replace(repl,function(m,m1)
{return m1.toUpperCase();});res=initCap?yam.capitalize(res):res;return res;};})();yam.capitalize=function(s){if(!s)return;return s.substr(0,1).toUpperCase()+s.substr(1);};yam.singularize=function(s){return s.replace(/s$/,'');}
yam.pluralize=function(s){return s+'s';}
yam.trim=function(str,chr){var pat=chr?new RegExp('^['+chr+']+|['+chr+']+$','g'):/^\s+|\s+$/g;return str&&str.replace(pat,'');};yam.escapeXML=function(s){if(s==null)return;return s.replace(/&(?!\w+;)|['"<>]/g,function(s){switch(s){case"&":return"&amp;";case'"':return'&quot;';case"'":return'&#39;';case"<":return"&lt;";case">":return"&gt;";default:return s;}});}
yam.interpretHTMLEntities=function(html){return html&&html.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&hellip;/g,'\u2026').replace(/&quot;/g,'"').replace(/&nbsp;/g,'\u00A0').replace(/&ndash;/g,'\u2013').replace(/&mdash;/g,'\u2014').replace(/&#(x?)(\d{2,4});/g,function(hexEntity,isHex,numberString){var charCode=parseInt((isHex?'0x':'')+numberString);if(!isNaN(charCode)){return String.fromCharCode(charCode);}else{return hexEntity;}})};yam.convertStringyBoolean=function(val){if(val==='false'||val=='0'){return false;}
return!!val;}
yam.truncate=function(s,limit,o){if(s){s=s+'';}
else{return'';}
var opts=o||{};if(s.length<=limit||(opts.max&&s.length<=opts.max)){return s;}
var str='';if(opts.file){str=s.substring(0,limit-(limit/2));str+=opts.truncationChar||'&hellip;'
str+=s.substring(s.length,s.length-(limit/2));}else{if(opts.truncateOnWords){str=s.substring(0,limit).replace(/\s\S+$|\s$/,'');}else{str=s.substring(0,limit);};str+=opts.truncationChar||'&hellip;';}
return str}
yam.getExtension=function(path){var match;if(path){match=/.+\.(\w{2,4}$)/.exec(path);}
return(match&&match[1])||'';};yam.getExt=function(filename){var extension=yam.getExtension(filename);switch(extension&&extension.toLowerCase()){case'docx':return'doc';case'pptx':return'ppt';case'xlsx':return'xls';case'svg':return'ai';case'flv':return'swf';case'avi':case'mpg':case'vob':case'mp4':case'wmv':return'mov';case'jpg':case'jpeg':case'gif':case'png':case'tif':case'bmp':return'image';case'aac':case'flac':case'wav':case'aif':case'iff':case'mpa':case'wma':case'm4a':return'mp3';case'gz':case'pkg':case'rar':return'zip';case'adp':case'ai':case'doc':case'fla':case'html':case'mov':case'mp3':case'pdf':case'php':case'ppt':case'psd':case'pst':case'swf':case'txt':case'xls':case'zip':return extension.toLowerCase();default:return'default';}};yam.getMimeFromExt=function(filename){extension=filename.split('.').pop().toLowerCase();switch(extension){case'docx':return'text_blue';case'pptx':return'graph_red';case'pdf':return'default_red';case'xlsx':return'spreadsheet_green';case'avi':case'mpg':case'vob':case'mp4':case'wmv':return'video_blue';case'jpg':case'jpeg':case'gif':case'png':case'tif':case'bmp':return'picture_orange';case'aac':case'flac':case'wav':case'aif':case'iff':case'mpa':case'wma':case'm4a':return'sound_green';case'gz':case'pkg':case'rar':return'zip';case'html':case'php':return'code_green';default:return'default_blue';}}
yam.uuid=function(){var uuid=0;yam.uuid=function(){var newId=uuid++;return'yamjs'+newId.toString();};return yam.uuid();};yam.functionize=function(s){var str=s.toString();return yam.camelize(str);};yam.cssize=function(s){var str=s.toString();return yam.snakeize(str,'-');};var pad=function(i){if(i<10)
return'0'+i
return i}
yam.date={DAYS:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],MONTHS:['January','February','March','April','May','June','July','August','September','October','November','December'],numberSuffix:function(num){if(num>10&&num<20)
return'th'
return{1:'st',2:'nd',3:'rd'}[num%10]||'th'},formatTime:function(dt){return((dt.getHours()>12?(dt.getHours()%12):dt.getHours())||12)+":"+
pad(dt.getMinutes())+
((dt.getHours()>=12)?'pm':'am');},formatDateTime:function(dt){return(yam.date.formatTime(dt)+" "+
yam.date.MONTHS[dt.getMonth()]+" "+
dt.getDate()+
yam.date.numberSuffix(dt.getDate()))},formatAgo:function(dt,now,dateOnly){if(parseInt(dt,10)){dt=new Date(parseInt(dt,10));}
var now=now||new Date(),diff=parseInt(now.getTime()/1000)-parseInt(dt.getTime()/1000),m,d,t,y
if(diff<=0)
return yam.tr("1 second ago")
if(diff<50){return yam.tr('{seconds} seconds ago',null,{seconds:(Math.ceil(diff/10)*10)})}
if(diff<120){return yam.tr('1 minute ago')}
if(diff<3600){return yam.tr('{mins} minutes ago',null,{mins:Math.floor(diff/60)})}
if(diff<3660){return yam.tr('1 hour ago')}
if(diff<60*60*24){return yam.tr('{hours} hours ago',null,{hours:Math.ceil(diff/3600)})}
t=yam.date.formatTime(dt)
if(diff<60*60*72){var d=yam.tr(yam.date.DAYS[dt.getDay()])
if(dateOnly){return yam.tr('{day}',null,{day:d,time:t})}else{return yam.tr('{day} at {time}',null,{day:d,time:t})}}
m=yam.tr(yam.date.MONTHS[dt.getMonth()])
d=dt.getDate()
if(diff<60*60*24*365){if(dateOnly){return yam.tr('{month} {date}',null,{month:m,date:d,time:t})}else{return yam.tr('{month} {date} at {time}',null,{month:m,date:d,time:t})}}
y=dt.getFullYear()
if(dateOnly){return yam.tr('{month} {date}, {year}',null,{month:m,date:d,year:y,time:t});}else{return yam.tr('{month} {date}, {year} at {time}',null,{month:m,date:d,year:y,time:t});}}}})(yam);if(!window.yam){window.yam={};}
if(!yam.ajax){yam.ajax=jQuery.ajax;}
if(!yam.json){yam.json={};yam.json.parse=jQuery.secureEvalJSON;yam.json.stringify=jQuery.toJSON;}
if(!yam.cometd){yam.cometd=jQuery.cometd;}
yam.$=jQuery.noConflict(true);jq=yam.$;if(!window.jQuery){window.jQuery=jq;}
if(!window.YAM){YAM={};}
yam.ns('YAM.MessageFeeds');network_permalink='http://example.com/network';yam.ns('YAM.User.current',{attachments:[]});if(yam.$.address){var $address=yam.$.address,params=$address.parameterNames(),param,key,val;for(var i=0,ii=params.length;i<ii;i++){param=params[i];if(param.indexOf('config-')===0){key=param.substring(7,param.length);val=$address.parameter(param);yam.config(key,val);}}}
yam.$.fx.speeds._default=(jQuery.browser.msie&&jQuery.version<8)?0:200;function evt(){return yam.$(document);}
if(!window.console||!console.firebug){var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];if(!window.console)window.console={};for(var i=0;i<names.length;++i){if(!window.console[names[i]]){window.console[names[i]]=function(){};}}
names=null;}
if(typeof Tr8n!='undefined'){yam.ns('Tr8n.Utils.ajax');Tr8n.Utils.ajax=function(url,options){var success=function(response){var responseAdapter={responseText:response}
options.onSuccess(responseAdapter);};var dataType=options.evalScripts?'html':'xml';var ops={url:url,data:options.parameters,type:options.method||'GET',dataType:dataType,success:success,complete:options.onComplete,error:options.onFailure};return yam.request(ops);};}
yam.hook.isCustomEvent=function(src,evt){return(src===yam.global&&!src[evt])||src===document||!!src.trigger||typeof src==='string';}
yam.hook.hookCustomEvent=(function(){var createExecutor=function(target,targetScope,targetFunc){if(typeof targetFunc=='function'){return jq.proxy(targetFunc,targetScope);}else{return function(){var func=target?target[targetFunc]:yam.global[targetFunc];func.apply(targetScope,arguments);}}}
return function(srcScope,evt,target,targetScope,targetFunc){var $nodes=jq(srcScope);if(typeof srcScope=='string'&&typeof targetScope=='string'){targetScope=$nodes;}
var executor=createExecutor(target,targetScope,targetFunc)
$nodes.bind(evt,executor);return{executor:executor,$nodes:$nodes,evt:evt};};})();yam.hook.unhookCustomEvent=function(id,customData){customData.$nodes.unbind(customData.evt,customData.executor);}
yam.ns('yam.util');yam.util.authenticityToken=(function(){var token;return function(){if(token){return token;}
token=jQuery('#authenticity_token').attr('content');if(!token){token=jQuery('input[name="authenticity_token"]').val();}
return token;};})();yam.util.HREF_PATTERN=/\b((?:https?:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]|(?:\([^\s()<>]\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^&=\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;yam.ns('yam.promise',{when:function(){var promise=new yam.promise.Promise(arguments);return new yam.promise.Context(promise);},whenClient:function(){yam.require('yam.yammerClient');yam.require('yam.promise.YammerClientPromise');var promise=new yam.promise.YammerClientPromise(yam.yammerClient,arguments);return new yam.promise.Context(promise);}});yam.ctor('yam.promise.Context',{init:function(promise){this._promise=promise;},when:function(){this._promise.addConditions(arguments);return this;},within:function(period){this._promise.setPeriod(period);return this;},then:function(){var callback=arguments.length==2?yam.bind(arguments[0],arguments[1]):arguments[0];this._promise.addSuccessCallback(callback);this._promise.execute();return this;},otherwise:function(){var callback=arguments.length==2?yam.bind(arguments[0],arguments[1]):arguments[0];this._promise.addFailureCallback(callback);this._promise.execute();return this;},satisfy:function(name,data){this._promise.satisfy(name,data);return this;},cancel:function(name,data){this._promise.cancel(name,data);return this;},fail:function(name,data){this._promise.fail(name,data);return this;},getPromise:function(){return this._promise;},isSatisfied:function(){return this._promise.isSatisfied();}});yam.ctor('yam.promise.Promise',{init:function(conditions){this._conditions={};this._period=0;this._executed=false;this._successCallbacks=[];this._failureCallbacks=[];this._timeout=undefined;this.addConditions(conditions);},execute:function(){if(this.isSatisfied()){this._executeSuccess();}else if(this.isBroken()){this._executeFailure();}else if(!this.hasExecuted()){this._execute();}
this._executed=true;},addSuccessCallback:function(callback){this._successCallbacks.push(callback);},addFailureCallback:function(callback){this._failureCallbacks.push(callback);},addConditions:function(conditions){for(var i=0,ii=conditions.length;i<ii;++i){this.addCondition(conditions[i]);}},addCondition:function(name){this._conditions[name]=new yam.promise.Condition(name);},getConditions:function(){return this._conditions;},isSatisfied:function(){return!yam.promise.util.detect(this._conditions,function(name){return!this[name].isSatisfied();});},isBroken:function(){return!!yam.promise.util.detect(this._conditions,function(name){return this[name].isBroken();});},hasExecuted:function(){return this._executed;},cancel:function(name,data){this._conditions[name].cancel(data);this.execute();},satisfy:function(name,data){this._conditions[name].satisfy(data);this.execute();},fail:function(name,data){this._conditions[name].fail(data);this.execute();},_execute:function(){yam.promise.util.forEach(this._conditions,function(key){this[key].execute();});if(this._period){this._timeout=yam.setTimeout(yam.bind(this,'_onTimeout'));}},_onTimeout:function(){if(!this.isBroken()&&!this.isSatisfied()){yam.promise.util.forEach(this._conditions,function(key){this[key].fail('timeout');});this._executeFailure();}},_executeSuccess:function(){yam.clearTimeout(this._timeout);this._executeCallbacks(this._successCallbacks);},_executeFailure:function(){yam.clearTimeout(this._timeout);this._executeCallbacks(this._failureCallbacks);},_executeCallbacks:function(callbacks){while(callbacks.length){var cb=callbacks.shift();cb(this._conditions);}},setPeriod:function(period){this._period=period;},getPeriod:function(){return this._period;},getSuccessCallbacks:function(){return this._successCallbacks;},getFailureCallbacks:function(){return this._failureCallbacks;}});yam.ctor('yam.promise.Condition',{init:function(name){this._name=name;this._data=undefined;this._satisfied=false;this._failed=false;this._cancelled=false;},getName:function(){return this._name;},satisfy:function(data){this._setState('satisfied',true,data);},fail:function(data){this._setState('failed',true,data);},cancel:function(data){this._setState('cancelled',true,data);},getData:function(data){return this._data;},isBroken:function(){return this.isCancelled()||this.isFailed();},isFailed:function(){return this._failed;},isCancelled:function(){return this._cancelled;},isSatisfied:function(){return this._satisfied;},execute:function(){},_setState:function(flag,value,data){if(this.isBroken()||this.isSatisfied()){return;}
this['_'+flag]=value;this._data=data;}});yam.ns('yam.promise.util',{detect:function(obj,fn){var ret;yam.promise.util.forEach(obj,function(key){return!(ret=key&&fn.call(obj,key));});return ret;},forEach:function(obj,fn){for(var key in obj){if(obj.hasOwnProperty(key)){if(fn.call(obj,key)===false){return;}}}}});;new(function(yam,undefined){var requestObj=this;var DEBUG=false;var _config={appId:null,authMethod:null,xdrHostname:null},_initialized=false,_initializer,_seeds=1,_handles={},basicRequester={send:function(req){yam.ajax.apply(yam,arguments);}},xDomainRequester={init:function(done){yam.require('yam.xdr');var config={hostname:_config.xdrHostname};yam.xdr.init(config,done);},send:function(req){yam.xdr.ajax.apply(yam.xdr,arguments);}},_requester,basicAuthenticator={_CSRFToken:null,_getCSRFToken:function(){if(!this._CSRFToken){this._CSRFToken=yam.util.authenticityToken();}
return this._CSRFToken;},_getNetworkId:function(){if(yam.getCurrentNetwork()){return yam.getCurrentNetwork().id;}
return null;},getAuthenticationHeaders:function(networkId){return{'X-CSRF-Token':this._getCSRFToken(),'NETWORK_ID':networkId||''}},getParamsForWrite:function(networkId){return{authenticity_token:this._CSRFToken}},beforeSend:function(xhr,settings){var self=this,networkId=this._getNetworkId(),data;yam.request.util.addAuthenticationParams(settings,xhr,self,networkId);}},oAuth2Authenticator={_authToken:null,_getAuthToken:function(origRequest){var self=this,error=origRequest.error||undefined,complete=origRequest.complete||undefined,url=yam.uri.join(yam.uri.base(),'oauth2/access_token.json');yam.request({url:url,auth:false,data:{client_id:_config.appId},success:function(data){if(data&&data.access_token){self._authToken=data.access_token;return self.onRetry(origRequest);}else{this.error();}},error:function(){self._authToken=null;if(typeof error=='function'){error.apply(origRequest,arguments);}},complete:function(){if(!self._authToken){complete.apply(this,arguments);}}});},setAuthToken:function(token){if(typeof token=='string'){this._authToken={token:token};return;}
this._authToken=token;},onRetry:function(req){_resend.apply(requestObj,arguments);},getAuthenticationHeaders:function(){if(!this._authToken)return{}
return{'Authorization':'Bearer '+this._authToken.token}},getParamsForWrite:function(){if(!this._authToken)return{}
return{access_token:this._authToken.token}},_authFailed:function(req,xhr){return(xhr.status==401||xhr.status==403)},_addRetryHandler:function(req){var self=this,times=1,errFunc=req.error;if(typeof req._retries=='undefined'||req._retries==null){req._retries=times;}else{req._retries--;}
var handler=function(xhr,textStatus,err){req.error=errFunc;if(textStatus=='error'&&self._authFailed(req,xhr)){self.setAuthToken(null);if(req.context===req){delete req.context;}
if(req._retries>0){_log('oauth2 retry:',req);return _resend.call(requestObj,req);}}
if(typeof errFunc==='function'){return errFunc.apply(this,arguments);}}
req.error=handler;},beforeSend:function(xhr,settings){var self=this;if(!self._authToken){yam.setTimeout(function(){self._getAuthToken(settings);},10);return false;}
if(self._authToken){self._addRetryHandler(settings);}
yam.request.util.addAuthenticationParams(settings,xhr,self,self._networkId);}},_authenticator,_beforeSend=function(xhr,settings){var util=yam.request.util;if(util.isPOST(settings)&&util.isURLEncoded(settings)){if(typeof this.getParamsForWrite==='function'){util.addData(settings,this.getParamsForWrite(this._networkId));}}};basicAuthenticator._beforeSend=_beforeSend;oAuth2Authenticator._beforeSend=_beforeSend;var _RequestHandle=function(){this.id=_seeds++;this._isCancelled=false;}
_RequestHandle.prototype.isCancelled=function(){return this._isCancelled;}
_RequestHandle.prototype.cancel=function(){if(this._isCancelled){return;}
this._isCancelled=true;try{if(this.xhr&&this.xhr.abort){this.xhr.abort();}}catch(e){}
if(this.category){_removeHandle(this);}}
_RequestHandle.prototype.abort=_RequestHandle.prototype.cancel;var _log=function(){if(DEBUG&&yam.debug){yam.log.apply(yam,arguments);}},_updateConfig=function(){var configKeys=yam._.keys(_config),yam_config=yam.config(),key;for(var i=0;i<configKeys.length;i++){key=configKeys[i];if(yam_config[key]!==undefined){_config[key]=yam_config[key];}}},_getRequester=function(){return _requester;},_setRequester=function(r){return _requester=r;},_getAuthenticator=function(req){var authenticator=_authenticator;if(req&&'auth'in req){if(req.auth===false){authenticator=null;}
if(req.auth&&typeof req.auth==='object'){authenticator=req.auth;}
if(typeof req.auth==='string'){switch(req.auth){case'oauth2':authenticator=oAuth2Authenticator;break;default:break;}}}
return authenticator;},_setAuthenticator=function(a){if(typeof a==='string'){_authenticator=_getAuthenticator({auth:a});}else{_authenticator=a;}
return _authenticator;},_init=function(){yam.require('yam.util');yam.require('yam.promise');_updateConfig();_initialized=true;_initializer=_getInitializerReference();var done=function(){_initializer.satisfy('init');}
_initializeDeps();if(typeof _requester.init==='function'){_requester.init(done);}else{done();}},_ensureInit=function(callback){if(!_initialized){_init();}
if(typeof callback=='function'){_initializer.then(callback);}},_getInitializerReference=function(){return yam.promise.when('init').then(yam.bind(yam.request,'afterInit'));},_initializeDeps=function(){if(!_requester){if(_config.xdrHostname){_setRequester(xDomainRequester);}else{_setRequester(basicRequester);}}
_setAuthenticator(basicAuthenticator);if(_config.authMethod){switch(_config.authMethod){case'oauth2':_setAuthenticator(oAuth2Authenticator);break;default:break;}}},_normalizeURL=function(url){var re=/\.{2,}(\/|$)/g;if(re.test(url)){var o=yam.uri.parse(url);o.directory=yam.trim(o.directory).replace(re,'');o.file=yam.trim(o.file).replace(re,'');url=yam.uri.stringify(o);}
return url;},_normalizeRequest=function(req){var newReq=yam.mixin({dataType:'json'},req);newReq.url=_normalizeURL(newReq.url);if(newReq.method){newReq.type=newReq.method;}else{newReq.type=newReq.type||'GET';newReq.method=newReq.type;}
var complete=req.complete;newReq.complete=function(){var xhr=arguments[0];if(newReq.async===true||typeof async=='undefined'){if(typeof xhr!='undefined'){if(typeof xhr.onreadystatechange!='unknown'){xhr.onreadystatechange=null;}
if(typeof xhr.abort!='unknown'){xhr.abort=null;}
xhr=null;}}
if(typeof complete=='function'){complete.apply(this,arguments);}}
if(newReq.method&&newReq.method.toLowerCase()=='get'){var bust=yam.clock.now().getTime()+Math.floor(yam.random()*255);yam.request.util.addData(newReq,{_:bust});}
if(_requester!==xDomainRequester){var authenticator=_getAuthenticator(newReq);if(authenticator&&typeof authenticator._beforeSend==='function'){authenticator._beforeSend(req.xhr,newReq);}}
var beforeSend=req.beforeSend;newReq.beforeSend=function(xhr){var go=true;if(_beforeSendHandler.apply(this,arguments)===false){return false;}
if(typeof beforeSend==='function'){if(beforeSend.apply(this,arguments)===false){return false;}}
return true;}
return newReq;},_beforeSendHandler=function(xhr){var authenticator=_getAuthenticator(this,xhr),ret;if(authenticator&&typeof authenticator.beforeSend==='function'){ret=authenticator.beforeSend(xhr,this);}
return ret;},_send=function(req){req=_normalizeRequest(req);var args=Array.prototype.slice.call(arguments,1);args.unshift(req);var handle=_createHandle(req);_ensureInit(function(){_log('sending:',args,'with requester:',_requester,'authenticator:',_getAuthenticator(req));handle.xhr=_requester.send.apply(_requester,args);});return handle;},_resend=function(){var args=Array.prototype.slice.call(arguments);_log('resending:',args,'with requester:',_requester,'authenticator:',_getAuthenticator(args[0]));_requester.send.apply(_requester,args);},_wrapHandleFunc=function(handle,options,evt){var func=options[evt];var wrapper=function(){if(this.category){_removeHandle(this);}
if(this._isCancelled){return;}
if(func){return func.apply(options,arguments);}}
return yam.bind(handle,wrapper);},_createHandle=function(req){var handle=new _RequestHandle(req);req.success=_wrapHandleFunc(handle,req,'success');req.error=_wrapHandleFunc(handle,req,'error');req.complete=_wrapHandleFunc(handle,req,'complete');if(req.category){handle.category=req.category;_addHandle(handle);}
return handle;},_getRequestHandles=function(){return _handles;},_getHandles=function(category){var handles;if(category=='*'){handles={};for(var category in _handles){yam.mixin(handles,_handles[category]);}}else{handles=_handles[category];}
return handles||{};},_addHandle=function(handle){var category=handle.category;_handles[category]=_handles[category]||{};_handles[category][handle.id]=handle;},_removeHandle=function(handle){var category=handle.category;if(_handles[category]&&_handles[category][handle.id]){_handles[category][handle.id]=null;delete _handles[category][handle.id];}
if(yam._.isEmpty(_handles[category])){_handles[category]=null;delete _handles[category];}},_cancel=function(category){var handles=_getHandles(category);for(var id in handles){handles[id].cancel();}}
this.getRequester=_getRequester;this.setRequester=_setRequester;this.getAuthenticator=_getAuthenticator;this.setAuthenticator=_setAuthenticator;this._getRequestHandles=_getRequestHandles;this.cancel=_cancel;this.afterInit=function(){};yam.request=function(){return _send.apply(requestObj,arguments);};yam.mixin(yam.request,this);yam._getRequestHandles=yam.request._getRequestHandles;yam.cancel=yam.request.cancel;yam.request.util={isPOST:function(req){var type=req.type.toLowerCase();return type!='get'&&type!='head';},isURLEncoded:function(req){return typeof req.contentType==='undefined'||req.contentType==='application/x-www-form-urlencoded';},addData:function(req,newData){if(!newData){return;}
req.data=req.data||'';if(typeof req.data==='object'){if(typeof newData==='string'){newData=yam.objectify(newData);}
req.data=yam.mixin(req.data,newData);}else{if(typeof newData==='object'){newData=yam.paramify(newData,{includeEmpty:true});}
req.data+='&'+newData;}},addAuthenticationParams:function(req,xhr,authenticator,networkId){var header,authHeaders,params;if(typeof authenticator.getAuthenticationHeaders==='function'){var authHeaders=authenticator.getAuthenticationHeaders(networkId);for(var header in authHeaders){xhr.setRequestHeader(header,authHeaders[header]);}}
if(typeof authenticator.getParamsForWrite==='function'){if(this.isPOST(req)&&this.isURLEncoded(req)){params=authenticator.getParamsForWrite(networkId);this.addData(req,params);}}}}})(yam);yam.ns('yam.util');yam.util.swf=new function(){var _invisibleStyle={border:'0px',width:'0px',height:'0px',position:'absolute',top:'-1px',left:'-1px'};this.create=function(id,url,vars){var html='',swfURL=url+'?rnd='+(new Date()).getTime(),swfID=id,span=document.createElement('span'),style=_invisibleStyle,flashVars=typeof vars=='string'?vars:yam.paramify(vars);span.id=swfID+'-container';for(var p in style){span.style[p]=style[p];}
document.body.appendChild(span);if(document.all){html='<object type="application/x-shockwave-flash"'+'    width="1" height="1" id="'+swfID+'" name="'+swfID+'">'+'  <param name="movie" value="'+swfURL+'">'+'  <param name="quality" value="high">'+'  <param name="bgcolor" value="#ffffff">'+'  <param name="allowScriptAccess" value="always">'+'  <param name="FlashVars" value="'+flashVars+'">'+'</object>';}
else{html='<embed id="'+swfID+'" name="'+swfID+'" height="1" width="1"'+'    name="'+swfID+'" src="'+swfURL+'"'+'    allowScriptAccess="always"'+'    FlashVars="'+flashVars+'"'+'    type="application/x-shockwave-flash"/>';}
span.innerHTML=html;};}();yam.ns('yam.xwin');yam.xwin._log=function(){var DEBUG=false;arguments[0]+=' '+yam.xwin.id;if(DEBUG&&yam.debug){yam.log.apply(yam,arguments);}};yam.mixin(yam.xwin,new function(){var self=yam.xwin;var UUID_CHARS='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),IFRAME_TIMEOUT=5000,FLASH_ONLY=false;var _config={swfURL:'/flash/xwin.swf'},_initialized=false,_transportTypeTypes={POST_MESSAGE:'postMessage',LOCAL_CONNECTION:'localConnection',AIR:'air',NIX:'nix'},_transportType=undefined,_nixInitTimeoutId,_flashBridge,_flashCreationTimeoutId,_invisibleStyle={border:'0px',width:'0px',height:'0px',position:'absolute',top:'-1px',left:'-1px'},_channels={},_initStates={CONFIGURED:1,INITIALIZING:2,INITIALIZED:3};this.initializer=null;this.transport=null;this._initState=undefined;this._initCallbacks=[];this.id=undefined;this.parentId=undefined;this.children={};var _log=yam.xwin._log,_getInitializerReference=function(){return this.initializer||yam.promise.when('init').then(yam.bind(this,'afterInit'));},_completeInitialization=function(){_config=yam.config(_config);_setIdFromXWinData.call(this);_log('Initializing X-win');_setUpMessageBus.call(this);},_throwUnknownTransport=function(message){throw new Error('Unknown Transport: '+message);},_resolveTransportType=function(){if(FLASH_ONLY){return _transportTypeTypes.LOCAL_CONNECTION;}
if(!window.postMessage){if(document.all){return _transportTypeTypes.LOCAL_CONNECTION;}
if(typeof navigator!=='undefined'&&navigator.userAgent.indexOf('AdobeAIR')>-1){return _transportTypeTypes.AIR;}
_throwUnknownTransport('Could not resolve transport type');}
return _transportTypeTypes.POST_MESSAGE;}
/*!
  // From Math.uuid.js, http://www.broofa.com/Tools/Math.uuid.js
  // Robert Kieffer (robert@broofa.com), MIT license
  */
,_uuid=function(){var chars=UUID_CHARS,uuid=[],rnd=0,r;for(var i=0;i<36;i++){if(i==8||i==13||i==18||i==23){uuid[i]='-';}else{if(rnd<=0x02){rnd=0x3000000+(Math.random()*0x1000000)|0;}
r=rnd&0xf;rnd=rnd>>4;uuid[i]=chars[(i==19)?(r&0x3)|0x8:r];}}
return uuid.join('');},_parseData=function(message){var data=message.data||message;if(typeof data=='string'){try{data=yam.json.parse(data);}
catch(e){throw new Error('Could not parse message JSON data for xwin message: '+e.message);}}
return data;},_isLoadedChildWindow=function(key){return!!(self.children[key]&&self.children[key].loaded);},_defaultErrorHandler=function(obj){_destroyFrame(obj.windowObj);_log('Could not register iframe "'+obj.domNodeId+'" with X-win messaging.');},_setIdFromXWinData=function(){var match,qs,data,arr,id;qs=yam.uri.parse(document.location.href).queryKey;data=qs['xwin-data'];if(!data){match=window.name.match(/^(\S+:\S+)$/);data=match&&match[1];}
if(data){arr=data.split(':');if(arr.length>1){this.parentId=arr[0];id=arr[1];}}
else{id=_uuid()+'-index';}
if(id){this.id=id;}
else{throw new Error('Could not assign X-window ID');}},_getChildIdFromPair=function(str){var chId=str.indexOf(':')>-1?str.split(':')[1]:str;return chId;},_destroyFrame=function(win){win.src='about:blank';if(win.parentNode){win.parentNode.removeChild(win);}},_cleanup=function(){var children=yam.xwin.children,win;for(var p in children){_destroyFrame(children[p].windowObj);}
if(this.transport&&typeof this.transport.cleanup=='function'){this.transport.cleanup();}},_setUpMessageBus=function(){var self=this,ctor=yam.xwin.transports[yam.capitalize(_transportType)],receiver=function(){return self.receiveMessage.apply(self,arguments);};if(!ctor){_throwUnknownTransport('Cannot setup message bus');}
else{this.transport=new ctor(this,_config);}
yam.hook(this.transport,'ready',function(){_log('Transport called ready');_registerWithParentIfChild.call(self);});this.transport.init();},_registerWithParentIfChild=function(){var channel,data,msg;if(this.parentId){_log('Registering as child');data={method:'register',source:this.id};msg={channel:'meta',data:data,currentSourceWin:this.id,originalSourceWin:this.id,currentDestinationWin:this.parentId,finalDestinationWin:this.parentId};this.sendMessage(parent,msg);}
else{this.ready();}};this.init=function(options,callback){var opts=options||{};yam.require('yam.json');yam.require('yam.promise');yam.require('yam.xwin');if(_initialized){throw new Error("Do not init XWin twice.");}
_intialized=true;_config=yam.mixin(_config,opts);this.ensureInit(callback);};this.configure=this.init;this.ensureInit=function(callback){var initializer;if(typeof callback=='function'){initializer=_getInitializerReference.call(this);initializer.then(callback);if(!this.initializer){this.initializer=initializer;_completeInitialization.call(this);}}};this.ready=function(){setTimeout(function(){if(self.initializer){self.initializer.satisfy('init');}},0);};this.afterInit=function(){_log('Initialized X-win window');};this.sendMessage=function(targetWin,message){_log('Called sendMessage',message);this.transport.send(targetWin,message);};this.receiveMessage=function(message){_log('Called receiveMessage',message);var origin=message.origin,data,channel,msg,sourcWin,destinationWin,method,childWin;msg=_parseData(message);data=msg.data;method=data.method;if(msg.currentSourceWin==this.id){return;}
if(msg.channel!='meta'&&msg.currentSourceWin!=this.parentId&&!this.children[msg.currentSourceWin]){return;}
if(msg.channel=='meta'){childWin=this.children[msg.currentSourceWin];if(method=='register'&&childWin){childWin.loaded=true;clearTimeout(childWin.errorTimeoutId);childWin.success.call(window,childWin);data={method:'registered',source:this.id};msg={channel:'meta',data:data,currentSourceWin:this.id,originalSourceWin:this.id,currentDestinationWin:msg.currentSourceWin,finalDestinationWin:msg.currentSourceWin};this.sendMessage(childWin.windowObj,msg);}
else if(method=='registered'){this.ready();}}
else{this.publish(msg.channel,data,msg.finalDestinationWin,msg.currentSourceWin,msg.originalSourceWin);}};this.publish=function(channel,data,finalDestinationWin,currentSourceWin,originalSourceWin){var subscribers,subscriber,context,method,children,post,msg,broadcastHere,rebroadcast,createSubscriptionFunc=function(method,context,data){return function(){context[method].call(context,data);};};if(finalDestinationWin){if(finalDestinationWin==this.id){broadcastHere=true;rebroadcast=false;}
else{broadcastHere=false;rebroadcast=true;}}
else{broadcastHere=true;rebroadcast=true;}
if(broadcastHere){if(!_channels[channel]){_channels[channel]=[];}
subscribers=_channels[channel];for(var i=0,ii=subscribers.length;i<ii;i++){subscriber=subscribers[i];context=subscriber.context;method=subscriber.method;setTimeout(createSubscriptionFunc(method,context,data),0);}}
if(rebroadcast){msg={channel:channel,data:data,currentSourceWin:this.id,originalSourceWin:originalSourceWin||this.id,currentDestinationWin:undefined,finalDestinationWin:finalDestinationWin||null};if(this.parentId&&(this.parentId!=currentSourceWin)){msg.currentDestinationWin=this.parentId;_log('Re-broadcast sendMessage to parent',msg);this.sendMessage(parent,msg);}
children=this.children;for(var p in children){if(p!=currentSourceWin&&_isLoadedChildWindow(p)){msg.currentDestinationWin=p;_log('Re-broadcast sendMessage to child',msg);this.sendMessage(children[p].windowObj,msg);}}}};this.subscribe=function(channel,context,method){if(!_channels[channel]){_channels[channel]=[];}
_channels[channel].push({context:context,method:method});};this.unsubscribe=function(channel,context,method){var subscribers,subscriber;if(!_channels[channel]){return;}
subscribers=_channels[channel];for(var i=subscribers.length-1,ii=-1;i>ii;i--){subscriber=subscribers[i];if(context===subscriber.context&&method===subscriber.method){subscribers.splice(i,1);break;}}};this.frame=function(options){options=options||{};var opts={url:options.url,id:options.id,name:options.name,style:options.style||_invisibleStyle,append:typeof options.append!='undefined'?options.append:true,success:options.success||function(){},error:options.error||_defaultErrorHandler,timeout:options.timeout||IFRAME_TIMEOUT};var fr=document.createElement('iframe'),uuidPair,childWinObj,bridge,url=opts.url,style=opts.style,append=opts.append,success=opts.success,error=opts.error,timeout=opts.timeout;uuidPair=this.generateUUIDParameter();fr.id=opts.id;fr.name=opts.name||fr.id;fr.frameBorder='none';childWinObj=this.createChildXWinObject(uuidPair,fr,success);childWinObj.errorTimeoutId=setTimeout(function(){error(childWinObj);delete self.children[childWinObj.id];},timeout);for(var p in style){fr.style[p]=style[p];}
fr.src='javascript://';if(append){document.body.appendChild(fr);}
url=this.createXWinURL(url,uuidPair)
fr.src=url;return fr;};this.destroyFrame=function(win){var id=this.getChildIdForFrame(win);if(id){this.removeChild(id);}
_destroyFrame(win);};this.generateUUIDParameter=function(){return this.id+':'+_uuid();};this.createXWinURL=function(url,uuidPair){var parsedUrl=yam.uri.parse(url);parsedUrl.queryKey['xwin-data']=uuidPair;return yam.uri.stringify(parsedUrl);};this.createChildXWinObject=function(uuidPair,frame,success){if(typeof this.transport.setUpChildMessagBus=='function'){this.transport.setUpChildMessageBus(frame);}
childWinObj={domNodeId:frame.id,windowObj:frame,loaded:false,success:success||function(){}};this.addChild(uuidPair,childWinObj);return childWinObj;};this.addChild=function(id,obj){var chId=_getChildIdFromPair(id);obj.id=chId;this.children[chId]=obj;};this.removeChild=function(id){var chId=_getChildIdFromPair(id);delete this.children[chId];};this.getChildForId=function(id){var child=this.children[id];return child&&child.windowObj;};this.getChildIdForFrame=function(frameElem){var pair=frameElem.name;if(!pair){return null;}
var chId=_getChildIdFromPair(pair);if(this.children[chId]){return chId;}};if(window.addEventListener){window.addEventListener('onbeforeunload',function(){_cleanup.call(self);},false);}
else if(window.attachEvent){window.attachEvent('onunload',function(){_cleanup.call(self);});}
_transportType=_resolveTransportType();}());yam.xwin.transports=new(function(){var FLASH_TIMEOUT=30000
var _log=yam.xwin._log;var TransportBase={ready:function(){},cleanup:function(){}};this.PostMessage=function(ns,cfg){var _config=cfg;this.init=function(){this.setUpMessageBus();this.ready();};this.setUpMessageBus=function(){var receiver=function(){return ns.receiveMessage.apply(ns,arguments);};if(window.addEventListener){window.addEventListener('message',receiver,false);}
else if(window.attachEvent){window.attachEvent('onmessage',receiver);}};this.send=function(targetWin,message){message=yam.$.extend(true,{},message);var msg=yam.json.stringify(message),contextWin;if(targetWin.postMessage){contextWin=targetWin;}
else if(targetWin.contentWindow&&targetWin.contentWindow.postMessage){contextWin=targetWin.contentWindow;}
if(contextWin){contextWin.postMessage(msg,'*');}
else{throw new Error('No postMessage interface found.');}};};this.LocalConnection=function(ns,cfg){var _config=cfg,_flashCreationTimeoutId,_flashBridge;this.init=function(){this.setUpMessageBus();};this.setUpMessageBus=function(){_log('Creating X-win flash bridge');_flashCreationTimeoutId=setTimeout(function(){},FLASH_TIMEOUT);var swfURL=_config.swfURL,swfID='xwinflash',flashVars,vers;if(swfURL.indexOf('http://')!==0){swfURL=_config.cdnAssetHost+swfURL;}
vers=swfURL.indexOf('?')>-1?'&':'?';vers+='v='+_config.version;swfURL+=vers;flashVars='domain='+encodeURIComponent(document.domain)+'&id='+ns.id;yam.xwin.swf.create(swfID,swfURL,flashVars);};this.send=function(targetWin,message){var msg=yam.json.stringify(message),destinationId=message.currentDestinationWin;if(_flashBridge&&typeof _flashBridge.sendMessage=='function'){_flashBridge.sendMessage(destinationId,msg);}};this.receive=function(message){ns.receiveMessage(decodeURIComponent(message));};this.bridgeReady=function(){_flashBridge=window.xwinflash||document.getElementById('xwinflash');clearTimeout(_flashCreationTimeoutId);_log('X-win flash bridge ready');this.ready();};};this.Air=function(ns,cfg){var _config=cfg;this.init=function(receiver){this.setUpParentMessageBus();this.ready();};this.setUpParentMessageBus=function(){var receiver=function(){return ns.receiveMessage.apply(ns,arguments);};if(ns.parentId){window.childSandboxBridge={sendChildMessage:receiver}}};this.setUpChildMessageBus=function(frame){var parentBridge={sendParentMessage:function(){ns.receiveMessage.apply(ns,arguments);}};frame.ondominitialize=function(evt){frame.contentWindow.parentSandboxBridge=parentBridge;};};this.send=function(targetWin,message){var msg=yam.json.stringify(message),bridge;if(targetWin==parent){bridge=window.parentSandboxBridge;if(bridge){bridge.sendParentMessage(msg);}else{console.log('yam.xwin: could not find parentSandboxBridge for message: ',msg);}}
else{bridge=targetWin&&targetWin.contentWindow&&targetWin.contentWindow.childSandboxBridge;if(bridge){bridge.sendChildMessage(msg);}else{console.log('yam.xwin: could not find childSandboxBridge for message: ',msg);}}};};for(var p in this){this[p].prototype=TransportBase;}})();yam.xwin.swf=new function(){var _invisibleStyle={border:'0px',width:'0px',height:'0px',position:'absolute',top:'-1px',left:'-1px'};this.create=function(id,url,vars){var html='',swfURL=url,swfID=id,span=document.createElement('span'),style=_invisibleStyle,flashVars=typeof vars=='string'?vars:yam.paramify(vars);span.id=swfID+'-container';for(var p in style){span.style[p]=style[p];}
document.body.appendChild(span);if(document.all){html='<object type="application/x-shockwave-flash"'+'    width="1" height="1" id="'+swfID+'" name="'+swfID+'">'+'  <param name="movie" value="'+swfURL+'">'+'  <param name="quality" value="high">'+'  <param name="bgcolor" value="#ffffff">'+'  <param name="allowScriptAccess" value="always">'+'  <param name="FlashVars" value="'+flashVars+'">'+'</object>';}
else{html='<embed id="'+swfID+'" name="'+swfID+'" height="1" width="1"'+'    name="'+swfID+'" src="'+swfURL+'"'+'    allowScriptAccess="always"'+'    FlashVars="'+flashVars+'"'+'    type="application/x-shockwave-flash"/>';}
span.innerHTML=html;};}();yam.ns('yam.xdr');yam.xdr._log=function(){var DEBUG=false;if(DEBUG){yam.log.apply(yam,arguments);}};yam.mixin(yam.xdr,new function(){var self=yam.xdr;var PROXY_TIMEOUT=30000;var _config={hostname:'https://www.yammer.com',proxyURL:'/yconnect/proxy'},_initialized=false,_iframe,_iframeXWinId,_reqQueue=[],_inFlightRegistry={},_reqId=0,_req,_reqQueueLocked=false,_messageDispatch={xdrInit:function(data){this.initializer.satisfy('init');_iframeXWinId=yam.xwin.getChildIdForFrame(_iframe);},response:function(data){var resp=data.responseData,req=_inFlightRegistry[resp.id],fakeXHR=new yam.xdr.FakeXHR(resp.status,resp.statusText),data;fakeXHR.responseText=resp.statusText;fakeXHR.headers=req.headers;if(resp.success){data=_parseData(req.dataType,resp.responseText);req.success(data,resp.textStatus,fakeXHR);}
else{req.error(fakeXHR,resp.textStatus);}
if(typeof req.complete=='function'){req.complete(fakeXHR,resp.textStatus);}}};this.initializer=undefined;var _log=yam.xdr._log,_defaultErrorHandler=function(obj){var stat,msg='Error';try{stat=obj.status;if(stat){msg+=' '+stat;}
msg+=': '+obj.statusText;alert(msg);}
catch(e){alert('Unkown error.');}},_getInitializerReference=function(){return self.initializer||yam.promise.when('init').then(yam.bind(self,'afterInit'));},_completeInitialization=function(){yam.xwin.ensureInit(function(){_iframe=yam.xwin.frame({id:'yam-xdr-proxy',name:'yam-xdr-proxy',url:_config.hostname+_config.proxyURL});yam.xwin.subscribe('yam.xdr.up',self,'receiveMessage');});},_parseData=function(dataType,data){switch(dataType){case'json':return yam.json.parse(data);case'html':case'text':return data;default:throw new Error(dataType+' is not a valid data type.');}},_formatData=function(req){var paramifiedData;if(req.method.toLowerCase()!='get'){req.data=req.data||{};if(typeof req.data!='string'){switch(req.contentType){case'application/x-www-form-urlencoded':req.data=jQuery.param(req.data);break;case'application/json':case'text/javascript':req.data=yam.json.stringify(req.data);break;default:throw new Error('Unknown content type, I don\'t know how to encode data object.');}}}
return req;},_normalizeRequest=function(request){var req={url:request.url,method:request.method||request.type||'get',type:request.method||request.type||'get',auth:typeof request.auth=='undefined'?null:request.auth,success:request.success||function(){},error:request.error||_defaultErrorHandler,complete:request.complete,contentType:typeof request.contentType=='undefined'?'application/x-www-form-urlencoded':request.contentType,dataType:typeof request.dataType=='undefined'?'json':request.dataType,data:request.data,beforeSend:request.beforeSend,_retries:typeof request._retries=='undefined'?null:request._retries};return req;};this.ensureInit=function(callback){var initializer;if(typeof callback=='function'){initializer=_getInitializerReference();initializer.then(callback);if(!this.initializer){this.initializer=initializer;_completeInitialization();}}};this.init=function(options,callback){var opts=options||{};yam.require('yam.json');yam.require('yam.promise');yam.require('yam.xwin');if(_initialized){throw new Error("Do not init XDR twice.");}
_initialized=true;yam.mixin(_config,opts);this.ensureInit(callback);};this.configure=this.init;this.afterInit=function(){};this.receiveMessage=function(msg){var data=msg.data||msg,dispatchMethod;dispatchMethod=_messageDispatch[data.method];if(typeof dispatchMethod=='function'){dispatchMethod.call(this,data);}};this.ajax=function(request,xdrOpts){var req=_normalizeRequest(request),fakeXHR=new yam.xdr.FakeXHR();req.type=req.method;_formatData(req);if(req.beforeSend){if(req.beforeSend.call(req,fakeXHR)===false){return fakeXHR;}}
req.headers=fakeXHR.headers;if(xdrOpts){xdr=yam.json.stringify(xdrOpts);req.headers['X-XDR-Data']=xdr;}
req.id=_reqId++;_inFlightRegistry[req.id]=req;_log('X-domain request =>',req);yam.xwin.publish('yam.xdr.down',{method:'request',requestData:req},_iframeXWinId);return fakeXHR;};}());yam.xdr.FakeXHR=function(stat,statText){this.headers={};this.status=stat;this.statusText=statText;};yam.xdr.FakeXHR.prototype=new function(){this.setRequestHeader=function(key,val){this.headers[key]=val;};this.getAllResponseHeaders=function(){return{};};}();yam.xdrProxy=new function(){var _log=yam.xdr._log,_config={ymodulesHostname:'https://ymodules.yammer.com'},_apiPrefix;var _hasAuthToken=function(req,parsedUrl){var headerRe=/^\s*Bearer\s+.+/;if(req.headers&&req.headers['Authorization']&&headerRe.test(req.headers['Authorization'])){return true;}
var data=parsedUrl.queryKey;if(req.method.toLowerCase()==='get'&&req.data){if(typeof req.data==='string'){data=yam.objectify(req.data);}else{data=req.data}
data=yam.mixin(data,parsedUrl.queryKey);}
if(data.access_token){return true;}
return false;},_getAPIPrefix=function(){if(!_apiPrefix){_apiPrefix=yam.uri.parse(yam.uri.api()).path;}
return _apiPrefix;},_isValidRequest=function(req,parsedUrl){var apiPrefix=_getAPIPrefix(),whiteList={api:apiPrefix,tokens:'/oauth2/access_token(\.(xml|json))?',logout:'/logout'},re;for(var key in whiteList){re=new RegExp('^'+whiteList[key]);if(re.test(parsedUrl.path)){return key;}}
return false;},_validateRequest=function(req){var errText,parsedUrl,urlType,hasToken,refObj;parsedUrl=yam.uri.parse(req.url);urlType=_isValidRequest(req,parsedUrl);if(urlType){hasToken=_hasAuthToken(req,parsedUrl);refObj=yam.uri.parse(document.referrer);if((refObj.protocol+'://'+refObj.authority)===_config.ymodulesHostname||urlType!=='api'){if(hasToken){errText='Unauthorized: token auth not supported for '+_config.ymodulesHostname;return{status:401,responseText:errText,statusText:errText}}}else if(!hasToken){errText='Unauthorized: no access token specified';return{status:401,responseText:errText,statusText:errText};}}else{errText='Forbidden: you do not have permission to access this resource';return{status:403,responseText:errText,statusText:errText};}
return;}
this.config=_config;this.request=function(msg){var req,successHandler,errorHandler,beforeSendHandler,errText,opts;if(msg.method!='request'){return;}
req=msg.requestData;beforeSendHandler=function(realXHR){var headers=req.headers;for(var p in headers){realXHR.setRequestHeader(p,headers[p]);}
realXHR.setRequestHeader('X-App-Referer',document.referrer);};successHandler=function(data,textStatus,obj){yam.xwin.publish('yam.xdr.up',{method:'response',responseData:{id:req.id,success:true,textStatus:'success',responseText:obj.responseText,status:obj.status,statusText:obj.statusText}},yam.xwin.parentId);};errorHandler=function(obj,textStatus){yam.xwin.publish('yam.xdr.up',{method:'response',responseData:{id:req.id,success:false,textStatus:'error',responseText:obj.responseText,status:obj.status,statusText:obj.statusText}},yam.xwin.parentId);};err=_validateRequest(req);if(err){return errorHandler(err);}
opts={type:req.method,url:req.url,method:req.method||req.type,type:req.method||req.type,auth:req.auth,data:req.data,async:true,contentType:req.contentType,dataType:req.dataType,beforeSend:beforeSendHandler,success:successHandler,error:errorHandler};yam.xwin.ensureInit(function(){yam.ajax(opts);});};}();yam.define('yam._','yam.request',function(_){yam.ns('yam.api');var defaultGetOptions={url:'',method:'GET',data:{},dataType:'json',contentType:'text/javascript'},defaultPostOptions={url:'',contentType:'application/x-www-form-urlencoded',method:'POST',data:{},dataType:'json'},defaultDeleteOptions={url:'',contentType:'application/x-www-form-urlencoded',method:'POST',data:{_method:'DELETE'},dataType:'text'};var createNormalResponse=function(callback){return function(response){var refs={}
_(response.references).each(function(x){refs[x.type]=refs[x.type]||{};refs[x.type][x.id]=x;})
_(response.messages).each(function(message){message.sender=refs.user[message.sender_id];message.thread=refs.thread[message.thread_id];if(message.group_id)
message.group=refs.group[message.group_id];if(message.replied_to_id)
message.replied_to=refs.user[message.replied_to_id];if(message.thread.topics){var _topics=[];_(message.thread.topics).each(function(x){_topics.push(refs.topic[x.id]);})
message.thread.topics=_topics;}})
if(callback)
callback(response);}}
var genericMethods={getUser:[{uri:'users/:id.json'},{id:'id'},defaultGetOptions],getUsers:[{uri:'users.json'},{},defaultGetOptions],getUsersWhoLikedMessage:[{uri:'users/liked_message/:id.json'},{id:'id'},defaultGetOptions],getUsersFollowing:[{uri:'users/following/:id.json'},{id:'id'},defaultGetOptions],getUsersFollowedBy:[{uri:'users/followed_by/:id.json'},{id:'id'},defaultGetOptions],getUsersInGroup:[{uri:'users/in_group/:id.json'},{id:'id'},defaultGetOptions],getUsersFollowingTopic:[{uri:'users/following_topic/:id.json'},{id:'id'},defaultGetOptions],getUsersByIds:[{uri:'users/by_user_ids.json'},{id:'id'},defaultGetOptions],getGroup:[{uri:'groups/:id.json'},{id:'id'},defaultGetOptions],joinGroup:[{uri:'group_memberships.json',dataType:'text'},{},defaultPostOptions],leaveGroup:[{uri:'group_memberships.json',method:'DELETE',dataType:'text',data:{_method:"DELETE"}},{},defaultPostOptions],denyGroupInvitation:[{uri:'invitations/:id.json',method:'DELETE',dataType:'text',data:{_method:"DELETE"}},{id:'group_id'},defaultPostOptions],getNetworks:[{uri:'networks/current.json',data:{exclude_own_messages_from_unseen:true}},{},defaultGetOptions],getSubscriptions:[{uri:'subscriptions.json'},{},defaultGetOptions],getSubscriptionToTarget:[{uri:'subscriptions/to_target'},{},defaultGetOptions],getAutocomplete:[{uri:'autocomplete.json'},{},defaultGetOptions],getSubscriptionToUser:[{uri:'subscriptions/to_user/:id.json'},{id:'userId'},defaultGetOptions],postMessage:[{uri:'messages'},{},defaultPostOptions],sendYmoduleForm:[{uri:'ymodules/:id/inline',method:'POST',dataType:'text'},{id:'id'},defaultPostOptions],getThread:[{uri:'messages/in_thread/:id.json'},{id:'threadId'},defaultGetOptions],deleteMessage:[{uri:'messages/:id.json'},{},defaultDeleteOptions],likeMessage:[{uri:'messages/liked_by/current.json',method:'POST',dataType:'text'},{},defaultPostOptions],unlikeMessage:[{uri:'messages/liked_by/current.json',method:'DELETE',dataType:'text',data:{_method:"DELETE"}},{},defaultPostOptions],bookmarkMessage:[{uri:'messages/favorites_of/current.json',method:'POST',dataType:'text'},{},defaultPostOptions],unbookmarkMessage:[{uri:'messages/favorites_of/current.json',method:'DELETE',dataType:'text',data:{_method:"DELETE"}},{},defaultPostOptions],getActivities:[{uri:'/api/v1/streams/activities.json'},{},defaultGetOptions],getUserSuggestions:[{uri:'suggestions.json',data:{limit:21}},{},defaultGetOptions],setThreadLastSeen:[{uri:'messages/last_seen_in_thread.json'},{},defaultPostOptions]}
var parseURI=function(options){var uri=yam.uri.api(options['uri']);return uri.replace(/:([a-zA-Z]+)/g,function(match,ref){var x=options.data[ref]
delete options.data[ref]
return x;});}
_.each(genericMethods,function(xargs,method){yam.api[method]=function(){var ajaxParams=xargs[0],dataParams=xargs[1],defaults=xargs[2]||{},extracted=yam.api.extractOptions(arguments),options=yam.mixin({},defaults,ajaxParams,extracted,true);_(dataParams).each(function(v,k){if(v!==k){options.data[k]=options.data[v];delete options.data[v];}});options.url=parseURI(options);delete options.uri;if(options.as){options.success=options.as(options.success)}
return yam.request(options);}})
var _feedPostfixMap={all:'.json',sent:'/sent.json',received:'/received.json',following:'/following.json',tagged_with:'/tagged_with/:id.json',favorites_of:'/favorites_of/:id.json',attachments:'/following/attachments/:id.json',by_id:'/by_id/:id.json',from_bot:'/from_bot/:id.json',like:'/liked_by.json',bookmark:'/favorites_of.json',followed_bots:'/followed_bots.json',bots:'/from_bot.json','private':'/private.json'};var feedsWithAttachments=['in_group','about_topic','from_user','in_thread','from_bot'];for(var i=0,ii=feedsWithAttachments.length;i<ii;i++){var type=feedsWithAttachments[i];_feedPostfixMap[type]='/'+type+'/:id.json';_feedPostfixMap[type+"_attachments"]='/'+type+'/:id/attachments/:appId.json';}
yam.api.getMessages=function(){var options=yam.mixin({},defaultGetOptions,yam.api.extractOptions(arguments)),type=options.data.type||'all',id=options.data.id,appId=options.data.appId,postfix=_feedPostfixMap[type],uri='messages'+postfix;if(!options.url){options.url=id?parseURI(yam.mixin({uri:uri,id:id,appId:appId},options),{uri:uri,id:'id',appId:'appId'}):yam.uri.api(uri);}
delete options.data['type'];delete options.data['id'];delete options.data['appId'];options.as=options.as||createNormalResponse
options.success=options.as(options.success)
return yam.request(options);}
yam.api.getCurrentUser=function(){var defaultData={with_prefs:true,include_group_memberships:true,with_attachments:true,include_followed_users:false};var options=yam.mixin({data:defaultData},defaultGetOptions,yam.api.extractOptions(arguments),true);for(var prop in options.data){if(options.data[prop]===false){delete options.data[prop];}}
options.url=yam.uri.api('users/current.json');options.success=options.as?options.as(options.success):options.success
return yam.request(options);}
yam.api.extractOptions=function(args){var opts={},optKeys;if(!args.length||args.length>4){throw new Error("Invalid argument list");}
if(args.length==1&&typeof args[0]!='function'){yam.mixin(opts,args[0],true);}
else{optKeys=['success','error','data','category'];for(var i=0,ii=args.length;i<ii;i++){opts[optKeys[i]]=args[i];}}
return opts;}});yam.ns('yam.platform');yam.mixin(yam.platform,new function(){var self=yam.platform;var DEBUG=true,API_REQUEST_TIMEOUT=5*1000,LOGOUT_URL='logout',OAUTH_TOKEN_URL='oauth2/access_token.json',OAUTH_DIALOG_URL='dialog/oauth';var _config,yamRequest=yam.request,_ajaxOptions={url:null,method:'GET',dataType:'json',timeout:API_REQUEST_TIMEOUT},_ajaxNoOverride=['xhr'],_initialized=false,_initializer,_messageBus,_oauthWin,_seeds=1;var _log=function(){if(DEBUG&&yam.debug){yam.log.apply(yam,arguments);}},_getInitializerReference=function(){return yam.promise.when('init').then(yam.bind(self,'afterInit'));},_ensureInit=function(callback){if(!_initialized){_config=yam.config();_init();}
if(typeof callback=='function'){_initializer.then(callback);}},_openOAuthWin=function(url){_closeOAuthWin();if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var oauthTargetName="oauthWin";_oauthWin=window.open("",oauthTargetName,'width=796,height=445,resizable=yes,status=yes,location=yes,toolbar=no');var link;if(!document.getElementById("hackOauthLink")){link=document.createElement('a');link.id="hackOauthLink";document.body.appendChild(link);}
else
link=document.getElementById("hackOauthLink");link.target=oauthTargetName;link.href=url;link.click();}
else
_oauthWin=window.open(url,'oauthWin','width=796,height=445,resizable=yes,status=yes,location=yes,toolbar=no');if(_oauthWin&&typeof _oauthWin.focus==='function'){_oauthWin.focus();}},_closeOAuthWin=function(){if(_oauthWin){_oauthWin.close();_oauthWin=null;}},_normalizeRequest=function(request){var req=yam.mixin({},request);if(!(/^https?:\/\//).test(req.url)&&req.url.indexOf('/')!==0){req.url=yam.uri.api(req.url);}
return req;},_messageBus=(function(){var events={};return{emit:function(name){var handler,args;if(events[name]){args=yam._.rest(arguments);for(var i=0,len=events[name].length;i<len;i++){handler=events[name][i];if(handler){handler.apply(this,args);}}}},on:function(name,handler){if(typeof handler==='function'){if(!events[name]){events[name]=[];}
events[name].push(handler);return true;}
return false;},once:function(name,handler){if(typeof handler==='function'){var wrapper=function(){this.remove(name,wrapper);if(handler){handler.apply(this,arguments);}}
return this.on(name,wrapper);}
return false;},remove:function(name,handler){if(events[name]){events[name]=yam._.without(events[name],handler);return true;}
return false;},receiveMessage:function(msg){if(msg&&msg.method){_messageBus.emit(msg.method,msg.data);}}}})(),_createAliasMethod=function(name){return function(){return self[name].apply(self,arguments);};};var _init=function(){yam.require('yam.promise');yam.require('yam.xwin');if(_initialized){throw new Error("Do not init platform twice.");}
_initialized=true;_initializer=_getInitializerReference();yam.$(function(){yam.xwin.ensureInit(function(){yam.xwin.subscribe('yam.platform.up',_messageBus,'receiveMessage');_initializer.satisfy('init');});});}
this.afterInit=function(){};this.getLoginStatus=function(callback){var reqData;_ensureInit(function(){reqData={client_id:_config.appId};yamRequest({url:yam.uri.join(yam.uri.base(),OAUTH_TOKEN_URL),data:reqData,auth:false,success:function(res){var authenticator=yamRequest.getAuthenticator();if(res.access_token){if(authenticator&&typeof authenticator.setAuthToken==='function'){authenticator.setAuthToken(res.access_token);res.authResponse=true;res.perms='';}else{_log('Could not set auth token');}}
if(typeof callback=='function'){return callback(res);}},error:function(xhr,errStatus,err){if(typeof callback=='function'){return callback({status:'notConnected',access_token:null,perms:''});}}});});}
this.login=function(callback,opts){_ensureInit(function(){var params={client_id:_config.appId,display:'popup'},network=opts&&opts.settings&&opts.settings.network&&!/^\s*\d+\s*$/.test(opts.settings.network)?opts.settings.network+'/':'',url=yam.uri.join(yam.uri.base(),network+OAUTH_DIALOG_URL+'?'+yam.paramify(params));_messageBus.once('login',function(res){var payload=res||{};_closeOAuthWin();if(res&&res.success&&res.access_token&&res.access_token.access_token){var authenticator=yam.request.getAuthenticator();if(authenticator&&typeof authenticator.setAuthToken==='function'){authenticator.setAuthToken(res.access_token.access_token);if(typeof callback==='function')
callback(res);return;}}
else if(typeof callback==='function'){return self.getLoginStatus(callback);}});_openOAuthWin(url);});}
this.logout=function(callback){var authenticator=yamRequest.getAuthenticator();if(authenticator){authenticator.setAuthToken(null);}
yamRequest({url:yam.uri.join(_config.baseURI,LOGOUT_URL),auth:false,dataType:'html',success:function(res){if(typeof callback==='function'){return callback(true);}},error:function(res){if(typeof callback==='function'){return callback(false);}}});}
this.request=function(req){req=_normalizeRequest(req);return yamRequest(req);}
this.ui=function(opts){}
yam.mixin(this.request,yam.request);for(var methodName in{getLoginStatus:1,login:1,logout:1}){yam[methodName]=_createAliasMethod(methodName);}}());yam.ns('yam.connect');yam.mixin(yam.connect,new(function(){this.loginButton=function(selector,callback){var config=yam.config(),target=yam.$(selector);yam.getLoginStatus(function(resp){if(resp.authResponse){callback(resp);}
else{target.append('<img src="'+config.cdnAssetHost+'/images/yammer_signin.png" / style="cursor: pointer;">');target.bind('click',function(e){yam.login(function(resp){callback(resp);});});}});};})());yam.ns('yam.app');yam.ns('yam.platform.connect');yam.mixin(yam.platform.connect,new(function(){var self=yam.platform.connect,_config,_opts,_user,_restClient,_streamClient,_yammerClient;var _getUser=function(){if(!yam.currentUser){_yammerClient.getCurrentUser(function(user){_user=user;yam.currentUser=_user;_createActivity();});}
else
_createActivity();};var _createActivity=function(){_yammerClient.createOpenGraphActivity({success:function(){yam.publish('/embed/action/'+_opts.buttonId,{});yam.$.cookie('yammer_embed_'+_opts.actionType+'_'+_opts.href,true);},error:function(){},data:{activity:{"action":_opts.actionType,"actor":{"name":yam.currentUser.full_name,"email":yam.currentUser.contact.email_addresses[0].address},"object":{"title":_opts.title,"type":_opts.type,"url":_opts.href,"image":_opts.image}}}})};this.ready=function(){this.initializer.satisfy('act');};this.act=function(target,opts){yam.require('yam.promise');_config=yam.config(),_target=target,_opts=opts
yam.app.serviceURIBase=_config.baseURI;_restClient=new yam.client.RestClient(_config.baseURI);_streamClient=new yam.client.StreamClient();_yammerClient=new yam.YammerClient(_restClient,_streamClient,{messageCache:null,threadCache:null,autoConnect:false});yam.yammerClient=_yammerClient;_getUser();};})());if (yam && yam.platform && yam.platform.bootstrap) { yam.platform.bootstrap.loaded({"pkg":"platform_base_packaged.js"}); }