if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const f=e=>r(e,n),c={module:{uri:n},exports:o,require:f};i[n]=Promise.all(s.map((e=>c[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3b0a1ed"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icono-512.png",revision:"803b9df86210d36e9e666c612628fffe"},{url:"index.html",revision:"89d83298f9399a4576fdf303de701a0f"},{url:"script.js",revision:"2387e298dc422ff5aa271767ce7d6a4a"},{url:"style.css",revision:"9a39baac764c31ae5a2eeb48be799b2f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
