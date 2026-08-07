"use strict";var d=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var x=d(function(Z,h){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(i,e,u,f,q,t,g,a,s,o,l){var n,v,r,m;if(n=g,v=l,O([q,t])){for(m=0;m<i;m++){for(r=0;r<=T(m+u,e-1);r++)a[v+r*o]=f[n+r*t];n+=q,v+=s}return a}for(m=0;m<e;m++){for(r=S(0,m-u);r<i;r++)a[v+r*s]=f[n+r*q];n+=t,v+=o}return a}h.exports=z
});var y=d(function($,p){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/math-base-special-fast-max/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),H=x();function I(i,e,u,f,q,t,g,a){var s,o,l,n,v,r;if(!C(i))throw new TypeError(b('nullFx',i));if(s=G(i),s?r=u:r=e,t<w(1,r))throw new RangeError(b('nullJL',r,t));if(a<w(1,r))throw new RangeError(b('nullGM',r,a));return s?(o=t,l=1,n=a,v=1):(o=1,l=t,n=1,v=a),H(e,u,f,q,o,l,0,g,n,v,0)}p.exports=I
});var j=d(function(k,R){
var J=x();function K(i,e,u,f,q,t,g,a,s,o,l){return J(i,e,u,f,q,t,g,a,s,o,l)}R.exports=K
});var _=d(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),c,F=U(Q(__dirname,"./native.js"));W(F)?c=X:c=F;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
