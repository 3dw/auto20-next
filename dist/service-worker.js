if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,o)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let r={};const a=i=>n(i,s),f={module:{uri:s},exports:r,require:a};e[s]=Promise.all(c.map((i=>f[i]||a(i)))).then((i=>(o(...i),r)))}}define(["./workbox-dbf1b8dc"],(function(i){"use strict";i.setCacheNameDetails({prefix:"auto20-next"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/Area_Multiplication.riv",revision:"855e9a9a74b9f4947b75cd3c2a05a7de"},{url:"/CNAME",revision:"395c28266c8fbda86f041c43a89a08fd"},{url:"/css/about.1fe05601.css",revision:null},{url:"/css/app.49876289.css",revision:null},{url:"/css/book.6ae1fd32.css",revision:null},{url:"/css/chunk-vendors.d680ee65.css",revision:null},{url:"/css/flag.277533b0.css",revision:null},{url:"/css/groups.a46882ce.css",revision:null},{url:"/css/home.f1e66eee.css",revision:null},{url:"/css/maps.32a6faba.css",revision:null},{url:"/css/notifications.f03a9b5e.css",revision:null},{url:"/css/plois.407cdd2e.css",revision:null},{url:"/css/privacy-policy.6ea6b7a5.css",revision:null},{url:"/css/profile.e168ccb3.css",revision:null},{url:"/css/qr.a4b656e5.css",revision:null},{url:"/face_tracking.riv",revision:"04030ea6eff0f7cd2206855d0b5fc7fd"},{url:"/favicon-1.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/favicon.ico",revision:"219cd115b1b5aa0d6c98fd873e174365"},{url:"/fonts/brand-icons.1a368124.ttf",revision:null},{url:"/fonts/brand-icons.a5c2b578.eot",revision:null},{url:"/fonts/brand-icons.d3632e64.woff2",revision:null},{url:"/fonts/brand-icons.ff793786.woff",revision:null},{url:"/fonts/icons.004393de.woff",revision:null},{url:"/fonts/icons.62a2bfb1.woff2",revision:null},{url:"/fonts/icons.8ec0357f.ttf",revision:null},{url:"/fonts/icons.fa5c061f.eot",revision:null},{url:"/fonts/outline-icons.315b68a4.woff",revision:null},{url:"/fonts/outline-icons.3c7c2806.eot",revision:null},{url:"/fonts/outline-icons.ba204dab.ttf",revision:null},{url:"/fonts/outline-icons.d24ca609.woff2",revision:null},{url:"/img/Cc_by-nd_icon.svg.3bcd59c2.png",revision:null},{url:"/img/android-chrome-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/android-chrome-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/android-chrome-maskable-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/android-chrome-maskable-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/apple-touch-icon-120x120.png",revision:"2043bec0b3cce3cbbf6563e753456260"},{url:"/img/apple-touch-icon-152x152.png",revision:"58c56128a3d451564106d1f7a8244f62"},{url:"/img/apple-touch-icon-180x180.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/apple-touch-icon-60x60.png",revision:"d1102343947caf9ba2b43facdc84fd6f"},{url:"/img/apple-touch-icon-76x76.png",revision:"2620ae7650f79ebd088870ed3937df31"},{url:"/img/apple-touch-icon.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/brand-icons.b0ccb869.svg",revision:null},{url:"/img/favicon-16x16.png",revision:"82b9bcf45cef196d089be247affaffe5"},{url:"/img/favicon-32x32.png",revision:"a6b88d3ebff7a23489e11c74836411d9"},{url:"/img/favicon.ico",revision:"219cd115b1b5aa0d6c98fd873e174365"},{url:"/img/flags.6989ab0a.png",revision:null},{url:"/img/handshake1.c81ff127.webp",revision:null},{url:"/img/icons-original_img/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-original_img/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-original_img/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-original_img/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-original_img/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/icons-original_img/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/icons-original_img/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-original_img/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/icons-original_img/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/icons-original_img/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-original_img/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/icons-original_img/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/icons-original_img/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/icons-original_img/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/icons-original_img/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/icons-original_img/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/img/icons-ver1/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-ver1/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-ver1/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-ver1/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-ver1/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/icons-ver1/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/icons-ver1/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-ver1/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/icons-ver1/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/icons-ver1/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-ver1/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/icons-ver1/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/icons-ver1/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/icons-ver1/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/icons-ver1/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/icons-ver1/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/img/icons.a93cf03c.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/icons/android-chrome-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"2043bec0b3cce3cbbf6563e753456260"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"58c56128a3d451564106d1f7a8244f62"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"d1102343947caf9ba2b43facdc84fd6f"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"2620ae7650f79ebd088870ed3937df31"},{url:"/img/icons/apple-touch-icon.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/icons/favicon-16x16.png",revision:"82b9bcf45cef196d089be247affaffe5"},{url:"/img/icons/favicon-32x32.png",revision:"a6b88d3ebff7a23489e11c74836411d9"},{url:"/img/icons/favicon.ico",revision:"219cd115b1b5aa0d6c98fd873e174365"},{url:"/img/icons/logo-new.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"7155581e87618f47b7eb45b5274dc59d"},{url:"/img/icons/mstile-150x150.png",revision:"3b9356c129c5ecdbc82ad30fc99e98ad"},{url:"/img/logo-new.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/manifest.json",revision:"1e4fb46e5f19b181713167952b460a6d"},{url:"/img/map1.1c12248b.webp",revision:null},{url:"/img/msapplication-icon-144x144.png",revision:"7155581e87618f47b7eb45b5274dc59d"},{url:"/img/mstile-150x150.png",revision:"3b9356c129c5ecdbc82ad30fc99e98ad"},{url:"/img/outline-icons.7af2e9ac.svg",revision:null},{url:"/img/safari-pinned-tab.svg",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/index.html",revision:"abb6b0d1ee8311ff0cd9c326258b4f8e"},{url:"/js/757.47519ede.js",revision:null},{url:"/js/757.47519ede.js.map",revision:"e83eb23321dab110ef497d9e760207cd"},{url:"/js/886.54748357.js",revision:null},{url:"/js/886.54748357.js.map",revision:"8d839bca7d6e5d767521657f99c1e5b7"},{url:"/js/about.e2d6bb35.js",revision:null},{url:"/js/about.e2d6bb35.js.map",revision:"77b808e1ecd6f141ec1533b07c99e064"},{url:"/js/app.fa351b64.js",revision:null},{url:"/js/app.fa351b64.js.map",revision:"ca44796bde5faf72c455521e9545b2e6"},{url:"/js/book.41939560.js",revision:null},{url:"/js/book.41939560.js.map",revision:"6348a77e03ee973ac69c50a20877794e"},{url:"/js/chunk-vendors.d4af2399.js",revision:null},{url:"/js/flag.64fd8f93.js",revision:null},{url:"/js/flag.64fd8f93.js.map",revision:"fb16079cca38ee6c707610fbc599450f"},{url:"/js/groups.f842ecd2.js",revision:null},{url:"/js/groups.f842ecd2.js.map",revision:"2a3b358b061271a09ef83d9d2004bbe7"},{url:"/js/home.0a6f3ceb.js",revision:null},{url:"/js/home.0a6f3ceb.js.map",revision:"bf30a8be39c9e78be9409c2ea424210f"},{url:"/js/maps.583b5481.js",revision:null},{url:"/js/maps.583b5481.js.map",revision:"7a48fcd517d51a2908ca58cb55590199"},{url:"/js/notifications.519e2ecf.js",revision:null},{url:"/js/notifications.519e2ecf.js.map",revision:"6a4c3cf08b7772b5748967a456ca6f02"},{url:"/js/plois.3d0f4371.js",revision:null},{url:"/js/plois.3d0f4371.js.map",revision:"d5fd286faa7da7a2b09f17e895321f7a"},{url:"/js/privacy-policy.70995962.js",revision:null},{url:"/js/privacy-policy.70995962.js.map",revision:"606e5e4cf49100043e7b5e3f16898c00"},{url:"/js/profile.df634539.js",revision:null},{url:"/js/profile.df634539.js.map",revision:"bd75f0daea40f947642a299749580d61"},{url:"/js/qr.ce696e1f.js",revision:null},{url:"/js/qr.ce696e1f.js.map",revision:"eb204e333694807acee582a59c0a1802"},{url:"/logo-new-1.png",revision:"7d10c4f40d7c45aedb73183c824fbdfc"},{url:"/logo-new.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/manifest.json",revision:"812af1d81460251c3f613c6665ebdc48"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/vehicles.riv",revision:"1a1871ed122ad22ccea3ef67f7bcc943"}],{})}));
//# sourceMappingURL=service-worker.js.map
