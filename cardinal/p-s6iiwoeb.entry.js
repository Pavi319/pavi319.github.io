import{r as t,g as e,h as r}from"./p-a1b3783e.js";import"./p-a4bfa1a2.js";import{a as s,s as i}from"./p-5eef8cc8.js";import{T as a}from"./p-a0ba8b88.js";import{C as l}from"./p-f30844a3.js";const o=class{constructor(e){t(this,e),this.chapterList=[]}connectedCallback(){this.pskPageElement=s(e(this),"psk-page")}tocReceived(t){t.detail&&(this.chapterList=this._sortChapters([...t.detail]))}_sortCurrentChapter(t,e){if(0===t.children.length)return t;let r=[];for(let s=0;s<e.length;++s){let i=t.children.find(t=>t.guid===e[s]);i&&(e.splice(s--,1),r.push(this._sortCurrentChapter(i,e)))}return Object.assign(Object.assign({},t),{children:r})}_sortChapters(t){const e=this.pskPageElement.querySelectorAll("psk-chapter"),r=[];e.forEach(t=>{t.hasAttribute("data-define-props")||t.hasAttribute("data-define-controller")||t.hasAttribute("data-define-events")||!t.hasAttribute("guid")||r.push(t.getAttribute("guid"))});let s=[];for(let i=0;i<r.length;++i){let e=t.find(t=>t.guid===r[i]);e&&(r.splice(i--,1),s.push(this._sortCurrentChapter(e,r)))}return s}_renderChapters(t,e,s){return e.map((e,a)=>{let l=void 0===s?"Ceva Ceva":`${s}${a+1}.Altceva Altceva`;return r("li",{onClick:r=>{r.stopImmediatePropagation(),r.preventDefault(),i(e.title,t)}},r("span",null,`${l} ${e.title}`),0===e.children.length?null:r("ul",null,this._renderChapters(t,e.children,l)))})}render(){return r("div",{class:"table-of-content"},r("psk-card",{title:this.title},r("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))}};!function(t,e,r,s){var i,a=arguments.length,l=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,s);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(l=(a<3?i(l):a>3?i(e,r,l):i(e,r))||l);a>3&&l&&Object.defineProperty(e,r,l)}([l(),a({description:"This property is the title of the psk-card that will be created",isMandatory:!1,propertyType:"string"})],o.prototype,"title",void 0);export{o as psk_toc};