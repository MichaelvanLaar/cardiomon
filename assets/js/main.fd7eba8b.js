!function(){var e={353:function(){(()=>{const e="page-header";if(window.location.hash.length>0&&document.referrer.split("/")[2]!==window.location.hostname){let t=document.querySelector(window.location.hash);t&&(window.onload=()=>function(t){let n=1*document.getElementById(e).offsetHeight,o=Math.max(t.offsetTop-n,0);window.scrollTo(0,o)}(t))}else document.querySelectorAll("a[href^='#']").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault();let o=t.getAttribute("href"),r=o.substring(1),c=document.querySelector(o)||document.querySelector("a[name='".concat(r,"']"));c&&function(t,n){let o=window.scrollY||document.documentElement.scrollTop,r=t.offsetTop,c=document.getElementById(e),a=null;window.requestAnimationFrame((function e(t){a||(a=t);let n=t-a,i=1*c.offsetHeight,l=Math.max(r-i,0),d=o+(l-o)*((s=n/500)<.5?2*s*s:(4-2*s)*s-1);var s;window.scrollTo(0,d),n<500?window.requestAnimationFrame(e):window.scrollTo(0,l)})),history.pushState({},"",n)}(c,o)}))}))})()},162:function(){(()=>{const e=document.getElementById("image-modal"),t=document.getElementById("image-modal-img"),n=document.getElementById("image-modal-loader");function o(){e.classList.add("opacity-0"),setTimeout((()=>{e.classList.remove("flex"),e.classList.add("hidden"),t.src="",n.classList.remove("flex"),n.classList.add("hidden")}),300)}document.addEventListener("DOMContentLoaded",(r=>{document.querySelectorAll("[data-image-modal-trigger]").forEach((o=>{o.addEventListener("click",(r=>{r.preventDefault();var c;c=o.getAttribute("data-image-modal-url"),n.classList.remove("hidden"),n.classList.add("flex"),e.classList.remove("hidden"),e.classList.add("flex"),e.offsetHeight,e.classList.remove("opacity-0"),t.src=c}))})),document.querySelectorAll("[data-image-modal-close]").forEach((e=>{e.addEventListener("click",(e=>{o()}))})),e.addEventListener("click",(t=>{t.target===e&&o()}))})),t.addEventListener("load",(()=>{n.classList.remove("flex"),n.classList.add("hidden")}))})()},348:function(){(()=>{const e=document.querySelectorAll("a[target='_blank']:not([rel='noopener'])");for(let t of e)t.setAttribute("rel","noopener")})()},809:function(){(()=>{const e=document.querySelector("#main-menu-state");if(!e)return;const t=function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.preventDefault(),e.checked=n},n=(e,t,n)=>{const o=document.querySelector(e);o&&o.addEventListener(t,n)};n("a.main-menu-open","click",(e=>t(e,!0))),n("a.main-menu-close","click",(e=>t(e,!1)))})()},915:function(){(e=>{const t="print-only";!function(){if(!document.querySelector(e))return;var n;const o=function(e,t,n,o){const r=new Map;return e.filter((e=>!(1===e.childNodes.length&&"IMG"===e.childNodes[0].nodeName))).map((e=>{const c=e.href;let a=r.get(c);const i=void 0!==a;i||(a=r.size+1,r.set(c,a));const l=function(e,t,n,o){const r=document.createElement("sup");return r.classList.add(t),r.textContent="".concat(n).concat(e).concat(o),r}(a,t,n,o);return e.parentNode.insertBefore(l,e.nextSibling),{url:c,isDuplicate:i}}))}((n=e,Array.from(document.querySelectorAll("".concat(n,' a[href]:not([href^=\'#\']):not([href^="mailto"]):not([href^="javascript"])')))),t,"[","]");if(0==o.length)return;const r=function(e,t,n,o){const r=document.createElement("section");return r.classList.add("print-links-footer",t),r.innerHTML="<".concat("h3",">").concat("Links","</").concat("h3",">"),r}(0,t),c=document.createElement("ol");c.classList.add("print-links-footer-list"),o.forEach((e=>{let{url:t,isDuplicate:n}=e;n||c.appendChild(function(e){const t=document.createElement("li");return t.textContent=e,t}(t))})),r.appendChild(c),document.body.appendChild(r)}()})(".js-page-main-content")},868:function(){(()=>{const e=document.body,t=parseFloat(getComputedStyle(e).getPropertyValue("--site-header-initial-height")),n=parseFloat(getComputedStyle(e).getPropertyValue("--site-header-scroll-height")),o=parseFloat(getComputedStyle(e).getPropertyValue("--site-header-initial-padding-y")),r=parseFloat(getComputedStyle(e).getPropertyValue("--site-header-scroll-padding-y"));window.addEventListener("scroll",(()=>{const c=window.scrollY;let a=t,i=o;if(c>50){const e=Math.min(c-50,200)/200;a=t-(t-n)*e,i=o-(o-r)*e}e.style.setProperty("--site-header-height","".concat(a,"rem")),e.style.setProperty("--site-header-padding-y","".concat(i,"rem"))}))})()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(353),n(162),n(348),n(809),n(915),n(868)}()}();