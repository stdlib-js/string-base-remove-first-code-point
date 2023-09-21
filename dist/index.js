"use strict";var f=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var F=f(function(h,v){
var c=/[\uDC00-\uDFFF]/,s=/[\uD800-\uDBFF]/;function R(r,i){var t,u,n,a,e;if(i===0)return r;for(t=r.length,a=0,e=0;e<t;e++){if(u=r[e],a+=1,s.test(u)){if(e===t-1)break;n=r[e+1],c.test(n)&&(e+=1)}if(a===i)break}return r.substring(e+1,r.length)}v.exports=R
});var _=F();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
