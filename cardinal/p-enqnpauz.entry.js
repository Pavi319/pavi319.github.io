import{r as t,h as i,g as s}from"./p-bd5842d7.js";import{C as e}from"./p-bd9d7655.js";const n=class{constructor(i){t(this,i),this.fadeLength=1,this.visibleLength=2}componentWillLoad(){this.marginTop=this.element.getBoundingClientRect().y,this.checkLayout(),this.imagesSrcs=this.images.split(","),this.getAnimationCSS()}checkLayout(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop}renderSlide(t,s){return i("li",{id:"slide-"+s,class:"animation-"+s,style:{backgroundImage:"url("+t+")"}})}getAnimationCSS(){let t=this.fadeLength+this.visibleLength,i=100/(t*this.imagesSrcs.length),s=`@keyframes fade {\n    0% { opacity: 0; }\n    ${i*this.fadeLength}% { opacity: 1; }\n    ${i*t}% { opacity: 1; }\n    ${i*(t+this.fadeLength)}% { opacity: 0; }\n    100% { opacity: 0; }\n  }`;for(let i=0;i<this.imagesSrcs.length;i++)s+=`#psk-slider li:nth-child(${i}) {\n        animation-delay: ${t*i}s;\n        }`;let e=document.createElement("style");e.innerHTML=s,this.element.shadowRoot.prepend(e)}render(){let t=[];return this.imagesSrcs.forEach((i,s)=>{t.push(this.renderSlide(i,s))}),i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))}get element(){return s(this)}};!function(t,i,s,e){var n,l=arguments.length,o=l<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,i,s,e);else for(var d=t.length-1;d>=0;d--)(n=t[d])&&(o=(l<3?n(o):l>3?n(i,s,o):n(i,s))||o);l>3&&o&&Object.defineProperty(i,s,o)}([e()],n.prototype,"images",void 0);export{n as psk_slideshow};