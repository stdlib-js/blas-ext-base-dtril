"use strict";var g=function(u,e){return function(){try{return e||u((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var x=g(function(Z,h){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(u,e,n,f,m,t,d,i,s,l,q){var v,o,r,a;if(v=d,o=q,O([m,t])){for(a=0;a<u;a++){for(r=0;r<=T(a+n,e-1);r++)i[o+r*l]=f[v+r*t];v+=m,o+=s}return i}for(a=0;a<e;a++){for(r=S(0,a-n);r<u;r++)i[o+r*s]=f[v+r*m];v+=t,o+=l}return i}h.exports=z
});var y=g(function($,p){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/math-base-special-fast-max/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),H=x();function I(u,e,n,f,m,t,d,i){var s,l,q,v,o,r,a;if(a=C(u),a===null)throw new TypeError(b('36VFx',u));if(s=G(a),s?r=n:r=e,t<w(1,r))throw new RangeError(b('36VJL',r,t));if(i<w(1,r))throw new RangeError(b('36VGM',r,i));return s?(l=t,q=1,v=i,o=1):(l=1,q=t,v=1,o=i),H(e,n,f,m,l,q,0,d,v,o,0)}p.exports=I
});var j=g(function(k,R){
var J=x();function K(u,e,n,f,m,t,d,i,s,l,q){return J(u,e,n,f,m,t,d,i,s,l,q)}R.exports=K
});var _=g(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),c,F=U(Q(__dirname,"./native.js"));W(F)?c=X:c=F;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
