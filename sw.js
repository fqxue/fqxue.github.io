if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),f={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-f8357146"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.77142964.js",revision:null},{url:"assets/index.b409d2a5.css",revision:null},{url:"index.html",revision:"9934970fefd256babd5d1e8a624ce2a5"},{url:"loading/loading.css",revision:"cb89d4d42e09f5011d023e42660305bd"},{url:"loading/loading.min.css",revision:"ad670337926785f74414f7a468a7c090"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"17c6a0507f996eb23d2658d473b52217"},{url:"images/icon/72.png",revision:"a8410212597db15f446e0a8f5236d102"},{url:"images/icon/96.png",revision:"898cc540cef69ccbe9326b6c1fcdf530"},{url:"images/icon/128.png",revision:"4b1f2ff029e8d869e35ae8fd0875551d"},{url:"images/icon/144.png",revision:"d4d28a21ce0f19121bff5756b3b64dbc"},{url:"images/icon/192.png",revision:"4206243ccada859b390a134dc698f45a"},{url:"images/icon/512.png",revision:"a809628d5525719dc42d44428df0b245"},{url:"manifest.webmanifest",revision:"902f8381f1066e5a14b4fc1bfc379bb1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
