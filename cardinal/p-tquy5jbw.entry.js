import{r as e,h as t}from"./p-a1b3783e.js";import{C as r}from"./p-f30844a3.js";const a=class{constructor(t){e(this,t)}renderMenuItem(e){let r=e.path,a=[];return e.children&&e.children.forEach(e=>{a.push(this.renderMenuItem(e))}),t("abstract"===e.type?"expandable-renderer":"query"===this.historyType?"query-page-link":"stencil-route-link",{firstMenuChild:e.children?e.children[0]:"",url:r,activeClass:"active",exact:!1,somethingChanged:this.value},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:`icon fa ${e.icon}`}),t("span",{class:"item_name"},e.name),e.children?t("span",{class:"fa fa-caret-right expand-menu"}):null),e.children?t("div",{class:"children"},a):null))}render(){return this.renderMenuItem(this.value)}};!function(e,t,r,a){var s,n=arguments.length,i=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);n>3&&i&&Object.defineProperty(t,r,i)}([r()],a.prototype,"value",void 0);export{a as sidebar_renderer};