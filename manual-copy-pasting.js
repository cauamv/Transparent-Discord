!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function r({type:e,id:t,value:n="",text:r="",eventType:a="onkeydown",eventMethod:o=null}){const i=document.createElement("input");return i.type=e,"range"===e&&(i.min=0,i.max=9),i.id=t,i.value=n,i.placeholder=r,i[a]=o,i}function a({parent:e,id:t="",isMainStyleSheet:n,CSS:r}){const a=e.createElement("style");if(n){const n=e.getElementById(t);n&&(n.remove(),window.onkeydown=null)}return a.appendChild(e.createTextNode(r)),a.id=t,a}function o({text:e,timeout:t,containsHTML:n=!1}){const r=document.createElement("div");return r.className="TRANSPARENCY__ALERT",r[n?"innerHTML":"textContent"]=e,document.body.appendChild(r),new Promise(e=>{setTimeout(()=>{r.classList.add("TRANSPARENCY__ALERT--INACTIVE"),setTimeout(()=>{r.remove(),e()},1e3)},t)})}function i(e,{overlayDarkenerElement:t,overlayBarElement:n}){if(e.brightnessTweaker.active)return s(e);const i=document.createElement("iframe");i.id="TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME",document.body.appendChild(i);const l=r({type:"range",id:"TRANSPARENCY__SLIDE-BRIGHTNESS",value:e.brightnessTweaker.level,eventType:"oninput",eventMethod:e.isDarkTheme?r=>{t.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`,n.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`,e.brightnessTweaker.set("level",e.brightnessTweaker.slider.value)}:r=>{t.style.backgroundColor=`rgba(255,255,255,0.${e.brightnessTweaker.slider.value})`,n.style.backgroundColor=`rgba(255,255,255,0.${e.brightnessTweaker.slider.value})`,e.brightnessTweaker.set("level",e.brightnessTweaker.slider.value)}}),d=function({id:e,text:t="",eventMethod:n=null}){const r=document.createElement("button");return r.id=e,r.innerText=t,r.onclick=n,r}({id:"TRANSPARENCY__SAVE-BRIGHTNESS",text:"Save brightness level",eventMethod:t=>{window.localStorage.setItem("brghtns",e.brightnessTweaker.level),o({text:`Brightness level updated! Now it is at level <b>${e.brightnessTweaker.level}</b>.`,containsHTML:!0,timeout:3e3}),s(e)}}),c=a({parent:i.contentDocument,isMainStyleSheet:!1,CSS:"#TRANSPARENCY__SLIDE-BRIGHTNESS {transform: scale(1.5);height: 200px;-webkit-appearance: slider-vertical;}#TRANSPARENCY__SAVE-BRIGHTNESS {height:40px;width:150px;margin-top:80px;}"}),u=i.contentDocument.body;u.style="display:flex;justify-content:center;align-items:center;flex-direction:column;",u.appendChild(c),u.appendChild(l),u.appendChild(d),e.brightnessTweaker.set("slideBrightnessIframe",i).set("slider",l).set("active",!0)}function s(e){e.brightnessTweaker.slider.remove(),e.brightnessTweaker.slideBrightnessIframe.remove(),e.brightnessTweaker.set("slider",null).set("slideBrightnessIframe",null).set("active",!1)}const l="typeWindows-1za-n7.withFrame-haYltI.titleBar-AC4pGV.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3";!function(){!function(){const e=document.createElement("iframe");e.style.display="none",e.onload=t=>window.localStorage=e.contentWindow.localStorage,document.body.appendChild(e)}();const e={backgroundChangingInput:{active:!1,iframeButton:null,set:(t,n)=>(e.backgroundChangingInput[t]=n,e.backgroundChangingInput)},brightnessTweaker:{active:!1,level:window.localStorage.getItem("brghtns")||"9",slider:null,saveButton:null,slideBrightnessIframe:null,set:(t,n)=>(e.brightnessTweaker[t]=n,e.brightnessTweaker)},isDarkTheme:document.documentElement.classList.contains("theme-dark")},t=document.querySelector(".app-1q1i1E"),n=document.querySelector("."+l),s=!e.isDarkTheme&&n.classList.contains("theme-dark"),d=(({backgroundImageURL:e,state:t})=>{const n=t.isDarkTheme?`rgba(0, 0, 0, 0.${t.brightnessTweaker.level})`||"rgba(0,0,0,0.9)":`rgba(255, 255, 255, 0.${t.brightnessTweaker.level})`||"rgba(255,255,255,0.7)";return`.theme-dark, .theme-light { --background-primary:transparent; --background-secondary:transparent; --background-tertiary:transparent; --channeltextarea-background:transparent; --deprecated-panel-background:transparent; --background-secondary-alt:transparent; --scrollbar-auto-track:transparent; } .theme-dark { --scrollbar-auto-thumb:rgba(255,255,255,0.3); } .theme-light { --scrollbar-auto-thumb:rgba(0,0,0,0.6); } #app-mount { background:url(${e}) center center no-repeat; background-size:cover; } .${l}{ margin-top:0; padding-top:4px; background:${n}; } .app-1q1i1E{ background-color: ${n}; } .container-1D34oG{ background-color:transparent !important; } .container-16j22k, .popoutContainer-1MXdqN, .root-SR8cQa, .quickswitcher-3JagVE, .code.inline, .markup-2BOw-j code, code, .attachment-33OFj0, .recentMentionsPopout-3rCiI6, .channelHeader-3Gd2xq, .contentWrapper-SvZHNd, .emojiPicker-3PwZFl, .wrapper-2aW0bm, .messagesPopoutWrap-1MQ1bW, .searchResultsWrap-3-pOjs, .embedFull-2tM8--, .wrapper-35wsBm { background-color:${t.isDarkTheme?"rgba(0,0,0,0.7)":"rgba(255,255,255,0.85)"} !important; } div[class=groupStart-23k01U]:not(.message-2qnXI6) { display: none; } #TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME { position:absolute; height: 100%; right:0; top:0; bottom:0; margin:auto; } #TRANSPARENCY__BUTTON-IFRAME { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 200; width: 400px; height: 215px; } .TRANSPARENCY__ALERT { position: absolute; top: 0px; left: 0px; right: 0px; margin: auto; padding: 20px; font-size: 14px; width: fit-content; background-color: #faa61a; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px; z-index: 10000; box-shadow: rgba(255, 255, 255, 0.8) -1px 5px 11px 0px; transition: transform 500ms ease; animation: TRANSPARENCY__SLIDE 500ms ease; } @keyframes TRANSPARENCY__SLIDE { from { transform: translateY(-130%); } to { transform: translateY(0) } } .TRANSPARENCY__ALERT--INACTIVE { transform: translateY(-130%); }`})({backgroundImageURL:window.localStorage.getItem("bgImg"),state:e}),c=a({parent:document,id:"TRANSPARENCY",isMainStyleSheet:!0,CSS:d});document.head.appendChild(c),o({text:"Welcome back! These are the shortcuts if you need a quick refresher:<br><b>CTRL + ALT</b> - to change the background image<br><b>CTRL + B</b> - to tweak the brightness of the background image<br><b>CTRL + D</b> - to deactivate the theme, and go back to the old look.",timeout:1e4,containsHTML:!0}).then(()=>{s&&o({text:"<b>🛑 Warning</b><br><br>Your sidebar is currently dark themed.<br>For proper text visibility, disable its dark theme in Settings > Appearance. <u>No need to refresh</u>.",timeout:1e4,containsHTML:!0})}),window.addEventListener("keydown",o=>{o.ctrlKey&&("KeyD"===o.code?function(e,t,n){t.getAttribute("media")?(t.removeAttribute("media"),n.style.backgroundColor=e.isDarkTheme?"rgba(0,0,0,0."+e.brightnessTweaker.level:"rgba(255,255,255,0."+e.brightnessTweaker.level):(t.setAttribute("media","1px"),n.style.backgroundColor="var(--color-tertiary)")}(e,c,n):"KeyB"===o.code?i(e,{overlayDarkenerElement:t,overlayBarElement:n}):o.altKey&&function(e,t){if(e.backgroundChangingInput.active)return function(e){e.backgroundChangingInput.iframeButton.remove(),e.backgroundChangingInput.set("active",!1).set("iframeButton",null)}(e);const n=r({type:"input",id:"TRANSPARENCY__IMAGE-LINK",text:"Paste discord image link here",eventMethod:r=>{"Enter"===r.key&&""!==n.value.trim()&&(t.innerHTML+=`#app-mount{background: url(${n.value}) center center no-repeat !important; background-size: cover !important;}`,window.localStorage.setItem("bgImg",n.value),o.remove(),e.backgroundChangingInput.active=!1)}}),o=document.createElement("iframe");o.id="TRANSPARENCY__BUTTON-IFRAME",document.body.appendChild(o);const i=a({parent:o.contentDocument,isMainStyleSheet:!1,CSS:"body{display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;}#TRANSPARENCY__IMAGE-LINK {width: 250px;height: 40px;text-align: center;outline:none;box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);border-radius: 20px;border:none;}p{line-height: 18px;background-color: rgba(0, 0, 0, 0.95);font-family:monospace;padding: 10px;border-radius: 20px;color: white;margin:0;}"}),s=document.createElement("p");s.textContent="(!) The image you want as your background must be sent as a message on Discord, then you will have to click on the image, press on {Open original}, and copy the link from there.";const l=o.contentDocument.body;l.appendChild(i),l.appendChild(n),l.appendChild(s),e.backgroundChangingInput.set("active",!0).set("iframeButton",o)}(e,c))})}()}]);