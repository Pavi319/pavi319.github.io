import{g as o}from"./p-bd5842d7.js";function e(){return e=>{const{componentWillLoad:t}=e;e.getInnerContent=function(e){const t=o(this);if(t[e]){let o=t.querySelector("link");if(o){let n=t[e].replace(o.outerHTML,"");return t[e]=o.outerHTML,n}return t[e]}console.error(`${e} is not a property`)},e.componentWillLoad=function(){const e=o(this);if(!e)return t&&t.call(this);if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let o=e.tagName.toLowerCase();return new Promise(n=>{let i="/themes/"+globalConfig.theme+"/components/"+o+"/"+o+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",i),(e.shadowRoot?e.shadowRoot:e).prepend(s);let l=!1,r=()=>{l||(l=!0,n(t&&t.call(this)))};s.onload=r,s.onerror=()=>{console.log(`File ${i} was not found`),r()},setTimeout(()=>{!1===l&&(l=!0,n(t&&t.call(this)))},100)})}console.error("Theme or globalConfig is not defined!")}}}export{e as C};