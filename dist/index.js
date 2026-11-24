"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var F=f(function(h,v){
var c=/[\uDC00-\uDFFF]/,s=/[\uD800-\uDBFF]/;function R(r,e){var t,u,n,a,i;if(e===0)return r;for(t=r.length,a=0,i=0;i<t;i++){if(u=r[i],a+=1,s.test(u)){if(i===t-1)break;n=r[i+1],c.test(n)&&(i+=1)}if(a===e)break}return r.substring(i+1,r.length)}v.exports=R
});var _=F();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
