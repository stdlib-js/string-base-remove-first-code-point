// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var t=/[\uDC00-\uDFFF]/,r=/[\uD800-\uDBFF]/;function e(e,u){var f,n,a,i,s;if(0===u)return e;for(f=e.length,i=0,s=0;s<f;s++){if(n=e[s],i+=1,r.test(n)){if(s===f-1)break;a=e[s+1],t.test(a)&&(s+=1)}if(i===u)break}return e.substring(s+1,e.length)}export{e as default};
//# sourceMappingURL=index.mjs.map
