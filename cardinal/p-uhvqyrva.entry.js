import{r as t,h as s,g as i}from"./p-bd5842d7.js";import{C as e}from"./p-bd9d7655.js";const n=class{constructor(s){t(this,s),this.fadeLength=1,this.visibleLength=2}componentWillLoad(){this.marginTop=this.element.getBoundingClientRect().y,this.checkLayout(),this.imagesSrcs=this.images.split(","),this.getAnimationCSS()}checkLayout(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop}renderSlide(t,i){return s("li",{id:"slide-"+i,class:"animation-"+i,style:{backgroundImage:"url("+t+")"}})}getAnimationCSS(){let t=this.fadeLength+this.visibleLength,s=100/t*this.imagesSrcs.length,i=`@keyframes fade {\n    0%   { opacity: 0; }\n    ${s*this.fadeLength}%   { opacity: 1; }\n    ${s*t}%\n    ${s*(t+this.fadeLength)}%{ opacity: 1; }\n    100% { opacity: 0; }\n  }`;for(let s=0;s<this.imagesSrcs.length;s++)i+=`#psk-slider li:nth-child(${s}) {\n        animation-delay: ${t*s}s;\n        }`;let e=document.createElement("style");e.innerHTML=i,this.element.appendChild(e)}render(){let t=[];return this.imagesSrcs.forEach((s,i)=>{t.push(this.renderSlide(s,i))}),s("div",{class:"psk-slideshow"},s("div",{class:"psk-slideshow-container"},s("div",{id:"psk-content-slider"},s("div",{id:"psk-slider"},s("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},s("ul",null,t))))))}get element(){return i(this)}};!function(t,s,i,e){var n,l=arguments.length,o=l<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,s,i,e);else for(var d=t.length-1;d>=0;d--)(n=t[d])&&(o=(l<3?n(o):l>3?n(s,i,o):n(s,i))||o);l>3&&o&&Object.defineProperty(s,i,o)}([e()],n.prototype,"images",void 0);export{n as psk_slideshow};