System.register(["./p-226ad382.system.js"],function(e){"use strict";var l,t;return{setters:[function(e){l=e.r;t=e.h}],execute:function(){var i=e("psk_input",function(){function e(e){l(this,e);this.label=null;this.type="text";this.value=null;this.defaultValue=null;this.placeHolder=null;this.required=false;this.readOnly=false;this.invalidValue=null}e.prototype.render=function(){var e=this.invalidValue===null?"":this.invalidValue?"is-invalid":"is-valid";var l=this.value!==null?this.value:this.defaultValue!==null?this.defaultValue:"";return t("div",{class:"form-group"},this.label&&t("label",{htmlFor:this.label.replace(/\s/g,"").toLowerCase()},this.label),t("input",{readOnly:this.readOnly,required:this.required,type:this.type,value:l,name:this.label&&this.label.replace(/\s/g,"").toLowerCase(),class:"form-control "+e,placeholder:this.placeHolder}))};return e}())}}});