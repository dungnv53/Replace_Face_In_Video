if(typeof Backlog=="undefined"||!Backlog){var Backlog={}
}Backlog.getBasePath=function(){var a="";
jQuery("script").each(function(b,c){var d=c.src.match(/base\.(?:[^.]*\.)?js\?.*bp=([a-z,/]*)/);
if(d){a=d[1]
}});
Backlog.getBasePath=function(){return a
};
return a
};
Backlog.CDN_URL="https://assets.backlog.jp/R20140730";
Backlog.getImageBasePath=function(){var a;
if(Backlog.CDN_URL){a=Backlog.CDN_URL
}else{a=Backlog.getBasePath()
}Backlog.getImageBasePath=function(){return a
};
return a
};
Backlog.getUserIconUrl=function(a){if(a.indexOf("icons/")>-1){return Backlog.getImageBasePath()+"/"+a
}else{return Backlog.getBasePath()+"/"+a
}};
Backlog.getProjectIconUrl=function(a){return Backlog.getBasePath()+"/"+a
};
Backlog.Timer=function(a,c){var b=a||60000;
if(!c){return false
}_timer=function(e,f){this.stop=function(){clearInterval(d.id)
};
this.internalCallback=function(){f(d)
};
this.reset=function(h){if(d.id){clearInterval(d.id)
}var g=h||60000;
this.id=setInterval(this.internalCallback,g)
};
this.interval=e;
this.id=setInterval(this.internalCallback,this.interval);
var d=this
};
return new _timer(b,c)
};
Backlog.jsonrpcExpceptionHandler=function(a){if(/Can't create XMLHttpRequest object/.test(a.msg)){if(/MSIE/.test(navigator.userAgent)&&!window.opera){alert("JavaScriptまたはActiveXコントロールが無効になっていませんか？\n無効のままではいくつかの機能が利用できませんので、有効にしてください\nYou have to enable JavaScript or ActiveX so that several features are available.")
}else{alert("JavaScriptが無効になっていませんか？\n無効のままではいくつかの機能が利用できませんので、有効にしてください\nYou have to enable JavaScript so that several features are available.")
}}else{if(/Session is Expired/.test(a.msg)){alert("セッションがタイムアウトしました。\n再度ログインしてください。\nSession Timeout.\nPlease login again.")
}else{if(console){console.debug(a.code+":"+a.msg)
}alert(a.msg)
}}};
Backlog.getJsonrpc=function(){try{var a=new JSONRpcClient(Backlog.getBasePath()+"/JSON-RPC")
}catch(b){Backlog.jsonrpcExpceptionHandler(b)
}return a
};
Backlog.Caret={getPos:function(a){if(!a){return null
}a.focus();
return Backlog.Caret.doGetPos(a)
},doGetPos:function(a){if(document.selection&&document.selection.createRange&&a.createTextRange){Backlog.Caret.doGetPos=function(e){var b=document.selection.createRange(),c=null;
if(e.tagName.toUpperCase()==="TEXTAREA"){var d=document.body.createTextRange();
d.moveToElementText(e);
c=d.duplicate()
}else{c=e.createTextRange()
}c.setEndPoint("EndToStart",b);
return c.text.length
}
}else{Backlog.Caret.doGetPos=function(b){if(b.selectionStart){return b.selectionStart
}return -1
}
}return Backlog.Caret.doGetPos(a)
},setPos:function(c,b){if(b<0||!c){return
}if(c.createTextRange){var a=c.createTextRange();
a.collapse();
a.moveEnd("character",b);
a.moveStart("character",b);
a.select()
}else{if(c.setSelectionRange){c.setSelectionRange(b,b)
}}}};
Backlog.Element={replace:function(c,b){c=$(c);
b=typeof b=="undefined"?"":b.toString();
if(c.outerHTML){c.outerHTML=b.stripScripts()
}else{var a=c.ownerDocument.createRange();
a.selectNode(c);
c.parentNode.replaceChild(a.createContextualFragment(b.stripScripts()),c)
}setTimeout(function(){b.evalScripts()
},10);
return c
}};
Backlog.multiSelectHandler=function(a){var c=jQuery(a);
if(c.hasClass("chzn-done")){c.next(".chzn-container").hide()
}var d=c.val();
var b;
if(a.size>0){b=jQuery("<select id='"+a.id+"' ' name='"+a.name+"' tabindex='"+c.attr("tabindex")+"'>"+c.html()+"</select>")
}else{b=jQuery("<select multiple='multiple' id='"+c.attr("id")+"' ' name='"+c.attr("name")+"' tabindex='"+c.attr("tabindex")+"' size='5'>"+c.html()+"</select>")
}c.replaceWith(b);
b.val(d).trigger(Backlog.Event.MULTISELECT_SWITCHED)
};
function switching(b,c){c.style.display="none";
Backlog.multiSelectHandler(b)
}Backlog.selectMe=function(a,c){if(typeof a==="string"){a=$(a)
}if(!a||!a.options){return
}for(var b=0;
b<a.options.length;
b++){if(a.options[b].value==c){a.options[b].selected=true
}else{a.options[b].selected=false
}}if(jQuery(a).hasClass("chzn-done")){jQuery(a).trigger("liszt:updated")
}};
Backlog.attribToHtml=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")
};
Backlog.Textarea={noscroll:function(b){if(/MSIE (\d+)\.\d+;/.test(navigator.userAgent)){var d=RegExp.$1;
if(d=="8"){for(var e=0,a=b.length;
e<a;
e++){var c=document.getElementById(b[e]);
if(c&&c.cols){c.cols=10000
}}}}}};
Backlog.unescapeHTML=function(a){if(a){return jQuery("<div />").html(a).text()
}else{return""
}};
Backlog.replaceCsrfToken=function(c,a){if(c.status==200||c.status==403){var b=c.getResponseHeader("X-CSRF-Token");
if(b){jQuery("input[name='csrf-token']").each(function(){jQuery(this).val(b)
})
}}};
jQuery.ajaxSetup({complete:function(b,a){Backlog.replaceCsrfToken(b,a)
}});
jQuery(document).ready(function(){var a=navigator.userAgent;
if(a.search(/iPhone/)!=-1){jQuery("html").addClass("iPhone")
}else{if(a.search(/Android/)!=-1){jQuery("html").addClass("android")
}}});
Backlog.support={localStorage:("localStorage" in window&&window.localStorage!==null)};
Backlog.Event={ATTRIBUTE_FORM_INITIALIZED:"AttributeFormInitialized",MULTISELECT_SWITCHED:"MultiselectSwitched"};
Backlog.formatBytes=function(c){var b=c,a="";
if(c<1024){a="B"
}else{if(c<524288){b=(c/1024);
a="KB"
}else{if(c<1073741824){b=(c/1048576);
a="MB"
}else{b=(c/1073741824);
a="GB"
}}}return b.toFixed(1)+" "+a
};
Backlog.ASSET_BASE_URL="https://assets.backlog.jp/R20140730";
Backlog.getAssetPath=function(c){var b=Backlog.ASSET_BASE_URL?Backlog.ASSET_BASE_URL:Backlog.getBasePath();
var a=function(d){return b+(d.indexOf("/")===0?"":"/")+d
};
Backlog.getAssetPath=function(d){return a(d)
};
return a(c)
};
Backlog.isIE8=function(){jQuery.browser;
return !jQuery.support.leadingWhitespace&&jQuery.support.hrefNormalized
};
Backlog.isHTML5UploadAvailable=function(){return(typeof XMLHttpRequest!=="undefined"&&typeof(new XMLHttpRequest()).upload!=="undefined"&&typeof FormData!=="undefined")
};