System.register(["./p-226ad382.system.js","./p-e1f22d46.system.js"],function(e){"use strict";var t,i,n,s;return{setters:[function(e){t=e.r;i=e.h;n=e.g},function(e){s=e.C}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,i,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)if(o=e[a])r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r;return s>3&&r&&Object.defineProperty(t,i,r),r};var o=e("psk_slideshow",function(){function e(e){t(this,e);this.fadeLength=.8;this.visibleLength=8}e.prototype.componentWillLoad=function(){this.marginTop=this.element.getBoundingClientRect().y;this.checkLayout();this.imagesSrcs=this.images.split(",");this.getAnimationCSS()};e.prototype.checkLayout=function(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop};e.prototype.renderSlide=function(e,t){var n=i("li",{id:"slide-"+t,class:"animation-"+t,style:{backgroundImage:"url("+e+")"}});return n};e.prototype.getAnimationCSS=function(){var e=this.fadeLength+this.visibleLength;var t=100/(e*this.imagesSrcs.length);var i="@keyframes fade {\n    0% { opacity: 0; }\n    "+t*this.fadeLength+"% { opacity: 1; }\n    "+t*e+"% { opacity: 1; }\n    "+t*(e+this.fadeLength)+"% { opacity: 0; }\n    100% { opacity: 0; }\n  }";for(var n=0;n<this.imagesSrcs.length;n++){i+="#psk-slider li:nth-child("+n+") {\n        animation-delay: "+e*n+"s;\n        }"}i+="#psk-slider li{animation-duration: "+e*this.imagesSrcs.length+"s;}";var s=document.createElement("style");s.innerHTML=i;this.element.shadowRoot.prepend(s)};e.prototype.render=function(){var e=this;var t=[];this.imagesSrcs.forEach(function(i,n){t.push(e.renderSlide(i,n))});var n=this.title?i("div",{class:"title"},this.title):null;var s=this.caption?i("div",{class:"caption"},this.caption):null;var r=this.element.children.length>0?i("div",{class:"actions"},i("slot",null)):null;var o=null;if(n||s||r){o=i("div",{class:"container"},i("div",{class:"content"},[n,s,r]))}return i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},o,i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());r([s()],o.prototype,"images",void 0)}}});