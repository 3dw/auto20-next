(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[998],{7549:function(t,e,n){"use strict";n(4114);var r={single_source_shortest_paths:function(t,e,n){var o={},i={};i[e]=0;var a,u,s,c,f,l,h,d,g,p=r.PriorityQueue.make();p.push(e,0);while(!p.empty())for(s in a=p.pop(),u=a.value,c=a.cost,f=t[u]||{},f)f.hasOwnProperty(s)&&(l=f[s],h=c+l,d=i[s],g="undefined"===typeof i[s],(g||d>h)&&(i[s]=h,p.push(s,h),o[s]=u));if("undefined"!==typeof n&&"undefined"===typeof i[n]){var y=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(y)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var o=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,o={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},6180:function(t,e,n){"use strict";n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},8420:function(t,e,n){const r=n(6274),o=n(1954),i=n(7676),a=n(3553);function u(t,e,n,i,a){const u=[].slice.call(arguments,1),s=u.length,c="function"===typeof u[s-1];if(!c&&!r())throw new Error("Callback required as last argument");if(!c){if(s<1)throw new Error("Too few arguments provided");return 1===s?(n=e,e=i=void 0):2!==s||e.getContext||(i=n,n=e,e=void 0),new Promise((function(r,a){try{const a=o.create(n,i);r(t(a,e,i))}catch(u){a(u)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(a=n,n=e,e=i=void 0):3===s&&(e.getContext&&"undefined"===typeof a?(a=i,i=void 0):(a=i,i=n,n=e,e=void 0));try{const r=o.create(n,i);a(null,t(r,e,i))}catch(f){a(f)}}e.create=o.create,e.toCanvas=u.bind(null,i.render),e.toDataURL=u.bind(null,i.renderToDataURL),e.toString=u.bind(null,(function(t,e,n){return a.render(t,n)}))},6274:function(t){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},6099:function(t,e,n){n(4114);const r=n(9547).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let r=1;r<e-1;r++)i[r]=i[r-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)0===e&&0===t||0===e&&t===o-1||e===o-1&&0===t||n.push([r[e],r[t]]);return n}},4772:function(t,e,n){const r=n(7195),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},9188:function(t,e,n){function r(){this.buffer=[],this.length=0}n(4114),r.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},9927:function(t,e,n){function r(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),r.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},r.prototype.get=function(t,e){return this.data[t*this.size+e]},r.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},r.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=r},139:function(t,e,n){n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const r=n(6180),o=n(7195);function i(t){this.mode=o.BYTE,"string"===typeof t&&(t=r(t)),this.data=new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i},2039:function(t,e,n){const r=n(1210),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},1210:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}},1955:function(t,e,n){const r=n(9547).getSymbolSize,o=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-o,0],[0,e-o]]}},2423:function(t,e,n){const r=n(9547),o=1335,i=21522,a=r.getBCHDigit(o);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let u=n<<10;while(r.getBCHDigit(u)-a>=0)u^=o<<r.getBCHDigit(u)-a;return(n<<10|u)^i}},2528:function(t,e,n){n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const r=new Uint8Array(512),o=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)r[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)r[e]=r[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[o[t]+o[e]]}},1910:function(t,e,n){const r=n(7195),o=n(9547);function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},2395:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function r(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,a=null,u=null;for(let s=0;s<e;s++){o=i=0,a=u=null;for(let c=0;c<e;c++){let e=t.get(s,c);e===a?o++:(o>=5&&(r+=n.N1+(o-5)),a=e,o=1),e=t.get(c,s),e===u?i++:(i>=5&&(r+=n.N1+(i-5)),u=e,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n.N2},e.getPenaltyN3=function(t){const e=t.size;let r=0,o=0,i=0;for(let n=0;n<e;n++){o=i=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(n,a),a>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(a,n),a>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];const o=Math.abs(Math.ceil(100*e/r/5)-10);return o*n.N4},e.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let a=0;a<r;a++){n(a),e.applyMask(a,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),r<i&&(i=r,o=a)}return o}},7195:function(t,e,n){const r=n(5847),o=n(3693);function i(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return i(t)}catch(r){return n}}},866:function(t,e,n){const r=n(7195);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},1558:function(t,e,n){n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const r=n(2528);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)n[o+i]^=r.mul(t[o],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=r.mul(e[i],t);let o=0;while(o<n.length&&0===n[o])o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let o=0;o<t;o++)n=e.mul(n,new Uint8Array([1,r.exp(o)]));return n}},1954:function(t,e,n){n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const r=n(9547),o=n(1210),i=n(9188),a=n(9927),u=n(6099),s=n(1955),c=n(2395),f=n(2039),l=n(5987),h=n(1006),d=n(2423),g=n(7195),p=n(7942);function y(t,e){const n=t.size,r=s.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}function w(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function m(t,e){const n=u.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}function A(t,e){const n=t.size,r=h.getEncodedBits(e);let o,i,a;for(let u=0;u<18;u++)o=Math.floor(u/3),i=u%3+n-8-3,a=1===(r>>u&1),t.set(o,i,a,!0),t.set(i,o,a,!0)}function E(t,e,n){const r=t.size,o=d.getEncodedBits(e,n);let i,a;for(i=0;i<15;i++)a=1===(o>>i&1),i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(r-15+i,8,a,!0),i<8?t.set(8,r-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(r-8,8,1,!0)}function v(t,e){const n=t.size;let r=-1,o=n-1,i=7,a=0;for(let u=n-1;u>0;u-=2){6===u&&u--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(o,u-n)){let r=!1;a<e.length&&(r=1===(e[a]>>>i&1)),t.set(o,u-n,r),i--,-1===i&&(a++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}}function C(t,e,n){const o=new i;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)}));const a=r.getSymbolTotalCodewords(t),u=f.getTotalCodewordsCount(t,e),s=8*(a-u);o.getLengthInBits()+4<=s&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);const c=(s-o.getLengthInBits())/8;for(let r=0;r<c;r++)o.put(r%2?17:236,8);return T(o,t,e)}function T(t,e,n){const o=r.getSymbolTotalCodewords(e),i=f.getTotalCodewordsCount(e,n),a=o-i,u=f.getBlocksCount(e,n),s=o%u,c=u-s,h=Math.floor(o/u),d=Math.floor(a/u),g=d+1,p=h-d,y=new l(p);let w=0;const m=new Array(u),A=new Array(u);let E=0;const v=new Uint8Array(t.buffer);for(let r=0;r<u;r++){const t=r<c?d:g;m[r]=v.slice(w,w+t),A[r]=y.encode(m[r]),w+=t,E=Math.max(E,t)}const C=new Uint8Array(o);let T,b,I=0;for(T=0;T<E;T++)for(b=0;b<u;b++)T<m[b].length&&(C[I++]=m[b][T]);for(T=0;T<p;T++)for(b=0;b<u;b++)C[I++]=A[b][T];return C}function b(t,e,n,o){let i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=p.rawSplit(t);r=h.getBestVersionForData(e,n)}i=p.fromString(t,r||40)}}const u=h.getBestVersionForData(i,n);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;const s=C(e,n,i),f=r.getSymbolSize(e),l=new a(f);return y(l,e),w(l),m(l,e),E(l,n,0),e>=7&&A(l,e),v(l,s),isNaN(o)&&(o=c.getBestMask(l,E.bind(null,l,n))),c.applyMask(o,l),E(l,n,o),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,i,a=o.M;return"undefined"!==typeof e&&(a=o.from(e.errorCorrectionLevel,o.M),n=h.from(e.version),i=c.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),b(t,n,a,i)}},5987:function(t,e,n){n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const r=n(1558);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n},t.exports=o},3693:function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const a=new RegExp("^"+o+"$"),u=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return a.test(t)},e.testNumeric=function(t){return u.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},7942:function(t,e,n){n(4114);const r=n(7195),o=n(866),i=n(4772),a=n(139),u=n(1910),s=n(3693),c=n(9547),f=n(7549);function l(t){return unescape(encodeURIComponent(t)).length}function h(t,e,n){const r=[];let o;while(null!==(o=t.exec(n)))r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function d(t){const e=h(s.NUMERIC,r.NUMERIC,t),n=h(s.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,i;c.isKanjiModeEnabled()?(o=h(s.BYTE,r.BYTE,t),i=h(s.KANJI,r.KANJI,t)):(o=h(s.BYTE_KANJI,r.BYTE,t),i=[]);const a=e.concat(n,o,i);return a.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return u.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function p(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function y(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:l(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:l(o.data)}])}}return e}function w(t,e){const n={},o={start:{}};let i=["start"];for(let a=0;a<t.length;a++){const u=t[a],s=[];for(let t=0;t<u.length;t++){const c=u[t],f=""+a+t;s.push(f),n[f]={node:c,lastCount:0},o[f]={};for(let t=0;t<i.length;t++){const a=i[t];n[a]&&n[a].node.mode===c.mode?(o[a][f]=g(n[a].lastCount+c.length,c.mode)-g(n[a].lastCount,c.mode),n[a].lastCount+=c.length):(n[a]&&(n[a].lastCount=c.length),o[a][f]=g(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,e))}}i=s}for(let r=0;r<i.length;r++)o[i[r]].end=0;return{map:o,table:n}}function m(t,e){let n;const s=r.getBestModeForData(t);if(n=r.from(e,s),n!==r.BYTE&&n.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(s));switch(n!==r.KANJI||c.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new u(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(m(e,null)):e.data&&t.push(m(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=d(t,c.isKanjiModeEnabled()),o=y(r),i=w(o,n),a=f.find_path(i.map,"start","end"),u=[];for(let e=1;e<a.length-1;e++)u.push(i.table[a[e]].node);return e.fromArray(p(u))},e.rawSplit=function(t){return e.fromArray(d(t,c.isKanjiModeEnabled()))}},9547:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},5847:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},1006:function(t,e,n){const r=n(9547),o=n(2039),i=n(1210),a=n(7195),u=n(5847),s=7973,c=r.getBCHDigit(s);function f(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}function l(t,e){return a.getCharCountIndicator(t,e)+4}function h(t,e){let n=0;return t.forEach((function(t){const r=l(t.mode,e);n+=r+t.getBitsLength()})),n}function d(t,n){for(let r=1;r<=40;r++){const o=h(t,r);if(o<=e.getCapacity(r,n,a.MIXED))return r}}e.from=function(t,e){return u.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!u.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=a.BYTE);const i=r.getSymbolTotalCodewords(t),s=o.getTotalCodewordsCount(t,e),c=8*(i-s);if(n===a.MIXED)return c;const f=c-l(n,t);switch(n){case a.NUMERIC:return Math.floor(f/10*3);case a.ALPHANUMERIC:return Math.floor(f/11*2);case a.KANJI:return Math.floor(f/13);case a.BYTE:default:return Math.floor(f/8)}},e.getBestVersionForData=function(t,e){let n;const r=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return d(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return f(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!u.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-c>=0)e^=s<<r.getBCHDigit(e)-c;return t<<12|e}},7676:function(t,e,n){const r=n(7027);function o(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let a=n,u=e;"undefined"!==typeof a||e&&e.getContext||(a=e,e=void 0),e||(u=i()),a=r.getOptions(a);const s=r.getImageWidth(t.modules.size,a),c=u.getContext("2d"),f=c.createImageData(s,s);return r.qrToImageData(f.data,t,a),o(c,u,s),c.putImageData(f,0,0),u},e.renderToDataURL=function(t,n,r){let o=r;"undefined"!==typeof o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}},3553:function(t,e,n){const r=n(7027);function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function a(t,e,n){let r="",o=0,a=!1,u=0;for(let s=0;s<t.length;s++){const c=Math.floor(s%e),f=Math.floor(s/e);c||a||(a=!0),t[s]?(u++,s>0&&c>0&&t[s-1]||(r+=a?i("M",c+n,.5+f+n):i("m",o,0),o=0,a=!1),c+1<e&&t[s+1]||(r+=i("h",u),u=0)):o++}return r}e.render=function(t,e,n){const i=r.getOptions(e),u=t.modules.size,s=t.modules.data,c=u+2*i.margin,f=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+o(i.color.dark,"stroke")+' d="'+a(s,u,i.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',d=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+d+h+' shape-rendering="crispEdges">'+f+l+"</svg>\n";return"function"===typeof n&&n(null,g),g}},7027:function(t,e,n){function r(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}n(4114),e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,a=e.getScale(o,r),u=Math.floor((o+2*r.margin)*a),s=r.margin*a,c=[r.color.light,r.color.dark];for(let e=0;e<u;e++)for(let n=0;n<u;n++){let f=4*(e*u+n),l=r.color.light;if(e>=s&&n>=s&&e<u-s&&n<u-s){const t=Math.floor((e-s)/a),r=Math.floor((n-s)/a);l=c[i[t*o+r]?1:0]}t[f++]=l.r,t[f++]=l.g,t[f++]=l.b,t[f]=l.a}}},8547:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=n(6768);const o=t=>((0,r.Qi)("data-v-69ecff59"),t=t(),(0,r.jt)(),t),i={class:"home"},a=o((()=>(0,r.Lk)("h2",null,"展示此QR碼，給您的朋友掃描",-1)));function u(t,e,n,o,u,s){const c=(0,r.g2)("vue-qrcode");return(0,r.uX)(),(0,r.CE)("div",i,[a,(0,r.bF)(c,{value:"https://we.alearn.org.tw/#/flag/"+t.$route.params.uid,color:{dark:"#f39c04",light:"#fff"}},null,8,["value"])])}var s=n(8420),c=n(144),f=Object.defineProperty,l=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,y=(t,e,n)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,w=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&y(t,n,e[n]);if(d)for(var n of d(e))p.call(e,n)&&y(t,n,e[n]);return t},m=(t,e)=>l(t,h(e)),A=(t,e)=>{var n={};for(var r in t)g.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&d)for(var r of d(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const E=["low","medium","quartile","high","L","M","Q","H"],v=[0,1,2,3,4,5,6,7],C=["alphanumeric","numeric","kanji","byte"],T=["image/png","image/jpeg","image/webp"],b=40;var I=(0,r.pM)({props:{version:{type:Number,validator:t=>t===Number.parseInt(String(t),10)&&t>=1&&t<=b},errorCorrectionLevel:{type:String,validator:t=>E.includes(t)},maskPattern:{type:Number,validator:t=>v.includes(t)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:t=>["dark","light"].every((e=>["string","undefined"].includes(typeof t[e]))),required:!0},type:{type:String,validator:t=>T.includes(t),required:!0},quality:{type:Number,validator:t=>t===Number.parseFloat(String(t))&&t>=0&&t<=1,required:!1},value:{type:[String,Array],required:!0,validator(t){return"string"===typeof t||t.every((t=>"string"===typeof t.data&&"mode"in t&&t.mode&&C.includes(t.mode)))}}},setup(t,{attrs:e,emit:n}){const o=(0,c.KR)(),i=()=>{const e=t,{quality:r,value:i}=e,a=A(e,["quality","value"]);s.toDataURL(i,Object.assign(a,null==r||{renderOptions:{quality:r}})).then((t=>{o.value=t,n("change",t)})).catch((t=>n("error",t)))};return(0,r.wB)(t,i,{immediate:!0}),()=>(0,r.h)("img",m(w({},e),{src:o.value}))}}),B=(0,r.pM)({name:"QrView",components:{VueQrcode:I}}),N=n(1241);const M=(0,N.A)(B,[["render",u],["__scopeId","data-v-69ecff59"]]);var P=M},7811:function(t){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4644:function(t,e,n){"use strict";var r,o,i,a=n(7811),u=n(3724),s=n(4475),c=n(4901),f=n(34),l=n(9297),h=n(6955),d=n(6823),g=n(6699),p=n(6840),y=n(2106),w=n(1625),m=n(2787),A=n(2967),E=n(8227),v=n(3392),C=n(1181),T=C.enforce,b=C.get,I=s.Int8Array,B=I&&I.prototype,N=s.Uint8ClampedArray,M=N&&N.prototype,P=I&&m(I),R=B&&m(B),x=Object.prototype,L=s.TypeError,S=E("toStringTag"),U=v("TYPED_ARRAY_TAG"),k="TypedArrayConstructor",F=a&&!!A&&"Opera"!==h(s.opera),O=!1,_={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},Y=function(t){if(!f(t))return!1;var e=h(t);return"DataView"===e||l(_,e)||l(D,e)},j=function(t){var e=m(t);if(f(e)){var n=b(e);return n&&l(n,k)?n[k]:j(e)}},z=function(t){if(!f(t))return!1;var e=h(t);return l(_,e)||l(D,e)},H=function(t){if(z(t))return t;throw new L("Target is not a typed array")},J=function(t){if(c(t)&&(!A||w(P,t)))return t;throw new L(d(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(u){if(n)for(var o in _){var i=s[o];if(i&&l(i.prototype,t))try{delete i.prototype[t]}catch(a){try{i.prototype[t]=e}catch(c){}}}R[t]&&!n||p(R,t,n?e:F&&B[t]||e,r)}},q=function(t,e,n){var r,o;if(u){if(A){if(n)for(r in _)if(o=s[r],o&&l(o,t))try{delete o[t]}catch(i){}if(P[t]&&!n)return;try{return p(P,t,n?e:F&&P[t]||e)}catch(i){}}for(r in _)o=s[r],!o||o[t]&&!n||p(o,t,e)}};for(r in _)o=s[r],i=o&&o.prototype,i?T(i)[k]=o:F=!1;for(r in D)o=s[r],i=o&&o.prototype,i&&(T(i)[k]=o);if((!F||!c(P)||P===Function.prototype)&&(P=function(){throw new L("Incorrect invocation")},F))for(r in _)s[r]&&A(s[r],P);if((!F||!R||R===x)&&(R=P.prototype,F))for(r in _)s[r]&&A(s[r].prototype,R);if(F&&m(M)!==R&&A(M,R),u&&!l(R,S))for(r in O=!0,y(R,S,{configurable:!0,get:function(){return f(this)?this[U]:void 0}}),_)s[r]&&g(s[r],U,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:O&&U,aTypedArray:H,aTypedArrayConstructor:J,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:j,isView:Y,isTypedArray:z,TypedArray:P,TypedArrayPrototype:R}},5370:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e,n){var o=0,i=arguments.length>2?n:r(e),a=new t(i);while(i>o)a[o]=e[o++];return a}},7628:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e){for(var n=r(t),o=new e(n),i=0;i<n;i++)o[i]=t[n-i-1];return o}},9928:function(t,e,n){"use strict";var r=n(6198),o=n(1291),i=RangeError;t.exports=function(t,e,n,a){var u=r(t),s=o(n),c=s<0?u+s:s;if(c>=u||c<0)throw new i("Incorrect index");for(var f=new e(u),l=0;l<u;l++)f[l]=l===c?a:t[l];return f}},2211:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},1108:function(t,e,n){"use strict";var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},2787:function(t,e,n){"use strict";var r=n(9297),o=n(4901),i=n(8981),a=n(6119),u=n(2211),s=a("IE_PROTO"),c=Object,f=c.prototype;t.exports=u?c.getPrototypeOf:function(t){var e=i(t);if(r(e,s))return e[s];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof c?f:null}},5854:function(t,e,n){"use strict";var r=n(2777),o=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new o("Can't convert number to bigint");return BigInt(e)}},7467:function(t,e,n){"use strict";var r=n(7628),o=n(4644),i=o.aTypedArray,a=o.exportTypedArrayMethod,u=o.getTypedArrayConstructor;a("toReversed",(function(){return r(i(this),u(this))}))},4732:function(t,e,n){"use strict";var r=n(4644),o=n(9504),i=n(9306),a=n(5370),u=r.aTypedArray,s=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,f=o(r.TypedArrayPrototype.sort);c("toSorted",(function(t){void 0!==t&&i(t);var e=u(this),n=a(s(e),e);return f(n,t)}))},9577:function(t,e,n){"use strict";var r=n(9928),o=n(4644),i=n(1108),a=n(1291),u=n(5854),s=o.aTypedArray,c=o.getTypedArrayConstructor,f=o.exportTypedArrayMethod,l=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();f("with",{with:function(t,e){var n=s(this),o=a(t),f=i(n)?u(e):+e;return r(n,c(n),o,f)}}["with"],!l)}}]);
//# sourceMappingURL=qr.9744bb99.js.map