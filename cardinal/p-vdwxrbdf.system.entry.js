System.register(["./p-0b2166d8.system.js","./p-8f33fca3.system.js","./p-16a903b6.system.js"],(function(e){"use strict";var t,l,i;return{setters:[function(e){t=e.r;l=e.h},function(){},function(e){i=e.B}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,l,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,l):i,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,l,i);else for(var a=e.length-1;a>=0;a--)if(o=e[a])s=(n<3?o(s):n>3?o(t,l,s):o(t,l))||s;return n>3&&s&&Object.defineProperty(t,l,s),s};var s=e("psk_select",function(){function e(e){t(this,e);this.label=null;this.value=null;this.selectionType="single";this.placeholder=null;this.required=false;this.disabled=false;this.invalidValue=null;this.options=null}e.prototype.componentWillLoad=function(){if(this.selectionType!=="single"&&this.selectionType!=="multiple"){this.selectionType="single"}};e.prototype.render=function(){var e=this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return l("div",{class:"form-group"},l("psk-label",{for:e,label:this.label}),l("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:this.selectionType==="multiple",onChange:this.__onChangeHandler.bind(this)},this.placeholder&&l("option",{disabled:true,label:this.placeholder,value:"",selected:this.value===null}),this.options&&this.options.map((function(e){var t=e.value?e.value:e.label&&e.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();var i=e.selected===true;return l("option",{selected:i,value:t,label:e.label,disabled:e.disabled})}))))};e.prototype.__onChangeHandler=function(e){e.preventDefault();e.stopImmediatePropagation();var t=e.target.value;if(this["changeModel"]){this["changeModel"].call(this,"value",t)}else{console.warn("[psk-select] Function named -=changeModel=- is not defined!")}};return e}());n([i()],s.prototype,"label",void 0)}}}));