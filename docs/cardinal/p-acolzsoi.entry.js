import{r as t,h as e}from"./p-a1b3783e.js";import"./p-86d7a324.js";import"./p-50fde516.js";import{T as o}from"./p-9ba64865.js";import{C as s}from"./p-8952f246.js";var i=function(t,e,o,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,s);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(l=(n<3?i(l):n>3?i(e,o,l):i(e,o))||l);return n>3&&l&&Object.defineProperty(e,o,l),l};const n=class{constructor(e){t(this,e),this.label="Select files"}addedFile(t){let e=Array.from(t.target.files);if("function"==typeof this.onFilesChange&&this.onFilesChange(e),"function"==typeof this.onFilesSelect){let t=e.map(t=>({name:t.name,size:t.size,type:t.name.substr(t.name.lastIndexOf(".")+1)}));this.onFilesSelect(t)}}render(){return[e("button",{type:"button",class:"btn btn-secondary p-0"},e("label",{class:"pt-0 mb-0 p-2"},this.label,e("input",{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),multiple:!0,class:"form-control-file form-control-sm"}))),this.onFilesChange||this.onFilesSelect?null:e("h5",{class:"mt-4"},"No controller set for this component!")]}};i([s(),o({description:"This is the lable of the button",isMandatory:!1,propertyType:"string",defaultValue:"Select files"})],n.prototype,"label",void 0),i([o({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:!1,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],n.prototype,"accept",void 0),i([o({description:"This property tells the component what to do with the changed uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the changed uploaded files.",isMandatory:!1,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],n.prototype,"onFilesChange",void 0),i([o({description:"This property tells the component what to do with the selected uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the selected uploaded files.",isMandatory:!1,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],n.prototype,"onFilesSelect",void 0);export{n as psk_files_chooser};