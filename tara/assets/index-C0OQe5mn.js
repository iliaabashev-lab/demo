(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ld={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function k1(){if(Hv)return El;Hv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return El.Fragment=t,El.jsx=i,El.jsxs=i,El}var Gv;function W1(){return Gv||(Gv=1,Ld.exports=k1()),Ld.exports}var F=W1(),Od={exports:{}},Tl={},Pd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function q1(){return Vv||(Vv=1,(function(o){function t(Z,W){var ft=Z.length;Z.push(W);t:for(;0<ft;){var it=ft-1>>>1,ct=Z[it];if(0<l(ct,W))Z[it]=W,Z[ft]=ct,ft=it;else break t}}function i(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var W=Z[0],ft=Z.pop();if(ft!==W){Z[0]=ft;t:for(var it=0,ct=Z.length,Tt=ct>>>1;it<Tt;){var Vt=2*(it+1)-1,ie=Z[Vt],N=Vt+1,$=Z[N];if(0>l(ie,ft))N<ct&&0>l($,ie)?(Z[it]=$,Z[N]=ft,it=N):(Z[it]=ie,Z[Vt]=ft,it=Vt);else if(N<ct&&0>l($,ft))Z[it]=$,Z[N]=ft,it=N;else break t}}return W}function l(Z,W){var ft=Z.sortIndex-W.sortIndex;return ft!==0?ft:Z.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],x=1,g=null,v=3,S=!1,T=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(Z){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=Z)s(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function I(Z){if(w=!1,U(Z),!T)if(i(p)!==null)T=!0,P||(P=!0,q());else{var W=i(m);W!==null&&et(I,W.startTime-Z)}}var P=!1,E=-1,C=5,Y=-1;function B(){return M?!0:!(o.unstable_now()-Y<C)}function V(){if(M=!1,P){var Z=o.unstable_now();Y=Z;var W=!0;try{t:{T=!1,w&&(w=!1,D(E),E=-1),S=!0;var ft=v;try{e:{for(U(Z),g=i(p);g!==null&&!(g.expirationTime>Z&&B());){var it=g.callback;if(typeof it=="function"){g.callback=null,v=g.priorityLevel;var ct=it(g.expirationTime<=Z);if(Z=o.unstable_now(),typeof ct=="function"){g.callback=ct,U(Z),W=!0;break e}g===i(p)&&s(p),U(Z)}else s(p);g=i(p)}if(g!==null)W=!0;else{var Tt=i(m);Tt!==null&&et(I,Tt.startTime-Z),W=!1}}break t}finally{g=null,v=ft,S=!1}W=void 0}}finally{W?q():P=!1}}}var q;if(typeof L=="function")q=function(){L(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,G=lt.port2;lt.port1.onmessage=V,q=function(){G.postMessage(null)}}else q=function(){y(V,0)};function et(Z,W){E=y(function(){Z(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(Z){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var ft=v;v=W;try{return Z()}finally{v=ft}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(Z,W){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ft=v;v=Z;try{return W()}finally{v=ft}},o.unstable_scheduleCallback=function(Z,W,ft){var it=o.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?it+ft:it):ft=it,Z){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=ft+ct,Z={id:x++,callback:W,priorityLevel:Z,startTime:ft,expirationTime:ct,sortIndex:-1},ft>it?(Z.sortIndex=ft,t(m,Z),i(p)===null&&Z===i(m)&&(w?(D(E),E=-1):w=!0,et(I,ft-it))):(Z.sortIndex=ct,t(p,Z),T||S||(T=!0,P||(P=!0,q()))),Z},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(Z){var W=v;return function(){var ft=v;v=W;try{return Z.apply(this,arguments)}finally{v=ft}}}})(Id)),Id}var Xv;function Y1(){return Xv||(Xv=1,Pd.exports=q1()),Pd.exports}var zd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function Z1(){if(kv)return de;kv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),S=Symbol.iterator;function T(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function D(N,$,gt){this.props=N,this.context=$,this.refs=y,this.updater=gt||w}D.prototype.isReactComponent={},D.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},D.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=D.prototype;function U(N,$,gt){this.props=N,this.context=$,this.refs=y,this.updater=gt||w}var I=U.prototype=new L;I.constructor=U,M(I,D.prototype),I.isPureReactComponent=!0;var P=Array.isArray;function E(){}var C={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function B(N,$,gt){var dt=gt.ref;return{$$typeof:o,type:N,key:$,ref:dt!==void 0?dt:null,props:gt}}function V(N,$){return B(N.type,$,N.props)}function q(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function lt(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return $[gt]})}var G=/\/+/g;function et(N,$){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):$.toString(36)}function Z(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(E,E):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function W(N,$,gt,dt,Mt){var Pt=typeof N;(Pt==="undefined"||Pt==="boolean")&&(N=null);var Jt=!1;if(N===null)Jt=!0;else switch(Pt){case"bigint":case"string":case"number":Jt=!0;break;case"object":switch(N.$$typeof){case o:case t:Jt=!0;break;case x:return Jt=N._init,W(Jt(N._payload),$,gt,dt,Mt)}}if(Jt)return Mt=Mt(N),Jt=dt===""?"."+et(N,0):dt,P(Mt)?(gt="",Jt!=null&&(gt=Jt.replace(G,"$&/")+"/"),W(Mt,$,gt,"",function(ge){return ge})):Mt!=null&&(q(Mt)&&(Mt=V(Mt,gt+(Mt.key==null||N&&N.key===Mt.key?"":(""+Mt.key).replace(G,"$&/")+"/")+Jt)),$.push(Mt)),1;Jt=0;var Et=dt===""?".":dt+":";if(P(N))for(var Bt=0;Bt<N.length;Bt++)dt=N[Bt],Pt=Et+et(dt,Bt),Jt+=W(dt,$,gt,Pt,Mt);else if(Bt=T(N),typeof Bt=="function")for(N=Bt.call(N),Bt=0;!(dt=N.next()).done;)dt=dt.value,Pt=Et+et(dt,Bt++),Jt+=W(dt,$,gt,Pt,Mt);else if(Pt==="object"){if(typeof N.then=="function")return W(Z(N),$,gt,dt,Mt);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Jt}function ft(N,$,gt){if(N==null)return N;var dt=[],Mt=0;return W(N,dt,"","",function(Pt){return $.call(gt,Pt,Mt++)}),dt}function it(N){if(N._status===-1){var $=N._result,gt=$();gt.then(function(dt){(N._status===0||N._status===-1)&&(N._status=1,N._result=dt,gt.status===void 0&&(gt.status="fulfilled",gt.value=dt))},function(dt){(N._status===0||N._status===-1)&&(N._status=2,N._result=dt,gt.status===void 0&&(gt.status="rejected",gt.reason=dt))}),N._status===-1&&(N._status=0,N._result=gt)}if(N._status===1)return N._result.default;throw N._result}var ct=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Tt(N){var $=C.T,gt={};gt.types=$!==null?$.types:null,C.T=gt;try{var dt=N(),Mt=C.S;Mt!==null&&Mt(gt,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(E,ct)}catch(Pt){ct(Pt)}finally{$!==null&&gt.types!==null&&($.types=gt.types),C.T=$}}function Vt(N){var $=C.T;if($!==null){var gt=$.types;gt===null?$.types=[N]:gt.indexOf(N)===-1&&gt.push(N)}else Tt(Vt.bind(null,N))}var ie={map:ft,forEach:function(N,$,gt){ft(N,function(){$.apply(this,arguments)},gt)},count:function(N){var $=0;return ft(N,function(){$++}),$},toArray:function(N){return ft(N,function($){return $})||[]},only:function(N){if(!q(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return de.Activity=g,de.Children=ie,de.Component=D,de.Fragment=i,de.Profiler=l,de.PureComponent=U,de.StrictMode=s,de.Suspense=p,de.ViewTransition=v,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,de.__COMPILER_RUNTIME={__proto__:null,c:function(N){return C.H.useMemoCache(N)}},de.addTransitionType=Vt,de.cache=function(N){return function(){return N.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(N,$,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var dt=M({},N.props),Mt=N.key;if($!=null)for(Pt in $.key!==void 0&&(Mt=""+$.key),$)!Y.call($,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&$.ref===void 0||(dt[Pt]=$[Pt]);var Pt=arguments.length-2;if(Pt===1)dt.children=gt;else if(1<Pt){for(var Jt=Array(Pt),Et=0;Et<Pt;Et++)Jt[Et]=arguments[Et+2];dt.children=Jt}return B(N.type,Mt,dt)},de.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},de.createElement=function(N,$,gt){var dt,Mt={},Pt=null;if($!=null)for(dt in $.key!==void 0&&(Pt=""+$.key),$)Y.call($,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(Mt[dt]=$[dt]);var Jt=arguments.length-2;if(Jt===1)Mt.children=gt;else if(1<Jt){for(var Et=Array(Jt),Bt=0;Bt<Jt;Bt++)Et[Bt]=arguments[Bt+2];Mt.children=Et}if(N&&N.defaultProps)for(dt in Jt=N.defaultProps,Jt)Mt[dt]===void 0&&(Mt[dt]=Jt[dt]);return B(N,Pt,Mt)},de.createRef=function(){return{current:null}},de.forwardRef=function(N){return{$$typeof:d,render:N}},de.isValidElement=q,de.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:it}},de.memo=function(N,$){return{$$typeof:m,type:N,compare:$===void 0?null:$}},de.startTransition=Tt,de.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},de.use=function(N){return C.H.use(N)},de.useActionState=function(N,$,gt){return C.H.useActionState(N,$,gt)},de.useCallback=function(N,$){return C.H.useCallback(N,$)},de.useContext=function(N){return C.H.useContext(N)},de.useDebugValue=function(){},de.useDeferredValue=function(N,$){return C.H.useDeferredValue(N,$)},de.useEffect=function(N,$){return C.H.useEffect(N,$)},de.useEffectEvent=function(N){return C.H.useEffectEvent(N)},de.useId=function(){return C.H.useId()},de.useImperativeHandle=function(N,$,gt){return C.H.useImperativeHandle(N,$,gt)},de.useInsertionEffect=function(N,$){return C.H.useInsertionEffect(N,$)},de.useLayoutEffect=function(N,$){return C.H.useLayoutEffect(N,$)},de.useMemo=function(N,$){return C.H.useMemo(N,$)},de.useOptimistic=function(N,$){return C.H.useOptimistic(N,$)},de.useReducer=function(N,$,gt){return C.H.useReducer(N,$,gt)},de.useRef=function(N){return C.H.useRef(N)},de.useState=function(N){return C.H.useState(N)},de.useSyncExternalStore=function(N,$,gt){return C.H.useSyncExternalStore(N,$,gt)},de.useTransition=function(){return C.H.useTransition()},de.version="19.3.1",de}var Wv;function dm(){return Wv||(Wv=1,zd.exports=Z1()),zd.exports}var Bd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function K1(){if(qv)return Gn;qv=1;var o=dm();function t(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,g,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:x,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.browser=function(x){return{$$typeof:c,_reason:x}},Gn.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(x,g,null,v)},Gn.flushSync=function(x){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,x)return x()}finally{p.T=g,s.p=v,s.d.f()}},Gn.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(x,g))},Gn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Gn.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:w}):v==="script"&&s.d.X(x,{crossOrigin:S,integrity:T,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Gn.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(x)},Gn.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin);s.d.L(x,v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Gn.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(x)},Gn.requestFormReset=function(x){s.d.r(x)},Gn.unstable_batchedUpdates=function(x,g){return x(g)},Gn.useFormState=function(x,g,v){return p.H.useFormState(x,g,v)},Gn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Gn.version="19.3.1",Gn}var Yv;function j1(){if(Yv)return Bd.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bd.exports=K1(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function Q1(){if(Zv)return Tl;Zv=1;var o=Y1(),t=dm(),i=j1();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===r)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,r=f;break}if(A===r){_=!0,r=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=u;break}if(A===r){_=!0,r=f,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,u,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=v(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,D=null;function L(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function U(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(y=e),!0):!1}function I(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,a){for(var r=0,u=e;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)e=a(e),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var E=Object.assign,C=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),et=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Vt=Symbol.for("react.legacy_hidden"),ie=Symbol.for("react.memo_cache_sentinel"),N=Symbol.for("react.view_transition"),$=Symbol.for("react.recoverable"),gt=Symbol.iterator;function dt(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var Mt=Symbol.for("react.client.reference");function Pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case lt:return"Profiler";case q:return"StrictMode";case W:return"Suspense";case ft:return"SuspenseList";case Tt:return"Activity";case N:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case et:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return n=e.displayName||null,n!==null?n:Pt(e.type)||"Memo";case ct:n=e._payload,e=e._init;try{return Pt(e(n))}catch{}}return null}var Jt=Array.isArray,Et=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},bt=[],Wt=-1;function ee(e){return{current:e}}function Zt(e){0>Wt||(e.current=bt[Wt],bt[Wt]=null,Wt--)}function qt(e,n){Wt++,bt[Wt]=e.current,e.current=n}var Se=ee(null),Ge=ee(null),on=ee(null),Ln=ee(null);function On(e,n){switch(qt(on,n),qt(Ge,e),qt(Se,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?K_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=K_(n),e=j_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Zt(Se),qt(Se,e)}function K(){Zt(Se),Zt(Ge),Zt(on)}function Xn(e){var n=e.memoizedState;n!==null&&(no._currentValue=n.memoizedState,qt(Ln,e)),n=Se.current;var a=j_(n,e.type);n!==a&&(qt(Ge,e),qt(Se,a))}function Ve(e){Ge.current===e&&(Zt(Se),Zt(Ge)),Ln.current===e&&(Zt(Ln),no._currentValue=ge)}var Ke,Ft;function je(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",Ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+Ft}var se=!1;function ce(e,n){if(!e||se)return"";se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Gt){var j=Gt}Reflect.construct(e,[],St)}else{try{St.call()}catch(Gt){j=Gt}St=!1;try{var ot=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new e}finally{St&&(ot!==void 0?Object.defineProperty(e.prototype,"props",ot):delete e.prototype.props)}}}else{try{throw Error()}catch(Gt){j=Gt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Gt){if(Gt&&j&&typeof Gt.stack=="string")return[Gt.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var z=_.split(`
`),J=A.split(`
`);for(u=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===z.length||u===J.length)for(r=z.length-1,u=J.length-1;1<=r&&0<=u&&z[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(z[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||z[r]!==J[u]){var ut=`
`+z[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=u);break}}}finally{se=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?je(a):""}function O(e,n){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je("Lazy");case 13:return e.child!==n&&n!==null?je("Suspense Fallback"):je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return je("Activity");case 30:return je("ViewTransition");default:return""}}function b(e){try{var n="",a=null;do n+=O(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var at=Object.prototype.hasOwnProperty,Rt=o.unstable_scheduleCallback,yt=o.unstable_cancelCallback,Dt=o.unstable_shouldYield,It=o.unstable_requestPaint,pt=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,H=o.unstable_UserBlockingPriority,_t=o.unstable_NormalPriority,mt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Ct=o.log,Ot=o.unstable_setDisableYieldValue,ne=null,re=null;function At(e){if(typeof Ct=="function"&&Ot(e),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(ne,e)}catch{}}var Kt=Math.clz32?Math.clz32:Ie,_e=Math.log,Xt=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(_e(e)/Xt|0)|0}var ln=256,ci=262144,Os=4194304;function Bi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Bi(r):(_&=A,_!==0?u=Bi(_):a||(a=A&~e,a!==0&&(u=Bi(a))))):(A=r&~f,A!==0?u=Bi(A):_!==0?u=Bi(_):a||(a=r&~e,a!==0&&(u=Bi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Wa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function No(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Kt(a),u=1<<r;n|=e[r],a&=~u}return n}function va(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(){var e=Os;return Os<<=1,(Os&62914560)===0&&(Os=4194304),e}function _r(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function qa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vr(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Kt(a),St=1<<ut;A[ut]=0,z[ut]=-1;var j=J[ut];if(j!==null)for(J[ut]=null,ut=0;ut<j.length;ut++){var ot=j[ut];ot!==null&&(ot.lane&=-536870913)}a&=~St}r!==0&&Do(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Do(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Kt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Uo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Kt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ya(e,n){var a=n&-n;return a=(a&42)!==0?1:Lo(a),(a&(e.suspendedLanes|n))!==0?0:a}function Lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oo(){var e=Bt.p;return e!==0?e:(e=window.event,e===void 0?32:Lv(e.type))}function Zl(e,n){var a=Bt.p;try{return Bt.p=e,n()}finally{Bt.p=a}}var Fi=Math.random().toString(36).slice(2),En="__reactFiber$"+Fi,Pn="__reactProps$"+Fi,R="__reactContainer$"+Fi,X="__reactEvents$"+Fi,ht="__reactListeners$"+Fi,st="__reactHandles$"+Fi,rt="__reactResources$"+Fi,wt="__reactMarker$"+Fi,Yt="__reactLoad$"+Fi;function Nt(e){delete e[En],delete e[Pn],delete e[ht],delete e[st]}function Ht(e){var n;if(n=e[En])return n;for(var a=e.parentNode;a;){if(n=a[R]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=dv(e);e!==null;){if(a=e[En])return a;e=dv(e)}return n}e=a,a=e.parentNode}return null}function Qt(e){if(e=e[En]||e[R]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function le(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ve(e){var n=e[rt];return n||(n=e[rt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function zt(e){e[wt]=!0}function Te(e){e[Yt]=void 0}var un=new Set,Xe={};function Ue(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(Xe[e]=n,e=0;e<n.length;e++)un.add(n[e])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rn={},Oe={};function xa(e){return at.call(Oe,e)?!0:at.call(Rn,e)?!1:$t.test(e)?Oe[e]=!0:(Rn[e]=!0,!1)}var fe=!1;function Ps(){var e=fe;return fe=!1,e}function fi(e,n,a){if(xa(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Ti(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function xe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ii(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pn(e){if(!e._valueTracker){var n=ii(e)?"checked":"value";e._valueTracker=sn(e,n,""+e[n])}}function bi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ii(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Kl=/[\n"\\]/g;function Ai(e){return e.replace(Kl,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cf(e,n,a,r,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ze(n)):e.value!==""+ze(n)&&(e.value=""+ze(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?_==="number"&&e.value==n?ff(e,ze(e.value)):ff(e,ze(n)):a!=null?ff(e,ze(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ze(A):e.removeAttribute("name")}function Bm(e,n,a,r,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){pn(e);return}a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),pn(e)}function ff(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Sr(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fm(e,n,a){if(n!=null&&(n=""+ze(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ze(a):""}function Hm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Jt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ze(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),pn(e)}function Mr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||hM.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",fe=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(Gm(e,u,r),fe=!0)}else for(var f in n)n.hasOwnProperty(f)&&Gm(e,f,n[f])}function hf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(e){return pM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var df=null;function pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,Er=null;function Xm(e){var n=Qt(e);if(n&&(e=n.stateNode)){var a=e[Pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(cf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ai(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Pn]||null;if(!u)throw Error(s(90));cf(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&bi(r)}break t;case"textarea":Fm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sr(e,!!a.multiple,n,!1)}}}var mf=!1;function km(e,n,a){if(mf)return e(n,a);mf=!0;try{var r=e(n);return r}finally{if(mf=!1,(yr!==null||Er!==null)&&(ju(),yr&&(n=yr,e=Er,Er=yr=null,Xm(n),e)))for(n=0;n<e.length;n++)Xm(e[n])}}function Po(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Pn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=!1;if(Sa)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){gf=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{gf=!1}var Za=null,_f=null,Ql=null;function Wm(){if(Ql)return Ql;var e,n=_f,a=n.length,r,u="value"in Za?Za.value:Za.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return Ql=u.slice(e,1<r?1-r:void 0)}function Jl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function qm(){return!1}function jn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$l:qm,this.isPropagationStopped=qm,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=jn(Ka),zo=E({},Ka,{view:0,detail:0}),mM=jn(zo),vf,xf,Bo,eu=E({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(vf=e.screenX-Bo.screenX,xf=e.screenY-Bo.screenY):xf=vf=0,Bo=e),vf)},movementY:function(e){return"movementY"in e?e.movementY:xf}}),Ym=jn(eu),gM=E({},eu,{dataTransfer:0}),_M=jn(gM),vM=E({},zo,{relatedTarget:0}),Sf=jn(vM),xM=E({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),SM=jn(xM),MM=E({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yM=jn(MM),EM=E({},Ka,{data:0}),Zm=jn(EM),TM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RM(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=AM[e])?!!n[e]:!1}function Mf(){return RM}var CM=E({},zo,{key:function(e){if(e.key){var n=TM[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wM=jn(CM),NM=E({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=jn(NM),DM=E({},Ka,{submitter:0}),UM=jn(DM),LM=E({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),OM=jn(LM),PM=E({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=jn(PM),zM=E({},eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BM=jn(zM),FM=E({},Ka,{newState:0,oldState:0,source:0}),HM=jn(FM),GM=[9,13,27,32],yf=Sa&&"CompositionEvent"in window,Fo=null;Sa&&"documentMode"in document&&(Fo=document.documentMode);var VM=Sa&&"TextEvent"in window&&!Fo,jm=Sa&&(!yf||Fo&&8<Fo&&11>=Fo),Qm=" ",Jm=!1;function $m(e,n){switch(e){case"keyup":return GM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function XM(e,n){switch(e){case"compositionend":return t0(n);case"keypress":return n.which!==32?null:(Jm=!0,Qm);case"textInput":return e=n.data,e===Qm&&Jm?null:e;default:return null}}function kM(e,n){if(Tr)return e==="compositionend"||!yf&&$m(e,n)?(e=Wm(),Ql=_f=Za=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jm&&n.locale!=="ko"?null:n.data;default:return null}}var WM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!WM[e.type]:n==="textarea"}function n0(e,n,a,r){yr?Er?Er.push(r):Er=[r]:yr=r,n=nc(n,"onChange"),0<n.length&&(a=new tu("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Ho=null,Go=null;function qM(e){X_(e,0)}function nu(e){var n=le(e);if(bi(n))return e}function i0(e,n){if(e==="change")return n}var a0=!1;if(Sa){var Ef;if(Sa){var Tf="oninput"in document;if(!Tf){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),Tf=typeof s0.oninput=="function"}Ef=Tf}else Ef=!1;a0=Ef&&(!document.documentMode||9<document.documentMode)}function r0(){Ho&&(Ho.detachEvent("onpropertychange",o0),Go=Ho=null)}function o0(e){if(e.propertyName==="value"&&nu(Go)){var n=[];n0(n,Go,e,pf(e)),km(qM,n)}}function YM(e,n,a){e==="focusin"?(r0(),Ho=n,Go=a,Ho.attachEvent("onpropertychange",o0)):e==="focusout"&&r0()}function ZM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(Go)}function KM(e,n){if(e==="click")return nu(n)}function jM(e,n){if(e==="input"||e==="change")return nu(n)}function QM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:QM;function Vo(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!at.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function bf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function l0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function u0(e,n){var a=l0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=l0(a)}}function c0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?c0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function f0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bf(e.document)}return n}function Af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var JM=Sa&&"documentMode"in document&&11>=document.documentMode,br=null,Rf=null,Xo=null,Cf=!1;function h0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||br==null||br!==bf(r)||(r=br,"selectionStart"in r&&Af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xo&&Vo(Xo,r)||(Xo=r,r=nc(Rf,"onSelect"),0<r.length&&(n=new tu("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=br)))}function Is(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},wf={},d0={};Sa&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function zs(e){if(wf[e])return wf[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in d0)return wf[e]=n[a];return e}var p0=zs("animationend"),m0=zs("animationiteration"),g0=zs("animationstart"),$M=zs("transitionrun"),ty=zs("transitionstart"),ey=zs("transitioncancel"),_0=zs("transitionend"),v0=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Hi(e,n){v0.set(e,n),Ue(n,[e])}var ny=0;function Ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ki.identifierPrefix;var a=ny++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function x0(e){if(e==null||typeof e=="string")return e;var n=null,a=qr;if(a!==null)for(var r=0;r<a.length;r++){var u=e[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function ya(e,n){return e=x0(e),n=x0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var iu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],Rr=0,Df=0;function au(){for(var e=Rr,n=Df=Rr=0;n<e;){var a=Ri[n];Ri[n++]=null;var r=Ri[n];Ri[n++]=null;var u=Ri[n];Ri[n++]=null;var f=Ri[n];if(Ri[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&S0(a,u,f)}}function su(e,n,a,r){Ri[Rr++]=e,Ri[Rr++]=n,Ri[Rr++]=a,Ri[Rr++]=r,Df|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Uf(e,n,a,r){return su(e,n,a,r),ru(e)}function Bs(e,n){return su(e,null,null,n),ru(e)}function S0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Kt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ru(e){if(50<fl)throw fl=0,Ku=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={};function iy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,a,r){return new iy(e,n,a,r)}function Lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function M0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ou(e,n,a,r,u,f){var _=0;if(r=e,typeof r=="function")Lf(r)&&(_=1);else if(typeof r=="string")_=D1(e,a,Se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case Tt:return e=ai(31,a,n,u),e.elementType=Tt,e.lanes=f,e;case V:return Fs(a.children,u,f,n);case q:_=8,u|=24;break;case lt:return e=ai(12,a,n,u|2),e.elementType=lt,e.lanes=f,e;case W:return e=ai(13,a,n,u),e.elementType=W,e.lanes=f,e;case ft:return e=ai(19,a,n,u),e.elementType=ft,e.lanes=f,e;case Vt:case N:return e=u|32,e=ai(30,a,n,e),e.elementType=N,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:_=10;break t;case G:_=9;break t;case Z:_=11;break t;case it:_=14;break t;case ct:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ai(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Fs(e,n,a,r){return e=ai(7,e,r,n),e.lanes=a,e}function Of(e,n,a){return e=ai(6,e,null,n),e.lanes=a,e}function y0(e){var n=ai(18,null,null,0);return n.stateNode=e,n}function Pf(e,n,a){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var E0=new WeakMap;function Ci(e,n){if(typeof e=="object"&&e!==null){var a=E0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:b(n)},E0.set(e,n),n)}return{value:e,source:n,stack:b(n)}}var wr=[],Nr=0,lu=null,ko=0,wi=[],Ni=0,ja=null,ea=1,na="";function Ta(e,n){wr[Nr++]=ko,wr[Nr++]=lu,lu=e,ko=n}function T0(e,n,a){wi[Ni++]=ea,wi[Ni++]=na,wi[Ni++]=ja,ja=e;var r=ea;e=na;var u=32-Kt(r)-1;r&=~(1<<u),a+=1;var f=32-Kt(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,ea=1<<32-Kt(n)+u|a<<u|r,na=f+e}else ea=1<<f|a<<u|r,na=e}function uu(e){e.return!==null&&(Ta(e,1),T0(e,1,0))}function If(e){for(;e===lu;)lu=wr[--Nr],wr[Nr]=null,ko=wr[--Nr],wr[Nr]=null;for(;e===ja;)ja=wi[--Ni],wi[Ni]=null,na=wi[--Ni],wi[Ni]=null,ea=wi[--Ni],wi[Ni]=null}function b0(e,n){wi[Ni++]=ea,wi[Ni++]=na,wi[Ni++]=ja,ea=n.id,na=n.overflow,ja=e}var Cn=null,en=null,be=!1,Qa=null,Di=!1,zf=Error(s(519));function Ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Ci(n,e)),zf}function A0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[En]=e,n[Pn]=r,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<dl.length;a++)Ce(dl[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Bm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Hm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Y_(n.textContent,a)?(r.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),r.onScroll!=null&&Ce("scroll",n),r.onScrollEnd!=null&&Ce("scrollend",n),r.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ja(e,!0)}function cu(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Cn=Cn.return}}function Dr(e){if(e!==Cn)return!1;if(!be)return cu(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dd(e.type,e.memoizedProps)),a=!a),a&&en&&Ja(e),cu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=hv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=hv(e)}else n===27?(n=en,ps(e.type)?(e=yd,yd=null,en=e):en=n):en=Cn?Li(e.stateNode.nextSibling):null;return!0}function Hs(){en=Cn=null,be=!1}function Bf(){var e=Qa;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Qa=null),e}function Wo(e){Qa===null?Qa=[e]:Qa.push(e)}var Ff=ee(null),Gs=null,ba=null;function $a(e,n,a){qt(Ff,n._currentValue),n._currentValue=a}function Aa(e){e._currentValue=Ff.current,Zt(Ff)}function fu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Hf(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),fu(f.return,a,e),r||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),fu(_,a,e),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),fu(u.return,a,e),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Vs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;hi(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===Ln.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(no):e=[no])}u=u.return}return e!==null&&Hf(n,e,a,r),n.flags|=262144,e!==null}function hu(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xs(e){Gs=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return R0(Gs,e)}function du(e,n){return Gs===null&&Xs(e),R0(e,n)}function R0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(s(308));ba=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ba=ba.next=n;return a}var ay=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sy=o.unstable_scheduleCallback,ry=o.unstable_NormalPriority,vn={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gf(){return{controller:new ay,data:new Map,refCount:0}}function qo(e){e.refCount--,e.refCount===0&&sy(ry,function(){e.controller.abort()})}function C0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Yo=null;function oy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Zo=null,Vf=0,ks=0,Ur=null;function ly(e,n){if(Zo===null){var a=Zo=[];Vf=0,ks=ad(),Ur={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Vf++,n.then(w0,w0),n}function w0(){if(--Vf===0&&(Yo=null,Zo!==null)){Ur!==null&&(Ur.status="fulfilled");var e=Zo;Zo=null,ks=0,Ur=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var N0=Et.S;Et.S=function(e,n){if(y_=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ly(e,n),Yo!==null)for(var a=jr;a!==null;)C0(a,Yo),a=a.next;if(a=e.types,a!==null){for(var r=jr;r!==null;)C0(r,a),r=r.next;if(ks!==0){r=Yo,r===null&&(r=Yo=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}N0!==null&&N0(e,n)};var Ws=ee(null);function Xf(){var e=Ws.current;return e!==null?e:Je.pooledCache}function pu(e,n){n===null?qt(Ws,Ws.current):qt(Ws,n.pool)}function D0(){var e=Xf();return e===null?null:{parent:vn._currentValue,pool:e}}var Lr=Error(s(460)),kf=Error(s(474)),mu=Error(s(542)),gu={then:function(){}};function U0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function L0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,P0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,P0(e),e}throw Ys=n,Lr}}function qs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ys=a,Lr):a}}var Ys=null;function O0(){if(Ys===null)throw Error(s(459));var e=Ys;return Ys=null,e}function P0(e){if(e===Lr||e===mu)throw Error(s(483))}var Or=null,Ko=0;function _u(e){var n=Ko;return Ko+=1,Or===null&&(Or=[]),L0(Or,e,n)}function ts(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vu(e,n){throw n.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function I0(e){function n(Q,k){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[k],Q.flags|=16):nt.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function r(Q){for(var k=new Map;Q!==null;)Q.key===null?k.set(Q.index,Q):k.set(Q.key,Q),Q=Q.sibling;return k}function u(Q,k){return Q=Ea(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<k?(Q.flags|=2,k):nt):(Q.flags|=134217730,k)):(Q.flags|=1048576,k)}function _(Q){return e&&Q.alternate===null&&(Q.flags|=134217730),Q}function A(Q,k,nt,xt){return k===null||k.tag!==6?(k=Of(nt,Q.mode,xt),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function z(Q,k,nt,xt){var jt=nt.type;return jt===V?(Q=ut(Q,k,nt.props.children,xt,nt.key),ts(Q,nt),Q):k!==null&&(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===ct&&qs(jt)===k.type)?(k=u(k,nt.props),ts(k,nt),k.return=Q,k):(k=ou(nt.type,nt.key,nt.props,null,Q.mode,xt),ts(k,nt),k.return=Q,k)}function J(Q,k,nt,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Pf(nt,Q.mode,xt),k.return=Q,k):(k=u(k,nt.children||[]),k.return=Q,k)}function ut(Q,k,nt,xt,jt){return k===null||k.tag!==7?(k=Fs(nt,Q.mode,xt,jt),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function St(Q,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Of(""+k,Q.mode,nt),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Y:return nt=ou(k.type,k.key,k.props,null,Q.mode,nt),ts(nt,k),nt.return=Q,nt;case B:return k=Pf(k,Q.mode,nt),k.return=Q,k;case ct:return k=qs(k),St(Q,k,nt)}if(Jt(k)||dt(k))return k=Fs(k,Q.mode,nt,null),k.return=Q,k;if(typeof k.then=="function")return St(Q,_u(k),nt);if(k.$$typeof===et)return St(Q,du(Q,k),nt);vu(Q,k)}return null}function j(Q,k,nt,xt){var jt=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return jt!==null?null:A(Q,k,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case Y:return nt.key===jt?z(Q,k,nt,xt):null;case B:return nt.key===jt?J(Q,k,nt,xt):null;case ct:return nt=qs(nt),j(Q,k,nt,xt)}if(Jt(nt)||dt(nt))return jt!==null?null:ut(Q,k,nt,xt,null);if(typeof nt.then=="function")return j(Q,k,_u(nt),xt);if(nt.$$typeof===et)return j(Q,k,du(Q,nt),xt);vu(Q,nt)}return null}function ot(Q,k,nt,xt,jt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Q=Q.get(nt)||null,A(k,Q,""+xt,jt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case Y:return Q=Q.get(xt.key===null?nt:xt.key)||null,z(k,Q,xt,jt);case B:return Q=Q.get(xt.key===null?nt:xt.key)||null,J(k,Q,xt,jt);case ct:return xt=qs(xt),ot(Q,k,nt,xt,jt)}if(Jt(xt)||dt(xt))return Q=Q.get(nt)||null,ut(k,Q,xt,jt,null);if(typeof xt.then=="function")return ot(Q,k,nt,_u(xt),jt);if(xt.$$typeof===et)return ot(Q,k,nt,du(k,xt),jt);vu(k,xt)}return null}function Gt(Q,k,nt,xt){for(var jt=null,De=null,ae=k,ue=k=0,Mn=null;ae!==null&&ue<nt.length;ue++){ae.index>ue?(Mn=ae,ae=null):Mn=ae.sibling;var Pe=j(Q,ae,nt[ue],xt);if(Pe===null){ae===null&&(ae=Mn);break}e&&ae&&Pe.alternate===null&&n(Q,ae),k=f(Pe,k,ue),De===null?jt=Pe:De.sibling=Pe,De=Pe,ae=Mn}if(ue===nt.length)return a(Q,ae),be&&Ta(Q,ue),jt;if(ae===null){for(;ue<nt.length;ue++)ae=St(Q,nt[ue],xt),ae!==null&&(k=f(ae,k,ue),De===null?jt=ae:De.sibling=ae,De=ae);return be&&Ta(Q,ue),jt}for(ae=r(ae);ue<nt.length;ue++)Mn=ot(ae,Q,ue,nt[ue],xt),Mn!==null&&(e&&(Pe=Mn.alternate,Pe!==null&&ae.delete(Pe.key===null?ue:Pe.key)),k=f(Mn,k,ue),De===null?jt=Mn:De.sibling=Mn,De=Mn);return e&&ae.forEach(function(xs){return n(Q,xs)}),be&&Ta(Q,ue),jt}function te(Q,k,nt,xt){if(nt==null)throw Error(s(151));for(var jt=null,De=null,ae=k,ue=k=0,Mn=null,Pe=nt.next();ae!==null&&!Pe.done;ue++,Pe=nt.next()){ae.index>ue?(Mn=ae,ae=null):Mn=ae.sibling;var xs=j(Q,ae,Pe.value,xt);if(xs===null){ae===null&&(ae=Mn);break}e&&ae&&xs.alternate===null&&n(Q,ae),k=f(xs,k,ue),De===null?jt=xs:De.sibling=xs,De=xs,ae=Mn}if(Pe.done)return a(Q,ae),be&&Ta(Q,ue),jt;if(ae===null){for(;!Pe.done;ue++,Pe=nt.next())Pe=St(Q,Pe.value,xt),Pe!==null&&(k=f(Pe,k,ue),De===null?jt=Pe:De.sibling=Pe,De=Pe);return be&&Ta(Q,ue),jt}for(ae=r(ae);!Pe.done;ue++,Pe=nt.next())Pe=ot(ae,Q,ue,Pe.value,xt),Pe!==null&&(e&&(Mn=Pe.alternate,Mn!==null&&ae.delete(Mn.key===null?ue:Mn.key)),k=f(Pe,k,ue),De===null?jt=Pe:De.sibling=Pe,De=Pe);return e&&ae.forEach(function(X1){return n(Q,X1)}),be&&Ta(Q,ue),jt}function ye(Q,k,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===V&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case Y:t:{for(var jt=nt.key;k!==null;){if(k.key===jt){if(jt=nt.type,jt===V){if(k.tag===7){a(Q,k.sibling),xt=u(k,nt.props.children),ts(xt,nt),xt.return=Q,Q=xt;break t}}else if(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===ct&&qs(jt)===k.type){a(Q,k.sibling),xt=u(k,nt.props),ts(xt,nt),xt.return=Q,Q=xt;break t}a(Q,k);break}else n(Q,k);k=k.sibling}nt.type===V?(xt=Fs(nt.props.children,Q.mode,xt,nt.key),ts(xt,nt),xt.return=Q,Q=xt):(xt=ou(nt.type,nt.key,nt.props,null,Q.mode,xt),ts(xt,nt),xt.return=Q,Q=xt)}return _(Q);case B:t:{for(jt=nt.key;k!==null;){if(k.key===jt)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(Q,k.sibling),xt=u(k,nt.children||[]),xt.return=Q,Q=xt;break t}else{a(Q,k);break}else n(Q,k);k=k.sibling}xt=Pf(nt,Q.mode,xt),xt.return=Q,Q=xt}return _(Q);case ct:return nt=qs(nt),ye(Q,k,nt,xt)}if(Jt(nt))return Gt(Q,k,nt,xt);if(dt(nt)){if(jt=dt(nt),typeof jt!="function")throw Error(s(150));return nt=jt.call(nt),te(Q,k,nt,xt)}if(typeof nt.then=="function")return ye(Q,k,_u(nt),xt);if(nt.$$typeof===et)return ye(Q,k,du(Q,nt),xt);vu(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(Q,k.sibling),xt=u(k,nt),xt.return=Q,Q=xt):(a(Q,k),xt=Of(nt,Q.mode,xt),xt.return=Q,Q=xt),_(Q)):a(Q,k)}return function(Q,k,nt,xt){try{Ko=0;var jt=ye(Q,k,nt,xt);return Or=null,jt}catch(ae){if(ae===Lr||ae===mu)throw ae;var De=ai(29,ae,null,Q.mode);return De.lanes=xt,De.return=Q,De}finally{}}}var Zs=I0(!0),z0=I0(!1),es=!1;function Wf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function is(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Be&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ru(e),S0(e,null,a),n}return su(e,r,n,a),ru(e)}function jo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Uo(e,a)}}function Yf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zf=!1;function Qo(){if(Zf){var e=Ur;if(e!==null)throw e}}function Jo(e,n,a,r){Zf=!1;var u=e.updateQueue;es=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,J=z.next;z.next=null,_===null?f=J:_.next=J,_=z;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,A=ut.lastBaseUpdate,A!==_&&(A===null?ut.firstBaseUpdate=J:A.next=J,ut.lastBaseUpdate=z))}if(f!==null){var St=u.baseState;_=0,ut=J=z=null,A=f;do{var j=A.lane&-536870913,ot=j!==A.lane;if(ot?(Ne&j)===j:(r&j)===j){j!==0&&j===ks&&(Zf=!0),ut!==null&&(ut=ut.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,te=A;j=n;var ye=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){St=Gt.call(ye,St,j);break t}St=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,j=typeof Gt=="function"?Gt.call(ye,St,j):Gt,j==null)break t;St=E({},St,j);break t;case 2:es=!0}}j=A.callback,j!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[j]:ot.push(j))}else ot={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ut===null?(J=ut=ot,z=St):ut=ut.next=ot,_|=j;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ut===null&&(z=St),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),cs|=_,e.lanes=_,e.memoizedState=St}}function B0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function F0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)B0(a[e],n)}var as=ee(null),xu=ee(0);function H0(e,n){e=Da,qt(xu,e),qt(as,n),Da=e|n.baseLanes}function Kf(){qt(xu,Da),qt(as,as.current)}function jf(){Da=xu.current,Zt(as),Zt(xu)}var zn=ee(null),kn=null;function ss(e){var n=e.alternate;qt(Bn,Bn.current&1),qt(zn,e),kn===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(kn=e)}function Qf(e){qt(Bn,Bn.current),qt(zn,e),kn===null&&(kn=e)}function G0(e){e.tag===22?(qt(Bn,Bn.current),qt(zn,e),kn===null&&(kn=e)):rs()}function rs(){qt(Bn,Bn.current),qt(zn,zn.current)}function di(e){Zt(zn),kn===e&&(kn=null),Zt(Bn)}var Bn=ee(0);function $o(e,n){qt(zn,zn.current),qt(Bn,n)}function Jf(e){Zt(Bn),Zt(zn),kn===e&&(kn=null)}function Su(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sd(a)||Md(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ra=0,Me=null,Qe=null,xn=null,Mu=!1,Pr=!1,Ks=!1,yu=0,tl=0,Ir=null,cy=0;function mn(){throw Error(s(321))}function $f(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function th(e,n,a,r,u,f){return Ra=f,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=e===null||e.memoizedState===null?Tg:bg,Ks=!1,f=a(r,u),Ks=!1,Pr&&(f=X0(n,a,r,u)),V0(e),f}function V0(e){Et.H=wu;var n=Qe!==null&&Qe.next!==null;if(Ra=0,xn=Qe=Me=null,Mu=!1,tl=0,Ir=null,n)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&hu(e)&&(Sn=!0))}function X0(e,n,a,r){Me=e;var u=0;do{if(Pr&&(Ir=null),tl=0,Pr=!1,25<=u)throw Error(s(301));if(u+=1,xn=Qe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Et.H=vy,f=n(a,r)}while(Pr);return f}function fy(){var e=Et.H,n=e.useState()[0];return n=typeof n.then=="function"?el(n):n,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Me.flags|=1024),n}function eh(){var e=yu!==0;return yu=0,e}function nh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ih(e){if(Mu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Mu=!1}Ra=0,xn=Qe=Me=null,Pr=!1,tl=yu=0,Ir=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Me.memoizedState=xn=e:xn=xn.next=e,xn}function _n(){if(Qe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var n=xn===null?Me.memoizedState:xn.next;if(n!==null)xn=n,Qe=e;else{if(e===null)throw Me.alternate===null?Error(s(467)):Error(s(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},xn===null?Me.memoizedState=xn=e:xn=xn.next=e}return xn}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var n=tl;return tl+=1,Ir===null&&(Ir=[]),e=L0(Ir,e,n),n=Me,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Tg:bg),e}function Tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===$)return;if(e.$$typeof===et)return In(e)}throw Error(s(438,String(e)))}function ah(e){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Eu(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=ie;return n.index++,a}function Ca(e,n){return typeof n=="function"?n(e):n}function bu(e){var n=_n();return sh(n,Qe,e)}function sh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=_=null,z=null,J=n,ut=!1;do{var St=J.lane&-536870913;if(St!==J.lane?(Ne&St)===St:(Ra&St)===St){var j=J.revertLane;if(j===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),St===ks&&(ut=!0);else if((Ra&j)===j){J=J.next,j===ks&&(ut=!0);continue}else St={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=St,_=f):z=z.next=St,Me.lanes|=j,cs|=j;St=J.action,Ks&&a(f,St),f=J.hasEagerState?J.eagerState:a(f,St)}else j={lane:St,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=j,_=f):z=z.next=j,Me.lanes|=St,cs|=St;J=J.next}while(J!==null&&J!==n);if(z===null?_=f:z.next=A,!hi(f,e.memoizedState)&&(Sn=!0,ut&&(a=Ur,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function rh(e){var n=_n(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);hi(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function k0(e,n,a){var r=Me,u=_n(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!hi((Qe||u).memoizedState,a);if(_&&(u.memoizedState=a,Sn=!0),u=u.queue,uh(Y0.bind(null,r,u,e),[e]),e=u.getSnapshot!==n||_||xn!==null&&(xn.memoizedState.tag&1)!==0,zr(e?9:8,{destroy:void 0},q0.bind(null,r,u,a,n),null),e){if(r.flags|=2048,Je===null)throw Error(s(349));f||(Ra&127)!==0||W0(r,n,a)}return a}function W0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=Eu(),Me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function q0(e,n,a,r){n.value=a,n.getSnapshot=r,Z0(n)&&K0(e)}function Y0(e,n,a){return a(function(){Z0(n)&&K0(e)})}function Z0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function K0(e){var n=Bs(e,2);n!==null&&li(n,e,2)}function oh(e){var n=Qn();if(typeof e=="function"){var a=e;if(e=a(),Ks){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},n}function j0(e,n,a,r){return e.baseState=a,sh(e,Qe,typeof r=="function"?r:Ca)}function hy(e,n,a,r,u){if(Cu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Et.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Q0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Q0(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=Et.T,_={};_.types=f!==null?f.types:null,Et.T=_;try{var A=a(u,r),z=Et.S;z!==null&&z(_,A),J0(e,n,A)}catch(J){lh(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),Et.T=f}}else try{f=a(u,r),J0(e,n,f)}catch(J){lh(e,n,J)}}function J0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){$0(e,n,r)},function(r){return lh(e,n,r)}):$0(e,n,a)}function $0(e,n,a){n.status="fulfilled",n.value=a,tg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Q0(e,a)))}function lh(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,tg(n),n=n.next;while(n!==r)}e.action=null}function tg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function eg(e,n){return n}function ng(e,n){if(be){var a=Je.formState;if(a!==null){t:{var r=Me;if(be){if(en){e:{for(var u=en,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=Li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){en=Li(u.nextSibling),r=u.data==="F!";break t}}Ja(r)}r=!1}r&&(n=a[0])}}return a=Qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:n},a.queue=r,a=Mg.bind(null,Me,r),r.dispatch=a,r=oh(!1),f=ph.bind(null,Me,!1,r.queue),r=Qn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=hy.bind(null,Me,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function ig(e){var n=_n();return ag(n,Qe,e)}function ag(e,n,a){if(n=sh(e,n,eg)[0],e=bu(Ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=el(n)}catch(_){throw _===Lr?mu:_}else r=n;n=_n();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Me.flags|=2048,zr(9,{destroy:void 0},dy.bind(null,u,a),null)),[r,f,e]}function dy(e,n){e.action=n}function sg(e){var n=_n(),a=Qe;if(a!==null)return ag(n,a,e);_n(),n=n.memoizedState,a=_n();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function zr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Me.updateQueue,n===null&&(n=Eu(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function rg(){return _n().memoizedState}function Au(e,n,a,r){var u=Qn();Me.flags|=e,u.memoizedState=zr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ru(e,n,a,r){var u=_n();r=r===void 0?null:r;var f=u.memoizedState.inst;Qe!==null&&r!==null&&$f(r,Qe.memoizedState.deps)?u.memoizedState=zr(n,f,a,r):(Me.flags|=e,u.memoizedState=zr(1|n,f,a,r))}function og(e,n){Au(8390656,8,e,n)}function uh(e,n){Ru(2048,8,e,n)}function py(e){Me.flags|=4;var n=Me.updateQueue;if(n===null)n=Eu(),Me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lg(e){var n=_n().memoizedState;return py({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ug(e,n){return Ru(4,2,e,n)}function cg(e,n){return Ru(4,4,e,n)}function fg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hg(e,n,a){a=a!=null?a.concat([e]):null,Ru(4,4,fg.bind(null,n,e),a)}function ch(){}function dg(e,n){var a=_n();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&$f(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function pg(e,n){var a=_n();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&$f(n,r[1]))return r[0];if(r=e(),Ks){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[r,n],r}function fh(e,n,a){return a===void 0||(Ra&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T_(),Me.lanes|=e,cs|=e,a)}function mg(e,n,a,r){return hi(a,n)?a:as.current!==null?(e=fh(e,a,r),hi(e,n)||(Sn=!0),e):(Ra&106)===0||(Ra&1073741824)!==0&&(Ne&261930)===0?(Sn=!0,e.memoizedState=a):(e=T_(),Me.lanes|=e,cs|=e,n)}function gg(e,n,a,r,u){var f=Bt.p;Bt.p=f!==0&&8>f?f:8;var _=Et.T,A={};A.types=_!==null?_.types:null,Et.T=A,ph(e,!1,n,a);try{var z=u(),J=Et.S;if(J!==null&&J(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=uy(z,r);nl(e,n,ut,_i(e))}else nl(e,n,r,_i(e))}catch(St){nl(e,n,{then:function(){},status:"rejected",reason:St},_i())}finally{Bt.p=f,_!==null&&A.types!==null&&(_.types=A.types),Et.T=_}}function my(){}function hh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=_g(e).queue;gg(e,u,n,ge,a===null?my:function(){return vg(e),a(r)})}function _g(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:ge},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vg(e){var n=_g(e);n.next===null&&(n=e.alternate.memoizedState),nl(e,n.next.queue,{},_i())}function dh(){return In(no)}function xg(){return _n().memoizedState}function Sg(){return _n().memoizedState}function gy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=ns(a);var r=is(n,e,a);r!==null&&(li(r,n,a),jo(r,n,a)),n={cache:Gf()},e.payload=n;return}n=n.return}}function _y(e,n,a){var r=_i();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(e)?yg(n,a):(a=Uf(e,n,a,r),a!==null&&(li(a,e,r),Eg(a,n,r)))}function Mg(e,n,a){var r=_i();nl(e,n,a,r)}function nl(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))yg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,hi(A,_))return su(e,n,u,0),Je===null&&au(),!1}catch{}finally{}if(a=Uf(e,n,u,r),a!==null)return li(a,e,r),Eg(a,n,r),!0}return!1}function ph(e,n,a,r){if(r={lane:2,revertLane:ad(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(n)throw Error(s(479))}else n=Uf(e,a,r,2),n!==null&&li(n,e,2)}function Cu(e){var n=e.alternate;return e===Me||n!==null&&n===Me}function yg(e,n){Pr=Mu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Eg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Uo(e,a)}}var wu={readContext:In,use:Tu,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn,useEffectEvent:mn},Tg={readContext:In,use:Tu,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:In,useEffect:og,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Au(4194308,4,fg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Au(4194308,4,e,n)},useInsertionEffect:function(e,n){Au(4,2,e,n)},useMemo:function(e,n){var a=Qn();n=n===void 0?null:n;var r=e();if(Ks){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Qn();if(a!==void 0){var u=a(n);if(Ks){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=_y.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:function(e){e=oh(e);var n=e.queue,a=Mg.bind(null,Me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ch,useDeferredValue:function(e,n){var a=Qn();return fh(a,e,n)},useTransition:function(){var e=oh(!1);return e=gg.bind(null,Me,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Me,u=Qn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Je===null)throw Error(s(349));(Ne&127)!==0||W0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,og(Y0.bind(null,r,f,e),[e]),r.flags|=2048,zr(9,{destroy:void 0},q0.bind(null,r,f,a,n),null),a},useId:function(){var e=Qn(),n=Je.identifierPrefix;if(be){var a=na,r=ea;a=(r&~(1<<32-Kt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:dh,useFormState:ng,useActionState:ng,useOptimistic:function(e){var n=Qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ph.bind(null,Me,!0,a),a.dispatch=n,[e,n]},useMemoCache:ah,useCacheRefresh:function(){return Qn().memoizedState=gy.bind(null,Me)},useEffectEvent:function(e){var n=Qn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},bg={readContext:In,use:Tu,useCallback:dg,useContext:In,useEffect:uh,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:bu,useRef:rg,useState:function(){return bu(Ca)},useDebugValue:ch,useDeferredValue:function(e,n){var a=_n();return mg(a,Qe.memoizedState,e,n)},useTransition:function(){var e=bu(Ca)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:el(e),n]},useSyncExternalStore:k0,useId:xg,useHostTransitionStatus:dh,useFormState:ig,useActionState:ig,useOptimistic:function(e,n){var a=_n();return j0(a,Qe,e,n)},useMemoCache:ah,useCacheRefresh:Sg,useEffectEvent:lg},vy={readContext:In,use:Tu,useCallback:dg,useContext:In,useEffect:uh,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:rh,useRef:rg,useState:function(){return rh(Ca)},useDebugValue:ch,useDeferredValue:function(e,n){var a=_n();return Qe===null?fh(a,e,n):mg(a,Qe.memoizedState,e,n)},useTransition:function(){var e=rh(Ca)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:el(e),n]},useSyncExternalStore:k0,useId:xg,useHostTransitionStatus:dh,useFormState:sg,useActionState:sg,useOptimistic:function(e,n){var a=_n();return Qe!==null?j0(a,Qe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ah,useCacheRefresh:Sg,useEffectEvent:lg};function mh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:E({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=_i(),u=ns(r);u.payload=n,a!=null&&(u.callback=a),n=is(e,u,r),n!==null&&(li(n,e,r),jo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=_i(),u=ns(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=is(e,u,r),n!==null&&(li(n,e,r),jo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),r=ns(a);r.tag=2,n!=null&&(r.callback=n),n=is(e,r,a),n!==null&&(li(n,e,a),jo(n,e,a))}};function Ag(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vo(a,r)||!Vo(u,f):!0}function Rg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&gh.enqueueReplaceState(n,n.state,null)}function js(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=E({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Cg(e){iu(e)}function wg(e){console.error(e)}function Ng(e){iu(e)}function Nu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Dg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _h(e,n,a){return a=ns(a),a.tag=3,a.payload={element:null},a.callback=function(){Nu(e,n)},a}function Ug(e){return e=ns(e),e.tag=3,e}function Lg(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Dg(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Dg(n,a,r),typeof u!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function xy(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,u,!0),a=zn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return kn===null?Qu():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),ed(e,r,u)),!1;case 22:return a.flags|=65536,r===gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),ed(e,r,u)),!1}throw Error(s(435,a.tag))}return ed(e,r,u),Qu(),!1}if(be)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==zf&&(e=Error(s(422),{cause:r}),Wo(Ci(e,a)))):(r!==zf&&(n=Error(s(423),{cause:r}),Wo(Ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Ci(r,a),u=_h(e.stateNode,r,u),Yf(e,u),gn!==4&&(gn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ci(f,a),cl===null?cl=[f]:cl.push(f),gn!==4&&(gn=2),n===null)return!0;r=Ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_h(a.stateNode,r,e),Yf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(fs===null||!fs.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ug(u),Lg(u,e,a,r),Yf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var vh=Error(s(461)),Sn=!1;function Tn(e,n,a,r){n.child=e===null?z0(n,null,a,r):Zs(n,e.child,a,r)}function Og(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return Xs(n),r=th(e,n,a,_,f,u),A=eh(),e!==null&&!Sn?(nh(e,n,u),wa(e,n,u)):(be&&A&&uu(n),n.flags|=1,Tn(e,n,r,u),n.child)}function Pg(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Lf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ig(e,n,f,r,u)):(e=ou(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ah(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vo,a(_,r)&&e.ref===n.ref)return wa(e,n,u)}return n.flags|=1,e=Ea(f,r),e.ref=n.ref,e.return=n,n.child=e}function Ig(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Vo(f,r)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=r=f,Ah(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,wa(e,n,u)}return xh(e,n,a,r,u)}function zg(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Bg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pu(n,f!==null?f.cachePool:null),f!==null?H0(n,f):Kf(),G0(n);else return r=n.lanes=536870912,Bg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pu(n,f.cachePool),H0(n,f),rs(),n.memoizedState=null):(e!==null&&pu(n,null),Kf(),rs());return Tn(e,n,u,a),n.child}function il(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bg(e,n,a,r,u){var f=Xf();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&pu(n,null),Kf(),G0(n),e!==null&&Vs(e,n,r,!0),n.childLanes=u,null}function Du(e,n){return n=Uu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Fg(e,n,a){return Zs(n,e.child,null,a),e=Du(n,n.pendingProps),e.flags|=2,di(n),n.memoizedState=null,e}function Sy(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(r.mode==="hidden")return e=Du(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},il(null,e);if(Qf(n),(e=en)?(e=fv(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=y0(e),a.return=n,n.child=a,Cn=n,en=null)):e=null,e===null)throw Ja(n);return n.lanes=536870912,null}return Du(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Qf(n),u)if(n.flags&256)n.flags&=-257,n=Fg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||Vs(e,n,a,!1),u=(a&e.childLanes)!==0,Sn||u){if(as.current===null){if(r=Je,r!==null&&(_=Ya(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Bs(e,_),li(r,e,_),vh;Qu()}n=Fg(e,n,a)}else e=f.treeContext,en=Li(_.nextSibling),Cn=n,be=!0,Qa=null,Di=!1,e!==null&&b0(n,e),n=Du(n,r),n.flags|=134221824;return n}return e=Ea(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Br(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xh(e,n,a,r,u){return Xs(n),a=th(e,n,a,r,void 0,u),r=eh(),e!==null&&!Sn?(nh(e,n,u),wa(e,n,u)):(be&&r&&uu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Hg(e,n,a,r,u,f){return Xs(n),n.updateQueue=null,a=X0(n,r,a,u),V0(e),r=eh(),e!==null&&!Sn?(nh(e,n,f),wa(e,n,f)):(be&&r&&uu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Gg(e,n,a,r,u){if(Xs(n),n.stateNode===null){var f=Cr,_=a.contextType;typeof _=="object"&&_!==null&&(f=In(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Wf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?In(_):Cr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(mh(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&gh.enqueueReplaceState(f,f.state,null),Jo(n,r,f,u),Qo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=js(a,A);f.props=z;var J=f.context,ut=a.contextType;_=Cr,typeof ut=="object"&&ut!==null&&(_=In(ut));var St=a.getDerivedStateFromProps;ut=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==_)&&Rg(n,f,r,_),es=!1;var j=n.memoizedState;f.state=j,Jo(n,r,f,u),Qo(),J=n.memoizedState,A||j!==J||es?(typeof St=="function"&&(mh(n,a,St,r),J=n.memoizedState),(z=es||Ag(n,a,z,r,j,J,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,qf(e,n),_=n.memoizedProps,ut=js(a,_),f.props=ut,St=n.pendingProps,j=f.context,J=a.contextType,z=Cr,typeof J=="object"&&J!==null&&(z=In(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==St||j!==z)&&Rg(n,f,r,z),es=!1,j=n.memoizedState,f.state=j,Jo(n,r,f,u),Qo();var ot=n.memoizedState;_!==St||j!==ot||es||e!==null&&e.dependencies!==null&&hu(e.dependencies)?(typeof A=="function"&&(mh(n,a,A,r),ot=n.memoizedState),(ut=es||Ag(n,a,ut,r,j,ot,z)||e!==null&&e.dependencies!==null&&hu(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=z,r=ut):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Br(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Zs(n,e.child,null,u),n.child=Zs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=wa(e,n,u),e}function Vg(e,n,a,r){return Hs(),n.flags|=256,Tn(e,n,a,r),n.child}var Sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mh(e){return{baseLanes:e,cachePool:D0()}}function yh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function Xg(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?ss(n):rs(),(e=en)?(e=fv(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=y0(e),a.return=n,n.child=a,Cn=n,en=null)):e=null,e===null)throw Ja(n);return Md(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(rs(),u=n.mode,f=Uu({mode:"hidden",children:f},u),r=Fs(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=Mh(a),r.childLanes=yh(e,_,a),n.memoizedState=Sh,il(null,r)):(ss(n),Eh(n,f))}var A=e.memoizedState;if(A!==null){var z=A.dehydrated;if(z!==null)return My(e,n,f,_,r,z,A,a)}return u?(rs(),u=r.fallback,f=n.mode,A=e.child,z=A.sibling,r=Ea(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,z!==null?u=Ea(z,u):(u=Fs(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,il(null,r),r=n.child,u=e.child.memoizedState,u===null?u=Mh(a):(f=u.cachePool,f!==null?(A=vn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=D0(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=yh(e,_,a),n.memoizedState=Sh,il(e.child,r)):(ss(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Eh(e,n){return n=Uu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Uu(e,n){return e=ai(22,e,null,n),e.lanes=0,e}function Lu(e,n,a){return Zs(n,e.child,null,a),e=Eh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function My(e,n,a,r,u,f,_,A){if(a)return n.flags&256?(ss(n),n.flags&=-257,Lu(e,n,A)):n.memoizedState!==null?(rs(),n.child=e.child,n.flags|=128,null):(rs(),f=u.fallback,_=n.mode,u=Uu({mode:"visible",children:u.children},_),f=Fs(f,_,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Zs(n,e.child,null,A),u=n.child,u.memoizedState=Mh(A),u.childLanes=yh(e,r,A),n.memoizedState=Sh,il(null,u));if(ss(n),Md(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Wo({value:u,source:null,stack:null})),Lu(e,n,A)}if(Sn||Vs(e,n,A,!1),r=(A&e.childLanes)!==0,Sn||r){if(as.current!==null)return Lu(e,n,A);if(r=Je,r!==null&&(u=Ya(r,A),u!==0&&u!==_.retryLane))throw _.retryLane=u,Bs(e,u),li(r,e,u),vh;return Sd(f)||Qu(),Lu(e,n,A)}return Sd(f)?(n.flags|=192,n.child=e.child,null):(e=_.treeContext,en=Li(f.nextSibling),Cn=n,be=!0,Qa=null,Di=!1,e!==null&&b0(n,e),n=Eh(n,u.children),n.flags|=134221824,n)}function kg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),fu(e.return,n,a)}function Wg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Su(a)===null&&(n=e),e=e.sibling}return n}function Ou(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Th(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function bh(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=Bn.current;if(n.flags&128)return $o(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,$o(n,_),u==="backwards"&&e!==null?(Th(e),Tn(e,n,r,a),Th(e)):Tn(e,n,r,a),r=be?ko:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kg(e,a,n);else if(e.tag===19)kg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=Wg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Th(n)),Ou(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Su(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ou(n,!0,a,null,f,r);break;case"together":Ou(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Wg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ou(n,!1,u,a,f,r)}return n.child}function qg(e,n,a){var r=n.pendingProps;return $a(n,n.type,r.value),Tn(e,n,r.children,a),n.child}function wa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),cs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ah(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hu(e)))}function yy(e,n,a){switch(n.tag){case 3:On(n,n.stateNode.containerInfo),$a(n,vn,e.memoizedState.cache),Hs();break;case 27:case 5:Xn(n);break;case 4:On(n,n.stateNode.containerInfo);break;case 10:$a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ss(n),n.flags|=128,null;r=Vs(e,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?Xg(e,n,a):(ss(n),e=wa(e,n,a),e!==null?e.sibling:null)}ss(n);break;case 19:if(n.flags&128)return bh(e,n,a);if(u=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Vs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return bh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),$o(n,Bn.current),r)break;return null;case 22:return n.lanes=0,zg(e,n,a,n.pendingProps);case 24:$a(n,vn,e.memoizedState.cache)}return wa(e,n,a)}function Yg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Ah(e,a)&&(n.flags&128)===0)return Sn=!1,yy(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,be&&(n.flags&1048576)!==0&&T0(n,ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=qs(n.elementType),n.type=e,typeof e=="function")Lf(e)?(r=js(e,r),n.tag=1,n=Gg(null,n,e,r,a)):(n.tag=0,n=xh(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===Z){n.tag=11,n=Og(null,n,e,r,a);break t}else if(u===it){n.tag=14,n=Pg(null,n,e,r,a);break t}else if(u===et){n.tag=10,n.type=e,n=qg(null,n,a);break t}}throw n=Pt(e)||e,Error(s(306,n,""))}}return n;case 0:return xh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=js(r,n.pendingProps),Gg(e,n,r,u,a);case 3:t:{if(On(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,qf(e,n),Jo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,$a(n,vn,r),r!==f.cache&&Hf(n,[vn],a,!0),Qo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vg(e,n,r,a);break t}else if(r!==u){u=Ci(Error(s(424)),n),Wo(u),n=Vg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Li(e.firstChild),Cn=n,be=!0,Qa=null,Di=!0,a=z0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Hs(),r===u){n=wa(e,n,a);break t}Tn(e,n,r,a)}n=n.child}return n;case 26:return Br(e,n),e===null?(a=vv(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(n.stateNode=Q_(n.type,n.pendingProps,on.current,n)):n.memoizedState=vv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xn(n),e===null&&be&&(r=n.stateNode=pv(n.type,n.pendingProps,on.current),Cn=n,Di=!0,u=en,ps(n.type)?(yd=u,en=Li(r.firstChild)):en=u),Tn(e,n,n.pendingProps.children,a),Br(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=r=en)&&(r=g1(r,n.type,n.pendingProps,Di),r!==null?(n.stateNode=r,Cn=n,en=Li(r.firstChild),Di=!1,u=!0):u=!1),u||Ja(n)),Xn(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,dd(u,f)?r=null:_!==null&&dd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=th(e,n,fy,null,null,a),no._currentValue=u),Br(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&be&&((e=a=en)&&(a=_1(a,n.pendingProps,Di),a!==null?(n.stateNode=a,Cn=n,en=null,e=!0):e=!1),e||Ja(n)),null;case 13:return Xg(e,n,a);case 4:return On(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zs(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return Og(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Br(e,n),Tn(e,n,r,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return qg(e,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Xs(n),u=In(u),r=r(u),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Pg(e,n,n.type,n.pendingProps,a);case 15:return Ig(e,n,n.type,n.pendingProps,a);case 19:return bh(e,n,a);case 31:return Sy(e,n,a);case 22:return zg(e,n,a,n.pendingProps);case 24:return Xs(n),r=In(vn),e===null?(u=Xf(),u===null&&(u=Je,f=Gf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Wf(n),$a(n,vn,u)):((e.lanes&a)!==0&&(qf(e,n),Jo(n,null,null,a),Qo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),$a(n,vn,r)):(r=f.cache,$a(n,vn,r),r!==u.cache&&Hf(n,[vn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:be&&uu(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Br(e,n),Tn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Na(e){e.flags|=4}function Rh(e,n,a,r,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?yv(n,r):yv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(C_())e.flags|=8192;else throw Ys=gu,kf}else e.flags&=-16777217}function Zg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ev(n))if(C_())e.flags|=8192;else throw Ys=gu,kf}function Pu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?gr():536870912,e.lanes|=n,Xr|=n)}function al(e,n){if(!be)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ey(e,n,a){var r=n.pendingProps;switch(If(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Aa(vn),K(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dr(n)?Na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bf())),nn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Na(n),f!==null?(nn(n),Zg(n,f)):(nn(n),Rh(n,u,null,r,a))):f?f!==e.memoizedState?(Na(n),nn(n),Zg(n,f)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Na(n),nn(n),Rh(n,u,e,r,a)),null;case 27:if(Ve(n),a=on.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}e=Se.current,Dr(n)?A0(n):(e=pv(u,r,a),n.stateNode=e,Na(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(Ve(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}if(f=Se.current,Dr(n))A0(n);else{var _=ml(on.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[En]=n,f[Pn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Hn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Na(n)}}return nn(n),n.subtreeFlags&=-33554433,Rh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=on.current,Dr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[En]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Y_(e.nodeValue,a)),e||Ja(n,!0)}else e=ml(e).createTextNode(r),e[En]=n,n.stateNode=e}return nn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Dr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[En]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else a=Bf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Dr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[En]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),u=!1}else u=Bf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pu(n,n.updateQueue),nn(n),null);case 4:return K(),e===null&&ld(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return Aa(n.type),nn(n),null;case 19:if(Jf(n),r=n.memoizedState,r===null)return nn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)al(r,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Su(e),f!==null){for(n.flags|=128,al(r,!1),e=f.updateQueue,n.updateQueue=e,Pu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)M0(a,e),a=a.sibling;return $o(n,Bn.current&1|2),be&&Ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&pt()>Yu&&(n.flags|=128,u=!0,al(r,!1),n.lanes=4194304)}else{if(!u)if(e=Su(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pu(n,e),al(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!be)return nn(n),null}else 2*pt()-r.renderingStartTime>Yu&&a!==536870912&&(n.flags|=128,u=!0,al(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=pt(),e.sibling=null,f=Bn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||be?$o(n,f):(a=f,qt(zn,n),qt(Bn,a),kn===null&&(kn=n)),be&&Ta(n,r.treeForkCount),e}return nn(n),null;case 22:case 23:return di(n),jf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Pu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Zt(Ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Aa(vn),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(s(156,n.tag))}function Ty(e,n){switch(If(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Aa(vn),K(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));Hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(di(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Jf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return K(),null;case 10:return Aa(n.type),null;case 22:case 23:return di(n),jf(),e!==null&&Zt(Ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Aa(vn),null;case 25:return null;default:return null}}function Kg(e,n){switch(If(n),n.tag){case 3:Aa(vn),K();break;case 26:case 27:case 5:Ve(n);break;case 4:K();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:Jf(n);break;case 10:Aa(n.type);break;case 22:case 23:di(n),jf(),e!==null&&Zt(Ws);break;case 24:Aa(vn)}}function sl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(A){We(n,n.return,A)}}function os(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var z=a,J=A;try{J()}catch(ut){We(u,z,ut)}}}r=r.next}while(r!==f)}}catch(ut){We(n,n.return,ut)}}function jg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{F0(n,a)}catch(r){We(e,e.return,r)}}}function Qg(e,n,a){a.props=js(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){We(e,n,r)}}function ia(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var u=e.stateNode,f=Ma(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=av(f)),r=u.ref;break;case 7:if(e.stateNode===null){var _=new vi(e);g(e.child,!1,p1,_,void 0,void 0),e.stateNode=_}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(A){We(e,n,A)}}function Fn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(e,n,u)}else a.current=null}function Iu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)cv(e.stateNode,n[a])}function Jg(e){for(var n=e.return;n!==null&&(wh(n)&&cv(e.stateNode,n.stateNode),!Ch(n));)n=n.return}function rl(e){for(var n=e.return;n!==null&&(wh(n)&&m1(e.stateNode,n.stateNode),!Ch(n));)n=n.return}function Ch(e){return e.tag===5||e.tag===3||e.tag===27}function wh(e){return e&&e.tag===7&&e.stateNode!==null}function Nh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){We(e,e.return,u)}}function Dh(e,n,a){try{var r=e.stateNode;jy(r,e.type,a,n),r[Pn]=n}catch(u){We(e,e.return,u)}}function $g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ps(e.type)||e.tag===4}function Uh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ps(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lh(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta)),Iu(e,r),fe=!0;else if(u!==4&&(u===27&&(Iu(e,r),r=null,ps(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Lh(e,n,a,r),e=e.sibling;e!==null;)Lh(e,n,a,r),e=e.sibling}function zu(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Iu(e,r),fe=!0;else if(u!==4&&(u===27&&(Iu(e,r),r=null,ps(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(zu(e,n,a,r),e=e.sibling;e!==null;)zu(e,n,a,r),e=e.sibling}function t_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,r,a),n[En]=e,n[Pn]=a}catch(f){We(e,e.return,f)}}var Bu=!1,pi=null;function e_(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Bu=!0)}var aa=null;function n_(){var e=aa;return aa=null,e}var si=0;function Fr(e,n,a,r,u){return si=0,i_(e.child,n,a,r,u)}function i_(e,n,a,r,u){for(var f=!1;e!==null;){if(e.tag===5){var _=e.stateNode;if(r!==null){var A=gd(_);r.push(A),A.view&&(f=!0)}else f||gd(_).view&&(f=!0);Bu=!0,nv(_,si===0?n:n+"_"+si,a),si++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||i_(e.child,n,a,r,u)&&(f=!0));e=e.sibling}return f}function sa(e,n){for(;e!==null;)e.tag===5?iv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||sa(e.child,n)),e=e.sibling}function Fu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Fu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ya(n.default,n.share),n!=="none"&&(Fr(e,a,n,null,!1)||sa(e.child,!1))}e=e.sibling}}function Oh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,u=Ma(r,a),f=ya(r.default,a.paired?r.share:r.enter);f!=="none"?Fr(e,u,f,null,!1)?(Fu(e),a.paired||n||Yr(e,r.onEnter)):sa(e.child,!1):Fu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Oh(e,n),e=e.sibling;else Fu(e)}function Ph(e){if(pi!==null&&pi.size!==0){var n=pi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=ya(a.default,a.share);if(f!=="none"&&(Fr(e,r,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,Yr(e,a.onShare)):sa(e.child,!1)),n.delete(r),n.size===0)break}}}Ph(e)}e=e.sibling}}}function Ih(e){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode),r=pi!==null?pi.get(a):void 0,u=ya(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Fr(e,a,u,null,!1)?r!==void 0?(u=e.stateNode,r.paired=u,u.paired=r,pi.delete(a),Yr(e,n.onShare)):Yr(e,n.onExit):sa(e.child,!1)),pi!==null&&Ph(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ih(e),e=e.sibling;else pi!==null&&Ph(e)}function a_(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode);n=ya(n.default,n.update),e.flags&=-5,n!=="none"&&Fr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&a_(e);e=e.sibling}}function zh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,sa(e.child,!1))}zh(e)}e=e.sibling}}function Hu(e){if(e.tag===30)e.stateNode.paired=null,sa(e.child,!1),zh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hu(e),e=e.sibling;else zh(e)}function s_(e){for(e=e.child;e!==null;)e.tag===30?sa(e.child,!1):(e.subtreeFlags&33554432)!==0&&s_(e),e=e.sibling}function Bh(e,n,a,r,u,f,_){for(var A=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(f!==null&&si<f.length){var J=f[si],ut=gd(z);(J.view||ut.view)&&(A=!0);var St;if(St=(e.flags&4)===0)if(ut.clip)St=!0;else{St=J.rect;var j=ut.rect;St=St.y!==j.y||St.x!==j.x||St.height!==j.height||St.width!==j.width}St&&(e.flags|=4),ut.abs?ut=!J.abs:(J=J.rect,ut=ut.rect,ut=J.height!==ut.height||J.width!==ut.width),ut&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&nv(z,si===0?a:a+"_"+si,u),A&&(e.flags&4)!==0||(aa===null&&(aa=[]),aa.push(z,si===0?r:r+"_"+si,n.memoizedProps)),si++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?e.flags|=n.flags&32:Bh(e,n.child,a,r,u,f,_)&&(A=!0));n=n.sibling}return A}function r_(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,u=Ma(a,r),f=ya(a.default,a.update),_;_=e.memoizedState,e.memoizedState=null,r=e;var A=e.child;si=0,u=Bh(r,A,u,u,f,_,!1),(e.flags&4)!==0&&u&&Yr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&r_(e);e=e.sibling}}var wn=!1,He=!1,ra=!1,Fh=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Nn=null,oa=!1,ol=!1,Gu=!1,Hh=!1;function by(e,n,a){if(e=e.containerInfo,fd=io,e=f0(e),Af(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var A=0,z=-1,J=-1,ut=0,St=0,j=e,ot=null;e:for(;;){for(var Gt;j!==r||f!==0&&j.nodeType!==3||(z=A+f),j!==_||u!==0&&j.nodeType!==3||(J=A+u),j.nodeType===3&&(A+=j.nodeValue.length),(Gt=j.firstChild)!==null;)ot=j,j=Gt;for(;;){if(j===e)break e;if(ot===r&&++ut===f&&(z=A),ot===_&&++St===u&&(J=A),(Gt=j.nextSibling)!==null)break;j=ot,ot=j.parentNode}j=Gt}r=z===-1||J===-1?null:{start:z,end:J}}else r=null}r=r||{start:0,end:0}}else r=null;for(hd={focusedElem:e,selectionRange:r},io=!1,a=(a&335544064)===a,Nn=n,n=a?9270:1024;Nn!==null;){if(e=Nn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&Ih(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&e_(e),Vu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Ih(r),Vu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&e_(e),Vu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Nn=r):(a&&a_(e),Vu(a))}}pi=null}function Vu(e){for(;Nn!==null;){var n=Nn,a=e,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=js(n.type,u);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)xd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":xd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ma(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=ya(u.default,u.update),u!=="none"&&Fr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Nn=r;break}Nn=n.return}}function l_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),r&4&&sl(5,a);break;case 1:if(la(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){We(a,a.return,_)}else{var u=js(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}r&64&&jg(a),r&512&&ia(a,a.return);break;case 3:if(la(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{F0(e,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&r&4&&t_(a);case 26:case 5:la(e,a),n===null&&r&4&&Nh(a),r&512&&ia(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),r&4&&h_(e,a);break;case 13:la(e,a),r&4&&d_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zy.bind(null,a),v1(e,a))));break;case 22:if(r=a.memoizedState!==null||wn,!r){var f=n!==null&&n.memoizedState!==null||He;n=wn,u=He,wn=r,(He=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Xi(e,a,r)):la(e,a),wn=n,He=u}break;case 30:la(e,a),r&512&&ia(a,a.return);break;case 7:r&512&&ia(a,a.return);default:la(e,a)}}function Gh(e,n){for(e=e.child;e!==null;)u_(e,n),e=e.sibling}function u_(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){We(e,e.return,z)}Vh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,fe=!0}catch(z){We(e,e.return,z)}break;case 18:try{var A=e.stateNode;n?ev(A,!0):ev(e.stateNode,!1)}catch(z){We(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&Gh(e,n);break;default:Gh(e,n)}}function Vh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:u_(a,r);break t;case 22:a.memoizedState===null&&Vh(a,r);break t;default:Vh(a,r)}}e=e.sibling}}function c_(e){var n=e.alternate;n!==null&&(e.alternate=null,c_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Nt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,ri=!1;function Gi(e,n,a){for(a=a.child;a!==null;)f_(e,n,a),a=a.sibling}function f_(e,n,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:He||Fn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Fn(a,n),rl(a);var r=rn,u=ri;ps(a.type)&&(rn=a.stateNode,ri=!1),Gi(e,n,a),mv(a.stateNode,a.type,a.memoizedProps),rn=r,ri=u;break;case 5:He||Fn(a,n),rl(a);case 6:if(a.tag===6&&rl(a),r=rn,u=ri,rn=null,Gi(e,n,a),rn=r,ri=u,rn!==null)if(ri)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),fe=!0}catch(f){We(a,n,f)}else try{rn.removeChild(a.stateNode),fe=!0}catch(f){We(a,n,f)}break;case 18:rn!==null&&(ri?(e=rn,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ao(e)):tv(rn,a.stateNode));break;case 4:r=rn,u=ri,rn=a.stateNode.containerInfo,ri=!0,Gi(e,n,a),rn=r,ri=u;break;case 0:case 11:case 14:case 15:os(2,a,n),He||os(4,a,n),Gi(e,n,a);break;case 1:He||(Fn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Qg(a,n,r)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:He=(r=He)||a.memoizedState!==null,Gi(e,n,a),He=r;break;case 30:Fn(a,n),Gi(e,n,a);break;case 7:He||Fn(a,n),Gi(e,n,a);break;default:Gi(e,n,a)}}function h_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ao(e)}catch(a){We(n,n.return,a)}}}function d_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ao(e)}catch(a){We(n,n.return,a)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new o_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new o_),n;default:throw Error(s(435,e.tag))}}function Xu(e,n){var a=Ay(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=By.bind(null,e,r);r.then(u,u)}})}function Jn(e,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],_=e,A=n,z=A;t:for(;z!==null;){switch(z.tag){case 27:if(ps(z.type)){rn=z.stateNode,ri=!1;break t}break;case 5:rn=z.stateNode,ri=!1;break t;case 3:case 4:rn=z.stateNode.containerInfo,ri=!0;break t}z=z.return}if(rn===null)throw Error(s(160));f_(_,A,f),rn=null,ri=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)p_(n,e,a),n=n.sibling}var Vi=null;function p_(e,n,a){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Jn(n,e,a),$n(e),u&4&&(os(3,e,e.return),sl(3,e),os(5,e,e.return));break;case 1:Jn(n,e,a),$n(e),u&512&&(He||r===null||Fn(r,r.return)),u&64&&wn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Vi,Jn(n,e,a),$n(e),u&512&&(He||r===null||Fn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(wn)e.stateNode=Q_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[wt]||r[En]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Hn(r,n,a),r[En]=e,zt(r),n=r;break t;case"link":if(f=Mv("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=u.createElement(n),Hn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=Mv("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=u.createElement(n),Hn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[En]=e,zt(r),n=r}e.stateNode=n}else wn||Ad(f,e.type,e.stateNode);else e.stateNode=Sv(f,a,e.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||He||n.parentNode.removeChild(n)):u.count--,a===null?wn||Ad(f,e.type,e.stateNode):Sv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Dh(e,e.memoizedProps,r.memoizedProps);break;case 27:Jn(n,e,a),$n(e),u&512&&(He||r===null||Fn(r,r.return)),r!==null&&u&4&&Dh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=ra,ra=!1,Jn(n,e,a),ra=f,$n(e),u&512&&(He||r===null||Fn(r,r.return)),e.flags&32){n=e.stateNode;try{Mr(n,""),fe=!0}catch(ut){We(e,e.return,ut)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Dh(e,n,r!==null?r.memoizedProps:n)),u&1024&&(Fh=!0);break;case 6:if(Jn(n,e,a),$n(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,fe=!0}catch(ut){We(e,e.return,ut)}}break;case 3:if(fe=!1,ac=null,f=Vi,Vi=gl(n.containerInfo),Jn(n,e,a),Vi=f,$n(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{ao(n.containerInfo)}catch(ut){We(e,e.return,ut)}Fh&&(Fh=!1,m_(e)),fe=!1;break;case 4:u=ra,ra=wn,r=Ps(),f=Vi,Vi=gl(e.stateNode.containerInfo),Jn(n,e,a),$n(e),Vi=f,fe&&ol&&(Gu=!0),fe=r,ra=u;break;case 12:Jn(n,e,a),$n(e);break;case 31:Jn(n,e,a),$n(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 13:Jn(n,e,a),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(qu=pt()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 22:f=e.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var A=wn,z=He,J=ra;wn=A||f,ra=J||f,He=z||_,Jn(n,e,a),He=z,ra=J,wn=A,$n(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||wn||He||(n=_||He,a=wn,r=He,wn=f||wn,He=n,ls(e,2),wn=a,He=r),!f&&ra||Gh(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xu(e,a))));break;case 19:Jn(n,e,a),$n(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 30:u&512&&(He||r===null||Fn(r,r.return)),u=Ps(),f=ol,_=(a&335544064)===a,A=e.memoizedProps,ol=_&&ya(A.default,A.update)!=="none",Jn(n,e,a),$n(e),_&&r!==null&&fe&&(e.flags|=4),ol=f,fe=u;break;case 21:break;case 7:u&512&&(He||r===null||Fn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Jn(n,e,a),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if($g(r)){a=r;break}r=r.return}r=null;for(var u=e.return;u!==null;){if(wh(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(Ch(u))break;u=u.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,z=Uh(e);zu(e,z,A,_);break;case 5:var J=a.stateNode;a.flags&32&&(Mr(J,""),a.flags&=-33);var ut=Uh(e);zu(e,ut,J,_);break;case 3:case 4:var St=a.stateNode.containerInfo,j=Uh(e);Lh(e,j,St,_);break;default:throw Error(s(161))}}catch(ot){We(e,e.return,ot)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function m_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;m_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,io=!0,n.reset(),io=!1),e=e.sibling}}function Hr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)g_(n,e),n=n.sibling;else r_(n)}function g_(e,n){var a=e.alternate;if(a===null)Oh(e,!1);else switch(e.tag){case 3:if(Hh=oa=!1,n_(),Hr(n,e),!oa&&!Gu){if(e=aa,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var u=e[r+1];iv(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hh=!0}aa=null;break;case 5:Hr(n,e);break;case 4:r=oa,oa=!1,Hr(n,e),oa&&(Gu=!0),oa=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Oh(e,!1):Hr(n,e));break;case 30:r=oa,u=n_(),oa=!1,Hr(n,e),oa&&(e.flags|=4);var f=e.memoizedProps,_=e.stateNode;n=Ma(f,_),_=Ma(a.memoizedProps,_);var A=ya(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,si=0,n=Bh(e,a,n,_,A,f,!0),si!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Yr(e,e.memoizedProps.onUpdate),aa=u):u!==null&&(u.push.apply(u,aa),aa=u),oa=(e.flags&32)!==0?!0:r;break;default:Hr(n,e)}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l_(e,n.alternate,n),n=n.sibling}function ls(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:os(4,a,a.return),ls(a,r);break;case 1:Fn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Qg(a,a.return,u),ls(a,r);break;case 27:(r&2)!==0&&mv(a.stateNode,a.type,a.memoizedProps);case 5:Fn(a,a.return),a.tag!==5&&a.tag!==27||rl(a),ls(a,r);break;case 6:rl(a);break;case 26:Fn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||He||u.parentNode.removeChild(u),ls(a,r);break;case 22:a.memoizedState===null&&ls(a,r);break;case 30:Fn(a,a.return),ls(a,r);break;case 7:Fn(a,a.return);default:ls(a,r)}e=e.sibling}}function Xi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Xi(u,f,a),sl(4,f);break;case 1:if(Xi(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){We(r,r.return,ut)}if(r=f,u=r.updateQueue,u!==null){var z=r.stateNode;try{var J=u.shared.hiddenCallbacks;if(J!==null)for(u.shared.hiddenCallbacks=null,u=0;u<J.length;u++)B0(J[u],z)}catch(ut){We(r,r.return,ut)}}A&&_&64&&jg(f),ia(f,f.return);break;case 27:(a&2)!==0&&t_(f);case 5:f.tag!==5&&f.tag!==27||Jg(f),Xi(u,f,a),A&&r===null&&_&4&&Nh(f),ia(f,f.return);break;case 6:Jg(f);break;case 26:z=f.stateNode,f.memoizedState!==null||z===null||wn||Ad(gl(z.ownerDocument),f.type,z),Xi(u,f,a),A&&r===null&&_&4&&Nh(f),ia(f,f.return);break;case 12:Xi(u,f,a);break;case 31:Xi(u,f,a),A&&_&4&&h_(u,f);break;case 13:Xi(u,f,a),A&&_&4&&d_(u,f);break;case 22:f.memoizedState===null&&Xi(u,f,a),ia(f,f.return);break;case 30:Xi(u,f,a),ia(f,f.return);break;case 7:ia(f,f.return);default:Xi(u,f,a)}n=n.sibling}}function Xh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qo(a))}function kh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qo(e))}function Ui(e,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)__(e,n,a,r),n=n.sibling;else u&&s_(n)}function __(e,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Hu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,r),f&2048&&sl(9,n);break;case 1:Ui(e,n,a,r);break;case 3:Ui(e,n,a,r),u&&Hh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&qo(f)));break;case 12:if(f&2048){Ui(e,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,A=_.id,z=_.onPostCommit;typeof z=="function"&&z(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(J){We(n,n.return,J)}}else Ui(e,n,a,r);break;case 31:Ui(e,n,a,r);break;case 13:Ui(e,n,a,r);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&Hu(A),_._visibility&2?Ui(e,n,a,r):ll(e,n)):(u&&A!==null&&A.memoizedState!==null&&Hu(n),_._visibility&2?Ui(e,n,a,r):(_._visibility|=2,Gr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Xh(A,n);break;case 24:Ui(e,n,a,r),f&2048&&kh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(sa(f.child,!0),sa(n.child,!0))),Ui(e,n,a,r);break;default:Ui(e,n,a,r)}}function Gr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,z=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:Gr(f,_,A,z,u),sl(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Gr(f,_,A,z,u):ll(f,_):(ut._visibility|=2,Gr(f,_,A,z,u)),u&&J&2048&&Xh(_.alternate,_);break;case 24:Gr(f,_,A,z,u),u&&J&2048&&kh(_.alternate,_);break;default:Gr(f,_,A,z,u)}n=n.sibling}}function ll(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:ll(a,r),u&2048&&Xh(r.alternate,r);break;case 24:ll(a,r),u&2048&&kh(r.alternate,r);break;default:ll(a,r)}n=n.sibling}}var Qs=8192;function Js(e,n,a){if(e.subtreeFlags&Qs)for(e=e.child;e!==null;)v_(e,n,a),e=e.sibling}function v_(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&Qs&&(e.memoizedState!==null?U1(a,Vi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&bv(a,e)));break;case 5:Js(e,n,a),e.flags&Qs&&(e=e.stateNode,(n&335544128)===n&&bv(a,e));break;case 3:case 4:var r=Vi;Vi=gl(e.stateNode.containerInfo),Js(e,n,a),Vi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Qs,Qs=16777216,Js(e,n,a),Qs=r):Js(e,n,a));break;case 30:if((e.flags&Qs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var u=e.stateNode;u.paired=null,pi===null&&(pi=new Map),pi.set(r,u)}Js(e,n,a);break;default:Js(e,n,a)}}function x_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ul(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,M_(r,e)}x_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S_(e),e=e.sibling}function S_(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&os(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ku(e)):ul(e);break;default:ul(e)}}function ku(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,M_(r,e)}x_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:os(8,n,n.return),ku(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ku(n));break;default:ku(n)}e=e.sibling}}function M_(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:os(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:qo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Nn=r;else t:for(a=e;Nn!==null;){r=Nn;var u=r.sibling,f=r.return;if(c_(r),r===a){Nn=null;break t}if(u!==null){u.return=f,Nn=u;break t}Nn=f}}}var Ry={getCacheForType:function(e){var n=In(vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return In(vn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Be=0,Je=null,Re=null,Ne=0,ke=0,mi=null,us=!1,Vr=!1,Wh=!1,Da=0,gn=0,cs=0,$s=0,Wu=0,gi=0,Xr=0,cl=null,oi=null,qh=!1,qu=0,y_=0,Yu=1/0,Zu=null,fs=null,fn=0,ki=null,tr=null,ua=0,Yh=0,Zh=null,E_=null,kr=null,Wr=null,qr=null,fl=0,Ku=null;function _i(){return(Be&2)!==0&&Ne!==0?Ne&-Ne:Et.T!==null?ad():Oo()}function T_(){if(gi===0)if((Ne&536870912)===0||be){var e=ci;ci<<=1,(ci&3932160)===0&&(ci=262144),gi=e}else gi=536870912;return e=zn.current,e!==null&&(e.flags|=32),gi}function Yr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=av(Ma(e.memoizedProps,a))),Wr===null&&(Wr=[]),Wr.push(n.bind(null,r))}}function li(e,n,a){(e===Je&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),hs(e,Ne,gi,!1)),qa(e,a),((Be&2)===0||e!==Je)&&(e===Je&&((Be&2)===0&&($s|=a),gn===4&&hs(e,Ne,gi,!1)),ca(e))}function b_(e,n,a){if((Be&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Wa(e,n),u=r?Dy(e,n):jh(e,n,!0),f=r;do{if(u===0){Vr&&!r&&hs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!wy(a)){u=jh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;u=cl;var z=A.current.memoizedState.isDehydrated;if(z&&(Zr(A,_).flags|=256),_=jh(A,_,!1),_!==2&&_!==6){if(Wh&&!z){A.errorRecoveryDisabledLanes|=f,$s|=f,u=4;break t}f=oi,oi=u,f!==null&&(oi===null?oi=f:oi.push.apply(oi,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Zr(e,0),hs(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:hs(r,n,gi,!us);break t;case 2:oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=qu+300-pt(),10<u)){if(hs(r,n,gi,!us),mr(r,0,!0)!==0)break t;ua=n,r.timeoutHandle=md(A_.bind(null,r,a,oi,Zu,qh,n,gi,$s,Xr,us,f,"Throttled",-0,0),u);break t}A_(r,a,oi,Zu,qh,n,gi,$s,Xr,us,f,null,-0,0)}}break}while(!0);ca(e)}function A_(e,n,a,r,u,f,_,A,z,J,ut,St,j,ot){e.timeoutHandle=-1;var Gt=n.subtreeFlags,te=(f&335544064)===f;if(St=null,(te||Gt&8192||(Gt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},pi=null,v_(n,f,St),te&&(Gt=St,te=e.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&(Gt.count++,Gt.waitingForViewTransition=!0,Gt=xl.bind(Gt),te.finished.then(Gt,Gt))),Gt=(f&62914560)===f?qu-pt():(f&4194048)===f?y_-pt():0,Gt=L1(St,Gt),Gt!==null)){ua=f,e.cancelPendingCommit=Gt(O_.bind(null,e,n,f,a,r,u,_,A,z,J,ut,St,null,j,ot)),hs(e,f,_,!J);return}O_(e,n,f,a,r,u,_,A,z,J,ut,St)}function wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!hi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hs(e,n,a,r){n=No(e,n),n&=~Wu,n&=~$s,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Kt(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Do(e,a,n)}function ju(){return(Be&6)===0?(hl(0),!1):!0}function Kh(){if(Re!==null){if(ke===0)var e=Re.return;else e=Re,ba=Gs=null,ih(e),Or=null,Ko=0,e=Re;for(;e!==null;)Kg(e.alternate,e),e=e.return;Re=null}}function Zr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,$y(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Kh(),Je=e,Re=a=Ea(e.current,null),Ne=n,ke=0,mi=null,us=!1,Vr=Wa(e,n),Wh=!1,Xr=gi=Wu=$s=cs=gn=0,oi=cl=null,qh=!1,Da=No(e,n),au(),a}function R_(e,n){Me=null,Et.H=wu,n===Lr||n===mu?(n=O0(),ke=3):n===kf?(n=O0(),ke=4):ke=n===vh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Re===null&&(gn=1,Nu(e,Ci(n,e.current)))}function C_(){var e=zn.current;return e===null?!0:(Ne&4194048)===Ne?kn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===kn:!1}function w_(){var e=Et.H;return Et.H=wu,e===null?wu:e}function N_(){var e=Et.A;return Et.A=Ry,e}function Qu(){gn=4,us||(Ne&4194048)!==Ne&&zn.current!==null||(Vr=!0),(cs&134217727)===0&&($s&134217727)===0||Je===null||hs(Je,Ne,gi,!1)}function jh(e,n,a){var r=Be;Be|=2;var u=w_(),f=N_();(Je!==e||Ne!==n)&&(Zu=null,Zr(e,n)),n=!1;var _=gn;t:do try{if(ke!==0&&Re!==null){var A=Re,z=mi;switch(ke){case 8:Kh(),_=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var J=ke;if(ke=0,mi=null,Kr(e,A,z,J),a&&Vr){_=0;break t}break;default:J=ke,ke=0,mi=null,Kr(e,A,z,J)}}Ny(),_=gn;break}catch(ut){R_(e,ut)}while(!0);return n&&e.shellSuspendCounter++,ba=Gs=null,Be=r,Et.H=u,Et.A=f,Re===null&&(Je=null,Ne=0,au()),_}function Ny(){for(;Re!==null;)D_(Re)}function Dy(e,n){var a=Be;Be|=2;var r=w_(),u=N_();Je!==e||Ne!==n?(Zu=null,Yu=pt()+500,Zr(e,n)):Vr=Wa(e,n);t:do try{if(ke!==0&&Re!==null){n=Re;var f=mi;e:switch(ke){case 1:ke=0,mi=null,Kr(e,n,f,1);break;case 2:case 9:if(U0(f)){ke=0,mi=null,U_(n);break}n=function(){ke!==2&&ke!==9||Je!==e||(ke=7),ca(e)},f.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:U0(f)?(ke=0,mi=null,U_(n)):(ke=0,mi=null,Kr(e,n,f,7));break;case 5:var _=null;switch(Re.tag){case 26:_=Re.memoizedState;case 5:case 27:var A=Re;if(_?Ev(_):A.stateNode.complete){ke=0,mi=null;var z=A.sibling;if(z!==null)Re=z;else{var J=A.return;J!==null?(Re=J,Ju(J)):Re=null}break e}}ke=0,mi=null,Kr(e,n,f,5);break;case 6:ke=0,mi=null,Kr(e,n,f,6);break;case 8:Kh(),gn=6;break t;default:throw Error(s(462))}}Uy();break}catch(ut){R_(e,ut)}while(!0);return ba=Gs=null,Et.H=r,Et.A=u,Be=a,Re!==null?0:(Je=null,Ne=0,au(),gn)}function Uy(){for(;Re!==null&&!Dt();)D_(Re)}function D_(e){var n=Yg(e.alternate,e,Da);e.memoizedProps=e.pendingProps,n===null?Ju(e):Re=n}function U_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hg(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Hg(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:ih(n);var r=n;r===Cn&&(be?(cu(r),r.tag===5&&r.stateNode!=null&&(en=r.stateNode)):(cu(r),be=!0));default:Kg(a,n),n=Re=M0(n,Da),n=Yg(a,n,Da)}e.memoizedProps=e.pendingProps,n===null?Ju(e):Re=n}function Kr(e,n,a,r){ba=Gs=null,ih(n),Or=null,Ko=0;var u=n.return;try{if(xy(e,u,n,a,Ne)){gn=1,Nu(e,Ci(a,e.current)),Re=null;return}}catch(f){if(u!==null)throw Re=u,f;gn=1,Nu(e,Ci(a,e.current)),Re=null;return}n.flags&32768?(be||r===1?e=!0:Vr||(Ne&536870912)!==0?e=!1:(us=e=!0,(r===2||r===9||r===3||r===6)&&(r=zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),L_(n,e)):Ju(n)}function Ju(e){var n=e;do{if((n.flags&32768)!==0){L_(n,us);return}e=n.return;var a=Ey(n.alternate,n,Da);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);gn===0&&(gn=5)}function L_(e,n){do{var a=Ty(e.alternate,e);if(a!==null){a.flags&=32767,Re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=a}while(e!==null);gn=6,Re=null}function O_(e,n,a,r,u,f,_,A,z,J,ut,St){e.cancelPendingCommit=null;do $u();while(fn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Je&&(Re=Je=null,Ne=0),tr=n,ki=e,ua=a,Zh=u,E_=r,Ly(e,n,a,_,A,z,St)}}function Ly(e,n,a,r,u,f,_){var A=n.lanes|n.childLanes;if(Yh=A,A|=Df,vr(e,a,A,r,u,f),Wr=null,(a&335544064)===a?(qr=oy(e),r=10262):(qr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Fy(_t,function(){return td(),null})):(e.callbackNode=null,e.callbackPriority=0),Bu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,u=Bt.p,Bt.p=2,f=Be,Be|=4;try{by(e,n,a)}finally{Be=f,Bt.p=u,Et.T=r}}fn=1,Bu?kr=s1(_,e.containerInfo,qr,Qh,Jh,Py,$h,td,Oy):(Qh(),Jh(),$h())}function Oy(e){if(fn!==0){var n=ki.onRecoverableError;n(e,{componentStack:null})}}function Py(){fn===3&&(fn=0,g_(tr,ki),fn=4)}function Qh(){if(fn===1){fn=0;var e=ki,n=tr,a=ua,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var u=Bt.p;Bt.p=2;var f=Be;Be|=4;try{ol=Gu=!1,p_(n,e,a),a=hd;var _=f0(e.containerInfo),A=a.focusedElem,z=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&c0(A.ownerDocument.documentElement,A)){if(z!==null&&Af(A)){var J=z.start,ut=z.end;if(ut===void 0&&(ut=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ut,A.value.length);else{var St=A.ownerDocument||document,j=St&&St.defaultView||window;if(j.getSelection){var ot=j.getSelection(),Gt=A.textContent.length,te=Math.min(z.start,Gt),ye=z.end===void 0?te:Math.min(z.end,Gt);!ot.extend&&te>ye&&(_=ye,ye=te,te=_);var Q=u0(A,te),k=u0(A,ye);if(Q&&k&&(ot.rangeCount!==1||ot.anchorNode!==Q.node||ot.anchorOffset!==Q.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var nt=St.createRange();nt.setStart(Q.node,Q.offset),ot.removeAllRanges(),te>ye?(ot.addRange(nt),ot.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ot.addRange(nt))}}}}for(St=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var xt=St[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}io=!!fd,hd=fd=null}finally{Be=f,Bt.p=u,Et.T=r}}e.current=n,fn=2}}function Jh(){if(fn===2){fn=0;var e=ki,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var r=Bt.p;Bt.p=2;var u=Be;Be|=4;try{l_(e,n.alternate,n)}finally{Be=u,Bt.p=r,Et.T=a}}fn=3}}function $h(){if(fn===4||fn===3){fn=0;var e=kr;kr=null,It();var n=ki,a=tr,r=ua,u=E_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?fn=5:(fn=0,tr=ki=null,P_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(fs=null),xr(r),a=a.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(ne,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Et.T,f=Bt.p,Bt.p=2,Et.T=null;try{for(var _=n.onRecoverableError,A=0;A<u.length;A++){var z=u[A];_(z.value,{componentStack:z.stack})}}finally{Et.T=a,Bt.p=f}}if(u=Wr,_=qr,qr=null,u!==null&&(Wr=null,_===null&&(_=[]),e!==null))for(z=0;z<u.length;z++)a=(0,u[z])(_),a!==void 0&&e.finished.finally(a);(ua&3)!==0&&$u(),ca(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Ku?fl++:(fl=0,Ku=n):(fl=0,Ku=null),hl(0)}}function P_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qo(n)))}function $u(){return kr!==null&&(kr.skipTransition(),kr=null),Qh(),Jh(),$h(),td()}function td(){if(fn!==5)return!1;var e=ki,n=Yh;Yh=0;var a=xr(ua),r=Et.T,u=Bt.p;try{Bt.p=32>a?32:a,Et.T=null,a=Zh,Zh=null;var f=ki,_=ua;if(fn=0,tr=ki=null,ua=0,(Be&6)!==0)throw Error(s(331));var A=Be;if(Be|=4,S_(f.current),__(f,f.current,_,a),Be=A,hl(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(ne,f)}catch{}return!0}finally{Bt.p=u,Et.T=r,P_(e,n)}}function I_(e,n,a){n=Ci(a,n),n=_h(e.stateNode,n,2),e=is(e,n,2),e!==null&&(qa(e,2),ca(e))}function We(e,n,a){if(e.tag===3)I_(e,e,a);else for(;n!==null;){if(n.tag===3){I_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fs===null||!fs.has(r))){e=Ci(a,e),a=Ug(2),r=is(n,a,2),r!==null&&(Lg(a,r,n,e),qa(r,2),ca(r));break}}n=n.return}}function ed(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Cy;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Wh=!0,u.add(a),e=Iy.bind(null,e,n,a),n.then(e,e))}function Iy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Je===e&&(Ne&a)===a&&((gn===4||gn===3&&(Ne&62914560)===Ne&&300>pt()-qu)&&(Be&2)===0?Zr(e,0):Wu|=a,Xr===Ne&&(Xr=0)),ca(e)}function z_(e,n){n===0&&(n=gr()),e=Bs(e,n),e!==null&&(qa(e,n),ca(e))}function zy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),z_(e,a)}function By(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),z_(e,a)}function Fy(e,n){return Rt(e,n)}var jr=null,Qr=null,nd=!1,tc=!1,id=!1,ds=0;function ca(e){e!==Qr&&e.next===null&&(Qr===null?jr=Qr=e:Qr=Qr.next=e),tc=!0,nd||(nd=!0,Gy())}function hl(e,n){if(!id&&tc){id=!0;do for(var a=!1,r=jr;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Kt(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,G_(r,f))}else f=Ne,f=mr(r,r===Je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Wa(r,f)||(a=!0,G_(r,f));r=r.next}while(a);id=!1}}function Hy(){B_()}function B_(){tc=nd=!1;var e=0;ds!==0&&Jy()&&(e=ds);for(var n=pt(),a=null,r=jr;r!==null;){var u=r.next,f=F_(r,n);f===0?(r.next=null,a===null?jr=u:a.next=u,u===null&&(Qr=a)):(a=r,(e!==0||(f&3)!==0)&&(tc=!0)),r=u}fn!==0&&fn!==5||hl(e),ds!==0&&(ds=0)}function F_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Kt(f),A=1<<_,z=u[_];z===-1?((A&a)===0||(A&r)!==0)&&(u[_]=va(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=Je,a=Ne,a=mr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&yt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&yt(r),xr(a)){case 2:case 8:a=H;break;case 32:a=_t;break;case 268435456:a=Lt;break;default:a=_t}return r=H_.bind(null,e),a=Rt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&yt(r),e.callbackPriority=2,e.callbackNode=null,2}function H_(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($u()&&e.callbackNode!==a)return null;var r=Ne;return r=mr(e,e===Je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(b_(e,r,n),F_(e,pt()),e.callbackNode!=null&&e.callbackNode===a?H_.bind(null,e):null)}function G_(e,n){if($u())return null;b_(e,n,!0)}function Gy(){t1(function(){(Be&6)!==0?Rt(Ut,Hy):B_()})}function ad(){if(ds===0){var e=ks;e===0&&(e=ln,ln<<=1,(ln&261888)===0&&(ln=256)),ds=e}return ds}function V_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jl(e)}function Vy(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=V_((u[Pn]||null).action),_=r.submitter;_&&(n=(n=_[Pn]||null)?V_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new tu("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ds!==0){var z=new FormData(u,_);hh(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=new FormData(u,_),hh(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var sd=0;sd<Nf.length;sd++){var rd=Nf[sd],Xy=rd.toLowerCase(),ky=rd[0].toUpperCase()+rd.slice(1);Hi(Xy,"on"+ky)}Hi(p0,"onAnimationEnd"),Hi(m0,"onAnimationIteration"),Hi(g0,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi($M,"onTransitionRun"),Hi(ty,"onTransitionStart"),Hi(ey,"onTransitionCancel"),Hi(_0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function X_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],z=A.instance,J=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ut){iu(ut)}u.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(A=r[_],z=A.instance,J=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ut){iu(ut)}u.currentTarget=null,f=z}}}}function Ce(e,n){var a=n[X];a===void 0&&(a=n[X]=new Set);var r=e+"__bubble";a.has(r)||(k_(n,e,2,!1),a.add(r))}function od(e,n,a){var r=0;n&&(r|=4),k_(a,e,r,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[ec]){e[ec]=!0,un.forEach(function(a){a!=="selectionchange"&&(Wy.has(a)||od(a,!1,e),od(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,od("selectionchange",!1,n))}}function k_(e,n,a,r){switch(Lv(n)){case 2:var u=z1;break;case 8:u=B1;break;default:u=Cd}a=u.bind(null,n,a,e),u=void 0,!gf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ud(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Ht(A),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}A=A.parentNode}}r=r.return}km(function(){var J=f,ut=pf(a),St=[];t:{var j=v0.get(e);if(j!==void 0){var ot=tu,Gt=e;switch(e){case"keypress":if(Jl(a)===0)break t;case"keydown":case"keyup":ot=wM;break;case"focusin":Gt="focus",ot=Sf;break;case"focusout":Gt="blur",ot=Sf;break;case"beforeblur":case"afterblur":ot=Sf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=_M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=OM;break;case p0:case m0:case g0:ot=SM;break;case _0:ot=IM;break;case"scroll":case"scrollend":ot=mM;break;case"wheel":ot=BM;break;case"copy":case"cut":case"paste":ot=yM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Km;break;case"submit":ot=UM;break;case"toggle":case"beforetoggle":ot=HM}var te=(n&4)!==0,ye=!te&&(e==="scroll"||e==="scrollend"),Q=te?j!==null?j+"Capture":null:j;te=[];for(var k=J,nt;k!==null;){var xt=k;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||Q===null||(xt=Po(k,Q),xt!=null&&te.push(pl(k,xt,nt))),ye)break;k=k.return}0<te.length&&(j=new ot(j,Gt,null,a,ut),St.push({event:j,listeners:te}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",ot&&a!==df&&(Gt=a.relatedTarget||a.fromElement)&&(Ht(Gt)||Gt[R]))break t;(j||ot)&&(Gt=ut.window===ut?ut:(ot=ut.ownerDocument)?ot.defaultView||ot.parentWindow:window,j?(ot=a.relatedTarget||a.toElement,j=J,ot=ot?Ht(ot):null,ot!==null&&(ye=c(ot),te=ot.tag,ot!==ye||te!==5&&te!==27&&te!==6)&&(ot=null)):(j=null,ot=J),j!==ot&&(te=Ym,xt="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Km,xt="onPointerLeave",Q="onPointerEnter",k="pointer"),ye=j==null?Gt:le(j),nt=ot==null?Gt:le(ot),Gt=new te(xt,k+"leave",j,a,ut),Gt.target=ye,Gt.relatedTarget=nt,xt=null,Ht(ut)===J&&(te=new te(Q,k+"enter",ot,a,ut),te.target=nt,te.relatedTarget=ye,xt=te),ye=xt,te=j&&ot?P(j,ot,qy):null,j!==null&&W_(St,Gt,j,te,!1),ot!==null&&ye!==null&&W_(St,ye,ot,te,!0)))}t:{if(j=J?le(J):window,ot=j.nodeName&&j.nodeName.toLowerCase(),ot==="select"||ot==="input"&&j.type==="file")var jt=i0;else if(e0(j))if(a0)jt=jM;else{jt=ZM;var De=YM}else ot=j.nodeName,!ot||ot.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?J&&hf(J.elementType)&&(jt=i0):jt=KM;if(jt&&(jt=jt(e,J))){n0(St,jt,a,ut);break t}De&&De(e,j,J)}switch(De=J?le(J):window,e){case"focusin":(e0(De)||De.contentEditable==="true")&&(br=De,Rf=J,Xo=null);break;case"focusout":Xo=Rf=br=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,h0(St,a,ut);break;case"selectionchange":if(JM)break;case"keydown":case"keyup":h0(St,a,ut)}var ae;if(yf)t:{switch(e){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Tr?$m(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(jm&&a.locale!=="ko"&&(Tr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Tr&&(ae=Wm()):(Za=ut,_f="value"in Za?Za.value:Za.textContent,Tr=!0)),De=nc(J,ue),0<De.length&&(ue=new Zm(ue,e,null,a,ut),St.push({event:ue,listeners:De}),ae?ue.data=ae:(ae=t0(a),ae!==null&&(ue.data=ae)))),(ae=VM?XM(e,a):kM(e,a))&&(ue=nc(J,"onBeforeInput"),0<ue.length&&(De=new Zm("onBeforeInput","beforeinput",null,a,ut),St.push({event:De,listeners:ue}),De.data=ae)),Vy(St,e,J,a,ut)}X_(St,n)})}function pl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Po(e,a),u!=null&&r.unshift(pl(e,u,f)),u=Po(e,n),u!=null&&r.push(pl(e,u,f))),e.tag===3)return r;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W_(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,z=A.alternate,J=A.stateNode;if(A=A.tag,z!==null&&z===r)break;A!==5&&A!==26&&A!==27||J===null||(z=J,u?(J=Po(a,f),J!=null&&_.unshift(pl(a,J,z))):u||(J=Po(a,f),J!=null&&_.push(pl(a,J,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function q_(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Zy,"")}function Y_(e,n){return n=q_(n),q_(e)===n}function qe(e,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Mr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Mr(e,""+r);else return;break;case"className":Ti(e,"class",r);break;case"tabIndex":Ti(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(e,a,r);break;case"style":Vm(e,r,f);return;case"data":if(n!=="object"){Ti(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=jl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",u.name,u,null),qe(e,n,"formEncType",u.formEncType,u,null),qe(e,n,"formMethod",u.formMethod,u,null),qe(e,n,"formTarget",u.formTarget,u,null)):(qe(e,n,"encType",u.encType,u,null),qe(e,n,"method",u.method,u,null),qe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=jl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ta);return;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=jl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),fi(e,"popover",r);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":fi(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=dM.get(a)||a,fi(e,a,r);else return}fe=!0}function cd(e,n,a,r,u,f){switch(a){case"style":Vm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")Mr(e,r);else if(typeof r=="number"||typeof r=="bigint")Mr(e,""+r);else return;break;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ta);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Xe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[Pn]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,u);break t}fe=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):fi(e,a,r)}return}fe=!0}function Hn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,f,_,a,null)}}u&&qe(e,n,"srcSet",a.srcSet,a,null),r&&qe(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var A=f=_=u=null,z=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":u=ut;break;case"type":_=ut;break;case"checked":z=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:qe(e,n,r,ut,a,null)}}Bm(e,f,A,z,J,_,u,!1);return;case"select":Ce("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:qe(e,n,u,A,a,null)}n=f,a=_,e.multiple=!!r,n!=null?Sr(e,!!r,n,!1):a!=null&&Sr(e,!!r,a,!0);return;case"textarea":Ce("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qe(e,n,_,A,a,null)}Hm(e,r,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qe(e,n,z,r,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(r=0;r<dl.length;r++)Ce(dl[r],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,J,r,a,null)}return;default:if(hf(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&cd(e,n,ut,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&qe(e,n,A,r,a,null))}var Ky={};function jy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,z=null,J=null,ut=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=St;default:r.hasOwnProperty(ot)||qe(e,n,ot,null,r,St)}}for(var j in r){var ot=r[j];if(St=a[j],r.hasOwnProperty(j)&&(ot!=null||St!=null))switch(j){case"type":ot!==St&&(fe=!0),f=ot;break;case"name":ot!==St&&(fe=!0),u=ot;break;case"checked":ot!==St&&(fe=!0),J=ot;break;case"defaultChecked":ot!==St&&(fe=!0),ut=ot;break;case"value":ot!==St&&(fe=!0),_=ot;break;case"defaultValue":ot!==St&&(fe=!0),A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==St&&qe(e,n,j,ot,r,St)}}cf(e,_,A,z,J,ut,f,u);return;case"select":ot=_=A=j=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:r.hasOwnProperty(f)||qe(e,n,f,null,r,z)}for(u in r)if(f=r[u],z=a[u],r.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":f!==z&&(fe=!0),j=f;break;case"defaultValue":f!==z&&(fe=!0),A=f;break;case"multiple":f!==z&&(fe=!0),_=f;default:f!==z&&qe(e,n,u,f,r,z)}n=A,a=_,r=ot,j!=null?Sr(e,!!a,j,!1):!!r!=!!a&&(n!=null?Sr(e,!!a,n,!0):Sr(e,!!a,a?[]:"",!1));return;case"textarea":ot=j=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(e,n,A,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(fe=!0),j=u;break;case"defaultValue":u!==f&&(fe=!0),ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&qe(e,n,_,u,r,f)}Fm(e,j,ot);return;case"option":for(var Gt in a)if(j=a[Gt],a.hasOwnProperty(Gt)&&j!=null&&!r.hasOwnProperty(Gt))switch(Gt){case"selected":e.selected=!1;break;default:qe(e,n,Gt,null,r,j)}for(z in r)if(j=r[z],ot=a[z],r.hasOwnProperty(z)&&j!==ot&&(j!=null||ot!=null))switch(z){case"selected":j!==ot&&(fe=!0),e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:qe(e,n,z,j,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)j=a[te],a.hasOwnProperty(te)&&j!=null&&!r.hasOwnProperty(te)&&qe(e,n,te,null,r,j);for(J in r)if(j=r[J],ot=a[J],r.hasOwnProperty(J)&&j!==ot&&(j!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:qe(e,n,J,j,r,ot)}return;default:if(hf(n)){for(var ye in a)j=a[ye],a.hasOwnProperty(ye)&&j!==void 0&&!r.hasOwnProperty(ye)&&cd(e,n,ye,void 0,r,j);for(ut in r)j=r[ut],ot=a[ut],!r.hasOwnProperty(ut)||j===ot||j===void 0&&ot===void 0||cd(e,n,ut,j,r,ot);return}}for(var Q in a)j=a[Q],a.hasOwnProperty(Q)&&j!=null&&!r.hasOwnProperty(Q)&&qe(e,n,Q,null,r,j);for(St in r)j=r[St],ot=a[St],!r.hasOwnProperty(St)||j===ot||j==null&&ot==null||qe(e,n,St,j,r,ot)}function Z_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&Z_(_)){for(_=0,A=u.responseEnd,r+=1;r<a.length;r++){var z=a[r],J=z.startTime;if(J>A)break;var ut=z.transferSize,St=z.initiatorType;ut&&Z_(St)&&(z=z.responseEnd,_+=ut*(z<A?1:(A-J)/(z-J)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fd=null,hd=null;function ml(e){return e.nodeType===9?e:e.ownerDocument}function K_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Q_(e,n,a,r){return a=ml(a).createElement(e),a[En]=r,a[Pn]=n,Hn(a,e,n),zt(a),a}function dd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pd=null;function Jy(){var e=window.event;return e&&e.type==="popstate"?e===pd?!1:(pd=e,!0):(pd=null,!1)}var md=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,J_=typeof Promise=="function"?Promise:void 0,$_=typeof requestAnimationFrame=="function"?requestAnimationFrame:md,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof J_<"u"?function(e){return J_.resolve(null).then(e).catch(e1)}:md;function e1(e){setTimeout(function(){throw e})}function ps(e){return e==="head"}function tv(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),ao(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ed(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ed(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[wt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ed(e.ownerDocument.body);a=u}while(a);ao(n)}function ev(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function nv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function iv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function n1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function gd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return n1(n,a,e)}function i1(e){return e.documentElement.clientHeight}function a1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function s1(e,n,a,r,u,f,_,A,z){var J=n.nodeType===9?n:n.ownerDocument;try{var ut=J.startViewTransition({update:function(){var j=J.defaultView,ot=j.navigation&&j.navigation.transition,Gt=J.fonts.status;r();var te=[];if(Gt==="loaded"&&(i1(J),J.fonts.status==="loading"&&te.push(J.fonts.ready)),Gt=te.length,e!==null)for(var ye=e.suspenseyImages,Q=0,k=0;k<ye.length;k++){var nt=ye[k];if(!nt.complete){var xt=nt.getBoundingClientRect();if(0<xt.bottom&&0<xt.right&&xt.top<j.innerHeight&&xt.left<j.innerWidth){if(Q+=Tv(nt),Q>sc){te.length=Gt;break}nt=new Promise(a1.bind(nt)),te.push(nt)}}}if(0<te.length)return j=Promise.race([Promise.all(te),new Promise(function(jt){return setTimeout(jt,500)})]).then(u,u),(ot?Promise.allSettled([ot.finished,j]):j).then(f,f);if(u(),ot)return ot.finished.then(f,f);f()},types:a});J.__reactViewTransition=ut;var St=[];return ut.ready.then(function(){for(var j=J.documentElement.getAnimations({subtree:!0}),ot=0;ot<j.length;ot++){var Gt=j[ot],te=Gt.effect,ye=te.pseudoElement;if(ye!=null&&ye.startsWith("::view-transition")){St.push(Gt),Gt=te.getKeyframes();for(var Q=ye=void 0,k=!0,nt=0;nt<Gt.length;nt++){var xt=Gt[nt],jt=xt.width;if(ye===void 0)ye=jt;else if(ye!==jt){k=!1;break}if(jt=xt.height,Q===void 0)Q=jt;else if(Q!==jt){k=!1;break}delete xt.width,delete xt.height,xt.transform==="none"&&delete xt.transform}k&&ye!==void 0&&Q!==void 0&&(te.setKeyframes(Gt),k=getComputedStyle(te.target,te.pseudoElement),k.width!==ye||k.height!==Q)&&(k=Gt[0],k.width=ye,k.height=Q,k=Gt[Gt.length-1],k.width=ye,k.height=Q,te.setKeyframes(Gt))}}_()},function(j){J.__reactViewTransition===ut&&(J.__reactViewTransition=null);try{if(typeof j=="object"&&j!==null)switch(j.name){case"InvalidStateError":(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null)}j!==null&&z(j)}finally{r(),u(),_()}}),ut.finished.finally(function(){for(var j=0;j<St.length;j++)St[j].cancel();J.__reactViewTransition===ut&&(J.__reactViewTransition=null),A()}),ut}catch{return r(),u(),_(),null}}function er(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}er.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:E({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},er.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[u])}return r},er.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function av(e){return{name:e,group:new er("group",e),imagePair:new er("image-pair",e),old:new er("old",e),new:new er("new",e)}}function vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(e,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(rv(f,e,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(z){_.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(u=_.removeEventListener.bind(_,e,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Jr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,r1,e,A,r)}this._eventListeners=f}};function r1(e,n,a,r){return M(e).addEventListener(n,a,r),!1}vi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=rv(r,e,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Jr(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,o1,e,a,u),r.splice(n,1),f!==null&&f()}};function o1(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Jr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function sv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function rv(e,n,a,r){if(e.length===0)return-1;r=sv(r);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&sv(f.optionsOrUseCapture)===r)return u}return-1}vi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Jr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Jr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},vi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,ov,e,void 0,void 0)};function ov(e,n){return e.tag===6?!1:(e=M(e),x1(e,n))}vi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,_d,n,void 0,void 0);for(var a=n.length-1;0<=a&&!ov(n[a],e);a--);};function _d(e,n){return n.push(e),!1}vi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=M(e),e=ml(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,l1,e,void 0,void 0))};function l1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,u1,e,void 0,void 0)};function u1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}vi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,c1,e,void 0,void 0);for(var a=n=0;a<Wi.length;a++){var r=Wi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Wi[n++]=r}Wi.length=n}};function c1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Wi=[],vd=!1;function f1(e,n,a){Wi.push({fragmentInstance:e,observer:n,instance:a}),vd||(vd=!0,S1(function(){vd=!1;var r=Wi;Wi=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}vi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,h1,e,void 0,void 0),e};function h1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}vi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},vi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,_d,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(e),A=u.compareDocumentPosition(e),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&u===e||z||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||d1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function d1(e,n,a,r,u){var f=Ht(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=P(a,f,I),n===null?n=!1:(g(n,!0,L,f,a),f=y,y=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=P(r,f,I),n===null?n=!1:(g(n,!0,U,f,r),f=y,D=y=null,n=f!==null)),n):!1}function lv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,_d,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),lv(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),lv(u,a)):M(u).scrollIntoView(e),r+=a?-1:1}};function p1(e,n){return e=M(e),uv(e,n),!1}function uv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function cv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.addEventListener(u.type,u.attachedListener,Jr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,A=0;A<Wi.length;A++){var z=Wi[A];(z.fragmentInstance!==n||z.observer!==f||z.instance!==e)&&(Wi[_++]=z)}Wi.length=_,f.observe(e)}),uv(e,n))}function m1(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.removeEventListener(u.type,u.attachedListener,Jr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?f1(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function xd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xd(a),Nt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function g1(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[wt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Li(e.nextSibling),e===null)break}return null}function _1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Li(e.nextSibling),e===null))return null;return e}function fv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Li(e.nextSibling),e===null))return null;return e}function Sd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function v1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var yd=null;function hv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function dv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function x1(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function S1(e){$_(function(){$_(function(n){return e(n)})})}function pv(e,n,a){switch(n=ml(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mv(e,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&qe(e,n,r,null,Ky,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ta&&(e.onclick=null),Nt(e)}function Ed(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nt(e)}var Oi=new Map,gv=new Set;function gl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ua=Bt.d;Bt.d={f:M1,r:y1,D:E1,C:T1,L:b1,m:A1,X:C1,S:R1,M:w1};function M1(){var e=Ua.f(),n=ju();return e||n}function y1(e){var n=Qt(e);n!==null&&n.tag===5&&n.type==="form"?vg(n):Ua.r(e)}var $r=typeof document>"u"?null:document;function _v(e,n,a){var r=$r;if(r&&typeof n=="string"&&n){var u=Ai(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),gv.has(u)||(gv.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Hn(n,"link",e),zt(n),r.head.appendChild(n)))}}function E1(e){Ua.D(e),_v("dns-prefetch",e,null)}function T1(e,n){Ua.C(e,n),_v("preconnect",e,n)}function b1(e,n,a){Ua.L(e,n,a);var r=$r;if(r&&e&&n){var u='link[rel="preload"][as="'+Ai(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ai(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ai(a.imageSizes)+'"]')):u+='[href="'+Ai(e)+'"]';var f=u;switch(n){case"style":f=to(e);break;case"script":f=eo(e)}if(!(Oi.has(f)||(e=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Oi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(_l(f))||n==="script"&&r.querySelector(vl(f))))){var _=r.createElement("link");Hn(_,"link",e),n==="style"&&(_[Yt]=!0,_.onload=_.onerror=function(){Te(_)}),zt(_),r.head.appendChild(_)}}}function A1(e,n){Ua.m(e,n);var a=$r;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ai(r)+'"][href="'+Ai(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=eo(e)}if(!Oi.has(f)&&(e=E({rel:"modulepreload",href:e},n),Oi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vl(f)))return}r=a.createElement("link"),Hn(r,"link",e),zt(r),a.head.appendChild(r)}}}function R1(e,n,a){Ua.S(e,n,a);var r=$r;if(r&&e){var u=ve(r).hoistableStyles,f=to(e);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(_l(f)))A.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Oi.get(f))&&Td(e,a);var z=_=r.createElement("link");zt(z),Hn(z,"link",e),z._p=new Promise(function(J,ut){z.onload=J,z.onerror=ut}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function C1(e,n){Ua.X(e,n);var a=$r;if(a&&e){var r=ve(a).hoistableScripts,u=eo(e),f=r.get(u);f||(f=a.querySelector(vl(u)),f||(e=E({src:e,async:!0},n),(n=Oi.get(u))&&bd(e,n),f=a.createElement("script"),zt(f),Hn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function w1(e,n){Ua.M(e,n);var a=$r;if(a&&e){var r=ve(a).hoistableScripts,u=eo(e),f=r.get(u);f||(f=a.querySelector(vl(u)),f||(e=E({src:e,async:!0,type:"module"},n),(n=Oi.get(u))&&bd(e,n),f=a.createElement("script"),zt(f),Hn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function vv(e,n,a,r){var u=(u=on.current)?gl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=to(a.href),n=ve(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=to(a.href);var f=ve(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(_l(e)))?f._p||(_.instance=f,_.state.loading=5):(f=Oi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Oi.set(e,f)),N1(u,e,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=eo(a),n=ve(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function to(e){return'href="'+Ai(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function xv(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function N1(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Yt]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Yt]=!0,n.onload=n.onerror=Te.bind(null,n),Hn(n,"link",a),zt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function eo(e){return'[src="'+Ai(e)+'"]'}function vl(e){return"script[async]"+e}function Sv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ai(a.href)+'"]');if(r)return n.instance=r,zt(r),r;var u=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),zt(r),Hn(r,"style",u),ic(r,a.precedence,e),n.instance=r;case"stylesheet":u=to(a.href);var f=e.querySelector(_l(u));if(f)return n.state.loading|=4,n.instance=f,zt(f),f;r=xv(a),(u=Oi.get(u))&&Td(r,u),f=(e.ownerDocument||e).createElement("link"),zt(f);var _=f;return _._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Hn(f,"link",r),n.state.loading|=4,ic(f,a.precedence,e),n.instance=f;case"script":return f=eo(a.src),(u=e.querySelector(vl(f)))?(n.instance=u,zt(u),u):(r=a,(u=Oi.get(f))&&(r=E({},a),bd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),zt(u),Hn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ic(r,a.precedence,e));return n.instance}function ic(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function Mv(e,n,a){if(ac===null){var r=new Map,u=ac=new Map;u.set(a,r)}else u=ac,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wt]||f[En]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function Ad(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function D1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ev(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Tv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function bv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Tv(n),e.suspenseyImages.push(n)),e=O1.bind(e),n.decode().then(e,e))}function U1(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=to(r.href),f=n.querySelector(_l(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,zt(f);return}f=n.ownerDocument||n,r=xv(r),(u=Oi.get(u))&&Td(r,u),f=f.createElement("link"),zt(f);var _=f;_._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Hn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sc=0;function L1(e,n){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&sc===0&&(sc=62500*Qy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>sc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Av(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function xl(){this.count--,Av(this)}function O1(){this.imgCount--,Av(this)}var rc=null;function oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(P1,e),rc=null,xl.call(e))}function P1(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var r=a.get(null);else{a=new Map,rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=xl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var no={$$typeof:et,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function I1(e,n,a,r,u,f,_,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_r(0),this.hiddenUpdates=_r(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Rv(e,n,a,r,u,f,_,A,z,J,ut,St){return e=new I1(e,n,a,_,z,J,ut,St,A),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),e.current=f,f.stateNode=e,n=Gf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Wf(f),e}function Cv(e){return e?(e=Cr,e):Cr}function wv(e,n,a,r,u,f){u=Cv(u),r.context===null?r.context=u:r.pendingContext=u,r=ns(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=is(e,r,n),a!==null&&(li(a,e,n),jo(a,e,n))}function Nv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rd(e,n){Nv(e,n),(e=e.alternate)&&Nv(e,n)}function Dv(e){if(e.tag===13||e.tag===31){var n=Bs(e,67108864);n!==null&&li(n,e,67108864),Rd(e,67108864)}}function Uv(e){if(e.tag===13||e.tag===31){var n=_i();n=Lo(n);var a=Bs(e,n);a!==null&&li(a,e,n),Rd(e,n)}}var io=!0;function z1(e,n,a,r){var u=Et.T;Et.T=null;var f=Bt.p;try{Bt.p=2,Cd(e,n,a,r)}finally{Bt.p=f,Et.T=u}}function B1(e,n,a,r){var u=Et.T;Et.T=null;var f=Bt.p;try{Bt.p=8,Cd(e,n,a,r)}finally{Bt.p=f,Et.T=u}}function Cd(e,n,a,r){if(io){var u=wd(r);if(u===null)ud(e,n,r,lc,a),Ov(e,r);else if(H1(u,e,n,a,r))r.stopPropagation();else if(Ov(e,r),n&4&&-1<F1.indexOf(e)){for(;u!==null;){var f=Qt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Bi(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var z=1<<31-Kt(_);A.entanglements[1]|=z,_&=~z}ca(f),(Be&6)===0&&(Yu=pt()+500,hl(0))}}break;case 31:case 13:A=Bs(f,2),A!==null&&li(A,f,2),ju(),Rd(f,2)}if(f=wd(r),f===null&&ud(e,n,r,lc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else ud(e,n,r,null,a)}}function wd(e){return e=pf(e),Nd(e)}var lc=null;function Nd(e){if(lc=null,e=Ht(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case Ut:return 2;case H:return 8;case _t:case mt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Dd=!1,ms=null,gs=null,_s=null,Sl=new Map,Ml=new Map,vs=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ov(e,n){switch(e){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":Sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(n.pointerId)}}function yl(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qt(n),n!==null&&Dv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function H1(e,n,a,r,u){switch(n){case"focusin":return ms=yl(ms,e,n,a,r,u),!0;case"dragenter":return gs=yl(gs,e,n,a,r,u),!0;case"mouseover":return _s=yl(_s,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Sl.set(f,yl(Sl.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Ml.set(f,yl(Ml.get(f)||null,e,n,a,r,u)),!0}return!1}function Pv(e){var n=Ht(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Zl(e.priority,function(){Uv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Zl(e.priority,function(){Uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);df=r,a.target.dispatchEvent(r),df=null}else return n=Qt(a),n!==null&&Dv(n),e.blockedOn=a,!1;n.shift()}return!0}function Iv(e,n,a){uc(e)&&a.delete(n)}function G1(){Dd=!1,ms!==null&&uc(ms)&&(ms=null),gs!==null&&uc(gs)&&(gs=null),_s!==null&&uc(_s)&&(_s=null),Sl.forEach(Iv),Ml.forEach(Iv)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,Dd||(Dd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,G1)))}var fc=null;function zv(e){fc!==e&&(fc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Nd(r||a)===null)continue;break}var f=Qt(a);f!==null&&(e.splice(n,3),n-=3,hh(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function ao(e){function n(z){return cc(z,e)}ms!==null&&cc(ms,e),gs!==null&&cc(gs,e),_s!==null&&cc(_s,e),Sl.forEach(n),Ml.forEach(n);for(var a=0;a<vs.length;a++){var r=vs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vs.length&&(a=vs[0],a.blockedOn===null);)Pv(a),a.blockedOn===null&&vs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[Pn]||null;if(typeof f=="function")_||zv(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Pn]||null)A=_.formAction;else if(Nd(u)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),zv(a)}}}function Bv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ud(e){this._internalRoot=e}hc.prototype.render=Ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=_i();wv(a,r,e,n,null,null)},hc.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;wv(e.current,2,null,e,null,null),ju(),n[R]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<vs.length&&n!==0&&n<vs[a].priority;a++);vs.splice(a,0,e),a===0&&Pv(e)}};var Fv=t.version;if(Fv!=="19.3.1")throw Error(s(527,Fv,"19.3.1"));Bt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var V1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ne=dc.inject(V1),re=dc}catch{}}return Tl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Cg,f=wg,_=Ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Rv(e,1,!1,null,null,a,r,null,u,f,_,Bv),e[R]=n.current,ld(e),new Ud(n)},Tl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Cg,_=wg,A=Ng,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Rv(e,1,!0,n,a??null,r,u,z,f,_,A,Bv),n.context=Cv(null),a=n.current,r=_i(),r=Lo(r),u=ns(r),u.callback=null,is(a,u,r),a=r,n.current.lanes=a,qa(n,a),ca(n),e[R]=n.current,ld(e),new hc(n)},Tl.version="19.3.1",Tl}var Kv;function J1(){if(Kv)return Od.exports;Kv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Od.exports=Q1(),Od.exports}var $1=J1(),Ae=dm();const Yn={accept:7,storeDay:.45,pick:{fbs:19,fbo:9},pack:{bag:6,box:14,bubble:22},ship:6},Sp=14,ma=[{no:"01",zone:"Приёмка",from:0,at:.15,status:"ПРИНЯТО",time:"09:14 · ворота 2",title:"Разгрузили и пересчитали",text:"Фура встаёт к воротам, каждую коробку сканируем на входе. Расхождение с накладной видно через минуту, а не при инвентаризации.",cabinet:"акт приёмки с фото и числом единиц",line:"Приёмка",sum:Yn.accept},{no:"02",zone:"Хранение",from:.2,at:.35,status:"НА ХРАНЕНИИ",time:"09:52 · ячейка Б-07-3",title:"Положили в ячейку Б-07-3",text:"У каждой единицы есть адрес: ряд, секция, ярус. Платите за дни, которые товар занимал место, без округления до месяца.",cabinet:"адрес ячейки и остаток по каждому артикулу",line:`Хранение, ${Sp} дней`,sum:+(Yn.storeDay*Sp).toFixed(2)},{no:"03",zone:"Сборка",from:.4,at:.5,status:"СОБРАНО",time:"14:05 · заказ 88-2041",title:"Пришёл заказ, собрали за 40 минут",text:"Заказ с маркетплейса сам встаёт в очередь. Кладовщик идёт по маршруту, который посчитала система, и сканирует ячейку и товар.",cabinet:"заказ, время сборки и кто собрал",line:"Сборка заказа",sum:Yn.pick.fbs},{no:"04",zone:"Упаковка",from:.62,at:.76,status:"УПАКОВАНО",time:"14:31 · стол 3",title:"Упаковали и наклеили этикетку",text:"Упаковка по требованиям площадки: коробка, штрихкод, стикер поставки. Фото готовой единицы прикрепляется к заказу.",cabinet:"фото упаковки и номер этикетки",line:"Упаковка, коробка",sum:Yn.pack.box},{no:"05",zone:"Отгрузка",from:.82,at:.93,status:"ОТГРУЖЕНО",time:"16:40 · рейс 12",title:"Уехала на склад маркетплейса",text:"Рейсы каждый день. В отчёте появляется строка: что отгружено, куда и когда. Закрывающие документы приходят в тот же день.",cabinet:"рейс, время отгрузки и документы",line:"Отгрузка",sum:Yn.ship}];ma.reduce((o,t)=>o+t.sum,0);const Ki=(o,t=2)=>o.toLocaleString("ru-RU",{minimumFractionDigits:t,maximumFractionDigits:t});class tE{constructor(){this.on=!1}toggle(){return this.ctx||this.init(),this.on=!this.on,this.ctx.resume(),this.master.gain.setTargetAtTime(this.on?.5:0,this.ctx.currentTime,.05),this.on&&this.beep(),this.on}beep(){this.tone(2350,.07,.16,"square"),this.tone(3100,.09,.14,"square",.09)}tick(){this.noise(.025,3200,.22)}print(){for(let t=0;t<9;t++)this.noise(.045,1700+t%3*260,.13,t*.062)}thud(){this.tone(74,.3,.5,"sine"),this.noise(.12,240,.25)}setSpeed(t){!this.hum||!this.ctx||this.hum.gain.setTargetAtTime(.035+Math.min(1,t)*.16,this.ctx.currentTime,.12)}init(){const t=new AudioContext,i=t.createGain();i.gain.value=0,i.connect(t.destination);const s=t.createBufferSource();s.buffer=this.noiseBuffer(t,2),s.loop=!0;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=170;const c=t.createGain();c.gain.value=.035,s.connect(l).connect(c).connect(i),s.start(),this.ctx=t,this.master=i,this.hum=c}noiseBuffer(t,i){const s=t.createBuffer(1,t.sampleRate*i,t.sampleRate),l=s.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;return s}tone(t,i,s,l,c=0){if(!this.on||!this.ctx||!this.master)return;const h=this.ctx.currentTime+c,d=this.ctx.createOscillator(),p=this.ctx.createGain();d.type=l,d.frequency.value=t,p.gain.setValueAtTime(s,h),p.gain.exponentialRampToValueAtTime(1e-4,h+i),d.connect(p).connect(this.master),d.start(h),d.stop(h+i+.02)}noise(t,i,s,l=0){if(!this.on||!this.ctx||!this.master)return;const c=this.ctx.currentTime+l,h=this.ctx.createBufferSource();h.buffer=this.noiseBuffer(this.ctx,t);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=i,d.Q.value=1.4;const p=this.ctx.createGain();p.gain.setValueAtTime(s,c),p.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(d).connect(p).connect(this.master),h.start(c)}}class jv{constructor(t,i=6){this.x=t,this.omega=i,this.v=0}step(t,i){const s=1+2*i*this.omega,l=this.omega*this.omega,c=i*l,h=i*c,d=1/(s+h),p=(s*this.x+i*this.v+h*t)*d;return this.v=(this.v+c*(t-this.x))*d,this.x=p,p}set(t){this.x=t,this.v=0}}const Zc=o=>Math.min(1,Math.max(0,o)),So=o=>{const t=Zc(o);return t*t*(3-2*t)};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pm="187",eE=0,Qv=1,nE=2,Hc=1,mS=2,Ol=3,ur=0,ei=1,ji=2,or=0,Il=1,Mp=2,Jv=3,$v=4,iE=5,Mo=100,aE=101,sE=102,rE=103,oE=104,lE=200,uE=201,cE=202,fE=203,gS=204,_S=205,hE=206,dE=207,pE=208,mE=209,gE=210,_E=211,vE=212,xE=213,SE=214,yp=0,Ep=1,Tp=2,Bl=3,bp=4,Ap=5,Rp=6,Cp=7,mm=0,ME=1,yE=2,Va=0,vS=1,xS=2,SS=3,MS=4,yS=5,ES=6,TS=7,bS=300,Eo=301,Fl=302,Fd=303,Hd=304,Kc=1e3,Ga=1001,wp=1002,Vn=1003,EE=1004,pc=1005,ui=1006,Gd=1007,Cs=1008,yi=1009,AS=1010,RS=1011,Hl=1012,gm=1013,_a=1014,Ji=1015,ni=1016,_m=1017,vm=1018,To=1020,CS=35902,wS=35899,NS=1021,DS=1022,ga=1023,Ds=1026,ws=1027,xm=1028,Sm=1029,cr=1030,Mm=1031,ym=1033,Gc=33776,Vc=33777,Xc=33778,kc=33779,Np=35840,Dp=35841,Up=35842,Lp=35843,Op=36196,Pp=37492,Ip=37496,zp=37488,Bp=37489,jc=37490,Fp=37491,Hp=37808,Gp=37809,Vp=37810,Xp=37811,kp=37812,Wp=37813,qp=37814,Yp=37815,Zp=37816,Kp=37817,jp=37818,Qp=37819,Jp=37820,$p=37821,tm=36492,em=36494,nm=36495,im=36283,am=36284,Qc=36285,sm=36286,TE=3200,Jc=0,bE=1,Rs="",Mi="srgb",$c="srgb-linear",tf="linear",Ye="srgb",Vd=7680,AE=519,RE=512,CE=513,wE=514,US=515,NE=516,DE=517,LS=518,OS=519,UE=35044,tx="300 es",$i=2e3,Gl=2001;function LE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ef(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function OE(){const o=ef("canvas");return o.style.display="block",o}const ex={};function nx(...o){const t="THREE."+o.shift();console.log(t,...o)}function PS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function he(...o){o=PS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Fe(...o){o=PS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Wc(...o){const t=o.join(" ");t in ex||(ex[t]=!0,he(...o))}function PE(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const IE={[yp]:yp,[Tp]:Rp,[bp]:bp,[Bl]:Ap,[Ep]:Ep,[Rp]:Tp,[Cp]:Cp,[Ap]:Bl};class fr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=Math.PI/180,rm=180/Math.PI;function kl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[o&255]+Wn[o>>8&255]+Wn[o>>16&255]+Wn[o>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function we(o,t,i){return Math.max(t,Math.min(i,o))}function zE(o,t){return(o%t+t)%t}function kd(o,t,i){return(1-i)*o+i*t}function BE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Em(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function FE(o,t){if(t.constructor===Float32Array)return o;const i=Em(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function HE(o,t){if(t.constructor===Float32Array)return o;const i=Em(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const Om=class Om{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(we(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Om.prototype.isVector2=!0;let oe=Om;class hr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],x=s[l+2],g=s[l+3],v=c[h+0],S=c[h+1],T=c[h+2],w=c[h+3];if(g!==w||p!==v||m!==S||x!==T){let M=p*v+m*S+x*T+g*w;M<0&&(v=-v,S=-S,T=-T,w=-w,M=-M);let y=1-d;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);y=Math.sin(y*D)/L,d=Math.sin(d*D)/L,p=p*y+v*d,m=m*y+S*d,x=x*y+T*d,g=g*y+w*d}else{p=p*y+v*d,m=m*y+S*d,x=x*y+T*d,g=g*y+w*d;const D=1/Math.sqrt(p*p+m*m+x*x+g*g);p*=D,m*=D,x*=D,g*=D}}t[i]=p,t[i+1]=m,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],x=s[l+3],g=c[h],v=c[h+1],S=c[h+2],T=c[h+3];return t[i]=d*T+x*g+p*S-m*v,t[i+1]=p*T+x*v+m*g-d*S,t[i+2]=m*T+x*S+d*v-p*g,t[i+3]=x*T-d*g-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),x=d(l/2),g=d(c/2),v=p(s/2),S=p(l/2),T=p(c/2);switch(h){case"XYZ":this._x=v*x*g+m*S*T,this._y=m*S*g-v*x*T,this._z=m*x*T+v*S*g,this._w=m*x*g-v*S*T;break;case"YXZ":this._x=v*x*g+m*S*T,this._y=m*S*g-v*x*T,this._z=m*x*T-v*S*g,this._w=m*x*g+v*S*T;break;case"ZXY":this._x=v*x*g-m*S*T,this._y=m*S*g+v*x*T,this._z=m*x*T+v*S*g,this._w=m*x*g-v*S*T;break;case"ZYX":this._x=v*x*g-m*S*T,this._y=m*S*g+v*x*T,this._z=m*x*T-v*S*g,this._w=m*x*g+v*S*T;break;case"YZX":this._x=v*x*g+m*S*T,this._y=m*S*g+v*x*T,this._z=m*x*T-v*S*g,this._w=m*x*g-v*S*T;break;case"XZY":this._x=v*x*g-m*S*T,this._y=m*S*g-v*x*T,this._z=m*x*T+v*S*g,this._w=m*x*g+v*S*T;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],x=i[6],g=i[10],v=s+d+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(x-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(x-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,x=i._w;return this._x=s*x+h*d+l*m-c*p,this._y=l*x+h*p+c*d-s*m,this._z=c*x+h*m+s*p-l*d,this._w=h*x-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,i=Math.sin(i*m)/x,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pm=class Pm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ix.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ix.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),x=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+p*m+h*g-d*x,this.y=s+p*x+d*m-c*g,this.z=l+p*g+c*x-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Wd.copy(this).projectOnVector(t),this.sub(Wd)}reflect(t){return this.sub(Wd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(we(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pm.prototype.isVector3=!0;let tt=Pm;const Wd=new tt,ix=new hr,Im=class Im{constructor(t,i,s,l,c,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=p,x[6]=s,x[7]=h,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],x=s[4],g=s[7],v=s[2],S=s[5],T=s[8],w=l[0],M=l[3],y=l[6],D=l[1],L=l[4],U=l[7],I=l[2],P=l[5],E=l[8];return c[0]=h*w+d*D+p*I,c[3]=h*M+d*L+p*P,c[6]=h*y+d*U+p*E,c[1]=m*w+x*D+g*I,c[4]=m*M+x*L+g*P,c[7]=m*y+x*U+g*E,c[2]=v*w+S*D+T*I,c[5]=v*M+S*L+T*P,c[8]=v*y+S*U+T*E,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],x=t[8];return i*h*x-i*d*m-s*c*x+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],x=t[8],g=x*h-d*m,v=d*p-x*c,S=m*c-h*p,T=i*g+s*v+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=g*w,t[1]=(l*m-x*s)*w,t[2]=(d*s-l*h)*w,t[3]=v*w,t[4]=(x*i-l*p)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*p-m*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return Wc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(t,i)),this}rotate(t){return Wc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-t)),this}translate(t,i){return Wc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Im.prototype.isMatrix3=!0;let pe=Im;const qd=new pe,ax=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sx=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GE(){const o={enabled:!0,workingColorSpace:$c,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ye&&(l.r=Xa(l.r),l.g=Xa(l.g),l.b=Xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(l.r=yo(l.r),l.g=yo(l.g),l.b=yo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Rs?tf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[h].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[$c]:{primaries:t,whitePoint:s,transfer:tf,toXYZ:ax,fromXYZ:sx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:ax,fromXYZ:sx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Le=GE();function Xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let so;class VE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{so===void 0&&(so=ef("canvas")),so.width=t.width,so.height=t.height;const l=so.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=so}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ef("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Xa(i[s]/255)*255):i[s]=Xa(i[s]);return{data:i,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let XE=0;class Tm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=kl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width||0,i.height||0,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Yd(l[h].image)):c.push(Yd(l[h]))}else c=Yd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Yd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let kE=0;const Zd=new tt;class Zn extends fr{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Ga,l=Ga,c=ui,h=Cs,d=ga,p=yi,m=Zn.DEFAULT_ANISOTROPY,x=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=kl(),this.name="",this.source=new Tm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zd).x}get height(){return this.source.getSize(Zd).y}get depth(){return this.source.getSize(Zd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kc:t.x=t.x-Math.floor(t.x);break;case Ga:t.x=t.x<0?0:1;break;case wp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kc:t.y=t.y-Math.floor(t.y);break;case Ga:t.y=t.y<0?0:1;break;case wp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=bS;Zn.DEFAULT_ANISOTROPY=1;const zm=class zm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],x=p[4],g=p[8],v=p[1],S=p[5],T=p[9],w=p[2],M=p[6],y=p[10];if(Math.abs(x-v)<.01&&Math.abs(g-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+w)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,U=(S+1)/2,I=(y+1)/2,P=(x+v)/4,E=(g+w)/4,C=(T+M)/4;return L>U&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=P/s,c=E/s):U>I?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=P/l,c=C/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=E/c,l=C/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(g-w)*(g-w)+(v-x)*(v-x));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(g-w)/D,this.z=(v-x)/D,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zm.prototype.isVector4=!0;let hn=zm;class WE extends fr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new hn(0,0,t,i),this.scissorTest=!1,this.viewport=new hn(0,0,t,i),this.textures=[];const l=s.count;for(let c=0;c<l;c++)this.textures[c]=new Zn({width:t,height:i,depth:s.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends WE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class IS extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qE extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const rf=class rf{constructor(t,i,s,l,c,h,d,p,m,x,g,v,S,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,x,g,v,S,T,w,M)}set(t,i,s,l,c,h,d,p,m,x,g,v,S,T,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=p,y[2]=m,y[6]=x,y[10]=g,y[14]=v,y[3]=S,y[7]=T,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/ro.setFromMatrixColumn(t,0).length(),c=1/ro.setFromMatrixColumn(t,1).length(),h=1/ro.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=h*x,S=h*g,T=d*x,w=d*g;i[0]=p*x,i[4]=-p*g,i[8]=m,i[1]=S+T*m,i[5]=v-w*m,i[9]=-d*p,i[2]=w-v*m,i[6]=T+S*m,i[10]=h*p}else if(t.order==="YXZ"){const v=p*x,S=p*g,T=m*x,w=m*g;i[0]=v+w*d,i[4]=T*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=S*d-T,i[6]=w+v*d,i[10]=h*p}else if(t.order==="ZXY"){const v=p*x,S=p*g,T=m*x,w=m*g;i[0]=v-w*d,i[4]=-h*g,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*x,i[9]=w-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const v=h*x,S=h*g,T=d*x,w=d*g;i[0]=p*x,i[4]=T*m-S,i[8]=v*m+w,i[1]=p*g,i[5]=w*m+v,i[9]=S*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const v=h*p,S=h*m,T=d*p,w=d*m;i[0]=p*x,i[4]=w-v*g,i[8]=T*g+S,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-m*x,i[6]=S*g+T,i[10]=v-w*g}else if(t.order==="XZY"){const v=h*p,S=h*m,T=d*p,w=d*m;i[0]=p*x,i[4]=-g,i[8]=m*x,i[1]=v*g+w,i[5]=h*x,i[9]=S*g-T,i[2]=T*g-S,i[6]=d*x,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(YE,t,ZE)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Ss.crossVectors(s,xi),Ss.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Ss.crossVectors(s,xi)),Ss.normalize(),mc.crossVectors(xi,Ss),l[0]=Ss.x,l[4]=mc.x,l[8]=xi.x,l[1]=Ss.y,l[5]=mc.y,l[9]=xi.y,l[2]=Ss.z,l[6]=mc.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],x=s[1],g=s[5],v=s[9],S=s[13],T=s[2],w=s[6],M=s[10],y=s[14],D=s[3],L=s[7],U=s[11],I=s[15],P=l[0],E=l[4],C=l[8],Y=l[12],B=l[1],V=l[5],q=l[9],lt=l[13],G=l[2],et=l[6],Z=l[10],W=l[14],ft=l[3],it=l[7],ct=l[11],Tt=l[15];return c[0]=h*P+d*B+p*G+m*ft,c[4]=h*E+d*V+p*et+m*it,c[8]=h*C+d*q+p*Z+m*ct,c[12]=h*Y+d*lt+p*W+m*Tt,c[1]=x*P+g*B+v*G+S*ft,c[5]=x*E+g*V+v*et+S*it,c[9]=x*C+g*q+v*Z+S*ct,c[13]=x*Y+g*lt+v*W+S*Tt,c[2]=T*P+w*B+M*G+y*ft,c[6]=T*E+w*V+M*et+y*it,c[10]=T*C+w*q+M*Z+y*ct,c[14]=T*Y+w*lt+M*W+y*Tt,c[3]=D*P+L*B+U*G+I*ft,c[7]=D*E+L*V+U*et+I*it,c[11]=D*C+L*q+U*Z+I*ct,c[15]=D*Y+L*lt+U*W+I*Tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],x=t[2],g=t[6],v=t[10],S=t[14],T=t[3],w=t[7],M=t[11],y=t[15],D=p*S-m*v,L=d*S-m*g,U=d*v-p*g,I=h*S-m*x,P=h*v-p*x,E=h*g-d*x;return i*(w*D-M*L+y*U)-s*(T*D-M*I+y*P)+l*(T*L-w*I+y*E)-c*(T*U-w*P+M*E)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],h=t[5],d=t[9],p=t[2],m=t[6],x=t[10];return i*(h*x-d*m)-s*(c*x-d*p)+l*(c*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],x=t[8],g=t[9],v=t[10],S=t[11],T=t[12],w=t[13],M=t[14],y=t[15],D=i*d-s*h,L=i*p-l*h,U=i*m-c*h,I=s*p-l*d,P=s*m-c*d,E=l*m-c*p,C=x*w-g*T,Y=x*M-v*T,B=x*y-S*T,V=g*M-v*w,q=g*y-S*w,lt=v*y-S*M,G=D*lt-L*q+U*V+I*B-P*Y+E*C;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const et=1/G;return t[0]=(d*lt-p*q+m*V)*et,t[1]=(l*q-s*lt-c*V)*et,t[2]=(w*E-M*P+y*I)*et,t[3]=(v*P-g*E-S*I)*et,t[4]=(p*B-h*lt-m*Y)*et,t[5]=(i*lt-l*B+c*Y)*et,t[6]=(M*U-T*E-y*L)*et,t[7]=(x*E-v*U+S*L)*et,t[8]=(h*q-d*B+m*C)*et,t[9]=(s*B-i*q-c*C)*et,t[10]=(T*P-w*U+y*D)*et,t[11]=(g*U-x*P-S*D)*et,t[12]=(d*Y-h*V-p*C)*et,t[13]=(i*V-s*Y+l*C)*et,t[14]=(w*L-T*I-M*D)*et,t[15]=(x*I-g*L+v*D)*et,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,x=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,x*d+s,x*p-l*h,0,m*p-l*d,x*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,x=h+h,g=d+d,v=c*m,S=c*x,T=c*g,w=h*x,M=h*g,y=d*g,D=p*m,L=p*x,U=p*g,I=s.x,P=s.y,E=s.z;return l[0]=(1-(w+y))*I,l[1]=(S+U)*I,l[2]=(T-L)*I,l[3]=0,l[4]=(S-U)*P,l[5]=(1-(v+y))*P,l[6]=(M+D)*P,l[7]=0,l[8]=(T+L)*E,l[9]=(M-D)*E,l[10]=(1-(v+w))*E,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=ro.set(l[0],l[1],l[2]).length();const d=ro.set(l[4],l[5],l[6]).length(),p=ro.set(l[8],l[9],l[10]).length();c<0&&(h=-h),qi.copy(this);const m=1/h,x=1/d,g=1/p;return qi.elements[0]*=m,qi.elements[1]*=m,qi.elements[2]*=m,qi.elements[4]*=x,qi.elements[5]*=x,qi.elements[6]*=x,qi.elements[8]*=g,qi.elements[9]*=g,qi.elements[10]*=g,i.setFromRotationMatrix(qi),s.x=h,s.y=d,s.z=p,this}makePerspective(t,i,s,l,c,h,d=$i,p=!1){const m=this.elements,x=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let T,w;if(p)T=c/(h-c),w=h*c/(h-c);else if(d===$i)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Gl)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=$i,p=!1){const m=this.elements,x=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,w;if(p)T=1/(h-c),w=h/(h-c);else if(d===$i)T=-2/(h-c),w=-(h+c)/(h-c);else if(d===Gl)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};rf.prototype.isMatrix4=!0;let Ze=rf;const ro=new tt,qi=new Ze,YE=new tt(0,0,0),ZE=new tt(1,1,1),Ss=new tt,mc=new tt,xi=new tt,rx=new Ze,ox=new hr;class ka{constructor(t=0,i=0,s=0,l=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],x=l[9],g=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return rx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ox.setFromEuler(this),this.setFromQuaternion(ox,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class zS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KE=0;const lx=new tt,oo=new hr,La=new Ze,gc=new tt,bl=new tt,jE=new tt,QE=new hr,ux=new tt(1,0,0),cx=new tt(0,1,0),fx=new tt(0,0,1),hx={type:"added"},JE={type:"removed"},lo={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Un extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new tt,i=new ka,s=new hr,l=new tt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new pe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return oo.setFromAxisAngle(t,i),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,i){return oo.setFromAxisAngle(t,i),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(ux,t)}rotateY(t){return this.rotateOnAxis(cx,t)}rotateZ(t){return this.rotateOnAxis(fx,t)}translateOnAxis(t,i){return lx.copy(t).applyQuaternion(this.quaternion),this.position.add(lx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ux,t)}translateY(t){return this.translateOnAxis(cx,t)}translateZ(t){return this.translateOnAxis(fx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(bl,gc,this.up):La.lookAt(gc,bl,this.up),this.quaternion.setFromRotationMatrix(La),l&&(La.extractRotation(l.matrixWorld),oo.setFromRotationMatrix(La),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hx),lo.child=t,this.dispatchEvent(lo),lo.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JE),Kd.child=t,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hx),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,jE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,QE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,d=c.length;h<d;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),x=h(t.images),g=h(t.shapes),v=h(t.skeletons),S=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Un.DEFAULT_UP=new tt(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rr extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(m,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const x=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=x.position.distanceTo(g.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($E)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new rr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const BS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Qd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=zE(t,1),i=we(i,0,1),s=we(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Qd(h,c,t+1/3),this.g=Qd(h,c,t),this.b=Qd(h,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,i);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=BS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Le.workingToColorSpace(qn.copy(this),t),Math.round(we(qn.r*255,0,255))*65536+Math.round(we(qn.g*255,0,255))*256+Math.round(we(qn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(qn.copy(this),i);const s=qn.r,l=qn.g,c=qn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const x=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=x<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=x,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(qn.copy(this),i),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Mi){Le.workingToColorSpace(qn.copy(this),t);const i=qn.r,s=qn.g,l=qn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+i,Ms.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ms),t.getHSL(_c);const s=kd(Ms.h,_c.h,i),l=kd(Ms.s,_c.s,i),c=kd(Ms.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new me;me.NAMES=BS;class bm{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new bm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class FS extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yi=new tt,Oa=new tt,Jd=new tt,Pa=new tt,uo=new tt,co=new tt,dx=new tt,$d=new tt,tp=new tt,ep=new tt,np=new hn,ip=new hn,ap=new hn;class Qi{constructor(t=new tt,i=new tt,s=new tt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Yi.subVectors(t,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Yi.subVectors(l,i),Oa.subVectors(s,i),Jd.subVectors(t,i);const h=Yi.dot(Yi),d=Yi.dot(Oa),p=Yi.dot(Jd),m=Oa.dot(Oa),x=Oa.dot(Jd),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,S=(m*p-d*x)*v,T=(h*x-d*p)*v;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Pa.x),p.addScaledVector(h,Pa.y),p.addScaledVector(d,Pa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,h){return np.setScalar(0),ip.setScalar(0),ap.setScalar(0),np.fromBufferAttribute(t,i),ip.fromBufferAttribute(t,s),ap.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(np,c.x),h.addScaledVector(ip,c.y),h.addScaledVector(ap,c.z),h}static isFrontFacing(t,i,s,l){return Yi.subVectors(s,i),Oa.subVectors(t,i),Yi.cross(Oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Yi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Qi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Qi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;uo.subVectors(l,s),co.subVectors(c,s),$d.subVectors(t,s);const p=uo.dot($d),m=co.dot($d);if(p<=0&&m<=0)return i.copy(s);tp.subVectors(t,l);const x=uo.dot(tp),g=co.dot(tp);if(x>=0&&g<=x)return i.copy(l);const v=p*g-x*m;if(v<=0&&p>=0&&x<=0&&p-x>0)return h=p/(p-x),i.copy(s).addScaledVector(uo,h);ep.subVectors(t,c);const S=uo.dot(ep),T=co.dot(ep);if(T>=0&&S<=T)return i.copy(c);const w=S*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(s).addScaledVector(co,d);const M=x*T-S*g;if(M<=0&&g-x>=0&&S-T>=0)return dx.subVectors(c,l),d=(g-x)/(g-x+(S-T)),i.copy(l).addScaledVector(dx,d);const y=1/(M+w+v);return h=w*y,d=v*y,i.copy(s).addScaledVector(uo,h).addScaledVector(co,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class dr{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Zi):Zi.fromBufferAttribute(c,h),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Al),xc.subVectors(this.max,Al),fo.subVectors(t.a,Al),ho.subVectors(t.b,Al),po.subVectors(t.c,Al),ys.subVectors(ho,fo),Es.subVectors(po,ho),nr.subVectors(fo,po);let i=[0,-ys.z,ys.y,0,-Es.z,Es.y,0,-nr.z,nr.y,ys.z,0,-ys.x,Es.z,0,-Es.x,nr.z,0,-nr.x,-ys.y,ys.x,0,-Es.y,Es.x,0,-nr.y,nr.x,0];return!sp(i,fo,ho,po,xc)||(i=[1,0,0,0,1,0,0,0,1],!sp(i,fo,ho,po,xc))?!1:(Sc.crossVectors(ys,Es),i=[Sc.x,Sc.y,Sc.z],sp(i,fo,ho,po,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ia=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Zi=new tt,vc=new dr,fo=new tt,ho=new tt,po=new tt,ys=new tt,Es=new tt,nr=new tt,Al=new tt,xc=new tt,Sc=new tt,ir=new tt;function sp(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){ir.fromArray(o,c);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),p=t.dot(ir),m=i.dot(ir),x=s.dot(ir);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const yn=new tt,Mc=new oe;let tT=0;class Ns extends fr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=UE,this.updateRanges=[],this.gpuType=Ji,this.version=0,this._normalizationScale=t!==void 0?Em(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=this._denormalize(s)),s}setComponent(t,i,s){return this.normalized&&(s=this._normalize(s)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l),c=this._normalize(c)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):FE(t,this.array)}_normalize(t){const i=this._normalizationScale;return i!==void 0?Math.round(t*i):HE(t,this.array)}}class HS extends Ns{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class GS extends Ns{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class dn extends Ns{constructor(t,i,s){super(new Float32Array(t),i,s)}}const eT=new dr,Rl=new tt,rp=new tt;class Wl{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rl.subVectors(t,this.center);const i=Rl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Rl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rl.copy(t.center).add(rp)),this.expandByPoint(Rl.copy(t.center).sub(rp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nT=0;const Pi=new Ze,op=new Un,mo=new tt,Si=new dr,Cl=new dr,Dn=new tt;class zi extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(LE(t)?GS:HS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,i,s){return Pi.makeTranslation(t,i,s),this.applyMatrix4(Pi),this}scale(t,i,s){return Pi.makeScale(t,i,s),this.applyMatrix4(Pi),this}lookAt(t){return op.lookAt(t),op.updateMatrix(),this.applyMatrix4(op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Cl.setFromBufferAttribute(d),this.morphTargetsRelative?(Dn.addVectors(Si.min,Cl.min),Si.expandByPoint(Dn),Dn.addVectors(Si.max,Cl.max),Si.expandByPoint(Dn)):(Si.expandByPoint(Cl.min),Si.expandByPoint(Cl.max))}Si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Dn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)Dn.fromBufferAttribute(d,m),p&&(mo.fromBufferAttribute(t,m),Dn.add(mo)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Ns(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],p=[],m=new Uint8Array(s.count);for(let Y=0;Y<s.count;Y++)d[Y]=new tt,p[Y]=new tt;const x=new tt,g=new tt,v=new tt,S=new oe,T=new oe,w=new oe,M=new tt,y=new tt;function D(Y,B,V){m[Y]=m[B]=m[V]=1,x.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,B),v.fromBufferAttribute(s,V),S.fromBufferAttribute(c,Y),T.fromBufferAttribute(c,B),w.fromBufferAttribute(c,V),g.sub(x),v.sub(x),T.sub(S),w.sub(S);const q=1/(T.x*w.y-w.x*T.y);isFinite(q)&&(M.copy(g).multiplyScalar(w.y).addScaledVector(v,-T.y).multiplyScalar(q),y.copy(v).multiplyScalar(T.x).addScaledVector(g,-w.x).multiplyScalar(q),d[Y].add(M),d[B].add(M),d[V].add(M),p[Y].add(y),p[B].add(y),p[V].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let Y=0,B=L.length;Y<B;++Y){const V=L[Y],q=V.start,lt=V.count;for(let G=q,et=q+lt;G<et;G+=3)D(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const U=new tt,I=new tt,P=new tt,E=new tt;function C(Y){P.fromBufferAttribute(l,Y),E.copy(P);const B=d[Y];U.copy(B),U.sub(P.multiplyScalar(P.dot(B))).normalize(),I.crossVectors(E,B);const q=I.dot(p[Y])<0?-1:1;h.setXYZW(Y,U.x,U.y,U.z,q)}for(let Y=0,B=s.count;Y<B;++Y)m[Y]&&C(Y);this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ns(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,p=new tt,m=new tt,x=new tt,g=new tt;if(t)for(let v=0,S=t.count;v<S;v+=3){const T=t.getX(v+0),w=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),d.add(x),p.add(x),m.add(x),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Dn.fromBufferAttribute(t,i),Dn.normalize(),t.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(d,p){const m=d.array,x=d.itemSize,g=d.normalized,v=new m.constructor(p.length*x);let S=0,T=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*x;for(let y=0;y<x;y++)v[T++]=m[S++]}return new Ns(v,x,g)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,g=m.length;x<g;x++){const v=m[x],S=t(v,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let g=0,v=m.length;g<v;g++){const S=m[g];x.push(S.toJSON(t.data))}x.length>0&&(l[p]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const x=l[m];this.setAttribute(m,x.clone(i))}const c=t.morphAttributes;for(const m in c){const x=[],g=c[m];for(let v=0,S=g.length;v<S;v++)x.push(g[v].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,x=h.length;m<x;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new tt,iT=new tt,aT=new pe;class bs{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=lp.subVectors(s,i).cross(iT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(lp),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||aT.getNormalMatrix(t),l=this.coplanarPoint(lp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let sT=0;class Co extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=Il,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gS,this.blendDst=_S,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vd,this.stencilZFail=Vd,this.stencilZPass=Vd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new bs().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new oe().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const za=new tt,up=new tt,yc=new tt,Ec=new tt;class rT{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,za)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=za.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(za.copy(this.origin).addScaledVector(this.direction,i),za.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){up.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ec.copy(this.origin).sub(up);const c=t.distanceTo(i)*.5,h=-this.direction.dot(yc),d=Ec.dot(this.direction),p=-Ec.dot(yc),m=Ec.lengthSq(),x=Math.abs(1-h*h);let g,v,S,T;if(x>0)if(g=h*p-d,v=h*d-p,T=c*x,g>=0)if(v>=-T)if(v<=T){const w=1/x;g*=w,v*=w,S=g*(g+h*v+2*d)+v*(h*g+v+2*p)+m}else v=c,g=Math.max(0,-(h*v+d)),S=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(h*v+d)),S=-g*g+v*(v+2*p)+m;else v<=-T?(g=Math.max(0,-(-h*c+d)),v=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+m):v<=T?(g=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(g=Math.max(0,-(h*c+d)),v=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+m);else v=h>0?-c:c,g=Math.max(0,-(h*v+d)),S=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(up).addScaledVector(yc,v),S}intersectSphere(t,i){if(t.radius<0)return null;za.subVectors(t.center,this.origin);const s=za.dot(this.direction),l=za.dot(za)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),x>=0?(c=(t.min.y-v.y)*x,h=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,h=(t.min.y-v.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(d=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,za)!==null}intersectTriangle(t,i,s,l,c){const h=this.origin,d=this.direction,p=d.x,m=d.y,x=d.z,g=t.x-h.x,v=t.y-h.y,S=t.z-h.z,T=i.x-h.x,w=i.y-h.y,M=i.z-h.z,y=s.x-h.x,D=s.y-h.y,L=s.z-h.z,U=Math.abs(p),I=Math.abs(m),P=Math.abs(x);let E,C,Y,B,V,q,lt,G,et,Z,W,ft;if(U>=I&&U>=P?(Y=p,q=g,et=T,ft=y,p>=0?(E=m,C=x,B=v,V=S,lt=w,G=M,Z=D,W=L):(E=x,C=m,B=S,V=v,lt=M,G=w,Z=L,W=D)):I>=P?(Y=m,q=v,et=w,ft=D,m>=0?(E=x,C=p,B=S,V=g,lt=M,G=T,Z=L,W=y):(E=p,C=x,B=g,V=S,lt=T,G=M,Z=y,W=L)):(Y=x,q=S,et=M,ft=L,x>=0?(E=p,C=m,B=g,V=v,lt=T,G=w,Z=y,W=D):(E=m,C=p,B=v,V=g,lt=w,G=T,Z=D,W=y)),Y===0)return null;const it=E/Y,ct=C/Y,Tt=1/Y,Vt=B-it*q,ie=V-ct*q,N=lt-it*et,$=G-ct*et,gt=Z-it*ft,dt=W-ct*ft,Mt=gt*$-dt*N,Pt=Vt*dt-ie*gt,Jt=N*ie-$*Vt;if(l){if(Mt<0||Pt<0||Jt<0)return null}else if((Mt<0||Pt<0||Jt<0)&&(Mt>0||Pt>0||Jt>0))return null;const Et=Mt+Pt+Jt;if(Et===0)return null;const Bt=Tt*(Mt*q+Pt*et+Jt*ft);return(Et>0?Bt<0:Bt>0)?null:this.at(Bt/Et,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class As extends Co{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const px=new Ze,ar=new rT,Tc=new Wl,mx=new tt,bc=new tt,Ac=new tt,Rc=new tt,cp=new tt,Cc=new tt,gx=new tt,wc=new tt;class tn extends Un{constructor(t=new zi,i=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Cc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],g=c[p];x!==0&&(cp.fromBufferAttribute(g,t),h?Cc.addScaledVector(cp,x):Cc.addScaledVector(cp.sub(i),x))}i.add(Cc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),ar.copy(t.ray).recast(t.near),!(Tc.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Tc,mx)===null||ar.origin.distanceToSquared(mx)>(t.far-t.near)**2))&&(px.copy(c).invert(),ar.copy(t.ray).applyMatrix4(px),!(s.boundingBox!==null&&ar.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ar)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=v.length;T<w;T++){const M=v[T],y=h[M.materialIndex],D=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,I=L;U<I;U+=3){const P=d.getX(U),E=d.getX(U+1),C=d.getX(U+2);l=Nc(this,y,t,s,m,x,g,P,E,C),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=T,y=w;M<y;M+=3){const D=d.getX(M),L=d.getX(M+1),U=d.getX(M+2);l=Nc(this,h,t,s,m,x,g,D,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,w=v.length;T<w;T++){const M=v[T],y=h[M.materialIndex],D=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,I=L;U<I;U+=3){const P=U,E=U+1,C=U+2;l=Nc(this,y,t,s,m,x,g,P,E,C),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let M=T,y=w;M<y;M+=3){const D=M,L=M+1,U=M+2;l=Nc(this,h,t,s,m,x,g,D,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function oT(o,t,i,s,l,c,h,d){let p;if(t.side===ei?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===ur,d),p===null)return null;wc.copy(d),wc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(wc);return m<i.near||m>i.far?null:{distance:m,point:wc.clone(),object:o}}function Nc(o,t,i,s,l,c,h,d,p,m){o.getVertexPosition(d,bc),o.getVertexPosition(p,Ac),o.getVertexPosition(m,Rc);const x=oT(o,t,i,s,bc,Ac,Rc,gx);if(x){const g=new tt;Qi.getBarycoord(gx,bc,Ac,Rc,g),l&&(x.uv=Qi.getInterpolatedAttribute(l,d,p,m,g,new oe)),c&&(x.uv1=Qi.getInterpolatedAttribute(c,d,p,m,g,new oe)),h&&(x.normal=Qi.getInterpolatedAttribute(h,d,p,m,g,new tt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new tt,materialIndex:0};Qi.getNormal(bc,Ac,Rc,v.normal),x.face=v,x.barycoord=g}return x}class VS extends Zn{constructor(t=null,i=1,s=1,l,c,h,d,p,m=Vn,x=Vn,g,v){super(null,h,d,p,m,x,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _x extends Ns{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const go=new Ze,vx=new Ze,Dc=[],xx=new dr,lT=new Ze,wl=new tn,Nl=new Wl;class Am extends tn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new _x(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,lT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new dr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,go),xx.copy(t.boundingBox).applyMatrix4(go),this.boundingBox.union(xx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,go),Nl.copy(t.boundingSphere).applyMatrix4(go),this.boundingSphere.union(Nl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(wl.geometry=this.geometry,wl.material=this.material,wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(s),t.ray.intersectsSphere(Nl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,go),vx.multiplyMatrices(s,go),wl.matrixWorld=vx,wl.raycast(t,Dc);for(let h=0,d=Dc.length;h<d;h++){const p=Dc[h];p.instanceId=c,p.object=this,i.push(p)}Dc.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new _x(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new VS(new Float32Array(l*this.count),l,this.count,xm,Ji));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*t;return c[p]=d,c.set(s,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sr=new Wl,uT=new oe(.5,.5),Uc=new tt;class Vl{constructor(t=new bs,i=new bs,s=new bs,l=new bs,c=new bs,h=new bs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=$i,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],p=c[2],m=c[3],x=c[4],g=c[5],v=c[6],S=c[7],T=c[8],w=c[9],M=c[10],y=c[11],D=c[12],L=c[13],U=c[14],I=c[15];if(l[0].setComponents(m-h,S-x,y-T,I-D).normalize(),l[1].setComponents(m+h,S+x,y+T,I+D).normalize(),l[2].setComponents(m+d,S+g,y+w,I+L).normalize(),l[3].setComponents(m-d,S-g,y-w,I-L).normalize(),s)l[4].setComponents(p,v,M,U).normalize(),l[5].setComponents(m-p,S-v,y-M,I-U).normalize();else if(l[4].setComponents(m-p,S-v,y-M,I-U).normalize(),i===$i)l[5].setComponents(m+p,S+v,y+M,I+U).normalize();else if(i===Gl)l[5].setComponents(p,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);const i=uT.distanceTo(t.center);return sr.radius=.7071067811865476+i,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sx=new Ze;class Rm{constructor(){this.coordinateSystem=$i,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,s=this._frustums;for(let l=0;l<i.length;l++){const c=i[l];Sx.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),s[l]===void 0&&(s[l]=new Vl),s[l].setFromProjectionMatrix(Sx,c.coordinateSystem,c.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,s=t._frustums;for(let l=0;l<t._count;l++)i[l]===void 0&&(i[l]=new Vl),i[l].copy(s[l]);return this._count=t._count,this}clone(){return new Rm().copy(this)}}class XS extends Zn{constructor(t=[],i=Eo,s,l,c,h,d,p,m,x){super(t,i,s,l,c,h,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cT extends Zn{constructor(t,i,s,l,c,h,d,p,m){super(t,i,s,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bo extends Zn{constructor(t,i,s=_a,l,c,h,d=Vn,p=Vn,m,x=Ds,g=1){if(x!==Ds&&x!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,h,d,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class kS extends bo{constructor(t,i=_a,s=Eo,l,c,h=Vn,d=Vn,p,m=Ds){const x={width:t,height:t,depth:1},g=[x,x,x,x,x,x];super(t,t,i,s,l,c,h,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class WS extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pr extends zi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],x=[],g=[];let v=0,S=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new dn(m,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(g,2));function T(w,M,y,D,L,U,I,P,E,C,Y){const B=U/E,V=I/C,q=U/2,lt=I/2,G=P/2,et=E+1,Z=C+1;let W=0,ft=0;const it=new tt;for(let ct=0;ct<Z;ct++){const Tt=ct*V-lt;for(let Vt=0;Vt<et;Vt++){const ie=Vt*B-q;it[w]=ie*D,it[M]=Tt*L,it[y]=G,m.push(it.x,it.y,it.z),it[w]=0,it[M]=0,it[y]=P>0?1:-1,x.push(it.x,it.y,it.z),g.push(Vt/E),g.push(1-ct/C),W+=1}}for(let ct=0;ct<C;ct++)for(let Tt=0;Tt<E;Tt++){const Vt=v+Tt+et*ct,ie=v+Tt+et*(ct+1),N=v+(Tt+1)+et*(ct+1),$=v+(Tt+1)+et*ct;p.push(Vt,ie,$),p.push(ie,N,$),ft+=6}d.addGroup(S,ft,Y),S+=ft,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class zl extends zi{constructor(t=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const h=[],d=[],p=[],m=[],x=i/2,g=Math.PI/2*t,v=i,S=2*g+v,T=s*2+c,w=l+1,M=new tt,y=new tt;for(let D=0;D<=T;D++){let L=0,U=0,I=0,P=0;if(D<=s){const Y=D/s,B=Y*Math.PI/2;U=-x-t*Math.cos(B),I=t*Math.sin(B),P=-t*Math.cos(B),L=Y*g}else if(D<=s+c){const Y=(D-s)/c;U=-x+Y*i,I=t,P=0,L=g+Y*v}else{const Y=(D-s-c)/s,B=Y*Math.PI/2;U=x+t*Math.sin(B),I=t*Math.cos(B),P=t*Math.sin(B),L=g+v+Y*g}const E=Math.max(0,Math.min(1,L/S));let C=0;D===0?C=.5/l:D===T&&(C=-.5/l);for(let Y=0;Y<=l;Y++){const B=Y/l,V=B*Math.PI*2,q=Math.sin(V),lt=Math.cos(V);y.x=-I*lt,y.y=U,y.z=I*q,d.push(y.x,y.y,y.z),M.set(-I*lt,P,I*q),M.normalize(),p.push(M.x,M.y,M.z),m.push(B+C,E)}if(D>0){const Y=(D-1)*w;for(let B=0;B<l;B++){const V=Y+B,q=Y+B+1,lt=D*w+B,G=D*w+B+1;h.push(V,q,lt),h.push(q,G,lt)}}}this.setIndex(h),this.setAttribute("position",new dn(d,3)),this.setAttribute("normal",new dn(p,3)),this.setAttribute("uv",new dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Cm extends zi{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const x=[],g=[],v=[],S=[];let T=0;const w=[],M=s/2;let y=0;D(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(S,2));function D(){const U=new tt,I=new tt;let P=0;const E=(i-t)/s;for(let C=0;C<=c;C++){const Y=[],B=C/c,V=B*(i-t)+t;for(let q=0;q<=l;q++){const lt=q/l,G=lt*p+d,et=Math.sin(G),Z=Math.cos(G);I.x=V*et,I.y=-B*s+M,I.z=V*Z,g.push(I.x,I.y,I.z),U.set(et,E,Z).normalize(),v.push(U.x,U.y,U.z),S.push(lt,1-B),Y.push(T++)}w.push(Y)}for(let C=0;C<l;C++)for(let Y=0;Y<c;Y++){const B=w[Y][C],V=w[Y+1][C],q=w[Y+1][C+1],lt=w[Y][C+1];(t>0||Y!==0)&&(x.push(B,V,lt),P+=3),(i>0||Y!==c-1)&&(x.push(V,q,lt),P+=3)}m.addGroup(y,P,0),y+=P}function L(U){const I=T,P=new oe,E=new tt;let C=0;const Y=U===!0?t:i,B=U===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,M*B,0),v.push(0,B,0),S.push(.5,.5),T++;const V=T;for(let q=0;q<=l;q++){const G=q/l*p+d,et=Math.cos(G),Z=Math.sin(G);E.x=Y*Z,E.y=M*B,E.z=Y*et,g.push(E.x,E.y,E.z),v.push(0,B,0),P.x=et*.5+.5,P.y=Z*.5*B+.5,S.push(P.x,P.y),T++}for(let q=0;q<l;q++){const lt=I+q,G=V+q;U===!0?x.push(G,G+1,lt):x.push(G+1,G,lt),C+=3}m.addGroup(y,C,U===!0?1:2),y+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(c-1);const x=s[l],v=s[l+1]-x,S=(h-x)/v;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new oe:new tt);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new tt,l=[],c=[],h=[],d=new tt,p=new Ze;for(let S=0;S<=t;S++){const T=S/t;l[S]=this.getTangentAt(T,new tt)}c[0]=new tt,h[0]=new tt;let m=Number.MAX_VALUE;const x=Math.abs(l[0].x),g=Math.abs(l[0].y),v=Math.abs(l[0].z);x<=m&&(m=x,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),v<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(we(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,T))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(we(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let T=1;T<=t;T++)c[T].applyMatrix4(p.makeRotationAxis(l[T],S*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function wm(){let o=0,t=0,i=0,s=0;function l(c,h,d,p){o=c,t=d,i=-3*c+3*h-2*d-p,s=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,x,g){let v=(h-c)/m-(d-c)/(m+x)+(d-h)/x,S=(d-h)/x-(p-h)/(x+g)+(p-d)/g;v*=x,S*=x,l(h,d,v,S)},calc:function(c){const h=c*c,d=h*c;return o+t*c+i*h+s*d}}}const Mx=new tt,yx=new tt,fp=new wm,hp=new wm,dp=new wm;class hT extends fT{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new tt){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,x;this.closed||d>0?m=l[(d-1)%c]:(yx.subVectors(l[0],l[1]).add(l[0]),m=yx);const g=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?x=l[(d+2)%c]:(Mx.subVectors(l[c-1],l[c-2]).add(l[c-1]),x=Mx),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(g),S),w=Math.pow(g.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(x),S);w<1e-4&&(w=1),T<1e-4&&(T=w),M<1e-4&&(M=w),fp.initNonuniformCatmullRom(m.x,g.x,v.x,x.x,T,w,M),hp.initNonuniformCatmullRom(m.y,g.y,v.y,x.y,T,w,M),dp.initNonuniformCatmullRom(m.z,g.z,v.z,x.z,T,w,M)}else this.curveType==="catmullrom"&&(fp.initCatmullRom(m.x,g.x,v.x,x.x,this.tension),hp.initCatmullRom(m.y,g.y,v.y,x.y,this.tension),dp.initCatmullRom(m.z,g.z,v.z,x.z,this.tension));return s.set(fp.calc(p),hp.calc(p),dp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new tt().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ha extends zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,x=p+1,g=t/d,v=i/p,S=[],T=[],w=[],M=[];for(let y=0;y<x;y++){const D=y*v-h;for(let L=0;L<m;L++){const U=L*g-c;T.push(U,-D,0),w.push(0,0,1),M.push(L/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<d;D++){const L=D+m*y,U=D+m*(y+1),I=D+1+m*(y+1),P=D+1+m*y;S.push(L,U,P),S.push(U,I,P)}this.setIndex(S),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(w,3)),this.setAttribute("uv",new dn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nm extends zi{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],x=[];let g=t;const v=(i-t)/l,S=new tt,T=new oe;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const y=c+M/s*h;S.x=g*Math.cos(y),S.y=g*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),T.x=(S.x/i+1)/2,T.y=(S.y/i+1)/2,x.push(T.x,T.y)}g+=v}for(let w=0;w<l;w++){const M=w*(s+1);for(let y=0;y<s;y++){const D=y+M,L=D,U=D+s+1,I=D+s+2,P=D+1;d.push(L,U,P),d.push(U,I,P)}}this.setIndex(d),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nf extends zi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const x=[],g=new tt,v=new tt,S=[],T=[],w=[],M=[];for(let y=0;y<=s;y++){const D=[],L=y/s,U=h+L*d,I=t*Math.cos(U),P=Math.sqrt(t*t-I*I);let E=0;y===0&&h===0?E=.5/i:y===s&&p===Math.PI&&(E=-.5/i);for(let C=0;C<=i;C++){const Y=C/i,B=l+Y*c;g.x=-P*Math.cos(B),g.y=I,g.z=P*Math.sin(B),T.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),M.push(Y+E,1-L),D.push(m++)}x.push(D)}for(let y=0;y<s;y++)for(let D=0;D<i;D++){const L=x[y][D+1],U=x[y][D],I=x[y+1][D],P=x[y+1][D+1];(y!==0||h>0)&&S.push(L,U,P),(y!==s-1||p<Math.PI)&&S.push(U,I,P)}this.setIndex(S),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(w,3)),this.setAttribute("uv",new dn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nf(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ao(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(Ex(l))l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Ex(l[0])){const c=[];for(let h=0,d=l.length;h<d;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ti(o){const t={};for(let i=0;i<o.length;i++){const s=Ao(o[i]);for(const l in s)t[l]=s[l]}return t}function Ex(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function dT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function qS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const af={clone:Ao,merge:ti};var pT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Co{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pT,this.fragmentShader=mT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ao(t.uniforms),this.uniformsGroups=dT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new me().setHex(l.value);break;case"v2":this.uniforms[s].value=new oe().fromArray(l.value);break;case"v3":this.uniforms[s].value=new tt().fromArray(l.value);break;case"v4":this.uniforms[s].value=new hn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new pe().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Ze().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class gT extends Ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class om extends Co{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _T extends Co{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=mm,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vT extends Co{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xT extends Co{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dm extends Un{static registerNode(t){this.prototype._lightNode=t}constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class ST extends Dm{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const pp=new Ze,Tx=new tt,bx=new tt;class YS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Tx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tx),bx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(bx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){pp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(pp,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,h=l?l.z/c.x:1,d=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;t.coordinateSystem===Gl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(pp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lc=new tt,Oc=new hr,fa=new tt;class ZS extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lc,Oc,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Oc,fa.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Lc,Oc,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Oc,fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new tt,Ax=new oe,Rx=new oe;class Ii extends ZS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,i){return this.getViewBounds(t,Ax,Rx),i.subVectors(Rx,Ax)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class MT extends YS{constructor(){super(new Ii(90,1,.5,500)),this.isPointLightShadow=!0}}class yT extends Dm{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new MT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Um extends ZS{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ET extends YS{constructor(){super(new Um(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TT extends Dm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new ET}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const _o=-90,vo=1;class lm extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ii(_o,vo,t,i);l.layers=this.layers,this.add(l);const c=new Ii(_o,vo,t,i);c.layers=this.layers,this.add(c);const h=new Ii(_o,vo,t,i);h.layers=this.layers,this.add(h);const d=new Ii(_o,vo,t,i);d.layers=this.layers,this.add(d);const p=new Ii(_o,vo,t,i);p.layers=this.layers,this.add(p);const m=new Ii(_o,vo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===$i)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,x]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.mipmapsAutoUpdate=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(g,v,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class bT extends Ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class AT{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=RT.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function RT(){this._document.hidden===!1&&this.reset()}function Cx(o,t,i,s){const l=CT(s);switch(i){case NS:return o*t;case xm:return o*t/l.components*l.byteLength;case Sm:return o*t/l.components*l.byteLength;case cr:return o*t*2/l.components*l.byteLength;case Mm:return o*t*2/l.components*l.byteLength;case DS:return o*t*3/l.components*l.byteLength;case ga:return o*t*4/l.components*l.byteLength;case ym:return o*t*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Dp:case Lp:return Math.max(o,16)*Math.max(t,8)/4;case Np:case Up:return Math.max(o,8)*Math.max(t,8)/2;case Op:case Pp:case zp:case Bp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ip:case jc:case Fp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case qp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case jp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Jp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case $p:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case tm:case em:case nm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case im:case am:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qc:case sm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CT(o){switch(o){case yi:case AS:return{byteLength:1,components:1};case Hl:case RS:case ni:return{byteLength:2,components:1};case _m:case vm:return{byteLength:2,components:4};case _a:case gm:case Ji:return{byteLength:4,components:1};case CS:case wS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function KS(){let o=null,t=!1,i=null,s=null;function l(c,h){s=o.requestAnimationFrame(l),i(c,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function wT(o){const t=new WeakMap;function i(d,p){const m=d.array,x=d.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const x=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,x);else{g.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<g.length;S++){const T=g[v],w=g[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++v,g[v]=w)}g.length=v+1;for(let S=0,T=g.length;S<T;S++){const w=g[S];o.bufferSubData(m,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:NT,alphahash_pars_fragment:DT,alphamap_fragment:UT,alphamap_pars_fragment:LT,alphatest_fragment:OT,alphatest_pars_fragment:PT,aomap_fragment:IT,aomap_pars_fragment:zT,batching_pars_vertex:BT,batching_vertex:FT,begin_vertex:HT,beginnormal_vertex:GT,bsdfs:VT,iridescence_fragment:XT,bumpmap_pars_fragment:kT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:qT,clipping_planes_pars_vertex:YT,clipping_planes_vertex:ZT,color_fragment:KT,color_pars_fragment:jT,color_pars_vertex:QT,color_vertex:JT,common:$T,defaultnormal_vertex:tb,displacementmap_pars_vertex:eb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:sb,colorspace_pars_fragment:rb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:ub,envmap_pars_vertex:cb,envmap_physical_pars_fragment:Mb,envmap_vertex:fb,fog_vertex:hb,fog_pars_vertex:db,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:vb,lights_lambert_pars_fragment:xb,lights_pars_begin:Sb,lights_toon_fragment:yb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Tb,lights_phong_pars_fragment:bb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:wb,lights_fragment_end:Nb,lightprobes_pars_fragment:Db,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Pb,map_fragment:Ib,map_pars_fragment:zb,map_particle_fragment:Bb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:Xb,morphnormal_vertex:kb,morphtarget_pars_vertex:Wb,morphtarget_vertex:qb,normal_fragment_begin:Yb,normal_fragment_maps:Zb,normal_pars_fragment:Kb,normal_pars_vertex:jb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:eA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:aA,premultiplied_alpha_fragment:sA,project_vertex:rA,dithering_fragment:oA,dithering_pars_fragment:lA,roughnessmap_fragment:uA,roughnessmap_pars_fragment:cA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:hA,shadowmap_vertex:dA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:_A,skinnormal_vertex:vA,specularmap_fragment:xA,specularmap_pars_fragment:SA,tonemapping_fragment:MA,tonemapping_pars_fragment:yA,transmission_fragment:EA,transmission_pars_fragment:TA,uv_pars_fragment:bA,uv_pars_vertex:AA,uv_vertex:RA,worldpos_vertex:CA,background_vert:wA,background_frag:NA,backgroundCube_vert:DA,backgroundCube_frag:UA,cube_vert:LA,cube_frag:OA,depth_vert:PA,depth_frag:IA,distance_vert:zA,distance_frag:BA,equirect_vert:FA,equirect_frag:HA,linedashed_vert:GA,linedashed_frag:VA,meshbasic_vert:XA,meshbasic_frag:kA,meshlambert_vert:WA,meshlambert_frag:qA,meshmatcap_vert:YA,meshmatcap_frag:ZA,meshnormal_vert:KA,meshnormal_frag:jA,meshphong_vert:QA,meshphong_frag:JA,meshphysical_vert:$A,meshphysical_frag:tR,meshtoon_vert:eR,meshtoon_frag:nR,points_vert:iR,points_frag:aR,shadow_vert:sR,shadow_frag:rR,sprite_vert:oR,sprite_frag:lR},kt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},pa={basic:{uniforms:ti([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ti([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ti([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ti([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ti([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new me(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ti([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ti([kt.points,kt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ti([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ti([kt.common,kt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ti([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ti([kt.sprite,kt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:ti([kt.common,kt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:ti([kt.lights,kt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};pa.physical={uniforms:ti([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Pc={r:0,b:0,g:0},uR=new Ze,jS=new pe;jS.set(-1,0,0,0,1,0,0,0,1);function cR(o,t,i,s,l,c){const h=new me(0);let d=l===!0?0:1,p,m,x=null,g=0,v=null;function S(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture){const U=D.backgroundBlurriness>0;L=t.get(L,U)}return L}function T(D){let L=!1;const U=S(D);U===null?M(h,d):U&&U.isColor&&(M(U,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(D,L){const U=S(L);U&&U.isCubeTexture?(m===void 0&&(m=new tn(new pr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ao(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=U,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(uR.makeRotationFromEuler(L.backgroundRotation)).transpose(),U.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(jS),m.material.toneMapped=Le.getTransfer(U.colorSpace)!==Ye,(x!==U||g!==U.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,x=U,g=U.version,v=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new tn(new Ha(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ao(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Le.getTransfer(U.colorSpace)!==Ye,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||g!==U.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=U,g=U.version,v=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function M(D,L){D.getRGB(Pc,qS(o)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,L,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,L=1){h.set(D),d=L,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(h,d)},render:T,addToRenderList:w,dispose:y}}function fR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(V,q,lt,G,et){let Z=!1;const W=g(V,G,lt,q);c!==W&&(c=W,m(c.object)),Z=S(V,G,lt,et),Z&&T(V,G,lt,et),et!==null&&t.update(et,o.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,U(V,q,lt,G),et!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return o.createVertexArray()}function m(V){return o.bindVertexArray(V)}function x(V){return o.deleteVertexArray(V)}function g(V,q,lt,G){const et=G.wireframe===!0;let Z=s[q.id];Z===void 0&&(Z={},s[q.id]=Z);const W=V.isInstancedMesh===!0?V.id:0;let ft=Z[W];ft===void 0&&(ft={},Z[W]=ft);let it=ft[lt.id];it===void 0&&(it={},ft[lt.id]=it);let ct=it[et];return ct===void 0&&(ct=v(p()),it[et]=ct),ct}function v(V){const q=[],lt=[],G=[];for(let et=0;et<i;et++)q[et]=0,lt[et]=0,G[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:lt,attributeDivisors:G,object:V,attributes:{},index:null}}function S(V,q,lt,G){const et=c.attributes,Z=q.attributes;let W=0;const ft=lt.getAttributes();for(const it in ft)if(ft[it].location>=0){const Tt=et[it];let Vt=Z[it];if(Vt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(Vt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(Vt=V.instanceColor)),Tt===void 0||Tt.attribute!==Vt||Vt&&Tt.data!==Vt.data)return!0;W++}return c.attributesNum!==W||c.index!==G}function T(V,q,lt,G){const et={},Z=q.attributes;let W=0;const ft=lt.getAttributes();for(const it in ft)if(ft[it].location>=0){let Tt=Z[it];Tt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(Tt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(Tt=V.instanceColor));const Vt={};Vt.attribute=Tt,Tt&&Tt.data&&(Vt.data=Tt.data),et[it]=Vt,W++}c.attributes=et,c.attributesNum=W,c.index=G}function w(){const V=c.newAttributes;for(let q=0,lt=V.length;q<lt;q++)V[q]=0}function M(V){y(V,0)}function y(V,q){const lt=c.newAttributes,G=c.enabledAttributes,et=c.attributeDivisors;lt[V]=1,G[V]===0&&(o.enableVertexAttribArray(V),G[V]=1),et[V]!==q&&(o.vertexAttribDivisor(V,q),et[V]=q)}function D(){const V=c.newAttributes,q=c.enabledAttributes;for(let lt=0,G=q.length;lt<G;lt++)q[lt]!==V[lt]&&(o.disableVertexAttribArray(lt),q[lt]=0)}function L(V,q,lt,G,et,Z,W){W===!0?o.vertexAttribIPointer(V,q,lt,et,Z):o.vertexAttribPointer(V,q,lt,G,et,Z)}function U(V,q,lt,G){w();const et=G.attributes,Z=lt.getAttributes(),W=q.defaultAttributeValues;for(const ft in Z){const it=Z[ft];if(it.location>=0){let ct=et[ft];if(ct===void 0&&(ft==="instanceMatrix"&&V.instanceMatrix&&(ct=V.instanceMatrix),ft==="instanceColor"&&V.instanceColor&&(ct=V.instanceColor)),ct!==void 0){const Tt=ct.normalized,Vt=ct.itemSize,ie=t.get(ct);if(ie===void 0)continue;const N=ie.buffer,$=ie.type,gt=ie.bytesPerElement,dt=$===o.INT||$===o.UNSIGNED_INT||ct.gpuType===gm;if(ct.isInterleavedBufferAttribute){const Mt=ct.data,Pt=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,Jt=ct.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let Et=0;Et<it.locationSize;Et++)y(it.location+Et,Mt.meshPerAttribute);V.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Et=0;Et<it.locationSize;Et++)M(it.location+Et);o.bindBuffer(o.ARRAY_BUFFER,N);for(let Et=0;Et<it.locationSize;Et++)L(it.location+Et,Vt/it.locationSize,$,Tt,Pt*gt,(Jt+Vt/it.locationSize*Et)*gt,dt)}else{if(ct.isInstancedBufferAttribute){for(let Mt=0;Mt<it.locationSize;Mt++)y(it.location+Mt,ct.meshPerAttribute);V.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Mt=0;Mt<it.locationSize;Mt++)M(it.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,N);for(let Mt=0;Mt<it.locationSize;Mt++)L(it.location+Mt,Vt/it.locationSize,$,Tt,Vt*gt,Vt/it.locationSize*Mt*gt,dt)}}else if(W!==void 0){const Tt=W[ft];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(it.location,Tt);break;case 3:o.vertexAttrib3fv(it.location,Tt);break;case 4:o.vertexAttrib4fv(it.location,Tt);break;default:o.vertexAttrib1fv(it.location,Tt)}}}}D()}function I(){Y();for(const V in s){const q=s[V];for(const lt in q){const G=q[lt];for(const et in G){const Z=G[et];for(const W in Z)x(Z[W].object),delete Z[W];delete G[et]}}delete s[V]}}function P(V){if(s[V.id]===void 0)return;const q=s[V.id];for(const lt in q){const G=q[lt];for(const et in G){const Z=G[et];for(const W in Z)x(Z[W].object),delete Z[W];delete G[et]}}delete s[V.id]}function E(V){for(const q in s){const lt=s[q];for(const G in lt){const et=lt[G];if(et[V.id]===void 0)continue;const Z=et[V.id];for(const W in Z)x(Z[W].object),delete Z[W];delete et[V.id]}}}function C(V){for(const q in s){const lt=s[q],G=V.isInstancedMesh===!0?V.id:0,et=lt[G];if(et!==void 0){for(const Z in et){const W=et[Z];for(const ft in W)x(W[ft].object),delete W[ft];delete et[Z]}delete lt[G],Object.keys(lt).length===0&&delete s[q]}}}function Y(){B(),h=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:B,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:C,releaseStatesOfProgram:E,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function hR(o,t,i){let s;function l(p){s=p}function c(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function h(p,m,x){x!==0&&(o.drawArraysInstanced(s,p,m,x),i.update(m,s,x))}function d(p,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let v=0;for(let S=0;S<x;S++)v+=m[S];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function dR(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(E){return!(E!==ga&&s.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(E){const C=E===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==yi&&E!==Ji&&!C&&s.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=p(m);x!==m&&(he("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=i.logarithmicDepthBuffer===!0&&g===!1;i.reversedDepthBuffer===!0&&g===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&g===!0&&he("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:U,maxSamples:I,samples:P}}function pR(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new bs,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||l;return l=v,s=g.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,S){const T=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,y=o.get(g);if(!l||T===null||T.length===0||c&&!M)c?x(null):m();else{const D=c?0:s,L=D*4;let U=y.clippingState||null;p.value=U,U=x(T,v,L,S);for(let I=0;I!==L;++I)U[I]=i[I];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,v,S,T){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,T!==!0||M===null){const y=S+w*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,U=S;L!==w;++L,U+=4)h.copy(g[L]).applyMatrix4(D,d),h.normal.toArray(M,U),M[U+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}class Lm extends Kn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new XS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new pr(5,5,5),c=new Ei({name:"CubemapFromEquirect",uniforms:Ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:or});c.uniforms.tEquirect.value=i;const h=new tn(l,c),d=i.minFilter;return i.minFilter===Cs&&(i.minFilter=ui),new lm(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}const wx=256,mR=3,gR=20,QS=256,JS=16,_R=3,vR=new tt,xR=new me;class Xl{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lm(1,10,null),this._boxMesh=new tn(new pr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=vR}=c,p=this._renderer;this._setSize(h);const m=this._allocateTarget(),x=this._getSourceTarget(!0);i>0&&(x.texture.mipmapsAutoUpdate=!1);const g=p.autoClear,v=p.autoClearColor,S=p.autoClearDepth,T=p.autoClearStencil,w=t.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,w===null&&(t.background=p.getClearColor(xR));const M=new lm(s,l,x);return M.position.copy(d),M.update(p,t),p.autoClear=g,p.autoClearColor=v,p.autoClearDepth=S,p.autoClearStencil=T,t.background=w,i>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(m,i)),this._applyPMREM(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ux(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(wx,BE(t))}_fromTexture(t,i){t.mapping===Eo||t.mapping===Fl?this._setSize(t.image.length===0?wx:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const s=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(s),s}_allocateTarget(){const t=this._cubeSize,i=Nx(t,!1,!1),s=Math.log2(t)-mR;for(let l=0;l<=s;l++)i.texture.mipmaps.push({width:t>>l,height:t>>l});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){const i=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==i||t&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=Nx(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,s){const l=this._boxMesh,c=this._cubeCamera;l.material=s,c.renderTarget=t,c.activeMipmapLevel=i;const h=t.width>>i;t.viewport.set(0,0,h,h),c.update(this._renderer,l),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===Eo||t.mapping===Fl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ux()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dx()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=SR(),this._integrationMaterial=MR());const i=this._cubeSize,s=t.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(i/JS);for(let h=0;h<=s;h++){const d=Xl.lodToRoughness(h,s);if(h>s-_R)c.roughness.value=d,this._renderCube(t,h,this._integrationMaterial);else{const p=d>0?Math.log2(i)+.5*Math.log2(6/(QS*Math.pow(d,4)))+.5:0;l.roughness.value=d,l.lodBias.value=p,this._renderCube(t,h,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=yR());const s=this._blurMaterial,l=s.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(t,0,s),l.envMap.value=t.texture,this._renderCube(c,0,s)}}function Nx(o,t,i){return new Lm(o,{minFilter:Cs,generateMipmaps:t,type:ni,colorSpace:$c,depthBuffer:i})}function ql(o,t,i){return new Ei({name:o,uniforms:t,vertexShader:Ee.cube_vert,fragmentShader:i,side:ei,blending:or,depthTest:!1,depthWrite:!1})}function SR(){return ql("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${QS}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function MR(){return ql("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:JS}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yR(){return ql("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gR}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Dx(){return ql("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ux(){return ql("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ER(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,S=!1){return v==null?null:S?h(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===Fd||S===Hd)if(t.has(v)){const T=t.get(v).texture;return d(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const w=new Lm(T.height);return w.fromEquirectangularTexture(o,v),t.set(v,w),v.addEventListener("dispose",m),d(w.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const S=v.mapping,T=S===Fd||S===Hd,w=S===Eo||S===Fl;if(T||w){let M=i.get(v);const y=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new Xl(o)),M=T?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const D=v.image;return T&&D&&D.height>0||w&&D&&p(D)?(s===null&&(s=new Xl(o)),M=T?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",x),M.texture):null}}}return v}function d(v,S){return S===Fd?v.mapping=Eo:S===Hd&&(v.mapping=Fl),v}function p(v){let S=0;const T=6;for(let w=0;w<T;w++)v[w]!==void 0&&S++;return S===T}function m(v){const S=v.target;S.removeEventListener("dispose",m);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function x(v){const S=v.target;S.removeEventListener("dispose",x);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function TR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wc("WebGLRenderer: "+s+" extension not supported."),l}}}function bR(o,t,i,s){const l={},c=new WeakMap,h=new FinalizationRegistry(T=>delete l[T]);function d(T){p(T.target)}function p(T){T.index!==null&&t.remove(T.index);for(const M in T.attributes)t.remove(T.attributes[M]);T.removeEventListener("dispose",d),delete l[T.id],h.unregister(T);const w=c.get(T);w&&(t.remove(w),c.delete(T)),s.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,i.memory.geometries--}function m(T,w){return l[w.id]!==void 0||(w.addEventListener("dispose",d),l[w.id]=new WeakRef(w),h.register(w,w.id,w),i.memory.geometries++),w}function x(T){const w=T.attributes;for(const M in w)t.update(w[M],o.ARRAY_BUFFER)}function g(T){const w=T.index,M=T.attributes.position;let y=0;if(M===void 0)return;const D=w!==null?w.array.length:M.array.length/3-1,L=M.count>=65535?GS:HS,U=new L(Math.ceil(D/3)*6,1),I=U.array;if(w!==null){const E=w.array;y=w.version;for(let C=0,Y=0;C<D;C+=3){const B=E[C+0],V=E[C+1],q=E[C+2];I[Y++]=B,I[Y++]=V,I[Y++]=V,I[Y++]=q,I[Y++]=q,I[Y++]=B}}else{y=M.version;for(let E=0,C=0;E<D;E+=3){const Y=E+0,B=E+1,V=E+2;I[C++]=Y,I[C++]=B,I[C++]=B,I[C++]=V,I[C++]=V,I[C++]=Y}}U.version=y;const P=c.get(T);P&&t.remove(P),c.set(T,U)}function v(T){const w=c.get(T);if(w){const M=T.index;M!==null&&w.version<M.version&&g(T)}else g(T);return c.get(T)}function S(){for(const T in l){const w=l[T].deref();w!==void 0&&p(w)}}return{get:m,update:x,getWireframeAttribute:v,dispose:S}}function AR(o,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function p(g,v){o.drawElements(s,v,c,g*h),i.update(v,s,1)}function m(g,v,S){S!==0&&(o.drawElementsInstanced(s,v,c,g*h,S),i.update(v,s,S))}function x(g,v,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,g,0,S);let w=0;for(let M=0;M<S;M++)w+=v[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function RR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Fe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function CR(o,t,i){const s=new WeakMap,l=new hn;function c(h,d,p){const m=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let B=function(){C.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var S=B;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let I=d.attributes.position.count*U,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*P*4*g),C=new IS(E,I,P,g);C.type=Ji,C.needsUpdate=!0;const Y=U*4;for(let V=0;V<g;V++){const q=y[V],lt=D[V],G=L[V],et=I*P*4*V;for(let Z=0;Z<q.count;Z++){const W=Z*Y;T===!0&&(l.fromBufferAttribute(q,Z),E[et+W+0]=l.x,E[et+W+1]=l.y,E[et+W+2]=l.z,E[et+W+3]=0),w===!0&&(l.fromBufferAttribute(lt,Z),E[et+W+4]=l.x,E[et+W+5]=l.y,E[et+W+6]=l.z,E[et+W+7]=0),M===!0&&(l.fromBufferAttribute(G,Z),E[et+W+8]=l.x,E[et+W+9]=l.y,E[et+W+10]=l.z,E[et+W+11]=G.itemSize===4?l.w:1)}}v={count:g,texture:C,size:new oe(I,P)},s.set(d,v),d.addEventListener("dispose",B)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const w=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function wR(o,t,i,s,l){let c=new WeakMap;function h(m){const x=l.render.frame,g=m.geometry,v=t.get(m,g);if(c.get(v)!==x&&(t.update(v),c.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==x&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,x))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==x&&(S.update(),c.set(S,x))}return v}function d(){c=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:d}}const NR={[vS]:"LINEAR_TONE_MAPPING",[xS]:"REINHARD_TONE_MAPPING",[SS]:"CINEON_TONE_MAPPING",[MS]:"ACES_FILMIC_TONE_MAPPING",[ES]:"AGX_TONE_MAPPING",[TS]:"NEUTRAL_TONE_MAPPING",[yS]:"CUSTOM_TONE_MAPPING"};function DR(o,t,i,s,l,c){const h=new Kn(t,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null,m=null;const x=new zi;x.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new dn([0,2,0,0,2,0],2));const g=new gT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new tn(x,g),S=new Um(-1,1,1,-1,0,1);let T=null,w=null,M=!1,y,D=null,L=[],U=!1;this.setSize=function(I,P){h.setSize(I,P),d!==null&&d.setSize(I,P),p!==null&&p.setSize(I,P);for(let E=0;E<L.length;E++){const C=L[E];C.setSize&&C.setSize(I,P)}},this.setEffects=function(I){L=I,U=L.length>0&&L[0].isRenderPass===!0;const P=h.width,E=h.height;L.length>0&&d===null&&(d=new Kn(P,E,{type:ni,depthBuffer:!1,stencilBuffer:!1}),p=new Kn(P,E,{type:ni,depthBuffer:!1,stencilBuffer:!1}));const C=l===!0&&L.some(Y=>Y.needsDepthTexture===!0);C!==(h.depthTexture!==null)&&(C===!0&&m===null&&(m=new bo(P,E),c===!0&&(m.format=ws,m.type=To)),h.dispose(),h.depthTexture=C?m:null,h.resolveDepthBuffer=C,h.storeMultisampledDepthBuffer=C);for(let Y=0;Y<L.length;Y++){const B=L[Y];B.setSize&&B.setSize(P,E),C&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(m)}},this.begin=function(I,P){if(M||I.toneMapping===Va&&L.length===0)return!1;if(D=P,P!==null){const E=P.width,C=P.height;(h.width!==E||h.height!==C)&&this.setSize(E,C)}return U===!1&&I.setRenderTarget(h),y=I.toneMapping,I.toneMapping=Va,!0},this.hasRenderPass=function(){return U},this.end=function(I,P){I.toneMapping=y,M=!0;let E=h,C=d;for(let Y=0;Y<L.length;Y++){const B=L[Y];B.enabled!==!1&&(B.render(I,C,E,P),B.needsSwap!==!1&&(E=C,C=C===d?p:d))}if(T!==I.outputColorSpace||w!==I.toneMapping){T=I.outputColorSpace,w=I.toneMapping,g.defines={},Le.getTransfer(T)===Ye&&(g.defines.SRGB_TRANSFER="");const Y=NR[w];Y&&(g.defines[Y]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=E.texture,I.setRenderTarget(D),I.render(v,S),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),x.dispose(),g.dispose()}}const $S=new Zn,tM=new bo(1,1),eM=new kS(1),nM=new IS,iM=new qE,aM=new XS,Lx=[],Ox=[],Px=new Float32Array(16),Ix=new Float32Array(9),zx=new Float32Array(4);function wo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Lx[l];if(c===void 0&&(c=new Float32Array(l),Lx[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function of(o,t){let i=Ox[t];i===void 0&&(i=new Int32Array(t),Ox[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function UR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function LR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function OR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function PR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function IR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;zx.set(s),o.uniformMatrix2fv(this.addr,!1,zx),An(i,s)}}function zR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;Ix.set(s),o.uniformMatrix3fv(this.addr,!1,Ix),An(i,s)}}function BR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;Px.set(s),o.uniformMatrix4fv(this.addr,!1,Px),An(i,s)}}function FR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function HR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function GR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function VR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function XR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function kR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function WR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function qR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function lf(o){return o.version===0&&(o.compareFunction=OS,o.needsUpdate=!0),o}function YR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?c=lf(tM):c=$S,i.setTexture2D(t||c,l)}function ZR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||iM,l)}function KR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_CUBE_SHADOW?c=lf(eM):c=aM,i.setTextureCube(t||c,l)}function jR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||nM,l)}function QR(o){switch(o){case 5126:return UR;case 35664:return LR;case 35665:return OR;case 35666:return PR;case 35674:return IR;case 35675:return zR;case 35676:return BR;case 5124:case 35670:return FR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return XR;case 36294:return kR;case 36295:return WR;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return jR}}function JR(o,t){o.uniform1fv(this.addr,t)}function $R(o,t){const i=wo(t,this.size,2);o.uniform2fv(this.addr,i)}function t2(o,t){const i=wo(t,this.size,3);o.uniform3fv(this.addr,i)}function e2(o,t){const i=wo(t,this.size,4);o.uniform4fv(this.addr,i)}function n2(o,t){const i=wo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function i2(o,t){const i=wo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function a2(o,t){const i=wo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function s2(o,t){o.uniform1iv(this.addr,t)}function r2(o,t){o.uniform2iv(this.addr,t)}function o2(o,t){o.uniform3iv(this.addr,t)}function l2(o,t){o.uniform4iv(this.addr,t)}function u2(o,t){o.uniform1uiv(this.addr,t)}function c2(o,t){o.uniform2uiv(this.addr,t)}function f2(o,t){o.uniform3uiv(this.addr,t)}function h2(o,t){o.uniform4uiv(this.addr,t)}function d2(o,t,i){const s=this.cache,l=t.length,c=of(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=lf(tM):h=$S;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function p2(o,t,i){const s=this.cache,l=t.length,c=of(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||iM,c[h])}function m2(o,t,i){const s=this.cache,l=t.length,c=of(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));let h;this.type===o.SAMPLER_CUBE_SHADOW?h=lf(eM):h=aM;for(let d=0;d!==l;++d)i.setTextureCube(t[d]||h,c[d])}function g2(o,t,i){const s=this.cache,l=t.length,c=of(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||nM,c[h])}function _2(o){switch(o){case 5126:return JR;case 35664:return $R;case 35665:return t2;case 35666:return e2;case 35674:return n2;case 35675:return i2;case 35676:return a2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return o2;case 35669:case 35673:return l2;case 5125:return u2;case 36294:return c2;case 36295:return f2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}class v2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=QR(i.type)}}class x2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_2(i.type)}}class S2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const mp=/(\w+)(\])?(\[|\.)?/g;function Bx(o,t){o.seq.push(t),o.map[t.id]=t}function M2(o,t,i){const s=o.name,l=s.length;for(mp.lastIndex=0;;){const c=mp.exec(s),h=mp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Bx(i,m===void 0?new v2(d,o,t):new x2(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new S2(d),Bx(i,g)),i=g}}}class qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);M2(d,p,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Fx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const y2=37297;let E2=0;function T2(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Hx=new pe;function b2(o){Le._getMatrix(Hx,Le.workingColorSpace,o);const t=`mat3( ${Hx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case tf:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Gx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+T2(o.getShaderSource(t),d)}else return c}function A2(o,t){const i=b2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const R2={[vS]:"Linear",[xS]:"Reinhard",[SS]:"Cineon",[MS]:"ACESFilmic",[ES]:"AgX",[TS]:"Neutral",[yS]:"Custom"};function C2(o,t){const i=R2[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new tt;function w2(){Le.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function D2(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function U2(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Pl(o){return o!==""}function Vx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L2=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(o){return o.replace(L2,O2)}function O2(o,t){const i=Ee[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return um(i)}const P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(o){return o.replace(P2,I2)}function I2(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Wx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const z2={[Hc]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};function B2(o){return z2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F2={[Fl]:"ENVMAP_MODE_REFRACTION"};function H2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G2={[mm]:"ENVMAP_BLENDING_MULTIPLY",[ME]:"ENVMAP_BLENDING_MIX",[yE]:"ENVMAP_BLENDING_ADD"};function V2(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":G2[o.combine]||"ENVMAP_BLENDING_NONE"}function X2(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=B2(i),m=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=H2(i),g=V2(i),v=N2(i),S=D2(c),T=l.createProgram();let w,M,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(w=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Pl).join(`
`),w.length>0&&(w+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Pl).join(`
`),M.length>0&&(M+=`
`)):(w=[Wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),M=[Wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?Ee.tonemapping_pars_fragment:"",i.toneMapping!==Va?C2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,A2("linearToOutputTexel",i.outputColorSpace),w2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),h=um(h),h=Vx(h,i),h=Xx(h,i),d=um(d),d=Vx(d,i),d=Xx(d,i),h=kx(h),d=kx(d),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,w=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,M=["#define varying in",i.glslVersion===tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=y+w+h,L=y+M+d,U=Fx(l,l.VERTEX_SHADER,D),I=Fx(l,l.FRAGMENT_SHADER,L);l.attachShader(T,U),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(B){if(o.debug.checkShaderErrors){const V=l.getProgramInfoLog(T)||"",q=l.getShaderInfoLog(U)||"",lt=l.getShaderInfoLog(I)||"",G=V.trim(),et=q.trim(),Z=lt.trim();let W=!0,ft=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,U,I);else{const it=Gx(l,U,"vertex"),ct=Gx(l,I,"fragment");Fe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+it+`
`+ct)}else G!==""?he("WebGLProgram: Program Info Log:",G):(et===""||Z==="")&&(ft=!1);ft&&(B.diagnostics={runnable:W,programLog:G,vertexShader:{log:et,prefix:w},fragmentShader:{log:Z,prefix:M}})}l.deleteShader(U),l.deleteShader(I),E=new qc(l,T),C=U2(l,T)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(T,y2)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E2++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=I,this}let k2=0;class W2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new q2(t),i.set(t,s)),s}}class q2{constructor(t){this.id=k2++,this.code=t,this.usedTimes=0}}function Y2(o){return o===cr||o===jc||o===Qc}function Z2(o,t,i,s,l,c){const h=new zS,d=new W2,p=new Set,m=[],x=new Map,g=s.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return p.add(E),E===0?"uv":`uv${E}`}function T(E,C,Y,B,V,q){const lt=B.fog,G=V.geometry,et=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,W=t.get(E.envMap||et,Z),ft=v[E.type];let it=s.precision;E.precision!==null&&(it=s.getMaxPrecision(E.precision),it!==E.precision&&he("WebGLProgram.getParameters:",E.precision,"not supported, using",it,"instead."));const ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=ct!==void 0?ct.length:0;let Vt=0;G.morphAttributes.position!==void 0&&(Vt=1),G.morphAttributes.normal!==void 0&&(Vt=2),G.morphAttributes.color!==void 0&&(Vt=3);let ie,N,$,gt;if(ft){const Xt=pa[ft];ie=Xt.vertexShader,N=Xt.fragmentShader}else{ie=E.vertexShader,N=E.fragmentShader;const Xt=d.getVertexShaderStage(E),Ie=d.getFragmentShaderStage(E);d.update(E,Xt,Ie),$=Xt.id,gt=Ie.id}const dt=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Pt=V.isInstancedMesh===!0,Jt=V.isBatchedMesh===!0,Et=!!E.map,Bt=!!E.matcap,ge=!!W,bt=ge&&W.isPMREMTexture===!0,Wt=!!E.aoMap,ee=!!E.lightMap,Zt=!!E.bumpMap&&E.wireframe===!1,qt=!!E.normalMap,Se=!!E.displacementMap,Ge=!!E.emissiveMap,on=!!E.metalnessMap,Ln=!!E.roughnessMap,On=E.anisotropy>0,K=E.clearcoat>0,Xn=E.diffuseRoughness>0,Ve=E.dispersion>0,Ke=E.retroreflectivity>0,Ft=E.iridescence>0,je=E.sheen>0,se=E.transmission>0,ce=On&&!!E.anisotropyMap,O=K&&!!E.clearcoatMap,b=K&&!!E.clearcoatNormalMap,at=K&&!!E.clearcoatRoughnessMap,Rt=Xn&&!!E.diffuseRoughnessMap,yt=Ft&&!!E.iridescenceMap,Dt=Ft&&!!E.iridescenceThicknessMap,It=je&&!!E.sheenColorMap,pt=je&&!!E.sheenRoughnessMap,vt=!!E.specularMap,Ut=!!E.specularColorMap,H=!!E.specularIntensityMap,_t=se&&!!E.transmissionMap,mt=se&&!!E.thicknessMap,Lt=!!E.gradientMap,Ct=!!E.alphaMap,Ot=E.alphaTest>0,ne=!!E.alphaHash,re=!!E.extensions;let At=Va;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(At=o.toneMapping);const Kt=bt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,_e={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:N,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:it,batching:Jt,batchingColor:Jt&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:Bt,envMap:ge,envMapMode:ge&&W.mapping,envMapPMREM:bt,envMapMaxLod:bt?Kt.length-1:null,envMapSize:bt?Kt[0].width:null,aoMap:Wt,lightMap:ee,bumpMap:Zt,normalMap:qt,displacementMap:Se,emissiveMap:Ge,normalMapObjectSpace:qt&&E.normalMapType===bE,normalMapTangentSpace:qt&&E.normalMapType===Jc,packedNormalMap:qt&&E.normalMapType===Jc&&Y2(E.normalMap.format),metalnessMap:on,roughnessMap:Ln,anisotropy:On,anisotropyMap:ce,clearcoat:K,clearcoatMap:O,clearcoatNormalMap:b,clearcoatRoughnessMap:at,diffuseRoughness:Xn,diffuseRoughnessMap:Rt,dispersion:Ve,retroreflection:Ke,iridescence:Ft,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:je,sheenColorMap:It,sheenRoughnessMap:pt,specularMap:vt,specularColorMap:Ut,specularIntensityMap:H,transmission:se,transmissionMap:_t,thicknessMap:mt,gradientMap:Lt,opaque:E.transparent===!1&&E.blending===Il&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Ot,alphaHash:ne,combine:E.combine,mapUv:Et&&S(E.map.channel),aoMapUv:Wt&&S(E.aoMap.channel),lightMapUv:ee&&S(E.lightMap.channel),bumpMapUv:Zt&&S(E.bumpMap.channel),normalMapUv:qt&&S(E.normalMap.channel),displacementMapUv:Se&&S(E.displacementMap.channel),emissiveMapUv:Ge&&S(E.emissiveMap.channel),metalnessMapUv:on&&S(E.metalnessMap.channel),roughnessMapUv:Ln&&S(E.roughnessMap.channel),anisotropyMapUv:ce&&S(E.anisotropyMap.channel),clearcoatMapUv:O&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:b&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&S(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Rt&&S(E.diffuseRoughnessMap.channel),iridescenceMapUv:yt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&S(E.sheenRoughnessMap.channel),specularMapUv:vt&&S(E.specularMap.channel),specularColorMapUv:Ut&&S(E.specularColorMap.channel),specularIntensityMapUv:H&&S(E.specularIntensityMap.channel),transmissionMapUv:_t&&S(E.transmissionMap.channel),thicknessMapUv:mt&&S(E.thicknessMap.channel),alphaMapUv:Ct&&S(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(qt||On),vertexNormals:!!G.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Et||Ct),fog:!!lt,useFog:E.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||G.attributes.normal===void 0&&qt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Mt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Vt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:q.filter(Xt=>Xt.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:At,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===Ye,decodeVideoTextureEmissive:Ge&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===Ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:re&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&E.extensions.multiDraw===!0||Jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _e.vertexUv1s=p.has(1),_e.vertexUv2s=p.has(2),_e.vertexUv3s=p.has(3),p.clear(),_e}function w(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)C.push(Y),C.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(M(C,E),y(C,E),C.push(o.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function M(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapPMREM),E.push(C.envMapMaxLod),E.push(C.envMapSize),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.diffuseRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.numSunLights),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numSunLightShadows),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.numLightProbeGrids),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function y(E,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.retroreflection&&h.enable(24),C.diffuseRoughness&&h.enable(25),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),C.packedNormalMap&&h.enable(22),C.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),C.numLightProbeGrids>0&&h.enable(22),C.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function D(E){const C=v[E.type];let Y;if(C){const B=pa[C];Y=af.clone(B.uniforms)}else Y=E.uniforms;return Y}function L(E,C){let Y=x.get(C);return Y!==void 0?++Y.usedTimes:(Y=new X2(o,C,E,l),m.push(Y),x.set(C,Y)),Y}function U(E){if(--E.usedTimes===0){const C=m.indexOf(E);m[C]=m[m.length-1],m.pop(),x.delete(E.cacheKey),E.destroy()}}function I(E){d.remove(E)}function P(){d.dispose()}return{getParameters:T,getProgramCacheKey:w,getUniforms:D,acquireProgram:L,releaseProgram:U,releaseShaderCache:I,programs:m,dispose:P}}function K2(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function j2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function qx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Yx(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,T,w,M,y){let D=o[t];return D===void 0?(D={id:v.id,object:v,geometry:S,material:T,materialVariant:h(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:y},o[t]=D):(D.id=v.id,D.object=v,D.geometry=S,D.material=T,D.materialVariant=h(v),D.groupOrder=w,D.renderOrder=v.renderOrder,D.z=M,D.group=y),t++,D}function p(v,S,T,w,M,y,D){D.reversedDepth===!0&&(M=-M);const L=d(v,S,T,w,M,y);T.transmission>0?s.push(L):T.transparent===!0?l.push(L):i.push(L)}function m(v,S,T,w,M,y){const D=d(v,S,T,w,M,y);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function x(v,S){i.length>1&&i.sort(v||j2),s.length>1&&s.sort(S||qx),l.length>1&&l.sort(S||qx)}function g(){for(let v=t,S=o.length;v<S;v++){const T=o[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:g,sort:x}}function Q2(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new Yx,o.set(s,[h])):l>=c.length?(h=new Yx,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function J2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new tt,color:new me};break;case"SpotLight":i={position:new tt,direction:new tt,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function $2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let t3=0;function e3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function n3(o){const t=new J2,i=$2(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new tt);const l=new tt,c=new Ze,h=new Ze;function d(m){let x=0,g=0,v=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let S=0,T=0,w=0,M=0,y=0,D=0,L=0,U=0,I=0,P=0,E=0,C=0,Y=0,B=0;m.sort(e3);for(let q=0,lt=m.length;q<lt;q++){const G=m[q],et=G.color,Z=G.intensity,W=G.distance;let ft=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===cr?ft=G.shadow.map.texture:ft=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=et.r*Z,g+=et.g*Z,v+=et.b*Z;else if(G.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(G.sh.coefficients[it],Z);B++}else if(G.isSunLight){const it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ct=G.shadow,Tt=i.get(G);Tt.shadowIntensity=ct.intensity,Tt.shadowBias=ct.bias,Tt.shadowNormalBias=ct.normalBias,Tt.shadowRadius=ct.radius,Tt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),s.sunShadow[T]=Tt,s.sunShadowMap[T]=ft;const Vt=ct.getViewportCount();for(let ie=0;ie<Vt;ie++)s.sunShadowMatrix[w+ie]=ct.getMatrix(ie),s.sunShadowCascade[w+ie]=ct._cascadeData[ie];w+=Vt,T++}s.sun[S]=it,S++}else if(G.isDirectionalLight){const it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ct=G.shadow,Tt=i.get(G);Tt.shadowIntensity=ct.intensity,Tt.shadowBias=ct.bias,Tt.shadowNormalBias=ct.normalBias,Tt.shadowRadius=ct.radius,Tt.shadowMapSize=ct.mapSize,s.directionalShadow[M]=Tt,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=G.shadow.matrix,I++}s.directional[M]=it,M++}else if(G.isSpotLight){const it=t.get(G);it.position.setFromMatrixPosition(G.matrixWorld),it.color.copy(et).multiplyScalar(Z),it.distance=W,it.coneCos=Math.cos(G.angle),it.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),it.decay=G.decay,s.spot[D]=it;const ct=G.shadow;if(G.map&&(s.spotLightMap[C]=G.map,C++,ct.updateMatrices(G),G.castShadow&&Y++),s.spotLightMatrix[D]=ct.matrix,G.castShadow){const Tt=i.get(G);Tt.shadowIntensity=ct.intensity,Tt.shadowBias=ct.bias,Tt.shadowNormalBias=ct.normalBias,Tt.shadowRadius=ct.radius,Tt.shadowMapSize=ct.mapSize,s.spotShadow[D]=Tt,s.spotShadowMap[D]=ft,E++}D++}else if(G.isRectAreaLight){const it=t.get(G);it.color.copy(et).multiplyScalar(Z),it.halfWidth.set(G.width*.5,0,0),it.halfHeight.set(0,G.height*.5,0),s.rectArea[L]=it,L++}else if(G.isPointLight){const it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),it.distance=G.distance,it.decay=G.decay,G.castShadow){const ct=G.shadow,Tt=i.get(G);Tt.shadowIntensity=ct.intensity,Tt.shadowBias=ct.bias,Tt.shadowNormalBias=ct.normalBias,Tt.shadowRadius=ct.radius,Tt.shadowMapSize=ct.mapSize,Tt.shadowCameraNear=ct.camera.near,Tt.shadowCameraFar=ct.camera.far,s.pointShadow[y]=Tt,s.pointShadowMap[y]=ft,s.pointShadowMatrix[y]=G.shadow.matrix,P++}s.point[y]=it,y++}else if(G.isHemisphereLight){const it=t.get(G);it.skyColor.copy(G.color).multiplyScalar(Z),it.groundColor.copy(G.groundColor).multiplyScalar(Z),s.hemi[U]=it,U++}}L>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=kt.LTC_FLOAT_1,s.rectAreaLTC2=kt.LTC_FLOAT_2):(s.rectAreaLTC1=kt.LTC_HALF_1,s.rectAreaLTC2=kt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const V=s.hash;(V.sunLength!==S||V.directionalLength!==M||V.pointLength!==y||V.spotLength!==D||V.rectAreaLength!==L||V.hemiLength!==U||V.numSunShadows!==T||V.numDirectionalShadows!==I||V.numPointShadows!==P||V.numSpotShadows!==E||V.numSpotMaps!==C||V.numLightProbes!==B)&&(s.sun.length=S,s.directional.length=M,s.spot.length=D,s.rectArea.length=L,s.point.length=y,s.hemi.length=U,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=P,s.pointShadowMap.length=P,s.pointShadowMatrix.length=P,s.spotShadow.length=E,s.spotShadowMap.length=E,s.spotLightMatrix.length=E+C-Y,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=B,V.sunLength=S,V.directionalLength=M,V.pointLength=y,V.spotLength=D,V.rectAreaLength=L,V.hemiLength=U,V.numSunShadows=T,V.numDirectionalShadows=I,V.numPointShadows=P,V.numSpotShadows=E,V.numSpotMaps=C,V.numLightProbes=B,s.version=t3++)}function p(m,x){let g=0,v=0,S=0,T=0,w=0,M=0;const y=x.matrixWorldInverse;for(let D=0,L=m.length;D<L;D++){const U=m[D];if(U.isSunLight){const I=s.sun[g];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(y),g++}else if(U.isDirectionalLight){const I=s.directional[v];I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),v++}else if(U.isSpotLight){const I=s.spot[T];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),T++}else if(U.isRectAreaLight){const I=s.rectArea[w];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),w++}else if(U.isPointLight){const I=s.point[S];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const I=s.hemi[M];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(y),M++}}}return{setup:d,setupView:p,state:s}}function Zx(o){const t=new n3(o),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){g.isLightProbeGrid?l.push(g):i.push(g)}function d(g){s.push(g)}function p(){t.setup(i),l.sort((g,v)=>g.priority-v.priority||g.id-v.id)}function m(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function i3(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Zx(o),t.set(l,[d])):c>=h.length?(d=new Zx(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const a3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r3=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],o3=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],Kx=new Ze,Dl=new tt,gp=new tt;function l3(o,t,i){let s=new Vl;const l=new oe,c=new oe,h=new hn,d=new vT,p=new xT,m={},x=i.maxTextureSize,g={[ur]:ei,[ei]:ur,[ji]:ji},v=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:a3,fragmentShader:s3}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new zi;T.setAttribute("position",new Ns(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new tn(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let y=this.type;this.render=function(P,E,C){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===mS&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hc);const Y=o.getRenderTarget(),B=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),q=o.state;q.setBlending(or),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const lt=y!==this.type;lt&&E.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(et=>et.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,et=P.length;G<et;G++){const Z=P[G],W=Z.shadow;if(W===void 0){he("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ft=W.getFrameExtents();l.multiply(ft),c.copy(W.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ft.x),l.x=c.x*ft.x,W.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ft.y),l.y=c.y*ft.y,W.mapSize.y=c.y));const it=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=it,W.map===null||lt===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ol){if(Z.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Kn(l.x,l.y,{format:cr,type:ni,minFilter:ui,magFilter:ui,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new bo(l.x,l.y,Ji),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=Ds,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Vn,W.map.depthTexture.magFilter=Vn}else Z.isPointLight?(W.map=new Lm(l.x),W.map.depthTexture=new kS(l.x,_a)):(W.map=new Kn(l.x,l.y),W.map.depthTexture=new bo(l.x,l.y,_a)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=Ds,this.type===Hc?(W.map.depthTexture.compareFunction=it?LS:US,W.map.depthTexture.minFilter=ui,W.map.depthTexture.magFilter=ui):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Vn,W.map.depthTexture.magFilter=Vn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==l.x||W.map.height!==l.y)&&W.map.setSize(l.x,l.y);const ct=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,C);const Tt=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:C.layers;for(let Vt=0;Vt<ct;Vt++){const ie=W.getCamera(Vt);if(Z.isPointLight){const N=W.camera,$=W.matrix,gt=Z.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),Dl.setFromMatrixPosition(Z.matrixWorld),N.position.copy(Dl),gp.copy(N.position),gp.add(r3[Vt]),N.up.copy(o3[Vt]),N.lookAt(gp),N.updateMatrixWorld(),$.makeTranslation(-Dl.x,-Dl.y,-Dl.z),Kx.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Kx,N.coordinateSystem,N.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,Vt),o.clear();else{Vt===0&&(o.setRenderTarget(W.map),o.clear());const N=W.getViewport(Vt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),q.viewport(h)}s=W.getFrustum(Vt),U(E,C,ie,Z,Tt,this.type)}W.isPointLightShadow!==!0&&this.type===Ol&&D(W,C),W.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(Y,B,V)};function D(P,E){const C=t.update(w);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null?P.mapPass=new Kn(l.x,l.y,{format:cr,type:ni}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value.set(P.map.width,P.map.height),v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(E,null,C,v,w,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value.set(P.map.width,P.map.height),S.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(E,null,C,S,w,null)}function L(P,E,C,Y){let B=null;const V=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)B=V;else if(B=C.isPointLight===!0?p:d,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const q=B.uuid,lt=E.uuid;let G=m[q];G===void 0&&(G={},m[q]=G);let et=G[lt];et===void 0&&(et=B.clone(),G[lt]=et,E.addEventListener("dispose",I)),B=et}if(B.visible=E.visible,B.wireframe=E.wireframe,Y===Ol?B.side=E.shadowSide!==null?E.shadowSide:E.side:B.side=E.shadowSide!==null?E.shadowSide:g[E.side],B.alphaMap=E.alphaMap,B.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,B.map=E.map,B.clipShadows=E.clipShadows,B.clippingPlanes=E.clippingPlanes,B.clipIntersection=E.clipIntersection,B.displacementMap=E.displacementMap,B.displacementScale=E.displacementScale,B.displacementBias=E.displacementBias,B.wireframeLinewidth=E.wireframeLinewidth,B.linewidth=E.linewidth,C.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const q=o.properties.get(B);q.light=C}return B}function U(P,E,C,Y,B,V){if(P.visible===!1)return;if(P.layers.test(B)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===Ol)&&(!P.frustumCulled||P.intersectsFrustum(s))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const G=t.update(P),et=P.material;if(Array.isArray(et)){const Z=G.groups;for(let W=0,ft=Z.length;W<ft;W++){const it=Z[W],ct=et[it.materialIndex];if(ct&&ct.visible){const Tt=L(P,ct,Y,V);P.onBeforeShadow(o,P,E,C,G,Tt,it),o.renderBufferDirect(C,null,G,Tt,P,it),P.onAfterShadow(o,P,E,C,G,Tt,it)}}}else if(et.visible){const Z=L(P,et,Y,V);P.onBeforeShadow(o,P,E,C,G,Z,null),o.renderBufferDirect(C,null,G,Z,P,null),P.onAfterShadow(o,P,E,C,G,Z,null)}}const lt=P.children;for(let G=0,et=lt.length;G<et;G++)U(lt[G],E,C,Y,B,V)}function I(P){P.target.removeEventListener("dispose",I);for(const C in m){const Y=m[C],B=P.target.uuid;B in Y&&(Y[B].dispose(),delete Y[B])}}}function u3(o,t){function i(){let H=!1;const _t=new hn;let mt=null;const Lt=new hn(0,0,0,0);return{setMask:function(Ct){mt!==Ct&&!H&&(o.colorMask(Ct,Ct,Ct,Ct),mt=Ct)},setLocked:function(Ct){H=Ct},setClear:function(Ct,Ot,ne,re,At){At===!0&&(Ct*=re,Ot*=re,ne*=re),_t.set(Ct,Ot,ne,re),Lt.equals(_t)===!1&&(o.clearColor(Ct,Ot,ne,re),Lt.copy(_t))},reset:function(){H=!1,mt=null,Lt.set(-1,0,0,0)}}}function s(){let H=!1,_t=!1,mt=null,Lt=null,Ct=null;return{setReversed:function(Ot){if(_t!==Ot){const ne=t.get("EXT_clip_control");Ot?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),_t=Ot;const re=Ct;Ct=null,this.setClear(re)}},getReversed:function(){return _t},setTest:function(Ot){Ot?Mt(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(Ot){mt!==Ot&&!H&&(o.depthMask(Ot),mt=Ot)},setFunc:function(Ot){if(_t&&(Ot=IE[Ot]),Lt!==Ot){switch(Ot){case yp:o.depthFunc(o.NEVER);break;case Ep:o.depthFunc(o.ALWAYS);break;case Tp:o.depthFunc(o.LESS);break;case Bl:o.depthFunc(o.LEQUAL);break;case bp:o.depthFunc(o.EQUAL);break;case Ap:o.depthFunc(o.GEQUAL);break;case Rp:o.depthFunc(o.GREATER);break;case Cp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=Ot}},setLocked:function(Ot){H=Ot},setClear:function(Ot){Ct!==Ot&&(Ct=Ot,_t&&(Ot=1-Ot),o.clearDepth(Ot))},reset:function(){H=!1,mt=null,Lt=null,Ct=null,_t=!1}}}function l(){let H=!1,_t=null,mt=null,Lt=null,Ct=null,Ot=null,ne=null,re=null,At=null;return{setTest:function(Kt){H||(Kt?Mt(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(Kt){_t!==Kt&&!H&&(o.stencilMask(Kt),_t=Kt)},setFunc:function(Kt,_e,Xt){(mt!==Kt||Lt!==_e||Ct!==Xt)&&(o.stencilFunc(Kt,_e,Xt),mt=Kt,Lt=_e,Ct=Xt)},setOp:function(Kt,_e,Xt){(Ot!==Kt||ne!==_e||re!==Xt)&&(o.stencilOp(Kt,_e,Xt),Ot=Kt,ne=_e,re=Xt)},setLocked:function(Kt){H=Kt},setClear:function(Kt){At!==Kt&&(o.clearStencil(Kt),At=Kt)},reset:function(){H=!1,_t=null,mt=null,Lt=null,Ct=null,Ot=null,ne=null,re=null,At=null}}}const c=new i,h=new s,d=new l;let p={};const m=new WeakMap;let x={},g={},v={},S=new WeakMap,T=[],w=null,M=!1,y=null,D=null,L=null,U=null,I=null,P=null,E=null,C=new me(0,0,0),Y=0,B=!1,V=null,q=null,lt=null,G=null,et=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ft=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(it)[1]),W=ft>=1):it.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),W=ft>=2);let ct=null,Tt={};const Vt=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),N=new hn().fromArray(Vt),$=new hn().fromArray(ie);function gt(H,_t,mt,Lt){const Ct=new Uint8Array(4),Ot=o.createTexture();o.bindTexture(H,Ot),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<mt;ne++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(_t,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(_t+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Ot}const dt={};dt[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(Bl),Zt(!1),qt(Qv),Mt(o.CULL_FACE),Wt(or);function Mt(H){x[H]!==!0&&(o.enable(H),x[H]=!0)}function Pt(H){x[H]!==!1&&(o.disable(H),x[H]=!1)}function Jt(H,_t){return v[H]!==_t?(o.bindFramebuffer(H,_t),v[H]=_t,H===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=_t),H===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=_t),!0):!1}function Et(H,_t){let mt=T,Lt=!1;if(H){mt=S.get(_t),mt===void 0&&(mt=[],S.set(_t,mt));const Ct=H.textures;if(mt.length!==Ct.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let Ot=0,ne=Ct.length;Ot<ne;Ot++)mt[Ot]=o.COLOR_ATTACHMENT0+Ot;mt.length=Ct.length,Lt=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(mt)}function Bt(H){return w!==H?(o.useProgram(H),w=H,!0):!1}const ge={[Mo]:o.FUNC_ADD,[aE]:o.FUNC_SUBTRACT,[sE]:o.FUNC_REVERSE_SUBTRACT};ge[rE]=o.MIN,ge[oE]=o.MAX;const bt={[lE]:o.ZERO,[uE]:o.ONE,[cE]:o.SRC_COLOR,[gS]:o.SRC_ALPHA,[gE]:o.SRC_ALPHA_SATURATE,[pE]:o.DST_COLOR,[hE]:o.DST_ALPHA,[fE]:o.ONE_MINUS_SRC_COLOR,[_S]:o.ONE_MINUS_SRC_ALPHA,[mE]:o.ONE_MINUS_DST_COLOR,[dE]:o.ONE_MINUS_DST_ALPHA,[_E]:o.CONSTANT_COLOR,[vE]:o.ONE_MINUS_CONSTANT_COLOR,[xE]:o.CONSTANT_ALPHA,[SE]:o.ONE_MINUS_CONSTANT_ALPHA};function Wt(H,_t,mt,Lt,Ct,Ot,ne,re,At,Kt){if(H===or){M===!0&&(Pt(o.BLEND),M=!1);return}if(M===!1&&(Mt(o.BLEND),M=!0),H!==iE){if(H!==y||Kt!==B){if((D!==Mo||I!==Mo)&&(o.blendEquation(o.FUNC_ADD),D=Mo,I=Mo),Kt)switch(H){case Il:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mp:o.blendFunc(o.ONE,o.ONE);break;case Jv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $v:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",H);break}else switch(H){case Il:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Jv:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $v:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",H);break}L=null,U=null,P=null,E=null,C.set(0,0,0),Y=0,y=H,B=Kt}return}Ct=Ct||_t,Ot=Ot||mt,ne=ne||Lt,(_t!==D||Ct!==I)&&(o.blendEquationSeparate(ge[_t],ge[Ct]),D=_t,I=Ct),(mt!==L||Lt!==U||Ot!==P||ne!==E)&&(o.blendFuncSeparate(bt[mt],bt[Lt],bt[Ot],bt[ne]),L=mt,U=Lt,P=Ot,E=ne),(re.equals(C)===!1||At!==Y)&&(o.blendColor(re.r,re.g,re.b,At),C.copy(re),Y=At),y=H,B=!1}function ee(H,_t){H.side===ji?Pt(o.CULL_FACE):Mt(o.CULL_FACE);let mt=H.side===ei;_t&&(mt=!mt),Zt(mt),H.blending===Il&&H.transparent===!1?Wt(or):Wt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const Lt=H.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(H){V!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),V=H)}function qt(H){H!==eE?(Mt(o.CULL_FACE),H!==q&&(H===Qv?o.cullFace(o.BACK):H===nE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),q=H}function Se(H){H!==lt&&(W&&o.lineWidth(H),lt=H)}function Ge(H,_t,mt){H?(Mt(o.POLYGON_OFFSET_FILL),(G!==_t||et!==mt)&&(G=_t,et=mt,h.getReversed()&&(_t=-_t,mt=-mt),o.polygonOffset(_t,mt))):Pt(o.POLYGON_OFFSET_FILL)}function on(H){H?Mt(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function Ln(H){H===void 0&&(H=o.TEXTURE0+Z-1),ct!==H&&(o.activeTexture(H),ct=H)}function On(H,_t,mt){mt===void 0&&(ct===null?mt=o.TEXTURE0+Z-1:mt=ct);let Lt=Tt[mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Tt[mt]=Lt),(Lt.type!==H||Lt.texture!==_t)&&(ct!==mt&&(o.activeTexture(mt),ct=mt),o.bindTexture(H,_t||dt[H]),Lt.type=H,Lt.texture=_t)}function K(){const H=Tt[ct];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Xn(){try{o.compressedTexImage2D(...arguments)}catch(H){Fe("WebGLState:",H)}}function Ve(){try{o.compressedTexImage3D(...arguments)}catch(H){Fe("WebGLState:",H)}}function Ke(){try{o.texSubImage2D(...arguments)}catch(H){Fe("WebGLState:",H)}}function Ft(){try{o.texSubImage3D(...arguments)}catch(H){Fe("WebGLState:",H)}}function je(){try{o.compressedTexSubImage2D(...arguments)}catch(H){Fe("WebGLState:",H)}}function se(){try{o.compressedTexSubImage3D(...arguments)}catch(H){Fe("WebGLState:",H)}}function ce(){try{o.texStorage2D(...arguments)}catch(H){Fe("WebGLState:",H)}}function O(){try{o.texStorage3D(...arguments)}catch(H){Fe("WebGLState:",H)}}function b(){try{o.texImage2D(...arguments)}catch(H){Fe("WebGLState:",H)}}function at(){try{o.texImage3D(...arguments)}catch(H){Fe("WebGLState:",H)}}function Rt(H){return g[H]!==void 0?g[H]:o.getParameter(H)}function yt(H,_t){g[H]!==_t&&(o.pixelStorei(H,_t),g[H]=_t)}function Dt(H){N.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),N.copy(H))}function It(H){$.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),$.copy(H))}function pt(H,_t){let mt=m.get(_t);mt===void 0&&(mt=new WeakMap,m.set(_t,mt));let Lt=mt.get(H);Lt===void 0&&(Lt=o.getUniformBlockIndex(_t,H.name),o.uniformBlockBinding(_t,Lt,Lt),mt.set(H,Lt))}function vt(H,_t,mt){const Ct=m.get(_t).get(H);p[Ct]!==mt&&(o.bindBufferBase(o.UNIFORM_BUFFER,Ct,mt),p[Ct]=mt)}function Ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},g={},ct=null,Tt={},v={},p={},S=new WeakMap,T=[],w=null,M=!1,y=null,D=null,L=null,U=null,I=null,P=null,E=null,C=new me(0,0,0),Y=0,B=!1,V=null,q=null,lt=null,G=null,et=null,N.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Mt,disable:Pt,bindFramebuffer:Jt,drawBuffers:Et,useProgram:Bt,setBlending:Wt,setMaterial:ee,setFlipSided:Zt,setCullFace:qt,setLineWidth:Se,setPolygonOffset:Ge,setScissorTest:on,activeTexture:Ln,bindTexture:On,unbindTexture:K,compressedTexImage2D:Xn,compressedTexImage3D:Ve,texImage2D:b,texImage3D:at,pixelStorei:yt,getParameter:Rt,updateUBOMapping:pt,uniformBlockBinding:vt,texStorage2D:ce,texStorage3D:O,texSubImage2D:Ke,texSubImage3D:Ft,compressedTexSubImage2D:je,compressedTexSubImage3D:se,scissor:Dt,viewport:It,reset:Ut}}function c3(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new oe,x=new WeakMap,g=new Set;let v;const S=new WeakMap,T=new Set,w=new FinalizationRegistry(O=>T.delete(O));let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,b){return M?new OffscreenCanvas(O,b):ef("canvas")}function D(O,b,at){let Rt=1;const yt=ce(O);if((yt.width>at||yt.height>at)&&(Rt=at/Math.max(yt.width,yt.height)),Rt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Dt=Math.floor(Rt*yt.width),It=Math.floor(Rt*yt.height);v===void 0&&(v=y(Dt,It));const pt=b?y(Dt,It):v;return pt.width=Dt,pt.height=It,pt.getContext("2d").drawImage(O,0,0,Dt,It),he("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Dt+"x"+It+")."),pt}else return"data"in O&&he("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),O;return O}function L(O){return O.generateMipmaps}function U(O){o.generateMipmap(O)}function I(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,b,at,Rt,yt,Dt=!1){if(O!==null){if(o[O]!==void 0)return o[O];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let It;Rt&&(It=t.get("EXT_texture_norm16"),It||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=b;if(b===o.RED&&(at===o.FLOAT&&(pt=o.R32F),at===o.HALF_FLOAT&&(pt=o.R16F),at===o.UNSIGNED_BYTE&&(pt=o.R8),at===o.UNSIGNED_SHORT&&It&&(pt=It.R16_EXT),at===o.SHORT&&It&&(pt=It.R16_SNORM_EXT)),b===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.R8UI),at===o.UNSIGNED_SHORT&&(pt=o.R16UI),at===o.UNSIGNED_INT&&(pt=o.R32UI),at===o.BYTE&&(pt=o.R8I),at===o.SHORT&&(pt=o.R16I),at===o.INT&&(pt=o.R32I)),b===o.RG&&(at===o.FLOAT&&(pt=o.RG32F),at===o.HALF_FLOAT&&(pt=o.RG16F),at===o.UNSIGNED_BYTE&&(pt=o.RG8),at===o.UNSIGNED_SHORT&&It&&(pt=It.RG16_EXT),at===o.SHORT&&It&&(pt=It.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.RG8UI),at===o.UNSIGNED_SHORT&&(pt=o.RG16UI),at===o.UNSIGNED_INT&&(pt=o.RG32UI),at===o.BYTE&&(pt=o.RG8I),at===o.SHORT&&(pt=o.RG16I),at===o.INT&&(pt=o.RG32I)),b===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),at===o.UNSIGNED_INT&&(pt=o.RGB32UI),at===o.BYTE&&(pt=o.RGB8I),at===o.SHORT&&(pt=o.RGB16I),at===o.INT&&(pt=o.RGB32I)),b===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),at===o.UNSIGNED_INT&&(pt=o.RGBA32UI),at===o.BYTE&&(pt=o.RGBA8I),at===o.SHORT&&(pt=o.RGBA16I),at===o.INT&&(pt=o.RGBA32I)),b===o.RGB&&(at===o.UNSIGNED_SHORT&&It&&(pt=It.RGB16_EXT),at===o.SHORT&&It&&(pt=It.RGB16_SNORM_EXT),at===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),b===o.RGBA){const vt=Dt?tf:Le.getTransfer(yt);at===o.FLOAT&&(pt=o.RGBA32F),at===o.HALF_FLOAT&&(pt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(pt=vt===Ye?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT&&It&&(pt=It.RGBA16_EXT),at===o.SHORT&&It&&(pt=It.RGBA16_SNORM_EXT),at===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function E(O,b){let at;return O?b===null||b===_a||b===To?at=o.DEPTH24_STENCIL8:b===Ji?at=o.DEPTH32F_STENCIL8:b===Hl&&(at=o.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_a||b===To?at=o.DEPTH_COMPONENT24:b===Ji?at=o.DEPTH_COMPONENT32F:b===Hl&&(at=o.DEPTH_COMPONENT16),at}function C(O,b){return L(O)===!0||O.isFramebufferTexture&&O.minFilter!==Vn&&O.minFilter!==ui?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function Y(O){const b=new WeakRef(O);s.get(O).__ref=b,T.add(b),w.register(O,b,b)}function B(O){const b=s.get(O).__ref;b!==void 0&&(T.delete(b),w.unregister(b))}function V(O){lt(O.target)}function q(O){G(O.target)}function lt(O){O.removeEventListener("dispose",V),B(O),Z(O),O.isVideoTexture&&x.delete(O),O.isHTMLTexture&&g.delete(O)}function G(O){O.removeEventListener("dispose",q),B(O),ft(O)}function et(){for(const O of T){const b=O.deref();b!==void 0&&(b.isRenderTarget===!0?G(b):lt(b))}T.clear(),g.clear()}function Z(O){const b=s.get(O);if(b.__webglInit===void 0)return;const at=O.source,Rt=S.get(at);if(Rt){const yt=Rt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&W(O),Object.keys(Rt).length===0&&S.delete(at)}s.remove(O)}function W(O){const b=s.get(O);o.deleteTexture(b.__webglTexture);const at=O.source,Rt=S.get(at);delete Rt[b.__cacheKey],h.memory.textures--}function ft(O){const b=s.get(O);b.__depthDisposeCallback&&b.__depthDisposeCallback();const at=O.depthTexture;if(at&&at.renderTarget===O&&lt(at),O.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(b.__webglFramebuffer[yt]))for(let Dt=0;Dt<b.__webglFramebuffer[yt].length;Dt++)o.deleteFramebuffer(b.__webglFramebuffer[yt][Dt]);else o.deleteFramebuffer(b.__webglFramebuffer[yt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[yt])}else{if(Array.isArray(b.__webglFramebuffer))for(let yt=0;yt<b.__webglFramebuffer.length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[yt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let yt=0;yt<b.__webglColorRenderbuffer.length;yt++)b.__webglColorRenderbuffer[yt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[yt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Rt=O.textures;for(let yt=0,Dt=Rt.length;yt<Dt;yt++){const It=s.get(Rt[yt]);It.__webglTexture&&(o.deleteTexture(It.__webglTexture),h.memory.textures--),s.remove(Rt[yt])}s.remove(O)}let it=0;function ct(){it=0}function Tt(){return it}function Vt(O){it=O}function ie(){const O=it;return O>=l.maxTextures&&he("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),it+=1,O}function N(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.mipmapsAutoUpdate),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function $(O,b){const at=s.get(O);if(O.isVideoTexture&&je(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&at.__version!==O.version){const Rt=O.image;if(Rt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(Rt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(at,O,b);return}}else O.isExternalTexture&&(at.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+b)}function gt(O,b){const at=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){ee(at,O,b);return}else O.isExternalTexture&&(at.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+b)}function dt(O,b){const at=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){ee(at,O,b);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+b)}function Mt(O,b){const at=s.get(O);if(O.version>0&&at.__version!==O.version){Zt(at,O,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+b)}const Pt={[Kc]:o.REPEAT,[Ga]:o.CLAMP_TO_EDGE,[wp]:o.MIRRORED_REPEAT},Jt={[Vn]:o.NEAREST,[EE]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[ui]:o.LINEAR,[Gd]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR},Et={[RE]:o.NEVER,[OS]:o.ALWAYS,[CE]:o.LESS,[US]:o.LEQUAL,[wE]:o.EQUAL,[LS]:o.GEQUAL,[NE]:o.GREATER,[DE]:o.NOTEQUAL};function Bt(O,b){if(b.type===Ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ui||b.magFilter===Gd||b.magFilter===pc||b.magFilter===Cs||b.minFilter===ui||b.minFilter===Gd||b.minFilter===pc||b.minFilter===Cs)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Pt[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Pt[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Pt[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Jt[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Jt[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vn||b.minFilter!==pc&&b.minFilter!==Cs||b.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ge(O,b){let at=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",V),Y(b));const Rt=b.source;let yt=S.get(Rt);yt===void 0&&(yt={},S.set(Rt,yt));const Dt=N(b);if(Dt!==O.__cacheKey){yt[Dt]===void 0&&(yt[Dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),yt[Dt].usedTimes++;const It=yt[O.__cacheKey];It!==void 0&&(yt[O.__cacheKey].usedTimes--,It.usedTimes===0&&W(b)),O.__cacheKey=Dt,O.__webglTexture=yt[Dt].texture}return at}function bt(O,b,at){return Math.floor(Math.floor(O/at)/b)}function Wt(O,b,at,Rt){const Dt=O.updateRanges;if(Dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,at,Rt,b.data);else{Dt.sort((H,_t)=>H.start-_t.start);let It=0;for(let H=1;H<Dt.length;H++){const _t=Dt[It],mt=Dt[H],Lt=_t.start+_t.count,Ct=bt(mt.start,b.width,4),Ot=bt(_t.start,b.width,4);mt.start<=Lt+1&&Ct===Ot&&bt(mt.start+mt.count-1,b.width,4)===Ct?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++It,Dt[It]=mt)}Dt.length=It+1;const pt=i.getParameter(o.UNPACK_ROW_LENGTH),vt=i.getParameter(o.UNPACK_SKIP_PIXELS),Ut=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let H=0,_t=Dt.length;H<_t;H++){const mt=Dt[H],Lt=Math.floor(mt.start/4),Ct=Math.ceil(mt.count/4),Ot=Lt%b.width,ne=Math.floor(Lt/b.width),re=Ct,At=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(o.UNPACK_SKIP_ROWS,ne),i.texSubImage2D(o.TEXTURE_2D,0,Ot,ne,re,At,at,Rt,b.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,pt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ut)}}function ee(O,b,at){let Rt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Rt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Rt=o.TEXTURE_3D);const yt=ge(O,b),Dt=b.source;i.bindTexture(Rt,O.__webglTexture,o.TEXTURE0+at);const It=s.get(Dt);if(Dt.version!==It.__version||yt===!0){if(i.activeTexture(o.TEXTURE0+at),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const At=Le.getPrimaries(Le.workingColorSpace),Kt=b.colorSpace===Rs?null:Le.getPrimaries(b.colorSpace),_e=b.colorSpace===Rs||At===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let vt=D(b.image,!1,l.maxTextureSize);vt=se(b,vt);const Ut=c.convert(b.format,b.colorSpace),H=c.convert(b.type);let _t=P(b.internalFormat,Ut,H,b.normalized,b.colorSpace,b.isVideoTexture);Bt(Rt,b);let mt;const Lt=b.mipmaps,Ct=b.isVideoTexture!==!0,Ot=It.__version===void 0||yt===!0,ne=Dt.dataReady,re=C(b,vt);if(b.isDepthTexture)_t=E(b.format===ws,b.type),Ot&&(Ct?i.texStorage2D(o.TEXTURE_2D,1,_t,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,_t,vt.width,vt.height,0,Ut,H,null));else if(b.isDataTexture)if(Lt.length>0){Ct&&Ot&&i.texStorage2D(o.TEXTURE_2D,re,_t,Lt[0].width,Lt[0].height);for(let At=0,Kt=Lt.length;At<Kt;At++)mt=Lt[At],Ct?ne&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,mt.width,mt.height,Ut,H,mt.data):i.texImage2D(o.TEXTURE_2D,At,_t,mt.width,mt.height,0,Ut,H,mt.data);b.generateMipmaps=!1}else Ct?(Ot&&i.texStorage2D(o.TEXTURE_2D,re,_t,vt.width,vt.height),ne&&Wt(b,vt,Ut,H)):i.texImage2D(o.TEXTURE_2D,0,_t,vt.width,vt.height,0,Ut,H,vt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ct&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,re,_t,Lt[0].width,Lt[0].height,vt.depth);for(let At=0,Kt=Lt.length;At<Kt;At++)if(mt=Lt[At],b.format!==ga)if(Ut!==null)if(Ct){if(ne)if(b.layerUpdates.size>0){const _e=Cx(mt.width,mt.height,b.format,b.type);for(const Xt of b.layerUpdates){const Ie=mt.data.subarray(Xt*_e/mt.data.BYTES_PER_ELEMENT,(Xt+1)*_e/mt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,Xt,mt.width,mt.height,1,Ut,Ie)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,mt.width,mt.height,vt.depth,Ut,mt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,_t,mt.width,mt.height,vt.depth,0,mt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?ne&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,mt.width,mt.height,vt.depth,Ut,H,mt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,_t,mt.width,mt.height,vt.depth,0,Ut,H,mt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ct&&Ot&&i.texStorage2D(o.TEXTURE_2D,re,_t,Lt[0].width,Lt[0].height);for(let At=0,Kt=Lt.length;At<Kt;At++)mt=Lt[At],b.format!==ga?Ut!==null?Ct?ne&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,mt.width,mt.height,Ut,mt.data):i.compressedTexImage2D(o.TEXTURE_2D,At,_t,mt.width,mt.height,0,mt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?ne&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,mt.width,mt.height,Ut,H,mt.data):i.texImage2D(o.TEXTURE_2D,At,_t,mt.width,mt.height,0,Ut,H,mt.data)}else if(b.isDataArrayTexture)if(Ct){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,re,_t,vt.width,vt.height,vt.depth),ne)if(b.layerUpdates.size>0){const At=Cx(vt.width,vt.height,b.format,b.type);for(const Kt of b.layerUpdates){const _e=vt.data.subarray(Kt*At/vt.data.BYTES_PER_ELEMENT,(Kt+1)*At/vt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Kt,vt.width,vt.height,1,Ut,H,_e)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ut,H,vt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,_t,vt.width,vt.height,vt.depth,0,Ut,H,vt.data);else if(b.isData3DTexture)Ct?(Ot&&i.texStorage3D(o.TEXTURE_3D,re,_t,vt.width,vt.height,vt.depth),ne&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ut,H,vt.data)):i.texImage3D(o.TEXTURE_3D,0,_t,vt.width,vt.height,vt.depth,0,Ut,H,vt.data);else if(b.isFramebufferTexture){if(Ot)if(Ct)i.texStorage2D(o.TEXTURE_2D,re,_t,vt.width,vt.height);else{let At=vt.width,Kt=vt.height;for(let _e=0;_e<re;_e++)i.texImage2D(o.TEXTURE_2D,_e,_t,At,Kt,0,Ut,H,null),At>>=1,Kt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const At=o.canvas;if(At.hasAttribute("layoutsubtree")||At.setAttribute("layoutsubtree","true"),vt.parentNode!==At){At.appendChild(vt),g.add(b),At.onpaint=Kt=>{const _e=Kt.changedElements;for(const Xt of g)_e.includes(Xt.image)&&(Xt.needsUpdate=!0)},At.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,vt);else{const _e=o.RGBA,Xt=o.RGBA,Ie=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,_e,Xt,Ie,vt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ct&&Ot){const At=ce(Lt[0]);i.texStorage2D(o.TEXTURE_2D,re,_t,At.width,At.height)}for(let At=0,Kt=Lt.length;At<Kt;At++)mt=Lt[At],Ct?ne&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ut,H,mt):i.texImage2D(o.TEXTURE_2D,At,_t,Ut,H,mt);b.generateMipmaps=!1}else if(Ct){if(Ot){const At=ce(vt);i.texStorage2D(o.TEXTURE_2D,re,_t,At.width,At.height)}ne&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,H,vt)}else i.texImage2D(o.TEXTURE_2D,0,_t,Ut,H,vt);L(b)&&b.mipmapsAutoUpdate===!0&&U(Rt),It.__version=Dt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Zt(O,b,at){if(b.image.length!==6)return;const Rt=ge(O,b),yt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+at);const Dt=s.get(yt);if(yt.version!==Dt.__version||Rt===!0){i.activeTexture(o.TEXTURE0+at);const It=Le.getPrimaries(Le.workingColorSpace),pt=b.colorSpace===Rs?null:Le.getPrimaries(b.colorSpace),vt=b.colorSpace===Rs||It===pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,H=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let Xt=0;Xt<6;Xt++)!Ut&&!H?_t[Xt]=D(b.image[Xt],!0,l.maxCubemapSize):_t[Xt]=H?b.image[Xt].image:b.image[Xt],_t[Xt]=se(b,_t[Xt]);const mt=_t[0],Lt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type);let Ot=P(b.internalFormat,Lt,Ct,b.normalized,b.colorSpace);const ne=b.isVideoTexture!==!0,re=Dt.__version===void 0||Rt===!0,At=yt.dataReady;let Kt=C(b,mt);Bt(o.TEXTURE_CUBE_MAP,b);let _e;if(b.isDepthTexture){if(Ot=E(b.format===ws,b.type),re)if(ne)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,Ot,mt.width,mt.height);else for(let Xt=0;Xt<6;Xt++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ot,mt.width,mt.height,0,Lt,Ct,null)}else if(Ut){ne&&re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Kt,Ot,mt.width,mt.height);for(let Xt=0;Xt<6;Xt++){_e=_t[Xt].mipmaps;for(let Ie=0;Ie<_e.length;Ie++){const ln=_e[Ie];b.format!==ga?Lt!==null?ne?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie,0,0,ln.width,ln.height,Lt,ln.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie,Ot,ln.width,ln.height,0,ln.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie,0,0,ln.width,ln.height,Lt,Ct,ln.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie,Ot,ln.width,ln.height,0,Lt,Ct,ln.data)}}}else{if(_e=b.mipmaps,ne&&re){_e.length>0&&Kt++;const Xt=ce(_t[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Kt,Ot,Xt.width,Xt.height)}for(let Xt=0;Xt<6;Xt++)if(H){ne?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,0,0,_t[Xt].width,_t[Xt].height,Lt,Ct,_t[Xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ot,_t[Xt].width,_t[Xt].height,0,Lt,Ct,_t[Xt].data);for(let Ie=0;Ie<_e.length;Ie++){const ci=_e[Ie].image[Xt].image;ne?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie+1,0,0,ci.width,ci.height,Lt,Ct,ci.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie+1,Ot,ci.width,ci.height,0,Lt,Ct,ci.data)}}else{ne?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,0,0,Lt,Ct,_t[Xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ot,Lt,Ct,_t[Xt]);for(let Ie=0;Ie<_e.length;Ie++){const ln=_e[Ie];ne?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie+1,0,0,Lt,Ct,ln.image[Xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,Ie+1,Ot,Lt,Ct,ln.image[Xt])}}}L(b)&&b.mipmapsAutoUpdate===!0&&U(o.TEXTURE_CUBE_MAP),Dt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function qt(O,b,at,Rt,yt,Dt){const It=c.convert(at.format,at.colorSpace),pt=c.convert(at.type),vt=P(at.internalFormat,It,pt,at.normalized,at.colorSpace),Ut=s.get(b),H=s.get(at);if(H.__renderTarget=b,!Ut.__hasExternalTextures){const _t=Math.max(1,b.width>>Dt),mt=Math.max(1,b.height>>Dt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,Dt,vt,_t,mt,b.depth,0,It,pt,null):i.texImage2D(yt,Dt,vt,_t,mt,0,It,pt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Rt,yt,H.__webglTexture,0,Ke(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Rt,yt,H.__webglTexture,Dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Se(O,b,at){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const Rt=b.depthTexture,yt=Rt&&Rt.isDepthTexture?Rt.type:null,Dt=E(b.stencilBuffer,yt),It=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke(b),Dt,b.width,b.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke(b),Dt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,O)}else{const Rt=b.textures;for(let yt=0;yt<Rt.length;yt++){const Dt=Rt[yt],It=c.convert(Dt.format,Dt.colorSpace),pt=c.convert(Dt.type),vt=P(Dt.internalFormat,It,pt,Dt.normalized,Dt.colorSpace);Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke(b),vt,b.width,b.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke(b),vt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,vt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(O,b,at){const Rt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const yt=s.get(b.depthTexture);yt.__renderTarget=b;const Dt=Rt?b.depthTexture.image[0]:b.depthTexture.image;(!yt.__webglTexture||Dt.width!==b.width||Dt.height!==b.height)&&(Dt.width=b.width,Dt.height=b.height,b.depthTexture.needsUpdate=!0),Rt?Mt(b.depthTexture,0):$(b.depthTexture,0);const It=yt.__webglTexture,pt=Ke(b),vt=Rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+at:o.TEXTURE_2D,Ut=b.depthTexture.format===ws?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ds)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ut,vt,It,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,Ut,vt,It,0);else if(b.depthTexture.format===ws)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ut,vt,It,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,Ut,vt,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(O){const b=s.get(O),at=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const Rt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Rt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Rt.removeEventListener("dispose",yt)};Rt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=Rt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(at)for(let Rt=0;Rt<6;Rt++)Ge(b.__webglFramebuffer[Rt],O,Rt);else O.texture.mipmaps.length>0?Ge(b.__webglFramebuffer[0],O,0):Ge(b.__webglFramebuffer,O,0);else if(at){b.__webglDepthbuffer=[];for(let Rt=0;Rt<6;Rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[Rt]),b.__webglDepthbuffer[Rt]===void 0)b.__webglDepthbuffer[Rt]=o.createRenderbuffer(),Se(b.__webglDepthbuffer[Rt],O,!1);else{const yt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=b.__webglDepthbuffer[Rt];o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,Dt)}}else if(O.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Se(b.__webglDepthbuffer,O,!1);else{const yt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,Dt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ln(O,b,at){const Rt=s.get(O);b!==void 0&&qt(Rt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&on(O)}function On(O){const b=O.texture,at=s.get(O),Rt=s.get(b);O.addEventListener("dispose",q),Y(O);const yt=O.textures,Dt=O.isWebGLCubeRenderTarget===!0,It=yt.length>1;if(It||(Rt.__webglTexture===void 0&&(Rt.__webglTexture=o.createTexture()),Rt.__version=b.version,h.memory.textures++),Dt){at.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps.length>0){at.__webglFramebuffer[pt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)at.__webglFramebuffer[pt][vt]=o.createFramebuffer()}else at.__webglFramebuffer[pt]=o.createFramebuffer()}else{if(b.mipmaps.length>0){at.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)at.__webglFramebuffer[pt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(It)for(let pt=0,vt=yt.length;pt<vt;pt++){const Ut=s.get(yt[pt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Ft(O)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let pt=0;pt<yt.length;pt++){const vt=yt[pt];at.__webglColorRenderbuffer[pt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[pt]);const Ut=c.convert(vt.format,vt.colorSpace),H=c.convert(vt.type),_t=P(vt.internalFormat,Ut,H,vt.normalized,vt.colorSpace,O.isXRRenderTarget===!0),mt=Ke(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,_t,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pt,o.RENDERBUFFER,at.__webglColorRenderbuffer[pt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Se(at.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Dt){i.bindTexture(o.TEXTURE_CUBE_MAP,Rt.__webglTexture),Bt(o.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)qt(at.__webglFramebuffer[pt][vt],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else qt(at.__webglFramebuffer[pt],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);L(b)?U(o.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),i.unbindTexture()}else if(It){for(let pt=0,vt=yt.length;pt<vt;pt++){const Ut=yt[pt],H=s.get(Ut);let _t=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(_t=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,H.__webglTexture),Bt(_t,Ut),qt(at.__webglFramebuffer,O,Ut,o.COLOR_ATTACHMENT0+pt,_t,0),L(Ut)&&U(_t)}i.unbindTexture()}else{let pt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(pt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(pt,Rt.__webglTexture),Bt(pt,b),b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)qt(at.__webglFramebuffer[vt],O,b,o.COLOR_ATTACHMENT0,pt,vt);else qt(at.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,pt,0);L(b)?U(pt):b.mipmaps.length>0&&o.texParameteri(pt,o.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),i.unbindTexture()}O.depthBuffer&&on(O)}function K(O){const b=O.textures;for(let at=0,Rt=b.length;at<Rt;at++){const yt=b[at];if(L(yt)&&yt.mipmapsAutoUpdate===!0){const Dt=I(O),It=s.get(yt).__webglTexture;i.bindTexture(Dt,It),U(Dt),i.unbindTexture()}}}const Xn=[];function Ve(O){if(O.samples>0){if(Ft(O)===!1){const b=O.textures,at=O.width,Rt=O.height;let yt=o.COLOR_BUFFER_BIT;const Dt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=s.get(O),pt=b.length>1;if(pt)for(let Ut=0;Ut<b.length;Ut++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ut=0;Ut<b.length;Ut++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),pt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Ut]);const H=s.get(b[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,H,0)}o.blitFramebuffer(0,0,at,Rt,0,0,at,Rt,yt,o.NEAREST),p===!0&&(Xn.length=0,Xn.push(o.COLOR_ATTACHMENT0+Ut),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Xn.push(Dt),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Xn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),pt)for(let Ut=0;Ut<b.length;Ut++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,It.__webglColorRenderbuffer[Ut]);const H=s.get(b[Ut]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,H,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ke(O){return Math.min(l.maxSamples,O.samples)}function Ft(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function je(O){const b=h.render.frame;x.get(O)!==b&&(x.set(O,b),O.update())}function se(O,b){const at=O.colorSpace,Rt=O.format,yt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||at!==$c&&at!==Rs&&(Le.getTransfer(at)===Ye?(Rt!==ga||yt!==yi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",at)),b}function ce(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=ie,this.resetTextureUnits=ct,this.getTextureUnits=Tt,this.setTextureUnits=Vt,this.setTexture2D=$,this.setTexture2DArray=gt,this.setTexture3D=dt,this.setTextureCube=Mt,this.rebindTextures=Ln,this.setupRenderTarget=On,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=qt,this.useMultisampledRTT=Ft,this.dispose=et}function f3(o,t){function i(s,l=Rs){let c;const h=Le.getTransfer(l);if(s===yi)return o.UNSIGNED_BYTE;if(s===_m)return o.UNSIGNED_SHORT_4_4_4_4;if(s===vm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===CS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===wS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===AS)return o.BYTE;if(s===RS)return o.SHORT;if(s===Hl)return o.UNSIGNED_SHORT;if(s===gm)return o.INT;if(s===_a)return o.UNSIGNED_INT;if(s===Ji)return o.FLOAT;if(s===ni)return o.HALF_FLOAT;if(s===NS)return o.ALPHA;if(s===DS)return o.RGB;if(s===ga)return o.RGBA;if(s===Ds)return o.DEPTH_COMPONENT;if(s===ws)return o.DEPTH_STENCIL;if(s===xm)return o.RED;if(s===Sm)return o.RED_INTEGER;if(s===cr)return o.RG;if(s===Mm)return o.RG_INTEGER;if(s===ym)return o.RGBA_INTEGER;if(s===Gc||s===Vc||s===Xc||s===kc)if(h===Ye)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Np||s===Dp||s===Up||s===Lp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Np)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Up)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Op||s===Pp||s===Ip||s===zp||s===Bp||s===jc||s===Fp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Op||s===Pp)return h===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ip)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===zp)return c.COMPRESSED_R11_EAC;if(s===Bp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===jc)return c.COMPRESSED_RG11_EAC;if(s===Fp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hp||s===Gp||s===Vp||s===Xp||s===kp||s===Wp||s===qp||s===Yp||s===Zp||s===Kp||s===jp||s===Qp||s===Jp||s===$p)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jp)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$p)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tm||s===em||s===nm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===tm)return h===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===em)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===im||s===am||s===Qc||s===sm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===im)return c.COMPRESSED_RED_RGTC1_EXT;if(s===am)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===To?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const h3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new WS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ei({vertexShader:h3,fragmentShader:d3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new tn(new Ha(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m3 extends fr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,x=null,g=null,v=null,S=null,T=null;const w=typeof XRWebGLBinding<"u",M=new p3,y={},D=i.getContextAttributes();let L=null,U=null;const I=[],P=[],E=new oe;let C=null,Y=null;const B=new Ii;B.viewport=new hn;const V=new Ii;V.viewport=new hn;const q=[B,V],lt=new bT;let G=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let $=I[N];return $===void 0&&($=new jd,I[N]=$),$.getTargetRaySpace()},this.getControllerGrip=function(N){let $=I[N];return $===void 0&&($=new jd,I[N]=$),$.getGripSpace()},this.getHand=function(N){let $=I[N];return $===void 0&&($=new jd,I[N]=$),$.getHandSpace()};function Z(N){const $=P.indexOf(N.inputSource);if($===-1)return;const gt=I[$];gt!==void 0&&(gt.update(N.inputSource,N.frame,m||h),gt.dispatchEvent({type:N.type,data:N.inputSource}))}function W(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",ft);for(let N=0;N<I.length;N++){const $=P[N];$!==null&&(P[N]=null,I[N].disconnect($))}G=null,et=null,M.reset();for(const N in y)delete y[N];if(t.setRenderTarget(L),S=null,v=null,g=null,l=null,U=null,ie.stop(),s.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),Y!==null){const N=Y.camera;N.fov=Y.fov,N.zoom=Y.zoom,N.updateProjectionMatrix(),Y=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){c=N,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){d=N,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(N){m=N},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(N){if(l=N,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",W),l.addEventListener("inputsourceschange",ft),D.xrCompatible!==!0&&await i.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,dt=null,Mt=null;D.depth&&(Mt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=D.stencil?ws:Ds,dt=D.stencil?To:_a);const Pt={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Pt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Kn(v.textureWidth,v.textureHeight,{format:ga,type:yi,depthTexture:new bo(v.textureWidth,v.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const gt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Kn(S.framebufferWidth,S.framebufferHeight,{format:ga,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),ie.setContext(l),ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ft(N){for(let $=0;$<N.removed.length;$++){const gt=N.removed[$],dt=P.indexOf(gt);dt>=0&&(P[dt]=null,I[dt].disconnect(gt))}for(let $=0;$<N.added.length;$++){const gt=N.added[$];let dt=P.indexOf(gt);if(dt===-1){for(let Pt=0;Pt<I.length;Pt++)if(Pt>=P.length){P.push(gt),dt=Pt;break}else if(P[Pt]===null){P[Pt]=gt,dt=Pt;break}if(dt===-1)break}const Mt=I[dt];Mt&&Mt.connect(gt)}}function it(N,$){$===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices($.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(l===null)return;let $=N.near,gt=N.far;M.texture!==null&&(M.depthNear>0&&($=M.depthNear),M.depthFar>0&&(gt=M.depthFar)),lt.near=V.near=B.near=$,lt.far=V.far=B.far=gt,(G!==lt.near||et!==lt.far)&&(l.updateRenderState({depthNear:lt.near,depthFar:lt.far}),G=lt.near,et=lt.far),lt.layers.mask=N.layers.mask|6,B.layers.mask=lt.layers.mask&-5,V.layers.mask=lt.layers.mask&-3;const dt=N.parent,Mt=lt.cameras;it(lt,dt);for(let Pt=0;Pt<Mt.length;Pt++)it(Mt[Pt],dt);lt.projectionMatrix.copy(B.projectionMatrix),lt.projectionMatrixInverse.copy(B.projectionMatrixInverse),Y===null&&N.isPerspectiveCamera&&(Y={camera:N,fov:N.fov,zoom:N.zoom}),ct(N,lt,dt)};function ct(N,$,gt){gt===null?N.matrix.copy($.matrixWorld):(N.matrix.copy(gt.matrixWorld),N.matrix.invert(),N.matrix.multiply($.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy($.projectionMatrix),N.projectionMatrixInverse.copy($.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=rm*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(N){p=N,v!==null&&(v.fixedFoveation=N),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=N)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(lt)},this.getCameraTexture=function(N){return y[N]};let Tt=null;function Vt(N,$){if(x=$.getViewerPose(m||h),T=$,x!==null){const gt=x.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let dt=!1;gt.length!==lt.cameras.length&&(lt.cameras.length=0,dt=!0);for(let Et=0;Et<gt.length;Et++){const Bt=gt[Et];let ge=null;if(S!==null)ge=S.getViewport(Bt);else{const Wt=g.getViewSubImage(v,Bt);ge=Wt.viewport,Et===0&&(t.setRenderTargetTextures(U,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(U))}let bt=q[Et];bt===void 0&&(bt=new Ii,bt.layers.enable(Et),bt.viewport=new hn,q[Et]=bt),bt.matrix.fromArray(Bt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Bt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(ge.x,ge.y,ge.width,ge.height),Et===0&&(lt.matrix.copy(bt.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),dt===!0&&lt.cameras.push(bt)}const Mt=l.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const Et=g.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&M.init(Et,l.renderState)}if(Mt&&Mt.includes("camera-access")&&w){t.state.unbindTexture(),g=s.getBinding();for(let Et=0;Et<gt.length;Et++){const Bt=gt[Et].camera;if(Bt){let ge=y[Bt];ge||(ge=new WS,y[Bt]=ge);const bt=g.getCameraImage(Bt);ge.sourceTexture=bt}}}}for(let gt=0;gt<I.length;gt++){const dt=P[gt],Mt=I[gt];dt!==null&&Mt!==void 0&&Mt.update(dt,$,m||h)}Tt&&Tt(N,$),$.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:$}),T=null}const ie=new KS;ie.setAnimationLoop(Vt),this.setAnimationLoop=function(N){Tt=N},this.dispose=function(){}}}const g3=new Ze,sM=new pe;sM.set(-1,0,0,0,1,0,0,0,1);function _3(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,qS(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,D,L,U){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),g(M,y)):y.isMeshPhongMaterial?(c(M,y),x(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,U)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,D,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ei&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ei&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),L=D.envMap,U=D.envMapRotation;L&&(M.envMap.value=L,M.envMapRotation.value.setFromMatrix4(g3.makeRotationFromEuler(U)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(sM),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,D,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function x(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,D){M.ior.value=y.ior,y.diffuseRoughness>0&&(M.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(M.diffuseRoughnessMap.value=y.diffuseRoughnessMap,i(y.diffuseRoughnessMap,M.diffuseRoughnessMapTransform))),y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,M.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function v3(o,t,i,s){let l={},c={};function h(D,L){const U=L.program;s.uniformBlockBinding(D,U,l[D.id])}function d(D,L){let U=l[D.id];U===void 0&&(T(D),U=p(D),l[D.id]=U,D.addEventListener("dispose",M));const I=L.program;s.updateUBOMapping(D,I);const P=t.render.frame;c[D.id]!==P&&(m(D),c[D.id]=P)}function p(D){const L=o.createBuffer(),U=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,U,I),o.bindBuffer(o.UNIFORM_BUFFER,null),L}function m(D){const L=l[D.id],U=D.uniforms,I=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let P=0,E=U.length;P<E;P++){const C=U[P];if(Array.isArray(C))for(let Y=0,B=C.length;Y<B;Y++)x(C[Y],P,Y,I);else x(C,P,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,L,U,I){if(v(D,L,U,I)===!0){const P=D.__offset,E=D.value;if(Array.isArray(E)){let C=0;for(let Y=0;Y<E.length;Y++){const B=E[Y],V=w(B,!0);g(B,D.__data,C),C+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else g(E,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,P,D.__data)}}function g(D,L,U){typeof D=="number"||typeof D=="boolean"?L[U]=D:D.isMatrix3?(L[U]=D.elements[0],L[U+1]=D.elements[1],L[U+2]=D.elements[2],L[U+3]=0,L[U+4]=D.elements[3],L[U+5]=D.elements[4],L[U+6]=D.elements[5],L[U+7]=0,L[U+8]=D.elements[6],L[U+9]=D.elements[7],L[U+10]=D.elements[8],L[U+11]=0):ArrayBuffer.isView(D)?L.set(D.subarray(0,L.length-U),U):D.toArray(L,U)}function v(D,L,U,I){const P=D.value,E=L+"_"+U;if(Array.isArray(P)){I[E]===void 0&&(I[E]=[]);const C=I[E];let Y=!1;for(let B=0;B<P.length;B++)S(P[B],C,B)===!0&&(Y=!0);return Y}return S(P,I,E)}function S(D,L,U){if(L[U]===void 0)return typeof D=="number"||typeof D=="boolean"?L[U]=D:ArrayBuffer.isView(D)?L[U]=D.slice():L[U]=D.clone(),!0;{const I=L[U];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return L[U]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(I.equals(D)===!1)return I.copy(D),!0}}return!1}function T(D){const L=D.uniforms;let U=0;const I=16;for(let E=0,C=L.length;E<C;E++){const Y=Array.isArray(L[E])?L[E]:[L[E]];for(let B=0,V=Y.length;B<V;B++){const q=Y[B],lt=Array.isArray(q.value)?q.value:[q.value],G=Array.isArray(L[E])||Array.isArray(q.value);let et=U;for(let W=0,ft=lt.length;W<ft;W++){const it=lt[W],ct=w(it,G),Tt=U%I,Vt=Tt%ct.boundary,ie=Tt+Vt;U+=Vt,ie!==0&&I-ie<ct.storage&&(U+=I-ie),W===0&&(et=U),U+=ct.storage}const Z=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new Z((U-et)/Float32Array.BYTES_PER_ELEMENT),q.__offset=et}}const P=U%I;return P>0&&(U+=I-P),D.__size=U,D.__cache={},this}function w(D,L){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=16,U.storage=48):D.isMatrix4?(U.boundary=16,U.storage=64):D.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(U.boundary=16,U.storage=D.byteLength):he("WebGLRenderer: Unsupported uniform value type.",D),L===!0&&(U.boundary=16,U.storage=Math.ceil(U.storage/16)*16),U}function M(D){const L=D.target;L.removeEventListener("dispose",M),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const D in l)o.deleteBuffer(l[D]);l={},c={}}return{bind:h,update:d,dispose:y}}const x3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function S3(){return ha===null&&(ha=new VS(x3,16,16,cr,ni),ha.name="DFG_LUT",ha.minFilter=ui,ha.magFilter=ui,ha.wrapS=Ga,ha.wrapT=Ga,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class M3{constructor(t={}){const{canvas:i=OE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=yi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=S,M=new Set([ym,Mm,Sm]),y=new Set([yi,_a,Hl,To,_m,vm]),D=new Uint32Array(4),L=new Int32Array(4),U={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const E=[],C=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let V=!1,q=null,lt=null,G=null,et=null;this._outputColorSpace=Mi;let Z=0,W=0,ft=null,it=-1,ct=null;const Tt=new hn,Vt=new hn;let ie=null;const N=new me(0);let $=0,gt=i.width,dt=i.height,Mt=1,Pt=null,Jt=null;const Et=new hn(0,0,gt,dt),Bt=new hn(0,0,gt,dt);let ge=!1;const bt=new Vl,Wt=new Rm;let ee=!1,Zt=!1;const qt=new Ze,Se=new tt,Ge=new hn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ln=!1;function On(){return ft===null?Mt:1}let K=s;function Xn(R,X){return i.getContext(R,X)}let Ve,Ke,Ft,je,se,ce,O,b,at,Rt,yt,Dt,It,pt,vt,Ut,H,_t,mt,Lt,Ct,Ot,ne;try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pm}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),K===null){const X="webgl2";if(K=Xn(X,R),K===null)throw Xn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(R){throw i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),Fe("WebGLRenderer: "+R.message),R}function re(){Ve=new TR(K),Ve.init(),Ct=new f3(K,Ve),Ke=new dR(K,Ve,t,Ct),Ft=new u3(K,Ve),Ke.reversedDepthBuffer&&v&&Ft.buffers.depth.setReversed(!0),lt=K.createFramebuffer(),G=K.createFramebuffer(),et=K.createFramebuffer(),je=new RR(K),se=new K2,ce=new c3(K,Ve,Ft,se,Ke,Ct,je),O=new ER(B),b=new wT(K),Ot=new fR(K,b),at=new bR(K,b,je,Ot),Rt=new wR(K,at,b,Ot,je),_t=new CR(K,Ke,ce),vt=new pR(se),yt=new Z2(B,O,Ve,Ke,Ot,vt),Dt=new _3(B,se),It=new Q2,pt=new i3(Ve),H=new cR(B,O,Ft,Rt,T,p),Ut=new l3(B,Rt,Ke),ne=new v3(K,je,Ke,Ft),mt=new hR(K,Ve,je),Lt=new AR(K,Ve,je),je.programs=yt.programs,B.capabilities=Ke,B.extensions=Ve,B.properties=se,B.renderLists=It,B.shadowMap=Ut,B.state=Ft,B.info=je}w!==yi&&(Y=new DR(w,i.width,i.height,d,l,c));const At=new m3(B,K);this.xr=At,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=Ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(R){R!==void 0&&(Mt=R,this.setSize(gt,dt,!1))},this.getSize=function(R){return R.set(gt,dt)},this.setSize=function(R,X,ht=!0){if(At.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=R,dt=X,i.width=Math.floor(R*Mt),i.height=Math.floor(X*Mt),ht===!0&&(i.style.width=R+"px",i.style.height=X+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(gt*Mt,dt*Mt).floor()},this.setDrawingBufferSize=function(R,X,ht){gt=R,dt=X,Mt=ht,i.width=Math.floor(R*ht),i.height=Math.floor(X*ht),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===yi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Tt)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,X,ht,st){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,X,ht,st),Ft.viewport(Tt.copy(Et).multiplyScalar(On()).round())},this.getScissor=function(R){return R.copy(Bt)},this.setScissor=function(R,X,ht,st){R.isVector4?Bt.set(R.x,R.y,R.z,R.w):Bt.set(R,X,ht,st),Ft.scissor(Vt.copy(Bt).multiplyScalar(On()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){Ft.setScissorTest(ge=R)},this.setOpaqueSort=function(R){Pt=R},this.setTransparentSort=function(R){Jt=R},this.getClearColor=function(R){return R.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ht=!0){let st=0;if(R){let rt=!1;if(ft!==null){const wt=ft.texture.format;rt=M.has(wt)}if(rt){const wt=ft.texture.type,Yt=y.has(wt),Nt=H.getClearColor(),Ht=H.getClearAlpha(),Qt=Nt.r,le=Nt.g,ve=Nt.b;Yt?(D[0]=Qt,D[1]=le,D[2]=ve,D[3]=Ht,K.clearBufferuiv(K.COLOR,0,D)):(L[0]=Qt,L[1]=le,L[2]=ve,L[3]=Ht,K.clearBufferiv(K.COLOR,0,L))}else st|=K.COLOR_BUFFER_BIT}X&&(st|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(st|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&K.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),H.dispose(),It.dispose(),pt.dispose(),ce.dispose(),se.dispose(),O.dispose(),Rt.dispose(),at.dispose(),Ot.dispose(),ne.dispose(),yt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Wa),At.removeEventListener("sessionend",No),va.stop()};function Kt(R){R.preventDefault(),nx("WebGLRenderer: Context Lost."),V=!0}function _e(){nx("WebGLRenderer: Context Restored."),V=!1;const R=je.autoReset,X=Ut.enabled,ht=Ut.autoUpdate,st=Ut.needsUpdate,rt=Ut.type;re(),je.autoReset=R,Ut.enabled=X,Ut.autoUpdate=ht,Ut.needsUpdate=st,Ut.type=rt}function Xt(R){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){const X=R.target;X.removeEventListener("dispose",Ie),ln(X)}function ln(R){ci(R),se.remove(R)}function ci(R){const X=se.get(R).programs;X!==void 0&&(X.forEach(function(ht){yt.releaseProgram(ht)}),R.isShaderMaterial&&yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ht,st,rt,wt){X===null&&(X=on);const Yt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Nt=Zl(R,X,ht,st,rt);Ft.setMaterial(st,Yt);let Ht=ht.index,Qt=1;if(st.wireframe===!0){if(Ht=at.getWireframeAttribute(ht),Ht===void 0)return;Qt=2}const le=ht.drawRange,ve=ht.attributes.position;let zt=le.start*Qt,Te=(le.start+le.count)*Qt;wt!==null&&(zt=Math.max(zt,wt.start*Qt),Te=Math.min(Te,(wt.start+wt.count)*Qt)),Ht!==null?(zt=Math.max(zt,0),Te=Math.min(Te,Ht.count)):ve!=null&&(zt=Math.max(zt,0),Te=Math.min(Te,ve.count));const un=Te-zt;if(un<0||un===1/0)return;Ot.setup(rt,st,Nt,ht,Ht);let Xe,Ue=mt;if(Ht!==null&&(Xe=b.get(Ht),Ue=Lt,Ue.setIndex(Xe)),rt.isMesh)st.wireframe===!0?(Ft.setLineWidth(st.wireframeLinewidth*On()),Ue.setMode(K.LINES)):Ue.setMode(K.TRIANGLES);else if(rt.isLine){let cn=st.linewidth;cn===void 0&&(cn=1),Ft.setLineWidth(cn*On()),rt.isLineSegments?Ue.setMode(K.LINES):rt.isLineLoop?Ue.setMode(K.LINE_LOOP):Ue.setMode(K.LINE_STRIP)}else rt.isPoints?Ue.setMode(K.POINTS):rt.isSprite&&Ue.setMode(K.TRIANGLES);if(rt.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Ue.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const cn=rt._multiDrawStarts,$t=rt._multiDrawCounts,Rn=rt._multiDrawCount,Oe=Ht?b.get(Ht).bytesPerElement:1,xa=se.get(st).currentProgram.getUniforms();for(let fe=0;fe<Rn;fe++)xa.setValue(K,"_gl_DrawID",fe),Ue.render(cn[fe]/Oe,$t[fe])}else if(rt.isInstancedMesh)Ue.renderInstances(zt,un,rt.count);else if(ht.isInstancedBufferGeometry){const cn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,$t=Math.min(ht.instanceCount,cn);Ue.renderInstances(zt,un,$t)}else Ue.render(zt,un)};function Os(R,X,ht,st){q!==null&&R.isNodeMaterial&&q.setObject(st,R),ee===!0&&vt.setState(R,ht,!1),R.transparent===!0&&R.side===ji&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Ya(R,X,st),R.side=ur,R.needsUpdate=!0,Ya(R,X,st),R.side=ji):Ya(R,X,st)}this.compile=function(R,X,ht=null){ht===null&&(ht=R),q!==null&&q.renderStart(R,X,ht),P=pt.get(ht),P.init(X),C.push(P),ht.traverseVisible(function(rt){rt.isLight&&rt.layers.test(X.layers)&&(P.pushLight(rt),rt.castShadow&&P.pushShadow(rt))}),R!==ht&&R.traverseVisible(function(rt){rt.isLight&&rt.layers.test(X.layers)&&(P.pushLight(rt),rt.castShadow&&P.pushShadow(rt))}),P.setupLights(),q!==null&&q.updateLights(P.state.lightsArray),Zt=this.localClippingEnabled,ee=vt.init(this.clippingPlanes,Zt),ee===!0&&vt.setGlobalState(this.clippingPlanes,X),q!==null&&Ut.render(P.state.shadowsArray,ht,X);const st=new Set;return R.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const wt=rt.material;if(wt)if(Array.isArray(wt))for(let Yt=0;Yt<wt.length;Yt++){const Nt=wt[Yt];Os(Nt,ht,X,rt),st.add(Nt)}else Os(wt,ht,X,rt),st.add(wt)}),P=C.pop(),q!==null&&q.renderEnd(),st},this.compileAsync=function(R,X,ht=null){const st=this.compile(R,X,ht);return new Promise(rt=>{function wt(){if(st.forEach(function(Yt){const Ht=se.get(Yt).currentProgram;(Ht===void 0||Ht.isReady())&&st.delete(Yt)}),st.size===0){rt(R);return}setTimeout(wt,10)}Ve.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Bi=null;function mr(R){Bi&&Bi(R)}function Wa(){va.stop()}function No(){va.start()}const va=new KS;va.setAnimationLoop(mr),typeof self<"u"&&va.setContext(self),this.setAnimationLoop=function(R){Bi=R,At.setAnimationLoop(R),R===null?va.stop():va.start()},At.addEventListener("sessionstart",Wa),At.addEventListener("sessionend",No),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(R,X);const ht=At.enabled===!0&&At.isPresenting===!0,st=Y!==null&&(ft===null||ht)&&Y.begin(B,ft);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(X),X=At.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,X,ft),P=pt.get(R,C.length),P.init(X),P.state.textureUnits=ce.getTextureUnits(),C.push(P),qt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Wt.setFromArrayCamera(X):bt.setFromProjectionMatrix(qt,$i,X.reversedDepth),Zt=this.localClippingEnabled,ee=vt.init(this.clippingPlanes,Zt),I=It.get(R,E.length),I.init(),E.push(I),this.info.render.frame++,At.enabled===!0&&At.isPresenting===!0){const Yt=B.xr.getDepthSensingMesh();Yt!==null&&gr(Yt,X,-1/0,B.sortObjects)}gr(R,X,0,B.sortObjects),I.finish(),q!==null&&q.updateLights(P.state.lightsArray),B.sortObjects===!0&&I.sort(Pt,Jt),Ln=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ln&&H.addToRenderList(I,R),this.info.autoReset===!0&&this.info.reset(),ee===!0&&vt.beginShadows();const rt=P.state.shadowsArray;if(Ut.render(rt,R,X),ee===!0&&vt.endShadows(),(st&&Y.hasRenderPass())===!1){const Yt=I.opaque,Nt=I.transmissive;if(P.setupLights(),X.isArrayCamera){const Ht=X.cameras;if(Nt.length>0)for(let Qt=0,le=Ht.length;Qt<le;Qt++){const ve=Ht[Qt];qa(Yt,Nt,R,ve)}Ln&&H.render(R);for(let Qt=0,le=Ht.length;Qt<le;Qt++){const ve=Ht[Qt];_r(I,R,ve,ve.viewport)}}else Nt.length>0&&qa(Yt,Nt,R,X),Ln&&H.render(R),_r(I,R,X)}ft!==null&&W===0&&(ce.updateMultisampleRenderTarget(ft),ce.updateRenderTargetMipmap(ft)),st&&Y.end(B),R.isScene===!0&&R.onAfterRender(B,R,X),Ot.resetDefaultState(),it=-1,ct=null,C.pop(),C.length>0?(P=C[C.length-1],ce.setTextureUnits(P.state.textureUnits),ee===!0&&vt.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,q!==null&&q.renderEnd()};function gr(R,X,ht,st){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ht=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){const Yt=X.isArrayCamera?Wt:bt;if(!R.frustumCulled||R.intersectsFrustum(Yt)){st&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);const Nt=Rt.update(R),Ht=R.material;Ht.visible&&I.push(R,Nt,Ht,ht,Ge.z,null,X)}}else if(R.isMesh||R.isLine||R.isPoints){const Yt=X.isArrayCamera?Wt:bt;if(!R.frustumCulled||R.intersectsFrustum(Yt)){const Nt=Rt.update(R),Ht=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ge.copy(Nt.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(Ht)){const Qt=Nt.groups;for(let le=0,ve=Qt.length;le<ve;le++){const zt=Qt[le],Te=Ht[zt.materialIndex];Te&&Te.visible&&I.push(R,Nt,Te,ht,Ge.z,zt,X)}}else Ht.visible&&I.push(R,Nt,Ht,ht,Ge.z,null,X)}}}const wt=R.children;for(let Yt=0,Nt=wt.length;Yt<Nt;Yt++)gr(wt[Yt],X,ht,st)}function _r(R,X,ht,st){const{opaque:rt,transmissive:wt,transparent:Yt}=R;P.setupLightsView(ht),ee===!0&&vt.setGlobalState(B.clippingPlanes,ht),st&&Ft.viewport(Tt.copy(st)),rt.length>0&&vr(rt,X,ht),wt.length>0&&vr(wt,X,ht),Yt.length>0&&vr(Yt,X,ht),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function qa(R,X,ht,st){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[st.id]===void 0){const zt=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[st.id]=new Kn(1,1,{generateMipmaps:!0,type:zt?ni:yi,minFilter:Cs,samples:Math.max(4,Ke.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const wt=P.state.transmissionRenderTarget[st.id],Yt=st.viewport||Tt;wt.setSize(Yt.z*B.transmissionResolutionScale,Yt.w*B.transmissionResolutionScale);const Nt=B.getRenderTarget(),Ht=B.getActiveCubeFace(),Qt=B.getActiveMipmapLevel();B.setRenderTarget(wt),B.getClearColor(N),$=B.getClearAlpha(),$<1&&B.setClearColor(16777215,.5),B.clear(),Ln&&H.render(ht);const le=B.toneMapping;B.toneMapping=Va;const ve=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),P.setupLightsView(st),ee===!0&&vt.setGlobalState(B.clippingPlanes,st),vr(R,ht,st),ce.updateMultisampleRenderTarget(wt),ce.updateRenderTargetMipmap(wt),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Te=0,un=X.length;Te<un;Te++){const Xe=X[Te],{object:Ue,geometry:cn,material:$t,group:Rn}=Xe;if($t.side===ji&&Ue.layers.test(st.layers)){const Oe=$t.side;$t.side=ei,$t.needsUpdate=!0,Do(Ue,ht,st,cn,$t,Rn),$t.side=Oe,$t.needsUpdate=!0,zt=!0}}zt===!0&&(ce.updateMultisampleRenderTarget(wt),ce.updateRenderTargetMipmap(wt))}B.setRenderTarget(Nt,Ht,Qt),B.setClearColor(N,$),ve!==void 0&&(st.viewport=ve),B.toneMapping=le}function vr(R,X,ht){const st=X.isScene===!0?X.overrideMaterial:null;for(let rt=0,wt=R.length;rt<wt;rt++){const Yt=R[rt],{object:Nt,geometry:Ht,group:Qt}=Yt;let le=Yt.material;le.allowOverride===!0&&st!==null&&(le=st),Nt.layers.test(ht.layers)&&Do(Nt,X,ht,Ht,le,Qt)}}function Do(R,X,ht,st,rt,wt){q!==null&&rt.isNodeMaterial&&q.setObject(R,rt),R.onBeforeRender(B,X,ht,st,rt,wt),R.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),rt.onBeforeRender(B,X,ht,st,R,wt),rt.transparent===!0&&rt.side===ji&&rt.forceSinglePass===!1?(rt.side=ei,rt.needsUpdate=!0,B.renderBufferDirect(ht,X,st,rt,R,wt),rt.side=ur,rt.needsUpdate=!0,B.renderBufferDirect(ht,X,st,rt,R,wt),rt.side=ji):B.renderBufferDirect(ht,X,st,rt,R,wt),R.onAfterRender(B,X,ht,st,rt,wt)}function Uo(R){let X=0;for(const ht of R)ht.texture!==null&&X++;return X}function Ya(R,X,ht){X.isScene!==!0&&(X=on);const st=se.get(R),rt=P.state.lights,wt=P.state.shadowsArray,Yt=rt.state.version,Nt=yt.getParameters(R,rt.state,wt,X,ht,P.state.lightProbeGridArray),Ht=yt.getProgramCacheKey(Nt);let Qt=st.programs;st.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;const le=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;st.envMap=O.get(R.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",Ie),Qt=new Map,st.programs=Qt,st.programVariants=new Map);let ve=Qt.get(Ht);if(ve!==void 0){if(st.currentProgram===ve&&st.lightsStateVersion===Yt)return Oo(R,Nt),ve}else Nt.uniforms=yt.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,ht,Nt),R.onBeforeCompile(Nt,B),ve=yt.acquireProgram(Nt,Ht),Qt.set(Ht,ve),st.uniforms=Nt.uniforms;const zt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=vt.uniform),Oo(R,Nt),st.needsLights=En(R),st.lightsStateVersion=Yt,st.needsLights&&(zt.ambientLightColor.value=rt.state.ambient,zt.lightProbe.value=rt.state.probe,zt.sunLights.value=rt.state.sun,zt.sunLightShadows.value=rt.state.sunShadow,zt.directionalLights.value=rt.state.directional,zt.directionalLightShadows.value=rt.state.directionalShadow,zt.spotLights.value=rt.state.spot,zt.spotLightShadows.value=rt.state.spotShadow,zt.rectAreaLights.value=rt.state.rectArea,zt.ltc_1.value=rt.state.rectAreaLTC1,zt.ltc_2.value=rt.state.rectAreaLTC2,zt.pointLights.value=rt.state.point,zt.pointLightShadows.value=rt.state.pointShadow,zt.hemisphereLights.value=rt.state.hemi,zt.sunShadowMatrix.value=rt.state.sunShadowMatrix,zt.sunShadowCascade.value=rt.state.sunShadowCascade,zt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,zt.spotLightMatrix.value=rt.state.spotLightMatrix,zt.spotLightMap.value=rt.state.spotLightMap,zt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.numLightProbeGrids=Uo(P.state.lightProbeGridArray),st.currentProgram=ve,st.uniformsList=null,ve}function Lo(R,X,ht,st,rt){const wt=se.get(R),Yt=wt.currentProgram.id+","+st+","+rt;let Nt=wt.programVariants.get(Yt);return Nt===void 0?(Nt=Ya(R,X,ht),wt.programVariants.set(Yt,Nt)):(wt.currentProgram=Nt,wt.uniformsList=null,wt.outputColorSpace=st,wt.toneMapping=rt),Nt}function xr(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Oo(R,X){const ht=se.get(R);ht.outputColorSpace=X.outputColorSpace,ht.batching=X.batching,ht.batchingColor=X.batchingColor,ht.instancing=X.instancing,ht.instancingColor=X.instancingColor,ht.instancingMorph=X.instancingMorph,ht.skinning=X.skinning,ht.morphTargets=X.morphTargets,ht.morphNormals=X.morphNormals,ht.morphColors=X.morphColors,ht.morphTargetsCount=X.morphTargetsCount,ht.numClippingPlanes=X.numClippingPlanes,ht.numIntersection=X.numClipIntersection,ht.vertexAlphas=X.vertexAlphas,ht.vertexTangents=X.vertexTangents,ht.toneMapping=X.toneMapping}function Zl(R,X,ht,st,rt){X.isScene!==!0&&(X=on),ce.resetTextureUnits();const wt=X.fog,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,Nt=ft===null?B.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Le.workingColorSpace,Ht=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Qt=O.get(st.envMap||Yt,Ht),le=st.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ve=!!ht.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),zt=!!ht.morphAttributes.position,Te=!!ht.morphAttributes.normal,un=!!ht.morphAttributes.color;let Xe=Va;st.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Xe=B.toneMapping);const Ue=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,cn=Ue!==void 0?Ue.length:0,$t=se.get(st),Rn=P.state.lights;if(ee===!0&&(Zt===!0||R!==ct)){const sn=R===ct&&st.id===it;vt.setState(st,R,sn)}let Oe=!1,xa=!1;st.version===$t.__version?$t.needsLights&&$t.lightsStateVersion!==Rn.state.version||rt.isBatchedMesh&&$t.batching===!1||!rt.isBatchedMesh&&$t.batching===!0||rt.isBatchedMesh&&$t.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&$t.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&$t.instancing===!1||!rt.isInstancedMesh&&$t.instancing===!0||rt.isSkinnedMesh&&$t.skinning===!1||!rt.isSkinnedMesh&&$t.skinning===!0||rt.isInstancedMesh&&$t.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&$t.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&$t.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&$t.instancingMorph===!1&&rt.morphTexture!==null||$t.envMap!==Qt||st.fog===!0&&$t.fog!==wt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==vt.numPlanes||$t.numIntersection!==vt.numIntersection)||$t.vertexAlphas!==le||$t.vertexTangents!==ve||$t.morphTargets!==zt||$t.morphNormals!==Te||$t.morphColors!==un||$t.morphTargetsCount!==cn||$t.numLightProbeGrids!==Uo(P.state.lightProbeGridArray)?Oe=!0:($t.outputColorSpace!==Nt||$t.toneMapping!==Xe)&&(xa=!0):(Oe=!0,$t.__version=st.version);let fe=$t.currentProgram;(Oe===!0||xa===!0)&&(fe=xa===!0?Lo(st,X,rt,Nt,Xe):Ya(st,X,rt),q&&st.isNodeMaterial&&q.onUpdateProgram(st,fe,$t));let Ps=!1,fi=!1,Ti=!1;const xe=fe.getUniforms(),ze=$t.uniforms;if(Ft.useProgram(fe.program)&&(Ps=!0,fi=!0,Ti=!0),st.id!==it&&(it=st.id,fi=!0),Ps||ct!==R){Ft.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(K,"projectionMatrix",R.projectionMatrix),xe.setValue(K,"viewMatrix",R.matrixWorldInverse);const pn=xe.map.cameraPosition;pn!==void 0&&pn.setValue(K,Se.setFromMatrixPosition(R.matrixWorld)),Ke.logarithmicDepthBuffer&&xe.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&xe.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),ct!==R&&(ct=R,fi=!0,Ti=!0)}if($t.needsLights&&(Rn.state.sunShadowMap.length>0&&xe.setValue(K,"sunShadowMap",Rn.state.sunShadowMap,ce),Rn.state.directionalShadowMap.length>0&&xe.setValue(K,"directionalShadowMap",Rn.state.directionalShadowMap,ce),Rn.state.spotShadowMap.length>0&&xe.setValue(K,"spotShadowMap",Rn.state.spotShadowMap,ce),Rn.state.pointShadowMap.length>0&&xe.setValue(K,"pointShadowMap",Rn.state.pointShadowMap,ce)),rt.isSkinnedMesh){xe.setOptional(K,rt,"bindMatrix"),xe.setOptional(K,rt,"bindMatrixInverse");const sn=rt.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),xe.setValue(K,"boneTexture",sn.boneTexture,ce))}rt.isBatchedMesh&&(xe.setOptional(K,rt,"batchingTexture"),xe.setValue(K,"batchingTexture",rt._matricesTexture,ce),xe.setOptional(K,rt,"batchingIdTexture"),xe.setValue(K,"batchingIdTexture",rt._indirectTexture,ce),xe.setOptional(K,rt,"batchingColorTexture"),rt._colorsTexture!==null&&xe.setValue(K,"batchingColorTexture",rt._colorsTexture,ce));const ii=ht.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&_t.update(rt,ht,fe),(fi||$t.receiveShadow!==rt.receiveShadow)&&($t.receiveShadow=rt.receiveShadow,xe.setValue(K,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&(ze.envMapIntensity.value=X.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=S3()),fi){if(xe.setValue(K,"toneMappingExposure",B.toneMappingExposure),$t.needsLights&&Fi(ze,Ti),wt&&st.fog===!0&&Dt.refreshFogUniforms(ze,wt),Dt.refreshMaterialUniforms(ze,st,Mt,dt,P.state.transmissionRenderTarget[R.id]),$t.needsLights&&$t.numLightProbeGrids>0){const sn=U;let pn=0;for(const bi of P.state.lightProbeGridArray)bi.texture!==null&&(sn.textures[pn]=bi.texture,sn.min[pn]=bi.boundingBox.min,sn.max[pn]=bi.boundingBox.max,sn.resolution[pn]=bi.resolution,pn++);for(const bi in sn)sn[bi].length=pn;ze.probesSH.value=sn.textures,ze.probesMin.value=sn.min,ze.probesMax.value=sn.max,ze.probesResolution.value=sn.resolution}qc.upload(K,xr($t),ze,ce)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(qc.upload(K,xr($t),ze,ce),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&xe.setValue(K,"center",rt.center),xe.setValue(K,"modelViewMatrix",rt.modelViewMatrix),xe.setValue(K,"normalMatrix",rt.normalMatrix),xe.setValue(K,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){const sn=st.uniformsGroups;for(let pn=0,bi=sn.length;pn<bi;pn++){const Kl=sn[pn];ne.update(Kl,fe),ne.bind(Kl,fe)}}return fe}function Fi(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.sunLights.needsUpdate=X,R.sunLightShadows.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function En(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(R,X,ht){const st=se.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),se.get(R.texture).__webglTexture=X,se.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ht,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ht=se.get(R);ht.__webglFramebuffer=X,ht.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ht=0){ft=R,Z=X,W=ht;let st=null,rt=!1,wt=!1;if(R){const Nt=se.get(R);if(Nt.__useDefaultFramebuffer!==void 0){Ft.bindFramebuffer(K.FRAMEBUFFER,Nt.__webglFramebuffer),Tt.copy(R.viewport),Vt.copy(R.scissor),ie=R.scissorTest,Ft.viewport(Tt),Ft.scissor(Vt),Ft.setScissorTest(ie),it=-1;return}else if(Nt.__webglFramebuffer===void 0)ce.setupRenderTarget(R);else if(Nt.__hasExternalTextures)ce.rebindTextures(R,se.get(R.texture).__webglTexture,se.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const le=R.depthTexture;if(Nt.__boundDepthTexture!==le){if(le!==null&&se.has(le)&&(R.width!==le.image.width||R.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const Qt=se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?st=Qt[X][ht]:st=Qt[X],rt=!0):R.samples>0&&ce.useMultisampledRTT(R)===!1?st=se.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?st=Qt[ht]:st=Qt,Tt.copy(R.viewport),Vt.copy(R.scissor),ie=R.scissorTest}else Tt.copy(Et).multiplyScalar(Mt).floor(),Vt.copy(Bt).multiplyScalar(Mt).floor(),ie=ge;if(ht!==0&&(st=lt),Ft.bindFramebuffer(K.FRAMEBUFFER,st)&&Ft.drawBuffers(R,st),Ft.viewport(Tt),Ft.scissor(Vt),Ft.setScissorTest(ie),rt){const Nt=se.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,ht)}else if(wt){const Nt=X;for(let Ht=0;Ht<R.textures.length;Ht++){const Qt=se.get(R.textures[Ht]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ht,Qt.__webglTexture,ht,Nt)}}else if(R!==null&&ht!==0){const Nt=se.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Nt.__webglTexture,ht)}it=-1};function Pn(R){const X=se.get(R);return(X.__readFormat!==R.format||X.__readType!==R.type)&&(X.__readFormat=R.format,X.__readType=R.type,X.__formatReadable=Ke.textureFormatReadable(R.format),X.__typeReadable=Ke.textureTypeReadable(R.type)),X}this.readRenderTargetPixels=function(R,X,ht,st,rt,wt,Yt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Ht=Ht[Yt],Array.isArray(Ht)&&(Ht=Ht[0])),Ht){Ft.bindFramebuffer(K.FRAMEBUFFER,Ht);try{const Qt=R.textures[Nt],le=Qt.format,ve=Qt.type;R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Nt);const zt=Pn(Qt);if(zt.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-st&&ht>=0&&ht<=R.height-rt&&K.readPixels(X,ht,st,rt,Ct.convert(le),Ct.convert(ve),wt)}finally{const Qt=ft!==null?se.get(ft).__webglFramebuffer:null;Ft.bindFramebuffer(K.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,X,ht,st,rt,wt,Yt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Ht=Ht[Yt],Array.isArray(Ht)&&(Ht=Ht[0])),Ht)if(X>=0&&X<=R.width-st&&ht>=0&&ht<=R.height-rt){Ft.bindFramebuffer(K.FRAMEBUFFER,Ht);const Qt=R.textures[Nt],le=Qt.format,ve=Qt.type;R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Nt);const zt=Pn(Qt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Te),K.bufferData(K.PIXEL_PACK_BUFFER,wt.byteLength,K.STREAM_READ),K.readPixels(X,ht,st,rt,Ct.convert(le),Ct.convert(ve),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const un=ft!==null?se.get(ft).__webglFramebuffer:null;Ft.bindFramebuffer(K.FRAMEBUFFER,un);const Xe=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await PE(K,Xe,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Te),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,wt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Te),K.deleteSync(Xe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ht=0){const st=Math.pow(2,-ht),rt=Math.floor(R.image.width*st),wt=Math.floor(R.image.height*st),Yt=X!==null?X.x:0,Nt=X!==null?X.y:0;ce.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,ht,0,0,Yt,Nt,rt,wt),Ft.unbindTexture()},this.copyTextureToTexture=function(R,X,ht=null,st=null,rt=0,wt=0){let Yt,Nt,Ht,Qt,le,ve,zt,Te,un;const Xe=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(ht!==null)Yt=ht.max.x-ht.min.x,Nt=ht.max.y-ht.min.y,Ht=ht.isBox3?ht.max.z-ht.min.z:1,Qt=ht.min.x,le=ht.min.y,ve=ht.isBox3?ht.min.z:0;else{const xe=Math.pow(2,-rt);Yt=Math.floor(Xe.width*xe),Nt=Math.floor(Xe.height*xe),R.isDataArrayTexture?Ht=Xe.depth:R.isData3DTexture?Ht=Math.floor(Xe.depth*xe):Ht=1,Qt=0,le=0,ve=0}st!==null?(zt=st.x,Te=st.y,un=st.z):(zt=0,Te=0,un=0);const Ue=Ct.convert(X.format),cn=Ct.convert(X.type);let $t;X.isData3DTexture?(ce.setTexture3D(X,0),$t=K.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ce.setTexture2DArray(X,0),$t=K.TEXTURE_2D_ARRAY):(ce.setTexture2D(X,0),$t=K.TEXTURE_2D),Ft.activeTexture(K.TEXTURE0),Ft.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,X.flipY),Ft.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Ft.pixelStorei(K.UNPACK_ALIGNMENT,X.unpackAlignment);const Rn=Ft.getParameter(K.UNPACK_ROW_LENGTH),Oe=Ft.getParameter(K.UNPACK_IMAGE_HEIGHT),xa=Ft.getParameter(K.UNPACK_SKIP_PIXELS),fe=Ft.getParameter(K.UNPACK_SKIP_ROWS),Ps=Ft.getParameter(K.UNPACK_SKIP_IMAGES);Ft.pixelStorei(K.UNPACK_ROW_LENGTH,Xe.width),Ft.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Xe.height),Ft.pixelStorei(K.UNPACK_SKIP_PIXELS,Qt),Ft.pixelStorei(K.UNPACK_SKIP_ROWS,le),Ft.pixelStorei(K.UNPACK_SKIP_IMAGES,ve);const fi=R.isDataArrayTexture||R.isData3DTexture,Ti=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const xe=se.get(R),ze=se.get(X),ii=se.get(xe.__renderTarget),sn=se.get(ze.__renderTarget);Ft.bindFramebuffer(K.READ_FRAMEBUFFER,ii.__webglFramebuffer),Ft.bindFramebuffer(K.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let pn=0;pn<Ht;pn++)fi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.get(R).__webglTexture,rt,ve+pn),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.get(X).__webglTexture,wt,un+pn)),K.blitFramebuffer(Qt,le,Qt+Yt,le+Nt,zt,Te,zt+Yt,Te+Nt,K.DEPTH_BUFFER_BIT,K.NEAREST);Ft.bindFramebuffer(K.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(rt!==0||R.isRenderTargetTexture||se.has(R)){const xe=se.get(R),ze=se.get(X);Ft.bindFramebuffer(K.READ_FRAMEBUFFER,G),Ft.bindFramebuffer(K.DRAW_FRAMEBUFFER,et);for(let ii=0;ii<Ht;ii++)fi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,xe.__webglTexture,rt,ve+ii):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,xe.__webglTexture,rt),Ti?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ze.__webglTexture,wt,un+ii):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ze.__webglTexture,wt),rt!==0?K.blitFramebuffer(Qt,le,Qt+Yt,le+Nt,zt,Te,zt+Yt,Te+Nt,K.COLOR_BUFFER_BIT,K.NEAREST):Ti?K.copyTexSubImage3D($t,wt,zt,Te,un+ii,Qt,le,Yt,Nt):K.copyTexSubImage2D($t,wt,zt,Te,Qt,le,Yt,Nt);Ft.bindFramebuffer(K.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ti?R.isDataTexture||R.isData3DTexture?K.texSubImage3D($t,wt,zt,Te,un,Yt,Nt,Ht,Ue,cn,Xe.data):X.isCompressedArrayTexture?K.compressedTexSubImage3D($t,wt,zt,Te,un,Yt,Nt,Ht,Ue,Xe.data):K.texSubImage3D($t,wt,zt,Te,un,Yt,Nt,Ht,Ue,cn,Xe):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,wt,zt,Te,Yt,Nt,Ue,cn,Xe.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,wt,zt,Te,Xe.width,Xe.height,Ue,Xe.data):K.texSubImage2D(K.TEXTURE_2D,wt,zt,Te,Yt,Nt,Ue,cn,Xe);Ft.pixelStorei(K.UNPACK_ROW_LENGTH,Rn),Ft.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Oe),Ft.pixelStorei(K.UNPACK_SKIP_PIXELS,xa),Ft.pixelStorei(K.UNPACK_SKIP_ROWS,fe),Ft.pixelStorei(K.UNPACK_SKIP_IMAGES,Ps),wt===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&K.generateMipmap($t),Ft.unbindTexture()},this.initRenderTarget=function(R){se.get(R).__webglFramebuffer===void 0&&ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ce.setTextureCube(R,0):R.isData3DTexture?ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ce.setTexture2DArray(R,0):ce.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){Z=0,W=0,ft=null,Ft.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}class y3 extends FS{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new pr;t.deleteAttribute("uv");const i=new om({side:ei}),s=new om,l=new yT(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new tn(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new Am(t,s,6),d=new Un;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const p=new tn(t,xo(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const m=new tn(t,xo(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const x=new tn(t,xo(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const g=new tn(t,xo(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const v=new tn(t,xo(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const S=new tn(t,xo(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function xo(o){return new _T({color:0,emissive:16777215,emissiveIntensity:o})}const Yc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Yl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E3=new Um(-1,1,1,-1,0,1);class T3 extends zi{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const b3=new T3;class rM{constructor(t){this._mesh=new tn(b3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,E3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class oM extends Yl{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Ei?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=af.clone(t.uniforms),this.material=new Ei({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new rM(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jx extends Yl{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class A3 extends Yl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class R3{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new oe);this._width=s.width,this._height=s.height,i=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oM(Yc),this.copyPass.material.blending=or,this.timer=new AT}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}jx!==void 0&&(h instanceof jx?s=!0:h instanceof A3&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class C3 extends Yl{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const w3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ro extends Yl{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new oe(t.x,t.y):new oe(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(c,h,{type:ni,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const g=new Kn(c,h,{type:ni,depthBuffer:!1});g.texture.name="UnrealBloomPass.h"+x,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const v=new Kn(c,h,{type:ni,depthBuffer:!1});v.texture.name="UnrealBloomPass.v"+x,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),h=Math.round(h/2)}const d=w3;this.highPassUniforms=af.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ei({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new oe(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new tt(1,1,1),new tt(1,1,1),new tt(1,1,1),new tt(1,1,1),new tt(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=af.clone(Yc.uniforms),this.blendMaterial=new Ei({uniforms:this.copyUniforms,vertexShader:Yc.vertexShader,fragmentShader:Yc.fragmentShader,premultipliedAlpha:!0,blending:Mp,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new As,this._fsQuad=new rM(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new oe(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=Ro.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Ro.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let h=0;h<t;h++)i.push(.39894*Math.exp(-.5*h*h/(s*s))/s);const l=[],c=[];for(let h=1;h<t;h+=2){const d=i[h],p=h+1<t?i[h+1]:0,m=d+p;l.push((h*d+(h+1)*p)/m),c.push(m)}return new Ei({defines:{KERNEL_PAIRS:l.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:l},gaussianWeights:{value:c}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ei({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ro.BlurDirectionX=new oe(1,0);Ro.BlurDirectionY=new oe(0,1);const _p=o=>{const t=parseInt(o.slice(1),16);return new tt((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)},N3={name:"TaraFinal",uniforms:{tDiffuse:{value:null},tMask:{value:null},uMouse:{value:new oe(-9999,-9999)},uLens:{value:0},uDot:{value:2},uSplit:{value:1},uExposure:{value:1},uDark:{value:_p("#0C0E0F")},uLight:{value:_p("#E4E2DA")},uAccent:{value:_p("#D8FF2A")}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,fragmentShader:`
precision highp float;
uniform sampler2D tDiffuse;
uniform sampler2D tMask;
uniform vec2 uMouse;
uniform float uLens;
uniform float uDot;
uniform float uSplit;
uniform float uExposure;
uniform vec3 uDark;
uniform vec3 uLight;
uniform vec3 uAccent;
varying vec2 vUv;

const mat4 BAYER = mat4(
  0.0, 12.0, 3.0, 15.0,
  8.0, 4.0, 11.0, 7.0,
  2.0, 14.0, 1.0, 13.0,
  10.0, 6.0, 9.0, 5.0);

float bayer(vec2 p) {
  ivec2 i = ivec2(mod(p, 4.0));
  return (BAYER[i.x][i.y] + 0.5) / 16.0;
}
// тональная кривая ACES (приближение Наркевича): яркие лампы и блики не выгорают в белое пятно
vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec3 c = pow(aces(texture2D(tDiffuse, vUv).rgb * uExposure), vec3(1.0 / 2.2));
  float mx = max(c.r, max(c.g, c.b));
  float lum = dot(c, vec3(0.299, 0.587, 0.114));
  // близость к сигнальному жёлто-зелёному: много красного и зелёного, мало синего
  float accent = smoothstep(0.2, 0.42, min(c.r, c.g) - c.b);
  vec2 px = gl_FragCoord.xy;

  // точечный вид
  float th = bayer(floor(px / uDot));
  // точки приглушены: слово и текст первого экрана остаются самым светлым в кадре
  float tone = floor(clamp(lum * 1.1 - 0.1, 0.0, 0.72) * 6.0 + 0.5) / 6.0;
  vec3 dots = mix(uDark, uLight * 0.46, step(th, tone));
  dots = mix(dots, mix(uDark, uAccent * 0.8, step(th * 0.72, mx)), accent);

  // реалистичный вид
  vec2 q = vUv - 0.5;
  vec3 soft = c * (1.0 - 0.5 * dot(q, q));

  // смена экрана: склад открывается, как секционные ворота. Кадр разбит на 14 створок,
  // они поднимаются от центра к краям; под каждой створкой уже обычный рендер, по кромке сигнальная линия.
  // uSplit: 1 — первый экран целиком, 0 — он ушёл вверх. Всё обратимо при прокрутке назад.
  float t = 1.0 - uSplit;
  float slat = floor(vUv.x * 14.0);
  float delay = abs(slat - 6.5) / 14.0 * 0.55;
  float open = smoothstep(0.0, 1.0, clamp(t * 1.65 - delay, 0.0, 1.0));
  float edge = open * 1.03;
  float moving = step(0.001, open) * step(open, 0.999);
  vec3 col = mix(dots, soft, step(vUv.y, edge));
  // кромка створки и свет из-под неё
  col = mix(col, uAccent, moving * (1.0 - smoothstep(0.0, 0.004, abs(vUv.y - edge))));
  col += uAccent * moving * 0.28 * smoothstep(0.12, 0.0, edge - vUv.y) * step(vUv.y, edge);
  // тонкие стыки между створками, пока ворота в движении
  float seam = 1.0 - smoothstep(0.0, 0.0012, abs(fract(vUv.x * 14.0) - 0.5) - 0.4985);
  col *= 1.0 - 0.5 * seam * moving * step(edge, vUv.y);

  if (uLens > 1.0) {
    float d = distance(px, uMouse);
    float inside = 1.0 - smoothstep(uLens - 1.5, uLens, d);
    float mine = step(0.04, texture2D(tMask, vUv).r);
    vec3 real = mix(vec3(lum) * 0.42, uAccent * clamp(lum * 1.4 + 0.3, 0.0, 1.0), mine);
    real = mix(real, soft, accent);
    col = mix(col, real, inside);
    float ring = smoothstep(uLens - 3.0, uLens - 1.5, d) * (1.0 - smoothstep(uLens, uLens + 1.5, d));
    col = mix(col, uAccent, ring);
  }
  gl_FragColor = vec4(col, 1.0);
}`};function Us(o,t){const i=document.createElement("canvas");return i.width=o,i.height=t,[i,i.getContext("2d")]}function Ls(o,t,i){const s=new cT(o);return t&&(s.colorSpace=Mi),s.anisotropy=8,i&&(s.wrapS=s.wrapT=Kc,s.repeat.set(i[0],i[1])),s}function cm(o,t,i,s,l,c){const{width:h,height:d}=o.canvas;for(let p=0;p<i;p++){const m=t()*h,x=t()*d,g=s+t()*(l-s),v=o.createRadialGradient(m,x,0,m,x,g),S=t()<.5?"0,0,0":"255,255,255";v.addColorStop(0,`rgba(${S},${c})`),v.addColorStop(1,`rgba(${S},0)`),o.fillStyle=v,o.fillRect(m-g,x-g,g*2,g*2)}}function D3(o,t){const c=(g,v)=>[(g+31)*16,(v+1)*16],[h,d]=Us(992,2432);d.fillStyle="#3b3d3f",d.fillRect(0,0,992,2432),cm(d,o,1100,20,190,.05),d.strokeStyle="rgba(0,0,0,0.3)",d.lineWidth=1.5;for(let g=0;g<=992;g+=96)d.beginPath(),d.moveTo(g,0),d.lineTo(g,2432),d.stroke();for(let g=0;g<=2432;g+=96)d.beginPath(),d.moveTo(0,g),d.lineTo(992,g),d.stroke();d.lineCap="round";for(const g of t)for(let v=0;v<9;v++){const[S,T]=c(g+(o()-.5)*1.6,20+o()*20),[w,M]=c(g+(o()-.5)*1.6,70+o()*36);d.strokeStyle=`rgba(0,0,0,${.05+o()*.08})`,d.lineWidth=2+o()*4,d.beginPath(),d.moveTo(S,T),d.bezierCurveTo(S+(o()-.5)*8,(T+M)/2,w+(o()-.5)*8,(T+M)/2,w,M),d.stroke()}const p=(g,v,S,T)=>{const[w,M]=c(g,v),y=d.createRadialGradient(w,M,0,w,M,S*16);y.addColorStop(0,`rgba(255,255,255,${T})`),y.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=y,d.fillRect(w-S*16,M-S*16,S*16*2,S*16*2)};d.globalCompositeOperation="overlay";for(const g of t)for(let v=33;v<98;v+=13)p(g,v,7,.75);for(const g of[-20,-7,7,20])for(const v of[9,112,128,142])p(g,v,12,.7);d.globalCompositeOperation="source-over";const[m,x]=Us(992/2,2432/2);x.fillStyle="#9a9a9a",x.fillRect(0,0,992/2,2432/2),cm(x,o,500,12,110,.1),x.fillStyle="rgba(0,0,0,0.3)";for(const g of t)x.fillRect((g+31)*16/2-11,432/2,22,1184/2);return x.fillRect(0,1600/2,992/2,224/2),x.fillRect(0,224/2,992/2,192/2),{map:Ls(h,!0),roughnessMap:Ls(m,!1)}}function Qx(o,t){let s=new Float32Array(65536);for(let d=0;d<s.length;d++)s[d]=o();for(let d=0;d<2;d++){const p=new Float32Array(65536);for(let m=0;m<256;m++)for(let x=0;x<256;x++){let g=0;for(let v=-1;v<=1;v++)for(let S=-1;S<=1;S++)g+=s[(m+v+256)%256*256+(x+S+256)%256];p[m*256+x]=g/9}s=p}const[l,c]=Us(256,256),h=c.createImageData(256,256);for(let d=0;d<256;d++)for(let p=0;p<256;p++){const m=(s[d*256+(p+1)%256]-s[d*256+(p-1+256)%256])*6,x=(s[(d+1)%256*256+p]-s[(d-1+256)%256*256+p])*6,g=Math.hypot(m,x,1),v=(d*256+p)*4;h.data[v]=-m/g*127+128,h.data[v+1]=-x/g*127+128,h.data[v+2]=1/g*127+128,h.data[v+3]=255}return c.putImageData(h,0,0),Ls(l,!1,t)}function Jx(o,t,i){const[l,c]=Us(512,512);c.fillStyle=t,c.fillRect(0,0,512,512);for(let m=0;m<1500;m++)c.fillStyle=`rgba(${o()<.5?"0,0,0":"255,255,255"},${.02+o()*.035})`,c.fillRect(o()*512,o()*512,30+o()*120,1);cm(c,o,70,20,120,.045),c.strokeStyle="rgba(255,255,255,0.16)",c.lineWidth=14,c.strokeRect(0,0,512,512),c.strokeStyle="rgba(0,0,0,0.35)",c.lineWidth=3,c.strokeRect(0,0,512,512),c.fillStyle="rgba(0,0,0,0.4)",c.fillRect(0,512/2-1,512,2),c.fillStyle=i,c.fillRect(0,512/2-40,512,80),c.fillStyle="rgba(255,255,255,0.14)",c.fillRect(0,512/2-40,512,3),c.fillRect(0,512/2+37,512,3),c.fillStyle="rgba(15,15,15,0.82)";for(const m of[46,92])c.beginPath(),c.moveTo(m,110),c.lineTo(m+17,76),c.lineTo(m+34,110),c.closePath(),c.fill(),c.fillRect(m+12,110,10,34);c.fillRect(40,152,92,5),c.font='800 34px "Sofia Sans Extra Condensed Variable", "Arial Narrow", sans-serif',c.fillText("ХРУПКОЕ",40,194),c.fillStyle="#f4f2ec",c.fillRect(300,330,176,128),c.fillStyle="#111";let h=312;for(;h<462;){const m=1+Math.floor(o()*4);c.fillRect(h,342,m,58),h+=m+1+Math.floor(o()*3)}c.fillRect(312,410,110,5),c.fillRect(312,422,150,5),c.fillRect(312,434,84,5);const[d,p]=Us(512/2,512/2);return p.fillStyle="#dcdcdc",p.fillRect(0,0,512/2,512/2),p.fillStyle="#383838",p.fillRect(0,512/4-20,512/2,40),p.fillStyle="#909090",p.fillRect(150,165,88,64),{map:Ls(l,!0),roughnessMap:Ls(d,!1)}}function U3(o){const[t,i]=Us(128,128);i.fillStyle="#8c765a",i.fillRect(0,0,128,128);for(let s=0;s<260;s++)i.fillStyle=`rgba(${o()<.6?"40,26,12":"255,240,210"},${.05+o()*.08})`,i.fillRect(0,o()*128,128,1);i.fillStyle="rgba(20,12,6,0.75)";for(let s=18;s<128;s+=22)i.fillRect(s,0,4,128);return Ls(t,!0)}function L3(o){const[t,i]=Us(64,256);i.fillStyle="#111213",i.fillRect(0,0,64,256),i.fillStyle=o;for(let s=-64;s<256;s+=64)i.beginPath(),i.moveTo(0,s+64),i.lineTo(64,s),i.lineTo(64,s+32),i.lineTo(0,s+96),i.closePath(),i.fill();return Ls(t,!0)}function O3(o,t){const[i,s]=Us(1024,256);s.font='900 250px "Sofia Sans Extra Condensed Variable", "Arial Narrow", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillStyle="#fff";const l=Math.min(1,1e3/s.measureText(t).width);s.save(),s.translate(512,138),s.scale(l,1),s.fillText(t,0,0),s.restore(),s.globalCompositeOperation="destination-out";for(let c=0;c<900;c++)s.fillStyle=`rgba(0,0,0,${.25+o()*.6})`,s.fillRect(o()*1024,o()*256,2+o()*26,1+o()*2.5);return Ls(i,!0)}const Ba=14221098,$x=[-25.9,-18.5,-11.1,-3.7,3.7,11.1,18.5,25.9],tS=[-22.2,-14.8,-7.4,0,7.4,14.8,22.2],zc=28,eS=25,nS=2.8,iS=5,fm=1.6,vp=[-18,-6,6,18],lM=.72,da=.66,Bc=1.36,hm=[-3.7,.25+2*fm+lM/2+.03,62],lr=-.12,P3=.108,I3=[[.03,-6,1.75,-1.8],[.07,-6,da,6],[.11,-6,da,6],[.15,-2,da,16],[.2,0,da,26],[.31,0,da,62],[.35,...hm],[.47,...hm],[.5,0,da,62],[.59,0,da,100],[.62,0,Bc,108],[.68,10,Bc,108],[.73,10,Bc,124],[.8,10,Bc,124],[.82,10,da,126],[.86,6,da,140],[.9,6,da,149],[.93,6,1.75,152]],z3=[[0,-6,0,6],[.11,-6,0,6],[.15,-2,0,16],[.2,0,0,26],[.31,0,0,62],[.5,0,0,62],[.59,0,0,100],[1,0,0,100]],B3=[[0,10,0,126],[.82,10,0,126],[.86,6,0,140],[.9,6,0,149],[1,6,0,149]],F3=[[.4,14,0,101],[.43,1.25,0,101],[.47,1.25,0,63.4],[.5,1.25,0,63.4],[.59,1.25,0,101.4],[1,1.25,0,101.4]],aS=[[lr,58,70,-40],[0,-30,22,-36],[.08,-27,21,-8],[.15,-15,11,3],[.25,14,50,34],[.31,9,22,44],[.35,2.3,5.6,54],[.4,2,6.4,52],[.47,3,26,98],[.58,-12,14,124],[.66,3,14,127],[.73,13,13,135],[.78,12.4,10.5,133.5],[.86,26,17,128],[.93,24,12,174],[1,26,36,198]],sS=[[lr,0,0,62],[0,-6,1,0],[.08,-5,.5,9],[.15,-2,1,16],[.25,0,0,62],[.31,-2.5,3,62],[.35,-3.7,3.6,62],[.4,-3.7,3.6,62],[.47,0,1,78],[.58,2,1,108],[.66,8,1,109],[.73,10,1,124],[.78,10,1.2,124],[.86,6,1,143],[.93,6,1.5,158],[1,6,0,180]],sf=new Ze,uM=new hr,Fa=new tt,cM=new tt,H3=new me;function G3(o){let t=o;return()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Fc(o,t,i){let s=0;for(;s<o.length-2&&t>o[s+1][0];)s++;const l=o[s],c=o[s+1],h=So((t-l[0])/(c[0]-l[0]));return i.set(l[1]+(c[1]-l[1])*h,l[2]+(c[2]-l[2])*h,l[3]+(c[3]-l[3])*h)}function rS(o,t){let i=0;for(;i<o.length-2&&t>o[i+1][0];)i++;const s=Zc((t-o[i][0])/(o[i+1][0]-o[i][0]));return(i+s)/(o.length-1)}const oS=o=>new hT(o.map(t=>new tt(t[1],t[2],t[3])),!1,"centripetal"),$e=o=>new om(o),Ul=(o,t)=>new me(o).multiplyScalar(t);function an(o,t,i,s=!0){const l=new Am(o,t,i.length);let c=!1;return i.forEach((h,d)=>{sf.compose(Fa.set(h[0],h[1],h[2]),uM.identity(),cM.set(h[3],h[4],h[5])),l.setMatrixAt(d,sf),h[6]!==void 0&&(l.setColorAt(d,H3.setScalar(h[6])),c=!0)}),l.instanceMatrix.needsUpdate=!0,c&&l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.castShadow=s,l.receiveShadow=!0,l}class V3{constructor(t){this.canvas=t,this.stats={boxes:0,mine:0},this.scene=new FS,this.camera=new Ii(30,1,.5,420),this.sun=new TT(16774114,2.6),this.maskRt=new Kn(4,4),this.depthOnly=new As({colorWrite:!1}),this.white=new As({color:16777215}),this.camCurve=oS(aS),this.lookCurve=oS(sS),this.look=new tt,this.route=[],this.target=lr,this.progress=new jv(lr,5),this.lens=new jv(0,10),this.lensOn=!1,this.split=1,this.mouse=new oe(-9999,-9999),this.dpr=1,this.maxDpr=1.5,this.raf=0,this.last=0,this.time=0,this.running=!1,this.probe={frames:0,sum:0,level:2},this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;const i=innerWidth<860;this.renderer=new M3({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mS,this.renderer.shadowMap.autoUpdate=!1,this.scene.background=new me(197636),this.scene.fog=new bm(197636,80,215);const s=new Xl(this.renderer);this.scene.environment=s.fromScene(new y3,.04).texture,this.scene.environmentIntensity=.32,s.dispose(),this.scene.add(new ST(14542576,1381914,.5)),this.sun.castShadow=!0,this.sun.shadow.mapSize.setScalar(i?1024:2048),this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.05,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=260,this.scene.add(this.sun,this.sun.target);const l=new Kn(4,4,{type:ni,samples:i?0:4});this.composer=new R3(this.renderer,l),this.composer.addPass(new C3(this.scene,this.camera)),this.bloom=new Ro(new oe(4,4),.3,.5,1.15),this.composer.addPass(this.bloom),this.final=new oM(N3),this.composer.addPass(this.final),i&&(this.maxDpr=1.25,this.probe.level=1),this.build(),this.resize(),this.frame(0)}setProgress(t){this.target=t}setSplit(t){this.split=t}setPointer(t,i,s){this.lensOn=s,s&&this.mouse.set(t*this.dpr,(this.canvas.clientHeight-i)*this.dpr)}resize(){const t=this.canvas.clientWidth||innerWidth,i=this.canvas.clientHeight||innerHeight;this.dpr=Math.min(devicePixelRatio||1,this.maxDpr),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,i,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,i),this.maskRt.setSize(Math.round(t*this.dpr/2),Math.round(i*this.dpr/2)),this.camera.aspect=t/i,this.camera.fov=t<i?50:30,this.camera.updateProjectionMatrix(),this.final.uniforms.uDot.value=Math.max(2,Math.round(2.2*this.dpr))}start(){if(this.running)return;this.running=!0,this.progress.set(this.target),this.last=performance.now();const t=i=>{if(!this.running)return;const s=(i-this.last)/1e3;this.tune(s),this.frame(Math.min(.05,s)),this.last=i,this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}renderAt(t){this.target=t,this.progress.set(t),this.frame(0)}dispose(){this.stop(),this.maskRt.dispose(),this.composer.dispose(),this.renderer.dispose()}tune(t){const i=this.probe;if(i.level===0||t>.5||(i.frames++,i.frames<=10)||(i.sum+=t,i.frames<50))return;const s=i.sum/(i.frames-10);i.frames=0,i.sum=0,!(s<.034)&&(i.level--,i.level===0?(this.bloom.enabled=!1,this.maxDpr=1):this.maxDpr=Math.min(this.maxDpr,1.25),this.resize())}frame(t){this.time+=t;let i=this.target;if(this.reduced||t===0)this.progress.set(i);else{this.target<0&&this.progress.x>.03&&this.progress.set(.03);const c=this.progress.x;i=this.progress.step(this.target,t);const h=P3*t;Math.max(c,this.target)>0&&Math.abs(i-c)>h&&(i=c+Math.sign(i-c)*h,this.progress.set(i))}this.update(i),this.renderer.shadowMap.needsUpdate=!0;const s=this.lens.step(this.lensOn?118*this.dpr:0,t);s>1&&this.renderMask();const l=this.final.uniforms;if(l.tMask.value=this.maskRt.texture,l.uLens.value=s,l.uMouse.value.copy(this.mouse),l.uSplit.value=this.split,this.composer.render(t),this.onStep){Fa.copy(this.hero.position).project(this.camera);const c=Fa.z<1&&Math.abs(Fa.x)<1&&Math.abs(Fa.y)<1,h=this.canvas.clientWidth,d=this.canvas.clientHeight;this.onStep(i,c?(Fa.x*.5+.5)*h:-1,c?(.5-Fa.y*.5)*d:-1)}}renderMask(){const t=this.renderer;t.setRenderTarget(this.maskRt),t.setClearColor(0,1),t.clear();const i=this.scene.background;this.scene.background=null,this.scene.overrideMaterial=this.depthOnly,t.autoClear=!1,t.render(this.scene,this.camera),this.camera.layers.set(1),this.scene.overrideMaterial=this.white,t.render(this.scene,this.camera),this.camera.layers.set(0),this.scene.overrideMaterial=null,this.scene.background=i,t.autoClear=!0,t.setRenderTarget(null)}update(t){const i=-34+33.4*So((t-lr)/.1),s=150.6+60*So((t-.93)/.07);this.truckIn.position.z=i,this.truckOut.position.z=s,t<.03?this.hero.position.set(-6,1.75,i-1.2):t>.93?this.hero.position.set(6,1.75,s+1.4):Fc(I3,t,this.hero.position),this.label.scale.setScalar(Math.max(1e-4,So((t-.75)/.015))),Fc(z3,t,this.robotA.position),Fc(B3,t,this.robotB.position),Fc(F3,t,this.picker.position);const l=t>.4&&t<.59&&!(t>.47&&t<.5);this.picker.position.y=l?Math.abs(Math.sin(t*900))*.04:0,this.picker.rotation.y=t<.43?-Math.PI/2:t<.485?Math.PI:0;const c=Math.exp(-(((t-.15)/.012)**2));this.gate.material.opacity=.75*c,this.gate.visible=c>.03;const h=55.1*So((t-.395)/.04)*(1-So((t-.5)/.08)),d=[14,38,3.1];let p=h;this.route.forEach((v,S)=>{const T=Math.max(1e-4,Math.min(d[S],p));p-=d[S],S===1?v.scale.z=T:v.scale.x=T,v.visible=T>.01});for(let v=0;v<this.belt.count;v++){const S=-21+(this.time*.9+v*3)%42;sf.compose(Fa.set(S,1.26,108),uM.identity(),cM.set(.62,.52,.62)),this.belt.setMatrixAt(v,sf)}this.belt.instanceMatrix.needsUpdate=!0,this.camCurve.getPoint(rS(aS,t),this.camera.position),this.lookCurve.getPoint(rS(sS,t),this.look),this.reduced||(this.camera.position.x+=Math.sin(this.time*.31)*.3,this.camera.position.y+=Math.sin(this.time*.23)*.18),this.camera.lookAt(this.look);const m=this.camera.position.distanceTo(this.hero.position);this.pin.position.copy(this.hero.position),this.pin.scale.setScalar(Math.max(.64,m*.028));const x=Math.min(120,Math.max(26,this.camera.position.distanceTo(this.look)*.75)),g=this.sun.shadow.camera;g.left=g.bottom=-x,g.right=g.top=x,g.updateProjectionMatrix(),this.sun.target.position.set(Math.round(this.look.x),0,Math.round(this.look.z)),this.sun.position.copy(this.sun.target.position).add(Fa.set(-38,90,-30)),this.sun.target.updateMatrixWorld()}build(){const t=G3(11),i=new pr(1,1,1),s=(...bt)=>this.scene.add(...bt),l=Jx(t,"#a48964","rgba(216,198,160,0.62)"),c=Jx(t,"#e4e0d6","rgba(190,164,118,0.5)"),h=$e({...l,roughness:1}),d=$e({...c,roughness:1}),p=$e({color:2303530,roughness:.5}),m=$e({color:1976113,metalness:.7,roughness:.5}),x=$e({color:11712444,metalness:.85,roughness:.38}),g=$e({color:4738129,metalness:.4,roughness:.7}),v=$e({color:12172478,roughness:.85}),S=$e({color:9278361,metalness:.85,roughness:.42}),T=$e({color:13815751,roughness:.5}),w=$e({color:1052947,roughness:.9}),M=$e({color:1776928,roughness:.45,metalness:.2}),y=$e({color:658446,roughness:.2,emissive:10135469,emissiveIntensity:.3}),D=$e({map:U3(t),roughness:.85}),L=$e({map:L3("#d8ff2a"),roughness:.6}),U=$e({color:Ul(Ba,.9),roughness:.7,emissive:Ba,emissiveIntensity:.1}),I=new As({color:Ul(Ba,1.5),fog:!1}),P=new As({color:new me(3.4,3.4,3.1),fog:!1}),E=new tn(new Ha(520,620),$e({color:1447705,roughness:.95,normalMap:Qx(t,[130,155])}));E.rotation.x=-Math.PI/2,E.position.set(0,-.01,70),E.receiveShadow=!0;const C=new tn(new Ha(62,152),$e({...D3(t,tS),color:8224125,roughness:1,normalMap:Qx(t,[31,76]),normalScale:new oe(.45,.45)}));C.rotation.x=-Math.PI/2,C.position.set(0,0,75),C.receiveShadow=!0,s(E,C);const Y=[],B=[],V=[];for(const bt of $x){for(let Wt=0;Wt<iS;Wt++){const ee=.25+Wt*fm;V.push([bt,ee,zc+35,1.04,.03,70]);for(const Zt of[-.52,.52])B.push([bt+Zt,ee-.07,zc+35,.06,.12,70])}for(let Wt=0;Wt<=eS;Wt++)for(const ee of[-.52,.52])Y.push([bt+ee,4.05,zc+Wt*nS,.09,8.1,.07])}s(an(i,m,Y),an(i,x,B),an(i,g,V));const q=[],lt=[],G=[];for(const bt of[0,150]){const Wt=bt===0?-1:1,ee=[-30,...vp.flatMap(Zt=>[Zt-1.8,Zt+1.8]),30];for(let Zt=0;Zt<ee.length;Zt+=2)q.push([(ee[Zt]+ee[Zt+1])/2,3.5,bt,ee[Zt+1]-ee[Zt],7,.4]);for(const Zt of vp){q.push([Zt,5.75,bt,3.6,2.5,.4]);for(const qt of[-1.72,1.72])lt.push([Zt+qt,2.25,bt+Wt*.26,.16,4.5,.12]);for(const qt of[-1.1,1.1])G.push([Zt+qt,.95,bt+Wt*.3,.45,.5,.2])}}for(const bt of[-30,30])q.push([bt,.2,75,.3,.4,150]);s(an(i,v,q),an(i,L,lt));const et=[[-4.2,1.6,16,.16,3.2,.16],[.2,1.6,16,.16,3.2,.16],[-2,3.2,16,4.56,.16,.16],[0,1.03,107.5,44,.1,.05],[0,1.03,108.5,44,.1,.05]];for(let bt=-20;bt<=20;bt+=4)for(const Wt of[-.42,.42])et.push([bt,.48,108+Wt,.07,.95,.07]);G.push([0,.975,108,44,.05,.9]);const Z=[],W=[],ft=[];for(const bt of[4,7,10,13,16]){Z.push([bt,.975,124,2.2,.05,1.1]);for(const Wt of[-1,1])for(const ee of[-.45,.45])et.push([bt+Wt,.475,124+ee,.06,.95,.06]);et.push([bt-.7,1.14,124.38,.04,.28,.04]),W.push([bt-.7,1.42,124.36,.52,.32,.03]),ft.push([bt+.82,1.12,124.22,.36,.24,.3])}s(an(i,S,et),an(i,w,G),an(i,T,Z),an(i,y,W,!1),an(i,M,ft)),s(an(i,I,[[-4.1,1.6,16,.03,2.6,.05],[.1,1.6,16,.03,2.6,.05]],!1));const it=[];for(const bt of tS)if(bt!==0)for(let Wt=33;Wt<98;Wt+=13)it.push([bt,10.6,Wt,.22,.07,1.5]);for(const[bt,Wt]of[[-20,9],[7,9],[20,9],[-20,128],[-7,128],[-20,142]])it.push([bt,10.6,Wt,1.5,.07,.22]);s(an(i,P,it,!1));const ct=[[],[],[]],Tt=[],Vt=[],ie=(bt,Wt)=>{if(t()<Wt)return void Tt.push(bt);const ee=t();ct[ee<.6?0:ee<.82?1:2].push(bt)};$x.forEach((bt,Wt)=>{for(let ee=0;ee<eS;ee++)for(let Zt=0;Zt<iS;Zt++)for(let qt=0;qt<3;qt++){const Se=zc+ee*nS+.5+qt*.9;if(t()>.84||Wt===3&&Zt===2&&Math.abs(Se-hm[2])<1)continue;const Ge=.45+t()*.75,on=.265+Zt*fm+Ge/2;ie([bt+(t()-.5)*.08,on,Se,.55+t()*.3,Ge,.68+t()*.14,.78+t()*.3],.2)}}),this.stats.boxes=Tt.length+ct.reduce((bt,Wt)=>bt+Wt.length,0),this.stats.mine=Tt.length;const N=(bt,Wt,ee)=>{Vt.push([bt,.07,Wt,1.8,.14,1.8]);const Zt=1+Math.floor(t()*3);for(let qt=0;qt<Zt;qt++)for(const Se of[-.42,.42])for(const Ge of[-.42,.42])t()<.12||ie([bt+Se,.5+qt*.72,Wt+Ge,.78,.7,.78,.8+t()*.28],ee)};for(const bt of[-12.5,-9.5,-3,0])for(const Wt of[5.5,9.5])N(bt,Wt,.1);for(const bt of[0,3,9,12])for(const Wt of[138.5,142.5])N(bt,Wt,.3);s(an(i,h,ct[0]),an(i,d,ct[1]),an(i,p,ct[2]),an(i,D,Vt));const $=an(i,h,Tt);$.layers.enable(1),s($);const gt=[[-1.7,.012,59,.12,.02,82],[1.7,.012,59,.12,.02,82]],dt=(bt,Wt,ee,Zt)=>{const qt=(bt+Wt)/2,Se=(ee+Zt)/2;gt.push([qt,.012,ee,Wt-bt,.02,.12],[qt,.012,Zt,Wt-bt,.02,.12]),gt.push([bt,.012,Se,.12,.02,Zt-ee],[Wt,.012,Se,.12,.02,Zt-ee])};dt(-14.5,1.6,3.2,12),dt(-1.8,14,136,145);for(const bt of vp)gt.push([bt,.012,1,3.6,.02,.3],[bt,.012,149,3.6,.02,.3]);s(an(i,U,gt,!1)),this.floorText(t,"ПРИЁМКА",12,8.5,15),this.floorText(t,"ХРАНЕНИЕ",15,22.5,16),this.floorText(t,"СБОРКА",-15,103.5,12),this.floorText(t,"УПАКОВКА",-11,126,16),this.floorText(t,"ОТГРУЗКА",-13,141,16),this.belt=new Am(i,h,14),this.belt.castShadow=!0,this.belt.receiveShadow=!0,s(this.belt),this.gate=new tn(new Ha(4.2,3),new As({color:Ul(Ba,1.6),transparent:!0,opacity:0,side:ji,depthWrite:!1,fog:!1})),this.gate.position.set(-2,1.6,16),this.gate.visible=!1,s(this.gate);const Mt=i.clone().translate(-.5,0,0),Pt=i.clone().translate(0,0,-.5),Jt=(bt,Wt,ee,Zt,qt)=>{const Se=new tn(bt,I);return Se.position.set(Wt,.03,ee),Se.scale.set(Zt,.02,qt),Se.visible=!1,s(Se),Se};this.route=[Jt(Mt,14,100,1,.2),Jt(Pt,0,100,.2,1),Jt(Mt,0,62,1,.2)],this.hero=new tn(i,$e({...c,color:Ba,roughness:1,emissive:Ba,emissiveIntensity:.55})),this.hero.scale.setScalar(lM),this.hero.layers.enable(1),this.hero.castShadow=!0,this.label=new tn(new Ha(.62,.42),$e({color:15921385,roughness:.6})),this.label.rotation.x=-Math.PI/2,this.label.position.y=.515,this.hero.add(this.label),s(this.hero),this.pin=new tn(new Nm(.88,1,4,1),new As({color:Ul(Ba,1.3),fog:!1,depthTest:!1,side:ji})),this.pin.rotation.set(-Math.PI/2,0,Math.PI/4),this.pin.renderOrder=10,s(this.pin);const Et=()=>{const bt=new rr;return bt.add(an(i,M,[[0,.15,0,.95,.24,.95]]),an(i,S,[[0,.28,0,.82,.02,.82]]),an(i,I,[[0,.1,0,.97,.035,.97]],!1)),s(bt),bt};this.robotA=Et(),this.robotB=Et(),this.picker=this.person(I),s(this.picker);const Bt=new Cm(.5,.5,.34,24).rotateZ(Math.PI/2),ge=bt=>{const Wt=new rr,ee=[];if(bt)for(let Zt=0;Zt<7;Zt++)for(const qt of[-.6,.6]){const Se=.6+t()*.7;ee.push([qt,1.28+Se/2,-3-Zt*1.25,1,Se,1,.8+t()*.28])}Wt.add(an(i,$e({color:2434858,roughness:.8}),[[0,1.15,-6,2.7,.25,12],[0,.6,-14.56,2.5,.4,.14]]),an(i,$e({color:11120307,metalness:.8,roughness:.45}),[[-1.31,1.95,-6,.08,1.35,12],[1.31,1.95,-6,.08,1.35,12],[0,1.95,-11.96,2.7,1.35,.08]]),an(i,$e({color:14276302,roughness:.35,metalness:.25}),[[0,1.6,-13.4,2.5,2.7,2.2]]),an(i,$e({color:395274,roughness:.06}),[[0,2.3,-14.51,2.2,.95,.04]],!1)),ee.length&&Wt.add(an(i,h,ee));for(const Zt of[-1.6,-3,-12.9])for(const qt of[-1.2,1.2]){const Se=new tn(Bt,w);Se.position.set(qt,.5,Zt),Se.castShadow=!0,Wt.add(Se)}return Wt};this.truckIn=ge(!0),this.truckIn.position.x=-6,this.truckOut=ge(!1),this.truckOut.position.x=6,this.truckOut.rotation.y=Math.PI,s(this.truckIn,this.truckOut)}person(t){const i=new rr,s=$e({color:1711136,roughness:.85}),l=(d,p,m,x,g=0)=>{const v=new tn(d,p);return v.position.set(m,x,g),v.castShadow=!0,i.add(v),v},c=new zl(.075,.6,4,10),h=new zl(.055,.48,4,10);return l(c,s,-.1,.42),l(c,s,.1,.42),l(new zl(.17,.4,6,14),t,0,1.1),l(h,s,-.25,1.08).rotation.z=-.12,l(h,s,.25,1.08).rotation.z=.12,l(new nf(.11,18,14),$e({color:11836036,roughness:.7}),0,1.56),l(new nf(.128,18,10,0,Math.PI*2,0,Math.PI/2),$e({color:15329248,roughness:.35}),0,1.585),i}floorText(t,i,s,l,c){const h=$e({map:O3(t,i),color:Ul(Ba,.9),roughness:.75,emissive:Ba,emissiveIntensity:.08,transparent:!0,depthWrite:!1}),d=new tn(new Ha(c,c/4),h);d.position.set(s,.02,l),d.quaternion.setFromRotationMatrix(new Ze().makeBasis(new tt(-1,0,0),new tt(0,0,1),new tt(0,1,0))),d.receiveShadow=!0,this.scene.add(d)}}const X3="АБВГДЕЖИКЛМНОПРСТУХЦШЭЯ",k3="0123456789",W3=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function uf({text:o,numeric:t,onTick:i,className:s}){const[l,c]=Ae.useState(o),h=Ae.useRef(o);return Ae.useEffect(()=>{if(h.current===o)return;if(h.current=o,W3()){c(o);return}const d=t?k3:X3,p=t?3:6;let m=0;const x=setInterval(()=>{m++;const g=Math.max(0,m-p);let v=o.slice(0,g);for(let S=g;S<o.length;S++){const T=o[S];v+=/[0-9A-Za-zА-Яа-яЁё]/.test(T)?d[Math.random()*d.length|0]:T}c(v),m%2===0&&i?.(),g>=o.length&&clearInterval(x)},38);return()=>clearInterval(x)},[o,t,i]),F.jsx("span",{className:s,"aria-label":o,children:F.jsx("span",{"aria-hidden":"true",children:l})})}const fM=[{id:"014",name:"Чайная лавка"},{id:"027",name:"Свет и дом"}],lS=[{seller:"014",sku:"ЧЛ-0101",name:"Чай чёрный листовой, 100 г",cell:"Б-07-3",qty:1240,days:14},{seller:"027",sku:"СД-1001",name:"Лампа настольная, чёрная",cell:"Г-03-2",qty:320,days:12},{seller:"014",sku:"ЧЛ-0102",name:"Чай зелёный, 100 г",cell:"Б-07-4",qty:860,days:9},{seller:"027",sku:"СД-1002",name:"Лампа настольная, белая",cell:"Г-03-3",qty:275,days:12},{seller:"014",sku:"ЧЛ-0210",name:"Набор подарочный «Шесть сортов»",cell:"В-02-1",qty:212,days:21},{seller:"027",sku:"СД-2040",name:"Гирлянда 10 м, тёплый свет",cell:"Д-14-1",qty:1900,days:4},{seller:"014",sku:"ЧЛ-0305",name:"Чайник заварочный стеклянный, 600 мл",cell:"А-11-2",qty:148,days:6},{seller:"014",sku:"ЧЛ-0306",name:"Ситечко стальное",cell:"А-11-5",qty:530,days:31},{seller:"027",sku:"СД-3110",name:"Плед 130×170, серый",cell:"Е-05-2",qty:410,days:18},{seller:"027",sku:"СД-3115",name:"Подушка декоративная 45×45",cell:"Е-05-4",qty:660,days:25},{seller:"014",sku:"ЧЛ-0401",name:"Пуэр прессованный, 357 г",cell:"Б-08-1",qty:96,days:3}],q3=[{seller:"014",no:"П-318",date:"10.11.2026",places:8,units:396,status:"Принята"},{seller:"027",no:"П-316",date:"09.11.2026",places:20,units:2310,status:"Принята"},{seller:"027",no:"П-320",date:"12.11.2026",places:6,units:590,status:"Расхождение"},{seller:"014",no:"П-305",date:"02.11.2026",places:12,units:1480,status:"Принята"}],Y3=[{seller:"014",no:"88-2050",market:"Яндекс Маркет",items:2,status:"В очереди",time:"14:52"},{seller:"027",no:"91-0427",market:"Wildberries",items:4,status:"В очереди",time:"14:49"},{seller:"027",no:"91-0431",market:"Ozon",items:1,status:"Упакован",time:"14:40"},{seller:"014",no:"88-2044",market:"Ozon",items:1,status:"Упакован",time:"14:31"},{seller:"014",no:"88-2041",market:"Wildberries",items:3,status:"Собран",time:"14:05"},{seller:"027",no:"91-0420",market:"Wildberries",items:1,status:"Собран",time:"13:58"},{seller:"014",no:"88-2031",market:"Wildberries",items:5,status:"Отгружен",time:"12:40"},{seller:"027",no:"91-0412",market:"Ozon",items:2,status:"Отгружен",time:"11:15"}],Ll=["supplier","inn","no","date","items","places"],Z3={supplier:"Поставщик",inn:"ИНН",no:"Документ",date:"Дата",items:"Позиции",places:"Мест"},xp=[{id:"torg",title:"Накладная",lines:["ТОВАРНАЯ НАКЛАДНАЯ № [[no|322]] от [[date|13.11.2026]]","Поставщик: [[supplier|ООО «Чайный путь»]], ИНН [[inn|7799012345]]","Получатель: склад «Тара», Подольск","","1. [[items|Чай чёрный листовой, 100 г          240 шт.]]","2. [[items|Чай зелёный, 100 г                  120 шт.]]","3. [[items|Набор подарочный «Шесть сортов»      36 шт.]]","","Всего мест: [[places|5]]. Всего единиц: 396.","Отпустил: кладовщик Петров И. С."],parsed:{supplier:"ООО «Чайный путь»",inn:"7799012345",no:"ТН № 322",date:"13.11.2026",places:5,items:[{name:"Чай чёрный листовой, 100 г",qty:240},{name:"Чай зелёный, 100 г",qty:120},{name:"Набор подарочный «Шесть сортов»",qty:36}]},flags:[],supply:"П-322"},{id:"upd",title:"УПД с ошибкой",lines:["УНИВЕРСАЛЬНЫЙ ПЕРЕДАТОЧНЫЙ ДОКУМЕНТ № [[no|77]] от [[date|11.11.2026]]","Продавец: [[supplier|ИП Соколова А. В.]], ИНН [[inn|779901234567]]","","Наименование                              Кол-во","[[items|Ситечко стальное                          200]]","[[items|Чайник заварочный стеклянный, 600 мл        60]]","","Всего мест: [[places|4]]. Всего единиц: 250."],parsed:{supplier:"ИП Соколова А. В.",inn:"779901234567",no:"УПД № 77",date:"11.11.2026",places:4,items:[{name:"Ситечко стальное",qty:200},{name:"Чайник заварочный стеклянный, 600 мл",qty:60}]},flags:["В документе итог 250 единиц, по строкам выходит 260. Пересчитать при приёмке."],supply:"П-323"},{id:"mail",title:"Письмо без номера",lines:["От: Марина, склад «[[supplier|Чайный путь]]»","Дата письма: 12.11.2026","","Добрый день. Сегодня отгрузили вам [[places|три короба]] пуэра,","[[items|в каждом по 32 блина по 357 г]]. Накладную водитель","привезёт с собой, номер пока не знаю.","Машина будет [[date|завтра до обеда]]."],parsed:{supplier:"Чайный путь",inn:"не указан",no:"нет номера",date:"13.11.2026",places:3,items:[{name:"Пуэр прессованный, 357 г",qty:96}]},flags:["Номера документа нет: приёмка создаётся как ожидаемая, номер внесёт кладовщик.","ИНН поставщика в письме не указан.","Количество посчитано: 3 короба × 32 = 96."],supply:"П-324"}],K3=[["stock","Остатки"],["supplies","Поставки"],["orders","Заказы"]],uS={stock:["Артикул","Товар","Ячейка","Остаток","Дней"],supplies:["Поставка","Дата","Мест","Единиц","Статус"],orders:["Заказ","Площадка","Позиций","Статус","Время"]},j3={stock:"stock",supplies:"supplies",orders:"orders"},Q3=new Set(["Принята","Отгружен"]),J3=o=>o.toLocaleString("ru-RU");function $3({text:o}){const t=Q3.has(o)?"done":o==="Расхождение"?"warn":"wait";return F.jsx("span",{className:"chip","data-kind":t,children:o})}function cS({seller:o,tab:t,added:i,onSeller:s,onTab:l,onTick:c,onAdd:h,solo:d,onExit:p}){const m=t==="stock"?lS.map(L=>({seller:L.seller,cells:[L.sku,L.name,L.cell,L.qty,L.days]})):t==="supplies"?[...i.map(L=>({seller:L.seller,cells:[L.no,L.date,L.places,L.units,L.status],fresh:!0})),...q3.map(L=>({seller:L.seller,cells:[L.no,L.date,L.places,L.units,L.status]}))]:Y3.map(L=>({seller:L.seller,cells:[L.no,L.market,L.items,L.status,L.time]})),x=m.filter(L=>L.seller===o),g=lS.filter(L=>L.seller===o),[v,S]=Ae.useState(!1),[T,w]=Ae.useState({sku:"",units:100,places:2,date:""}),M=T.units>0&&T.places>0&&T.date!=="",y=L=>{if(L.preventDefault(),!M)return;const[U,I,P]=T.date.split("-");h({seller:o,no:`П-${330+i.length}`,date:`${P}.${I}.${U}`,places:T.places,units:T.units,status:"Ожидается"}),S(!1)};if(d)return D();return F.jsxs("section",{className:"cab",id:"cabinet",children:[F.jsxs("header",{className:"sec-head sec-head--dark",children:[F.jsx("p",{className:"mono",children:"07 / Кабинет"}),F.jsxs("h2",{children:["Каждый видит",F.jsx("br",{}),"только своё"]})]}),F.jsxs("div",{className:"cab__grid",children:[F.jsxs("div",{className:"cab__note",children:[F.jsx("p",{children:"На одном складе лежит товар сотен продавцов. В базе их строки хранятся в общих таблицах, а отбирает их сама база по правилу доступа. Страница кабинета не может запросить чужое, даже если в её коде ошибка."}),F.jsx("p",{children:"Переключите продавца: таблица и счётчик строк изменятся."}),F.jsxs("details",{className:"how",children:[F.jsx("summary",{className:"mono",children:"Как это устроено"}),F.jsx("pre",{className:"policy",children:F.jsx("code",{children:`create policy seller_isolation on ${j3[t]}
  using (seller_id = (current_setting(
    'request.jwt.claims', true)::json ->> 'seller_id'));`})}),F.jsx("p",{className:"mono cab__fine",children:"На демо базу заменяет фильтр в браузере. Схема, правила и проверка правил лежат в папке db репозитория."})]})]}),D()]})]});function D(){return F.jsxs("div",{className:"win",children:[F.jsxs("div",{className:"win__bar",children:[F.jsx("div",{className:"win__sellers",role:"group","aria-label":"Продавец",children:fM.filter(L=>!d||L.id===o).map(L=>F.jsxs("button",{type:"button","aria-pressed":o===L.id,onClick:()=>s(L.id),children:[F.jsxs("span",{className:"mono",children:["Продавец ",L.id]}),F.jsx("b",{children:L.name})]},L.id))}),F.jsxs("div",{className:"win__tabs mono",role:"tablist",children:[K3.map(([L,U])=>F.jsx("button",{type:"button",role:"tab","aria-selected":t===L,onClick:()=>l(L),children:U},L)),d&&F.jsx("button",{type:"button",className:"win__exit",onClick:p,children:"Выйти"})]})]}),F.jsxs("p",{className:"win__meta mono","aria-live":"polite",children:[F.jsxs("span",{children:["seller_id = ",o]}),F.jsxs("span",{children:["запрос вернул ",F.jsx(uf,{text:String(x.length),numeric:!0,onTick:c})," из ",m.length," строк"]})]}),t==="supplies"&&!v&&F.jsxs("div",{className:"win__act",children:[F.jsx("button",{className:"btn",type:"button",onClick:()=>S(!0),children:"Новая поставка"}),F.jsx("span",{className:"mono",children:"Сообщите, что везёте: склад подготовит место и ворота"})]}),t==="supplies"&&v&&F.jsxs("form",{className:"supply",onSubmit:y,children:[F.jsxs("label",{children:[F.jsx("span",{className:"mono",children:"Товар"}),F.jsx("select",{value:T.sku||g[0]?.sku,onChange:L=>w({...T,sku:L.target.value}),children:g.map(L=>F.jsxs("option",{value:L.sku,children:[L.sku," · ",L.name]},L.sku))})]}),F.jsxs("label",{children:[F.jsx("span",{className:"mono",children:"Единиц"}),F.jsx("input",{type:"number",min:1,value:T.units,onChange:L=>w({...T,units:+L.target.value})})]}),F.jsxs("label",{children:[F.jsx("span",{className:"mono",children:"Мест"}),F.jsx("input",{type:"number",min:1,value:T.places,onChange:L=>w({...T,places:+L.target.value})})]}),F.jsxs("label",{children:[F.jsx("span",{className:"mono",children:"Дата прибытия"}),F.jsx("input",{type:"date",value:T.date,onChange:L=>w({...T,date:L.target.value})})]}),F.jsxs("div",{className:"supply__btns",children:[F.jsx("button",{className:"btn",type:"submit",disabled:!M,children:"Отправить"}),F.jsx("button",{className:"link mono",type:"button",onClick:()=>S(!1),children:"Отмена"})]})]}),F.jsx("div",{className:"win__scroll",children:F.jsxs("table",{children:[F.jsx("thead",{children:F.jsx("tr",{children:uS[t].map(L=>F.jsx("th",{children:L},L))})}),F.jsx("tbody",{children:x.map(L=>F.jsx("tr",{"data-fresh":L.fresh,children:L.cells.map((U,I)=>F.jsx("td",{children:typeof U=="number"?J3(U):uS[t][I]==="Статус"?F.jsx($3,{text:U}):U},I))},String(L.cells[0])))},o+t)]})})]})}}const tC=[["fbs","Сборка под заказ","каждый заказ собираем отдельно"],["fbo","Поставка коробами","товар уходит на склад площадки партией"]],eC=[["bag","Пакет"],["box","Коробка"],["bubble","Плёнка и коробка"]];function fS(o){const t=(o.value-o.min)/(o.max-o.min)*100;return F.jsxs("label",{className:"field",children:[F.jsxs("span",{className:"field__top",children:[F.jsx("span",{className:"mono",children:o.label}),F.jsxs("span",{className:"field__val",children:[o.value.toLocaleString("ru-RU")," ",F.jsx("small",{children:o.unit})]})]}),F.jsx("input",{type:"range",min:o.min,max:o.max,step:o.step,value:o.value,style:{"--fill":`${t}%`},onChange:i=>o.onChange(+i.target.value)})]})}function nC(){const[o,t]=Ae.useState(2e3),[i,s]=Ae.useState(14),[l,c]=Ae.useState("fbs"),[h,d]=Ae.useState("box"),[p,m]=Ae.useState(!1),x=[["Приёмка",`${o.toLocaleString("ru-RU")} × ${Ki(Yn.accept)}`,o*Yn.accept],["Хранение",`${o.toLocaleString("ru-RU")} × ${i} дн. × ${Ki(Yn.storeDay)}`,o*i*Yn.storeDay],["Сборка",`${o.toLocaleString("ru-RU")} × ${Ki(Yn.pick[l])}`,o*Yn.pick[l]],["Упаковка",`${o.toLocaleString("ru-RU")} × ${Ki(Yn.pack[h])}`,o*Yn.pack[h]],["Отгрузка",`${o.toLocaleString("ru-RU")} × ${Ki(Yn.ship)}`,o*Yn.ship]],g=x.reduce((S,T)=>S+T[2],0),v=g/o;return F.jsxs("section",{className:"calc",id:"calc","data-light":!0,children:[F.jsxs("header",{className:"sec-head",children:[F.jsx("p",{className:"mono",children:"06 / Тариф"}),F.jsxs("h2",{children:["Те же цифры",F.jsx("br",{}),"на ваш объём"]})]}),F.jsxs("div",{className:"calc__grid",children:[F.jsxs("div",{children:[F.jsx(fS,{label:"Единиц в месяц",value:o,min:200,max:2e4,step:100,unit:"шт.",onChange:t}),F.jsx(fS,{label:"Средний срок хранения",value:i,min:1,max:60,step:1,unit:"дн.",onChange:s}),F.jsxs("div",{className:"field",children:[F.jsx("span",{className:"mono",children:"Схема работы"}),F.jsx("div",{className:"seg",children:tC.map(([S,T,w])=>F.jsxs("button",{type:"button","aria-pressed":l===S,onClick:()=>c(S),children:[F.jsx("b",{children:T}),F.jsx("span",{children:w})]},S))})]}),F.jsxs("div",{className:"field",children:[F.jsx("span",{className:"mono",children:"Упаковка"}),F.jsx("div",{className:"seg seg--row",children:eC.map(([S,T])=>F.jsxs("button",{type:"button","aria-pressed":h===S,onClick:()=>d(S),children:[F.jsx("b",{children:T}),F.jsxs("span",{children:[Ki(Yn.pack[S],0)," ₽"]})]},S))})]})]}),F.jsxs("aside",{className:"ticket","aria-live":"polite",children:[F.jsxs("header",{className:"mono",children:[F.jsx("span",{children:"Расчёт на месяц"}),F.jsx("span",{children:"Тара · склад 01"})]}),F.jsx("ol",{children:x.map(([S,T,w])=>F.jsxs("li",{children:[F.jsxs("span",{children:[F.jsx("b",{children:S}),F.jsx("i",{children:T})]}),F.jsx("span",{children:Ki(w,0)})]},S))}),F.jsxs("p",{className:"ticket__total",children:[F.jsx("span",{className:"mono",children:"Итого в месяц, ₽"}),F.jsx("strong",{children:Ki(g,0)})]}),F.jsxs("p",{className:"ticket__unit mono",children:[F.jsx("span",{children:"За единицу"}),F.jsxs("span",{children:[Ki(v)," ₽"]})]}),F.jsx("div",{className:"barcode barcode--wide","aria-hidden":"true"}),F.jsx("button",{className:"btn btn--ink",type:"button",onClick:()=>m(!0),children:"Получить договор с этим расчётом"}),p&&F.jsx("p",{className:"ticket__note",children:"Это концепт для портфолио: заявка никуда не отправляется."})]})]})]})}function iC(){const o=Ae.useRef(null);return Ae.useEffect(()=>{const t=o.current;if(!matchMedia("(hover: hover) and (pointer: fine)").matches)return;document.documentElement.classList.add("own-cursor");let i=-100,s=-100,l=i,c=s,h=0;const d=()=>{i+=(l-i)*.35,s+=(c-s)*.35,t.style.transform=`translate(${i.toFixed(1)}px, ${s.toFixed(1)}px)`,h=Math.abs(l-i)+Math.abs(c-s)>.2?requestAnimationFrame(d):0},p=x=>{if(x.pointerType!=="mouse")return;l=x.clientX,c=x.clientY;const g=x.target,v=!!g.closest?.(".stage")&&!g.closest(".portal");t.dataset.on=String(!v),t.dataset.hot=String(!!g.closest?.("a, button, input, label")),h||(h=requestAnimationFrame(d))},m=()=>t.dataset.on="false";return addEventListener("pointermove",p,{passive:!0}),document.documentElement.addEventListener("pointerleave",m),()=>{cancelAnimationFrame(h),removeEventListener("pointermove",p),document.documentElement.removeEventListener("pointerleave",m),document.documentElement.classList.remove("own-cursor")}},[]),F.jsx("div",{className:"cursor",ref:o,"data-on":"false","aria-hidden":"true"})}function aC(){const[o,t]=Ae.useState(6412);Ae.useEffect(()=>{const s=setInterval(()=>t(l=>l+1+(Math.random()*3|0)),4600);return()=>clearInterval(s)},[]);const i=[["Единиц на хранении","184 320",!1],["Отгружено сегодня",o.toLocaleString("ru-RU"),!0],["Точность сборки","99,7 %",!1],["Заказ собран за","3 ч 40 мин",!1]];return F.jsxs("section",{className:"hero",id:"top",children:[F.jsxs("p",{className:"hero__meta mono",children:[F.jsx("span",{children:"Фулфилмент для продавцов маркетплейсов"}),F.jsx("span",{children:"Склад 01 · Подольск · 12 400 м²"})]}),F.jsx("div",{className:"word","aria-hidden":"true",children:"ТАРА".split("").map((s,l)=>F.jsx("span",{children:s},l))}),F.jsxs("div",{className:"hero__row",children:[F.jsxs("div",{className:"hero__lead",children:[F.jsxs("h1",{children:[F.jsx("span",{className:"sr",children:"Тара. "}),"Склад, который ",F.jsx("em",{children:"видно"})]}),F.jsx("p",{children:"Принимаем, храним, собираем и отгружаем товар на маркетплейсы. Каждая единица видна в кабинете с момента разгрузки, а цена обработки известна до договора."}),F.jsxs("div",{className:"hero__cta",children:[F.jsx("a",{className:"btn",href:"#calc",children:"Посчитать тариф"}),F.jsx("a",{className:"link mono",href:"#path",children:"Проехать по складу ↓"})]})]}),F.jsx("dl",{className:"board",children:i.map(([s,l,c])=>F.jsxs("div",{children:[F.jsx("dt",{className:"mono",children:s}),F.jsx("dd",{children:c?F.jsx(uf,{text:l,numeric:!0}):l})]},s))})]})]})}function hS({i:o}){const t=ma[o];return F.jsxs("article",{className:"sticker",children:[F.jsxs("header",{className:"mono",children:[F.jsxs("span",{children:[t.no," / 05"]}),F.jsx("span",{children:t.zone})]}),F.jsx("h2",{children:t.title}),F.jsx("p",{children:t.text}),F.jsxs("footer",{className:"mono",children:[F.jsx("b",{children:"В кабинете"}),F.jsx("span",{children:t.cabinet})]}),F.jsx("div",{className:"barcode","aria-hidden":"true"})]})}function dS({done:o,onTick:t}){const i=ma.slice(0,o).reduce((s,l)=>s+l.sum,0);return F.jsxs("aside",{className:"receipt",children:[F.jsx("p",{className:"mono receipt__head",children:"Цена за единицу, ₽"}),F.jsx("ol",{children:ma.map((s,l)=>F.jsxs("li",{"data-on":l<o,children:[F.jsx("span",{children:s.line}),F.jsx("span",{children:Ki(s.sum)})]},s.no))}),F.jsxs("p",{className:"receipt__total",children:[F.jsx("span",{className:"mono",children:"Итого"}),F.jsx(uf,{text:Ki(i),numeric:!0,onTick:t})]})]})}function sC({view:o,gl:t,onTick:i}){if(!t)return F.jsxs("div",{className:"acts",children:[ma.map((h,d)=>F.jsx(hS,{i:d},d)),F.jsx(dS,{done:ma.length})]});const s=Math.max(0,o.act),l=o.done>0?ma[o.done-1]:null,c=o.done===2;return F.jsxs("div",{className:"hud",children:[F.jsxs("div",{className:"status",children:[F.jsx("p",{className:"mono",children:"Коробка TR-0420-117"}),F.jsx(uf,{className:"status__flap",text:l?l.status:"В ПУТИ",onTick:i}),F.jsxs("p",{className:"mono status__time",children:[l?l.time:"08:50 · фура во дворе",c&&` · день ${String(o.day).padStart(2,"0")} из ${Sp}`]})]}),F.jsx(hS,{i:s},s),F.jsx(dS,{done:o.done,onTick:i}),F.jsxs("div",{className:"rail mono","aria-hidden":"true",children:[F.jsx("i",{}),ma.map((h,d)=>F.jsxs("span",{style:{left:`${h.from*100}%`},"data-on":d<=s,children:[h.no," ",h.zone]},h.no))]})]})}const rC=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function oC({text:o,found:t}){const i=o.split(/(\[\[[a-z]+\|[^\]]+\]\])/g);return F.jsxs("span",{children:[i.map((s,l)=>{const c=s.match(/^\[\[([a-z]+)\|([^\]]+)\]\]$/);return c?F.jsx("mark",{"data-on":t.has(c[1]),children:c[2]},l):s}),`
`]})}function lC({created:o,onCreate:t,onTick:i}){const[s,l]=Ae.useState(xp[0].id),[c,h]=Ae.useState(0),[d,p]=Ae.useState(!1),m=xp.find(M=>M.id===s),x=c>=Ll.length,g=new Set(Ll.slice(0,c)),v=m.parsed.items.reduce((M,y)=>M+y.qty,0),S=o.includes(m.supply);Ae.useEffect(()=>{if(!d)return;if(rC()||c>=Ll.length){h(Ll.length),p(!1);return}const M=setTimeout(()=>{i(),h(c+1)},420);return()=>clearTimeout(M)},[d,c,i]);const T=M=>{l(M),h(0),p(!1)},w=M=>M==="items"?`${m.parsed.items.length} поз., ${v.toLocaleString("ru-RU")} ед.`:String(m.parsed[M]);return F.jsxs("section",{className:"parse",id:"parser","data-light":!0,children:[F.jsxs("header",{className:"sec-head",children:[F.jsx("p",{className:"mono",children:"08 / Накладная"}),F.jsxs("h2",{children:["Документ в приёмку",F.jsx("br",{}),"без ручного ввода"]})]}),F.jsxs("div",{className:"parse__grid",children:[F.jsxs("div",{children:[F.jsx("div",{className:"seg seg--row",role:"group","aria-label":"Документ",children:xp.map(M=>F.jsx("button",{type:"button","aria-pressed":M.id===s,onClick:()=>T(M.id),children:F.jsx("b",{children:M.title})},M.id))}),F.jsx("pre",{className:"doc",children:m.lines.map((M,y)=>F.jsx(oC,{text:M,found:g},m.id+y))}),F.jsx("p",{className:"mono parse__rec",children:"Запись разбора. На демо модель не вызывается: результат сохранён заранее и проигрывается по шагам."})]}),F.jsxs("aside",{className:"ticket draft","aria-live":"polite",children:[F.jsxs("header",{className:"mono",children:[F.jsxs("span",{children:["Черновик приёмки ",m.supply]}),F.jsx("span",{children:"продавец 014"})]}),F.jsx("ol",{children:Ll.map((M,y)=>F.jsxs("li",{"data-on":y<c,children:[F.jsx("span",{children:Z3[M]}),F.jsx("span",{children:y<c?w(M):"···"})]},M))}),x&&F.jsxs("ul",{className:"draft__flags",children:[m.flags.length===0&&F.jsx("li",{"data-ok":!0,children:"Итог по строкам совпал с итогом документа."}),m.flags.map(M=>F.jsx("li",{children:M},M))]}),!x&&F.jsx("button",{className:"btn btn--ink",type:"button",disabled:d,onClick:()=>p(!0),children:d?"Разбираю":"Разобрать документ"}),x&&!S&&F.jsx("button",{className:"btn btn--ink",type:"button",onClick:()=>t({seller:"014",no:m.supply,date:m.parsed.date,places:m.parsed.places,units:v,status:m.flags.length&&m.id==="upd"?"Расхождение":"Ожидается"}),children:"Создать приёмку в кабинете"}),x&&S&&F.jsxs("a",{className:"btn btn--ink",href:"#cabinet",children:["Приёмка ",m.supply," в кабинете"]})]})]})]})}const uC='900 100px "Sofia Sans Extra Condensed Variable"';function pS(){const o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}).format(new Date),t=+o.slice(0,2);return`${o} МСК · ${t>=8&&t<20?"дневная":"ночная"} смена`}function cC(){const o=Ae.useRef(null),t=Ae.useRef(null),i=Ae.useRef(null),s=Ae.useRef(null),l=Ae.useRef(null),c=Ae.useRef(null),[h]=Ae.useState(()=>new tE),[d,p]=Ae.useState(!1),[m,x]=Ae.useState(!0),[g,v]=Ae.useState({act:-1,done:0,day:1}),[S,T]=Ae.useState({boxes:0,mine:0}),[w,M]=Ae.useState(pS),[y,D]=Ae.useState("014"),[L,U]=Ae.useState("stock"),[I,P]=Ae.useState(()=>{try{return JSON.parse(localStorage.getItem("tara.supplies")??"[]")}catch{return[]}});Ae.useEffect(()=>{try{localStorage.setItem("tara.supplies",JSON.stringify(I))}catch{}},[I]);const E=Ae.useCallback(V=>P(q=>[V,...q]),[]),[C,Y]=Ae.useState("closed"),B=Ae.useCallback(()=>h.tick(),[h]);return Ae.useEffect(()=>{const V=setInterval(()=>M(pS()),2e4);return()=>clearInterval(V)},[]),Ae.useEffect(()=>{let V=!0,q=null,lt={act:-1,done:0,day:1},G=lr,et=scrollY,Z=performance.now(),W=0;const ft=t.current,it=i.current,ct=()=>{const dt=it.getBoundingClientRect(),Mt=innerHeight;return dt.top>0?lr*Math.min(1,dt.top/Mt):Math.min(1,-dt.top/(dt.height-Mt))},Tt=(dt,Mt,Pt)=>{ft.style.setProperty("--s",String(Math.max(0,dt)));const Jt=l.current;if(Jt){const bt=dt>.03&&dt<.985&&Mt>=0;Jt.dataset.on=String(bt),bt&&(Jt.style.transform=`translate(${Mt.toFixed(1)}px, ${Pt.toFixed(1)}px)`)}let Et=-1;dt>=0&&ma.forEach((bt,Wt)=>dt>=bt.from&&(Et=Wt));const Bt=ma.filter(bt=>dt>=bt.at).length,ge=1+Math.round(13*Zc((dt-.35)/.12));(Et!==lt.act||Bt!==lt.done||ge!==lt.day)&&(lt={act:Et,done:Bt,day:ge},v(lt)),G<.15&&dt>=.15&&h.beep(),G<.76&&dt>=.76&&h.print(),(G<0&&dt>=0||G<.93&&dt>=.93)&&h.thud(),G=dt},Vt=()=>{q?.setProgress(ct()),q?.setSplit(Zc(it.getBoundingClientRect().top/innerHeight));let dt=!1;document.querySelectorAll("[data-light]").forEach(Pt=>{const Jt=Pt.getBoundingClientRect();Jt.top<40&&Jt.bottom>40&&(dt=!0)}),c.current&&(c.current.dataset.ink=String(dt));const Mt=performance.now();h.setSpeed(Math.abs(scrollY-et)/Math.max(16,Mt-Z)/3),et=scrollY,Z=Mt,clearTimeout(W),W=window.setTimeout(()=>h.setSpeed(0),160)},ie=dt=>{if(dt.pointerType!=="mouse")return;const Mt=ft.getBoundingClientRect(),Pt=dt.target.closest?.("a, button, input, .bar"),Jt=dt.clientY<Mt.bottom&&!Pt;q?.setPointer(dt.clientX,dt.clientY,Jt);const Et=s.current;Et&&(Et.style.transform=`translate(${dt.clientX}px, ${dt.clientY}px)`,Et.dataset.on=String(Jt&&!!q))},N=()=>{q?.setPointer(0,0,!1),s.current&&(s.current.dataset.on="false")},$=()=>{q?.resize(),Vt()},gt=new IntersectionObserver(([dt])=>{o.current.style.visibility=dt.isIntersecting?"visible":"hidden",dt.isIntersecting?q?.start():(q?.stop(),l.current&&(l.current.dataset.on="false"),s.current&&(s.current.dataset.on="false"))});return document.fonts.load(uC,"ПРИЁМКА").catch(()=>{}).then(()=>{if(V)try{q=new V3(o.current),q.onStep=Tt,Object.assign(window,{__tara:q}),T({...q.stats}),Vt(),q.renderAt(ct()),q.start(),gt.observe(ft)}catch{x(!1)}}),addEventListener("scroll",Vt,{passive:!0}),addEventListener("resize",$),addEventListener("pointermove",ie,{passive:!0}),document.documentElement.addEventListener("pointerleave",N),Vt(),()=>{V=!1,clearTimeout(W),gt.disconnect(),removeEventListener("scroll",Vt),removeEventListener("resize",$),removeEventListener("pointermove",ie),document.documentElement.removeEventListener("pointerleave",N),q?.dispose()}},[h]),F.jsxs("div",{className:m?"app":"app nogl",children:[F.jsxs("header",{className:"bar",ref:c,children:[F.jsx("a",{className:"bar__logo",href:"#top",children:"ТАРА"}),F.jsxs("nav",{className:"bar__nav mono",children:[F.jsx("a",{href:"#path",children:"Путь коробки"}),F.jsx("a",{href:"#calc",children:"Тариф"}),F.jsx("a",{href:"#cabinet",children:"Кабинет"}),F.jsx("a",{href:"#about",children:"О концепте"})]}),F.jsx("span",{className:"bar__clock mono",children:w}),F.jsx("button",{className:"bar__sound mono",type:"button",onClick:()=>Y("login"),children:"Войти в кабинет"}),F.jsxs("button",{className:"bar__sound mono",type:"button","aria-pressed":d,onClick:()=>p(h.toggle()),children:["Звук: ",d?"вкл":"выкл"]})]}),F.jsxs("div",{className:"stage",ref:t,children:[F.jsx("canvas",{className:"scene",ref:o,"aria-hidden":"true"}),F.jsx(aC,{}),F.jsx("div",{className:"track",id:"path",ref:i,children:F.jsx(sC,{view:g,gl:m,onTick:B})}),F.jsx("div",{className:"box-tag mono",ref:l,"data-on":"false","aria-hidden":"true",children:"TR-0420-117"}),F.jsxs("div",{className:"lens-tag mono",ref:s,"data-on":"false","aria-hidden":"true",children:[F.jsx("b",{children:"Продавец 014"}),F.jsxs("span",{children:["видно ",S.mine," из ",S.boxes.toLocaleString("ru-RU")," ед."]})]})]}),F.jsx(nC,{}),F.jsx(cS,{seller:y,tab:L,added:I,onSeller:D,onTab:U,onTick:B,onAdd:E}),F.jsx(lC,{created:I.map(V=>V.no),onCreate:V=>{P(q=>[V,...q]),D("014"),U("supplies")},onTick:B}),F.jsx(iC,{}),C!=="closed"&&F.jsxs("div",{className:"portal",role:"dialog","aria-modal":"true","aria-label":"Личный кабинет",children:[F.jsxs("div",{className:"portal__top",children:[F.jsx("span",{className:"bar__logo",children:"ТАРА"}),F.jsx("span",{className:"mono",children:"Личный кабинет продавца · демо"}),F.jsx("button",{className:"bar__sound mono",type:"button",onClick:()=>Y("closed"),children:"На сайт"})]}),C==="login"?F.jsxs("div",{className:"login",children:[F.jsx("p",{className:"mono",children:"Вход"}),F.jsx("h2",{children:"Кто вы"}),F.jsx("p",{children:"Это демо: пароля нет. Выберите продавца, и кабинет покажет только его строки."}),F.jsx("div",{className:"login__list",children:fM.map(V=>F.jsxs("button",{type:"button",onClick:()=>{D(V.id),U("stock"),Y("open")},children:[F.jsxs("span",{className:"mono",children:["Продавец ",V.id]}),F.jsx("b",{children:V.name})]},V.id))})]}):F.jsx("div",{className:"portal__body",children:F.jsx(cS,{solo:!0,seller:y,tab:L,added:I,onSeller:D,onTab:U,onTick:B,onAdd:E,onExit:()=>Y("login")})})]}),F.jsxs("footer",{className:"foot",id:"about",children:[F.jsx("div",{className:"foot__word","aria-hidden":"true",children:"ТАРА"}),F.jsxs("div",{className:"foot__grid",children:[F.jsx("p",{children:"Концепт для портфолио. Компания «Тара», продавцы, цены и цифры вымышлены. Заявки и документы никуда не отправляются."}),F.jsxs("p",{className:"mono",children:["React · TypeScript · Three.js",F.jsx("br",{}),"Сцена процедурная, без загружаемых моделей",F.jsx("br",{}),"Звук синтезирован в браузере"]}),F.jsx("a",{className:"link mono",href:"#top",children:"Наверх ↑"})]})]})]})}$1.createRoot(document.getElementById("root")).render(F.jsx(cC,{}));
