System.register(["./p-226ad382.system.js"],function(e){"use strict";var n;return{setters:[function(e){n=e.g}],execute:function(){e({T:b,c:p,e:h,s:u});var t="definedProperties";var r=e("D","definedEvents");var i=e("d","definedControllers");var a="data-define-props";var o=e("a","data-define-events");var c=e("b","data-define-controller");var s=e("g","Copy to clipboard");var l=e("f","Copied!");var f=e("L","ordered");var d=e("P",{startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/});var v=e("A",{view:{value:"eye",color:"rgba(108, 192, 145, 1)"},edit:{value:"edit",color:"#007bff"},cancel:{value:"close",color:"#dc3545"},bid:{value:"gavel"},calendar:{value:"calendar-check-o"}});function u(e,n){var t=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var r=n.querySelector("#"+t);if(!r){return}r.scrollIntoView({behavior:"smooth"});var i=window.location.href;var a="?";if(i.indexOf("chapter=")!==-1){i=window.location.href.split("chapter=")[0];if(i.length>0){a=i[i.length-1];i=i.substring(0,i.length-1)}}else{a=i.indexOf("?")>0?"&":"?"}var o=a+"chapter=";window.history.pushState({},"",""+i+o+t)}function p(e,n,t){if(t===void 0){t=false}var r=new CustomEvent(e,n);if(t){document.dispatchEvent(r)}}function h(e,n,t){var r=null;while(e){if(e.matches(n)){r=e;break}else if(t&&e.matches(t)){break}e=e.parentElement}return r}function b(e){return function(r,i){var o=r.connectedCallback,c=r.render;r.connectedCallback=function(){var r=this;var c=n(r);if(c.hasAttribute(a)){if(!r.componentDefinitions){r.componentDefinitions={definedProperties:[Object.assign({},e,{propertyName:String(i)})]};return o&&o.call(r)}var s=r.componentDefinitions;var l=Object.assign({},e,{propertyName:String(i)});if(s&&s.hasOwnProperty(t)){var f=s[t].slice();f.push(l);s[t]=f.slice()}else{s[t]=[l]}r.componentDefinitions=Object.assign({},s)}return o&&o.call(r)};r.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[t])){return c&&c.call(e)}var n=e.componentDefinitions[t];if(n){n=n.reverse()}p("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}});