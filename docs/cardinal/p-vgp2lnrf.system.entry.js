System.register(["./p-226ad382.system.js","./p-43c4f030.system.js"],function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.r;t=e.h},function(e){r=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,n,t,r){var i=arguments.length,a=i<3?n:r===null?r=Object.getOwnPropertyDescriptor(n,t):r,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,n,t,r);else for(var s=e.length-1;s>=0;s--)if(c=e[s])a=(i<3?c(a):i>3?c(n,t,a):c(n,t))||a;return i>3&&a&&Object.defineProperty(n,t,a),a};var a=e("sidebar_renderer",function(){function e(e){n(this,e)}e.prototype.renderMenuItem=function(e){var n=this;var r=e.path;var i=[];if(e.children){e.children.forEach(function(e){i.push(n.renderMenuItem(e))})}var a=e.type==="abstract"?"expandable-renderer":"stencil-route-link";return t(a,{firstMenuChild:e.children?e.children[0]:"",url:r,activeClass:"active",exact:false,somethingChanged:this.value},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:"icon fa "+e.icon}),e.children?t("span",{class:"item_name"},e.name):t("span",{class:"item_name"},e.name),e.children?t("span",{class:"fa fa-caret-right expand-menu"}):null),e.children?t("div",{class:"children"},i):null))};e.prototype.render=function(){return this.renderMenuItem(this.value)};return e}());i([r()],a.prototype,"value",void 0)}}});