// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;return function(n,i){var f,o,r,u,s;if(0===i)return n;for(f=n.length,u=0,s=0;s<f;s++){if(o=n[s],u+=1,t.test(o)){if(s===f-1)break;r=n[s+1],e.test(r)&&(s+=1)}if(u===i)break}return n.substring(u,n.length)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).removeFirstCodePoint=t();
//# sourceMappingURL=browser.js.map
