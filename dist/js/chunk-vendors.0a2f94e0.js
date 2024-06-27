(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[504],{4046:function(e,t,n){"use strict";n.d(t,{$L:function(){return W},$g:function(){return R},A4:function(){return f},Am:function(){return Q},As:function(){return $},Cv:function(){return H},FA:function(){return F},Fy:function(){return S},Hk:function(){return o},I9:function(){return J},Im:function(){return K},K3:function(){return c},KA:function(){return u},Ku:function(){return ce},OE:function(){return ae},T9:function(){return T},Tj:function(){return w},Uj:function(){return h},XA:function(){return I},ZQ:function(){return k},bD:function(){return Y},cY:function(){return C},dI:function(){return oe},eX:function(){return L},g:function(){return M},gR:function(){return q},gz:function(){return ee},hp:function(){return Z},jZ:function(){return N},kH:function(){return G},kj:function(){return se},lT:function(){return P},lV:function(){return A},qc:function(){return B},sr:function(){return O},tD:function(){return te},u:function(){return d},vA:function(){return i},yU:function(){return E},yw:function(){return z},zW:function(){return x}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==h)throw new l;const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&_(n)&&(e[n]=p(e[n],t[n]));return e}function _(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},b=()=>{try{return g()||v()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=e=>{const t=w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},T=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config},I=e=>{var t;return null===(t=b())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function N(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function O(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function P(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function L(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="FirebaseError";class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?U(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new M(r,s,n);return a}}function U(e,t){return e.replace(j,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return JSON.parse(e)}function $(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=W(d(o[0])||""),n=W(d(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},H=function(e){const t=V(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},B=function(e){const t=V(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function K(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function G(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Y(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(X(n)&&X(o)){if(!Y(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function X(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function J(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function te(e,t){const n=new ne(e,t);return n.subscribe.bind(n)}class ne{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=re(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ie),void 0===r.error&&(r.error=ie),void 0===r.complete&&(r.complete=ie);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function re(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function ie(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ae=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){"use strict";n.d(t,{C4:function(){return v},EW:function(){return Ne},Gc:function(){return me},IG:function(){return Ie},IJ:function(){return xe},KR:function(){return Re},Kh:function(){return _e},Pr:function(){return Ue},R1:function(){return Me},X2:function(){return u},bl:function(){return y},fE:function(){return we},g8:function(){return ye},hZ:function(){return A},i9:function(){return Pe},ju:function(){return Ee},o5:function(){return l},u4:function(){return O},uY:function(){return a},ux:function(){return Te},yC:function(){return s}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let i,o;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new s(e)}function c(e,t=i){t&&t.active&&t.effects.push(e)}function l(){return i}class u{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,v();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(h(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),y()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_,t=o;try{return _=!0,o=this,this._runnings++,d(this),this.fn()}finally{f(this),this._runnings--,o=t,_=e}}stop(){this.active&&(d(this),f(this),this.onStop&&this.onStop(),this.active=!1)}}function h(e){return e.value}function d(e){e._trackId++,e._depsLength=0}function f(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)p(e.deps[t],e);e.deps.length=e._depsLength}}function p(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let _=!0,m=0;const g=[];function v(){g.push(_),_=!1}function y(){const e=g.pop();_=void 0===e||e}function b(){m++}function w(){m--;while(!m&&T.length)T.shift()()}function E(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&p(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const T=[];function I(e,t,n){b();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&T.push(r.scheduler)))}w()}const C=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},S=new WeakMap,k=Symbol(""),N=Symbol("");function O(e,t,n){if(_&&o){let t=S.get(e);t||S.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=C((()=>t.delete(n)))),E(o,r,void 0)}}function A(e,t,n,i,o,s){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(k)),(0,r.CE)(e)&&c.push(a.get(N)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(k)),(0,r.CE)(e)&&c.push(a.get(N)));break;case"set":(0,r.CE)(e)&&c.push(a.get(k));break}b();for(const r of c)r&&I(r,4,void 0);w()}const P=(0,r.pD)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),x=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Te(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Te)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){v(),b();const n=Te(this)[t].apply(this,e);return w(),y(),n}})),e}function D(e){(0,r.Bm)(e)||(e=String(e));const t=Te(this);return O(t,"has",e),t.hasOwnProperty(e)}class M{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return o;if("__v_raw"===t)return n===(i?o?de:he:o?ue:le).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!i){if(s&&(0,r.$3)(x,t))return Reflect.get(x,t,n);if("hasOwnProperty"===t)return D}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?R.has(t):P(t))?a:(i||O(e,"get",t),o?a:Pe(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ge(a):_e(a):a)}}class F extends M{constructor(e=!1){super(!1,e)}set(e,t,n,i){let o=e[t];if(!this._isShallow){const t=be(o);if(we(n)||be(n)||(o=Te(o),n=Te(n)),!(0,r.cy)(e)&&Pe(o)&&!Pe(n))return!t&&(o.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Te(i)&&(s?(0,r.$H)(n,o)&&A(e,"set",t,n,o):A(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&A(e,"delete",t,void 0,i),o}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&R.has(t)||O(e,"has",t),n}ownKeys(e){return O(e,"iterate",(0,r.cy)(e)?"length":k),Reflect.ownKeys(e)}}class U extends M{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const j=new F,W=new U,$=new F(!0),V=e=>e,H=e=>Reflect.getPrototypeOf(e);function B(e,t,n=!1,i=!1){e=e["__v_raw"];const o=Te(e),s=Te(t);n||((0,r.$H)(t,s)&&O(o,"get",t),O(o,"get",s));const{has:a}=H(o),c=i?V:n?Se:Ce;return a.call(o,t)?c(e.get(t)):a.call(o,s)?c(e.get(s)):void(e!==o&&e.get(t))}function q(e,t=!1){const n=this["__v_raw"],i=Te(n),o=Te(e);return t||((0,r.$H)(e,o)&&O(i,"has",e),O(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function z(e,t=!1){return e=e["__v_raw"],!t&&O(Te(e),"iterate",k),Reflect.get(e,"size",e)}function K(e){e=Te(e);const t=Te(this),n=H(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function G(e,t){t=Te(t);const n=Te(this),{has:i,get:o}=H(n);let s=i.call(n,e);s||(e=Te(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.$H)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function Y(e){const t=Te(this),{has:n,get:r}=H(t);let i=n.call(t,e);i||(e=Te(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&A(t,"delete",e,void 0,o),s}function X(){const e=Te(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function Q(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Te(o),a=t?V:e?Se:Ce;return!e&&O(s,"iterate",k),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function J(e,t,n){return function(...i){const o=this["__v_raw"],s=Te(o),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),h=n?V:t?Se:Ce;return!t&&O(s,"iterate",l?N:k),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function Z(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ee(){const e={get(e){return B(this,e)},get size(){return z(this)},has:q,add:K,set:G,delete:Y,clear:X,forEach:Q(!1,!1)},t={get(e){return B(this,e,!1,!0)},get size(){return z(this)},has:q,add:K,set:G,delete:Y,clear:X,forEach:Q(!1,!0)},n={get(e){return B(this,e,!0)},get size(){return z(this,!0)},has(e){return q.call(this,e,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:Q(!0,!1)},r={get(e){return B(this,e,!0,!0)},get size(){return z(this,!0)},has(e){return q.call(this,e,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:Q(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=J(i,!1,!1),n[i]=J(i,!0,!1),t[i]=J(i,!1,!0),r[i]=J(i,!0,!0)})),[e,n,t,r]}const[te,ne,re,ie]=ee();function oe(e,t){const n=t?e?ie:re:e?ne:te;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,o)}const se={get:oe(!1,!1)},ae={get:oe(!1,!0)},ce={get:oe(!0,!1)};const le=new WeakMap,ue=new WeakMap,he=new WeakMap,de=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,r.Zf)(e))}function _e(e){return be(e)?e:ve(e,!1,j,se,le)}function me(e){return ve(e,!1,$,ae,ue)}function ge(e){return ve(e,!0,W,ce,he)}function ve(e,t,n,i,o){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=pe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function ye(e){return be(e)?ye(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return!!e&&!!e["__v_raw"]}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function Ie(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ce=e=>(0,r.Gv)(e)?_e(e):e,Se=e=>(0,r.Gv)(e)?ge(e):e;class ke{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>Ae(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Te(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Ae(e,4),Oe(e),e.effect._dirtyLevel>=2&&Ae(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ne(e,t,n=!1){let i,o;const s=(0,r.Tn)(e);s?(i=e,o=r.tE):(i=e.get,o=e.set);const a=new ke(i,o,s||!o,n);return a}function Oe(e){var t;_&&o&&(e=Te(e),E(o,null!=(t=e.dep)?t:e.dep=C((()=>e.dep=void 0),e instanceof ke?e:void 0),void 0))}function Ae(e,t=4,n){e=Te(e);const r=e.dep;r&&I(r,t,void 0)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function Re(e){return Le(e,!1)}function xe(e){return Le(e,!0)}function Le(e,t){return Pe(e)?e:new De(e,t)}class De{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Te(e),this._value=t?e:Ce(e)}get value(){return Oe(this),this._value}set value(e){const t=this.__v_isShallow||we(e)||be(e);e=t?e:Te(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ce(e),Ae(this,4,e))}}function Me(e){return Pe(e)?e.value:e}const Fe={get:(e,t,n)=>Me(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return ye(e)?e:new Proxy(e,Fe)}},6768:function(e,t,n){"use strict";n.d(t,{$u:function(){return Fe},CE:function(){return sn},Df:function(){return we},E3:function(){return mn},EW:function(){return zn},EY:function(){return Yt},FK:function(){return Gt},Gt:function(){return _t},Gy:function(){return he},K9:function(){return jt},KC:function(){return Le},Lk:function(){return dn},MZ:function(){return be},OW:function(){return ge},Q3:function(){return vn},QP:function(){return fe},Qi:function(){return D},WQ:function(){return mt},Wv:function(){return an},bF:function(){return fn},bo:function(){return ae},dY:function(){return v},eW:function(){return gn},g2:function(){return z},gN:function(){return G},h:function(){return Kn},hi:function(){return je},jt:function(){return M},k6:function(){return F},nI:function(){return Nn},pI:function(){return Be},pM:function(){return Ee},pR:function(){return _e},qL:function(){return s},sV:function(){return De},uX:function(){return en},wB:function(){return ne}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),i=n(4232);function o(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function s(e,t,n,r){if((0,i.Tn)(e)){const s=o(e,t,n,r);return s&&(0,i.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,i.cy)(e)){const i=[];for(let o=0;o<e.length;o++)i.push(s(e[o],t,n,r));return i}}function a(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;i=i.parent}const c=t.appContext.config.errorHandler;if(c)return(0,r.C4)(),o(c,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,s,i)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,_=0;const m=Promise.resolve();let g=null;function v(e){const t=g||m;return e?t.then(this?e.bind(this):e):t}function y(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],o=S(i);o<e||o===e&&i.pre?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(y(e.id),0,e),w())}function w(){l||u||(u=!0,g=m.then(N))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?_+1:_)||f.push(e),w()}function I(e,t,n=(l?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function C(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>S(e)-S(t)));if(f.length=0,p)return void p.push(...e);for(p=e,_=0;_<p.length;_++)p[_]();p=null,_=0}}const S=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function N(e){u=!1,l=!0,h.sort(k);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,C(e),l=!1,g=null,(h.length||f.length)&&N(e)}}function O(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.MZ;s&&(o=n.map((e=>(0,i.Kg)(e)?e.trim():e))),t&&(o=n.map(i.bB))}let l;let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&s(u,e,6,o);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(h,e,6,o)}}function A(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=A(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((e=>a[e]=null)):(0,i.X$)(a,s),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function P(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}let R=null,x=null;function L(e){const t=R;return R=e,x=e&&e.type.__scopeId||null,t}function D(e){x=e}function M(){x=null}function F(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&rn(-1);const i=L(t);let o;try{o=e(...n)}finally{L(i),r._d&&rn(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:_,ctx:m,inheritAttrs:g}=e,v=L(e);let y,b;try{if(4&n.shapeFlag){const e=o||r,t=e;y=yn(h.call(t,e,d,f,_,p,m)),b=l}else{const e=t;0,y=yn(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),b=t.props?l:j(l)}}catch(E){Jt.length=0,a(E,e,1),y=fn(Xt)}let w=y;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(s&&e.some(i.CP)&&(b=W(b,s)),w=mn(w,b,!1,!0))}return n.dirs&&(w=mn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,L(v),y}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},W=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||V(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?V(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!P(l,n))return!0}}return!1}function V(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!P(n,o))return!0}return!1}function H({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const B="components",q="directives";function z(e,t){return Y(B,e,!0,t)||e}const K=Symbol.for("v-ndc");function G(e){return Y(q,e)}function Y(e,t,n=!0,r=!1){const o=R||kn;if(o){const n=o.type;if(e===B){const e=Bn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const s=X(o[e]||n[e],t)||X(o.appContext[e],t);return!s&&r?n:s}}function X(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const Q=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):T(e)}const Z=Symbol.for("v-scx"),ee=()=>{{const e=mt(Z);return e}};const te={};function ne(e,t,n){return re(e,t,n)}function re(e,t,{immediate:n,deep:a,flush:c,once:l,onTrack:u,onTrigger:h}=i.MZ){if(t&&l){const e=t;t=(...t)=>{e(...t),S()}}const d=kn,f=e=>!0===a?e:se(e,!1===a?1:void 0);let p,_,m=!1,g=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,i.cy)(e)?(g=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,i.Tn)(e)?o(e,d,2):void 0))):p=(0,i.Tn)(e)?t?()=>o(e,d,2):()=>(_&&_(),s(e,d,3,[y])):i.tE,t&&a){const e=p;p=()=>se(e())}let v,y=e=>{_=I.onStop=()=>{o(e,d,4),_=I.onStop=void 0}};if(Mn){if(y=i.tE,t?n&&s(t,d,3,[p(),g?[]:void 0,y]):p(),"sync"!==c)return i.tE;{const e=ee();v=e.__watcherHandles||(e.__watcherHandles=[])}}let w=g?new Array(e.length).fill(te):te;const E=()=>{if(I.active&&I.dirty)if(t){const e=I.run();(a||m||(g?e.some(((e,t)=>(0,i.$H)(e,w[t]))):(0,i.$H)(e,w)))&&(_&&_(),s(t,d,3,[e,w===te?void 0:g&&w[0]===te?[]:w,y]),w=e)}else I.run()};let T;E.allowRecurse=!!t,"sync"===c?T=E:"post"===c?T=()=>Ut(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),T=()=>b(E));const I=new r.X2(p,i.tE,T),C=(0,r.o5)(),S=()=>{I.stop(),C&&(0,i.TF)(C.effects,I)};return t?n?E():w=I.run():"post"===c?Ut(I.run.bind(I),d&&d.suspense):I.run(),v&&v.push(S),S}function ie(e,t,n){const r=this.proxy,o=(0,i.Kg)(e)?e.includes(".")?oe(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.Tn)(t)?s=t:(s=t.handler,n=t);const a=Pn(this),c=re(o,s.bind(r),n);return a(),c}function oe(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function se(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))se(e.value,t,n);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)se(e[r],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{se(e,t,n)}));else if((0,i.Qd)(e))for(const r in e)se(e[r],t,n);return e}function ae(e,t){if(null===R)return e;const n=Hn(R)||R.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,s,a,c=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&se(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:a,modifiers:c}))}return e}function ce(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),s(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const le=Symbol("_leaveCb"),ue=Symbol("_enterCb");function he(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De((()=>{e.isMounted=!0})),Ue((()=>{e.isUnmounting=!0})),e}const de=[Function,Array],fe={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},pe={name:"BaseTransition",props:fe,setup(e,{slots:t}){const n=Nn(),i=he();return()=>{const o=t.default&&we(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Xt){0,s=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return ve(s);const l=ye(s);if(!l)return ve(s);const u=ge(l,a,i,n);be(l,u);const h=n.subTree,d=h&&ye(h);if(d&&d.type!==Xt&&!ln(l,d)){const e=ge(d,a,i,n);if(be(d,e),"out-in"===c&&l.type!==Xt)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},ve(s);"in-out"===c&&l.type!==Xt&&(e.delayLeave=(e,t,n)=>{const r=me(i,d);r[String(d.key)]=d,e[le]=()=>{t(),e[le]=void 0,delete u.delayedLeave},u.delayedLeave=n})}return s}}},_e=pe;function me(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ge(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,w=String(e.key),E=me(n,e),T=(e,t)=>{e&&s(e,r,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:a,persisted:c,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=g||l}t[le]&&t[le](!0);const i=E[w];i&&ln(e,i)&&i.el[le]&&i.el[le](),T(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!o)return;t=v||u,r=y||h,i=b||d}let s=!1;const a=e[ue]=t=>{s||(s=!0,T(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e[ue]=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[ue]&&t[ue](!0),n.isUnmounting)return r();T(f,[t]);let o=!1;const s=t[le]=n=>{o||(o=!0,r(),T(n?m:_,[t]),t[le]=void 0,E[i]===e&&delete E[i])};E[i]=e,p?I(p,[t,s]):s()},clone(e){return ge(e,t,n,r)}};return C}function ve(e){if(Ie(e))return e=mn(e),e.children=null,e}function ye(e){if(!Ie(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,i.Tn)(n.default))return n.default()}}function be(e,t){6&e.shapeFlag&&e.component?be(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function we(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Gt?(128&s.patchFlag&&i++,r=r.concat(we(s.children,t,a))):(t||s.type!==Xt)&&r.push(null!=a?mn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Ee(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const Te=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ie=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ce(e,t){return(0,i.cy)(e)?e.some((e=>Ce(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function Se(e,t){Ne(e,"a",t)}function ke(e,t){Ne(e,"da",t)}function Ne(e,t,n=kn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Re(t,r,n),n){let e=n.parent;while(e&&e.parent)Ie(e.parent.vnode)&&Oe(r,t,n,e),e=e.parent}}function Oe(e,t,n,r){const o=Re(t,e,r,!0);je((()=>{(0,i.TF)(r[t],o)}),n)}function Ae(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Pe(e){return 128&e.shapeFlag?e.ssContent:e}function Re(e,t,n=kn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const o=Pn(n),a=s(t,n,e,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const xe=e=>(t,n=kn)=>(!Mn||"sp"===e)&&Re(e,((...e)=>t(...e)),n),Le=xe("bm"),De=xe("m"),Me=xe("bu"),Fe=xe("u"),Ue=xe("bum"),je=xe("um"),We=xe("sp"),$e=xe("rtg"),Ve=xe("rtc");function He(e,t=kn){Re("ec",e,t)}function Be(e,t,n,r){let o;const s=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const qe=e=>e?xn(e)?Hn(e)||e.proxy:qe(e.parent):null,ze=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qe(e.parent),$root:e=>qe(e.root),$emit:e=>e.emit,$options:e=>tt(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,b(e.update)}),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>ie.bind(e)}),Ke=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Ge={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Ke(o,t))return c[t]=1,o[t];if(s!==i.MZ&&(0,i.$3)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Xe&&(c[t]=0)}}const d=ze[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Ke(o,t)?(o[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Ke(t,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(ze,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ye(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Xe=!0;function Qe(e){const t=tt(e),n=e.proxy,o=e.ctx;Xe=!1,t.beforeCreate&&Ze(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:_,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:I,renderTriggered:C,errorCaptured:S,serverPrefetch:k,expose:N,inheritAttrs:O,components:A,directives:P,filters:R}=t,x=null;if(h&&Je(h,o,x),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Xe=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=zn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)et(l[r],o,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{_t(t,e[t])}))}function L(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ze(d,e,"c"),L(Le,f),L(De,p),L(Me,_),L(Fe,m),L(Se,g),L(ke,v),L(He,S),L(Ve,I),L($e,C),L(Ue,b),L(je,E),L(We,k),(0,i.cy)(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=O&&(e.inheritAttrs=O),A&&(e.components=A),P&&(e.directives=P)}function Je(e,t,n=i.tE){(0,i.cy)(e)&&(e=st(e));for(const o in e){const n=e[o];let s;s=(0,i.Gv)(n)?"default"in n?mt(n.from||o,n.default,!0):mt(n.from||o):mt(n),(0,r.i9)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Ze(e,t,n){s((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function et(e,t,n,r){const o=r.includes(".")?oe(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&ne(o,n)}else if((0,i.Tn)(e))ne(o,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>et(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&ne(o,r,e)}else 0}function tt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:o.length||n||r?(l={},o.length&&o.forEach((e=>nt(l,e,a,!0))),nt(l,t,a)):l=t,(0,i.Gv)(t)&&s.set(t,l),l}function nt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&nt(e,o,n,!0),i&&i.forEach((t=>nt(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=rt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const rt={data:it,props:lt,emits:lt,methods:ct,computed:ct,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:ct,directives:ct,watch:ut,provide:it,inject:ot};function it(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function ot(e,t){return ct(st(e),st(t))}function st(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function at(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function lt(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ye(e),Ye(null!=t?t:{})):t}function ut(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=at(e[r],t[r]);return n}function ht(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dt=0;function ft(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=ht(),s=new WeakSet;let a=!1;const c=o.app={_uid:dt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Gn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.Tn)(e.install)?(s.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,l){if(!a){0;const u=fn(n,r);return u.appContext=o,!0===l?l="svg":!1===l&&(l=void 0),s&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Hn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c},runWithContext(e){const t=pt;pt=c;try{return e()}finally{pt=t}}};return c}}let pt=null;function _t(e,t){if(kn){let n=kn.provides;const r=kn.parent&&kn.parent.provides;r===n&&(n=kn.provides=Object.create(r)),n[e]=t}else 0}function mt(e,t,n=!1){const r=kn||R;if(r||pt){const o=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const gt={},vt=()=>Object.create(gt),yt=e=>Object.getPrototypeOf(e)===gt;function bt(e,t,n,i=!1){const o={},s=vt();e.propsDefaults=Object.create(null),Et(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function wt(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(s),[u]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;Et(e,t,s,a)&&(h=!0);for(const o in l)t&&((0,i.$3)(t,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Tt(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(P(e.emitsOptions,o))continue;const c=t[o];if(u)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i.PT)(o);s[t]=Tt(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function Et(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:P(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Tt(s,t,c,o[c],e,!(0,i.$3)(o,c))}}return l}function Tt(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=Pn(o);r=i[n]=e.call(null,t),s()}}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function It(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=It(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const e=(0,i.PT)(s[h]);Ct(e)&&(a[e]=i.MZ)}else if(s){0;for(const e in s){const t=(0,i.PT)(e);if(Ct(t)){const n=s[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=Nt(Boolean,r.type),n=Nt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function Ct(e){return"$"!==e[0]&&!(0,i.SU)(e)}function St(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function kt(e,t){return St(e)===St(t)}function Nt(e,t){return(0,i.cy)(t)?t.findIndex((t=>kt(t,e))):(0,i.Tn)(t)&&kt(t,e)?0:-1}const Ot=e=>"_"===e[0]||"$stable"===e,At=e=>(0,i.cy)(e)?e.map(yn):[yn(e)],Pt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>At(t(...e))),n);return r._c=!1,r},Rt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Ot(o))continue;const n=e[o];if((0,i.Tn)(n))t[o]=Pt(o,n,r);else if(null!=n){0;const e=At(n);t[o]=()=>e}}},xt=(e,t)=>{const n=At(t);e.slots.default=()=>n},Lt=(e,t)=>{const n=e.slots=vt();if(32&e.vnode.shapeFlag){const e=t._;e?((0,i.X$)(n,t),(0,i.yQ)(n,"_",e,!0)):Rt(t,n)}else t&&xt(e,t)},Dt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.X$)(o,t),n||1!==e||delete o._):(s=!t.$stable,Rt(t,o)),a=t}else t&&(xt(e,t),a={default:1});if(s)for(const i in o)Ot(i)||null!=a[i]||delete o[i]};function Mt(e,t,n,s,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>Mt(e,t&&((0,i.cy)(t)?t[r]:t),n,s,a)));if(Te(s)&&!a)return;const c=4&s.shapeFlag?Hn(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))o(h,u,12,[l,f]);else{const t=(0,i.Kg)(h),o=(0,r.i9)(h);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.$3)(p,h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,i.$3)(p,h)&&(p[h]=l)):o&&(h.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,Ut(r,n)):r()}else 0}}function Ft(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ut=J;function jt(e){return Wt(e)}function Wt(e,t){Ft();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:_=i.tE,insertStaticContent:m}=e,g=(e,t,n,r=null,i=null,o=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ln(e,t)&&(r=J(e),K(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Yt:v(e,t,n,r);break;case Xt:y(e,t,n,r);break;case Qt:null==e&&w(t,n,r,s);break;case Gt:L(e,t,n,r,i,o,s,a,c);break;default:1&h?k(e,t,n,r,i,o,s,a,c):6&h?D(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,a,c,te)}null!=u&&i&&Mt(u,e&&e.ref,o,t||e,!t)},v=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},k=(e,t,n,r,i,o,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?N(t,n,r,i,o,s,a,c):P(e,t,i,o,s,a,c)},N=(e,t,n,r,s,l,u,h)=>{let f,p;const{props:_,shapeFlag:m,transition:g,dirs:v}=e;if(f=e.el=c(e.type,l,_&&_.is,_),8&m?d(f,e.children):16&m&&A(e.children,f,null,r,s,$t(e,l),u,h),v&&ce(e,null,r,"created"),O(f,e,e.scopeId,u,r),_){for(const t in _)"value"===t||(0,i.SU)(t)||a(f,t,null,_[t],l,e.children,r,s,Q);"value"in _&&a(f,"value",null,_.value,l),(p=_.onVnodeBeforeMount)&&Tn(p,r,e)}v&&ce(e,null,r,"beforeMount");const y=Ht(s,g);y&&g.beforeEnter(f),o(f,t,n),((p=_&&_.onVnodeMounted)||y||v)&&Ut((()=>{p&&Tn(p,r,e),y&&g.enter(f),v&&ce(e,null,r,"mounted")}),s)},O=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let o=0;o<r.length;o++)_(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?bn(e[l]):yn(e[l]);g(null,c,t,n,r,i,o,s,a)}},P=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.MZ,_=t.props||i.MZ;let m;if(n&&Vt(n,!1),(m=_.onVnodeBeforeUpdate)&&Tn(m,n,t,e),f&&ce(t,e,n,"beforeUpdate"),n&&Vt(n,!0),h?R(e.dynamicChildren,h,l,n,r,$t(t,o),s):c||V(e,t,l,null,n,r,$t(t,o),s,!1),u>0){if(16&u)x(l,t,p,_,n,r,o);else if(2&u&&p.class!==_.class&&a(l,"class",null,_.class,o),4&u&&a(l,"style",p.style,_.style,o),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],u=_[s];u===c&&"value"!==s||a(l,s,c,u,o,e.children,n,r,Q)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||x(l,t,p,_,n,r,o);((m=_.onVnodeUpdated)||f)&&Ut((()=>{m&&Tn(m,n,t,e),f&&ce(t,e,n,"updated")}),r)},R=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Gt||!ln(c,l)||70&c.shapeFlag)?f(c.el):n;g(c,l,u,null,r,i,o,s,!0)}},x=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.MZ)for(const l in n)(0,i.SU)(l)||l in r||a(e,l,n[l],null,c,t.children,o,s,Q);for(const l in r){if((0,i.SU)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,o,s,Q)}"value"in r&&a(e,"value",n.value,r.value,c)}},L=(e,t,n,r,i,s,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(o(h,n,r),o(d,n,r),A(t.children||[],n,d,i,s,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Bt(e,t,!0)):V(e,t,n,d,i,s,a,c,u)},D=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):M(t,n,r,i,o,s,c):F(e,t,c)},M=(e,t,n,r,i,o,s)=>{const a=e.component=Sn(e,r,i);if(Ie(e)&&(a.ctx.renderer=te),Fn(a),a.asyncDep){if(i&&i.registerDep(a,j),!e.el){const e=a.subTree=fn(Xt);y(null,e,t,n)}}else j(a,e,t,n,i,o,s)},F=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,E(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:o,vnode:u}=e;{const n=zt(e);if(n)return t&&(t.el=u.el,W(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,Vt(e,!1),t?(t.el=u.el,W(e,t,c)):t=u,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&Tn(h,o,t,u),Vt(e,!0);const p=U(e);0;const _=e.subTree;e.subTree=p,g(_,p,f(_.el),J(_),e,s,a),t.el=p.el,null===d&&H(e,p.el),r&&Ut(r,s),(h=t.props&&t.props.onVnodeUpdated)&&Ut((()=>Tn(h,o,t,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=Te(t);if(Vt(e,!1),u&&(0,i.DY)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&Tn(r,d,t),Vt(e,!0),c&&re){const n=()=>{e.subTree=U(e),re(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,g(null,r,n,o,e,s,a),t.el=r.el}if(h&&Ut(h,s),!f&&(r=l&&l.onVnodeMounted)){const e=t;Ut((()=>Tn(r,d,e)),s)}(256&t.shapeFlag||d&&Te(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ut(e.a,s),e.isMounted=!0,t=n=o=null}},u=e.effect=new r.X2(l,i.tE,(()=>b(h)),e.scope),h=e.update=()=>{u.dirty&&u.run()};h.id=e.uid,Vt(e,!0),h()},W=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,wt(e,t.props,i,n),Dt(e,t.children,n),(0,r.C4)(),I(e),(0,r.bl)()},V=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void q(l,h,n,r,i,o,s,a,c);if(256&f)return void B(l,h,n,r,i,o,s,a,c)}8&p?(16&u&&Q(l,i,o),h!==l&&d(n,h)):16&u?16&p?q(l,h,n,r,i,o,s,a,c):Q(l,i,o,!0):(8&u&&d(n,""),16&p&&A(h,n,r,i,o,s,a,c))},B=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?bn(t[f]):yn(t[f]);g(e[f],r,n,null,o,s,a,c,l)}u>h?Q(e,o,s,!0,!1,d):A(t,n,r,o,s,a,c,l,d)},q=(e,t,n,r,o,s,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?bn(t[u]):yn(t[u]);if(!ln(r,i))break;g(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?bn(t[f]):yn(t[f]);if(!ln(r,i))break;g(r,i,n,null,o,s,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)g(null,t[u]=l?bn(t[u]):yn(t[u]),n,i,o,s,a,c,l),u++}}else if(u>f)while(u<=d)K(e[u],o,s,!0),u++;else{const p=u,_=u,m=new Map;for(u=_;u<=f;u++){const e=t[u]=l?bn(t[u]):yn(t[u]);null!=e.key&&m.set(e.key,u)}let v,y=0;const b=f-_+1;let w=!1,E=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=b){K(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=_;v<=f;v++)if(0===T[v-_]&&ln(r,t[v])){i=v;break}void 0===i?K(r,o,s,!0):(T[i-_]=u+1,i>=E?E=i:w=!0,g(r,t[i],n,null,o,s,a,c,l),y++)}const I=w?qt(T):i.Oj;for(v=I.length-1,u=b-1;u>=0;u--){const e=_+u,i=t[e],d=e+1<h?t[e+1].el:r;0===T[u]?g(null,i,n,d,o,s,a,c,l):w&&(v<0||u!==I[v]?z(i,n,d,2):v--)}}},z=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===Gt){o(s,t,n);for(let e=0;e<l.length;e++)z(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===Qt)return void T(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),Ut((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Mt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!Te(e);let _;if(p&&(_=s&&s.onVnodeBeforeUnmount)&&Tn(_,t,e),6&u)X(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&ce(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(o!==Gt||h>0&&64&h)?Q(l,t,n,!1,!0):(o===Gt&&384&h||!i&&16&u)&&Q(c,t,n),r&&G(e)}(p&&(_=s&&s.onVnodeUnmounted)||f)&&Ut((()=>{_&&Tn(_,t,e),f&&ce(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Gt)return void Y(n,r);if(t===Qt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},X=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.DY)(r),o.stop(),s&&(s.active=!1,K(a,e,t,n)),c&&Ut(c,t),Ut((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)K(e[s],t,n,r,i)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),Z||(Z=!0,I(),C(),Z=!1),t._vnode=e},te={p:g,um:K,m:z,r:G,mt:M,mc:A,pc:V,pbc:R,n:J,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:ft(ee,ne)}}function $t({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ht(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Bt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=bn(o[i]),t.el=e.el),n||Bt(e,t)),t.type===Yt&&(t.el=e.el)}}function qt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}function zt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zt(t)}const Kt=e=>e.__isTeleport;const Gt=Symbol.for("v-fgt"),Yt=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Qt=Symbol.for("v-stc"),Jt=[];let Zt=null;function en(e=!1){Jt.push(Zt=e?null:[])}function tn(){Jt.pop(),Zt=Jt[Jt.length-1]||null}let nn=1;function rn(e){nn+=e}function on(e){return e.dynamicChildren=nn>0?Zt||i.Oj:null,tn(),nn>0&&Zt&&Zt.push(e),e}function sn(e,t,n,r,i,o){return on(dn(e,t,n,r,i,o,!0))}function an(e,t,n,r,i){return on(fn(e,t,n,r,i,!0))}function cn(e){return!!e&&!0===e.__v_isVNode}function ln(e,t){return e.type===t.type&&e.key===t.key}const un=({key:e})=>null!=e?e:null,hn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:R,r:e,k:t,f:!!n}:e:null);function dn(e,t=null,n=null,r=0,o=null,s=(e===Gt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&un(t),ref:t&&hn(t),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:R};return c?(wn(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),nn>0&&!a&&Zt&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Zt.push(l),l}const fn=pn;function pn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==K||(e=Xt),cn(e)){const r=mn(e,t,!0);return n&&wn(r,n),nn>0&&!a&&Zt&&(6&r.shapeFlag?Zt[Zt.indexOf(e)]=r:Zt.push(r)),r.patchFlag|=-2,r}if(qn(e)&&(e=e.__vccOpts),t){t=_n(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Q(e)?128:Kt(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return dn(e,t,n,o,s,c,a,!0)}function _n(e){return e?(0,r.ju)(e)||yt(e)?(0,i.X$)({},e):e:null}function mn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:l}=e,u=t?En(o||{},t):o,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&un(u),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(hn(t)):[s,hn(t)]:hn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Gt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mn(e.ssContent),ssFallback:e.ssFallback&&mn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(h.transition=l.clone(h)),h}function gn(e=" ",t=0){return fn(Yt,null,e,t)}function vn(e="",t=!1){return t?(en(),an(Xt,null,e)):fn(Xt,null,e)}function yn(e){return null==e||"boolean"===typeof e?fn(Xt):(0,i.cy)(e)?fn(Gt,null,e.slice()):"object"===typeof e?bn(e):fn(Yt,null,String(e))}function bn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:mn(e)}function wn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),wn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||yt(t)?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.Tn)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[gn(t)]):n=8);e.children=t,e.shapeFlag|=n}function En(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function Tn(e,t,n,r=null){s(e,t,7,[n,r])}const In=ht();let Cn=0;function Sn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||In,a={uid:Cn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:It(o,s),emitsOptions:A(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=O.bind(null,a),e.ce&&e.ce(a),a}let kn=null;const Nn=()=>kn||R;let On,An;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};On=t("__VUE_INSTANCE_SETTERS__",(e=>kn=e)),An=t("__VUE_SSR_SETTERS__",(e=>Mn=e))}const Pn=e=>{const t=kn;return On(e),e.scope.on(),()=>{e.scope.off(),On(t)}},Rn=()=>{kn&&kn.scope.off(),On(null)};function xn(e){return 4&e.vnode.shapeFlag}let Ln,Dn,Mn=!1;function Fn(e,t=!1){t&&An(t);const{props:n,children:r}=e.vnode,i=xn(e);bt(e,n,i,t),Lt(e,r);const o=i?Un(e,t):void 0;return t&&An(!1),o}function Un(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ge);const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Vn(e):null,c=Pn(e);(0,r.C4)();const l=o(s,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(l)){if(l.then(Rn,Rn),t)return l.then((n=>{jn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else jn(e,l,t)}else Wn(e,t)}function jn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Wn(e,n)}function Wn(e,t,n){const o=e.type;if(!e.render){if(!t&&Ln&&!o.render){const t=o.template||tt(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=Ln(t,c)}}e.render=o.render||i.tE,Dn&&Dn(e)}{const t=Pn(e);(0,r.C4)();try{Qe(e)}finally{(0,r.bl)(),t()}}}const $n={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Vn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,$n),slots:e.slots,emit:e.emit,expose:t}}function Hn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ze?ze[n](e):void 0},has(e,t){return t in e||t in ze}}))}function Bn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function qn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const zn=(e,t)=>{const n=(0,r.EW)(e,t,Mn);return n};function Kn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?cn(t)?fn(e,null,[t]):fn(e,t):fn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&cn(n)&&(n=[n]),fn(e,t,n))}const Gn="3.4.26"},5130:function(e,t,n){"use strict";n.d(t,{D$:function(){return Ae},Ef:function(){return Le},Jo:function(){return be},XL:function(){return Te},aG:function(){return L},lH:function(){return we},u1:function(){return Ie}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(4232),o=n(144);
/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,l=c&&c.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(s,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{l.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=l.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,y(e),t);p.displayName="Transition";const _={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,_),g=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function y(e){const t={};for(const i in e)i in _||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=b(o),y=m&&m[0],w=m&&m[1],{onBeforeEnter:C,onEnter:k,onEnterCancelled:N,onLeave:O,onLeaveCancelled:P,onBeforeAppear:R=C,onAppear:x=k,onAppearCancelled:L=N}=t,D=(e,t,n)=>{T(e,t?h:c),T(e,t?u:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,T(e,d),T(e,p),T(e,f),t&&t()},F=e=>(t,n)=>{const i=e?x:k,o=()=>D(t,e,n);g(i,[t,o]),I((()=>{T(t,e?l:s),E(t,e?h:c),v(i)||S(t,r,y,o)}))};return(0,i.X$)(t,{onBeforeEnter(e){g(C,[e]),E(e,s),E(e,a)},onBeforeAppear(e){g(R,[e]),E(e,l),E(e,u)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);E(e,d),E(e,f),A(),I((()=>{e._isLeaving&&(T(e,d),E(e,p),v(O)||S(e,r,w,n))})),g(O,[e,n])},onEnterCancelled(e){D(e,!1),g(N,[e])},onAppearCancelled(e){D(e,!0),g(L,[e])},onLeaveCancelled(e){M(e),g(P,[e])}})}function b(e){if(null==e)return null;if((0,i.Gv)(e))return[w(e.enter),w(e.leave)];{const t=w(e);return[t,t]}}function w(e){const t=(0,i.Ro)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function I(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let C=0;function S(e,t,n,r){const i=e._endId=++C,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=k(e,t);if(!s)return r();const l=s+"end";let u=0;const h=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),o=r(`${h}Duration`),s=N(i,o),a=r(`${d}Delay`),c=r(`${d}Duration`),l=N(a,c);let u=null,f=0,p=0;t===h?s>0&&(u=h,f=s,p=o.length):t===d?l>0&&(u=d,f=l,p=c.length):(f=Math.max(s,l),u=f>0?s>l?h:d:null,p=u?u===h?o.length:c.length:0);const _=u===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:_}}function N(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>O(t)+O(e[n]))))}function O(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function A(){return document.body.offsetHeight}function P(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const R=Symbol("_vod"),x=Symbol("_vsh"),L={beforeMount(e,{value:t},{transition:n}){e[R]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):D(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),D(e,!0),r.enter(e)):r.leave(e,(()=>{D(e,!1)})):D(e,t))},beforeUnmount(e,{value:t}){D(e,t)}};function D(e,t){e.style.display=t?e[R]:"none",e[x]=!t}const M=Symbol("");const F=/(^|;)\s*display\s*:/;function U(e,t,n){const r=e.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&W(r,t,"")}else for(const e in t)null==n[e]&&W(r,e,"");for(const e in n)"display"===e&&(s=!0),W(r,e,n[e])}else if(o){if(t!==n){const e=r[M];e&&(n+=";"+e),r.cssText=n,s=F.test(n)}}else t&&e.removeAttribute("style");R in e&&(e[R]=s?r.display:"",e[x]&&(r.display="none"))}const j=/\s*!important$/;function W(e,t,n){if((0,i.cy)(n))n.forEach((n=>W(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=H(e,t);j.test(n)?e.setProperty((0,i.Tg)(r),n.replace(j,""),"important"):e[r]=n}}const $=["Webkit","Moz","ms"],V={};function H(e,t){const n=V[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return V[t]=r;r=(0,i.ZH)(r);for(let i=0;i<$.length;i++){const n=$[i]+r;if(n in e)return V[t]=n}return t}const B="http://www.w3.org/1999/xlink";function q(e,t,n,r,o){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(B,t.slice(6,t.length)):e.setAttributeNS(B,t,n);else{const r=(0,i.J$)(t);null==n||r&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function z(e,t,n,r,o,s,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,o,s),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?e.getAttribute("value")||"":e.value,i=null==n?"":n;return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function K(e,t,n,r){e.addEventListener(t,n,r)}function G(e,t,n,r){e.removeEventListener(t,n,r)}const Y=Symbol("_vei");function X(e,t,n,r,i=null){const o=e[Y]||(e[Y]={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=J(t);if(r){const s=o[t]=ne(r,i);K(e,n,s,a)}else s&&(G(e,n,s,a),o[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function J(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let Z=0;const ee=Promise.resolve(),te=()=>Z||(ee.then((()=>Z=0)),Z=Date.now());function ne(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(re(e,n.value),t,5,[e])};return n.value=e,n.attached=te(),n}function re(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ie=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oe=(e,t,n,r,o,s,a,c,l)=>{const u="svg"===o;"class"===t?P(e,r,u):"style"===t?U(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||X(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):se(e,t,r,u))?z(e,t,r,s,a,c,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),q(e,t,r,u))};function se(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ie(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ie(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ae=new WeakMap,ce=new WeakMap,le=Symbol("_moveCb"),ue=Symbol("_enterCb"),he={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let s,a;return(0,r.$u)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!_e(s[0].el,n.vnode.el,t))return;s.forEach(de),s.forEach(fe);const r=s.filter(pe);A(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[le]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[le]=null,T(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.ux)(e),l=y(c);let u=c.tag||r.FK;if(s=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(s.push(t),(0,r.MZ)(t,(0,r.OW)(t,l,i,n)),ae.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,l,i,n))}return(0,r.bF)(u,null,a)}}};he.props;function de(e){const t=e.el;t[le]&&t[le](),t[ue]&&t[ue]()}function fe(e){ce.set(e,e.el.getBoundingClientRect())}function pe(e){const t=ae.get(e),n=ce.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function _e(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=k(r);return o.removeChild(r),s}const me=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ge(e){e.target.composing=!0}function ve(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ye=Symbol("_assign"),be={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[ye]=me(o);const s=r||o.props&&"number"===o.props.type;K(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),e[ye](r)})),n&&K(e,"change",(()=>{e.value=e.value.trim()})),t||(K(e,"compositionstart",ge),K(e,"compositionend",ve),K(e,"change",ve))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e[ye]=me(s),e.composing)return;const a=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}},we={deep:!0,created(e,t,n){e[ye]=me(n),K(e,"change",(()=>{const t=e._modelValue,n=Se(e),r=e.checked,o=e[ye];if((0,i.cy)(t)){const e=(0,i.u3)(t,n),s=-1!==e;if(r&&!s)o(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),o(n)}}else if((0,i.vM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),o(e)}else o(ke(e,r))}))},mounted:Ee,beforeUpdate(e,t,n){e[ye]=me(n),Ee(e,t,n)}};function Ee(e,{value:t,oldValue:n},r){e._modelValue=t,(0,i.cy)(t)?e.checked=(0,i.u3)(t,r.props.value)>-1:(0,i.vM)(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=(0,i.BX)(t,ke(e,!0)))}const Te={created(e,{value:t},n){e.checked=(0,i.BX)(t,n.props.value),e[ye]=me(n),K(e,"change",(()=>{e[ye](Se(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e[ye]=me(r),t!==n&&(e.checked=(0,i.BX)(t,r.props.value))}},Ie={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=(0,i.vM)(t);K(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(Se(e)):Se(e)));e[ye](e.multiple?s?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[ye]=me(o)},mounted(e,{value:t,modifiers:{number:n}}){Ce(e,t)},beforeUpdate(e,t,n){e[ye]=me(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Ce(e,t)}};function Ce(e,t,n){const r=e.multiple,o=(0,i.cy)(t);if(!r||o||(0,i.vM)(t)){for(let n=0,s=e.options.length;n<s;n++){const s=e.options[n],a=Se(s);if(r)if(o){const e=typeof a;s.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,i.u3)(t,a)>-1}else s.selected=t.has(a);else if((0,i.BX)(Se(s),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}r||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Se(e){return"_value"in e?e._value:e.value}function ke(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ne=["ctrl","shift","alt","meta"],Oe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ne.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ae=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Oe[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Pe=(0,i.X$)({patchProp:oe},u);let Re;function xe(){return Re||(Re=(0,r.K9)(Pe))}const Le=(...e)=>{const t=xe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Me(e);if(!r)return;const o=t._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,De(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function De(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Me(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){"use strict";n.d(t,{$3:function(){return f},$H:function(){return F},BH:function(){return q},BX:function(){return ne},Bm:function(){return w},C4:function(){return Q},CE:function(){return _},CP:function(){return l},DY:function(){return U},Gv:function(){return E},J$:function(){return Z},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return R},Qd:function(){return k},Ro:function(){return $},SU:function(){return O},TF:function(){return h},Tg:function(){return L},Tn:function(){return y},Tr:function(){return z},We:function(){return H},X$:function(){return u},Y2:function(){return ee},ZH:function(){return D},Zf:function(){return S},bB:function(){return W},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return M},tE:function(){return s},u3:function(){return re},vM:function(){return m},v_:function(){return ie},yI:function(){return N},yL:function(){return T},yQ:function(){return j}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},o=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,_=e=>"[object Map]"===C(e),m=e=>"[object Set]"===C(e),g=e=>"[object Date]"===C(e),v=e=>"[object RegExp]"===C(e),y=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||y(e))&&y(e.then)&&y(e.catch),I=Object.prototype.toString,C=e=>I.call(e),S=e=>C(e).slice(8,-1),k=e=>"[object Object]"===C(e),N=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},P=/-(\w)/g,R=A((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),x=/\B([A-Z])/g,L=A((e=>e.replace(x,"-$1").toLowerCase())),D=A((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=A((e=>{const t=e?`on${D(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let V;const H=()=>V||(V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const B="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",q=r(B);function z(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?X(r):z(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||E(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Y,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Q(e){let t="";if(b(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Q(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>b(e)?e:null==e?"":p(e)||E(e)&&(e.toString===I||!y(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):_(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[se(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>se(e)))}:w(t)?se(t):!E(t)||p(t)||k(t)?t:String(t),se=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},9420:function(e,t,n){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(9989),s={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},a=function(){function e(t){i(this,e),this.ua="",this.ua=t}return r(e,[{key:"browser",get:function(){var e=this;return o(s,(function(t){return t.test(e.ua)}))||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var e=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],t=new RegExp("("+e.join("|")+")","ig");return Boolean(this.ua.match(t))}}]),e}();e.exports=a},1567:function(e,t,n){var r=n(9531),i=n(8606),o=r(i,"DataView");e.exports=o},4762:function(e,t,n){var r=n(4473),i=n(1297),o=n(5576),s=n(3388),a=n(1916);function c(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype["delete"]=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},6202:function(e,t,n){var r=n(9065),i=n(8513),o=n(9496),s=n(9804),a=n(6316);function c(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype["delete"]=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},7546:function(e,t,n){var r=n(9531),i=n(8606),o=r(i,"Map");e.exports=o},3066:function(e,t,n){var r=n(6281),i=n(2353),o=n(984),s=n(9276),a=n(3612);function c(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype["delete"]=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},7525:function(e,t,n){var r=n(9531),i=n(8606),o=r(i,"Promise");e.exports=o},2288:function(e,t,n){var r=n(9531),i=n(8606),o=r(i,"Set");e.exports=o},1676:function(e,t,n){n(4114);var r=n(3066),i=n(6421),o=n(2550);function s(e){var t=-1,n=null==e?0:e.length;this.__data__=new r;while(++t<n)this.add(e[t])}s.prototype.add=s.prototype.push=i,s.prototype.has=o,e.exports=s},1068:function(e,t,n){var r=n(6202),i=n(6039),o=n(6323),s=n(2626),a=n(5926),c=n(5102);function l(e){var t=this.__data__=new r(e);this.size=t.size}l.prototype.clear=i,l.prototype["delete"]=o,l.prototype.get=s,l.prototype.has=a,l.prototype.set=c,e.exports=l},7874:function(e,t,n){var r=n(8606),i=r.Symbol;e.exports=i},3559:function(e,t,n){var r=n(8606),i=r.Uint8Array;e.exports=i},7382:function(e,t,n){var r=n(9531),i=n(8606),o=r(i,"WeakMap");e.exports=o},4391:function(e){function t(e,t){var n=-1,r=null==e?0:e.length,i=0,o=[];while(++n<r){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}e.exports=t},3238:function(e,t,n){n(4114);var r=n(7305),i=n(5219),o=n(5366),s=n(317),a=n(7744),c=n(9562),l=Object.prototype,u=l.hasOwnProperty;function h(e,t){var n=o(e),l=!n&&i(e),h=!n&&!l&&s(e),d=!n&&!l&&!h&&c(e),f=n||l||h||d,p=f?r(e.length,String):[],_=p.length;for(var m in e)!t&&!u.call(e,m)||f&&("length"==m||h&&("offset"==m||"parent"==m)||d&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||a(m,_))||p.push(m);return p}e.exports=h},3575:function(e){function t(e,t){var n=-1,r=null==e?0:e.length,i=Array(r);while(++n<r)i[n]=t(e[n],n,e);return i}e.exports=t},2297:function(e){function t(e,t){var n=-1,r=t.length,i=e.length;while(++n<r)e[i+n]=t[n];return e}e.exports=t},1281:function(e){function t(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(t(e[n],n,e))return!0;return!1}e.exports=t},9386:function(e,t,n){var r=n(6061);function i(e,t){var n=e.length;while(n--)if(r(e[n][0],t))return n;return-1}e.exports=i},4221:function(e){function t(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}e.exports=t},100:function(e,t,n){var r=n(9476),i=r();e.exports=i},9106:function(e,t,n){var r=n(100),i=n(8987);function o(e,t){return e&&r(e,t,i)}e.exports=o},2387:function(e,t,n){var r=n(1990),i=n(9416);function o(e,t){t=r(t,e);var n=0,o=t.length;while(null!=e&&n<o)e=e[i(t[n++])];return n&&n==o?e:void 0}e.exports=o},1268:function(e,t,n){var r=n(2297),i=n(5366);function o(e,t,n){var o=t(e);return i(e)?o:r(o,n(e))}e.exports=o},9315:function(e,t,n){var r=n(7874),i=n(38),o=n(5677),s="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;function l(e){return null==e?void 0===e?a:s:c&&c in Object(e)?i(e):o(e)}e.exports=l},4804:function(e){function t(e,t){return null!=e&&t in Object(e)}e.exports=t},8843:function(e,t,n){var r=n(9315),i=n(5091),o="[object Arguments]";function s(e){return i(e)&&r(e)==o}e.exports=s},9231:function(e,t,n){var r=n(6817),i=n(5091);function o(e,t,n,s,a){return e===t||(null==e||null==t||!i(e)&&!i(t)?e!==e&&t!==t:r(e,t,n,s,o,a))}e.exports=o},6817:function(e,t,n){var r=n(1068),i=n(8478),o=n(797),s=n(3534),a=n(710),c=n(5366),l=n(317),u=n(9562),h=1,d="[object Arguments]",f="[object Array]",p="[object Object]",_=Object.prototype,m=_.hasOwnProperty;function g(e,t,n,_,g,v){var y=c(e),b=c(t),w=y?f:a(e),E=b?f:a(t);w=w==d?p:w,E=E==d?p:E;var T=w==p,I=E==p,C=w==E;if(C&&l(e)){if(!l(t))return!1;y=!0,T=!1}if(C&&!T)return v||(v=new r),y||u(e)?i(e,t,n,_,g,v):o(e,t,w,n,_,g,v);if(!(n&h)){var S=T&&m.call(e,"__wrapped__"),k=I&&m.call(t,"__wrapped__");if(S||k){var N=S?e.value():e,O=k?t.value():t;return v||(v=new r),g(N,O,n,_,v)}}return!!C&&(v||(v=new r),s(e,t,n,_,g,v))}e.exports=g},9226:function(e,t,n){var r=n(1068),i=n(9231),o=1,s=2;function a(e,t,n,a){var c=n.length,l=c,u=!a;if(null==e)return!l;e=Object(e);while(c--){var h=n[c];if(u&&h[2]?h[1]!==e[h[0]]:!(h[0]in e))return!1}while(++c<l){h=n[c];var d=h[0],f=e[d],p=h[1];if(u&&h[2]){if(void 0===f&&!(d in e))return!1}else{var _=new r;if(a)var m=a(f,p,d,e,t,_);if(!(void 0===m?i(p,f,o|s,a,_):m))return!1}}return!0}e.exports=a},1976:function(e,t,n){var r=n(4823),i=n(3223),o=n(9692),s=n(2530),a=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,h=l.toString,d=u.hasOwnProperty,f=RegExp("^"+h.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(e){if(!o(e)||i(e))return!1;var t=r(e)?f:c;return t.test(s(e))}e.exports=p},658:function(e,t,n){var r=n(9315),i=n(9851),o=n(5091),s="[object Arguments]",a="[object Array]",c="[object Boolean]",l="[object Date]",u="[object Error]",h="[object Function]",d="[object Map]",f="[object Number]",p="[object Object]",_="[object RegExp]",m="[object Set]",g="[object String]",v="[object WeakMap]",y="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",E="[object Float64Array]",T="[object Int8Array]",I="[object Int16Array]",C="[object Int32Array]",S="[object Uint8Array]",k="[object Uint8ClampedArray]",N="[object Uint16Array]",O="[object Uint32Array]",A={};function P(e){return o(e)&&i(e.length)&&!!A[r(e)]}A[w]=A[E]=A[T]=A[I]=A[C]=A[S]=A[k]=A[N]=A[O]=!0,A[s]=A[a]=A[y]=A[c]=A[b]=A[l]=A[u]=A[h]=A[d]=A[f]=A[p]=A[_]=A[m]=A[g]=A[v]=!1,e.exports=P},5686:function(e,t,n){var r=n(7422),i=n(4727),o=n(6517),s=n(5366),a=n(7746);function c(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?s(e)?i(e[0],e[1]):r(e):a(e)}e.exports=c},8659:function(e,t,n){n(4114);var r=n(9426),i=n(6409),o=Object.prototype,s=o.hasOwnProperty;function a(e){if(!r(e))return i(e);var t=[];for(var n in Object(e))s.call(e,n)&&"constructor"!=n&&t.push(n);return t}e.exports=a},7422:function(e,t,n){var r=n(9226),i=n(6719),o=n(2976);function s(e){var t=i(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}e.exports=s},4727:function(e,t,n){var r=n(9231),i=n(2715),o=n(588),s=n(4915),a=n(4355),c=n(2976),l=n(9416),u=1,h=2;function d(e,t){return s(e)&&a(t)?c(l(e),t):function(n){var s=i(n,e);return void 0===s&&s===t?o(n,e):r(t,s,u|h)}}e.exports=d},5114:function(e){function t(e){return function(t){return null==t?void 0:t[e]}}e.exports=t},8864:function(e,t,n){var r=n(2387);function i(e){return function(t){return r(t,e)}}e.exports=i},7305:function(e){function t(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}e.exports=t},4643:function(e,t,n){var r=n(7874),i=n(3575),o=n(5366),s=n(9299),a=1/0,c=r?r.prototype:void 0,l=c?c.toString:void 0;function u(e){if("string"==typeof e)return e;if(o(e))return i(e,u)+"";if(s(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-a?"-0":t}e.exports=u},4276:function(e){function t(e){return function(t){return e(t)}}e.exports=t},4032:function(e){function t(e,t){return e.has(t)}e.exports=t},1990:function(e,t,n){var r=n(5366),i=n(4915),o=n(8845),s=n(3355);function a(e,t){return r(e)?e:i(e,t)?[e]:o(s(e))}e.exports=a},3886:function(e,t,n){var r=n(8606),i=r["__core-js_shared__"];e.exports=i},9476:function(e){function t(e){return function(t,n,r){var i=-1,o=Object(t),s=r(t),a=s.length;while(a--){var c=s[e?a:++i];if(!1===n(o[c],c,o))break}return t}}e.exports=t},8478:function(e,t,n){n(4114);var r=n(1676),i=n(1281),o=n(4032),s=1,a=2;function c(e,t,n,c,l,u){var h=n&s,d=e.length,f=t.length;if(d!=f&&!(h&&f>d))return!1;var p=u.get(e),_=u.get(t);if(p&&_)return p==t&&_==e;var m=-1,g=!0,v=n&a?new r:void 0;u.set(e,t),u.set(t,e);while(++m<d){var y=e[m],b=t[m];if(c)var w=h?c(b,y,m,t,e,u):c(y,b,m,e,t,u);if(void 0!==w){if(w)continue;g=!1;break}if(v){if(!i(t,(function(e,t){if(!o(v,t)&&(y===e||l(y,e,n,c,u)))return v.push(t)}))){g=!1;break}}else if(y!==b&&!l(y,b,n,c,u)){g=!1;break}}return u["delete"](e),u["delete"](t),g}e.exports=c},797:function(e,t,n){var r=n(7874),i=n(3559),o=n(6061),s=n(8478),a=n(7830),c=n(1764),l=1,u=2,h="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Map]",_="[object Number]",m="[object RegExp]",g="[object Set]",v="[object String]",y="[object Symbol]",b="[object ArrayBuffer]",w="[object DataView]",E=r?r.prototype:void 0,T=E?E.valueOf:void 0;function I(e,t,n,r,E,I,C){switch(n){case w:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case b:return!(e.byteLength!=t.byteLength||!I(new i(e),new i(t)));case h:case d:case _:return o(+e,+t);case f:return e.name==t.name&&e.message==t.message;case m:case v:return e==t+"";case p:var S=a;case g:var k=r&l;if(S||(S=c),e.size!=t.size&&!k)return!1;var N=C.get(e);if(N)return N==t;r|=u,C.set(e,t);var O=s(S(e),S(t),r,E,I,C);return C["delete"](e),O;case y:if(T)return T.call(e)==T.call(t)}return!1}e.exports=I},3534:function(e,t,n){var r=n(2329),i=1,o=Object.prototype,s=o.hasOwnProperty;function a(e,t,n,o,a,c){var l=n&i,u=r(e),h=u.length,d=r(t),f=d.length;if(h!=f&&!l)return!1;var p=h;while(p--){var _=u[p];if(!(l?_ in t:s.call(t,_)))return!1}var m=c.get(e),g=c.get(t);if(m&&g)return m==t&&g==e;var v=!0;c.set(e,t),c.set(t,e);var y=l;while(++p<h){_=u[p];var b=e[_],w=t[_];if(o)var E=l?o(w,b,_,t,e,c):o(b,w,_,e,t,c);if(!(void 0===E?b===w||a(b,w,n,o,c):E)){v=!1;break}y||(y="constructor"==_)}if(v&&!y){var T=e.constructor,I=t.constructor;T==I||!("constructor"in e)||!("constructor"in t)||"function"==typeof T&&T instanceof T&&"function"==typeof I&&I instanceof I||(v=!1)}return c["delete"](e),c["delete"](t),v}e.exports=a},6903:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},2329:function(e,t,n){var r=n(1268),i=n(9915),o=n(8987);function s(e){return r(e,o,i)}e.exports=s},6636:function(e,t,n){var r=n(3883);function i(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}e.exports=i},6719:function(e,t,n){var r=n(4355),i=n(8987);function o(e){var t=i(e),n=t.length;while(n--){var o=t[n],s=e[o];t[n]=[o,s,r(s)]}return t}e.exports=o},9531:function(e,t,n){var r=n(1976),i=n(8619);function o(e,t){var n=i(e,t);return r(n)?n:void 0}e.exports=o},38:function(e,t,n){var r=n(7874),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=r?r.toStringTag:void 0;function c(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(c){}var i=s.call(e);return r&&(t?e[a]=n:delete e[a]),i}e.exports=c},9915:function(e,t,n){var r=n(4391),i=n(7770),o=Object.prototype,s=o.propertyIsEnumerable,a=Object.getOwnPropertySymbols,c=a?function(e){return null==e?[]:(e=Object(e),r(a(e),(function(t){return s.call(e,t)})))}:i;e.exports=c},710:function(e,t,n){n(6573),n(8100),n(7936);var r=n(1567),i=n(7546),o=n(7525),s=n(2288),a=n(7382),c=n(9315),l=n(2530),u="[object Map]",h="[object Object]",d="[object Promise]",f="[object Set]",p="[object WeakMap]",_="[object DataView]",m=l(r),g=l(i),v=l(o),y=l(s),b=l(a),w=c;(r&&w(new r(new ArrayBuffer(1)))!=_||i&&w(new i)!=u||o&&w(o.resolve())!=d||s&&w(new s)!=f||a&&w(new a)!=p)&&(w=function(e){var t=c(e),n=t==h?e.constructor:void 0,r=n?l(n):"";if(r)switch(r){case m:return _;case g:return u;case v:return d;case y:return f;case b:return p}return t}),e.exports=w},8619:function(e){function t(e,t){return null==e?void 0:e[t]}e.exports=t},4011:function(e,t,n){var r=n(1990),i=n(5219),o=n(5366),s=n(7744),a=n(9851),c=n(9416);function l(e,t,n){t=r(t,e);var l=-1,u=t.length,h=!1;while(++l<u){var d=c(t[l]);if(!(h=null!=e&&n(e,d)))break;e=e[d]}return h||++l!=u?h:(u=null==e?0:e.length,!!u&&a(u)&&s(d,u)&&(o(e)||i(e)))}e.exports=l},4473:function(e,t,n){var r=n(6849);function i(){this.__data__=r?r(null):{},this.size=0}e.exports=i},1297:function(e){function t(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=t},5576:function(e,t,n){var r=n(6849),i="__lodash_hash_undefined__",o=Object.prototype,s=o.hasOwnProperty;function a(e){var t=this.__data__;if(r){var n=t[e];return n===i?void 0:n}return s.call(t,e)?t[e]:void 0}e.exports=a},3388:function(e,t,n){var r=n(6849),i=Object.prototype,o=i.hasOwnProperty;function s(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}e.exports=s},1916:function(e,t,n){var r=n(6849),i="__lodash_hash_undefined__";function o(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?i:t,this}e.exports=o},7744:function(e){var t=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function r(e,r){var i=typeof e;return r=null==r?t:r,!!r&&("number"==i||"symbol"!=i&&n.test(e))&&e>-1&&e%1==0&&e<r}e.exports=r},4915:function(e,t,n){var r=n(5366),i=n(9299),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;function a(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(s.test(e)||!o.test(e)||null!=t&&e in Object(t))}e.exports=a},3883:function(e){function t(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=t},3223:function(e,t,n){var r=n(3886),i=function(){var e=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function o(e){return!!i&&i in e}e.exports=o},9426:function(e){var t=Object.prototype;function n(e){var n=e&&e.constructor,r="function"==typeof n&&n.prototype||t;return e===r}e.exports=n},4355:function(e,t,n){var r=n(9692);function i(e){return e===e&&!r(e)}e.exports=i},9065:function(e){function t(){this.__data__=[],this.size=0}e.exports=t},8513:function(e,t,n){var r=n(9386),i=Array.prototype,o=i.splice;function s(e){var t=this.__data__,n=r(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():o.call(t,n,1),--this.size,!0}e.exports=s},9496:function(e,t,n){var r=n(9386);function i(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}e.exports=i},9804:function(e,t,n){var r=n(9386);function i(e){return r(this.__data__,e)>-1}e.exports=i},6316:function(e,t,n){n(4114);var r=n(9386);function i(e,t){var n=this.__data__,i=r(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}e.exports=i},6281:function(e,t,n){var r=n(4762),i=n(6202),o=n(7546);function s(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}e.exports=s},2353:function(e,t,n){var r=n(6636);function i(e){var t=r(this,e)["delete"](e);return this.size-=t?1:0,t}e.exports=i},984:function(e,t,n){var r=n(6636);function i(e){return r(this,e).get(e)}e.exports=i},9276:function(e,t,n){var r=n(6636);function i(e){return r(this,e).has(e)}e.exports=i},3612:function(e,t,n){var r=n(6636);function i(e,t){var n=r(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}e.exports=i},7830:function(e){function t(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}e.exports=t},2976:function(e){function t(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}e.exports=t},3381:function(e,t,n){var r=n(1235),i=500;function o(e){var t=r(e,(function(e){return n.size===i&&n.clear(),e})),n=t.cache;return t}e.exports=o},6849:function(e,t,n){var r=n(9531),i=r(Object,"create");e.exports=i},6409:function(e,t,n){var r=n(8230),i=r(Object.keys,Object);e.exports=i},770:function(e,t,n){e=n.nmd(e);var r=n(6903),i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i,a=s&&r.process,c=function(){try{var e=o&&o.require&&o.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=c},5677:function(e){var t=Object.prototype,n=t.toString;function r(e){return n.call(e)}e.exports=r},8230:function(e){function t(e,t){return function(n){return e(t(n))}}e.exports=t},8606:function(e,t,n){var r=n(6903),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},6421:function(e){var t="__lodash_hash_undefined__";function n(e){return this.__data__.set(e,t),this}e.exports=n},2550:function(e){function t(e){return this.__data__.has(e)}e.exports=t},1764:function(e){function t(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}e.exports=t},6039:function(e,t,n){var r=n(6202);function i(){this.__data__=new r,this.size=0}e.exports=i},6323:function(e){function t(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n}e.exports=t},2626:function(e){function t(e){return this.__data__.get(e)}e.exports=t},5926:function(e){function t(e){return this.__data__.has(e)}e.exports=t},5102:function(e,t,n){n(4114);var r=n(6202),i=n(7546),o=n(3066),s=200;function a(e,t){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!i||a.length<s-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new o(a)}return n.set(e,t),this.size=n.size,this}e.exports=a},8845:function(e,t,n){n(4114);var r=n(3381),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}));e.exports=s},9416:function(e,t,n){var r=n(9299),i=1/0;function o(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}e.exports=o},2530:function(e){var t=Function.prototype,n=t.toString;function r(e){if(null!=e){try{return n.call(e)}catch(t){}try{return e+""}catch(t){}}return""}e.exports=r},6061:function(e){function t(e,t){return e===t||e!==e&&t!==t}e.exports=t},9989:function(e,t,n){var r=n(4221),i=n(9106),o=n(5686);function s(e,t){return r(e,o(t,3),i)}e.exports=s},2715:function(e,t,n){var r=n(2387);function i(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}e.exports=i},588:function(e,t,n){var r=n(4804),i=n(4011);function o(e,t){return null!=e&&i(e,t,r)}e.exports=o},6517:function(e){function t(e){return e}e.exports=t},5219:function(e,t,n){var r=n(8843),i=n(5091),o=Object.prototype,s=o.hasOwnProperty,a=o.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return i(e)&&s.call(e,"callee")&&!a.call(e,"callee")};e.exports=c},5366:function(e){var t=Array.isArray;e.exports=t},8465:function(e,t,n){var r=n(4823),i=n(9851);function o(e){return null!=e&&i(e.length)&&!r(e)}e.exports=o},317:function(e,t,n){e=n.nmd(e);var r=n(8606),i=n(3236),o=t&&!t.nodeType&&t,s=o&&e&&!e.nodeType&&e,a=s&&s.exports===o,c=a?r.Buffer:void 0,l=c?c.isBuffer:void 0,u=l||i;e.exports=u},4823:function(e,t,n){var r=n(9315),i=n(9692),o="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";function l(e){if(!i(e))return!1;var t=r(e);return t==s||t==a||t==o||t==c}e.exports=l},9851:function(e){var t=9007199254740991;function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}e.exports=n},9692:function(e){function t(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=t},5091:function(e){function t(e){return null!=e&&"object"==typeof e}e.exports=t},9299:function(e,t,n){var r=n(9315),i=n(5091),o="[object Symbol]";function s(e){return"symbol"==typeof e||i(e)&&r(e)==o}e.exports=s},9562:function(e,t,n){var r=n(658),i=n(4276),o=n(770),s=o&&o.isTypedArray,a=s?i(s):r;e.exports=a},8987:function(e,t,n){var r=n(3238),i=n(8659),o=n(8465);function s(e){return o(e)?r(e):i(e)}e.exports=s},1235:function(e,t,n){var r=n(3066),i="Expected a function";function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},7746:function(e,t,n){var r=n(5114),i=n(8864),o=n(4915),s=n(9416);function a(e){return o(e)?r(s(e)):i(e)}e.exports=a},7770:function(e){function t(){return[]}e.exports=t},3236:function(e){function t(){return!1}e.exports=t},3355:function(e,t,n){var r=n(4643);function i(e){return null==e?"":r(e)}e.exports=i},758:function(e,t,n){"use strict";n(4114);var r=n(4232),i=n(6768);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){if("undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=t.defer,t.preconnectOrigin){var s=document.createElement("link");s.href=t.preconnectOrigin,s.rel="preconnect",i.appendChild(s)}i.appendChild(o),o.onload=n,o.onerror=r}}))},l=function e(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];if(!i.length)return t;var a=i.shift();if((0,r.Qd)(t)&&(0,r.Qd)(a)){for(var c in a)(0,r.Qd)(a[c])?(t[c]||Object.assign(t,o({},c,{})),e(t[c],a[c])):Object.assign(t,o({},c,a[c]));return e.apply(void 0,[t].concat(i))}},u=function(){return"undefined"!==typeof window&&"undefined"!==typeof document},h=function(e){u()},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h('Missing "appName" property inside the plugin options.',null==e.app_name),h('Missing "name" property in the route.',null==e.screen_name),e};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("/"),r=t.split("/");return""===n[0]&&"/"===t[t.length-1]&&n.shift(),r.join("/")+n.join("/")}var p,_=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},m={},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=_();m=l(t,e)},v=function(){return m},y=function(){var e,t=v(),n=t.globalObjectName;u()&&"undefined"!==typeof window[n]&&(e=window)[n].apply(e,arguments)},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=v(),i=r.config,o=r.includes;y.apply(void 0,["config",i.id].concat(t)),Array.isArray(o)&&o.forEach((function(e){y.apply(void 0,["config",e.id].concat(t))}))},w=function(e,t){u()&&(window["ga-disable-".concat(e)]=t)},E=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=v(),n=t.config,r=t.includes;w(n.id,e),Array.isArray(r)&&r.forEach((function(t){return w(t.id,e)}))},T=function(){E(!0)},I=function(){E(!1)},C=function(e){p=e},S=function(){return p},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=v(),r=n.includes,i=n.defaultGroupName;null==t.send_to&&Array.isArray(r)&&r.length&&(t.send_to=r.map((function(e){return e.id})).concat(i)),y("event",e,t)},N=function(e){if(u()){var t;if("string"===typeof e)t={page_path:e};else if(e.path||e.fullPath){var n=v(),r=n.pageTrackerUseFullPath,i=n.pageTrackerPrependBase,o=S(),s=o&&o.options.base,c=r?e.fullPath:e.path;t=a(a({},e.name&&{page_title:e.name}),{},{page_path:i?f(c,s):c})}else t=e;null==t.page_location&&(t.page_location=window.location.href),null==t.send_page_view&&(t.send_page_view=!0),k("page_view",t)}},O=function(e){var t,n=v(),r=n.appName;e&&(t="string"===typeof e?{screen_name:e}:e,t.app_name=t.app_name||r,k("screen_view",t))},A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];k.apply(void 0,["exception"].concat(t))},P=function(e){b("linker",e)},R=function(e){k("timing_complete",e)},x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y.apply(void 0,["set"].concat(t))},L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];k.apply(void 0,["refund"].concat(t))},D=function(e){k("purchase",e)},M=function(e){b({custom_map:e})},F=Object.freeze({__proto__:null,query:y,config:b,optOut:T,optIn:I,pageview:N,screenview:O,exception:A,linker:P,time:R,set:x,refund:L,purchase:D,customMap:M,event:k}),U=function(e){e.config.globalProperties.$gtag=F},j=function(){if(u()){var e=v(),t=e.enabled,n=e.globalObjectName,r=e.globalDataLayerName;return null==window[n]&&(window[r]=window[r]||[],window[n]=function(){window[r].push(arguments)}),window[n]("js",new Date),t||T(),window[n]}},W=function(e){return a({send_page_view:!1},e)},$=function(){var e=v(),t=e.config,n=e.includes;y("config",t.id,W(t.params)),Array.isArray(n)&&n.forEach((function(e){y("config",e.id,W(e.params))}))},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=v(),i=n.appName,o=n.pageTrackerTemplate,s=n.pageTrackerScreenviewEnabled,a=n.pageTrackerSkipSamePath;if(!a||e.path!==t.path){var c=e;(0,r.Tn)(o)?c=o(e,t):s&&(c=d({app_name:i,screen_name:e.name})),s?O(c):N(c)}},H=function(e){var t=v(),n=t.pageTrackerExcludedRoutes;return n.includes(e.path)||n.includes(e.name)},B=function(){var e=v(),t=e.onBeforeTrack,n=e.onAfterTrack,o=S();o.isReady().then((function(){(0,i.dY)().then((function(){var e=o.currentRoute;$(),H(e.value)||V(e.value)})),o.afterEach((function(e,o){(0,i.dY)().then((function(){H(e)||((0,r.Tn)(t)&&t(e,o),V(e,o),(0,r.Tn)(n)&&n(e,o))}))}))}))},q=function(){var e=v(),t=e.onReady,n=e.onError,r=e.globalObjectName,i=e.globalDataLayerName,o=e.config,s=e.customResourceURL,a=e.customPreconnectOrigin,l=e.deferScriptLoad,u=e.pageTrackerEnabled,h=e.disableScriptLoad,d=Boolean(u&&S());if(j(),d?B():$(),!h)return c("".concat(s,"?id=").concat(o.id,"&l=").concat(i),{preconnectOrigin:a,defer:l}).then((function(){t&&t(window[r])}))["catch"]((function(e){return n&&n(e),e}))},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;U(e),g(t),C(n),v().bootstrap&&q()};t.Ay=z},1241:function(e,t){"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){"use strict";var r=n(4901),i=n(6823),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},3506:function(e,t,n){"use strict";var r=n(3925),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){"use strict";var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){"use strict";var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){"use strict";var r=n(34),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},7394:function(e,t,n){"use strict";var r=n(6706),i=n(4576),o=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new o("ArrayBuffer expected");return e.byteLength}},857:function(e,t,n){"use strict";var r=n(9504),i=n(7394),o=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==i(e))return!1;try{return o(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){"use strict";var r=n(4475),i=n(9504),o=n(6706),s=n(7696),a=n(857),c=n(7394),l=n(4483),u=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=r.TypeError,_=Math.min,m=d.prototype,g=f.prototype,v=i(m.slice),y=o(m,"resizable","get"),b=o(m,"maxByteLength","get"),w=i(g.getInt8),E=i(g.setInt8);e.exports=(u||l)&&function(e,t,n){var r,i=c(e),o=void 0===t?i:s(t),m=!y||!y(e);if(a(e))throw new p("ArrayBuffer is detached");if(u&&(e=h(e,{transfer:[e]}),i===o&&(n||m)))return e;if(i>=o&&(!n||m))r=v(e,0,o);else{var g=n&&!m&&b?{maxByteLength:b(e)}:void 0;r=new d(o,g);for(var T=new f(e),I=new f(r),C=_(o,i),S=0;S<C;S++)E(I,S,w(T,S))}return u||l(e),r}},9617:function(e,t,n){"use strict";var r=n(5397),i=n(5610),o=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=o(a);if(0===c)return!e&&-1;var l,u=i(s,c);if(e&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){"use strict";var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4576:function(e,t,n){"use strict";var r=n(9504),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},6955:function(e,t,n){"use strict";var r=n(2140),i=n(4901),o=n(4576),s=n(8227),a=s("toStringTag"),c=Object,l="Arguments"===o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){"use strict";var r=n(9297),i=n(5031),o=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},6699:function(e,t,n){"use strict";var r=n(3724),i=n(4913),o=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){"use strict";var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){"use strict";var r=n(4901),i=n(4913),o=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){"use strict";var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){"use strict";var r,i,o,s,a=n(4475),c=n(9714),l=n(1548),u=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(l)f=function(e){u(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,o=new h(2),s=function(e){i.port1.postMessage(null,[e])},2===o.byteLength&&(s(o),0===o.byteLength&&(f=s)))}catch(p){}e.exports=f},4055:function(e,t,n){"use strict";var r=n(4475),i=n(34),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},6837:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){"use strict";var r=n(516),i=n(9088);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(e){"use strict";e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){"use strict";var r=n(4475),i=n(4576);e.exports="process"===i(r.process)},9392:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){"use strict";var r,i,o=n(4475),s=n(9392),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){"use strict";var r=n(9504),i=Error,o=r("".replace),s=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},6518:function(e,t,n){"use strict";var r=n(4475),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),l=n(2796);e.exports=function(e,t){var n,u,h,d,f,p,_=e.target,m=e.global,g=e.stat;if(u=m?r:g?r[_]||a(_,{}):r[_]&&r[_].prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(m?h:_+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},9039:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){"use strict";var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){"use strict";var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},6706:function(e,t,n){"use strict";var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},9504:function(e,t,n){"use strict";var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},7751:function(e,t,n){"use strict";var r=n(4475),i=n(4901),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},1767:function(e){"use strict";e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){"use strict";var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){"use strict";var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",l=RangeError,u=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(e){return o(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new u(c);var n=s(t);if(n<0)throw new l(c);return new d(e,n)}},4475:function(e,t,n){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){"use strict";var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},421:function(e){"use strict";e.exports={}},5917:function(e,t,n){"use strict";var r=n(3724),i=n(9039),o=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){"use strict";var r=n(9504),i=n(9039),o=n(4576),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},3167:function(e,t,n){"use strict";var r=n(4901),i=n(34),o=n(2967);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},3706:function(e,t,n){"use strict";var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},1181:function(e,t,n){"use strict";var r,i,o,s=n(8622),a=n(4475),c=n(34),l=n(6699),u=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",_=a.TypeError,m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new _("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new m);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw new _(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw new _(p);return t.facade=e,l(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},o=function(e){return u(e,b)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:v}},4376:function(e,t,n){"use strict";var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4901:function(e){"use strict";var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){"use strict";var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===u||n!==l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},4117:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){"use strict";var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){"use strict";var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){"use strict";e.exports=!1},757:function(e,t,n){"use strict";var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},507:function(e,t,n){"use strict";var r=n(9565);e.exports=function(e,t,n){var i,o,s=n?e:e.iterator,a=e.next;while(!(i=r(a,s)).done)if(o=t(i.value),void 0!==o)return o}},9539:function(e,t,n){"use strict";var r=n(9565),i=n(8551),o=n(5966);e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},6198:function(e,t,n){"use strict";var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){"use strict";var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),u=n(1181),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,_=r("".slice),m=r("".replace),g=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===_(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=g(y,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return o(this)&&d(this).source||l(this)}),"toString")},741:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){"use strict";var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){"use strict";var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){"use strict";var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),l=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},8480:function(e,t,n){"use strict";var r=n(1828),i=n(8727),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},3717:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},1625:function(e,t,n){"use strict";var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){"use strict";var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},8773:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){"use strict";var r=n(6706),i=n(34),o=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){"use strict";var r=n(9565),i=n(4901),o=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){"use strict";var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7750:function(e,t,n){"use strict";var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){"use strict";var r=n(4402),i=n(8469),o=r.Set,s=r.add;e.exports=function(e){var t=new o;return i(e,(function(e){s(t,e)})),t}},3440:function(e,t,n){"use strict";var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),l=n(507),u=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=o(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):l(n.getIterator(),(function(e){u(t,e)&&h(i,e)})),i}},4402:function(e,t,n){"use strict";var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){"use strict";var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),l=i.Set,u=i.add,h=i.has;e.exports=function(e){var t=r(this),n=s(e),i=new l;return o(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&u(i,e)})):a(t,(function(e){n.includes(e)&&u(i,e)})),i}},4449:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var u=n.getIterator();return!1!==c(u,(function(e){if(i(t,e))return l(u,"normal",!1)}))}},3838:function(e,t,n){"use strict";var r=n(7080),i=n(5170),o=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(i(t)>n.size)&&!1!==o(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<n.size)return!1;var l=n.getIterator();return!1!==a(l,(function(e){if(!i(t,e))return c(l,"normal",!1)}))}},8469:function(e,t,n){"use strict";var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),l=r(a.keys),u=l(new s).next;e.exports=function(e,t,n){return n?i({iterator:l(e),next:u},t):c(e,t)}},4916:function(e,t,n){"use strict";var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(e,t,n){"use strict";var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){"use strict";var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,l=i.has,u=i.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),i=o(t);return a(n,(function(e){l(t,e)?u(i,e):c(i,e)})),i}},4204:function(e,t,n){"use strict";var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=o(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){"use strict";var r=n(5745),i=n(3392),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},7629:function(e,t,n){"use strict";var r=n(6395),i=n(4475),o=n(9433),s="__core-js_shared__",a=e.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.37.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){"use strict";var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){"use strict";var r=n(4475),i=n(9039),o=n(7388),s=n(7290),a=n(516),c=n(9088),l=r.structuredClone;e.exports=!!l&&!i((function(){if(a&&o>92||c&&o>94||s&&o>97)return!1;var e=new ArrayBuffer(8),t=l(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){"use strict";var r=n(7388),i=n(9039),o=n(4475),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){"use strict";var r=n(1291),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},7696:function(e,t,n){"use strict";var r=n(1291),i=n(8014),o=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new o("Wrong length or index");return n}},5397:function(e,t,n){"use strict";var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){"use strict";var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){"use strict";var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){"use strict";var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){"use strict";var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){"use strict";var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){"use strict";var r=n(8227),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},655:function(e,t,n){"use strict";var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},9714:function(e,t,n){"use strict";var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){"use strict";var r=n(9504),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},7040:function(e,t,n){"use strict";var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){"use strict";var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){"use strict";var r=n(4475),i=n(4901),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8227:function(e,t,n){"use strict";var r=n(4475),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)||(u[e]=a&&o(l,e)?l[e]:h("Symbol."+e)),u[e]}},6573:function(e,t,n){"use strict";var r=n(3724),i=n(2106),o=n(857),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},7936:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){"use strict";var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},7642:function(e,t,n){"use strict";var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(e,t,n){"use strict";var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(e,t,n){"use strict";var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){"use strict";var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){"use strict";var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){"use strict";var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){"use strict";var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},3375:function(e,t,n){"use strict";n(7642)},9225:function(e,t,n){"use strict";n(8004)},3972:function(e,t,n){"use strict";n(3853)},9209:function(e,t,n){"use strict";n(5876)},5714:function(e,t,n){"use strict";n(2475)},7561:function(e,t,n){"use strict";n(5024)},6197:function(e,t,n){"use strict";n(1698)},4979:function(e,t,n){"use strict";var r=n(6518),i=n(4475),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),l=n(679),u=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),_=n(6395),m="DOMException",g=o("Error"),v=o(m),y=function(){l(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new g(t);return i.name=m,a(r,"stack",s(1,f(i.stack,1))),u(r,this,y),r},b=y.prototype=v.prototype,w="stack"in new g(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),C=w&&!I&&!E;r({global:!0,constructor:!0,forced:_||C},{DOMException:C?y:v});var S=o(m),k=S.prototype;if(k.constructor!==S)for(var N in _||a(k,"constructor",s(1,S)),d)if(c(d,N)){var O=d[N],A=O.s;c(S,A)||a(S,A,s(6,O.c))}},4603:function(e,t,n){"use strict";var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.append),u=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),s(t,1);var i,a=o(e),c=o(n),f=0,p=0,_=!1,m=r.length;while(f<m)i=r[f++],_||i.key===a?(_=!0,u(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||l(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){"use strict";var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.getAll),u=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=l(this,e);s(t,1);var i=o(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){"use strict";var r=n(3724),i=n(9504),o=n(2106),s=URLSearchParams.prototype,a=i(s.forEach);r&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){"use strict";n.d(t,{MF:function(){return ge},j6:function(){return de},xZ:function(){return fe},om:function(){return he},Sx:function(){return ye},Wp:function(){return ve},KO:function(){return be}});n(4114);var r=n(852),i=n(1363),o=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,_=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(E(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),_.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),s(e,l())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),_.set(t,e)),t}const T=e=>_.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function N(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return k.set(t,o),o}y((e=>({...e,get:(t,n,r)=>N(t,n)||e.get(t,n,r),has:(t,n)=>!!N(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",R="0.10.2",x=new i.Vy("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",j="@firebase/auth",W="@firebase/auth-compat",$="@firebase/database",V="@firebase/database-compat",H="@firebase/functions",B="@firebase/functions-compat",q="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.11.1",oe="[DEFAULT]",se={[P]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[D]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[j]:"fire-auth",[W]:"fire-auth-compat",[$]:"fire-rtdb",[V]:"fire-rtdb-compat",[H]:"fire-fn",[B]:"fire-fn-compat",[q]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map,le=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e){const t=e.name;if(le.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ue(n,e);for(const n of ce.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},_e=new o.FA("app","Firebase",pe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _e.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge=ie;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw _e.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw _e.create("no-options");const a=ae.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw _e.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of le.values())c.addComponent(r);const l=new me(n,i,c);return ae.set(s,l),l}function ye(e=oe){const t=ae.get(e);if(!t&&e===oe&&(0,o.T9)())return ve();if(!t)throw _e.create("no-app",{appName:e});return t}function be(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}he(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="firebase-heartbeat-database",Ee=1,Te="firebase-heartbeat-store";let Ie=null;function Ce(){return Ie||(Ie=I(we,Ee,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Te)}catch(n){console.warn(n)}}}}).catch((e=>{throw _e.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Se(e){try{const t=await Ce(),n=t.transaction(Te),r=await n.objectStore(Te).get(Ne(e));return await n.done,r}catch(t){if(t instanceof o.g)x.warn(t.message);else{const e=_e.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function ke(e,t){try{const n=await Ce(),r=n.transaction(Te,"readwrite"),i=r.objectStore(Te);await i.put(t,Ne(e)),await r.done}catch(n){if(n instanceof o.g)x.warn(n.message);else{const e=_e.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1024,Ae=2592e6;class Pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Re();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Re(),{heartbeatsToSend:n,unsentEntries:r}=xe(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=Oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){he(new r.uA("platform-logger",(e=>new O(e)),"PRIVATE")),he(new r.uA("heartbeat",(e=>new Pe(e)),"PRIVATE")),be(P,R,e),be(P,R,"esm2017"),be("fire-js","")}Me("")},852:function(e,t,n){"use strict";n.d(t,{h1:function(){return l},uA:function(){return i}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){"use strict";n.d(t,{$b:function(){return i},Vy:function(){return l}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6400:function(e,t,n){"use strict";n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",o="10.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,o,"app")},2621:function(e,t,n){"use strict";n.d(t,{HF:function(){return Tt},xI:function(){return Hr},df:function(){return xn}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),o=n(1363);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function _(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function g(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function b(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function E(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,r,o={}){return D(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),t);try{const t=new j(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw W(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw W(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw W(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw W(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(o){if(o instanceof i.g)throw o;p(e,"network-request-failed",{message:String(o)})}}async function M(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}function U(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function W(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e&&void 0!==e.enterprise}class V{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return U(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return L(e,"GET","/v2/recaptchaConfig",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=Y(r);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:z(G(o.auth_time)),issuedAtTime:z(G(o.iat)),expirationTime:z(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Y(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function X(e){const t=Y(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&J(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Q(e,q(n,{idToken:r}));b(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ie(o.providerUserInfo):[],a=re(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ee(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ne(e){const t=(0,i.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await D(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=F(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return L(e,"POST","/v2/accounts:revokeToken",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ae;return n&&(b("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(b("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Q(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(g(this.auth));const e=await this.getIdToken();return await Q(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:E,stsTokenManager:T}=t;b(v&&T,e,"internal-error");const I=ae.fromJSON(this.name,T);b("string"===typeof v,e,"internal-error"),ce(u,e.name),ce(h,e.name),b("boolean"===typeof y,e,"internal-error"),b("boolean"===typeof w,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(_,e.name),ce(m,e.name),ce(g,e.name);const C=new le({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:g});return E&&Array.isArray(E)&&(C.providerData=E.map((e=>Object.assign({},e)))),_&&(C._redirectEventId=_),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];b(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ie(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new ae;s.updateFromIdToken(n);const a=new le({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function he(e){E(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class _e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _e(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const o=pe(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=le._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new _e(i,e,n)):new _e(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ee(t))return"Blackberry";if(Te(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,i.ZQ)()){return/crios\//i.test(e)}function be(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,i.ZQ)()){return/android/i.test(e)}function Ee(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Te(e=(0,i.ZQ)()){return/webos/i.test(e)}function Ie(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,i.ZQ)()){var t;return Ie(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,i.lT)()&&10===document.documentMode}function ke(e=(0,i.ZQ)()){return Ie(e)||we(e)||Te(e)||Ee(e)||/windows phone/i.test(e)||be(e)}function Ne(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.ZQ)());break;case"Worker":n=`${me((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t={}){return L(e,"GET","/v2/passwordPolicy",x(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=6;class xe{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:Re,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await _e.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await q(this,{idToken:e}),n=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(g(this));const t=e?(0,i.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(g(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pe(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await _e.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,i.Ku)(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ue(e){Fe=e}function je(e){return Fe.loadJS(e)}function We(){return Fe.recaptchaEnterpriseScript}function $e(){return Fe.gapiScript}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}const He="recaptcha-enterprise",Be="NO_RECAPTCHA";class qe{constructor(e){this.type=He,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{H(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new V(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Be)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&$(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=We();0!==t.length&&(t+=n),je(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ze(e,t,n,r=!1){const i=new qe(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ke(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const o=n.initialize({options:t});return o}function Ye(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Xe(e,t,n){const r=De(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Qe(t),{host:s,port:a}=Je(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||et()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Je(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ze(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ze(t)}}}function Ze(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function et(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return L(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function ot(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends tt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new st(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new st(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,t,"signInWithPassword",rt);case"emailLink":return it(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,n,"signUpPassword",nt);case"emailLink":return ot(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="http://localhost";class lt extends tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new lt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return at(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,at(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,at(e,t)}buildRequest(){const e={requestUri:ct,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function ht(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function dt(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw W(e,"account-exists-with-different-credential",n);return n}const ft={["USER_NOT_FOUND"]:"user-not-found"};async function pt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends tt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _t({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _t({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ht(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return dt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return pt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new _t({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class vt{constructor(e){var t,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=mt(null!==(r=c["mode"])&&void 0!==r?r:null);b(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=gt(e);try{return new vt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return st._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vt.parseLink(t);return b(n,"argument-error"),st._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends bt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends wt{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com",Et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tt.credential(t,n)}catch(r){return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com",Tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends wt{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch(t){return null}}}It.GITHUB_SIGN_IN_METHOD="github.com",It.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends wt{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com",Ct.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),o=kt(n),s=new St({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=kt(n);return new St({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Nt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Nt(e,t,n,r)}}function Ot(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Nt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t,n=!1){const r=await Q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(g(i));const o="reauthenticate";try{const r=await Q(e,Ot(i,o,t,e),n);b(r.idToken,i,"internal-error");const s=Y(r.idToken);b(s,i,"internal-error");const{sub:a}=s;return b(e.uid===a,i,"user-mismatch"),St._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const i="signIn",o=await Ot(e,i,t),s=await St._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(s.user),s}function xt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Lt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Mt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function Ft(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Ut(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const jt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jt,"1"),this.storage.removeItem(jt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){const e=(0,i.ZQ)();return ve(e)||Ie(e)}const Vt=1e3,Ht=10;class Bt extends Wt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$t()&&Ne(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ht):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bt.type="LOCAL";const qt=Bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Wt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zt.type="SESSION";const Kt=zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Yt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Gt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.receivers=[];class Qt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Xt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function Zt(e){Jt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return"undefined"!==typeof Jt()["WorkerGlobalScope"]&&"function"===typeof Jt()["importScripts"]}async function tn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function nn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function rn(){return en()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="firebaseLocalStorageDb",sn=1,an="firebaseLocalStorage",cn="fbase_key";class ln{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function un(e,t){return e.transaction([an],t?"readwrite":"readonly").objectStore(an)}function hn(){const e=indexedDB.deleteDatabase(on);return new ln(e).toPromise()}function dn(){const e=indexedDB.open(on,sn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(an,{keyPath:cn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(an)?t(n):(n.close(),await hn(),t(await dn()))}))}))}async function fn(e,t,n){const r=un(e,!0).put({[cn]:t,value:n});return new ln(r).toPromise()}async function pn(e,t){const n=un(e,!1).get(t),r=await new ln(n).toPromise();return void 0===r?null:r.value}function _n(e,t){const n=un(e,!0).delete(t);return new ln(n).toPromise()}const mn=800,gn=3;class vn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await dn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>gn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return en()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yt._getInstance(rn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await tn(),!this.activeServiceWorker)return;this.sender=new Qt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&nn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await fn(e,jt,"1"),await _n(e,jt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>fn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>pn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_n(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=un(e,!1).getAll();return new ln(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vn.type="LOCAL";const yn=vn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function wn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}function En(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ve("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tn="recaptcha";async function In(e,t,n){var r;const i=await n.verify();try{let o;if(b("string"===typeof i,e,"argument-error"),b(n.type===Tn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){b("enroll"===t.type,e,"internal-error");const n=await Dt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;b(n,e,"missing-multi-factor-info");const s=await bn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ut(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{constructor(e){this.providerId=Cn.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return In(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return _t._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Cn.credentialFromTaggedObject(t)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_t._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(e,t){return t?he(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn.PROVIDER_ID="phone",Cn.PHONE_SIGN_IN_METHOD="phone";class kn extends tt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return at(e,this._buildIdpRequest())}_linkToIdToken(e,t){return at(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return at(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nn(e){return Rt(e.auth,new kn(e),e.bypassAuthState)}function On(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Pt(n,new kn(e),e.bypassAuthState)}async function An(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),At(n,new kn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nn;case"linkViaPopup":case"linkViaRedirect":return An;case"reauthViaPopup":case"reauthViaRedirect":return On;default:p(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new N(2e3,1e4);async function xn(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(_(e,"operation-not-supported-in-this-environment"));const i=De(e);v(e,t,bt);const o=Sn(i,n),s=new Ln(i,"signInViaPopup",t,o);return s.executeNotNull()}class Ln extends Pn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Rn.get())};e()}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dn="pendingRedirect",Mn=new Map;class Fn extends Pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Mn.get(this.auth._key());if(!e){try{const t=await Un(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Mn.set(this.auth._key(),e)}return this.bypassAuthState||Mn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Un(e,t){const n=$n(t),r=Wn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function jn(e,t){Mn.set(e._key(),t)}function Wn(e){return he(e._redirectPersistence)}function $n(e){return pe(Dn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const i=De(e),o=Sn(i,t),s=new Fn(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=6e5;class Bn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Kn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(qn(e))}saveEventToCache(e){this.cachedEventUids.add(qn(e)),this.lastProcessedEventTime=Date.now()}}function qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function zn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Kn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Qn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Gn(e);for(const r of t)try{if(Jn(r))return}catch(n){}p(e,"unauthorized-domain")}function Jn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Xn.test(n))return!1;if(Yn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new N(3e4,6e4);function er(){const e=Jt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function tr(e){return new Promise(((t,n)=>{var r,i,o;function s(){er(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{er(),n(_(e,"network-request-failed"))},timeout:Zn.get()})}if(null===(i=null===(r=Jt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Jt().gapi)||void 0===o?void 0:o.load)){const t=Ve("iframefcb");return Jt()[t]=()=>{gapi.load?s():n(_(e,"network-request-failed"))},je(`${$e()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw nr=null,e}))}let nr=null;function rr(e){return nr=nr||tr(e),nr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new N(5e3,15e3),or="__/auth/iframe",sr="emulator/auth/iframe",ar={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,sr):`https://${e.config.authDomain}/${or}`,o={apiKey:t.apiKey,appName:e.name,v:r.MF},s=cr.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function ur(e){const t=await rr(e),n=Jt().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:lr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ar,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_(e,"network-request-failed"),o=Jt().setTimeout((()=>{r(i)}),ir.get());function s(){Jt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dr=500,fr=600,pr="_blank",_r="http://localhost";class mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function gr(e,t,n,r=dr,o=fr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},hr),{width:r.toString(),height:o.toString(),top:s,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(c=ye(u)?pr:n),ge(u)&&(t=t||_r,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ce(u)&&"_self"!==c)return vr(t||"",c),new mr(null);const d=window.open(t||"",c,h);b(d,e,"popup-blocked");try{d.focus()}catch(f){}return new mr(d)}function vr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="__/auth/handler",br="emulator/auth/handler",wr=encodeURIComponent("fac");async function Er(e,t,n,o,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(t instanceof bt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof wt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),h=u?`#${wr}=${encodeURIComponent(u)}`:"";return`${Tr(e)}?${(0,i.Am)(l).slice(1)}${h}`}function Tr({config:e}){return e.emulator?O(e,br):`https://${e.authDomain}/${yr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="webStorageSupport";class Cr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kt,this._completeRedirectFn=Vn,this._overrideRedirectResult=jn}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Er(e,t,n,T(),r);return gr(e,o,Xt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Er(e,t,n,T(),r);return Zt(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ur(e),n=new Bn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ir,{type:Ir},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ir];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ve()||Ie()}}const Sr=Cr;class kr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Nr extends kr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Nr(e)}_finalizeEnroll(e,t,n){return Mt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return wn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Or{constructor(){}static assertion(e){return Nr._fromCredential(e)}}Or.FACTOR_ID="phone";class Ar{static assertionForEnrollment(e,t){return Pr._fromSecret(e,t)}static assertionForSignIn(e,t){return Pr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;b("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Ft(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Rr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Ar.FACTOR_ID="totp";class Pr extends kr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Pr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Pr(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),Ut(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return En(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Rr{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Rr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(xr(e)||xr(t))&&(r=!0),r&&(xr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),xr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function xr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Lr="@firebase/auth",Dr="1.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ur(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},l=new Le(r,i,o,c);return Ye(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Mr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Lr,Dr,Fr(e)),(0,r.KO)(Lr,Dr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=300,Wr=(0,i.XA)("authIdTokenMaxAge")||jr;let $r=null;const Vr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wr)return;const i=null===n||void 0===n?void 0:n.token;$r!==i&&($r=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ge(e,{popupRedirectResolver:Sr,persistence:[yn,qt,Kt]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(o,location.origin);if(location.origin===e.origin){const t=Vr(e.toString());Lt(n,t,(()=>t(n.currentUser))),xt(n,(e=>t(e)))}}const s=(0,i.Tj)("auth");return s&&Xe(n,`http://${s}`),n}function Br(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ue({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Br().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Ur("Browser")},4161:function(e,t,n){"use strict";n.d(t,{Jt:function(){return Bs},C3:function(){return ra},Zy:function(){return Gs},KR:function(){return Ws},TF:function(){return Vs},hZ:function(){return Hs}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(3405),i=n(852),o=n(4046),s=n(1363);const a="@firebase/database",c="1.0.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),_=f("sessionStorage"),m=new s.Vy("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.kj)(e),n=new o.gz;n.update(t);const r=n.digest();return o.K3.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,o.As)(r):r,t+=" "}return t};let b=null,w=!0;const E=function(e,t){(0,o.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=s.$b.VERBOSE,b=m.log.bind(m),t&&_.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,_.remove("logging_enabled"))},T=function(...e){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&E(!0)),b){const t=y.apply(null,e);b(t)}},I=function(e){return function(...t){T(e,...t)}},C=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);m.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw m.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);m.warn(t)},N=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A=function(e){if((0,o.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",R="[MAX_NAME]",x=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.As)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,o.As)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.As)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,o.vA)(!O(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,l;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},W=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},$=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const H=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,q=2147483647,z=function(e){if(H.test(e)){const t=Number(e);if(t>=B&&t<=q)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,o.vA)("string"===typeof t,"typeof type must == string"),(0,o.vA)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return U(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},_e={};function me(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",be="close",we="pLPCommand",Ee="pRTLPCB",Te="id",Ie="pw",Ce="ser",Se="cb",ke="seg",Ne="ts",Oe="d",Ae="dframe",Pe=1870,Re=30,xe=Pe-Re,Le=25e3,De=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(De)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Ce]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,o.$g)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!W()&&!$())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.KA)(t),r=F(n,xe);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ae]="t",n[Te]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[Ee+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){T("frame writing exception"),i.stack&&T(i.stack),T(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Te]=this.myID,e[Ie]=this.myPW,e[Ce]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+r+"="+e.seg+"&"+Ne+r+"="+e.ts+"&"+Oe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=16384,je=45e3;let We=null;"undefined"!==typeof MozWebSocket?We=MozWebSocket:"undefined"!==typeof WebSocket&&(We=WebSocket);class $e{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=me(t),this.connURL=$e.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[ee]=Z,!(0,o.$g)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[ne]=re),t&&(s[te]=t),n&&(s[oe]=n),r&&(s[ae]=r),i&&(s[se]=i),de(e,ce,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,o.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new We(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==We&&!$e.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(je))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2,$e.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$e&&$e["isAvailable"]();let n=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[$e];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He=6e4,Be=5e3,qe=10240,ze=102400,Ke="t",Ge="d",Ye="s",Xe="r",Qe="e",Je="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qe?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Xe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Xe?this.onReset_(n):t===Qe?C("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):C("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,o.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Et(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.OE)(this.parts_[n]);St(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.OE)(t),St(e)}function Ct(e){const t=e.parts_.pop();e.byteLength_-=(0,o.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Nt}getInitialEvent(e){return(0,o.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=1e3,At=3e5,Pt=3e4,Rt=1.3,xt=3e4,Lt="server_kill",Dt=3;class Mt extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Mt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=At,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.As)(i)),(0,o.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.cY,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.vA)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];Mt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.gR)(e,"w")){const n=(0,o.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):C("Unrecognized action received from server: "+(0,o.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>xt&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Mt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){(0,o.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)}),i))}catch(C){this.log_("Failed to get token: "+C),s||(this.repoInfo_.nodeAdmin&&k(C),c())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dt&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,o.jZ)()?e["framework.cordova"]=1:(0,o.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,o.Im)(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(P,e),r=new Ft(P,t);return 0!==this.compare(n,r)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;class Wt extends Ut{static get __EMPTY_NODE(){return jt}static set __EMPTY_NODE(e){jt=e}compare(e,t){return x(e.name,t.name)}isDefinedOn(e){throw(0,o.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(R,jt)}makePost(e,t){return(0,o.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,jt)}toString(){return".key"}}const $t=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:qt.EMPTY_NODE,this.right=null!=i?i:qt.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return qt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class Bt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,t=qt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new qt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return x(e.name,t.name)}function Kt(e,t){return x(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Yt(e){Gt=e}qt.EMPTY_NODE=new Bt;const Xt=function(e){return"number"===typeof e?"number:"+j(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.gR)(t,".sv"),"Priority must be a string or number.")}else(0,o.vA)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,o.vA)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){Jt=e}static get __childrenNodeConstructor(){return Jt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:((0,o.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=tn.VALUE_TYPE_ORDER.indexOf(t),i=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.vA)(r>=0,"Unknown leaf type: "+t),(0,o.vA)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?x(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(R,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Ft(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const sn=new on,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new Ht(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return o},s=new cn(e.length),a=o(s);return new qt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.vA)(hn&&sn,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":sn}),un}get(e){const t=(0,o.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof qt?t:null}hasIndex(e){return(0,o.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.vA)(e!==$t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ft.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?ln(n,e.getCompare()):hn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=s,new dn(u,l)}addToIndexes(e,t){const n=(0,o.kH)(this.indexes_,((n,r)=>{const i=(0,o.yw)(this.indexSet_,r);if((0,o.vA)(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ft.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),ln(n,i.getCompare())}return hn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ft(e.name,r))),i.insert(e,e.node)}}));return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.kH)(this.indexes_,(n=>{if(n===hn)return n;{const r=t.get(e.name);return r?n.remove(new Ft(e.name,r)):n}}));return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&(0,o.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new qt(Kt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?fn:this.priorityNode_;return new pn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,o.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(sn,((o,s)=>{t[o]=s.val(e),n++,i&&pn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(sn,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===$t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(sn),n=t.getIterator(sn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===$t?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends pn{constructor(){super(new qt(Kt),pn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const mn=new _n;Object.defineProperties(Ft,{MIN:{value:new Ft(P,pn.EMPTY_NODE)},MAX:{value:new Ft(R,mn)}}),Wt.__EMPTY_NODE=pn.EMPTY_NODE,tn.__childrenNodeConstructor=pn,Yt(mn),rn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function vn(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,vn(t))}if(e instanceof Array||!gn){let n=pn.EMPTY_NODE;return U(e,((t,r)=>{if((0,o.gR)(e,t)&&"."!==t.substring(0,1)){const e=vn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(vn(t))}{const n=[];let r=!1;const i=e;if(U(i,((e,t)=>{if("."!==e.substring(0,1)){const i=vn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ft(e,i)))}})),0===n.length)return pn.EMPTY_NODE;const o=ln(n,zt,(e=>e.name),Kt);if(r){const e=ln(n,sn.getCompare());return new pn(o,vn(t),new dn({".priority":e},{".priority":sn}))}return new pn(o,vn(t),dn.Default)}}nn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ut{constructor(e){super(),this.indexPath_=e,(0,o.vA)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?x(e.name,t.name):i}makePost(e,t){const n=vn(e),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,r)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Ft(R,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?x(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=vn(e);return new Ft(t,n)}toString(){return".value"}}const wn=new bn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Cn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(In(t,a)):(0,o.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Tn(t,n)):s.trackChildChange(Cn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(sn,((e,r)=>{t.hasChild(e)||n.trackChildChange(In(e,r))})),t.isLeafNode()||t.forEachChild(sn,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Cn(t,r,i))}else n.trackChildChange(Tn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.indexedFilter_=new kn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new Ft(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return t.forEachChild(sn,((e,t)=>{i.matches(new Ft(e,t))||(r=r.updateImmediateChild(e,pn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ft(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),i=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);i?n++:r=r.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.vA)(a.numChildren()===this.limit_,"");const c=new Ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Cn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(In(t,e));const n=a.updateImmediateChild(t,pn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(Tn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(In(l.name,l.node)),i.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const e=new An;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pn(e){return e.loadsAllData()?new kn(e.getIndex()):e.hasLimit()?new On(e):new Nn(e)}function Rn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===sn?n="$priority":e.index_===wn?n="$value":e.index_===$t?n="$key":((0,o.vA)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function xn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==sn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Ln.getListenId_(e,n),a={};this.listens_[s]=a;const c=Rn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.yw)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Ln.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Rn(e._queryParams),n=e._path.toString(),r=new o.cY;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.Am)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.$L)(a.responseText)}catch(e){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return{value:null,children:new Map}}function Fn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Mn());const i=e.children.get(r);t=ft(t),Fn(i,t,n)}}function Un(e,t,n){null!==e.value?n(t,e.value):jn(e,((e,r)=>{const i=new lt(t.toString()+"/"+e);Un(r,i,n)}))}function jn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=1e4,Vn=3e4,Hn=3e5;class Bn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=$n+(Vn-$n)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,((e,r)=>{r>0&&(0,o.gR)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Hn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;function zn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(qn||(qn={}));class Yn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=qn.ACK_USER_WRITE,this.source=zn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,o.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Yn(ut(),t,this.revert)}}return(0,o.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new Yn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.source=e,this.path=t,this.type=qn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Xn(this.source,ut()):new Xn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=qn.OVERWRITE}operationForChild(e){return yt(this.path)?new Qn(this.source,ut(),this.snap.getImmediateChild(e)):new Qn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=qn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Qn(this.source,ut(),t.value):new Jn(this.source,ut(),t)}return(0,o.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jn(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tr(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Sn(t.childName,t.snapshotNode))})),nr(e,i,"child_removed",t,r,n),nr(e,i,"child_added",t,r,n),nr(e,i,"child_moved",o,r,n),nr(e,i,"child_changed",t,r,n),nr(e,i,"value",t,r,n),i}function nr(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>ir(e,t,n))),s.forEach((n=>{const r=rr(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function rr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ir(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.Hk)("Should only compare child_ events.");const r=new Ft(t.childName,t.snapshotNode),i=new Ft(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return{eventCache:e,serverCache:t}}function sr(e,t,n,r){return or(new Zn(t,n,r),e.serverCache)}function ar(e,t,n,r){return or(e.eventCache,new Zn(t,n,r))}function cr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function lr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const hr=()=>(ur||(ur=new qt(L)),ur);class dr{constructor(e,t=hr()){this.value=e,this.children=t}static fromObject(e){let t=new dr(null);return U(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=vt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new dr(null)}}set(e,t){if(yt(e))return new dr(t,this.children);{const n=ht(e),r=this.children.get(n)||new dr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new dr(this.value,o)}}remove(e){if(yt(e))return this.children.isEmpty()?new dr(null):new dr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new dr(null):new dr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new dr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new dr(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(vt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),vt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),vt(t,r),n):new dr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.writeTree_=e}static empty(){return new fr(new dr(null))}}function pr(e,t,n){if(yt(t))return new fr(new dr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=bt(i,t);return o=o.updateChild(s,n),new fr(e.writeTree_.set(i,o))}{const r=new dr(n),i=e.writeTree_.setTree(t,r);return new fr(i)}}}function _r(e,t,n){let r=e;return U(n,((e,n)=>{r=pr(r,vt(t,e),n)})),r}function mr(e,t){if(yt(t))return fr.empty();{const n=e.writeTree_.setTree(t,new dr(null));return new fr(n)}}function gr(e,t){return null!=vr(e,t)}function vr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function yr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sn,((e,n)=>{t.push(new Ft(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))})),t}function br(e,t){if(yt(t))return e;{const n=vr(e,t);return new fr(null!=n?new dr(n):e.writeTree_.subtree(t))}}function wr(e){return e.writeTree_.isEmpty()}function Er(e,t){return Tr(ut(),e.writeTree_,t)}function Tr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.vA)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Tr(vt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(vt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return zr(t,e)}function Cr(e,t,n,r,i){(0,o.vA)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=pr(e.visibleWrites,t,n)),e.lastWriteId=r}function Sr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function kr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.vA)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Nr(t,r.path)?i=!1:Et(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Or(e),!0;if(r.snap)e.visibleWrites=mr(e.visibleWrites,r.path);else{const t=r.children;U(t,(t=>{e.visibleWrites=mr(e.visibleWrites,vt(r.path,t))}))}return!0}return!1}function Nr(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(vt(e.path,n),t))return!0;return!1}function Or(e){e.visibleWrites=Pr(e.allWrites,Ar,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ar(e){return e.visible}function Pr(e,t,n){let r=fr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Et(n,e)?(t=bt(n,e),r=pr(r,t,s.snap)):Et(e,n)&&(t=bt(e,n),r=pr(r,ut(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.Hk)("WriteRecord should have .snap or .children");if(Et(n,e))t=bt(n,e),r=_r(r,t,s.children);else if(Et(e,n))if(t=bt(e,n),yt(t))r=_r(r,ut(),s.children);else{const e=(0,o.yw)(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=pr(r,ut(),n)}}}}}return r}function Rr(e,t,n,r,i){if(r||i){const o=br(e.visibleWrites,t);if(!i&&wr(o))return n;if(i||null!=n||gr(o,ut())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Et(e.path,t)||Et(t,e.path))},s=Pr(e.allWrites,o,t),a=n||pn.EMPTY_NODE;return Er(s,a)}return null}{const r=vr(e.visibleWrites,t);if(null!=r)return r;{const r=br(e.visibleWrites,t);if(wr(r))return n;if(null!=n||gr(r,ut())){const e=n||pn.EMPTY_NODE;return Er(r,e)}return null}}}function xr(e,t,n){let r=pn.EMPTY_NODE;const i=vr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(sn,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=br(e.visibleWrites,t);return n.forEachChild(sn,((e,t)=>{const n=Er(br(i,new lt(e)),t);r=r.updateImmediateChild(e,n)})),yr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=br(e.visibleWrites,t);return yr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Lr(e,t,n,r,i){(0,o.vA)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=vt(t,n);if(gr(e.visibleWrites,s))return null;{const t=br(e.visibleWrites,s);return wr(t)?i.getChild(n):Er(t,i.getChild(n))}}function Dr(e,t,n,r){const i=vt(t,n),o=vr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=br(e.visibleWrites,i);return Er(t,r.getNode().getImmediateChild(n))}return null}function Mr(e,t){return vr(e.visibleWrites,t)}function Fr(e,t,n,r,i,o,s){let a;const c=br(e.visibleWrites,t),l=vr(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Er(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Ur(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function jr(e,t,n,r){return Rr(e.writeTree,e.treePath,t,n,r)}function Wr(e,t){return xr(e.writeTree,e.treePath,t)}function $r(e,t,n,r){return Lr(e.writeTree,e.treePath,t,n,r)}function Vr(e,t){return Mr(e.writeTree,vt(e.treePath,t))}function Hr(e,t,n,r,i,o){return Fr(e.writeTree,e.treePath,t,n,r,i,o)}function Br(e,t,n){return Dr(e.writeTree,e.treePath,t,n)}function qr(e,t){return zr(vt(e.treePath,t),e.writeTree)}function zr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Cn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,In(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.Hk)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Cn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Yr=new Gr;class Xr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Br(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:lr(this.viewCache_),i=Hr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){return{filter:e}}function Jr(e,t){(0,o.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Zr(e,t,n,r,i){const s=new Kr;let a,c;if(n.type===qn.OVERWRITE){const l=n;l.source.fromUser?a=ri(e,t,l.path,l.snap,r,i,s):((0,o.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=ni(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===qn.MERGE){const l=n;l.source.fromUser?a=oi(e,t,l.path,l.children,r,i,s):((0,o.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=ai(e,t,l.path,l.children,r,i,c,s))}else if(n.type===qn.ACK_USER_WRITE){const o=n;a=o.revert?ui(e,t,o.path,r,i,s):ci(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==qn.LISTEN_COMPLETE)throw(0,o.Hk)("Unknown operation type: "+n.type);a=li(e,t,n.path,r,s)}const l=s.getChanges();return ei(t,a,l),{viewCache:a,changes:l}}function ei(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=cr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(En(cr(t)))}}function ti(e,t,n,r,i,s){const a=t.eventCache;if(null!=Vr(r,n))return t;{let c,l;if(yt(n))if((0,o.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=lr(t),i=n instanceof pn?n:pn.EMPTY_NODE,o=Wr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=jr(r,lr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ht(n);if(".priority"===u){(0,o.vA)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=$r(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=$r(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=Br(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return sr(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ni(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,Yr,null)}const h=ar(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Xr(i,h,o);return ti(e,h,n,i,d,a)}function ri(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new Xr(i,t,o);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=sr(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=sr(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),l=a.getNode().getImmediateChild(i);let h;if(yt(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,r):pn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,u,s);c=sr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ii(e,t){return e.eventCache.isCompleteForChild(t)}function oi(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const l=vt(n,r);ii(t,ht(l))&&(a=ri(e,a,l,c,i,o,s))})),r.foreach(((r,c)=>{const l=vt(n,r);ii(t,ht(l))||(a=ri(e,a,l,c,i,o,s))})),a}function si(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ai(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?r:new dr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=si(e,c,r);l=ni(e,l,new lt(n),u,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=si(e,c,r);l=ni(e,l,new lt(n),u,i,o,s,a)}})),l}function ci(e,t,n,r,i,o,s){if(null!=Vr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ni(e,t,n,c.getNode().getChild(n),i,o,a,s);if(yt(n)){let r=new dr(null);return c.getNode().forEachChild($t,((e,t)=>{r=r.set(new lt(e),t)})),ai(e,t,n,r,i,o,a,s)}return t}{let l=new dr(null);return r.foreach(((e,t)=>{const r=vt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),ai(e,t,n,l,i,o,a,s)}}function li(e,t,n,r,i){const o=t.serverCache,s=ar(t,o.getNode(),o.isFullyInitialized()||yt(n),o.isFiltered());return ti(e,s,n,r,Yr,i)}function ui(e,t,n,r,i,s){let a;if(null!=Vr(r,n))return t;{const c=new Xr(r,t,i),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=jr(r,lr(t));else{const e=t.serverCache.getNode();(0,o.vA)(e instanceof pn,"serverChildren would be complete if leaf node"),n=Wr(r,e)}u=e.filter.updateFullNode(l,n,s)}else{const i=ht(n);let o=Br(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,pn.EMPTY_NODE,ft(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=jr(r,lr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Vr(r,ut()),sr(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new kn(n.getIndex()),i=Pn(n);this.processor_=Qr(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),l=new Zn(a,o.isFullyInitialized(),r.filtersNodes()),u=new Zn(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=or(u,l),this.eventGenerator_=new er(this.query_)}get query(){return this.query_}}function di(e){return e.viewCache_.serverCache.getNode()}function fi(e){return cr(e.viewCache_)}function pi(e,t){const n=lr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function _i(e){return 0===e.eventRegistrations_.length}function mi(e,t){e.eventRegistrations_.push(t)}function gi(e,t,n){const r=[];if(n){(0,o.vA)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function vi(e,t,n,r){t.type===qn.MERGE&&null!==t.source.queryId&&((0,o.vA)(lr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.vA)(cr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Zr(e.processor_,i,t,n,r);return Jr(e.processor_,s.viewCache),(0,o.vA)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,bi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function yi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(sn,((e,t)=>{r.push(Tn(e,t))}))}return n.isFullyInitialized()&&r.push(En(n.getNode())),bi(e,r,n.getNode(),t)}function bi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return tr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi,Ei;class Ti{constructor(){this.views=new Map}}function Ii(e){(0,o.vA)(!wi,"__referenceConstructor has already been defined"),wi=e}function Ci(){return(0,o.vA)(wi,"Reference.ts has not been loaded"),wi}function Si(e){return 0===e.views.size}function ki(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.vA)(null!=s,"SyncTree gave us an op for an invalid query."),vi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(vi(o,t,n,r));return i}}function Ni(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=jr(n,i?r:null),o=!1;e?o=!0:r instanceof pn?(e=Wr(n,r),o=!1):(e=pn.EMPTY_NODE,o=!1);const s=or(new Zn(e,o,!1),new Zn(r,i,!1));return new hi(t,s)}return s}function Oi(e,t,n,r,i,o){const s=Ni(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),mi(s,n),yi(s,n)}function Ai(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Di(e);if("default"===i)for(const[c,l]of e.views.entries())s=s.concat(gi(l,n,r)),_i(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const t=e.views.get(i);t&&(s=s.concat(gi(t,n,r)),_i(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Di(e)&&o.push(new(Ci())(t._repo,t._path)),{removed:o,events:s}}function Pi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ri(e,t){let n=null;for(const r of e.views.values())n=n||pi(r,t);return n}function xi(e,t){const n=t._queryParams;if(n.loadsAllData())return Mi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Li(e,t){return null!=xi(e,t)}function Di(e){return null!=Mi(e)}function Mi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){(0,o.vA)(!Ei,"__referenceConstructor has already been defined"),Ei=e}function Ui(){return(0,o.vA)(Ei,"Reference.ts has not been loaded"),Ei}let ji=1;class Wi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new dr(null),this.pendingWriteTree_=Ur(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $i(e,t,n,r,i){return Cr(e.pendingWriteTree_,t,n,r,i),i?Zi(e,new Qn(zn(),t,n)):[]}function Vi(e,t,n=!1){const r=Sr(e.pendingWriteTree_,t),i=kr(e.pendingWriteTree_,t);if(i){let t=new dr(null);return null!=r.snap?t=t.set(ut(),!0):U(r.children,(e=>{t=t.set(new lt(e),!0)})),Zi(e,new Yn(r.path,t,n))}return[]}function Hi(e,t,n){return Zi(e,new Qn(Kn(),t,n))}function Bi(e,t,n){const r=dr.fromObject(n);return Zi(e,new Jn(Kn(),t,r))}function qi(e,t){return Zi(e,new Xn(Kn(),t))}function zi(e,t,n){const r=oo(e,n);if(r){const n=so(r),i=n.path,o=n.queryId,s=bt(i,t),a=new Xn(Gn(o),s);return ao(e,i,a)}return[]}function Ki(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Li(s,t))){const c=Ai(s,t,n,r);Si(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Di(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=co(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=no(e,r);e.listenProvider_.startListening(lo(i),ro(e,i),o.hashFn,o.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(lo(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(io(t));e.listenProvider_.stopListening(lo(t),n)}))}uo(e,l)}return a}function Gi(e,t,n,r){const i=oo(e,r);if(null!=i){const r=so(i),o=r.path,s=r.queryId,a=bt(o,t),c=new Qn(Gn(s),a,n);return ao(e,o,c)}return[]}function Yi(e,t,n,r){const i=oo(e,r);if(i){const r=so(i),o=r.path,s=r.queryId,a=bt(o,t),c=dr.fromObject(n),l=new Jn(Gn(s),a,c);return ao(e,o,l)}return[]}function Xi(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=bt(e,i);s=s||Ri(t,n),a=a||Di(t)}));let c,l=e.syncPointTree_.get(i);if(l?(a=a||Di(l),s=s||Ri(l,ut())):(l=new Ti,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)c=!0;else{c=!1,s=pn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Ri(t,ut());n&&(s=s.updateImmediateChild(e,n))}))}const u=Li(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=io(t);(0,o.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ho();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Ir(e.pendingWriteTree_,i);let d=Oi(l,t,n,h,s,c);if(!u&&!a&&!r){const n=xi(l,t);d=d.concat(fo(e,t,n))}return d}function Qi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=bt(e,t),i=Ri(n,r);if(i)return i}));return Rr(i,t,o,n,r)}function Ji(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=bt(e,n);r=r||Ri(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Ri(i,ut()):(i=new Ti,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new Zn(r,!0,!1):null,a=Ir(e.pendingWriteTree_,t._path),c=Ni(i,t,a,o?s.getNode():pn.EMPTY_NODE,o);return fi(c)}function Zi(e,t){return eo(t,e.syncPointTree_,null,Ir(e.pendingWriteTree_,ut()))}function eo(e,t,n,r){if(yt(e.path))return to(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Ri(i,ut()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=qr(r,s);o=o.concat(eo(a,c,e,t))}return i&&(o=o.concat(ki(i,e,r,n))),o}}function to(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Ri(i,ut()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=qr(r,t),c=e.operationForChild(t);c&&(o=o.concat(to(c,i,s,a)))})),i&&(o=o.concat(ki(i,e,r,n))),o}function no(e,t){const n=t.query,r=ro(e,n);return{hashFn:()=>{const e=di(t)||pn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?zi(e,n._path,r):qi(e,n._path);{const r=V(t,n);return Ki(e,n,null,r)}}}}function ro(e,t){const n=io(t);return e.queryToTagMap.get(n)}function io(e){return e._path.toString()+"$"+e._queryIdentifier}function oo(e,t){return e.tagToQueryMap.get(t)}function so(e){const t=e.indexOf("$");return(0,o.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function ao(e,t,n){const r=e.syncPointTree_.get(t);(0,o.vA)(r,"Missing sync point for query tag that we're tracking");const i=Ir(e.pendingWriteTree_,t);return ki(r,n,i,null)}function co(e){return e.fold(((e,t,n)=>{if(t&&Di(t)){const e=Mi(t);return[e]}{let e=[];return t&&(e=Pi(t)),U(n,((t,n)=>{e=e.concat(n)})),e}}))}function lo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ui())(e._repo,e._path):e}function uo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=io(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ho(){return ji++}function fo(e,t,n){const r=t._path,i=ro(e,t),s=no(e,n),a=e.listenProvider_.startListening(lo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,o.vA)(!Di(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&Di(t))return[Mi(t).query];{let e=[];return t&&(e=e.concat(Pi(t).map((e=>e.query)))),U(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(lo(r),ro(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new po(t)}node(){return this.node_}}class _o{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new _o(this.syncTree_,t)}node(){return Qi(this.syncTree_,this.path_)}}const mo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},go=function(e,t,n){return e&&"object"===typeof e?((0,o.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?vo(e[".sv"],t,n):"object"===typeof e[".sv"]?yo(e[".sv"],t):void(0,o.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},vo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.vA)(!1,"Unexpected server value: "+e)}},yo=function(e,t,n){e.hasOwnProperty("increment")||(0,o.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.vA)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.vA)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},bo=function(e,t,n,r){return Eo(t,new _o(n,e),r)},wo=function(e,t,n){return Eo(e,new po(t),n)};function Eo(e,t,n){const r=e.getPriority().val(),i=go(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=go(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new tn(o,vn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new tn(i))),r.forEachChild(sn,((e,r)=>{const i=Eo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Io(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=(0,o.yw)(r.node.children,i)||{children:{},childCount:0};r=new To(i,r,e),n=ft(n),i=ht(n)}return r}function Co(e){return e.node.value}function So(e,t){e.node.value=t,xo(e)}function ko(e){return e.node.childCount>0}function No(e){return void 0===Co(e)&&!ko(e)}function Oo(e,t){U(e.node.children,((n,r)=>{t(new To(n,e,r))}))}function Ao(e,t,n,r){n&&!r&&t(e),Oo(e,(e=>{Ao(e,t,!0,r)})),n&&r&&t(e)}function Po(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ro(e){return new lt(null===e.parent?e.name:Ro(e.parent)+"/"+e.name)}function xo(e){null!==e.parent&&Lo(e.parent,e.name,e)}function Lo(e,t,n){const r=No(n),i=(0,o.gR)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,xo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,xo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=/[\[\].#$\/\u0000-\u001F\u007F]/,Mo=/[\[\].#$\u0000-\u001F\u007F]/,Fo=10485760,Uo=function(e){return"string"===typeof e&&0!==e.length&&!Do.test(e)},jo=function(e){return"string"===typeof e&&0!==e.length&&!Mo.test(e)},Wo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),jo(e)},$o=function(e,t,n,r){r&&void 0===t||Vo((0,o.dI)(e,"value"),t,n)},Vo=function(e,t,n){const r=n instanceof lt?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(r));if("function"===typeof t)throw new Error(e+"contains a function "+kt(r)+" with contents = "+t.toString());if(O(t))throw new Error(e+"contains "+t.toString()+" "+kt(r));if("string"===typeof t&&t.length>Fo/3&&(0,o.OE)(t)>Fo)throw new Error(e+"contains a string greater than "+Fo+" utf8 bytes "+kt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(U(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Uo(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(r,t),Vo(e,o,r),Ct(r)})),n&&i)throw new Error(e+' contains ".value" child '+kt(r)+" in addition to actual children.")}},Ho=function(e,t,n,r){if((!r||void 0!==n)&&!jo(n))throw new Error((0,o.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Bo=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ho(e,t,n,r)},qo=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},zo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Uo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Wo(n))throw new Error((0,o.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Go(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Yo(e,t,n){Go(e,n),Qo(e,(e=>wt(e,t)))}function Xo(e,t,n){Go(e,n),Qo(e,(e=>Et(e,t)||Et(t,e)))}function Qo(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(Jo(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Jo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&T("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="repo_interrupt",es=25;class ts{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ko,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mn(),this.transactionQueueTree_=new To,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ns(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||G())e.server_=new Ln(e.repoInfo_,((t,n,r,i)=>{os(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ss(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.As)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Mt(e.repoInfo_,t,((t,n,r,i)=>{os(e,t,n,r,i)}),(t=>{ss(e,t)}),(t=>{as(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Bn(e.stats_,e.server_))),e.infoData_=new Dn,e.infoSyncTree_=new Wi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Hi(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),cs(e,"connected",!1),e.serverSyncTree_=new Wi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);Xo(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function rs(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function is(e){return mo({timestamp:rs(e)})}function os(e,t,n,r,i){e.dataUpdateCount++;const s=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.kH)(n,(e=>vn(e)));a=Yi(e.serverSyncTree_,s,t,i)}else{const t=vn(n);a=Gi(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.kH)(n,(e=>vn(e)));a=Bi(e.serverSyncTree_,s,t)}else{const t=vn(n);a=Hi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=ws(e,s)),Xo(e.eventQueue_,c,a)}function ss(e,t){cs(e,"connected",t),!1===t&&ds(e)}function as(e,t){U(t,((t,n)=>{cs(e,t,n)}))}function cs(e,t,n){const r=new lt("/.info/"+t),i=vn(n);e.infoData_.updateSnapshot(r,i);const o=Hi(e.infoSyncTree_,r,i);Xo(e.eventQueue_,r,o)}function ls(e){return e.nextWriteId_++}function us(e,t,n){const r=Ji(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=vn(r).withIndex(t._queryParams.getIndex());let o;if(Xi(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Hi(e.serverSyncTree_,t._path,i);else{const n=ro(e.serverSyncTree_,t);o=Gi(e.serverSyncTree_,t._path,i,n)}return Xo(e.eventQueue_,t._path,o),Ki(e.serverSyncTree_,t,n,null,!0),i}),(n=>(ms(e,"get for query "+(0,o.As)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function hs(e,t,n,r,i){ms(e,"set",{path:t.toString(),value:n,priority:r});const o=is(e),s=vn(n,r),a=Qi(e.serverSyncTree_,t),c=wo(s,a,o),l=ls(e),u=$i(e.serverSyncTree_,t,c,l,!0);Go(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||k("set at "+t+" failed: "+n);const s=Vi(e.serverSyncTree_,l,!o);Xo(e.eventQueue_,t,s),gs(e,i,n,r)}));const h=ks(e,t);ws(e,h),Xo(e.eventQueue_,h,[])}function ds(e){ms(e,"onDisconnectEvents");const t=is(e),n=Mn();Un(e.onDisconnect_,ut(),((r,i)=>{const o=bo(r,i,e.serverSyncTree_,t);Fn(n,r,o)}));let r=[];Un(n,ut(),((t,n)=>{r=r.concat(Hi(e.serverSyncTree_,t,n));const i=ks(e,t);ws(e,i)})),e.onDisconnect_=Mn(),Xo(e.eventQueue_,ut(),r)}function fs(e,t,n){let r;r=".info"===ht(t._path)?Xi(e.infoSyncTree_,t,n):Xi(e.serverSyncTree_,t,n),Yo(e.eventQueue_,t._path,r)}function ps(e,t,n){let r;r=".info"===ht(t._path)?Ki(e.infoSyncTree_,t,n):Ki(e.serverSyncTree_,t,n),Yo(e.eventQueue_,t._path,r)}function _s(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Zo)}function ms(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function gs(e,t,n,r){t&&K((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function vs(e,t,n){return Qi(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function ys(e,t=e.transactionQueueTree_){if(t||Ss(e,t),Co(t)){const n=Is(e,t);(0,o.vA)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&bs(e,Ro(t),n)}else ko(t)&&Oo(t,(t=>{ys(e,t)}))}function bs(e,t,n){const r=n.map((e=>e.currentWriteId)),i=vs(e,t,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,o.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,(r=>{ms(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Vi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ss(e,Io(e.transactionQueueTree_,t)),ys(e,e.transactionQueueTree_),Xo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)K(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ws(e,t)}}),a)}function ws(e,t){const n=Ts(e,t),r=Ro(n),i=Is(e,n);return Es(e,i,r),r}function Es(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const s=t[c],l=bt(n,s.path);let u,h=!1;if((0,o.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(Vi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=es)h=!0,u="maxretry",i=i.concat(Vi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=vs(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Vo("transaction failed: Data returned ",r,s.path);let t=vn(r);const c="object"===typeof r&&null!=r&&(0,o.gR)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=is(e),h=wo(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ls(e),a.splice(a.indexOf(l),1),i=i.concat($i(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Vi(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Vi(e.serverSyncTree_,s.currentWriteId,!0))}Xo(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Ss(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)K(r[o]);ys(e,e.transactionQueueTree_)}function Ts(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Co(r))r=Io(r,n),t=ft(t),n=ht(t);return r}function Is(e,t){const n=[];return Cs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Cs(e,t,n){const r=Co(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Oo(t,(t=>{Cs(e,t,n)}))}function Ss(e,t){const n=Co(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,So(t,n.length>0?n:void 0)}Oo(t,(t=>{Ss(e,t)}))}function ks(e,t){const n=Ro(Ts(e,t)),r=Io(e.transactionQueueTree_,t);return Po(r,(t=>{Ns(e,t)})),Ns(e,r),Ao(r,(t=>{Ns(e,t)})),n}function Ns(e,t){const n=Co(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.vA)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Vi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?So(t,void 0):n.length=s+1,Xo(e.eventQueue_,Ro(t),i);for(let e=0;e<r.length;e++)K(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function As(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ps=function(e,t){const n=Rs(e),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},Rs=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Os(e.substring(u,h)));const d=As(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},xs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.As)(this.snapshot.exportVal())}}class Ds{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Us(this._repo,this._path)}get _queryIdentifier(){const e=xn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return xn(this._queryParams)}isEqual(e){if(e=(0,o.Ku)(e),!(e instanceof Fs))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class Us extends Fs{constructor(e,t){super(e,t,new An,!1)}get parent(){const e=gt(this._path);return null===e?null:new Us(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class js{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=$s(this.ref,e);return new js(this._node.getChild(t),n,sn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new js(n,$s(this.ref,t),sn))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ws(e,t){return e=(0,o.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?$s(e._root,t):e._root}function $s(e,t){return e=(0,o.Ku)(e),null===ht(e._path)?Bo("child","path",t,!1):Ho("child","path",t,!1),new Us(e._repo,vt(e._path,t))}function Vs(e){return qo("remove",e._path),Hs(e,null)}function Hs(e,t){e=(0,o.Ku)(e),qo("set",e._path),$o("set",t,e._path,!1);const n=new o.cY;return hs(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Bs(e){e=(0,o.Ku)(e);const t=new Ms((()=>{})),n=new qs(t);return us(e._repo,e,n).then((t=>new js(t,new Us(e._repo,e._path),e._queryParams.getIndex())))}class qs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ls("value",this,new js(e.snapshotNode,new Us(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ds(this,e,t):null}matches(e){return e instanceof qs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class zs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ds(this,e,t):null}createEvent(e,t){(0,o.vA)(null!=e.childName,"Child events should have a childName.");const n=$s(new Us(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Ls(e.type,this,new js(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ks(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{ps(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ms(n,o||void 0),a="value"===t?new qs(s):new zs(t,s);return fs(e._repo,e,a),()=>ps(e._repo,e,a)}function Gs(e,t,n,r){return Ks(e,"value",t,n,r)}Ii(Us),Fi(Us);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ys="FIREBASE_DATABASE_EMULATOR_HOST",Xs={};let Qs=!1;function Js(e,t,n,r){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Zs(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=Ps(o,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[Ys]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=Ps(o,i),l=c.repoInfo):s=!c.repoInfo.secure;const u=i&&s?new J(J.OWNER):new Q(e.name,e.options,t);zo("Invalid Firebase Database URL",c),yt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ta(l,e,u,new X(e.name,n));return new na(h,e)}function ea(e,t){const n=Xs[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),_s(e),delete n[e.key]}function ta(e,t,n,r){let i=Xs[t.name];i||(i={},Xs[t.name]=i);let o=i[e.toURLString()];return o&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ts(e,Qs,n,r),i[e.toURLString()]=o,o}class na{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ns(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Us(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ea(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function ra(e=(0,r.Sx)(),t){const n=(0,r.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.yU)("database");e&&ia(n,...e)}return n}function ia(e,t,n,r={}){e=(0,o.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new J(J.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,o.Fy)(r.mockUserToken,e.app.options.projectId);s=new J(t)}Js(i,t,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oa(e){u(r.MF),(0,r.om)(new i.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Zs(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(a,c,e),(0,r.KO)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};oa()},5384:function(e,t,n){"use strict";n.d(t,{hU:function(){return ar}});n(4114);
/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const r="undefined"!==typeof window;const i=(e,t=!1)=>t?Symbol.for(e):Symbol(e),o=(e,t,n)=>s({l:e,k:t,s:n}),s=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),a=e=>"number"===typeof e&&isFinite(e),c=e=>"[object Date]"===I(e),l=e=>"[object RegExp]"===I(e),u=e=>C(e)&&0===Object.keys(e).length,h=Object.assign;let d;const f=()=>d||(d="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:{});function p(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _=Object.prototype.hasOwnProperty;function m(e,t){return _.call(e,t)}const g=Array.isArray,v=e=>"function"===typeof e,y=e=>"string"===typeof e,b=e=>"boolean"===typeof e,w=e=>null!==e&&"object"===typeof e,E=e=>w(e)&&v(e.then)&&v(e.catch),T=Object.prototype.toString,I=e=>T.call(e),C=e=>{if(!w(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t.constructor===Object},S=e=>null==e?"":g(e)||C(e)&&e.toString===T?JSON.stringify(e,null,2):String(e);function k(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}function N(e){let t=e;return()=>++t}function O(e,t){"undefined"!==typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const A=e=>!w(e)||g(e);function P(e,t){if(A(e)||A(t))throw new Error("Invalid value");const n=[{src:e,des:t}];while(n.length){const{src:e,des:t}=n.pop();Object.keys(e).forEach((r=>{A(e[r])||A(t[r])?t[r]=e[r]:n.push({src:e[r],des:t[r]})}))}}n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);function R(e,t,n){return{line:e,column:t,offset:n}}function x(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const L=/\{([0-9a-zA-Z]+)\}/g;function D(e,...t){return 1===t.length&&U(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(L,((e,n)=>t.hasOwnProperty(n)?t[n]:""))}const M=Object.assign,F=e=>"string"===typeof e,U=e=>null!==e&&"object"===typeof e;function j(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}const W={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},$={[W.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function V(e,t,...n){const r=D($[e]||"",...n||[]),i={message:String(r),code:e};return t&&(i.location=t),i}const H={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},B={[H.EXPECTED_TOKEN]:"Expected token: '{0}'",[H.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[H.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[H.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[H.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[H.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[H.EMPTY_PLACEHOLDER]:"Empty placeholder",[H.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[H.INVALID_LINKED_FORMAT]:"Invalid linked format",[H.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[H.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[H.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[H.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[H.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[H.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function q(e,t,n={}){const{domain:r,messages:i,args:o}=n,s=D((i||B)[e]||"",...o||[]),a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=r,a}function z(e){throw e}const K=" ",G="\r",Y="\n",X=String.fromCharCode(8232),Q=String.fromCharCode(8233);function J(e){const t=e;let n=0,r=1,i=1,o=0;const s=e=>t[e]===G&&t[e+1]===Y,a=e=>t[e]===Y,c=e=>t[e]===Q,l=e=>t[e]===X,u=e=>s(e)||a(e)||c(e)||l(e),h=()=>n,d=()=>r,f=()=>i,p=()=>o,_=e=>s(e)||c(e)||l(e)?Y:t[e],m=()=>_(n),g=()=>_(n+o);function v(){return o=0,u(n)&&(r++,i=0),s(n)&&n++,n++,i++,t[n]}function y(){return s(n+o)&&o++,o++,t[n+o]}function b(){n=0,r=1,i=1,o=0}function w(e=0){o=e}function E(){const e=n+o;while(e!==n)v();o=0}return{index:h,line:d,column:f,peekOffset:p,charAt:_,currentChar:m,currentPeek:g,next:v,peek:y,reset:b,resetPeek:w,skipToPeek:E}}const Z=void 0,ee="'",te="tokenizer";function ne(e,t={}){const n=!1!==t.location,r=J(e),i=()=>r.index(),o=()=>R(r.line(),r.column(),r.index()),s=o(),a=i(),c={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},l=()=>c,{onError:u}=t;function h(e,t,r,...i){const o=l();if(t.column+=r,t.offset+=r,u){const r=n?x(o.startLoc,t):null,s=q(e,r,{domain:te,args:i});u(s)}}function d(e,t,r){e.endLoc=o(),e.currentType=t;const i={type:t};return n&&(i.loc=x(e.startLoc,e.endLoc)),null!=r&&(i.value=r),i}const f=e=>d(e,14);function p(e,t){return e.currentChar()===t?(e.next(),t):(h(H.EXPECTED_TOKEN,o(),0,t),"")}function _(e){let t="";while(e.currentPeek()===K||e.currentPeek()===Y)t+=e.currentPeek(),e.peek();return t}function m(e){const t=_(e);return e.skipToPeek(),t}function g(e){if(e===Z)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function v(e){if(e===Z)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function y(e,t){const{currentType:n}=t;if(2!==n)return!1;_(e);const r=g(e.currentPeek());return e.resetPeek(),r}function b(e,t){const{currentType:n}=t;if(2!==n)return!1;_(e);const r="-"===e.currentPeek()?e.peek():e.currentPeek(),i=v(r);return e.resetPeek(),i}function w(e,t){const{currentType:n}=t;if(2!==n)return!1;_(e);const r=e.currentPeek()===ee;return e.resetPeek(),r}function E(e,t){const{currentType:n}=t;if(8!==n)return!1;_(e);const r="."===e.currentPeek();return e.resetPeek(),r}function T(e,t){const{currentType:n}=t;if(9!==n)return!1;_(e);const r=g(e.currentPeek());return e.resetPeek(),r}function I(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;_(e);const r=":"===e.currentPeek();return e.resetPeek(),r}function C(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?g(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===K||!t)&&(t===Y?(e.peek(),r()):N(e,!1))},i=r();return e.resetPeek(),i}function S(e){_(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function k(e){const t=_(e),n="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:n,hasSpace:t.length>0}}function N(e,t=!0){const n=(t=!1,r="",i=!1)=>{const o=e.currentPeek();return"{"===o?"%"!==r&&t:"@"!==o&&o?"%"===o?(e.peek(),n(t,"%",!0)):"|"===o?!("%"!==r&&!i)||!(r===K||r===Y):o===K?(e.peek(),n(!0,K,i)):o!==Y||(e.peek(),n(!0,Y,i)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function O(e,t){const n=e.currentChar();return n===Z?Z:t(n)?(e.next(),n):null}function A(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}function P(e){return O(e,A)}function L(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t||45===t}function D(e){return O(e,L)}function M(e){const t=e.charCodeAt(0);return t>=48&&t<=57}function F(e){return O(e,M)}function U(e){const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function j(e){return O(e,U)}function W(e){let t="",n="";while(t=F(e))n+=t;return n}function $(e){m(e);const t=e.currentChar();return"%"!==t&&h(H.EXPECTED_TOKEN,o(),0,t),e.next(),"%"}function V(e){let t="";while(1){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!N(e))break;t+=n,e.next()}else if(n===K||n===Y)if(N(e))t+=n,e.next();else{if(S(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function B(e){m(e);let t="",n="";while(t=D(e))n+=t;return e.currentChar()===Z&&h(H.UNTERMINATED_CLOSING_BRACE,o(),0),n}function z(e){m(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${W(e)}`):t+=W(e),e.currentChar()===Z&&h(H.UNTERMINATED_CLOSING_BRACE,o(),0),t}function G(e){return e!==ee&&e!==Y}function X(e){m(e),p(e,"'");let t="",n="";while(t=O(e,G))n+="\\"===t?Q(e):t;const r=e.currentChar();return r===Y||r===Z?(h(H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),r===Y&&(e.next(),p(e,"'")),n):(p(e,"'"),n)}function Q(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return ne(e,t,4);case"U":return ne(e,t,6);default:return h(H.UNKNOWN_ESCAPE_SEQUENCE,o(),0,t),""}}function ne(e,t,n){p(e,t);let r="";for(let i=0;i<n;i++){const n=j(e);if(!n){h(H.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function re(e){return"{"!==e&&"}"!==e&&e!==K&&e!==Y}function ie(e){m(e);let t="",n="";while(t=O(e,re))n+=t;return n}function oe(e){let t="",n="";while(t=P(e))n+=t;return n}function se(e){const t=n=>{const r=e.currentChar();return"{"!==r&&"%"!==r&&"@"!==r&&"|"!==r&&"("!==r&&")"!==r&&r?r===K?n:(n+=r,e.next(),t(n)):n};return t("")}function ae(e){m(e);const t=p(e,"|");return m(e),t}function ce(e,t){let n=null;const r=e.currentChar();switch(r){case"{":return t.braceNest>=1&&h(H.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),e.next(),n=d(t,2,"{"),m(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&h(H.EMPTY_PLACEHOLDER,o(),0),e.next(),n=d(t,3,"}"),t.braceNest--,t.braceNest>0&&m(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&h(H.UNTERMINATED_CLOSING_BRACE,o(),0),n=le(e,t)||f(t),t.braceNest=0,n;default:{let r=!0,i=!0,s=!0;if(S(e))return t.braceNest>0&&h(H.UNTERMINATED_CLOSING_BRACE,o(),0),n=d(t,1,ae(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return h(H.UNTERMINATED_CLOSING_BRACE,o(),0),t.braceNest=0,ue(e,t);if(r=y(e,t))return n=d(t,5,B(e)),m(e),n;if(i=b(e,t))return n=d(t,6,z(e)),m(e),n;if(s=w(e,t))return n=d(t,7,X(e)),m(e),n;if(!r&&!i&&!s)return n=d(t,13,ie(e)),h(H.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,n.value),m(e),n;break}}return n}function le(e,t){const{currentType:n}=t;let r=null;const i=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||i!==Y&&i!==K||h(H.INVALID_LINKED_FORMAT,o(),0),i){case"@":return e.next(),r=d(t,8,"@"),t.inLinked=!0,r;case".":return m(e),e.next(),d(t,9,".");case":":return m(e),e.next(),d(t,10,":");default:return S(e)?(r=d(t,1,ae(e)),t.braceNest=0,t.inLinked=!1,r):E(e,t)||I(e,t)?(m(e),le(e,t)):T(e,t)?(m(e),d(t,12,oe(e))):C(e,t)?(m(e),"{"===i?ce(e,t)||r:d(t,11,se(e))):(8===n&&h(H.INVALID_LINKED_FORMAT,o(),0),t.braceNest=0,t.inLinked=!1,ue(e,t))}}function ue(e,t){let n={type:14};if(t.braceNest>0)return ce(e,t)||f(t);if(t.inLinked)return le(e,t)||f(t);const r=e.currentChar();switch(r){case"{":return ce(e,t)||f(t);case"}":return h(H.UNBALANCED_CLOSING_BRACE,o(),0),e.next(),d(t,3,"}");case"@":return le(e,t)||f(t);default:{if(S(e))return n=d(t,1,ae(e)),t.braceNest=0,t.inLinked=!1,n;const{isModulo:r,hasSpace:i}=k(e);if(r)return i?d(t,0,V(e)):d(t,4,$(e));if(N(e))return d(t,0,V(e));break}}return n}function he(){const{currentType:e,offset:t,startLoc:n,endLoc:s}=c;return c.lastType=e,c.lastOffset=t,c.lastStartLoc=n,c.lastEndLoc=s,c.offset=i(),c.startLoc=o(),r.currentChar()===Z?d(c,14):ue(r,c)}return{nextToken:he,currentOffset:i,currentPosition:o,context:l}}const re="parser",ie=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function oe(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function se(e={}){const t=!1!==e.location,{onError:n,onWarn:r}=e;function i(e,r,i,o,...s){const a=e.currentPosition();if(a.offset+=o,a.column+=o,n){const e=t?x(i,a):null,o=q(r,e,{domain:re,args:s});n(o)}}function o(e,n,i,o,...s){const a=e.currentPosition();if(a.offset+=o,a.column+=o,r){const e=t?x(i,a):null;r(V(n,e,s))}}function s(e,n,r){const i={type:e};return t&&(i.start=n,i.end=n,i.loc={start:r,end:r}),i}function a(e,n,r,i){i&&(e.type=i),t&&(e.end=n,e.loc&&(e.loc.end=r))}function c(e,t){const n=e.context(),r=s(3,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function l(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,o=s(5,r,i);return o.index=parseInt(t,10),e.nextToken(),a(o,e.currentOffset(),e.currentPosition()),o}function u(e,t,n){const r=e.context(),{lastOffset:i,lastStartLoc:o}=r,c=s(4,i,o);return c.key=t,!0===n&&(c.modulo=!0),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function h(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,o=s(9,r,i);return o.value=t.replace(ie,oe),e.nextToken(),a(o,e.currentOffset(),e.currentPosition()),o}function d(e){const t=e.nextToken(),n=e.context(),{lastOffset:r,lastStartLoc:o}=n,c=s(8,r,o);return 12!==t.type?(i(e,H.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),c.value="",a(c,r,o),{nextConsumeToken:t,node:c}):(null==t.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,ae(t)),c.value=t.value||"",a(c,e.currentOffset(),e.currentPosition()),{node:c})}function f(e,t){const n=e.context(),r=s(7,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function p(e){const t=e.context(),n=s(6,t.offset,t.startLoc);let r=e.nextToken();if(9===r.type){const t=d(e);n.modifier=t.node,r=t.nextConsumeToken||e.nextToken()}switch(10!==r.type&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(r)),n.key=f(e,r.value||"");break;case 5:null==r.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(r)),n.key=u(e,r.value||"");break;case 6:null==r.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(r)),n.key=l(e,r.value||"");break;case 7:null==r.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(r)),n.key=h(e,r.value||"");break;default:{i(e,H.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const o=e.context(),c=s(7,o.offset,o.startLoc);return c.value="",a(c,o.offset,o.startLoc),n.key=c,a(n,o.offset,o.startLoc),{nextConsumeToken:r,node:n}}}return a(n,e.currentOffset(),e.currentPosition()),{node:n}}function _(e){const t=e.context(),n=1===t.currentType?e.currentOffset():t.offset,r=1===t.currentType?t.endLoc:t.startLoc,d=s(2,n,r);d.items=[];let f=null,_=null;do{const n=f||e.nextToken();switch(f=null,n.type){case 0:null==n.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(n)),d.items.push(c(e,n.value||""));break;case 6:null==n.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(n)),d.items.push(l(e,n.value||""));break;case 4:_=!0;break;case 5:null==n.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(n)),d.items.push(u(e,n.value||"",!!_)),_&&(o(e,W.USE_MODULO_SYNTAX,t.lastStartLoc,0,ae(n)),_=null);break;case 7:null==n.value&&i(e,H.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ae(n)),d.items.push(h(e,n.value||""));break;case 8:{const t=p(e);d.items.push(t.node),f=t.nextConsumeToken||null;break}}}while(14!==t.currentType&&1!==t.currentType);const m=1===t.currentType?t.lastOffset:e.currentOffset(),g=1===t.currentType?t.lastEndLoc:e.currentPosition();return a(d,m,g),d}function m(e,t,n,r){const o=e.context();let c=0===r.items.length;const l=s(1,t,n);l.cases=[],l.cases.push(r);do{const t=_(e);c||(c=0===t.items.length),l.cases.push(t)}while(14!==o.currentType);return c&&i(e,H.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),a(l,e.currentOffset(),e.currentPosition()),l}function g(e){const t=e.context(),{offset:n,startLoc:r}=t,i=_(e);return 14===t.currentType?i:m(e,n,r,i)}function v(n){const r=ne(n,M({},e)),o=r.context(),c=s(0,o.offset,o.startLoc);return t&&c.loc&&(c.loc.source=n),c.body=g(r),e.onCacheKey&&(c.cacheKey=e.onCacheKey(n)),14!==o.currentType&&i(r,H.UNEXPECTED_LEXICAL_ANALYSIS,o.lastStartLoc,0,n[o.offset]||""),a(c,r.currentOffset(),r.currentPosition()),c}return{parse:v}}function ae(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function ce(e,t={}){const n={ast:e,helpers:new Set},r=()=>n,i=e=>(n.helpers.add(e),e);return{context:r,helper:i}}function le(e,t){for(let n=0;n<e.length;n++)ue(e[n],t)}function ue(e,t){switch(e.type){case 1:le(e.cases,t),t.helper("plural");break;case 2:le(e.items,t);break;case 6:{const n=e;ue(n.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function he(e,t={}){const n=ce(e);n.helper("normalize"),e.body&&ue(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function de(e){const t=e.body;return 2===t.type?fe(t):t.cases.forEach((e=>fe(e))),e}function fe(e){if(1===e.items.length){const t=e.items[0];3!==t.type&&9!==t.type||(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(3!==r.type&&9!==r.type)break;if(null==r.value)break;t.push(r.value)}if(t.length===e.items.length){e.static=j(t);for(let t=0;t<e.items.length;t++){const n=e.items[t];3!==n.type&&9!==n.type||delete n.value}}}}const pe="minifier";function _e(e){switch(e.t=e.type,e.type){case 0:{const t=e;_e(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let e=0;e<n.length;e++)_e(n[e]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let e=0;e<n.length;e++)_e(n[e]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;_e(t.key),t.k=t.key,delete t.key,t.modifier&&(_e(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}default:throw q(H.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:pe,args:[e.type]})}delete e.type}const me="parser";function ge(e,t){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:o}=t,s=!1!==t.location,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:o,indentLevel:0};s&&e.loc&&(a.source=e.loc.source);const c=()=>a;function l(e,t){a.code+=e}function u(e,t=!0){const n=t?i:"";l(o?n+"  ".repeat(e):n)}function h(e=!0){const t=++a.indentLevel;e&&u(t)}function d(e=!0){const t=--a.indentLevel;e&&u(t)}function f(){u(a.indentLevel)}const p=e=>`_${e}`,_=()=>a.needIndent;return{context:c,push:l,indent:h,deindent:d,newline:f,helper:p,needIndent:_}}function ve(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),Ee(e,t.key),t.modifier?(e.push(", "),Ee(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function ye(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const i=t.items.length;for(let o=0;o<i;o++){if(Ee(e,t.items[o]),o===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}function be(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const i=t.cases.length;for(let n=0;n<i;n++){if(Ee(e,t.cases[n]),n===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}}function we(e,t){t.body?Ee(e,t.body):e.push("null")}function Ee(e,t){const{helper:n}=e;switch(t.type){case 0:we(e,t);break;case 1:be(e,t);break;case 2:ye(e,t);break;case 6:ve(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:throw q(H.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:me,args:[t.type]})}}const Te=(e,t={})=>{const n=F(t.mode)?t.mode:"normal",r=F(t.filename)?t.filename:"message.intl",i=!!t.sourceMap,o=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",s=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],c=ge(e,{mode:n,filename:r,sourceMap:i,breakLineCode:o,needIndent:s});c.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(s),a.length>0&&(c.push(`const { ${j(a.map((e=>`${e}: _${e}`)),", ")} } = ctx`),c.newline()),c.push("return "),Ee(c,e),c.deindent(s),c.push("}"),delete e.helpers;const{code:l,map:u}=c.context();return{ast:e,code:l,map:u?u.toJSON():void 0}};function Ie(e,t={}){const n=M({},t),r=!!n.jit,i=!!n.minify,o=null==n.optimize||n.optimize,s=se(n),a=s.parse(e);return r?(o&&de(a),i&&_e(a),{ast:a,code:""}):(he(a,n),Te(a,n))}
/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ce(){"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(f().__INTLIFY_PROD_DEVTOOLS__=!1),"boolean"!==typeof __INTLIFY_JIT_COMPILATION__&&(f().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!==typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(f().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Se=[];Se[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},Se[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},Se[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},Se[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},Se[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},Se[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},Se[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const ke=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ne(e){return ke.test(e)}function Oe(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function Ae(e){if(void 0===e||null===e)return"o";const t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Pe(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(Ne(t)?Oe(t):"*"+t)}function Re(e){const t=[];let n,r,i,o,s,a,c,l=-1,u=0,h=0;const d=[];function f(){const t=e[l+1];if(5===u&&"'"===t||6===u&&'"'===t)return l++,i="\\"+t,d[0](),!0}d[0]=()=>{void 0===r?r=i:r+=i},d[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2]=()=>{d[0](),h++},d[3]=()=>{if(h>0)h--,u=4,d[0]();else{if(h=0,void 0===r)return!1;if(r=Pe(r),!1===r)return!1;d[1]()}};while(null!==u)if(l++,n=e[l],"\\"!==n||!f()){if(o=Ae(n),c=Se[u],s=c[o]||c["l"]||8,8===s)return;if(u=s[0],void 0!==s[1]&&(a=d[s[1]],a&&(i=n,!1===a())))return;if(7===u)return t}}const xe=new Map;function Le(e,t){return w(e)?e[t]:null}function De(e,t){if(!w(e))return null;let n=xe.get(t);if(n||(n=Re(t),n&&xe.set(t,n)),!n)return null;const r=n.length;let i=e,o=0;while(o<r){const e=i[n[o]];if(void 0===e)return null;if(v(i))return null;i=e,o++}return i}const Me=e=>e,Fe=e=>"",Ue="text",je=e=>0===e.length?"":k(e),We=S;function $e(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Ve(e){const t=a(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(a(e.named.count)||a(e.named.n))?a(e.named.count)?e.named.count:a(e.named.n)?e.named.n:t:t}function He(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Be(e={}){const t=e.locale,n=Ve(e),r=w(e.pluralRules)&&y(t)&&v(e.pluralRules[t])?e.pluralRules[t]:$e,i=w(e.pluralRules)&&y(t)&&v(e.pluralRules[t])?$e:void 0,o=e=>e[r(n,e.length,i)],s=e.list||[],c=e=>s[e],l=e.named||{};a(e.pluralIndex)&&He(n,l);const u=e=>l[e];function d(t){const n=v(e.messages)?e.messages(t):!!w(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):Fe)}const f=t=>e.modifiers?e.modifiers[t]:Me,p=C(e.processor)&&v(e.processor.normalize)?e.processor.normalize:je,_=C(e.processor)&&v(e.processor.interpolate)?e.processor.interpolate:We,m=C(e.processor)&&y(e.processor.type)?e.processor.type:Ue,b=(e,...t)=>{const[n,r]=t;let i="text",o="";1===t.length?w(n)?(o=n.modifier||o,i=n.type||i):y(n)&&(o=n||o):2===t.length&&(y(n)&&(o=n||o),y(r)&&(i=r||i));const s=d(e)(E),a="vnode"===i&&g(s)&&o?s[0]:s;return o?f(o)(a,i):a},E={["list"]:c,["named"]:u,["plural"]:o,["linked"]:b,["message"]:d,["type"]:m,["interpolate"]:_,["normalize"]:p,["values"]:h({},s,l)};return E}let qe=null;function ze(e){qe=e}function Ke(e,t,n){qe&&qe.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Ge=Ye("function:translate");function Ye(e){return t=>qe&&qe.emit(e,t)}const Xe=W.__EXTEND_POINT__,Qe=N(Xe),Je={NOT_FOUND_KEY:Xe,FALLBACK_TO_TRANSLATE:Qe(),CANNOT_FORMAT_NUMBER:Qe(),FALLBACK_TO_NUMBER_FORMAT:Qe(),CANNOT_FORMAT_DATE:Qe(),FALLBACK_TO_DATE_FORMAT:Qe(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Qe(),__EXTEND_POINT__:Qe()};Je.NOT_FOUND_KEY,Je.FALLBACK_TO_TRANSLATE,Je.CANNOT_FORMAT_NUMBER,Je.FALLBACK_TO_NUMBER_FORMAT,Je.CANNOT_FORMAT_DATE,Je.FALLBACK_TO_DATE_FORMAT,Je.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER;const Ze=H.__EXTEND_POINT__,et=N(Ze),tt={INVALID_ARGUMENT:Ze,INVALID_DATE_ARGUMENT:et(),INVALID_ISO_DATE_ARGUMENT:et(),NOT_SUPPORT_NON_STRING_MESSAGE:et(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:et(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:et(),NOT_SUPPORT_LOCALE_TYPE:et(),__EXTEND_POINT__:et()};function nt(e){return q(e,null,void 0)}tt.INVALID_ARGUMENT,tt.INVALID_DATE_ARGUMENT,tt.INVALID_ISO_DATE_ARGUMENT,tt.NOT_SUPPORT_NON_STRING_MESSAGE,tt.NOT_SUPPORT_LOCALE_PROMISE_VALUE,tt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION,tt.NOT_SUPPORT_LOCALE_TYPE;function rt(e,t){return null!=t.locale?ot(t.locale):ot(e.locale)}let it;function ot(e){if(y(e))return e;if(v(e)){if(e.resolvedOnce&&null!=it)return it;if("Function"===e.constructor.name){const t=e();if(E(t))throw nt(tt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return it=t}throw nt(tt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}throw nt(tt.NOT_SUPPORT_LOCALE_TYPE)}function st(e,t,n){return[...new Set([n,...g(t)?t:w(t)?Object.keys(t):y(t)?[t]:[n]])]}function at(e,t,n){const r=y(n)?n:ft,i=e;i.__localeChainCache||(i.__localeChainCache=new Map);let o=i.__localeChainCache.get(r);if(!o){o=[];let e=[n];while(g(e))e=ct(o,e,t);const s=g(t)||!C(t)?t:t["default"]?t["default"]:null;e=y(s)?[s]:s,g(e)&&ct(o,e,!1),i.__localeChainCache.set(r,o)}return o}function ct(e,t,n){let r=!0;for(let i=0;i<t.length&&b(r);i++){const o=t[i];y(o)&&(r=lt(e,t[i],n))}return r}function lt(e,t,n){let r;const i=t.split("-");do{const t=i.join("-");r=ut(e,t,n),i.splice(-1,1)}while(i.length&&!0===r);return r}function ut(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const i=t.replace(/!/g,"");e.push(i),(g(n)||C(n))&&n[i]&&(r=n[i])}return r}const ht="9.13.1",dt=-1,ft="en-US",pt="",_t=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function mt(){return{upper:(e,t)=>"text"===t&&y(e)?e.toUpperCase():"vnode"===t&&w(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&y(e)?e.toLowerCase():"vnode"===t&&w(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&y(e)?_t(e):"vnode"===t&&w(e)&&"__v_isVNode"in e?_t(e.children):e}}let gt,vt,yt;function bt(e){gt=e}function wt(e){vt=e}function Et(e){yt=e}let Tt=null;const It=e=>{Tt=e},Ct=()=>Tt;let St=null;const kt=e=>{St=e},Nt=()=>St;let Ot=0;function At(e={}){const t=v(e.onWarn)?e.onWarn:O,n=y(e.version)?e.version:ht,r=y(e.locale)||v(e.locale)?e.locale:ft,i=v(r)?ft:r,o=g(e.fallbackLocale)||C(e.fallbackLocale)||y(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:i,s=C(e.messages)?e.messages:{[i]:{}},a=C(e.datetimeFormats)?e.datetimeFormats:{[i]:{}},c=C(e.numberFormats)?e.numberFormats:{[i]:{}},u=h({},e.modifiers||{},mt()),d=e.pluralRules||{},f=v(e.missing)?e.missing:null,p=!b(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,_=!b(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,m=!!e.fallbackFormat,E=!!e.unresolving,T=v(e.postTranslation)?e.postTranslation:null,I=C(e.processor)?e.processor:null,S=!b(e.warnHtmlMessage)||e.warnHtmlMessage,k=!!e.escapeParameter,N=v(e.messageCompiler)?e.messageCompiler:gt;const A=v(e.messageResolver)?e.messageResolver:vt||Le,P=v(e.localeFallbacker)?e.localeFallbacker:yt||st,R=w(e.fallbackContext)?e.fallbackContext:void 0,x=e,L=w(x.__datetimeFormatters)?x.__datetimeFormatters:new Map,D=w(x.__numberFormatters)?x.__numberFormatters:new Map,M=w(x.__meta)?x.__meta:{};Ot++;const F={version:n,cid:Ot,locale:r,fallbackLocale:o,messages:s,modifiers:u,pluralRules:d,missing:f,missingWarn:p,fallbackWarn:_,fallbackFormat:m,unresolving:E,postTranslation:T,processor:I,warnHtmlMessage:S,escapeParameter:k,messageCompiler:N,messageResolver:A,localeFallbacker:P,fallbackContext:R,onWarn:t,__meta:M};return F.datetimeFormats=a,F.numberFormats=c,F.__datetimeFormatters=L,F.__numberFormatters=D,__INTLIFY_PROD_DEVTOOLS__&&Ke(F,n,M),F}function Pt(e,t,n,r,i){const{missing:o,onWarn:s}=e;if(null!==o){const r=o(e,n,t,i);return y(r)?r:t}return t}function Rt(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function xt(e,t){return e!==t&&e.split("-")[0]===t.split("-")[0]}function Lt(e,t){const n=t.indexOf(e);if(-1===n)return!1;for(let r=n+1;r<t.length;r++)if(xt(e,t[r]))return!0;return!1}function Dt(e){const t=t=>Mt(t,e);return t}function Mt(e,t){const n=t.b||t.body;if(1===(n.t||n.type)){const t=n,r=t.c||t.cases;return e.plural(r.reduce(((t,n)=>[...t,Ft(e,n)]),[]))}return Ft(e,n)}function Ft(e,t){const n=t.s||t.static;if(n)return"text"===e.type?n:e.normalize([n]);{const n=(t.i||t.items).reduce(((t,n)=>[...t,Ut(e,n)]),[]);return e.normalize(n)}}function Ut(e,t){const n=t.t||t.type;switch(n){case 3:{const e=t;return e.v||e.value}case 9:{const e=t;return e.v||e.value}case 4:{const n=t;return e.interpolate(e.named(n.k||n.key))}case 5:{const n=t;return e.interpolate(e.list(null!=n.i?n.i:n.index))}case 6:{const n=t,r=n.m||n.modifier;return e.linked(Ut(e,n.k||n.key),r?Ut(e,r):void 0,e.type)}case 7:{const e=t;return e.v||e.value}case 8:{const e=t;return e.v||e.value}default:throw new Error(`unhandled node type on format message part: ${n}`)}}const jt=e=>e;let Wt=Object.create(null);const $t=e=>w(e)&&(0===e.t||0===e.type)&&("b"in e||"body"in e);function Vt(e,t={}){let n=!1;const r=t.onError||z;return t.onError=e=>{n=!0,r(e)},{...Ie(e,t),detectError:n}}const Ht=(e,t)=>{if(!y(e))throw nt(tt.NOT_SUPPORT_NON_STRING_MESSAGE);{!b(t.warnHtmlMessage)||t.warnHtmlMessage;const n=t.onCacheKey||jt,r=n(e),i=Wt[r];if(i)return i;const{code:o,detectError:s}=Vt(e,t),a=new Function(`return ${o}`)();return s?a:Wt[r]=a}};function Bt(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&y(e)){!b(t.warnHtmlMessage)||t.warnHtmlMessage;const n=t.onCacheKey||jt,r=n(e),i=Wt[r];if(i)return i;const{ast:o,detectError:s}=Vt(e,{...t,location:!1,jit:!0}),a=Dt(o);return s?a:Wt[r]=a}{0;const t=e.cacheKey;if(t){const n=Wt[t];return n||(Wt[t]=Dt(e))}return Dt(e)}}const qt=()=>"",zt=e=>v(e);function Kt(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:i,messageCompiler:o,fallbackLocale:s,messages:a}=e,[c,l]=Jt(...t),u=b(l.missingWarn)?l.missingWarn:e.missingWarn,d=b(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,f=b(l.escapeParameter)?l.escapeParameter:e.escapeParameter,p=!!l.resolvedMessage,_=y(l.default)||b(l.default)?b(l.default)?o?c:()=>c:l.default:n?o?c:()=>c:"",m=n||""!==_,g=rt(e,l);f&&Gt(l);let[v,w,E]=p?[c,g,a[g]||{}]:Yt(e,c,g,s,d,u),T=v,I=c;if(p||y(T)||$t(T)||zt(T)||m&&(T=_,I=T),!p&&(!(y(T)||$t(T)||zt(T))||!y(w)))return i?dt:c;let C=!1;const S=()=>{C=!0},k=zt(T)?T:Xt(e,c,w,T,I,S);if(C)return T;const N=en(e,w,E,l),O=Be(N),A=Qt(e,k,O),P=r?r(A,c):A;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:y(c)?c:zt(T)?T.key:"",locale:w||(zt(T)?T.locale:""),format:y(T)?T:zt(T)?T.source:"",message:P};t.meta=h({},e.__meta,Ct()||{}),Ge(t)}return P}function Gt(e){g(e.list)?e.list=e.list.map((e=>y(e)?p(e):e)):w(e.named)&&Object.keys(e.named).forEach((t=>{y(e.named[t])&&(e.named[t]=p(e.named[t]))}))}function Yt(e,t,n,r,i,o){const{messages:s,onWarn:a,messageResolver:c,localeFallbacker:l}=e,u=l(e,r,n);let h,d={},f=null,p=n,_=null;const m="translate";for(let g=0;g<u.length;g++){h=_=u[g],d=s[h]||{};if(null===(f=c(d,t))&&(f=d[t]),y(f)||$t(f)||zt(f))break;if(!Lt(h,u)){const n=Pt(e,t,h,o,m);n!==t&&(f=n)}p=_}return[f,h,d]}function Xt(e,t,n,r,i,o){const{messageCompiler:s,warnHtmlMessage:a}=e;if(zt(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==s){const e=()=>r;return e.locale=n,e.key=t,e}const c=s(r,Zt(e,n,i,r,a,o));return c.locale=n,c.key=t,c.source=r,c}function Qt(e,t,n){const r=t(n);return r}function Jt(...e){const[t,n,r]=e,i={};if(!y(t)&&!a(t)&&!zt(t)&&!$t(t))throw nt(tt.INVALID_ARGUMENT);const o=a(t)?String(t):(zt(t),t);return a(n)?i.plural=n:y(n)?i.default=n:C(n)&&!u(n)?i.named=n:g(n)&&(i.list=n),a(r)?i.plural=r:y(r)?i.default=r:C(r)&&h(i,r),[o,i]}function Zt(e,t,n,r,i,s){return{locale:t,key:n,warnHtmlMessage:i,onError:e=>{throw s&&s(e),e},onCacheKey:e=>o(t,n,e)}}function en(e,t,n,r){const{modifiers:i,pluralRules:o,messageResolver:s,fallbackLocale:c,fallbackWarn:l,missingWarn:u,fallbackContext:h}=e,d=r=>{let i=s(n,r);if(null==i&&h){const[,,e]=Yt(h,r,t,c,l,u);i=s(e,r)}if(y(i)||$t(i)){let n=!1;const o=()=>{n=!0},s=Xt(e,r,t,i,r,o);return n?qt:s}return zt(i)?i:qt},f={locale:t,modifiers:i,pluralRules:o,messages:d};return e.processor&&(f.processor=e.processor),r.list&&(f.list=r.list),r.named&&(f.named=r.named),a(r.plural)&&(f.pluralIndex=r.plural),f}const tn="undefined"!==typeof Intl;tn&&Intl.DateTimeFormat,tn&&Intl.NumberFormat;function nn(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:i,onWarn:o,localeFallbacker:s}=e,{__datetimeFormatters:a}=e;const[c,l,d,f]=on(...t),p=b(d.missingWarn)?d.missingWarn:e.missingWarn,_=(b(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,!!d.part),m=rt(e,d),g=s(e,i,m);if(!y(c)||""===c)return new Intl.DateTimeFormat(m,f).format(l);let v,w={},E=null,T=m,I=null;const S="datetime format";for(let u=0;u<g.length;u++){if(v=I=g[u],w=n[v]||{},E=w[c],C(E))break;Pt(e,c,v,p,S),T=I}if(!C(E)||!y(v))return r?dt:c;let k=`${v}__${c}`;u(f)||(k=`${k}__${JSON.stringify(f)}`);let N=a.get(k);return N||(N=new Intl.DateTimeFormat(v,h({},E,f)),a.set(k,N)),_?N.formatToParts(l):N.format(l)}const rn=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function on(...e){const[t,n,r,i]=e,o={};let s,l={};if(y(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw nt(tt.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();s=new Date(n);try{s.toISOString()}catch(u){throw nt(tt.INVALID_ISO_DATE_ARGUMENT)}}else if(c(t)){if(isNaN(t.getTime()))throw nt(tt.INVALID_DATE_ARGUMENT);s=t}else{if(!a(t))throw nt(tt.INVALID_ARGUMENT);s=t}return y(n)?o.key=n:C(n)&&Object.keys(n).forEach((e=>{rn.includes(e)?l[e]=n[e]:o[e]=n[e]})),y(r)?o.locale=r:C(r)&&(l=r),C(i)&&(l=i),[o.key||"",s,o,l]}function sn(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function an(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:i,onWarn:o,localeFallbacker:s}=e,{__numberFormatters:a}=e;const[c,l,d,f]=ln(...t),p=b(d.missingWarn)?d.missingWarn:e.missingWarn,_=(b(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,!!d.part),m=rt(e,d),g=s(e,i,m);if(!y(c)||""===c)return new Intl.NumberFormat(m,f).format(l);let v,w={},E=null,T=m,I=null;const S="number format";for(let u=0;u<g.length;u++){if(v=I=g[u],w=n[v]||{},E=w[c],C(E))break;Pt(e,c,v,p,S),T=I}if(!C(E)||!y(v))return r?dt:c;let k=`${v}__${c}`;u(f)||(k=`${k}__${JSON.stringify(f)}`);let N=a.get(k);return N||(N=new Intl.NumberFormat(v,h({},E,f)),a.set(k,N)),_?N.formatToParts(l):N.format(l)}const cn=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ln(...e){const[t,n,r,i]=e,o={};let s={};if(!a(t))throw nt(tt.INVALID_ARGUMENT);const c=t;return y(n)?o.key=n:C(n)&&Object.keys(n).forEach((e=>{cn.includes(e)?s[e]=n[e]:o[e]=n[e]})),y(r)?o.locale=r:C(r)&&(s=r),C(i)&&(s=i),[o.key||"",c,o,s]}function un(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}Ce();var hn=n(6768),dn=n(144);
/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const fn="9.13.1";function pn(){"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(f().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(f().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_JIT_COMPILATION__&&(f().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!==typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(f().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(f().__INTLIFY_PROD_DEVTOOLS__=!1)}const _n=Je.__EXTEND_POINT__,mn=N(_n),gn={FALLBACK_TO_ROOT:_n,NOT_SUPPORTED_PRESERVE:mn(),NOT_SUPPORTED_FORMATTER:mn(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:mn(),NOT_SUPPORTED_GET_CHOICE_INDEX:mn(),COMPONENT_NAME_LEGACY_COMPATIBLE:mn(),NOT_FOUND_PARENT_SCOPE:mn(),IGNORE_OBJ_FLATTEN:mn(),NOTICE_DROP_ALLOW_COMPOSITION:mn(),NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG:mn()};gn.FALLBACK_TO_ROOT,gn.NOT_SUPPORTED_PRESERVE,gn.NOT_SUPPORTED_FORMATTER,gn.NOT_SUPPORTED_PRESERVE_DIRECTIVE,gn.NOT_SUPPORTED_GET_CHOICE_INDEX,gn.COMPONENT_NAME_LEGACY_COMPATIBLE,gn.NOT_FOUND_PARENT_SCOPE,gn.IGNORE_OBJ_FLATTEN,gn.NOTICE_DROP_ALLOW_COMPOSITION,gn.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG;const vn=tt.__EXTEND_POINT__,yn=N(vn),bn={UNEXPECTED_RETURN_TYPE:vn,INVALID_ARGUMENT:yn(),MUST_BE_CALL_SETUP_TOP:yn(),NOT_INSTALLED:yn(),NOT_AVAILABLE_IN_LEGACY_MODE:yn(),REQUIRED_VALUE:yn(),INVALID_VALUE:yn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:yn(),NOT_INSTALLED_WITH_PROVIDE:yn(),UNEXPECTED_ERROR:yn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:yn(),BRIDGE_SUPPORT_VUE_2_ONLY:yn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:yn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:yn(),__EXTEND_POINT__:yn()};function wn(e,...t){return q(e,null,void 0)}bn.UNEXPECTED_RETURN_TYPE,bn.INVALID_ARGUMENT,bn.MUST_BE_CALL_SETUP_TOP,bn.NOT_INSTALLED,bn.UNEXPECTED_ERROR,bn.NOT_AVAILABLE_IN_LEGACY_MODE,bn.REQUIRED_VALUE,bn.INVALID_VALUE,bn.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,bn.NOT_INSTALLED_WITH_PROVIDE,bn.NOT_COMPATIBLE_LEGACY_VUE_I18N,bn.BRIDGE_SUPPORT_VUE_2_ONLY,bn.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,bn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const En=i("__translateVNode"),Tn=i("__datetimeParts"),In=i("__numberParts"),Cn=i("__setPluralRules");i("__intlifyMeta");const Sn=i("__injectWithOption"),kn=i("__dispose");function Nn(e){if(!w(e))return e;for(const t in e)if(m(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let i=e,o=!1;for(let e=0;e<r;e++){if(n[e]in i||(i[n[e]]={}),!w(i[n[e]])){o=!0;break}i=i[n[e]]}o||(i[n[r]]=e[t],delete e[t]),w(i[n[r]])&&Nn(i[n[r]])}else w(e[t])&&Nn(e[t]);return e}function On(e,t){const{messages:n,__i18n:r,messageResolver:i,flatJson:o}=t,s=C(n)?n:g(r)?{}:{[e]:{}};if(g(r)&&r.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:t,resource:n}=e;t?(s[t]=s[t]||{},P(n,s[t])):P(n,s)}else y(e)&&P(JSON.parse(e),s)})),null==i&&o)for(const a in s)m(s,a)&&Nn(s[a]);return s}function An(e){return e.type}function Pn(e,t,n){let r=w(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=On(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const i=Object.keys(r);if(i.length&&i.forEach((t=>{e.mergeLocaleMessage(t,r[t])})),w(t.datetimeFormats)){const n=Object.keys(t.datetimeFormats);n.length&&n.forEach((n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])}))}if(w(t.numberFormats)){const n=Object.keys(t.numberFormats);n.length&&n.forEach((n=>{e.mergeNumberFormat(n,t.numberFormats[n])}))}}function Rn(e){return(0,hn.bF)(hn.EY,null,e,0)}const xn="__INTLIFY_META__",Ln=()=>[],Dn=()=>!1;let Mn=0;function Fn(e){return(t,n,r,i)=>e(n,r,(0,hn.nI)()||void 0,i)}const Un=()=>{const e=(0,hn.nI)();let t=null;return e&&(t=An(e)[xn])?{[xn]:t}:null};function jn(e={},t){const{__root:n,__injectWithOption:i}=e,o=void 0===n,s=e.flatJson,c=r?dn.KR:dn.IJ,u=!!e.translateExistCompatible;let d=!b(e.inheritLocale)||e.inheritLocale;const f=c(n&&d?n.locale.value:y(e.locale)?e.locale:ft),p=c(n&&d?n.fallbackLocale.value:y(e.fallbackLocale)||g(e.fallbackLocale)||C(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:f.value),_=c(On(f.value,e)),E=c(C(e.datetimeFormats)?e.datetimeFormats:{[f.value]:{}}),T=c(C(e.numberFormats)?e.numberFormats:{[f.value]:{}});let I=n?n.missingWarn:!b(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,S=n?n.fallbackWarn:!b(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,k=n?n.fallbackRoot:!b(e.fallbackRoot)||e.fallbackRoot,N=!!e.fallbackFormat,O=v(e.missing)?e.missing:null,A=v(e.missing)?Fn(e.missing):null,R=v(e.postTranslation)?e.postTranslation:null,x=n?n.warnHtmlMessage:!b(e.warnHtmlMessage)||e.warnHtmlMessage,L=!!e.escapeParameter;const D=n?n.modifiers:C(e.modifiers)?e.modifiers:{};let M,F=e.pluralRules||n&&n.pluralRules;const U=()=>{o&&kt(null);const t={version:fn,locale:f.value,fallbackLocale:p.value,messages:_.value,modifiers:D,pluralRules:F,missing:null===A?void 0:A,missingWarn:I,fallbackWarn:S,fallbackFormat:N,unresolving:!0,postTranslation:null===R?void 0:R,warnHtmlMessage:x,escapeParameter:L,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};t.datetimeFormats=E.value,t.numberFormats=T.value,t.__datetimeFormatters=C(M)?M.__datetimeFormatters:void 0,t.__numberFormatters=C(M)?M.__numberFormatters:void 0;const n=At(t);return o&&kt(n),n};function j(){return[f.value,p.value,_.value,E.value,T.value]}M=U(),Rt(M,f.value,p.value);const W=(0,hn.EW)({get:()=>f.value,set:e=>{f.value=e,M.locale=f.value}}),$=(0,hn.EW)({get:()=>p.value,set:e=>{p.value=e,M.fallbackLocale=p.value,Rt(M,f.value,e)}}),V=(0,hn.EW)((()=>_.value)),H=(0,hn.EW)((()=>E.value)),B=(0,hn.EW)((()=>T.value));function q(){return v(R)?R:null}function z(e){R=e,M.postTranslation=e}function K(){return O}function G(e){null!==e&&(A=Fn(e)),O=e,M.missing=A}const Y=(e,t,r,i,s,c)=>{let l;j();try{__INTLIFY_PROD_DEVTOOLS__&&It(Un()),o||(M.fallbackContext=n?Nt():void 0),l=e(M)}finally{__INTLIFY_PROD_DEVTOOLS__&&It(null),o||(M.fallbackContext=void 0)}if("translate exists"!==r&&a(l)&&l===dt||"translate exists"===r&&!l){const[e,r]=t();return n&&k?i(n):s(e)}if(c(l))return l;throw wn(bn.UNEXPECTED_RETURN_TYPE)};function X(...e){return Y((t=>Reflect.apply(Kt,null,[t,...e])),(()=>Jt(...e)),"translate",(t=>Reflect.apply(t.t,t,[...e])),(e=>e),(e=>y(e)))}function Q(...e){const[t,n,r]=e;if(r&&!w(r))throw wn(bn.INVALID_ARGUMENT);return X(t,n,h({resolvedMessage:!0},r||{}))}function J(...e){return Y((t=>Reflect.apply(nn,null,[t,...e])),(()=>on(...e)),"datetime format",(t=>Reflect.apply(t.d,t,[...e])),(()=>pt),(e=>y(e)))}function Z(...e){return Y((t=>Reflect.apply(an,null,[t,...e])),(()=>ln(...e)),"number format",(t=>Reflect.apply(t.n,t,[...e])),(()=>pt),(e=>y(e)))}function ee(e){return e.map((e=>y(e)||a(e)||b(e)?Rn(String(e)):e))}const te=e=>e,ne={normalize:ee,interpolate:te,type:"vnode"};function re(...e){return Y((t=>{let n;const r=t;try{r.processor=ne,n=Reflect.apply(Kt,null,[r,...e])}finally{r.processor=null}return n}),(()=>Jt(...e)),"translate",(t=>t[En](...e)),(e=>[Rn(e)]),(e=>g(e)))}function ie(...e){return Y((t=>Reflect.apply(an,null,[t,...e])),(()=>ln(...e)),"number format",(t=>t[In](...e)),Ln,(e=>y(e)||g(e)))}function oe(...e){return Y((t=>Reflect.apply(nn,null,[t,...e])),(()=>on(...e)),"datetime format",(t=>t[Tn](...e)),Ln,(e=>y(e)||g(e)))}function se(e){F=e,M.pluralRules=F}function ae(e,t){return Y((()=>{if(!e)return!1;const n=y(t)?t:f.value,r=ue(n),i=M.messageResolver(r,e);return u?null!=i:$t(i)||zt(i)||y(i)}),(()=>[e]),"translate exists",(n=>Reflect.apply(n.te,n,[e,t])),Dn,(e=>b(e)))}function ce(e){let t=null;const n=at(M,p.value,f.value);for(let r=0;r<n.length;r++){const i=_.value[n[r]]||{},o=M.messageResolver(i,e);if(null!=o){t=o;break}}return t}function le(e){const t=ce(e);return null!=t?t:n&&n.tm(e)||{}}function ue(e){return _.value[e]||{}}function he(e,t){if(s){const n={[e]:t};for(const e in n)m(n,e)&&Nn(n[e]);t=n[e]}_.value[e]=t,M.messages=_.value}function de(e,t){_.value[e]=_.value[e]||{};const n={[e]:t};if(s)for(const r in n)m(n,r)&&Nn(n[r]);t=n[e],P(t,_.value[e]),M.messages=_.value}function fe(e){return E.value[e]||{}}function pe(e,t){E.value[e]=t,M.datetimeFormats=E.value,sn(M,e,t)}function _e(e,t){E.value[e]=h(E.value[e]||{},t),M.datetimeFormats=E.value,sn(M,e,t)}function me(e){return T.value[e]||{}}function ge(e,t){T.value[e]=t,M.numberFormats=T.value,un(M,e,t)}function ve(e,t){T.value[e]=h(T.value[e]||{},t),M.numberFormats=T.value,un(M,e,t)}Mn++,n&&r&&((0,hn.wB)(n.locale,(e=>{d&&(f.value=e,M.locale=e,Rt(M,f.value,p.value))})),(0,hn.wB)(n.fallbackLocale,(e=>{d&&(p.value=e,M.fallbackLocale=e,Rt(M,f.value,p.value))})));const ye={id:Mn,locale:W,fallbackLocale:$,get inheritLocale(){return d},set inheritLocale(e){d=e,e&&n&&(f.value=n.locale.value,p.value=n.fallbackLocale.value,Rt(M,f.value,p.value))},get availableLocales(){return Object.keys(_.value).sort()},messages:V,get modifiers(){return D},get pluralRules(){return F||{}},get isGlobal(){return o},get missingWarn(){return I},set missingWarn(e){I=e,M.missingWarn=I},get fallbackWarn(){return S},set fallbackWarn(e){S=e,M.fallbackWarn=S},get fallbackRoot(){return k},set fallbackRoot(e){k=e},get fallbackFormat(){return N},set fallbackFormat(e){N=e,M.fallbackFormat=N},get warnHtmlMessage(){return x},set warnHtmlMessage(e){x=e,M.warnHtmlMessage=e},get escapeParameter(){return L},set escapeParameter(e){L=e,M.escapeParameter=e},t:X,getLocaleMessage:ue,setLocaleMessage:he,mergeLocaleMessage:de,getPostTranslationHandler:q,setPostTranslationHandler:z,getMissingHandler:K,setMissingHandler:G,[Cn]:se};return ye.datetimeFormats=H,ye.numberFormats=B,ye.rt=Q,ye.te=ae,ye.tm=le,ye.d=J,ye.n=Z,ye.getDateTimeFormat=fe,ye.setDateTimeFormat=pe,ye.mergeDateTimeFormat=_e,ye.getNumberFormat=me,ye.setNumberFormat=ge,ye.mergeNumberFormat=ve,ye[Sn]=i,ye[En]=re,ye[Tn]=oe,ye[In]=ie,ye}function Wn(e){const t=y(e.locale)?e.locale:ft,n=y(e.fallbackLocale)||g(e.fallbackLocale)||C(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,r=v(e.missing)?e.missing:void 0,i=!b(e.silentTranslationWarn)&&!l(e.silentTranslationWarn)||!e.silentTranslationWarn,o=!b(e.silentFallbackWarn)&&!l(e.silentFallbackWarn)||!e.silentFallbackWarn,s=!b(e.fallbackRoot)||e.fallbackRoot,a=!!e.formatFallbackMessages,c=C(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,d=v(e.postTranslation)?e.postTranslation:void 0,f=!y(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,p=!!e.escapeParameterHtml,_=!b(e.sync)||e.sync;let m=e.messages;if(C(e.sharedMessages)){const t=e.sharedMessages,n=Object.keys(t);m=n.reduce(((e,n)=>{const r=e[n]||(e[n]={});return h(r,t[n]),e}),m||{})}const{__i18n:w,__root:E,__injectWithOption:T}=e,I=e.datetimeFormats,S=e.numberFormats,k=e.flatJson,N=e.translateExistCompatible;return{locale:t,fallbackLocale:n,messages:m,flatJson:k,datetimeFormats:I,numberFormats:S,missing:r,missingWarn:i,fallbackWarn:o,fallbackRoot:s,fallbackFormat:a,modifiers:c,pluralRules:u,postTranslation:d,warnHtmlMessage:f,escapeParameter:p,messageResolver:e.messageResolver,inheritLocale:_,translateExistCompatible:N,__i18n:w,__root:E,__injectWithOption:T}}function $n(e={},t){{const t=jn(Wn(e)),{__extender:n}=e,r={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return b(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=b(e)?!e:e},get silentFallbackWarn(){return b(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=b(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){t.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...e){const[n,r,i]=e,o={};let s=null,a=null;if(!y(n))throw wn(bn.INVALID_ARGUMENT);const c=n;return y(r)?o.locale=r:g(r)?s=r:C(r)&&(a=r),g(i)?s=i:C(i)&&(a=i),Reflect.apply(t.t,t,[c,s||a||{},o])},rt(...e){return Reflect.apply(t.rt,t,[...e])},tc(...e){const[n,r,i]=e,o={plural:1};let s=null,c=null;if(!y(n))throw wn(bn.INVALID_ARGUMENT);const l=n;return y(r)?o.locale=r:a(r)?o.plural=r:g(r)?s=r:C(r)&&(c=r),y(i)?o.locale=i:g(i)?s=i:C(i)&&(c=i),Reflect.apply(t.t,t,[l,s||c||{},o])},te(e,n){return t.te(e,n)},tm(e){return t.tm(e)},getLocaleMessage(e){return t.getLocaleMessage(e)},setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d(...e){return Reflect.apply(t.d,t,[...e])},getDateTimeFormat(e){return t.getDateTimeFormat(e)},setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n(...e){return Reflect.apply(t.n,t,[...e])},getNumberFormat(e){return t.getNumberFormat(e)},setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)},getChoiceIndex(e,t){return-1}};return r.__extender=n,r}}const Vn={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function Hn({slots:e},t){if(1===t.length&&"default"===t[0]){const t=e.default?e.default():[];return t.reduce(((e,t)=>[...e,...t.type===hn.FK?t.children:[t]]),[])}return t.reduce(((t,n)=>{const r=e[n];return r&&(t[n]=r()),t}),{})}function Bn(e){return hn.FK}const qn=(0,hn.pM)({name:"i18n-t",props:h({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>a(e)||!isNaN(e)}},Vn),setup(e,t){const{slots:n,attrs:r}=t,i=e.i18n||cr({useScope:e.scope,__useComponent:!0});return()=>{const o=Object.keys(n).filter((e=>"_"!==e)),s={};e.locale&&(s.locale=e.locale),void 0!==e.plural&&(s.plural=y(e.plural)?+e.plural:e.plural);const a=Hn(t,o),c=i[En](e.keypath,a,s),l=h({},r),u=y(e.tag)||w(e.tag)?e.tag:Bn();return(0,hn.h)(u,l,c)}}}),zn=qn;function Kn(e){return g(e)&&!y(e[0])}function Gn(e,t,n,r){const{slots:i,attrs:o}=t;return()=>{const t={part:!0};let s={};e.locale&&(t.locale=e.locale),y(e.format)?t.key=e.format:w(e.format)&&(y(e.format.key)&&(t.key=e.format.key),s=Object.keys(e.format).reduce(((t,r)=>n.includes(r)?h({},t,{[r]:e.format[r]}):t),{}));const a=r(e.value,t,s);let c=[t.key];g(a)?c=a.map(((e,t)=>{const n=i[e.type],r=n?n({[e.type]:e.value,index:t,parts:a}):[e.value];return Kn(r)&&(r[0].key=`${e.type}-${t}`),r})):y(a)&&(c=[a]);const l=h({},o),u=y(e.tag)||w(e.tag)?e.tag:Bn();return(0,hn.h)(u,l,c)}}const Yn=(0,hn.pM)({name:"i18n-n",props:h({value:{type:Number,required:!0},format:{type:[String,Object]}},Vn),setup(e,t){const n=e.i18n||cr({useScope:e.scope,__useComponent:!0});return Gn(e,t,cn,((...e)=>n[In](...e)))}}),Xn=Yn,Qn=(0,hn.pM)({name:"i18n-d",props:h({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Vn),setup(e,t){const n=e.i18n||cr({useScope:e.scope,__useComponent:!0});return Gn(e,t,rn,((...e)=>n[Tn](...e)))}}),Jn=Qn;function Zn(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}function er(e){const t=t=>{const{instance:n,modifiers:r,value:i}=t;if(!n||!n.$)throw wn(bn.UNEXPECTED_ERROR);const o=Zn(e,n.$);const s=tr(i);return[Reflect.apply(o.t,o,[...nr(s)]),o]},n=(n,i)=>{const[o,s]=t(i);r&&e.global===s&&(n.__i18nWatcher=(0,hn.wB)(s.locale,(()=>{i.instance&&i.instance.$forceUpdate()}))),n.__composer=s,n.textContent=o},i=e=>{r&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},o=(e,{value:t})=>{if(e.__composer){const n=e.__composer,r=tr(t);e.textContent=Reflect.apply(n.t,n,[...nr(r)])}},s=e=>{const[n]=t(e);return{textContent:n}};return{created:n,unmounted:i,beforeUpdate:o,getSSRProps:s}}function tr(e){if(y(e))return{path:e};if(C(e)){if(!("path"in e))throw wn(bn.REQUIRED_VALUE,"path");return e}throw wn(bn.INVALID_VALUE)}function nr(e){const{path:t,locale:n,args:r,choice:i,plural:o}=e,s={},c=r||{};return y(n)&&(s.locale=n),a(i)&&(s.plural=i),a(o)&&(s.plural=o),[t,c,s]}function rr(e,t,...n){const r=C(n[0])?n[0]:{},i=!!r.useI18nComponentName,o=!b(r.globalInstall)||r.globalInstall;o&&([i?"i18n":zn.name,"I18nT"].forEach((t=>e.component(t,zn))),[Xn.name,"I18nN"].forEach((t=>e.component(t,Xn))),[Jn.name,"I18nD"].forEach((t=>e.component(t,Jn)))),e.directive("t",er(t))}function ir(e,t,n){return{beforeCreate(){const r=(0,hn.nI)();if(!r)throw wn(bn.UNEXPECTED_ERROR);const i=this.$options;if(i.i18n){const r=i.i18n;if(i.__i18n&&(r.__i18n=i.__i18n),r.__root=t,this===this.$root)this.$i18n=or(e,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=$n(r);const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else if(i.__i18n)if(this===this.$root)this.$i18n=or(e,i);else{this.$i18n=$n({__i18n:i.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}else this.$i18n=e;i.__i18nGlobal&&Pn(t,i,i),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e),n.__setInstance(r,this.$i18n)},mounted(){0},unmounted(){const e=(0,hn.nI)();if(!e)throw wn(bn.UNEXPECTED_ERROR);const t=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__disposer&&(t.__disposer(),delete t.__disposer,delete t.__extender),n.__deleteInstance(e),delete this.$i18n}}}function or(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[Cn](t.pluralizationRules||e.pluralizationRules);const n=On(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach((t=>e.mergeLocaleMessage(t,n[t]))),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach((n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n]))),t.numberFormats&&Object.keys(t.numberFormats).forEach((n=>e.mergeNumberFormat(n,t.numberFormats[n]))),e}const sr=i("global-vue-i18n");function ar(e={},t){const n=__VUE_I18N_LEGACY_API__&&b(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=!b(e.globalInjection)||e.globalInjection,o=!__VUE_I18N_LEGACY_API__||!n||!!e.allowComposition,s=new Map,[a,c]=lr(e,n),l=i("");function u(e){return s.get(e)||null}function h(e,t){s.set(e,t)}function d(e){s.delete(e)}{const e={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return o},async install(t,...i){if(t.__VUE_I18N_SYMBOL__=l,t.provide(t.__VUE_I18N_SYMBOL__,e),C(i[0])){const t=i[0];e.__composerExtend=t.__composerExtend,e.__vueI18nExtend=t.__vueI18nExtend}let o=null;!n&&r&&(o=yr(t,e.global)),__VUE_I18N_FULL_INSTALL__&&rr(t,e,...i),__VUE_I18N_LEGACY_API__&&n&&t.mixin(ir(c,c.__composer,e));const s=t.unmount;t.unmount=()=>{o&&o(),e.dispose(),s()}},get global(){return c},dispose(){a.stop()},__instances:s,__getInstance:u,__setInstance:h,__deleteInstance:d};return e}}function cr(e={}){const t=(0,hn.nI)();if(null==t)throw wn(bn.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&null!=t.appContext.app&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw wn(bn.NOT_INSTALLED);const n=ur(t),r=dr(n),i=An(t),o=hr(e,i);if(__VUE_I18N_LEGACY_API__&&"legacy"===n.mode&&!e.__useComponent){if(!n.allowComposition)throw wn(bn.NOT_AVAILABLE_IN_LEGACY_MODE);return mr(t,o,r,e)}if("global"===o)return Pn(r,e,i),r;if("parent"===o){let i=fr(n,t,e.__useComponent);return null==i&&(i=r),i}const s=n;let a=s.__getInstance(t);if(null==a){const n=h({},e);"__i18n"in i&&(n.__i18n=i.__i18n),r&&(n.__root=r),a=jn(n),s.__composerExtend&&(a[kn]=s.__composerExtend(a)),_r(s,t,a),s.__setInstance(t,a)}return a}function lr(e,t,n){const r=(0,dn.uY)();{const n=__VUE_I18N_LEGACY_API__&&t?r.run((()=>$n(e))):r.run((()=>jn(e)));if(null==n)throw wn(bn.UNEXPECTED_ERROR);return[r,n]}}function ur(e){{const t=(0,hn.WQ)(e.isCE?sr:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw wn(e.isCE?bn.NOT_INSTALLED_WITH_PROVIDE:bn.UNEXPECTED_ERROR);return t}}function hr(e,t){return u(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function dr(e){return"composition"===e.mode?e.global:e.global.__composer}function fr(e,t,n=!1){let r=null;const i=t.root;let o=pr(t,n);while(null!=o){const t=e;if("composition"===e.mode)r=t.__getInstance(o);else if(__VUE_I18N_LEGACY_API__){const e=t.__getInstance(o);null!=e&&(r=e.__composer,n&&r&&!r[Sn]&&(r=null))}if(null!=r)break;if(i===o)break;o=o.parent}return r}function pr(e,t=!1){return null==e?null:t&&e.vnode.ctx||e.parent}function _r(e,t,n){(0,hn.sV)((()=>{0}),t),(0,hn.hi)((()=>{const r=n;e.__deleteInstance(t);const i=r[kn];i&&(i(),delete r[kn])}),t)}function mr(e,t,n,r={}){const i="local"===t,o=(0,dn.IJ)(null);if(i&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw wn(bn.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=b(r.inheritLocale)?r.inheritLocale:!y(r.locale),a=(0,dn.KR)(!i||s?n.locale.value:y(r.locale)?r.locale:ft),c=(0,dn.KR)(!i||s?n.fallbackLocale.value:y(r.fallbackLocale)||g(r.fallbackLocale)||C(r.fallbackLocale)||!1===r.fallbackLocale?r.fallbackLocale:a.value),u=(0,dn.KR)(On(a.value,r)),h=(0,dn.KR)(C(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),d=(0,dn.KR)(C(r.numberFormats)?r.numberFormats:{[a.value]:{}}),f=i?n.missingWarn:!b(r.missingWarn)&&!l(r.missingWarn)||r.missingWarn,p=i?n.fallbackWarn:!b(r.fallbackWarn)&&!l(r.fallbackWarn)||r.fallbackWarn,_=i?n.fallbackRoot:!b(r.fallbackRoot)||r.fallbackRoot,m=!!r.fallbackFormat,w=v(r.missing)?r.missing:null,E=v(r.postTranslation)?r.postTranslation:null,T=i?n.warnHtmlMessage:!b(r.warnHtmlMessage)||r.warnHtmlMessage,I=!!r.escapeParameter,S=i?n.modifiers:C(r.modifiers)?r.modifiers:{},k=r.pluralRules||i&&n.pluralRules;function N(){return[a.value,c.value,u.value,h.value,d.value]}const O=(0,hn.EW)({get:()=>o.value?o.value.locale.value:a.value,set:e=>{o.value&&(o.value.locale.value=e),a.value=e}}),A=(0,hn.EW)({get:()=>o.value?o.value.fallbackLocale.value:c.value,set:e=>{o.value&&(o.value.fallbackLocale.value=e),c.value=e}}),P=(0,hn.EW)((()=>o.value?o.value.messages.value:u.value)),R=(0,hn.EW)((()=>h.value)),x=(0,hn.EW)((()=>d.value));function L(){return o.value?o.value.getPostTranslationHandler():E}function D(e){o.value&&o.value.setPostTranslationHandler(e)}function M(){return o.value?o.value.getMissingHandler():w}function F(e){o.value&&o.value.setMissingHandler(e)}function U(e){return N(),e()}function j(...e){return o.value?U((()=>Reflect.apply(o.value.t,null,[...e]))):U((()=>""))}function W(...e){return o.value?Reflect.apply(o.value.rt,null,[...e]):""}function $(...e){return o.value?U((()=>Reflect.apply(o.value.d,null,[...e]))):U((()=>""))}function V(...e){return o.value?U((()=>Reflect.apply(o.value.n,null,[...e]))):U((()=>""))}function H(e){return o.value?o.value.tm(e):{}}function B(e,t){return!!o.value&&o.value.te(e,t)}function q(e){return o.value?o.value.getLocaleMessage(e):{}}function z(e,t){o.value&&(o.value.setLocaleMessage(e,t),u.value[e]=t)}function K(e,t){o.value&&o.value.mergeLocaleMessage(e,t)}function G(e){return o.value?o.value.getDateTimeFormat(e):{}}function Y(e,t){o.value&&(o.value.setDateTimeFormat(e,t),h.value[e]=t)}function X(e,t){o.value&&o.value.mergeDateTimeFormat(e,t)}function Q(e){return o.value?o.value.getNumberFormat(e):{}}function J(e,t){o.value&&(o.value.setNumberFormat(e,t),d.value[e]=t)}function Z(e,t){o.value&&o.value.mergeNumberFormat(e,t)}const ee={get id(){return o.value?o.value.id:-1},locale:O,fallbackLocale:A,messages:P,datetimeFormats:R,numberFormats:x,get inheritLocale(){return o.value?o.value.inheritLocale:s},set inheritLocale(e){o.value&&(o.value.inheritLocale=e)},get availableLocales(){return o.value?o.value.availableLocales:Object.keys(u.value)},get modifiers(){return o.value?o.value.modifiers:S},get pluralRules(){return o.value?o.value.pluralRules:k},get isGlobal(){return!!o.value&&o.value.isGlobal},get missingWarn(){return o.value?o.value.missingWarn:f},set missingWarn(e){o.value&&(o.value.missingWarn=e)},get fallbackWarn(){return o.value?o.value.fallbackWarn:p},set fallbackWarn(e){o.value&&(o.value.missingWarn=e)},get fallbackRoot(){return o.value?o.value.fallbackRoot:_},set fallbackRoot(e){o.value&&(o.value.fallbackRoot=e)},get fallbackFormat(){return o.value?o.value.fallbackFormat:m},set fallbackFormat(e){o.value&&(o.value.fallbackFormat=e)},get warnHtmlMessage(){return o.value?o.value.warnHtmlMessage:T},set warnHtmlMessage(e){o.value&&(o.value.warnHtmlMessage=e)},get escapeParameter(){return o.value?o.value.escapeParameter:I},set escapeParameter(e){o.value&&(o.value.escapeParameter=e)},t:j,getPostTranslationHandler:L,setPostTranslationHandler:D,getMissingHandler:M,setMissingHandler:F,rt:W,d:$,n:V,tm:H,te:B,getLocaleMessage:q,setLocaleMessage:z,mergeLocaleMessage:K,getDateTimeFormat:G,setDateTimeFormat:Y,mergeDateTimeFormat:X,getNumberFormat:Q,setNumberFormat:J,mergeNumberFormat:Z};function te(e){e.locale.value=a.value,e.fallbackLocale.value=c.value,Object.keys(u.value).forEach((t=>{e.mergeLocaleMessage(t,u.value[t])})),Object.keys(h.value).forEach((t=>{e.mergeDateTimeFormat(t,h.value[t])})),Object.keys(d.value).forEach((t=>{e.mergeNumberFormat(t,d.value[t])})),e.escapeParameter=I,e.fallbackFormat=m,e.fallbackRoot=_,e.fallbackWarn=p,e.missingWarn=f,e.warnHtmlMessage=T}return(0,hn.KC)((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw wn(bn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const n=o.value=e.proxy.$i18n.__composer;"global"===t?(a.value=n.locale.value,c.value=n.fallbackLocale.value,u.value=n.messages.value,h.value=n.datetimeFormats.value,d.value=n.numberFormats.value):i&&te(n)})),ee}const gr=["locale","fallbackLocale","availableLocales"],vr=["t","rt","d","n","tm","te"];function yr(e,t){const n=Object.create(null);gr.forEach((e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw wn(bn.UNEXPECTED_ERROR);const i=(0,dn.i9)(r.value)?{get(){return r.value.value},set(e){r.value.value=e}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,e,i)})),e.config.globalProperties.$i18n=n,vr.forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw wn(bn.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${n}`,r)}));const r=()=>{delete e.config.globalProperties.$i18n,vr.forEach((t=>{delete e.config.globalProperties[`$${t}`]}))};return r}if(pn(),__INTLIFY_JIT_COMPILATION__?bt(Bt):bt(Ht),wt(De),Et(at),__INTLIFY_PROD_DEVTOOLS__){const e=f();e.__INTLIFY__=!0,ze(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},1387:function(e,t,n){"use strict";n.d(t,{Bt:function(){return ae},aE:function(){return nt},rd:function(){return it}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(144);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof document;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const l=()=>{},u=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,_=/\?/g,m=/\+/g,g=/%5B/g,v=/%5D/g,y=/%5E/g,b=/%60/g,w=/%7B/g,E=/%7C/g,T=/%7D/g,I=/%20/g;function C(e){return encodeURI(""+e).replace(E,"|").replace(g,"[").replace(v,"]")}function S(e){return C(e).replace(w,"{").replace(T,"}").replace(y,"^")}function k(e){return C(e).replace(m,"%2B").replace(I,"+").replace(h,"%23").replace(d,"%26").replace(b,"`").replace(w,"{").replace(T,"}").replace(y,"^")}function N(e){return k(e).replace(p,"%3D")}function O(e){return C(e).replace(h,"%23").replace(_,"%3F")}function A(e){return null==e?"":O(e).replace(f,"%2F")}function P(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const R=/\/$/,x=e=>e.replace(R,"");function L(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=V(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:P(s)}}function D(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&U(t.matched[r],n.matched[i])&&j(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function j(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!W(e[n],t[n]))return!1;return!0}function W(e,t){return u(e)?$(e,t):u(t)?$(t,e):e===t}function $(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function V(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var H,B;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(B||(B={}));function q(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),x(e)}const z=/^[^#]+#/;function K(e,t){return e.replace(z,"#")+t}function G(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function X(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=G(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const J=new Map;function Z(e,t){J.set(e,t)}function ee(e){const t=J.get(e);return J.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const s=M(n,e);return s+r+i}function re(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=ne(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:H.pop,direction:u?u>0?B.forward:B.back:B.unknown})}))};function l(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:Y()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function ie(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function oe(e){const{history:t,location:n}=window,r={value:ne(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,ie(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:Y()});o(s.current,s,!0);const c=a({},ie(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function se(e){e=q(e);const t=oe(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:K.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ae(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),se(e)}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function le(e){return"string"===typeof e||"symbol"===typeof e}const ue={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function fe(e,t){return a(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const _e="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ge=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},me,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ge,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;o.push({name:e,repeatable:n,optional:c});const u=l||_e;if(u!==_e){s+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(u(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:l}}function ye(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ye(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Te=/[a-zA-Z0-9_]/;function Ie(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function h(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),s(),i}function Ce(e,t,n){const r=ve(Ie(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=Ne(e);c.aliasOf=r&&r.record;const h=Re(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Ce(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Ae(f)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{s(p)}:l}function s(e){if(le(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function u(e){let t=0;while(t<n.length&&be(e,n[t])>=0&&(e.record.path!==n[t].record.path||!xe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!Ae(e)&&r.set(e.record.name,e)}function h(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,s=i.record.name,c=a(ke(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&ke(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if(null!=e.path)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw fe(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:o,params:c,matched:l,meta:Pe(l)}}return t=Re({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function ke(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ne(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Oe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Oe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pe(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xe(e,t){return t.children.some((t=>t===e||xe(e,t)))}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(m," "),n=e.indexOf("="),o=P(n<0?e:e.slice(0,n)),s=n<0?null:P(e.slice(n+1));if(o in t){let e=t[o];u(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=N(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map((e=>e&&k(e))):[r&&k(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),je=Symbol(""),We=Symbol(""),$e=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function He(e,t,n,r,i,o=(e=>e())){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):ce(e)?c(fe(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),a())},u=o((()=>e.call(r&&r.instances[i],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function Be(e,t,n,r,i=(e=>e())){const o=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(qe(c)){const s=c.__vccOpts||c,l=s[t];l&&o.push(He(l,n,r,a,e,i))}else{let l=c();0,o.push((()=>l.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=s(o)?o.default:o;a.components[e]=c;const l=c.__vccOpts||c,u=l[t];return u&&He(u,n,r,a,e,i)()}))))}}}return o}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.WQ)(je),n=(0,r.WQ)(We);const o=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),s=(0,r.EW)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(U.bind(null,r));if(s>-1)return s;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(U.bind(null,e[t-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Xe(n.params,o.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&j(n.params,o.value.params)));function u(n={}){return Ye(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(l):Promise.resolve()}return{route:o,href:(0,r.EW)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:u}}const Ke=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,i.Kh)(ze(e)),{options:o}=(0,r.WQ)(je),s=(0,r.EW)((()=>({[Je(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ge=Ke;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.WQ)($e),s=(0,r.EW)((()=>e.route||o.value)),c=(0,r.WQ)(Ue,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>s.value.matched[l.value]));(0,r.Gt)(Ue,(0,r.EW)((()=>l.value+1))),(0,r.Gt)(Fe,u),(0,r.Gt)($e,s);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&U(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=u.value,l=c&&c.components[o];if(!l)return et(n.default,{Component:l,route:i});const d=c.props[o],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},_=(0,r.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:_,route:i})||_}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=Se(e.routes,e),n=e.parseQuery||Le,s=e.stringifyQuery||De,h=e.history;const d=Ve(),f=Ve(),p=Ve(),_=(0,i.IJ)(ue);let m=ue;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=c.bind(null,(e=>""+e)),v=c.bind(null,A),y=c.bind(null,P);function b(e,n){let r,i;return le(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function w(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function I(e,r){if(r=a({},r||_.value),"string"===typeof e){const i=L(n,e,r.path),o=t.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:y(o.params),hash:P(i.hash),redirectedFrom:void 0,href:s})}let i;if(null!=e.path)i=a({},e,{path:L(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:v(t)}),r.params=v(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=g(y(o.params));const l=D(s,a({},e,{hash:S(c),path:o.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:s===De?Me(e.query):e.query||{}},o,{redirectedFrom:void 0,href:u})}function C(e){return"string"===typeof e?L(n,e,_.value.path):a({},e)}function k(e,t){if(m!==e)return fe(8,{from:t,to:e})}function N(e){return x(e)}function O(e){return N(a(C(e),{replace:!0}))}function R(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function x(e,t){const n=m=I(e),r=_.value,i=e.state,o=e.force,c=!0===e.replace,l=R(n);if(l)return x(a(C(l),{state:"object"===typeof l?a({},i,l.state):i,force:o,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!o&&F(s,r,n)&&(h=fe(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):j(u,r)).catch((e=>pe(e)?pe(e,2)?e:te(e):G(e,u,r))).then((e=>{if(e){if(pe(e,2))return x(a({replace:c},C(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||u)}else e=$(u,r,!0,c,i);return W(u,r,e),e}))}function M(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function j(e,t){let n;const[r,i,o]=rt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(He(r,e,t))}));const s=M.bind(null,e,t);return n.push(s),ae(n).then((()=>{n=[];for(const r of d.list())n.push(He(r,e,t));return n.push(s),ae(n)})).then((()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(He(r,e,t))}));return n.push(s),ae(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(He(i,e,t));else n.push(He(r.beforeEnter,e,t));return n.push(s),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(o,"beforeRouteEnter",e,t,U),n.push(s),ae(n)))).then((()=>{n=[];for(const r of f.list())n.push(He(r,e,t));return n.push(s),ae(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function W(e,t,n){p.list().forEach((r=>U((()=>r(e,t,n)))))}function $(e,t,n,r,i){const s=k(e,t);if(s)return s;const c=t===ue,l=o?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&l&&l.scroll},i)):h.push(e.fullPath,i)),_.value=e,ne(e,t,n,c),te()}let V;function B(){V||(V=h.listen(((e,t,n)=>{if(!se.listening)return;const r=I(e),i=R(r);if(i)return void x(a(i,{replace:!0}),r).catch(l);m=r;const s=_.value;o&&Z(Q(s.fullPath,n.delta),Y()),j(r,s).catch((e=>pe(e,12)?e:pe(e,2)?(x(e.to,r).then((e=>{pe(e,20)&&!n.delta&&n.type===H.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),G(e,r,s)))).then((e=>{e=e||$(r,s,!1),e&&(n.delta&&!pe(e,8)?h.go(-n.delta,!1):n.type===H.pop&&pe(e,20)&&h.go(-1,!1)),W(r,s,e)})).catch(l)})))}let q,z=Ve(),K=Ve();function G(e,t,n){te(e);const r=K.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function J(){return q&&_.value!==ue?Promise.resolve():new Promise(((e,t)=>{z.add([e,t])}))}function te(e){return q||(q=!e,B(),z.list().forEach((([t,n])=>e?n(e):t())),z.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&ee(Q(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&X(e))).catch((e=>G(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,se={currentRoute:_,listening:!0,addRoute:b,removeRoute:w,hasRoute:T,getRoutes:E,resolve:I,options:e,push:N,replace:O,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:K.add,isReady:J,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(_)}),o&&!ie&&_.value===ue&&(ie=!0,N(h.location).catch((e=>{0})));const n={};for(const i in ue)Object.defineProperty(n,i,{get:()=>_.value[i],enumerable:!0});e.provide(je,t),e.provide(We,(0,i.Gc)(n)),e.provide($e,_);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=ue,V&&V(),V=null,_.value=ue,ie=!1,q=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return se}function rt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>U(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>U(e,a)))||i.push(a))}return[n,r,i]}function it(){return(0,r.WQ)(je)}},1114:function(e,t,n){"use strict";n.d(t,{FN:function(){return v},Vx:function(){return E},dK:function(){return T},q7:function(){return I}});n(4114);var r=n(6768),i=n(144);
/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */
const o={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},s={itemsToShow:{default:o.itemsToShow,type:Number},itemsToScroll:{default:o.itemsToScroll,type:Number},wrapAround:{default:o.wrapAround,type:Boolean},throttle:{default:o.throttle,type:Number},snapAlign:{default:o.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:o.transition,type:Number},breakpoints:{default:o.breakpoints,type:Object},autoplay:{default:o.autoplay,type:Number},pauseAutoplayOnHover:{default:o.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:o.mouseDrag,type:Boolean},touchDrag:{default:o.touchDrag,type:Boolean},dir:{default:o.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:o.i18n,type:Object},settings:{default(){return{}},type:Object}};function a({config:e,slidesCount:t}){const{snapAlign:n,wrapAround:r,itemsToShow:i=1}=e;if(r)return Math.max(t-1,0);let o;switch(n){case"start":o=t-i;break;case"end":o=t-1;break;case"center":case"center-odd":o=t-Math.ceil((i-.5)/2);break;case"center-even":o=t-Math.ceil(i/2);break;default:o=0;break}return Math.max(o,0)}function c({config:e,slidesCount:t}){const{wrapAround:n,snapAlign:r,itemsToShow:i=1}=e;let o=0;if(n||i>t)return o;switch(r){case"start":o=0;break;case"end":o=i-1;break;case"center":case"center-odd":o=Math.floor((i-1)/2);break;case"center-even":o=Math.floor((i-2)/2);break;default:o=0;break}return o}function l({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,n),t)}function u({config:e,currentSlide:t,slidesCount:n}){const{snapAlign:r,wrapAround:i,itemsToShow:o=1}=e;let s=t;switch(r){case"center":case"center-odd":s-=(o-1)/2;break;case"center-even":s-=(o-2)/2;break;case"end":s-=o-1;break}return i?s:l({val:s,max:n-o,min:0})}function h(e){return e?e.reduce(((e,t)=>{var n;return t.type===r.FK?[...e,...h(t.children)]:"CarouselSlide"===(null===(n=t.type)||void 0===n?void 0:n.name)?[...e,t]:e}),[]):[]}function d({val:e,max:t,min:n=0}){return e>t?d({val:e-(t+1),max:t,min:n}):e<n?d({val:e+(t+1),max:t,min:n}):e}function f(e,t){let n;return t?function(...r){const i=this;n||(e.apply(i,r),n=!0,setTimeout((()=>n=!1),t))}:e}function p(e,t){let n;return function(...r){n&&clearTimeout(n),n=setTimeout((()=>{e(...r),n=null}),t)}}function _(e="",t={}){return Object.entries(t).reduce(((e,[t,n])=>e.replace(`{${t}}`,String(n))),e)}var m,g=(0,r.pM)({name:"ARIA",setup(){const e=(0,r.WQ)("config",(0,i.Kh)(Object.assign({},o))),t=(0,r.WQ)("currentSlide",(0,i.KR)(0)),n=(0,r.WQ)("slidesCount",(0,i.KR)(0));return()=>(0,r.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},_(e.i18n["itemXofY"],{currentSlide:t.value+1,slidesCount:n.value}))}}),v=(0,r.pM)({name:"Carousel",props:s,setup(e,{slots:t,emit:n,expose:_}){var m;const v=(0,i.KR)(null),y=(0,i.KR)([]),b=(0,i.KR)(0),w=(0,i.KR)(0),E=(0,i.Kh)(Object.assign({},o));let T,I=Object.assign({},o);const C=(0,i.KR)(null!==(m=e.modelValue)&&void 0!==m?m:0),S=(0,i.KR)(0),k=(0,i.KR)(0),N=(0,i.KR)(0),O=(0,i.KR)(0);let A,P;function R(){T=Object.assign({},e.breakpoints),I=Object.assign(Object.assign(Object.assign({},I),e),{i18n:Object.assign(Object.assign({},I.i18n),e.i18n),breakpoints:void 0}),L(I)}function x(){if(!T||!Object.keys(T).length)return;const e=Object.keys(T).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},I);e.some((e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return n&&(t=Object.assign(Object.assign({},t),T[e])),n})),L(t)}function L(e){Object.entries(e).forEach((([e,t])=>E[e]=t))}(0,r.Gt)("config",E),(0,r.Gt)("slidesCount",w),(0,r.Gt)("currentSlide",C),(0,r.Gt)("maxSlide",N),(0,r.Gt)("minSlide",O),(0,r.Gt)("slideWidth",b);const D=p((()=>{x(),F(),M()}),16);function M(){if(!v.value)return;const e=v.value.getBoundingClientRect();b.value=e.width/E.itemsToShow}function F(){w.value<=0||(k.value=Math.ceil((w.value-1)/2),N.value=a({config:E,slidesCount:w.value}),O.value=c({config:E,slidesCount:w.value}),E.wrapAround||(C.value=l({val:C.value,max:N.value,min:O.value})))}(0,r.sV)((()=>{(0,r.dY)((()=>M())),setTimeout((()=>M()),1e3),x(),Y(),window.addEventListener("resize",D,{passive:!0}),n("init")})),(0,r.hi)((()=>{P&&clearTimeout(P),A&&clearInterval(A),window.removeEventListener("resize",D,{passive:!0})}));let U=!1;const j={x:0,y:0},W={x:0,y:0},$=(0,i.Kh)({x:0,y:0}),V=(0,i.KR)(!1),H=(0,i.KR)(!1),B=()=>{V.value=!0},q=()=>{V.value=!1};function z(e){["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||(U="touchstart"===e.type,U||e.preventDefault(),!U&&0!==e.button||Q.value||(j.x=U?e.touches[0].clientX:e.clientX,j.y=U?e.touches[0].clientY:e.clientY,document.addEventListener(U?"touchmove":"mousemove",K,!0),document.addEventListener(U?"touchend":"mouseup",G,!0)))}const K=f((e=>{H.value=!0,W.x=U?e.touches[0].clientX:e.clientX,W.y=U?e.touches[0].clientY:e.clientY;const t=W.x-j.x,n=W.y-j.y;$.y=n,$.x=t}),E.throttle);function G(){const e="rtl"===E.dir?-1:1,t=.4*Math.sign($.x),n=Math.round($.x/b.value+t)*e;if(n&&!U){const e=t=>{window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}J(C.value-n),$.x=0,$.y=0,H.value=!1,document.removeEventListener(U?"touchmove":"mousemove",K,!0),document.removeEventListener(U?"touchend":"mouseup",G,!0)}function Y(){!E.autoplay||E.autoplay<=0||(A=setInterval((()=>{E.pauseAutoplayOnHover&&V.value||Z()}),E.autoplay))}function X(){A&&(clearInterval(A),A=null),Y()}const Q=(0,i.KR)(!1);function J(e){const t=E.wrapAround?e:l({val:e,max:N.value,min:O.value});C.value===t||Q.value||(n("slide-start",{slidingToIndex:e,currentSlideIndex:C.value,prevSlideIndex:S.value,slidesCount:w.value}),Q.value=!0,S.value=C.value,C.value=t,P=setTimeout((()=>{if(E.wrapAround){const r=d({val:t,max:N.value,min:0});r!==C.value&&(C.value=r,n("loop",{currentSlideIndex:C.value,slidingToIndex:e}))}n("update:modelValue",C.value),n("slide-end",{currentSlideIndex:C.value,prevSlideIndex:S.value,slidesCount:w.value}),Q.value=!1,X()}),E.transition))}function Z(){J(C.value+E.itemsToScroll)}function ee(){J(C.value-E.itemsToScroll)}const te={slideTo:J,next:Z,prev:ee};(0,r.Gt)("nav",te),(0,r.Gt)("isSliding",Q);const ne=(0,r.EW)((()=>u({config:E,currentSlide:C.value,slidesCount:w.value})));(0,r.Gt)("slidesToScroll",ne);const re=(0,r.EW)((()=>{const e="rtl"===E.dir?-1:1,t=ne.value*b.value*e;return{transform:`translateX(${$.x-t}px)`,transition:`${Q.value?E.transition:0}ms`,margin:E.wrapAround?`0 -${w.value*b.value}px`:"",width:"100%"}}));function ie(){R(),x(),F(),M(),X()}Object.keys(s).forEach((t=>{["modelValue"].includes(t)||(0,r.wB)((()=>e[t]),ie)})),(0,r.wB)((()=>e["modelValue"]),(e=>{e!==C.value&&J(Number(e))})),(0,r.wB)(w,F),n("before-init"),R();const oe={config:E,slidesCount:w,slideWidth:b,next:Z,prev:ee,slideTo:J,currentSlide:C,maxSlide:N,minSlide:O,middleSlide:k};_({updateBreakpointsConfigs:x,updateSlidesData:F,updateSlideWidth:M,initDefaultConfigs:R,restartCarousel:ie,slideTo:J,next:Z,prev:ee,nav:te,data:oe});const se=t.default||t.slides,ae=t.addons,ce=(0,i.Kh)(oe);return()=>{const e=h(null===se||void 0===se?void 0:se(ce)),t=(null===ae||void 0===ae?void 0:ae(ce))||[];e.forEach(((e,t)=>e.props.index=t));let n=e;if(E.wrapAround){const t=e.map(((t,n)=>(0,r.E3)(t,{index:-e.length+n,isClone:!0,key:`clone-before-${n}`}))),i=e.map(((t,n)=>(0,r.E3)(t,{index:e.length+n,isClone:!0,key:`clone-after-${n}`})));n=[...t,...e,...i]}y.value=e,w.value=Math.max(e.length,1);const i=(0,r.h)("ol",{class:"carousel__track",style:re.value,onMousedownCapture:E.mouseDrag?z:null,onTouchstartPassiveCapture:E.touchDrag?z:null},n),o=(0,r.h)("div",{class:"carousel__viewport"},i);return(0,r.h)("section",{ref:v,class:{carousel:!0,"is-sliding":Q.value,"is-dragging":H.value,"is-hover":V.value,"carousel--rtl":"rtl"===E.dir},dir:E.dir,"aria-label":E.i18n["ariaGallery"],tabindex:"0",onMouseenter:B,onMouseleave:q},[o,t,(0,r.h)(g)])}}});(function(e){e["arrowUp"]="arrowUp",e["arrowDown"]="arrowDown",e["arrowRight"]="arrowRight",e["arrowLeft"]="arrowLeft"})(m||(m={}));const y={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function b(e){return e in m}const w=e=>{const t=(0,r.WQ)("config",(0,i.Kh)(Object.assign({},o))),n=String(e.name),s=`icon${n.charAt(0).toUpperCase()+n.slice(1)}`;if(!n||"string"!==typeof n||!b(n))return;const a=y[n],c=(0,r.h)("path",{d:a}),l=t.i18n[s]||e.title||n,u=(0,r.h)("title",l);return(0,r.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":l},[u,c])};w.props={name:String,title:String};const E=(e,{slots:t,attrs:n})=>{const{next:s,prev:a}=t||{},c=(0,r.WQ)("config",(0,i.Kh)(Object.assign({},o))),l=(0,r.WQ)("maxSlide",(0,i.KR)(1)),u=(0,r.WQ)("minSlide",(0,i.KR)(1)),h=(0,r.WQ)("currentSlide",(0,i.KR)(1)),d=(0,r.WQ)("nav",{}),{dir:f,wrapAround:p,i18n:_}=c,m="rtl"===f,g=(0,r.h)("button",{type:"button",class:["carousel__prev",!p&&h.value<=u.value&&"carousel__prev--disabled",null===n||void 0===n?void 0:n.class],"aria-label":_["ariaPreviousSlide"],onClick:d.prev},(null===a||void 0===a?void 0:a())||(0,r.h)(w,{name:m?"arrowRight":"arrowLeft"})),v=(0,r.h)("button",{type:"button",class:["carousel__next",!p&&h.value>=l.value&&"carousel__next--disabled",null===n||void 0===n?void 0:n.class],"aria-label":_["ariaNextSlide"],onClick:d.next},(null===s||void 0===s?void 0:s())||(0,r.h)(w,{name:m?"arrowLeft":"arrowRight"}));return[g,v]},T=()=>{const e=(0,r.WQ)("config",(0,i.Kh)(Object.assign({},o))),t=(0,r.WQ)("maxSlide",(0,i.KR)(1)),n=(0,r.WQ)("minSlide",(0,i.KR)(1)),s=(0,r.WQ)("currentSlide",(0,i.KR)(1)),a=(0,r.WQ)("nav",{}),c=e=>d({val:s.value,max:t.value,min:0})===e,l=[];for(let i=n.value;i<t.value+1;i++){const t=(0,r.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":c(i)},"aria-label":_(e.i18n["ariaNavigateToSlide"],{slideNumber:i+1}),onClick:()=>a.slideTo(i)}),n=(0,r.h)("li",{class:"carousel__pagination-item",key:i},t);l.push(n)}return(0,r.h)("ol",{class:"carousel__pagination"},l)};var I=(0,r.pM)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=(0,r.WQ)("config",(0,i.Kh)(Object.assign({},o))),s=(0,r.WQ)("currentSlide",(0,i.KR)(0)),a=(0,r.WQ)("slidesToScroll",(0,i.KR)(0)),c=(0,r.WQ)("isSliding",(0,i.KR)(!1)),l=(0,r.EW)((()=>e.index===s.value)),u=(0,r.EW)((()=>e.index===s.value-1)),h=(0,r.EW)((()=>e.index===s.value+1)),d=(0,r.EW)((()=>{const t=Math.floor(a.value),r=Math.ceil(a.value+n.itemsToShow-1);return e.index>=t&&e.index<=r}));return()=>{var i;return(0,r.h)("li",{style:{width:100/n.itemsToShow+"%"},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":d.value,"carousel__slide--active":l.value,"carousel__slide--prev":u.value,"carousel__slide--next":h.value,"carousel__slide--sliding":c.value},"aria-hidden":!d.value},null===(i=t.default)||void 0===i?void 0:i.call(t,{isActive:l.value,isClone:e.isClone,isPrev:u.value,isNext:h.value,isSliding:c.value,isVisible:d.value}))}}})}}]);
//# sourceMappingURL=chunk-vendors.0a2f94e0.js.map