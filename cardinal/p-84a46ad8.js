import{g as o}from"./p-bd5842d7.js";function e(){return e=>{const{componentWillLoad:n}=e;e.componentWillLoad=function(){const e=o(this);if(!e)return n&&n.call(this);if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let o=e.tagName.toLowerCase();return new Promise(t=>{let i="/themes/"+globalConfig.theme+"/components/"+o+"/"+o+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",i),(e.shadowRoot?e.shadowRoot:e).prepend(s);let l=!1,f=()=>{l||(l=!0,t(n&&n.call(this)))};s.onload=f,s.onerror=()=>{console.log(`File ${i} was not found`),f()},setTimeout(()=>{!1===l&&(l=!0,t(n&&n.call(this)))},100)})}console.error("Theme or globalConfig is not defind!")}}}export{e as C};