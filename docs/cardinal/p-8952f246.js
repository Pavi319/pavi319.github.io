import{g as o}from"./p-a1b3783e.js";function e(){return e=>{const{componentWillLoad:n}=e;e.componentWillLoad=function(){const e=o(this);if(!e||!e.shadowRoot)return n&&n.call(this);if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let o=e.tagName.toLowerCase();return new Promise(t=>{console.log(o);let s="/themes/"+globalConfig.theme+"/components/"+o+"/"+o+".css";var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("href",s),e.shadowRoot.prepend(i),i.onload=()=>{console.log(o+" loaded"),t(n&&n.call(this))},i.onerror=()=>{console.log(`File ${s} was not found`),t(n&&n.call(this))}})}console.error("Theme or globalConfig is not defind!")}}}export{e as C};