System.register(["./p-226ad382.system.js"],function(e){"use strict";var t,l;return{setters:[function(e){t=e.r;l=e.h}],execute:function(){var s=e("psk_radio",function(){function e(e){t(this,e);this.label=null;this.defaultValue=null;this.options=null;this.required=false;this.disabled=false;this.invalidValue=null}e.prototype.render=function(){var e=this;if(typeof this.options==="string"){this.options=this.options.split("|").map(function(e){return{label:e.trim(),name:e.replace(/(\s|\.)/g,"")}})}return l("div",{class:"form-group"},l("label",{htmlFor:this.label.replace(/\s/g,"").toLowerCase()},this.label),l("div",{class:"form-group"},this.options.map(function(t){var s=t.name?t.name:t.label.replace(/\s/g,"").toLowerCase();var a=e.defaultValue!==null&&(e.defaultValue===s||e.defaultValue===t.label);return l("div",{class:"form-check form-check-inline"},l("input",{class:"form-check-input",type:"radio",name:s,id:s,checked:a,value:s}),l("label",{class:"form-check-label",htmlFor:s},t.label))})))};return e}())}}});