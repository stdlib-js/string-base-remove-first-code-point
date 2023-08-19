"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var F=f(function(h,v){
var c=/[\uDC00-\uDFFF]/,s=/[\uD800-\uDBFF]/;function R(r,e){var a,u,n,t,i;if(e===0)return r;for(a=r.length,t=0,i=0;i<a;i++){if(u=r[i],t+=1,s.test(u)){if(i===a-1)break;n=r[i+1],c.test(n)&&(i+=1)}if(t===e)break}return r.substring(t,r.length)}v.exports=R
});var _=F();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
