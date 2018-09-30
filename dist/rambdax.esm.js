import{filter as n,type as t,equals as r,curry as e,replace as i,compose as u,map as a,sort as o,take as c,merge as s,toLower as f,contains as l,test as h,any as p,all as v,init as d,range as y,length as m,last as g,split as w,omit as b,add as P,addIndex as A,adjust as O,allPass as j,always as M,anyPass as S,append as x,assoc as k,both as E,complement as B,concat as R,dec as T,defaultTo as L,dissoc as _,divide as N,drop as D,dropLast as F,either as q,endsWith as U,F as V,find as W,findIndex as z,flatten as C,flip as H,forEach as I,groupBy as X,has as Y,head as J,identity as Z,ifElse as G,inc as K,includes as Q,indexBy as $,indexOf as nn,is as tn,isNil as rn,join as en,keys as un,lastIndexOf as an,match as on,max as cn,maxBy as sn,min as fn,minBy as ln,modulo as hn,multiply as pn,none as vn,not as dn,nth as yn,partialCurry as mn,path as gn,pathOr as wn,pick as bn,pickAll as Pn,pipe as An,pluck as On,prepend as jn,prop as Mn,propEq as Sn,reduce as xn,reject as kn,repeat as En,reverse as Bn,sortBy as Rn,splitEvery as Tn,startsWith as Ln,subtract as _n,T as Nn,tail as Dn,takeLast as Fn,tap as qn,times as Un,toString as Vn,toUpper as Wn,trim as zn,uniq as Cn,uniqWith as Hn,update as In,values as Xn,without as Yn,zip as Jn,zipObj as Zn}from"rambda";function Gn(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return n.filter(Boolean).length===n.length}function Kn(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return 0===n.length||n.filter(function(n){return!1===Boolean(n)}).length===n.length}var Qn=["Null","Undefined","RegExp"];function $n(e){return n(function(n){var e=t(n);return!Qn.includes(e)&&("Object"===e?!r(n,{}):0!==n.length)},e)}function nt(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];try{return function(r){return new Promise(function(e,i){var u,a;function o(){if(0===n.length)return[1];{var r;return r=n.pop(),"Async"===t(r)||"Promise"===t(r)?r(u).then(function(n){try{return u=n,e.call(this)}catch(n){return i(n)}}.bind(this),i):(u=r(u),e.call(this));function e(){return o}}}return u=r,(a=function(n){for(;n;){if(n.then)return void n.then(a,i);try{if(n.pop){if(n.length)return n.pop()?c.call(this):n;n=o}else n=n.call(this)}catch(n){return i(n)}}}.bind(this))(o);function c(){return e(u)}})}}catch(n){throw n}}function tt(n,t,r){var e;return void 0===r&&(r=!1),function(){for(var i=[],u=arguments.length;u--;)i[u]=arguments[u];var a=r&&!e;clearTimeout(e),e=setTimeout(function(){e=null,r||n.apply(null,i)},t),a&&n.apply(null,i)}}function rt(n){return new Promise(function(t){setTimeout(function(){t("RAMBDAX_DELAY")},n)})}var et=e(function r(e,i){var u=Object.assign({},i),a=n(function(n){return void 0!==u[n]})(Object.keys(e));return 0===a.length?i:(a.map(function(n){var i=e[n];"Function"===t(i)?u[n]=i(u[n]):"Object"===t(i)&&(u[n]=r(i,u[n]))}),u)});function it(n,t){return void 0===t?function(t){return it(n,t)}:t>n}function ut(n){return function(t){return new Promise(function(r,e){return r(n(t))})}}function at(n,t,r){return void 0===t?function(t,r){return at(n,t,r)}:void 0===r?function(r){return at(n,t,r)}:function(e){return new Promise(function(i,u){var a=ut(n),o=ut(t),c=ut(r);a(e).then(function(n){(!0===n?o:c)(e).then(i).catch(u)}).catch(u)})}}function ot(n,t,r){return i(t,""+t+n,r)}function ct(t,r){return void 0===r?function(n){return ct(t,n)}:n(function(n){return r.includes(n)})(t)}function st(n){return["Async","Promise"].includes(t(n))}function ft(n,t){return void 0===t?function(t){return ft(n,t)}:t<n}function lt(n,t){return new Promise(function(r,e){var i=function(n){try{throw n}catch(n){return e(n)}};try{var u;if(Array.isArray(t)){var a,o,c;function s(){var n=c();return f.bind(this,n[0],n[1])}function f(t,r){return c=function(){return[t,r]},!(r[1]=r[0].next()).done&&(t=r[1].value,1)?n(t).then(function(n){try{return a.push(n),s}catch(n){return i(n)}},i):[1]}return a=[],(o=function(n){for(;n;){if(n.then)return void n.then(o,i);try{if(n.pop){if(n.length)return n.pop()?l.call(this):n;n=s}else n=n.call(this)}catch(n){return i(n)}}}.bind(this))(f.bind(this,void 0,[t[Symbol.iterator]()]));function l(){return r(a)}}u={};var h,p,v=[];for(h in t)v.push(h);function d(r){return v.length?(r=v.shift(),n(t[r],r).then(function(n){try{return u[r]=n,d}catch(n){return i(n)}},i)):[1]}return(p=function(n){for(;n;){if(n.then)return void n.then(p,i);try{if(n.pop){if(n.length)return n.pop()?y.call(this):n;n=d}else n=n.call(this)}catch(n){return i(n)}}}.bind(this))(d.bind(this,void 0));function y(){return r(u)}}catch(n){i(n)}})}function ht(n,t){return void 0===t?function(t){return new Promise(function(r,e){return lt(n,t).then(r,e)})}:new Promise(function(r,e){lt(n,t).then(r).catch(e)})}function pt(n,t){return new Promise(function(r,e){var i=function(n){try{throw n}catch(n){return e(n)}};try{var u;return u=t.map(function(t){return n(t)}),Promise.all(u).then(r,i)}catch(n){i(n)}})}function vt(n,t){return void 0===t?function(t){return new Promise(function(r,e){return pt(n,t).then(r,e)})}:new Promise(function(r,e){pt(n,t).then(r).catch(e)})}var dt={},yt=function(n){if("String"===t(n))return n;if(["Function","Async"].includes(t(n))){var r=i(/\s{1,}/g," ",n.toString());return i(/\s/g,"_",c(15,r))}var e,s;return"Object"===t(n)&&(e=n,s={},u(a(function(n){return s[n]=e[n]}),o(function(n,t){return n>t}))(Object.keys(e)),n=s),JSON.stringify(n)},mt=function(n){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var e="";return t.map(function(n){e+=yt(n)+"_"}),""+e+yt(n)};function gt(n){for(var r=[],e=arguments.length-1;e-- >0;)r[e]=arguments[e+1];if(1===arguments.length)return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return gt.apply(void 0,[n].concat(t))};var i=mt.apply(void 0,[n].concat(r));if(i in dt)return dt[i];if("Async"===t(n))return new Promise(function(t){n.apply(void 0,r).then(function(n){dt[i]=n,t(n)})});var u=n.apply(void 0,r);return dt[i]=u,u}function wt(n){var t={};return a(function(n){t=s(t,n)},n),t}function bt(n,t){return n.split("\n").filter(function(n){return n.trim().length>0}).map(function(n){return n.trim()}).join(t||" ")}function Pt(n){var r=n.input,e=n.schema;if("Object"===t(r)&&"Object"===t(e)){var i=!0,u=function(n){n||(i=!1)};for(var a in e)if(i){var o=a.endsWith("?"),c=o?d(a):a,s=e[a],y=t(s),m=r[c],g=t(r[c]);if(!(o&&void 0!==m||!o))continue;if("Object"===y)u(Pt({input:m,schema:s}));else if("String"===y)u(f(g)===s);else if("function"==typeof s)u(s(m));else if("Array"===y&&"String"===g)u(l(m,s));else if("Array"===y&&1===s.length&&"Array"===g){var w=s[0],b=t(s[0]);if(u("String"===b||"Object"===b),"String"===b)u(!p(function(n){return t(n).toLowerCase()!==w},m));if("Object"===b)u(v(function(n){return Pt({input:n,schema:w})},m))}else u("RegExp"===y&&"String"===g&&h(s,m))}return i}return!1}function At(n,t){return 2===arguments.length?Pt({input:n,schema:t}):function(t){return Pt({input:n,schema:t})}}function Ot(n,t){if(1===arguments.length)return function(t){return Ot(n,t)};var r={};for(var e in t)n(e,t[e])||(r[e]=t[e]);return r}function jt(n,t){var r;return function(){return n&&(r=n.apply(t||this,arguments),n=null),r}}function Mt(n,t){if(1===arguments.length){var r=jt(n,t);return e(r)}return jt(n,t)}function St(n,t){if(1===arguments.length)return function(t){return St(n,t)};var r={};for(var e in t)n(e,t[e])&&(r[e]=t[e]);return r}function xt(n){var r=n.condition,e=n.inputArgument,i=n.prop;return new Promise(function(n,u){if("Async"!==t(r))return n({type:i,payload:r(e)});r(e).then(function(t){n({type:i,payload:t})}).catch(function(n){return u(n)})})}function kt(n,r){if(1===arguments.length)return function(t){return kt(n,t)};var e=!1;for(var i in n)!1===e&&"Async"===t(n[i])&&(e=!0);if(!1===e){var u={};for(var o in n)u[o]=n[o](r);return u}var c=[];for(var s in n){c.push(xt({inputArgument:r,condition:n[s],prop:s}))}return new Promise(function(n,t){Promise.all(c).then(function(t){var r={};a(function(n){return r[n.type]=n.payload},t),n(r)}).catch(function(n){return t(n)})})}function Et(n,t){return Math.floor(Math.random()*(t-n+1))+n}function Bt(n,t,r){if(void 0===t)return function(t,r){return Bt(n,t,r)};if(void 0===r)return function(r){return Bt(n,t,r)};var e=!r.toString().includes(".");if(n>t){var i=n;n=t,t=i}var a=[n],o=n;if(e)for(var c=0,s=y(0,Math.floor((t-n)/r));c<s.length;c+=1){a.push(o+=r)}else for(var f=u(m,g,w("."))(r.toString()),l=0,h=y(0,Math.floor((t-n)/r));l<h.length;l+=1){o+=r,a.push(Number(o.toFixed(f)))}return a}function Rt(n,t){if(void 0===t)return function(t){return Rt(n,t)};var r={};return Object.keys(n).map(function(e){Object.keys(t).includes(e)&&(r[n[e]]=t[e])}),s(r,b(Object.keys(n),t))}function Tt(n){return new Promise(function(t,r){var e=0,i={},u=[];for(var a in n)i[e]=a,u.push(n[a]),e++;Promise.all(u).then(function(n){var r={};n.map(function(n,t){r[i[t]]=n}),t(r)}).catch(r)})}var Lt=function(n){return new Promise(function(t){n.then(function(n){t({payload:n,type:"RESULT"})}).catch(function(n){t({payload:n,type:"ERROR"})})})};function _t(n){return new Promise(function(t,r){var e=function(n){try{return console.log(n),function(){try{return t()}catch(n){return r(n)}}()}catch(n){return r(n)}};try{var i;return i=a(function(n){return Lt(n)},n),Promise.all(i).then(t,e)}catch(n){e(n)}})}function Nt(n){for(var t=n.concat(),r=t.length;r>0;){var e=Math.floor(Math.random()*r),i=t[--r];t[r]=t[e],t[e]=i}return t}var Dt=Symbol("NO_MATCH_FOUND"),Ft=function(n,t,r){return void 0!==n&&void 0===t&&void 0===r?(this.cases=[],this.defaultValue=void 0,this.willMatch=n):(this.cases=t,this.defaultValue=n,this.willMatch=r),this};function qt(n){return new Ft(n)}function Ut(n,t){return 1===arguments.length?function(t){return Ut(n,t)}:!0===st(n)?new Promise(function(r,e){n(t).then(function(){r(t)}).catch(e)}):(n(t),t)}function Vt(n,t){var r=!1;return function(){for(var e=[],i=arguments.length;i--;)e[i]=arguments[i];r||(n.apply(null,e),r=!0,setTimeout(function(){r=!1},t))}}Ft.prototype.default=function(n){return new Ft(n,this.cases,this.willMatch).match(this.willMatch)},Ft.prototype.is=function n(t,r){return new Ft(this.defaultValue,this.cases.concat([n(t,r)]),this.willMatch)},Ft.prototype.match=function(n){return function(n,t,r){for(var e,i=0;i<n.length;i++)if((e=n[i].test(t))!==Dt)return e;return r}(this.cases,n,this.defaultValue)};var Wt=function(n){return n.match(/{{[_a-zA-Z0-9]+}}/g)},zt=function(n){return n.replace(/{{|}}/g,"")},Ct=function(n){return n.inputHolder.replace("{{"+n.prop+"}}",n.replacer)};function Ht(n,t){var r=Wt(n);if(null===r)return n;for(var e=n,i=0,u=r;i<u.length;i+=1){var a=zt(u[i]),o=t[a];void 0!==o&&(e=Ct({inputHolder:e,prop:a,replacer:o}))}return e}function It(n,t){return void 0===t?function(t){return It(n,t)}:function(r){return("boolean"==typeof n?n:n(r))?t(r):r}}function Xt(n,t){return void 0===t?function(n,t){return Xt(n,t)}:function(r){return new Promise(function(e,i){if("boolean"==typeof n){if(!1===n)return e(r);t(r).then(e).catch(i)}else{(u=n,function(n){return new Promise(function(t,r){return t(u(n))})})(r).then(function(n){if(!1===n)return e(r);t(r).then(e).catch(i)}).catch(i)}var u})}}function Yt(n,t){if(void 0===t)return function(t){return Yt(n,t)};var r=!0;for(var e in n){var i=n[e](t[e]);r&&!1===i&&(r=!1)}return r}var Jt="RAMBDAX_DELAY",Zt=P,Gt=A,Kt=O,Qt=v,$t=j,nr=M,tr=p,rr=S,er=x,ir=k,ur=E,ar=B,or=u,cr=R,sr=l,fr=e,lr=T,hr=L,pr=_,vr=N,dr=D,yr=F,mr=q,gr=U,wr=r,br=V,Pr=n,Ar=W,Or=z,jr=C,Mr=H,Sr=I,xr=X,kr=Y,Er=J,Br=Z,Rr=G,Tr=K,Lr=Q,_r=$,Nr=nn,Dr=d,Fr=tn,qr=rn,Ur=en,Vr=un,Wr=g,zr=an,Cr=m,Hr=a,Ir=on,Xr=s,Yr=cn,Jr=sn,Zr=fn,Gr=ln,Kr=hn,Qr=pn,$r=vn,ne=dn,te=yn,re=b,ee=mn,ie=gn,ue=wn,ae=bn,oe=Pn,ce=An,se=On,fe=jn,le=Mn,he=Sn,pe=y,ve=xn,de=kn,ye=En,me=i,ge=Bn,we=o,be=Rn,Pe=w,Ae=Tn,Oe=Ln,je=_n,Me=Nn,Se=Dn,xe=c,ke=Fn,Ee=qn,Be=h,Re=Un,Te=f,Le=Vn,_e=Wn,Ne=zn,De=t,Fe=Cn,qe=Hn,Ue=In,Ve=Xn,We=Yn,ze=Jn,Ce=Zn;export{Jt as DELAY,Zt as add,Gt as addIndex,Kt as adjust,Qt as all,$t as allPass,nr as always,tr as any,rr as anyPass,er as append,ir as assoc,ur as both,ar as complement,or as compose,cr as concat,sr as contains,fr as curry,lr as dec,hr as defaultTo,pr as dissoc,vr as divide,dr as drop,yr as dropLast,mr as either,gr as endsWith,wr as equals,br as F,Pr as filter,Ar as find,Or as findIndex,jr as flatten,Mr as flip,Sr as forEach,xr as groupBy,kr as has,Er as head,Br as identity,Rr as ifElse,Tr as inc,Lr as includes,_r as indexBy,Nr as indexOf,Dr as init,Fr as is,qr as isNil,Ur as join,Vr as keys,Wr as last,zr as lastIndexOf,Cr as length,Hr as map,Ir as match,Xr as merge,Yr as max,Jr as maxBy,Zr as min,Gr as minBy,Kr as modulo,Qr as multiply,$r as none,ne as not,te as nth,re as omit,ee as partialCurry,ie as path,ue as pathOr,ae as pick,oe as pickAll,ce as pipe,se as pluck,fe as prepend,le as prop,he as propEq,pe as range,ve as reduce,de as reject,ye as repeat,me as replace,ge as reverse,we as sort,be as sortBy,Pe as split,Ae as splitEvery,Oe as startsWith,je as subtract,Me as T,Se as tail,xe as take,ke as takeLast,Ee as tap,Be as test,Re as times,Te as toLower,Le as toString,_e as toUpper,Ne as trim,De as type,Fe as uniq,qe as uniqWith,Ue as update,Ve as values,We as without,ze as zip,Ce as zipObj,Gn as allTrue,Kn as allFalse,$n as compact,nt as composeAsync,tt as debounce,rt as delay,et as evolve,it as greater,at as ifElseAsync,ot as inject,ct as intersection,st as isPromise,ft as less,ht as mapAsync,vt as mapFastAsync,gt as memoize,wt as mergeAll,bt as multiline,At as ok,Ot as omitBy,Mt as once,St as pickBy,kt as produce,Et as random,Bt as rangeBy,Rt as renameProps,Tt as resolve,_t as resolveSecure,Nt as shuffle,qt as switcher,Ut as tapAsync,Vt as throttle,Ht as template,It as when,Xt as whenAsync,Yt as where};
//# sourceMappingURL=rambdax.esm.js.map
