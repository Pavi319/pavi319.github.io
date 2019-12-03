import{r as e,h as t,g as n}from"./p-bd5842d7.js";import{T as a}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as i}from"./p-bd9d7655.js";var r,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,r,s=a.util.type(t);switch(n=n||{},s){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var o in n[r]=i={},t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case"Array":return r=a.util.objId(t),n[r]?n[r]:(n[r]=i=[],t.forEach(function(t,a){i[a]=e(t,n)}),i);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var r=(i=i||a.languages)[e],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var c in n)n.hasOwnProperty(c)&&(s[c]=n[c]);n.hasOwnProperty(o)||(s[o]=r[o])}var l=i[e];return i[e]=s,a.languages.DFS(a.languages,function(t,n){n===l&&t!=e&&(this[t]=s)}),s},DFS:function e(t,n,i,r){r=r||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],i||o);var c=t[o],l=a.util.type(c);"Object"!==l||r[s(c)]?"Array"!==l||r[s(c)]||(r[s(c)]=!0,e(c,n,o,r)):(r[s(c)]=!0,e(c,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i);for(var r,s=e.querySelectorAll(i.selector),o=0;r=s[o++];)a.highlightElement(r,!0===t,i.callback)},highlightElement:function(n,i,r){for(var s,o="none",c=n;c&&!t.test(c.className);)c=c.parentNode;c&&(o=(c.className.match(t)||[,"none"])[1].toLowerCase(),s=a.languages[o]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o,n.parentNode&&/pre/i.test((c=n.parentNode).nodeName)&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var l={element:n,language:o,grammar:s,code:n.textContent},u=function(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),r&&r.call(l.element)};if(a.hooks.run("before-sanity-check",l),l.code)if(a.hooks.run("before-highlight",l),l.grammar)if(i&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(a.highlight(l.code,l.grammar,l.language));else u(a.util.encode(l.code));else a.hooks.run("complete",l)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,s,o,c){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==c)return;var u=n[l];u="Array"===a.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var f=u[d],p=f.inside,g=!!f.lookbehind,h=!!f.greedy,b=0,F=f.alias;if(h&&!f.pattern.global){var m=f.pattern.toString().match(/[imuy]*$/)[0];f.pattern=RegExp(f.pattern.source,m+"g")}f=f.pattern||f;for(var v=r,w=s;v<t.length;w+=t[v].length,++v){var y=t[v];if(t.length>e.length)return;if(!(y instanceof i)){if(h&&v!=t.length-1){if(f.lastIndex=w,!(S=f.exec(e)))break;for(var A=S.index+(g?S[1].length:0),k=S.index+S[0].length,x=v,$=w,_=t.length;x<_&&($<k||!t[x].type&&!t[x-1].greedy);++x)A>=($+=t[x].length)&&(++v,w=$);if(t[v]instanceof i)continue;j=x-v,y=e.slice(w,$),S.index-=w}else{f.lastIndex=0;var S=f.exec(y),j=1}if(S){g&&(b=S[1]?S[1].length:0),k=(A=S.index+b)+(S=S[0].slice(b)).length;var T=y.slice(0,A),O=y.slice(k),z=[v,j];T&&(++v,w+=T.length,z.push(T));var D=new i(l,p?a.tokenize(S,p):S,F,S,h);if(z.push(D),O&&z.push(O),Array.prototype.splice.apply(t,z),1!=j&&a.matchGrammar(e,t,n,v,w,!0,l),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(t)}},Token:i};function i(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i}if(e.Prism=a,i.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return i.stringify(e,t)}).join("");var n={type:e.type,content:i.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,r)}a.hooks.run("wrap",n);var s=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),i=n.language,r=n.immediateClose;e.postMessage(a.highlight(n.code,a.languages[i],i)),r&&e.close()},!1),a):a;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==s&&(s.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",r)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,i=e.getAttribute("data-src"),r=e,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(a=(e.className.match(s)||[,""])[1]),!a){var o=(i.match(/\.(\w+)$/)||[,""])[1];a=n[o]||o}var c=document.createElement("code");c.className="language-"+a,e.textContent="",c.textContent="Loading…",e.appendChild(c);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(c.textContent=l.responseText,t.highlightElement(c),e.setAttribute("data-src-loaded","")):c.textContent=l.status>=400?"✖ Error "+l.status+" while fetching file: "+l.statusText:"✖ Error: File does not exist or is empty")},l.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}(r={exports:{}}),r.exports),c=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const l=class{constructor(t){e(this,t),this.title="",this.language="xml",this.componentCode=""}componentWillLoad(){switch(this.language){case"javascript":case"css":this.componentCode=this.host.innerText;break;default:this.componentCode=this.host.innerHTML}let e=this.host.querySelector("link");e?(this.host.innerHTML=e.outerHTML,this.componentCode=this.componentCode.replace(e.outerHTML,"")):this.host.innerHTML=""}componentDidLoad(){o.highlightAllUnder(this.host)}render(){let e=document.createElement("textarea");e.innerHTML=this.componentCode;const n=t("pre",null,t("code",{class:`language-${this.language}`},e.value));return""===this.title.replace(/\s/g,"")?t("div",null,n):t("psk-chapter",{title:this.title},n)}get host(){return n(this)}};c([i(),a({description:"This property is the title of the psk-chapter that will be created.",isMandatory:!1,propertyType:"string"})],l.prototype,"title",void 0),c([a({description:"This property is the language, in which the code is written(so the css can identify it).",isMandatory:!1,propertyType:"string"})],l.prototype,"language",void 0);export{l as psk_code};