System.register(["./p-0b2166d8.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.g}],execute:function(){e("C",o);function o(){return function(e){var o=e.componentWillLoad;e.componentWillLoad=function(){var e=this;var n=t(this);if(!n||!n.shadowRoot){return o&&o.call(this)}else{if(typeof globalConfig!=="undefined"&&typeof globalConfig.theme==="string"){var r=n.tagName.toLowerCase();return new Promise((function(t){console.log(r);var i="/themes/"+globalConfig.theme+"/components/"+r+"/"+r+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet");s.setAttribute("href",i);n.shadowRoot.prepend(s);var l=false;var a=function(){if(!l){l=true;t(o&&o.call(this))}};s.onload=a;s.onerror=function(){console.log("File "+i+" was not found");a()};setTimeout((function(){if(l===false){t(o&&o.call(e))}}),200)}))}else{console.error("Theme or globalConfig is not defind!")}}}}}}}}));