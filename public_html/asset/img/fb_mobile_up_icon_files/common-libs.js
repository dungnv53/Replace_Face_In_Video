/*!
 * jQuery JavaScript Library v1.7
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 3 16:18:21 2011 -0400
 */
(function(bc,L){var au=bc.document,bw=bc.navigator,bn=bc.location;
var b=(function(){var bH=function(b3,b4){return new bH.fn.init(b3,b4,bF)
},bX=bc.jQuery,bJ=bc.$,bF,b1=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bP=/\S/,bL=/^\s+/,bG=/\s+$/,bK=/\d/,bC=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bQ=/^[\],:{}\s]*$/,bZ=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bS=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bM=/(?:^|:|,)(?:\s*\[)+/g,bA=/(webkit)[ \/]([\w.]+)/,bU=/(opera)(?:.*version)?[ \/]([\w.]+)/,bT=/(msie) ([\w.]+)/,bV=/(mozilla)(?:.*? rv:([\w.]+))?/,bD=/-([a-z]|[0-9])/ig,b2=/^-ms-/,bW=function(b3,b4){return(b4+"").toUpperCase()
},b0=bw.userAgent,bY,bE,e,bO=Object.prototype.toString,bI=Object.prototype.hasOwnProperty,bB=Array.prototype.push,bN=Array.prototype.slice,bR=String.prototype.trim,bx=Array.prototype.indexOf,bz={};
bH.fn=bH.prototype={constructor:bH,init:function(b3,b7,b6){var b5,b8,b4,b9;
if(!b3){return this
}if(b3.nodeType){this.context=this[0]=b3;
this.length=1;
return this
}if(b3==="body"&&!b7&&au.body){this.context=au;
this[0]=au.body;
this.selector=b3;
this.length=1;
return this
}if(typeof b3==="string"){if(b3.charAt(0)==="<"&&b3.charAt(b3.length-1)===">"&&b3.length>=3){b5=[null,b3,null]
}else{b5=b1.exec(b3)
}if(b5&&(b5[1]||!b7)){if(b5[1]){b7=b7 instanceof bH?b7[0]:b7;
b9=(b7?b7.ownerDocument||b7:au);
b4=bC.exec(b3);
if(b4){if(bH.isPlainObject(b7)){b3=[au.createElement(b4[1])];
bH.fn.attr.call(b3,b7,true)
}else{b3=[b9.createElement(b4[1])]
}}else{b4=bH.buildFragment([b5[1]],[b9]);
b3=(b4.cacheable?bH.clone(b4.fragment):b4.fragment).childNodes
}return bH.merge(this,b3)
}else{b8=au.getElementById(b5[2]);
if(b8&&b8.parentNode){if(b8.id!==b5[2]){return b6.find(b3)
}this.length=1;
this[0]=b8
}this.context=au;
this.selector=b3;
return this
}}else{if(!b7||b7.jquery){return(b7||b6).find(b3)
}else{return this.constructor(b7).find(b3)
}}}else{if(bH.isFunction(b3)){return b6.ready(b3)
}}if(b3.selector!==L){this.selector=b3.selector;
this.context=b3.context
}return bH.makeArray(b3,this)
},selector:"",jquery:"1.7",length:0,size:function(){return this.length
},toArray:function(){return bN.call(this,0)
},get:function(b3){return b3==null?this.toArray():(b3<0?this[this.length+b3]:this[b3])
},pushStack:function(b4,b6,b3){var b5=this.constructor();
if(bH.isArray(b4)){bB.apply(b5,b4)
}else{bH.merge(b5,b4)
}b5.prevObject=this;
b5.context=this.context;
if(b6==="find"){b5.selector=this.selector+(this.selector?" ":"")+b3
}else{if(b6){b5.selector=this.selector+"."+b6+"("+b3+")"
}}return b5
},each:function(b4,b3){return bH.each(this,b4,b3)
},ready:function(b3){bH.bindReady();
bE.add(b3);
return this
},eq:function(b3){return b3===-1?this.slice(b3):this.slice(b3,+b3+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(bN.apply(this,arguments),"slice",bN.call(arguments).join(","))
},map:function(b3){return this.pushStack(bH.map(this,function(b5,b4){return b3.call(b5,b4,b5)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:bB,sort:[].sort,splice:[].splice};
bH.fn.init.prototype=bH.fn;
bH.extend=bH.fn.extend=function(){var cc,b5,b3,b4,b9,ca,b8=arguments[0]||{},b7=1,b6=arguments.length,cb=false;
if(typeof b8==="boolean"){cb=b8;
b8=arguments[1]||{};
b7=2
}if(typeof b8!=="object"&&!bH.isFunction(b8)){b8={}
}if(b6===b7){b8=this;
--b7
}for(;
b7<b6;
b7++){if((cc=arguments[b7])!=null){for(b5 in cc){b3=b8[b5];
b4=cc[b5];
if(b8===b4){continue
}if(cb&&b4&&(bH.isPlainObject(b4)||(b9=bH.isArray(b4)))){if(b9){b9=false;
ca=b3&&bH.isArray(b3)?b3:[]
}else{ca=b3&&bH.isPlainObject(b3)?b3:{}
}b8[b5]=bH.extend(cb,ca,b4)
}else{if(b4!==L){b8[b5]=b4
}}}}}return b8
};
bH.extend({noConflict:function(b3){if(bc.$===bH){bc.$=bJ
}if(b3&&bc.jQuery===bH){bc.jQuery=bX
}return bH
},isReady:false,readyWait:1,holdReady:function(b3){if(b3){bH.readyWait++
}else{bH.ready(true)
}},ready:function(b3){if((b3===true&&!--bH.readyWait)||(b3!==true&&!bH.isReady)){if(!au.body){return setTimeout(bH.ready,1)
}bH.isReady=true;
if(b3!==true&&--bH.readyWait>0){return
}bE.fireWith(au,[bH]);
if(bH.fn.trigger){bH(au).trigger("ready").unbind("ready")
}}},bindReady:function(){if(bE){return
}bE=bH.Callbacks("once memory");
if(au.readyState==="complete"){return setTimeout(bH.ready,1)
}if(au.addEventListener){au.addEventListener("DOMContentLoaded",e,false);
bc.addEventListener("load",bH.ready,false)
}else{if(au.attachEvent){au.attachEvent("onreadystatechange",e);
bc.attachEvent("onload",bH.ready);
var b3=false;
try{b3=bc.frameElement==null
}catch(b4){}if(au.documentElement.doScroll&&b3){by()
}}}},isFunction:function(b3){return bH.type(b3)==="function"
},isArray:Array.isArray||function(b3){return bH.type(b3)==="array"
},isWindow:function(b3){return b3&&typeof b3==="object"&&"setInterval" in b3
},isNumeric:function(b3){return b3!=null&&bK.test(b3)&&!isNaN(b3)
},type:function(b3){return b3==null?String(b3):bz[bO.call(b3)]||"object"
},isPlainObject:function(b5){if(!b5||bH.type(b5)!=="object"||b5.nodeType||bH.isWindow(b5)){return false
}try{if(b5.constructor&&!bI.call(b5,"constructor")&&!bI.call(b5.constructor.prototype,"isPrototypeOf")){return false
}}catch(b4){return false
}var b3;
for(b3 in b5){}return b3===L||bI.call(b5,b3)
},isEmptyObject:function(b4){for(var b3 in b4){return false
}return true
},error:function(b3){throw b3
},parseJSON:function(b3){if(typeof b3!=="string"||!b3){return null
}b3=bH.trim(b3);
if(bc.JSON&&bc.JSON.parse){return bc.JSON.parse(b3)
}if(bQ.test(b3.replace(bZ,"@").replace(bS,"]").replace(bM,""))){return(new Function("return "+b3))()
}bH.error("Invalid JSON: "+b3)
},parseXML:function(b5){var b3,b4;
try{if(bc.DOMParser){b4=new DOMParser();
b3=b4.parseFromString(b5,"text/xml")
}else{b3=new ActiveXObject("Microsoft.XMLDOM");
b3.async="false";
b3.loadXML(b5)
}}catch(b6){b3=L
}if(!b3||!b3.documentElement||b3.getElementsByTagName("parsererror").length){bH.error("Invalid XML: "+b5)
}return b3
},noop:function(){},globalEval:function(b3){if(b3&&bP.test(b3)){(bc.execScript||function(b4){bc["eval"].call(bc,b4)
})(b3)
}},camelCase:function(b3){return b3.replace(b2,"ms-").replace(bD,bW)
},nodeName:function(b4,b3){return b4.nodeName&&b4.nodeName.toUpperCase()===b3.toUpperCase()
},each:function(b6,b9,b5){var b4,b7=0,b8=b6.length,b3=b8===L||bH.isFunction(b6);
if(b5){if(b3){for(b4 in b6){if(b9.apply(b6[b4],b5)===false){break
}}}else{for(;
b7<b8;
){if(b9.apply(b6[b7++],b5)===false){break
}}}}else{if(b3){for(b4 in b6){if(b9.call(b6[b4],b4,b6[b4])===false){break
}}}else{for(;
b7<b8;
){if(b9.call(b6[b7],b7,b6[b7++])===false){break
}}}}return b6
},trim:bR?function(b3){return b3==null?"":bR.call(b3)
}:function(b3){return b3==null?"":b3.toString().replace(bL,"").replace(bG,"")
},makeArray:function(b6,b4){var b3=b4||[];
if(b6!=null){var b5=bH.type(b6);
if(b6.length==null||b5==="string"||b5==="function"||b5==="regexp"||bH.isWindow(b6)){bB.call(b3,b6)
}else{bH.merge(b3,b6)
}}return b3
},inArray:function(b5,b6,b4){var b3;
if(b6){if(bx){return bx.call(b6,b5,b4)
}b3=b6.length;
b4=b4?b4<0?Math.max(0,b3+b4):b4:0;
for(;
b4<b3;
b4++){if(b4 in b6&&b6[b4]===b5){return b4
}}}return -1
},merge:function(b7,b5){var b6=b7.length,b4=0;
if(typeof b5.length==="number"){for(var b3=b5.length;
b4<b3;
b4++){b7[b6++]=b5[b4]
}}else{while(b5[b4]!==L){b7[b6++]=b5[b4++]
}}b7.length=b6;
return b7
},grep:function(b4,b9,b3){var b5=[],b8;
b3=!!b3;
for(var b6=0,b7=b4.length;
b6<b7;
b6++){b8=!!b9(b4[b6],b6);
if(b3!==b8){b5.push(b4[b6])
}}return b5
},map:function(b3,ca,cb){var b8,b9,b7=[],b5=0,b4=b3.length,b6=b3 instanceof bH||b4!==L&&typeof b4==="number"&&((b4>0&&b3[0]&&b3[b4-1])||b4===0||bH.isArray(b3));
if(b6){for(;
b5<b4;
b5++){b8=ca(b3[b5],b5,cb);
if(b8!=null){b7[b7.length]=b8
}}}else{for(b9 in b3){b8=ca(b3[b9],b9,cb);
if(b8!=null){b7[b7.length]=b8
}}}return b7.concat.apply([],b7)
},guid:1,proxy:function(b7,b6){if(typeof b6==="string"){var b5=b7[b6];
b6=b7;
b7=b5
}if(!bH.isFunction(b7)){return L
}var b3=bN.call(arguments,2),b4=function(){return b7.apply(b6,b3.concat(bN.call(arguments)))
};
b4.guid=b7.guid=b7.guid||b4.guid||bH.guid++;
return b4
},access:function(b3,cb,b9,b5,b8,ca){var b4=b3.length;
if(typeof cb==="object"){for(var b6 in cb){bH.access(b3,b6,cb[b6],b5,b8,b9)
}return b3
}if(b9!==L){b5=!ca&&b5&&bH.isFunction(b9);
for(var b7=0;
b7<b4;
b7++){b8(b3[b7],cb,b5?b9.call(b3[b7],b7,b8(b3[b7],cb)):b9,ca)
}return b3
}return b4?b8(b3[0],cb):L
},now:function(){return(new Date()).getTime()
},uaMatch:function(b4){b4=b4.toLowerCase();
var b3=bA.exec(b4)||bU.exec(b4)||bT.exec(b4)||b4.indexOf("compatible")<0&&bV.exec(b4)||[];
return{browser:b3[1]||"",version:b3[2]||"0"}
},sub:function(){function b3(b6,b7){return new b3.fn.init(b6,b7)
}bH.extend(true,b3,this);
b3.superclass=this;
b3.fn=b3.prototype=this();
b3.fn.constructor=b3;
b3.sub=this.sub;
b3.fn.init=function b5(b6,b7){if(b7&&b7 instanceof bH&&!(b7 instanceof b3)){b7=b3(b7)
}return bH.fn.init.call(this,b6,b7,b4)
};
b3.fn.init.prototype=b3.fn;
var b4=b3(au);
return b3
},browser:{}});
bH.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b4,b3){bz["[object "+b3+"]"]=b3.toLowerCase()
});
bY=bH.uaMatch(b0);
if(bY.browser){bH.browser[bY.browser]=true;
bH.browser.version=bY.version
}if(bH.browser.webkit){bH.browser.safari=true
}if(bP.test("\xA0")){bL=/^[\s\xA0]+/;
bG=/[\s\xA0]+$/
}bF=bH(au);
if(au.addEventListener){e=function(){au.removeEventListener("DOMContentLoaded",e,false);
bH.ready()
}
}else{if(au.attachEvent){e=function(){if(au.readyState==="complete"){au.detachEvent("onreadystatechange",e);
bH.ready()
}}
}}function by(){if(bH.isReady){return
}try{au.documentElement.doScroll("left")
}catch(b3){setTimeout(by,1);
return
}bH.ready()
}if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bH
})
}return bH
})();
var a3={};
function X(e){var bx=a3[e]={},by,bz;
e=e.split(/\s+/);
for(by=0,bz=e.length;
by<bz;
by++){bx[e[by]]=true
}return bx
}b.Callbacks=function(by){by=by?(a3[by]||X(by)):{};
var bD=[],bE=[],bz,bA,bx,bB,bC,bG=function(bH){var bI,bL,bK,bJ,bM;
for(bI=0,bL=bH.length;
bI<bL;
bI++){bK=bH[bI];
bJ=b.type(bK);
if(bJ==="array"){bG(bK)
}else{if(bJ==="function"){if(!by.unique||!bF.has(bK)){bD.push(bK)
}}}}},e=function(bI,bH){bH=bH||[];
bz=!by.memory||[bI,bH];
bA=true;
bC=bx||0;
bx=0;
bB=bD.length;
for(;
bD&&bC<bB;
bC++){if(bD[bC].apply(bI,bH)===false&&by.stopOnFalse){bz=true;
break
}}bA=false;
if(bD){if(!by.once){if(bE&&bE.length){bz=bE.shift();
bF.fireWith(bz[0],bz[1])
}}else{if(bz===true){bF.disable()
}else{bD=[]
}}}},bF={add:function(){if(bD){var bH=bD.length;
bG(arguments);
if(bA){bB=bD.length
}else{if(bz&&bz!==true){bx=bH;
e(bz[0],bz[1])
}}}return this
},remove:function(){if(bD){var bH=arguments,bJ=0,bK=bH.length;
for(;
bJ<bK;
bJ++){for(var bI=0;
bI<bD.length;
bI++){if(bH[bJ]===bD[bI]){if(bA){if(bI<=bB){bB--;
if(bI<=bC){bC--
}}}bD.splice(bI--,1);
if(by.unique){break
}}}}}return this
},has:function(bI){if(bD){var bH=0,bJ=bD.length;
for(;
bH<bJ;
bH++){if(bI===bD[bH]){return true
}}}return false
},empty:function(){bD=[];
return this
},disable:function(){bD=bE=bz=L;
return this
},disabled:function(){return !bD
},lock:function(){bE=L;
if(!bz||bz===true){bF.disable()
}return this
},locked:function(){return !bE
},fireWith:function(bI,bH){if(bE){if(bA){if(!by.once){bE.push([bI,bH])
}}else{if(!(by.once&&bz)){e(bI,bH)
}}}return this
},fire:function(){bF.fireWith(this,arguments);
return this
},fired:function(){return !!bz
}};
return bF
};
var aJ=[].slice;
b.extend({Deferred:function(bA){var bz=b.Callbacks("once memory"),by=b.Callbacks("once memory"),bx=b.Callbacks("memory"),e="pending",bC={resolve:bz,reject:by,notify:bx},bE={done:bz.add,fail:by.add,progress:bx.add,state:function(){return e
},isResolved:bz.fired,isRejected:by.fired,then:function(bG,bF,bH){bD.done(bG).fail(bF).progress(bH);
return this
},always:function(){return bD.done.apply(bD,arguments).fail.apply(bD,arguments)
},pipe:function(bH,bG,bF){return b.Deferred(function(bI){b.each({done:[bH,"resolve"],fail:[bG,"reject"],progress:[bF,"notify"]},function(bK,bN){var bJ=bN[0],bM=bN[1],bL;
if(b.isFunction(bJ)){bD[bK](function(){bL=bJ.apply(this,arguments);
if(bL&&b.isFunction(bL.promise)){bL.promise().then(bI.resolve,bI.reject,bI.notify)
}else{bI[bM+"With"](this===bD?bI:this,[bL])
}})
}else{bD[bK](bI[bM])
}})
}).promise()
},promise:function(bG){if(bG==null){bG=bE
}else{for(var bF in bE){bG[bF]=bE[bF]
}}return bG
}},bD=bE.promise({}),bB;
for(bB in bC){bD[bB]=bC[bB].fire;
bD[bB+"With"]=bC[bB].fireWith
}bD.done(function(){e="resolved"
},by.disable,bx.lock).fail(function(){e="rejected"
},bz.disable,bx.lock);
if(bA){bA.call(bD,bD)
}return bD
},when:function(bC){var bz=aJ.call(arguments,0),bx=0,e=bz.length,bD=new Array(e),by=e,bA=e,bE=e<=1&&bC&&b.isFunction(bC.promise)?bC:b.Deferred(),bG=bE.promise();
function bF(bH){return function(bI){bz[bH]=arguments.length>1?aJ.call(arguments,0):bI;
if(!(--by)){bE.resolveWith(bE,bz)
}}
}function bB(bH){return function(bI){bD[bH]=arguments.length>1?aJ.call(arguments,0):bI;
bE.notifyWith(bG,bD)
}
}if(e>1){for(;
bx<e;
bx++){if(bz[bx]&&bz[bx].promise&&b.isFunction(bz[bx].promise)){bz[bx].promise().then(bF(bx),bE.reject,bB(bx))
}else{--by
}}if(!by){bE.resolveWith(bE,bz)
}}else{if(bE!==bC){bE.resolveWith(bE,e?[bC]:[])
}}return bG
}});
b.support=(function(){var bH=au.createElement("div"),bO=au.documentElement,bA,bP,bI,by,bG,bB,bE,bx,bF,bJ,bD,bN,bL,bz,bC,bK,bQ;
bH.setAttribute("className","t");
bH.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>";
bA=bH.getElementsByTagName("*");
bP=bH.getElementsByTagName("a")[0];
if(!bA||!bA.length||!bP){return{}
}bI=au.createElement("select");
by=bI.appendChild(au.createElement("option"));
bG=bH.getElementsByTagName("input")[0];
bE={leadingWhitespace:(bH.firstChild.nodeType===3),tbody:!bH.getElementsByTagName("tbody").length,htmlSerialize:!!bH.getElementsByTagName("link").length,style:/top/.test(bP.getAttribute("style")),hrefNormalized:(bP.getAttribute("href")==="/a"),opacity:/^0.55/.test(bP.style.opacity),cssFloat:!!bP.style.cssFloat,unknownElems:!!bH.getElementsByTagName("nav").length,checkOn:(bG.value==="on"),optSelected:by.selected,getSetAttribute:bH.className!=="t",enctype:!!au.createElement("form").enctype,submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};
bG.checked=true;
bE.noCloneChecked=bG.cloneNode(true).checked;
bI.disabled=true;
bE.optDisabled=!by.disabled;
try{delete bH.test
}catch(bM){bE.deleteExpando=false
}if(!bH.addEventListener&&bH.attachEvent&&bH.fireEvent){bH.attachEvent("onclick",function(){bE.noCloneEvent=false
});
bH.cloneNode(true).fireEvent("onclick")
}bG=au.createElement("input");
bG.value="t";
bG.setAttribute("type","radio");
bE.radioValue=bG.value==="t";
bG.setAttribute("checked","checked");
bH.appendChild(bG);
bx=au.createDocumentFragment();
bx.appendChild(bH.lastChild);
bE.checkClone=bx.cloneNode(true).cloneNode(true).lastChild.checked;
bH.innerHTML="";
bH.style.width=bH.style.paddingLeft="1px";
bF=au.getElementsByTagName("body")[0];
bD=au.createElement(bF?"div":"body");
bN={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(bF){b.extend(bN,{position:"absolute",left:"-999px",top:"-999px"})
}for(bK in bN){bD.style[bK]=bN[bK]
}bD.appendChild(bH);
bJ=bF||bO;
bJ.insertBefore(bD,bJ.firstChild);
bE.appendChecked=bG.checked;
bE.boxModel=bH.offsetWidth===2;
if("zoom" in bH.style){bH.style.display="inline";
bH.style.zoom=1;
bE.inlineBlockNeedsLayout=(bH.offsetWidth===2);
bH.style.display="";
bH.innerHTML="<div style='width:4px;'></div>";
bE.shrinkWrapBlocks=(bH.offsetWidth!==2)
}bH.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
bL=bH.getElementsByTagName("td");
bQ=(bL[0].offsetHeight===0);
bL[0].style.display="";
bL[1].style.display="none";
bE.reliableHiddenOffsets=bQ&&(bL[0].offsetHeight===0);
bH.innerHTML="";
if(au.defaultView&&au.defaultView.getComputedStyle){bB=au.createElement("div");
bB.style.width="0";
bB.style.marginRight="0";
bH.appendChild(bB);
bE.reliableMarginRight=(parseInt((au.defaultView.getComputedStyle(bB,null)||{marginRight:0}).marginRight,10)||0)===0
}if(bH.attachEvent){for(bK in {submit:1,change:1,focusin:1}){bC="on"+bK;
bQ=(bC in bH);
if(!bQ){bH.setAttribute(bC,"return;");
bQ=(typeof bH[bC]==="function")
}bE[bK+"Bubbles"]=bQ
}}b(function(){var bS,bZ,b0,bY,bT,bU,bR=1,bX="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",bW="visibility:hidden;border:0;",e="style='"+bX+"border:5px solid #000;padding:0;'",bV="<div "+e+"><div></div></div><table "+e+" cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
bF=au.getElementsByTagName("body")[0];
if(!bF){return
}bS=au.createElement("div");
bS.style.cssText=bW+"width:0;height:0;position:static;top:0;margin-top:"+bR+"px";
bF.insertBefore(bS,bF.firstChild);
bD=au.createElement("div");
bD.style.cssText=bX+bW;
bD.innerHTML=bV;
bS.appendChild(bD);
bZ=bD.firstChild;
b0=bZ.firstChild;
bT=bZ.nextSibling.firstChild.firstChild;
bU={doesNotAddBorder:(b0.offsetTop!==5),doesAddBorderForTableAndCells:(bT.offsetTop===5)};
b0.style.position="fixed";
b0.style.top="20px";
bU.fixedPosition=(b0.offsetTop===20||b0.offsetTop===15);
b0.style.position=b0.style.top="";
bZ.style.overflow="hidden";
bZ.style.position="relative";
bU.subtractsBorderForOverflowNotVisible=(b0.offsetTop===-5);
bU.doesNotIncludeMarginInBodyOffset=(bF.offsetTop!==bR);
bF.removeChild(bS);
bD=bS=null;
b.extend(bE,bU)
});
bD.innerHTML="";
bJ.removeChild(bD);
bD=bx=bI=by=bF=bB=bH=bG=null;
return bE
})();
b.boxModel=b.support.boxModel;
var aS=/^(?:\{.*\}|\[.*\])$/,az=/([A-Z])/g;
b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando];
return !!e&&!T(e)
},data:function(bz,bx,bB,bA){if(!b.acceptData(bz)){return
}var bI,bC,bF,bG=b.expando,bE=typeof bx==="string",bH=bz.nodeType,e=bH?b.cache:bz,by=bH?bz[b.expando]:bz[b.expando]&&b.expando,bD=bx==="events";
if((!by||!e[by]||(!bD&&!bA&&!e[by].data))&&bE&&bB===L){return
}if(!by){if(bH){bz[b.expando]=by=++b.uuid
}else{by=b.expando
}}if(!e[by]){e[by]={};
if(!bH){e[by].toJSON=b.noop
}}if(typeof bx==="object"||typeof bx==="function"){if(bA){e[by]=b.extend(e[by],bx)
}else{e[by].data=b.extend(e[by].data,bx)
}}bI=bC=e[by];
if(!bA){if(!bC.data){bC.data={}
}bC=bC.data
}if(bB!==L){bC[b.camelCase(bx)]=bB
}if(bD&&!bC[bx]){return bI.events
}if(bE){bF=bC[bx];
if(bF==null){bF=bC[b.camelCase(bx)]
}}else{bF=bC
}return bF
},removeData:function(bz,bx,bA){if(!b.acceptData(bz)){return
}var bD,bC,bB,bE=b.expando,bF=bz.nodeType,e=bF?b.cache:bz,by=bF?bz[b.expando]:b.expando;
if(!e[by]){return
}if(bx){bD=bA?e[by]:e[by].data;
if(bD){if(b.isArray(bx)){bx=bx
}else{if(bx in bD){bx=[bx]
}else{bx=b.camelCase(bx);
if(bx in bD){bx=[bx]
}else{bx=bx.split(" ")
}}}for(bC=0,bB=bx.length;
bC<bB;
bC++){delete bD[bx[bC]]
}if(!(bA?T:b.isEmptyObject)(bD)){return
}}}if(!bA){delete e[by].data;
if(!T(e[by])){return
}}if(b.support.deleteExpando||!e.setInterval){delete e[by]
}else{e[by]=null
}if(bF){if(b.support.deleteExpando){delete bz[b.expando]
}else{if(bz.removeAttribute){bz.removeAttribute(b.expando)
}else{bz[b.expando]=null
}}}},_data:function(bx,e,by){return b.data(bx,e,by,true)
},acceptData:function(bx){if(bx.nodeName){var e=b.noData[bx.nodeName.toLowerCase()];
if(e){return !(e===true||bx.getAttribute("classid")!==e)
}}return true
}});
b.fn.extend({data:function(bA,bC){var bD,e,by,bB=null;
if(typeof bA==="undefined"){if(this.length){bB=b.data(this[0]);
if(this[0].nodeType===1&&!b._data(this[0],"parsedAttrs")){e=this[0].attributes;
for(var bz=0,bx=e.length;
bz<bx;
bz++){by=e[bz].name;
if(by.indexOf("data-")===0){by=b.camelCase(by.substring(5));
a6(this[0],by,bB[by])
}}b._data(this[0],"parsedAttrs",true)
}}return bB
}else{if(typeof bA==="object"){return this.each(function(){b.data(this,bA)
})
}}bD=bA.split(".");
bD[1]=bD[1]?"."+bD[1]:"";
if(bC===L){bB=this.triggerHandler("getData"+bD[1]+"!",[bD[0]]);
if(bB===L&&this.length){bB=b.data(this[0],bA);
bB=a6(this[0],bA,bB)
}return bB===L&&bD[1]?this.data(bD[0]):bB
}else{return this.each(function(){var bF=b(this),bE=[bD[0],bC];
bF.triggerHandler("setData"+bD[1]+"!",bE);
b.data(this,bA,bC);
bF.triggerHandler("changeData"+bD[1]+"!",bE)
})
}},removeData:function(e){return this.each(function(){b.removeData(this,e)
})
}});
function a6(bz,by,bA){if(bA===L&&bz.nodeType===1){var bx="data-"+by.replace(az,"-$1").toLowerCase();
bA=bz.getAttribute(bx);
if(typeof bA==="string"){try{bA=bA==="true"?true:bA==="false"?false:bA==="null"?null:b.isNumeric(bA)?parseFloat(bA):aS.test(bA)?b.parseJSON(bA):bA
}catch(bB){}b.data(bz,by,bA)
}else{bA=L
}}return bA
}function T(bx){for(var e in bx){if(e==="data"&&b.isEmptyObject(bx[e])){continue
}if(e!=="toJSON"){return false
}}return true
}function bj(bA,bz,bC){var by=bz+"defer",bx=bz+"queue",e=bz+"mark",bB=b._data(bA,by);
if(bB&&(bC==="queue"||!b._data(bA,bx))&&(bC==="mark"||!b._data(bA,e))){setTimeout(function(){if(!b._data(bA,bx)&&!b._data(bA,e)){b.removeData(bA,by,true);
bB.fire()
}},0)
}}b.extend({_mark:function(bx,e){if(bx){e=(e||"fx")+"mark";
b._data(bx,e,(b._data(bx,e)||0)+1)
}},_unmark:function(bA,bz,bx){if(bA!==true){bx=bz;
bz=bA;
bA=false
}if(bz){bx=bx||"fx";
var e=bx+"mark",by=bA?0:((b._data(bz,e)||1)-1);
if(by){b._data(bz,e,by)
}else{b.removeData(bz,e,true);
bj(bz,bx,"mark")
}}},queue:function(bx,e,bz){var by;
if(bx){e=(e||"fx")+"queue";
by=b._data(bx,e);
if(bz){if(!by||b.isArray(bz)){by=b._data(bx,e,b.makeArray(bz))
}else{by.push(bz)
}}return by||[]
}},dequeue:function(bA,bz){bz=bz||"fx";
var bx=b.queue(bA,bz),by=bx.shift(),e={};
if(by==="inprogress"){by=bx.shift()
}if(by){if(bz==="fx"){bx.unshift("inprogress")
}b._data(bA,bz+".run",e);
by.call(bA,function(){b.dequeue(bA,bz)
},e)
}if(!bx.length){b.removeData(bA,bz+"queue "+bz+".run",true);
bj(bA,bz,"queue")
}}});
b.fn.extend({queue:function(e,bx){if(typeof e!=="string"){bx=e;
e="fx"
}if(bx===L){return b.queue(this[0],e)
}return this.each(function(){var by=b.queue(this,e,bx);
if(e==="fx"&&by[0]!=="inprogress"){b.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){b.dequeue(this,e)
})
},delay:function(bx,e){bx=b.fx?b.fx.speeds[bx]||bx:bx;
e=e||"fx";
return this.queue(e,function(bz,by){var bA=setTimeout(bz,bx);
by.stop=function(){clearTimeout(bA)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(bF,by){if(typeof bF!=="string"){by=bF;
bF=L
}bF=bF||"fx";
var e=b.Deferred(),bx=this,bA=bx.length,bD=1,bB=bF+"defer",bC=bF+"queue",bE=bF+"mark",bz;
function bG(){if(!(--bD)){e.resolveWith(bx,[bx])
}}while(bA--){if((bz=b.data(bx[bA],bB,L,true)||(b.data(bx[bA],bC,L,true)||b.data(bx[bA],bE,L,true))&&b.data(bx[bA],bB,b.Callbacks("once memory"),true))){bD++;
bz.add(bG)
}}bG();
return e.promise()
}});
var aP=/[\n\t\r]/g,af=/\s+/,aU=/\r/g,g=/^(?:button|input)$/i,D=/^(?:button|input|object|select|textarea)$/i,l=/^a(?:rea)?$/i,an=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,F=b.support.getSetAttribute,bf,aY,aE;
b.fn.extend({attr:function(e,bx){return b.access(this,e,bx,true,b.attr)
},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)
})
},prop:function(e,bx){return b.access(this,e,bx,true,b.prop)
},removeProp:function(e){e=b.propFix[e]||e;
return this.each(function(){try{this[e]=L;
delete this[e]
}catch(bx){}})
},addClass:function(bA){var bC,by,bx,bz,bB,bD,e;
if(b.isFunction(bA)){return this.each(function(bE){b(this).addClass(bA.call(this,bE,this.className))
})
}if(bA&&typeof bA==="string"){bC=bA.split(af);
for(by=0,bx=this.length;
by<bx;
by++){bz=this[by];
if(bz.nodeType===1){if(!bz.className&&bC.length===1){bz.className=bA
}else{bB=" "+bz.className+" ";
for(bD=0,e=bC.length;
bD<e;
bD++){if(!~bB.indexOf(" "+bC[bD]+" ")){bB+=bC[bD]+" "
}}bz.className=b.trim(bB)
}}}}return this
},removeClass:function(bB){var bC,by,bx,bA,bz,bD,e;
if(b.isFunction(bB)){return this.each(function(bE){b(this).removeClass(bB.call(this,bE,this.className))
})
}if((bB&&typeof bB==="string")||bB===L){bC=(bB||"").split(af);
for(by=0,bx=this.length;
by<bx;
by++){bA=this[by];
if(bA.nodeType===1&&bA.className){if(bB){bz=(" "+bA.className+" ").replace(aP," ");
for(bD=0,e=bC.length;
bD<e;
bD++){bz=bz.replace(" "+bC[bD]+" "," ")
}bA.className=b.trim(bz)
}else{bA.className=""
}}}}return this
},toggleClass:function(bz,bx){var by=typeof bz,e=typeof bx==="boolean";
if(b.isFunction(bz)){return this.each(function(bA){b(this).toggleClass(bz.call(this,bA,this.className,bx),bx)
})
}return this.each(function(){if(by==="string"){var bC,bB=0,bA=b(this),bD=bx,bE=bz.split(af);
while((bC=bE[bB++])){bD=e?bD:!bA.hasClass(bC);
bA[bD?"addClass":"removeClass"](bC)
}}else{if(by==="undefined"||by==="boolean"){if(this.className){b._data(this,"__className__",this.className)
}this.className=this.className||bz===false?"":b._data(this,"__className__")||""
}}})
},hasClass:function(e){var bz=" "+e+" ",by=0,bx=this.length;
for(;
by<bx;
by++){if(this[by].nodeType===1&&(" "+this[by].className+" ").replace(aP," ").indexOf(bz)>-1){return true
}}return false
},val:function(bz){var e,bx,bA,by=this[0];
if(!arguments.length){if(by){e=b.valHooks[by.nodeName.toLowerCase()]||b.valHooks[by.type];
if(e&&"get" in e&&(bx=e.get(by,"value"))!==L){return bx
}bx=by.value;
return typeof bx==="string"?bx.replace(aU,""):bx==null?"":bx
}return L
}bA=b.isFunction(bz);
return this.each(function(bC){var bB=b(this),bD;
if(this.nodeType!==1){return
}if(bA){bD=bz.call(this,bC,bB.val())
}else{bD=bz
}if(bD==null){bD=""
}else{if(typeof bD==="number"){bD+=""
}else{if(b.isArray(bD)){bD=b.map(bD,function(bE){return bE==null?"":bE+""
})
}}}e=b.valHooks[this.nodeName.toLowerCase()]||b.valHooks[this.type];
if(!e||!("set" in e)||e.set(this,bD,"value")===L){this.value=bD
}})
}});
b.extend({valHooks:{option:{get:function(e){var bx=e.attributes.value;
return !bx||bx.specified?e.value:e.text
}},select:{get:function(e){var bC,bx,bB,bz,bA=e.selectedIndex,bD=[],bE=e.options,by=e.type==="select-one";
if(bA<0){return null
}bx=by?bA:0;
bB=by?bA+1:bE.length;
for(;
bx<bB;
bx++){bz=bE[bx];
if(bz.selected&&(b.support.optDisabled?!bz.disabled:bz.getAttribute("disabled")===null)&&(!bz.parentNode.disabled||!b.nodeName(bz.parentNode,"optgroup"))){bC=b(bz).val();
if(by){return bC
}bD.push(bC)
}}if(by&&!bD.length&&bE.length){return b(bE[bA]).val()
}return bD
},set:function(bx,by){var e=b.makeArray(by);
b(bx).find("option").each(function(){this.selected=b.inArray(b(this).val(),e)>=0
});
if(!e.length){bx.selectedIndex=-1
}return e
}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bC,bz,bD,bB){var by,e,bA,bx=bC.nodeType;
if(!bC||bx===3||bx===8||bx===2){return L
}if(bB&&bz in b.attrFn){return b(bC)[bz](bD)
}if(!("getAttribute" in bC)){return b.prop(bC,bz,bD)
}bA=bx!==1||!b.isXMLDoc(bC);
if(bA){bz=bz.toLowerCase();
e=b.attrHooks[bz]||(an.test(bz)?aY:bf)
}if(bD!==L){if(bD===null){b.removeAttr(bC,bz);
return L
}else{if(e&&"set" in e&&bA&&(by=e.set(bC,bD,bz))!==L){return by
}else{bC.setAttribute(bz,""+bD);
return bD
}}}else{if(e&&"get" in e&&bA&&(by=e.get(bC,bz))!==null){return by
}else{by=bC.getAttribute(bz);
return by===null?L:by
}}},removeAttr:function(bz,bB){var bA,bC,bx,e,by=0;
if(bz.nodeType===1){bC=(bB||"").split(af);
e=bC.length;
for(;
by<e;
by++){bx=bC[by].toLowerCase();
bA=b.propFix[bx]||bx;
b.attr(bz,bx,"");
bz.removeAttribute(F?bx:bA);
if(an.test(bx)&&bA in bz){bz[bA]=false
}}}},attrHooks:{type:{set:function(e,bx){if(g.test(e.nodeName)&&e.parentNode){b.error("type property can't be changed")
}else{if(!b.support.radioValue&&bx==="radio"&&b.nodeName(e,"input")){var by=e.value;
e.setAttribute("type",bx);
if(by){e.value=by
}return bx
}}}},value:{get:function(bx,e){if(bf&&b.nodeName(bx,"button")){return bf.get(bx,e)
}return e in bx?bx.value:null
},set:function(bx,by,e){if(bf&&b.nodeName(bx,"button")){return bf.set(bx,by,e)
}bx.value=by
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bB,bz,bC){var by,e,bA,bx=bB.nodeType;
if(!bB||bx===3||bx===8||bx===2){return L
}bA=bx!==1||!b.isXMLDoc(bB);
if(bA){bz=b.propFix[bz]||bz;
e=b.propHooks[bz]
}if(bC!==L){if(e&&"set" in e&&(by=e.set(bB,bC,bz))!==L){return by
}else{return(bB[bz]=bC)
}}else{if(e&&"get" in e&&(by=e.get(bB,bz))!==null){return by
}else{return bB[bz]
}}},propHooks:{tabIndex:{get:function(bx){var e=bx.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):D.test(bx.nodeName)||l.test(bx.nodeName)&&bx.href?0:L
}}}});
b.attrHooks.tabindex=b.propHooks.tabIndex;
aY={get:function(bx,e){var bz,by=b.prop(bx,e);
return by===true||typeof by!=="boolean"&&(bz=bx.getAttributeNode(e))&&bz.nodeValue!==false?e.toLowerCase():L
},set:function(bx,bz,e){var by;
if(bz===false){b.removeAttr(bx,e)
}else{by=b.propFix[e]||e;
if(by in bx){bx[by]=true
}bx.setAttribute(e,e.toLowerCase())
}return e
}};
if(!F){aE={name:true,id:true};
bf=b.valHooks.button={get:function(by,bx){var e;
e=by.getAttributeNode(bx);
return e&&(aE[bx]?e.nodeValue!=="":e.specified)?e.nodeValue:L
},set:function(by,bz,bx){var e=by.getAttributeNode(bx);
if(!e){e=au.createAttribute(bx);
by.setAttributeNode(e)
}return(e.nodeValue=bz+"")
}};
b.attrHooks.tabindex.set=bf.set;
b.each(["width","height"],function(bx,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{set:function(by,bz){if(bz===""){by.setAttribute(e,"auto");
return bz
}}})
});
b.attrHooks.contenteditable={get:bf.get,set:function(bx,by,e){if(by===""){by="false"
}bf.set(bx,by,e)
}}
}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bx,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{get:function(bz){var by=bz.getAttribute(e,2);
return by===null?L:by
}})
})
}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||L
},set:function(e,bx){return(e.style.cssText=""+bx)
}}
}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bx){var e=bx.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}})
}if(!b.support.enctype){b.propFix.enctype="encoding"
}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}
})
}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,bx){if(b.isArray(bx)){return(e.checked=b.inArray(b(e).val(),bx)>=0)
}}})
});
var a0=/\.(.*)$/,be=/^(?:textarea|input|select)$/i,O=/\./g,bk=/ /g,aG=/[^\w\s.|`]/g,n=/^([^\.]*)?(?:\.(.+))?$/,J=/\bhover(\.\S+)?/,aO=/^key/,bg=/^(?:mouse|contextmenu)|click/,U=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Y=function(e){var bx=U.exec(e);
if(bx){bx[1]=(bx[1]||"").toLowerCase();
bx[3]=bx[3]&&new RegExp("(?:^|\\s)"+bx[3]+"(?:\\s|$)")
}return bx
},j=function(bx,e){return((!e[1]||bx.nodeName.toLowerCase()===e[1])&&(!e[2]||bx.id===e[2])&&(!e[3]||e[3].test(bx.className)))
},bv=function(e){return b.event.special.hover?e:e.replace(J,"mouseenter$1 mouseleave$1")
};
b.event={add:function(bz,bE,bL,bC,bA){var bF,bD,bM,bK,bJ,bH,e,bI,bx,bB,by,bG;
if(bz.nodeType===3||bz.nodeType===8||!bE||!bL||!(bF=b._data(bz))){return
}if(bL.handler){bx=bL;
bL=bx.handler
}if(!bL.guid){bL.guid=b.guid++
}bM=bF.events;
if(!bM){bF.events=bM={}
}bD=bF.handle;
if(!bD){bF.handle=bD=function(bN){return typeof b!=="undefined"&&(!bN||b.event.triggered!==bN.type)?b.event.dispatch.apply(bD.elem,arguments):L
};
bD.elem=bz
}bE=bv(bE).split(" ");
for(bK=0;
bK<bE.length;
bK++){bJ=n.exec(bE[bK])||[];
bH=bJ[1];
e=(bJ[2]||"").split(".").sort();
bG=b.event.special[bH]||{};
bH=(bA?bG.delegateType:bG.bindType)||bH;
bG=b.event.special[bH]||{};
bI=b.extend({type:bH,origType:bJ[1],data:bC,handler:bL,guid:bL.guid,selector:bA,namespace:e.join(".")},bx);
if(bA){bI.quick=Y(bA);
if(!bI.quick&&b.expr.match.POS.test(bA)){bI.isPositional=true
}}by=bM[bH];
if(!by){by=bM[bH]=[];
by.delegateCount=0;
if(!bG.setup||bG.setup.call(bz,bC,e,bD)===false){if(bz.addEventListener){bz.addEventListener(bH,bD,false)
}else{if(bz.attachEvent){bz.attachEvent("on"+bH,bD)
}}}}if(bG.add){bG.add.call(bz,bI);
if(!bI.handler.guid){bI.handler.guid=bL.guid
}}if(bA){by.splice(by.delegateCount++,0,bI)
}else{by.push(bI)
}b.event.global[bH]=true
}bz=null
},global:{},remove:function(by,bD,bJ,bz){var bE=b.hasData(by)&&b._data(by),bK,bL,bG,bx,bA,bB,bI,bF,bC,e,bH;
if(!bE||!(bI=bE.events)){return
}bD=bv(bD||"").split(" ");
for(bK=0;
bK<bD.length;
bK++){bL=n.exec(bD[bK])||[];
bG=bL[1];
bx=bL[2];
if(!bG){bx=bx?"."+bx:"";
for(bB in bI){b.event.remove(by,bB+bx,bJ,bz)
}return
}bF=b.event.special[bG]||{};
bG=(bz?bF.delegateType:bF.bindType)||bG;
e=bI[bG]||[];
bA=e.length;
bx=bx?new RegExp("(^|\\.)"+bx.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
if(bJ||bx||bz||bF.remove){for(bB=0;
bB<e.length;
bB++){bH=e[bB];
if(!bJ||bJ.guid===bH.guid){if(!bx||bx.test(bH.namespace)){if(!bz||bz===bH.selector||bz==="**"&&bH.selector){e.splice(bB--,1);
if(bH.selector){e.delegateCount--
}if(bF.remove){bF.remove.call(by,bH)
}}}}}}else{e.length=0
}if(e.length===0&&bA!==e.length){if(!bF.teardown||bF.teardown.call(by,bx)===false){b.removeEvent(by,bG,bE.handle)
}delete bI[bG]
}}if(b.isEmptyObject(bI)){bC=bE.handle;
if(bC){bC.elem=null
}b.removeData(by,["events","handle"],true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bx,bF,bC,bL){if(bC&&(bC.nodeType===3||bC.nodeType===8)){return
}var bI=bx.type||bx,bz=[],e,by,bE,bJ,bB,bA,bH,bG,bD,bK;
if(bI.indexOf("!")>=0){bI=bI.slice(0,-1);
by=true
}if(bI.indexOf(".")>=0){bz=bI.split(".");
bI=bz.shift();
bz.sort()
}if((!bC||b.event.customEvent[bI])&&!b.event.global[bI]){return
}bx=typeof bx==="object"?bx[b.expando]?bx:new b.Event(bI,bx):new b.Event(bI);
bx.type=bI;
bx.isTrigger=true;
bx.exclusive=by;
bx.namespace=bz.join(".");
bx.namespace_re=bx.namespace?new RegExp("(^|\\.)"+bz.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
bA=bI.indexOf(":")<0?"on"+bI:"";
if(bL||!bC){bx.preventDefault()
}if(!bC){e=b.cache;
for(bE in e){if(e[bE].events&&e[bE].events[bI]){b.event.trigger(bx,bF,e[bE].handle.elem,true)
}}return
}bx.result=L;
if(!bx.target){bx.target=bC
}bF=bF!=null?b.makeArray(bF):[];
bF.unshift(bx);
bH=b.event.special[bI]||{};
if(bH.trigger&&bH.trigger.apply(bC,bF)===false){return
}bD=[[bC,bH.bindType||bI]];
if(!bL&&!bH.noBubble&&!b.isWindow(bC)){bK=bH.delegateType||bI;
bB=null;
for(bJ=bC.parentNode;
bJ;
bJ=bJ.parentNode){bD.push([bJ,bK]);
bB=bJ
}if(bB&&bB===bC.ownerDocument){bD.push([bB.defaultView||bB.parentWindow||bc,bK])
}}for(bE=0;
bE<bD.length;
bE++){bJ=bD[bE][0];
bx.type=bD[bE][1];
bG=(b._data(bJ,"events")||{})[bx.type]&&b._data(bJ,"handle");
if(bG){bG.apply(bJ,bF)
}bG=bA&&bJ[bA];
if(bG&&b.acceptData(bJ)){bG.apply(bJ,bF)
}if(bx.isPropagationStopped()){break
}}bx.type=bI;
if(!bx.isDefaultPrevented()){if((!bH._default||bH._default.apply(bC.ownerDocument,bF)===false)&&!(bI==="click"&&b.nodeName(bC,"a"))&&b.acceptData(bC)){if(bA&&bC[bI]&&((bI!=="focus"&&bI!=="blur")||bx.target.offsetWidth!==0)&&!b.isWindow(bC)){bB=bC[bA];
if(bB){bC[bA]=null
}b.event.triggered=bI;
bC[bI]();
b.event.triggered=L;
if(bB){bC[bA]=bB
}}}}return bx.result
},dispatch:function(bI){bI=b.event.fix(bI||bc.event);
var bE=((b._data(this,"events")||{})[bI.type]||[]),bD=bE.delegateCount,bz=[].slice.call(arguments,0),bF=!bI.exclusive&&!bI.namespace,bB=(b.event.special[bI.type]||{}).handle,bx=[],bK,bH,bA,bM,bJ,bC,by,e,bG,bL,bN;
bz[0]=bI;
bI.delegateTarget=this;
if(bD&&!bI.target.disabled&&!(bI.button&&bI.type==="click")){for(bA=bI.target;
bA!=this;
bA=bA.parentNode||this){bJ={};
by=[];
for(bK=0;
bK<bD;
bK++){e=bE[bK];
bG=e.selector;
bL=bJ[bG];
if(e.isPositional){bL=(bL||(bJ[bG]=b(bG))).index(bA)>=0
}else{if(bL===L){bL=bJ[bG]=(e.quick?j(bA,e.quick):b(bA).is(bG))
}}if(bL){by.push(e)
}}if(by.length){bx.push({elem:bA,matches:by})
}}}if(bE.length>bD){bx.push({elem:this,matches:bE.slice(bD)})
}for(bK=0;
bK<bx.length&&!bI.isPropagationStopped();
bK++){bC=bx[bK];
bI.currentTarget=bC.elem;
for(bH=0;
bH<bC.matches.length&&!bI.isImmediatePropagationStopped();
bH++){e=bC.matches[bH];
if(bF||(!bI.namespace&&!e.namespace)||bI.namespace_re&&bI.namespace_re.test(e.namespace)){bI.data=e.data;
bI.handleObj=e;
bM=(bB||e.handler).apply(bC.elem,bz);
if(bM!==L){bI.result=bM;
if(bM===false){bI.preventDefault();
bI.stopPropagation()
}}}}}return bI.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bx,e){if(bx.which==null){bx.which=e.charCode!=null?e.charCode:e.keyCode
}return bx
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),filter:function(bz,by){var bA,bB,e,bx=by.button,bC=by.fromElement;
if(bz.pageX==null&&by.clientX!=null){bA=bz.target.ownerDocument||au;
bB=bA.documentElement;
e=bA.body;
bz.pageX=by.clientX+(bB&&bB.scrollLeft||e&&e.scrollLeft||0)-(bB&&bB.clientLeft||e&&e.clientLeft||0);
bz.pageY=by.clientY+(bB&&bB.scrollTop||e&&e.scrollTop||0)-(bB&&bB.clientTop||e&&e.clientTop||0)
}if(!bz.relatedTarget&&bC){bz.relatedTarget=bC===bz.target?by.toElement:bC
}if(!bz.which&&bx!==L){bz.which=(bx&1?1:(bx&2?3:(bx&4?2:0)))
}return bz
}},fix:function(by){if(by[b.expando]){return by
}var bx,bB,e=by,bz=b.event.fixHooks[by.type]||{},bA=bz.props?this.props.concat(bz.props):this.props;
by=b.Event(e);
for(bx=bA.length;
bx;
){bB=bA[--bx];
by[bB]=e[bB]
}if(!by.target){by.target=e.srcElement||au
}if(by.target.nodeType===3){by.target=by.target.parentNode
}if(by.metaKey===L){by.metaKey=by.ctrlKey
}return bz.filter?bz.filter(by,e):by
},special:{ready:{setup:b.bindReady},focus:{delegateType:"focusin",noBubble:true},blur:{delegateType:"focusout",noBubble:true},beforeunload:{setup:function(by,bx,e){if(b.isWindow(this)){this.onbeforeunload=e
}},teardown:function(bx,e){if(this.onbeforeunload===e){this.onbeforeunload=null
}}}},simulate:function(by,bA,bz,bx){var bB=b.extend(new b.Event(),bz,{type:by,isSimulated:true,originalEvent:{}});
if(bx){b.event.trigger(bB,null,bA)
}else{b.event.dispatch.call(bA,bB)
}if(bB.isDefaultPrevented()){bz.preventDefault()
}}};
b.event.handle=b.event.dispatch;
b.removeEvent=au.removeEventListener?function(bx,e,by){if(bx.removeEventListener){bx.removeEventListener(e,by,false)
}}:function(bx,e,by){if(bx.detachEvent){bx.detachEvent("on"+e,by)
}};
b.Event=function(bx,e){if(!(this instanceof b.Event)){return new b.Event(bx,e)
}if(bx&&bx.type){this.originalEvent=bx;
this.type=bx.type;
this.isDefaultPrevented=(bx.defaultPrevented||bx.returnValue===false||bx.getPreventDefault&&bx.getPreventDefault())?i:bm
}else{this.type=bx
}if(e){b.extend(this,e)
}this.timeStamp=bx&&bx.timeStamp||b.now();
this[b.expando]=true
};
function bm(){return false
}function i(){return true
}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=i;
var bx=this.originalEvent;
if(!bx){return
}if(bx.preventDefault){bx.preventDefault()
}else{bx.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=i;
var bx=this.originalEvent;
if(!bx){return
}if(bx.stopPropagation){bx.stopPropagation()
}bx.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i;
this.stopPropagation()
},isDefaultPrevented:bm,isPropagationStopped:bm,isImmediatePropagationStopped:bm};
b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bx,e){b.event.special[bx]=b.event.special[e]={delegateType:e,bindType:e,handle:function(bB){var bE=this,bD=bB.relatedTarget,bA=bB.handleObj,by=bA.selector,bC,bz;
if(!bD||bA.origType===bB.type||(bD!==bE&&!b.contains(bE,bD))){bC=bB.type;
bB.type=bA.origType;
bz=bA.handler.apply(this,arguments);
bB.type=bC
}return bz
}}
});
if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false
}b.event.add(this,"click._submit keypress._submit",function(bz){var by=bz.target,bx=b.nodeName(by,"input")||b.nodeName(by,"button")?by.form:L;
if(bx&&!bx._submit_attached){b.event.add(bx,"submit._submit",function(e){if(this.parentNode){b.event.simulate("submit",this.parentNode,e,true)
}});
bx._submit_attached=true
}})
},teardown:function(){if(b.nodeName(this,"form")){return false
}b.event.remove(this,"._submit")
}}
}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(be.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
b.event.add(this,"click._change",function(e){if(this._just_changed){this._just_changed=false;
b.event.simulate("change",this,e,true)
}})
}return false
}b.event.add(this,"beforeactivate._change",function(by){var bx=by.target;
if(be.test(bx.nodeName)&&!bx._change_attached){b.event.add(bx,"change._change",function(e){if(this.parentNode&&!e.isSimulated){b.event.simulate("change",this.parentNode,e,true)
}});
bx._change_attached=true
}})
},handle:function(bx){var e=bx.target;
if(this!==e||bx.isSimulated||bx.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return bx.handleObj.handler.apply(this,arguments)
}},teardown:function(){b.event.remove(this,"._change");
return be.test(this.nodeName)
}}
}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bz,e){var bx=0,by=function(bA){b.event.simulate(e,bA.target,b.event.fix(bA),true)
};
b.event.special[e]={setup:function(){if(bx++===0){au.addEventListener(bz,by,true)
}},teardown:function(){if(--bx===0){au.removeEventListener(bz,by,true)
}}}
})
}b.fn.extend({on:function(by,e,bB,bA,bx){var bC,bz;
if(typeof by==="object"){if(typeof e!=="string"){bB=e;
e=L
}for(bz in by){this.on(bz,e,bB,by[bz],bx)
}return this
}if(bB==null&&bA==null){bA=e;
bB=e=L
}else{if(bA==null){if(typeof e==="string"){bA=bB;
bB=L
}else{bA=bB;
bB=e;
e=L
}}}if(bA===false){bA=bm
}else{if(!bA){return this
}}if(bx===1){bC=bA;
bA=function(bD){b().off(bD);
return bC.apply(this,arguments)
};
bA.guid=bC.guid||(bC.guid=b.guid++)
}return this.each(function(){b.event.add(this,by,bA,bB,e)
})
},one:function(bx,e,bz,by){return this.on.call(this,bx,e,bz,by,1)
},off:function(by,e,bA){if(by&&by.preventDefault&&by.handleObj){var bx=by.handleObj;
b(by.delegateTarget).off(bx.namespace?bx.type+"."+bx.namespace:bx.type,bx.selector,bx.handler);
return this
}if(typeof by==="object"){for(var bz in by){this.off(bz,e,by[bz])
}return this
}if(e===false||typeof e==="function"){bA=e;
e=L
}if(bA===false){bA=bm
}return this.each(function(){b.event.remove(this,by,bA,e)
})
},bind:function(e,by,bx){return this.on(e,null,by,bx)
},unbind:function(e,bx){return this.off(e,null,bx)
},live:function(e,by,bx){b(this.context).on(e,this.selector,by,bx);
return this
},die:function(e,bx){b(this.context).off(e,this.selector||"**",bx);
return this
},delegate:function(e,bx,bz,by){return this.on(bx,e,bz,by)
},undelegate:function(e,bx,by){return arguments.length==1?this.off(e,"**"):this.off(bx,e,by)
},trigger:function(e,bx){return this.each(function(){b.event.trigger(e,bx,this)
})
},triggerHandler:function(e,bx){if(this[0]){return b.event.trigger(e,bx,this[0],true)
}},toggle:function(bz){var bx=arguments,e=bz.guid||b.guid++,by=0,bA=function(bB){var bC=(b._data(this,"lastToggle"+bz.guid)||0)%by;
b._data(this,"lastToggle"+bz.guid,bC+1);
bB.preventDefault();
return bx[bC].apply(this,arguments)||false
};
bA.guid=e;
while(by<bx.length){bx[by++].guid=e
}return this.click(bA)
},hover:function(e,bx){return this.mouseenter(e).mouseleave(bx||e)
}});
b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bx,e){b.fn[e]=function(bz,by){if(by==null){by=bz;
bz=null
}return arguments.length>0?this.bind(e,bz,by):this.trigger(e)
};
if(b.attrFn){b.attrFn[e]=true
}if(aO.test(e)){b.event.fixHooks[e]=b.event.keyHooks
}if(bg.test(e)){b.event.fixHooks[e]=b.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var bJ=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bE="sizcache"+(Math.random()+"").replace(".",""),bK=0,bN=Object.prototype.toString,bD=false,bC=true,bM=/\\/g,bQ=/\r\n/g,bS=/\W/;
[0,0].sort(function(){bC=false;
return 0
});
var bA=function(bX,e,b0,b1){b0=b0||[];
e=e||au;
var b3=e;
if(e.nodeType!==1&&e.nodeType!==9){return[]
}if(!bX||typeof bX!=="string"){return b0
}var bU,b5,b8,bT,b4,b7,b6,bZ,bW=true,bV=bA.isXML(e),bY=[],b2=bX;
do{bJ.exec("");
bU=bJ.exec(b2);
if(bU){b2=bU[3];
bY.push(bU[1]);
if(bU[2]){bT=bU[3];
break
}}}while(bU);
if(bY.length>1&&bF.exec(bX)){if(bY.length===2&&bG.relative[bY[0]]){b5=bO(bY[0]+bY[1],e,b1)
}else{b5=bG.relative[bY[0]]?[e]:bA(bY.shift(),e);
while(bY.length){bX=bY.shift();
if(bG.relative[bX]){bX+=bY.shift()
}b5=bO(bX,b5,b1)
}}}else{if(!b1&&bY.length>1&&e.nodeType===9&&!bV&&bG.match.ID.test(bY[0])&&!bG.match.ID.test(bY[bY.length-1])){b4=bA.find(bY.shift(),e,bV);
e=b4.expr?bA.filter(b4.expr,b4.set)[0]:b4.set[0]
}if(e){b4=b1?{expr:bY.pop(),set:bH(b1)}:bA.find(bY.pop(),bY.length===1&&(bY[0]==="~"||bY[0]==="+")&&e.parentNode?e.parentNode:e,bV);
b5=b4.expr?bA.filter(b4.expr,b4.set):b4.set;
if(bY.length>0){b8=bH(b5)
}else{bW=false
}while(bY.length){b7=bY.pop();
b6=b7;
if(!bG.relative[b7]){b7=""
}else{b6=bY.pop()
}if(b6==null){b6=e
}bG.relative[b7](b8,b6,bV)
}}else{b8=bY=[]
}}if(!b8){b8=b5
}if(!b8){bA.error(b7||bX)
}if(bN.call(b8)==="[object Array]"){if(!bW){b0.push.apply(b0,b8)
}else{if(e&&e.nodeType===1){for(bZ=0;
b8[bZ]!=null;
bZ++){if(b8[bZ]&&(b8[bZ]===true||b8[bZ].nodeType===1&&bA.contains(e,b8[bZ]))){b0.push(b5[bZ])
}}}else{for(bZ=0;
b8[bZ]!=null;
bZ++){if(b8[bZ]&&b8[bZ].nodeType===1){b0.push(b5[bZ])
}}}}}else{bH(b8,b0)
}if(bT){bA(bT,b3,b0,b1);
bA.uniqueSort(b0)
}return b0
};
bA.uniqueSort=function(bT){if(bL){bD=bC;
bT.sort(bL);
if(bD){for(var e=1;
e<bT.length;
e++){if(bT[e]===bT[e-1]){bT.splice(e--,1)
}}}}return bT
};
bA.matches=function(e,bT){return bA(e,null,null,bT)
};
bA.matchesSelector=function(e,bT){return bA(bT,null,null,[e]).length>0
};
bA.find=function(bZ,e,b0){var bY,bU,bW,bV,bX,bT;
if(!bZ){return[]
}for(bU=0,bW=bG.order.length;
bU<bW;
bU++){bX=bG.order[bU];
if((bV=bG.leftMatch[bX].exec(bZ))){bT=bV[1];
bV.splice(1,1);
if(bT.substr(bT.length-1)!=="\\"){bV[1]=(bV[1]||"").replace(bM,"");
bY=bG.find[bX](bV,e,b0);
if(bY!=null){bZ=bZ.replace(bG.match[bX],"");
break
}}}}if(!bY){bY=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]
}return{set:bY,expr:bZ}
};
bA.filter=function(b3,b2,b6,bW){var bY,e,b1,b8,b5,bT,bV,bX,b4,bU=b3,b7=[],b0=b2,bZ=b2&&b2[0]&&bA.isXML(b2[0]);
while(b3&&b2.length){for(b1 in bG.filter){if((bY=bG.leftMatch[b1].exec(b3))!=null&&bY[2]){bT=bG.filter[b1];
bV=bY[1];
e=false;
bY.splice(1,1);
if(bV.substr(bV.length-1)==="\\"){continue
}if(b0===b7){b7=[]
}if(bG.preFilter[b1]){bY=bG.preFilter[b1](bY,b0,b6,b7,bW,bZ);
if(!bY){e=b8=true
}else{if(bY===true){continue
}}}if(bY){for(bX=0;
(b5=b0[bX])!=null;
bX++){if(b5){b8=bT(b5,bY,bX,b0);
b4=bW^b8;
if(b6&&b8!=null){if(b4){e=true
}else{b0[bX]=false
}}else{if(b4){b7.push(b5);
e=true
}}}}}if(b8!==L){if(!b6){b0=b7
}b3=b3.replace(bG.match[b1],"");
if(!e){return[]
}break
}}}if(b3===bU){if(e==null){bA.error(b3)
}else{break
}}bU=b3
}return b0
};
bA.error=function(e){throw"Syntax error, unrecognized expression: "+e
};
var by=bA.getText=function(bW){var bU,bV,e=bW.nodeType,bT="";
if(e){if(e===1){if(typeof bW.textContent==="string"){return bW.textContent
}else{if(typeof bW.innerText==="string"){return bW.innerText.replace(bQ,"")
}else{for(bW=bW.firstChild;
bW;
bW=bW.nextSibling){bT+=by(bW)
}}}}else{if(e===3||e===4){return bW.nodeValue
}}}else{for(bU=0;
(bV=bW[bU]);
bU++){if(bV.nodeType!==8){bT+=by(bV)
}}}return bT
};
var bG=bA.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")
},type:function(e){return e.getAttribute("type")
}},relative:{"+":function(bY,bT){var bV=typeof bT==="string",bX=bV&&!bS.test(bT),bZ=bV&&!bX;
if(bX){bT=bT.toLowerCase()
}for(var bU=0,e=bY.length,bW;
bU<e;
bU++){if((bW=bY[bU])){while((bW=bW.previousSibling)&&bW.nodeType!==1){}bY[bU]=bZ||bW&&bW.nodeName.toLowerCase()===bT?bW||false:bW===bT
}}if(bZ){bA.filter(bT,bY,true)
}},">":function(bY,bT){var bX,bW=typeof bT==="string",bU=0,e=bY.length;
if(bW&&!bS.test(bT)){bT=bT.toLowerCase();
for(;
bU<e;
bU++){bX=bY[bU];
if(bX){var bV=bX.parentNode;
bY[bU]=bV.nodeName.toLowerCase()===bT?bV:false
}}}else{for(;
bU<e;
bU++){bX=bY[bU];
if(bX){bY[bU]=bW?bX.parentNode:bX.parentNode===bT
}}if(bW){bA.filter(bT,bY,true)
}}},"":function(bV,bT,bX){var bW,bU=bK++,e=bP;
if(typeof bT==="string"&&!bS.test(bT)){bT=bT.toLowerCase();
bW=bT;
e=bx
}e("parentNode",bT,bU,bV,bW,bX)
},"~":function(bV,bT,bX){var bW,bU=bK++,e=bP;
if(typeof bT==="string"&&!bS.test(bT)){bT=bT.toLowerCase();
bW=bT;
e=bx
}e("previousSibling",bT,bU,bV,bW,bX)
}},find:{ID:function(bT,bU,bV){if(typeof bU.getElementById!=="undefined"&&!bV){var e=bU.getElementById(bT[1]);
return e&&e.parentNode?[e]:[]
}},NAME:function(bU,bX){if(typeof bX.getElementsByName!=="undefined"){var bT=[],bW=bX.getElementsByName(bU[1]);
for(var bV=0,e=bW.length;
bV<e;
bV++){if(bW[bV].getAttribute("name")===bU[1]){bT.push(bW[bV])
}}return bT.length===0?null:bT
}},TAG:function(e,bT){if(typeof bT.getElementsByTagName!=="undefined"){return bT.getElementsByTagName(e[1])
}}},preFilter:{CLASS:function(bV,bT,bU,e,bY,bZ){bV=" "+bV[1].replace(bM,"")+" ";
if(bZ){return bV
}for(var bW=0,bX;
(bX=bT[bW])!=null;
bW++){if(bX){if(bY^(bX.className&&(" "+bX.className+" ").replace(/[\t\n\r]/g," ").indexOf(bV)>=0)){if(!bU){e.push(bX)
}}else{if(bU){bT[bW]=false
}}}}return false
},ID:function(e){return e[1].replace(bM,"")
},TAG:function(bT,e){return bT[1].replace(bM,"").toLowerCase()
},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){bA.error(e[0])
}e[2]=e[2].replace(/^\+|\s*/g,"");
var bT=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);
e[2]=(bT[1]+(bT[2]||1))-0;
e[3]=bT[3]-0
}else{if(e[2]){bA.error(e[0])
}}e[0]=bK++;
return e
},ATTR:function(bW,bT,bU,e,bX,bY){var bV=bW[1]=bW[1].replace(bM,"");
if(!bY&&bG.attrMap[bV]){bW[1]=bG.attrMap[bV]
}bW[4]=(bW[4]||bW[5]||"").replace(bM,"");
if(bW[2]==="~="){bW[4]=" "+bW[4]+" "
}return bW
},PSEUDO:function(bW,bT,bU,e,bX){if(bW[1]==="not"){if((bJ.exec(bW[3])||"").length>1||/^\w/.test(bW[3])){bW[3]=bA(bW[3],null,null,bT)
}else{var bV=bA.filter(bW[3],bT,bU,true^bX);
if(!bU){e.push.apply(e,bV)
}return false
}}else{if(bG.match.POS.test(bW[0])||bG.match.CHILD.test(bW[0])){return true
}}return bW
},POS:function(e){e.unshift(true);
return e
}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"
},disabled:function(e){return e.disabled===true
},checked:function(e){return e.checked===true
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},parent:function(e){return !!e.firstChild
},empty:function(e){return !e.firstChild
},has:function(bU,bT,e){return !!bA(e[3],bU).length
},header:function(e){return(/h\d/i).test(e.nodeName)
},text:function(bU){var e=bU.getAttribute("type"),bT=bU.type;
return bU.nodeName.toLowerCase()==="input"&&"text"===bT&&(e===bT||e===null)
},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type
},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type
},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type
},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type
},submit:function(bT){var e=bT.nodeName.toLowerCase();
return(e==="input"||e==="button")&&"submit"===bT.type
},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type
},reset:function(bT){var e=bT.nodeName.toLowerCase();
return(e==="input"||e==="button")&&"reset"===bT.type
},button:function(bT){var e=bT.nodeName.toLowerCase();
return e==="input"&&"button"===bT.type||e==="button"
},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)
},focus:function(e){return e===e.ownerDocument.activeElement
}},setFilters:{first:function(bT,e){return e===0
},last:function(bU,bT,e,bV){return bT===bV.length-1
},even:function(bT,e){return e%2===0
},odd:function(bT,e){return e%2===1
},lt:function(bU,bT,e){return bT<e[3]-0
},gt:function(bU,bT,e){return bT>e[3]-0
},nth:function(bU,bT,e){return e[3]-0===bT
},eq:function(bU,bT,e){return e[3]-0===bT
}},filter:{PSEUDO:function(bU,bZ,bY,b0){var e=bZ[1],bT=bG.filters[e];
if(bT){return bT(bU,bY,bZ,b0)
}else{if(e==="contains"){return(bU.textContent||bU.innerText||by([bU])||"").indexOf(bZ[3])>=0
}else{if(e==="not"){var bV=bZ[3];
for(var bX=0,bW=bV.length;
bX<bW;
bX++){if(bV[bX]===bU){return false
}}return true
}else{bA.error(e)
}}}},CHILD:function(bU,bW){var bV,b2,bY,b1,e,bX,b0,bZ=bW[1],bT=bU;
switch(bZ){case"only":case"first":while((bT=bT.previousSibling)){if(bT.nodeType===1){return false
}}if(bZ==="first"){return true
}bT=bU;
case"last":while((bT=bT.nextSibling)){if(bT.nodeType===1){return false
}}return true;
case"nth":bV=bW[2];
b2=bW[3];
if(bV===1&&b2===0){return true
}bY=bW[0];
b1=bU.parentNode;
if(b1&&(b1[bE]!==bY||!bU.nodeIndex)){bX=0;
for(bT=b1.firstChild;
bT;
bT=bT.nextSibling){if(bT.nodeType===1){bT.nodeIndex=++bX
}}b1[bE]=bY
}b0=bU.nodeIndex-b2;
if(bV===0){return b0===0
}else{return(b0%bV===0&&b0/bV>=0)
}}},ID:function(bT,e){return bT.nodeType===1&&bT.getAttribute("id")===e
},TAG:function(bT,e){return(e==="*"&&bT.nodeType===1)||!!bT.nodeName&&bT.nodeName.toLowerCase()===e
},CLASS:function(bT,e){return(" "+(bT.className||bT.getAttribute("class"))+" ").indexOf(e)>-1
},ATTR:function(bX,bV){var bU=bV[1],e=bA.attr?bA.attr(bX,bU):bG.attrHandle[bU]?bG.attrHandle[bU](bX):bX[bU]!=null?bX[bU]:bX.getAttribute(bU),bY=e+"",bW=bV[2],bT=bV[4];
return e==null?bW==="!=":!bW&&bA.attr?e!=null:bW==="="?bY===bT:bW==="*="?bY.indexOf(bT)>=0:bW==="~="?(" "+bY+" ").indexOf(bT)>=0:!bT?bY&&e!==false:bW==="!="?bY!==bT:bW==="^="?bY.indexOf(bT)===0:bW==="$="?bY.substr(bY.length-bT.length)===bT:bW==="|="?bY===bT||bY.substr(0,bT.length+1)===bT+"-":false
},POS:function(bW,bT,bU,bX){var e=bT[2],bV=bG.setFilters[e];
if(bV){return bV(bW,bU,bT,bX)
}}}};
var bF=bG.match.POS,bz=function(bT,e){return"\\"+(e-0+1)
};
for(var bB in bG.match){bG.match[bB]=new RegExp(bG.match[bB].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
bG.leftMatch[bB]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bG.match[bB].source.replace(/\\(\d+)/g,bz))
}var bH=function(bT,e){bT=Array.prototype.slice.call(bT,0);
if(e){e.push.apply(e,bT);
return e
}return bT
};
try{Array.prototype.slice.call(au.documentElement.childNodes,0)[0].nodeType
}catch(bR){bH=function(bW,bV){var bU=0,bT=bV||[];
if(bN.call(bW)==="[object Array]"){Array.prototype.push.apply(bT,bW)
}else{if(typeof bW.length==="number"){for(var e=bW.length;
bU<e;
bU++){bT.push(bW[bU])
}}else{for(;
bW[bU];
bU++){bT.push(bW[bU])
}}}return bT
}
}var bL,bI;
if(au.documentElement.compareDocumentPosition){bL=function(bT,e){if(bT===e){bD=true;
return 0
}if(!bT.compareDocumentPosition||!e.compareDocumentPosition){return bT.compareDocumentPosition?-1:1
}return bT.compareDocumentPosition(e)&4?-1:1
}
}else{bL=function(b0,bZ){if(b0===bZ){bD=true;
return 0
}else{if(b0.sourceIndex&&bZ.sourceIndex){return b0.sourceIndex-bZ.sourceIndex
}}var bX,bT,bU=[],e=[],bW=b0.parentNode,bY=bZ.parentNode,b1=bW;
if(bW===bY){return bI(b0,bZ)
}else{if(!bW){return -1
}else{if(!bY){return 1
}}}while(b1){bU.unshift(b1);
b1=b1.parentNode
}b1=bY;
while(b1){e.unshift(b1);
b1=b1.parentNode
}bX=bU.length;
bT=e.length;
for(var bV=0;
bV<bX&&bV<bT;
bV++){if(bU[bV]!==e[bV]){return bI(bU[bV],e[bV])
}}return bV===bX?bI(b0,e[bV],-1):bI(bU[bV],bZ,1)
};
bI=function(bT,e,bU){if(bT===e){return bU
}var bV=bT.nextSibling;
while(bV){if(bV===e){return -1
}bV=bV.nextSibling
}return 1
}
}(function(){var bT=au.createElement("div"),bU="script"+(new Date()).getTime(),e=au.documentElement;
bT.innerHTML="<a name='"+bU+"'/>";
e.insertBefore(bT,e.firstChild);
if(au.getElementById(bU)){bG.find.ID=function(bW,bX,bY){if(typeof bX.getElementById!=="undefined"&&!bY){var bV=bX.getElementById(bW[1]);
return bV?bV.id===bW[1]||typeof bV.getAttributeNode!=="undefined"&&bV.getAttributeNode("id").nodeValue===bW[1]?[bV]:L:[]
}};
bG.filter.ID=function(bX,bV){var bW=typeof bX.getAttributeNode!=="undefined"&&bX.getAttributeNode("id");
return bX.nodeType===1&&bW&&bW.nodeValue===bV
}
}e.removeChild(bT);
e=bT=null
})();
(function(){var e=au.createElement("div");
e.appendChild(au.createComment(""));
if(e.getElementsByTagName("*").length>0){bG.find.TAG=function(bT,bX){var bW=bX.getElementsByTagName(bT[1]);
if(bT[1]==="*"){var bV=[];
for(var bU=0;
bW[bU];
bU++){if(bW[bU].nodeType===1){bV.push(bW[bU])
}}bW=bV
}return bW
}
}e.innerHTML="<a href='#'></a>";
if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){bG.attrHandle.href=function(bT){return bT.getAttribute("href",2)
}
}e=null
})();
if(au.querySelectorAll){(function(){var e=bA,bV=au.createElement("div"),bU="__sizzle__";
bV.innerHTML="<p class='TEST'></p>";
if(bV.querySelectorAll&&bV.querySelectorAll(".TEST").length===0){return
}bA=function(b6,bX,b1,b5){bX=bX||au;
if(!b5&&!bA.isXML(bX)){var b4=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b6);
if(b4&&(bX.nodeType===1||bX.nodeType===9)){if(b4[1]){return bH(bX.getElementsByTagName(b6),b1)
}else{if(b4[2]&&bG.find.CLASS&&bX.getElementsByClassName){return bH(bX.getElementsByClassName(b4[2]),b1)
}}}if(bX.nodeType===9){if(b6==="body"&&bX.body){return bH([bX.body],b1)
}else{if(b4&&b4[3]){var b0=bX.getElementById(b4[3]);
if(b0&&b0.parentNode){if(b0.id===b4[3]){return bH([b0],b1)
}}else{return bH([],b1)
}}}try{return bH(bX.querySelectorAll(b6),b1)
}catch(b2){}}else{if(bX.nodeType===1&&bX.nodeName.toLowerCase()!=="object"){var bY=bX,bZ=bX.getAttribute("id"),bW=bZ||bU,b8=bX.parentNode,b7=/^\s*[+~]/.test(b6);
if(!bZ){bX.setAttribute("id",bW)
}else{bW=bW.replace(/'/g,"\\$&")
}if(b7&&b8){bX=bX.parentNode
}try{if(!b7||b8){return bH(bX.querySelectorAll("[id='"+bW+"'] "+b6),b1)
}}catch(b3){}finally{if(!bZ){bY.removeAttribute("id")
}}}}}return e(b6,bX,b1,b5)
};
for(var bT in e){bA[bT]=e[bT]
}bV=null
})()
}(function(){var e=au.documentElement,bU=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;
if(bU){var bW=!bU.call(au.createElement("div"),"div"),bT=false;
try{bU.call(au.documentElement,"[test!='']:sizzle")
}catch(bV){bT=true
}bA.matchesSelector=function(bY,b0){b0=b0.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!bA.isXML(bY)){try{if(bT||!bG.match.PSEUDO.test(b0)&&!/!=/.test(b0)){var bX=bU.call(bY,b0);
if(bX||!bW||bY.document&&bY.document.nodeType!==11){return bX
}}}catch(bZ){}}return bA(b0,null,null,[bY]).length>0
}
}})();
(function(){var e=au.createElement("div");
e.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return
}e.lastChild.className="e";
if(e.getElementsByClassName("e").length===1){return
}bG.order.splice(1,0,"CLASS");
bG.find.CLASS=function(bT,bU,bV){if(typeof bU.getElementsByClassName!=="undefined"&&!bV){return bU.getElementsByClassName(bT[1])
}};
e=null
})();
function bx(bT,bY,bX,b1,bZ,b0){for(var bV=0,bU=b1.length;
bV<bU;
bV++){var e=b1[bV];
if(e){var bW=false;
e=e[bT];
while(e){if(e[bE]===bX){bW=b1[e.sizset];
break
}if(e.nodeType===1&&!b0){e[bE]=bX;
e.sizset=bV
}if(e.nodeName.toLowerCase()===bY){bW=e;
break
}e=e[bT]
}b1[bV]=bW
}}}function bP(bT,bY,bX,b1,bZ,b0){for(var bV=0,bU=b1.length;
bV<bU;
bV++){var e=b1[bV];
if(e){var bW=false;
e=e[bT];
while(e){if(e[bE]===bX){bW=b1[e.sizset];
break
}if(e.nodeType===1){if(!b0){e[bE]=bX;
e.sizset=bV
}if(typeof bY!=="string"){if(e===bY){bW=true;
break
}}else{if(bA.filter(bY,[e]).length>0){bW=e;
break
}}}e=e[bT]
}b1[bV]=bW
}}}if(au.documentElement.contains){bA.contains=function(bT,e){return bT!==e&&(bT.contains?bT.contains(e):true)
}
}else{if(au.documentElement.compareDocumentPosition){bA.contains=function(bT,e){return !!(bT.compareDocumentPosition(e)&16)
}
}else{bA.contains=function(){return false
}
}}bA.isXML=function(e){var bT=(e?e.ownerDocument||e:0).documentElement;
return bT?bT.nodeName!=="HTML":false
};
var bO=function(bU,e,bY){var bX,bZ=[],bW="",b0=e.nodeType?[e]:e;
while((bX=bG.match.PSEUDO.exec(bU))){bW+=bX[0];
bU=bU.replace(bG.match.PSEUDO,"")
}bU=bG.relative[bU]?bU+"*":bU;
for(var bV=0,bT=b0.length;
bV<bT;
bV++){bA(bU,b0[bV],bZ,bY)
}return bA.filter(bW,bZ)
};
bA.attr=b.attr;
bA.selectors.attrMap={};
b.find=bA;
b.expr=bA.selectors;
b.expr[":"]=b.expr.filters;
b.unique=bA.uniqueSort;
b.text=bA.getText;
b.isXMLDoc=bA.isXML;
b.contains=bA.contains
})();
var ab=/Until$/,ap=/^(?:parents|prevUntil|prevAll)/,ba=/,/,br=/^.[^:#\[\.,]*$/,Q=Array.prototype.slice,H=b.expr.match.POS,ax={children:true,contents:true,next:true,prev:true};
b.fn.extend({find:function(e){var by=this,bA,bx;
if(typeof e!=="string"){return b(e).filter(function(){for(bA=0,bx=by.length;
bA<bx;
bA++){if(b.contains(by[bA],this)){return true
}}})
}var bz=this.pushStack("","find",e),bC,bD,bB;
for(bA=0,bx=this.length;
bA<bx;
bA++){bC=bz.length;
b.find(e,this[bA],bz);
if(bA>0){for(bD=bC;
bD<bz.length;
bD++){for(bB=0;
bB<bC;
bB++){if(bz[bB]===bz[bD]){bz.splice(bD--,1);
break
}}}}}return bz
},has:function(bx){var e=b(bx);
return this.filter(function(){for(var bz=0,by=e.length;
bz<by;
bz++){if(b.contains(this,e[bz])){return true
}}})
},not:function(e){return this.pushStack(aF(this,e,false),"not",e)
},filter:function(e){return this.pushStack(aF(this,e,true),"filter",e)
},is:function(e){return !!e&&(typeof e==="string"?H.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(bA,bz){var bx=[],by,e,bB=this[0];
if(b.isArray(bA)){var bD=1;
while(bB&&bB.ownerDocument&&bB!==bz){for(by=0;
by<bA.length;
by++){if(b(bB).is(bA[by])){bx.push({selector:bA[by],elem:bB,level:bD})
}}bB=bB.parentNode;
bD++
}return bx
}var bC=H.test(bA)||typeof bA!=="string"?b(bA,bz||this.context):0;
for(by=0,e=this.length;
by<e;
by++){bB=this[by];
while(bB){if(bC?bC.index(bB)>-1:b.find.matchesSelector(bB,bA)){bx.push(bB);
break
}else{bB=bB.parentNode;
if(!bB||!bB.ownerDocument||bB===bz||bB.nodeType===11){break
}}}}bx=bx.length>1?b.unique(bx):bx;
return this.pushStack(bx,"closest",bA)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return b.inArray(this[0],b(e))
}return b.inArray(e.jquery?e[0]:e,this)
},add:function(e,bx){var bz=typeof e==="string"?b(e,bx):b.makeArray(e&&e.nodeType?[e]:e),by=b.merge(this.get(),bz);
return this.pushStack(C(bz[0])||C(by[0])?by:b.unique(by))
},andSelf:function(){return this.add(this.prevObject)
}});
function C(e){return !e||!e.parentNode||e.parentNode.nodeType===11
}b.each({parent:function(bx){var e=bx.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return b.dir(e,"parentNode")
},parentsUntil:function(bx,e,by){return b.dir(bx,"parentNode",by)
},next:function(e){return b.nth(e,2,"nextSibling")
},prev:function(e){return b.nth(e,2,"previousSibling")
},nextAll:function(e){return b.dir(e,"nextSibling")
},prevAll:function(e){return b.dir(e,"previousSibling")
},nextUntil:function(bx,e,by){return b.dir(bx,"nextSibling",by)
},prevUntil:function(bx,e,by){return b.dir(bx,"previousSibling",by)
},siblings:function(e){return b.sibling(e.parentNode.firstChild,e)
},children:function(e){return b.sibling(e.firstChild)
},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.makeArray(e.childNodes)
}},function(e,bx){b.fn[e]=function(bB,by){var bA=b.map(this,bx,bB),bz=Q.call(arguments);
if(!ab.test(e)){by=bB
}if(by&&typeof by==="string"){bA=b.filter(by,bA)
}bA=this.length>1&&!ax[e]?b.unique(bA):bA;
if((this.length>1||ba.test(by))&&ap.test(e)){bA=bA.reverse()
}return this.pushStack(bA,e,bz.join(","))
}
});
b.extend({filter:function(by,e,bx){if(bx){by=":not("+by+")"
}return e.length===1?b.find.matchesSelector(e[0],by)?[e[0]]:[]:b.find.matches(by,e)
},dir:function(by,bx,bA){var e=[],bz=by[bx];
while(bz&&bz.nodeType!==9&&(bA===L||bz.nodeType!==1||!b(bz).is(bA))){if(bz.nodeType===1){e.push(bz)
}bz=bz[bx]
}return e
},nth:function(bA,e,by,bz){e=e||1;
var bx=0;
for(;
bA;
bA=bA[by]){if(bA.nodeType===1&&++bx===e){break
}}return bA
},sibling:function(by,bx){var e=[];
for(;
by;
by=by.nextSibling){if(by.nodeType===1&&by!==bx){e.push(by)
}}return e
}});
function aF(bz,by,e){by=by||0;
if(b.isFunction(by)){return b.grep(bz,function(bB,bA){var bC=!!by.call(bB,bA,bB);
return bC===e
})
}else{if(by.nodeType){return b.grep(bz,function(bB,bA){return(bB===by)===e
})
}else{if(typeof by==="string"){var bx=b.grep(bz,function(bA){return bA.nodeType===1
});
if(br.test(by)){return b.filter(by,bx,!e)
}else{by=b.filter(by,bx)
}}}}return b.grep(bz,function(bB,bA){return(b.inArray(bB,by)>=0)===e
})
}function a(e){var by=aR.split(" "),bx=e.createDocumentFragment();
if(bx.createElement){while(by.length){bx.createElement(by.pop())
}}return bx
}var aR="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",ag=/ jQuery\d+="(?:\d+|null)"/g,aq=/^\s+/,S=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/<([\w:]+)/,w=/<tbody/i,W=/<|&#?\w+;/,ae=/<(?:script|style)/i,P=/<(?:script|object|embed|option|style)/i,ah=new RegExp("<(?:"+aR.replace(" ","|")+")","i"),o=/checked\s*(?:[^=]|=\s*.checked.)/i,bo=/\/(java|ecma)script/i,aN=/^\s*<!(?:\[CDATA\[|\-\-)/,aw={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ac=a(au);
aw.optgroup=aw.option;
aw.tbody=aw.tfoot=aw.colgroup=aw.caption=aw.thead;
aw.th=aw.td;
if(!b.support.htmlSerialize){aw._default=[1,"div<div>","</div>"]
}b.fn.extend({text:function(e){if(b.isFunction(e)){return this.each(function(by){var bx=b(this);
bx.text(e.call(this,by,bx.text()))
})
}if(typeof e!=="object"&&e!==L){return this.empty().append((this[0]&&this[0].ownerDocument||au).createTextNode(e))
}return b.text(this)
},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(by){b(this).wrapAll(e.call(this,by))
})
}if(this[0]){var bx=b(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){bx.insertBefore(this[0])
}bx.map(function(){var by=this;
while(by.firstChild&&by.firstChild.nodeType===1){by=by.firstChild
}return by
}).append(this)
}return this
},wrapInner:function(e){if(b.isFunction(e)){return this.each(function(bx){b(this).wrapInner(e.call(this,bx))
})
}return this.each(function(){var bx=b(this),by=bx.contents();
if(by.length){by.wrapAll(e)
}else{bx.append(e)
}})
},wrap:function(e){return this.each(function(){b(this).wrapAll(e)
})
},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.insertBefore(e,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bx){this.parentNode.insertBefore(bx,this)
})
}else{if(arguments.length){var e=b(arguments[0]);
e.push.apply(e,this.toArray());
return this.pushStack(e,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bx){this.parentNode.insertBefore(bx,this.nextSibling)
})
}else{if(arguments.length){var e=this.pushStack(this,"after",arguments);
e.push.apply(e,b(arguments[0]).toArray());
return e
}}},remove:function(e,bz){for(var bx=0,by;
(by=this[bx])!=null;
bx++){if(!e||b.filter(e,[by]).length){if(!bz&&by.nodeType===1){b.cleanData(by.getElementsByTagName("*"));
b.cleanData([by])
}if(by.parentNode){by.parentNode.removeChild(by)
}}}return this
},empty:function(){for(var e=0,bx;
(bx=this[e])!=null;
e++){if(bx.nodeType===1){b.cleanData(bx.getElementsByTagName("*"))
}while(bx.firstChild){bx.removeChild(bx.firstChild)
}}return this
},clone:function(bx,e){bx=bx==null?false:bx;
e=e==null?bx:e;
return this.map(function(){return b.clone(this,bx,e)
})
},html:function(bz){if(bz===L){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(ag,""):null
}else{if(typeof bz==="string"&&!ae.test(bz)&&(b.support.leadingWhitespace||!aq.test(bz))&&!aw[(d.exec(bz)||["",""])[1].toLowerCase()]){bz=bz.replace(S,"<$1></$2>");
try{for(var by=0,bx=this.length;
by<bx;
by++){if(this[by].nodeType===1){b.cleanData(this[by].getElementsByTagName("*"));
this[by].innerHTML=bz
}}}catch(bA){this.empty().append(bz)
}}else{if(b.isFunction(bz)){this.each(function(bB){var e=b(this);
e.html(bz.call(this,bB,e.html()))
})
}else{this.empty().append(bz)
}}}return this
},replaceWith:function(e){if(this[0]&&this[0].parentNode){if(b.isFunction(e)){return this.each(function(bz){var by=b(this),bx=by.html();
by.replaceWith(e.call(this,bz,bx))
})
}if(typeof e!=="string"){e=b(e).detach()
}return this.each(function(){var by=this.nextSibling,bx=this.parentNode;
b(this).remove();
if(by){b(by).before(e)
}else{b(bx).append(e)
}})
}else{return this.length?this.pushStack(b(b.isFunction(e)?e():e),"replaceWith",e):this
}},detach:function(e){return this.remove(e,true)
},domManip:function(bD,bH,bG){var bz,bA,bC,bF,bE=bD[0],bx=[];
if(!b.support.checkClone&&arguments.length===3&&typeof bE==="string"&&o.test(bE)){return this.each(function(){b(this).domManip(bD,bH,bG,true)
})
}if(b.isFunction(bE)){return this.each(function(bJ){var bI=b(this);
bD[0]=bE.call(this,bJ,bH?bI.html():L);
bI.domManip(bD,bH,bG)
})
}if(this[0]){bF=bE&&bE.parentNode;
if(b.support.parentNode&&bF&&bF.nodeType===11&&bF.childNodes.length===this.length){bz={fragment:bF}
}else{bz=b.buildFragment(bD,this,bx)
}bC=bz.fragment;
if(bC.childNodes.length===1){bA=bC=bC.firstChild
}else{bA=bC.firstChild
}if(bA){bH=bH&&b.nodeName(bA,"tr");
for(var by=0,e=this.length,bB=e-1;
by<e;
by++){bG.call(bH?bb(this[by],bA):this[by],bz.cacheable||(e>1&&by<bB)?b.clone(bC,true,true):bC)
}}if(bx.length){b.each(bx,bq)
}}return this
}});
function bb(e,bx){return b.nodeName(e,"table")?(e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody"))):e
}function t(bD,bx){if(bx.nodeType!==1||!b.hasData(bD)){return
}var bA,bz,e,bC=b._data(bD),bB=b._data(bx,bC),by=bC.events;
if(by){delete bB.handle;
bB.events={};
for(bA in by){for(bz=0,e=by[bA].length;
bz<e;
bz++){b.event.add(bx,bA+(by[bA][bz].namespace?".":"")+by[bA][bz].namespace,by[bA][bz],by[bA][bz].data)
}}}if(bB.data){bB.data=b.extend({},bB.data)
}}function ai(bx,e){var by;
if(e.nodeType!==1){return
}if(e.clearAttributes){e.clearAttributes()
}if(e.mergeAttributes){e.mergeAttributes(bx)
}by=e.nodeName.toLowerCase();
if(by==="object"){e.outerHTML=bx.outerHTML
}else{if(by==="input"&&(bx.type==="checkbox"||bx.type==="radio")){if(bx.checked){e.defaultChecked=e.checked=bx.checked
}if(e.value!==bx.value){e.value=bx.value
}}else{if(by==="option"){e.selected=bx.defaultSelected
}else{if(by==="input"||by==="textarea"){e.defaultValue=bx.defaultValue
}}}}e.removeAttribute(b.expando)
}b.buildFragment=function(bB,bz,bx){var bA,e,by,bC,bD=bB[0];
if(bz&&bz[0]){bC=bz[0].ownerDocument||bz[0]
}if(!bC.createDocumentFragment){bC=au
}if(bB.length===1&&typeof bD==="string"&&bD.length<512&&bC===au&&bD.charAt(0)==="<"&&!P.test(bD)&&(b.support.checkClone||!o.test(bD))&&(!b.support.unknownElems&&ah.test(bD))){e=true;
by=b.fragments[bD];
if(by&&by!==1){bA=by
}}if(!bA){bA=bC.createDocumentFragment();
b.clean(bB,bC,bA,bx)
}if(e){b.fragments[bD]=by?bA:1
}return{fragment:bA,cacheable:e}
};
b.fragments={};
b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,bx){b.fn[e]=function(by){var bB=[],bE=b(by),bD=this.length===1&&this[0].parentNode;
if(bD&&bD.nodeType===11&&bD.childNodes.length===1&&bE.length===1){bE[bx](this[0]);
return this
}else{for(var bC=0,bz=bE.length;
bC<bz;
bC++){var bA=(bC>0?this.clone(true):this).get();
b(bE[bC])[bx](bA);
bB=bB.concat(bA)
}return this.pushStack(bB,e,bE.selector)
}}
});
function bh(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")
}else{return[]
}}}function ay(e){if(e.type==="checkbox"||e.type==="radio"){e.defaultChecked=e.checked
}}function E(e){var bx=(e.nodeName||"").toLowerCase();
if(bx==="input"){ay(e)
}else{if(bx!=="script"&&typeof e.getElementsByTagName!=="undefined"){b.grep(e.getElementsByTagName("input"),ay)
}}}b.extend({clone:function(bA,bC,by){var bB=bA.cloneNode(true),e,bx,bz;
if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(bA.nodeType===1||bA.nodeType===11)&&!b.isXMLDoc(bA)){ai(bA,bB);
e=bh(bA);
bx=bh(bB);
for(bz=0;
e[bz];
++bz){if(bx[bz]){ai(e[bz],bx[bz])
}}}if(bC){t(bA,bB);
if(by){e=bh(bA);
bx=bh(bB);
for(bz=0;
e[bz];
++bz){t(e[bz],bx[bz])
}}}e=bx=null;
return bB
},clean:function(by,bA,bJ,bC){var bH;
bA=bA||au;
if(typeof bA.createElement==="undefined"){bA=bA.ownerDocument||bA[0]&&bA[0].ownerDocument||au
}var bK=[],bD;
for(var bG=0,bB;
(bB=by[bG])!=null;
bG++){if(typeof bB==="number"){bB+=""
}if(!bB){continue
}if(typeof bB==="string"){if(!W.test(bB)){bB=bA.createTextNode(bB)
}else{bB=bB.replace(S,"<$1></$2>");
var bM=(d.exec(bB)||["",""])[1].toLowerCase(),bz=aw[bM]||aw._default,bF=bz[0],bx=bA.createElement("div");
if(bA===au){ac.appendChild(bx)
}else{a(bA).appendChild(bx)
}bx.innerHTML=bz[1]+bB+bz[2];
while(bF--){bx=bx.lastChild
}if(!b.support.tbody){var e=w.test(bB),bE=bM==="table"&&!e?bx.firstChild&&bx.firstChild.childNodes:bz[1]==="<table>"&&!e?bx.childNodes:[];
for(bD=bE.length-1;
bD>=0;
--bD){if(b.nodeName(bE[bD],"tbody")&&!bE[bD].childNodes.length){bE[bD].parentNode.removeChild(bE[bD])
}}}if(!b.support.leadingWhitespace&&aq.test(bB)){bx.insertBefore(bA.createTextNode(aq.exec(bB)[0]),bx.firstChild)
}bB=bx.childNodes
}}var bI;
if(!b.support.appendChecked){if(bB[0]&&typeof(bI=bB.length)==="number"){for(bD=0;
bD<bI;
bD++){E(bB[bD])
}}else{E(bB)
}}if(bB.nodeType){bK.push(bB)
}else{bK=b.merge(bK,bB)
}}if(bJ){bH=function(bN){return !bN.type||bo.test(bN.type)
};
for(bG=0;
bK[bG];
bG++){if(bC&&b.nodeName(bK[bG],"script")&&(!bK[bG].type||bK[bG].type.toLowerCase()==="text/javascript")){bC.push(bK[bG].parentNode?bK[bG].parentNode.removeChild(bK[bG]):bK[bG])
}else{if(bK[bG].nodeType===1){var bL=b.grep(bK[bG].getElementsByTagName("script"),bH);
bK.splice.apply(bK,[bG+1,0].concat(bL))
}bJ.appendChild(bK[bG])
}}}return bK
},cleanData:function(bx){var bA,by,e=b.cache,bD=b.event.special,bC=b.support.deleteExpando;
for(var bB=0,bz;
(bz=bx[bB])!=null;
bB++){if(bz.nodeName&&b.noData[bz.nodeName.toLowerCase()]){continue
}by=bz[b.expando];
if(by){bA=e[by];
if(bA&&bA.events){for(var bE in bA.events){if(bD[bE]){b.event.remove(bz,bE)
}else{b.removeEvent(bz,bE,bA.handle)
}}if(bA.handle){bA.handle.elem=null
}}if(bC){delete bz[b.expando]
}else{if(bz.removeAttribute){bz.removeAttribute(b.expando)
}}delete e[by]
}}}});
function bq(e,bx){if(bx.src){b.ajax({url:bx.src,async:false,dataType:"script"})
}else{b.globalEval((bx.text||bx.textContent||bx.innerHTML||"").replace(aN,"/*$0*/"))
}if(bx.parentNode){bx.parentNode.removeChild(bx)
}}var ak=/alpha\([^)]*\)/i,at=/opacity=([^)]*)/,z=/([A-Z]|^ms)/g,bd=/^-?\d+(?:px)?$/i,bp=/^-?\d/,I=/^([\-+])=([\-+.\de]+)/,a8={position:"absolute",visibility:"hidden",display:"block"},am=["Left","Right"],a2=["Top","Bottom"],Z,aI,aX;
b.fn.css=function(e,bx){if(arguments.length===2&&bx===L){return this
}return b.access(this,e,bx,true,function(bz,by,bA){return bA!==L?b.style(bz,by,bA):b.css(bz,by)
})
};
b.extend({cssHooks:{opacity:{get:function(by,bx){if(bx){var e=Z(by,"opacity","opacity");
return e===""?"1":e
}else{return by.style.opacity
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(bz,by,bF,bA){if(!bz||bz.nodeType===3||bz.nodeType===8||!bz.style){return
}var bD,bE,bB=b.camelCase(by),bx=bz.style,bG=b.cssHooks[bB];
by=b.cssProps[bB]||bB;
if(bF!==L){bE=typeof bF;
if(bE==="string"&&(bD=I.exec(bF))){bF=(+(bD[1]+1)*+bD[2])+parseFloat(b.css(bz,by));
bE="number"
}if(bF==null||bE==="number"&&isNaN(bF)){return
}if(bE==="number"&&!b.cssNumber[bB]){bF+="px"
}if(!bG||!("set" in bG)||(bF=bG.set(bz,bF))!==L){try{bx[by]=bF
}catch(bC){}}}else{if(bG&&"get" in bG&&(bD=bG.get(bz,false,bA))!==L){return bD
}return bx[by]
}},css:function(bA,bz,bx){var by,e;
bz=b.camelCase(bz);
e=b.cssHooks[bz];
bz=b.cssProps[bz]||bz;
if(bz==="cssFloat"){bz="float"
}if(e&&"get" in e&&(by=e.get(bA,true,bx))!==L){return by
}else{if(Z){return Z(bA,bz)
}}},swap:function(bz,by,bA){var e={};
for(var bx in by){e[bx]=bz.style[bx];
bz.style[bx]=by[bx]
}bA.call(bz);
for(bx in by){bz.style[bx]=e[bx]
}}});
b.curCSS=b.css;
b.each(["height","width"],function(bx,e){b.cssHooks[e]={get:function(bA,bz,by){var bB;
if(bz){if(bA.offsetWidth!==0){return p(bA,e,by)
}else{b.swap(bA,a8,function(){bB=p(bA,e,by)
})
}return bB
}},set:function(by,bz){if(bd.test(bz)){bz=parseFloat(bz);
if(bz>=0){return bz+"px"
}}else{return bz
}}}
});
if(!b.support.opacity){b.cssHooks.opacity={get:function(bx,e){return at.test((e&&bx.currentStyle?bx.currentStyle.filter:bx.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":e?"1":""
},set:function(bA,bB){var bz=bA.style,bx=bA.currentStyle,e=b.isNumeric(bB)?"alpha(opacity="+bB*100+")":"",by=bx&&bx.filter||bz.filter||"";
bz.zoom=1;
if(bB>=1&&b.trim(by.replace(ak,""))===""){bz.removeAttribute("filter");
if(bx&&!bx.filter){return
}}bz.filter=ak.test(by)?by.replace(ak,e):by+" "+e
}}
}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(by,bx){var e;
b.swap(by,{display:"inline-block"},function(){if(bx){e=Z(by,"margin-right","marginRight")
}else{e=by.style.marginRight
}});
return e
}}
}});
if(au.defaultView&&au.defaultView.getComputedStyle){aI=function(bA,by){var bx,bz,e;
by=by.replace(z,"-$1").toLowerCase();
if(!(bz=bA.ownerDocument.defaultView)){return L
}if((e=bz.getComputedStyle(bA,null))){bx=e.getPropertyValue(by);
if(bx===""&&!b.contains(bA.ownerDocument.documentElement,bA)){bx=b.style(bA,by)
}}return bx
}
}if(au.documentElement.currentStyle){aX=function(bB,by){var bC,e,bA,bx=bB.currentStyle&&bB.currentStyle[by],bz=bB.style;
if(bx===null&&bz&&(bA=bz[by])){bx=bA
}if(!bd.test(bx)&&bp.test(bx)){bC=bz.left;
e=bB.runtimeStyle&&bB.runtimeStyle.left;
if(e){bB.runtimeStyle.left=bB.currentStyle.left
}bz.left=by==="fontSize"?"1em":(bx||0);
bx=bz.pixelLeft+"px";
bz.left=bC;
if(e){bB.runtimeStyle.left=e
}}return bx===""?"auto":bx
}
}Z=aI||aX;
function p(by,bx,e){var bA=bx==="width"?by.offsetWidth:by.offsetHeight,bz=bx==="width"?am:a2;
if(bA>0){if(e!=="border"){b.each(bz,function(){if(!e){bA-=parseFloat(b.css(by,"padding"+this))||0
}if(e==="margin"){bA+=parseFloat(b.css(by,e+this))||0
}else{bA-=parseFloat(b.css(by,"border"+this+"Width"))||0
}})
}return bA+"px"
}bA=Z(by,bx,bx);
if(bA<0||bA==null){bA=by.style[bx]||0
}bA=parseFloat(bA)||0;
if(e){b.each(bz,function(){bA+=parseFloat(b.css(by,"padding"+this))||0;
if(e!=="padding"){bA+=parseFloat(b.css(by,"border"+this+"Width"))||0
}if(e==="margin"){bA+=parseFloat(b.css(by,e+this))||0
}})
}return bA+"px"
}if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(by){var bx=by.offsetWidth,e=by.offsetHeight;
return(bx===0&&e===0)||(!b.support.reliableHiddenOffsets&&((by.style&&by.style.display)||b.css(by,"display"))==="none")
};
b.expr.filters.visible=function(e){return !b.expr.filters.hidden(e)
}
}var k=/%20/g,ao=/\[\]$/,bu=/\r?\n/g,bs=/#.*$/,aC=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,aZ=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aM=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,aQ=/^(?:GET|HEAD)$/,c=/^\/\//,M=/\?/,a7=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,q=/^(?:select|textarea)/i,h=/\s+/,bt=/([?&])_=[^&]*/,K=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,A=b.fn.load,aa={},r={},aD,s,aV=["*/"]+["*"];
try{aD=bn.href
}catch(av){aD=au.createElement("a");
aD.href="";
aD=aD.href
}s=K.exec(aD.toLowerCase())||[];
function f(e){return function(bA,bC){if(typeof bA!=="string"){bC=bA;
bA="*"
}if(b.isFunction(bC)){var bz=bA.toLowerCase().split(h),by=0,bB=bz.length,bx,bD,bE;
for(;
by<bB;
by++){bx=bz[by];
bE=/^\+/.test(bx);
if(bE){bx=bx.substr(1)||"*"
}bD=e[bx]=e[bx]||[];
bD[bE?"unshift":"push"](bC)
}}}
}function aW(bx,bG,bB,bF,bD,bz){bD=bD||bG.dataTypes[0];
bz=bz||{};
bz[bD]=true;
var bC=bx[bD],by=0,e=bC?bC.length:0,bA=(bx===aa),bE;
for(;
by<e&&(bA||!bE);
by++){bE=bC[by](bG,bB,bF);
if(typeof bE==="string"){if(!bA||bz[bE]){bE=L
}else{bG.dataTypes.unshift(bE);
bE=aW(bx,bG,bB,bF,bE,bz)
}}}if((bA||!bE)&&!bz["*"]){bE=aW(bx,bG,bB,bF,"*",bz)
}return bE
}function al(by,bz){var bx,e,bA=b.ajaxSettings.flatOptions||{};
for(bx in bz){if(bz[bx]!==L){(bA[bx]?by:(e||(e={})))[bx]=bz[bx]
}}if(e){b.extend(true,by,e)
}}b.fn.extend({load:function(by,bB,bC){if(typeof by!=="string"&&A){return A.apply(this,arguments)
}else{if(!this.length){return this
}}var bA=by.indexOf(" ");
if(bA>=0){var e=by.slice(bA,by.length);
by=by.slice(0,bA)
}var bz="GET";
if(bB){if(b.isFunction(bB)){bC=bB;
bB=L
}else{if(typeof bB==="object"){bB=b.param(bB,b.ajaxSettings.traditional);
bz="POST"
}}}var bx=this;
b.ajax({url:by,type:bz,dataType:"html",data:bB,complete:function(bE,bD,bF){bF=bE.responseText;
if(bE.isResolved()){bE.done(function(bG){bF=bG
});
bx.html(e?b("<div>").append(bF.replace(a7,"")).find(e):bF)
}if(bC){bx.each(bC,[bF,bD,bE])
}}});
return this
},serialize:function(){return b.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?b.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||q.test(this.nodeName)||aZ.test(this.type))
}).map(function(e,bx){var by=b(this).val();
return by==null?null:b.isArray(by)?b.map(by,function(bA,bz){return{name:bx.name,value:bA.replace(bu,"\r\n")}
}):{name:bx.name,value:by.replace(bu,"\r\n")}
}).get()
}});
b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bx){b.fn[bx]=function(by){return this.bind(bx,by)
}
});
b.each(["get","post"],function(e,bx){b[bx]=function(by,bA,bB,bz){if(b.isFunction(bA)){bz=bz||bB;
bB=bA;
bA=L
}return b.ajax({type:bx,url:by,data:bA,success:bB,dataType:bz})
}
});
b.extend({getScript:function(e,bx){return b.get(e,L,bx,"script")
},getJSON:function(e,bx,by){return b.get(e,bx,by,"json")
},ajaxSetup:function(bx,e){if(e){al(bx,b.ajaxSettings)
}else{e=bx;
bx=b.ajaxSettings
}al(bx,e);
return bx
},ajaxSettings:{url:aD,isLocal:aM.test(s[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aV},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bc.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:f(aa),ajaxTransport:f(r),ajax:function(bB,bz){if(typeof bB==="object"){bz=bB;
bB=L
}bz=bz||{};
var bF=b.ajaxSetup({},bz),bU=bF.context||bF,bI=bU!==bF&&(bU.nodeType||bU instanceof b)?b(bU):b.event,bT=b.Deferred(),bP=b.Callbacks("once memory"),bD=bF.statusCode||{},bE,bJ={},bQ={},bS,bA,bN,bG,bK,bC=0,by,bM,bL={readyState:0,setRequestHeader:function(bV,bW){if(!bC){var e=bV.toLowerCase();
bV=bQ[e]=bQ[e]||bV;
bJ[bV]=bW
}return this
},getAllResponseHeaders:function(){return bC===2?bS:null
},getResponseHeader:function(bV){var e;
if(bC===2){if(!bA){bA={};
while((e=aC.exec(bS))){bA[e[1].toLowerCase()]=e[2]
}}e=bA[bV.toLowerCase()]
}return e===L?null:e
},overrideMimeType:function(e){if(!bC){bF.mimeType=e
}return this
},abort:function(e){e=e||"abort";
if(bN){bN.abort(e)
}bH(0,e);
return this
}};
function bH(b1,bW,b2,bY){if(bC===2){return
}bC=2;
if(bG){clearTimeout(bG)
}bN=L;
bS=bY||"";
bL.readyState=b1>0?4:0;
var bV,b6,b5,bZ=bW,b0=b2?bl(bF,bL,b2):L,bX,b4;
if(b1>=200&&b1<300||b1===304){if(bF.ifModified){if((bX=bL.getResponseHeader("Last-Modified"))){b.lastModified[bE]=bX
}if((b4=bL.getResponseHeader("Etag"))){b.etag[bE]=b4
}}if(b1===304){bZ="notmodified";
bV=true
}else{try{b6=G(bF,b0);
bZ="success";
bV=true
}catch(b3){bZ="parsererror";
b5=b3
}}}else{b5=bZ;
if(!bZ||b1){bZ="error";
if(b1<0){b1=0
}}}bL.status=b1;
bL.statusText=""+(bW||bZ);
if(bV){bT.resolveWith(bU,[b6,bZ,bL])
}else{bT.rejectWith(bU,[bL,bZ,b5])
}bL.statusCode(bD);
bD=L;
if(by){bI.trigger("ajax"+(bV?"Success":"Error"),[bL,bF,bV?b6:b5])
}bP.fireWith(bU,[bL,bZ]);
if(by){bI.trigger("ajaxComplete",[bL,bF]);
if(!(--b.active)){b.event.trigger("ajaxStop")
}}}bT.promise(bL);
bL.success=bL.done;
bL.error=bL.fail;
bL.complete=bP.add;
bL.statusCode=function(bV){if(bV){var e;
if(bC<2){for(e in bV){bD[e]=[bD[e],bV[e]]
}}else{e=bV[bL.status];
bL.then(e,e)
}}return this
};
bF.url=((bB||bF.url)+"").replace(bs,"").replace(c,s[1]+"//");
bF.dataTypes=b.trim(bF.dataType||"*").toLowerCase().split(h);
if(bF.crossDomain==null){bK=K.exec(bF.url.toLowerCase());
bF.crossDomain=!!(bK&&(bK[1]!=s[1]||bK[2]!=s[2]||(bK[3]||(bK[1]==="http:"?80:443))!=(s[3]||(s[1]==="http:"?80:443))))
}if(bF.data&&bF.processData&&typeof bF.data!=="string"){bF.data=b.param(bF.data,bF.traditional)
}aW(aa,bF,bz,bL);
if(bC===2){return false
}by=bF.global;
bF.type=bF.type.toUpperCase();
bF.hasContent=!aQ.test(bF.type);
if(by&&b.active++===0){b.event.trigger("ajaxStart")
}if(!bF.hasContent){if(bF.data){bF.url+=(M.test(bF.url)?"&":"?")+bF.data;
delete bF.data
}bE=bF.url;
if(bF.cache===false){var bx=b.now(),bR=bF.url.replace(bt,"$1_="+bx);
bF.url=bR+((bR===bF.url)?(M.test(bF.url)?"&":"?")+"_="+bx:"")
}}if(bF.data&&bF.hasContent&&bF.contentType!==false||bz.contentType){bL.setRequestHeader("Content-Type",bF.contentType)
}if(bF.ifModified){bE=bE||bF.url;
if(b.lastModified[bE]){bL.setRequestHeader("If-Modified-Since",b.lastModified[bE])
}if(b.etag[bE]){bL.setRequestHeader("If-None-Match",b.etag[bE])
}}bL.setRequestHeader("Accept",bF.dataTypes[0]&&bF.accepts[bF.dataTypes[0]]?bF.accepts[bF.dataTypes[0]]+(bF.dataTypes[0]!=="*"?", "+aV+"; q=0.01":""):bF.accepts["*"]);
for(bM in bF.headers){bL.setRequestHeader(bM,bF.headers[bM])
}if(bF.beforeSend&&(bF.beforeSend.call(bU,bL,bF)===false||bC===2)){bL.abort();
return false
}for(bM in {success:1,error:1,complete:1}){bL[bM](bF[bM])
}bN=aW(r,bF,bz,bL);
if(!bN){bH(-1,"No Transport")
}else{bL.readyState=1;
if(by){bI.trigger("ajaxSend",[bL,bF])
}if(bF.async&&bF.timeout>0){bG=setTimeout(function(){bL.abort("timeout")
},bF.timeout)
}try{bC=1;
bN.send(bJ,bH)
}catch(bO){if(bC<2){bH(-1,bO)
}else{b.error(bO)
}}}return bL
},param:function(e,by){var bx=[],bA=function(bB,bC){bC=b.isFunction(bC)?bC():bC;
bx[bx.length]=encodeURIComponent(bB)+"="+encodeURIComponent(bC)
};
if(by===L){by=b.ajaxSettings.traditional
}if(b.isArray(e)||(e.jquery&&!b.isPlainObject(e))){b.each(e,function(){bA(this.name,this.value)
})
}else{for(var bz in e){v(bz,e[bz],by,bA)
}}return bx.join("&").replace(k,"+")
}});
function v(by,bA,bx,bz){if(b.isArray(bA)){b.each(bA,function(bC,bB){if(bx||ao.test(by)){bz(by,bB)
}else{v(by+"["+(typeof bB==="object"||b.isArray(bB)?bC:"")+"]",bB,bx,bz)
}})
}else{if(!bx&&bA!=null&&typeof bA==="object"){for(var e in bA){v(by+"["+e+"]",bA[e],bx,bz)
}}else{bz(by,bA)
}}}b.extend({active:0,lastModified:{},etag:{}});
function bl(bF,bE,bB){var bx=bF.contents,bD=bF.dataTypes,by=bF.responseFields,bA,bC,bz,e;
for(bC in by){if(bC in bB){bE[by[bC]]=bB[bC]
}}while(bD[0]==="*"){bD.shift();
if(bA===L){bA=bF.mimeType||bE.getResponseHeader("content-type")
}}if(bA){for(bC in bx){if(bx[bC]&&bx[bC].test(bA)){bD.unshift(bC);
break
}}}if(bD[0] in bB){bz=bD[0]
}else{for(bC in bB){if(!bD[0]||bF.converters[bC+" "+bD[0]]){bz=bC;
break
}if(!e){e=bC
}}bz=bz||e
}if(bz){if(bz!==bD[0]){bD.unshift(bz)
}return bB[bz]
}}function G(bJ,bB){if(bJ.dataFilter){bB=bJ.dataFilter(bB,bJ.dataType)
}var bF=bJ.dataTypes,bI={},bC,bG,by=bF.length,bD,bE=bF[0],bz,bA,bH,bx,e;
for(bC=1;
bC<by;
bC++){if(bC===1){for(bG in bJ.converters){if(typeof bG==="string"){bI[bG.toLowerCase()]=bJ.converters[bG]
}}}bz=bE;
bE=bF[bC];
if(bE==="*"){bE=bz
}else{if(bz!=="*"&&bz!==bE){bA=bz+" "+bE;
bH=bI[bA]||bI["* "+bE];
if(!bH){e=L;
for(bx in bI){bD=bx.split(" ");
if(bD[0]===bz||bD[0]==="*"){e=bI[bD[1]+" "+bE];
if(e){bx=bI[bx];
if(bx===true){bH=e
}else{if(e===true){bH=bx
}}break
}}}}if(!(bH||e)){b.error("No conversion from "+bA.replace(" "," to "))
}if(bH!==true){bB=bH?bH(bB):e(bx(bB))
}}}}return bB
}var aB=b.now(),u=/(\=)\?(&|$)|\?\?/i;
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return b.expando+"_"+(aB++)
}});
b.ajaxPrefilter("json jsonp",function(bF,bC,bE){var bz=bF.contentType==="application/x-www-form-urlencoded"&&(typeof bF.data==="string");
if(bF.dataTypes[0]==="jsonp"||bF.jsonp!==false&&(u.test(bF.url)||bz&&u.test(bF.data))){var bD,by=bF.jsonpCallback=b.isFunction(bF.jsonpCallback)?bF.jsonpCallback():bF.jsonpCallback,bB=bc[by],e=bF.url,bA=bF.data,bx="$1"+by+"$2";
if(bF.jsonp!==false){e=e.replace(u,bx);
if(bF.url===e){if(bz){bA=bA.replace(u,bx)
}if(bF.data===bA){e+=(/\?/.test(e)?"&":"?")+bF.jsonp+"="+by
}}}bF.url=e;
bF.data=bA;
bc[by]=function(bG){bD=[bG]
};
bE.always(function(){bc[by]=bB;
if(bD&&b.isFunction(bB)){bc[by](bD[0])
}});
bF.converters["script json"]=function(){if(!bD){b.error(by+" was not called")
}return bD[0]
};
bF.dataTypes[0]="json";
return"script"
}});
b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){b.globalEval(e);
return e
}}});
b.ajaxPrefilter("script",function(e){if(e.cache===L){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
b.ajaxTransport("script",function(by){if(by.crossDomain){var e,bx=au.head||au.getElementsByTagName("head")[0]||au.documentElement;
return{send:function(bz,bA){e=au.createElement("script");
e.async="async";
if(by.scriptCharset){e.charset=by.scriptCharset
}e.src=by.url;
e.onload=e.onreadystatechange=function(bC,bB){if(bB||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(bx&&e.parentNode){bx.removeChild(e)
}e=L;
if(!bB){bA(200,"success")
}}};
bx.insertBefore(e,bx.firstChild)
},abort:function(){if(e){e.onload(0,1)
}}}
}});
var B=bc.ActiveXObject?function(){for(var e in N){N[e](0,1)
}}:false,y=0,N;
function aL(){try{return new bc.XMLHttpRequest()
}catch(bx){}}function aj(){try{return new bc.ActiveXObject("Microsoft.XMLHTTP")
}catch(bx){}}b.ajaxSettings.xhr=bc.ActiveXObject?function(){return !this.isLocal&&aL()||aj()
}:aL;
(function(e){b.extend(b.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(b.ajaxSettings.xhr());
if(b.support.ajax){b.ajaxTransport(function(e){if(!e.crossDomain||b.support.cors){var bx;
return{send:function(bD,by){var bC=e.xhr(),bB,bA;
if(e.username){bC.open(e.type,e.url,e.async,e.username,e.password)
}else{bC.open(e.type,e.url,e.async)
}if(e.xhrFields){for(bA in e.xhrFields){bC[bA]=e.xhrFields[bA]
}}if(e.mimeType&&bC.overrideMimeType){bC.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!bD["X-Requested-With"]){bD["X-Requested-With"]="XMLHttpRequest"
}try{for(bA in bD){bC.setRequestHeader(bA,bD[bA])
}}catch(bz){}bC.send((e.hasContent&&e.data)||null);
bx=function(bM,bG){var bH,bF,bE,bK,bJ;
try{if(bx&&(bG||bC.readyState===4)){bx=L;
if(bB){bC.onreadystatechange=b.noop;
if(B){delete N[bB]
}}if(bG){if(bC.readyState!==4){bC.abort()
}}else{bH=bC.status;
bE=bC.getAllResponseHeaders();
bK={};
bJ=bC.responseXML;
if(bJ&&bJ.documentElement){bK.xml=bJ
}bK.text=bC.responseText;
try{bF=bC.statusText
}catch(bL){bF=""
}if(!bH&&e.isLocal&&!e.crossDomain){bH=bK.text?200:404
}else{if(bH===1223){bH=204
}}}}}catch(bI){if(!bG){by(-1,bI)
}}if(bK){by(bH,bF,bK,bE)
}};
if(!e.async||bC.readyState===4){bx()
}else{bB=++y;
if(B){if(!N){N={};
b(bc).unload(B)
}N[bB]=bx
}bC.onreadystatechange=bx
}},abort:function(){if(bx){bx(0,1)
}}}
}})
}var R={},a9,m,aA=/^(?:toggle|show|hide)$/,aT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,a4,aH=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],a5;
b.fn.extend({show:function(bz,bC,bB){var by,bA;
if(bz||bz===0){return this.animate(a1("show",3),bz,bC,bB)
}else{for(var bx=0,e=this.length;
bx<e;
bx++){by=this[bx];
if(by.style){bA=by.style.display;
if(!b._data(by,"olddisplay")&&bA==="none"){bA=by.style.display=""
}if(bA===""&&b.css(by,"display")==="none"){b._data(by,"olddisplay",x(by.nodeName))
}}}for(bx=0;
bx<e;
bx++){by=this[bx];
if(by.style){bA=by.style.display;
if(bA===""||bA==="none"){by.style.display=b._data(by,"olddisplay")||""
}}}return this
}},hide:function(bz,bC,bB){if(bz||bz===0){return this.animate(a1("hide",3),bz,bC,bB)
}else{var by,bA,bx=0,e=this.length;
for(;
bx<e;
bx++){by=this[bx];
if(by.style){bA=b.css(by,"display");
if(bA!=="none"&&!b._data(by,"olddisplay")){b._data(by,"olddisplay",bA)
}}}for(bx=0;
bx<e;
bx++){if(this[bx].style){this[bx].style.display="none"
}}return this
}},_toggle:b.fn.toggle,toggle:function(by,bx,bz){var e=typeof by==="boolean";
if(b.isFunction(by)&&b.isFunction(bx)){this._toggle.apply(this,arguments)
}else{if(by==null||e){this.each(function(){var bA=e?by:b(this).is(":hidden");
b(this)[bA?"show":"hide"]()
})
}else{this.animate(a1("toggle",3),by,bx,bz)
}}return this
},fadeTo:function(e,bz,by,bx){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bz},e,by,bx)
},animate:function(bB,by,bA,bz){var e=b.speed(by,bA,bz);
if(b.isEmptyObject(bB)){return this.each(e.complete,[false])
}bB=b.extend({},bB);
function bx(){if(e.queue===false){b._mark(this)
}var bG=b.extend({},e),bM=this.nodeType===1,bK=bM&&b(this).is(":hidden"),bD,bH,bF,bL,bJ,bE,bI,bN,bC;
bG.animatedProperties={};
for(bF in bB){bD=b.camelCase(bF);
if(bF!==bD){bB[bD]=bB[bF];
delete bB[bF]
}bH=bB[bD];
if(b.isArray(bH)){bG.animatedProperties[bD]=bH[1];
bH=bB[bD]=bH[0]
}else{bG.animatedProperties[bD]=bG.specialEasing&&bG.specialEasing[bD]||bG.easing||"swing"
}if(bH==="hide"&&bK||bH==="show"&&!bK){return bG.complete.call(this)
}if(bM&&(bD==="height"||bD==="width")){bG.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(b.css(this,"display")==="inline"&&b.css(this,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||x(this.nodeName)==="inline"){this.style.display="inline-block"
}else{this.style.zoom=1
}}}}if(bG.overflow!=null){this.style.overflow="hidden"
}for(bF in bB){bL=new b.fx(this,bG,bF);
bH=bB[bF];
if(aA.test(bH)){bC=b._data(this,"toggle"+bF)||(bH==="toggle"?bK?"show":"hide":0);
if(bC){b._data(this,"toggle"+bF,bC==="show"?"hide":"show");
bL[bC]()
}else{bL[bH]()
}}else{bJ=aT.exec(bH);
bE=bL.cur();
if(bJ){bI=parseFloat(bJ[2]);
bN=bJ[3]||(b.cssNumber[bF]?"":"px");
if(bN!=="px"){b.style(this,bF,(bI||1)+bN);
bE=((bI||1)/bL.cur())*bE;
b.style(this,bF,bE+bN)
}if(bJ[1]){bI=((bJ[1]==="-="?-1:1)*bI)+bE
}bL.custom(bE,bI,bN)
}else{bL.custom(bE,bH,"")
}}}return true
}return e.queue===false?this.each(bx):this.queue(e.queue,bx)
},stop:function(by,bx,e){if(typeof by!=="string"){e=bx;
bx=by;
by=L
}if(bx&&by!==false){this.queue(by||"fx",[])
}return this.each(function(){var bA,bz=false,bC=b.timers,bB=b._data(this);
if(!e){b._unmark(true,this)
}function bD(bG,bH,bF){var bE=bH[bF];
b.removeData(bG,bF,true);
bE.stop(e)
}if(by==null){for(bA in bB){if(bB[bA].stop&&bA.indexOf(".run")===bA.length-4){bD(this,bB,bA)
}}}else{if(bB[bA=by+".run"]&&bB[bA].stop){bD(this,bB,bA)
}}for(bA=bC.length;
bA--;
){if(bC[bA].elem===this&&(by==null||bC[bA].queue===by)){if(e){bC[bA](true)
}else{bC[bA].saveState()
}bz=true;
bC.splice(bA,1)
}}if(!(e&&bz)){b.dequeue(this,by)
}})
}});
function bi(){setTimeout(ar,0);
return(a5=b.now())
}function ar(){a5=L
}function a1(bx,e){var by={};
b.each(aH.concat.apply([],aH.slice(0,e)),function(){by[this]=bx
});
return by
}b.each({slideDown:a1("show",1),slideUp:a1("hide",1),slideToggle:a1("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,bx){b.fn[e]=function(by,bA,bz){return this.animate(bx,by,bA,bz)
}
});
b.extend({speed:function(by,bz,bx){var e=by&&typeof by==="object"?b.extend({},by):{complete:bx||!bx&&bz||b.isFunction(by)&&by,duration:by,easing:bx&&bz||bz&&!b.isFunction(bz)&&bz};
e.duration=b.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in b.fx.speeds?b.fx.speeds[e.duration]:b.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(bA){if(b.isFunction(e.old)){e.old.call(this)
}if(e.queue){b.dequeue(this,e.queue)
}else{if(bA!==false){b._unmark(this)
}}};
return e
},easing:{linear:function(by,bz,e,bx){return e+bx*by
},swing:function(by,bz,e,bx){return((-Math.cos(by*Math.PI)/2)+0.5)*bx+e
}},timers:[],fx:function(bx,e,by){this.options=e;
this.elem=bx;
this.prop=by;
e.orig=e.orig||{}
}});
b.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(b.fx.step[this.prop]||b.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var e,bx=b.css(this.elem,this.prop);
return isNaN(e=parseFloat(bx))?!bx||bx==="auto"?0:bx:e
},custom:function(bB,bA,bz){var e=this,by=b.fx;
this.startTime=a5||bi();
this.end=bA;
this.now=this.start=bB;
this.pos=this.state=0;
this.unit=bz||this.unit||(b.cssNumber[this.prop]?"":"px");
function bx(bC){return e.step(bC)
}bx.queue=this.options.queue;
bx.elem=this.elem;
bx.saveState=function(){if(e.options.hide&&b._data(e.elem,"fxshow"+e.prop)===L){b._data(e.elem,"fxshow"+e.prop,e.start)
}};
if(bx()&&b.timers.push(bx)&&!a4){a4=setInterval(by.tick,by.interval)
}},show:function(){var e=b._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=e||b.style(this.elem,this.prop);
this.options.show=true;
if(e!==L){this.custom(this.cur(),e)
}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())
}b(this.elem).show()
},hide:function(){this.options.orig[this.prop]=b._data(this.elem,"fxshow"+this.prop)||b.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(bA){var bC,bD,bx,bz=a5||bi(),e=true,bB=this.elem,by=this.options;
if(bA||bz>=by.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
by.animatedProperties[this.prop]=true;
for(bC in by.animatedProperties){if(by.animatedProperties[bC]!==true){e=false
}}if(e){if(by.overflow!=null&&!b.support.shrinkWrapBlocks){b.each(["","X","Y"],function(bE,bF){bB.style["overflow"+bF]=by.overflow[bE]
})
}if(by.hide){b(bB).hide()
}if(by.hide||by.show){for(bC in by.animatedProperties){b.style(bB,bC,by.orig[bC]);
b.removeData(bB,"fxshow"+bC,true);
b.removeData(bB,"toggle"+bC,true)
}}bx=by.complete;
if(bx){by.complete=false;
bx.call(bB)
}}return false
}else{if(by.duration==Infinity){this.now=bz
}else{bD=bz-this.startTime;
this.state=bD/by.duration;
this.pos=b.easing[by.animatedProperties[this.prop]](this.state,bD,0,1,by.duration);
this.now=this.start+((this.end-this.start)*this.pos)
}this.update()
}return true
}};
b.extend(b.fx,{tick:function(){var by,bx=b.timers,e=0;
for(;
e<bx.length;
e++){by=bx[e];
if(!by()&&bx[e]===by){bx.splice(e--,1)
}}if(!bx.length){b.fx.stop()
}},interval:13,stop:function(){clearInterval(a4);
a4=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){b.style(e.elem,"opacity",e.now)
},_default:function(e){if(e.elem.style&&e.elem.style[e.prop]!=null){e.elem.style[e.prop]=e.now+e.unit
}else{e.elem[e.prop]=e.now
}}}});
b.each(["width","height"],function(e,bx){b.fx.step[bx]=function(by){b.style(by.elem,bx,Math.max(0,by.now))
}
});
if(b.expr&&b.expr.filters){b.expr.filters.animated=function(e){return b.grep(b.timers,function(bx){return e===bx.elem
}).length
}
}function x(bz){if(!R[bz]){var e=au.body,bx=b("<"+bz+">").appendTo(e),by=bx.css("display");
bx.remove();
if(by==="none"||by===""){if(!a9){a9=au.createElement("iframe");
a9.frameBorder=a9.width=a9.height=0
}e.appendChild(a9);
if(!m||!a9.createElement){m=(a9.contentWindow||a9.contentDocument).document;
m.write((au.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");
m.close()
}bx=m.createElement(bz);
m.body.appendChild(bx);
by=b.css(bx,"display");
e.removeChild(a9)
}R[bz]=by
}return R[bz]
}var V=/^t(?:able|d|h)$/i,ad=/^(?:body|html)$/i;
if("getBoundingClientRect" in au.documentElement){b.fn.offset=function(bK){var bA=this[0],bD;
if(bK){return this.each(function(e){b.offset.setOffset(this,bK,e)
})
}if(!bA||!bA.ownerDocument){return null
}if(bA===bA.ownerDocument.body){return b.offset.bodyOffset(bA)
}try{bD=bA.getBoundingClientRect()
}catch(bH){}var bJ=bA.ownerDocument,by=bJ.documentElement;
if(!bD||!b.contains(by,bA)){return bD?{top:bD.top,left:bD.left}:{top:0,left:0}
}var bE=bJ.body,bF=aK(bJ),bC=by.clientTop||bE.clientTop||0,bG=by.clientLeft||bE.clientLeft||0,bx=bF.pageYOffset||b.support.boxModel&&by.scrollTop||bE.scrollTop,bB=bF.pageXOffset||b.support.boxModel&&by.scrollLeft||bE.scrollLeft,bI=bD.top+bx-bC,bz=bD.left+bB-bG;
return{top:bI,left:bz}
}
}else{b.fn.offset=function(bH){var bB=this[0];
if(bH){return this.each(function(bI){b.offset.setOffset(this,bH,bI)
})
}if(!bB||!bB.ownerDocument){return null
}if(bB===bB.ownerDocument.body){return b.offset.bodyOffset(bB)
}var bE,by=bB.offsetParent,bx=bB,bG=bB.ownerDocument,bz=bG.documentElement,bC=bG.body,bD=bG.defaultView,e=bD?bD.getComputedStyle(bB,null):bB.currentStyle,bF=bB.offsetTop,bA=bB.offsetLeft;
while((bB=bB.parentNode)&&bB!==bC&&bB!==bz){if(b.support.fixedPosition&&e.position==="fixed"){break
}bE=bD?bD.getComputedStyle(bB,null):bB.currentStyle;
bF-=bB.scrollTop;
bA-=bB.scrollLeft;
if(bB===by){bF+=bB.offsetTop;
bA+=bB.offsetLeft;
if(b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells&&V.test(bB.nodeName))){bF+=parseFloat(bE.borderTopWidth)||0;
bA+=parseFloat(bE.borderLeftWidth)||0
}bx=by;
by=bB.offsetParent
}if(b.support.subtractsBorderForOverflowNotVisible&&bE.overflow!=="visible"){bF+=parseFloat(bE.borderTopWidth)||0;
bA+=parseFloat(bE.borderLeftWidth)||0
}e=bE
}if(e.position==="relative"||e.position==="static"){bF+=bC.offsetTop;
bA+=bC.offsetLeft
}if(b.support.fixedPosition&&e.position==="fixed"){bF+=Math.max(bz.scrollTop,bC.scrollTop);
bA+=Math.max(bz.scrollLeft,bC.scrollLeft)
}return{top:bF,left:bA}
}
}b.offset={bodyOffset:function(e){var by=e.offsetTop,bx=e.offsetLeft;
if(b.support.doesNotIncludeMarginInBodyOffset){by+=parseFloat(b.css(e,"marginTop"))||0;
bx+=parseFloat(b.css(e,"marginLeft"))||0
}return{top:by,left:bx}
},setOffset:function(bz,bI,bC){var bD=b.css(bz,"position");
if(bD==="static"){bz.style.position="relative"
}var bB=b(bz),bx=bB.offset(),e=b.css(bz,"top"),bG=b.css(bz,"left"),bH=(bD==="absolute"||bD==="fixed")&&b.inArray("auto",[e,bG])>-1,bF={},bE={},by,bA;
if(bH){bE=bB.position();
by=bE.top;
bA=bE.left
}else{by=parseFloat(e)||0;
bA=parseFloat(bG)||0
}if(b.isFunction(bI)){bI=bI.call(bz,bC,bx)
}if(bI.top!=null){bF.top=(bI.top-bx.top)+by
}if(bI.left!=null){bF.left=(bI.left-bx.left)+bA
}if("using" in bI){bI.using.call(bz,bF)
}else{bB.css(bF)
}}};
b.fn.extend({position:function(){if(!this[0]){return null
}var by=this[0],bx=this.offsetParent(),bz=this.offset(),e=ad.test(bx[0].nodeName)?{top:0,left:0}:bx.offset();
bz.top-=parseFloat(b.css(by,"marginTop"))||0;
bz.left-=parseFloat(b.css(by,"marginLeft"))||0;
e.top+=parseFloat(b.css(bx[0],"borderTopWidth"))||0;
e.left+=parseFloat(b.css(bx[0],"borderLeftWidth"))||0;
return{top:bz.top-e.top,left:bz.left-e.left}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||au.body;
while(e&&(!ad.test(e.nodeName)&&b.css(e,"position")==="static")){e=e.offsetParent
}return e
})
}});
b.each(["Left","Top"],function(bx,e){var by="scroll"+e;
b.fn[by]=function(bB){var bz,bA;
if(bB===L){bz=this[0];
if(!bz){return null
}bA=aK(bz);
return bA?("pageXOffset" in bA)?bA[bx?"pageYOffset":"pageXOffset"]:b.support.boxModel&&bA.document.documentElement[by]||bA.document.body[by]:bz[by]
}return this.each(function(){bA=aK(this);
if(bA){bA.scrollTo(!bx?bB:b(bA).scrollLeft(),bx?bB:b(bA).scrollTop())
}else{this[by]=bB
}})
}
});
function aK(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}b.each(["Height","Width"],function(bx,e){var by=e.toLowerCase();
b.fn["inner"+e]=function(){var bz=this[0];
return bz?bz.style?parseFloat(b.css(bz,by,"padding")):this[by]():null
};
b.fn["outer"+e]=function(bA){var bz=this[0];
return bz?bz.style?parseFloat(b.css(bz,by,bA?"margin":"border")):this[by]():null
};
b.fn[by]=function(bB){var bC=this[0];
if(!bC){return bB==null?null:this
}if(b.isFunction(bB)){return this.each(function(bG){var bF=b(this);
bF[by](bB.call(this,bG,bF[by]()))
})
}if(b.isWindow(bC)){var bD=bC.document.documentElement["client"+e],bz=bC.document.body;
return bC.document.compatMode==="CSS1Compat"&&bD||bz&&bz["client"+e]||bD
}else{if(bC.nodeType===9){return Math.max(bC.documentElement["client"+e],bC.body["scroll"+e],bC.documentElement["scroll"+e],bC.body["offset"+e],bC.documentElement["offset"+e])
}else{if(bB===L){var bE=b.css(bC,by),bA=parseFloat(bE);
return b.isNumeric(bA)?bA:bE
}else{return this.css(by,typeof bB==="string"?bB:bB+"px")
}}}}
});
bc.jQuery=bc.$=b
})(window);
jQuery.cookie=function(d,e,b){if(arguments.length>1&&String(e)!=="[object Object]"){b=jQuery.extend({},b);
if(e===null||e===undefined){b.expires=-1
}if(typeof b.expires==="number"){var g=b.expires,c=b.expires=new Date();
c.setDate(c.getDate()+g)
}e=String(e);
return(document.cookie=[encodeURIComponent(d),"=",b.raw?e:encodeURIComponent(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))
}b=e||{};
var a,f=b.raw?function(h){return h
}:decodeURIComponent;
return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null
};
(function(c){var a=c.scrollTo=function(f,e,d){c(window).scrollTo(f,e,d)
};
a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1};
a.window=function(d){return c(window)._scrollable()
};
c.fn._scrollable=function(){return this.map(function(){var e=this,d=!e.nodeName||c.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!d){return e
}var f=(e.contentWindow||e).document||e.ownerDocument||e;
return c.browser.safari||f.compatMode=="BackCompat"?f.body:f.documentElement
})
};
c.fn.scrollTo=function(f,e,d){if(typeof e=="object"){d=e;
e=0
}if(typeof d=="function"){d={onAfter:d}
}if(f=="max"){f=9000000000
}d=c.extend({},a.defaults,d);
e=e||d.speed||d.duration;
d.queue=d.queue&&d.axis.length>1;
if(d.queue){e/=2
}d.offset=b(d.offset);
d.over=b(d.over);
return this._scrollable().each(function(){var l=this,j=c(l),k=f,i,g={},m=j.is("html,body");
switch(typeof k){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);
break
}k=c(k,this);
case"object":if(k.is||k.style){i=(k=c(k)).offset()
}}c.each(d.axis.split(""),function(q,r){var s=r=="x"?"Left":"Top",u=s.toLowerCase(),p="scroll"+s,o=l[p],n=a.max(l,r);
if(i){g[p]=i[u]+(m?0:o-j.offset()[u]);
if(d.margin){g[p]-=parseInt(k.css("margin"+s))||0;
g[p]-=parseInt(k.css("border"+s+"Width"))||0
}g[p]+=d.offset[u]||0;
if(d.over[u]){g[p]+=k[r=="x"?"width":"height"]()*d.over[u]
}}else{var t=k[u];
g[p]=t.slice&&t.slice(-1)=="%"?parseFloat(t)/100*n:t
}if(/^\d+$/.test(g[p])){g[p]=g[p]<=0?0:Math.min(g[p],n)
}if(!q&&d.queue){if(o!=g[p]){h(d.onAfterFirst)
}delete g[p]
}});
h(d.onAfter);
function h(n){j.animate(g,e,d.easing,n&&function(){n.call(this,f,d)
})
}}).end()
};
a.max=function(j,i){var h=i=="x"?"Width":"Height",e="scroll"+h;
if(!c(j).is("html,body")){return j[e]-c(j)[h.toLowerCase()]()
}var g="client"+h,f=j.ownerDocument.documentElement,d=j.ownerDocument.body;
return Math.max(f[e],d[e])-Math.min(f[g],d[g])
};
function b(d){return typeof d=="object"?d:{top:d,left:d}
}})(jQuery);
(function(){var u=this;
var r=u._;
var b={};
var i=Array.prototype,B=Object.prototype,D=Function.prototype;
var s=i.slice,w=i.unshift,v=B.toString,o=B.hasOwnProperty;
var m=i.forEach,h=i.map,z=i.reduce,e=i.reduceRight,l=i.filter,a=i.every,y=i.some,t=i.indexOf,f=i.lastIndexOf,c=Array.isArray,A=Object.keys,j=D.bind;
var C=function(E){return new g(E)
};
if(typeof module!=="undefined"&&module.exports){module.exports=C;
C._=C
}else{u._=C
}C.VERSION="1.1.7";
var d=C.each=C.forEach=function(J,I,H){if(J==null){return
}if(m&&J.forEach===m){J.forEach(I,H)
}else{if(J.length===+J.length){for(var G=0,E=J.length;
G<E;
G++){if(G in J&&I.call(H,J[G],G,J)===b){return
}}}else{for(var F in J){if(o.call(J,F)){if(I.call(H,J[F],F,J)===b){return
}}}}}};
C.map=function(H,G,F){var E=[];
if(H==null){return E
}if(h&&H.map===h){return H.map(G,F)
}d(H,function(K,I,J){E[E.length]=G.call(F,K,I,J)
});
return E
};
C.reduce=C.foldl=C.inject=function(I,H,E,G){var F=E!==void 0;
if(I==null){I=[]
}if(z&&I.reduce===z){if(G){H=C.bind(H,G)
}return F?I.reduce(H,E):I.reduce(H)
}d(I,function(L,J,K){if(!F){E=L;
F=true
}else{E=H.call(G,E,L,J,K)
}});
if(!F){throw new TypeError("Reduce of empty array with no initial value")
}return E
};
C.reduceRight=C.foldr=function(H,G,E,F){if(H==null){H=[]
}if(e&&H.reduceRight===e){if(F){G=C.bind(G,F)
}return E!==void 0?H.reduceRight(G,E):H.reduceRight(G)
}var I=(C.isArray(H)?H.slice():C.toArray(H)).reverse();
return C.reduce(I,G,E,F)
};
C.find=C.detect=function(H,G,F){var E;
p(H,function(K,I,J){if(G.call(F,K,I,J)){E=K;
return true
}});
return E
};
C.filter=C.select=function(H,G,F){var E=[];
if(H==null){return E
}if(l&&H.filter===l){return H.filter(G,F)
}d(H,function(K,I,J){if(G.call(F,K,I,J)){E[E.length]=K
}});
return E
};
C.reject=function(H,G,F){var E=[];
if(H==null){return E
}d(H,function(K,I,J){if(!G.call(F,K,I,J)){E[E.length]=K
}});
return E
};
C.every=C.all=function(H,G,F){var E=true;
if(H==null){return E
}if(a&&H.every===a){return H.every(G,F)
}d(H,function(K,I,J){if(!(E=E&&G.call(F,K,I,J))){return b
}});
return E
};
var p=C.some=C.any=function(H,G,F){G=G||C.identity;
var E=false;
if(H==null){return E
}if(y&&H.some===y){return H.some(G,F)
}d(H,function(K,I,J){if(E|=G.call(F,K,I,J)){return b
}});
return !!E
};
C.include=C.contains=function(G,F){var E=false;
if(G==null){return E
}if(t&&G.indexOf===t){return G.indexOf(F)!=-1
}p(G,function(H){if(E=H===F){return true
}});
return E
};
C.invoke=function(F,G){var E=s.call(arguments,2);
return C.map(F,function(H){return(G.call?G||H:H[G]).apply(H,E)
})
};
C.pluck=function(F,E){return C.map(F,function(G){return G[E]
})
};
C.max=function(H,G,F){if(!G&&C.isArray(H)){return Math.max.apply(Math,H)
}var E={computed:-Infinity};
d(H,function(L,I,K){var J=G?G.call(F,L,I,K):L;
J>=E.computed&&(E={value:L,computed:J})
});
return E.value
};
C.min=function(H,G,F){if(!G&&C.isArray(H)){return Math.min.apply(Math,H)
}var E={computed:Infinity};
d(H,function(L,I,K){var J=G?G.call(F,L,I,K):L;
J<E.computed&&(E={value:L,computed:J})
});
return E.value
};
C.sortBy=function(G,F,E){return C.pluck(C.map(G,function(J,H,I){return{value:J,criteria:F.call(E,J,H,I)}
}).sort(function(K,J){var I=K.criteria,H=J.criteria;
return I<H?-1:I>H?1:0
}),"value")
};
C.groupBy=function(G,F){var E={};
d(G,function(J,H){var I=F(J,H);
(E[I]||(E[I]=[])).push(J)
});
return E
};
C.sortedIndex=function(J,I,G){G||(G=C.identity);
var E=0,H=J.length;
while(E<H){var F=(E+H)>>1;
G(J[F])<G(I)?E=F+1:H=F
}return E
};
C.toArray=function(E){if(!E){return[]
}if(E.toArray){return E.toArray()
}if(C.isArray(E)){return s.call(E)
}if(C.isArguments(E)){return s.call(E)
}return C.values(E)
};
C.size=function(E){return C.toArray(E).length
};
C.first=C.head=function(G,F,E){return(F!=null)&&!E?s.call(G,0,F):G[0]
};
C.rest=C.tail=function(G,E,F){return s.call(G,(E==null)||F?1:E)
};
C.last=function(E){return E[E.length-1]
};
C.compact=function(E){return C.filter(E,function(F){return !!F
})
};
C.flatten=function(E){return C.reduce(E,function(F,G){if(C.isArray(G)){return F.concat(C.flatten(G))
}F[F.length]=G;
return F
},[])
};
C.without=function(E){return C.difference(E,s.call(arguments,1))
};
C.uniq=C.unique=function(F,E){return C.reduce(F,function(G,I,H){if(0==H||(E===true?C.last(G)!=I:!C.include(G,I))){G[G.length]=I
}return G
},[])
};
C.union=function(){return C.uniq(C.flatten(arguments))
};
C.intersection=C.intersect=function(F){var E=s.call(arguments,1);
return C.filter(C.uniq(F),function(G){return C.every(E,function(H){return C.indexOf(H,G)>=0
})
})
};
C.difference=function(F,E){return C.filter(F,function(G){return !C.include(E,G)
})
};
C.zip=function(){var E=s.call(arguments);
var H=C.max(C.pluck(E,"length"));
var G=new Array(H);
for(var F=0;
F<H;
F++){G[F]=C.pluck(E,""+F)
}return G
};
C.indexOf=function(I,G,H){if(I==null){return -1
}var F,E;
if(H){F=C.sortedIndex(I,G);
return I[F]===G?F:-1
}if(t&&I.indexOf===t){return I.indexOf(G)
}for(F=0,E=I.length;
F<E;
F++){if(I[F]===G){return F
}}return -1
};
C.lastIndexOf=function(G,F){if(G==null){return -1
}if(f&&G.lastIndexOf===f){return G.lastIndexOf(F)
}var E=G.length;
while(E--){if(G[E]===F){return E
}}return -1
};
C.range=function(J,H,I){if(arguments.length<=1){H=J||0;
J=0
}I=arguments[2]||1;
var F=Math.max(Math.ceil((H-J)/I),0);
var E=0;
var G=new Array(F);
while(E<F){G[E++]=J;
J+=I
}return G
};
C.bind=function(F,G){if(F.bind===j&&j){return j.apply(F,s.call(arguments,1))
}var E=s.call(arguments,2);
return function(){return F.apply(G,E.concat(s.call(arguments)))
}
};
C.bindAll=function(F){var E=s.call(arguments,1);
if(E.length==0){E=C.functions(F)
}d(E,function(G){F[G]=C.bind(F[G],F)
});
return F
};
C.memoize=function(G,F){var E={};
F||(F=C.identity);
return function(){var H=F.apply(this,arguments);
return o.call(E,H)?E[H]:(E[H]=G.apply(this,arguments))
}
};
C.delay=function(F,G){var E=s.call(arguments,2);
return setTimeout(function(){return F.apply(F,E)
},G)
};
C.defer=function(E){return C.delay.apply(C,[E,1].concat(s.call(arguments,1)))
};
var x=function(F,H,E){var G;
return function(){var J=this,I=arguments;
var K=function(){G=null;
F.apply(J,I)
};
if(E){clearTimeout(G)
}if(E||!G){G=setTimeout(K,H)
}}
};
C.throttle=function(E,F){return x(E,F,false)
};
C.debounce=function(E,F){return x(E,F,true)
};
C.once=function(G){var E=false,F;
return function(){if(E){return F
}E=true;
return F=G.apply(this,arguments)
}
};
C.wrap=function(E,F){return function(){var G=[E].concat(s.call(arguments));
return F.apply(this,G)
}
};
C.compose=function(){var E=s.call(arguments);
return function(){var F=s.call(arguments);
for(var G=E.length-1;
G>=0;
G--){F=[E[G].apply(this,F)]
}return F[0]
}
};
C.after=function(F,E){return function(){if(--F<1){return E.apply(this,arguments)
}}
};
C.keys=A||function(G){if(G!==Object(G)){throw new TypeError("Invalid object")
}var F=[];
for(var E in G){if(o.call(G,E)){F[F.length]=E
}}return F
};
C.values=function(E){return C.map(E,C.identity)
};
C.functions=C.methods=function(G){var F=[];
for(var E in G){if(C.isFunction(G[E])){F.push(E)
}}return F.sort()
};
C.extend=function(E){d(s.call(arguments,1),function(F){for(var G in F){if(F[G]!==void 0){E[G]=F[G]
}}});
return E
};
C.defaults=function(E){d(s.call(arguments,1),function(F){for(var G in F){if(E[G]==null){E[G]=F[G]
}}});
return E
};
C.clone=function(E){return C.isArray(E)?E.slice():C.extend({},E)
};
C.tap=function(F,E){E(F);
return F
};
C.isEqual=function(F,E){if(F===E){return true
}var I=typeof(F),K=typeof(E);
if(I!=K){return false
}if(F==E){return true
}if((!F&&E)||(F&&!E)){return false
}if(F._chain){F=F._wrapped
}if(E._chain){E=E._wrapped
}if(F.isEqual){return F.isEqual(E)
}if(E.isEqual){return E.isEqual(F)
}if(C.isDate(F)&&C.isDate(E)){return F.getTime()===E.getTime()
}if(C.isNaN(F)&&C.isNaN(E)){return false
}if(C.isRegExp(F)&&C.isRegExp(E)){return F.source===E.source&&F.global===E.global&&F.ignoreCase===E.ignoreCase&&F.multiline===E.multiline
}if(I!=="object"){return false
}if(F.length&&(F.length!==E.length)){return false
}var G=C.keys(F),J=C.keys(E);
if(G.length!=J.length){return false
}for(var H in F){if(!(H in E)||!C.isEqual(F[H],E[H])){return false
}}return true
};
C.isEmpty=function(F){if(C.isArray(F)||C.isString(F)){return F.length===0
}for(var E in F){if(o.call(F,E)){return false
}}return true
};
C.isElement=function(E){return !!(E&&E.nodeType==1)
};
C.isArray=c||function(E){return v.call(E)==="[object Array]"
};
C.isObject=function(E){return E===Object(E)
};
C.isArguments=function(E){return !!(E&&o.call(E,"callee"))
};
C.isFunction=function(E){return !!(E&&E.constructor&&E.call&&E.apply)
};
C.isString=function(E){return !!(E===""||(E&&E.charCodeAt&&E.substr))
};
C.isNumber=function(E){return !!(E===0||(E&&E.toExponential&&E.toFixed))
};
C.isNaN=function(E){return E!==E
};
C.isBoolean=function(E){return E===true||E===false
};
C.isDate=function(E){return !!(E&&E.getTimezoneOffset&&E.setUTCFullYear)
};
C.isRegExp=function(E){return !!(E&&E.test&&E.exec&&(E.ignoreCase||E.ignoreCase===false))
};
C.isNull=function(E){return E===null
};
C.isUndefined=function(E){return E===void 0
};
C.noConflict=function(){u._=r;
return this
};
C.identity=function(E){return E
};
C.times=function(H,G,F){for(var E=0;
E<H;
E++){G.call(F,E)
}};
C.mixin=function(E){d(C.functions(E),function(F){q(F,C[F]=E[F])
})
};
var k=0;
C.uniqueId=function(E){var F=k++;
return E?E+F:F
};
C.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};
C.template=function(H,G){var I=C.templateSettings;
var E="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+H.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(I.interpolate,function(J,K){return"',"+K.replace(/\\'/g,"'")+",'"
}).replace(I.evaluate||null,function(J,K){return"');"+K.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"
}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";
var F=new Function("obj",E);
return G?F(G):F
};
var g=function(E){this._wrapped=E
};
C.prototype=g.prototype;
var n=function(F,E){return E?C(F).chain():F
};
var q=function(E,F){g.prototype[E]=function(){var G=s.call(arguments);
w.call(G,this._wrapped);
return n(F.apply(C,G),this._chain)
}
};
C.mixin(C);
d(["pop","push","reverse","shift","sort","splice","unshift"],function(E){var F=i[E];
g.prototype[E]=function(){F.apply(this._wrapped,arguments);
return n(this._wrapped,this._chain)
}
});
d(["concat","join","slice"],function(E){var F=i[E];
g.prototype[E]=function(){return n(F.apply(this._wrapped,arguments),this._chain)
}
});
g.prototype.chain=function(){this._chain=true;
return this
};
g.prototype.value=function(){return this._wrapped
}
})();
/*! JsRender v1.0pre - (jsrender.js version: does not require jQuery): http://github.com/BorisMoore/jsrender */
window.JsViews||window.jQuery&&jQuery.views||(function(k,g){var e,o,l,n,a,F,f,b,B,z,r=false,i=true,m=k.jQuery,p=k.document,w=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,d=/^(true|false|null|[\d\.]+)|(\w+|\$(view|data|ctx|(\w+)))([\w\.]*)|((['"])(?:\\\1|.)*\7)$/g,D=/(\$?[\w\.\[\]]+)(?:(\()|\s*(===|!==|==|!=|<|>|<=|>=)\s*|\s*(\=)\s*)?|(\,\s*)|\\?(\')|\\?(\")|(\))|(\s+)/g,y=/\r?\n/g,C=/\\(['"])/g,E=/\\?(['"])/g,v=/\x08([^\x08]+)\x08/g,A=0,x={"&":"&amp;","<":"&lt;",">":"&gt;"},G=/[\x00"&'<>]/g,q=Array.prototype.slice;
if(m){e=m;
e.fn.extend({render:function(J,H,I,K){return F(J,this[0],H,I,K)
},template:function(H,I){return e.template(H,this[0],I)
}})
}else{o=k.$;
k.JsViews=l=k.$=e={extend:function(J,I){var H;
for(H in I){J[H]=I[H]
}return J
},isArray:Array.isArray||function(H){return Object.prototype.toString.call(H)==="[object Array]"
},noConflict:function(){if(k.$===l){k.$=o
}return l
}}
}z=e.extend;
function t(I,M,K,L,J){K=K||{viewsCount:0,ctx:n.helpers};
var H=K&&K.ctx;
return{jsViews:"v1.0pre",path:M||"",itemNumber:++K.viewsCount||1,viewsCount:0,tmpl:J,data:L||K.data||{},ctx:I&&I===H?H:(H?z(z({},H),I):I||{}),parent:K}
}z(e,{views:n={templates:{},tags:{"if":function(){var I=this,H=I._view;
H.onElse=function(M,K){var L=0,J=K.length;
while(J&&!K[L++]){if(L===J){return""
}}H.onElse=g;
return F(H.data,M.tmpl,H.ctx,H)
};
return H.onElse(this,arguments)
},"else":function(){var H=this._view;
return H.onElse?H.onElse(this,arguments):""
},each:function(){var M,K=this,H="",L=arguments,J=L.length,N=K.tmpl,I=K._view;
for(M=0;
M<J;
M++){H+=L[M]?F(L[M],N,K.ctx||I.ctx,I,K._path,K._ctor):""
}return J?H:H+F(I.data,N,I.ctx,I,K._path,K.tag)
},"=":function(H){return H
},"*":function(H){return H
}},helpers:{not:function(H){return !H
}},allowCode:r,debugMode:i,err:function(H){return n.debugMode?("<br/><b>Error:</b> <em> "+(H.message||H)+". </em>"):'""'
},setDelimiters:function(I,H){var K=H.charAt(0),J=H.charAt(1);
I="\\"+I.charAt(0)+"\\"+I.charAt(1);
H="\\"+K+"\\"+J;
f=I+"(?:(?:(\\#)?(\\w+(?=[!\\s\\"+K+"]))|(?:(\\=)|(\\*)))\\s*((?:[^\\"+K+"]|\\"+K+"(?!\\"+J+"))*?)(!(\\w*))?|(?:\\/([\\w\\$\\.\\[\\]]+)))"+H;
f=new RegExp(f,"g")
},registerTags:b=function(I,H){var J;
if(typeof I==="object"){for(J in I){b(J,I[J])
}}else{n.tags[I]=H
}return this
},registerHelpers:B=function(H,J){if(typeof H==="object"){var I;
for(I in H){B(I,H[I])
}}else{n.helpers[H]=J
}return this
},encode:function(H,I){return I?(a[H||"html"]||a.html)(I):""
},encoders:a={none:function(H){return H
},html:function(H){return String(H).replace(G,c)
}},renderTag:function(Q,M,I,J,N){var K,O,H,L=arguments,P=n.presenters;
hash=N._hash,tagFn=n.tags[Q];
if(!tagFn){return""
}J=J&&M.tmpl.nested[J-1];
N.tmpl=N.tmpl||J||g;
if(P&&P[Q]){O=z(z({},N.ctx),N);
delete O.ctx;
delete O._path;
delete O.tmpl;
N.ctx=O;
N._ctor=Q+(hash?"="+hash.slice(0,-1):"");
N=z(z({},tagFn),N);
tagFn=n.tags.each
}N._encode=I;
N._view=M;
K=tagFn.apply(N,L.length>5?q.call(L,5):[M.data]);
return K||(K===g?"":K.toString())
}},render:F=function(L,P,I,Q,S,J){var M,K,H,O,N,R="";
if(arguments.length===2&&L.jsViews){Q=L;
I=Q.ctx;
L=Q.data
}P=e.template(P);
if(!P){return""
}if(e.isArray(L)){O=new t(I,S,Q,L);
K=L.length;
for(M=0,K=L.length;
M<K;
M++){H=L[M];
N=H?P(H,new t(I,S,O,H,P,this)):"";
R+=n.activeViews?"<!--item-->"+N+"<!--/item-->":N
}}else{R+=P(L,new t(I,S,Q,L,P))
}return n.activeViews?"<!--tmpl("+(S||"")+") "+(J?"tag="+J:P._name)+"-->"+R+"<!--/tmpl-->":R
},template:function(I,H){if(H){if(""+H===H){H=j(H)
}else{if(m&&H instanceof e){H=H[0]
}}if(H){if(m&&H.nodeType){H=e.data(H,"tmpl")||e.data(H,"tmpl",j(H.innerHTML))
}n.templates[H._name=H._name||I||"_"+A++]=H
}return H
}return I?""+I!==I?(I._name?I:e.template(null,I)):n.templates[I]||e.template(null,w.test(I)?I:u(I)):null
}});
n.setDelimiters("{{","}}");
function s(M,I,K,L,O,N,J,H){return K?((L?O?("$view."+O):K:("$data."+K))+(N||"")):J||(I||"")
}function j(P){var N,J=0,M=[],O=[],L=O,K=[,,O];
function I(Q){Q-=J;
if(Q){L.push(P.substr(J,Q).replace(y,"\\n"))
}}function H(af,W,U,T,R,Y,aa,ad,Q,ac){var X,Z="",S=0,V=r,ae=r;
function ab(am,ap,an,ak,ao,aq,aj,ah,ai,ag,al){return ae?(ae=!aj,(ae?am:'"')):V?(V=!ah,(V?am:'"')):ak?(ap.replace(d,s)+ak):ao?S?"":(X=i,"\b"+ap+":"):an?(S++,ap.replace(d,s)+"("):ai?(S--,")"):ap?ap.replace(d,s):aq?",":ag?(S?"":X?(X=r,"\b"):","):(ae=aj,V=ah,'"')
}U=U||T;
I(ac);
if(R){if(n.allowCode){L.push(["*",Y.replace(C,"$1")])
}}else{if(U){if(U==="else"){K=M.pop();
L=K[2];
W=i
}Y=(Y?(Y+" ").replace(D,ab).replace(v,function(ah,ai,ag){Z+=ai+",";
return""
}):"");
Y=Y.slice(0,-1);
N=[U,aa?ad||"none":"",W&&[],"{"+Z+"_hash:'"+Z+"',_path:'"+Y+"'}",Y];
if(W){M.push(K);
K=N
}L.push(N)
}else{if(Q){K=M.pop()
}}}J=ac+af.length;
if(!K){throw"Expected block tag"
}L=K[2]
}P=P.replace(E,"\\$1");
P.replace(f,H);
I(P.length);
return h(O)
}function h(I){var R,K,O,S=[],L=I.length,J="try{var views="+(m?"jQuery":"JsViews")+'.views,tag=views.renderTag,enc=views.encode,html=views.encoders.html,$ctx=$view && $view.ctx,result=""+\n\n';
for(O=0;
O<L;
O++){K=I[O];
if(K[0]==="*"){J=J.slice(0,O?-1:-3)+";"+K[1]+(O+1<L?"result+=":"")
}else{if(""+K===K){J+='"'+K+'"+'
}else{var T=K[0],P=K[1],Q=K[2],N=K[3],M=K[4],H=M+'||"")+';
if(Q){S.push(h(Q))
}J+=T==="="?(!P||P==="html"?"html("+H:P==="none"?("("+H):('enc("'+P+'",'+H)):'tag("'+T+'",$view,"'+(P||"")+'",'+(Q?S.length:'""')+","+N+(M?",":"")+M+")+"
}}}R=new Function("$data, $view",J.slice(0,-1)+";return result;\n\n}catch(e){return views.err(e);}");
R.nested=S;
return R
}function c(H){return x[H]||(x[H]="&#"+H.charCodeAt(0)+";")
}function u(H){try{return e(H)
}catch(I){}return H
}})(window);
(function(d){d.timeago=function(g){if(g instanceof Date){return a(g)
}else{if(typeof g==="string"){return a(d.timeago.parse(g))
}else{return a(d.timeago.datetime(g))
}}};
var f=d.timeago;
d.extend(d.timeago,{settings:{offset:0,refreshMillis:60000,allowFuture:false,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",numbers:[]}},inWords:function(l,p){var m=p||this.settings.strings;
var i=m.prefixAgo;
var r=m.suffixAgo;
if(this.settings.allowFuture){if(l<0){i=m.prefixFromNow;
r=m.suffixFromNow
}l=Math.abs(l)
}var o=l/1000;
var g=o/60;
var n=g/60;
var q=n/24;
var j=q/365;
function h(s,u){var t=d.isFunction(s)?s(u,l):s;
var v=(m.numbers&&m.numbers[u])||u;
return t.replace(/%d/i,v)
}var k=o<45&&h(m.seconds,Math.round(o))||o<90&&h(m.minute,1)||g<45&&h(m.minutes,Math.round(g))||g<90&&h(m.hour,1)||n<24&&h(m.hours,Math.round(n))||n<48&&h(m.day,1)||q<30&&h(m.days,Math.floor(q))||q<60&&h(m.month,1)||q<365&&h(m.months,Math.floor(q/30))||j<2&&h(m.year,1)||h(m.years,Math.floor(j));
return d.trim([i,k,r].join(" "))
},parse:function(h){var g=d.trim(h);
g=g.replace(/\.\d\d\d+/,"");
g=g.replace(/-/,"/").replace(/-/,"/");
g=g.replace(/T/," ").replace(/Z/," UTC");
g=g.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");
return new Date(g)
},datetime:function(h){var i=d(h).get(0).tagName.toLowerCase()==="time";
var g=i?d(h).attr("datetime"):d(h).attr("title");
return f.parse(g)
}});
d.fn.timeago=function(j){var i=this,g=d.extend({},f.settings,j);
var h=function(){d.proxy(c,this)(g)
};
if(g.refreshMillis>0){setInterval(function(){i.each(h)
},g.refreshMillis)
}return this.each(h)
};
function c(g){var h=b(this);
if(!isNaN(h.datetime)){d(this).text(a(h.datetime,g.strings))
}return this
}function b(g){g=d(g);
if(!g.data("timeago")){g.data("timeago",{datetime:f.datetime(g)});
var h=d.trim(g.text());
if(h.length>0){g.attr("title",h)
}}return g.data("timeago")
}function a(h,g){return f.inWords(e(h),g)
}function e(h){var m=new Date();
var j=m.getTime();
var l=m.getTimezoneOffset()*60000;
var i=j+l;
var k=f.settings.offset||0;
var g=i+k;
return(g-h.getTime())
}document.createElement("abbr");
document.createElement("time")
}(jQuery));