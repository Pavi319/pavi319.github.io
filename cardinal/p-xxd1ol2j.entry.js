import{r as e,h as t,g as o}from"./p-a1b3783e.js";import"./p-a4bfa1a2.js";import"./p-5eef8cc8.js";import{T as r}from"./p-a0ba8b88.js";import{C as s}from"./p-f30844a3.js";var i=function(e,t,o,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,o,a):s(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};const a=class{constructor(t){e(this,t),this.cellsWidth="",this.tableContent=null}render(){return t("table",null,this.tableContent)}componentWillLoad(){let e=[];this.cellsWidth.length>0&&(e=this.cellsWidth.split(",")),e=e.map(e=>parseInt(e));let t=this.element.innerHTML.split(/\n/g).map(e=>e.trim().replace("\x3c!----\x3e","")).filter(e=>e.length>0).map((t,o)=>{let r=-1;return`<tr style=width:100%;>${t.split("|").map(t=>(r++,this.header&&0===o?`<th style=width:${e.length>r?`${e[r]}%;`:"auto"}>${t.trim()}bleeeeeeeeeeeeeeeeeeah</th>`:`<td style=width:${e.length>=r?`${e[r]}%;`:"auto"}>${t.trim()}</td>`)).join("")}bleeeeeeeeeeeeeeeeeeah                                             </tr>`}),o=[];this.header?(o.push(this._stringArrayToHTMLElement("thead",t.splice(0,1))),this.footer?(o.push(this._stringArrayToHTMLElement("tbody",t.splice(0,t.length-1))),o.push(this._stringArrayToHTMLElement("tfoot",[t[t.length-1]]))):o.push(this._stringArrayToHTMLElement("tbody",t.splice(0)))):o=[this._stringArrayToHTMLElement("tbody",t)],this.tableContent=o,this.element.innerHTML=""}_stringArrayToHTMLElement(e,o){return t(e,{innerHTML:o.join("")})}get element(){return o(this)}};i([s(),r({description:"If this property is set to true then the first row of the given content will be shown as a table header.",isMandatory:!1,propertyType:"boolean"})],a.prototype,"header",void 0),i([r({description:"If this property is set to true then the last row of the given content will be shown as a table footer.",isMandatory:!1,propertyType:"boolean"})],a.prototype,"footer",void 0);export{a as psk_table};