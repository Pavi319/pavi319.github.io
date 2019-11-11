import{r as e,h as t}from"./p-a1b3783e.js";import"./p-86d7a324.js";import"./p-50fde516.js";import{T as r}from"./p-9ba64865.js";import{C as s}from"./p-903751bd.js";var a=function(e,t,r,s){var a,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};const n=class{constructor(t){e(this,t)}renderMenuItem(e){let r=e.path,s=[];return e.children&&e.children.forEach(e=>{s.push(this.renderMenuItem(e))}),t("abstract"===e.type?"dropdown-renderer":"stencil-route-link",{url:r,activeClass:"active",exact:!1,somethingChanged:this.value},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:`icon fa ${e.icon}`}),t("a",null,e.children?t("span",{class:"item_name"},e.name,t("span",{class:"fa fa-caret-down"})):t("span",{class:"item_name"},e.name))),e.children?t("div",{class:"children"},s):null))}render(){return this.renderMenuItem(this.value)}};a([s(),r({description:"This property is the MenuItem that will be renderer as part of the menu",isMandatory:!1,propertyType:"MenuItem"})],n.prototype,"value",void 0),a([r({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:!1,propertyType:"boolean"})],n.prototype,"active",void 0);export{n as psk_menu_item_renderer};