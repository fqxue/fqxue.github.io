if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const o=e=>s(e,r),a={module:{uri:r},exports:f,require:o};i[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-f8357146"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"AI/index.html",revision:"185fb0383424fa31d895f797a0234a30"},{url:"AI/style.css",revision:"a73012cf9181b55598c196ff433ed2d6"},{url:"assets/index-1fd9a7d1.css",revision:null},{url:"assets/index-f46be73b.js",revision:null},{url:"index.html",revision:"f693fe1198d35a074b603e74660ab8c4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"VITS/index.html",revision:"35ff088c20a03bf7ce04f90e76bdec5a"},{url:"images/icon/48.png",revision:"bdeb2b915105f31570a75f04717d4ec3"},{url:"images/icon/72.png",revision:"92b2f2a7e6502b7f741829fb8f5d9c3a"},{url:"images/icon/96.png",revision:"b9f82b92026c095b1beefe14b5db782a"},{url:"images/icon/128.png",revision:"db59290018756c0b56353921e36b2700"},{url:"images/icon/144.png",revision:"25a39aeb3e2dc916c168aacf4a128bed"},{url:"images/icon/192.png",revision:"083848b8070ddaa1484564bb6f8876f3"},{url:"images/icon/512.png",revision:"61317460c2ca3ddcce7067f766f2daa3"},{url:"manifest.webmanifest",revision:"48677c06989292088ed4415eb2244221"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
