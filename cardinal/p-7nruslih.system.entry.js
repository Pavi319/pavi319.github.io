System.register(["./p-226ad382.system.js","./p-c4e507b9.system.js","./p-85ff9c0d.system.js","./p-e1f22d46.system.js","./p-b6d6d63b.system.js"],function(e){"use strict";var t,r,n,o,i,s;return{setters:[function(e){t=e.r;r=e.c;n=e.h},function(e){o=e.T},function(){},function(e){i=e.C},function(e){s=e.T}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var u=e("app_menu",function(){function e(e){t(this,e);this.menuItems=null;this.hamburgerMaxWidth=960;this.showHamburgerMenu=false;this.showNavBar=false;this.menuItemClicked=r(this,"menuEvent",7);this.needMenuItemsEvt=r(this,"needMenuItems",7);this.getHistoryType=r(this,"getHistoryType",7)}e.prototype.checkIfHamburgerIsNeeded=function(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth};e.prototype.componentDidLoad=function(){var e=this;this.checkIfHamburgerIsNeeded();this.getHistoryType.emit(function(t,r){if(t){console.log(t);return}e.historyType=r})};e.prototype.handleClick=function(e){e.preventDefault();var t=e.target.value;for(var r=0;r<this.menuItems.length;r++){this.menuItems[r].active=t===this.menuItems[r]}this.menuItemClicked.emit(e.target.value);this.menuItems=this.menuItems.slice()};e.prototype.toggleNavBar=function(){this.showNavBar=!this.showNavBar};e.prototype.componentWillLoad=function(){var e=this;if(!this.menuItems){this.needMenuItemsEvt.emit(function(t,r){if(t){console.log(t);return}e.menuItems=r})}};e.prototype.renderItem=function(e){var t=this;var r=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer";var o=[];if(e.children){for(var i=0;i<e.children.length;i++){o.push(this.renderItem(e.children[i]))}}return n(r,{onclick:function(e){return t.handleClick(e)},historyType:this.historyType,active:e.active?e.active:false,children:o,hamburger:this.showHamburgerMenu,value:e})};e.prototype.render=function(){var e=this;if(!this.menuItems){return}var t=[];for(var r=0;r<this.menuItems.length;r++){var o=this.menuItems[r];t.push(this.renderItem(o))}if(this.showHamburgerMenu){t=t.map(function(t){return n("li",{onClick:e.toggleNavBar.bind(e),class:"nav-item"},t)});var i="collapse navbar-collapse "+(""+(this.showNavBar==true?"show":""));return n("nav",{class:"navbar navbar-dark "},n("a",{class:"navbar-brand",href:"#"}),n("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},n("span",{class:"navbar-toggler-icon"})),n("div",{class:i},n("ul",{class:"navbar-nav mr-auto"},t)))}else{return t}};return e}());a([i(),o({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:false,propertyType:"string"})],u.prototype,"itemRenderer",void 0);a([o({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:false,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],u.prototype,"menuItems",void 0);a([o({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:false,propertyType:"number",defaultValue:"600"})],u.prototype,"hamburgerMaxWidth",void 0);a([s({eventName:"menuEvent",controllerInteraction:{required:true},description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],u.prototype,"menuItemClicked",void 0);a([s({eventName:"needMenuItems",controllerInteraction:{required:true},description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],u.prototype,"needMenuItemsEvt",void 0);a([s({eventName:"getHistoryType",controllerInteraction:{required:true},description:"This event gets the history type "})],u.prototype,"getHistoryType",void 0);var p=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var c=e("psk_app_router",function(){function e(e){t(this,e);this.menuItems=[];this.failRedirectTo="";this.notFoundRoute="";this.needRoutesEvt=r(this,"needRoutes",7);this.getHistoryType=r(this,"getHistoryType",7)}e.prototype.componentDidLoad=function(){var e=this;this.needRoutesEvt.emit(function(t,r){if(t){console.log(t);return}e.menuItems=r});this.getHistoryType.emit(function(t,r){if(t){console.log(t);return}e.historyType=r})};e.prototype.renderItems=function(e){var t=this;var r=e.map(function(e){console.log(e);if(e.name=="404"){t.notFoundRoute=e.path}if(e.children){return t.renderItems(e.children)}else{return n("stencil-route",{url:e.path,component:e.component,componentProps:e.componentProps})}});return r};e.prototype.render=function(){if(this.notFoundRoute==""){this.notFoundRoute=this.menuItems[0].path}var e=this.renderItems(this.menuItems);if(e.length===0){return n("psk-ui-loader",{shouldBeRendered:true})}return n("div",{class:"app_container"},n("stencil-router",{historyType:this.historyType==="query"?"browser":this.historyType},n("stencil-route-switch",{scrollTopOffset:0},this.historyType==="query"?n("stencil-route",{component:"query-pages-router",componentProps:{pages:this.menuItems}}):[e,n("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.notFoundRoute}})])))};return e}());p([o({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:false,propertyType:"Array of MenuItem types(MenuItem[])"})],c.prototype,"menuItems",void 0);p([o({description:"This is the history type that will be passed along to the stencil-router",isMandatory:false,propertyType:"string",defaultValue:"browser"})],c.prototype,"historyType",void 0);p([s({eventName:"needMenuItems",controllerInteraction:{required:true},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],c.prototype,"needRoutesEvt",void 0);p([s({eventName:"getHistoryType",controllerInteraction:{required:true},description:"This event gets the history type "})],c.prototype,"getHistoryType",void 0);var d=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var l=e("psk_user_profile",function(){function e(e){t(this,e);this.userInfo=null;this.getUserInfoEvent=r(this,"getUserInfo",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this.userInfo){this.getUserInfoEvent.emit(function(t,r){if(!t){e.userInfo=r}else{console.error("Error getting user info",t)}})}};e.prototype.render=function(){var e=this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer";return n(e,{userInfo:this.userInfo})};return e}());d([o({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:false,propertyType:"any",defaultValue:"null"})],l.prototype,"userInfo",void 0);d([o({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:false,propertyType:"any"})],l.prototype,"profileRenderer",void 0);d([s({eventName:"getUserInfo",controllerInteraction:{required:true},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],l.prototype,"getUserInfoEvent",void 0)}}});