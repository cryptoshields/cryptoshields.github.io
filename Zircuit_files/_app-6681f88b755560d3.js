(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{79742:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new i((a+s)*3/4-s),u=0,d=s>0?a-4:a;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],a=0,s=n-i;a<s;a+=16383)o.push(function(e,t,n){for(var i,o=[],a=t;a<n;a+=3)o.push(r[(i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===i?o.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&o.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],n[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(79742),i=r(80645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),n=a(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(D(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(D(e,ArrayBuffer)||e&&D(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(D(e,SharedArrayBuffer)||e&&D(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return s.from(n,t,r);let i=function(e){var t;if(s.isBuffer(e)){let t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|f(e))}function d(e){let t=e.length<0?0:0|f(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||D(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return M(e).length;default:if(i)return n?-1:N(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,r){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=L[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return v(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function m(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){var o;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let o,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let n=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*a}else -1!==n&&(o-=o-n),n=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let n=0;n<l;n++)if(c(e,o+n)!==c(t,n)){r=!1;break}if(r)return o}return -1}function v(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],o=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[i+1],n=e[i+2],s=e[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,i,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function C(e,t,r,n,i){T(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function _(e,t,r,n,i){T(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function E(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,n,o){return t=+t,r>>>=0,o||E(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function k(e,t,r,n,o){return t=+t,r>>>=0,o||E(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.lW=s,t.h2=50,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(D(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),D(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=s.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(D(t,Uint8Array))i+t.length>n.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(s.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,i){if(D(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let o=i-n,a=r-t,l=Math.min(o,a),c=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){o=c[e],a=u[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){var i,o,a,s,l,c,u,d;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;let a=t.length;for(n>a/2&&(n=a/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,j(N(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return a=t,s=r,j(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":return l=t,c=r,j(M(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,j(function(e,t){let r,n;let i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,d);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=U(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=U(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||b(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=U(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=U(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=U(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=U(function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=0,o=1,a=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=r-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=U(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=U(function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return k(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return k(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},s.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let o=s.isBuffer(e)?e:s.from(e,n),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};let A={};function O(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function P(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function T(e,t,r,n,i,o){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new A.ERR_OUT_OF_RANGE("value",n,e)}R(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&I(i,n.length-(o+1))}function R(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function I(e,t,r){if(Math.floor(e)!==e)throw R(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}O("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),O("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),O("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=P(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=P(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let $=/[^+/0-9A-Za-z-_]/g;function N(e,t){let r;t=t||1/0;let n=e.length,i=null,o=[];for(let a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function M(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace($,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function j(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function D(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let L=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function U(e){return"undefined"==typeof BigInt?B:e}function B(){throw Error("BigInt not supported")}},27484:function(e){var t,r,n,i,o,a,s,l,c,u,d,h,f,p,g,m,y,w,v,b,x,C;e.exports=(t="millisecond",r="second",n="minute",i="hour",o="week",a="month",s="quarter",l="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(g={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},m="$isDayjsObject",y=function(e){return e instanceof x||!(!e||!e[m])},w=function e(t,r,n){var i;if(!t)return p;if("string"==typeof t){var o=t.toLowerCase();g[o]&&(i=o),r&&(g[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;g[s]=t,i=s}return!n&&i&&(p=i),i||!n&&p},v=function(e,t){if(y(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},(b={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,a),o=r-i<0,s=t.clone().add(n+(o?-1:1),a);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:l,w:o,d:"day",D:c,h:i,m:n,s:r,ms:t,Q:s})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=w,b.i=y,b.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},C=(x=function(){function e(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[m]=!0}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return v(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<v(e)},f.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var s=this,u=!!b.u(t)||t,d=b.p(e),h=function(e,t){var r=b.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return u?r:r.endOf("day")},f=function(e,t){return b.w(s.toDate()[e].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},p=this.$W,g=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case a:return u?h(1,g):h(0,g+1);case o:var w=this.$locale().weekStart||0,v=(p<w?p+7:p)-w;return h(u?m-v:m+(6-v),g);case"day":case c:return f(y+"Hours",0);case i:return f(y+"Minutes",1);case n:return f(y+"Seconds",2);case r:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,o){var s,u=b.p(e),d="set"+(this.$u?"UTC":""),h=((s={}).day=d+"Date",s[c]=d+"Date",s[a]=d+"Month",s[l]=d+"FullYear",s[i]=d+"Hours",s[n]=d+"Minutes",s[r]=d+"Seconds",s[t]=d+"Milliseconds",s)[u],f="day"===u?this.$D+(o-this.$W):o;if(u===a||u===l){var p=this.clone().set(c,1);p.$d[h](f),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[b.p(e)]()},f.add=function(e,t){var s,c=this;e=Number(e);var u=b.p(t),d=function(t){var r=v(c);return b.w(r.date(r.date()+Math.round(t*e)),c)};if(u===a)return this.set(a,this.$M+e);if(u===l)return this.set(l,this.$y+e);if("day"===u)return d(1);if(u===o)return d(7);var h=((s={})[n]=6e4,s[i]=36e5,s[r]=1e3,s)[u]||1,f=this.$d.getTime()+e*h;return b.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,f=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},p=function(e){return b.s(o%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(h,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return f(r.monthsShort,s,c,3);case"MMMM":return f(c,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,l,2);case"ddd":return f(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return b.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var u,d=this,h=b.p(t),f=v(e),p=(f.utcOffset()-this.utcOffset())*6e4,g=this-f,m=function(){return b.m(d,f)};switch(h){case l:u=m()/12;break;case a:u=m();break;case s:u=m()/3;break;case o:u=(g-p)/6048e5;break;case"day":u=(g-p)/864e5;break;case i:u=g/36e5;break;case n:u=g/6e4;break;case r:u=g/1e3;break;default:u=g}return c?u:b.a(u)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=C,[["$ms",t],["$s",r],["$m",n],["$H",i],["$W","day"],["$M",a],["$y",l],["$D",c]].forEach(function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,x,v),e.$i=!0),v},v.locale=w,v.isDayjs=y,v.unix=function(e){return v(1e3*e)},v.en=g[p],v.Ls=g,v.p={},v)},84110:function(e){e.exports=function(e,t,r){e=e||{};var n=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,i){return n.fromToBase(e,t,r,i)}r.en.relativeTime=i,n.fromToBase=function(t,n,o,a,s){for(var l,c,u,d=o.$locale().relativeTime||i,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var g=h[p];g.d&&(l=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var m=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,m<=g.r||!g.r){m<=1&&p>0&&(g=h[p-1]);var y=d[g.l];s&&(m=s(""+m)),c="string"==typeof y?y.replace("%d",m):y(m,n,g.l,u);break}}if(n)return c;var w=u?d.future:d.past;return"function"==typeof w?w(c):w.replace("%s",c)},n.to=function(e,t){return o(e,t,this,!0)},n.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(a(this),e)},n.fromNow=function(e){return this.from(a(this),e)}}},70660:function(e){e.exports=function(e,t,r){r.updateLocale=function(e,t){var n=r.Ls[e];if(n)return(t?Object.keys(t):[]).forEach(function(e){n[e]=t[e]}),n}}},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var i,o,a,s,l,c,u,d={},h={};h[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in o=(i=f.pop()).value,s=i.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,f.push(a,c),d[a]=o));if(void 0!==n&&void 0===h[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(i=(i-55296)*1024+o-56320+65536,n+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,n,o,a){if("function"!=typeof n)throw TypeError("The listener must be a function");var s=new i(n,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,a=Array(o);i<o;i++)a[i]=n[i].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,i,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,o),!0;case 6:return u.fn.call(u.context,t,n,i,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,i);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||i&&!s[l].once||n&&s[l].context!==n)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},80645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?i-1:0,h=r?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-u)-1,f>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:(f?-1:1)*(1/0);a+=Math.pow(2,n),o-=c}return(f?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,s,l,c=8*o-i-1,u=(1<<c)-1,d=u>>1,h=23===i?5960464477539062e-23:0,f=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,i),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),a=0));i>=8;e[r+f]=255&s,f+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+f]=255&a,f+=p,a/=256,c-=8);e[r+f-p]|=128*g}},95050:function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return+e.replace(/px/,"")}function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.floor((Math.random()*(t-e)+e)*Math.pow(10,r))/Math.pow(10,r)}function s(e){return e[a(0,e.length)]}var l=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function c(e){return Math.log(e)/Math.log(1920)}var u=function(){function e(t){r(this,e);var n=t.initialPosition,i=t.direction,o=t.confettiRadius,l=t.confettiColors,u=t.emojis,d=t.emojiSize,h=t.canvasWidth,f=a(.9,1.7,3)*c(h);this.confettiSpeed={x:f,y:f},this.finalConfettiSpeedX=a(.2,.6,3),this.rotationSpeed=u.length?.01:a(.03,.07,3)*c(h),this.dragForceCoefficient=a(5e-4,9e-4,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle="left"===i?a(0,.2,3):a(-.2,0,3),this.emojiSize=d,this.emojiRotationAngle=a(0,2*Math.PI),this.radiusYUpdateDirection="down";var p="left"===i?a(82,15)*Math.PI/180:a(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(p)),this.absSin=Math.abs(Math.sin(p));var g=a(-150,0),m={x:n.x+("left"===i?-g:g)*this.absCos,y:n.y-g*this.absSin};this.currentPosition=Object.assign({},m),this.initialPosition=Object.assign({},m),this.color=u.length?null:s(l),this.emoji=u.length?s(u):null,this.createdAt=new Date().getTime(),this.direction=i}return i(e,[{key:"draw",value:function(e){var t=this.currentPosition,r=this.radius,n=this.color,i=this.emoji,o=this.rotationAngle,a=this.emojiRotationAngle,s=this.emojiSize,l=window.devicePixelRatio;n?(e.fillStyle=n,e.beginPath(),e.ellipse(t.x*l,t.y*l,r.x*l,r.y*l,o,0,2*Math.PI),e.fill()):i&&(e.font="".concat(s,"px serif"),e.save(),e.translate(l*t.x,l*t.y),e.rotate(a),e.textAlign="center",e.fillText(i,0,0),e.restore())}},{key:"updatePosition",value:function(e,t){var r=this.confettiSpeed,n=this.dragForceCoefficient,i=this.finalConfettiSpeedX,o=this.radiusYUpdateDirection,a=this.rotationSpeed,s=this.createdAt,l=this.direction,c=t-s;if(r.x>i&&(this.confettiSpeed.x-=n*e),this.currentPosition.x+=r.x*("left"===l?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-r.y*this.absSin*c+.00125*Math.pow(c,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI);return}"down"===o?(this.radius.y-=e*a,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*a,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+100}}]),e}(),d=function(){function e(t){var n=this;r(this,e),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(e){return n.resolvePromise=e})}return i(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return!this.shapes.length&&(null===(e=this.resolvePromise)||void 0===e||e.call(this),!0)}},{key:"processShapes",value:function(e,t,r){var n=this,i=e.timeDelta,o=e.currentTime;this.shapes=this.shapes.filter(function(e){return e.updatePosition(i,o),e.draw(n.canvasContext),!r||e.getIsVisibleOnCanvas(t)})}}]),e}(),h=function(){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.activeConfettiBatches=[],this.canvas=n.canvas||((t=document.createElement("canvas")).style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return i(e,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,e=this.canvas,t=window.devicePixelRatio,n=o((r=getComputedStyle(e)).getPropertyValue("width")),i=o(r.getPropertyValue("height")),e.setAttribute("width",(n*t).toString()),e.setAttribute("height",(i*t).toString());var e,t,r,n,i,a=new Date().getTime(),s=a-this.lastUpdated,l=this.canvas.offsetHeight,c=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(e){return e.processShapes({timeDelta:s,currentTime:a},l,c),!c||!e.complete()}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(a)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e,t,r,n,i,o,a,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(e=s.confettiRadius,r=void 0===(t=s.confettiNumber)?s.confettiesNumber||(s.emojis?40:250):t,n=s.confettiColors,o=void 0===(i=s.emojis)?s.emojies||[]:i,a=s.emojiSize,s.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),s.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:void 0===e?6:e,confettiNumber:r,confettiColors:void 0===n?l:n,emojis:o,emojiSize:void 0===a?80:a}),h=c.confettiRadius,f=c.confettiNumber,p=c.confettiColors,g=c.emojis,m=c.emojiSize,y=this.canvas.getBoundingClientRect(),w=y.width,v=5*y.height/7,b={x:0,y:v},x={x:w,y:v},C=new d(this.canvasContext),_=0;_<f/2;_++){var E=new u({initialPosition:b,direction:"right",confettiRadius:h,confettiColors:p,confettiNumber:f,emojis:g,emojiSize:m,canvasWidth:w}),S=new u({initialPosition:x,direction:"left",confettiRadius:h,confettiColors:p,confettiNumber:f,emojis:g,emojiSize:m,canvasWidth:w});C.addShapes(E,S)}return this.activeConfettiBatches.push(C),this.queueAnimationFrameIfNeeded(),C.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),e}();t.Z=h},30381:function(e,t,r){(e=r.nmd(e)).exports=function(){"use strict";function t(){return B.apply(null,arguments)}function r(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function n(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e){var t;if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(t in e)if(i(e,t))return!1;return!0}function a(e){return void 0===e}function s(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function l(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function c(e,t){var r,n=[],i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function u(e,t){for(var r in t)i(t,r)&&(e[r]=t[r]);return i(t,"toString")&&(e.toString=t.toString),i(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,r,n){return ti(e,t,r,n,!0).utc()}function h(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());return(n&&(t=h(e),r=z.call(t.parsedDateParts,function(e){return null!=e}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour)),null!=Object.isFrozen&&Object.isFrozen(e))?n:(e._isValid=n,e._isValid)}function p(e){var t=d(NaN);return null!=e?u(h(t),e):h(t).userInvalidated=!0,t}z=Array.prototype.some?Array.prototype.some:function(e){var t,r=Object(this),n=r.length>>>0;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};var g,m,y=t.momentProperties=[],w=!1;function v(e,t){var r,n,i,o=y.length;if(a(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),a(t._i)||(e._i=t._i),a(t._f)||(e._f=t._f),a(t._l)||(e._l=t._l),a(t._strict)||(e._strict=t._strict),a(t._tzm)||(e._tzm=t._tzm),a(t._isUTC)||(e._isUTC=t._isUTC),a(t._offset)||(e._offset=t._offset),a(t._pf)||(e._pf=h(t)),a(t._locale)||(e._locale=t._locale),o>0)for(r=0;r<o;r++)a(i=t[n=y[r]])||(e[n]=i);return e}function b(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,t.updateOffset(this),w=!1)}function x(e){return e instanceof b||null!=e&&null!=e._isAMomentObject}function C(e){!1===t.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function _(e,r){var n=!0;return u(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),n){var o,a,s,l=[],c=arguments.length;for(a=0;a<c;a++){if(o="","object"==typeof arguments[a]){for(s in o+="\n["+a+"] ",arguments[0])i(arguments[0],s)&&(o+=s+": "+arguments[0][s]+", ");o=o.slice(0,-2)}else o=arguments[a];l.push(o)}C(e+"\nArguments: "+Array.prototype.slice.call(l).join("")+"\n"+Error().stack),n=!1}return r.apply(this,arguments)},r)}var E={};function S(e,r){null!=t.deprecationHandler&&t.deprecationHandler(e,r),E[e]||(C(r),E[e]=!0)}function k(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function A(e,t){var r,o=u({},e);for(r in t)i(t,r)&&(n(e[r])&&n(t[r])?(o[r]={},u(o[r],e[r]),u(o[r],t[r])):null!=t[r]?o[r]=t[r]:delete o[r]);for(r in e)i(e,r)&&!i(t,r)&&n(e[r])&&(o[r]=u({},o[r]));return o}function O(e){null!=e&&this.set(e)}function P(e,t,r){var n=""+Math.abs(e);return(e>=0?r?"+":"":"-")+Math.pow(10,Math.max(0,t-n.length)).toString().substr(1)+n}t.suppressDeprecationWarnings=!1,t.deprecationHandler=null,F=Object.keys?Object.keys:function(e){var t,r=[];for(t in e)i(e,t)&&r.push(t);return r};var T=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,R=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,I={},$={};function N(e,t,r,n){var i=n;"string"==typeof n&&(i=function(){return this[n]()}),e&&($[e]=i),t&&($[t[0]]=function(){return P(i.apply(this,arguments),t[1],t[2])}),r&&($[r]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function M(e,t){return e.isValid()?(I[t=j(t,e.localeData())]=I[t]||function(e){var t,r,n,i=e.match(T);for(r=0,n=i.length;r<n;r++)$[i[r]]?i[r]=$[i[r]]:i[r]=(t=i[r]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(t){var r,o="";for(r=0;r<n;r++)o+=k(i[r])?i[r].call(t,e):i[r];return o}}(t),I[t](e)):e.localeData().invalidDate()}function j(e,t){var r=5;function n(e){return t.longDateFormat(e)||e}for(R.lastIndex=0;r>=0&&R.test(e);)e=e.replace(R,n),R.lastIndex=0,r-=1;return e}var D={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function L(e){return"string"==typeof e?D[e]||D[e.toLowerCase()]:void 0}function U(e){var t,r,n={};for(r in e)i(e,r)&&(t=L(r))&&(n[t]=e[r]);return n}var B,z,F,W,H={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1},Z=/\d/,Y=/\d\d/,G=/\d{3}/,V=/\d{4}/,q=/[+-]?\d{6}/,K=/\d\d?/,X=/\d\d\d\d?/,J=/\d\d\d\d\d\d?/,Q=/\d{1,3}/,ee=/\d{1,4}/,et=/[+-]?\d{1,6}/,er=/\d+/,en=/[+-]?\d+/,ei=/Z|[+-]\d\d:?\d\d/gi,eo=/Z|[+-]\d\d(?::?\d\d)?/gi,ea=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,es=/^[1-9]\d?/,el=/^([1-9]\d|\d)/;function ec(e,t,r){W[e]=k(t)?t:function(e,n){return e&&r?r:t}}function eu(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ed(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function eh(e){var t=+e,r=0;return 0!==t&&isFinite(t)&&(r=ed(t)),r}W={};var ef={};function ep(e,t){var r,n,i=t;for("string"==typeof e&&(e=[e]),s(t)&&(i=function(e,r){r[t]=eh(e)}),n=e.length,r=0;r<n;r++)ef[e[r]]=i}function eg(e,t){ep(e,function(e,r,n,i){n._w=n._w||{},t(e,n._w,n,i)})}function em(e){return e%4==0&&e%100!=0||e%400==0}function ey(e){return em(e)?366:365}N("Y",0,0,function(){var e=this.year();return e<=9999?P(e,4):"+"+e}),N(0,["YY",2],0,function(){return this.year()%100}),N(0,["YYYY",4],0,"year"),N(0,["YYYYY",5],0,"year"),N(0,["YYYYYY",6,!0],0,"year"),ec("Y",en),ec("YY",K,Y),ec("YYYY",ee,V),ec("YYYYY",et,q),ec("YYYYYY",et,q),ep(["YYYYY","YYYYYY"],0),ep("YYYY",function(e,r){r[0]=2===e.length?t.parseTwoDigitYear(e):eh(e)}),ep("YY",function(e,r){r[0]=t.parseTwoDigitYear(e)}),ep("Y",function(e,t){t[0]=parseInt(e,10)}),t.parseTwoDigitYear=function(e){return eh(e)+(eh(e)>68?1900:2e3)};var ew=ev("FullYear",!0);function ev(e,r){return function(n){return null!=n?(ex(this,e,n),t.updateOffset(this,r),this):eb(this,e)}}function eb(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function ex(e,t,r){var n,i,o,a;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,i=e._isUTC,t){case"Milliseconds":return void(i?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(i?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(i?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(i?n.setUTCHours(r):n.setHours(r));case"Date":return void(i?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}o=e.month(),a=29!==(a=e.date())||1!==o||em(r)?a:28,i?n.setUTCFullYear(r,o,a):n.setFullYear(r,o,a)}}function eC(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=(t%12+12)%12;return e+=(t-r)/12,1===r?em(e)?29:28:31-r%7%2}eF=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return -1},N("M",["MM",2],"Mo",function(){return this.month()+1}),N("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),N("MMMM",0,0,function(e){return this.localeData().months(this,e)}),ec("M",K,es),ec("MM",K,Y),ec("MMM",function(e,t){return t.monthsShortRegex(e)}),ec("MMMM",function(e,t){return t.monthsRegex(e)}),ep(["M","MM"],function(e,t){t[1]=eh(e)-1}),ep(["MMM","MMMM"],function(e,t,r,n){var i=r._locale.monthsParse(e,n,r._strict);null!=i?t[1]=i:h(r).invalidMonth=e});var e_="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),eE=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;function eS(e,t,r){var n,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(n=0,this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[];n<12;++n)o=d([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(o,"").toLocaleLowerCase();return r?"MMM"===t?-1!==(i=eF.call(this._shortMonthsParse,a))?i:null:-1!==(i=eF.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=eF.call(this._shortMonthsParse,a))?i:-1!==(i=eF.call(this._longMonthsParse,a))?i:null:-1!==(i=eF.call(this._longMonthsParse,a))?i:-1!==(i=eF.call(this._shortMonthsParse,a))?i:null}function ek(e,t){if(!e.isValid())return e;if("string"==typeof t){if(/^\d+$/.test(t))t=eh(t);else if(!s(t=e.localeData().monthsParse(t)))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,eC(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function eA(e){return null!=e?(ek(this,e),t.updateOffset(this,!0),this):eb(this,"Month")}function eO(){function e(e,t){return t.length-e.length}var t,r,n,i,o=[],a=[],s=[];for(t=0;t<12;t++)r=d([2e3,t]),n=eu(this.monthsShort(r,"")),i=eu(this.months(r,"")),o.push(n),a.push(i),s.push(i),s.push(n);o.sort(e),a.sort(e),s.sort(e),this._monthsRegex=RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=RegExp("^("+o.join("|")+")","i")}function eP(e,t,r,n,i,o,a){var s;return e<100&&e>=0?isFinite((s=new Date(e+400,t,r,n,i,o,a)).getFullYear())&&s.setFullYear(e):s=new Date(e,t,r,n,i,o,a),s}function eT(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,isFinite((t=new Date(Date.UTC.apply(null,r))).getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function eR(e,t,r){var n=7+t-r;return-((7+eT(e,0,n).getUTCDay()-t)%7)+n-1}function eI(e,t,r,n,i){var o,a,s=1+7*(t-1)+(7+r-n)%7+eR(e,n,i);return s<=0?a=ey(o=e-1)+s:s>ey(e)?(o=e+1,a=s-ey(e)):(o=e,a=s),{year:o,dayOfYear:a}}function e$(e,t,r){var n,i,o=eR(e.year(),t,r),a=Math.floor((e.dayOfYear()-o-1)/7)+1;return a<1?n=a+eN(i=e.year()-1,t,r):a>eN(e.year(),t,r)?(n=a-eN(e.year(),t,r),i=e.year()+1):(i=e.year(),n=a),{week:n,year:i}}function eN(e,t,r){var n=eR(e,t,r),i=eR(e+1,t,r);return(ey(e)-n+i)/7}function eM(e,t){return e.slice(t,7).concat(e.slice(0,t))}N("w",["ww",2],"wo","week"),N("W",["WW",2],"Wo","isoWeek"),ec("w",K,es),ec("ww",K,Y),ec("W",K,es),ec("WW",K,Y),eg(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=eh(e)}),N("d",0,"do","day"),N("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),N("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),N("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),N("e",0,0,"weekday"),N("E",0,0,"isoWeekday"),ec("d",K),ec("e",K),ec("E",K),ec("dd",function(e,t){return t.weekdaysMinRegex(e)}),ec("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ec("dddd",function(e,t){return t.weekdaysRegex(e)}),eg(["dd","ddd","dddd"],function(e,t,r,n){var i=r._locale.weekdaysParse(e,n,r._strict);null!=i?t.d=i:h(r).invalidWeekday=e}),eg(["d","e","E"],function(e,t,r,n){t[n]=eh(e)});var ej="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");function eD(e,t,r){var n,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(n=0,this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[];n<7;++n)o=d([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(o,"").toLocaleLowerCase();return r?"dddd"===t?-1!==(i=eF.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=eF.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=eF.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=eF.call(this._weekdaysParse,a))||-1!==(i=eF.call(this._shortWeekdaysParse,a))?i:-1!==(i=eF.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=eF.call(this._shortWeekdaysParse,a))||-1!==(i=eF.call(this._weekdaysParse,a))?i:-1!==(i=eF.call(this._minWeekdaysParse,a))?i:null:-1!==(i=eF.call(this._minWeekdaysParse,a))||-1!==(i=eF.call(this._weekdaysParse,a))?i:-1!==(i=eF.call(this._shortWeekdaysParse,a))?i:null}function eL(){function e(e,t){return t.length-e.length}var t,r,n,i,o,a=[],s=[],l=[],c=[];for(t=0;t<7;t++)r=d([2e3,1]).day(t),n=eu(this.weekdaysMin(r,"")),i=eu(this.weekdaysShort(r,"")),o=eu(this.weekdays(r,"")),a.push(n),s.push(i),l.push(o),c.push(n),c.push(i),c.push(o);a.sort(e),s.sort(e),l.sort(e),c.sort(e),this._weekdaysRegex=RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=RegExp("^("+a.join("|")+")","i")}function eU(){return this.hours()%12||12}function eB(e,t){N(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function ez(e,t){return t._meridiemParse}N("H",["HH",2],0,"hour"),N("h",["hh",2],0,eU),N("k",["kk",2],0,function(){return this.hours()||24}),N("hmm",0,0,function(){return""+eU.apply(this)+P(this.minutes(),2)}),N("hmmss",0,0,function(){return""+eU.apply(this)+P(this.minutes(),2)+P(this.seconds(),2)}),N("Hmm",0,0,function(){return""+this.hours()+P(this.minutes(),2)}),N("Hmmss",0,0,function(){return""+this.hours()+P(this.minutes(),2)+P(this.seconds(),2)}),eB("a",!0),eB("A",!1),ec("a",ez),ec("A",ez),ec("H",K,el),ec("h",K,es),ec("k",K,es),ec("HH",K,Y),ec("hh",K,Y),ec("kk",K,Y),ec("hmm",X),ec("hmmss",J),ec("Hmm",X),ec("Hmmss",J),ep(["H","HH"],3),ep(["k","kk"],function(e,t,r){var n=eh(e);t[3]=24===n?0:n}),ep(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e}),ep(["h","hh"],function(e,t,r){t[3]=eh(e),h(r).bigHour=!0}),ep("hmm",function(e,t,r){var n=e.length-2;t[3]=eh(e.substr(0,n)),t[4]=eh(e.substr(n)),h(r).bigHour=!0}),ep("hmmss",function(e,t,r){var n=e.length-4,i=e.length-2;t[3]=eh(e.substr(0,n)),t[4]=eh(e.substr(n,2)),t[5]=eh(e.substr(i)),h(r).bigHour=!0}),ep("Hmm",function(e,t,r){var n=e.length-2;t[3]=eh(e.substr(0,n)),t[4]=eh(e.substr(n))}),ep("Hmmss",function(e,t,r){var n=e.length-4,i=e.length-2;t[3]=eh(e.substr(0,n)),t[4]=eh(e.substr(n,2)),t[5]=eh(e.substr(i))});var eF,eW,eH=ev("Hours",!0),eZ={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:e_,week:{dow:0,doy:6},weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysShort:ej,meridiemParse:/[ap]\.?m?\.?/i},eY={},eG={};function eV(e){return e?e.toLowerCase().replace("_","-"):e}function eq(t){var r=null;if(void 0===eY[t]&&e&&e.exports&&t&&t.match("^[^/\\\\]*$"))try{r=eW._abbr,function(){var e=Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}(),eK(r)}catch(e){eY[t]=null}return eY[t]}function eK(e,t){var r;return e&&((r=a(t)?eJ(e):eX(e,t))?eW=r:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),eW._abbr}function eX(e,t){if(null===t)return delete eY[e],null;var r,n=eZ;if(t.abbr=e,null!=eY[e])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=eY[e]._config;else if(null!=t.parentLocale){if(null!=eY[t.parentLocale])n=eY[t.parentLocale]._config;else{if(null==(r=eq(t.parentLocale)))return eG[t.parentLocale]||(eG[t.parentLocale]=[]),eG[t.parentLocale].push({name:e,config:t}),null;n=r._config}}return eY[e]=new O(A(n,t)),eG[e]&&eG[e].forEach(function(e){eX(e.name,e.config)}),eK(e),eY[e]}function eJ(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return eW;if(!r(e)){if(t=eq(e))return t;e=[e]}return function(e){for(var t,r,n,i,o=0;o<e.length;){for(t=(i=eV(e[o]).split("-")).length,r=(r=eV(e[o+1]))?r.split("-"):null;t>0;){if(n=eq(i.slice(0,t).join("-")))return n;if(r&&r.length>=t&&function(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}(i,r)>=t-1)break;t--}o++}return eW}(e)}function eQ(e){var t,r=e._a;return r&&-2===h(e).overflow&&(t=r[1]<0||r[1]>11?1:r[2]<1||r[2]>eC(r[0],r[1])?2:r[3]<0||r[3]>24||24===r[3]&&(0!==r[4]||0!==r[5]||0!==r[6])?3:r[4]<0||r[4]>59?4:r[5]<0||r[5]>59?5:r[6]<0||r[6]>999?6:-1,h(e)._overflowDayOfYear&&(t<0||t>2)&&(t=2),h(e)._overflowWeeks&&-1===t&&(t=7),h(e)._overflowWeekday&&-1===t&&(t=8),h(e).overflow=t),e}var e0=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,e1=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,e2=/Z|[+-]\d\d(?::?\d\d)?/,e3=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],e5=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],e4=/^\/?Date\((-?\d+)/i,e6=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,e8={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function e7(e){var t,r,n,i,o,a,s=e._i,l=e0.exec(s)||e1.exec(s),c=e3.length,u=e5.length;if(l){for(t=0,h(e).iso=!0,r=c;t<r;t++)if(e3[t][1].exec(l[1])){i=e3[t][0],n=!1!==e3[t][2];break}if(null==i){e._isValid=!1;return}if(l[3]){for(t=0,r=u;t<r;t++)if(e5[t][1].exec(l[3])){o=(l[2]||" ")+e5[t][0];break}if(null==o){e._isValid=!1;return}}if(!n&&null!=o){e._isValid=!1;return}if(l[4]){if(e2.exec(l[4]))a="Z";else{e._isValid=!1;return}}e._f=i+(o||"")+(a||""),tr(e)}else e._isValid=!1}function e9(e){var t,r,n,i,o,a,s,l,c,u=e6.exec(e._i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(u){if(r=u[4],n=u[3],i=u[2],o=u[5],a=u[6],s=u[7],l=[(t=parseInt(r,10))<=49?2e3+t:t<=999?1900+t:t,e_.indexOf(n),parseInt(i,10),parseInt(o,10),parseInt(a,10)],s&&l.push(parseInt(s,10)),(c=u[1])&&ej.indexOf(c)!==new Date(l[0],l[1],l[2]).getDay()&&(h(e).weekdayMismatch=!0,e._isValid=!1,1))return;e._a=l,e._tzm=function(e,t,r){if(e)return e8[e];if(t)return 0;var n=parseInt(r,10),i=n%100;return 60*((n-i)/100)+i}(u[8],u[9],u[10]),e._d=eT.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),h(e).rfc2822=!0}else e._isValid=!1}function te(e,t,r){return null!=e?e:null!=t?t:r}function tt(e){var r,n,i,o,a,s,l,c,u,d,f,p,g,m,y,w=[];if(!e._d){for(d=new Date(t.now()),g=e._useUTC?[d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()]:[d.getFullYear(),d.getMonth(),d.getDate()],e._w&&null==e._a[2]&&null==e._a[1]&&(null!=(r=e._w).GG||null!=r.W||null!=r.E?(a=1,s=4,n=te(r.GG,e._a[0],e$(to(),1,4).year),i=te(r.W,1),((o=te(r.E,1))<1||o>7)&&(c=!0)):(a=e._locale._week.dow,s=e._locale._week.doy,u=e$(to(),a,s),n=te(r.gg,e._a[0],u.year),i=te(r.w,u.week),null!=r.d?((o=r.d)<0||o>6)&&(c=!0):null!=r.e?(o=r.e+a,(r.e<0||r.e>6)&&(c=!0)):o=a),i<1||i>eN(n,a,s)?h(e)._overflowWeeks=!0:null!=c?h(e)._overflowWeekday=!0:(l=eI(n,i,o,a,s),e._a[0]=l.year,e._dayOfYear=l.dayOfYear)),null!=e._dayOfYear&&(y=te(e._a[0],g[0]),(e._dayOfYear>ey(y)||0===e._dayOfYear)&&(h(e)._overflowDayOfYear=!0),p=eT(y,0,e._dayOfYear),e._a[1]=p.getUTCMonth(),e._a[2]=p.getUTCDate()),f=0;f<3&&null==e._a[f];++f)e._a[f]=w[f]=g[f];for(;f<7;f++)e._a[f]=w[f]=null==e._a[f]?2===f?1:0:e._a[f];24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,e._a[3]=0),e._d=(e._useUTC?eT:eP).apply(null,w),m=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[3]=24),e._w&&void 0!==e._w.d&&e._w.d!==m&&(h(e).weekdayMismatch=!0)}}function tr(e){if(e._f===t.ISO_8601){e7(e);return}if(e._f===t.RFC_2822){e9(e);return}e._a=[],h(e).empty=!0;var r,n,o,a,s,l,c,u,d,f,p,g=""+e._i,m=g.length,y=0;for(s=0,p=(c=j(e._f,e._locale).match(T)||[]).length;s<p;s++)(u=c[s],(l=(g.match(i(W,u)?W[u](e._strict,e._locale):new RegExp(eu(u.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,r,n,i){return t||r||n||i}))))||[])[0])&&((d=g.substr(0,g.indexOf(l))).length>0&&h(e).unusedInput.push(d),g=g.slice(g.indexOf(l)+l.length),y+=l.length),$[u])?(l?h(e).empty=!1:h(e).unusedTokens.push(u),null!=l&&i(ef,u)&&ef[u](l,e._a,e,u)):e._strict&&!l&&h(e).unusedTokens.push(u);h(e).charsLeftOver=m-y,g.length>0&&h(e).unusedInput.push(g),e._a[3]<=12&&!0===h(e).bigHour&&e._a[3]>0&&(h(e).bigHour=void 0),h(e).parsedDateParts=e._a.slice(0),h(e).meridiem=e._meridiem,e._a[3]=(r=e._locale,n=e._a[3],null==(o=e._meridiem)?n:null!=r.meridiemHour?r.meridiemHour(n,o):(null!=r.isPM&&((a=r.isPM(o))&&n<12&&(n+=12),a||12!==n||(n=0)),n)),null!==(f=h(e).era)&&(e._a[0]=e._locale.erasConvertYear(f,e._a[0])),tt(e),eQ(e)}function tn(e){var i,o=e._i,d=e._f;return(e._locale=e._locale||eJ(e._l),null===o||void 0===d&&""===o)?p({nullInput:!0}):("string"==typeof o&&(e._i=o=e._locale.preparse(o)),x(o))?new b(eQ(o)):(l(o)?e._d=o:r(d)?function(e){var t,r,n,i,o,a,s=!1,l=e._f.length;if(0===l){h(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<l;i++)o=0,a=!1,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],tr(t),f(t)&&(a=!0),o+=h(t).charsLeftOver+10*h(t).unusedTokens.length,h(t).score=o,s?o<n&&(n=o,r=t):(null==n||o<n||a)&&(n=o,r=t,a&&(s=!0));u(e,r||t)}(e):d?tr(e):a(i=e._i)?e._d=new Date(t.now()):l(i)?e._d=new Date(i.valueOf()):"string"==typeof i?function(e){var r=e4.exec(e._i);if(null!==r){e._d=new Date(+r[1]);return}e7(e),!1===e._isValid&&(delete e._isValid,e9(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:t.createFromInputFallback(e)))}(e):r(i)?(e._a=c(i.slice(0),function(e){return parseInt(e,10)}),tt(e)):n(i)?function(e){if(!e._d){var t=U(e._i),r=void 0===t.day?t.date:t.day;e._a=c([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),tt(e)}}(e):s(i)?e._d=new Date(i):t.createFromInputFallback(e),f(e)||(e._d=null),e)}function ti(e,t,i,a,s){var l,c={};return(!0===t||!1===t)&&(a=t,t=void 0),(!0===i||!1===i)&&(a=i,i=void 0),(n(e)&&o(e)||r(e)&&0===e.length)&&(e=void 0),c._isAMomentObject=!0,c._useUTC=c._isUTC=s,c._l=i,c._i=e,c._f=t,c._strict=a,(l=new b(eQ(tn(c))))._nextDay&&(l.add(1,"d"),l._nextDay=void 0),l}function to(e,t,r,n){return ti(e,t,r,n,!1)}t.createFromInputFallback=_("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),t.ISO_8601=function(){},t.RFC_2822=function(){};var ta=_("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=to.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),ts=_("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=to.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:p()});function tl(e,t){var n,i;if(1===t.length&&r(t[0])&&(t=t[0]),!t.length)return to();for(i=1,n=t[0];i<t.length;++i)(!t[i].isValid()||t[i][e](n))&&(n=t[i]);return n}var tc=["year","quarter","month","week","day","hour","minute","second","millisecond"];function tu(e){var t=U(e),r=t.year||0,n=t.quarter||0,o=t.month||0,a=t.week||t.isoWeek||0,s=t.day||0,l=t.hour||0,c=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=function(e){var t,r,n=!1,o=tc.length;for(t in e)if(i(e,t)&&!(-1!==eF.call(tc,t)&&(null==e[t]||!isNaN(e[t]))))return!1;for(r=0;r<o;++r)if(e[tc[r]]){if(n)return!1;parseFloat(e[tc[r]])!==eh(e[tc[r]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*u+6e4*c+36e5*l,this._days=+s+7*a,this._months=+o+3*n+12*r,this._data={},this._locale=eJ(),this._bubble()}function td(e){return e instanceof tu}function th(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function tf(e,t){N(e,0,0,function(){var e=this.utcOffset(),r="+";return e<0&&(e=-e,r="-"),r+P(~~(e/60),2)+t+P(~~e%60,2)})}tf("Z",":"),tf("ZZ",""),ec("Z",eo),ec("ZZ",eo),ep(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=tg(eo,e)});var tp=/([\+\-]|\d\d)/gi;function tg(e,t){var r,n,i=(t||"").match(e);return null===i?null:0===(n=+(60*(r=((i[i.length-1]||[])+"").match(tp)||["-",0,0])[1])+eh(r[2]))?0:"+"===r[0]?n:-n}function tm(e,r){var n,i;return r._isUTC?(n=r.clone(),i=(x(e)||l(e)?e.valueOf():to(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),t.updateOffset(n,!1),n):to(e).local()}function ty(e){return-Math.round(e._d.getTimezoneOffset())}function tw(){return!!this.isValid()&&this._isUTC&&0===this._offset}t.updateOffset=function(){};var tv=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,tb=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function tx(e,t){var r,n,o,a,l,c,u=e,d=null;return td(e)?u={ms:e._milliseconds,d:e._days,M:e._months}:s(e)||!isNaN(+e)?(u={},t?u[t]=+e:u.milliseconds=+e):(d=tv.exec(e))?(a="-"===d[1]?-1:1,u={y:0,d:eh(d[2])*a,h:eh(d[3])*a,m:eh(d[4])*a,s:eh(d[5])*a,ms:eh(th(1e3*d[6]))*a}):(d=tb.exec(e))?(a="-"===d[1]?-1:1,u={y:tC(d[2],a),M:tC(d[3],a),w:tC(d[4],a),d:tC(d[5],a),h:tC(d[6],a),m:tC(d[7],a),s:tC(d[8],a)}):null==u?u={}:"object"==typeof u&&("from"in u||"to"in u)&&(r=to(u.from),n=to(u.to),c=r.isValid()&&n.isValid()?(n=tm(n,r),r.isBefore(n)?o=t_(r,n):((o=t_(n,r)).milliseconds=-o.milliseconds,o.months=-o.months),o):{milliseconds:0,months:0},(u={}).ms=c.milliseconds,u.M=c.months),l=new tu(u),td(e)&&i(e,"_locale")&&(l._locale=e._locale),td(e)&&i(e,"_isValid")&&(l._isValid=e._isValid),l}function tC(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function t_(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function tE(e,t){return function(r,n){var i;return null===n||isNaN(+n)||(S(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=n,n=i),tS(this,tx(r,n),e),this}}function tS(e,r,n,i){var o=r._milliseconds,a=th(r._days),s=th(r._months);e.isValid()&&(i=null==i||i,s&&ek(e,eb(e,"Month")+s*n),a&&ex(e,"Date",eb(e,"Date")+a*n),o&&e._d.setTime(e._d.valueOf()+o*n),i&&t.updateOffset(e,a||s))}tx.fn=tu.prototype,tx.invalid=function(){return tx(NaN)};var tk=tE(1,"add"),tA=tE(-1,"subtract");function tO(e){return"string"==typeof e||e instanceof String}function tP(e,t){if(e.date()<t.date())return-tP(t,e);var r,n=(t.year()-e.year())*12+(t.month()-e.month()),i=e.clone().add(n,"months");return r=t-i<0?(t-i)/(i-e.clone().add(n-1,"months")):(t-i)/(e.clone().add(n+1,"months")-i),-(n+r)||0}function tT(e){var t;return void 0===e?this._locale._abbr:(null!=(t=eJ(e))&&(this._locale=t),this)}t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var tR=_("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function tI(){return this._locale}function t$(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-126227808e5:new Date(e,t,r).valueOf()}function tN(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-126227808e5:Date.UTC(e,t,r)}function tM(e,t){return t.erasAbbrRegex(e)}function tj(){var e,t,r,n,i,o=[],a=[],s=[],l=[],c=this.eras();for(e=0,t=c.length;e<t;++e)r=eu(c[e].name),n=eu(c[e].abbr),i=eu(c[e].narrow),a.push(r),o.push(n),s.push(i),l.push(r),l.push(n),l.push(i);this._erasRegex=RegExp("^("+l.join("|")+")","i"),this._erasNameRegex=RegExp("^("+a.join("|")+")","i"),this._erasAbbrRegex=RegExp("^("+o.join("|")+")","i"),this._erasNarrowRegex=RegExp("^("+s.join("|")+")","i")}function tD(e,t){N(0,[e,e.length],0,t)}function tL(e,t,r,n,i){var o;return null==e?e$(this,n,i).year:(t>(o=eN(e,n,i))&&(t=o),tU.call(this,e,t,r,n,i))}function tU(e,t,r,n,i){var o=eI(e,t,r,n,i),a=eT(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}N("N",0,0,"eraAbbr"),N("NN",0,0,"eraAbbr"),N("NNN",0,0,"eraAbbr"),N("NNNN",0,0,"eraName"),N("NNNNN",0,0,"eraNarrow"),N("y",["y",1],"yo","eraYear"),N("y",["yy",2],0,"eraYear"),N("y",["yyy",3],0,"eraYear"),N("y",["yyyy",4],0,"eraYear"),ec("N",tM),ec("NN",tM),ec("NNN",tM),ec("NNNN",function(e,t){return t.erasNameRegex(e)}),ec("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),ep(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var i=r._locale.erasParse(e,n,r._strict);i?h(r).era=i:h(r).invalidEra=e}),ec("y",er),ec("yy",er),ec("yyy",er),ec("yyyy",er),ec("yo",function(e,t){return t._eraYearOrdinalRegex||er}),ep(["y","yy","yyy","yyyy"],0),ep(["yo"],function(e,t,r,n){var i;r._locale._eraYearOrdinalRegex&&(i=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[0]=r._locale.eraYearOrdinalParse(e,i):t[0]=parseInt(e,10)}),N(0,["gg",2],0,function(){return this.weekYear()%100}),N(0,["GG",2],0,function(){return this.isoWeekYear()%100}),tD("gggg","weekYear"),tD("ggggg","weekYear"),tD("GGGG","isoWeekYear"),tD("GGGGG","isoWeekYear"),ec("G",en),ec("g",en),ec("GG",K,Y),ec("gg",K,Y),ec("GGGG",ee,V),ec("gggg",ee,V),ec("GGGGG",et,q),ec("ggggg",et,q),eg(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=eh(e)}),eg(["gg","GG"],function(e,r,n,i){r[i]=t.parseTwoDigitYear(e)}),N("Q",0,"Qo","quarter"),ec("Q",Z),ep("Q",function(e,t){t[1]=(eh(e)-1)*3}),N("D",["DD",2],"Do","date"),ec("D",K,es),ec("DD",K,Y),ec("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ep(["D","DD"],2),ep("Do",function(e,t){t[2]=eh(e.match(K)[0])});var tB=ev("Date",!0);N("DDD",["DDDD",3],"DDDo","dayOfYear"),ec("DDD",Q),ec("DDDD",G),ep(["DDD","DDDD"],function(e,t,r){r._dayOfYear=eh(e)}),N("m",["mm",2],0,"minute"),ec("m",K,el),ec("mm",K,Y),ep(["m","mm"],4);var tz=ev("Minutes",!1);N("s",["ss",2],0,"second"),ec("s",K,el),ec("ss",K,Y),ep(["s","ss"],5);var tF=ev("Seconds",!1);for(N("S",0,0,function(){return~~(this.millisecond()/100)}),N(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),N(0,["SSS",3],0,"millisecond"),N(0,["SSSS",4],0,function(){return 10*this.millisecond()}),N(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),N(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),N(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),N(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),N(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),ec("S",Q,Z),ec("SS",Q,Y),ec("SSS",Q,G),g="SSSS";g.length<=9;g+="S")ec(g,er);function tW(e,t){t[6]=eh(("0."+e)*1e3)}for(g="S";g.length<=9;g+="S")ep(g,tW);m=ev("Milliseconds",!1),N("z",0,0,"zoneAbbr"),N("zz",0,0,"zoneName");var tH=b.prototype;function tZ(e){return e}tH.add=tk,tH.calendar=function(e,a){if(1==arguments.length){if(arguments[0]){var c,u,d;(c=arguments[0],x(c)||l(c)||tO(c)||s(c)||(u=r(c),d=!1,u&&(d=0===c.filter(function(e){return!s(e)&&tO(c)}).length),u&&d)||function(e){var t,r,a=n(e)&&!o(e),s=!1,l=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],c=l.length;for(t=0;t<c;t+=1)r=l[t],s=s||i(e,r);return a&&s}(c)||null==c)?(e=arguments[0],a=void 0):function(e){var t,r,a=n(e)&&!o(e),s=!1,l=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<l.length;t+=1)r=l[t],s=s||i(e,r);return a&&s}(arguments[0])&&(a=arguments[0],e=void 0)}else e=void 0,a=void 0}var h=e||to(),f=tm(h,this).startOf("day"),p=t.calendarFormat(this,f)||"sameElse",g=a&&(k(a[p])?a[p].call(this,h):a[p]);return this.format(g||this.localeData().calendar(p,this,to(h)))},tH.clone=function(){return new b(this)},tH.diff=function(e,t,r){var n,i,o;if(!this.isValid()||!(n=tm(e,this)).isValid())return NaN;switch(i=(n.utcOffset()-this.utcOffset())*6e4,t=L(t)){case"year":o=tP(this,n)/12;break;case"month":o=tP(this,n);break;case"quarter":o=tP(this,n)/3;break;case"second":o=(this-n)/1e3;break;case"minute":o=(this-n)/6e4;break;case"hour":o=(this-n)/36e5;break;case"day":o=(this-n-i)/864e5;break;case"week":o=(this-n-i)/6048e5;break;default:o=this-n}return r?o:ed(o)},tH.endOf=function(e){var r,n;if(void 0===(e=L(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?tN:t$,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=36e5-((r+(this._isUTC?0:6e4*this.utcOffset()))%36e5+36e5)%36e5-1;break;case"minute":r=this._d.valueOf(),r+=6e4-(r%6e4+6e4)%6e4-1;break;case"second":r=this._d.valueOf(),r+=1e3-(r%1e3+1e3)%1e3-1}return this._d.setTime(r),t.updateOffset(this,!0),this},tH.format=function(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var r=M(this,e);return this.localeData().postformat(r)},tH.from=function(e,t){return this.isValid()&&(x(e)&&e.isValid()||to(e).isValid())?tx({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},tH.fromNow=function(e){return this.from(to(),e)},tH.to=function(e,t){return this.isValid()&&(x(e)&&e.isValid()||to(e).isValid())?tx({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},tH.toNow=function(e){return this.to(to(),e)},tH.get=function(e){return k(this[e=L(e)])?this[e]():this},tH.invalidAt=function(){return h(this).overflow},tH.isAfter=function(e,t){var r=x(e)?e:to(e);return!!(this.isValid()&&r.isValid())&&("millisecond"===(t=L(t)||"millisecond")?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf())},tH.isBefore=function(e,t){var r=x(e)?e:to(e);return!!(this.isValid()&&r.isValid())&&("millisecond"===(t=L(t)||"millisecond")?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf())},tH.isBetween=function(e,t,r,n){var i=x(e)?e:to(e),o=x(t)?t:to(t);return!!(this.isValid()&&i.isValid()&&o.isValid())&&("("===(n=n||"()")[0]?this.isAfter(i,r):!this.isBefore(i,r))&&(")"===n[1]?this.isBefore(o,r):!this.isAfter(o,r))},tH.isSame=function(e,t){var r,n=x(e)?e:to(e);return!!(this.isValid()&&n.isValid())&&("millisecond"===(t=L(t)||"millisecond")?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf()))},tH.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},tH.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},tH.isValid=function(){return f(this)},tH.lang=tR,tH.locale=tT,tH.localeData=tI,tH.max=ts,tH.min=ta,tH.parsingFlags=function(){return u({},h(this))},tH.set=function(e,t){if("object"==typeof e){var r,n=function(e){var t,r=[];for(t in e)i(e,t)&&r.push({unit:t,priority:H[t]});return r.sort(function(e,t){return e.priority-t.priority}),r}(e=U(e)),o=n.length;for(r=0;r<o;r++)this[n[r].unit](e[n[r].unit])}else if(k(this[e=L(e)]))return this[e](t);return this},tH.startOf=function(e){var r,n;if(void 0===(e=L(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?tN:t$,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=((r+(this._isUTC?0:6e4*this.utcOffset()))%36e5+36e5)%36e5;break;case"minute":r=this._d.valueOf(),r-=(r%6e4+6e4)%6e4;break;case"second":r=this._d.valueOf(),r-=(r%1e3+1e3)%1e3}return this._d.setTime(r),t.updateOffset(this,!0),this},tH.subtract=tA,tH.toArray=function(){return[this.year(),this.month(),this.date(),this.hour(),this.minute(),this.second(),this.millisecond()]},tH.toObject=function(){return{years:this.year(),months:this.month(),date:this.date(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()}},tH.toDate=function(){return new Date(this.valueOf())},tH.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,r=t?this.clone().utc():this;return 0>r.year()||r.year()>9999?M(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):k(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+6e4*this.utcOffset()).toISOString().replace("Z",M(r,"Z")):M(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},tH.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,r,n="moment",i="";return this.isLocal()||(n=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),e="["+n+'("]',t=0<=this.year()&&9999>=this.year()?"YYYY":"YYYYYY",r=i+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+r)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(tH[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),tH.toJSON=function(){return this.isValid()?this.toISOString():null},tH.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},tH.unix=function(){return Math.floor(this.valueOf()/1e3)},tH.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},tH.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},tH.eraName=function(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""},tH.eraNarrow=function(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""},tH.eraAbbr=function(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""},tH.eraYear=function(){var e,r,n,i,o=this.localeData().eras();for(e=0,r=o.length;e<r;++e)if(n=o[e].since<=o[e].until?1:-1,i=this.clone().startOf("day").valueOf(),o[e].since<=i&&i<=o[e].until||o[e].until<=i&&i<=o[e].since)return(this.year()-t(o[e].since).year())*n+o[e].offset;return this.year()},tH.year=ew,tH.isLeapYear=function(){return em(this.year())},tH.weekYear=function(e){return tL.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)},tH.isoWeekYear=function(e){return tL.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},tH.quarter=tH.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)},tH.month=eA,tH.daysInMonth=function(){return eC(this.year(),this.month())},tH.week=tH.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add((e-t)*7,"d")},tH.isoWeek=tH.isoWeeks=function(e){var t=e$(this,1,4).week;return null==e?t:this.add((e-t)*7,"d")},tH.weeksInYear=function(){var e=this.localeData()._week;return eN(this.year(),e.dow,e.doy)},tH.weeksInWeekYear=function(){var e=this.localeData()._week;return eN(this.weekYear(),e.dow,e.doy)},tH.isoWeeksInYear=function(){return eN(this.year(),1,4)},tH.isoWeeksInISOWeekYear=function(){return eN(this.isoWeekYear(),1,4)},tH.date=tB,tH.day=tH.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,r,n=eb(this,"Day");return null==e?n:(t=e,r=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=r.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-n,"d"))},tH.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},tH.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,r=(t=this.localeData(),"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e);return this.day(this.day()%7?r:r-7)},tH.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},tH.hour=tH.hours=eH,tH.minute=tH.minutes=tz,tH.second=tH.seconds=tF,tH.millisecond=tH.milliseconds=m,tH.utcOffset=function(e,r,n){var i,o=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?o:ty(this);if("string"==typeof e){if(null===(e=tg(eo,e)))return this}else 16>Math.abs(e)&&!n&&(e*=60);return!this._isUTC&&r&&(i=ty(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),o===e||(!r||this._changeInProgress?tS(this,tx(e-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this},tH.utc=function(e){return this.utcOffset(0,e)},tH.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(ty(this),"m")),this},tH.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=tg(ei,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},tH.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?to(e).utcOffset():0,(this.utcOffset()-e)%60==0)},tH.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},tH.isLocal=function(){return!!this.isValid()&&!this._isUTC},tH.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},tH.isUtc=tw,tH.isUTC=tw,tH.zoneAbbr=function(){return this._isUTC?"UTC":""},tH.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},tH.dates=_("dates accessor is deprecated. Use date instead.",tB),tH.months=_("months accessor is deprecated. Use month instead",eA),tH.years=_("years accessor is deprecated. Use year instead",ew),tH.zone=_("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),tH.isDSTShifted=_("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!a(this._isDSTShifted))return this._isDSTShifted;var e,t={};return v(t,this),(t=tn(t))._a?(e=t._isUTC?d(t._a):to(t._a),this._isDSTShifted=this.isValid()&&function(e,t,r){var n,i=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),a=0;for(n=0;n<i;n++)(r&&e[n]!==t[n]||!r&&eh(e[n])!==eh(t[n]))&&a++;return a+o}(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted});var tY=O.prototype;function tG(e,t,r,n){var i=eJ(),o=d().set(n,t);return i[r](o,e)}function tV(e,t,r){if(s(e)&&(t=e,e=void 0),e=e||"",null!=t)return tG(e,t,r,"month");var n,i=[];for(n=0;n<12;n++)i[n]=tG(e,n,r,"month");return i}function tq(e,t,r,n){"boolean"==typeof e||(r=t=e,e=!1),s(t)&&(r=t,t=void 0),t=t||"";var i,o=eJ(),a=e?o._week.dow:0,l=[];if(null!=r)return tG(t,(r+a)%7,n,"day");for(i=0;i<7;i++)l[i]=tG(t,(i+a)%7,n,"day");return l}tY.calendar=function(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return k(n)?n.call(t,r):n},tY.longDateFormat=function(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(T).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},tY.invalidDate=function(){return this._invalidDate},tY.ordinal=function(e){return this._ordinal.replace("%d",e)},tY.preparse=tZ,tY.postformat=tZ,tY.relativeTime=function(e,t,r,n){var i=this._relativeTime[r];return k(i)?i(e,t,r,n):i.replace(/%d/i,e)},tY.pastFuture=function(e,t){var r=this._relativeTime[e>0?"future":"past"];return k(r)?r(t):r.replace(/%s/i,t)},tY.set=function(e){var t,r;for(r in e)i(e,r)&&(k(t=e[r])?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},tY.eras=function(e,r){var n,i,o,a=this._eras||eJ("en")._eras;for(n=0,i=a.length;n<i;++n)switch("string"==typeof a[n].since&&(o=t(a[n].since).startOf("day"),a[n].since=o.valueOf()),typeof a[n].until){case"undefined":a[n].until=Infinity;break;case"string":o=t(a[n].until).startOf("day").valueOf(),a[n].until=o.valueOf()}return a},tY.erasParse=function(e,t,r){var n,i,o,a,s,l=this.eras();for(n=0,e=e.toUpperCase(),i=l.length;n<i;++n)if(o=l[n].name.toUpperCase(),a=l[n].abbr.toUpperCase(),s=l[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(a===e)return l[n];break;case"NNNN":if(o===e)return l[n];break;case"NNNNN":if(s===e)return l[n]}else if([o,a,s].indexOf(e)>=0)return l[n]},tY.erasConvertYear=function(e,r){var n=e.since<=e.until?1:-1;return void 0===r?t(e.since).year():t(e.since).year()+(r-e.offset)*n},tY.erasAbbrRegex=function(e){return i(this,"_erasAbbrRegex")||tj.call(this),e?this._erasAbbrRegex:this._erasRegex},tY.erasNameRegex=function(e){return i(this,"_erasNameRegex")||tj.call(this),e?this._erasNameRegex:this._erasRegex},tY.erasNarrowRegex=function(e){return i(this,"_erasNarrowRegex")||tj.call(this),e?this._erasNarrowRegex:this._erasRegex},tY.months=function(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||eE).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone},tY.monthsShort=function(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[eE.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},tY.monthsParse=function(e,t,r){var n,i,o;if(this._monthsParseExact)return eS.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++)if(i=d([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),r||this._monthsParse[n]||(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[n]=RegExp(o.replace(".",""),"i")),r&&"MMMM"===t&&this._longMonthsParse[n].test(e)||r&&"MMM"===t&&this._shortMonthsParse[n].test(e)||!r&&this._monthsParse[n].test(e))return n},tY.monthsRegex=function(e){return this._monthsParseExact?(i(this,"_monthsRegex")||eO.call(this),e)?this._monthsStrictRegex:this._monthsRegex:(i(this,"_monthsRegex")||(this._monthsRegex=ea),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},tY.monthsShortRegex=function(e){return this._monthsParseExact?(i(this,"_monthsRegex")||eO.call(this),e)?this._monthsShortStrictRegex:this._monthsShortRegex:(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ea),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},tY.week=function(e){return e$(e,this._week.dow,this._week.doy).week},tY.firstDayOfYear=function(){return this._week.doy},tY.firstDayOfWeek=function(){return this._week.dow},tY.weekdays=function(e,t){var n=r(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?eM(n,this._week.dow):e?n[e.day()]:n},tY.weekdaysMin=function(e){return!0===e?eM(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},tY.weekdaysShort=function(e){return!0===e?eM(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},tY.weekdaysParse=function(e,t,r){var n,i,o;if(this._weekdaysParseExact)return eD.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(i=d([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[n]=RegExp(o.replace(".",""),"i")),r&&"dddd"===t&&this._fullWeekdaysParse[n].test(e)||r&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n;if(r&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}},tY.weekdaysRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||eL.call(this),e)?this._weekdaysStrictRegex:this._weekdaysRegex:(i(this,"_weekdaysRegex")||(this._weekdaysRegex=ea),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},tY.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||eL.call(this),e)?this._weekdaysShortStrictRegex:this._weekdaysShortRegex:(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ea),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},tY.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||eL.call(this),e)?this._weekdaysMinStrictRegex:this._weekdaysMinRegex:(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ea),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},tY.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},tY.meridiem=function(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"},eK("en",{eras:[{since:"0001-01-01",until:Infinity,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=1===eh(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+r}}),t.lang=_("moment.lang is deprecated. Use moment.locale instead.",eK),t.langData=_("moment.langData is deprecated. Use moment.localeData instead.",eJ);var tK=Math.abs;function tX(e,t,r,n){var i=tx(t,r);return e._milliseconds+=n*i._milliseconds,e._days+=n*i._days,e._months+=n*i._months,e._bubble()}function tJ(e){return e<0?Math.floor(e):Math.ceil(e)}function tQ(e){return 4800*e/146097}function t0(e){return 146097*e/4800}function t1(e){return function(){return this.as(e)}}var t2=t1("ms"),t3=t1("s"),t5=t1("m"),t4=t1("h"),t6=t1("d"),t8=t1("w"),t7=t1("M"),t9=t1("Q"),re=t1("y");function rt(e){return function(){return this.isValid()?this._data[e]:NaN}}var rr=rt("milliseconds"),rn=rt("seconds"),ri=rt("minutes"),ro=rt("hours"),ra=rt("days"),rs=rt("months"),rl=rt("years"),rc=Math.round,ru={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function rd(e,t,r,n,i){return i.relativeTime(t||1,!!r,e,n)}var rh=Math.abs;function rf(e){return(e>0)-(e<0)||+e}function rp(){if(!this.isValid())return this.localeData().invalidDate();var e,t,r,n,i,o,a,s,l=rh(this._milliseconds)/1e3,c=rh(this._days),u=rh(this._months),d=this.asSeconds();return d?(e=ed(l/60),t=ed(e/60),l%=60,e%=60,r=ed(u/12),u%=12,n=l?l.toFixed(3).replace(/\.?0+$/,""):"",i=d<0?"-":"",o=rf(this._months)!==rf(d)?"-":"",a=rf(this._days)!==rf(d)?"-":"",s=rf(this._milliseconds)!==rf(d)?"-":"",i+"P"+(r?o+r+"Y":"")+(u?o+u+"M":"")+(c?a+c+"D":"")+(t||e||l?"T":"")+(t?s+t+"H":"")+(e?s+e+"M":"")+(l?s+n+"S":"")):"P0D"}var rg=tu.prototype;return rg.isValid=function(){return this._isValid},rg.abs=function(){var e=this._data;return this._milliseconds=tK(this._milliseconds),this._days=tK(this._days),this._months=tK(this._months),e.milliseconds=tK(e.milliseconds),e.seconds=tK(e.seconds),e.minutes=tK(e.minutes),e.hours=tK(e.hours),e.months=tK(e.months),e.years=tK(e.years),this},rg.add=function(e,t){return tX(this,e,t,1)},rg.subtract=function(e,t){return tX(this,e,t,-1)},rg.as=function(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if("month"===(e=L(e))||"quarter"===e||"year"===e)switch(t=this._days+n/864e5,r=this._months+tQ(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(t0(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return 24*t+n/36e5;case"minute":return 1440*t+n/6e4;case"second":return 86400*t+n/1e3;case"millisecond":return Math.floor(864e5*t)+n;default:throw Error("Unknown unit "+e)}},rg.asMilliseconds=t2,rg.asSeconds=t3,rg.asMinutes=t5,rg.asHours=t4,rg.asDays=t6,rg.asWeeks=t8,rg.asMonths=t7,rg.asQuarters=t9,rg.asYears=re,rg.valueOf=t2,rg._bubble=function(){var e,t,r,n,i,o=this._milliseconds,a=this._days,s=this._months,l=this._data;return o>=0&&a>=0&&s>=0||o<=0&&a<=0&&s<=0||(o+=864e5*tJ(t0(s)+a),a=0,s=0),l.milliseconds=o%1e3,e=ed(o/1e3),l.seconds=e%60,t=ed(e/60),l.minutes=t%60,r=ed(t/60),l.hours=r%24,a+=ed(r/24),s+=i=ed(tQ(a)),a-=tJ(t0(i)),n=ed(s/12),s%=12,l.days=a,l.months=s,l.years=n,this},rg.clone=function(){return tx(this)},rg.get=function(e){return e=L(e),this.isValid()?this[e+"s"]():NaN},rg.milliseconds=rr,rg.seconds=rn,rg.minutes=ri,rg.hours=ro,rg.days=ra,rg.weeks=function(){return ed(this.days()/7)},rg.months=rs,rg.years=rl,rg.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var r,n,i,o,a,s,l,c,u,d,h,f,p,g=!1,m=ru;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(g=e),"object"==typeof t&&(m=Object.assign({},ru,t),null!=t.s&&null==t.ss&&(m.ss=t.s-1)),f=this.localeData(),r=!g,n=m,i=tx(this).abs(),o=rc(i.as("s")),a=rc(i.as("m")),s=rc(i.as("h")),l=rc(i.as("d")),c=rc(i.as("M")),u=rc(i.as("w")),d=rc(i.as("y")),h=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||s<=1&&["h"]||s<n.h&&["hh",s]||l<=1&&["d"]||l<n.d&&["dd",l],null!=n.w&&(h=h||u<=1&&["w"]||u<n.w&&["ww",u]),(h=h||c<=1&&["M"]||c<n.M&&["MM",c]||d<=1&&["y"]||["yy",d])[2]=r,h[3]=+this>0,h[4]=f,p=rd.apply(null,h),g&&(p=f.pastFuture(+this,p)),f.postformat(p)},rg.toISOString=rp,rg.toString=rp,rg.toJSON=rp,rg.locale=tT,rg.localeData=tI,rg.toIsoString=_("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rp),rg.lang=tR,N("X",0,0,"unix"),N("x",0,0,"valueOf"),ec("x",en),ec("X",/[+-]?\d+(\.\d{1,3})?/),ep("X",function(e,t,r){r._d=new Date(1e3*parseFloat(e))}),ep("x",function(e,t,r){r._d=new Date(eh(e))}),t.version="2.30.1",B=to,t.fn=tH,t.min=function(){var e=[].slice.call(arguments,0);return tl("isBefore",e)},t.max=function(){var e=[].slice.call(arguments,0);return tl("isAfter",e)},t.now=function(){return Date.now?Date.now():+new Date},t.utc=d,t.unix=function(e){return to(1e3*e)},t.months=function(e,t){return tV(e,t,"months")},t.isDate=l,t.locale=eK,t.invalid=p,t.duration=tx,t.isMoment=x,t.weekdays=function(e,t,r){return tq(e,t,r,"weekdays")},t.parseZone=function(){return to.apply(null,arguments).parseZone()},t.localeData=eJ,t.isDuration=td,t.monthsShort=function(e,t){return tV(e,t,"monthsShort")},t.weekdaysMin=function(e,t,r){return tq(e,t,r,"weekdaysMin")},t.defineLocale=eX,t.updateLocale=function(e,t){if(null!=t){var r,n,i=eZ;null!=eY[e]&&null!=eY[e].parentLocale?eY[e].set(A(eY[e]._config,t)):(null!=(n=eq(e))&&(i=n._config),t=A(i,t),null==n&&(t.abbr=e),(r=new O(t)).parentLocale=eY[e],eY[e]=r),eK(e)}else null!=eY[e]&&(null!=eY[e].parentLocale?(eY[e]=eY[e].parentLocale,e===eK()&&eK(e)):null!=eY[e]&&delete eY[e]);return eY[e]},t.locales=function(){return F(eY)},t.weekdaysShort=function(e,t,r){return tq(e,t,r,"weekdaysShort")},t.normalizeUnits=L,t.relativeTimeRounding=function(e){return void 0===e?rc:"function"==typeof e&&(rc=e,!0)},t.relativeTimeThreshold=function(e,t){return void 0!==ru[e]&&(void 0===t?ru[e]:(ru[e]=t,"s"===e&&(ru.ss=t-1),!0))},t.calendarFormat=function(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"},t.prototype=tH,t.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},t}()},83454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(77663)},91118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(62109)}])},24894:function(e,t){"use strict";t.Z={src:"/_next/static/media/cute-cat-icon.2ae8b2bf.svg",height:36,width:50,blurWidth:0,blurHeight:0}},5742:function(e,t){"use strict";t.Z={src:"/_next/static/media/cute-green-cat-icon.4e21b087.svg",height:36,width:49,blurWidth:0,blurHeight:0}},67808:function(e,t){"use strict";t.Z={src:"/_next/static/media/discord-icon.79583b21.svg",height:16,width:21,blurWidth:0,blurHeight:0}},19197:function(e,t){"use strict";t.Z={src:"/_next/static/media/orange-cat-head-icon.a3782396.svg",height:24,width:29,blurWidth:0,blurHeight:0}},12874:function(e,t){"use strict";t.Z={src:"/_next/static/media/x-icon.3938ceb6.svg",height:17,width:16,blurWidth:0,blurHeight:0}},78367:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/dragonfly-capital-logo.5db386e5.svg",height:40,width:123,blurWidth:0,blurHeight:0}},45859:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/eigen-layer-logo.bc324297.svg",height:32,width:42,blurWidth:0,blurHeight:0}},84744:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/ether-fi-logo.5515e18b.svg",height:32,width:89,blurWidth:0,blurHeight:0}},57597:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/kelp-logo.3ea38c76.svg",height:28,width:80,blurWidth:0,blurHeight:0}},6143:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/lido-logo.6876211c.svg",height:32,width:101,blurWidth:0,blurHeight:0}},80476:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/liquid-collective-logo.f7dc6215.svg",height:28,width:124,blurWidth:0,blurHeight:0}},53561:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/maelstorm-logo.6054ce2c.svg",height:26,width:148,blurWidth:0,blurHeight:0}},72704:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/ottersec-logo.43897955.svg",height:24,width:106,blurWidth:0,blurHeight:0}},32645:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/pantera-logo.cc51bbfe.svg",height:20,width:167,blurWidth:0,blurHeight:0}},84256:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/renzo-logo.1b0820fb.svg",height:32,width:89,blurWidth:0,blurHeight:0}},85032:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/swell-logo.7289836d.svg",height:32,width:83,blurWidth:0,blurHeight:0}},24219:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/zircuit-logo.cd401bd0.svg",height:33,width:118,blurWidth:0,blurHeight:0}},47020:function(e,t,r){"use strict";var n=r(82729),i=r(62109),o=r(54335);function a(){let e=(0,n._)(["\n  border-radius: 100px;\n  color: white;\n  padding: 8px 16px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: ",";\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.14px;\n  transition: 0.22s;\n  height: 36px;\n  background: #2b7e21;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]);return a=function(){return e},e}let s=o.ZP.button.withConfig({componentId:"sc-8f189f01-0"})(a(),i.ttHover.style.fontFamily);t.Z=s},96381:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(82729),i=r(85893),o=r(25675),a=r.n(o),s=r(54335),l={src:"/_next/static/media/close-icon.fd4bf6f2.svg",height:24,width:28,blurWidth:0,blurHeight:0};function c(){let e=(0,n._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"]);return c=function(){return e},e}function u(){let e=(0,n._)(["\n  background: white;\n  padding: 50px 20px 20px;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  max-width: 467px;\n  width: 100%;\n  position: relative;\n"]);return u=function(){return e},e}function d(){let e=(0,n._)(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n"]);return d=function(){return e},e}let h=s.ZP.div.withConfig({componentId:"sc-a558e6b7-0"})(c()),f=s.ZP.div.withConfig({componentId:"sc-a558e6b7-1"})(u()),p=(0,s.ZP)(a()).withConfig({componentId:"sc-a558e6b7-2"})(d());var g=e=>{let{children:t,isOpen:r,onClose:n,disabled:o}=e,a=()=>{o||n()};return r?(0,i.jsx)(h,{onClick:a,children:(0,i.jsxs)(f,{onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(p,{src:l,alt:"Close",onClick:a}),t]})}):null}},20068:function(e,t,r){"use strict";var n=r(82729),i=r(54335);function o(){let e=(0,n._)(["\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.8);\n  width: 1360px;\n  max-height: 840px;\n  min-height: 840px;\n  overflow: hidden;\n  border-radius: 8px;\n"]);return o=function(){return e},e}let a=i.ZP.div.withConfig({componentId:"sc-821f92a-0"})(o());t.Z=a},12647:function(e,t,r){"use strict";var n=r(82729),i=r(54335),o=r(47020);function a(){let e=(0,n._)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  color: black;\n  background: #fff;\n  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);\n\n  &:first-of-type {\n    margin-bottom: 12px;\n  }\n"]);return a=function(){return e},e}let s=(0,i.ZP)(o.Z).withConfig({componentId:"sc-ca4e0ab2-0"})(a());t.Z=s},52542:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(82729),i=r(47020),o=r(54335);function a(){let e=(0,n._)(["\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8px;\n  font-size: 16px;\n  height: 48px;\n  width: 100%;\n"]);return a=function(){return e},e}let s=(0,o.ZP)(i.Z).withConfig({componentId:"sc-78799470-0"})(a())},83831:function(e){"use strict";e.exports={REF_CODE_LENGTH:6,WEB_MODAL_PROJECT_ID:"511893c28430e16ae8cc55dde2287645",SIGNATURE_MESSAGE:"I’m joining Zircuit staking with my wallet ADDRESS, have been referred by REFCODE, and I accept the Terms of Service.",TX_RECEIPT_POLL_CONFIG:{timeout:9e5,retryCount:15e4,pollingInterval:5e3}}},46048:function(e,t,r){"use strict";r.d(t,{P:function(){return c},V:function(){return l}});var n=r(85893),i=r(40464),o=r(5121),a=r(67294);let s=(0,a.createContext)({}),l=()=>(0,a.useContext)(s),c=e=>{let{children:t}=e,[r,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{o.Z.get("/api/stats").then(e=>{let{data:t}=e;l(t),setInterval(()=>{l(e=>({...e,totalValueLocked:Number(e.totalValueLocked)+(0,i.Jl)(e.totalValueLocked,5)}))},1e3)}).catch(e=>console.error(e))},[]),(0,n.jsx)(s.Provider,{value:{stats:r},children:t})}},59874:function(e,t,r){"use strict";r.d(t,{a:function(){return _},d:function(){return E}});var n=r(85893),i=r(5121),o=r(67294),a=r(35001),s=r(37003),l=r(54753),c=r(48614),u=r(54280),d=r(92685),h=r(36023),f=r(46951),p=r(15229),g=r(30381),m=r.n(g);let y="data",w="balances",v="allowances",b="depositedBalances",x="totalPoints";BigInt.prototype.toJSON=function(){return this.toString()};let C=(0,o.createContext)({}),_=()=>(0,o.useContext)(C),E=e=>{let{children:t}=e,[r,g]=(0,o.useState)(null),[_,E]=(0,o.useState)({}),[O,P]=(0,o.useState)(null),[T,R]=(0,o.useState)(null),[I,$]=(0,o.useState)({}),[N,M]=(0,o.useState)({}),[j,D]=(0,o.useState)(null),[L,U]=(0,o.useState)(!0),[B,z]=(0,o.useState)(!1),{address:F,isConnected:W}=(0,c.m)(),H=async e=>{let t={};for await(let r of Object.keys(u.H)){let n=u.H[r],i=await (0,a.s)(l.v,{address:e,token:n.address===u.H.ETH.address?"":n.address});t[n.address.toLowerCase()]=i.value}let r=await (0,a.s)(l.v,{address:e,token:f.Lk.toLowerCase()});t[f.Lk.toLowerCase()]=r.value,k(S(e,w),t),E(t),z(!1)},Z=async e=>{let t={};for await(let r of Object.keys(u.H)){let n=u.H[r],i=await (0,s.L)(l.v,{abi:d.abi,address:n.address,functionName:"allowance",args:[e,h.address]});t[n.address.toLowerCase()]=i}k(S(e,v),t),$(t)},Y=async e=>{let t={};for await(let r of Object.keys(u.H)){let n=u.H[r],i=await (0,s.L)(l.v,{...h,functionName:"balance",args:[n.address,e]});t[n.address.toLowerCase()]=i}return k(S(e,b),t),M(t),t},G=e=>i.Z.get("/api/points/".concat(e)).then(t=>{let{data:r}=t,n=Number((null==r?void 0:r.totalPoints)||0);k(S(e,x),n),D(n)}).catch(e=>{console.error(e)}),V=e=>i.Z.get("/api/portfolio/".concat(e)).then(e=>{let{data:t}=e;return P(t),t}),q=e=>(U(!0),i.Z.get("/api/user/".concat(e)).then(t=>{let{data:r}=t;return g(r),k(S(e,y),r),r}).catch(e=>(console.error(e),g(null),null)).finally(()=>U(!1))),K=(e,t,r)=>{let n={};return t.forEach(t=>{let i=e[t.tokenAddress.toLowerCase()]||0,o=Object.keys(u.H).find(e=>u.H[e].address.toLowerCase()===t.tokenAddress.toLowerCase()),a=u.H[o],s=a.address.toLowerCase()===u.D.address.toLowerCase()?.5:1,l=m()().diff(r,"seconds");n[o]=Number(t.points)+Number((0,p.b)(i,a.decimals))*s*l/3600}),R(n),n};return(0,o.useEffect)(()=>{if(W&&F){let e=A(S(F,w));e||z(!0),q(F),V(F),G(F),H(F),Z(F),Promise.all([Y(F),V(F)]).then(e=>{let[t,r]=e,n=m()();setInterval(()=>{K(t,r,n)},1e3)})}W||U(!1)},[F,W]),(0,o.useEffect)(()=>{if(F){let e=A(S(F,y));e&&g(e);let t=A(S(F,w));t&&E(t);let r=A(S(F,v));r&&$(r);let n=A(S(F,b));n&&M(n);let i=A(S(F,x));i&&D(i)}},[F]),(0,n.jsx)(C.Provider,{value:{data:r,balances:_,allowances:I,depositedBalances:N,displayPoints:T,totalPoints:j,getUserData:e=>q(e),setUserData:g,reloadBalances:e=>H(e),reloadAllowances:e=>Z(e),reloadDepositedBalances:e=>Y(e),reloadTotalPoints:e=>G(e),resetAll:()=>{g(null),E({}),$({}),M({}),D(null)},loading:L,initialBalanceLoading:B},children:t})},S=(e,t)=>"".concat(e,"-").concat(t),k=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},A=e=>JSON.parse(localStorage.getItem(e))},54753:function(e,t,r){"use strict";let n;r.d(t,{v:function(){return Q}});var i,o,a,s=r(83831),l=r(16189);let c=e=>(t,r,n)=>{let i=n.subscribe;n.subscribe=(e,t,r)=>{let o=e;if(t){let i=(null==r?void 0:r.equalityFn)||Object.is,a=e(n.getState());o=r=>{let n=e(r);if(!i(a,n)){let e=a;t(a=n,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return i(o)};let o=e(t,r,n);return o},u=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>u(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>u(t)(e)}}},d=(e,t)=>(r,n,i)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,d=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},n,i);let h=u(s.serialize),f=()=>{let e;let t=s.partialize({...n()}),r=h({state:t,version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return r},p=i.setState;i.setState=(e,t)=>{p(e,t),f()};let g=e((...e)=>{r(...e),f()},n,i),m=()=>{var e;if(!o)return;l=!1,c.forEach(e=>e(n()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,n()))||void 0;return u(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=n())?t:g),!0),f()}).then(()=>{null==t||t(a,void 0),l=!0,d.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},m(),a||g},h=(e,t)=>(r,n,i)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(n=r.getItem(e))?n:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},n,i);let h=()=>{let e=a.partialize({...n()});return d.setItem(a.name,{state:e,version:a.version})},f=i.setState;i.setState=(e,t)=>{f(e,t),h()};let p=e((...e)=>{r(...e),h()},n,i),g=()=>{var e,t;if(!d)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=n())?t:p)});let i=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=n())?e:p))||void 0;return u(d.getItem.bind(d))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=n())?t:p),!0),h()}).then(()=>{null==i||i(o,void 0),o=n(),s=!0,c.forEach(e=>e(o))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||g(),o||p},f=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),d(e,t)):h(e,t),p=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,i,o),o},g=e=>e?p(e):p;var m=r(45775),y=r(39028),w=r(97933);function v(e,{errorInstance:t=Error("timed out"),timeout:r,signal:n}){return new Promise((i,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{n?s.abort():o(t)},r)),i(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}var b=r(92106),x=r(87083),C=r(93981);class _ extends C.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}function E(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}let S={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:A(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>A(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:A(e,"isPhantom")}};function k(e={}){let{shimDisconnect:t=!0,unstable_shimAsyncInject:r}=e;function n(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...S[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return i=>({get icon(){return n().icon},get id(){return n().id},get name(){return n().name},type:k.type,async setup(){let t=await this.getProvider();t&&e.target&&t.on("connect",this.onConnect.bind(this))},async connect({chainId:r,isReconnecting:n}={}){let o=await this.getProvider();if(!o)throw new _;let a=null;if(!n){a=await this.getAccounts().catch(()=>null);let e=!!a?.length;if(e)try{let e=await o.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});a=e[0]?.caveats?.[0]?.value?.map(e=>m.K(e))}catch(e){if(e.code===y.ab.code)throw new y.ab(e);if(e.code===y.pT.code)throw e}}try{if(!a?.length){let e=await o.request({method:"eth_requestAccounts"});a=e.map(e=>(0,m.K)(e))}o.removeListener("connect",this.onConnect.bind(this)),o.on("accountsChanged",this.onAccountsChanged.bind(this)),o.on("chainChanged",this.onChainChanged),o.on("disconnect",this.onDisconnect.bind(this));let n=await this.getChainId();if(r&&n!==r){let e=await this.switchChain({chainId:r}).catch(e=>{if(e.code===y.ab.code)throw e;return{id:n}});n=e?.id??n}return t&&(await i.storage?.removeItem(`${this.id}.disconnected`),e.target||await i.storage?.setItem("injected.connected",!0)),{accounts:a,chainId:n}}catch(e){if(e.code===y.ab.code)throw new y.ab(e);if(e.code===y.pT.code)throw new y.pT(e);throw e}},async disconnect(){let r=await this.getProvider();if(!r)throw new _;r.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),r.removeListener("chainChanged",this.onChainChanged),r.removeListener("disconnect",this.onDisconnect.bind(this)),r.on("connect",this.onConnect.bind(this)),t&&(await i.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await i.storage?.removeItem("injected.connected"))},async getAccounts(){let e=await this.getProvider();if(!e)throw new _;let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,m.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new _;let t=await e.request({method:"eth_chainId"});return E(t)},async getProvider(){let e;if("undefined"==typeof window)return;let t=n();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?A(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{let n=t&&await i.storage?.getItem(`${this.id}.disconnected`);if(n)return!1;if(!e.target){let e=await i.storage?.getItem("injected.connected");if(!e)return!1}let o=await this.getProvider();if(!o){if(void 0!==r&&!1!==r){let e=async()=>{"undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e);let t=await this.getProvider();return!!t},t="number"==typeof r?r:1e3,n=await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(r=>setTimeout(()=>r(e()),t))]);if(n)return!0}throw new _}let a=await (0,w.J)(()=>v(()=>this.getAccounts(),{timeout:100}));return!!a.length}catch{return!1}},async switchChain({chainId:e}){let t=await this.getProvider();if(!t)throw new _;let r=i.chains.find(t=>t.id===e);if(!r)throw new y.x3(new x.X4);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,b.eC)(e)}]}),new Promise(t=>i.emitter.once("change",({chainId:r})=>{r===e&&t()}))]),r}catch(n){if(4902===n.code||n?.data?.originalError?.code===4902)try{let{default:n,...i}=r.blockExplorers??{},o=[];n&&(o=[n.url,...Object.values(i).map(e=>e.url)]),await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,b.eC)(e),chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.default?.http[0]??""],blockExplorerUrls:o}]});let a=await this.getChainId();if(a!==e)throw new y.ab(Error("User rejected switch after adding network."));return r}catch(e){throw new y.ab(e)}if(n.code===y.ab.code)throw new y.ab(n);throw new y.x3(n)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(i.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),t&&await i.storage?.removeItem(`${this.id}.disconnected`)}else i.emitter.emit("change",{accounts:e.map(e=>(0,m.K)(e))})},onChainChanged(e){let t=E(e);i.emitter.emit("change",{chainId:t})},async onConnect(e){let t=await this.getAccounts();if(0===t.length)return;let r=E(e.chainId);i.emitter.emit("connect",{accounts:t,chainId:r});let n=await this.getProvider();n&&(n.removeListener("connect",this.onConnect.bind(this)),n.on("accountsChanged",this.onAccountsChanged.bind(this)),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect.bind(this)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(i.emitter.emit("disconnect"),t&&(t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.on("connect",this.onConnect.bind(this))))}})}function A(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let n=e.ethereum;return n?.providers?n.providers.find(e=>r(e)):n&&r(n)?n:void 0}k.type="injected";var O=r(26729),P=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};class T{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),i.set(this,new O)}on(e,t){P(this,i,"f").on(e,t)}once(e,t){P(this,i,"f").once(e,t)}off(e,t){P(this,i,"f").off(e,t)}emit(e,...t){let r=t[0];P(this,i,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return P(this,i,"f").listenerCount(e)}}function R(e,t){return JSON.parse(e,(e,r)=>{let n=r;return n?.__type==="bigint"&&(n=BigInt(n.value)),n?.__type==="Map"&&(n=new Map(n.value)),t?.(e,n)??n})}function I(e,t){return e.slice(0,t).join(".")||"."}function $(e,t){let{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function N(e,t,r,n){return JSON.stringify(e,function(e,t){let r="function"==typeof e,n="function"==typeof t,i=[],o=[];return function(a,s){if("object"==typeof s){if(i.length){let e=$(i,this);0===e?i[i.length]=this:(i.splice(e),o.splice(e)),o[o.length]=a;let r=$(i,s);if(0!==r)return n?t.call(this,a,s,I(o,r)):`[ref=${I(o,r)}]`}else i[0]=s,o[0]=a}return r?e.call(this,a,s):s}}((e,r)=>{let n=r;return"bigint"==typeof n&&(n={__type:"bigint",value:r.toString()}),n instanceof Map&&(n={__type:"Map",value:Array.from(r.entries())}),t?.(e,n)??n},n),r??void 0)}i=new WeakMap;let M={getItem:()=>null,setItem:()=>{},removeItem:()=>{}},j=256;var D=r(14023),L=r(78863),U=r(62027);class B extends U.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var z=r(32357),F=r(96070);let W={current:0,take(){return this.current++},reset(){this.current=0}};var H=r(91628),Z=r(64892);let Y=()=>"@wagmi/core@2.6.4";var G=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};class V extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return Y()}constructor(e,t={}){super(),o.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof V?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof V&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return G(this,o,"m",a).call(this,this,e)}}o=new WeakSet,a=function e(t,r){return r?.(t)?t:t.cause?G(this,o,"m",e).call(this,t.cause,r):t};class q extends V{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class K extends V{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}function X(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}function J(e){let t,n;let i=e.isNewChainsStale??!0,o="eip155";return a=>({id:"walletConnect",name:"WalletConnect",type:J.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){try{let r=await this.getProvider();if(!r)throw new q;r.on("display_uri",this.onDisplayUri);let n=e;if(!n){let e=await a.storage?.getItem("state")??{},t=a.chains.some(t=>t.id===e.chainId);n=t?e.chainId:a.chains[0]?.id}if(!n)throw Error("No chains found on connector.");let i=await this.isChainsStale();if(r.session&&i&&await r.disconnect(),!r.session||i){let e=a.chains.filter(e=>e.id!==n).map(e=>e.id);await r.connect({optionalChains:[n,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(a.chains.map(e=>e.id))}let o=(await r.enable()).map(e=>(0,m.K)(e)),s=await this.getChainId();return r.removeListener("display_uri",this.onDisplayUri),r.removeListener("connect",this.onConnect.bind(this)),r.on("accountsChanged",this.onAccountsChanged.bind(this)),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect.bind(this)),r.on("session_delete",this.onSessionDelete.bind(this)),{accounts:o,chainId:s}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new y.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{e?.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),e?.removeListener("chainChanged",this.onChainChanged),e?.removeListener("disconnect",this.onDisconnect.bind(this)),e?.removeListener("session_delete",this.onSessionDelete.bind(this)),e?.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){let e=await this.getProvider();return e.accounts.map(e=>(0,m.K)(e))},async getProvider({chainId:i}={}){async function o(){let t=a.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:n}=await Promise.all([r.e(138),r.e(883)]).then(r.bind(r,33138));return await n.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(a.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),showQrModal:e.showQrModal??!0})}return t||(n||(n=o()),t=await n,t?.events.setMaxListeners(1/0)),i&&await this.switchChain?.({chainId:i}),t},async getChainId(){let e=await this.getProvider();return e.chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;let r=await this.isChainsStale();if(r&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({chainId:e}){let t=a.chains.find(t=>t.id===e);if(!t)throw new y.x3(new K);try{let r=await this.getProvider(),n=this.getNamespaceChainsIds(),i=this.getNamespaceMethods(),o=n.includes(e);if(!o&&i.includes("wallet_addEthereumChain")){await r.request({method:"wallet_addEthereumChain",params:[{chainId:(0,b.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let n=await this.getRequestedChainsIds();this.setRequestedChainsIds([...n,e])}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,b.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new y.ab(t);throw new y.x3(t)}},onAccountsChanged(e){0===e.length?this.onDisconnect():a.emitter.emit("change",{accounts:e.map(e=>(0,m.K)(e))})},onChainChanged(e){let t=X(e);a.emitter.emit("change",{chainId:t})},async onConnect(e){let t=X(e.chainId),r=await this.getAccounts();a.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),a.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){a.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){if(!t)return[];let e=t.session?.namespaces[o]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return e??[]},getNamespaceMethods(){if(!t)return[];let e=t.session?.namespaces[o]?.methods;return e??[]},async getRequestedChainsIds(){return await a.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){let e=this.getNamespaceMethods();if(e.includes("wallet_addEthereumChain")||!i)return!1;let t=a.chains.map(e=>e.id),r=this.getNamespaceChainsIds();if(r.length&&!r.some(e=>t.includes(e)))return!1;let n=await this.getRequestedChainsIds();return!t.every(e=>n.includes(e))},async setRequestedChainsIds(e){await a.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}J.type="walletConnect";let Q=function(e){let t;let{chains:r,multiInjectedProviderDiscovery:i=!0,storage:o=function(e){let{deserialize:t=R,key:r="wagmi",serialize:n=N,storage:i=M}=e;function o(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...i,key:r,async getItem(e,n){let a=i.getItem(`${r}.${e}`),s=await o(a);return s?t(s)??null:n??null},async setItem(e,t){let a=`${r}.${e}`;null===t?await o(i.removeItem(a)):await o(i.setItem(a,n(t)))},async removeItem(e){await o(i.removeItem(`${r}.${e}`))}}}({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:M}),syncConnectedChain:a=!0,ssr:s,...u}=e,d="undefined"!=typeof window&&i?function(){let e=new Set,t=[],r=()=>(function(e){let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(r=>{t.some(({info:e})=>e.uuid===r.info.uuid)||(t=[...t,r],e.forEach(e=>e(t,{added:[r]})))}),n=r();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),n()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),n(),n=r()},subscribe:(r,{emitImmediately:n}={})=>(e.add(r),n&&r(t,{added:t}),()=>e.delete(r))}}():void 0,h=g(()=>[...u.connectors??[],...s?[]:d?.getProviders().map(m)??[]].map(p));function p(e){let t=new T(function(e=11){if(!n||j+e>512){n="",j=0;for(let e=0;e<256;e++)n+=(256+256*Math.random()|0).toString(16).substring(1)}return n.substring(j,j+++e)}()),i={...e({emitter:t,chains:r,storage:o}),emitter:t,uid:t.uid};return t.on("connect",_),i.setup?.(),i}function m(e){let{info:t}=e,r=e.provider;return k({target:{...t,id:t.rdns,provider:r}})}let y=new Map,w={chainId:r[0].id,connections:new Map,current:void 0,status:"disconnected"},v="0.0.0-canary-";t=D.i.startsWith(v)?parseInt(D.i.replace(v,"")):parseInt(D.i.split(".")[0]??"0");let b=g(c(o?f(()=>w,{migrate(e,r){if(r===t)return e;let n=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:w.chainId;return{...w,chainId:n}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:n,type:i,uid:o}=t.connector;return[e,{...t,connector:{id:r,name:n,type:i,uid:o}}]})},chainId:e.chainId,current:e.current}),skipHydration:s,storage:o,version:t}):()=>w));function C(e){b.setState(t=>{let r=t.connections.get(e.uid);return{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}})}function _(e){"connecting"!==b.getState().status&&"reconnecting"!==b.getState().status&&b.setState(t=>{let r=h.getState().find(t=>t.uid===e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}:t})}return a&&b.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{let t=r.some(t=>t.id===e);if(t)return b.setState(t=>({...t,chainId:e??t.chainId}))}),d?.subscribe(e=>{let t=new Map;for(let e of h.getState())t.set(e.id,!0);let r=[];for(let n of e){let e=p(m(n));t.has(e.id)||r.push(e)}h.setState(e=>[...e,...r],!0)}),{chains:r,get connectors(){return h.getState()},storage:o,getClient:function(e={}){let t;let n=e.chainId??b.getState().chainId,i=r.find(e=>e.id===n);if(e.chainId&&!i)throw new x.X4;{let e=y.get(b.getState().chainId);if(e&&!i)return e;if(!i)throw new x.X4}{let e=y.get(n);if(e)return e}if(u.client)t=u.client({chain:i});else{let e=i.id,n=r.map(e=>e.id),o={},a=Object.entries(u);for(let[t,r]of a)if("client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof r){if(e in r)o[t]=r[e];else{let e=n.some(e=>e in r);if(e)continue;o[t]=r}}else o[t]=r}t=(0,l.e)({...o,chain:i,batch:o.batch??{multicall:!0},transport:t=>u.transports[e]({...t,connectors:h})})}return y.set(n,t),t},get state(){return b.getState()},setState(e){let t;"object"!=typeof(t="function"==typeof e?e(b.getState()):e)&&(t=w);let r=Object.keys(w).some(e=>!(e in t));r&&(t=w),b.setState(t,!0)},subscribe:(e,t,r)=>b.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:d,store:b,ssr:!!s,syncConnectedChain:a,transports:u.transports,connectors:{providerDetailToConnector:m,setup:p,setState:e=>h.setState("function"==typeof e?e(h.getState()):e,!0),subscribe:e=>h.subscribe(e)},events:{change:C,connect:_,disconnect:function e(t){b.setState(r=>{let n=r.connections.get(t.uid);if(n&&(n.connector.emitter.off("change",C),n.connector.emitter.off("disconnect",e),n.connector.emitter.on("connect",_)),r.connections.delete(t.uid),0===r.connections.size)return{...r,connections:new Map,current:void 0,status:"disconnected"};let i=r.connections.values().next().value;return{...r,connections:new Map(r.connections),current:i.connector.uid}})}}}}}({chains:[Z.R],connectors:[J({projectId:s.WEB_MODAL_PROJECT_ID,showQrModal:!1})],transports:{[Z.R.id]:function(e,t={}){let{batch:r,fetchOptions:n,key:i="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:d=0}="object"==typeof r?r:{},h=t.retryCount??l,f=c??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new B;let g=function(e,t={}){return{async request(r){let{body:n,fetchOptions:i={},timeout:o=t.timeout??1e4}=r,{headers:a,method:s,signal:l}={...t.fetchOptions,...i};try{let t;let r=await v(async({signal:t})=>{let r=await fetch(e,{...i,body:Array.isArray(n)?(0,F.P)(n.map(e=>({jsonrpc:"2.0",id:e.id??W.take(),...e}))):(0,F.P)({jsonrpc:"2.0",id:n.id??W.take(),...n}),headers:{...a,"Content-Type":"application/json"},method:s||"POST",signal:l||(o>0?t:void 0)});return r},{errorInstance:new L.W5({body:n,url:e}),timeout:o,signal:!0});if(t=r.headers.get("Content-Type")?.startsWith("application/json")?await r.json():await r.text(),!r.ok)throw new L.Gg({body:n,details:(0,F.P)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof L.Gg||t instanceof L.W5)throw t;throw new L.Gg({body:n,details:t.message,url:e})}}}}(p,{fetchOptions:n,timeout:f});return(0,H.q)({key:i,name:o,async request({method:t,params:n}){let i={method:t,params:n},{schedule:o}=(0,z.S)({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>g.request({body:e}),sort:(e,t)=>e.id-t.id}),a=async e=>r?o(e):[await g.request({body:e})],[{error:s,result:l}]=await a(i);if(s)throw new L.bs({body:i,error:s,url:p});return l},retryCount:h,retryDelay:a,timeout:f,type:"http"},{fetchOptions:n,url:p})}}()},metadata:{name:"Zircuit",description:"Deposit your liquid restaking tokens to earn Eigenlayer and Zircuit points",url:"https://staking.zircuit.pro"},ssr:!0})},95405:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u},isThenable:function(){return d}});let i="refresh",o="navigate",a="restore",s="server-patch",l="prefetch",c="fast-refresh",u="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},14231:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(52492),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53415:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let n=r(38754),i=r(61757),o=i._(r(67294)),a=n._(r(73935)),s=n._(r(45156)),l=r(76117),c=r(1284),u=r(12377);r(15709);let d=r(42534),h=n._(r(61612)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,n,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:l,className:c,style:u,fetchPriority:d,placeholder:h,loading:f,unoptimized:m,fill:y,onLoadRef:w,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:x,onLoad:C,onError:_,...E}=e;return o.default.createElement("img",{...E,...g(d),loading:f,width:s,height:a,decoding:l,"data-nimg":y?"fill":"1",className:c,style:u,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&p(e,h,w,v,b,m))},[r,h,w,v,b,_,m,t]),onLoad:e=>{let t=e.currentTarget;p(t,h,w,v,b,m)},onError:e=>{x(!0),"empty"!==h&&b(!0),_&&_(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let Image=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(d.RouterContext),n=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=f||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:s}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let g=(0,o.useRef)(s);(0,o.useEffect)(()=>{g.current=s},[s]);let[w,v]=(0,o.useState)(!1),[b,x]=(0,o.useState)(!1),{props:C,meta:_}=(0,l.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:w,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{...C,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:x,ref:t}),_.priority?o.default.createElement(y,{isAppRouter:!r,imgAttributes:C}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(38754),i=n._(r(67294)),o=r(47406),a=r(30578),s=r(39902),l=r(44316),c=r(30586),u=r(42534),d=r(14751),h=r(4457),f=r(14231),p=r(18134),g=r(95405),m=new Set;function y(e,t,r,n,i,o){if(!o&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+i;if(m.has(o))return;m.add(o)}let s=o?e.prefetch(t,i):e.prefetch(t,r,n);Promise.resolve(s).catch(e=>{})}function w(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let v=i.default.forwardRef(function(e,t){let r,n;let{href:s,as:m,children:v,prefetch:b=null,passHref:x,replace:C,shallow:_,scroll:E,locale:S,onClick:k,onMouseEnter:A,onTouchStart:O,legacyBehavior:P=!1,...T}=e;r=v,P&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let R=i.default.useContext(u.RouterContext),I=i.default.useContext(d.AppRouterContext),$=null!=R?R:I,N=!R,M=!1!==b,j=null===b?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:D,as:L}=i.default.useMemo(()=>{if(!R){let e=w(s);return{href:e,as:m?w(m):e}}let[e,t]=(0,o.resolveHref)(R,s,!0);return{href:e,as:m?(0,o.resolveHref)(R,m):t||e}},[R,s,m]),U=i.default.useRef(D),B=i.default.useRef(L);P&&(n=i.default.Children.only(r));let z=P?n&&"object"==typeof n&&n.ref:t,[F,W,H]=(0,h.useIntersection)({rootMargin:"200px"}),Z=i.default.useCallback(e=>{(B.current!==L||U.current!==D)&&(H(),B.current=L,U.current=D),F(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[L,z,D,H,F]);i.default.useEffect(()=>{$&&W&&M&&y($,D,L,{locale:S},{kind:j},N)},[L,D,W,S,M,null==R?void 0:R.locale,$,N,j]);let Y={ref:Z,onClick(e){P||"function"!=typeof k||k(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),$&&!e.defaultPrevented&&function(e,t,r,n,o,s,l,c,u){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:s,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};u?i.default.startTransition(f):f()}(e,$,D,L,C,_,E,S,N)},onMouseEnter(e){P||"function"!=typeof A||A(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),$&&(M||!N)&&y($,D,L,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:j},N)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),$&&(M||!N)&&y($,D,L,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:j},N)}};if((0,l.isAbsoluteUrl)(L))Y.href=L;else if(!P||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,f.getDomainLocale)(L,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Y.href=t||(0,p.addBasePath)((0,c.addLocale)(L,e,null==R?void 0:R.defaultLocale))}return P?i.default.cloneElement(n,Y):i.default.createElement("a",{...T,...Y},r)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(67294),i=r(73371),o="function"==typeof IntersectionObserver,a=new Map,s=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!o,[u,d]=(0,n.useState)(!1),h=(0,n.useRef)(null),f=(0,n.useCallback)(e=>{h.current=e},[]);(0,n.useEffect)(()=>{if(o){if(c||u)return;let e=h.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:i},s.push(r),a.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,r,t,u,h.current]);let p=(0,n.useCallback)(()=>{d(!1)},[]);return[f,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},76117:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(15709);let n=r(96460),i=r(1284);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,c,{src:u,sizes:d,unoptimized:h=!1,priority:f=!1,loading:p,className:g,quality:m,width:y,height:w,fill:v=!1,style:b,onLoad:x,onLoadingComplete:C,placeholder:_="empty",blurDataURL:E,fetchPriority:S,layout:k,objectFit:A,objectPosition:O,lazyBoundary:P,lazyRoot:T,...R}=e,{imgConf:I,showAltText:$,blurComplete:N,defaultLoader:M}=t,j=I||i.imageConfigDefault;if("allSizes"in j)s=j;else{let e=[...j.deviceSizes,...j.imageSizes].sort((e,t)=>e-t),t=j.deviceSizes.sort((e,t)=>e-t);s={...j,allSizes:e,deviceSizes:t}}let D=R.loader||M;delete R.loader,delete R.srcSet;let L="__next_img_default"in D;if(L){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(k){"fill"===k&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!d&&(d=t)}let U="",B=a(y),z=a(w);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,U=e.src,!v){if(B||z){if(B&&!z){let t=B/e.width;z=Math.round(e.height*t)}else if(!B&&z){let t=z/e.height;B=Math.round(e.width*t)}}else B=e.width,z=e.height}}let F=!f&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(h=!0,F=!1),s.unoptimized&&(h=!0),L&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(h=!0),f&&(S="high");let W=a(m),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:O}:{},$?{}:{color:"transparent"},b),Z=N||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:z,blurWidth:l,blurHeight:c,blurDataURL:E||"",objectFit:H.objectFit})+'")':'url("'+_+'")',Y=Z?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{},G=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:s,src:u,unoptimized:h,width:B,quality:W,sizes:d,loader:D}),V={...R,loading:F?"lazy":p,fetchPriority:S,width:B,height:z,decoding:"async",className:g,style:{...H,...Y},sizes:G.sizes,srcSet:G.srcSet,src:G.src},q={unoptimized:h,priority:f,placeholder:_,fill:v};return{props:V,meta:q}}},96460:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n?40*n:t,l=i?40*i:r,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},55994:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let n=r(38754),i=r(76117),o=r(15709),a=r(53415),s=n._(r(61612)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},61612:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},62109:function(e,t,r){"use strict";let n,i,o;r.r(t),r.d(t,{default:function(){return aK},ttHover:function(){return v()}});var a,s,l,c,u,d,h,f,p,g,m=r(82729),y=r(85893),w=r(55501),v=r.n(w),b=r(54335),x=r(5121),C=r(25675),_=r.n(C),E=r(67294),S=r(24894),k=r(44173),A=r(95050);let O=(0,E.createContext)({}),P=()=>(0,E.useContext)(O),T=e=>{let{children:t}=e,[r,n]=(0,E.useState)(null),[i,o]=(0,E.useState)(null),[a,s]=(0,E.useState)(!1),l=(0,E.useCallback)(e=>{s(!0),x.Z.get("/api/join/".concat(e)).then(()=>{n(!0),o(e),k.Am.success("Invite code success: ".concat(e.toUpperCase()),{icon:e=>{let{theme:t,type:r}=e;return(0,y.jsx)(_(),{src:S.Z,alt:"Cat",style:{width:"32px"}})}});let t=new A.Z;t.addConfetti({emojis:["\uD83E\uDD41","\uD83C\uDF1F","\uD83D\uDC9A","\uD83D\uDE3D"],confettiNumber:50})}).catch(t=>{n(!1),k.Am.error("Invalid referral code: ".concat(e.toUpperCase()),{icon:e=>{let{theme:t,type:r}=e;return(0,y.jsx)(_(),{src:S.Z,alt:"Cat",style:{width:"32px"}})}}),console.error(t)}).finally(()=>s(!1))},[]);return(0,y.jsx)(O.Provider,{value:{valid:r,ref:i,validate:e=>l(e),loading:a},children:t})};function R(){if(!i)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await i?.open(e)},close:async function(){await i?.close()}}}let I=()=>"@wagmi/core@2.6.5";var $=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};class N extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return I()}constructor(e,t={}){super(),u.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof N?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof N&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return $(this,u,"m",d).call(this,this,e)}}u=new WeakSet,d=function e(t,r){return r?.(t)?t:t.cause?$(this,u,"m",e).call(this,t.cause,r):t};class M extends N{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class j extends N{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class D extends N{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class L extends N{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class U extends N{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}async function B(e,t){let{chainId:r}=t,n=e.state.connections.get(t.connector?.uid??e.state.current);if(n){let e=n.connector;if(!e.switchChain)throw new U({connector:e});let t=await e.switchChain({chainId:r});return t}let i=e.chains.find(e=>e.id===r);if(!i)throw new M;return e.setState(e=>({...e,chainId:r})),i}async function z(e,t){let r;if((r="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new j;try{e.setState(e=>({...e,status:"connecting"})),r.emitter.emit("message",{type:"connecting"});let n=await r.connect({chainId:t.chainId}),i=n.accounts;return r.emitter.off("connect",e._internal.events.connect),r.emitter.on("change",e._internal.events.change),r.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",r.id),e.setState(e=>({...e,connections:new Map(e.connections).set(r.uid,{accounts:i,chainId:n.chainId,connector:r}),current:r.uid,status:"connected"})),{accounts:i,chainId:n.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}async function F(e,t={}){let r;if(t.connector)r=t.connector;else{let{connections:t,current:n}=e.state,i=t.get(n);r=i?.connector}let n=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),n.delete(r.uid)),e.setState(e=>{if(0===n.size)return{...e,connections:new Map,current:void 0,status:"disconnected"};let t=n.values().next().value;return{...e,connections:new Map(n),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let r=e.state.connections.get(t)?.connector;if(!r)return;await e.storage?.setItem("recentConnectorId",r.id)}}var W=r(22980),H=r(81946),Z=r(16189),Y=r(3980),G=r(14503);async function V(e,t={}){let r;if(t.connector){let{connector:e}=t,[n,i]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:n,chainId:i,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new D;let n=t.chainId??r.chainId,i=r.connector;if(i.getClient)return i.getClient({chainId:n});let o=(0,G.T)(t.account??r.accounts[0]),a=e.chains.find(e=>e.id===n),s=await r.connector.getProvider({chainId:n});if(t.account&&!r.accounts.includes(o.address))throw new L({address:o.address,connector:i});return(0,Z.e)({account:o,chain:a,name:"Connector Client",transport:e=>(0,Y.P)(s)({...e,retryCount:0})})}async function q(e,t){let r;let{account:n,connector:i,...o}=t;r="object"==typeof n&&"local"===n.type?e.getClient():await V(e,{account:n,connector:i});let a=(0,H.s)(r,W.l,"signMessage");return a({...o,...n?{account:n}:{}})}function K(e){let t=e.state.current,r=e.state.connections.get(t),n=r?.accounts,i=n?.[0],o=e.chains.find(e=>e.id===r?.chainId),a=e.state.status;switch(a){case"connected":return{address:i,addresses:n,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:i,addresses:n,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!!i,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:i,addresses:n,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}function X(e,t){let{onChange:r}=t;return e.subscribe(()=>K(e),r,{equalityFn(e,t){let{connector:r,...n}=e,{connector:i,...o}=t;return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let n,i;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((n=t.length)!==r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((n=o.length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;0!=i--;){let n=o[i];if(n&&!e(t[n],r[n]))return!1}return!0}return t!=t&&r!=r}(n,o)&&r?.id===i?.id&&r?.uid===i?.uid}})}var J=r(16693),Q=r(47864),ee=r(92106),et=r(21746),er=r(62027),en=r(97405);function ei(e,t){if(!(e instanceof er.G))return!1;let r=e.walk(e=>e instanceof en.Lu);return r instanceof en.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.data?.errorName==="ResolverNotContract"||r.data?.errorName==="ResolverError"||r.data?.errorName==="HttpError"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===et.$[50])}var eo=r(11187),ea=r(88184),es=r(15102);function el(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,es.v)(t)?t:null}function ec(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,eo.qX)(t).byteLength+2),n=0,i=t.split(".");for(let e=0;e<i.length;e++){let t=(0,eo.qX)(i[e]);if(t.byteLength>255){var o;t=(0,eo.qX)((o=function(e){let t=new Uint8Array(32).fill(0);return e?el(e)||(0,ea.w)((0,eo.qX)(e)):(0,ee.ci)(t)}(i[e]),`[${o.slice(2)}]`))}r[n]=t.length,r.set(t,n+1),n+=t.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}var eu=r(93714),ed=r(88819);async function eh(e,{address:t,blockNumber:r,blockTag:n,gatewayUrls:i,strict:o,universalResolverAddress:a}){let s=a;if(!s){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");s=(0,Q.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let o={address:s,abi:J.du,functionName:"reverse",args:[(0,ee.NC)(ec(l))],blockNumber:r,blockTag:n},a=(0,eu.s)(e,ed.L,"readContract"),[c,u]=i?await a({...o,args:[...o.args,i]}):await a(o);if(t.toLowerCase()!==u.toLowerCase())return null;return c}catch(e){if(o)throw e;if(ei(e,"reverse"))return null;throw e}}class ef extends er.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class ep extends er.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class eg extends er.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class em extends er.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let ey=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,ew=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,ev=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,eb=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function ex(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function eC(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function e_({uri:e,gatewayUrls:t}){let r=ev.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let n=eC(t?.ipfs,"https://ipfs.io"),i=eC(t?.arweave,"https://arweave.net"),o=e.match(ey),{protocol:a,subpath:s,target:l,subtarget:c=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||ew.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${n}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(eb,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new eg({uri:e})}function eE(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new ef({data:e});return e.image||e.image_url||e.image_data}async function eS({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json()),n=await ek({gatewayUrls:e,uri:eE(r)});return n}catch{throw new eg({uri:t})}}async function ek({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:n}=e_({uri:t,gatewayUrls:e});if(n)return r;let i=await ex(r);if(i)return r;throw new eg({uri:t})}async function eA(e,{nft:t}){if("erc721"===t.namespace)return(0,ed.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,ed.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new em({namespace:t.namespace})}async function eO(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?eP(e,{gatewayUrls:t,record:r}):ek({uri:r,gatewayUrls:t})}async function eP(e,{gatewayUrls:t,record:r}){let n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,n,i]=t.split("/"),[o,a]=r.split(":"),[s,l]=n.split(":");if(!o||"eip155"!==o.toLowerCase())throw new ep({reason:"Only EIP-155 supported"});if(!a)throw new ep({reason:"Chain ID not found"});if(!l)throw new ep({reason:"Contract address not found"});if(!i)throw new ep({reason:"Token ID not found"});if(!s)throw new ep({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:i}}(r),i=await eA(e,{nft:n}),{uri:o,isOnChain:a,isEncoded:s}=e_({uri:i,gatewayUrls:t});if(a&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){let e=s?atob(o.replace("data:application/json;base64,","")):o,r=JSON.parse(e);return ek({uri:eE(r),gatewayUrls:t})}let l=n.tokenID;return"erc1155"===n.namespace&&(l=l.replace("0x","").padStart(64,"0")),eS({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,l)})}var eT=r(7210),eR=r(77799),eI=r(57040);async function e$(e,{blockNumber:t,blockTag:r,name:n,key:i,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=s;if(!l){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");l=(0,Q.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a={address:l,abi:J.k3,functionName:"resolve",args:[(0,ee.NC)(ec(n)),(0,eR.R)({abi:J.nZ,functionName:"text",args:[function(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,ee.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let n=el(r[e]),i=n?(0,eo.O0)(n):(0,ea.w)((0,eo.qX)(r[e]),"bytes");t=(0,ea.w)((0,eI.zo)([t,i]),"bytes")}return(0,ee.ci)(t)}(n),i]})],blockNumber:t,blockTag:r},s=(0,eu.s)(e,ed.L,"readContract"),c=o?await s({...a,args:[...a.args,o]}):await s(a);if("0x"===c[0])return null;let u=(0,eT.k)({abi:J.nZ,functionName:"text",data:c[0]});return""===u?null:u}catch(e){if(a)throw e;if(ei(e,"resolve"))return null;throw e}}async function eN(e,{blockNumber:t,blockTag:r,assetGatewayUrls:n,name:i,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=await (0,eu.s)(e,e$,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!l)return null;try{return await eO(e,{record:l,gatewayUrls:n})}catch{return null}}var eM=r(35001),ej=r(64892),eD=r(76472),eL=r(64747),eU=r(77996),eB=r(37380),ez=r(35592),eF=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eW=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=eD.AccountController.state.address,this.balanceVal=eD.AccountController.state.balance,this.balanceSymbol=eD.AccountController.state.balanceSymbol,this.profileName=eD.AccountController.state.profileName,this.profileImage=eD.AccountController.state.profileImage,this.network=eD.NetworkController.state.caipNetwork,this.isUnsupportedChain=eD.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(...[eD.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),eD.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),eD.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=eD.fz.getNetworkImage(this.network),t="show"===this.balance;return eU.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${(0,ez.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,ez.o)(e)}
        avatarSrc=${(0,ez.o)(this.profileImage)}
        balance=${t?eD.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?eD.IN.open({view:"UnsupportedChain"}):eD.IN.open()}};eF([(0,eB.Cb)({type:Boolean})],eW.prototype,"disabled",void 0),eF([(0,eB.Cb)()],eW.prototype,"balance",void 0),eF([(0,eB.Cb)()],eW.prototype,"charsStart",void 0),eF([(0,eB.Cb)()],eW.prototype,"charsEnd",void 0),eF([(0,eB.SB)()],eW.prototype,"address",void 0),eF([(0,eB.SB)()],eW.prototype,"balanceVal",void 0),eF([(0,eB.SB)()],eW.prototype,"balanceSymbol",void 0),eF([(0,eB.SB)()],eW.prototype,"profileName",void 0),eF([(0,eB.SB)()],eW.prototype,"profileImage",void 0),eF([(0,eB.SB)()],eW.prototype,"network",void 0),eF([(0,eB.SB)()],eW.prototype,"isUnsupportedChain",void 0),eW=eF([(0,eL.customElement)("w3m-account-button")],eW);var eH=eU.iv`
  :host {
    display: block;
    width: max-content;
  }
`,eZ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eY=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=eD.AccountController.state.isConnected,this.unsubscribe.push(eD.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?eU.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,ez.o)(this.balance)}
            .charsStart=${(0,ez.o)(this.charsStart)}
            .charsEnd=${(0,ez.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:eU.dy`
          <w3m-connect-button
            size=${(0,ez.o)(this.size)}
            label=${(0,ez.o)(this.label)}
            loadingLabel=${(0,ez.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};eY.styles=eH,eZ([(0,eB.Cb)({type:Boolean})],eY.prototype,"disabled",void 0),eZ([(0,eB.Cb)()],eY.prototype,"balance",void 0),eZ([(0,eB.Cb)()],eY.prototype,"size",void 0),eZ([(0,eB.Cb)()],eY.prototype,"label",void 0),eZ([(0,eB.Cb)()],eY.prototype,"loadingLabel",void 0),eZ([(0,eB.Cb)()],eY.prototype,"charsStart",void 0),eZ([(0,eB.Cb)()],eY.prototype,"charsEnd",void 0),eZ([(0,eB.SB)()],eY.prototype,"isAccount",void 0),eY=eZ([(0,eL.customElement)("w3m-button")],eY);var eG=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eV=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=eD.IN.state.open,this.loading=eD.IN.state.loading,this.unsubscribe.push(eD.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return eU.dy`
      <wui-connect-button
        size=${(0,ez.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?eD.IN.close():this.loading||eD.IN.open()}};eG([(0,eB.Cb)()],eV.prototype,"size",void 0),eG([(0,eB.Cb)()],eV.prototype,"label",void 0),eG([(0,eB.Cb)()],eV.prototype,"loadingLabel",void 0),eG([(0,eB.SB)()],eV.prototype,"open",void 0),eG([(0,eB.SB)()],eV.prototype,"loading",void 0),eV=eG([(0,eL.customElement)("w3m-connect-button")],eV),r(90078);var eq=eU.iv`
  :host {
    display: block;
    width: max-content;
  }
`,eK=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eX=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=eD.NetworkController.state.caipNetwork,this.connected=eD.AccountController.state.isConnected,this.loading=eD.IN.state.loading,this.isUnsupportedChain=eD.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(...[eD.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),eD.AccountController.subscribeKey("isConnected",e=>this.connected=e),eD.IN.subscribeKey("loading",e=>this.loading=e),eD.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return eU.dy`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${(0,ez.o)(eD.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(eD.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),eD.IN.open({view:"Networks"}))}};eX.styles=eq,eK([(0,eB.Cb)({type:Boolean})],eX.prototype,"disabled",void 0),eK([(0,eB.SB)()],eX.prototype,"network",void 0),eK([(0,eB.SB)()],eX.prototype,"connected",void 0),eK([(0,eB.SB)()],eX.prototype,"loading",void 0),eK([(0,eB.SB)()],eX.prototype,"isUnsupportedChain",void 0),eX=eK([(0,eL.customElement)("w3m-network-button")],eX);var eJ=eU.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,eQ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e0=class extends eU.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=eD.RouterController.state.view,this.unsubscribe.push(eD.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return eU.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return eU.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return eU.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return eU.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return eU.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return eU.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return eU.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return eU.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return eU.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return eU.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return eU.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return eU.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return eU.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return eU.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return eU.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return eU.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return eU.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return eU.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return eU.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return eU.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return eU.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return eU.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`}}async onViewChange(e){let{history:t}=eD.RouterController.state,r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};e0.styles=eJ,eQ([(0,eB.SB)()],e0.prototype,"view",void 0),e0=eQ([(0,eL.customElement)("w3m-router")],e0);var e1=eU.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`,e2=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e3=class extends eU.oi{constructor(){super(),this.usubscribe=[],this.address=eD.AccountController.state.address,this.profileImage=eD.AccountController.state.profileImage,this.profileName=eD.AccountController.state.profileName,this.balance=eD.AccountController.state.balance,this.balanceSymbol=eD.AccountController.state.balanceSymbol,this.network=eD.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[eD.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):eD.IN.close()})],eD.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=eD.fz.getNetworkImage(this.network);return eU.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,ez.o)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?eL.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):eL.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${eD.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,ez.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){let e=eD.MO.getConnectedConnector(),t=eD.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(eD.bq.SECURE_SITE)?null:eU.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){let e=eD.MO.getConnectedConnector(),t=eD.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return eU.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=eD.AccountController.state;return e?eU.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=eD.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(eD.j1.copyToClopboard(this.address),eD.SnackController.showSuccess("Address copied"))}catch{eD.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(eD.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),eD.RouterController.push("Networks"))}onTransactions(){eD.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),eD.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await eD.ConnectionController.disconnect(),eD.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eD.IN.close()}catch{eD.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eD.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=eD.AccountController.state;e&&eD.j1.openHref(e,"_blank")}onGoToUpgradeView(){eD.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),eD.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){eD.RouterController.push("UpdateEmailWallet",{email:e})}};e3.styles=e1,e2([(0,eB.SB)()],e3.prototype,"address",void 0),e2([(0,eB.SB)()],e3.prototype,"profileImage",void 0),e2([(0,eB.SB)()],e3.prototype,"profileName",void 0),e2([(0,eB.SB)()],e3.prototype,"balance",void 0),e2([(0,eB.SB)()],e3.prototype,"balanceSymbol",void 0),e2([(0,eB.SB)()],e3.prototype,"network",void 0),e2([(0,eB.SB)()],e3.prototype,"disconecting",void 0),e3=e2([(0,eL.customElement)("w3m-account-view")],e3);var e5=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e4=class extends eU.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=eD.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return eU.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?eU.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:eU.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return eD.j1.isMobile()?eU.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){eD.RouterController.push("ConnectingWalletConnect")}};e5([(0,eB.SB)()],e4.prototype,"search",void 0),e4=e5([(0,eL.customElement)("w3m-all-wallets-view")],e4);var e6=eU.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,e8=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e7=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.connectors=eD.ConnectorController.state.connectors,this.unsubscribe.push(eD.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return eU.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(eD.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?eU.dy`
      <wui-list-wallet
        imageSrc=${(0,ez.o)(eD.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=eD.OptionsController.state;if(!e?.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);if(!e)return null;let{featured:t}=eD.ApiController.state;if(!t.length)return null;let r=this.filterOutDuplicateWallets(t);return r.map(e=>eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let e=eD.MO.getRecentWallets();return e.map(e=>eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>"INJECTED"===e.type&&eD.ConnectionController.checkInstalled()?eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null)}externalTemplate(){let e=eD.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(eD.bq.CONNECTOR_RDNS_MAP[t.id])?null:eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=eD.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!eD.j1.isMobile())return null;let r=eD.ApiController.state.count,n=eD.ApiController.state.featured.length,i=r+n,o=i<10?i:10*Math.floor(i/10),a=o<i?`${o}+`:`${o}`;return eU.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);if(!e)return null;let{recommended:t}=eD.ApiController.state,{customWallets:r,featuredWalletIds:n}=eD.OptionsController.state,{connectors:i}=eD.ConnectorController.state,o=eD.MO.getRecentWallets(),a=i.filter(e=>"INJECTED"===e.type),s=a.filter(e=>"Browser Wallet"!==e.name);if(n||r||!t.length)return null;let l=s.length+o.length,c=this.filterOutDuplicateWallets(t).slice(0,Math.max(0,2-l));return c.map(e=>eU.dy`
        <wui-list-wallet
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?eD.j1.isMobile()?eD.RouterController.push("AllWallets"):eD.RouterController.push("ConnectingWalletConnect"):eD.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let t=eD.MO.getRecentWallets(),r=t.map(e=>e.id),n=e.filter(e=>!r.includes(e.id));return n}onAllWallets(){eD.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),eD.RouterController.push("AllWallets")}onConnectWallet(e){eD.RouterController.push("ConnectingWalletConnect",{wallet:e})}};e7.styles=e6,e8([(0,eB.SB)()],e7.prototype,"connectors",void 0),e7=e8([(0,eL.customElement)("w3m-connect-view")],e7);var e9=eU.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,te=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class tt extends eU.oi{constructor(){super(),this.wallet=eD.RouterController.state.data?.wallet,this.connector=eD.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=eD.fz.getWalletImage(this.wallet)??eD.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=eD.ConnectionController.state.wcUri,this.error=eD.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[eD.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),eD.ConnectionController.subscribeKey("wcError",e=>this.error=e),eD.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),eU.dy`
      <wui-flex
        data-error=${(0,ez.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,ez.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?eU.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(eD.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=eD.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return eU.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(eD.j1.copyToClopboard(this.uri),eD.SnackController.showSuccess("Link copied"))}catch{eD.SnackController.showError("Failed to copy")}}}tt.styles=e9,te([(0,eB.SB)()],tt.prototype,"uri",void 0),te([(0,eB.SB)()],tt.prototype,"error",void 0),te([(0,eB.SB)()],tt.prototype,"ready",void 0),te([(0,eB.SB)()],tt.prototype,"showRetry",void 0),te([(0,eB.SB)()],tt.prototype,"buffering",void 0),te([(0,eB.Cb)({type:Boolean})],tt.prototype,"isMobile",void 0),te([(0,eB.Cb)()],tt.prototype,"onRetry",void 0);let tr={INJECTED:"browser",ANNOUNCED:"browser"},tn=class extends tt{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:tr[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&eD.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await eD.ConnectionController.connectExternal(this.connector),eD.yD.state.isSiweEnabled?eD.RouterController.push("ConnectingSiwe"):eD.IN.close(),eD.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){eD.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};tn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-external-view")],tn);var ti=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let to=class extends eU.oi{constructor(){super(...arguments),this.dappName=eD.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return eU.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,eD.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{eD.yD.setStatus("loading");let e=await eD.yD.signIn();return eD.yD.setStatus("success"),eD.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return eD.SnackController.showError("Signature declined"),eD.yD.setStatus("error"),eD.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=eD.AccountController.state;e?(await eD.ConnectionController.disconnect(),eD.IN.close()):eD.RouterController.push("Connect"),eD.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};ti([(0,eB.SB)()],to.prototype,"isSigning",void 0),to=ti([(0,eL.customElement)("w3m-connecting-siwe-view")],to);var ta=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ts=class extends eU.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=eD.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),eD.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),eU.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):eU.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=eD.ConnectionController.state;if(e||eD.j1.isPairingExpired(t)){if(eD.ConnectionController.connectWalletConnect(),this.wallet){let e=eD.fz.getWalletImage(this.wallet);e&&eD.MO.setConnectedWalletImageUrl(e)}else{let e=eD.ConnectorController.state.connectors,t=e.find(e=>"WALLET_CONNECT"===e.type),r=eD.fz.getConnectorImage(t);r&&eD.MO.setConnectedWalletImageUrl(r)}await eD.ConnectionController.state.wcPromise,this.finalizeConnection(),eD.yD.state.isSiweEnabled?eD.RouterController.push("ConnectingSiwe"):eD.IN.close()}}catch(e){eD.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),eD.ConnectionController.setWcError(!0),eD.j1.isAllowedRetry(this.lastRetry)&&(eD.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=eD.ConnectionController.state;e&&eD.MO.setWalletConnectDeepLink(e),t&&eD.MO.setWeb3ModalRecent(t),eD.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,o=n?.map(({injected_id:e})=>e).filter(Boolean),a=i?[i]:o??[],s=a.length,l=eD.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!eD.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(eD.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return eU.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return eU.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return eU.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return eU.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return eU.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return eU.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?eU.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ta([(0,eB.SB)()],ts.prototype,"platform",void 0),ta([(0,eB.SB)()],ts.prototype,"platforms",void 0),ts=ta([(0,eL.customElement)("w3m-connecting-wc-view")],ts);let tl=class extends eU.oi{constructor(){super(...arguments),this.wallet=eD.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return eU.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?eU.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?eU.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?eU.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?eU.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&eD.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&eD.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eD.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eD.j1.openHref(this.wallet.homepage,"_blank")}};tl=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-downloads-view")],tl);let tc=class extends eU.oi{render(){return eU.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{eD.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=eD.ApiController.state,{customWallets:r}=eD.OptionsController.state,n=[...t,...r??[],...e].slice(0,4);return n.map(e=>eU.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
          @click=${()=>{eD.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};tc=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-get-wallet-view")],tc);var tu=eU.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,td=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let th=class extends eU.oi{constructor(){super(),this.network=eD.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return eU.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,ez.o)(eD.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:eU.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await eD.NetworkController.switchActiveNetwork(this.network),eD.yD.state.isSiweEnabled||eD._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};th.styles=tu,td([(0,eB.SB)()],th.prototype,"showRetry",void 0),td([(0,eB.SB)()],th.prototype,"error",void 0),th=td([(0,eL.customElement)("w3m-network-switch-view")],th);var tf=eU.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,tp=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tg=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=eD.NetworkController.state.caipNetwork,this.unsubscribe.push(eD.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return eU.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){eD.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),eD.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=eD.NetworkController.state,n=eD.j1.sortRequestedNetworks(e,t);return n?.map(t=>eU.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${ez.o(eD.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=eD.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=eD.NetworkController.state,{data:o}=eD.RouterController.state;t&&i?.id!==e.id?r?.includes(e.id)?(await eD.NetworkController.switchActiveNetwork(e),eD._4.navigateAfterNetworkSwitch()):n&&eD.RouterController.push("SwitchNetwork",{...o,network:e}):t||(eD.NetworkController.setCaipNetwork(e),eD.RouterController.push("Connect"))}};tg.styles=tf,tp([(0,eB.SB)()],tg.prototype,"caipNetwork",void 0),tg=tp([(0,eL.customElement)("w3m-networks-view")],tg);var tm=r(88598),ty=eU.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`,tw=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tv="last-transaction",tb=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=eD.AccountController.state.address,this.transactions=eD.sl.state.transactions,this.transactionsByYear=eD.sl.state.transactionsByYear,this.loading=eD.sl.state.loading,this.empty=eD.sl.state.empty,this.next=eD.sl.state.next,this.unsubscribe.push(...[eD.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,eD.sl.resetTransactions(),eD.sl.fetchTransactions(e.address))}),eD.sl.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){0===this.transactions.length&&eD.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return eU.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let n=r===e.length-1,i=parseInt(t,10),o=Array(12).fill(null).map((e,t)=>t).reverse();return o.map(e=>{let t=eL.TransactionUtil.getTransactionGroupTitle(i,e),r=this.transactionsByYear[i]?.[e];return r?eU.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r,n)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:n,direction:i,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1,d=l?.length===2;return d&&!o?eU.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${t&&this.next?tv:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `:u?l.map((e,n)=>{let i=eL.TransactionUtil.getTransferDescription(e),o=t&&n===l.length-1;return eU.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?tv:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[a?.[n]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`}):eU.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${t&&this.next?tv:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,n)=>{let i=t&&n===e.length-1;return eU.dy`${this.templateRenderTransaction(r,i)}`})}templateEmpty(){return eU.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(eU.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){let{projectId:e}=eD.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(eD.sl.fetchTransactions(this.address),eD.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${tv}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=tm.E.formatDate(e?.metadata?.minedAt),r=eL.TransactionUtil.getTransactionDescriptions(e),n=e?.transfers,i=e?.transfers?.[0],o=!!i&&e?.transfers?.every(e=>!!e.nft_info),a=eL.TransactionUtil.getTransactionImages(n);return{date:t,direction:i?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:n,type:e.metadata?.operationType}}};tb.styles=ty,tw([(0,eB.SB)()],tb.prototype,"address",void 0),tw([(0,eB.SB)()],tb.prototype,"transactions",void 0),tw([(0,eB.SB)()],tb.prototype,"transactionsByYear",void 0),tw([(0,eB.SB)()],tb.prototype,"loading",void 0),tw([(0,eB.SB)()],tb.prototype,"empty",void 0),tw([(0,eB.SB)()],tb.prototype,"next",void 0),tb=tw([(0,eL.customElement)("w3m-transactions-view")],tb);let tx=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],tC=class extends eU.oi{render(){return eU.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${tx}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{eD.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tC=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-what-is-a-network-view")],tC);let t_=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],tE=class extends eU.oi{render(){return eU.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${t_}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){eD.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),eD.RouterController.push("GetWallet")}};tE=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-what-is-a-wallet-view")],tE);var tS=eU.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;let tk={SECURE_SITE_SDK:"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},tA={SAFE_RPC_METHODS:["eth_blockNumber","eth_estimateGas","eth_getTransactionByHash"]};(s=h||(h={})).assertEqual=e=>e,s.assertIs=function(e){},s.assertNever=function(e){throw Error()},s.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},s.getValidEnumValues=e=>{let t=s.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let n of t)r[n]=e[n];return s.objectValues(r)},s.objectValues=e=>s.objectKeys(e).map(function(t){return e[t]}),s.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},s.find=(e,t)=>{for(let r of e)if(t(r))return r},s.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,s.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},s.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(f||(f={})).mergeShapes=(e,t)=>({...e,...t});let tO=h.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),tP=e=>{let t=typeof e;switch(t){case"undefined":return tO.undefined;case"string":return tO.string;case"number":return isNaN(e)?tO.nan:tO.number;case"boolean":return tO.boolean;case"function":return tO.function;case"bigint":return tO.bigint;case"symbol":return tO.symbol;case"object":if(Array.isArray(e))return tO.array;if(null===e)return tO.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return tO.promise;if("undefined"!=typeof Map&&e instanceof Map)return tO.map;if("undefined"!=typeof Set&&e instanceof Set)return tO.set;if("undefined"!=typeof Date&&e instanceof Date)return tO.date;return tO.object;default:return tO.unknown}},tT=h.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class tR extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},n=e=>{for(let i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(n);else if("invalid_return_type"===i.code)n(i.returnTypeError);else if("invalid_arguments"===i.code)n(i.argumentsError);else if(0===i.path.length)r._errors.push(t(i));else{let e=r,n=0;for(;n<i.path.length;){let r=i.path[n],o=n===i.path.length-1;o?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(i))):e[r]=e[r]||{_errors:[]},e=e[r],n++}}};return n(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,h.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):r.push(e(n));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}tR.create=e=>{let t=new tR(e);return t};let tI=(e,t)=>{let r;switch(e.code){case tT.invalid_type:r=e.received===tO.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case tT.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,h.jsonStringifyReplacer)}`;break;case tT.unrecognized_keys:r=`Unrecognized key(s) in object: ${h.joinValues(e.keys,", ")}`;break;case tT.invalid_union:r="Invalid input";break;case tT.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${h.joinValues(e.options)}`;break;case tT.invalid_enum_value:r=`Invalid enum value. Expected ${h.joinValues(e.options)}, received '${e.received}'`;break;case tT.invalid_arguments:r="Invalid function arguments";break;case tT.invalid_return_type:r="Invalid function return type";break;case tT.invalid_date:r="Invalid date";break;case tT.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:h.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case tT.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case tT.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case tT.custom:r="Invalid input";break;case tT.invalid_intersection_types:r="Intersection results could not be merged";break;case tT.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case tT.not_finite:r="Number must be finite";break;default:r=t.defaultError,h.assertNever(e)}return{message:r}},t$=tI;function tN(){return t$}let tM=e=>{let{data:t,path:r,errorMaps:n,issueData:i}=e,o=[...r,...i.path||[]],a={...i,path:o},s="",l=n.filter(e=>!!e).slice().reverse();for(let e of l)s=e(a,{data:t,defaultError:s}).message;return{...i,path:o,message:i.message||s}};function tj(e,t){let r=tM({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,tN(),tI].filter(e=>!!e)});e.common.issues.push(r)}class tD{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let n of t){if("aborted"===n.status)return tL;"dirty"===n.status&&e.dirty(),r.push(n.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return tD.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let n of t){let{key:t,value:i}=n;if("aborted"===t.status||"aborted"===i.status)return tL;"dirty"===t.status&&e.dirty(),"dirty"===i.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==i.value||n.alwaysSet)&&(r[t.value]=i.value)}return{status:e.value,value:r}}}let tL=Object.freeze({status:"aborted"}),tU=e=>({status:"dirty",value:e}),tB=e=>({status:"valid",value:e}),tz=e=>"aborted"===e.status,tF=e=>"dirty"===e.status,tW=e=>"valid"===e.status,tH=e=>"undefined"!=typeof Promise&&e instanceof Promise;(l=p||(p={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},l.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class tZ{constructor(e,t,r,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let tY=(e,t)=>{if(tW(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new tR(e.common.issues);return this._error=t,this._error}}};function tG(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:n,description:i}=e;if(t&&(r||n))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:i}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=n?n:t.defaultError}:{message:null!=r?r:t.defaultError},description:i}}class tV{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return tP(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:tP(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new tD,ctx:{common:e.parent.common,data:e.data,parsedType:tP(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(tH(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let n={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:tP(e)},i=this._parseSync({data:e,path:n.path,parent:n});return tY(n,i)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:tP(e)},n=this._parse({data:e,path:r.path,parent:r}),i=await (tH(n)?n:Promise.resolve(n));return tY(r,i)}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,n)=>{let i=e(t),o=()=>n.addIssue({code:tT.custom,...r(t)});return"undefined"!=typeof Promise&&i instanceof Promise?i.then(e=>!!e||(o(),!1)):!!i||(o(),!1)})}refinement(e,t){return this._refinement((r,n)=>!!e(r)||(n.addIssue("function"==typeof t?t(r,n):t),!1))}_refinement(e){return new rC({schema:this,typeName:g.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return r_.create(this,this._def)}nullable(){return rE.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ro.create(this,this._def)}promise(){return rx.create(this,this._def)}or(e){return rs.create([this,e],this._def)}and(e){return ru.create(this,e,this._def)}transform(e){return new rC({...tG(this._def),schema:this,typeName:g.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new rS({...tG(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:g.ZodDefault})}brand(){return new rP({typeName:g.ZodBranded,type:this,...tG(this._def)})}catch(e){return new rk({...tG(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:g.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return rT.create(this,e)}readonly(){return rR.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let tq=/^c[^\s-]{8,}$/i,tK=/^[a-z][a-z0-9]*$/,tX=/^[0-9A-HJKMNP-TV-Z]{26}$/,tJ=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,tQ=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,t0=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,t1=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,t2=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class t3 extends tV{_parse(e){let t;this._def.coerce&&(e.data=String(e.data));let r=this._getType(e);if(r!==tO.string){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.string,received:t.parsedType}),tL}let i=new tD;for(let r of this._def.checks)if("min"===r.kind)e.data.length<r.value&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),i.dirty());else if("max"===r.kind)e.data.length>r.value&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),i.dirty());else if("length"===r.kind){let n=e.data.length>r.value,o=e.data.length<r.value;(n||o)&&(t=this._getOrReturnCtx(e,t),n?tj(t,{code:tT.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):o&&tj(t,{code:tT.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),i.dirty())}else if("email"===r.kind)tQ.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{validation:"email",code:tT.invalid_string,message:r.message}),i.dirty());else if("emoji"===r.kind)n||(n=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),n.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:tT.invalid_string,message:r.message}),i.dirty());else if("uuid"===r.kind)tJ.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:tT.invalid_string,message:r.message}),i.dirty());else if("cuid"===r.kind)tq.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:tT.invalid_string,message:r.message}),i.dirty());else if("cuid2"===r.kind)tK.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:tT.invalid_string,message:r.message}),i.dirty());else if("ulid"===r.kind)tX.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:tT.invalid_string,message:r.message}),i.dirty());else if("url"===r.kind)try{new URL(e.data)}catch(n){tj(t=this._getOrReturnCtx(e,t),{validation:"url",code:tT.invalid_string,message:r.message}),i.dirty()}else if("regex"===r.kind){r.regex.lastIndex=0;let n=r.regex.test(e.data);n||(tj(t=this._getOrReturnCtx(e,t),{validation:"regex",code:tT.invalid_string,message:r.message}),i.dirty())}else if("trim"===r.kind)e.data=e.data.trim();else if("includes"===r.kind)e.data.includes(r.value,r.position)||(tj(t=this._getOrReturnCtx(e,t),{code:tT.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),i.dirty());else if("toLowerCase"===r.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===r.kind)e.data=e.data.toUpperCase();else if("startsWith"===r.kind)e.data.startsWith(r.value)||(tj(t=this._getOrReturnCtx(e,t),{code:tT.invalid_string,validation:{startsWith:r.value},message:r.message}),i.dirty());else if("endsWith"===r.kind)e.data.endsWith(r.value)||(tj(t=this._getOrReturnCtx(e,t),{code:tT.invalid_string,validation:{endsWith:r.value},message:r.message}),i.dirty());else if("datetime"===r.kind){let n=t2(r);n.test(e.data)||(tj(t=this._getOrReturnCtx(e,t),{code:tT.invalid_string,validation:"datetime",message:r.message}),i.dirty())}else if("ip"===r.kind){var o,a;o=e.data,("v4"===(a=r.version)||!a)&&t0.test(o)||("v6"===a||!a)&&t1.test(o)||(tj(t=this._getOrReturnCtx(e,t),{validation:"ip",code:tT.invalid_string,message:r.message}),i.dirty())}else h.assertNever(r);return{status:i.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:tT.invalid_string,...p.errToObj(r)})}_addCheck(e){return new t3({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...p.errToObj(e)})}url(e){return this._addCheck({kind:"url",...p.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...p.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...p.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...p.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...p.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...p.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...p.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...p.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...p.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...p.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...p.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...p.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...p.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...p.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...p.errToObj(t)})}nonempty(e){return this.min(1,p.errToObj(e))}trim(){return new t3({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t3({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t3({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}t3.create=e=>{var t;return new t3({checks:[],typeName:g.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...tG(e)})};class t5 extends tV{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;this._def.coerce&&(e.data=Number(e.data));let r=this._getType(e);if(r!==tO.number){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.number,received:t.parsedType}),tL}let n=new tD;for(let r of this._def.checks)if("int"===r.kind)h.isInteger(e.data)||(tj(t=this._getOrReturnCtx(e,t),{code:tT.invalid_type,expected:"integer",received:"float",message:r.message}),n.dirty());else if("min"===r.kind){let i=r.inclusive?e.data<r.value:e.data<=r.value;i&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else if("max"===r.kind){let i=r.inclusive?e.data>r.value:e.data>=r.value;i&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else"multipleOf"===r.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=r>n?r:n,o=parseInt(e.toFixed(i).replace(".","")),a=parseInt(t.toFixed(i).replace(".",""));return o%a/Math.pow(10,i)}(e.data,r.value)&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):"finite"===r.kind?Number.isFinite(e.data)||(tj(t=this._getOrReturnCtx(e,t),{code:tT.not_finite,message:r.message}),n.dirty()):h.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,p.toString(t))}gt(e,t){return this.setLimit("min",e,!1,p.toString(t))}lte(e,t){return this.setLimit("max",e,!0,p.toString(t))}lt(e,t){return this.setLimit("max",e,!1,p.toString(t))}setLimit(e,t,r,n){return new t5({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:p.toString(n)}]})}_addCheck(e){return new t5({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:p.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:p.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:p.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:p.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:p.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:p.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:p.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:p.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:p.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&h.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}t5.create=e=>new t5({checks:[],typeName:g.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...tG(e)});class t4 extends tV{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;this._def.coerce&&(e.data=BigInt(e.data));let r=this._getType(e);if(r!==tO.bigint){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.bigint,received:t.parsedType}),tL}let n=new tD;for(let r of this._def.checks)if("min"===r.kind){let i=r.inclusive?e.data<r.value:e.data<=r.value;i&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty())}else if("max"===r.kind){let i=r.inclusive?e.data>r.value:e.data>=r.value;i&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty())}else"multipleOf"===r.kind?e.data%r.value!==BigInt(0)&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):h.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,p.toString(t))}gt(e,t){return this.setLimit("min",e,!1,p.toString(t))}lte(e,t){return this.setLimit("max",e,!0,p.toString(t))}lt(e,t){return this.setLimit("max",e,!1,p.toString(t))}setLimit(e,t,r,n){return new t4({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:p.toString(n)}]})}_addCheck(e){return new t4({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:p.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:p.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:p.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:p.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:p.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}t4.create=e=>{var t;return new t4({checks:[],typeName:g.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...tG(e)})};class t6 extends tV{_parse(e){this._def.coerce&&(e.data=!!e.data);let t=this._getType(e);if(t!==tO.boolean){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.boolean,received:t.parsedType}),tL}return tB(e.data)}}t6.create=e=>new t6({typeName:g.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...tG(e)});class t8 extends tV{_parse(e){let t;this._def.coerce&&(e.data=new Date(e.data));let r=this._getType(e);if(r!==tO.date){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.date,received:t.parsedType}),tL}if(isNaN(e.data.getTime())){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_date}),tL}let n=new tD;for(let r of this._def.checks)"min"===r.kind?e.data.getTime()<r.value&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),n.dirty()):"max"===r.kind?e.data.getTime()>r.value&&(tj(t=this._getOrReturnCtx(e,t),{code:tT.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),n.dirty()):h.assertNever(r);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t8({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:p.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:p.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}t8.create=e=>new t8({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:g.ZodDate,...tG(e)});class t7 extends tV{_parse(e){let t=this._getType(e);if(t!==tO.symbol){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.symbol,received:t.parsedType}),tL}return tB(e.data)}}t7.create=e=>new t7({typeName:g.ZodSymbol,...tG(e)});class t9 extends tV{_parse(e){let t=this._getType(e);if(t!==tO.undefined){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.undefined,received:t.parsedType}),tL}return tB(e.data)}}t9.create=e=>new t9({typeName:g.ZodUndefined,...tG(e)});class re extends tV{_parse(e){let t=this._getType(e);if(t!==tO.null){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.null,received:t.parsedType}),tL}return tB(e.data)}}re.create=e=>new re({typeName:g.ZodNull,...tG(e)});class rt extends tV{constructor(){super(...arguments),this._any=!0}_parse(e){return tB(e.data)}}rt.create=e=>new rt({typeName:g.ZodAny,...tG(e)});class rr extends tV{constructor(){super(...arguments),this._unknown=!0}_parse(e){return tB(e.data)}}rr.create=e=>new rr({typeName:g.ZodUnknown,...tG(e)});class rn extends tV{_parse(e){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.never,received:t.parsedType}),tL}}rn.create=e=>new rn({typeName:g.ZodNever,...tG(e)});class ri extends tV{_parse(e){let t=this._getType(e);if(t!==tO.undefined){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.void,received:t.parsedType}),tL}return tB(e.data)}}ri.create=e=>new ri({typeName:g.ZodVoid,...tG(e)});class ro extends tV{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),n=this._def;if(t.parsedType!==tO.array)return tj(t,{code:tT.invalid_type,expected:tO.array,received:t.parsedType}),tL;if(null!==n.exactLength){let e=t.data.length>n.exactLength.value,i=t.data.length<n.exactLength.value;(e||i)&&(tj(t,{code:e?tT.too_big:tT.too_small,minimum:i?n.exactLength.value:void 0,maximum:e?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(null!==n.minLength&&t.data.length<n.minLength.value&&(tj(t,{code:tT.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),null!==n.maxLength&&t.data.length>n.maxLength.value&&(tj(t,{code:tT.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>n.type._parseAsync(new tZ(t,e,t.path,r)))).then(e=>tD.mergeArray(r,e));let i=[...t.data].map((e,r)=>n.type._parseSync(new tZ(t,e,t.path,r)));return tD.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new ro({...this._def,minLength:{value:e,message:p.toString(t)}})}max(e,t){return new ro({...this._def,maxLength:{value:e,message:p.toString(t)}})}length(e,t){return new ro({...this._def,exactLength:{value:e,message:p.toString(t)}})}nonempty(e){return this.min(1,e)}}ro.create=(e,t)=>new ro({type:e,minLength:null,maxLength:null,exactLength:null,typeName:g.ZodArray,...tG(t)});class ra extends tV{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=h.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){let t=this._getType(e);if(t!==tO.object){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.object,received:t.parsedType}),tL}let{status:r,ctx:n}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof rn&&"strip"===this._def.unknownKeys))for(let e in n.data)o.includes(e)||a.push(e);let s=[];for(let e of o){let t=i[e],r=n.data[e];s.push({key:{status:"valid",value:e},value:t._parse(new tZ(n,r,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof rn){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of a)s.push({key:{status:"valid",value:e},value:{status:"valid",value:n.data[e]}});else if("strict"===e)a.length>0&&(tj(n,{code:tT.unrecognized_keys,keys:a}),r.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];s.push({key:{status:"valid",value:t},value:e._parse(new tZ(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of s){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>tD.mergeObjectSync(r,e)):tD.mergeObjectSync(r,s)}get shape(){return this._def.shape()}strict(e){return p.errToObj,new ra({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var n,i,o,a;let s=null!==(o=null===(i=(n=this._def).errorMap)||void 0===i?void 0:i.call(n,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=p.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new ra({...this._def,unknownKeys:"strip"})}passthrough(){return new ra({...this._def,unknownKeys:"passthrough"})}extend(e){return new ra({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){let t=new ra({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:g.ZodObject});return t}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ra({...this._def,catchall:e})}pick(e){let t={};return h.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new ra({...this._def,shape:()=>t})}omit(e){let t={};return h.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new ra({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof ra){let r={};for(let n in t.shape){let i=t.shape[n];r[n]=r_.create(e(i))}return new ra({...t._def,shape:()=>r})}return t instanceof ro?new ro({...t._def,type:e(t.element)}):t instanceof r_?r_.create(e(t.unwrap())):t instanceof rE?rE.create(e(t.unwrap())):t instanceof rd?rd.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return h.objectKeys(this.shape).forEach(r=>{let n=this.shape[r];e&&!e[r]?t[r]=n:t[r]=n.optional()}),new ra({...this._def,shape:()=>t})}required(e){let t={};return h.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r],n=e;for(;n instanceof r_;)n=n._def.innerType;t[r]=n}}),new ra({...this._def,shape:()=>t})}keyof(){return rw(h.objectKeys(this.shape))}}ra.create=(e,t)=>new ra({shape:()=>e,unknownKeys:"strip",catchall:rn.create(),typeName:g.ZodObject,...tG(t)}),ra.strictCreate=(e,t)=>new ra({shape:()=>e,unknownKeys:"strict",catchall:rn.create(),typeName:g.ZodObject,...tG(t)}),ra.lazycreate=(e,t)=>new ra({shape:e,unknownKeys:"strip",catchall:rn.create(),typeName:g.ZodObject,...tG(t)});class rs extends tV{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new tR(e.ctx.common.issues));return tj(t,{code:tT.invalid_union,unionErrors:r}),tL});{let e;let n=[];for(let i of r){let r={...t,common:{...t.common,issues:[]},parent:null},o=i._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&n.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=n.map(e=>new tR(e));return tj(t,{code:tT.invalid_union,unionErrors:i}),tL}}get options(){return this._def.options}}rs.create=(e,t)=>new rs({options:e,typeName:g.ZodUnion,...tG(t)});let rl=e=>{if(e instanceof rm)return rl(e.schema);if(e instanceof rC)return rl(e.innerType());if(e instanceof ry)return[e.value];if(e instanceof rv)return e.options;if(e instanceof rb)return Object.keys(e.enum);if(e instanceof rS)return rl(e._def.innerType);if(e instanceof t9)return[void 0];else if(e instanceof re)return[null];else return null};class rc extends tV{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==tO.object)return tj(t,{code:tT.invalid_type,expected:tO.object,received:t.parsedType}),tL;let r=this.discriminator,n=t.data[r],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(tj(t,{code:tT.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),tL)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let n=new Map;for(let r of t){let t=rl(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let i of t){if(n.has(i))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);n.set(i,r)}}return new rc({typeName:g.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...tG(r)})}}class ru extends tV{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),n=(e,n)=>{if(tz(e)||tz(n))return tL;let i=function e(t,r){let n=tP(t),i=tP(r);if(t===r)return{valid:!0,data:t};if(n===tO.object&&i===tO.object){let n=h.objectKeys(r),i=h.objectKeys(t).filter(e=>-1!==n.indexOf(e)),o={...t,...r};for(let n of i){let i=e(t[n],r[n]);if(!i.valid)return{valid:!1};o[n]=i.data}return{valid:!0,data:o}}if(n===tO.array&&i===tO.array){if(t.length!==r.length)return{valid:!1};let n=[];for(let i=0;i<t.length;i++){let o=t[i],a=r[i],s=e(o,a);if(!s.valid)return{valid:!1};n.push(s.data)}return{valid:!0,data:n}}return n===tO.date&&i===tO.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,n.value);return i.valid?((tF(e)||tF(n))&&t.dirty(),{status:t.value,value:i.data}):(tj(r,{code:tT.invalid_intersection_types}),tL)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>n(e,t)):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ru.create=(e,t,r)=>new ru({left:e,right:t,typeName:g.ZodIntersection,...tG(r)});class rd extends tV{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==tO.array)return tj(r,{code:tT.invalid_type,expected:tO.array,received:r.parsedType}),tL;if(r.data.length<this._def.items.length)return tj(r,{code:tT.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),tL;let n=this._def.rest;!n&&r.data.length>this._def.items.length&&(tj(r,{code:tT.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let n=this._def.items[t]||this._def.rest;return n?n._parse(new tZ(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>tD.mergeArray(t,e)):tD.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new rd({...this._def,rest:e})}}rd.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new rd({items:e,typeName:g.ZodTuple,rest:null,...tG(t)})};class rh extends tV{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==tO.object)return tj(r,{code:tT.invalid_type,expected:tO.object,received:r.parsedType}),tL;let n=[],i=this._def.keyType,o=this._def.valueType;for(let e in r.data)n.push({key:i._parse(new tZ(r,e,r.path,e)),value:o._parse(new tZ(r,r.data[e],r.path,e))});return r.common.async?tD.mergeObjectAsync(t,n):tD.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,r){return new rh(t instanceof tV?{keyType:e,valueType:t,typeName:g.ZodRecord,...tG(r)}:{keyType:t3.create(),valueType:e,typeName:g.ZodRecord,...tG(t)})}}class rf extends tV{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==tO.map)return tj(r,{code:tT.invalid_type,expected:tO.map,received:r.parsedType}),tL;let n=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([e,t],o)=>({key:n._parse(new tZ(r,e,r.path,[o,"key"])),value:i._parse(new tZ(r,t,r.path,[o,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of o){let n=await r.key,i=await r.value;if("aborted"===n.status||"aborted"===i.status)return tL;("dirty"===n.status||"dirty"===i.status)&&t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of o){let n=r.key,i=r.value;if("aborted"===n.status||"aborted"===i.status)return tL;("dirty"===n.status||"dirty"===i.status)&&t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}}}rf.create=(e,t,r)=>new rf({valueType:t,keyType:e,typeName:g.ZodMap,...tG(r)});class rp extends tV{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==tO.set)return tj(r,{code:tT.invalid_type,expected:tO.set,received:r.parsedType}),tL;let n=this._def;null!==n.minSize&&r.data.size<n.minSize.value&&(tj(r,{code:tT.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),null!==n.maxSize&&r.data.size>n.maxSize.value&&(tj(r,{code:tT.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());let i=this._def.valueType;function o(e){let r=new Set;for(let n of e){if("aborted"===n.status)return tL;"dirty"===n.status&&t.dirty(),r.add(n.value)}return{status:t.value,value:r}}let a=[...r.data.values()].map((e,t)=>i._parse(new tZ(r,e,r.path,t)));return r.common.async?Promise.all(a).then(e=>o(e)):o(a)}min(e,t){return new rp({...this._def,minSize:{value:e,message:p.toString(t)}})}max(e,t){return new rp({...this._def,maxSize:{value:e,message:p.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}rp.create=(e,t)=>new rp({valueType:e,minSize:null,maxSize:null,typeName:g.ZodSet,...tG(t)});class rg extends tV{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==tO.function)return tj(t,{code:tT.invalid_type,expected:tO.function,received:t.parsedType}),tL;function r(e,r){return tM({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,tN(),tI].filter(e=>!!e),issueData:{code:tT.invalid_arguments,argumentsError:r}})}function n(e,r){return tM({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,tN(),tI].filter(e=>!!e),issueData:{code:tT.invalid_return_type,returnTypeError:r}})}let i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof rx){let e=this;return tB(async function(...t){let a=new tR([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw a.addIssue(r(t,e)),a}),l=await Reflect.apply(o,this,s),c=await e._def.returns._def.type.parseAsync(l,i).catch(e=>{throw a.addIssue(n(l,e)),a});return c})}{let e=this;return tB(function(...t){let a=e._def.args.safeParse(t,i);if(!a.success)throw new tR([r(t,a.error)]);let s=Reflect.apply(o,this,a.data),l=e._def.returns.safeParse(s,i);if(!l.success)throw new tR([n(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new rg({...this._def,args:rd.create(e).rest(rr.create())})}returns(e){return new rg({...this._def,returns:e})}implement(e){let t=this.parse(e);return t}strictImplement(e){let t=this.parse(e);return t}static create(e,t,r){return new rg({args:e||rd.create([]).rest(rr.create()),returns:t||rr.create(),typeName:g.ZodFunction,...tG(r)})}}class rm extends tV{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.getter();return r._parse({data:t.data,path:t.path,parent:t})}}rm.create=(e,t)=>new rm({getter:e,typeName:g.ZodLazy,...tG(t)});class ry extends tV{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return tj(t,{received:t.data,code:tT.invalid_literal,expected:this._def.value}),tL}return{status:"valid",value:e.data}}get value(){return this._def.value}}function rw(e,t){return new rv({values:e,typeName:g.ZodEnum,...tG(t)})}ry.create=(e,t)=>new ry({value:e,typeName:g.ZodLiteral,...tG(t)});class rv extends tV{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return tj(t,{expected:h.joinValues(r),received:t.parsedType,code:tT.invalid_type}),tL}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return tj(t,{received:t.data,code:tT.invalid_enum_value,options:r}),tL}return tB(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return rv.create(e)}exclude(e){return rv.create(this.options.filter(t=>!e.includes(t)))}}rv.create=rw;class rb extends tV{_parse(e){let t=h.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==tO.string&&r.parsedType!==tO.number){let e=h.objectValues(t);return tj(r,{expected:h.joinValues(e),received:r.parsedType,code:tT.invalid_type}),tL}if(-1===t.indexOf(e.data)){let e=h.objectValues(t);return tj(r,{received:r.data,code:tT.invalid_enum_value,options:e}),tL}return tB(e.data)}get enum(){return this._def.values}}rb.create=(e,t)=>new rb({values:e,typeName:g.ZodNativeEnum,...tG(t)});class rx extends tV{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==tO.promise&&!1===t.common.async)return tj(t,{code:tT.invalid_type,expected:tO.promise,received:t.parsedType}),tL;let r=t.parsedType===tO.promise?t.data:Promise.resolve(t.data);return tB(r.then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}rx.create=(e,t)=>new rx({type:e,typeName:g.ZodPromise,...tG(t)});class rC extends tV{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===g.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:e=>{tj(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),"preprocess"===n.type){let e=n.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===n.type){let e=e=>{let t=n.refinement(e,i);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?tL:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===n.status?tL:("dirty"===n.status&&t.dirty(),e(n.value),{status:t.value,value:n.value})}}if("transform"===n.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>tW(e)?Promise.resolve(n.transform(e.value,i)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!tW(e))return e;let o=n.transform(e.value,i);if(o instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}}h.assertNever(n)}}rC.create=(e,t,r)=>new rC({schema:e,typeName:g.ZodEffects,effect:t,...tG(r)}),rC.createWithPreprocess=(e,t,r)=>new rC({schema:t,effect:{type:"preprocess",transform:e},typeName:g.ZodEffects,...tG(r)});class r_ extends tV{_parse(e){let t=this._getType(e);return t===tO.undefined?tB(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}r_.create=(e,t)=>new r_({innerType:e,typeName:g.ZodOptional,...tG(t)});class rE extends tV{_parse(e){let t=this._getType(e);return t===tO.null?tB(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}rE.create=(e,t)=>new rE({innerType:e,typeName:g.ZodNullable,...tG(t)});class rS extends tV{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===tO.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}rS.create=(e,t)=>new rS({innerType:e,typeName:g.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...tG(t)});class rk extends tV{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return tH(n)?n.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new tR(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===n.status?n.value:this._def.catchValue({get error(){return new tR(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}rk.create=(e,t)=>new rk({innerType:e,typeName:g.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...tG(t)});class rA extends tV{_parse(e){let t=this._getType(e);if(t!==tO.nan){let t=this._getOrReturnCtx(e);return tj(t,{code:tT.invalid_type,expected:tO.nan,received:t.parsedType}),tL}return{status:"valid",value:e.data}}}rA.create=e=>new rA({typeName:g.ZodNaN,...tG(e)});let rO=Symbol("zod_brand");class rP extends tV{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class rT extends tV{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async){let e=async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?tL:"dirty"===e.status?(t.dirty(),tU(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})};return e()}{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?tL:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new rT({in:e,out:t,typeName:g.ZodPipeline})}}class rR extends tV{_parse(e){let t=this._def.innerType._parse(e);return tW(t)&&(t.value=Object.freeze(t.value)),t}}rR.create=(e,t)=>new rR({innerType:e,typeName:g.ZodReadonly,...tG(t)});let rI=(e,t={},r)=>e?rt.create().superRefine((n,i)=>{var o,a;if(!e(n)){let e="function"==typeof t?t(n):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a;i.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):rt.create(),r$={object:ra.lazycreate};(c=g||(g={})).ZodString="ZodString",c.ZodNumber="ZodNumber",c.ZodNaN="ZodNaN",c.ZodBigInt="ZodBigInt",c.ZodBoolean="ZodBoolean",c.ZodDate="ZodDate",c.ZodSymbol="ZodSymbol",c.ZodUndefined="ZodUndefined",c.ZodNull="ZodNull",c.ZodAny="ZodAny",c.ZodUnknown="ZodUnknown",c.ZodNever="ZodNever",c.ZodVoid="ZodVoid",c.ZodArray="ZodArray",c.ZodObject="ZodObject",c.ZodUnion="ZodUnion",c.ZodDiscriminatedUnion="ZodDiscriminatedUnion",c.ZodIntersection="ZodIntersection",c.ZodTuple="ZodTuple",c.ZodRecord="ZodRecord",c.ZodMap="ZodMap",c.ZodSet="ZodSet",c.ZodFunction="ZodFunction",c.ZodLazy="ZodLazy",c.ZodLiteral="ZodLiteral",c.ZodEnum="ZodEnum",c.ZodEffects="ZodEffects",c.ZodNativeEnum="ZodNativeEnum",c.ZodOptional="ZodOptional",c.ZodNullable="ZodNullable",c.ZodDefault="ZodDefault",c.ZodCatch="ZodCatch",c.ZodPromise="ZodPromise",c.ZodBranded="ZodBranded",c.ZodPipeline="ZodPipeline",c.ZodReadonly="ZodReadonly";let rN=t3.create,rM=t5.create,rj=rA.create,rD=t4.create,rL=t6.create,rU=t8.create,rB=t7.create,rz=t9.create,rF=re.create,rW=rt.create,rH=rr.create,rZ=rn.create,rY=ri.create,rG=ro.create,rV=ra.create,rq=ra.strictCreate,rK=rs.create,rX=rc.create,rJ=ru.create,rQ=rd.create,r0=rh.create,r1=rf.create,r2=rp.create,r3=rg.create,r5=rm.create,r4=ry.create,r6=rv.create,r8=rb.create,r7=rx.create,r9=rC.create,ne=r_.create,nt=rE.create,nr=rC.createWithPreprocess,nn=rT.create;var ni=Object.freeze({__proto__:null,defaultErrorMap:tI,setErrorMap:function(e){t$=e},getErrorMap:tN,makeIssue:tM,EMPTY_PATH:[],addIssueToContext:tj,ParseStatus:tD,INVALID:tL,DIRTY:tU,OK:tB,isAborted:tz,isDirty:tF,isValid:tW,isAsync:tH,get util(){return h},get objectUtil(){return f},ZodParsedType:tO,getParsedType:tP,ZodType:tV,ZodString:t3,ZodNumber:t5,ZodBigInt:t4,ZodBoolean:t6,ZodDate:t8,ZodSymbol:t7,ZodUndefined:t9,ZodNull:re,ZodAny:rt,ZodUnknown:rr,ZodNever:rn,ZodVoid:ri,ZodArray:ro,ZodObject:ra,ZodUnion:rs,ZodDiscriminatedUnion:rc,ZodIntersection:ru,ZodTuple:rd,ZodRecord:rh,ZodMap:rf,ZodSet:rp,ZodFunction:rg,ZodLazy:rm,ZodLiteral:ry,ZodEnum:rv,ZodNativeEnum:rb,ZodPromise:rx,ZodEffects:rC,ZodTransformer:rC,ZodOptional:r_,ZodNullable:rE,ZodDefault:rS,ZodCatch:rk,ZodNaN:rA,BRAND:rO,ZodBranded:rP,ZodPipeline:rT,ZodReadonly:rR,custom:rI,Schema:tV,ZodSchema:tV,late:r$,get ZodFirstPartyTypeKind(){return g},coerce:{string:e=>t3.create({...e,coerce:!0}),number:e=>t5.create({...e,coerce:!0}),boolean:e=>t6.create({...e,coerce:!0}),bigint:e=>t4.create({...e,coerce:!0}),date:e=>t8.create({...e,coerce:!0})},any:rW,array:rG,bigint:rD,boolean:rL,date:rU,discriminatedUnion:rX,effect:r9,enum:r6,function:r3,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>rI(t=>t instanceof e,t),intersection:rJ,lazy:r5,literal:r4,map:r1,nan:rj,nativeEnum:r8,never:rZ,null:rF,nullable:nt,number:rM,object:rV,oboolean:()=>rL().optional(),onumber:()=>rM().optional(),optional:ne,ostring:()=>rN().optional(),pipeline:nn,preprocess:nr,promise:r7,record:r0,set:r2,strictObject:rq,string:rN,symbol:rB,transformer:r9,tuple:rQ,undefined:rz,union:rK,unknown:rH,void:rY,NEVER:tL,ZodIssueCode:tT,quotelessJson:e=>{let t=JSON.stringify(e,null,2);return t.replace(/"([^"]+)":/g,"$1:")},ZodError:tR});let no=ni.object({message:ni.string()});function na(e){return ni.literal(tk[e])}ni.object({accessList:ni.array(ni.string()),blockHash:ni.string().nullable(),blockNumber:ni.string().nullable(),chainId:ni.string(),from:ni.string(),gas:ni.string(),hash:ni.string(),input:ni.string().nullable(),maxFeePerGas:ni.string(),maxPriorityFeePerGas:ni.string(),nonce:ni.string(),r:ni.string(),s:ni.string(),to:ni.string(),transactionIndex:ni.string().nullable(),type:ni.string(),v:ni.string(),value:ni.string()});let ns=ni.object({chainId:ni.number()}),nl=ni.object({email:ni.string().email()}),nc=ni.object({otp:ni.string()}),nu=ni.object({chainId:ni.optional(ni.number())}),nd=ni.object({email:ni.string().email()}),nh=ni.object({otp:ni.string()}),nf=ni.object({otp:ni.string()}),np=ni.object({themeMode:ni.optional(ni.enum(["light","dark"])),themeVariables:ni.optional(ni.record(ni.string(),ni.string().or(ni.number())))}),ng=ni.object({metadata:ni.object({name:ni.string(),description:ni.string(),url:ni.string(),icons:ni.array(ni.string())}).optional(),sdkVersion:ni.string(),projectId:ni.string()}),nm=ni.object({action:ni.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),ny=ni.object({email:ni.string().email(),address:ni.string(),chainId:ni.number()}),nw=ni.object({isConnected:ni.boolean()}),nv=ni.object({chainId:ni.number()}),nb=ni.object({chainId:ni.number()}),nx=ni.object({newEmail:ni.string().email()}),nC=ni.any(),n_=ni.object({method:ni.literal("personal_sign"),params:ni.array(ni.any())}),nE=ni.object({method:ni.literal("eth_sendTransaction"),params:ni.array(ni.any())}),nS=ni.object({method:ni.literal("eth_accounts")}),nk=ni.object({method:ni.literal("eth_getBalance"),params:ni.array(ni.any())}),nA=ni.object({method:ni.literal("eth_estimateGas"),params:ni.array(ni.any())}),nO=ni.object({method:ni.literal("eth_gasPrice")}),nP=ni.object({method:ni.literal("eth_signTypedData_v4"),params:ni.array(ni.any())}),nT=ni.object({method:ni.literal("eth_getTransactionByHash"),params:ni.array(ni.any())}),nR=ni.object({method:ni.literal("eth_blockNumber")}),nI=ni.object({method:ni.literal("eth_chainId")}),n$=ni.object({token:ni.string()});ni.object({type:na("APP_SWITCH_NETWORK"),payload:ns}).or(ni.object({type:na("APP_CONNECT_EMAIL"),payload:nl})).or(ni.object({type:na("APP_CONNECT_DEVICE")})).or(ni.object({type:na("APP_CONNECT_OTP"),payload:nc})).or(ni.object({type:na("APP_GET_USER"),payload:ni.optional(nu)})).or(ni.object({type:na("APP_SIGN_OUT")})).or(ni.object({type:na("APP_IS_CONNECTED"),payload:ni.optional(n$)})).or(ni.object({type:na("APP_GET_CHAIN_ID")})).or(ni.object({type:na("APP_RPC_REQUEST"),payload:n_.or(nE).or(nS).or(nk).or(nA).or(nO).or(nP).or(nR).or(nI).or(nT)})).or(ni.object({type:na("APP_UPDATE_EMAIL"),payload:nd})).or(ni.object({type:na("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:nh})).or(ni.object({type:na("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:nf})).or(ni.object({type:na("APP_SYNC_THEME"),payload:np})).or(ni.object({type:na("APP_SYNC_DAPP_DATA"),payload:ng})),ni.object({type:na("FRAME_SWITCH_NETWORK_ERROR"),payload:no}).or(ni.object({type:na("FRAME_SWITCH_NETWORK_SUCCESS"),payload:nb})).or(ni.object({type:na("FRAME_CONNECT_EMAIL_ERROR"),payload:no})).or(ni.object({type:na("FRAME_CONNECT_EMAIL_SUCCESS"),payload:nm})).or(ni.object({type:na("FRAME_CONNECT_OTP_ERROR"),payload:no})).or(ni.object({type:na("FRAME_CONNECT_OTP_SUCCESS")})).or(ni.object({type:na("FRAME_CONNECT_DEVICE_ERROR"),payload:no})).or(ni.object({type:na("FRAME_CONNECT_DEVICE_SUCCESS")})).or(ni.object({type:na("FRAME_GET_USER_ERROR"),payload:no})).or(ni.object({type:na("FRAME_GET_USER_SUCCESS"),payload:ny})).or(ni.object({type:na("FRAME_SIGN_OUT_ERROR"),payload:no})).or(ni.object({type:na("FRAME_SIGN_OUT_SUCCESS")})).or(ni.object({type:na("FRAME_IS_CONNECTED_ERROR"),payload:no})).or(ni.object({type:na("FRAME_IS_CONNECTED_SUCCESS"),payload:nw})).or(ni.object({type:na("FRAME_GET_CHAIN_ID_ERROR"),payload:no})).or(ni.object({type:na("FRAME_GET_CHAIN_ID_SUCCESS"),payload:nv})).or(ni.object({type:na("FRAME_RPC_REQUEST_ERROR"),payload:no})).or(ni.object({type:na("FRAME_RPC_REQUEST_SUCCESS"),payload:nC})).or(ni.object({type:na("FRAME_SESSION_UPDATE"),payload:n$})).or(ni.object({type:na("FRAME_UPDATE_EMAIL_ERROR"),payload:no})).or(ni.object({type:na("FRAME_UPDATE_EMAIL_SUCCESS")})).or(ni.object({type:na("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:no})).or(ni.object({type:na("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(ni.object({type:na("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:no})).or(ni.object({type:na("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:nx})).or(ni.object({type:na("FRAME_SYNC_THEME_ERROR"),payload:no})).or(ni.object({type:na("FRAME_SYNC_THEME_SUCCESS")})).or(ni.object({type:na("FRAME_SYNC_DAPP_DATA_ERROR"),payload:no})).or(ni.object({type:na("FRAME_SYNC_DAPP_DATA_SUCCESS")}));let nN={set(e,t){nj.isClient&&localStorage.setItem(`${tk.STORAGE_KEY}${e}`,t)},get:e=>nj.isClient?localStorage.getItem(`${tk.STORAGE_KEY}${e}`):null,delete(e){nj.isClient&&localStorage.removeItem(`${tk.STORAGE_KEY}${e}`)}},nM=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],nj={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return nM.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=nN.get(tk.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=nN.get(tk.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0},checkIfRequestIsAllowed(e){let t=e?.payload?.method;return tA.SAFE_RPC_METHODS.includes(t)},isClient:"undefined"!=typeof window};var nD=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nL=class extends eU.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=nj.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=eD.RouterController.state.data?.email,this.emailConnector=eD.ConnectorController.getEmailConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return eU.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?eU.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:eU.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?eU.dy`
                    <wui-text variant="small-400" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=nj.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=nj.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=eD.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";let e=eD.ConnectorController.getEmailConnector();if(!e||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),eD.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){eD.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};nL.styles=tS,nD([(0,eB.SB)()],nL.prototype,"loading",void 0),nD([(0,eB.SB)()],nL.prototype,"timeoutTimeLeft",void 0),nD([(0,eB.SB)()],nL.prototype,"error",void 0),nL=nD([(0,eL.customElement)("w3m-email-otp-widget")],nL);let nU=class extends nL{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await eD.ConnectionController.connectExternal(this.emailConnector),eD.IN.close(),eD.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}catch(e){throw eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};nU=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-email-verify-otp-view")],nU);var nB=eU.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,nz=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nF=class extends eU.oi{constructor(){super(),this.email=eD.RouterController.state.data?.email,this.emailConnector=eD.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return eU.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 10 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),eD.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eD.RouterController.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),eD.SnackController.showSuccess("Code email resent")}}catch(e){eD.SnackController.showError(e)}finally{this.loading=!1}}};nF.styles=nB,nz([(0,eB.SB)()],nF.prototype,"loading",void 0),nF=nz([(0,eL.customElement)("w3m-email-verify-device-view")],nF);var nW=eU.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,nH=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nZ=class extends eU.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(eD.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect(),r=t??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${r.width}px`,this.iframe.style.height=`${r.height-10}px`,this.iframe.style.left=`${r.left}px`,this.iframe.style.top=`${r.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),eU.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};nZ.styles=nW,nH([(0,eB.SB)()],nZ.prototype,"ready",void 0),nZ=nH([(0,eL.customElement)("w3m-approve-transaction-view")],nZ);let nY=class extends eU.oi{render(){return eU.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${eD.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${eD.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};nY=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-upgrade-wallet-view")],nY);var nG=r(69178),nV=eU.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,nq=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nK=class extends eU.oi{constructor(){super(...arguments),this.formRef=(0,nG.V)(),this.initialEmail=eD.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return eU.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,nG.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${eD.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=eD.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),eD.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),eD.RouterController.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){eD.SnackController.showError(e),this.loading=!1}}};nK.styles=nV,nq([(0,eB.SB)()],nK.prototype,"email",void 0),nq([(0,eB.SB)()],nK.prototype,"loading",void 0),nK=nq([(0,eL.customElement)("w3m-update-email-wallet-view")],nK);let nX=class extends nL{constructor(){super(),this.email=eD.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:e}),eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),eD.RouterController.replace("UpdateEmailSecondaryOtp",eD.RouterController.state.data))}catch(e){throw eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{eD.RouterController.replace("UpdateEmailWallet",eD.RouterController.state.data)}}};nX=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-update-email-primary-otp-view")],nX);let nJ=class extends nL{constructor(){super(),this.email=eD.RouterController.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:e}),eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),eD.RouterController.replace("Account",{email:this.email}))}catch(e){throw eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{eD.RouterController.replace("UpdateEmailWallet",eD.RouterController.state.data)}}};nJ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-update-email-secondary-otp-view")],nJ);var nQ=eU.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,n0=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n1=class extends eU.oi{constructor(){super(...arguments),this.disconecting=!1}render(){return eU.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=eD.NetworkController.state,r=eD.j1.sortRequestedNetworks(e,t);return r.map(e=>eU.dy`
        <wui-list-network
          imageSrc=${(0,ez.o)(eD.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await eD.ConnectionController.disconnect(),eD.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eD.IN.close()}catch{eD.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eD.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let{isConnected:t}=eD.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=eD.NetworkController.state,{data:o}=eD.RouterController.state;t&&i?.id!==e.id?r?.includes(e.id)?(await eD.NetworkController.switchActiveNetwork(e),eD._4.navigateAfterNetworkSwitch()):n&&eD.RouterController.push("SwitchNetwork",{...o,network:e}):t||(eD.NetworkController.setCaipNetwork(e),eD.RouterController.push("Connect"))}};n1.styles=nQ,n0([(0,eB.SB)()],n1.prototype,"disconecting",void 0),n1=n0([(0,eL.customElement)("w3m-unsupported-chain-view")],n1);var n2=eU.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function n3(e){let{connectors:t}=eD.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{}),n=e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})),i=n.sort((e,t)=>Number(t.installed)-Number(e.installed));return i}var n5=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n4="local-paginator",n6=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!eD.ApiController.state.wallets.length,this.wallets=eD.ApiController.state.wallets,this.recommended=eD.ApiController.state.recommended,this.featured=eD.ApiController.state.featured,this.unsubscribe.push(...[eD.ApiController.subscribeKey("wallets",e=>this.wallets=e),eD.ApiController.subscribeKey("recommended",e=>this.recommended=e),eD.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return eU.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await eD.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>eU.dy`
        <wui-card-select-loader type="wallet" id=${(0,ez.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets],t=n3(e);return t.map(e=>eU.dy`
        <wui-card-select
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:n}=eD.ApiController.state,i=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/i)*i-o+i;return(a-=e.length?r.length%i:0,0===n&&r.length>0)?null:0===n||[...r,...e,...t].length<n?this.shimmerTemplate(a,n4):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${n4}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=eD.ApiController.state;r.length<t&&eD.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=eD.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?eD.RouterController.push("ConnectingExternal",{connector:r}):eD.RouterController.push("ConnectingWalletConnect",{wallet:e})}};n6.styles=n2,n5([(0,eB.SB)()],n6.prototype,"initial",void 0),n5([(0,eB.SB)()],n6.prototype,"wallets",void 0),n5([(0,eB.SB)()],n6.prototype,"recommended",void 0),n5([(0,eB.SB)()],n6.prototype,"featured",void 0),n6=n5([(0,eL.customElement)("w3m-all-wallets-list")],n6);var n8=eU.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,n7=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n9=class extends eU.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?eU.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await eD.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=eD.ApiController.state,t=n3(e);return e.length?eU.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>eU.dy`
            <wui-card-select
              imageSrc=${(0,ez.o)(eD.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:eU.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=eD.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?eD.RouterController.push("ConnectingExternal",{connector:r}):eD.RouterController.push("ConnectingWalletConnect",{wallet:e})}};n9.styles=n8,n7([(0,eB.SB)()],n9.prototype,"loading",void 0),n7([(0,eB.Cb)()],n9.prototype,"query",void 0),n9=n7([(0,eL.customElement)("w3m-all-wallets-search")],n9);var ie=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let it=class extends eU.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(eD.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return eU.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ie([(0,eB.Cb)({type:Array})],it.prototype,"platforms",void 0),ie([(0,eB.Cb)()],it.prototype,"onSelectPlatfrom",void 0),ie([(0,eB.SB)()],it.prototype,"buffering",void 0),it=ie([(0,eL.customElement)("w3m-connecting-header")],it);let ir=class extends tt{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=eD.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await eD.ConnectionController.connectExternal(t):r&&await eD.ConnectionController.connectExternal(r),eD.IN.close(),eD.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){eD.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ir=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-wc-browser")],ir);let ii=class extends tt{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=eD.j1.formatNativeUrl(e,this.uri);eD.ConnectionController.setWcLinking({name:t,href:n}),eD.ConnectionController.setRecentWallet(this.wallet),eD.j1.openHref(r,"_blank")}catch{this.error=!0}}};ii=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-wc-desktop")],ii);let io=class extends tt{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=eD.j1.formatNativeUrl(e,this.uri);eD.ConnectionController.setWcLinking({name:t,href:n}),eD.ConnectionController.setRecentWallet(this.wallet),eD.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=eD.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(eD.ConnectionController.setBuffering(!0),setTimeout(()=>{eD.ConnectionController.setBuffering(!1)},5e3))}};io=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-wc-mobile")],io);var ia=eU.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let is=class extends tt{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),eU.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return eD.ConnectionController.setWcLinking(void 0),eD.ConnectionController.setRecentWallet(this.wallet),eU.dy` <wui-qr-code
      size=${e}
      theme=${eD.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,ez.o)(eD.fz.getWalletImage(this.wallet))}
      alt=${(0,ez.o)(t)}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return eU.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};is.styles=ia,is=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-wc-qrcode")],is);var il=eU.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let ic=class extends eU.oi{constructor(){super(...arguments),this.dappImageUrl=eD.OptionsController.state.metadata?.icons,this.walletImageUrl=eD.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return eU.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};ic.styles=il,ic=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-siwe")],ic);let iu=class extends eU.oi{constructor(){if(super(),this.wallet=eD.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return eU.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,ez.o)(eD.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};iu=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-wc-unsupported")],iu);let id=class extends tt{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",eD.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=eD.j1.formatUniversalUrl(e,this.uri);eD.ConnectionController.setWcLinking({name:t,href:n}),eD.ConnectionController.setRecentWallet(this.wallet),eD.j1.openHref(r,"_blank")}catch{this.error=!0}}};id=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-connecting-wc-web")],id);var ih=eU.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,ip=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function ig(){let e=eD.RouterController.state.data?.connector?.name,t=eD.RouterController.state.data?.wallet?.name,r=eD.RouterController.state.data?.network?.name,n=t??e,i=eD.ConnectorController.getConnectors(),o=1===i.length&&i[0]?.id==="w3m-email";return{Connect:`Connect ${o?"Email":""} Wallet`,Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network"}}let im=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.heading=ig()[eD.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(eD.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),eD.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return eU.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){eD.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),eD.RouterController.push("WhatIsAWallet")}async onClose(){eD.yD.state.isSiweEnabled&&"success"!==eD.yD.state.status&&await eD.ConnectionController.disconnect(),eD.IN.close()}titleTemplate(){return eU.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=eD.RouterController.state;return this.showBack&&"ApproveTransaction"!==e?eU.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:eU.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?eU.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=ig()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=eD.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===eD.RouterController.state.view?eD.RouterController.push("Connect"):eD.RouterController.goBack()}};im.styles=[ih],ip([(0,eB.SB)()],im.prototype,"heading",void 0),ip([(0,eB.SB)()],im.prototype,"buffering",void 0),ip([(0,eB.SB)()],im.prototype,"showBack",void 0),im=ip([(0,eL.customElement)("w3m-header")],im);var iy=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iw=class extends eU.oi{constructor(){super(...arguments),this.data=[]}render(){return eU.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>eU.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>eU.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};iy([(0,eB.Cb)({type:Array})],iw.prototype,"data",void 0),iw=iy([(0,eL.customElement)("w3m-help-widget")],iw);var iv=eU.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let ib=class extends eU.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eD.OptionsController.state;return e||t?eU.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eD.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=eD.OptionsController.state;return e?eU.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=eD.OptionsController.state;return e?eU.dy`<a href=${e}>Privacy Policy</a>`:null}};ib.styles=[iv],ib=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,eL.customElement)("w3m-legal-footer")],ib);var ix=eU.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,iC=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i_=class extends eU.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,o=eD.j1.isMobile(),a=eD.j1.isIos(),s=eD.j1.isAndroid(),l=[t,r,i,n].filter(Boolean).length>1,c=eL.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?eU.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>eD.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?eU.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?eU.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?eU.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&eD.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eD.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eD.j1.openHref(this.wallet.homepage,"_blank")}};i_.styles=[ix],iC([(0,eB.Cb)({type:Object})],i_.prototype,"wallet",void 0),i_=iC([(0,eL.customElement)("w3m-mobile-download-links")],i_);var iE=eU.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,iS=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ik={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},iA=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=eD.SnackController.state.open,this.unsubscribe.push(eD.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=eD.SnackController.state,r=ik[t];return eU.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>eD.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};iA.styles=iE,iS([(0,eB.SB)()],iA.prototype,"open",void 0),iA=iS([(0,eL.customElement)("w3m-snackbar")],iA);var iO=eU.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`,iP=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iT=class extends eU.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,nG.V)(),this.connectors=eD.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(eD.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1,t=this.connectors.find(e=>"EMAIL"===e.type);return t?eU.dy`
      ${this.alphaWarningTemplate()}
      <form ${(0,nG.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?eU.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return eU.dy`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">Email login is in alpha</wui-text>
          </wui-flex>
        `}submitButtonTemplate(){let e=!this.loading&&this.email.length>3;return e?eU.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?eU.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=eD.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});eD.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(eD.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eD.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&eD.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=eD.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":eD.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){eD.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};iT.styles=iO,iP([(0,eB.SB)()],iT.prototype,"connectors",void 0),iP([(0,eB.SB)()],iT.prototype,"email",void 0),iP([(0,eB.SB)()],iT.prototype,"loading",void 0),iP([(0,eB.SB)()],iT.prototype,"error",void 0),iT=iP([(0,eL.customElement)("w3m-email-login-widget")],iT);let iR=!1;class iI{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{eD.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{eD.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{eD.AccountController.setBalance(e,t)},this.setProfileName=e=>{eD.AccountController.setProfileName(e)},this.setProfileImage=e=>{eD.AccountController.setProfileImage(e)},this.resetAccount=()=>{eD.AccountController.resetAccount()},this.setCaipNetwork=e=>{eD.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>eD.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{eD.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>eD.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{eD.NetworkController.resetNetwork()},this.setConnectors=e=>{eD.ConnectorController.setConnectors(e)},this.addConnector=e=>{eD.ConnectorController.addConnector(e)},this.getConnectors=()=>eD.ConnectorController.getConnectors(),this.resetWcConnection=()=>{eD.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>eD.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{eD.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{eD.yD.setNonce(e)},this.setSIWESession=e=>{eD.yD.setSession(e)},this.setSIWEStatus=e=>{eD.yD.setStatus(e)},this.setSIWEMessage=e=>{eD.yD.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),eD.IN.open(e)}async close(){await this.initOrContinue(),eD.IN.close()}setLoading(e){eD.IN.setLoading(e)}getThemeMode(){return eD.ThemeController.state.themeMode}getThemeVariables(){return eD.ThemeController.state.themeVariables}setThemeMode(e){eD.ThemeController.setThemeMode(e),(0,eL.setColorTheme)(eD.ThemeController.state.themeMode);try{let e=eD.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeMode:eD.ThemeController.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){eD.ThemeController.setThemeVariables(e),(0,eL.setThemeVariables)(eD.ThemeController.state.themeVariables);try{let e=eD.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeVariables:eD.ThemeController.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return eD.ThemeController.subscribe(e)}getState(){return{...eD.Ie.state}}subscribeState(e){return eD.Ie.subscribe(e)}getEvent(){return{...eD.Xs.state}}subscribeEvents(e){return eD.Xs.subscribe(e)}subscribeSIWEState(e){return eD.yD.subscribe(e)}initControllers(e){if(eD.NetworkController.setClient(e.networkControllerClient),eD.NetworkController.setDefaultCaipNetwork(e.defaultChain),eD.OptionsController.setProjectId(e.projectId),eD.OptionsController.setAllWallets(e.allWallets),eD.OptionsController.setIncludeWalletIds(e.includeWalletIds),eD.OptionsController.setExcludeWalletIds(e.excludeWalletIds),eD.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),eD.OptionsController.setTokens(e.tokens),eD.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),eD.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),eD.OptionsController.setCustomWallets(e.customWallets),eD.OptionsController.setEnableAnalytics(e.enableAnalytics),eD.OptionsController.setSdkVersion(e._sdkVersion),eD.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){let t=e.siweControllerClient;eD.yD.setSIWEClient(t)}e.metadata&&eD.OptionsController.setMetadata(e.metadata),e.themeMode&&eD.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&eD.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!iR&&eD.j1.isClient()&&(iR=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,64747)),Promise.resolve().then(r.bind(r,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let i$={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",VERSION:"4.0.0"},iN={ConnectorExplorerIds:{[i$.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[i$.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[i$.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00"},ConnectorImageIds:{[i$.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i$.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i$.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[i$.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[i$.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[i$.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[i$.INJECTED_CONNECTOR_ID]:"Browser Wallet",[i$.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[i$.COINBASE_CONNECTOR_ID]:"Coinbase",[i$.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[i$.LEDGER_CONNECTOR_ID]:"Ledger",[i$.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[i$.INJECTED_CONNECTOR_ID]:"INJECTED",[i$.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[i$.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[i$.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},iM={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${i$.EIP155}:${e}`]=r}),t}};async function ij(e){if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let t=await e?.getProvider(),r=t?.signer?.session?.namespaces,n=r?.[i$.EIP155]?.methods,i=r?.[i$.EIP155]?.chains;return{supportsAllNetworks:!!n?.includes(i$.ADD_CHAIN_METHOD),approvedCaipNetworkIds:i}}class iD extends iI{constructor(e){let{wagmiConfig:t,siweConfig:r,defaultChain:n,tokens:i,_sdkVersion:o,...a}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=iM.caipNetworkIdToNumber(e?.id);t&&await B(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise(e=>{let r=new Map(t.state.connections),n=r.get(t.state.current||"");if(n?.connector?.id===i$.EMAIL_CONNECTOR_ID)e({supportsAllNetworks:!1,approvedCaipNetworkIds:iN.WalletConnectRpcChainIds.map(e=>`${i$.EIP155}:${e}`)});else if(n?.connector?.id===i$.WALLET_CONNECT_CONNECTOR_ID){let r=t.connectors.find(e=>e.id===i$.WALLET_CONNECT_CONNECTOR_ID);e(ij(r))}e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===i$.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");let n=await r.getProvider();n.on("display_uri",t=>{e(t)});let i=iM.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await z(this.wagmiConfig,{connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:n})=>{let i=t.connectors.find(t=>t.id===e);if(!i)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&n&&i.id===i$.EIP6963_CONNECTOR_ID&&i.setEip6963Wallet?.({provider:r,info:n});let o=iM.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await z(this.wagmiConfig,{connector:i,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!t&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await F(this.wagmiConfig),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>q(this.wagmiConfig,{message:e})},siweControllerClient:r,defaultChain:function(e){if(e)return{id:`${i$.EIP155}:${e.id}`,name:e.name,imageId:iN.EIP155NetworkImageIds[e.id]}}(n),tokens:iM.getCaipTokens(i),_sdkVersion:o??`html-wagmi-${i$.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),function(e,t){let{onChange:r}=t;e._internal.connectors.subscribe((e,t)=>{r(Object.values(e),t)})}(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),X(this.wagmiConfig,{onChange:e=>this.syncAccount({...e,config:t})})}getState(){let e=super.getState();return{...e,selectedNetworkId:iM.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:iM.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${i$.EIP155}:${e.id}`,name:e.name,imageId:iN.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:r}){if(this.resetAccount(),this.syncNetwork(),t&&e&&r){let n=`${i$.EIP155}:${r}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t,chainId:r}=K(this.wagmiConfig),n=this.wagmiConfig.chains.find(e=>e.id===r);if(n||r){let i=n?.name??r?.toString(),o=Number(n?.id??r),a=`${i$.EIP155}:${o}`;if(this.setCaipNetwork({id:a,name:i,imageId:iN.EIP155NetworkImageIds[o],imageUrl:this.options?.chainImages?.[o]}),t&&e&&r){let t=`${i$.EIP155}:${o}:${e}`;if(this.setCaipAddress(t),n?.blockExplorers?.default?.url){let t=`${n.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t!==ej.R.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:r,avatar:n}=await this.fetchIdentity({caipChainId:`${i$.EIP155}:${t}`,address:e});this.setProfileName(r),this.setProfileImage(n)}catch{let r=await function(e,t){let{chainId:r,...n}=t,i=e.getClient({chainId:r}),o=(0,H.s)(i,eh,"getEnsName");return o(n)}(this.wagmiConfig,{address:e,chainId:t});if(r){this.setProfileName(r);let e=await function(e,t){let{chainId:r,...n}=t,i=e.getClient({chainId:r}),o=(0,H.s)(i,eN,"getEnsAvatar");return o(n)}(this.wagmiConfig,{name:r,chainId:t});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=this.wagmiConfig.chains.find(e=>e.id===t);if(r){let t=await (0,eM.s)(this.wagmiConfig,{address:e,chainId:r.id,token:this.options?.tokens?.[r.id]?.address});this.setBalance(t.formatted,t.symbol);return}this.setBalance(void 0,void 0)}syncConnectors(e){let t=new Set,r=e.filter(e=>!t.has(e.id)&&t.add(e.id)),n=[],i=i$.COINBASE_SDK_CONNECTOR_ID,o=r.find(e=>e.id===eD.bq.CONNECTOR_RDNS_MAP[i]);r.forEach(({id:e,name:t,type:r,icon:a})=>{let s=o&&e===i||i$.EMAIL_CONNECTOR_ID===e;s||n.push({id:e,explorerId:iN.ConnectorExplorerIds[e],imageUrl:this.options?.connectorImages?.[e]??a,name:iN.ConnectorNamesMap[e]??t,imageId:iN.ConnectorImageIds[e],type:iN.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n),this.syncEmailConnector(r)}async syncEmailConnector(e){let t=e.find(({id:e})=>e===i$.EMAIL_CONNECTOR_ID);if(t){let e=await t.getProvider();this.addConnector({id:i$.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e}),this.listenEmailConnector(t)}}async listenEmailConnector(e){if("undefined"!=typeof window&&e){super.setLoading(!0);let t=await e.getProvider(),r=t.getLoginEmailUsed();super.setLoading(r),t.onRpcRequest(e=>{nj.checkIfRequestIsAllowed(e)||super.open({view:"ApproveTransaction"})}),t.onRpcResponse(()=>{super.close()}),t.onIsConnected(()=>{super.setLoading(!1)})}}}var iL=r(92611),iU=r(24139),iB=r(27037),iz=r(72008),iF=r(48907),iW=class extends iF.F{constructor(e){super(),this.#e=!1,this.#t=e.defaultOptions,this.#r(e.options),this.#n=[],this.#i=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#o=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#o,this.scheduleGc()}#o;#a;#i;#s;#l;#n;#t;#e;get meta(){return this.options.meta}#r(e){this.options={...this.#t,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#n.length||"idle"!==this.state.fetchStatus||this.#i.remove(this)}setData(e,t){let r=(0,iU.oE)(this.state.data,e,this.options);return this.#c({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#c({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#s;return this.#l?.cancel(e),t?t.then(iU.ZT).catch(iU.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#o)}isActive(){return this.#n.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#n.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,iU.Kp)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.#n.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#l?.continue()}onOnline(){let e=this.#n.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#l?.continue()}addObserver(e){this.#n.includes(e)||(this.#n.push(e),this.clearGcTimeout(),this.#i.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.#n.includes(e)&&(this.#n=this.#n.filter(t=>t!==e),this.#n.length||(this.#l&&(this.#e?this.#l.cancel({revert:!0}):this.#l.cancelRetry()),this.scheduleGc()),this.#i.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.#n.length}invalidate(){this.state.isInvalidated||this.#c({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#s)return this.#l?.continueRetry(),this.#s}if(e&&this.#r(e),!this.options.queryFn){let e=this.#n.find(e=>e.options.queryFn);e&&this.#r(e.options)}let r=new AbortController,n={queryKey:this.queryKey,meta:this.meta},i=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#e=!0,r.signal)})};i(n);let o={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#e=!1,this.options.persister)?this.options.persister(this.options.queryFn,n,this):this.options.queryFn(n):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};i(o),this.options.behavior?.onFetch(o,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#c({type:"fetch",meta:o.fetchOptions?.meta});let a=e=>{(0,iz.DV)(e)&&e.silent||this.#c({type:"error",error:e}),(0,iz.DV)(e)||(this.#i.config.onError?.(e,this),this.#i.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#l=(0,iz.Mz)({fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){a(Error(`${this.queryHash} data is undefined`));return}this.setData(e),this.#i.config.onSuccess?.(e,this),this.#i.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(e,t)=>{this.#c({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode}),this.#s=this.#l.promise,this.#s}#c(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:e.meta??null,fetchStatus:(0,iz.Kw)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,iz.DV)(r)&&r.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),iB.V.batch(()=>{this.#n.forEach(e=>{e.onQueryUpdate()}),this.#i.notify({query:this,type:"updated",action:e})})}},iH=r(7506),iZ=class extends iH.l{constructor(e={}){super(),this.config=e,this.#u=new Map}#u;build(e,t,r){let n=t.queryKey,i=t.queryHash??(0,iU.Rm)(n,t),o=this.get(i);return o||(o=new iW({cache:this,queryKey:n,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(o)),o}add(e){this.#u.has(e.queryHash)||(this.#u.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#u.get(e.queryHash);t&&(e.destroy(),t===e&&this.#u.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){iB.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#u.get(e)}getAll(){return[...this.#u.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,iU._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,iU._x)(e,t)):t}notify(e){iB.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){iB.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){iB.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},iY=r(59289),iG=class extends iH.l{constructor(e={}){super(),this.config=e,this.#d=[],this.#h=0}#d;#h;#f;build(e,t,r){let n=new iY.m({mutationCache:this,mutationId:++this.#h,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#d.push(e),this.notify({type:"added",mutation:e})}remove(e){this.#d=this.#d.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){iB.V.batch(()=>{this.#d.forEach(e=>{this.remove(e)})})}getAll(){return this.#d}find(e){let t={exact:!0,...e};return this.#d.find(e=>(0,iU.X7)(t,e))}findAll(e={}){return this.#d.filter(t=>(0,iU.X7)(e,t))}notify(e){iB.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){return this.#f=(this.#f??Promise.resolve()).then(()=>{let e=this.#d.filter(e=>e.state.isPaused);return iB.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(iU.ZT)),Promise.resolve()))}).then(()=>{this.#f=void 0}),this.#f}},iV=r(66474),iq=r(14304);function iK(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}function iX(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}var iJ=class{#p;#g;#t;#m;#y;#w;#v;#b;constructor(e={}){this.#p=e.queryCache||new iZ,this.#g=e.mutationCache||new iG,this.#t=e.defaultOptions||{},this.#m=new Map,this.#y=new Map,this.#w=0}mount(){this.#w++,1===this.#w&&(this.#v=iV.j.subscribe(()=>{iV.j.isFocused()&&(this.resumePausedMutations(),this.#p.onFocus())}),this.#b=iq.N.subscribe(()=>{iq.N.isOnline()&&(this.resumePausedMutations(),this.#p.onOnline())}))}unmount(){this.#w--,0===this.#w&&(this.#v?.(),this.#v=void 0,this.#b?.(),this.#b=void 0)}isFetching(e){return this.#p.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#g.findAll({...e,status:"pending"}).length}getQueryData(e){return this.#p.find({queryKey:e})?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);return t?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let r=t.data;return[e,r]})}setQueryData(e,t,r){let n=this.#p.find({queryKey:e}),i=n?.state.data,o=(0,iU.SE)(t,i);if(void 0===o)return;let a=this.defaultQueryOptions({queryKey:e});return this.#p.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return iB.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){return this.#p.find({queryKey:e})?.state}removeQueries(e){let t=this.#p;iB.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#p,n={type:"active",...e};return iB.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t},n=iB.V.batch(()=>this.#p.findAll(e).map(e=>e.cancel(r)));return Promise.all(n).then(iU.ZT).catch(iU.ZT)}invalidateQueries(e={},t={}){return iB.V.batch(()=>{if(this.#p.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0},n=iB.V.batch(()=>this.#p.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(iU.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}));return Promise.all(n).then(iU.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#p.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(iU.ZT).catch(iU.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let n=async()=>{let r;let n=e.options,i=e.fetchOptions?.meta?.fetchMore?.direction,o=e.state.data?.pages||[],a=e.state.data?.pageParams||[],s=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=e.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`))),u=async(t,r,n)=>{if(s)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:r,direction:n?"backward":"forward",meta:e.options.meta};l(i);let o=await c(i),{maxPages:a}=e.options,u=n?iU.Ht:iU.VX;return{pages:u(t.pages,o,a),pageParams:u(t.pageParams,r,a)}};if(i&&o.length){let e="backward"===i,t=e?iX:iK,s={pages:o,pageParams:a},l=t(n,s);r=await u(s,l,e)}else{r=await u({pages:[],pageParams:[]},a[0]??n.initialPageParam);let e=t??o.length;for(let t=1;t<e;t++){let e=iK(n,r);r=await u(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(n,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=n}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(iU.ZT).catch(iU.ZT)}resumePausedMutations(){return this.#g.resumePausedMutations()}getQueryCache(){return this.#p}getMutationCache(){return this.#g}getDefaultOptions(){return this.#t}setDefaultOptions(e){this.#t=e}setQueryDefaults(e,t){this.#m.set((0,iU.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#m.values()],r={};return t.forEach(t=>{(0,iU.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#y.set((0,iU.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#y.values()],r={};return t.forEach(t=>{(0,iU.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e?._defaulted)return e;let t={...this.#t.queries,...e?.queryKey&&this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,iU.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),void 0===t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#t.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#p.clear(),this.#g.clear()}},iQ=r(30202),i0=r(9008),i1=r.n(i0),i2=r(24219),i3={src:"/_next/static/media/stake-icon.8e01ffd5.svg",height:17,width:16,blurWidth:0,blurHeight:0},i5={src:"/_next/static/media/portfolio-icon.a56a7538.svg",height:17,width:16,blurWidth:0,blurHeight:0},i4={src:"/_next/static/media/points-icon.7adcfd54.svg",height:17,width:16,blurWidth:0,blurHeight:0},i6={src:"/_next/static/media/faq-icon.611b6df5.svg",height:17,width:16,blurWidth:0,blurHeight:0},i8=r(11163),i7=r(41664),i9=r.n(i7),oe=r(12874),ot=r(67808),or=r(72704),on=r(12647),oi=r(59874);function oo(){let e=(0,m._)(["\n  width: 282px;\n  background-color: white;\n  color: #fff;\n  padding: 29px 24px;\n  border-right: 1px solid #dddddd;\n"]);return oo=function(){return e},e}function oa(){let e=(0,m._)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 35px;\n  height: 57%;\n"]);return oa=function(){return e},e}function os(){let e=(0,m._)(["\n  border-radius: 8px;\n  ","\n\n  &:hover {\n    background: linear-gradient(\n      90deg,\n      rgba(192, 173, 0, 0.1) -10.2%,\n      rgba(20, 182, 0, 0.1) 47.34%,\n      rgba(0, 126, 73, 0.1) 109.67%\n    );\n  }\n"]);return os=function(){return e},e}function ol(){let e=(0,m._)(["\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #092306;\n  font-family: ",";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n"]);return ol=function(){return e},e}function oc(){let e=(0,m._)(["\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 40px;\n  padding: 0 16px;\n\n  img {\n    cursor: pointer;\n  }\n"]);return oc=function(){return e},e}function ou(){let e=(0,m._)(["\n  display: flex;\n  flex-direction: column;\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 40px;\n  padding: 0 16px;\n"]);return ou=function(){return e},e}let od=b.ZP.div.withConfig({componentId:"sc-6a4ebd76-0"})(oo()),oh=b.ZP.ul.withConfig({componentId:"sc-6a4ebd76-1"})(oa()),of=b.ZP.li.withConfig({componentId:"sc-6a4ebd76-2"})(os(),e=>e.active?"\n    background: linear-gradient(\n    90deg,\n    rgba(192, 173, 0, 0.1) -10.2%,\n    rgba(20, 182, 0, 0.1) 47.34%,\n    rgba(0, 126, 73, 0.1) 109.67%\n  );":"\n      opacity: 0.5;\n      "),op=(0,b.ZP)(i9()).withConfig({componentId:"sc-6a4ebd76-3"})(ol(),v().style.fontFamily),og=b.ZP.div.withConfig({componentId:"sc-6a4ebd76-4"})(oc()),om=b.ZP.div.withConfig({componentId:"sc-6a4ebd76-5"})(ou());var oy=()=>{let e=(0,i8.useRouter)(),{depositedBalances:t,totalPoints:r}=(0,oi.a)(),n=(0,E.useMemo)(()=>Object.values(t).some(e=>BigInt(e)>0),[t]),i=(0,E.useMemo)(()=>r>0&&!isNaN(r),[r]),o=(0,E.useMemo)(()=>[{pathCheck:/^\/(join)?$/,path:"/",icon:i3,label:"Stake"},{pathCheck:/\/points/,path:"/points",icon:i4,label:"Points",hidden:!i},{pathCheck:/\/portfolio/,path:"/portfolio",icon:i5,label:"Dashboard",hidden:!n},{pathCheck:/\/faq/,path:"/faq",icon:i6,label:"FAQ"}],[n,i]);return(0,y.jsxs)(od,{children:[(0,y.jsx)(_(),{src:i2.default,alt:"Logo",onClick:()=>window.open("https://zircuit.pro","_blank")}),(0,y.jsx)(oh,{children:o.map(t=>t.hidden?null:(0,y.jsx)(of,{active:e.pathname.match(t.pathCheck),children:(0,y.jsxs)(op,{href:t.path,children:[(0,y.jsx)(_(),{src:t.icon,alt:t.label}),t.label]})},t.path))}),(0,y.jsxs)(og,{children:["Audited by",(0,y.jsx)(_(),{src:or.default,alt:"Ottersec logo",onClick:()=>window.open("https://dubiw3zgo51jg.cloudfront.net/zircuit_audit_final.pdf","_blank")})]}),(0,y.jsxs)(om,{children:[(0,y.jsxs)(on.Z,{onClick:()=>window.open("https://twitter.com/intent/user?screen_name=ZircuitL2","_blank"),children:[(0,y.jsx)(_(),{src:oe.Z,alt:"X"})," Follow Twitter"]}),(0,y.jsxs)(on.Z,{onClick:()=>window.open("https://discord.gg/zircuit","_blank"),children:[(0,y.jsx)(_(),{src:ot.Z,alt:"Join Discord"})," Join Discord"]})]})]})},ow=r(20068),ov=r(46048),ob=r(48614),ox=r(47020),oC=r(40464);function o_(){let e=(0,m._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n"]);return o_=function(){return e},e}function oE(){let e=(0,m._)(["\n  display: flex;\n  gap: 24px;\n"]);return oE=function(){return e},e}function oS(){let e=(0,m._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  color: #3f4f3a;\n\n  span {\n    font-weight: 600;\n    color: #092306;\n  }\n"]);return oS=function(){return e},e}function ok(){let e=(0,m._)(["\n  background-color: #ddd;\n  width: 1px;\n"]);return ok=function(){return e},e}function oA(){let e=(0,m._)(["\n  display: flex;\n  gap: 8px;\n"]);return oA=function(){return e},e}function oO(){let e=(0,m._)(["\n  white-space: nowrap;\n  background-color: #f1f6f1;\n  border: 1px solid #2b7e21;\n  color: #2b7e21;\n"]);return oO=function(){return e},e}function oP(){let e=(0,m._)(["\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n"]);return oP=function(){return e},e}let oT=b.ZP.div.withConfig({componentId:"sc-3e78cc3d-0"})(o_()),oR=b.ZP.div.withConfig({componentId:"sc-3e78cc3d-1"})(oE()),oI=b.ZP.div.withConfig({componentId:"sc-3e78cc3d-2"})(oS()),o$=b.ZP.div.withConfig({componentId:"sc-3e78cc3d-3"})(ok()),oN=b.ZP.div.withConfig({componentId:"sc-3e78cc3d-4"})(oA()),oM=(0,b.ZP)(ox.Z).withConfig({componentId:"sc-3e78cc3d-5"})(oO()),oj=b.ZP.span.withConfig({componentId:"sc-3e78cc3d-6"})(oP());var oD=()=>{let{isConnected:e,address:t}=(0,ob.m)(),{open:r}=R(),{stats:n}=(0,ov.V)();return(0,y.jsxs)(oT,{children:[(0,y.jsxs)(oR,{children:[(0,y.jsxs)(oI,{children:["Total Staked"," ",(0,y.jsx)(oj,{children:(null==n?void 0:n.totalValueLocked)?"$ ".concat((0,oC.R_)(n.totalValueLocked)):"..."})]}),(0,y.jsx)(o$,{}),(0,y.jsxs)(oI,{children:["Stakers are earning",(0,y.jsx)("span",{children:"Staking APR + Restaking APR + Eigenlayer Points + LRT points + Zircuit Points"})]})]}),(0,y.jsx)(oN,{children:(0,y.jsx)(oM,{onClick:()=>r(),children:e?"".concat(t.substring(0,4),"...\n            ").concat(t.substring(t.length,t.length-4)):"Connect Wallet"})})]})},oL=r(54753);r(30928),r(10737);var oU=r(83831),oB=r(32645),oz=r(78367),oF=r(53561),oW=r(57597),oH=r(45859),oZ=r(84256),oY=r(85032),oG=r(6143),oV=r(84744),oq=r(80476),oK=r(5742),oX=r(19197);function oJ(){let e=(0,m._)(["\n  background-color: #dddddd;\n  height: 1px;\n  margin-bottom: 1px;\n"]);return oJ=function(){return e},e}let oQ=b.ZP.div.withConfig({componentId:"sc-eee4b7f1-0"})(oJ());r(96381);var o0=r(79745),o1=r(98029),o2=r(81848),o3=r(28690);async function o5(e,t){let r;let{account:n,connector:i,...o}=t;r="object"==typeof n&&"local"===n.type?e.getClient():await (0,o3.e)(e,{account:n,connector:i});let a=(0,o2.s)(r,W.l,"signMessage");return a({...o,...n?{account:n}:{}})}var o4=r(37122),o6=r(42365),o8=r(52542);let o7=e=>{let{csrfToken:t}=e,{data:r,loading:n,setUserData:i}=(0,oi.a)();console.log(t);let[o,a]=(0,E.useState)(null),{isConnected:s,address:l}=(0,ob.m)(),{ref:c}=P(),[u,d]=(0,E.useState)(null),{data:h,signMessage:f,isPending:p,isLoading:g,isError:m,isSuccess:w,reset:v}=function(e={}){let{mutation:t}=e,r=(0,o4.Z)(e),{mutate:n,mutateAsync:i,...o}=(0,o1.D)({...t,mutationFn:e=>o5(r,e),mutationKey:["signMessage"]});return{...o,signMessage:n,signMessageAsync:i}}(),b=(e,t)=>f({message:oU.SIGNATURE_MESSAGE.replace("ADDRESS",e).replace("REFCODE",null==t?void 0:t.toUpperCase())});(0,E.useEffect)(()=>{var e,t;if(null===(e=window)||void 0===e?void 0:e.ethereum){let e=function(e){let{key:t="wallet",name:r="Wallet Client",transport:n}=e,i=(0,Z.e)({...e,key:t,name:r,transport:n,type:"walletClient"});return i.extend(o6.v)}({chain:ej.R,transport:(0,Y.P)(null===(t=window)||void 0===t?void 0:t.ethereum)});d(e)}},[d]),(0,E.useEffect)(()=>{p&&a("Signing..."),m&&a(null)},[p,m]),(0,E.useEffect)(()=>{s&&c&&h&&t&&(a("Registering..."),a("Joining..."),fetch("/api/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({r:c,a:l,s:h,csrf_token:t})}).then(async e=>{let t=await e.json();i(e=>({...e,...t}))}).catch(e=>{console.error(e),k.Am.error("Something went wrong during signature",{icon:e=>{let{theme:t,type:r}=e;return(0,y.jsx)(_(),{src:S.Z,alt:"Cat",style:{width:"32px"}})}})}).finally(()=>a(null)))},[l,c,h,t]);let{open:x}=R();return(0,y.jsxs)(o8.M,{type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),s?!s||(null==r?void 0:r.signed)?setTxModalOpen(!0):b(l,(null==r?void 0:r.referralCode)||c):x()},disabled:(null==r?void 0:r.signed)&&s&&!Object.keys(amountsToExecute).filter(e=>!!Number(amountsToExecute[e])).length||!!o||n,children:[n?"Loading":s?(null==r?void 0:r.signed)||o?o||"Confirm":"Sign":"Connect Wallet",o||n?(0,y.jsx)(o0.g4,{visible:!0,height:"24",width:"24",color:"white",radius:"9"}):null]})};function o9(){let e=(0,m._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 auto;\n"]);return o9=function(){return e},e}let ae=b.ZP.div.withConfig({componentId:"sc-f3d4d22f-0"})(o9()),at=()=>(0,y.jsx)(ae,{children:(0,y.jsx)(o0.g4,{visible:!0,height:"24",width:"24",color:"#2b7e21",radius:"9"})});function ar(){let e=(0,m._)(["\n  @media screen and (max-width: 1200px) {\n    "," {\n      width: 100%;\n    }\n  }\n"]);return ar=function(){return e},e}function an(){let e=(0,m._)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 204, 0, 0.3) -0.72%,\n    rgba(20, 182, 0, 0.3) 47.58%,\n    rgba(0, 126, 73, 0.3) 99.91%\n  );\n  padding: 13px 24px;\n\n  img {\n    max-width: 32px;\n  }\n"]);return an=function(){return e},e}function ai(){let e=(0,m._)(["\n  max-width: 600px;\n  margin: 80px auto;\n  text-align: center;\n"]);return ai=function(){return e},e}function ao(){let e=(0,m._)(["\n  margin-bottom: 52px;\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 40px;\n  }\n\n  p {\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    margin-top: 24px;\n  }\n\n  a {\n    color: #2b7e21;\n    font-weight: 500;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return ao=function(){return e},e}function aa(){let e=(0,m._)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n"]);return aa=function(){return e},e}function as(){let e=(0,m._)(["\n  margin-top: 24px;\n"]);return as=function(){return e},e}function al(){let e=(0,m._)(["\n  border-radius: 15px;\n  border: 2.5px solid rgba(9, 35, 6, 0.2);\n  height: 91px;\n  background: #fff;\n  width: 59px;\n  height: 91px;\n  margin-right: 24px;\n  color: #092306;\n  text-align: center;\n  font-family: ",";\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:focus {\n    outline: 0;\n    border-color: #2b7e21;\n  }\n"]);return al=function(){return e},e}function ac(){let e=(0,m._)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  margin: 24px auto auto auto;\n  text-align: left;\n  max-width: 570px;\n"]);return ac=function(){return e},e}function au(){let e=(0,m._)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: ",";\n  align-items: center;\n  margin-top: 24px;\n\n  img {\n    max-height: 32px;\n    max-width: 141px;\n  }\n"]);return au=function(){return e},e}let ad=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-0"})(ar(),ox.Z),ah=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-1"})(an()),af=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-2"})(ai()),ap=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-3"})(ao()),ag=b.ZP.form.withConfig({componentId:"sc-2cfdc1e1-4"})(aa()),am=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-5"})(as()),ay=b.ZP.input.withConfig({componentId:"sc-2cfdc1e1-6"})(al(),v().style.fontFamily),aw=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-7"})(ac()),av=b.ZP.div.withConfig({componentId:"sc-2cfdc1e1-8"})(au(),e=>e.gap);var ab=e=>{let{csrfToken:t}=e,{query:r}=(0,i8.useRouter)(),[n,i]=(0,E.useState)(Array(oU.REF_CODE_LENGTH).fill("")),o=(0,E.useRef)([]),{validate:a,loading:s,valid:l}=P(),{data:c,loading:u}=(0,oi.a)(),{isConnected:d,address:h}=(0,ob.m)(),f=null==r?void 0:r.ref;(0,E.useEffect)(()=>{if(f){let e=f.split("");i(Array.from({length:oU.REF_CODE_LENGTH},(t,r)=>e[r]||""))}},[f]),(0,E.useEffect)(()=>{let e=0===n.filter(e=>""===e).length;!e||c||u||l||a(n.join(""))},[n,c,u]);let p=(e,t)=>{let r=[...n];r[t]=e,i(r),e.length>=1&&t<oU.REF_CODE_LENGTH-1&&o.current[t+1].focus()},g=(e,t)=>{"Backspace"===e.key&&""===n[t]&&t>0&&o.current[t-1].focus()},m=e=>{e.preventDefault();let t=e.clipboardData.getData("text"),r=t.split("");i(n.map((e,t)=>r[t]||""))};return u?(0,y.jsx)(at,{}):(0,y.jsxs)(ad,{children:[(0,y.jsxs)(ah,{children:[(0,y.jsx)(_(),{src:oX.Z,alt:"Cute face"}),"Join the community of over 100k others – Stake your ETH LSTs/LRTs and earn Zircuit points"]}),(0,y.jsxs)(af,{children:[(0,y.jsxs)(ap,{children:[(0,y.jsxs)("h1",{children:[(0,y.jsx)(_(),{src:S.Z,alt:"Cat"}),!l&&"Enter your invite code",l&&!d&&!(null==c?void 0:c.signed)&&"Connect your wallet",l&&d&&!(null==c?void 0:c.signed)&&"Join Zircuit staking",(0,y.jsx)(_(),{src:oK.Z,alt:"Cat"})]}),(0,y.jsx)(ag,{children:n.map((e,t)=>(0,y.jsx)(ay,{type:"text",maxLength:"1",value:e.toUpperCase(),onChange:e=>p(e.target.value,t),onKeyDown:e=>g(e,t),ref:e=>o.current[t]=e,disabled:s||u,onPaste:m},t))}),(s||u)&&!d?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("br",{})," Loading..."]}):null,l&&(0,y.jsx)(am,{children:(0,y.jsx)(o7,{csrfToken:t,userData:c,isConnected:d,isLoadingUserData:u})}),!l&&(0,y.jsxs)("p",{children:["If you participated in a Zircuit quest, you can get your invite code on \xa0",(0,y.jsx)("a",{href:"https://app.deform.cc/campaign/6d1c0b2a-7daa-486d-abbf-fef68fb31e17/?tab=ranking",target:"_blank",rel:"noopener noreferrer",children:"this quest page"}),"."]})]}),(0,y.jsx)(oQ,{}),(0,y.jsx)(oQ,{}),(0,y.jsxs)(aw,{children:["Backed by",(0,y.jsxs)(av,{gap:"74px",children:[(0,y.jsx)(_(),{src:oB.default,alt:"Pantera",style:{width:"100%"}}),(0,y.jsx)(_(),{src:oz.default,alt:"Dragonfly Capital",style:{width:"100%"}}),(0,y.jsx)(_(),{src:oF.default,alt:"Maelstorm",style:{width:"100%"}})]})]}),(0,y.jsxs)(aw,{children:["Powered by",(0,y.jsxs)(av,{gap:"24px",children:[(0,y.jsx)(_(),{src:oH.default,alt:"EigenLayer"}),(0,y.jsx)(_(),{src:oW.default,alt:"Kelp"}),(0,y.jsx)(_(),{src:oZ.default,alt:"Renzo"}),(0,y.jsx)(_(),{src:oG.default,alt:"Lido"})]}),(0,y.jsxs)(av,{children:[(0,y.jsx)(_(),{src:oV.default,alt:"EtherFi"}),(0,y.jsx)(_(),{src:oY.default,alt:"Swell"}),(0,y.jsx)(_(),{src:oq.default,alt:"Liquid Collective"})]})]})]})]})};r(63621);var ax="object"==typeof global&&global&&global.Object===Object&&global,aC="object"==typeof self&&self&&self.Object===Object&&self,a_=(ax||aC||Function("return this")()).Symbol,aE=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},aS=Array.isArray,ak=Object.prototype,aA=ak.hasOwnProperty,aO=ak.toString,aP=a_?a_.toStringTag:void 0,aT=function(e){var t=aA.call(e,aP),r=e[aP];try{e[aP]=void 0;var n=!0}catch(e){}var i=aO.call(e);return n&&(t?e[aP]=r:delete e[aP]),i},aR=Object.prototype.toString,aI=a_?a_.toStringTag:void 0,a$=function(e){var t;return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==(null==(t=e)?void 0===t?"[object Undefined]":"[object Null]":aI&&aI in Object(t)?aT(t):aR.call(t))},aN=1/0,aM=a_?a_.prototype:void 0,aj=aM?aM.toString:void 0,aD=function e(t){if("string"==typeof t)return t;if(aS(t))return aE(t,e)+"";if(a$(t))return aj?aj.call(t):"";var r=t+"";return"0"==r&&1/t==-aN?"-0":r},aL=0,aU=function(e){var t=++aL;return(null==e?"":aD(e))+t};let aB=function(e,t,r){let n=document.createElement("div");n.classList.add("confetti");let i=aU();n.setAttribute("data-id",i);let o="";for(var a=0;a<r;++a)o+='<div class="confetti-item" data-angle="'.concat(Math.random(),'" data-speed="').concat(Math.random(),'"></div>')+'<div class="confetti-item reverse" data-angle="'.concat(Math.random(),'" data-speed="').concat(Math.random(),'"></div>');n.style.position="fixed",n.style.top="".concat(t,"px"),n.style.left="".concat(e,"px"),n.innerHTML=o,document.body.appendChild(n);let s=0,l=1,c=0,u=setInterval(function(){document.querySelectorAll('[data-id="'.concat(i,'"] .confetti-item')).forEach(function(e){let t=1;e.classList.contains("reverse")&&(t=-1),e.style.opacity=l;let r=parseFloat(e.getAttribute("data-angle")),n=parseFloat(e.getAttribute("data-speed")),i=(1100*r+400)/1e3,o=(2e4*r+85e3)/1e3,a=o*s*Math.cos(i)+50*n*s,c=o*s*Math.sin(i)-25*Math.pow(s,2)+50*n*s;e.style.transform="translateX(".concat(a*t,"px) translateY(").concat(-1*c*1,"px) scale(",1,")")}),s+=.2,c+=3,l-=.01,s>=6&&(s=.1,null!==document.querySelector('[data-id="'.concat(i,'"]'))&&document.querySelector('[data-id="'.concat(i,'"]')).remove(),clearInterval(u))},33.33)};var az=()=>((0,E.useEffect)(()=>{document.addEventListener("pointerdown",function(e){aB(e.pageX,e.pageY,1)})},[]),(0,y.jsx)("div",{}));function aF(){let e=(0,m._)(["\n  body {\n    margin: 0;\n    font-family: ",";\n    font-weight: normal;\n    color: black;\n    background-color: #F4F1E5;\n  }\n\n  h1,h2,h3,h4,h5,h6,p {\n    margin: 0;\n  }\n\n  p {\n    font-weight: 600;\n  }\n\n  .Toastify__toast-theme--light {\n    background: #F3FEF0;\n    border-radius: 8px;\n  }\n\n  .Toastify__toast-body {\n    gap: 10px;\n    color: black;\n    font-size: 16px;\n  }\n\n  .Toastify__progress-bar, .Toastify__progress-bar--bg {\n    background-color: transparent;\n  }\n\n  .react-tooltip {\n    border-radius: 8px !important;\n    background-color: white !important;\n    color: black !important;\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0px rgba(0, 0, 0, 0.12) !important;\n    max-width: 350px;\n    z-index: 99999;\n  }\n"]);return aF=function(){return e},e}function aW(){let e=(0,m._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n\n  @media screen and (min-width: 980px) {\n    min-height: 100vh;\n  }\n"]);return aW=function(){return e},e}function aH(){let e=(0,m._)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: scroll;\n"]);return aH=function(){return e},e}let aZ=(0,b.vJ)(aF(),v().style.fontFamily),aY=b.ZP.div.withConfig({componentId:"sc-b8613fc0-0"})(aW()),aG=b.ZP.div.withConfig({componentId:"sc-b8613fc0-1"})(aH()),aV=new iJ;a={wagmiConfig:oL.v,projectId:oU.WEB_MODAL_PROJECT_ID,chains:[ej.R],termsConditionsUrl:"https://dubiw3zgo51jg.cloudfront.net/tos.pdf",featuredWalletIds:["19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927","8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4"]},o||(i=o=new iD({...a,_sdkVersion:`react-wagmi-${i$.VERSION}`}));let aq=e=>function(t){let{valid:r}=P(),{pathname:n}=(0,i8.useRouter)(),{getUserData:i,data:o,resetAll:a}=(0,oi.a)();return((0,E.useEffect)(()=>{let e=X(oL.v,{onChange(e,t){e.address!==t.address&&"/no-mobile"!==n&&"/faq"!==n&&(e.address?(t.address&&a(),i(e.address)):window.location="/")}});return()=>e()}),"/no-mobile"===n||"/faq"===n||(null==o?void 0:o.referralCode))?(0,y.jsx)(e,{...t}):(0,y.jsx)(ab,{...t})};var aK=e=>{let{Component:t,pageProps:r}=e,n=aq(t),{pathname:i}=(0,i8.useRouter)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(i1(),{children:[(0,y.jsx)("title",{children:"Zircuit"}),(0,y.jsx)("meta",{name:"description",content:"Deposit your liquid restaking tokens to earn Eigenlayer and Zircuit points"}),(0,y.jsx)("meta",{property:"og:url",content:"https://staking.zircuit.pro"}),(0,y.jsx)("meta",{property:"og:type",content:"website"}),(0,y.jsx)("meta",{property:"og:title",content:"Zircuit Restaking for Points"}),(0,y.jsx)("meta",{property:"og:description",content:"Deposit your liquid restaking tokens to earn Eigenlayer and Zircuit points"}),(0,y.jsx)("meta",{property:"og:image",content:"https://stake.zircuit.pro/opengraph-image.jpg"}),(0,y.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,y.jsx)("meta",{property:"twitter:domain",content:"staking.zircuit.com"}),(0,y.jsx)("meta",{property:"twitter:url",content:"https://staking.zircuit.pro"}),(0,y.jsx)("meta",{name:"twitter:title",content:"Zircuit Restaking for Points"}),(0,y.jsx)("meta",{name:"twitter:description",content:"Deposit your liquid restaking tokens to earn Eigenlayer and Zircuit points"}),(0,y.jsx)("meta",{name:"twitter:image",content:"https://stake.zircuit.pro/opengraph-image.jpg"})]}),(0,y.jsx)(aZ,{}),(0,y.jsx)(iL.F,{config:oL.v,children:(0,y.jsx)(iQ.aH,{client:aV,children:(0,y.jsx)(ov.P,{children:(0,y.jsx)(oi.d,{children:(0,y.jsx)(T,{children:"/no-mobile"===i?(0,y.jsx)(n,{...r}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k.Ix,{}),(0,y.jsx)(aY,{children:(0,y.jsxs)(ow.Z,{children:[(0,y.jsx)(oy,{}),(0,y.jsx)(az,{}),(0,y.jsxs)(aG,{children:[(0,y.jsx)(oD,{}),(0,y.jsx)(n,{...r})]})]})})]})})})})})})]})}},40464:function(e,t,r){"use strict";r.d(t,{$G:function(){return a},Dx:function(){return s},Jl:function(){return i},R_:function(){return o},_h:function(){return n},uf:function(){return l}});let n=e=>{if(""===e)return!0;let t=e.replace(/,/g,".");if(!/^(0|([1-9]\d*))(.\d+)?$/.test(t))return!1;{let e=parseFloat(t);return e>=0&&!isNaN(e)}},i=(e,t)=>e*(t/100)/31536e3,o=e=>Intl.NumberFormat(void 0,{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}).format(e),a=(e,t)=>Math.trunc(e*10**t)/10**t,s=(e,t)=>{if(!e||0==e)return"0";var r=a(e,t);let n={style:"decimal",minimumFractionDigits:0,maximumFractionDigits:4};return r!=e?Intl.NumberFormat(void 0,n).format(r)+"...":Intl.NumberFormat(void 0,n).format(r)},l=e=>Intl.NumberFormat(void 0,{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:4}).format(Number(e).toFixed(4))},63621:function(){},30928:function(){},10737:function(){},55501:function(e){e.exports={style:{fontFamily:"'__ttHover_df59c9', '__ttHover_Fallback_df59c9'"},className:"__className_df59c9"}},77663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,n),a=!1}finally{a&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(45156)},25675:function(e,t,r){e.exports=r(55994)},41664:function(e,t,r){e.exports=r(11521)},11163:function(e,t,r){e.exports=r(57875)},92592:function(e,t,r){let n=r(47138),i=r(95115),o=r(6907),a=r(93776);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!n())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(n,a){try{let a=i.create(r,o);n(e(a,t,o))}catch(e){a(e)}})}try{let n=i.create(r,o);a(null,e(n,t,o))}catch(e){a(e)}}t.create=i.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},47138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(e,t,r){let n=r(10242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&r.push([n[e],n[t]]);return r}},8260:function(e,t,r){let n=r(76910),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=n.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},97245:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},73280:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){let i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},43424:function(e,t,r){let n=r(62378),i=r(76910);function o(e){this.mode=i.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},35393:function(e,t,r){let n=r(64908),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return o[(e-1)*4+0];case n.M:return o[(e-1)*4+1];case n.Q:return o[(e-1)*4+2];case n.H:return o[(e-1)*4+3];default:return}}},64908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},76526:function(e,t,r){let n=r(10242).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},61642:function(e,t,r){let n=r(10242),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;n.getBCHDigit(o)-i>=0;)o^=1335<<n.getBCHDigit(o)-i;return(r<<10|o)^21522}},69729:function(e,t){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},35442:function(e,t,r){let n=r(76910),i=r(10242);function o(e){this.mode=n.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},27126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,i=0,o=0,a=null,s=null;for(let l=0;l<t;l++){i=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?i++:(i>=5&&(n+=r.N1+(i-5)),a=t,i=1),(t=e.get(c,l))===s?o++:(o>=5&&(n+=r.N1+(o-5)),s=t,o=1)}i>=5&&(n+=r.N1+(i-5)),o>=5&&(n+=r.N1+(o-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,i=0,o=0;for(let r=0;r<t;r++){i=o=0;for(let a=0;a<t;a++)i=i<<1&2047|e.get(r,a),a>=10&&(1488===i||93===i)&&n++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&n++}return n*r.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];let i=Math.abs(Math.ceil(100*t/n/5)-10);return i*r.N4},t.applyMask=function(e,r){let n=r.size;for(let i=0;i<n;i++)for(let o=0;o<n;o++)r.isReserved(o,i)||r.xor(o,i,function(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,i))},t.getBestMask=function(e,r){let n=Object.keys(t.Patterns).length,i=0,o=1/0;for(let a=0;a<n;a++){r(a),t.applyMask(a,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),n<o&&(o=n,i=a)}return i}},76910:function(e,t,r){let n=r(43114),i=r(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},41085:function(e,t,r){let n=r(76910);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let n=this.data.length-t;n>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*n+1))},e.exports=i},26143:function(e,t,r){let n=r(69729);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)r[i+o]^=n.mul(e[i],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let i=0;i<t.length;i++)r[i]^=n.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},95115:function(e,t,r){let n=r(10242),i=r(64908),o=r(97245),a=r(73280),s=r(21845),l=r(76526),c=r(27126),u=r(35393),d=r(52882),h=r(23103),f=r(61642),p=r(76910),g=r(16130);function m(e,t,r){let n,i;let o=e.size,a=f.getEncodedBits(t,r);for(n=0;n<15;n++)i=(a>>n&1)==1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(o-15+n,8,i,!0),n<8?e.set(8,o-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let y=i.M;return void 0!==t&&(y=i.from(t.errorCorrectionLevel,i.M),r=h.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,r,i){let f;if(Array.isArray(e))f=g.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=g.rawSplit(e);n=h.getBestVersionForData(t,r)}f=g.fromString(e,n||40)}else throw Error("Invalid data");let y=h.getBestVersionForData(f,r);if(!y)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<y)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+y+".\n")}else t=y;let w=function(e,t,r){let i=new o;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(i)});let a=n.getSymbolTotalCodewords(e),s=u.getTotalCodewordsCount(e,t),l=(a-s)*8;for(i.getLengthInBits()+4<=l&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let c=(l-i.getLengthInBits())/8;for(let e=0;e<c;e++)i.put(e%2?17:236,8);return function(e,t,r){let i,o;let a=n.getSymbolTotalCodewords(t),s=u.getTotalCodewordsCount(t,r),l=a-s,c=u.getBlocksCount(t,r),h=a%c,f=c-h,p=Math.floor(a/c),g=Math.floor(l/c),m=g+1,y=p-g,w=new d(y),v=0,b=Array(c),x=Array(c),C=0,_=new Uint8Array(e.buffer);for(let e=0;e<c;e++){let t=e<f?g:m;b[e]=_.slice(v,v+t),x[e]=w.encode(b[e]),v+=t,C=Math.max(C,t)}let E=new Uint8Array(a),S=0;for(i=0;i<C;i++)for(o=0;o<c;o++)i<b[o].length&&(E[S++]=b[o][i]);for(i=0;i<y;i++)for(o=0;o<c;o++)E[S++]=x[o][i];return E}(i,e,t)}(t,r,f),v=n.getSymbolSize(t),b=new a(v);return function(e,t){let r=e.size,n=l.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],o=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(r<=i+t))for(let n=-1;n<=7;n++)o+n<=-1||r<=o+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,o+n,!0,!0):e.set(i+t,o+n,!1,!0))}}(b,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(b),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(b,t),m(b,r,0),t>=7&&function(e,t){let r,n,i;let o=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+o-8-3,i=(a>>t&1)==1,e.set(r,n,i,!0),e.set(n,r,i,!0)}(b,t),function(e,t){let r=e.size,n=-1,i=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,s-r)){let n=!1;a<t.length&&(n=(t[a]>>>o&1)==1),e.set(i,s-r,n),-1==--o&&(a++,o=7)}if((i+=n)<0||r<=i){i-=n,n=-n;break}}}(b,w),isNaN(i)&&(i=c.getBestMask(b,m.bind(null,b,r))),c.applyMask(i,b),m(b,r,i),{modules:b,version:t,errorCorrectionLevel:r,maskPattern:i,segments:f}}(e,r,y,f)}},52882:function(e,t,r){let n=r(26143);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},7007:function(e,t){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");let i="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+n+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},16130:function(e,t,r){let n=r(76910),i=r(41085),o=r(8260),a=r(43424),s=r(35442),l=r(7007),c=r(10242),u=r(65987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let n;let i=[];for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function f(e){let t,r;let i=h(l.NUMERIC,n.NUMERIC,e),o=h(l.ALPHANUMERIC,n.ALPHANUMERIC,e);c.isKanjiModeEnabled()?(t=h(l.BYTE,n.BYTE,e),r=h(l.KANJI,n.KANJI,e)):(t=h(l.BYTE_KANJI,n.BYTE,e),r=[]);let a=i.concat(o,t,r);return a.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return o.getBitsLength(e);case n.KANJI:return s.getBitsLength(e);case n.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=n.getBestModeForData(e);if((r=n.from(t,l))!==n.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(l));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new o(e);case n.KANJI:return new s(e);case n.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let i=f(e,c.isKanjiModeEnabled()),o=function(e){let t=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:d(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:d(i.data)}])}}return t}(i),a=function(e,t){let r={},i={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(i[a][u]=p(r[a].lastCount+c.length,c.mode)-p(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),i[a][u]=p(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:r}}(o,r),s=u.find_path(a.map,"start","end"),l=[];for(let e=1;e<s.length-1;e++)l.push(a.table[s[e]].node);return t.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},10242:function(e,t){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},43114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},23103:function(e,t,r){let n=r(10242),i=r(35393),o=r(64908),a=r(76910),s=r(43114),l=n.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=n.getSymbolTotalCodewords(e),l=i.getTotalCodewordsCount(e,t),u=(o-l)*8;if(r===a.MIXED)return u;let d=u-c(r,e);switch(r){case a.NUMERIC:return Math.floor(d/10*3);case a.ALPHANUMERIC:return Math.floor(d/11*2);case a.KANJI:return Math.floor(d/13);case a.BYTE:default:return Math.floor(d/8)}},t.getBestVersionForData=function(e,r){let n;let i=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++){let i=function(e,t){let r=0;return e.forEach(function(e){let n=c(e.mode,t);r+=n+e.getBitsLength()}),r}(e,n);if(i<=t.getCapacity(n,r,a.MIXED))return n}}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},6907:function(e,t,r){let n=r(89653);t.render=function(e,t,r){var i;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=n.getOptions(o);let s=n.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return n.qrToImageData(c.data,e,o),i=a,l.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,n){let i=n;void 0!==i||r&&r.getContext||(i=r,r=void 0),i||(i={});let o=t.render(e,r,i),a=i.type||"image/png",s=i.rendererOpts||{};return o.toDataURL(a,s.quality)}},93776:function(e,t,r){let n=r(89653);function i(e,t){let r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(e,t,r){let n=e+t;return void 0!==r&&(n+=" "+r),n}t.render=function(e,t,r){let a=n.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+i(a.color.dark,"stroke")+' d="'+function(e,t,r){let n="",i=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(n+=a?o("M",c+r,.5+u+r):o("m",i,0),i=0,a=!1),c+1<t&&e[l+1]||(n+=o("h",s),s=0)):i++}return n}(l,s,a.margin)+'"/>',h=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",f='<svg xmlns="http://www.w3.org/2000/svg" '+h+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,f),f}},89653:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){let i=r.modules.size,o=r.modules.data,a=t.getScale(i,n),s=Math.floor((i+2*n.margin)*a),l=n.margin*a,c=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=n.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){let e=Math.floor((t-l)/a),n=Math.floor((r-l)/a);d=c[o[e*i+n]?1:0]}e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},79745:function(e,t,r){"use strict";r.d(t,{g4:function(){return ty}});var n=r(85893),i=r(67294),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var s=r(96774),l=r.n(s),c="-ms-",u="-moz-",d="-webkit-",h="comm",f="rule",p="decl",g="@keyframes",m=Math.abs,y=String.fromCharCode,w=Object.assign;function v(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,r){return e.replace(t,r)}function x(e,t,r){return e.indexOf(t,r)}function C(e,t){return 0|e.charCodeAt(t)}function _(e,t,r){return e.slice(t,r)}function E(e){return e.length}function S(e,t){return t.push(e),e}function k(e,t){return e.filter(function(e){return!v(e,t)})}var A=1,O=1,P=0,T=0,R=0,I="";function $(e,t,r,n,i,o,a,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:A,column:O,length:a,return:"",siblings:s}}function N(e,t){return w($("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=N(e.root,{children:[e]});S(e,e.siblings)}function j(){return R=T<P?C(I,T++):0,O++,10===R&&(O=1,A++),R}function D(){return C(I,T)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){var t,r;return(t=T-1,r=function e(t){for(;j();)switch(R){case t:return T;case 34:case 39:34!==t&&39!==t&&e(R);break;case 40:41===t&&e(t);break;case 92:j()}return T}(91===e?e+2:40===e?e+1:e),_(I,t,r)).trim()}function B(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function z(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case h:return"";case g:return e.return=e.value+"{"+B(e.children,n)+"}";case f:if(!E(e.value=e.props.join(",")))return""}return E(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function F(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p:e.return=function e(t,r,n){var i;switch(i=r,45^C(t,0)?(((i<<2^C(t,0))<<2^C(t,1))<<2^C(t,2))<<2^C(t,3):0){case 5103:return d+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+t+t;case 4789:return u+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return d+t+u+t+c+t+t;case 5936:switch(C(t,r+11)){case 114:return d+t+c+b(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return d+t+c+b(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return d+t+c+b(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return d+t+c+t+t;case 6165:return d+t+c+"flex-"+t+t;case 5187:return d+t+b(t,/(\w+).+(:[^]+)/,d+"box-$1$2"+c+"flex-$1$2")+t;case 5443:return d+t+c+"flex-item-"+b(t,/flex-|-self/g,"")+(v(t,/flex-|baseline/)?"":c+"grid-row-"+b(t,/flex-|-self/g,""))+t;case 4675:return d+t+c+"flex-line-pack"+b(t,/align-content|flex-|-self/g,"")+t;case 5548:return d+t+c+b(t,"shrink","negative")+t;case 5292:return d+t+c+b(t,"basis","preferred-size")+t;case 6060:return d+"box-"+b(t,"-grow","")+d+t+c+b(t,"grow","positive")+t;case 4554:return d+b(t,/([^-])(transform)/g,"$1"+d+"$2")+t;case 6187:return b(b(b(t,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),t,"")+t;case 5495:case 3959:return b(t,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return b(b(t,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+t+t;case 4200:if(!v(t,/flex-|baseline/))return c+"grid-column-align"+_(t,r)+t;break;case 2592:case 3360:return c+b(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,v(e.props,/grid-\w+-end/)}))return~x(t+(n=n[r].value),"span",0)?t:c+b(t,"-start","")+t+c+"grid-row-span:"+(~x(n,"span",0)?v(n,/\d+/):+v(n,/\d+/)-+v(t,/\d+/))+";";return c+b(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return v(e.props,/grid-\w+-start/)})?t:c+b(b(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return b(t,/(.+)-inline(.+)/,d+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(t)-1-r>6)switch(C(t,r+1)){case 109:if(45!==C(t,r+4))break;case 102:return b(t,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+u+(108==C(t,r+3)?"$3":"$2-$3"))+t;case 115:return~x(t,"stretch",0)?e(b(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return b(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,i,o,a,s){return c+r+":"+n+s+(i?c+r+"-span:"+(o?a:+a-+n)+s:"")+t});case 4949:if(121===C(t,r+6))return b(t,":",":"+d)+t;break;case 6444:switch(C(t,45===C(t,14)?18:11)){case 120:return b(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===C(t,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+c+"$2box$3")+t;case 100:return b(t,":",":"+c)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case g:return B([N(e,{value:b(e.value,"@","@"+d)})],n);case f:if(e.length)return(r=e.props).map(function(t){switch(v(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(N(e,{props:[b(t,/:(read-\w+)/,":"+u+"$1")]})),M(N(e,{props:[t]})),w(e,{props:k(r,n)});break;case"::placeholder":M(N(e,{props:[b(t,/:(plac\w+)/,":"+d+"input-$1")]})),M(N(e,{props:[b(t,/:(plac\w+)/,":"+u+"$1")]})),M(N(e,{props:[b(t,/:(plac\w+)/,c+"input-$1")]})),M(N(e,{props:[t]})),w(e,{props:k(r,n)})}return""}).join("")}}function W(e,t,r,n,i,o,a,s,l,c,u,d){for(var h=i-1,p=0===i?o:[""],g=p.length,y=0,w=0,v=0;y<n;++y)for(var x=0,C=_(e,h+1,h=m(w=a[y])),E=e;x<g;++x)(E=(w>0?p[x]+" "+C:b(C,/&\f/g,p[x])).trim())&&(l[v++]=E);return $(e,t,r,0===i?f:s,l,c,u,d)}function H(e,t,r,n,i){return $(e,t,r,p,_(e,0,n),_(e,n+1,-1),n,i)}var Z={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y=r(83454),G=void 0!==Y&&void 0!==Y.env&&(Y.env.REACT_APP_SC_ATTR||Y.env.SC_ATTR)||"data-styled",V="active",q="data-styled-version",K="6.1.8",X="/*!sc*/\n",J="undefined"!=typeof window&&"HTMLElement"in window,Q=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==Y&&void 0!==Y.env&&void 0!==Y.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==Y.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==Y.env.REACT_APP_SC_DISABLE_SPEEDY&&Y.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==Y&&void 0!==Y.env&&void 0!==Y.env.SC_DISABLE_SPEEDY&&""!==Y.env.SC_DISABLE_SPEEDY&&"false"!==Y.env.SC_DISABLE_SPEEDY&&Y.env.SC_DISABLE_SPEEDY),ee=Object.freeze([]),et=Object.freeze({}),er=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),en=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ei=/(^-|-$)/g;function eo(e){return e.replace(en,"-").replace(ei,"")}var ea=/(a)(d)/gi,es=function(e){return String.fromCharCode(e+(e>25?39:97))};function el(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=es(t%52)+r;return(es(t%52)+r).replace(ea,"$1-$2")}var ec,eu=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ed=function(e){return eu(5381,e)};function eh(e){return"string"==typeof e}var ef="function"==typeof Symbol&&Symbol.for,ep=ef?Symbol.for("react.memo"):60115,eg=ef?Symbol.for("react.forward_ref"):60112,em={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ey={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ew={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ev=((ec={})[eg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ec[ep]=ew,ec);function eb(e){return("type"in e&&e.type.$$typeof)===ep?ew:"$$typeof"in e?ev[e.$$typeof]:em}var ex=Object.defineProperty,eC=Object.getOwnPropertyNames,e_=Object.getOwnPropertySymbols,eE=Object.getOwnPropertyDescriptor,eS=Object.getPrototypeOf,ek=Object.prototype;function eA(e){return"function"==typeof e}function eO(e){return"object"==typeof e&&"styledComponentId"in e}function eP(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eT(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function eR(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eI(e,t){Object.defineProperty(e,"toString",{value:t})}function e$(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eN=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw e$(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(X);return t},e}(),eM=new Map,ej=new Map,eD=1,eL=function(e){if(eM.has(e))return eM.get(e);for(;ej.has(eD);)eD++;var t=eD++;return eM.set(e,t),ej.set(t,e),t},eU=function(e,t){eD=t+1,eM.set(e,t),ej.set(t,e)},eB="style[".concat(G,"][").concat(q,'="').concat(K,'"]'),ez=new RegExp("^".concat(G,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eF=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},eW=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(X),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var l=s.match(ez);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(eU(u,c),eF(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},eH=function(e){var t,n=document.head,i=e||n,o=document.createElement("style"),a=(t=Array.from(i.querySelectorAll("style[".concat(G,"]"))))[t.length-1],s=void 0!==a?a.nextSibling:null;o.setAttribute(G,V),o.setAttribute(q,K);var l=r.nc;return l&&o.setAttribute("nonce",l),i.insertBefore(o,s),o},eZ=function(){function e(e){this.element=eH(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw e$(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eY=function(){function e(e){this.element=eH(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eG=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eV=J,eq={isServer:!J,useCSSOMInjection:!Q},eK=function(){function e(e,t,r){void 0===e&&(e=et),void 0===t&&(t={});var n=this;this.options=o(o({},eq),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&J&&eV&&(eV=!1,function(e){for(var t=document.querySelectorAll(eB),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(G)!==V&&(eW(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this)),eI(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++)(function(r){var i=ej.get(r);if(void 0!==i){var o=e.names.get(i),a=t.getGroup(r);if(void 0!==o&&0!==a.length){var s="".concat(G,".g").concat(r,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(X)}}})(i);return n}(n)})}return e.registerId=function(e){return eL(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(o(o({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new eN(e.isServer?new eG(r):t?new eZ(r):new eY(r))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(eL(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(eL(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(eL(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eX=/&/g,eJ=/^\s*\/\/.*$/gm;function eQ(e){var t,r,n,i=void 0===e?et:e,o=i.options,a=void 0===o?et:o,s=i.plugins,l=void 0===s?ee:s,c=function(e,n,i){return i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eX,r).replace(n,c))}),a.prefix&&u.push(F),u.push(z);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,r=i,n=RegExp("\\".concat(r,"\\b"),"g");var l,c,d,f,p,g=e.replace(eJ,""),w=(p=function e(t,r,n,i,o,a,s,l,c){for(var u,d=0,f=0,p=s,g=0,w=0,v=0,k=1,P=1,N=1,M=0,B="",z=o,F=a,Z=i,Y=B;P;)switch(v=M,M=j()){case 40:if(108!=v&&58==C(Y,p-1)){-1!=x(Y+=b(U(M),"&","&\f"),"&\f",m(d?l[d-1]:0))&&(N=-1);break}case 34:case 39:case 91:Y+=U(M);break;case 9:case 10:case 13:case 32:Y+=function(e){for(;R=D();)if(R<33)j();else break;return L(e)>2||L(R)>3?"":" "}(v);break;case 92:Y+=function(e,t){for(var r;--t&&j()&&!(R<48)&&!(R>102)&&(!(R>57)||!(R<65))&&(!(R>70)||!(R<97)););return r=T+(t<6&&32==D()&&32==j()),_(I,e,r)}(T-1,7);continue;case 47:switch(D()){case 42:case 47:S($(u=function(e,t){for(;j();)if(e+R===57)break;else if(e+R===84&&47===D())break;return"/*"+_(I,t,T-1)+"*"+y(47===e?e:j())}(j(),T),r,n,h,y(R),_(u,2,-2),0,c),c);break;default:Y+="/"}break;case 123*k:l[d++]=E(Y)*N;case 125*k:case 59:case 0:switch(M){case 0:case 125:P=0;case 59+f:-1==N&&(Y=b(Y,/\f/g,"")),w>0&&E(Y)-p&&S(w>32?H(Y+";",i,n,p-1,c):H(b(Y," ","")+";",i,n,p-2,c),c);break;case 59:Y+=";";default:if(S(Z=W(Y,r,n,d,f,o,l,B,z=[],F=[],p,a),a),123===M){if(0===f)e(Y,r,Z,Z,z,a,p,l,F);else switch(99===g&&110===C(Y,3)?100:g){case 100:case 108:case 109:case 115:e(t,Z,Z,i&&S(W(t,Z,Z,0,0,o,l,B,o,z=[],p,F),F),o,F,p,l,i?z:F);break;default:e(Y,Z,Z,Z,[""],F,0,l,F)}}}d=f=w=0,k=N=1,B=Y="",p=s;break;case 58:p=1+E(Y),w=v;default:if(k<1){if(123==M)--k;else if(125==M&&0==k++&&125==(R=T>0?C(I,--T):0,O--,10===R&&(O=1,A--),R))continue}switch(Y+=y(M),M*k){case 38:N=f>0?1:(Y+="\f",-1);break;case 44:l[d++]=(E(Y)-1)*N,N=1;break;case 64:45===D()&&(Y+=U(j())),g=D(),f=p=E(B=Y+=function(e){for(;!L(D());)j();return _(I,e,T)}(T)),M++;break;case 45:45===v&&2==E(Y)&&(k=0)}}return a}("",null,null,null,[""],(f=d=o||i?"".concat(o," ").concat(i," { ").concat(g," }"):g,A=O=1,P=E(I=f),T=0,d=[]),0,[0],d),I="",p);a.namespace&&(w=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(w,a.namespace));var v=[];return B(w,(c=(l=u.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,v.push(t))})).length,function(e,t,r,n){for(var i="",o=0;o<c;o++)i+=l[o](e,t,r,n)||"";return i})),v};return d.hash=l.length?l.reduce(function(e,t){return t.name||e$(15),eu(e,t.name)},5381).toString():"",d}var e0=new eK,e1=eQ(),e2=i.createContext({shouldForwardProp:void 0,styleSheet:e0,stylis:e1}),e3=(e2.Consumer,i.createContext(void 0));function e5(){return(0,i.useContext)(e2)}function e4(e){var t=(0,i.useState)(e.stylisPlugins),r=t[0],n=t[1],o=e5().styleSheet,a=(0,i.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,i.useMemo)(function(){return eQ({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,i.useEffect)(function(){l()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var c=(0,i.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return i.createElement(e2.Provider,{value:c},i.createElement(e3.Provider,{value:s},e.children))}var e6=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=e1);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eI(this,function(){throw e$(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e1),this.name+e.hash},e}();function e8(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var e7=function(e){return null==e||!1===e||""===e},e9=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!e7(n)&&(Array.isArray(n)&&n.isCss||eA(n)?t.push("".concat(e8(r),":"),n,";"):eR(n)?t.push.apply(t,a(a(["".concat(r," {")],e9(n),!1),["}"],!1)):t.push("".concat(e8(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in Z||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function te(e,t,r,n){return e7(e)?[]:eO(e)?[".".concat(e.styledComponentId)]:eA(e)?!eA(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:te(e(t),t,r,n):e instanceof e6?r?(e.inject(r,n),[e.getName(n)]):[e]:eR(e)?e9(e):Array.isArray(e)?Array.prototype.concat.apply(ee,e.map(function(e){return te(e,t,r,n)})):[e.toString()]}function tt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eA(r)&&!eO(r))return!1}return!0}var tr=ed(K),tn=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&tt(e),this.componentId=t,this.baseHash=eu(tr,t),this.baseStyle=r,eK.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=eP(n,this.staticRulesId);else{var i=eT(te(this.rules,e,t,r)),o=el(eu(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=eP(n,o),this.staticRulesId=o}}else{for(var s=eu(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=eT(te(u,e,t,r));s=eu(s,d+c),l+=d}}if(l){var h=el(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),n=eP(n,h)}}return n},e}(),ti=i.createContext(void 0);ti.Consumer;var to={};function ta(e,t,r){var n,a,s,l,c=eO(e),u=!eh(e),d=t.attrs,h=void 0===d?ee:d,f=t.componentId,p=void 0===f?(n=t.displayName,a=t.parentComponentId,to[s="string"!=typeof n?"sc":eo(n)]=(to[s]||0)+1,l="".concat(s,"-").concat(el(ed(K+s+to[s])>>>0)),a?"".concat(a,"-").concat(l):l):f,g=t.displayName,m=void 0===g?eh(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):g,y=t.displayName&&t.componentId?"".concat(eo(t.displayName),"-").concat(t.componentId):t.componentId||p,w=c&&e.attrs?e.attrs.concat(h).filter(Boolean):h,v=t.shouldForwardProp;if(c&&e.shouldForwardProp){var b=e.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;v=function(e,t){return b(e,t)&&x(e,t)}}else v=b}var C=new tn(r,y,c?e.componentStyle:void 0);function _(e,t){return function(e,t,r){var n,a,s=e.attrs,l=e.componentStyle,c=e.defaultProps,u=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=i.useContext(ti),p=e5(),g=e.shouldForwardProp||p.shouldForwardProp,m=(void 0===(n=c)&&(n=et),t.theme!==n.theme&&t.theme||f||n.theme||et),y=function(e,t,r){for(var n,i=o(o({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var s=eA(n=e[a])?n(i):n;for(var l in s)i[l]="className"===l?eP(i[l],s[l]):"style"===l?o(o({},i[l]),s[l]):s[l]}return t.className&&(i.className=eP(i.className,t.className)),i}(s,t,m),w=y.as||h,v={};for(var b in y)void 0===y[b]||"$"===b[0]||"as"===b||"theme"===b&&y.theme===m||("forwardedAs"===b?v.as=y.forwardedAs:g&&!g(b,w)||(v[b]=y[b]));var x=(a=e5(),l.generateAndInjectStyles(y,a.styleSheet,a.stylis)),C=eP(u,d);return x&&(C+=" "+x),y.className&&(C+=" "+y.className),v[eh(w)&&!er.has(w)?"class":"className"]=C,v.ref=r,(0,i.createElement)(w,v)}(E,e,t)}_.displayName=m;var E=i.forwardRef(_);return E.attrs=w,E.componentStyle=C,E.displayName=m,E.shouldForwardProp=v,E.foldedComponentIds=c?eP(e.foldedComponentIds,e.styledComponentId):"",E.styledComponentId=y,E.target=c?e.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=c?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eR(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)t[i]=e(t[i],r[i]);else if(eR(r))for(var i in r)t[i]=e(t[i],r[i]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eI(E,function(){return".".concat(E.styledComponentId)}),u&&function e(t,r,n){if("string"!=typeof r){if(ek){var i=eS(r);i&&i!==ek&&e(t,i,n)}var o=eC(r);e_&&(o=o.concat(e_(r)));for(var a=eb(t),s=eb(r),l=0;l<o.length;++l){var c=o[l];if(!(c in ey||n&&n[c]||s&&c in s||a&&c in a)){var u=eE(r,c);try{ex(t,c,u)}catch(e){}}}}return t}(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function ts(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var tl=function(e){return Object.assign(e,{isCss:!0})};function tc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eA(e)||eR(e)?tl(te(ts(ee,a([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?te(e):tl(te(ts(e,t)))}var tu=function(e){return function e(t,r,n){if(void 0===n&&(n=et),!r)throw e$(1,r);var i=function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return t(r,n,tc.apply(void 0,a([e],i,!1)))};return i.attrs=function(i){return e(t,r,o(o({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return e(t,r,o(o({},n),i))},i}(ta,e)};function td(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=eT(tc.apply(void 0,a([e],t,!1)));return new e6(el(ed(n)>>>0),n)}er.forEach(function(e){tu[e]=tu(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=tt(e),eK.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var i=n(eT(te(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&eK.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=r.nc,i=eT([n&&'nonce="'.concat(n,'"'),"".concat(G,'="true"'),"".concat(q,'="').concat(K,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw e$(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw e$(2);var t,n=((t={})[G]="",t[q]=K,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),a=r.nc;return a&&(n.nonce=a),[i.createElement("style",o({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eK({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw e$(2);return i.createElement(e4,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw e$(3)}}();let th="#4fa94d",tf={"aria-busy":!0,role:"progressbar"},tp=tu.div`
  display: ${e=>e.$visible?"flex":"none"};
`,tg=td`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;tu.path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${tg} ${1.6}s linear infinite;
`;let tm=td`
to {
   transform: rotate(360deg);
 }
`;tu.svg`
  animation: ${tm} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,tu.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let ty=({height:e=80,width:t=80,radius:r=9,color:i=th,ariaLabel:o="three-dots-loading",wrapperStyle:a,wrapperClass:s,visible:l=!0})=>(0,n.jsx)(tp,{style:a,$visible:l,className:s,"data-testid":"three-dots-loading","aria-label":o,...tf,children:(0,n.jsxs)("svg",{width:t,height:e,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:i,"data-testid":"three-dots-svg",children:[(0,n.jsxs)("circle",{cx:"15",cy:"15",r:Number(r)+6,children:[(0,n.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("circle",{cx:"60",cy:"15",r:r,attributeName:"fill-opacity",from:"1",to:"0.3",children:[(0,n.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("circle",{cx:"105",cy:"15",r:Number(r)+6,children:[(0,n.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),tw=td`
to {
   stroke-dashoffset: 136;
 }
`;tu.polygon`
  stroke-dasharray: 17;
  animation: ${tw} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,tu.svg`
  transform-origin: 50% 65%;
`},96774:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=r?r.call(n,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},54335:function(e,t,r){"use strict";r.d(t,{vJ:function(){return tu},ZP:function(){return tl}});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var o=r(67294),a=r(96774),s=r.n(a),l="-ms-",c="-moz-",u="-webkit-",d="comm",h="rule",f="decl",p="@keyframes",g=Math.abs,m=String.fromCharCode,y=Object.assign;function w(e,t){return(e=t.exec(e))?e[0]:e}function v(e,t,r){return e.replace(t,r)}function b(e,t){return e.indexOf(t)}function x(e,t){return 0|e.charCodeAt(t)}function C(e,t,r){return e.slice(t,r)}function _(e){return e.length}function E(e,t){return t.push(e),e}function S(e,t){return e.filter(function(e){return!w(e,t)})}var k=1,A=1,O=0,P=0,T=0,R="";function I(e,t,r,n,i,o,a,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:k,column:A,length:a,return:"",siblings:s}}function $(e,t){return y(I("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function N(e){for(;e.root;)e=$(e.root,{children:[e]});E(e,e.siblings)}function M(){return T=P<O?x(R,P++):0,A++,10===T&&(A=1,k++),T}function j(){return x(R,P)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L(e){var t,r;return(t=P-1,r=function e(t){for(;M();)switch(T){case t:return P;case 34:case 39:34!==t&&39!==t&&e(T);break;case 40:41===t&&e(t);break;case 92:M()}return P}(91===e?e+2:40===e?e+1:e),C(R,t,r)).trim()}function U(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function B(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case d:return"";case p:return e.return=e.value+"{"+U(e.children,n)+"}";case h:if(!_(e.value=e.props.join(",")))return""}return _(r=U(e.children,n))?e.return=e.value+"{"+r+"}":""}function z(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=function e(t,r,n){var i;switch(i=r,45^x(t,0)?(((i<<2^x(t,0))<<2^x(t,1))<<2^x(t,2))<<2^x(t,3):0){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 4789:return c+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+c+t+l+t+t;case 5936:switch(x(t,r+11)){case 114:return u+t+l+v(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+l+v(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+l+v(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+l+t+t;case 6165:return u+t+l+"flex-"+t+t;case 5187:return u+t+v(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return u+t+l+"flex-item-"+v(t,/flex-|-self/g,"")+(w(t,/flex-|baseline/)?"":l+"grid-row-"+v(t,/flex-|-self/g,""))+t;case 4675:return u+t+l+"flex-line-pack"+v(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+l+v(t,"shrink","negative")+t;case 5292:return u+t+l+v(t,"basis","preferred-size")+t;case 6060:return u+"box-"+v(t,"-grow","")+u+t+l+v(t,"grow","positive")+t;case 4554:return u+v(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return v(v(v(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return v(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return v(v(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4200:if(!w(t,/flex-|baseline/))return l+"grid-column-align"+C(t,r)+t;break;case 2592:case 3360:return l+v(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,w(e.props,/grid-\w+-end/)}))return~b(t+(n=n[r].value),"span")?t:l+v(t,"-start","")+t+l+"grid-row-span:"+(~b(n,"span")?w(n,/\d+/):+w(n,/\d+/)-+w(t,/\d+/))+";";return l+v(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return w(e.props,/grid-\w+-start/)})?t:l+v(v(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return v(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(t)-1-r>6)switch(x(t,r+1)){case 109:if(45!==x(t,r+4))break;case 102:return v(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==x(t,r+3)?"$3":"$2-$3"))+t;case 115:return~b(t,"stretch")?e(v(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return v(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,i,o,a,s){return l+r+":"+n+s+(i?l+r+"-span:"+(o?a:+a-+n)+s:"")+t});case 4949:if(121===x(t,r+6))return v(t,":",":"+u)+t;break;case 6444:switch(x(t,45===x(t,14)?18:11)){case 120:return v(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===x(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+t;case 100:return v(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case p:return U([$(e,{value:v(e.value,"@","@"+u)})],n);case h:if(e.length)return(r=e.props).map(function(t){switch(w(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N($(e,{props:[v(t,/:(read-\w+)/,":"+c+"$1")]})),N($(e,{props:[t]})),y(e,{props:S(r,n)});break;case"::placeholder":N($(e,{props:[v(t,/:(plac\w+)/,":"+u+"input-$1")]})),N($(e,{props:[v(t,/:(plac\w+)/,":"+c+"$1")]})),N($(e,{props:[v(t,/:(plac\w+)/,l+"input-$1")]})),N($(e,{props:[t]})),y(e,{props:S(r,n)})}return""}).join("")}}function F(e,t,r,n,i,o,a,s,l,c,u,d){for(var f=i-1,p=0===i?o:[""],m=p.length,y=0,w=0,b=0;y<n;++y)for(var x=0,_=C(e,f+1,f=g(w=a[y])),E=e;x<m;++x)(E=(w>0?p[x]+" "+_:v(_,/&\f/g,p[x])).trim())&&(l[b++]=E);return I(e,t,r,0===i?h:s,l,c,u,d)}function W(e,t,r,n,i){return I(e,t,r,f,C(e,0,n),C(e,n+1,-1),n,i)}var H={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Z=r(83454),Y=void 0!==Z&&void 0!==Z.env&&(Z.env.REACT_APP_SC_ATTR||Z.env.SC_ATTR)||"data-styled",G="undefined"!=typeof window&&"HTMLElement"in window,V=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==Z&&void 0!==Z.env&&void 0!==Z.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==Z.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==Z.env.REACT_APP_SC_DISABLE_SPEEDY&&Z.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==Z&&void 0!==Z.env&&void 0!==Z.env.SC_DISABLE_SPEEDY&&""!==Z.env.SC_DISABLE_SPEEDY&&"false"!==Z.env.SC_DISABLE_SPEEDY&&Z.env.SC_DISABLE_SPEEDY),q={},K=Object.freeze([]),X=Object.freeze({});function J(e,t,r){return void 0===r&&(r=X),e.theme!==r.theme&&e.theme||t||r.theme}var Q=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ee=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,et=/(^-|-$)/g;function er(e){return e.replace(ee,"-").replace(et,"")}var en=/(a)(d)/gi,ei=function(e){return String.fromCharCode(e+(e>25?39:97))};function eo(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=ei(t%52)+r;return(ei(t%52)+r).replace(en,"$1-$2")}var ea,es=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},el=function(e){return es(5381,e)};function ec(e){return"string"==typeof e}var eu="function"==typeof Symbol&&Symbol.for,ed=eu?Symbol.for("react.memo"):60115,eh=eu?Symbol.for("react.forward_ref"):60112,ef={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ep={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},em=((ea={})[eh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ea[ed]=eg,ea);function ey(e){return("type"in e&&e.type.$$typeof)===ed?eg:"$$typeof"in e?em[e.$$typeof]:ef}var ew=Object.defineProperty,ev=Object.getOwnPropertyNames,eb=Object.getOwnPropertySymbols,ex=Object.getOwnPropertyDescriptor,eC=Object.getPrototypeOf,e_=Object.prototype;function eE(e){return"function"==typeof e}function eS(e){return"object"==typeof e&&"styledComponentId"in e}function ek(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eA(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function eO(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eP(e,t){Object.defineProperty(e,"toString",{value:t})}function eT(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eR=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw eT(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat("/*!sc*/\n");return t},e}(),eI=new Map,e$=new Map,eN=1,eM=function(e){if(eI.has(e))return eI.get(e);for(;e$.has(eN);)eN++;var t=eN++;return eI.set(e,t),e$.set(t,e),t},ej=function(e,t){eN=t+1,eI.set(e,t),e$.set(t,e)},eD="style[".concat(Y,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),eL=new RegExp("^".concat(Y,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eU=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},eB=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var l=s.match(eL);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ej(u,c),eU(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},ez=function(e){var t,n=document.head,i=e||n,o=document.createElement("style"),a=(t=Array.from(i.querySelectorAll("style[".concat(Y,"]"))))[t.length-1],s=void 0!==a?a.nextSibling:null;o.setAttribute(Y,"active"),o.setAttribute("data-styled-version","6.1.1");var l=r.nc;return l&&o.setAttribute("nonce",l),i.insertBefore(o,s),o},eF=function(){function e(e){this.element=ez(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw eT(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eW=function(){function e(e){this.element=ez(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eH=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eZ=G,eY={isServer:!G,useCSSOMInjection:!V},eG=function(){function e(e,t,r){void 0===e&&(e=X),void 0===t&&(t={});var i=this;this.options=n(n({},eY),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&G&&eZ&&(eZ=!1,function(e){for(var t=document.querySelectorAll(eD),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(Y)&&(eB(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this)),eP(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++)(function(r){var i=e$.get(r);if(void 0!==i){var o=e.names.get(i),a=t.getGroup(r);if(void 0!==o&&0!==a.length){var s="".concat(Y,".g").concat(r,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat("/*!sc*/\n")}}})(i);return n}(i)})}return e.registerId=function(e){return eM(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new eR(e.isServer?new eH(r):t?new eF(r):new eW(r))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(eM(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(eM(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(eM(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eV=/&/g,eq=/^\s*\/\/.*$/gm;function eK(e){var t,r,n,i=void 0===e?X:e,o=i.options,a=void 0===o?X:o,s=i.plugins,l=void 0===s?K:s,c=function(e,n,i){return i===r||i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===h&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eV,r).replace(n,c))}),a.prefix&&u.push(z),u.push(B);var f=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,r=i,n=RegExp("\\".concat(r,"\\b"),"g");var l,c,h,f,p,g=e.replace(eq,""),y=(p=function e(t,r,n,i,o,a,s,l,c){for(var u,h=0,f=0,p=s,g=0,y=0,w=0,S=1,O=1,$=1,N=0,U="",B=o,z=a,H=i,Z=U;O;)switch(w=N,N=M()){case 40:if(108!=w&&58==x(Z,p-1)){-1!=b(Z+=v(L(N),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:Z+=L(N);break;case 9:case 10:case 13:case 32:Z+=function(e){for(;T=j();)if(T<33)M();else break;return D(e)>2||D(T)>3?"":" "}(w);break;case 92:Z+=function(e,t){for(var r;--t&&M()&&!(T<48)&&!(T>102)&&(!(T>57)||!(T<65))&&(!(T>70)||!(T<97)););return r=P+(t<6&&32==j()&&32==M()),C(R,e,r)}(P-1,7);continue;case 47:switch(j()){case 42:case 47:E(I(u=function(e,t){for(;M();)if(e+T===57)break;else if(e+T===84&&47===j())break;return"/*"+C(R,t,P-1)+"*"+m(47===e?e:M())}(M(),P),r,n,d,m(T),C(u,2,-2),0,c),c);break;default:Z+="/"}break;case 123*S:l[h++]=_(Z)*$;case 125*S:case 59:case 0:switch(N){case 0:case 125:O=0;case 59+f:-1==$&&(Z=v(Z,/\f/g,"")),y>0&&_(Z)-p&&E(y>32?W(Z+";",i,n,p-1,c):W(v(Z," ","")+";",i,n,p-2,c),c);break;case 59:Z+=";";default:if(E(H=F(Z,r,n,h,f,o,l,U,B=[],z=[],p,a),a),123===N){if(0===f)e(Z,r,H,H,B,a,p,l,z);else switch(99===g&&110===x(Z,3)?100:g){case 100:case 108:case 109:case 115:e(t,H,H,i&&E(F(t,H,H,0,0,o,l,U,o,B=[],p,z),z),o,z,p,l,i?B:z);break;default:e(Z,H,H,H,[""],z,0,l,z)}}}h=f=y=0,S=$=1,U=Z="",p=s;break;case 58:p=1+_(Z),y=w;default:if(S<1){if(123==N)--S;else if(125==N&&0==S++&&125==(T=P>0?x(R,--P):0,A--,10===T&&(A=1,k--),T))continue}switch(Z+=m(N),N*S){case 38:$=f>0?1:(Z+="\f",-1);break;case 44:l[h++]=(_(Z)-1)*$,$=1;break;case 64:45===j()&&(Z+=L(M())),g=j(),f=p=_(U=Z+=function(e){for(;!D(j());)M();return C(R,e,P)}(P)),N++;break;case 45:45===w&&2==_(Z)&&(S=0)}}return a}("",null,null,null,[""],(f=h=o||i?"".concat(o," ").concat(i," { ").concat(g," }"):g,k=A=1,O=_(R=f),P=0,h=[]),0,[0],h),R="",p);a.namespace&&(y=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(y,a.namespace));var w=[];return U(y,(c=(l=u.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,w.push(t))})).length,function(e,t,r,n){for(var i="",o=0;o<c;o++)i+=l[o](e,t,r,n)||"";return i})),w};return f.hash=l.length?l.reduce(function(e,t){return t.name||eT(15),es(e,t.name)},5381).toString():"",f}var eX=new eG,eJ=eK(),eQ=o.createContext({shouldForwardProp:void 0,styleSheet:eX,stylis:eJ}),e0=(eQ.Consumer,o.createContext(void 0));function e1(){return(0,o.useContext)(eQ)}function e2(e){var t=(0,o.useState)(e.stylisPlugins),r=t[0],n=t[1],i=e1().styleSheet,a=(0,o.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,o.useMemo)(function(){return eK({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,o.useEffect)(function(){s()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var c=(0,o.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}},[e.shouldForwardProp,a,l]);return o.createElement(eQ.Provider,{value:c},o.createElement(e0.Provider,{value:l},e.children))}var e3=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=eJ);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eP(this,function(){throw eT(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=eJ),this.name+e.hash},e}();function e5(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var e4=function(e){return null==e||!1===e||""===e},e6=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!e4(n)&&(Array.isArray(n)&&n.isCss||eE(n)?t.push("".concat(e5(r),":"),n,";"):eO(n)?t.push.apply(t,i(i(["".concat(r," {")],e6(n),!1),["}"],!1)):t.push("".concat(e5(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in H||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function e8(e,t,r,n){return e4(e)?[]:eS(e)?[".".concat(e.styledComponentId)]:eE(e)?!eE(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:e8(e(t),t,r,n):e instanceof e3?r?(e.inject(r,n),[e.getName(n)]):[e]:eO(e)?e6(e):Array.isArray(e)?Array.prototype.concat.apply(K,e.map(function(e){return e8(e,t,r,n)})):[e.toString()]}function e7(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eE(r)&&!eS(r))return!1}return!0}var e9=el("6.1.1"),te=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&e7(e),this.componentId=t,this.baseHash=es(e9,t),this.baseStyle=r,eG.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=ek(n,this.staticRulesId);else{var i=eA(e8(this.rules,e,t,r)),o=eo(es(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=ek(n,o),this.staticRulesId=o}}else{for(var s=es(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=eA(e8(u,e,t,r));s=es(s,d+c),l+=d}}if(l){var h=eo(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),n=ek(n,h)}}return n},e}(),tt=o.createContext(void 0);tt.Consumer;var tr={};function tn(e,t,r){var i,a,s,l,c=eS(e),u=!ec(e),d=t.attrs,h=void 0===d?K:d,f=t.componentId,p=void 0===f?(i=t.displayName,a=t.parentComponentId,tr[s="string"!=typeof i?"sc":er(i)]=(tr[s]||0)+1,l="".concat(s,"-").concat(eo(el("6.1.1"+s+tr[s])>>>0)),a?"".concat(a,"-").concat(l):l):f,g=t.displayName,m=void 0===g?ec(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):g,y=t.displayName&&t.componentId?"".concat(er(t.displayName),"-").concat(t.componentId):t.componentId||p,w=c&&e.attrs?e.attrs.concat(h).filter(Boolean):h,v=t.shouldForwardProp;if(c&&e.shouldForwardProp){var b=e.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;v=function(e,t){return b(e,t)&&x(e,t)}}else v=b}var C=new te(r,y,c?e.componentStyle:void 0);function _(e,t){return function(e,t,r){var i,a=e.attrs,s=e.componentStyle,l=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,d=e.target,h=o.useContext(tt),f=e1(),p=e.shouldForwardProp||f.shouldForwardProp,g=function(e,t,r){for(var i,o=n(n({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var s=eE(i=e[a])?i(o):i;for(var l in s)o[l]="className"===l?ek(o[l],s[l]):"style"===l?n(n({},o[l]),s[l]):s[l]}return t.className&&(o.className=ek(o.className,t.className)),o}(a,t,J(t,h,l)||X),m=g.as||d,y={};for(var w in g)void 0===g[w]||"$"===w[0]||"as"===w||"theme"===w||("forwardedAs"===w?y.as=g.forwardedAs:p&&!p(w,m)||(y[w]=g[w]));var v=(i=e1(),s.generateAndInjectStyles(g,i.styleSheet,i.stylis)),b=ek(c,u);return v&&(b+=" "+v),g.className&&(b+=" "+g.className),y[ec(m)&&!Q.has(m)?"class":"className"]=b,y.ref=r,(0,o.createElement)(m,y)}(E,e,t)}_.displayName=m;var E=o.forwardRef(_);return E.attrs=w,E.componentStyle=C,E.displayName=m,E.shouldForwardProp=v,E.foldedComponentIds=c?ek(e.foldedComponentIds,e.styledComponentId):"",E.styledComponentId=y,E.target=c?e.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=c?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eO(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)t[i]=e(t[i],r[i]);else if(eO(r))for(var i in r)t[i]=e(t[i],r[i]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eP(E,function(){return".".concat(E.styledComponentId)}),u&&function e(t,r,n){if("string"!=typeof r){if(e_){var i=eC(r);i&&i!==e_&&e(t,i,n)}var o=ev(r);eb&&(o=o.concat(eb(r)));for(var a=ey(t),s=ey(r),l=0;l<o.length;++l){var c=o[l];if(!(c in ep||n&&n[c]||s&&c in s||a&&c in a)){var u=ex(r,c);try{ew(t,c,u)}catch(e){}}}}return t}(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function ti(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var to=function(e){return Object.assign(e,{isCss:!0})};function ta(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eE(e)||eO(e)?to(e8(ti(K,i([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?e8(e):to(e8(ti(e,t)))}var ts=function(e){return function e(t,r,o){if(void 0===o&&(o=X),!r)throw eT(1,r);var a=function(e){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return t(r,o,ta.apply(void 0,i([e],n,!1)))};return a.attrs=function(i){return e(t,r,n(n({},o),{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},a.withConfig=function(i){return e(t,r,n(n({},o),i))},a}(tn,e)},tl=ts;Q.forEach(function(e){tl[e]=ts(e)});var tc=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=e7(e),eG.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var i=n(eA(e8(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&eG.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function tu(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var a=ta.apply(void 0,i([e],t,!1)),s="sc-global-".concat(eo(el(JSON.stringify(a))>>>0)),l=new tc(a,s),c=function(e){var t=e1(),r=o.useContext(tt),n=o.useRef(t.styleSheet.allocateGSInstance(s)).current;return t.styleSheet.server&&u(n,e,t.styleSheet,r,t.stylis),o.useLayoutEffect(function(){if(!t.styleSheet.server)return u(n,e,t.styleSheet,r,t.stylis),function(){return l.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function u(e,t,r,i,o){if(l.isStatic)l.renderStyles(e,q,r,o);else{var a=n(n({},t),{theme:J(t,i,c.defaultProps)});l.renderStyles(e,a,r,o)}}return o.memo(c)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=r.nc,i=eA([n&&'nonce="'.concat(n,'"'),"".concat(Y,'="true"'),"".concat("data-styled-version",'="').concat("6.1.1",'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eT(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eT(2);var t,i=((t={})[Y]="",t["data-styled-version"]="6.1.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),a=r.nc;return a&&(i.nonce=a),[o.createElement("style",n({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eG({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw eT(2);return o.createElement(e2,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw eT(3)}}()},53250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},50139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i=r(61688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var f=a(e,(d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=n(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,i]))[0],d[1]);return l(function(){h.hasValue=!0,h.value=f},[f]),u(f),f}},61688:function(e,t,r){"use strict";e.exports=r(53250)},52798:function(e,t,r){"use strict";e.exports=r(50139)},82729:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:function(){return n}})},66474:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var n=r(7506),i=r(24139),o=new class extends n.l{#x;#C;#_;constructor(){super(),this.#_=e=>{if(!i.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#C||this.setEventListener(this.#_)}onUnsubscribe(){this.hasListeners()||(this.#C?.(),this.#C=void 0)}setEventListener(e){this.#_=e,this.#C?.(),this.#C=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.#x!==e;t&&(this.#x=e,this.onFocus())}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.#x?this.#x:globalThis.document?.visibilityState!=="hidden"}}},59289:function(e,t,r){"use strict";r.d(t,{R:function(){return s},m:function(){return a}});var n=r(27037),i=r(48907),o=r(72008),a=class extends i.F{constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.defaultOptions,this.#g=e.mutationCache,this.#n=[],this.state=e.state||s(),this.setOptions(e.options),this.scheduleGc()}#n;#t;#g;#l;setOptions(e){this.options={...this.#t,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#n.includes(e)||(this.#n.push(e),this.clearGcTimeout(),this.#g.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#n=this.#n.filter(t=>t!==e),this.scheduleGc(),this.#g.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#n.length||("pending"===this.state.status?this.scheduleGc():this.#g.remove(this))}continue(){return this.#l?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#c({type:"pending",variables:e}),await this.#g.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#c({type:"pending",context:t,variables:e})}let r=await (this.#l=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#c({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#l.promise);return await this.#g.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#g.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#c({type:"success",data:r}),r}catch(t){try{throw await this.#g.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#g.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#c({type:"error",error:t})}}}#c(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#n.forEach(t=>{t.onMutationUpdate(e)}),this.#g.notify({mutation:this,type:"updated",action:e})})}};function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},27037:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var n=r(24139),i=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},o=i=>{t?e.push(i):(0,n.A4)(()=>{r(i)})},a=()=>{let t=e;e=[],t.length&&(0,n.A4)(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||a()}return r},batchCalls:e=>(...t)=>{o(()=>{e(...t)})},schedule:o,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e}}}()},14304:function(e,t,r){"use strict";r.d(t,{N:function(){return o}});var n=r(7506),i=r(24139),o=new class extends n.l{#E=!0;#C;#_;constructor(){super(),this.#_=e=>{if(!i.sk&&window.addEventListener){let t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#C||this.setEventListener(this.#_)}onUnsubscribe(){this.hasListeners()||(this.#C?.(),this.#C=void 0)}setEventListener(e){this.#_=e,this.#C?.(),this.#C=e(this.setOnline.bind(this))}setOnline(e){let t=this.#E!==e;t&&(this.#E=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#E}}},48907:function(e,t,r){"use strict";r.d(t,{F:function(){return i}});var n=r(24139),i=class{#S;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,n.PN)(this.gcTime)&&(this.#S=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(n.sk?1/0:3e5))}clearGcTimeout(){this.#S&&(clearTimeout(this.#S),this.#S=void 0)}}},72008:function(e,t,r){"use strict";r.d(t,{DV:function(){return c},Kw:function(){return s},Mz:function(){return u}});var n=r(66474),i=r(14304),o=r(24139);function a(e){return Math.min(1e3*2**e,3e4)}function s(e){return(e??"online")!=="online"||i.N.isOnline()}var l=class{constructor(e){this.revert=e?.revert,this.silent=e?.silent}};function c(e){return e instanceof l}function u(e){let t,r,c,u=!1,d=0,h=!1,f=new Promise((e,t)=>{r=e,c=t}),p=()=>!n.j.isFocused()||"always"!==e.networkMode&&!i.N.isOnline(),g=n=>{h||(h=!0,e.onSuccess?.(n),t?.(),r(n))},m=r=>{h||(h=!0,e.onError?.(r),t?.(),c(r))},y=()=>new Promise(r=>{t=e=>{let t=h||!p();return t&&r(e),t},e.onPause?.()}).then(()=>{t=void 0,h||e.onContinue?.()}),w=()=>{let t;if(!h){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(g).catch(t=>{if(h)return;let r=e.retry??(o.sk?0:3),n=e.retryDelay??a,i="function"==typeof n?n(d,t):n,s=!0===r||"number"==typeof r&&d<r||"function"==typeof r&&r(d,t);if(u||!s){m(t);return}d++,e.onFail?.(d,t),(0,o._v)(i).then(()=>{if(p())return y()}).then(()=>{u?m(t):w()})})}};return s(e.networkMode)?w():y().then(w),{promise:f,cancel:t=>{h||(m(new l(t)),e.abort?.())},continue:()=>{let e=t?.();return e?f:Promise.resolve()},cancelRetry:()=>{u=!0},continueRetry:()=>{u=!1}}}},7506:function(e,t,r){"use strict";r.d(t,{l:function(){return n}});var n=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},24139:function(e,t,r){"use strict";r.d(t,{A4:function(){return w},Ht:function(){return x},Kp:function(){return s},PN:function(){return a},Rm:function(){return u},SE:function(){return o},VS:function(){return f},VX:function(){return b},X7:function(){return c},Ym:function(){return d},ZT:function(){return i},_v:function(){return y},_x:function(){return l},oE:function(){return v},sk:function(){return n},to:function(){return h}});var n="undefined"==typeof window||"Deno"in window;function i(){}function o(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t){let{type:r="all",exact:n,fetchStatus:i,predicate:o,queryKey:a,stale:s}=e;if(a){if(n){if(t.queryHash!==u(a,t.options))return!1}else if(!h(t.queryKey,a))return!1}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===i||i===t.state.fetchStatus)&&(!o||!!o(t))}function c(e,t){let{exact:r,status:n,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(d(t.options.mutationKey)!==d(o))return!1}else if(!h(t.options.mutationKey,o))return!1}return(!n||t.state.status===n)&&(!i||!!i(t))}function u(e,t){let r=t?.queryKeyHashFn||d;return r(e)}function d(e){return JSON.stringify(e,(e,t)=>g(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!h(e[r],t[r]))}function f(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function p(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function g(e){if(!m(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(m(r)&&r.hasOwnProperty("isPrototypeOf"))}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function y(e){return new Promise(t=>{setTimeout(t,e)})}function w(e){y(0).then(e)}function v(e,t,r){return"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?function e(t,r){if(t===r)return t;let n=p(t)&&p(r);if(n||g(t)&&g(r)){let i=n?t.length:Object.keys(t).length,o=n?r:Object.keys(r),a=o.length,s=n?[]:{},l=0;for(let i=0;i<a;i++){let a=n?i:o[i];s[a]=e(t[a],r[a]),s[a]===t[a]&&l++}return i===a&&l===i?t:s}return r}(e,t):t}function b(e,t,r=0){let n=[...e,t];return r&&n.length>r?n.slice(1):n}function x(e,t,r=0){let n=[t,...e];return r&&n.length>r?n.slice(0,-1):n}},30202:function(e,t,r){"use strict";r.d(t,{NL:function(){return o},aH:function(){return a}});var n=r(67294),i=n.createContext(void 0),o=e=>{let t=n.useContext(i);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},a=({client:e,children:t})=>(n.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),n.createElement(i.Provider,{value:e},t))},98029:function(e,t,r){"use strict";r.d(t,{D:function(){return u}});var n=r(67294),i=r(59289),o=r(27037),a=r(7506),s=r(24139),MutationObserver=class extends a.l{constructor(e,t){super(),this.#k=void 0,this.#A=e,this.setOptions(t),this.bindMethods(),this.#O()}#A;#k;#P;#T;bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#A.defaultMutationOptions(e),(0,s.VS)(t,this.options)||this.#A.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#P,observer:this}),this.#P?.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#P?.removeObserver(this)}onMutationUpdate(e){this.#O(),this.#R(e)}getCurrentResult(){return this.#k}reset(){this.#P=void 0,this.#O(),this.#R()}mutate(e,t){return this.#T=t,this.#P?.removeObserver(this),this.#P=this.#A.getMutationCache().build(this.#A,this.options),this.#P.addObserver(this),this.#P.execute(e)}#O(){let e=this.#P?.state??(0,i.R)();this.#k={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#R(e){o.V.batch(()=>{this.#T&&this.hasListeners()&&(e?.type==="success"?(this.#T.onSuccess?.(e.data,this.#k.variables,this.#k.context),this.#T.onSettled?.(e.data,null,this.#k.variables,this.#k.context)):e?.type==="error"&&(this.#T.onError?.(e.error,this.#k.variables,this.#k.context),this.#T.onSettled?.(void 0,e.error,this.#k.variables,this.#k.context))),this.listeners.forEach(e=>{e(this.#k)})})}},l=r(30202),c=r(86290);function u(e,t){let r=(0,l.NL)(t),[i]=n.useState(()=>new MutationObserver(r,e));n.useEffect(()=>{i.setOptions(e)},[i,e]);let a=n.useSyncExternalStore(n.useCallback(e=>i.subscribe(o.V.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=n.useCallback((e,t)=>{i.mutate(e,t).catch(d)},[i]);if(a.error&&(0,c.L)(i.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:s,mutateAsync:a.mutate}}function d(){}},86290:function(e,t,r){"use strict";function n(e,t){return"function"==typeof e?e(...t):!!e}r.d(t,{L:function(){return n}})},35001:function(e,t,r){"use strict";r.d(t,{s:function(){return S}});var n=r(97405),i=r(95946),o=r(61836),a=r(15229),s=r(92106);async function l(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=r?(0,s.eC)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||n]});return BigInt(o)}var c=r(81946),u=r(84192);function d(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(u.Bd[e])}var h=r(16693),f=r(57412),p=r(62027),g=r(7210),m=r(77799),y=r(47864),w=r(72365),v=r(93714),b=r(88819);async function x(e,t){let{allowFailure:r=!0,batchSize:i,blockNumber:o,blockTag:a,multicallAddress:s,stateOverride:l}=t,c=t.contracts,u=i??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),d=s;if(!d){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");d=(0,y.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let x=[[]],C=0,_=0;for(let e=0;e<c.length;e++){let{abi:t,address:n,args:i,functionName:o}=c[e];try{let e=(0,m.R)({abi:t,args:i,functionName:o});_+=(e.length-2)/2,u>0&&_>u&&x[C].length>0&&(C++,_=(e.length-2)/2,x[C]=[]),x[C]=[...x[C],{allowFailure:!0,callData:e,target:n}]}catch(a){let e=(0,w.S)(a,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;x[C]=[...x[C],{allowFailure:!0,callData:"0x",target:n}]}}let E=await Promise.allSettled(x.map(t=>(0,v.s)(e,b.L,"readContract")({abi:h.F8,address:d,args:[t],blockNumber:o,blockTag:a,functionName:"aggregate3",stateOverride:l}))),S=[];for(let e=0;e<E.length;e++){let t=E[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<x[e].length;r++)S.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:o,success:a}=i[t],{callData:s}=x[e][t],{abi:l,address:u,functionName:d,args:h}=c[S.length];try{if("0x"===s)throw new f.wb;if(!a)throw new n.VQ({data:o});let e=(0,g.k)({abi:l,args:h,data:o,functionName:d});S.push(r?{result:e,status:"success"}:e)}catch(t){let e=(0,w.S)(t,{abi:l,address:u,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!r)throw e;S.push({error:e,result:void 0,status:"failure"})}}}if(S.length!==c.length)throw new p.G("multicall results mismatch");return S}async function C(e,t){let{allowFailure:r=!0,chainId:n,contracts:i,...o}=t,a=e.getClient({chainId:n}),s=(0,c.s)(a,x,"multicall");return s({allowFailure:r,contracts:i,...o})}var _=r(37003);async function E(e,t){let{allowFailure:r=!0,blockNumber:i,blockTag:o,...a}=t,s=t.contracts;try{let t=s.reduce((t,r,n)=>{let i=r.chainId??e.state.chainId;return{...t,[i]:[...t[i]||[],{contract:r,index:n}]}},{}),n=(await Promise.all(Object.entries(t).map(([t,n])=>C(e,{...a,allowFailure:r,blockNumber:i,blockTag:o,chainId:parseInt(t),contracts:n.map(({contract:e})=>e)})))).flat(),l=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return n.reduce((e,t,r)=>(e&&(e[l[r]]=t),e),[])}catch(a){if(a instanceof n.uq)throw a;let t=()=>s.map(t=>(0,_.L)(e,{...t,blockNumber:i,blockTag:o}));if(r)return(await Promise.allSettled(t())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(t())}}async function S(e,t){let{address:r,blockNumber:s,blockTag:u,chainId:h,token:f,unit:p="ether"}=t;if(f)try{return k(e,{balanceAddress:r,chainId:h,symbolType:"string",tokenAddress:f})}catch(t){if(t instanceof n.uq){let t=await k(e,{balanceAddress:r,chainId:h,symbolType:"bytes32",tokenAddress:f}),n=(0,i.rR)((0,o.f)(t.symbol,{dir:"right"}));return{...t,symbol:n}}throw t}let g=e.getClient({chainId:h}),m=(0,c.s)(g,l,"getBalance"),y=await m(s?{address:r,blockNumber:s}:{address:r,blockTag:u}),w=e.chains.find(e=>e.id===h)??g.chain;return{decimals:w.nativeCurrency.decimals,formatted:(0,a.b)(y,d(p)),symbol:w.nativeCurrency.symbol,value:y}}async function k(e,t){let{balanceAddress:r,chainId:n,symbolType:i,tokenAddress:o,unit:s}=t,l={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:i}]}],address:o},[c,u,h]=await E(e,{allowFailure:!1,contracts:[{...l,functionName:"balanceOf",args:[r],chainId:n},{...l,functionName:"decimals",chainId:n},{...l,functionName:"symbol",chainId:n}]}),f=(0,a.b)(c??"0",d(s??u));return{decimals:u,formatted:f,symbol:h,value:c}}},37003:function(e,t,r){"use strict";r.d(t,{L:function(){return o}});var n=r(88819),i=r(81946);function o(e,t){let{chainId:r,...o}=t,a=e.getClient({chainId:r}),s=(0,i.s)(a,n.L,"readContract");return s(o)}},81946:function(e,t,r){"use strict";function n(e,t,r){let n=e[t.name??r];return"function"==typeof n?n:r=>t(e,r)}r.d(t,{s:function(){return n}})},88598:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var n=r(27484),i=r(70660),o=r(84110);n.extend(o),n.extend(i),n.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(e=new Date().toISOString())=>n(e).year(),getRelativeDateFromNow:e=>n(e).fromNow(!0),formatDate:(e,t="DD MMM")=>n(e).format(t)}},76472:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return c},ApiController:function(){return N},fz:function(){return J},Lr:function(){return z},ConnectionController:function(){return G},ConnectorController:function(){return x},bq:function(){return a},j1:function(){return s},Xs:function(){return O},IN:function(){return L},NetworkController:function(){return T},OptionsController:function(){return v},Ie:function(){return _},RouterController:function(){return j},_4:function(){return Q},yD:function(){return q},SnackController:function(){return W},MO:function(){return g},ThemeController:function(){return X},sl:function(){return Z}});var n=r(17832);function i(e,t,r,i){let o=e[t];return(0,n.Ld)(e,()=>{let n=e[t];Object.is(o,n)||r(o=n)},i)}Symbol();let o="https://secure.walletconnect.com",a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},s={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=a.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=a.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+a.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...n)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise((t,r)=>{let n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e});return Promise.race([t,s.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t??""}`:"0.000"},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return a.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let n=r[e.id],i=r[t.id];return void 0!==n&&void 0!==i?n-i:void 0!==n?-1:void 0!==i?1:0})),t}},l=(0,n.sj)({isConnected:!1}),c={state:l,subscribe:e=>(0,n.Ld)(l,()=>e(l)),subscribeKey:(e,t)=>i(l,e,t),setIsConnected(e){l.isConnected=e},setCaipAddress(e){l.caipAddress=e,l.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){l.balance=e,l.balanceSymbol=t},setProfileName(e){l.profileName=e},setProfileImage(e){l.profileImage=e},setAddressExplorerUrl(e){l.addressExplorerUrl=e},resetAccount(){l.isConnected=!1,l.caipAddress=void 0,l.address=void 0,l.balance=void 0,l.balanceSymbol=void 0,l.profileName=void 0,l.profileImage=void 0,l.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t),n=await fetch(r,{method:"GET",headers:e});return n.json()}async getBlob({headers:e,...t}){let r=this.createUrl(t),n=await fetch(r,{method:"GET",headers:e});return n.blob()}async post({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}async put({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}async delete({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let d="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",f="@w3m/connected_wallet_image_url",p="@w3m/connected_connector",g={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(d,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(d);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(d)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=g.getRecentWallets(),r=t.find(t=>t.id===e.id);r||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(f)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(p)}catch{console.info("Unable to get Connected Connector")}}},m=(0,n.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),y={state:m,subscribeNetworkImages:e=>(0,n.Ld)(m.networkImages,()=>e(m.networkImages)),subscribeKey:(e,t)=>i(m,e,t),setWalletImage(e,t){m.walletImages[e]=t},setNetworkImage(e,t){m.networkImages[e]=t},setConnectorImage(e,t){m.connectorImages[e]=t},setTokenImage(e,t){m.tokenImages[e]=t}},w=(0,n.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),v={state:w,subscribeKey:(e,t)=>i(w,e,t),setProjectId(e){w.projectId=e},setAllWallets(e){w.allWallets=e},setIncludeWalletIds(e){w.includeWalletIds=e},setExcludeWalletIds(e){w.excludeWalletIds=e},setFeaturedWalletIds(e){w.featuredWalletIds=e},setTokens(e){w.tokens=e},setTermsConditionsUrl(e){w.termsConditionsUrl=e},setPrivacyPolicyUrl(e){w.privacyPolicyUrl=e},setCustomWallets(e){w.customWallets=e},setEnableAnalytics(e){w.enableAnalytics=e},setSdkVersion(e){w.sdkVersion=e},setMetadata(e){w.metadata=e}},b=(0,n.sj)({connectors:[]}),x={state:b,subscribeKey:(e,t)=>i(b,e,t),setConnectors(e){b.connectors=e.map(e=>(0,n.iH)(e))},addConnector(e){if(b.connectors.push((0,n.iH)(e)),"w3mEmail"===e.id){let t=(0,n.CO)(v.state);e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId})}},getEmailConnector:()=>b.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>b.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>b.connectors},C=(0,n.sj)({open:!1,selectedNetworkId:void 0}),_={state:C,subscribe:e=>(0,n.Ld)(C,()=>e(C)),set(e){Object.assign(C,{...C,...e})}},E=s.getAnalyticsUrl(),S=new u({baseUrl:E}),k=["MODAL_CREATED"],A=(0,n.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),O={state:A,subscribe:e=>(0,n.Ld)(A,()=>e(A)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=v.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(k.includes(e.data.event)||"undefined"==typeof window)return;await S.post({path:"/e",headers:O._getApiHeaders(),body:{eventId:s.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){A.timestamp=Date.now(),A.data=e,v.state.enableAnalytics&&O._sendAnalyticsEvent(A)}},P=(0,n.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),T={state:P,subscribeKey:(e,t)=>i(P,e,t),_getClient(){if(!P._client)throw Error("NetworkController client not set");return P._client},setClient(e){P._client=(0,n.iH)(e)},setCaipNetwork(e){P.caipNetwork=e,_.set({selectedNetworkId:e?.id}),this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e){P.caipNetwork=e,_.set({selectedNetworkId:e?.id}),P.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){P.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();P.supportsAllNetworks=e.supportsAllNetworks,P.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),P.caipNetwork=e,e&&O.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},checkIfSupportedNetwork(){P.isUnsupportedChain=!P.requestedCaipNetworks?.some(e=>e.id===P.caipNetwork?.id),P.isUnsupportedChain&&this.showUnsupportedChainUI()},resetNetwork(){P.isDefaultCaipNetwork||(P.caipNetwork=void 0),P.approvedCaipNetworkIds=void 0,P.supportsAllNetworks=!0},showUnsupportedChainUI(){setTimeout(()=>{L.open({view:"UnsupportedChain"})},300)}},R=s.getApiUrl(),I=new u({baseUrl:R}),$=(0,n.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),N={state:$,subscribeKey:(e,t)=>i($,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=v.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${I.baseUrl}/getWalletImage/${e}`,r=await I.getBlob({path:t,headers:N._getApiHeaders()});y.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${I.baseUrl}/public/getAssetImage/${e}`,r=await I.getBlob({path:t,headers:N._getApiHeaders()});y.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${I.baseUrl}/public/getAssetImage/${e}`,r=await I.getBlob({path:t,headers:N._getApiHeaders()});y.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=T.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>N._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=x.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>N._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=v.state;if(e?.length){let{data:t}=await I.get({path:"/getWallets",headers:N._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>N._fetchWalletImage(e))),$.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=v.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:o}=await I.get({path:"/getWallets",headers:N._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),a=g.getRecentWallets(),s=i.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>N._fetchWalletImage(e))),$.recommended=i,$.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=v.state,i=[...$.recommended.map(({id:e})=>e),...r??[],...n??[]].filter(Boolean),{data:o,count:a}=await I.get({path:"/getWallets",headers:N._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l.map(e=>N._fetchWalletImage(e)),s.wait(300)]),$.wallets=[...$.wallets,...o],$.count=a>$.count?a:$.count,$.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=v.state;$.search=[];let{data:n}=await I.get({path:"/getWallets",headers:N._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...i.map(e=>N._fetchWalletImage(e)),s.wait(300)]),$.search=n},prefetch(){let e=[N.fetchFeaturedWallets(),N.fetchRecommendedWallets(),N.fetchNetworkImages(),N.fetchConnectorImages()];void 0===v.state.enableAnalytics&&e.push(N.fetchAnalyticsConfig()),$.prefetchPromise=Promise.race([Promise.allSettled(e),s.wait(3e3)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await I.get({path:"/getAnalyticsConfig",headers:N._getApiHeaders()});v.setEnableAnalytics(e)}},M=(0,n.sj)({view:"Connect",history:["Connect"]}),j={state:M,subscribeKey:(e,t)=>i(M,e,t),push(e,t){e!==M.view&&(M.view=e,M.history.push(e),M.data=t)},reset(e){M.view=e,M.history=[e]},replace(e,t){M.history.length>1&&M.history.at(-1)!==e&&(M.view=e,M.history[M.history.length-1]=e,M.data=t)},goBack(){if(M.history.length>1){M.history.pop();let[e]=M.history.slice(-1);e&&(M.view=e)}},goBackToIndex(e){if(M.history.length>1){M.history=M.history.slice(0,e+1);let[t]=M.history.slice(-1);t&&(M.view=t)}}},D=(0,n.sj)({loading:!1,open:!1}),L={state:D,subscribe:e=>(0,n.Ld)(D,()=>e(D)),subscribeKey:(e,t)=>i(D,e,t),async open(e){await N.state.prefetchPromise;let t=c.state.isConnected;e?.view?j.reset(e.view):t?j.reset("Account"):j.reset("Connect"),D.open=!0,_.set({open:!0}),O.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){let e=c.state.isConnected;D.open=!1,_.set({open:!1}),O.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){D.loading=e}},U=s.getBlockchainApiUrl(),B=new u({baseUrl:U}),z={fetchIdentity:({caipChainId:e,address:t})=>B.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:v.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r})=>B.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r?{cursor:r}:{}})},F=(0,n.sj)({message:"",variant:"success",open:!1}),W={state:F,subscribeKey:(e,t)=>i(F,e,t),showSuccess(e){F.message=e,F.variant="success",F.open=!0},showError(e){let t=s.parseError(e);F.message=t,F.variant="error",F.open=!0},hide(){F.open=!1}},H=(0,n.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Z={state:H,subscribe:e=>(0,n.Ld)(H,()=>e(H)),async fetchTransactions(e){let{projectId:t}=v.state;if(!t||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");H.loading=!0;try{let r=await z.fetchTransactions({account:e,projectId:t,cursor:H.next}),n=this.filterSpamTransactions(r.data),i=[...H.transactions,...n];H.loading=!1,H.transactions=i,H.transactionsByYear=this.groupTransactionsByYearAndMonth(H.transactionsByYear,n),H.empty=0===i.length,H.next=r.next?r.next:void 0}catch(r){O.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:H.next}}),W.showError("Failed to fetch transactions"),H.loading=!1,H.empty=!0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),n=new Date(t.metadata.minedAt).getMonth(),i=e[r]??{},o=i[n]??[];e[r]={...i,[n]:[...o,t]}}),e),filterSpamTransactions:e=>e.filter(e=>{let t=e.transfers.every(e=>e.nft_info?.flags.is_spam===!0);return!t}),resetTransactions(){H.transactions=[],H.transactionsByYear={},H.loading=!1,H.empty=!1,H.next=void 0}},Y=(0,n.sj)({wcError:!1,buffering:!1}),G={state:Y,subscribeKey:(e,t)=>i(Y,e,t),_getClient(){if(!Y._client)throw Error("ConnectionController client not set");return Y._client},setClient(e){Y._client=(0,n.iH)(e)},connectWalletConnect(){Y.wcPromise=this._getClient().connectWalletConnect(e=>{Y.wcUri=e,Y.wcPairingExpiry=s.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e),g.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){Y.wcUri=void 0,Y.wcPairingExpiry=void 0,Y.wcPromise=void 0,Y.wcLinking=void 0,Y.recentWallet=void 0,Z.resetTransactions(),g.deleteWalletConnectDeepLink()},setWcLinking(e){Y.wcLinking=e},setWcError(e){Y.wcError=e,Y.buffering=!1},setRecentWallet(e){Y.recentWallet=e},setBuffering(e){Y.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},V=(0,n.sj)({status:"uninitialized",isSiweEnabled:!1}),q={state:V,subscribeKey:(e,t)=>i(V,e,t),subscribe:e=>(0,n.Ld)(V,()=>e(V)),_getClient(){if(!V._client)throw Error("SIWEController client not set");return V._client},async getNonce(){let e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){let t=this._getClient(),r=t.createMessage(e);return this.setMessage(r),r},async verifyMessage(e){let t=this._getClient(),r=await t.verifyMessage(e);return r},async signIn(){let e=this._getClient(),t=await e.signIn();return t},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){V._client=(0,n.iH)(e),V.status="ready",V.isSiweEnabled=e.options.enabled},setNonce(e){V.nonce=e},setStatus(e){V.status=e},setMessage(e){V.message=e},setSession(e){V.session=e}},K=(0,n.sj)({themeMode:"dark",themeVariables:{}}),X={state:K,subscribe:e=>(0,n.Ld)(K,()=>e(K)),setThemeMode(e){K.themeMode=e},setThemeVariables(e){K.themeVariables={...K.themeVariables,...e}},getSnapshot:()=>(0,n.CO)(K)},J={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?y.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?y.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?y.state.connectorImages[e.imageId]:void 0},Q={goBackOrCloseModal(){j.state.history.length>1?j.goBack():L.close()},navigateAfterNetworkSwitch(){let{history:e}=j.state,t=e.findIndex(e=>"Networks"===e);t>=1?j.goBackToIndex(t-1):L.close()}}},90078:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var n=r(76472),i=r(64747),o=r(77996),a=r(37380),s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.caipAddress=n.AccountController.state.caipAddress,this.isSiweEnabled=n.yD.state.isSiweEnabled,this.initializeTheming(),n.ApiController.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),n.yD.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),n.AccountController.subscribe(e=>this.onNewAccountState(e))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==n.yD.state.status&&await n.ConnectionController.disconnect(),n.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=n.ThemeController.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await n.yD.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{let e=await n.yD.getSession();e&&!t?await n.yD.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?n.RouterController.push("ConnectingSiwe"):n.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),l([(0,a.SB)()],u.prototype,"caipAddress",void 0),l([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,i.customElement)("w3m-modal")],u)},64747:function(e,t,r){"use strict";let n,i,o;r.r(t),r.d(t,{TransactionUtil:function(){return na},UiHelperUtil:function(){return e9},WuiAccountButton:function(){return td},WuiAllWalletsImage:function(){return ty},WuiAvatar:function(){return to},WuiButton:function(){return tb},WuiCard:function(){return w},WuiCardSelect:function(){return tI},WuiCardSelectLoader:function(){return tE},WuiChip:function(){return tM},WuiConnectButton:function(){return tL},WuiCtaButton:function(){return tz},WuiEmailInput:function(){return tV},WuiFlex:function(){return tr},WuiGrid:function(){return r9},WuiIcon:function(){return eE},WuiIconBox:function(){return tl},WuiIconLink:function(){return tX},WuiImage:function(){return eA},WuiInputElement:function(){return t0},WuiInputNumeric:function(){return t3},WuiInputText:function(){return tZ},WuiLink:function(){return t6},WuiListAccordion:function(){return rX},WuiListContent:function(){return r0},WuiListItem:function(){return t9},WuiListNetwork:function(){return r6},WuiListWallet:function(){return rf},WuiListWalletTransaction:function(){return r3},WuiLoadingHexagon:function(){return eP},WuiLoadingSpinner:function(){return eI},WuiLoadingThumbnail:function(){return eM},WuiLogo:function(){return rm},WuiLogoSelect:function(){return rv},WuiNetworkButton:function(){return rC},WuiNetworkImage:function(){return tP},WuiNoticeCard:function(){return rV},WuiOtp:function(){return rS},WuiQrCode:function(){return rR},WuiSearchBar:function(){return r$},WuiSeparator:function(){return nr},WuiShimmer:function(){return eL},WuiSnackbar:function(){return rj},WuiTabs:function(){return rU},WuiTag:function(){return ru},WuiText:function(){return eH},WuiTooltip:function(){return rF},WuiTransactionListItem:function(){return ro},WuiTransactionListItemLoader:function(){return rs},WuiTransactionVisual:function(){return rr},WuiVisual:function(){return e8},WuiVisualThumbnail:function(){return rZ},WuiWalletImage:function(){return tp},customElement:function(){return m},initializeTheming:function(){return c},setColorTheme:function(){return u},setThemeVariables:function(){return d}});var a,s,l=r(77996);function c(e,t){n=document.createElement("style"),i=document.createElement("style"),o=document.createElement("style"),n.textContent=h(e).core.cssText,i.textContent=h(e).dark.cssText,o.textContent=h(e).light.cssText,document.head.appendChild(n),document.head.appendChild(i),document.head.appendChild(o),u(t)}function u(e){i&&o&&("light"===e?(i.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),i.media="enabled"))}function d(e){n&&i&&o&&(n.textContent=h(e).core.cssText,i.textContent=h(e).dark.cssText,o.textContent=h(e).light.cssText)}function h(e){return{core:l.iv`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,l.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,l.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,l.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,l.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,l.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:l.iv`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:l.iv`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let f=l.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,p=l.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,g=l.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function m(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var y=l.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let w=class extends l.oi{render(){return l.dy`<slot></slot>`}};w.styles=[f,y],w=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([m("wui-card")],w);var v=r(37380),b=l.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let x=l.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,C=l.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,_=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,E=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,k=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,A=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,O=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,P=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,T=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,R=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,I=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,$=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,N=l.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,M=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,j=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,D=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,L=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,U=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,B=l.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,z=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,F=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,W=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,H=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Z=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Y=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,G=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,q=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,X=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,J=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Q=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ee=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,et=l.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,er=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,en=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ei=l.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,eo=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ea=l.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,es=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,el=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ec=l.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,eu=l.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ed=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,eh=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ef=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ep=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,eg=l.YP`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,em=l.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,ey=l.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,ew=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ev=l.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eb=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,ex=l.YP`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var eC=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e_={allWallets:x,alpha:ex,appStore:C,chromeStore:N,apple:_,arrowBottom:E,arrowLeft:S,arrowRight:k,arrowTop:A,browser:O,checkmark:P,chevronBottom:T,chevronLeft:R,chevronRight:I,chevronTop:$,clock:M,close:j,compass:L,coinPlaceholder:D,copy:U,cursor:B,desktop:z,disconnect:F,discord:W,etherscan:H,extension:Z,externalLink:Y,facebook:G,filters:V,github:q,google:K,helpCircle:X,infoCircle:J,mail:Q,mobile:ee,networkPlaceholder:et,nftPlaceholder:er,off:en,playStore:ei,qrCode:eo,refresh:ea,search:es,swapHorizontal:el,swapHorizontalBold:ec,swapVertical:eu,telegram:ed,twitch:eh,twitter:ef,twitterIcon:ep,verify:eg,verifyFilled:em,wallet:ew,walletConnect:ev,walletPlaceholder:ey,warningCircle:eb},eE=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,l.dy`${e_[this.name]}`}};eE.styles=[f,g,b],eC([(0,v.Cb)()],eE.prototype,"size",void 0),eC([(0,v.Cb)()],eE.prototype,"name",void 0),eC([(0,v.Cb)()],eE.prototype,"color",void 0),eE=eC([m("wui-icon")],eE);var eS=l.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,ek=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eA=class extends l.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return l.dy`<img src=${this.src} alt=${this.alt} />`}};eA.styles=[f,g,eS],ek([(0,v.Cb)()],eA.prototype,"src",void 0),ek([(0,v.Cb)()],eA.prototype,"alt",void 0),eA=ek([m("wui-image")],eA);var eO=l.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let eP=class extends l.oi{render(){return l.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eP.styles=[f,eO],eP=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([m("wui-loading-hexagon")],eP);var eT=l.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eR=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eI=class extends l.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,l.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eI.styles=[f,eT],eR([(0,v.Cb)()],eI.prototype,"color",void 0),eR([(0,v.Cb)()],eI.prototype,"size",void 0),eI=eR([m("wui-loading-spinner")],eI);var e$=l.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eN=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eM=class extends l.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return l.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};eM.styles=[f,e$],eN([(0,v.Cb)({type:Number})],eM.prototype,"radius",void 0),eM=eN([m("wui-loading-thumbnail")],eM);var ej=l.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,eD=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eL=class extends l.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,l.dy`<slot></slot>`}};eL.styles=[ej],eD([(0,v.Cb)()],eL.prototype,"width",void 0),eD([(0,v.Cb)()],eL.prototype,"height",void 0),eD([(0,v.Cb)()],eL.prototype,"borderRadius",void 0),eL=eD([m("wui-shimmer")],eL);var eU=r(69699),eB=r(48476);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ez=(0,eB.XM)(class extends eB.Xe{constructor(e){if(super(e),e.type!==eB.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return eU.Jb}});var eF=l.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,eW=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eH=class extends l.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l.dy`<slot class=${ez(e)}></slot>`}};eH.styles=[f,eF],eW([(0,v.Cb)()],eH.prototype,"variant",void 0),eW([(0,v.Cb)()],eH.prototype,"color",void 0),eW([(0,v.Cb)()],eH.prototype,"align",void 0),eH=eW([m("wui-text")],eH);let eZ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,eY=l.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,eG=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,eV=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eq=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eK=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eX=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eJ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,eQ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,e0=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,e1=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e2=l.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,e3=l.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var e5=l.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,e4=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e6={browser:eZ,dao:eY,defi:eG,defiAlt:eV,eth:eq,layers:eK,lock:eX,login:eJ,network:eQ,nft:e0,noun:e1,profile:e2,system:e3},e8=class extends l.oi{constructor(){super(...arguments),this.name="browser"}render(){return l.dy`${e6[this.name]}`}};e8.styles=[f,e5],e4([(0,v.Cb)()],e8.prototype,"name",void 0),e8=e4([m("wui-visual")],e8);var e7=r(35592);let e9={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){let t=new URL(e);return t.hostname},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),r=t.substring(0,6),n=this.hexToRgb(r),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=Number(i?.replace("px","")),a=100-3*o,s=`${a}% ${a}% at 65% 40%`,l=[];for(let e=0;e<5;e+=1){let t=this.tintColor(n,.15*e);l.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var te=l.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,tt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tr=class extends l.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e9.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e9.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e9.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e9.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e9.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e9.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e9.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e9.getSpacingStyles(this.margin,3)};
    `,l.dy`<slot></slot>`}};tr.styles=[f,te],tt([(0,v.Cb)()],tr.prototype,"flexDirection",void 0),tt([(0,v.Cb)()],tr.prototype,"flexWrap",void 0),tt([(0,v.Cb)()],tr.prototype,"flexBasis",void 0),tt([(0,v.Cb)()],tr.prototype,"flexGrow",void 0),tt([(0,v.Cb)()],tr.prototype,"flexShrink",void 0),tt([(0,v.Cb)()],tr.prototype,"alignItems",void 0),tt([(0,v.Cb)()],tr.prototype,"justifyContent",void 0),tt([(0,v.Cb)()],tr.prototype,"columnGap",void 0),tt([(0,v.Cb)()],tr.prototype,"rowGap",void 0),tt([(0,v.Cb)()],tr.prototype,"gap",void 0),tt([(0,v.Cb)()],tr.prototype,"padding",void 0),tt([(0,v.Cb)()],tr.prototype,"margin",void 0),tr=tt([m("wui-flex")],tr);var tn=l.iv`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,ti=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let to=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return l.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=e9.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};to.styles=[f,tn],ti([(0,v.Cb)()],to.prototype,"imageSrc",void 0),ti([(0,v.Cb)()],to.prototype,"alt",void 0),ti([(0,v.Cb)()],to.prototype,"address",void 0),to=ti([m("wui-avatar")],to);var ta=l.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,ts=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tl=class extends l.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,n="gray"===this.background,i="opaque"===this.background,o="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i,a=`var(--wui-color-${this.backgroundColor})`;return o?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${o||n?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};tl.styles=[f,p,ta],ts([(0,v.Cb)()],tl.prototype,"size",void 0),ts([(0,v.Cb)()],tl.prototype,"backgroundColor",void 0),ts([(0,v.Cb)()],tl.prototype,"iconColor",void 0),ts([(0,v.Cb)()],tl.prototype,"iconSize",void 0),ts([(0,v.Cb)()],tl.prototype,"background",void 0),ts([(0,v.Cb)({type:Boolean})],tl.prototype,"border",void 0),ts([(0,v.Cb)()],tl.prototype,"borderColor",void 0),ts([(0,v.Cb)()],tl.prototype,"icon",void 0),tl=ts([m("wui-icon-box")],tl);var tc=l.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,tu=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let td=class extends l.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return l.dy`
      <button
        ?disabled=${this.disabled}
        class=${(0,e7.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${e9.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return l.dy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?l.dy`<wui-image src=${this.networkSrc}></wui-image>`:l.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return l.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};td.styles=[f,p,tc],tu([(0,v.Cb)()],td.prototype,"networkSrc",void 0),tu([(0,v.Cb)()],td.prototype,"avatarSrc",void 0),tu([(0,v.Cb)()],td.prototype,"balance",void 0),tu([(0,v.Cb)({type:Boolean})],td.prototype,"isUnsupportedChain",void 0),tu([(0,v.Cb)({type:Boolean})],td.prototype,"disabled",void 0),tu([(0,v.Cb)({type:Boolean})],td.prototype,"isProfileName",void 0),tu([(0,v.Cb)()],td.prototype,"address",void 0),tu([(0,v.Cb)()],td.prototype,"charsStart",void 0),tu([(0,v.Cb)()],td.prototype,"charsEnd",void 0),td=tu([m("wui-account-button")],td);var th=l.iv`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`,tf=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tp=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tp.styles=[f,th],tf([(0,v.Cb)()],tp.prototype,"size",void 0),tf([(0,v.Cb)()],tp.prototype,"name",void 0),tf([(0,v.Cb)()],tp.prototype,"imageSrc",void 0),tf([(0,v.Cb)()],tp.prototype,"walletIcon",void 0),tf([(0,v.Cb)({type:Boolean})],tp.prototype,"installed",void 0),tf([(0,v.Cb)()],tp.prototype,"badgeSize",void 0),tp=tf([m("wui-wallet-image")],tp);var tg=l.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,tm=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ty=class extends l.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return l.dy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>l.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,e7.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>l.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ty.styles=[f,tg],tm([(0,v.Cb)({type:Array})],ty.prototype,"walletImages",void 0),ty=tm([m("wui-all-wallets-image")],ty);var tw=l.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,tv=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tb=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return l.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l.dy``}};tb.styles=[f,p,tw],tv([(0,v.Cb)()],tb.prototype,"size",void 0),tv([(0,v.Cb)({type:Boolean})],tb.prototype,"disabled",void 0),tv([(0,v.Cb)({type:Boolean})],tb.prototype,"fullWidth",void 0),tv([(0,v.Cb)({type:Boolean})],tb.prototype,"loading",void 0),tv([(0,v.Cb)()],tb.prototype,"variant",void 0),tv([(0,v.Cb)({type:Boolean})],tb.prototype,"hasIconLeft",void 0),tv([(0,v.Cb)({type:Boolean})],tb.prototype,"hasIconRight",void 0),tb=tv([m("wui-button")],tb);let tx=l.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tC=l.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,t_=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tE=class extends l.oi{constructor(){super(...arguments),this.type="wallet"}render(){return l.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?l.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tx}`:l.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tE.styles=[f,p,tC],t_([(0,v.Cb)()],tE.prototype,"type",void 0),tE=t_([m("wui-card-select-loader")],tE);let tS=l.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,tk=l.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tA=l.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,tO=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tP=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,l.dy`${this.templateVisual()} ${({sm:tS,md:tx,lg:tk})[this.size]}`}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tP.styles=[f,tA],tO([(0,v.Cb)()],tP.prototype,"size",void 0),tO([(0,v.Cb)()],tP.prototype,"name",void 0),tO([(0,v.Cb)()],tP.prototype,"imageSrc",void 0),tO([(0,v.Cb)({type:Boolean})],tP.prototype,"selected",void 0),tP=tO([m("wui-network-image")],tP);var tT=l.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,tR=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tI=class extends l.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return l.dy`
      <button data-selected=${(0,e7.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?l.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,e7.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:l.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,e7.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};tI.styles=[f,p,tT],tR([(0,v.Cb)()],tI.prototype,"name",void 0),tR([(0,v.Cb)()],tI.prototype,"type",void 0),tR([(0,v.Cb)()],tI.prototype,"imageSrc",void 0),tR([(0,v.Cb)({type:Boolean})],tI.prototype,"disabled",void 0),tR([(0,v.Cb)({type:Boolean})],tI.prototype,"selected",void 0),tR([(0,v.Cb)({type:Boolean})],tI.prototype,"installed",void 0),tI=tR([m("wui-card-select")],tI);var t$=l.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`,tN=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tM=class extends l.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return l.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:e9.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tM.styles=[f,p,t$],tN([(0,v.Cb)()],tM.prototype,"variant",void 0),tN([(0,v.Cb)()],tM.prototype,"imageSrc",void 0),tN([(0,v.Cb)({type:Boolean})],tM.prototype,"disabled",void 0),tN([(0,v.Cb)()],tM.prototype,"icon",void 0),tN([(0,v.Cb)()],tM.prototype,"href",void 0),tN([(0,v.Cb)()],tM.prototype,"text",void 0),tM=tN([m("wui-chip")],tM);var tj=l.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,tD=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tL=class extends l.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return l.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tL.styles=[f,p,tj],tD([(0,v.Cb)()],tL.prototype,"size",void 0),tD([(0,v.Cb)({type:Boolean})],tL.prototype,"loading",void 0),tL=tD([m("wui-connect-button")],tL);var tU=l.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,tB=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tz=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tz.styles=[f,p,tU],tB([(0,v.Cb)({type:Boolean})],tz.prototype,"disabled",void 0),tB([(0,v.Cb)()],tz.prototype,"label",void 0),tB([(0,v.Cb)()],tz.prototype,"buttonLabel",void 0),tz=tB([m("wui-cta-button")],tz);var tF=r(69178),tW=l.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,tH=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tZ=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=(0,tF.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){let e=`wui-size-${this.size}`;return l.dy` ${this.templateIcon()}
      <input
        ${(0,tF.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,e7.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,e7.o)(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?l.dy`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tZ.styles=[f,p,tW],tH([(0,v.Cb)()],tZ.prototype,"size",void 0),tH([(0,v.Cb)()],tZ.prototype,"icon",void 0),tH([(0,v.Cb)({type:Boolean})],tZ.prototype,"disabled",void 0),tH([(0,v.Cb)()],tZ.prototype,"placeholder",void 0),tH([(0,v.Cb)()],tZ.prototype,"type",void 0),tH([(0,v.Cb)()],tZ.prototype,"keyHint",void 0),tH([(0,v.Cb)()],tZ.prototype,"value",void 0),tZ=tH([m("wui-input-text")],tZ);var tY=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,tG=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tV=class extends l.oi{constructor(){super(...arguments),this.disabled=!1}render(){return l.dy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};tV.styles=[f,tY],tG([(0,v.Cb)()],tV.prototype,"errorMessage",void 0),tG([(0,v.Cb)({type:Boolean})],tV.prototype,"disabled",void 0),tG([(0,v.Cb)()],tV.prototype,"value",void 0),tV=tG([m("wui-email-input")],tV);var tq=l.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,tK=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tX=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};tX.styles=[f,p,g,tq],tK([(0,v.Cb)()],tX.prototype,"size",void 0),tK([(0,v.Cb)({type:Boolean})],tX.prototype,"disabled",void 0),tK([(0,v.Cb)()],tX.prototype,"icon",void 0),tK([(0,v.Cb)()],tX.prototype,"iconColor",void 0),tX=tK([m("wui-icon-link")],tX);var tJ=l.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,tQ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t0=class extends l.oi{constructor(){super(...arguments),this.icon="copy"}render(){return l.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};t0.styles=[f,p,tJ],tQ([(0,v.Cb)()],t0.prototype,"icon",void 0),t0=tQ([m("wui-input-element")],t0);var t1=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`,t2=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t3=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};t3.styles=[f,p,t1],t2([(0,v.Cb)({type:Boolean})],t3.prototype,"disabled",void 0),t2([(0,v.Cb)({type:String})],t3.prototype,"value",void 0),t3=t2([m("wui-input-numeric")],t3);var t5=l.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,t4=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t6=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};t6.styles=[f,p,t5],t4([(0,v.Cb)({type:Boolean})],t6.prototype,"disabled",void 0),t4([(0,v.Cb)()],t6.prototype,"color",void 0),t6=t4([m("wui-link")],t6);var t8=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,t7=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t9=class extends l.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,e7.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return l.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return l.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l.dy``}chevronTemplate(){return this.chevron?l.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};t9.styles=[f,p,t8],t7([(0,v.Cb)()],t9.prototype,"icon",void 0),t7([(0,v.Cb)()],t9.prototype,"iconSize",void 0),t7([(0,v.Cb)()],t9.prototype,"variant",void 0),t7([(0,v.Cb)()],t9.prototype,"iconVariant",void 0),t7([(0,v.Cb)({type:Boolean})],t9.prototype,"disabled",void 0),t7([(0,v.Cb)()],t9.prototype,"imageSrc",void 0),t7([(0,v.Cb)()],t9.prototype,"alt",void 0),t7([(0,v.Cb)({type:Boolean})],t9.prototype,"chevron",void 0),t7([(0,v.Cb)({type:Boolean})],t9.prototype,"loading",void 0),t9=t7([m("wui-list-item")],t9),(a=s||(s={})).approve="approved",a.bought="bought",a.borrow="borrowed",a.burn="burnt",a.cancel="canceled",a.claim="claimed",a.deploy="deployed",a.deposit="deposited",a.execute="executed",a.mint="minted",a.receive="received",a.repay="repaid",a.send="sent",a.sell="sold",a.stake="staked",a.trade="swapped",a.unstake="unstaked",a.withdraw="withdrawn";var re=l.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,rt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rr=class extends l.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",n=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,l.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type,n=2===this.images.length;return n&&(e?.url||t?.url)?l.dy`<div class="swap-images-container">
        ${e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?l.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?l.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?l.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};rr.styles=[re],rt([(0,v.Cb)()],rr.prototype,"type",void 0),rt([(0,v.Cb)()],rr.prototype,"status",void 0),rt([(0,v.Cb)()],rr.prototype,"direction",void 0),rt([(0,v.Cb)({type:Boolean})],rr.prototype,"onlyDirectionIcon",void 0),rt([(0,v.Cb)({type:Array})],rr.prototype,"images",void 0),rt([(0,v.Cb)({type:Object})],rr.prototype,"secondImage",void 0),rr=rt([m("wui-transaction-visual")],rr);var rn=l.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,ri=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ro=class extends l.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return l.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,e7.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,e7.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${s[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?l.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?l.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};ro.styles=[f,rn],ri([(0,v.Cb)()],ro.prototype,"type",void 0),ri([(0,v.Cb)({type:Array})],ro.prototype,"descriptions",void 0),ri([(0,v.Cb)()],ro.prototype,"date",void 0),ri([(0,v.Cb)({type:Boolean})],ro.prototype,"onlyDirectionIcon",void 0),ri([(0,v.Cb)()],ro.prototype,"status",void 0),ri([(0,v.Cb)()],ro.prototype,"direction",void 0),ri([(0,v.Cb)({type:Array})],ro.prototype,"images",void 0),ro=ri([m("wui-transaction-list-item")],ro);var ra=l.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let rs=class extends l.oi{render(){return l.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};rs.styles=[f,ra],rs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([m("wui-transaction-list-item-loader")],rs);var rl=l.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,rc=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ru=class extends l.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,l.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ru.styles=[f,rl],rc([(0,v.Cb)()],ru.prototype,"variant",void 0),ru=rc([m("wui-tag")],ru);var rd=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,rh=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rf=class extends l.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:l.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?l.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rf.styles=[f,p,rd],rh([(0,v.Cb)({type:Array})],rf.prototype,"walletImages",void 0),rh([(0,v.Cb)()],rf.prototype,"imageSrc",void 0),rh([(0,v.Cb)()],rf.prototype,"name",void 0),rh([(0,v.Cb)()],rf.prototype,"tagLabel",void 0),rh([(0,v.Cb)()],rf.prototype,"tagVariant",void 0),rh([(0,v.Cb)()],rf.prototype,"icon",void 0),rh([(0,v.Cb)()],rf.prototype,"walletIcon",void 0),rh([(0,v.Cb)({type:Boolean})],rf.prototype,"installed",void 0),rh([(0,v.Cb)({type:Boolean})],rf.prototype,"disabled",void 0),rh([(0,v.Cb)({type:Boolean})],rf.prototype,"showAllWallets",void 0),rf=rh([m("wui-list-wallet")],rf);var rp=l.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,rg=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rm=class extends l.oi{constructor(){super(...arguments),this.logo="google"}render(){return l.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rm.styles=[f,rp],rg([(0,v.Cb)()],rm.prototype,"logo",void 0),rm=rg([m("wui-logo")],rm);var ry=l.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rw=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rv=class extends l.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rv.styles=[f,p,ry],rw([(0,v.Cb)()],rv.prototype,"logo",void 0),rw([(0,v.Cb)({type:Boolean})],rv.prototype,"disabled",void 0),rv=rw([m("wui-logo-select")],rv);var rb=l.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,rx=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rC=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l.dy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:l.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rC.styles=[f,p,rb],rx([(0,v.Cb)()],rC.prototype,"imageSrc",void 0),rx([(0,v.Cb)({type:Boolean})],rC.prototype,"isUnsupportedChain",void 0),rx([(0,v.Cb)({type:Boolean})],rC.prototype,"disabled",void 0),rC=rx([m("wui-network-button")],rC);var r_=l.iv`
  :host {
    position: relative;
    display: block;
  }
`,rE=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rS=class extends l.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>{let t=this.values.slice(0,e);return t.every(e=>""!==e)},this.handleKeyDown=(e,t)=>{let r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):this.updateInput(n,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return l.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let n=this.numerics[t],i=e||(n?this.getInputElement(n):void 0);i&&(i.value=r,this.values=this.values.map((e,n)=>n===t?r:e))}handleInput(e,t){let r=e.target,n=this.getInputElement(r);if(n){let r=n.value;if("insertFromPaste"===e.inputType)this.handlePaste(n,r,t);else{let i=e9.isNumber(r);i&&e.data?(this.updateInput(n,t,e.data),this.focusInputField("next",t)):this.updateInput(n,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let n=t[0],i=n&&e9.isNumber(n);if(i){this.updateInput(e,r,n);let i=t.substring(1);if(r+1<this.length&&i.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};rS.styles=[f,r_],rE([(0,v.Cb)({type:Number})],rS.prototype,"length",void 0),rE([(0,v.Cb)({type:String})],rS.prototype,"otp",void 0),rE([(0,v.SB)()],rS.prototype,"values",void 0),rS=rE([m("wui-otp")],rS);var rk=r(92592);function rA(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let rO={generate(e,t,r){let n="#141414",i=[],o=function(e,t){let r=Array.prototype.slice.call(rk.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,c=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);i.push(l.YP`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let c=Math.floor((r+25)/a),u=o.length/2-c/2,d=o.length/2+c/2-1,h=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>u&&t<d&&r>u&&r<d||h.push([t*a+a/2,r*a+a/2])})});let f={};return h.forEach(([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]}),Object.entries(f).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!rA(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{i.push(l.YP`<circle cx=${e} cy=${t} fill=${n} r=${a/2.5} />`)})}),Object.entries(f).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>rA(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>rA(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{i.push(l.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),i}};var rP=l.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,rT=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rR=class extends l.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,l.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return l.YP`
      <svg height=${e} width=${e}>
        ${rO.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:l.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rR.styles=[f,rP],rT([(0,v.Cb)()],rR.prototype,"uri",void 0),rT([(0,v.Cb)({type:Number})],rR.prototype,"size",void 0),rT([(0,v.Cb)()],rR.prototype,"theme",void 0),rT([(0,v.Cb)()],rR.prototype,"imageSrc",void 0),rT([(0,v.Cb)()],rR.prototype,"alt",void 0),rR=rT([m("wui-qr-code")],rR);var rI=l.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let r$=class extends l.oi{constructor(){super(...arguments),this.inputComponentRef=(0,tF.V)()}render(){return l.dy`
      <wui-input-text
        ${(0,tF.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};r$.styles=[f,rI],r$=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([m("wui-search-bar")],r$);var rN=l.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,rM=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rj=class extends l.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return l.dy`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rj.styles=[f,rN],rM([(0,v.Cb)()],rj.prototype,"backgroundColor",void 0),rM([(0,v.Cb)()],rj.prototype,"iconColor",void 0),rM([(0,v.Cb)()],rj.prototype,"icon",void 0),rM([(0,v.Cb)()],rj.prototype,"message",void 0),rj=rM([m("wui-snackbar")],rj);var rD=l.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,rL=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rU=class extends l.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return l.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),a=n?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,n.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};rU.styles=[f,p,rD],rL([(0,v.Cb)({type:Array})],rU.prototype,"tabs",void 0),rL([(0,v.Cb)()],rU.prototype,"onTabChange",void 0),rL([(0,v.Cb)({type:Array})],rU.prototype,"buttons",void 0),rL([(0,v.Cb)({type:Boolean})],rU.prototype,"disabled",void 0),rL([(0,v.SB)()],rU.prototype,"activeTab",void 0),rL([(0,v.SB)()],rU.prototype,"localTabWidth",void 0),rL([(0,v.SB)()],rU.prototype,"isDense",void 0),rU=rL([m("wui-tabs")],rU);var rB=l.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,rz=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rF=class extends l.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return l.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rF.styles=[f,p,rB],rz([(0,v.Cb)()],rF.prototype,"placement",void 0),rz([(0,v.Cb)()],rF.prototype,"message",void 0),rF=rz([m("wui-tooltip")],rF);var rW=l.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,rH=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rZ=class extends l.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,l.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rZ.styles=[f,rW],rH([(0,v.Cb)()],rZ.prototype,"imageSrc",void 0),rH([(0,v.Cb)()],rZ.prototype,"alt",void 0),rH([(0,v.Cb)({type:Boolean})],rZ.prototype,"borderRadiusFull",void 0),rZ=rH([m("wui-visual-thumbnail")],rZ);var rY=l.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`,rG=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rV=class extends l.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};rV.styles=[f,p,rY],rG([(0,v.Cb)()],rV.prototype,"label",void 0),rG([(0,v.Cb)()],rV.prototype,"description",void 0),rG([(0,v.Cb)()],rV.prototype,"icon",void 0),rV=rG([m("wui-notice-card")],rV);var rq=l.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,rK=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rX=class extends l.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{let e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;let t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}},0)}render(){return l.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?l.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};rX.styles=[f,p,rq],rK([(0,v.Cb)()],rX.prototype,"textTitle",void 0),rK([(0,v.Cb)()],rX.prototype,"overflowedContent",void 0),rX=rK([m("wui-list-accordion")],rX);var rJ=l.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,rQ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r0=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r0.styles=[f,p,rJ],rQ([(0,v.Cb)()],r0.prototype,"imageSrc",void 0),rQ([(0,v.Cb)()],r0.prototype,"textTitle",void 0),rQ([(0,v.Cb)()],r0.prototype,"textValue",void 0),r0=rQ([m("wui-list-content")],r0);var r1=l.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,r2=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r3=class extends l.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return l.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          @click=${this.onExplorer.bind(this)}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?l.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}onExplorer(){this.addressExplorerUrl&&window.open(this.addressExplorerUrl,"_blank","noreferrer noopener")}};r3.styles=[f,p,r1],r2([(0,v.Cb)()],r3.prototype,"amount",void 0),r2([(0,v.Cb)()],r3.prototype,"networkCurreny",void 0),r2([(0,v.Cb)()],r3.prototype,"networkImageUrl",void 0),r2([(0,v.Cb)()],r3.prototype,"receiverAddress",void 0),r2([(0,v.Cb)()],r3.prototype,"addressExplorerUrl",void 0),r3=r2([m("wui-list-wallet-transaction")],r3);var r5=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,r4=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r6=class extends l.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?l.dy`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:l.dy`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};r6.styles=[f,p,r5],r4([(0,v.Cb)()],r6.prototype,"imageSrc",void 0),r4([(0,v.Cb)()],r6.prototype,"name",void 0),r4([(0,v.Cb)({type:Boolean})],r6.prototype,"disabled",void 0),r6=r4([m("wui-list-network")],r6);var r8=l.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,r7=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r9=class extends l.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e9.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e9.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e9.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e9.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e9.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e9.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e9.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e9.getSpacingStyles(this.margin,3)};
    `,l.dy`<slot></slot>`}};r9.styles=[f,r8],r7([(0,v.Cb)()],r9.prototype,"gridTemplateRows",void 0),r7([(0,v.Cb)()],r9.prototype,"gridTemplateColumns",void 0),r7([(0,v.Cb)()],r9.prototype,"justifyItems",void 0),r7([(0,v.Cb)()],r9.prototype,"alignItems",void 0),r7([(0,v.Cb)()],r9.prototype,"justifyContent",void 0),r7([(0,v.Cb)()],r9.prototype,"alignContent",void 0),r7([(0,v.Cb)()],r9.prototype,"columnGap",void 0),r7([(0,v.Cb)()],r9.prototype,"rowGap",void 0),r7([(0,v.Cb)()],r9.prototype,"gap",void 0),r7([(0,v.Cb)()],r9.prototype,"padding",void 0),r7([(0,v.Cb)()],r9.prototype,"margin",void 0),r9=r7([m("wui-grid")],r9);var ne=l.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,nt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nr=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return l.dy`${this.template()}`}template(){return this.text?l.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};nr.styles=[f,ne],nt([(0,v.Cb)()],nr.prototype,"text",void 0),nr=nt([m("wui-separator")],nr);var nn=r(88598);let ni=["receive","deposit","borrow","claim"],no=["withdraw","repay","burn"],na={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){let r=nn.E.getYear(),n=this.getMonthName(t),i=e===r?n:`${n} ${e}`;return i},getTransactionImages(e){let[t,r]=e,n=!!t&&e?.every(e=>!!e.nft_info),i=e?.length>1,o=e?.length===2;return o&&!n?[this.getTransactionImage(t),this.getTransactionImage(r)]:i?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:na.getTransactionTransferTokenType(e),url:na.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null,r=!!e?.nft_info,n=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&n&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){let t=e.metadata?.operationType,r=e.transfers,n=e.transfers?.length>0,i=e.transfers?.length>1,o=n&&r?.every(e=>!!e.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!n){let r="send"===t||"receive"===t;return r&&o?[l=e9.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),e9.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status]}if(i)return r.map(e=>this.getTransferDescription(e));let c="";return ni.includes(t)?c="+":no.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){if(!e)return null;let t=this.getQuantityFixedValue(e?.quantity.numeric),r=[t,e?.fungible_info?.symbol].join(" ").trim();return r},getQuantityFixedValue(e){if(!e)return null;let t=parseFloat(e);return t.toFixed(3)}}},5121:function(e,t,r){"use strict";r.d(t,{Z:function(){return eY}});var n,i,o,a={};function s(e,t){return function(){return e.apply(t,arguments)}}r.r(a),r.d(a,{hasBrowserEnv:function(){return eo},hasStandardBrowserEnv:function(){return ea},hasStandardBrowserWebWorkerEnv:function(){return es}});let{toString:l}=Object.prototype,{getPrototypeOf:c}=Object,u=(n=Object.create(null),e=>{let t=l.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())}),d=e=>(e=e.toLowerCase(),t=>u(t)===e),h=e=>t=>typeof t===e,{isArray:f}=Array,p=h("undefined"),g=d("ArrayBuffer"),m=h("string"),y=h("function"),w=h("number"),v=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==u(e))return!1;let t=c(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},x=d("Date"),C=d("File"),_=d("Blob"),E=d("FileList"),S=d("URLSearchParams");function k(e,t,{allOwnKeys:r=!1}={}){let n,i;if(null!=e){if("object"!=typeof e&&(e=[e]),f(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;let o=r?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;for(n=0;n<a;n++)i=o[n],t.call(null,e[i],i,e)}}}function A(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}let O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,P=e=>!p(e)&&e!==O,T=(i="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>i&&e instanceof i),R=d("HTMLFormElement"),I=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),$=d("RegExp"),N=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};k(r,(r,i)=>{let o;!1!==(o=t(r,i,e))&&(n[i]=o||r)}),Object.defineProperties(e,n)},M="abcdefghijklmnopqrstuvwxyz",j="0123456789",D={DIGIT:j,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+j},L=d("AsyncFunction");var U={isArray:f,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=u(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer)},isString:m,isNumber:w,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:b,isUndefined:p,isDate:x,isFile:C,isBlob:_,isRegExp:$,isFunction:y,isStream:e=>v(e)&&y(e.pipe),isURLSearchParams:S,isTypedArray:T,isFileList:E,forEach:k,merge:function e(){let{caseless:t}=P(this)&&this||{},r={},n=(n,i)=>{let o=t&&A(r,i)||i;b(r[o])&&b(n)?r[o]=e(r[o],n):b(n)?r[o]=e({},n):f(n)?r[o]=n.slice():r[o]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&k(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(k(t,(t,n)=>{r&&y(t)?e[n]=s(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,o,a;let s={};if(t=t||{},null==e)return t;do{for(o=(i=Object.getOwnPropertyNames(e)).length;o-- >0;)a=i[o],(!n||n(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=!1!==r&&c(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:d,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!w(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],i=n.call(e);for(;(r=i.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:R,hasOwnProperty:I,hasOwnProp:I,reduceDescriptors:N,freezeMethods:e=>{N(e,(t,r)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(y(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(f(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:A,global:O,isContextDefined:P,ALPHABET:D,generateString:(e=16,t=D.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let i=f(e)?[]:{};return k(e,(e,t)=>{let o=r(e,n+1);p(o)||(i[t]=o)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:L,isThenable:e=>e&&(v(e)||y(e))&&y(e.then)&&y(e.catch)};function B(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}U.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let z=B.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{F[e]={value:e}}),Object.defineProperties(B,F),Object.defineProperty(z,"isAxiosError",{value:!0}),B.from=(e,t,r,n,i,o)=>{let a=Object.create(z);return U.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),B.call(a,e.message,t,r,n,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var W=r(48764).lW;function H(e){return U.isPlainObject(e)||U.isArray(e)}function Z(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function Y(e,t,r){return e?e.concat(t).map(function(e,t){return e=Z(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}let G=U.toFlatObject(U,{},null,function(e){return/^is[A-Z]/.test(e)});var V=function(e,t,r){if(!U.isObject(e))throw TypeError("target must be an object");t=t||new FormData,r=U.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!U.isUndefined(t[e])});let n=r.metaTokens,i=r.visitor||u,o=r.dots,a=r.indexes,s=r.Blob||"undefined"!=typeof Blob&&Blob,l=s&&U.isSpecCompliantForm(t);if(!U.isFunction(i))throw TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!l&&U.isBlob(e))throw new B("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):W.from(e):e}function u(e,r,i){let s=e;if(e&&!i&&"object"==typeof e){if(U.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else{var l;if(U.isArray(e)&&(l=e,U.isArray(l)&&!l.some(H))||(U.isFileList(e)||U.endsWith(r,"[]"))&&(s=U.toArray(e)))return r=Z(r),s.forEach(function(e,n){U.isUndefined(e)||null===e||t.append(!0===a?Y([r],n,o):null===a?r:r+"[]",c(e))}),!1}}return!!H(e)||(t.append(Y(i,r,o),c(e)),!1)}let d=[],h=Object.assign(G,{defaultVisitor:u,convertValue:c,isVisitable:H});if(!U.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!U.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),U.forEach(r,function(r,o){let a=!(U.isUndefined(r)||null===r)&&i.call(t,r,U.isString(o)?o.trim():o,n,h);!0===a&&e(r,n?n.concat(o):[o])}),d.pop()}}(e),t};function q(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function K(e,t){this._pairs=[],e&&V(e,this,t)}let X=K.prototype;function J(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q(e,t,r){let n;if(!t)return e;let i=r&&r.encode||J,o=r&&r.serialize;if(n=o?o(t,r):U.isURLSearchParams(t)?t.toString():new K(t,r).toString(i)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}X.append=function(e,t){this._pairs.push([e,t])},X.toString=function(e){let t=e?function(t){return e.call(this,t,q)}:q;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};class ee{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,function(t){null!==t&&e(t)})}}var et={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},er="undefined"!=typeof URLSearchParams?URLSearchParams:K,en="undefined"!=typeof FormData?FormData:null,ei="undefined"!=typeof Blob?Blob:null;let eo="undefined"!=typeof window&&"undefined"!=typeof document,ea=(o="undefined"!=typeof navigator&&navigator.product,eo&&0>["ReactNative","NativeScript","NS"].indexOf(o)),es="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var el={...a,isBrowser:!0,classes:{URLSearchParams:er,FormData:en,Blob:ei},protocols:["http","https","file","blob","url","data"]},ec=function(e){if(U.isFormData(e)&&U.isFunction(e.entries)){let t={};return U.forEachEntry(e,(e,r)=>{!function e(t,r,n,i){let o=t[i++],a=Number.isFinite(+o),s=i>=t.length;if(o=!o&&U.isArray(n)?n.length:o,s)return U.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!a;n[o]&&U.isObject(n[o])||(n[o]=[]);let l=e(t,r,n[o],i);return l&&U.isArray(n[o])&&(n[o]=function(e){let t,r;let n={},i=Object.keys(e),o=i.length;for(t=0;t<o;t++)n[r=i[t]]=e[r];return n}(n[o])),!a}(U.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};let eu={transitional:et,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=U.isObject(e);o&&U.isHTMLForm(e)&&(e=new FormData(e));let a=U.isFormData(e);if(a)return i&&i?JSON.stringify(ec(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var s,l;return(s=e,l=this.formSerializer,V(s,new el.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return el.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},l))).toString()}if((r=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return V(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),function(e,t,r){if(U.isString(e))try{return(0,JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eu.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&U.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw B.from(e,B.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:el.classes.FormData,Blob:el.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],e=>{eu.headers[e]={}});let ed=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var eh=e=>{let t,r,n;let i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&ed[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i};let ef=Symbol("internals");function ep(e){return e&&String(e).trim().toLowerCase()}function eg(e){return!1===e||null==e?e:U.isArray(e)?e.map(eg):String(e)}let em=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ey(e,t,r,n,i){if(U.isFunction(n))return n.call(this,t,r);if(i&&(t=r),U.isString(t)){if(U.isString(n))return -1!==t.indexOf(n);if(U.isRegExp(n))return n.test(t)}}class ew{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function i(e,t,r){let i=ep(t);if(!i)throw Error("header name must be a non-empty string");let o=U.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||t]=eg(e))}let o=(e,t)=>U.forEach(e,(e,r)=>i(e,r,t));return U.isPlainObject(e)||e instanceof this.constructor?o(e,t):U.isString(e)&&(e=e.trim())&&!em(e)?o(eh(e),t):null!=e&&i(t,e,r),this}get(e,t){if(e=ep(e)){let r=U.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(U.isFunction(t))return t.call(this,e,r);if(U.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ep(e)){let r=U.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||ey(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function i(e){if(e=ep(e)){let i=U.findKey(r,e);i&&(!t||ey(r,r[i],i,t))&&(delete r[i],n=!0)}}return U.isArray(e)?e.forEach(i):i(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||ey(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return U.forEach(this,(n,i)=>{let o=U.findKey(r,i);if(o){t[o]=eg(n),delete t[i];return}let a=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();a!==i&&delete t[i],t[a]=eg(n),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return U.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&U.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[ef]=this[ef]={accessors:{}},r=t.accessors,n=this.prototype;function i(e){let t=ep(e);r[t]||(!function(e,t){let r=U.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(n,e),r[t]=!0)}return U.isArray(e)?e.forEach(i):i(e),this}}function ev(e,t){let r=this||eu,n=t||r,i=ew.from(n.headers),o=n.data;return U.forEach(e,function(e){o=e.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function eb(e){return!!(e&&e.__CANCEL__)}function ex(e,t,r){B.call(this,null==e?"canceled":e,B.ERR_CANCELED,t,r),this.name="CanceledError"}ew.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.reduceDescriptors(ew.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),U.freezeMethods(ew),U.inherits(ex,B,{__CANCEL__:!0});var eC=el.hasStandardBrowserEnv?{write(e,t,r,n,i,o){let a=[e+"="+encodeURIComponent(t)];U.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),U.isString(n)&&a.push("path="+n),U.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function e_(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var eE=el.hasStandardBrowserEnv?function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){let n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){let r=U.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},eS=function(e,t){let r;e=e||10;let n=Array(e),i=Array(e),o=0,a=0;return t=void 0!==t?t:1e3,function(s){let l=Date.now(),c=i[a];r||(r=l),n[o]=s,i[o]=l;let u=a,d=0;for(;u!==o;)d+=n[u++],u%=e;if((o=(o+1)%e)===a&&(a=(a+1)%e),l-r<t)return;let h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function ek(e,t){let r=0,n=eS(50,250);return i=>{let o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-r,l=n(s);r=o;let c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}let eA="undefined"!=typeof XMLHttpRequest;var eO=eA&&function(e){return new Promise(function(t,r){let n,i,o=e.data,a=ew.from(e.headers).normalize(),{responseType:s,withXSRFToken:l}=e;function c(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}if(U.isFormData(o)){if(el.hasStandardBrowserEnv||el.hasStandardBrowserWebWorkerEnv)a.setContentType(!1);else if(!1!==(i=a.getContentType())){let[e,...t]=i?i.split(";").map(e=>e.trim()).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}}let u=new XMLHttpRequest;if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(t+":"+r))}let d=e_(e.baseURL,e.url);function h(){if(!u)return;let n=ew.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?u.response:u.responseText,o={data:i,status:u.status,statusText:u.statusText,headers:n,config:e,request:u};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new B("Request failed with status code "+r.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),c()},function(e){r(e),c()},o),u=null}if(u.open(e.method.toUpperCase(),Q(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(h)},u.onabort=function(){u&&(r(new B("Request aborted",B.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new B("Network Error",B.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||et;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new B(t,n.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,u)),u=null},el.hasStandardBrowserEnv&&(l&&U.isFunction(l)&&(l=l(e)),l||!1!==l&&eE(d))){let t=e.xsrfHeaderName&&e.xsrfCookieName&&eC.read(e.xsrfCookieName);t&&a.set(e.xsrfHeaderName,t)}void 0===o&&a.setContentType(null),"setRequestHeader"in u&&U.forEach(a.toJSON(),function(e,t){u.setRequestHeader(t,e)}),U.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",ek(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ek(e.onUploadProgress)),(e.cancelToken||e.signal)&&(n=t=>{u&&(r(!t||t.type?new ex(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let f=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);if(f&&-1===el.protocols.indexOf(f)){r(new B("Unsupported protocol "+f+":",B.ERR_BAD_REQUEST,e));return}u.send(o||null)})};let eP={http:null,xhr:eO};U.forEach(eP,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});let eT=e=>`- ${e}`,eR=e=>U.isFunction(e)||null===e||!1===e;var eI={getAdapter:e=>{let t,r;e=U.isArray(e)?e:[e];let{length:n}=e,i={};for(let o=0;o<n;o++){let n;if(r=t=e[o],!eR(t)&&void 0===(r=eP[(n=String(t)).toLowerCase()]))throw new B(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+o]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new B("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(eT).join("\n"):" "+eT(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:eP};function e$(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ex(null,e)}function eN(e){e$(e),e.headers=ew.from(e.headers),e.data=ev.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=eI.getAdapter(e.adapter||eu.adapter);return t(e).then(function(t){return e$(e),t.data=ev.call(e,e.transformResponse,t),t.headers=ew.from(t.headers),t},function(t){return!eb(t)&&(e$(e),t&&t.response&&(t.response.data=ev.call(e,e.transformResponse,t.response),t.response.headers=ew.from(t.response.headers))),Promise.reject(t)})}let eM=e=>e instanceof ew?e.toJSON():e;function ej(e,t){t=t||{};let r={};function n(e,t,r){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:r},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function i(e,t,r){return U.isUndefined(t)?U.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function o(e,t){if(!U.isUndefined(t))return n(void 0,t)}function a(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,i,o){return o in t?n(r,i):o in e?n(void 0,r):void 0}let l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>i(eM(e),eM(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),function(n){let o=l[n]||i,a=o(e[n],t[n],n);U.isUndefined(a)&&o!==s||(r[n]=a)}),r}let eD="1.6.2",eL={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{eL[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let eU={};eL.transitional=function(e,t,r){function n(e,t){return"[Axios v"+eD+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,i,o)=>{if(!1===e)throw new B(n(i," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!eU[i]&&(eU[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}};var eB={assertOptions:function(e,t,r){if("object"!=typeof e)throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let o=n[i],a=t[o];if(a){let t=e[o],r=void 0===t||a(t,o,e);if(!0!==r)throw new B("option "+o+" must be "+r,B.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new B("Unknown option "+o,B.ERR_BAD_OPTION)}},validators:eL};let ez=eB.validators;class eF{constructor(e){this.defaults=e,this.interceptors={request:new ee,response:new ee}}request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ej(this.defaults,t);let{transitional:i,paramsSerializer:o,headers:a}=t;void 0!==i&&eB.assertOptions(i,{silentJSONParsing:ez.transitional(ez.boolean),forcedJSONParsing:ez.transitional(ez.boolean),clarifyTimeoutError:ez.transitional(ez.boolean)},!1),null!=o&&(U.isFunction(o)?t.paramsSerializer={serialize:o}:eB.assertOptions(o,{encode:ez.function,serialize:ez.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=a&&U.merge(a.common,a[t.method]);a&&U.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=ew.concat(s,a);let l=[],c=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(c=c&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let u=[];this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)});let d=0;if(!c){let e=[eN.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,u),n=e.length,r=Promise.resolve(t);d<n;)r=r.then(e[d++],e[d++]);return r}n=l.length;let h=t;for(d=0;d<n;){let e=l[d++],t=l[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{r=eN.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,n=u.length;d<n;)r=r.then(u[d++],u[d++]);return r}getUri(e){e=ej(this.defaults,e);let t=e_(e.baseURL,e.url);return Q(t,e.params,e.paramsSerializer)}}U.forEach(["delete","get","head","options"],function(e){eF.prototype[e]=function(t,r){return this.request(ej(r||{},{method:e,url:t,data:(r||{}).data}))}}),U.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,i){return this.request(ej(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eF.prototype[e]=t(),eF.prototype[e+"Form"]=t(!0)});class eW{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,i){r.reason||(r.reason=new ex(e,n,i),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;let t=new eW(function(t){e=t});return{token:t,cancel:e}}}let eH={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eH).forEach(([e,t])=>{eH[t]=e});let eZ=function e(t){let r=new eF(t),n=s(eF.prototype.request,r);return U.extend(n,eF.prototype,r,{allOwnKeys:!0}),U.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(ej(t,r))},n}(eu);eZ.Axios=eF,eZ.CanceledError=ex,eZ.CancelToken=eW,eZ.isCancel=eb,eZ.VERSION=eD,eZ.toFormData=V,eZ.AxiosError=B,eZ.Cancel=eZ.CanceledError,eZ.all=function(e){return Promise.all(e)},eZ.spread=function(e){return function(t){return e.apply(null,t)}},eZ.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},eZ.mergeConfig=ej,eZ.AxiosHeaders=ew,eZ.formToJSON=e=>ec(U.isHTMLForm(e)?new FormData(e):e),eZ.getAdapter=eI.getAdapter,eZ.HttpStatusCode=eH,eZ.default=eZ;var eY=eZ},37380:function(e,t,r){"use strict";r.d(t,{Cb:function(){return a},SB:function(){return s}});var n=r(97286);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},o=(e=i,t,r)=>{let{kind:n,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===n){let{name:n}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=r;return function(r){let i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},35592:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(69699);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=e=>e??n.Ld},69178:function(e,t,r){"use strict";r.d(t,{V:function(){return p},i:function(){return y}});var n=r(69699);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:i}=n._$LH,o=e=>void 0===e.strings;var a=r(48476);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),s(e,t);return!0},l=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,r=0){let n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size){if(t){if(Array.isArray(n))for(let e=r;e<n.length;e++)s(n[e],!1),l(n[e]);else null!=n&&(s(n,!1),l(n))}else s(this,e)}}let h=e=>{e.type==a.pX.CHILD&&(e._$AP??=d,e._$AQ??=u)};class f extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=()=>new g;class g{}let m=new WeakMap,y=(0,a.XM)(class extends f{render(e){return n.Ld}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),n.Ld}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=m.get(t);void 0===r&&(r=new WeakMap,m.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?m.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},77996:function(e,t,r){"use strict";r.d(t,{oi:function(){return ef},iv:function(){return c},dy:function(){return V},YP:function(){return q},$m:function(){return l}}),r(97286),r(69699);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new s(r,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:y}=Object,w=globalThis,v=w.trustedTypes,b=v?v.emptyScript:"",x=w.reactiveElementPolyfillSupport,C=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&f(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,t=[...g(e),...m(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[C("elementProperties")]=new Map,k[C("finalized")]=new Map,x?.({ReactiveElement:k}),(w.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let A=globalThis,O=A.trustedTypes,P=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,I="?"+R,$=`<${I}>`,N=document,M=()=>N.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,L=e=>D(e)||"function"==typeof e?.[Symbol.iterator],U="[ 	\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,W=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,Z=/"/g,Y=/^(?:script|style|textarea|title)$/i,G=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),V=G(1),q=G(2),K=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),J=new WeakMap,Q=N.createTreeWalker(N,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}let et=(e,t)=>{let r=e.length-1,n=[],i,o=2===t?"<svg>":"",a=B;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===B?"!--"===l[1]?a=z:void 0!==l[1]?a=F:void 0!==l[2]?(Y.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=i??B,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?W:'"'===l[3]?Z:H):a===Z||a===H?a=W:a===z||a===F?a=B:(a=W,i=void 0);let d=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===B?r+$:c>=0?(n.push(s),r.slice(0,c)+T+r.slice(c)+R+d):r+R+(-2===c?t:d)}return[ee(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class er{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0,a=e.length-1,s=this.parts,[l,c]=et(e,t);if(this.el=er.createElement(l,r),Q.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Q.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(T)){let t=c[o++],r=n.getAttribute(e).split(R),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?es:"?"===a[1]?el:"@"===a[1]?ec:ea}),n.removeAttribute(e)}else e.startsWith(R)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(Y.test(n.tagName)){let e=n.textContent.split(R),t=e.length-1;if(t>0){n.textContent=O?O.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],M()),Q.nextNode(),s.push({type:2,index:++i});n.append(e[t],M())}}}else if(8===n.nodeType){if(n.data===I)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(R,e+1));)s.push({type:7,index:i}),e+=R.length-1}}i++}}static createElement(e,t){let r=N.createElement("template");return r.innerHTML=e,r}}function en(e,t,r=e,n){if(t===K)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,o=j(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=en(e,i._$AS(e,t.values),i,n)),t}class ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??N).importNode(t,!0);Q.currentNode=n;let i=Q.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new eo(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new eu(i,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(i=Q.nextNode(),o++)}return Q.currentNode=N,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class eo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){j(e=en(this,e,t))?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):L(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==X&&j(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=er.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new ei(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new er(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new eo(this.k(M()),this.k(M()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ea{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(e,t=this,r,n){let i=this.strings,o=!1;if(void 0===i)(o=!j(e=en(this,e,t,0))||e!==this._$AH&&e!==K)&&(this._$AH=e);else{let n,a;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(a=en(this,s[r+n],t,n))===K&&(a=this._$AH[n]),o||=!j(a)||a!==this._$AH[n],a===X?e=X:e!==X&&(e+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!n&&this.O(e)}O(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends ea{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===X?void 0:e}}class el extends ea{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class ec extends ea{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??X)===K)return;let r=this._$AH,n=e===X&&r!==X||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==X&&(r===X||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}let ed=A.litHtmlPolyfillSupport;ed?.(er,eo),(A.litHtmlVersions??=[]).push("3.1.0");let eh=(e,t,r)=>{let n=r?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=r?.renderBefore??null;n._$litPart$=i=new eo(t.insertBefore(M(),e),e,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ef extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eh(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ef._$litElement$=!0,ef.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ef});let ep=globalThis.litElementPolyfillSupport;ep?.({LitElement:ef}),(globalThis.litElementVersions??=[]).push("4.0.2")},97286:function(e,t,r){"use strict";r.d(t,{Ts:function(){return C},Qu:function(){return _}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:f,getOwnPropertyNames:p,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,y=globalThis,w=y.trustedTypes,v=w?w.emptyScript:"",b=y.reactiveElementPolyfillSupport,x=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},_=(e,t)=>!d(e,t),E={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=E){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&h(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties,t=[...p(e),...g(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:C).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??_)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,b?.({ReactiveElement:S}),(y.reactiveElementVersions??=[]).push("2.0.2")},48476:function(e,t,r){"use strict";r.d(t,{XM:function(){return i},Xe:function(){return o},pX:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},69699:function(e,t,r){"use strict";r.d(t,{Jb:function(){return E},Ld:function(){return S},_$LH:function(){return U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,w=/>/g,v=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,_=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=(_(1),_(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),k=new WeakMap,A=u.createTreeWalker(u,129);function O(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let P=(e,t)=>{let r=e.length-1,n=[],i,o=2===t?"<svg>":"",l=m;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(d=l.exec(r)));)f=l.lastIndex,l===m?"!--"===d[1]?l=y:void 0!==d[1]?l=w:void 0!==d[2]?(C.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=v):void 0!==d[3]&&(l=v):l===v?">"===d[0]?(l=i??m,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?v:'"'===d[3]?x:b):l===x||l===b?l=v:l===y||l===w?l=m:(l=v,i=void 0);let p=l===v&&e[t+1].startsWith("/>")?" ":"";o+=l===m?r+c:h>=0?(n.push(u),r.slice(0,h)+a+r.slice(h)+s+p):r+s+(-2===h?t:p)}return[O(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class T{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,c=0,u=e.length-1,h=this.parts,[f,p]=P(e,t);if(this.el=T.createElement(f,r),A.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=A.nextNode())&&h.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(a)){let t=p[c++],r=n.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:i[2],strings:r,ctor:"."===i[1]?M:"?"===i[1]?j:"@"===i[1]?D:N}),n.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),n.removeAttribute(e));if(C.test(n.tagName)){let e=n.textContent.split(s),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],d()),A.nextNode(),h.push({type:2,index:++o});n.append(e[t],d())}}}else if(8===n.nodeType){if(n.data===l)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function R(e,t,r=e,n){if(t===E)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,o=h(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=R(e,i._$AS(e,t.values),i,n)),t}class I{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);A.currentNode=n;let i=A.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new $(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new L(i,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(i=A.nextNode(),o++)}return A.currentNode=u,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ${get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=R(this,e,t))?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==E&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&h(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=T.createElement(O(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new I(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=k.get(e.strings);return void 0===t&&k.set(e.strings,t=new T(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new $(this.k(d()),this.k(d()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,n){let i=this.strings,o=!1;if(void 0===i)(o=!h(e=R(this,e,t,0))||e!==this._$AH&&e!==E)&&(this._$AH=e);else{let n,a;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(a=R(this,s[r+n],t,n))===E&&(a=this._$AH[n]),o||=!h(a)||a!==this._$AH[n],a===S?e=S:e!==S&&(e+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!n&&this.O(e)}O(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends N{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===S?void 0:e}}class j extends N{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class D extends N{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??S)===E)return;let r=this._$AH,n=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}let U={j:a,P:s,A:l,C:1,M:P,L:I,R:p,V:R,D:$,I:N,H:j,N:D,U:M,B:L},B=n.litHtmlPolyfillSupport;B?.(T,$),(n.litHtmlVersions??=[]).push("3.1.0")},44173:function(e,t,r){"use strict";r.d(t,{Ix:function(){return N},Am:function(){return k}});var n=r(67294),i=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(n&&(n+=" "),n+=t);return n};let o=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,s=e=>"function"==typeof e,l=e=>a(e)||s(e)?e:null,c=e=>(0,n.isValidElement)(e)||a(e)||s(e)||o(e);function u(e){let{enter:t,exit:r,appendPosition:i=!1,collapse:o=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:h,playToast:f}=e,p=i?`${t}--${l}`:t,g=i?`${r}--${l}`:r,m=(0,n.useRef)(0);return(0,n.useLayoutEffect)(()=>{let e=d.current,t=p.split(" "),r=n=>{n.target===d.current&&(f(),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===m.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),(0,n.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t,r){void 0===r&&(r=300);let{scrollHeight:n,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=n+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,r)})})}(e,u,a):u()};h||(c?t():(m.current=1,e.className+=` ${g}`,e.addEventListener("animationend",t)))},[h]),n.createElement(n.Fragment,null,s)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let h=new Map,f=[],p=new Set,g=e=>p.forEach(t=>t(e)),m=()=>h.size>0;function y(e,t){var r;if(t)return!(null==(r=h.get(t))||!r.isToastActive(e));let n=!1;return h.forEach(t=>{t.isToastActive(e)&&(n=!0)}),n}function w(e,t){c(e)&&(m()||f.push({content:e,options:t}),h.forEach(r=>{r.buildToast(e,t)}))}function v(e,t){h.forEach(r=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===r.id&&r.toggle(e,null==t?void 0:t.id):r.toggle(e,null==t?void 0:t.id)})}function b(e){let{delay:t,isRunning:r,closeToast:o,type:a="default",hide:l,className:c,style:u,controlledProgress:d,progress:h,rtl:f,isIn:p,theme:g}=e,m=l||d&&0===h,y={...u,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused"};d&&(y.transform=`scaleX(${h})`);let w=i("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":f}),v=s(c)?c({rtl:f,type:a,defaultClassName:w}):i(w,c);return n.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},n.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),n.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:v,style:y,[d&&h>=1?"onTransitionEnd":"onAnimationEnd"]:d&&h<1?null:()=>{p&&o()}}))}let x=1,C=()=>""+x++;function _(e,t){return w(e,t),t.toastId}function E(e,t){return{...t,type:t&&t.type||e,toastId:t&&(a(t.toastId)||o(t.toastId))?t.toastId:C()}}function S(e){return(t,r)=>_(t,E(e,r))}function k(e,t){return _(e,E("default",t))}k.loading=(e,t)=>_(e,E("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),k.promise=function(e,t,r){let n,{pending:i,error:o,success:l}=t;i&&(n=a(i)?k.loading(i,r):k.loading(i.render,{...r,...i}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,i)=>{if(null==t)return void k.dismiss(n);let o={type:e,...c,...r,data:i},s=a(t)?{render:t}:t;return n?k.update(n,{...o,...s}):k(s.render,{...o,...s}),i},d=s(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",o,e)),d},k.success=S("success"),k.info=S("info"),k.error=S("error"),k.warning=S("warning"),k.warn=k.warning,k.dark=(e,t)=>_(e,E("default",{theme:"dark",...t})),k.dismiss=function(e){var t,r;m()?null==e||a(t=e)||o(t)?h.forEach(t=>{t.removeToast(e)}):e&&("containerId"in e||"id"in e)&&((null==(r=h.get(e.containerId))?void 0:r.removeToast(e.id))||h.forEach(t=>{t.removeToast(e.id)})):f=f.filter(t=>null!=e&&t.options.toastId!==e)},k.clearWaitingQueue=function(e){void 0===e&&(e={}),h.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},k.isActive=y,k.update=function(e,t){void 0===t&&(t={});let r=((e,t)=>{var r;let{containerId:n}=t;return null==(r=h.get(n||1))?void 0:r.toasts.get(e)})(e,t);if(r){let{props:n,content:i}=r,o={delay:100,...n,...t,toastId:t.toastId||e,updateId:C()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,_(a,o)}},k.done=e=>{k.update(e,{progress:1})},k.onChange=function(e){return p.add(e),()=>{p.delete(e)}},k.play=e=>v(!0,e),k.pause=e=>v(!1,e);let A="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,O=e=>{let{theme:t,type:r,isLoading:i,...o}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...o})},P={info:function(e){return n.createElement(O,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(O,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(O,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(O,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}},T=e=>{let{isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:a,playToast:l}=function(e){var t,r;let[i,o]=(0,n.useState)(!1),[a,s]=(0,n.useState)(!1),l=(0,n.useRef)(null),c=(0,n.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:g}=e;function m(){o(!0)}function y(){o(!1)}function w(t){let r=l.current;c.canDrag&&r&&(c.didMove=!0,i&&y(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),r.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,r.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function v(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",v);let t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return s(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(r=h.get((t={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||r.setToggle(t.id,t.fn),(0,n.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",m),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",y)}},[e.pauseOnFocusLoss]);let b={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",v);let r=l.current;c.canCloseOnClick=!0,c.canDrag=!0,r.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=r.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=r.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:r,bottom:n,left:i,right:o}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=r&&t.clientY<=n?y():m()}};return u&&d&&(b.onMouseEnter=y,e.stacked||(b.onMouseLeave=m)),g&&(b.onClick=e=>{p&&p(e),c.canCloseOnClick&&f()}),{playToast:m,pauseToast:y,isRunning:i,preventExitTransition:a,toastRef:l,eventHandlers:b}}(e),{closeButton:c,children:u,autoClose:d,onClick:f,type:p,hideProgressBar:g,closeToast:m,transition:y,position:w,className:v,style:x,bodyClassName:C,bodyStyle:_,progressClassName:E,progressStyle:S,updateId:k,role:A,progress:O,rtl:T,toastId:R,deleteToast:I,isIn:$,isLoading:N,closeOnClick:M,theme:j}=e,D=i("Toastify__toast",`Toastify__toast-theme--${j}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":M}),L=s(v)?v({rtl:T,position:w,type:p,defaultClassName:D}):i(D,v),U=function(e){let{theme:t,type:r,isLoading:i,icon:o}=e,a=null,l={theme:t,type:r};return!1===o||(s(o)?a=o({...l,isLoading:i}):(0,n.isValidElement)(o)?a=(0,n.cloneElement)(o,l):i?a=P.spinner():r in P&&(a=P[r](l))),a}(e),B=!!O||!d,z={closeToast:m,type:p,theme:j},F=null;return!1===c||(F=s(c)?c(z):(0,n.isValidElement)(c)?(0,n.cloneElement)(c,z):function(e){let{closeToast:t,theme:r,ariaLabel:i="close"}=e;return n.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":i},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),n.createElement(y,{isIn:$,done:I,position:w,preventExitTransition:r,nodeRef:o,playToast:l},n.createElement("div",{id:R,onClick:f,"data-in":$,className:L,...a,style:x,ref:o},n.createElement("div",{...$&&{role:A},className:s(C)?C({type:p}):i("Toastify__toast-body",C),style:_},null!=U&&n.createElement("div",{className:i("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},U),n.createElement("div",null,u)),F,n.createElement(b,{...k&&!B?{key:`pb-${k}`}:{},rtl:T,theme:j,delay:d,isRunning:t,isIn:$,closeToast:m,hide:g,type:p,style:S,className:E,controlledProgress:B,progress:O||0})))},R=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},I=u(R("bounce",!0)),$=(u(R("slide",!0)),u(R("zoom")),u(R("flip")),{position:"top-right",transition:I,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function N(e){let t={...$,...e},r=e.stacked,[u,p]=(0,n.useState)(!0),m=(0,n.useRef)(null),{getToastToRender:v,isToastActive:b,count:x}=function(e){let{subscribe:t,getSnapshot:r,setProps:i}=(0,n.useRef)(function(e){let t=e.containerId||1;return{subscribe(r){let i=function(e,t,r){let i=1,u=0,h=[],f=[],p=[],g=t,m=new Map,y=new Set,w=()=>{p=Array.from(m.values()),y.forEach(e=>e())},v=e=>{f=null==e?[]:f.filter(t=>t!==e),w()},b=e=>{let{toastId:t,onOpen:i,updateId:o,children:a}=e.props,l=null==o;e.staleId&&m.delete(e.staleId),m.set(t,e),f=[...f,e.props.toastId].filter(t=>t!==e.staleId),w(),r(d(e,l?"added":"updated")),l&&s(i)&&i((0,n.isValidElement)(a)&&a.props)};return{id:e,props:g,observe:e=>(y.add(e),()=>y.delete(e)),toggle:(e,t)=>{m.forEach(r=>{null!=t&&t!==r.props.toastId||s(r.toggle)&&r.toggle(e)})},removeToast:v,toasts:m,clearQueue:()=>{u-=h.length,h=[]},buildToast:(t,f)=>{var p,y;if((t=>{let{containerId:r,toastId:n,updateId:i}=t,o=m.has(n)&&null==i;return(r?r!==e:1!==e)||o})(f))return;let{toastId:x,updateId:C,data:_,staleId:E,delay:S}=f,k=()=>{v(x)},A=null==C;A&&u++;let O={...g,style:g.toastStyle,key:i++,...Object.fromEntries(Object.entries(f).filter(e=>{let[t,r]=e;return null!=r})),toastId:x,updateId:C,data:_,closeToast:k,isIn:!1,className:l(f.className||g.toastClassName),bodyClassName:l(f.bodyClassName||g.bodyClassName),progressClassName:l(f.progressClassName||g.progressClassName),autoClose:!f.isLoading&&(p=f.autoClose,y=g.autoClose,!1===p||o(p)&&p>0?p:y),deleteToast(){let e=m.get(x),{onClose:t,children:i}=e.props;s(t)&&t((0,n.isValidElement)(i)&&i.props),r(d(e,"removed")),m.delete(x),--u<0&&(u=0),h.length>0?b(h.shift()):w()}};O.closeButton=g.closeButton,!1===f.closeButton||c(f.closeButton)?O.closeButton=f.closeButton:!0===f.closeButton&&(O.closeButton=!c(g.closeButton)||g.closeButton);let P=t;(0,n.isValidElement)(t)&&!a(t.type)?P=(0,n.cloneElement)(t,{closeToast:k,toastProps:O,data:_}):s(t)&&(P=t({closeToast:k,toastProps:O,data:_}));let T={content:P,props:O,staleId:E};g.limit&&g.limit>0&&u>g.limit&&A?h.push(T):o(S)?setTimeout(()=>{b(T)},S):b(T)},setProps(e){g=e},setToggle:(e,t)=>{m.get(e).toggle=t},isToastActive:e=>f.some(t=>t===e),getSnapshot:()=>g.newestOnTop?p.reverse():p}}(t,e,g);h.set(t,i);let u=i.observe(r);return f.forEach(e=>w(e.content,e.options)),f=[],()=>{u(),h.delete(t)}},setProps(e){var r;null==(r=h.get(t))||r.setProps(e)},getSnapshot(){var e;return null==(e=h.get(t))?void 0:e.getSnapshot()}}}(e)).current;i(e);let u=(0,n.useSyncExternalStore)(t,r,r);return{getToastToRender:function(e){if(!u)return[];let t=new Map;return u.forEach(e=>{let{position:r}=e.props;t.has(r)||t.set(r,[]),t.get(r).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:y,count:null==u?void 0:u.length}}(t),{className:C,style:_,rtl:E,containerId:S}=t;function O(){r&&(p(!0),k.play())}return A(()=>{if(r){var e;let r=m.current.querySelectorAll('[data-in="true"]'),n=null==(e=t.position)?void 0:e.includes("top"),i=0,o=0;Array.from(r).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed=`${u}`),e.dataset.pos||(e.dataset.pos=n?"top":"bot");let r=i*(u?.2:1)+(u?0:12*t);e.style.setProperty("--y",`${n?r:-1*r}px`),e.style.setProperty("--g","12"),e.style.setProperty("--s",""+(1-(u?o:0))),i+=e.offsetHeight,o+=.025})}},[u,x,r]),n.createElement("div",{ref:m,className:"Toastify",id:S,onMouseEnter:()=>{r&&(p(!1),k.pause())},onMouseLeave:O},v((e,t)=>{let o=t.length?{..._}:{..._,pointerEvents:"none"};return n.createElement("div",{className:function(e){let t=i("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":E});return s(C)?C({position:e,rtl:E,defaultClassName:t}):i(t,l(C))}(e),style:o,key:`container-${e}`},t.map(e=>{let{content:t,props:i}=e;return n.createElement(T,{...i,stacked:r,collapseAll:O,isIn:b(i.toastId,i.containerId),style:i.style,key:`toast-${i.key}`},t)}))}))}},17832:function(e,t,r){"use strict";r.d(t,{sj:function(){return p},iH:function(){return y},CO:function(){return m},Ld:function(){return g}}),Symbol();let n=Symbol(),i=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):i(e)===Object.prototype||i(e)===Array.prototype),s=e=>a(e)&&e[n]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,h=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},i=new WeakMap,o=(e,t,r=n)=>{let a=i.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),i.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(d.has(n))l(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(u.has(n)){let[e,t]=u.get(n);i.value=o(e,t(),r)}Object.defineProperty(s,t,i)}),Object.preventExtensions(s)},a=new WeakMap,h=[1,1],f=n=>{if(!c(n))throw Error("object required");let i=a.get(n);if(i)return i;let l=h[0],p=new Set,g=(e,t=++h[0])=>{l!==t&&(l=t,p.forEach(r=>r(e,t)))},m=h[1],y=(e=++h[1])=>(m===e||p.size||(m=e,v.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),w=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],g(n,r)},v=new Map,b=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](w(e));v.set(e,[t,r])}else v.set(e,[t])},x=e=>{var t;let r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},C=e=>{p.add(e),1===p.size&&v.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](w(r));v.set(r,[e,n])});let t=()=>{p.delete(e),0===p.size&&v.forEach(([e,t],r)=>{t&&(t(),v.set(r,[e]))})};return t},_=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),E={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let n=Reflect.deleteProperty(e,t);return n&&g(["delete",[t],r]),n},set(t,n,i,o){let l=Reflect.has(t,n),h=Reflect.get(t,n,o);if(l&&(e(h,i)||a.has(i)&&e(h,a.get(i))))return!0;x(n),c(i)&&(i=s(i)||i);let p=i;if(i instanceof Promise)i.then(e=>{i.status="fulfilled",i.value=e,g(["resolve",[n],e])}).catch(e=>{i.status="rejected",i.reason=e,g(["reject",[n],e])});else{!u.has(i)&&r(i)&&(p=f(i));let e=!d.has(p)&&u.get(p);e&&b(n,e)}return Reflect.set(t,n,p,o),g(["set",[n],i,h]),!0}},S=t(_,E);a.set(n,S);let k=[_,y,o,C];return u.set(S,k),Reflect.ownKeys(n).forEach(e=>{let t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(S[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(_,e,t)}),S})=>[f,u,d,e,t,r,n,i,o,a,h],[f]=h();function p(e={}){return f(e)}function g(e,t,r){let n;let i=u.get(e);i||console.warn("Please use proxy object");let o=[],a=i[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function m(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[n,i,o]=r;return o(n,i(),t)}function y(e){return d.add(e),e}},14503:function(e,t,r){"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return n}})},61376:function(e,t,r){"use strict";r.d(t,{RE:function(){return C}});var n=r(14503),i=r(16693),o=r(26087),a=r(62027),s=r(80377),l=r(97405),c=r(69760),u=r(20443),d=r(7210),h=r(77799),f=r(49321),p=r(47864),g=r(92106),m=r(26445),y=r(87469),w=r(61163),v=r(74688),b=r(32357),x=r(47531);async function C(e,t){let{account:i=e.account,batch:c=!!e.batch?.multicall,blockNumber:d,blockTag:h="latest",accessList:p,data:b,gas:C,gasPrice:S,maxFeePerGas:k,maxPriorityFeePerGas:A,nonce:O,to:P,value:T,stateOverride:R,...I}=t,$=i?(0,n.T)(i):void 0;try{(0,x.F)(t);let r=d?(0,g.eC)(d):void 0,n=r||h,i=function(e){if(!e)return;let t={};for(let{address:r,...n}of e){if(!(0,f.U)(r))throw new o.b({address:r});if(t[r])throw new u.Nc({address:r});t[r]=function(e){let{balance:t,nonce:r,state:n,stateDiff:i,code:o}=e,a={};if(void 0!==o&&(a.code=o),void 0!==t&&(a.balance=(0,g.eC)(t,{size:32})),void 0!==r&&(a.nonce=(0,g.eC)(r,{size:8})),void 0!==n&&(a.state=E(n)),void 0!==i){if(a.state)throw new u.Z8;a.stateDiff=E(i)}return a}(n)}return t}(R),a=e.chain?.formatters?.transactionRequest?.format,l=a||v.tG,m=l({...(0,w.K)(I,{format:a}),from:$?.address,accessList:p,data:b,gas:C,gasPrice:S,maxFeePerGas:k,maxPriorityFeePerGas:A,nonce:O,to:P,value:T});if(c&&function({request:e}){let{data:t,to:r,...n}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(n).filter(e=>void 0!==e).length>0)}({request:m})&&!i)try{return await _(e,{...m,blockNumber:d,blockTag:h})}catch(e){if(!(e instanceof s.pZ)&&!(e instanceof s.mm))throw e}let y=await e.request({method:"eth_call",params:i?[m,n,i]:[m,n]});if("0x"===y)return{data:void 0};return{data:y}}catch(s){let n=function(e){if(!(e instanceof a.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(s),{offchainLookup:i,offchainLookupSignature:o}=await r.e(422).then(r.bind(r,10422));if(n?.slice(0,10)===o&&P)return{data:await i(e,{data:n,to:P})};throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,y.k)(e,r);return t instanceof m.cj?e:t})();return new l.cg(n,{docsPath:t,...r})}(s,{...t,account:$,chain:e.chain})}}async function _(e,t){let{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:c,multicallAddress:u,to:f}=t,m=u;if(!m){if(!e.chain)throw new s.pZ;m=(0,p.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let y=o?(0,g.eC)(o):void 0,w=y||a,{schedule:v}=(0,b.S)({id:`${e.uid}.${w}`,wait:n,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*r},fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),n=(0,h.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:n,to:m},w]});return(0,d.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:x,success:C}]=await v({data:c,to:f});if(!C)throw new l.VQ({data:x});return"0x"===x?{data:void 0}:{data:x}}function E(e){if(e&&0!==e.length)return e.reduce((e,{slot:t,value:r})=>{if(66!==t.length)throw new c.W_({size:t.length,targetSize:66,type:"hex"});if(66!==r.length)throw new c.W_({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e},{})}},79524:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(95946);async function i(e){let t=await e.request({method:"eth_chainId"});return(0,n.ly)(t)}},88819:function(e,t,r){"use strict";r.d(t,{L:function(){return l}});var n=r(7210),i=r(77799),o=r(72365),a=r(93714),s=r(61376);async function l(e,t){let{abi:r,address:l,args:c,functionName:u,...d}=t,h=(0,i.R)({abi:r,args:c,functionName:u});try{let{data:t}=await (0,a.s)(e,s.RE,"call")({...d,data:h,to:l});return(0,n.k)({abi:r,args:c,functionName:u,data:t||"0x"})}catch(e){throw(0,o.S)(e,{abi:r,address:l,args:c,docsPath:"/docs/contract/readContract",functionName:u})}}},24371:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(14503),i=r(67795),o=r(62027);class a extends o.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class s extends o.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class l extends o.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,i.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}var c=r(93714),u=r(95946);class d extends o.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var h=r(92106);let f={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function p(e){let t=e.transactions?.map(e=>"string"==typeof e?e:function(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,u.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,u.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?f[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip1559"===t.type&&delete t.maxFeePerBlobGas,t}(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function g(e,{blockHash:t,blockNumber:r,blockTag:n,includeTransactions:i}={}){let o=i??!1,a=void 0!==r?(0,h.eC)(r):void 0,s=null;if(!(s=t?await e.request({method:"eth_getBlockByHash",params:[t,o]}):await e.request({method:"eth_getBlockByNumber",params:[a||(n??"latest"),o]})))throw new d({blockHash:t,blockNumber:r});let l=e.chain?.formatters?.block?.format||p;return l(s)}async function m(e){let t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function y(e,t){let{block:r,chain:n=e.chain,request:i}=t||{};if("function"==typeof n?.fees?.defaultPriorityFee){let t=r||await (0,c.s)(e,g,"getBlock")({});return n.fees.defaultPriorityFee({block:t,client:e,request:i})}if(void 0!==n?.fees?.defaultPriorityFee)return n?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,u.y_)(t)}catch{let[t,n]=await Promise.all([r?Promise.resolve(r):(0,c.s)(e,g,"getBlock")({}),(0,c.s)(e,m,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new s;let i=n-t.baseFeePerGas;if(i<0n)return 0n;return i}}async function w(e,t){let{block:r,chain:n=e.chain,request:i,type:o="eip1559"}=t||{},l=await (async()=>"function"==typeof n?.fees?.baseFeeMultiplier?n.fees.baseFeeMultiplier({block:r,client:e,request:i}):n?.fees?.baseFeeMultiplier??1.2)();if(l<1)throw new a;let u=l.toString().split(".")[1]?.length??0,d=10**u,h=e=>e*BigInt(Math.ceil(l*d))/BigInt(d),f=r||await (0,c.s)(e,g,"getBlock")({});if("function"==typeof n?.fees?.estimateFeesPerGas)return n.fees.estimateFeesPerGas({block:r,client:e,multiply:h,request:i,type:o});if("eip1559"===o){if("bigint"!=typeof f.baseFeePerGas)throw new s;let t="bigint"==typeof i?.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await y(e,{block:f,chain:n,request:i}),r=h(f.baseFeePerGas),o=i?.maxFeePerGas??r+t;return{maxFeePerGas:o,maxPriorityFeePerGas:t}}let p=i?.gasPrice??h(await (0,c.s)(e,m,"getGasPrice")({}));return{gasPrice:p}}var v=r(39625),b=r(33639);class x extends o.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){let f=(0,b.xr)({from:t?.address,to:d,value:void 0!==h&&`${(0,v.d)(h)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,i.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,i.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,i.o)(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",f].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var C=r(26445),_=r(87469),E=r(61163),S=r(74688),k=r(47531);async function A(e,t){let r=t.account??e.account,i=r?(0,n.T)(r):void 0;try{let{accessList:r,blockNumber:n,blockTag:o,data:a,gas:s,gasPrice:l,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:d,to:f,value:p,...g}=i?.type==="local"?await P(e,t):t,m=n?(0,h.eC)(n):void 0,y=m||o;(0,k.F)(t);let w=e.chain?.formatters?.transactionRequest?.format,v=w||S.tG,b=v({...(0,E.K)(g,{format:w}),from:i?.address,accessList:r,data:a,gas:s,gasPrice:l,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:d,to:f,value:p}),x=await e.request({method:"eth_estimateGas",params:y?[b,y]:[b]});return BigInt(x)}catch(r){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,_.k)(e,r);return t instanceof C.cj?e:t})();return new x(n,{docsPath:t,...r})}(r,{...t,account:i,chain:e.chain})}}async function O(e,{address:t,blockTag:r="latest",blockNumber:n}){let i=await e.request({method:"eth_getTransactionCount",params:[t,n?(0,h.eC)(n):r]});return(0,u.ly)(i)}async function P(e,t){let{account:r=e.account,chain:i,gas:o,nonce:a,parameters:u=["fees","gas","nonce","type"],type:d}=t,h=r?(0,n.T)(r):void 0,f=await (0,c.s)(e,g,"getBlock")({blockTag:"latest"}),p={...t,...h?{from:h?.address}:{}};if(u.includes("nonce")&&void 0===a&&h&&(p.nonce=await (0,c.s)(e,O,"getTransactionCount")({address:h.address,blockTag:"pending"})),(u.includes("fees")||u.includes("type"))&&void 0===d)try{p.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new b.j3({transaction:e})}(p)}catch{p.type="bigint"==typeof f.baseFeePerGas?"eip1559":"legacy"}if(u.includes("fees")){if("eip1559"===p.type){let{maxFeePerGas:r,maxPriorityFeePerGas:n}=await w(e,{block:f,chain:i,request:p});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<n)throw new l({maxPriorityFeePerGas:n});p.maxPriorityFeePerGas=n,p.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new s;let{gasPrice:r}=await w(e,{block:f,chain:i,request:p,type:"legacy"});p.gasPrice=r}}return u.includes("gas")&&void 0===o&&(p.gas=await (0,c.s)(e,A,"estimateGas")({...p,account:h?{address:h.address,type:"json-rpc"}:void 0})),(0,k.F)(p),delete p.parameters,p}},99238:function(e,t,r){"use strict";async function n(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}r.d(t,{p:function(){return n}})},96128:function(e,t,r){"use strict";r.d(t,{T:function(){return m}});var n=r(14503),i=r(8998),o=r(33840),a=r(26445),s=r(33639),l=r(87469),c=r(61163),u=r(74688),d=r(93714),h=r(47531),f=r(79524),p=r(24371),g=r(99238);async function m(e,t){let{account:r=e.account,chain:m=e.chain,accessList:y,data:w,gas:v,gasPrice:b,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:_,to:E,value:S,...k}=t;if(!r)throw new i.o({docsPath:"/docs/actions/wallet/sendTransaction"});let A=(0,n.T)(r);try{let r;if((0,h.F)(t),null!==m&&(r=await (0,d.s)(e,f.L,"getChainId")({}),(0,o.q)({currentChainId:r,chain:m})),"local"===A.type){let t=await (0,d.s)(e,p.Z,"prepareTransactionRequest")({account:A,accessList:y,chain:m,data:w,gas:v,gasPrice:b,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:_,to:E,value:S,...k});r||(r=await (0,d.s)(e,f.L,"getChainId")({}));let n=m?.serializers?.transaction,i=await A.signTransaction({...t,chainId:r},{serializer:n});return await (0,d.s)(e,g.p,"sendRawTransaction")({serializedTransaction:i})}let n=e.chain?.formatters?.transactionRequest?.format,i=n||u.tG,a=i({...(0,c.K)(k,{format:n}),accessList:y,data:w,from:A.address,gas:v,gasPrice:b,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:_,to:E,value:S});return await e.request({method:"eth_sendTransaction",params:[a]},{retryCount:0})}catch(e){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,l.k)(e,r);return t instanceof a.cj?e:t})();return new s.mk(n,{docsPath:t,...r})}(e,{...t,account:A,chain:t.chain||void 0})}}},22980:function(e,t,r){"use strict";r.d(t,{l:function(){return a}});var n=r(14503),i=r(8998),o=r(92106);async function a(e,{account:t=e.account,message:r}){if(!t)throw new i.o({docsPath:"/docs/actions/wallet/signMessage"});let a=(0,n.T)(t);if("local"===a.type)return a.signMessage({message:r});let s="string"==typeof r?(0,o.$G)(r):r.raw instanceof Uint8Array?(0,o.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[s,a.address]},{retryCount:0})}},61877:function(e,t,r){"use strict";r.d(t,{n:function(){return a}});var n=r(77799),i=r(93714),o=r(96128);async function a(e,t){let{abi:r,address:a,args:s,dataSuffix:l,functionName:c,...u}=t,d=(0,n.R)({abi:r,args:s,functionName:c});return(0,i.s)(e,o.T,"sendTransaction")({data:`${d}${l?l.replace("0x",""):""}`,to:a,...u})}},64892:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});let n={formatters:void 0,fees:void 0,serializers:void 0,id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x8cab227b1162f03b8338331adaad7aadc83b895e",blockCreated:18958930},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}},16189:function(e,t,r){"use strict";let n;r.d(t,{e:function(){return a}});var i=r(14503);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,i.T)(e.account):void 0,{config:h,request:f,value:p}=e.transport({chain:u,pollingInterval:l}),g={...h,...p},m={account:d,batch:t,cacheTime:r,chain:u,key:a,name:s,pollingInterval:l,request:f,transport:g,type:c,uid:function(e=11){if(!n||o+e>512){n="",o=0;for(let e=0;e<256;e++)n+=(256+256*Math.random()|0).toString(16).substring(1)}return n.substring(o,o+++e)}()};return Object.assign(m,{extend:function e(t){return r=>{let n=r(t);for(let e in m)delete n[e];let i={...t,...n};return Object.assign(i,{extend:e(i)})}}(m)})}},42365:function(e,t,r){"use strict";r.d(t,{v:function(){return D}});var n=r(79524),i=r(92106);async function o(e,{chain:t}){let{id:r,name:n,nativeCurrency:o,rpcUrls:a,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,i.eC)(r),chainName:n,nativeCurrency:o,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]},{retryCount:0})}var a=r(57412),s=r(57040),l=r(45444);let c="/docs/contract/encodeDeployData";var u=r(96128),d=r(45775);async function h(e){if(e.account?.type==="local")return[e.account.address];let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,d.x)(e))}async function f(e){let t=await e.request({method:"wallet_getPermissions"});return t}var p=r(24371);async function g(e){let t=await e.request({method:"eth_requestAccounts"},{retryCount:0});return t.map(e=>(0,d.K)(e))}async function m(e,t){return e.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}var y=r(99238),w=r(22980),v=r(14503),b=r(8998),x=r(33840),C=r(74688),_=r(93714),E=r(47531);async function S(e,t){let{account:r=e.account,chain:o=e.chain,...a}=t;if(!r)throw new b.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,v.T)(r);(0,E.F)({account:s,...t});let l=await (0,_.s)(e,n.L,"getChainId")({});null!==o&&(0,x.q)({currentChainId:l,chain:o});let c=o?.formatters||e.chain?.formatters,u=c?.transactionRequest?.format||C.tG;return"local"===s.type?s.signTransaction({...a,chainId:l},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...u(a),chainId:(0,i.eC)(l),from:s.address}]},{retryCount:0})}var k=r(15102),A=r(96070),O=r(26087),P=r(49321),T=r(39135);let R=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,I=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;async function $(e,t){let{account:r=e.account,domain:n,message:o,primaryType:s}=t;if(!r)throw new b.o({docsPath:"/docs/actions/wallet/signTypedData"});let l=(0,v.T)(r),c={EIP712Domain:function({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}({domain:n}),...t.types};if(!function(e){let{domain:t,message:r,primaryType:n,types:o}=e,s=(e,t)=>{for(let r of e){let{name:e,type:n}=r,l=t[e],c=n.match(I);if(c&&("number"==typeof l||"bigint"==typeof l)){let[e,t,r]=c;(0,i.eC)(l,{signed:"int"===t,size:parseInt(r)/8})}if("address"===n&&"string"==typeof l&&!(0,P.U)(l))throw new O.b({address:l});let u=n.match(R);if(u){let[e,t]=u;if(t&&(0,T.d)(l)!==parseInt(t))throw new a.KY({expectedSize:parseInt(t),givenSize:(0,T.d)(l)})}let d=o[n];d&&s(d,l)}};if(o.EIP712Domain&&t&&s(o.EIP712Domain,t),"EIP712Domain"!==n){let e=o[n];s(e,r)}}({domain:n,message:o,primaryType:s,types:c}),"local"===l.type)return l.signTypedData({domain:n,message:o,primaryType:s,types:c});let u=(0,A.P)({domain:n??{},message:o,primaryType:s,types:c},(e,t)=>(0,k.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[l.address,u]},{retryCount:0})}async function N(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,i.eC)(t)}]},{retryCount:0})}async function M(e,t){let r=await e.request({method:"wallet_watchAsset",params:t},{retryCount:0});return r}var j=r(61877);function D(e){return{addChain:t=>o(e,t),deployContract:t=>(function(e,t){let{abi:r,args:n,bytecode:i,...o}=t,d=function(e){let{abi:t,args:r,bytecode:n}=e;if(!r||0===r.length)return n;let i=t.find(e=>"type"in e&&"constructor"===e.type);if(!i)throw new a.fM({docsPath:c});if(!("inputs"in i)||!i.inputs||0===i.inputs.length)throw new a.cO({docsPath:c});let o=(0,l.E)(i.inputs,r);return(0,s.SM)([n,o])}({abi:r,args:n,bytecode:i});return(0,u.T)(e,{...o,data:d})})(e,t),getAddresses:()=>h(e),getChainId:()=>(0,n.L)(e),getPermissions:()=>f(e),prepareTransactionRequest:t=>(0,p.Z)(e,t),requestAddresses:()=>g(e),requestPermissions:t=>m(e,t),sendRawTransaction:t=>(0,y.p)(e,t),sendTransaction:t=>(0,u.T)(e,t),signMessage:t=>(0,w.l)(e,t),signTransaction:t=>S(e,t),signTypedData:t=>$(e,t),switchChain:t=>N(e,t),watchAsset:t=>M(e,t),writeContract:t=>(0,j.n)(e,t)}}},91628:function(e,t,r){"use strict";r.d(t,{q:function(){return s}});var n=r(62027),i=r(78863),o=r(39028),a=r(97933);function s({key:e,name:t,request:r,retryCount:s=3,retryDelay:l=150,timeout:c,type:u},d){return{config:{key:e,name:t,request:r,retryCount:s,retryDelay:l,timeout:c,type:u},request:function(e,t={}){return async(r,s={})=>{let{retryDelay:l=150,retryCount:c=3}={...t,...s};return(0,a.J)(async()=>{try{return await e(r)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof n.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof i.Gg){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*l},retryCount:c,shouldRetry:({error:e})=>"code"in e&&"number"==typeof e.code?-1===e.code||e.code===o.Pv.code||e.code===o.XS.code:!(e instanceof i.Gg)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status})}}(r,{retryCount:s,retryDelay:l}),value:d}}},3980:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});var n=r(91628);function i(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})}},16693:function(e,t,r){"use strict";r.d(t,{F8:function(){return n},du:function(){return a},k3:function(){return o},nZ:function(){return s}});let n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}]},21746:function(e,t,r){"use strict";r.d(t,{$:function(){return n},Up:function(){return i},hZ:function(){return o}});let n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,r){"use strict";r.d(t,{Bd:function(){return o},Zn:function(){return i},ez:function(){return n}});let n={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},57412:function(e,t,r){"use strict";r.d(t,{CI:function(){return v},KY:function(){return y},M4:function(){return d},MX:function(){return g},S4:function(){return m},cO:function(){return s},dh:function(){return w},fM:function(){return a},fs:function(){return h},gr:function(){return u},hn:function(){return b},wM:function(){return x},wb:function(){return c},xB:function(){return l},xL:function(){return p},yP:function(){return f}});var n=r(80522),i=r(39135),o=r(62027);class a extends o.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,n.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class m extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,n.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,n.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class y extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class w extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class v extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class b extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class x extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(62027);class i extends n.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var n=r(62027);class i extends n.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});var n=r(35280);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});let r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},80377:function(e,t,r){"use strict";r.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return i},pZ:function(){return s}});var n=r(62027);class i extends n.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends n.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends n.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},97405:function(e,t,r){"use strict";r.d(t,{cg:function(){return y},uq:function(){return w},Lu:function(){return v},Dk:function(){return b},VQ:function(){return x}});var n=r(14503),i=r(21746),o=r(86899),a=r(80522),s=r(96070);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(3640),u=r(39625),d=r(67795),h=r(57412),f=r(62027),p=r(20443),g=r(33639),m=r(35280);class y extends f.G{constructor(e,{account:t,docsPath:r,chain:i,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:f,value:m,stateOverride:y}){let w=t?(0,n.T)(t):void 0,v=(0,g.xr)({from:w?.address,to:f,value:void 0!==m&&`${(0,u.d)(m)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h});y&&(v+=`
${(0,p.Bj)(y)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class w extends f.G{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s}){let u=(0,c.mE)({abi:t,args:r,name:o}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,h=u?(0,a.t)(u,{includeName:!0}):void 0,f=(0,g.xr)({address:n&&(0,m.CR)(n),function:h,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=o,this.sender=s}}class v extends f.G{constructor({abi:e,data:t,functionName:r,message:n}){let s,c,u,d,f;if(t&&"0x"!==t)try{f=(0,o.p)({abi:e,data:t});let{abiItem:r,errorName:n,args:s}=f;if("Error"===n)u=s[0];else if("Panic"===n){let[e]=s;u=i.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else n&&(u=n);s instanceof h.yP&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=d}}class b extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class x extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,r){"use strict";r.d(t,{$s:function(){return o},W_:function(){return a},mV:function(){return i}});var n=r(62027);class i extends n.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class a extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}},87788:function(e,t,r){"use strict";r.d(t,{J5:function(){return i},M6:function(){return a},yr:function(){return o}});var n=r(62027);class i extends n.G{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends n.G{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class a extends n.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},26445:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return h},ZI:function(){return l},cj:function(){return m},cs:function(){return g},dR:function(){return f},pZ:function(){return p},se:function(){return u},vU:function(){return c}});var n=r(67795),i=r(62027);class o extends i.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends i.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return l},bs:function(){return s}});var n=r(96070),i=r(62027),o=r(35280);class a extends i.G{constructor({body:e,details:t,headers:r,status:i,url:a}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,n.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=a}}class s extends i.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return w},I0:function(){return _},KB:function(){return g},LX:function(){return c},Og:function(){return f},PE:function(){return b},Pv:function(){return y},Ts:function(){return x},XS:function(){return d},ab:function(){return v},gS:function(){return m},ir:function(){return S},nY:function(){return u},pT:function(){return p},s7:function(){return s},u5:function(){return C},x3:function(){return E},yR:function(){return h}});var n=r(62027),i=r(78863);class o extends n.G{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof i.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class y extends o{constructor(e){super(e,{code:y.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class b extends a{constructor(e){super(e,{code:b.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class _ extends a{constructor(e){super(e,{code:_.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},20443:function(e,t,r){"use strict";r.d(t,{Bj:function(){return s},Nc:function(){return i},Z8:function(){return o}});var n=r(62027);class i extends n.G{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class o extends n.G{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function a(e){return e.reduce((e,{slot:t,value:r})=>`${e}        ${t}: ${r}
`,"")}function s(e){return e.reduce((e,{address:t,...r})=>{let n=`${e}    ${t}:
`;return r.nonce&&(n+=`      nonce: ${r.nonce}
`),r.balance&&(n+=`      balance: ${r.balance}
`),r.code&&(n+=`      code: ${r.code}
`),r.state&&(n+="      state:\n"+a(r.state)),r.stateDiff&&(n+="      stateDiff:\n"+a(r.stateDiff)),n},"  State Override:\n").slice(0,-1)}},33639:function(e,t,r){"use strict";r.d(t,{j3:function(){return l},mk:function(){return c},xY:function(){return s},xr:function(){return a}});var n=r(39625),i=r(67795),o=r(62027);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){let g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,n.d)(p)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,i.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,i.o)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}},35280:function(e,t,r){"use strict";r.d(t,{CR:function(){return n},Gr:function(){return i},bo:function(){return o}});let n=e=>e,i=e=>e,o=()=>"viem@2.7.6"},37686:function(e,t,r){"use strict";r.d(t,{r:function(){return v}});var n=r(57412),i=r(45775),o=r(62027);class a extends o.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class s extends o.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class l extends o.G{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}let c={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new l({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new s({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new a({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new a({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};var u=r(39135),d=r(3972),h=r(61836),f=r(87788),p=r(95946),g=r(92106);function m(e,t={}){void 0!==t.size&&(0,p.Yf)(e,{size:t.size});let r=(0,g.ci)(e,t);return(0,p.ly)(r,t)}var y=r(11187),w=r(45444);function v(e,t){let r="string"==typeof t?(0,y.nr)(t):t,o=function(e,{recursiveReadLimit:t=8192}={}){let r=Object.create(c);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}(r);if(0===(0,u.d)(r)&&e.length>0)throw new n.wb;if((0,u.d)(t)&&32>(0,u.d)(t))throw new n.xB({data:"string"==typeof t?t:(0,g.ci)(t),params:e,size:(0,u.d)(t)});let a=0,s=[];for(let t=0;t<e.length;++t){let r=e[t];o.setPosition(a);let[l,c]=function e(t,r,{staticPosition:o}){let a=(0,w.S)(r.type);if(a){let[n,i]=a;return function(t,r,{length:n,staticPosition:i}){if(!n){let n=m(t.readBytes(32)),o=i+n,a=o+32;t.setPosition(o);let s=m(t.readBytes(32)),l=b(r),c=0,u=[];for(let n=0;n<s;++n){t.setPosition(a+(l?32*n:c));let[i,o]=e(t,r,{staticPosition:a});c+=o,u.push(i)}return t.setPosition(i+32),[u,32]}if(b(r)){let o=m(t.readBytes(32)),a=i+o,s=[];for(let i=0;i<n;++i){t.setPosition(a+32*i);let[n]=e(t,r,{staticPosition:a});s.push(n)}return t.setPosition(i+32),[s,32]}let o=0,a=[];for(let s=0;s<n;++s){let[n,s]=e(t,r,{staticPosition:i+o});o+=s,a.push(n)}return[a,o]}(t,{...r,type:i},{length:n,staticPosition:o})}if("tuple"===r.type)return function(t,r,{staticPosition:n}){let i=0===r.components.length||r.components.some(({name:e})=>!e),o=i?[]:{},a=0;if(b(r)){let s=m(t.readBytes(32)),l=n+s;for(let n=0;n<r.components.length;++n){let s=r.components[n];t.setPosition(l+a);let[c,u]=e(t,s,{staticPosition:l});a+=u,o[i?n:s?.name]=c}return t.setPosition(n+32),[o,32]}for(let s=0;s<r.components.length;++s){let l=r.components[s],[c,u]=e(t,l,{staticPosition:n});o[i?s:l?.name]=c,a+=u}return[o,a]}(t,r,{staticPosition:o});if("address"===r.type)return function(e){let t=e.readBytes(32);return[(0,i.x)((0,g.ci)((0,d.T4)(t,-20))),32]}(t);if("bool"===r.type)return[function(e,t={}){let r=e;if(void 0!==t.size&&((0,p.Yf)(r,{size:t.size}),r=(0,h.f)(r)),r.length>1||r[0]>1)throw new f.yr(r);return!!r[0]}(t.readBytes(32),{size:32}),32];if(r.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){let[n,i]=t.type.split("bytes");if(!i){let t=m(e.readBytes(32));e.setPosition(r+t);let n=m(e.readBytes(32));if(0===n)return e.setPosition(r+32),["0x",32];let i=e.readBytes(n);return e.setPosition(r+32),[(0,g.ci)(i),32]}let o=(0,g.ci)(e.readBytes(parseInt(i),32));return[o,32]}(t,r,{staticPosition:o});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,t){let r=t.type.startsWith("int"),n=parseInt(t.type.split("int")[1]||"256"),i=e.readBytes(32);return[n>48?function(e,t={}){void 0!==t.size&&(0,p.Yf)(e,{size:t.size});let r=(0,g.ci)(e,t);return(0,p.y_)(r,t)}(i,{signed:r}):m(i,{signed:r}),32]}(t,r);if("string"===r.type)return function(e,{staticPosition:t}){let r=m(e.readBytes(32));e.setPosition(t+r);let n=m(e.readBytes(32));if(0===n)return e.setPosition(t+32),["",32];let i=e.readBytes(n,32),o=function(e,t={}){let r=e;return void 0!==t.size&&((0,p.Yf)(r,{size:t.size}),r=(0,h.f)(r,{dir:"right"})),new TextDecoder().decode(r)}((0,h.f)(i));return e.setPosition(t+32),[o,32]}(t,{staticPosition:o});throw new n.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}(o,r,{staticPosition:0});a+=c,s.push(l)}return s}function b(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(b);let r=(0,w.S)(e.type);return!!(r&&b({...e,type:r[1]}))}},86899:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(21746),i=r(57412),o=r(3972),a=r(58034),s=r(37686),l=r(80522);function c(e){let{abi:t,data:r}=e,c=(0,o.tP)(r,0,4);if("0x"===c)throw new i.wb;let u=[...t||[],n.Up,n.hZ],d=u.find(e=>"error"===e.type&&c===(0,a.C)((0,l.t)(e)));if(!d)throw new i.yP(c,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:d,args:"inputs"in d&&d.inputs&&d.inputs.length>0?(0,s.r)(d.inputs,(0,o.tP)(r,4)):void 0,errorName:d.name}}},7210:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var n=r(57412),i=r(37686),o=r(3640);let a="/docs/contract/decodeFunctionResult";function s(e){let{abi:t,args:r,functionName:s,data:l}=e,c=t[0];if(s){let e=(0,o.mE)({abi:t,args:r,name:s});if(!e)throw new n.xL(s,{docsPath:a});c=e}if("function"!==c.type)throw new n.xL(void 0,{docsPath:a});if(!c.outputs)throw new n.MX(c.name,{docsPath:a});let u=(0,i.r)(c.outputs,l);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},45444:function(e,t,r){"use strict";r.d(t,{E:function(){return d},S:function(){return f}});var n=r(57412),i=r(26087),o=r(49321),a=r(57040),s=r(61769),l=r(39135),c=r(3972),u=r(92106);function d(e,t){if(e.length!==t.length)throw new n.fs({expectedLength:e.length,givenLength:t.length});let r=function({params:e,values:t}){let r=[];for(let d=0;d<e.length;d++)r.push(function e({param:t,value:r}){let d=f(t.type);if(d){let[i,o]=d;return function(t,{length:r,param:i}){let o=null===r;if(!Array.isArray(t))throw new n.hn(t);if(!o&&t.length!==r)throw new n.gr({expectedLength:r,givenLength:t.length,type:`${i.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let n=e({param:i,value:t[r]});n.dynamic&&(s=!0),l.push(n)}if(o||s){let e=h(l);if(o){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(l.map(({encoded:e})=>e))}}(r,{length:i,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let n=!1,i=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});i.push(l),l.dynamic&&(n=!0)}return{dynamic:n,encoded:n?h(i):(0,a.zo)(i.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,o.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int")){let e=t.type.startsWith("int");return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:e})}if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),i=(0,l.d)(e);if(!r){let t=e;return i%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...n])}}(r);throw new n.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[d],value:t[d]}));return r}({params:e,values:t}),d=h(r);return 0===d.length?"0x":d}function h(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:n,encoded:i}=e[r];n?t+=32:t+=(0,l.d)(i)}let r=[],n=[],i=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+i,{size:32})),n.push(s),i+=(0,l.d)(s)):r.push(s)}return(0,a.zo)([...r,...n])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},77799:function(e,t,r){"use strict";r.d(t,{R:function(){return u}});var n=r(57412),i=r(57040),o=r(58034),a=r(45444),s=r(80522),l=r(3640);let c="/docs/contract/encodeFunctionData";function u(e){let{abi:t,args:r,functionName:u}=e,d=t[0];if(u){let e=(0,l.mE)({abi:t,args:r,name:u});if(!e)throw new n.xL(u,{docsPath:c});d=e}if("function"!==d.type)throw new n.xL(void 0,{docsPath:c});let h=(0,s.t)(d),f=(0,o.C)(h),p="inputs"in d&&d.inputs?(0,a.E)(d.inputs,r??[]):void 0;return(0,i.SM)([f,p??"0x"])}},80522:function(e,t,r){"use strict";r.d(t,{h:function(){return o},t:function(){return i}});var n=r(57412);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},3640:function(e,t,r){"use strict";r.d(t,{mE:function(){return c}});var n=r(57412),i=r(15102),o=r(49321),a=r(67684);let s=a.r;var l=r(58034);function c(e){let t;let{abi:r,args:a=[],name:c}=e,u=(0,i.v)(c,{strict:!1}),d=r.filter(e=>u?"function"===e.type?(0,l.C)(e)===c:"event"===e.type&&s(e)===c:"name"in e&&e.name===c);if(0!==d.length){if(1===d.length)return d[0];for(let e of d){if(!("inputs"in e))continue;if(!a||0===a.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(!e.inputs||0===e.inputs.length||e.inputs.length!==a.length)continue;let r=a.every((t,r)=>{let n="inputs"in e&&e.inputs[r];return!!n&&function e(t,r){let n=typeof t,i=r.type;switch(i){case"address":return(0,o.U)(t);case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:if("tuple"===i&&"components"in r)return Object.values(r.components).every((r,n)=>e(Object.values(t)[n],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i))return"number"===n||"bigint"===n;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))return"string"===n||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:i.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,n)});if(r){if(t&&"inputs"in t&&t.inputs){let r=function e(t,r,n){for(let i in t){let a=t[i],s=r[i];if("tuple"===a.type&&"tuple"===s.type&&"components"in a&&"components"in s)return e(a.components,s.components,n[i]);let l=[a.type,s.type],c=!!(l.includes("address")&&l.includes("bytes20"))||!!(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,o.U)(n[i]);if(c)return l}}(e.inputs,t.inputs,a);if(r)throw new n.S4({abiItem:e,type:r[0]},{abiItem:t,type:r[1]})}t=e}}return t||d[0]}}},45775:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var n=r(26087),i=r(11187),o=r(88184),a=r(49321);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,o.w)((0,i.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&n[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e))throw new n.b({address:e});return s(e,t)}},49321:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});let n=/^0x[a-fA-F0-9]{40}$/;function i(e){return n.test(e)}},33840:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(80377);function i({chain:e,currentChainId:t}){if(!e)throw new n.Bk;if(t!==e.id)throw new n.Yl({chain:e,currentChainId:t})}},47864:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(80377);function i({blockNumber:e,chain:t,contract:r}){let i=t?.contracts?.[r];if(!i)throw new n.mm({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},57040:function(e,t,r){"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return i},zo:function(){return n}})},15102:function(e,t,r){"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return n}})},61769:function(e,t,r){"use strict";r.d(t,{gc:function(){return o},vk:function(){return i}});var n=r(69760);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.$s({size:e.length,targetSize:r,type:"bytes"});let i=new Uint8Array(r);for(let n=0;n<r;n++){let o="right"===t;i[o?n:r-n-1]=e[o?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let i=e.replace("0x","");if(i.length>2*r)throw new n.$s({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39135:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(15102);function i(e){return(0,n.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,r){"use strict";r.d(t,{T4:function(){return c},tP:function(){return a}});var n=r(69760),i=r(15102),o=r(39135);function a(e,t,r,{strict:n}={}){return(0,i.v)(e,{strict:!1})?function(e,t,r,{strict:n}={}){s(e,t);let i=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return n&&l(i,t,r),i}(e,t,r,{strict:n}):c(e,t,r,{strict:n})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new n.mV({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new n.mV({offset:r,position:"end",size:(0,o.d)(e)})}function c(e,t,r,{strict:n}={}){s(e,t);let i=e.slice(t,r);return n&&l(i,t,r),i}},61836:function(e,t,r){"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return(r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return n}})},95946:function(e,t,r){"use strict";r.d(t,{Yf:function(){return s},ly:function(){return c},rR:function(){return u},y_:function(){return l}});var n=r(87788),i=r(39135),o=r(61836),a=r(11187);function s(e,{size:t}){if((0,i.d)(e)>t)throw new n.M6({givenSize:(0,i.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let n=BigInt(e);if(!r)return n;let i=(e.length-2)/2,o=(1n<<8n*BigInt(i)-1n)-1n;return n<=o?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function c(e,t={}){return Number(l(e,t))}function u(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},11187:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return f}});var n=r(62027),i=r(15102),o=r(61769),a=r(95946),s=r(92106);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let r=(0,s.eC)(e,t);return h(r)}(e,t):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,i.v)(e)?h(e,t):f(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);let s=i.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(i.charCodeAt(t++)),o=d(i.charCodeAt(t++));if(void 0===r||void 0===o)throw new n.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);l[e]=16*r+o}return l}function f(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},92106:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var n=r(87788),i=r(61769),o=r(95946);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,i.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let n=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(n,{size:t.size}),(0,i.vk)(n,{dir:"right",size:t.size})):n}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new n.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,i.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){let r=d.encode(e);return c(r,t)}},72365:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var n=r(57412),i=r(62027),o=r(97405),a=r(39028);function s(e,{abi:t,address:r,args:s,docsPath:l,functionName:c,sender:u}){let{code:d,data:h,message:f,shortMessage:p}=e instanceof o.VQ?e:e instanceof i.G?e.walk(e=>"data"in e)||e.walk():{},g=e instanceof n.wb?new o.Dk({functionName:c}):[3,a.XS.code].includes(d)&&(h||f||p)?new o.Lu({abi:t,data:"object"==typeof h?h.data:h,functionName:c,message:p??f}):e;return new o.uq(g,{abi:t,args:s,contractAddress:r,docsPath:l,functionName:c,sender:u})}},87469:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var n=r(62027),i=r(26445);function o(e,t){let r=(e.details||"").toLowerCase(),o=e instanceof n.G?e.walk(e=>e.code===i.M_.code):e;return o instanceof n.G?new i.M_({cause:e,message:o.details}):i.M_.nodeMessage.test(r)?new i.M_({cause:e,message:e.details}):i.Hh.nodeMessage.test(r)?new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.G$.nodeMessage.test(r)?new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.ZI.nodeMessage.test(r)?new i.ZI({cause:e,nonce:t?.nonce}):i.vU.nodeMessage.test(r)?new i.vU({cause:e,nonce:t?.nonce}):i.se.nodeMessage.test(r)?new i.se({cause:e,nonce:t?.nonce}):i.C_.nodeMessage.test(r)?new i.C_({cause:e}):i.WF.nodeMessage.test(r)?new i.WF({cause:e,gas:t?.gas}):i.dR.nodeMessage.test(r)?new i.dR({cause:e,gas:t?.gas}):i.pZ.nodeMessage.test(r)?new i.pZ({cause:e}):i.cs.nodeMessage.test(r)?new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.cj({cause:e})}},61163:function(e,t,r){"use strict";function n(e,{format:t}){if(!t)return{};let r={},n=t(e||{});return!function t(n){let i=Object.keys(n);for(let o of i)o in e&&(r[o]=e[o]),n[o]&&"object"==typeof n[o]&&!Array.isArray(n[o])&&t(n[o])}(n),r}r.d(t,{K:function(){return n}})},74688:function(e,t,r){"use strict";r.d(t,{tG:function(){return o}});var n=r(92106);let i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function o(e){return{...e,gas:void 0!==e.gas?(0,n.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,n.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,n.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,n.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,n.eC)(e.nonce):void 0,type:void 0!==e.type?i[e.type]:void 0,value:void 0!==e.value?(0,n.eC)(e.value):void 0}}},93714:function(e,t,r){"use strict";function n(e,t,r){return n=>e[t.name||r]?.(n)??t(e,n)}r.d(t,{s:function(){return n}})},88184:function(e,t,r){"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return M}});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,d=(e,t,r)=>e<<r-32|t>>>64-r,h=e=>e instanceof Uint8Array,f=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),p=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!p)throw Error("Non little-endian hardware is not supported");function g(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!h(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class m{clone(){return this._cloneInto()}}let[y,w,v]=[[],[],[]],b=BigInt(0),x=BigInt(1),C=BigInt(2),_=BigInt(7),E=BigInt(256),S=BigInt(113);for(let e=0,t=x,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],y.push(2*(5*n+r)),w.push((e+1)*(e+2)/2%64);let i=b;for(let e=0;e<7;e++)(t=(t<<x^(t>>_)*S)%E)&C&&(i^=x<<(x<<BigInt(e))-x);v.push(i)}let[k,A]=function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[i],t);[r[i],n[i]]=[o,l]}return[r,n]}(v,!0),O=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),P=(e,t,r)=>r>32?d(e,t,r):c(e,t,r);class T extends m{constructor(e,t,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=f(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,i=(t+2)%10,o=r[i],a=r[i+1],s=O(o,a,1)^r[n],l=P(o,a,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],i=e[3];for(let r=0;r<24;r++){let n=w[r],o=O(t,i,n),a=P(t,i,n),s=y[r];t=e[s],i=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=k[n],e[1]^=A[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this;e=g(e);let n=e.length;for(let i=0;i<n;){let o=Math.min(t-this.pos,n-i);for(let t=0;t<o;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,(128&t)!=0&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){o(this,!1),i(e),this.finish();let t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){i(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:o}=this;return e||(e=new T(t,r,n,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=o,e.destroyed=this.destroyed,e}}let R=function(e){let t=t=>e().update(g(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new T(136,1,32));var I=r(15102),$=r(11187),N=r(92106);function M(e,t){let r=R((0,I.v)(e,{strict:!1})?(0,$.O0)(e):e);return"bytes"===(t||"hex")?r:(0,N.NC)(r)}},58034:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var n=r(3972),i=r(67684);let o=e=>(0,n.tP)((0,i.r)(e),0,4)},67684:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(11187),i=r(88184);let o=e=>(0,i.w)((0,n.O0)(e)),a=/^tuple(?<array>(\[(\d*)\])*)$/;function s(e){let t="",r=e.length;for(let n=0;n<r;n++){let i=e[n];t+=function e(t){let r=t.type;if(a.test(t.type)&&"components"in t){r="(";let n=t.components.length;for(let i=0;i<n;i++){let o=t.components[i];r+=e(o),i<n-1&&(r+=", ")}let i=function(e,t){let r=e.exec(t);return r?.groups}(a,t.type);return r+=`)${i?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(i),n!==r-1&&(t+=", ")}return t}var l=r(62027);let c=e=>{var t;let r="string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${s(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${s(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${s(t.inputs)})`:"error"===t.type?`error ${t.name}(${s(t.inputs)})`:"constructor"===t.type?`constructor(${s(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable";return function(e){let t=!0,r="",n=0,i="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&n++,")"===s&&n--,t){if(0===n){if(" "===s&&["event","function",""].includes(i))i="";else if(i+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}i+=s,r+=s}}if(!o)throw new l.G("Unable to normalize signature.");return i}(r)};function u(e){return o(c(e))}},32357:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});let n=new Map;function i({fn:e,id:t,shouldSplitBatch:r,wait:i=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){let{pendingPromise:n}=t[r];n.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:n}=t[r];n.reject?.(e)}})},s=()=>n.delete(t),l=()=>c().map(({args:e})=>e),c=()=>n.get(t)||[],u=e=>n.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},n=new Promise((e,r)=>{t.resolve=e,t.reject=r}),o=r?.([...l(),e]);o&&a();let s=c().length>0;return s?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,i)),n}}}},97933:function(e,t,r){"use strict";async function n(e){return new Promise(t=>setTimeout(t,e))}function i(e,{delay:t=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await n(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await i({count:l,error:e}))return c({error:e});a(e)}};s()})}r.d(t,{J:function(){return i}})},96070:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=(e,t,r)=>JSON.stringify(e,(e,r)=>{let n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n},r)},47531:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var n=r(14503),i=r(26087),o=r(26445),a=r(33639),s=r(49321);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,n.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new i.b({address:d.address});if(u&&!(0,s.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},39625:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var n=r(84192),i=r(15229);function o(e,t="wei"){return(0,i.b)(e,n.ez[t])}},67795:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var n=r(84192),i=r(15229);function o(e,t="wei"){return(0,i.b)(e,n.Zn[t])}},15229:function(e,t,r){"use strict";function n(e,t){let r=e.toString(),n=r.startsWith("-");n&&(r=r.slice(1));let[i,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}r.d(t,{b:function(){return n}})},92611:function(e,t,r){"use strict";r.d(t,{V:function(){return s},F:function(){return l}});var n=r(67294);let i=!1;async function o(e,t={}){let r;if(i)return[];i=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let n=[];if(t.connectors?.length)for(let r of t.connectors){let t;t="function"==typeof r?e._internal.connectors.setup(r):r,n.push(t)}else n.push(...e.connectors);try{r=await e.storage?.getItem("recentConnectorId")}catch{}let o={};for(let[,t]of e.state.connections)o[t.connector.id]=1;r&&(o[r]=0);let a=Object.keys(o).length>0?[...n].sort((e,t)=>(o[e.id]??10)-(o[t.id]??10)):n,s=!1,l=[],c=[];for(let t of a){let r=await t.getProvider();if(!r||c.some(e=>e===r))continue;let n=await t.isAuthorized();if(!n)continue;let i=await t.connect({isReconnecting:!0}).catch(()=>null);i&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let r=new Map(s?e.connections:new Map).set(t.uid,{accounts:i.accounts,chainId:i.chainId,connector:t});return{...e,current:s?e.current:t.uid,connections:r}}),l.push({accounts:i.accounts,chainId:i.chainId,connector:t}),c.push(r),s=!0)}return s?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:void 0,status:"disconnected"})),i=!1,l}function a(e){let{children:t,config:r,initialState:i,reconnectOnMount:a=!0}=e,{onMount:s}=function(e,t){let{initialState:r,reconnectOnMount:n}=t;return r&&e.setState({...r,connections:n?r.connections:new Map,status:n?"reconnecting":"disconnected"}),{async onMount(){if(e._internal.ssr){await e._internal.store.persist.rehydrate();let t=e._internal.mipd?.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);e._internal.connectors.setState(e=>[...e,...t??[]])}n?o(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(r,{initialState:i,reconnectOnMount:a});r._internal.ssr||s();let l=(0,n.useRef)(!0);return(0,n.useEffect)(()=>{if(l.current&&r._internal.ssr)return s(),()=>{l.current=!1}},[]),t}let s=(0,n.createContext)(void 0);function l(e){let{children:t,config:r}=e;return(0,n.createElement)(a,e,(0,n.createElement)(s.Provider,{value:r},t))}},48614:function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){let r,i;if(e.constructor!==t.constructor)return!1;if(Array.isArray(e)&&Array.isArray(t)){if((r=e.length)!==t.length)return!1;for(i=r;0!=i--;)if(!n(e[i],t[i]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();let o=Object.keys(e);if((r=o.length)!==Object.keys(t).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=r;0!=i--;){let r=o[i];if(r&&!n(e[r],t[r]))return!1}return!0}return e!=e&&t!=t}function i(e){let t=e.state.current,r=e.state.connections.get(t),n=r?.accounts,i=n?.[0],o=e.chains.find(e=>e.id===r?.chainId),a=e.state.status;switch(a){case"connected":return{address:i,addresses:n,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:i,addresses:n,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!!i,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:i,addresses:n,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}r.d(t,{m:function(){return c}});var o=r(37122),a=r(67294),s=r(52798);let l=e=>"object"==typeof e&&!Array.isArray(e);function c(e={}){let t=(0,o.Z)(e);return function(e,t,r=t,i=n){let o=(0,a.useRef)([]),c=(0,s.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(l(e)&&l(t)&&o.current.length){for(let r of o.current){let n=i(e[r],t[r]);if(!n)return!1}return!0}return i(e,t)});if(l(c)){let e={...c};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(o.current.includes(t)||o.current.push(t),r)}}),{})),e}return c}(e=>(function(e,t){let{onChange:r}=t;return e.subscribe(()=>i(e),r,{equalityFn(e,t){let{connector:r,...i}=e,{connector:o,...a}=t;return n(i,a)&&r?.id===o?.id&&r?.uid===o?.uid}})})(t,{onChange:e}),()=>i(t))}},37122:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(67294),i=r(92611),o=r(93981);let a=()=>"wagmi@2.5.6";class s extends o.G{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return a()}}class l extends s{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"https://wagmi.sh/react/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function c(e={}){let t=e.config??(0,n.useContext)(i.V);if(!t)throw new l;return t}},28690:function(e,t,r){"use strict";r.d(t,{e:function(){return s}});var n=r(16189),i=r(3980),o=r(14503),a=r(87083);async function s(e,t={}){let r;if(t.connector){let{connector:e}=t,[n,i]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:n,chainId:i,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new a.aH;let s=t.chainId??r.chainId,l=r.connector;if(l.getClient)return l.getClient({chainId:s});let c=(0,o.T)(t.account??r.accounts[0]),u=e.chains.find(e=>e.id===s),d=await r.connector.getProvider({chainId:s});if(t.account&&!r.accounts.includes(c.address))throw new a.JK({address:c.address,connector:l});return(0,n.e)({account:c,chain:u,name:"Connector Client",transport:e=>(0,i.P)(d)({...e,retryCount:0})})}},93981:function(e,t,r){"use strict";r.d(t,{G:function(){return l}});var n,i,o=r(14023);let a=()=>`@wagmi/core@${o.i}`;var s=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};class l extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return a()}constructor(e,t={}){super(),n.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof l?t.cause.details:t.cause?.message?t.cause.message:t.details,i=t.cause instanceof l&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...i?[`Docs: ${this.docsBaseUrl}${i}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=i,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,n,"m",i).call(this,this,e)}}n=new WeakSet,i=function e(t,r){return r?.(t)?t:t.cause?s(this,n,"m",e).call(this,t.cause,r):t}},87083:function(e,t,r){"use strict";r.d(t,{JK:function(){return a},X4:function(){return i},aH:function(){return o}});var n=r(93981);class i extends n.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class o extends n.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class a extends n.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}},81848:function(e,t,r){"use strict";function n(e,t,r){let n=e[t.name??r];return"function"==typeof n?n:r=>t(e,r)}r.d(t,{s:function(){return n}})},14023:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});let n="2.6.4"},46951:function(e){"use strict";e.exports=JSON.parse('{"NA":"stETH","Lk":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","uH":18}')},92685:function(e){"use strict";e.exports=JSON.parse('{"abi":[{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},36023:function(e){"use strict";e.exports=JSON.parse('{"address":"0xf047ab4c75cebf0eb9ed34ae2c186f3611aeafa6","abi":[{"inputs":[{"internalType":"address","name":"_signer","type":"address"},{"internalType":"address[]","name":"tokensAllowed","type":"address[]"},{"internalType":"address","name":"_weth","type":"address"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"DepositAmountCannotBeZero","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidAccountNonce","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[],"name":"SignatureExpired","type":"error"},{"inputs":[],"name":"SignatureInvalid","type":"error"},{"inputs":[],"name":"SignerAlreadySetToAddress","type":"error"},{"inputs":[],"name":"SignerCannotBeZeroAddress","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"inputs":[],"name":"TokenAlreadyConfiguredWithState","type":"error"},{"inputs":[],"name":"TokenCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"TokenNotAllowedForStaking","type":"error"},{"inputs":[],"name":"UserDoesNotHaveStake","type":"error"},{"inputs":[],"name":"WETHCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"WithdrawAmountCannotBeZero","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"eventId","type":"uint256"},{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"eventId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address[]","name":"tokens","type":"address[]"},{"indexed":false,"internalType":"address","name":"destination","type":"address"},{"indexed":false,"internalType":"address","name":"migrator","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"Migrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newSigner","type":"address"}],"name":"SignerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"TokenStakabilityChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"eventId","type":"uint256"},{"indexed":true,"internalType":"address","name":"withdrawer","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_for","type":"address"}],"name":"depositETHFor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_for","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"address","name":"_migratorContract","type":"address"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_signatureExpiry","type":"uint256"},{"internalType":"bytes","name":"_authorizationSignatureFromZircuit","type":"bytes"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"address","name":"_migratorContract","type":"address"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_signatureExpiry","type":"uint256"},{"internalType":"bytes","name":"_stakerSignature","type":"bytes"}],"name":"migrateWithSig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"bool","name":"_canStake","type":"bool"}],"name":"setStakable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_signer","type":"address"}],"name":"setZircuitSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenAllowlist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zircuitSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')},54280:function(e){"use strict";e.exports=JSON.parse('{"D":{"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","decimals":18,"protocolLogo":"wrapped-ethereum-logo.svg","assetLogo":"eth-logo.svg"},"H":{"rsETH":{"address":"0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7","protocolLogo":"kelp-logo.svg","assetLogo":"rseth-logo.svg","poolAddress":"0x7761b6e0daa04e70637d81f1da7d186c205c2ade","decimals":18,"enabled":true},"ezETH":{"address":"0xbf5495Efe5DB9ce00f80364C8B423567e58d2110","protocolLogo":"renzo-logo.svg","assetLogo":"ezeth-logo.svg","poolAddress":"0xbe80225f09645f172b079394312220637c440a63","decimals":18,"enabled":true},"wstETH":{"address":"0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0","protocolLogo":"lido-logo.svg","assetLogo":"wsteth-logo.svg","poolAddress":"0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa","decimals":18,"enabled":true},"lsETH":{"address":"0x8c1BEd5b9a0928467c9B1341Da1D7BD5e10b6549","protocolLogo":"liquid-collective-logo.svg","assetLogo":"lseth-logo.svg","poolAddress":"0x5d811a9d059ddab0c18b385ad3b752f734f011cb","decimals":18,"enabled":true},"ETH":{"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","protocolLogo":"ethereum-logo.svg","assetLogo":"eth-logo.svg","poolAddress":"0x4e68ccd3e89f51c3074ca5072bbac773960dfa36","decimals":18,"enabled":true},"rswETH":{"address":"0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0","protocolLogo":"swell-logo.svg","assetLogo":"rsweth-logo.svg","poolAddress":"0xe62627326d7794e20bb7261b24985294de1579fe","decimals":18,"enabled":true},"swETH":{"address":"0xf951E335afb289353dc249e82926178EaC7DEd78","protocolLogo":"swell-logo-sweth.svg","assetLogo":"sweth-logo.svg","poolAddress":"0x30ea22c879628514f1494d4bbfef79d21a6b49a2","decimals":18,"enabled":true}}}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(57875)}),_N_E=e.O()}]);