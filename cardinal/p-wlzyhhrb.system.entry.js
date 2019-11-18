System.register(["./p-0b2166d8.system.js","./p-3d41d971.system.js","./p-3985fe0e.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.r;n=e.h},function(e){r=e.T},function(e){i=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(a=e[o])s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s;return i>3&&s&&Object.defineProperty(t,n,s),s};var a=e("psk_menu_item_renderer",function(){function e(e){t(this,e)}e.prototype.renderMenuItem=function(e){var t=this;var r=e.path;var i=[];if(e.children){e.children.forEach((function(e){i.push(t.renderMenuItem(e))}))}var s=e.type==="abstract"?"dropdown-renderer":"stencil-route-link";return n(s,{url:r,activeClass:"active",exact:false,somethingChanged:this.value},n("div",{class:"wrapper_container"},n("div",{class:"item_container"},n("span",{class:"icon fa "+e.icon}),n("a",null,e.children?n("span",{class:"item_name"},e.name,n("span",{class:"fa fa-caret-down"})):n("span",{class:"item_name"},e.name))),e.children?n("div",{class:"children"},i):null))};e.prototype.render=function(){return this.renderMenuItem(this.value)};return e}());s([i(),r({description:"This property is the MenuItem that will be renderer as part of the menu",isMandatory:false,propertyType:"MenuItem"})],a.prototype,"value",void 0);s([r({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:false,propertyType:"boolean"})],a.prototype,"active",void 0)}}}));