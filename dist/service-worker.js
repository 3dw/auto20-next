if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,o)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let r={};const f=i=>n(i,s),l={module:{uri:s},exports:r,require:f};e[s]=Promise.all(c.map((i=>l[i]||f(i)))).then((i=>(o(...i),r)))}}define(["./workbox-dbf1b8dc"],(function(i){"use strict";i.setCacheNameDetails({prefix:"auto20-next"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/CNAME",revision:"395c28266c8fbda86f041c43a89a08fd"},{url:"/css/about.b0bc643f.css",revision:null},{url:"/css/app.9750456b.css",revision:null},{url:"/css/book.e9302bff.css",revision:null},{url:"/css/chunk-vendors.d680ee65.css",revision:null},{url:"/css/feedback.cc669f3c.css",revision:null},{url:"/css/flag.0fae0b15.css",revision:null},{url:"/css/groups.e235740e.css",revision:null},{url:"/css/home.80c420e4.css",revision:null},{url:"/css/maps.7ce1b2f1.css",revision:null},{url:"/css/notifications.f03a9b5e.css",revision:null},{url:"/css/polis.b03cb583.css",revision:null},{url:"/css/privacy-policy.6ea6b7a5.css",revision:null},{url:"/css/profile.a4b6e3ad.css",revision:null},{url:"/css/qr.70ccc734.css",revision:null},{url:"/css/source_github.ce097e32.css",revision:null},{url:"/favicon-1.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/favicon.ico",revision:"219cd115b1b5aa0d6c98fd873e174365"},{url:"/fonts/brand-icons.1a368124.ttf",revision:null},{url:"/fonts/brand-icons.a5c2b578.eot",revision:null},{url:"/fonts/brand-icons.d3632e64.woff2",revision:null},{url:"/fonts/brand-icons.ff793786.woff",revision:null},{url:"/fonts/icons.004393de.woff",revision:null},{url:"/fonts/icons.62a2bfb1.woff2",revision:null},{url:"/fonts/icons.8ec0357f.ttf",revision:null},{url:"/fonts/icons.fa5c061f.eot",revision:null},{url:"/fonts/outline-icons.315b68a4.woff",revision:null},{url:"/fonts/outline-icons.3c7c2806.eot",revision:null},{url:"/fonts/outline-icons.ba204dab.ttf",revision:null},{url:"/fonts/outline-icons.d24ca609.woff2",revision:null},{url:"/img/Cc_by-nd_icon.svg.3bcd59c2.png",revision:null},{url:"/img/android-chrome-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/android-chrome-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/android-chrome-maskable-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/android-chrome-maskable-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/apple-touch-icon-120x120.png",revision:"2043bec0b3cce3cbbf6563e753456260"},{url:"/img/apple-touch-icon-152x152.png",revision:"58c56128a3d451564106d1f7a8244f62"},{url:"/img/apple-touch-icon-180x180.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/apple-touch-icon-60x60.png",revision:"d1102343947caf9ba2b43facdc84fd6f"},{url:"/img/apple-touch-icon-76x76.png",revision:"2620ae7650f79ebd088870ed3937df31"},{url:"/img/apple-touch-icon.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/brand-icons.b0ccb869.svg",revision:null},{url:"/img/favicon-16x16.png",revision:"82b9bcf45cef196d089be247affaffe5"},{url:"/img/favicon-32x32.png",revision:"a6b88d3ebff7a23489e11c74836411d9"},{url:"/img/favicon.ico",revision:"219cd115b1b5aa0d6c98fd873e174365"},{url:"/img/flags.6989ab0a.png",revision:null},{url:"/img/handshake1.c81ff127.webp",revision:null},{url:"/img/icons-original_img/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-original_img/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-original_img/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-original_img/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-original_img/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/icons-original_img/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/icons-original_img/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-original_img/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/icons-original_img/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/icons-original_img/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-original_img/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/icons-original_img/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/icons-original_img/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/icons-original_img/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/icons-original_img/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/icons-original_img/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/img/icons-ver1/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-ver1/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-ver1/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons-ver1/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons-ver1/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/icons-ver1/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/icons-ver1/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-ver1/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/icons-ver1/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/icons-ver1/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons-ver1/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/icons-ver1/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/icons-ver1/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/icons-ver1/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/icons-ver1/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/icons-ver1/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/img/icons.a93cf03c.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/icons/android-chrome-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"27ceae2f2e8ff448f5ae16d8574d7ec3"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"2043bec0b3cce3cbbf6563e753456260"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"58c56128a3d451564106d1f7a8244f62"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"d1102343947caf9ba2b43facdc84fd6f"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"2620ae7650f79ebd088870ed3937df31"},{url:"/img/icons/apple-touch-icon.png",revision:"4a139995a4fb6ea3704a8d93786eaef8"},{url:"/img/icons/favicon-16x16.png",revision:"82b9bcf45cef196d089be247affaffe5"},{url:"/img/icons/favicon-32x32.png",revision:"a6b88d3ebff7a23489e11c74836411d9"},{url:"/img/icons/favicon.ico",revision:"219cd115b1b5aa0d6c98fd873e174365"},{url:"/img/icons/logo-new.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"7155581e87618f47b7eb45b5274dc59d"},{url:"/img/icons/mstile-150x150.png",revision:"3b9356c129c5ecdbc82ad30fc99e98ad"},{url:"/img/logo-new.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/img/manifest.json",revision:"1e4fb46e5f19b181713167952b460a6d"},{url:"/img/map1.1c12248b.webp",revision:null},{url:"/img/msapplication-icon-144x144.png",revision:"7155581e87618f47b7eb45b5274dc59d"},{url:"/img/mstile-150x150.png",revision:"3b9356c129c5ecdbc82ad30fc99e98ad"},{url:"/img/new-yellow.e460f989.png",revision:null},{url:"/img/outline-icons.7af2e9ac.svg",revision:null},{url:"/img/safari-pinned-tab.svg",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/index.html",revision:"da99edc37635804b2166e319f9e6029d"},{url:"/js/886.5a0ec73d.js",revision:null},{url:"/js/886.5a0ec73d.js.map",revision:"d6a2d21431df45130f4f254f4e6a88e7"},{url:"/js/90.4ffa03b4.js",revision:null},{url:"/js/90.4ffa03b4.js.map",revision:"e2e1657f629c105a8c1df920cf56b3be"},{url:"/js/about.e113564e.js",revision:null},{url:"/js/about.e113564e.js.map",revision:"25ea3e088d7acc9cc4810c26e31aea9d"},{url:"/js/app.bf2756fb.js",revision:null},{url:"/js/app.bf2756fb.js.map",revision:"98f25ae2fdedd225e38c1ce4e1fefb86"},{url:"/js/book.b6e63b07.js",revision:null},{url:"/js/book.b6e63b07.js.map",revision:"c0ff21a52204729b1ca75455cb36fef7"},{url:"/js/chunk-vendors.68b1f500.js",revision:null},{url:"/js/feedback.4bf46de5.js",revision:null},{url:"/js/feedback.4bf46de5.js.map",revision:"3055535a2e2d1ca2f56254b14b17b32d"},{url:"/js/flag.93b047c2.js",revision:null},{url:"/js/flag.93b047c2.js.map",revision:"5c53d4c7e021a4dc8519145de078691d"},{url:"/js/groups.ff97c302.js",revision:null},{url:"/js/groups.ff97c302.js.map",revision:"a4fc7776240df98b56d54f36c83f3d14"},{url:"/js/home.a9dfb27e.js",revision:null},{url:"/js/home.a9dfb27e.js.map",revision:"19db8ce19830bd8be9f1c7eb72413723"},{url:"/js/maps.fb3b2b00.js",revision:null},{url:"/js/maps.fb3b2b00.js.map",revision:"dc4005aa8bd53bf201558c735c8d414c"},{url:"/js/notifications.8087ce71.js",revision:null},{url:"/js/notifications.8087ce71.js.map",revision:"f440f42af8a8671dbbbcf183091c8c19"},{url:"/js/polis.1728cf55.js",revision:null},{url:"/js/polis.1728cf55.js.map",revision:"38bb63b63cbef6c8447a95389a3d8b92"},{url:"/js/privacy-policy.70995962.js",revision:null},{url:"/js/privacy-policy.70995962.js.map",revision:"606e5e4cf49100043e7b5e3f16898c00"},{url:"/js/profile.86c7b453.js",revision:null},{url:"/js/profile.86c7b453.js.map",revision:"4dddc6d8b8c092f5630ce935da74ee89"},{url:"/js/qr.e4718892.js",revision:null},{url:"/js/qr.e4718892.js.map",revision:"46afe8f7a6240d6fc06d05681117c647"},{url:"/js/source_github.3633790f.js",revision:null},{url:"/js/source_github.3633790f.js.map",revision:"cd5cc0cc31f1bff6ef95e6c670b54281"},{url:"/logo-new-1.png",revision:"7d10c4f40d7c45aedb73183c824fbdfc"},{url:"/logo-new.png",revision:"f73eb323fb898efef5ffa6b661637843"},{url:"/manifest.json",revision:"812af1d81460251c3f613c6665ebdc48"},{url:"/presentations/自學2.0簡報.iapresenter/info.json",revision:"00d6ac3dde245cd5d5050b1be11cfe9a"},{url:"/presentations/自學2.0簡報.iapresenter/text.md",revision:"304c5e9ac66958f093a247f9ca460b8c"},{url:"/presentations/自學2.0簡報.iapresenter/thumb.png",revision:"b5f5d9146e01cd481ae78c6d4b7b096f"},{url:"/presentations/自學2.0簡報.pptx",revision:"0c45793be2261ce377d58ed92e74368a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
