import{g as e}from"./p-a1b3783e.js";import{b as t,c as n,d as s,e as r}from"./p-86d7a324.js";import{c as i}from"./p-50fde516.js";function c(c){return function(o,a){const{connectedCallback:l,render:f}=o;let d="psk-send-events",b=t,p=n,m="definedEvents";o.connectedCallback=function(){let t=this,n=e(t);if(c.controllerInteraction&&(p=s,m="definedControllers",b=r,d="psk-send-controllers"),n.hasAttribute(p)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[m]=[Object.assign(Object.assign({},c),{eventName:String(a)})],l&&l.call(t);let e=t.componentDefinitions;const n=Object.assign(Object.assign({},c),{eventName:String(a)});if(e&&e.hasOwnProperty(b)){let t=[...e[b]];t.push(n),e[b]=[...t]}else e[b]=[n];t.componentDefinitions=Object.assign({},e)}return l&&l.call(t)},o.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[b])return f&&f.call(this);let e=this.componentDefinitions[b];e&&(e=e.reverse()),i(d,{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{c as T};