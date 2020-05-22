!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);function n({type:e,id:t,value:r="",text:n="",eventType:o="onkeypress",eventMethod:a=null}){const i=document.createElement("input");return i.type=e,"range"===e&&(i.min=0,i.max=9),i.id=t,i.value=r,i.placeholder=n,i[o]=a,i}function o({parent:e,id:t="",isMainStyleSheet:r,CSS:n}){const o=e.createElement("style");if(r){const r=e.getElementById(t);r&&(r.remove(),window.onkeydown=null)}return o.appendChild(e.createTextNode(n)),o.id=t,o}function a(e,{overlayDarkenerEl:t,overlayBarEl:r}){if(e.brightnessTweaker.active)return i(e);const o=n({type:"range",id:"TRANSPARENCY__SLIDE-BRIGHTNESS",value:e.brightnessTweaker.level,eventType:"oninput",eventMethod:n=>{t.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`,r.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`,e.brightnessTweaker.level=e.brightnessTweaker.slider.value}}),a=function({id:e,text:t="",eventMethod:r=null}){const n=document.createElement("button");return n.id=e,n.innerText=t,n.onclick=r,n}({id:"TRANSPARENCY__SAVE-BRIGHTNESS",text:"Save brightness level",eventMethod:t=>{window.localStorage.setItem("brghtns",e.brightnessTweaker.level),alert(`Brightness level updated! Now it is at level ${e.brightnessTweaker.level}.`),i(e)}});document.body.appendChild(o),document.body.appendChild(a),e.brightnessTweaker={...e.brightnessTweaker,active:!0,slider:o,saveButton:a}}function i(e){e.brightnessTweaker.slider.remove(),e.brightnessTweaker.saveButton.remove(),e.brightnessTweaker.active=!1}const l="typeWindows-1za-n7.withFrame-haYltI.titleBar-AC4pGV.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3";!function(){!function(){const e=document.createElement("iframe");e.style.display="none",e.onload=t=>window.localStorage=e.contentWindow.localStorage,document.body.appendChild(e)}();const e={backgroundChangingInput:{active:!1,iframe:void 0},brightnessTweaker:{active:!1,level:window.localStorage.getItem("brghtns")||"9",input:void 0,saveButton:void 0}},t=document.querySelector(".app-1q1i1E"),r=document.querySelector(`.${l}`),i=(({backgroundImageURL:e,localBrightness:t})=>`.theme-dark {--background-primary:transparent;--background-secondary:transparent;--background-tertiary:transparent;--channeltextarea-background:transparent;--deprecated-panel-background:transparent;--background-secondary-alt:transparent;}#app-mount {background:url(${e}) center center no-repeat;background-size:cover;}.${l}{margin-top:0;padding-top:4px;background:${t};}.app-1q1i1E{background-color: ${t};}code.inline, .markup-2BOw-j code, code {background-color:#2f3136;}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB>.scroller-2FKFPG::-webkit-scrollbar-thumb {background-color:rgba(255,255,255,0.3) !important;}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB>.scroller-2FKFPG::-webkit-scrollbar-track-piece{background-color: transparent !important;border: none !important;}.theme-dark .container-1D34oG{background-color:transparent !important;}.contentWrapper-2txmjs, .messagesPopoutWrap-1MQ1bW, .searchResultsWrap-3-pOjs, .embedFull-2tM8--, .wrapper-35wsBm {background-color:rgba(0,0,0,0.7) !important;}.groupStart-23k01U:not(.message-2qnXI6) {display: none;}#TRANSPARENCY__SLIDE-BRIGHTNESS {position:absolute;right:43px;top:0;bottom:0;margin:auto;transform:translateY(200px);transform: scale(1.5);height: 200px;-webkit-appearance: slider-vertical;}#TRANSPARENCY__SAVE-BRIGHTNESS {position:absolute;right:43px;top:0;bottom:0;margin:auto;transform:translateY(200px);right:35px;height:40px;width:150px;}#TRANSPARENCY__BUTTON-IFRAME {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 200px;height: 60px;}`)({backgroundImageURL:window.localStorage.getItem("bgImg"),localBrightness:`rgba(0, 0, 0, 0.${e.brightnessTweaker.level})`||"rgba(0,0,0,0.9)",overlayDarkener:"app-1q1i1E",overlayBar:l}),c=o({parent:document,id:"TRANSPARENCY",isMainStyleSheet:!0,CSS:i});document.head.appendChild(c),window.onkeydown=i=>{i.ctrlKey&&("d"===i.key?c.getAttribute("media")?(c.removeAttribute("media"),r.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.level}`):(c.setAttribute("media","1px"),r.style.backgroundColor="var(--color-tertiary)"):"b"===i.key?a(e,{overlayDarkenerEl:t,overlayBarEl:r}):i.altKey&&function(e,t){if(e.backgroundChangingInput.active)return function(e){e.backgroundChangingInput.iframe.remove(),e.backgroundChangingInput.active=!1}(e);const r=n({type:"input",id:"TRANSPARENCY__IMAGE-LINK",text:"Paste discord image link here",eventType:"onkeypress",eventMethod:n=>{"Enter"===n.key&&""!==r.value.trim()&&(t.innerHTML+=`#app-mount{background: url(${r.value}) center center no-repeat !important; background-size: cover !important;}`,window.localStorage.setItem("bgImg",r.value),a.remove(),e.backgroundChangingInput.active=!1)}}),a=document.createElement("iframe");a.id="TRANSPARENCY__BUTTON-IFRAME",document.body.appendChild(a);const i=o({parent:a.contentDocument,isMainStyleSheet:!1,CSS:"#TRANSPARENCY__IMAGE-LINK {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100;width: 180px;height: 40px;text-align: center;box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);border-radius: 20px;}"});a.contentDocument.body.appendChild(i),a.contentDocument.body.appendChild(r),e.backgroundChangingInput={active:!0,iframe:a}}(e,c))}}()}]);