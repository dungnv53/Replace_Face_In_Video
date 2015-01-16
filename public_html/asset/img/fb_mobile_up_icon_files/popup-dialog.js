(function(b){Backlog.PopupDialog=function(){this.initialize.apply(this,arguments)
};
var a={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right",TOP_RIGHT:"top_right"};
Backlog.PopupDialog.prototype={initialize:function(d,g){this.popup=b(d).get(0);
this.opts=b.extend({offsetX:0,offsetY:0,foucs:null,anchor:a.TOP,draggable:false,draggableHandle:null,opacity:1,anchorElement:null,autoHide:true,onShow:null,onHide:null,buttonShow:null,buttonHide:null},g||{});
var e=this;
if(this.opts.autoHide){b(document).mousedown(function(i){if(!e.eventExist(i)){e.hide()
}})
}this.isIE=/MSIE/.test(navigator.userAgent)&&!window.opera;
this.shim=null;
if(this.isIE&&typeof document.body.style.maxHeight=="undefined"){var h=document.createElement("iframe");
h.setAttribute("scrolling","no");
h.setAttribute("frameborder","0");
h.src="javascript:false;document.write('');";
var f=h.style;
f.position="absolute";
f.display="none";
this.popup.parentNode.appendChild(h);
this.shim=h
}if(this.opts.buttonShow!=null){b(this.opts.buttonShow).click(function(){e.show()
})
}if(this.opts.buttonHide!=null){b(this.opts.buttonHide).click(function(){e.hide()
})
}if(this.opts.draggable){var c={};
if(this.opts.draggableHandle!=null){c.handle=this.opts.draggableHandle
}b(this.popup).draggable(c)
}},show:function(e){var d=this.opts.anchorElement;
var c=this.opts.anchor;
if(e){if(e.anchorElement){d=e.anchorElement
}if(e.anchor){c=e.anchor
}}b(this.popup).show();
if(d){var f=b(d).offset();
this.popup.style.left=(c==a.RIGHT)||(c==a.TOP_RIGHT)?f.left-this.popup.offsetWidth+this.opts.offsetX+"px":f.left+this.opts.offsetX+"px";
this.popup.style.top=(c==a.TOP)||(c==a.TOP_RIGHT)?f.top+b(d).height()+this.opts.offsetY+"px":f.top-b(d).height()-b(this.popup).height()+this.opts.offsetY+"px"
}else{this.centerOnWindow()
}b(this.popup).css({zIndex:100});
if(this.shim){this.showShim()
}if(this.opts.focus&&b(this.opts.focus)){b(this.opts.focus).focus()
}if(this.opts.onShow){this.opts.onShow()
}},hide:function(){if(this.shim){b(this.shim).hide()
}b(this.popup).hide();
if(this.opts.onHide){this.opts.onHide()
}},showShim:function(d){if(this.shim){var f=b(this.popup).offset(),e=b(this.popup).width(),c=b(this.popup).height();
b(this.shim).css({left:f.left,top:f.top,width:e,height:c,display:"block",position:"absolute",zIndex:99});
b(this.shim).show()
}},hideShim:function(c){if(this.shim){b(this.shim).hide()
}},eventExist:function(c){var d=c.target;
if(d.tagName=="HTML"){return true
}while(d){if(d==this.popup){return true
}d=d.parentNode
}return false
},centerOnWindow:function(){var e=0,d=0;
if(document.body&&typeof document.body.scrollTop!="undefined"){e+=document.body.scrollLeft;
d+=document.body.scrollTop;
if(document.body.parentNode&&typeof document.body.parentNode.scrollTop!="undefined"){e+=document.body.parentNode.scrollLeft;
d+=document.body.parentNode.scrollTop
}}else{if(typeof window.pageXOffset!="undefined"){e+=window.pageXOffset;
d+=window.pageYOffset
}}var c=Math.round((this.getInsideWindowWidth()/2)-(b(this.popup).width()/2))+e;
var f=Math.round((this.getInsideWindowHeight()/2)-(b(this.popup).height()/2))+d;
this.popup.style.left=c+"px";
this.popup.style.top=f+"px";
return
},getInsideWindowWidth:function(){if(window.innerWidth){return window.innerWidth
}else{if(document.body.parentElement){return document.body.parentElement.clientWidth
}else{return document.body.clientWidth
}}},getInsideWindowHeight:function(){if(window.innerHeight){return window.innerHeight
}else{if(document.body.parentElement){return document.body.parentElement.clientHeight
}else{return document.body.clientHeight
}}}}
})(jQuery);