if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>n(e,r),a={module:{uri:r},exports:o,require:f};i[r]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BaMTLMsk.css",revision:null},{url:"assets/index-nRwZ8gVZ.js",revision:null},{url:"favicon_OLD.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"favicon.ico",revision:"e08dd2c54d2ed02e037e31c228eba0d0"},{url:"images/icon-128.png",revision:"a786d468f45068cfb5ee13739cccc756"},{url:"images/icon-144.png",revision:"34b7d2fcb373649530b69eefc27a4891"},{url:"images/icon-152.png",revision:"dff2ef082753add3e21aaf5c1ea328e7"},{url:"images/icon-192.png",revision:"9426678bff84bbfc62d29f8c23c66651"},{url:"images/icon-256.png",revision:"766d7b278f54a04f9ef4a8310eb92b94"},{url:"images/icon-512.png",revision:"6304970306a831cb8fa5ea821929cc33"},{url:"index.html",revision:"71515772d102e71b0f06515aad4bc7e5"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"images/icon-128.png",revision:"a786d468f45068cfb5ee13739cccc756"},{url:"images/icon-144.png",revision:"34b7d2fcb373649530b69eefc27a4891"},{url:"images/icon-152.png",revision:"dff2ef082753add3e21aaf5c1ea328e7"},{url:"images/icon-192.png",revision:"9426678bff84bbfc62d29f8c23c66651"},{url:"images/icon-256.png",revision:"766d7b278f54a04f9ef4a8310eb92b94"},{url:"images/icon-512.png",revision:"6304970306a831cb8fa5ea821929cc33"},{url:"manifest.webmanifest",revision:"eb47e6261f344b2bfeb00255b02fb07a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));