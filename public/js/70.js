/*! For license information please see 70.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[70,728],{51728:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>S});var i=r(85893),s=r(67294),o=r(9669),n=r.n(o),h=r(72023),a=r.n(h),c=r(37703),u=r(26986),l=r(5977),f=r(24911);function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],i=!0,s=!1,o=void 0;try{for(var n,h=t[Symbol.iterator]();!(i=(n=h.next()).done)&&(r.push(n.value),!e||r.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==h.return||h.return()}finally{if(s)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}const S=function(){var t=(0,l.k6)(),e=(0,c.I0)(),r=_((0,s.useState)(""),2),o=r[0],h=r[1],H=_((0,s.useState)(""),2),S=H[0],A=H[1];return(0,i.jsx)("main",{className:"signin",children:(0,i.jsxs)("div",{className:"signin__wrapper",children:[(0,i.jsx)("div",{className:"signin__image",children:(0,i.jsx)("img",{src:"/images/signin.jpg"})}),(0,i.jsxs)("div",{className:"signin__modal",children:[(0,i.jsx)("h1",{children:"Sign In To your EventsCountdown account"}),(0,i.jsx)("input",{type:"text",value:o,onChange:function(t){return h(t.target.value)},placeholder:"email"}),(0,i.jsx)("input",{type:"password",value:S,onChange:function(t){return A(t.target.value)},placeholder:"password"}),(0,i.jsx)("button",{type:"button",onClick:function(){var r={email:o,password:a()(S),remember_me:!0};n().post("/api/auth/login",r).then((function(r){console.log("success"),console.log(r),localStorage.setItem("eventcountdown:all:userToken",r.data.access_token),e((0,u.PJ)(r.data.access_token)),t.push(f.Z.memberDashboard)})).catch((function(t){console.log("fail"),console.log(t)}))},children:"Sign In"})]})]})})}},47070:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>u});var i=r(85893),s=r(67294),o=(r(51728),r(73727)),n=r(9669),h=r.n(n);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],i=!0,s=!1,o=void 0;try{for(var n,h=t[Symbol.iterator]();!(i=(n=h.next()).done)&&(r.push(n.value),!e||r.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==h.return||h.return()}finally{if(s)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}const u=function(t){var e=t.match,r=a((0,s.useState)(""),2),n=r[0],c=r[1],u=e.params.token;return(0,s.useEffect)((function(){h().get("/api/auth/signup/activate/".concat(u)).then((function(t){c("Thanks for Signing up. Your account has now been activated. Please sign in to continue!")})).catch((function(t){if(t.response)switch(t.response.status){case 404:c("Could not activate you account. Your token is invalid!");break;default:c("There was an error activating our account!")}else c("Could not connect to the server. Please check your internet connection")}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)(o.rU,{to:"/signin",children:"Click here to sign in "})]})}},72023:(module,exports,__webpack_require__)=>{var process=__webpack_require__(34155),__WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(r){return new Sha256(e,!0).update(r)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var i=OUTPUT_TYPES[r];e[i]=createOutputMethod(i,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"==typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null==t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(r,i){return new HmacSha256(r,e,!0).update(i)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var i=OUTPUT_TYPES[r];e[i]=createHmacOutputMethod(i,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,r){var i,s=typeof t;if("string"===s){var o,n=[],h=t.length,a=0;for(i=0;i<h;++i)(o=t.charCodeAt(i))<128?n[a++]=o:o<2048?(n[a++]=192|o>>6,n[a++]=128|63&o):o<55296||o>=57344?(n[a++]=224|o>>12,n[a++]=128|o>>6&63,n[a++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++i)),n[a++]=240|o>>18,n[a++]=128|o>>12&63,n[a++]=128|o>>6&63,n[a++]=128|63&o);t=n}else{if("object"!==s)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var c=[],u=[];for(i=0;i<64;++i){var l=t[i]||0;c[i]=92^l,u[i]=54^l}Sha256.call(this,e,r),this.update(u),this.oKeyPad=c,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}for(var i,s,o=0,n=t.length,h=this.blocks;o<n;){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),e)for(s=this.start;o<n&&s<64;++o)h[s>>2]|=t[o]<<SHIFT[3&s++];else for(s=this.start;o<n&&s<64;++o)(i=t.charCodeAt(o))<128?h[s>>2]|=i<<SHIFT[3&s++]:i<2048?(h[s>>2]|=(192|i>>6)<<SHIFT[3&s++],h[s>>2]|=(128|63&i)<<SHIFT[3&s++]):i<55296||i>=57344?(h[s>>2]|=(224|i>>12)<<SHIFT[3&s++],h[s>>2]|=(128|i>>6&63)<<SHIFT[3&s++],h[s>>2]|=(128|63&i)<<SHIFT[3&s++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++o)),h[s>>2]|=(240|i>>18)<<SHIFT[3&s++],h[s>>2]|=(128|i>>12&63)<<SHIFT[3&s++],h[s>>2]|=(128|i>>6&63)<<SHIFT[3&s++],h[s>>2]|=(128|63&i)<<SHIFT[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.block=h[16],this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,r,i,s,o,n,h,a,c=this.h0,u=this.h1,l=this.h2,f=this.h3,_=this.h4,H=this.h5,S=this.h6,A=this.h7,p=this.blocks;for(t=16;t<64;++t)e=((s=p[t-15])>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,r=((s=p[t-2])>>>17|s<<15)^(s>>>19|s<<13)^s>>>10,p[t]=p[t-16]+e+p[t-7]+r<<0;for(a=u&l,t=0;t<64;t+=4)this.first?(this.is224?(o=300032,A=(s=p[0]-1413257819)-150054599<<0,f=s+24177077<<0):(o=704751109,A=(s=p[0]-210244248)-1521486534<<0,f=s+143694565<<0),this.first=!1):(e=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),i=(o=c&u)^c&l^a,A=f+(s=A+(r=(_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&H^~_&S)+K[t]+p[t])<<0,f=s+(e+i)<<0),e=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),i=(n=f&c)^f&u^o,S=l+(s=S+(r=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&_^~A&H)+K[t+1]+p[t+1])<<0,e=((l=s+(e+i)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),i=(h=l&f)^l&c^n,H=u+(s=H+(r=(S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7))+(S&A^~S&_)+K[t+2]+p[t+2])<<0,e=((u=s+(e+i)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),i=(a=u&l)^u&f^h,_=c+(s=_+(r=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7))+(H&S^~H&A)+K[t+3]+p[t+3])<<0,c=s+(e+i)<<0;this.h0=this.h0+c<<0,this.h1=this.h1+u<<0,this.h2=this.h2+l<<0,this.h3=this.h3+f<<0,this.h4=this.h4+_<<0,this.h5=this.h5+H<<0,this.h6=this.h6+S<<0,this.h7=this.h7+A<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3,s=this.h4,o=this.h5,n=this.h6,h=this.h7,a=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n];return this.is224||(a+=HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h]),a},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3,s=this.h4,o=this.h5,n=this.h6,h=this.h7,a=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,o>>24&255,o>>16&255,o>>8&255,255&o,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||a.push(h>>24&255,h>>16&255,h>>8&255,255&h),a},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}}]);