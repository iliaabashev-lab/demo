(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ep={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function jE(){if(sx)return Il;sx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Il.Fragment=t,Il.jsx=i,Il.jsxs=i,Il}var rx;function ZE(){return rx||(rx=1,ep.exports=jE()),ep.exports}var b=ZE(),tp={exports:{}},zl={},np={exports:{}},ip={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function KE(){return ox||(ox=1,(function(o){function t(X,q){var ce=X.length;X.push(q);e:for(;0<ce;){var ne=ce-1>>>1,fe=X[ne];if(0<l(fe,q))X[ne]=q,X[ce]=fe,ce=ne;else break e}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var q=X[0],ce=X.pop();if(ce!==q){X[0]=ce;e:for(var ne=0,fe=X.length,Ee=fe>>>1;ne<Ee;){var ke=2*(ne+1)-1,$e=X[ke],w=ke+1,Q=X[w];if(0>l($e,ce))w<fe&&0>l(Q,$e)?(X[ne]=Q,X[w]=ce,ne=w):(X[ne]=$e,X[ke]=ce,ne=ke);else if(w<fe&&0>l(Q,ce))X[ne]=Q,X[w]=ce,ne=w;else break e}}return q}function l(X,q){var ce=X.sortIndex-q.sortIndex;return ce!==0?ce:X.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,x=3,S=!1,T=!1,L=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function U(X){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=X)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function F(X){if(L=!1,U(X),!T)if(i(m)!==null)T=!0,P||(P=!0,se());else{var q=i(p);q!==null&&re(F,q.startTime-X)}}var P=!1,y=-1,N=5,J=-1;function k(){return M?!0:!(o.unstable_now()-J<N)}function j(){if(M=!1,P){var X=o.unstable_now();J=X;var q=!0;try{e:{T=!1,L&&(L=!1,D(y),y=-1),S=!0;var ce=x;try{t:{for(U(X),g=i(m);g!==null&&!(g.expirationTime>X&&k());){var ne=g.callback;if(typeof ne=="function"){g.callback=null,x=g.priorityLevel;var fe=ne(g.expirationTime<=X);if(X=o.unstable_now(),typeof fe=="function"){g.callback=fe,U(X),q=!0;break t}g===i(m)&&s(m),U(X)}else s(m);g=i(m)}if(g!==null)q=!0;else{var Ee=i(p);Ee!==null&&re(F,Ee.startTime-X),q=!1}}break e}finally{g=null,x=ce,S=!1}q=void 0}}finally{q?se():P=!1}}}var se;if(typeof z=="function")se=function(){z(j)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,H=de.port2;de.port1.onmessage=j,se=function(){H.postMessage(null)}}else se=function(){E(j,0)};function re(X,q){y=E(function(){X(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(X){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var ce=x;x=q;try{return X()}finally{x=ce}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ce=x;x=X;try{return q()}finally{x=ce}},o.unstable_scheduleCallback=function(X,q,ce){var ne=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ne+ce:ne):ce=ne,X){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ce+fe,X={id:_++,callback:q,priorityLevel:X,startTime:ce,expirationTime:fe,sortIndex:-1},ce>ne?(X.sortIndex=ce,t(p,X),i(m)===null&&X===i(p)&&(L?(D(y),y=-1):L=!0,re(F,ce-ne))):(X.sortIndex=fe,t(m,X),T||S||(T=!0,P||(P=!0,se()))),X},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(X){var q=x;return function(){var ce=x;x=q;try{return X.apply(this,arguments)}finally{x=ce}}}})(ip)),ip}var lx;function QE(){return lx||(lx=1,np.exports=KE()),np.exports}var ap={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function JE(){if(ux)return dt;ux=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function D(w,Q,ve){this.props=w,this.context=Q,this.refs=E,this.updater=ve||L}D.prototype.isReactComponent={},D.prototype.setState=function(w,Q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Q,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function z(){}z.prototype=D.prototype;function U(w,Q,ve){this.props=w,this.context=Q,this.refs=E,this.updater=ve||L}var F=U.prototype=new z;F.constructor=U,M(F,D.prototype),F.isPureReactComponent=!0;var P=Array.isArray;function y(){}var N={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function k(w,Q,ve){var be=ve.ref;return{$$typeof:o,type:w,key:Q,ref:be!==void 0?be:null,props:ve}}function j(w,Q){return k(w.type,Q,w.props)}function se(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function de(w){var Q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ve){return Q[ve]})}var H=/\/+/g;function re(w,Q){return typeof w=="object"&&w!==null&&w.key!=null?de(""+w.key):Q.toString(36)}function X(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(y,y):(w.status="pending",w.then(function(Q){w.status==="pending"&&(w.status="fulfilled",w.value=Q)},function(Q){w.status==="pending"&&(w.status="rejected",w.reason=Q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function q(w,Q,ve,be,Te){var ye=typeof w;(ye==="undefined"||ye==="boolean")&&(w=null);var Xe=!1;if(w===null)Xe=!0;else switch(ye){case"bigint":case"string":case"number":Xe=!0;break;case"object":switch(w.$$typeof){case o:case t:Xe=!0;break;case _:return Xe=w._init,q(Xe(w._payload),Q,ve,be,Te)}}if(Xe)return Te=Te(w),Xe=be===""?"."+re(w,0):be,P(Te)?(ve="",Xe!=null&&(ve=Xe.replace(H,"$&/")+"/"),q(Te,Q,ve,"",function(ct){return ct})):Te!=null&&(se(Te)&&(Te=j(Te,ve+(Te.key==null||w&&w.key===Te.key?"":(""+Te.key).replace(H,"$&/")+"/")+Xe)),Q.push(Te)),1;Xe=0;var xe=be===""?".":be+":";if(P(w))for(var Ce=0;Ce<w.length;Ce++)be=w[Ce],ye=xe+re(be,Ce),Xe+=q(be,Q,ve,ye,Te);else if(Ce=T(w),typeof Ce=="function")for(w=Ce.call(w),Ce=0;!(be=w.next()).done;)be=be.value,ye=xe+re(be,Ce++),Xe+=q(be,Q,ve,ye,Te);else if(ye==="object"){if(typeof w.then=="function")return q(X(w),Q,ve,be,Te);throw Q=String(w),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Xe}function ce(w,Q,ve){if(w==null)return w;var be=[],Te=0;return q(w,be,"","",function(ye){return Q.call(ve,ye,Te++)}),be}function ne(w){if(w._status===-1){var Q=w._result,ve=Q();ve.then(function(be){(w._status===0||w._status===-1)&&(w._status=1,w._result=be,ve.status===void 0&&(ve.status="fulfilled",ve.value=be))},function(be){(w._status===0||w._status===-1)&&(w._status=2,w._result=be,ve.status===void 0&&(ve.status="rejected",ve.reason=be))}),w._status===-1&&(w._status=0,w._result=ve)}if(w._status===1)return w._result.default;throw w._result}var fe=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Ee(w){var Q=N.T,ve={};ve.types=Q!==null?Q.types:null,N.T=ve;try{var be=w(),Te=N.S;Te!==null&&Te(ve,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(y,fe)}catch(ye){fe(ye)}finally{Q!==null&&ve.types!==null&&(Q.types=ve.types),N.T=Q}}function ke(w){var Q=N.T;if(Q!==null){var ve=Q.types;ve===null?Q.types=[w]:ve.indexOf(w)===-1&&ve.push(w)}else Ee(ke.bind(null,w))}var $e={map:ce,forEach:function(w,Q,ve){ce(w,function(){Q.apply(this,arguments)},ve)},count:function(w){var Q=0;return ce(w,function(){Q++}),Q},toArray:function(w){return ce(w,function(Q){return Q})||[]},only:function(w){if(!se(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return dt.Activity=g,dt.Children=$e,dt.Component=D,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=U,dt.StrictMode=s,dt.Suspense=m,dt.ViewTransition=x,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,dt.__COMPILER_RUNTIME={__proto__:null,c:function(w){return N.H.useMemoCache(w)}},dt.addTransitionType=ke,dt.cache=function(w){return function(){return w.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(w,Q,ve){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var be=M({},w.props),Te=w.key;if(Q!=null)for(ye in Q.key!==void 0&&(Te=""+Q.key),Q)!J.call(Q,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&Q.ref===void 0||(be[ye]=Q[ye]);var ye=arguments.length-2;if(ye===1)be.children=ve;else if(1<ye){for(var Xe=Array(ye),xe=0;xe<ye;xe++)Xe[xe]=arguments[xe+2];be.children=Xe}return k(w.type,Te,be)},dt.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},dt.createElement=function(w,Q,ve){var be,Te={},ye=null;if(Q!=null)for(be in Q.key!==void 0&&(ye=""+Q.key),Q)J.call(Q,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Te[be]=Q[be]);var Xe=arguments.length-2;if(Xe===1)Te.children=ve;else if(1<Xe){for(var xe=Array(Xe),Ce=0;Ce<Xe;Ce++)xe[Ce]=arguments[Ce+2];Te.children=xe}if(w&&w.defaultProps)for(be in Xe=w.defaultProps,Xe)Te[be]===void 0&&(Te[be]=Xe[be]);return k(w,ye,Te)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(w){return{$$typeof:h,render:w}},dt.isValidElement=se,dt.lazy=function(w){return{$$typeof:_,_payload:{_status:-1,_result:w},_init:ne}},dt.memo=function(w,Q){return{$$typeof:p,type:w,compare:Q===void 0?null:Q}},dt.startTransition=Ee,dt.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},dt.use=function(w){return N.H.use(w)},dt.useActionState=function(w,Q,ve){return N.H.useActionState(w,Q,ve)},dt.useCallback=function(w,Q){return N.H.useCallback(w,Q)},dt.useContext=function(w){return N.H.useContext(w)},dt.useDebugValue=function(){},dt.useDeferredValue=function(w,Q){return N.H.useDeferredValue(w,Q)},dt.useEffect=function(w,Q){return N.H.useEffect(w,Q)},dt.useEffectEvent=function(w){return N.H.useEffectEvent(w)},dt.useId=function(){return N.H.useId()},dt.useImperativeHandle=function(w,Q,ve){return N.H.useImperativeHandle(w,Q,ve)},dt.useInsertionEffect=function(w,Q){return N.H.useInsertionEffect(w,Q)},dt.useLayoutEffect=function(w,Q){return N.H.useLayoutEffect(w,Q)},dt.useMemo=function(w,Q){return N.H.useMemo(w,Q)},dt.useOptimistic=function(w,Q){return N.H.useOptimistic(w,Q)},dt.useReducer=function(w,Q,ve){return N.H.useReducer(w,Q,ve)},dt.useRef=function(w){return N.H.useRef(w)},dt.useState=function(w){return N.H.useState(w)},dt.useSyncExternalStore=function(w,Q,ve){return N.H.useSyncExternalStore(w,Q,ve)},dt.useTransition=function(){return N.H.useTransition()},dt.version="19.3.1",dt}var cx;function Im(){return cx||(cx=1,ap.exports=JE()),ap.exports}var sp={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function $E(){if(fx)return Gn;fx=1;var o=Im();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===d?d:""+S,children:_,containerInfo:g,implementation:x}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.browser=function(_){return{$$typeof:c,_reason:_}},Gn.createPortal=function(_,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return h(_,g,null,x)},Gn.flushSync=function(_){var g=m.T,x=s.p;try{if(m.T=null,s.p=2,_)return _()}finally{m.T=g,s.p=x,s.d.f()}},Gn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},Gn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Gn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var x=g.as,S=p(x,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:L}):x==="script"&&s.d.X(_,{crossOrigin:S,integrity:T,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Gn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=p(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},Gn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=p(x,g.crossOrigin);s.d.L(_,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Gn.preloadModule=function(_,g){if(typeof _=="string")if(g){var x=p(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},Gn.requestFormReset=function(_){s.d.r(_)},Gn.unstable_batchedUpdates=function(_,g){return _(g)},Gn.useFormState=function(_,g,x){return m.H.useFormState(_,g,x)},Gn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Gn.version="19.3.1",Gn}var dx;function eb(){if(dx)return sp.exports;dx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sp.exports=$E(),sp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function tb(){if(hx)return zl;hx=1;var o=QE(),t=Im(),i=eb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,r=f;break}if(R===r){v=!0,r=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,r=u;break}if(R===r){v=!0,r=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,u,f))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=x(e);return a===null||L(n,e,a.child,{foundSelf:!1}),n}function L(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&L(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var E=null,D=null;function z(e,n,a){return e===a?!0:e===n?(E=e,!0):!1}function U(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(E=e),!0):!1}function F(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,a){for(var r=0,u=e;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)e=a(e),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var y=Object.assign,N=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),re=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),ke=Symbol.for("react.legacy_hidden"),$e=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),Q=Symbol.for("react.recoverable"),ve=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case de:return"Profiler";case se:return"StrictMode";case q:return"Suspense";case ce:return"SuspenseList";case Ee:return"Activity";case w:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case re:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}var Xe=Array.isArray,xe=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},ot=[],xt=-1;function Ot(e){return{current:e}}function Nt(e){0>xt||(e.current=ot[xt],ot[xt]=null,xt--)}function at(e,n){xt++,ot[xt]=e.current,e.current=n}var Yt=Ot(null),jt=Ot(null),Jt=Ot(null),En=Ot(null);function bn(e,n){switch(at(Jt,n),at(jt,e),at(Yt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?pv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=pv(n),e=mv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Nt(Yt),at(Yt,e)}function W(){Nt(Yt),Nt(jt),Nt(Jt)}function wn(e){var n=e.memoizedState;n!==null&&(so._currentValue=n.memoizedState,at(En,e)),n=Yt.current;var a=mv(n,e.type);n!==a&&(at(jt,e),at(Yt,a))}function Ut(e){jt.current===e&&(Nt(Yt),Nt(jt)),En.current===e&&(Nt(En),so._currentValue=ct)}var Zt,Be;function Kt(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+Be}var tt=!1;function lt(e,n){if(!e||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(He){var Y=He}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(He){Y=He}Se=!1;try{var ae=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Se=!0,new e}finally{Se&&(ae!==void 0?Object.defineProperty(e.prototype,"props",ae):delete e.prototype.props)}}}else{try{throw Error()}catch(He){Y=He}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(He){if(He&&Y&&typeof He.stack=="string")return[He.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var I=v.split(`
`),K=R.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===K.length)for(r=I.length-1,u=K.length-1;1<=r&&0<=u&&I[r]!==K[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==K[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==K[u]){var le=`
`+I[r].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=r&&0<=u);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function O(e,n){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return e.child!==n&&n!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return Kt("Activity");case 30:return Kt("ViewTransition");default:return""}}function A(e){try{var n="",a=null;do n+=O(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ee=Object.prototype.hasOwnProperty,Re=o.unstable_scheduleCallback,Me=o.unstable_cancelCallback,Le=o.unstable_shouldYield,Ie=o.unstable_requestPaint,he=o.unstable_now,ge=o.unstable_getCurrentPriorityLevel,Ue=o.unstable_ImmediatePriority,B=o.unstable_UserBlockingPriority,me=o.unstable_NormalPriority,pe=o.unstable_LowPriority,Oe=o.unstable_IdlePriority,we=o.log,Pe=o.unstable_setDisableYieldValue,Je=null,nt=null;function Ae(e){if(typeof we=="function"&&Pe(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Je,e)}catch{}}var qe=Math.clz32?Math.clz32:It,pt=Math.log,Ge=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(pt(e)/Ge|0)|0}var rn=256,ci=262144,Bs=4194304;function Ii(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Ii(r):(v&=R,v!==0?u=Ii(v):a||(a=R&~e,a!==0&&(u=Ii(a))))):(R=r&~f,R!==0?u=Ii(R):v!==0?u=Ii(v):a||(a=r&~e,a!==0&&(u=Ii(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Qa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ko(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-qe(a),u=1<<r;n|=e[r],a&=~u}return n}function xa(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(){var e=Bs;return Bs<<=1,(Bs&62914560)===0&&(Bs=4194304),e}function Sr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ja(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mr(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,K=e.hiddenUpdates;for(a=v&~a;0<a;){var le=31-qe(a),Se=1<<le;R[le]=0,I[le]=-1;var Y=K[le];if(Y!==null)for(K[le]=null,le=0;le<Y.length;le++){var ae=Y[le];ae!==null&&(ae.lane&=-536870913)}a&=~Se}r!==0&&Xo(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Xo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-qe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Wo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-qe(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function $a(e,n){var a=n&-n;return a=(a&42)!==0?1:qo(a),(a&(e.suspendedLanes|n))!==0?0:a}function qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yo(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:Jv(e.type))}function ou(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var zi=Math.random().toString(36).slice(2),Tn="__reactFiber$"+zi,Pn="__reactProps$"+zi,C="__reactContainer$"+zi,G="__reactEvents$"+zi,ue="__reactListeners$"+zi,te="__reactHandles$"+zi,ie="__reactResources$"+zi,Ne="__reactMarker$"+zi,We="__reactLoad$"+zi;function De(e){delete e[Tn],delete e[Pn],delete e[ue],delete e[te]}function Fe(e){var n;if(n=e[Tn])return n;for(var a=e.parentNode;a;){if(n=a[C]||a[Tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lv(e);e!==null;){if(a=e[Tn])return a;e=Lv(e)}return n}e=a,a=e.parentNode}return null}function je(e){if(e=e[Tn]||e[C]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function mt(e){var n=e[ie];return n||(n=e[ie]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ze(e){e[Ne]=!0}function Mt(e){e[We]=void 0}var on=new Set,Vt={};function Ct(e,n){ln(e,n),ln(e+"Capture",n)}function ln(e,n){for(Vt[e]=n,e=0;e<n.length;e++)on.add(n[e])}var Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nn={},Dt={};function Sa(e){return ee.call(Dt,e)?!0:ee.call(Nn,e)?!1:Ze.test(e)?Dt[e]=!0:(Nn[e]=!0,!1)}var ut=!1;function Fs(){var e=ut;return ut=!1,e}function fi(e,n,a){if(Sa(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Mi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function gt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ti(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function dn(e){if(!e._valueTracker){var n=ti(e)?"checked":"value";e._valueTracker=nn(e,n,""+e[n])}}function yi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ti(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var lu=/[\n"\\]/g;function Ei(e){return e.replace(lu,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Df(e,n,a,r,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+zt(n)):e.value!==""+zt(n)&&(e.value=""+zt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?v==="number"&&e.value==n?Lf(e,zt(e.value)):Lf(e,zt(n)):a!=null?Lf(e,zt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+zt(R):e.removeAttribute("name")}function i0(e,n,a,r,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){dn(e);return}a=a!=null?""+zt(a):"",n=n!=null?""+zt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),dn(e)}function Lf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Er(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function a0(e,n,a){if(n!=null&&(n=""+zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+zt(a):""}function s0(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Xe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=zt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),dn(e)}function br(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var gM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function r0(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||gM.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function o0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",ut=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(r0(e,u,r),ut=!0)}else for(var f in n)n.hasOwnProperty(f)&&r0(e,f,n[f])}function Uf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _M=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uu(e){return vM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var Of=null;function Pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tr=null,Ar=null;function l0(e){var n=je(e);if(n&&(e=n.stateNode)){var a=e[Pn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Df(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ei(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Pn]||null;if(!u)throw Error(s(90));Df(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&yi(r)}break e;case"textarea":a0(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Er(e,!!a.multiple,n,!1)}}}var If=!1;function u0(e,n,a){if(If)return e(n,a);If=!0;try{var r=e(n);return r}finally{if(If=!1,(Tr!==null||Ar!==null)&&(uc(),Tr&&(n=Tr,e=Ar,Ar=Tr=null,l0(n),e)))for(n=0;n<e.length;n++)l0(e[n])}}function jo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Pn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=!1;if(Ma)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){zf=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{zf=!1}var es=null,Bf=null,cu=null;function c0(){if(cu)return cu;var e,n=Bf,a=n.length,r,u="value"in es?es.value:es.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return cu=u.slice(e,1<r?1-r:void 0)}function fu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function du(){return!0}function f0(){return!1}function Yn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?du:f0,this.isPropagationStopped=f0,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Yn(ts),Ko=y({},ts,{view:0,detail:0}),xM=Yn(Ko),Ff,Hf,Qo,pu=y({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qo&&(Qo&&e.type==="mousemove"?(Ff=e.screenX-Qo.screenX,Hf=e.screenY-Qo.screenY):Hf=Ff=0,Qo=e),Ff)},movementY:function(e){return"movementY"in e?e.movementY:Hf}}),d0=Yn(pu),SM=y({},pu,{dataTransfer:0}),MM=Yn(SM),yM=y({},Ko,{relatedTarget:0}),Gf=Yn(yM),EM=y({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),bM=Yn(EM),TM=y({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),AM=Yn(TM),RM=y({},ts,{data:0}),h0=Yn(RM),CM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DM(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=NM[e])?!!n[e]:!1}function Vf(){return DM}var LM=y({},Ko,{key:function(e){if(e.key){var n=CM[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(e){return e.type==="keypress"?fu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),UM=Yn(LM),OM=y({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p0=Yn(OM),PM=y({},ts,{submitter:0}),IM=Yn(PM),zM=y({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),BM=Yn(zM),FM=y({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),HM=Yn(FM),GM=y({},pu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),VM=Yn(GM),kM=y({},ts,{newState:0,oldState:0,source:0}),XM=Yn(kM),WM=[9,13,27,32],kf=Ma&&"CompositionEvent"in window,Jo=null;Ma&&"documentMode"in document&&(Jo=document.documentMode);var qM=Ma&&"TextEvent"in window&&!Jo,m0=Ma&&(!kf||Jo&&8<Jo&&11>=Jo),g0=" ",_0=!1;function v0(e,n){switch(e){case"keyup":return WM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function YM(e,n){switch(e){case"compositionend":return x0(n);case"keypress":return n.which!==32?null:(_0=!0,g0);case"textInput":return e=n.data,e===g0&&_0?null:e;default:return null}}function jM(e,n){if(Rr)return e==="compositionend"||!kf&&v0(e,n)?(e=c0(),cu=Bf=es=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return m0&&n.locale!=="ko"?null:n.data;default:return null}}var ZM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ZM[e.type]:n==="textarea"}function M0(e,n,a,r){Tr?Ar?Ar.push(r):Ar=[r]:Tr=r,n=mc(n,"onChange"),0<n.length&&(a=new hu("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var $o=null,el=null;function KM(e){lv(e,0)}function mu(e){var n=st(e);if(yi(n))return e}function y0(e,n){if(e==="change")return n}var E0=!1;if(Ma){var Xf;if(Ma){var Wf="oninput"in document;if(!Wf){var b0=document.createElement("div");b0.setAttribute("oninput","return;"),Wf=typeof b0.oninput=="function"}Xf=Wf}else Xf=!1;E0=Xf&&(!document.documentMode||9<document.documentMode)}function T0(){$o&&($o.detachEvent("onpropertychange",A0),el=$o=null)}function A0(e){if(e.propertyName==="value"&&mu(el)){var n=[];M0(n,el,e,Pf(e)),u0(KM,n)}}function QM(e,n,a){e==="focusin"?(T0(),$o=n,el=a,$o.attachEvent("onpropertychange",A0)):e==="focusout"&&T0()}function JM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mu(el)}function $M(e,n){if(e==="click")return mu(n)}function ey(e,n){if(e==="input"||e==="change")return mu(n)}function ty(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var di=typeof Object.is=="function"?Object.is:ty;function tl(e,n){if(di(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!ee.call(n,u)||!di(e[u],n[u]))return!1}return!0}function qf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function R0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function C0(e,n){var a=R0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=R0(a)}}function w0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?w0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function N0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qf(e.document)}return n}function Yf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ny=Ma&&"documentMode"in document&&11>=document.documentMode,Cr=null,jf=null,nl=null,Zf=!1;function D0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zf||Cr==null||Cr!==qf(r)||(r=Cr,"selectionStart"in r&&Yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nl&&tl(nl,r)||(nl=r,r=mc(jf,"onSelect"),0<r.length&&(n=new hu("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Cr)))}function Hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var wr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Kf={},L0={};Ma&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Gs(e){if(Kf[e])return Kf[e];if(!wr[e])return e;var n=wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in L0)return Kf[e]=n[a];return e}var U0=Gs("animationend"),O0=Gs("animationiteration"),P0=Gs("animationstart"),iy=Gs("transitionrun"),ay=Gs("transitionstart"),sy=Gs("transitioncancel"),I0=Gs("transitionend"),z0=new Map,Qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qf.push("scrollEnd");function Bi(e,n){z0.set(e,n),Ct(n,[e])}var ry=0;function ya(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Vi.identifierPrefix;var a=ry++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function B0(e){if(e==null||typeof e=="string")return e;var n=null,a=Zr;if(a!==null)for(var r=0;r<a.length;r++){var u=e[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Ea(e,n){return e=B0(e),n=B0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var gu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],Nr=0,Jf=0;function _u(){for(var e=Nr,n=Jf=Nr=0;n<e;){var a=bi[n];bi[n++]=null;var r=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var f=bi[n];if(bi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&F0(a,u,f)}}function vu(e,n,a,r){bi[Nr++]=e,bi[Nr++]=n,bi[Nr++]=a,bi[Nr++]=r,Jf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $f(e,n,a,r){return vu(e,n,a,r),xu(e)}function Vs(e,n){return vu(e,null,null,n),xu(e)}function F0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-qe(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function xu(e){if(50<bl)throw bl=0,lc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function oy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,r){return new oy(e,n,a,r)}function ed(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function H0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Su(e,n,a,r,u,f){var v=0;if(r=e,typeof r=="function")ed(r)&&(v=1);else if(typeof r=="string")v=PE(e,a,Yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Ee:return e=ni(31,a,n,u),e.elementType=Ee,e.lanes=f,e;case j:return ks(a.children,u,f,n);case se:v=8,u|=24;break;case de:return e=ni(12,a,n,u|2),e.elementType=de,e.lanes=f,e;case q:return e=ni(13,a,n,u),e.elementType=q,e.lanes=f,e;case ce:return e=ni(19,a,n,u),e.elementType=ce,e.lanes=f,e;case ke:case w:return e=u|32,e=ni(30,a,n,e),e.elementType=w,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case re:v=10;break e;case H:v=9;break e;case X:v=11;break e;case ne:v=14;break e;case fe:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ni(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ks(e,n,a,r){return e=ni(7,e,r,n),e.lanes=a,e}function td(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function G0(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function nd(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var V0=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=V0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:A(n)},V0.set(e,n),n)}return{value:e,source:n,stack:A(n)}}var Lr=[],Ur=0,Mu=null,il=0,Ai=[],Ri=0,ns=null,Qi=1,Ji="";function Ta(e,n){Lr[Ur++]=il,Lr[Ur++]=Mu,Mu=e,il=n}function k0(e,n,a){Ai[Ri++]=Qi,Ai[Ri++]=Ji,Ai[Ri++]=ns,ns=e;var r=Qi;e=Ji;var u=32-qe(r)-1;r&=~(1<<u),a+=1;var f=32-qe(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Qi=1<<32-qe(n)+u|a<<u|r,Ji=f+e}else Qi=1<<f|a<<u|r,Ji=e}function yu(e){e.return!==null&&(Ta(e,1),k0(e,1,0))}function id(e){for(;e===Mu;)Mu=Lr[--Ur],Lr[Ur]=null,il=Lr[--Ur],Lr[Ur]=null;for(;e===ns;)ns=Ai[--Ri],Ai[Ri]=null,Ji=Ai[--Ri],Ai[Ri]=null,Qi=Ai[--Ri],Ai[Ri]=null}function X0(e,n){Ai[Ri++]=Qi,Ai[Ri++]=Ji,Ai[Ri++]=ns,Qi=n.id,Ji=n.overflow,ns=e}var Dn=null,en=null,yt=!1,is=null,Ci=!1,ad=Error(s(519));function as(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw al(Ti(n,e)),ad}function W0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Tn]=e,n[Pn]=r,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<Al.length;a++)Tt(Al[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),i0(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),s0(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||dv(n.textContent,a)?(r.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),r.onScroll!=null&&Tt("scroll",n),r.onScrollEnd!=null&&Tt("scrollend",n),r.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||as(e,!0)}function Eu(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Dn=Dn.return}}function Or(e){if(e!==Dn)return!1;if(!yt)return Eu(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Oh(e.type,e.memoizedProps)),a=!a),a&&en&&as(e),Eu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=Dv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=Dv(e)}else n===27?(n=en,Ss(e.type)?(e=kh,kh=null,en=e):en=n):en=Dn?Ni(e.stateNode.nextSibling):null;return!0}function Xs(){en=Dn=null,yt=!1}function sd(){var e=is;return e!==null&&(si===null?si=e:si.push.apply(si,e),is=null),e}function al(e){is===null?is=[e]:is.push(e)}var rd=Ot(null),Ws=null,Aa=null;function ss(e,n,a){at(rd,n._currentValue),n._currentValue=a}function Ra(e){e._currentValue=rd.current,Nt(rd)}function bu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function od(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,e),r||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),bu(v,a,e),v=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),bu(u.return,a,e),v=u.child,v=v!==null?v.sibling:null):v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function qs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;di(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===En.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(so):e=[so])}u=u.return}return e!==null&&od(n,e,a,r),n.flags|=262144,e!==null}function Tu(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ys(e){Ws=e,Aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return q0(Ws,e)}function Au(e,n){return Ws===null&&Ys(e),q0(e,n)}function q0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Aa===null){if(e===null)throw Error(s(308));Aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Aa=Aa.next=n;return a}var ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},uy=o.unstable_scheduleCallback,cy=o.unstable_NormalPriority,vn={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ld(){return{controller:new ly,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&uy(cy,function(){e.controller.abort()})}function Y0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var rl=null;function fy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var ol=null,ud=0,js=0,Pr=null;function dy(e,n){if(ol===null){var a=ol=[];ud=0,js=Th(),Pr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ud++,n.then(j0,j0),n}function j0(){if(--ud===0&&(rl=null,ol!==null)){Pr!==null&&(Pr.status="fulfilled");var e=ol;ol=null,js=0,Pr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Z0=xe.S;xe.S=function(e,n){if(G_=he(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dy(e,n),rl!==null)for(var a=$r;a!==null;)Y0(a,rl),a=a.next;if(a=e.types,a!==null){for(var r=$r;r!==null;)Y0(r,a),r=r.next;if(js!==0){r=rl,r===null&&(r=rl=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}Z0!==null&&Z0(e,n)};var Zs=Ot(null);function cd(){var e=Zs.current;return e!==null?e:$t.pooledCache}function Ru(e,n){n===null?at(Zs,Zs.current):at(Zs,n.pool)}function K0(){var e=cd();return e===null?null:{parent:vn._currentValue,pool:e}}var Ir=Error(s(460)),fd=Error(s(474)),Cu=Error(s(542)),wu={then:function(){}};function Q0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function J0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eg(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=$t,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eg(e),e}throw Qs=n,Ir}}function Ks(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qs=a,Ir):a}}var Qs=null;function $0(){if(Qs===null)throw Error(s(459));var e=Qs;return Qs=null,e}function eg(e){if(e===Ir||e===Cu)throw Error(s(483))}var zr=null,ll=0;function Nu(e){var n=ll;return ll+=1,zr===null&&(zr=[]),J0(zr,e,n)}function rs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Du(e,n){throw n.$$typeof===N?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){function n(Z,V){if(e){var $=Z.deletions;$===null?(Z.deletions=[V],Z.flags|=16):$.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function r(Z){for(var V=new Map;Z!==null;)Z.key===null?V.set(Z.index,Z):V.set(Z.key,Z),Z=Z.sibling;return V}function u(Z,V){return Z=ba(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<V?(Z.flags|=2,V):$):(Z.flags|=134217730,V)):(Z.flags|=1048576,V)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=134217730),Z}function R(Z,V,$,_e){return V===null||V.tag!==6?(V=td($,Z.mode,_e),V.return=Z,V):(V=u(V,$),V.return=Z,V)}function I(Z,V,$,_e){var Ye=$.type;return Ye===j?(Z=le(Z,V,$.props.children,_e,$.key),rs(Z,$),Z):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===fe&&Ks(Ye)===V.type)?(V=u(V,$.props),rs(V,$),V.return=Z,V):(V=Su($.type,$.key,$.props,null,Z.mode,_e),rs(V,$),V.return=Z,V)}function K(Z,V,$,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=nd($,Z.mode,_e),V.return=Z,V):(V=u(V,$.children||[]),V.return=Z,V)}function le(Z,V,$,_e,Ye){return V===null||V.tag!==7?(V=ks($,Z.mode,_e,Ye),V.return=Z,V):(V=u(V,$),V.return=Z,V)}function Se(Z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=td(""+V,Z.mode,$),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case J:return $=Su(V.type,V.key,V.props,null,Z.mode,$),rs($,V),$.return=Z,$;case k:return V=nd(V,Z.mode,$),V.return=Z,V;case fe:return V=Ks(V),Se(Z,V,$)}if(Xe(V)||be(V))return V=ks(V,Z.mode,$,null),V.return=Z,V;if(typeof V.then=="function")return Se(Z,Nu(V),$);if(V.$$typeof===re)return Se(Z,Au(Z,V),$);Du(Z,V)}return null}function Y(Z,V,$,_e){var Ye=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ye!==null?null:R(Z,V,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case J:return $.key===Ye?I(Z,V,$,_e):null;case k:return $.key===Ye?K(Z,V,$,_e):null;case fe:return $=Ks($),Y(Z,V,$,_e)}if(Xe($)||be($))return Ye!==null?null:le(Z,V,$,_e,null);if(typeof $.then=="function")return Y(Z,V,Nu($),_e);if($.$$typeof===re)return Y(Z,V,Au(Z,$),_e);Du(Z,$)}return null}function ae(Z,V,$,_e,Ye){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get($)||null,R(V,Z,""+_e,Ye);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case J:return Z=Z.get(_e.key===null?$:_e.key)||null,I(V,Z,_e,Ye);case k:return Z=Z.get(_e.key===null?$:_e.key)||null,K(V,Z,_e,Ye);case fe:return _e=Ks(_e),ae(Z,V,$,_e,Ye)}if(Xe(_e)||be(_e))return Z=Z.get($)||null,le(V,Z,_e,Ye,null);if(typeof _e.then=="function")return ae(Z,V,$,Nu(_e),Ye);if(_e.$$typeof===re)return ae(Z,V,$,Au(V,_e),Ye);Du(V,_e)}return null}function He(Z,V,$,_e){for(var Ye=null,Rt=null,et=V,rt=V=0,Mn=null;et!==null&&rt<$.length;rt++){et.index>rt?(Mn=et,et=null):Mn=et.sibling;var Lt=Y(Z,et,$[rt],_e);if(Lt===null){et===null&&(et=Mn);break}e&&et&&Lt.alternate===null&&n(Z,et),V=f(Lt,V,rt),Rt===null?Ye=Lt:Rt.sibling=Lt,Rt=Lt,et=Mn}if(rt===$.length)return a(Z,et),yt&&Ta(Z,rt),Ye;if(et===null){for(;rt<$.length;rt++)et=Se(Z,$[rt],_e),et!==null&&(V=f(et,V,rt),Rt===null?Ye=et:Rt.sibling=et,Rt=et);return yt&&Ta(Z,rt),Ye}for(et=r(et);rt<$.length;rt++)Mn=ae(et,Z,rt,$[rt],_e),Mn!==null&&(e&&(Lt=Mn.alternate,Lt!==null&&et.delete(Lt.key===null?rt:Lt.key)),V=f(Mn,V,rt),Rt===null?Ye=Mn:Rt.sibling=Mn,Rt=Mn);return e&&et.forEach(function(Ts){return n(Z,Ts)}),yt&&Ta(Z,rt),Ye}function Ke(Z,V,$,_e){if($==null)throw Error(s(151));for(var Ye=null,Rt=null,et=V,rt=V=0,Mn=null,Lt=$.next();et!==null&&!Lt.done;rt++,Lt=$.next()){et.index>rt?(Mn=et,et=null):Mn=et.sibling;var Ts=Y(Z,et,Lt.value,_e);if(Ts===null){et===null&&(et=Mn);break}e&&et&&Ts.alternate===null&&n(Z,et),V=f(Ts,V,rt),Rt===null?Ye=Ts:Rt.sibling=Ts,Rt=Ts,et=Mn}if(Lt.done)return a(Z,et),yt&&Ta(Z,rt),Ye;if(et===null){for(;!Lt.done;rt++,Lt=$.next())Lt=Se(Z,Lt.value,_e),Lt!==null&&(V=f(Lt,V,rt),Rt===null?Ye=Lt:Rt.sibling=Lt,Rt=Lt);return yt&&Ta(Z,rt),Ye}for(et=r(et);!Lt.done;rt++,Lt=$.next())Lt=ae(et,Z,rt,Lt.value,_e),Lt!==null&&(e&&(Mn=Lt.alternate,Mn!==null&&et.delete(Mn.key===null?rt:Mn.key)),V=f(Lt,V,rt),Rt===null?Ye=Lt:Rt.sibling=Lt,Rt=Lt);return e&&et.forEach(function(YE){return n(Z,YE)}),yt&&Ta(Z,rt),Ye}function vt(Z,V,$,_e){if(typeof $=="object"&&$!==null&&$.type===j&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case J:e:{for(var Ye=$.key;V!==null;){if(V.key===Ye){if(Ye=$.type,Ye===j){if(V.tag===7){a(Z,V.sibling),_e=u(V,$.props.children),rs(_e,$),_e.return=Z,Z=_e;break e}}else if(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===fe&&Ks(Ye)===V.type){a(Z,V.sibling),_e=u(V,$.props),rs(_e,$),_e.return=Z,Z=_e;break e}a(Z,V);break}else n(Z,V);V=V.sibling}$.type===j?(_e=ks($.props.children,Z.mode,_e,$.key),rs(_e,$),_e.return=Z,Z=_e):(_e=Su($.type,$.key,$.props,null,Z.mode,_e),rs(_e,$),_e.return=Z,Z=_e)}return v(Z);case k:e:{for(Ye=$.key;V!==null;){if(V.key===Ye)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Z,V.sibling),_e=u(V,$.children||[]),_e.return=Z,Z=_e;break e}else{a(Z,V);break}else n(Z,V);V=V.sibling}_e=nd($,Z.mode,_e),_e.return=Z,Z=_e}return v(Z);case fe:return $=Ks($),vt(Z,V,$,_e)}if(Xe($))return He(Z,V,$,_e);if(be($)){if(Ye=be($),typeof Ye!="function")throw Error(s(150));return $=Ye.call($),Ke(Z,V,$,_e)}if(typeof $.then=="function")return vt(Z,V,Nu($),_e);if($.$$typeof===re)return vt(Z,V,Au(Z,$),_e);Du(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Z,V.sibling),_e=u(V,$),_e.return=Z,Z=_e):(a(Z,V),_e=td($,Z.mode,_e),_e.return=Z,Z=_e),v(Z)):a(Z,V)}return function(Z,V,$,_e){try{ll=0;var Ye=vt(Z,V,$,_e);return zr=null,Ye}catch(et){if(et===Ir||et===Cu)throw et;var Rt=ni(29,et,null,Z.mode);return Rt.lanes=_e,Rt.return=Z,Rt}finally{}}}var Js=tg(!0),ng=tg(!1),os=!1;function dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ls(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function us(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Bt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=xu(e),F0(e,null,a),n}return vu(e,r,n,a),xu(e)}function ul(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Wo(e,a)}}function pd(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var md=!1;function cl(){if(md){var e=Pr;if(e!==null)throw e}}function fl(e,n,a,r){md=!1;var u=e.updateQueue;os=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var I=R,K=I.next;I.next=null,v===null?f=K:v.next=K,v=I;var le=e.alternate;le!==null&&(le=le.updateQueue,R=le.lastBaseUpdate,R!==v&&(R===null?le.firstBaseUpdate=K:R.next=K,le.lastBaseUpdate=I))}if(f!==null){var Se=u.baseState;v=0,le=K=I=null,R=f;do{var Y=R.lane&-536870913,ae=Y!==R.lane;if(ae?(At&Y)===Y:(r&Y)===Y){Y!==0&&Y===js&&(md=!0),le!==null&&(le=le.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var He=e,Ke=R;Y=n;var vt=a;switch(Ke.tag){case 1:if(He=Ke.payload,typeof He=="function"){Se=He.call(vt,Se,Y);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ke.payload,Y=typeof He=="function"?He.call(vt,Se,Y):He,Y==null)break e;Se=y({},Se,Y);break e;case 2:os=!0}}Y=R.callback,Y!==null&&(e.flags|=64,ae&&(e.flags|=8192),ae=u.callbacks,ae===null?u.callbacks=[Y]:ae.push(Y))}else ae={lane:Y,tag:R.tag,payload:R.payload,callback:R.callback,next:null},le===null?(K=le=ae,I=Se):le=le.next=ae,v|=Y;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ae=R,R=ae.next,ae.next=null,u.lastBaseUpdate=ae,u.shared.pending=null}}while(!0);le===null&&(I=Se),u.baseState=I,u.firstBaseUpdate=K,u.lastBaseUpdate=le,f===null&&(u.shared.lanes=0),gs|=v,e.lanes=v,e.memoizedState=Se}}function ig(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ag(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ig(a[e],n)}var cs=Ot(null),Lu=Ot(0);function sg(e,n){e=La,at(Lu,e),at(cs,n),La=e|n.baseLanes}function gd(){at(Lu,La),at(cs,cs.current)}function _d(){La=Lu.current,Nt(cs),Nt(Lu)}var zn=Ot(null),kn=null;function fs(e){var n=e.alternate;at(Bn,Bn.current&1),at(zn,e),kn===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(kn=e)}function vd(e){at(Bn,Bn.current),at(zn,e),kn===null&&(kn=e)}function rg(e){e.tag===22?(at(Bn,Bn.current),at(zn,e),kn===null&&(kn=e)):ds()}function ds(){at(Bn,Bn.current),at(zn,zn.current)}function hi(e){Nt(zn),kn===e&&(kn=null),Nt(Bn)}var Bn=Ot(0);function dl(e,n){at(zn,zn.current),at(Bn,n)}function xd(e){Nt(Bn),Nt(zn),kn===e&&(kn=null)}function Uu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gh(a)||Vh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ca=0,_t=null,Qt=null,xn=null,Ou=!1,Br=!1,$s=!1,Pu=0,hl=0,Fr=null,py=0;function hn(){throw Error(s(321))}function Sd(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!di(e[a],n[a]))return!1;return!0}function Md(e,n,a,r,u,f){return Ca=f,_t=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xe.H=e===null||e.memoizedState===null?kg:Xg,$s=!1,f=a(r,u),$s=!1,Br&&(f=lg(n,a,r,u)),og(e),f}function og(e){xe.H=Vu;var n=Qt!==null&&Qt.next!==null;if(Ca=0,xn=Qt=_t=null,Ou=!1,hl=0,Fr=null,n)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&Tu(e)&&(Sn=!0))}function lg(e,n,a,r){_t=e;var u=0;do{if(Br&&(Fr=null),hl=0,Br=!1,25<=u)throw Error(s(301));if(u+=1,xn=Qt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}xe.H=yy,f=n(a,r)}while(Br);return f}function my(){var e=xe.H,n=e.useState()[0];return n=typeof n.then=="function"?pl(n):n,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(_t.flags|=1024),n}function yd(){var e=Pu!==0;return Pu=0,e}function Ed(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function bd(e){if(Ou){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ou=!1}Ca=0,xn=Qt=_t=null,Br=!1,hl=Pu=0,Fr=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?_t.memoizedState=xn=e:xn=xn.next=e,xn}function gn(){if(Qt===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var n=xn===null?_t.memoizedState:xn.next;if(n!==null)xn=n,Qt=e;else{if(e===null)throw _t.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},xn===null?_t.memoizedState=xn=e:xn=xn.next=e}return xn}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(e){var n=hl;return hl+=1,Fr===null&&(Fr=[]),e=J0(Fr,e,n),n=_t,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,xe.H=n===null||n.memoizedState===null?kg:Xg),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pl(e);if(e.$$typeof===Q)return;if(e.$$typeof===re)return In(e)}throw Error(s(438,String(e)))}function Td(e){var n=null,a=_t.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=_t.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Iu(),_t.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=$e;return n.index++,a}function wa(e,n){return typeof n=="function"?n(e):n}function Bu(e){var n=gn();return Ad(n,Qt,e)}function Ad(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,I=null,K=n,le=!1;do{var Se=K.lane&-536870913;if(Se!==K.lane?(At&Se)===Se:(Ca&Se)===Se){var Y=K.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),Se===js&&(le=!0);else if((Ca&Y)===Y){K=K.next,Y===js&&(le=!0);continue}else Se={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(R=I=Se,v=f):I=I.next=Se,_t.lanes|=Y,gs|=Y;Se=K.action,$s&&a(f,Se),f=K.hasEagerState?K.eagerState:a(f,Se)}else Y={lane:Se,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(R=I=Y,v=f):I=I.next=Y,_t.lanes|=Se,gs|=Se;K=K.next}while(K!==null&&K!==n);if(I===null?v=f:I.next=R,!di(f,e.memoizedState)&&(Sn=!0,le&&(a=Pr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Rd(e){var n=gn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);di(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function ug(e,n,a){var r=_t,u=gn(),f=yt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!di((Qt||u).memoizedState,a);if(v&&(u.memoizedState=a,Sn=!0),u=u.queue,Nd(dg.bind(null,r,u,e),[e]),e=u.getSnapshot!==n||v||xn!==null&&(xn.memoizedState.tag&1)!==0,Hr(e?9:8,{destroy:void 0},fg.bind(null,r,u,a,n),null),e){if(r.flags|=2048,$t===null)throw Error(s(349));f||(Ca&127)!==0||cg(r,n,a)}return a}function cg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_t.updateQueue,n===null?(n=Iu(),_t.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fg(e,n,a,r){n.value=a,n.getSnapshot=r,hg(n)&&pg(e)}function dg(e,n,a){return a(function(){hg(n)&&pg(e)})}function hg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!di(e,a)}catch{return!0}}function pg(e){var n=Vs(e,2);n!==null&&ri(n,e,2)}function Cd(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),$s){Ae(!0);try{a()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},n}function mg(e,n,a,r){return e.baseState=a,Ad(e,Qt,typeof r=="function"?r:wa)}function gy(e,n,a,r,u){if(Gu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};xe.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,gg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gg(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=xe.T,v={};v.types=f!==null?f.types:null,xe.T=v;try{var R=a(u,r),I=xe.S;I!==null&&I(v,R),_g(e,n,R)}catch(K){wd(e,n,K)}finally{f!==null&&v.types!==null&&(f.types=v.types),xe.T=f}}else try{f=a(u,r),_g(e,n,f)}catch(K){wd(e,n,K)}}function _g(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){vg(e,n,r)},function(r){return wd(e,n,r)}):vg(e,n,a)}function vg(e,n,a){n.status="fulfilled",n.value=a,xg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gg(e,a)))}function wd(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,xg(n),n=n.next;while(n!==r)}e.action=null}function xg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sg(e,n){return n}function Mg(e,n){if(yt){var a=$t.formState;if(a!==null){e:{var r=_t;if(yt){if(en){t:{for(var u=en,f=Ci;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ni(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){en=Ni(u.nextSibling),r=u.data==="F!";break e}}as(r)}r=!1}r&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:n},a.queue=r,a=Hg.bind(null,_t,r),r.dispatch=a,r=Cd(!1),f=Pd.bind(null,_t,!1,r.queue),r=jn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=gy.bind(null,_t,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function yg(e){var n=gn();return Eg(n,Qt,e)}function Eg(e,n,a){if(n=Ad(e,n,Sg)[0],e=Bu(wa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=pl(n)}catch(v){throw v===Ir?Cu:v}else r=n;n=gn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_t.flags|=2048,Hr(9,{destroy:void 0},_y.bind(null,u,a),null)),[r,f,e]}function _y(e,n){e.action=n}function bg(e){var n=gn(),a=Qt;if(a!==null)return Eg(n,a,e);gn(),n=n.memoizedState,a=gn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Hr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=_t.updateQueue,n===null&&(n=Iu(),_t.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Tg(){return gn().memoizedState}function Fu(e,n,a,r){var u=jn();_t.flags|=e,u.memoizedState=Hr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Hu(e,n,a,r){var u=gn();r=r===void 0?null:r;var f=u.memoizedState.inst;Qt!==null&&r!==null&&Sd(r,Qt.memoizedState.deps)?u.memoizedState=Hr(n,f,a,r):(_t.flags|=e,u.memoizedState=Hr(1|n,f,a,r))}function Ag(e,n){Fu(8390656,8,e,n)}function Nd(e,n){Hu(2048,8,e,n)}function vy(e){_t.flags|=4;var n=_t.updateQueue;if(n===null)n=Iu(),_t.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rg(e){var n=gn().memoizedState;return vy({ref:n,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cg(e,n){return Hu(4,2,e,n)}function wg(e,n){return Hu(4,4,e,n)}function Ng(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dg(e,n,a){a=a!=null?a.concat([e]):null,Hu(4,4,Ng.bind(null,n,e),a)}function Dd(){}function Lg(e,n){var a=gn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Sd(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Ug(e,n){var a=gn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Sd(n,r[1]))return r[0];if(r=e(),$s){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[r,n],r}function Ld(e,n,a){return a===void 0||(Ca&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=k_(),_t.lanes|=e,gs|=e,a)}function Og(e,n,a,r){return di(a,n)?a:cs.current!==null?(e=Ld(e,a,r),di(e,n)||(Sn=!0),e):(Ca&106)===0||(Ca&1073741824)!==0&&(At&261930)===0?(Sn=!0,e.memoizedState=a):(e=k_(),_t.lanes|=e,gs|=e,n)}function Pg(e,n,a,r,u){var f=Ce.p;Ce.p=f!==0&&8>f?f:8;var v=xe.T,R={};R.types=v!==null?v.types:null,xe.T=R,Pd(e,!1,n,a);try{var I=u(),K=xe.S;if(K!==null&&K(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var le=hy(I,r);ml(e,n,le,_i(e))}else ml(e,n,r,_i(e))}catch(Se){ml(e,n,{then:function(){},status:"rejected",reason:Se},_i())}finally{Ce.p=f,v!==null&&R.types!==null&&(v.types=R.types),xe.T=v}}function xy(){}function Ud(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Ig(e).queue;Pg(e,u,n,ct,a===null?xy:function(){return zg(e),a(r)})}function Ig(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zg(e){var n=Ig(e);n.next===null&&(n=e.alternate.memoizedState),ml(e,n.next.queue,{},_i())}function Od(){return In(so)}function Bg(){return gn().memoizedState}function Fg(){return gn().memoizedState}function Sy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=ls(a);var r=us(n,e,a);r!==null&&(ri(r,n,a),ul(r,n,a)),n={cache:ld()},e.payload=n;return}n=n.return}}function My(e,n,a){var r=_i();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gu(e)?Gg(n,a):(a=$f(e,n,a,r),a!==null&&(ri(a,e,r),Vg(a,n,r)))}function Hg(e,n,a){var r=_i();ml(e,n,a,r)}function ml(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Gg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,di(R,v))return vu(e,n,u,0),$t===null&&_u(),!1}catch{}finally{}if(a=$f(e,n,u,r),a!==null)return ri(a,e,r),Vg(a,n,r),!0}return!1}function Pd(e,n,a,r){if(r={lane:2,revertLane:Th(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Gu(e)){if(n)throw Error(s(479))}else n=$f(e,a,r,2),n!==null&&ri(n,e,2)}function Gu(e){var n=e.alternate;return e===_t||n!==null&&n===_t}function Gg(e,n){Br=Ou=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Wo(e,a)}}var Vu={readContext:In,use:zu,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},kg={readContext:In,use:zu,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:In,useEffect:Ag,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fu(4194308,4,Ng.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fu(4194308,4,e,n)},useInsertionEffect:function(e,n){Fu(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var r=e();if($s){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=jn();if(a!==void 0){var u=a(n);if($s){Ae(!0);try{a(n)}finally{Ae(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=My.bind(null,_t,e),[r.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=Cd(e);var n=e.queue,a=Hg.bind(null,_t,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Dd,useDeferredValue:function(e,n){var a=jn();return Ld(a,e,n)},useTransition:function(){var e=Cd(!1);return e=Pg.bind(null,_t,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=_t,u=jn();if(yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$t===null)throw Error(s(349));(At&127)!==0||cg(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ag(dg.bind(null,r,f,e),[e]),r.flags|=2048,Hr(9,{destroy:void 0},fg.bind(null,r,f,a,n),null),a},useId:function(){var e=jn(),n=$t.identifierPrefix;if(yt){var a=Ji,r=Qi;a=(r&~(1<<32-qe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=py++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Od,useFormState:Mg,useActionState:Mg,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pd.bind(null,_t,!0,a),a.dispatch=n,[e,n]},useMemoCache:Td,useCacheRefresh:function(){return jn().memoizedState=Sy.bind(null,_t)},useEffectEvent:function(e){var n=jn(),a={impl:e};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xg={readContext:In,use:zu,useCallback:Lg,useContext:In,useEffect:Nd,useImperativeHandle:Dg,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Ug,useReducer:Bu,useRef:Tg,useState:function(){return Bu(wa)},useDebugValue:Dd,useDeferredValue:function(e,n){var a=gn();return Og(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Bu(wa)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:pl(e),n]},useSyncExternalStore:ug,useId:Bg,useHostTransitionStatus:Od,useFormState:yg,useActionState:yg,useOptimistic:function(e,n){var a=gn();return mg(a,Qt,e,n)},useMemoCache:Td,useCacheRefresh:Fg,useEffectEvent:Rg},yy={readContext:In,use:zu,useCallback:Lg,useContext:In,useEffect:Nd,useImperativeHandle:Dg,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Ug,useReducer:Rd,useRef:Tg,useState:function(){return Rd(wa)},useDebugValue:Dd,useDeferredValue:function(e,n){var a=gn();return Qt===null?Ld(a,e,n):Og(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Rd(wa)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:pl(e),n]},useSyncExternalStore:ug,useId:Bg,useHostTransitionStatus:Od,useFormState:bg,useActionState:bg,useOptimistic:function(e,n){var a=gn();return Qt!==null?mg(a,Qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Td,useCacheRefresh:Fg,useEffectEvent:Rg};function Id(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zd={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=_i(),u=ls(r);u.payload=n,a!=null&&(u.callback=a),n=us(e,u,r),n!==null&&(ri(n,e,r),ul(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=_i(),u=ls(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=us(e,u,r),n!==null&&(ri(n,e,r),ul(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),r=ls(a);r.tag=2,n!=null&&(r.callback=n),n=us(e,r,a),n!==null&&(ri(n,e,a),ul(n,e,a))}};function Wg(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!tl(a,r)||!tl(u,f):!0}function qg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&zd.enqueueReplaceState(n,n.state,null)}function er(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Yg(e){gu(e)}function jg(e){console.error(e)}function Zg(e){gu(e)}function ku(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Kg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bd(e,n,a){return a=ls(a),a.tag=3,a.payload={element:null},a.callback=function(){ku(e,n)},a}function Qg(e){return e=ls(e),e.tag=3,e}function Jg(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Kg(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Kg(n,a,r),typeof u!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Ey(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=zn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return kn===null?cc():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===wu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),yh(e,r,u)),!1;case 22:return a.flags|=65536,r===wu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),yh(e,r,u)),!1}throw Error(s(435,a.tag))}return yh(e,r,u),cc(),!1}if(yt)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==ad&&(e=Error(s(422),{cause:r}),al(Ti(e,a)))):(r!==ad&&(n=Error(s(423),{cause:r}),al(Ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Ti(r,a),u=Bd(e.stateNode,r,u),pd(e,u),pn!==4&&(pn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ti(f,a),El===null?El=[f]:El.push(f),pn!==4&&(pn=2),n===null)return!0;r=Ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Bd(a.stateNode,r,e),pd(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_s===null||!_s.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qg(u),Jg(u,e,a,r),pd(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Fd=Error(s(461)),Sn=!1;function An(e,n,a,r){n.child=e===null?ng(n,null,a,r):Js(n,e.child,a,r)}function $g(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var R in r)R!=="ref"&&(v[R]=r[R])}else v=r;return Ys(n),r=Md(e,n,a,v,f,u),R=yd(),e!==null&&!Sn?(Ed(e,n,u),Na(e,n,u)):(yt&&R&&yu(n),n.flags|=1,An(e,n,r,u),n.child)}function e_(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!ed(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,t_(e,n,f,r,u)):(e=Su(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:tl,a(v,r)&&e.ref===n.ref)return Na(e,n,u)}return n.flags|=1,e=ba(f,r),e.ref=n.ref,e.return=n,n.child=e}function t_(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(tl(f,r)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=r=f,Yd(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,Na(e,n,u)}return Hd(e,n,a,r,u)}function n_(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return i_(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ru(n,f!==null?f.cachePool:null),f!==null?sg(n,f):gd(),rg(n);else return r=n.lanes=536870912,i_(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Ru(n,f.cachePool),sg(n,f),ds(),n.memoizedState=null):(e!==null&&Ru(n,null),gd(),ds());return An(e,n,u,a),n.child}function gl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i_(e,n,a,r,u){var f=cd();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ru(n,null),gd(),rg(n),e!==null&&qs(e,n,r,!0),n.childLanes=u,null}function Xu(e,n){return n=Wu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function a_(e,n,a){return Js(n,e.child,null,a),e=Xu(n,n.pendingProps),e.flags|=2,hi(n),n.memoizedState=null,e}function by(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(r.mode==="hidden")return e=Xu(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},gl(null,e);if(vd(n),(e=en)?(e=Nv(e,Ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ns!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=G0(e),a.return=n,n.child=a,Dn=n,en=null)):e=null,e===null)throw as(n);return n.lanes=536870912,null}return Xu(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(vd(n),u)if(n.flags&256)n.flags&=-257,n=a_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||qs(e,n,a,!1),u=(a&e.childLanes)!==0,Sn||u){if(cs.current===null){if(r=$t,r!==null&&(v=$a(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Vs(e,v),ri(r,e,v),Fd;cc()}n=a_(e,n,a)}else e=f.treeContext,en=Ni(v.nextSibling),Dn=n,yt=!0,is=null,Ci=!1,e!==null&&X0(n,e),n=Xu(n,r),n.flags|=134221824;return n}return e=ba(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Hd(e,n,a,r,u){return Ys(n),a=Md(e,n,a,r,void 0,u),r=yd(),e!==null&&!Sn?(Ed(e,n,u),Na(e,n,u)):(yt&&r&&yu(n),n.flags|=1,An(e,n,a,u),n.child)}function s_(e,n,a,r,u,f){return Ys(n),n.updateQueue=null,a=lg(n,r,a,u),og(e),r=yd(),e!==null&&!Sn?(Ed(e,n,f),Na(e,n,f)):(yt&&r&&yu(n),n.flags|=1,An(e,n,a,f),n.child)}function r_(e,n,a,r,u){if(Ys(n),n.stateNode===null){var f=Dr,v=a.contextType;typeof v=="object"&&v!==null&&(f=In(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},dd(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?In(v):Dr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Id(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&zd.enqueueReplaceState(f,f.state,null),fl(n,r,f,u),cl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,I=er(a,R);f.props=I;var K=f.context,le=a.contextType;v=Dr,typeof le=="object"&&le!==null&&(v=In(le));var Se=a.getDerivedStateFromProps;le=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,le||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||K!==v)&&qg(n,f,r,v),os=!1;var Y=n.memoizedState;f.state=Y,fl(n,r,f,u),cl(),K=n.memoizedState,R||Y!==K||os?(typeof Se=="function"&&(Id(n,a,Se,r),K=n.memoizedState),(I=os||Wg(n,a,I,r,Y,K,v))?(le||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),f.props=r,f.state=K,f.context=v,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,hd(e,n),v=n.memoizedProps,le=er(a,v),f.props=le,Se=n.pendingProps,Y=f.context,K=a.contextType,I=Dr,typeof K=="object"&&K!==null&&(I=In(K)),R=a.getDerivedStateFromProps,(K=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Se||Y!==I)&&qg(n,f,r,I),os=!1,Y=n.memoizedState,f.state=Y,fl(n,r,f,u),cl();var ae=n.memoizedState;v!==Se||Y!==ae||os||e!==null&&e.dependencies!==null&&Tu(e.dependencies)?(typeof R=="function"&&(Id(n,a,R,r),ae=n.memoizedState),(le=os||Wg(n,a,le,r,Y,ae,I)||e!==null&&e.dependencies!==null&&Tu(e.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ae,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ae,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ae),f.props=r,f.state=ae,f.context=I,r=le):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Gr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Js(n,e.child,null,u),n.child=Js(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Na(e,n,u),e}function o_(e,n,a,r){return Xs(),n.flags|=256,An(e,n,a,r),n.child}var Gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vd(e){return{baseLanes:e,cachePool:K0()}}function kd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function l_(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(u?fs(n):ds(),(e=en)?(e=Nv(e,Ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ns!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=G0(e),a.return=n,n.child=a,Dn=n,en=null)):e=null,e===null)throw as(n);return Vh(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(ds(),u=n.mode,f=Wu({mode:"hidden",children:f},u),r=ks(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=Vd(a),r.childLanes=kd(e,v,a),n.memoizedState=Gd,gl(null,r)):(fs(n),Xd(n,f))}var R=e.memoizedState;if(R!==null){var I=R.dehydrated;if(I!==null)return Ty(e,n,f,v,r,I,R,a)}return u?(ds(),u=r.fallback,f=n.mode,R=e.child,I=R.sibling,r=ba(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,I!==null?u=ba(I,u):(u=ks(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,gl(null,r),r=n.child,u=e.child.memoizedState,u===null?u=Vd(a):(f=u.cachePool,f!==null?(R=vn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=K0(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=kd(e,v,a),n.memoizedState=Gd,gl(e.child,r)):(fs(n),a=e.child,e=a.sibling,a=ba(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Xd(e,n){return n=Wu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wu(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function qu(e,n,a){return Js(n,e.child,null,a),e=Xd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ty(e,n,a,r,u,f,v,R){if(a)return n.flags&256?(fs(n),n.flags&=-257,qu(e,n,R)):n.memoizedState!==null?(ds(),n.child=e.child,n.flags|=128,null):(ds(),f=u.fallback,v=n.mode,u=Wu({mode:"visible",children:u.children},v),f=ks(f,v,R,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Js(n,e.child,null,R),u=n.child,u.memoizedState=Vd(R),u.childLanes=kd(e,r,R),n.memoizedState=Gd,gl(null,u));if(fs(n),Vh(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,al({value:u,source:null,stack:null})),qu(e,n,R)}if(Sn||qs(e,n,R,!1),r=(R&e.childLanes)!==0,Sn||r){if(cs.current!==null)return qu(e,n,R);if(r=$t,r!==null&&(u=$a(r,R),u!==0&&u!==v.retryLane))throw v.retryLane=u,Vs(e,u),ri(r,e,u),Fd;return Gh(f)||cc(),qu(e,n,R)}return Gh(f)?(n.flags|=192,n.child=e.child,null):(e=v.treeContext,en=Ni(f.nextSibling),Dn=n,yt=!0,is=null,Ci=!1,e!==null&&X0(n,e),n=Xd(n,u.children),n.flags|=134221824,n)}function u_(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),bu(e.return,n,a)}function c_(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Uu(a)===null&&(n=e),e=e.sibling}return n}function Yu(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Wd(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function qd(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=Bn.current;if(n.flags&128)return dl(n,v),null;var R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,dl(n,v),u==="backwards"&&e!==null?(Wd(e),An(e,n,r,a),Wd(e)):An(e,n,r,a),r=yt?il:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u_(e,a,n);else if(e.tag===19)u_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=c_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Wd(n)),Yu(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Uu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Yu(n,!0,a,null,f,r);break;case"together":Yu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=c_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Yu(n,!1,u,a,f,r)}return n.child}function f_(e,n,a){var r=n.pendingProps;return ss(n,n.type,r.value),An(e,n,r.children,a),n.child}function Na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),gs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ba(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tu(e)))}function Ay(e,n,a){switch(n.tag){case 3:bn(n,n.stateNode.containerInfo),ss(n,vn,e.memoizedState.cache),Xs();break;case 27:case 5:wn(n);break;case 4:bn(n,n.stateNode.containerInfo);break;case 10:ss(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vd(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return fs(n),n.flags|=128,null;r=qs(e,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?l_(e,n,a):(fs(n),e=Na(e,n,a),e!==null?e.sibling:null)}fs(n);break;case 19:if(n.flags&128)return qd(e,n,a);if(u=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(qs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return qd(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),dl(n,Bn.current),r)break;return null;case 22:return n.lanes=0,n_(e,n,a,n.pendingProps);case 24:ss(n,vn,e.memoizedState.cache)}return Na(e,n,a)}function d_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Yd(e,a)&&(n.flags&128)===0)return Sn=!1,Ay(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,yt&&(n.flags&1048576)!==0&&k0(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ks(n.elementType),n.type=e,typeof e=="function")ed(e)?(r=er(e,r),n.tag=1,n=r_(null,n,e,r,a)):(n.tag=0,n=Hd(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===X){n.tag=11,n=$g(null,n,e,r,a);break e}else if(u===ne){n.tag=14,n=e_(null,n,e,r,a);break e}else if(u===re){n.tag=10,n.type=e,n=f_(null,n,a);break e}}throw n=ye(e)||e,Error(s(306,n,""))}}return n;case 0:return Hd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=er(r,n.pendingProps),r_(e,n,r,u,a);case 3:e:{if(bn(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,hd(e,n),fl(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ss(n,vn,r),r!==f.cache&&od(n,[vn],a,!0),cl(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=o_(e,n,r,a);break e}else if(r!==u){u=Ti(Error(s(424)),n),al(u),n=o_(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Ni(e.firstChild),Dn=n,yt=!0,is=null,Ci=!0,a=ng(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Xs(),r===u){n=Na(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return Gr(e,n),e===null?(a=zv(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(n.stateNode=gv(n.type,n.pendingProps,Jt.current,n)):n.memoizedState=zv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return wn(n),e===null&&yt&&(r=n.stateNode=Uv(n.type,n.pendingProps,Jt.current),Dn=n,Ci=!0,u=en,Ss(n.type)?(kh=u,en=Ni(r.firstChild)):en=u),An(e,n,n.pendingProps.children,a),Gr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((u=r=en)&&(r=SE(r,n.type,n.pendingProps,Ci),r!==null?(n.stateNode=r,Dn=n,en=Ni(r.firstChild),Ci=!1,u=!0):u=!1),u||as(n)),wn(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Oh(u,f)?r=null:v!==null&&Oh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Md(e,n,my,null,null,a),so._currentValue=u),Gr(e,n),An(e,n,r,a),n.child;case 6:return e===null&&yt&&((e=a=en)&&(a=ME(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Dn=n,en=null,e=!0):e=!1),e||as(n)),null;case 13:return l_(e,n,a);case 4:return bn(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Js(n,null,r,a):An(e,n,r,a),n.child;case 11:return $g(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Gr(e,n),An(e,n,r,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return f_(e,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Ys(n),u=In(u),r=r(u),n.flags|=1,An(e,n,r,a),n.child;case 14:return e_(e,n,n.type,n.pendingProps,a);case 15:return t_(e,n,n.type,n.pendingProps,a);case 19:return qd(e,n,a);case 31:return by(e,n,a);case 22:return n_(e,n,a,n.pendingProps);case 24:return Ys(n),r=In(vn),e===null?(u=cd(),u===null&&(u=$t,f=ld(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},dd(n),ss(n,vn,u)):((e.lanes&a)!==0&&(hd(e,n),fl(n,null,null,a),cl()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ss(n,vn,r)):(r=f.cache,ss(n,vn,r),r!==u.cache&&od(n,[vn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:yt&&yu(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Gr(e,n),An(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Da(e){e.flags|=4}function jd(e,n,a,r,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?Gv(n,r):Gv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Y_())e.flags|=8192;else throw Qs=wu,fd}else e.flags&=-16777217}function h_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vv(n))if(Y_())e.flags|=8192;else throw Qs=wu,fd}function ju(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xr():536870912,e.lanes|=n,qr|=n)}function _l(e,n){if(!yt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ry(e,n,a){var r=n.pendingProps;switch(id(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ra(vn),W(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Or(n)?Da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sd())),tn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Da(n),f!==null?(tn(n),h_(n,f)):(tn(n),jd(n,u,null,r,a))):f?f!==e.memoizedState?(Da(n),tn(n),h_(n,f)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Da(n),tn(n),jd(n,u,e,r,a)),null;case 27:if(Ut(n),a=Jt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}e=Yt.current,Or(n)?W0(n):(e=Uv(u,r,a),n.stateNode=e,Da(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(Ut(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(f=Yt.current,Or(n))W0(n);else{var v=Cl(Jt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[Tn]=n,f[Pn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Hn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Da(n)}}return tn(n),n.subtreeFlags&=-33554433,jd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Jt.current,Or(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[Tn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||dv(e.nodeValue,a)),e||as(n,!0)}else e=Cl(e).createTextNode(r),e[Tn]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Or(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Tn]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Or(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Tn]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ju(n,n.updateQueue),tn(n),null);case 4:return W(),e===null&&wh(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return Ra(n.type),tn(n),null;case 19:if(xd(n),r=n.memoizedState,r===null)return tn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)_l(r,!1);else{if(pn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Uu(e),f!==null){for(n.flags|=128,_l(r,!1),e=f.updateQueue,n.updateQueue=e,ju(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)H0(a,e),a=a.sibling;return dl(n,Bn.current&1|2),yt&&Ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&he()>rc&&(n.flags|=128,u=!0,_l(r,!1),n.lanes=4194304)}else{if(!u)if(e=Uu(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ju(n,e),_l(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!yt)return tn(n),null}else 2*he()-r.renderingStartTime>rc&&a!==536870912&&(n.flags|=128,u=!0,_l(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=he(),e.sibling=null,f=Bn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||yt?dl(n,f):(a=f,at(zn,n),at(Bn,a),kn===null&&(kn=n)),yt&&Ta(n,r.treeForkCount),e}return tn(n),null;case 22:case 23:return hi(n),_d(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&ju(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Nt(Zs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ra(vn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function Cy(e,n){switch(id(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ra(vn),W(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ut(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(s(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xd(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return W(),null;case 10:return Ra(n.type),null;case 22:case 23:return hi(n),_d(),e!==null&&Nt(Zs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ra(vn),null;case 25:return null;default:return null}}function p_(e,n){switch(id(n),n.tag){case 3:Ra(vn),W();break;case 26:case 27:case 5:Ut(n);break;case 4:W();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:xd(n);break;case 10:Ra(n.type);break;case 22:case 23:hi(n),_d(),e!==null&&Nt(Zs);break;case 24:Ra(vn)}}function vl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(R){Xt(n,n.return,R)}}function hs(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var I=a,K=R;try{K()}catch(le){Xt(u,I,le)}}}r=r.next}while(r!==f)}}catch(le){Xt(n,n.return,le)}}function m_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ag(n,a)}catch(r){Xt(e,e.return,r)}}}function g_(e,n,a){a.props=er(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xt(e,n,r)}}function $i(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var u=e.stateNode,f=ya(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=Ev(f)),r=u.ref;break;case 7:if(e.stateNode===null){var v=new vi(e);g(e.child,!1,vE,v,void 0,void 0),e.stateNode=v}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){Xt(e,n,R)}}function Fn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Xt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(e,n,u)}else a.current=null}function Zu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)wv(e.stateNode,n[a])}function __(e){for(var n=e.return;n!==null&&(Kd(n)&&wv(e.stateNode,n.stateNode),!Zd(n));)n=n.return}function xl(e){for(var n=e.return;n!==null&&(Kd(n)&&xE(e.stateNode,n.stateNode),!Zd(n));)n=n.return}function Zd(e){return e.tag===5||e.tag===3||e.tag===27}function Kd(e){return e&&e.tag===7&&e.stateNode!==null}function Qd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Xt(e,e.return,u)}}function Jd(e,n,a){try{var r=e.stateNode;eE(r,e.type,a,n),r[Pn]=n}catch(u){Xt(e,e.return,u)}}function v_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ss(e.type)||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eh(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki)),Zu(e,r),ut=!0;else if(u!==4&&(u===27&&(Zu(e,r),r=null,Ss(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(eh(e,n,a,r),e=e.sibling;e!==null;)eh(e,n,a,r),e=e.sibling}function Ku(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Zu(e,r),ut=!0;else if(u!==4&&(u===27&&(Zu(e,r),r=null,Ss(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Ku(e,n,a,r),e=e.sibling;e!==null;)Ku(e,n,a,r),e=e.sibling}function x_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,r,a),n[Tn]=e,n[Pn]=a}catch(f){Xt(e,e.return,f)}}var Qu=!1,pi=null;function S_(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Qu=!0)}var ea=null;function M_(){var e=ea;return ea=null,e}var ii=0;function Vr(e,n,a,r,u){return ii=0,y_(e.child,n,a,r,u)}function y_(e,n,a,r,u){for(var f=!1;e!==null;){if(e.tag===5){var v=e.stateNode;if(r!==null){var R=zh(v);r.push(R),R.view&&(f=!0)}else f||zh(v).view&&(f=!0);Qu=!0,Mv(v,ii===0?n:n+"_"+ii,a),ii++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||y_(e.child,n,a,r,u)&&(f=!0));e=e.sibling}return f}function ta(e,n){for(;e!==null;)e.tag===5?yv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ta(e.child,n)),e=e.sibling}function Ju(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Ju(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Ea(n.default,n.share),n!=="none"&&(Vr(e,a,n,null,!1)||ta(e.child,!1))}e=e.sibling}}function th(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,u=ya(r,a),f=Ea(r.default,a.paired?r.share:r.enter);f!=="none"?Vr(e,u,f,null,!1)?(Ju(e),a.paired||n||Kr(e,r.onEnter)):ta(e.child,!1):Ju(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)th(e,n),e=e.sibling;else Ju(e)}function nh(e){if(pi!==null&&pi.size!==0){var n=pi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=Ea(a.default,a.share);if(f!=="none"&&(Vr(e,r,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,Kr(e,a.onShare)):ta(e.child,!1)),n.delete(r),n.size===0)break}}}nh(e)}e=e.sibling}}}function ih(e){if(e.tag===30){var n=e.memoizedProps,a=ya(n,e.stateNode),r=pi!==null?pi.get(a):void 0,u=Ea(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Vr(e,a,u,null,!1)?r!==void 0?(u=e.stateNode,r.paired=u,u.paired=r,pi.delete(a),Kr(e,n.onShare)):Kr(e,n.onExit):ta(e.child,!1)),pi!==null&&nh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ih(e),e=e.sibling;else pi!==null&&nh(e)}function E_(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ya(n,e.stateNode);n=Ea(n.default,n.update),e.flags&=-5,n!=="none"&&Vr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&E_(e);e=e.sibling}}function ah(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ta(e.child,!1))}ah(e)}e=e.sibling}}function $u(e){if(e.tag===30)e.stateNode.paired=null,ta(e.child,!1),ah(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$u(e),e=e.sibling;else ah(e)}function b_(e){for(e=e.child;e!==null;)e.tag===30?ta(e.child,!1):(e.subtreeFlags&33554432)!==0&&b_(e),e=e.sibling}function sh(e,n,a,r,u,f,v){for(var R=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&ii<f.length){var K=f[ii],le=zh(I);(K.view||le.view)&&(R=!0);var Se;if(Se=(e.flags&4)===0)if(le.clip)Se=!0;else{Se=K.rect;var Y=le.rect;Se=Se.y!==Y.y||Se.x!==Y.x||Se.height!==Y.height||Se.width!==Y.width}Se&&(e.flags|=4),le.abs?le=!K.abs:(K=K.rect,le=le.rect,le=K.height!==le.height||K.width!==le.width),le&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Mv(I,ii===0?a:a+"_"+ii,u),R&&(e.flags&4)!==0||(ea===null&&(ea=[]),ea.push(I,ii===0?r:r+"_"+ii,n.memoizedProps)),ii++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?e.flags|=n.flags&32:sh(e,n.child,a,r,u,f,v)&&(R=!0));n=n.sibling}return R}function T_(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,u=ya(a,r),f=Ea(a.default,a.update),v;v=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;ii=0,u=sh(r,R,u,u,f,v,!1),(e.flags&4)!==0&&u&&Kr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&T_(e);e=e.sibling}}var Ln=!1,Gt=!1,na=!1,rh=!1,A_=typeof WeakSet=="function"?WeakSet:Set,Un=null,ia=!1,Sl=!1,ec=!1,oh=!1;function wy(e,n,a){if(e=e.containerInfo,Lh=ro,e=N0(e),Yf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break e}var R=0,I=-1,K=-1,le=0,Se=0,Y=e,ae=null;t:for(;;){for(var He;Y!==r||f!==0&&Y.nodeType!==3||(I=R+f),Y!==v||u!==0&&Y.nodeType!==3||(K=R+u),Y.nodeType===3&&(R+=Y.nodeValue.length),(He=Y.firstChild)!==null;)ae=Y,Y=He;for(;;){if(Y===e)break t;if(ae===r&&++le===f&&(I=R),ae===v&&++Se===u&&(K=R),(He=Y.nextSibling)!==null)break;Y=ae,ae=Y.parentNode}Y=He}r=I===-1||K===-1?null:{start:I,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(Uh={focusedElem:e,selectionRange:r},ro=!1,a=(a&335544064)===a,Un=n,n=a?9270:1024;Un!==null;){if(e=Un,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&ih(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&S_(e),tc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ih(r),tc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&S_(e),tc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Un=r):(a&&E_(e),tc(a))}}pi=null}function tc(e){for(;Un!==null;){var n=Un,a=e,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var v=er(n.type,u);a=f.getSnapshotBeforeUpdate(v,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Xt(n,n.return,R)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Hh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Hh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ya(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=Ea(u.default,u.update),u!=="none"&&Vr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Un=r;break}Un=n.return}}function R_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),r&4&&vl(5,a);break;case 1:if(aa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Xt(a,a.return,v)}else{var u=er(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(a,a.return,v)}}r&64&&m_(a),r&512&&$i(a,a.return);break;case 3:if(aa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ag(e,n)}catch(v){Xt(a,a.return,v)}}break;case 27:n===null&&r&4&&x_(a);case 26:case 5:aa(e,a),n===null&&r&4&&Qd(a),r&512&&$i(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),r&4&&D_(e,a);break;case 13:aa(e,a),r&4&&L_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gy.bind(null,a),yE(e,a))));break;case 22:if(r=a.memoizedState!==null||Ln,!r){var f=n!==null&&n.memoizedState!==null||Gt;n=Ln,u=Gt,Ln=r,(Gt=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Gi(e,a,r)):aa(e,a),Ln=n,Gt=u}break;case 30:aa(e,a),r&512&&$i(a,a.return);break;case 7:r&512&&$i(a,a.return);default:aa(e,a)}}function lh(e,n){for(e=e.child;e!==null;)C_(e,n),e=e.sibling}function C_(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,v=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(I){Xt(e,e.return,I)}uh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ut=!0}catch(I){Xt(e,e.return,I)}break;case 18:try{var R=e.stateNode;n?Sv(R,!0):Sv(e.stateNode,!1)}catch(I){Xt(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&lh(e,n);break;default:lh(e,n)}}function uh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:C_(a,r);break e;case 22:a.memoizedState===null&&uh(a,r);break e;default:uh(a,r)}}e=e.sibling}}function w_(e){var n=e.alternate;n!==null&&(e.alternate=null,w_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&De(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,ai=!1;function Fi(e,n,a){for(a=a.child;a!==null;)N_(e,n,a),a=a.sibling}function N_(e,n,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Gt||Fn(a,n),Fi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Gt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gt||Fn(a,n),xl(a);var r=an,u=ai;Ss(a.type)&&(an=a.stateNode,ai=!1),Fi(e,n,a),Ov(a.stateNode,a.type,a.memoizedProps),an=r,ai=u;break;case 5:Gt||Fn(a,n),xl(a);case 6:if(a.tag===6&&xl(a),r=an,u=ai,an=null,Fi(e,n,a),an=r,ai=u,an!==null)if(ai)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),ut=!0}catch(f){Xt(a,n,f)}else try{an.removeChild(a.stateNode),ut=!0}catch(f){Xt(a,n,f)}break;case 18:an!==null&&(ai?(e=an,xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),oo(e)):xv(an,a.stateNode));break;case 4:r=an,u=ai,an=a.stateNode.containerInfo,ai=!0,Fi(e,n,a),an=r,ai=u;break;case 0:case 11:case 14:case 15:hs(2,a,n),Gt||hs(4,a,n),Fi(e,n,a);break;case 1:Gt||(Fn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&g_(a,n,r)),Fi(e,n,a);break;case 21:Fi(e,n,a);break;case 22:Gt=(r=Gt)||a.memoizedState!==null,Fi(e,n,a),Gt=r;break;case 30:Fn(a,n),Fi(e,n,a);break;case 7:Gt||Fn(a,n),Fi(e,n,a);break;default:Fi(e,n,a)}}function D_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oo(e)}catch(a){Xt(n,n.return,a)}}}function L_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oo(e)}catch(a){Xt(n,n.return,a)}}function Ny(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new A_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new A_),n;default:throw Error(s(435,e.tag))}}function nc(e,n){var a=Ny(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Vy.bind(null,e,r);r.then(u,u)}})}function Zn(e,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],v=e,R=n,I=R;e:for(;I!==null;){switch(I.tag){case 27:if(Ss(I.type)){an=I.stateNode,ai=!1;break e}break;case 5:an=I.stateNode,ai=!1;break e;case 3:case 4:an=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(an===null)throw Error(s(160));N_(v,R,f),an=null,ai=!1,v=f.alternate,v!==null&&(v.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)U_(n,e,a),n=n.sibling}var Hi=null;function U_(e,n,a){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var v=r[f];v.ref.impl=v.nextImpl}Zn(n,e,a),Kn(e),u&4&&(hs(3,e,e.return),vl(3,e),hs(5,e,e.return));break;case 1:Zn(n,e,a),Kn(e),u&512&&(Gt||r===null||Fn(r,r.return)),u&64&&Ln&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Hi,Zn(n,e,a),Kn(e),u&512&&(Gt||r===null||Fn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Ln)e.stateNode=gv(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;t:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ne]||r[Tn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Hn(r,n,a),r[Tn]=e,ze(r),n=r;break e;case"link":if(f=Hv("link","href",u).get(n+(a.href||""))){for(v=0;v<f.length;v++)if(r=f[v],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break t}}r=u.createElement(n),Hn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=Hv("meta","content",u).get(n+(a.content||""))){for(v=0;v<f.length;v++)if(r=f[v],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break t}}r=u.createElement(n),Hn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Tn]=e,ze(r),n=r}e.stateNode=n}else Ln||Yh(f,e.type,e.stateNode);else e.stateNode=Fv(f,a,e.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Gt||n.parentNode.removeChild(n)):u.count--,a===null?Ln||Yh(f,e.type,e.stateNode):Fv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Jd(e,e.memoizedProps,r.memoizedProps);break;case 27:Zn(n,e,a),Kn(e),u&512&&(Gt||r===null||Fn(r,r.return)),r!==null&&u&4&&Jd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=na,na=!1,Zn(n,e,a),na=f,Kn(e),u&512&&(Gt||r===null||Fn(r,r.return)),e.flags&32){n=e.stateNode;try{br(n,""),ut=!0}catch(le){Xt(e,e.return,le)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Jd(e,n,r!==null?r.memoizedProps:n)),u&1024&&(rh=!0);break;case 6:if(Zn(n,e,a),Kn(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ut=!0}catch(le){Xt(e,e.return,le)}}break;case 3:if(ut=!1,_c=null,f=Hi,Hi=wl(n.containerInfo),Zn(n,e,a),Hi=f,Kn(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{oo(n.containerInfo)}catch(le){Xt(e,e.return,le)}rh&&(rh=!1,O_(e)),ut=!1;break;case 4:u=na,na=Ln,r=Fs(),f=Hi,Hi=wl(e.stateNode.containerInfo),Zn(n,e,a),Kn(e),Hi=f,ut&&Sl&&(ec=!0),ut=r,na=u;break;case 12:Zn(n,e,a),Kn(e);break;case 31:Zn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,nc(e,n)));break;case 13:Zn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(sc=he()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,nc(e,n)));break;case 22:f=e.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var R=Ln,I=Gt,K=na;Ln=R||f,na=K||f,Gt=I||v,Zn(n,e,a),Gt=I,na=K,Ln=R,Kn(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||v||Ln||Gt||(n=v||Gt,a=Ln,r=Gt,Ln=f||Ln,Gt=n,ps(e,2),Ln=a,Gt=r),!f&&na||lh(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,nc(e,a))));break;case 19:Zn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,nc(e,n)));break;case 30:u&512&&(Gt||r===null||Fn(r,r.return)),u=Fs(),f=Sl,v=(a&335544064)===a,R=e.memoizedProps,Sl=v&&Ea(R.default,R.update)!=="none",Zn(n,e,a),Kn(e),v&&r!==null&&ut&&(e.flags|=4),Sl=f,ut=u;break;case 21:break;case 7:u&512&&(Gt||r===null||Fn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Zn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(v_(r)){a=r;break}r=r.return}r=null;for(var u=e.return;u!==null;){if(Kd(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(Zd(u))break;u=u.return}var v=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,I=$d(e);Ku(e,I,R,v);break;case 5:var K=a.stateNode;a.flags&32&&(br(K,""),a.flags&=-33);var le=$d(e);Ku(e,le,K,v);break;case 3:case 4:var Se=a.stateNode.containerInfo,Y=$d(e);eh(e,Y,Se,v);break;default:throw Error(s(161))}}catch(ae){Xt(e,e.return,ae)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function O_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;O_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ro=!0,n.reset(),ro=!1),e=e.sibling}}function kr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)P_(n,e),n=n.sibling;else T_(n)}function P_(e,n){var a=e.alternate;if(a===null)th(e,!1);else switch(e.tag){case 3:if(oh=ia=!1,M_(),kr(n,e),!ia&&!ec){if(e=ea,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var u=e[r+1];yv(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),oh=!0}ea=null;break;case 5:kr(n,e);break;case 4:r=ia,ia=!1,kr(n,e),ia&&(ec=!0),ia=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?th(e,!1):kr(n,e));break;case 30:r=ia,u=M_(),ia=!1,kr(n,e),ia&&(e.flags|=4);var f=e.memoizedProps,v=e.stateNode;n=ya(f,v),v=ya(a.memoizedProps,v);var R=Ea(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ii=0,n=sh(e,a,n,v,R,f,!0),ii!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Kr(e,e.memoizedProps.onUpdate),ea=u):u!==null&&(u.push.apply(u,ea),ea=u),ia=(e.flags&32)!==0?!0:r;break;default:kr(n,e)}}function aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R_(e,n.alternate,n),n=n.sibling}function ps(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:hs(4,a,a.return),ps(a,r);break;case 1:Fn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&g_(a,a.return,u),ps(a,r);break;case 27:(r&2)!==0&&Ov(a.stateNode,a.type,a.memoizedProps);case 5:Fn(a,a.return),a.tag!==5&&a.tag!==27||xl(a),ps(a,r);break;case 6:xl(a);break;case 26:Fn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Gt||u.parentNode.removeChild(u),ps(a,r);break;case 22:a.memoizedState===null&&ps(a,r);break;case 30:Fn(a,a.return),ps(a,r);break;case 7:Fn(a,a.return);default:ps(a,r)}e=e.sibling}}function Gi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Gi(u,f,a),vl(4,f);break;case 1:if(Gi(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Xt(r,r.return,le)}if(r=f,u=r.updateQueue,u!==null){var I=r.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)ig(K[u],I)}catch(le){Xt(r,r.return,le)}}R&&v&64&&m_(f),$i(f,f.return);break;case 27:(a&2)!==0&&x_(f);case 5:f.tag!==5&&f.tag!==27||__(f),Gi(u,f,a),R&&r===null&&v&4&&Qd(f),$i(f,f.return);break;case 6:__(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Ln||Yh(wl(I.ownerDocument),f.type,I),Gi(u,f,a),R&&r===null&&v&4&&Qd(f),$i(f,f.return);break;case 12:Gi(u,f,a);break;case 31:Gi(u,f,a),R&&v&4&&D_(u,f);break;case 13:Gi(u,f,a),R&&v&4&&L_(u,f);break;case 22:f.memoizedState===null&&Gi(u,f,a),$i(f,f.return);break;case 30:Gi(u,f,a),$i(f,f.return);break;case 7:$i(f,f.return);default:Gi(u,f,a)}n=n.sibling}}function ch(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sl(a))}function fh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&sl(e))}function wi(e,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)I_(e,n,a,r),n=n.sibling;else u&&b_(n)}function I_(e,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&$u(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,r),f&2048&&vl(9,n);break;case 1:wi(e,n,a,r);break;case 3:wi(e,n,a,r),u&&oh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&sl(f)));break;case 12:if(f&2048){wi(e,n,a,r),f=n.stateNode;try{var v=n.memoizedProps,R=v.id,I=v.onPostCommit;typeof I=="function"&&I(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(K){Xt(n,n.return,K)}}else wi(e,n,a,r);break;case 31:wi(e,n,a,r);break;case 13:wi(e,n,a,r);break;case 23:break;case 22:v=n.stateNode,R=n.alternate,n.memoizedState!==null?(u&&R!==null&&R.memoizedState===null&&$u(R),v._visibility&2?wi(e,n,a,r):Ml(e,n)):(u&&R!==null&&R.memoizedState!==null&&$u(n),v._visibility&2?wi(e,n,a,r):(v._visibility|=2,Xr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&ch(R,n);break;case 24:wi(e,n,a,r),f&2048&&fh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(ta(f.child,!0),ta(n.child,!0))),wi(e,n,a,r);break;default:wi(e,n,a,r)}}function Xr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,I=r,K=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(f,v,R,I,u),vl(8,v);break;case 23:break;case 22:var le=v.stateNode;v.memoizedState!==null?le._visibility&2?Xr(f,v,R,I,u):Ml(f,v):(le._visibility|=2,Xr(f,v,R,I,u)),u&&K&2048&&ch(v.alternate,v);break;case 24:Xr(f,v,R,I,u),u&&K&2048&&fh(v.alternate,v);break;default:Xr(f,v,R,I,u)}n=n.sibling}}function Ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:Ml(a,r),u&2048&&ch(r.alternate,r);break;case 24:Ml(a,r),u&2048&&fh(r.alternate,r);break;default:Ml(a,r)}n=n.sibling}}var tr=8192;function nr(e,n,a){if(e.subtreeFlags&tr)for(e=e.child;e!==null;)z_(e,n,a),e=e.sibling}function z_(e,n,a){switch(e.tag){case 26:nr(e,n,a),e.flags&tr&&(e.memoizedState!==null?IE(a,Hi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Xv(a,e)));break;case 5:nr(e,n,a),e.flags&tr&&(e=e.stateNode,(n&335544128)===n&&Xv(a,e));break;case 3:case 4:var r=Hi;Hi=wl(e.stateNode.containerInfo),nr(e,n,a),Hi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=tr,tr=16777216,nr(e,n,a),tr=r):nr(e,n,a));break;case 30:if((e.flags&tr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var u=e.stateNode;u.paired=null,pi===null&&(pi=new Map),pi.set(r,u)}nr(e,n,a);break;default:nr(e,n,a)}}function B_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Un=r,H_(r,e)}B_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)F_(e),e=e.sibling}function F_(e){switch(e.tag){case 0:case 11:case 15:yl(e),e.flags&2048&&hs(9,e,e.return);break;case 3:yl(e);break;case 12:yl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ic(e)):yl(e);break;default:yl(e)}}function ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Un=r,H_(r,e)}B_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:hs(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}e=e.sibling}}function H_(e,n){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:hs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sl(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Un=r;else e:for(a=e;Un!==null;){r=Un;var u=r.sibling,f=r.return;if(w_(r),r===a){Un=null;break e}if(u!==null){u.return=f,Un=u;break e}Un=f}}}var Dy={getCacheForType:function(e){var n=In(vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return In(vn).controller.signal}},Ly=typeof WeakMap=="function"?WeakMap:Map,Bt=0,$t=null,bt=null,At=0,kt=0,mi=null,ms=!1,Wr=!1,dh=!1,La=0,pn=0,gs=0,ir=0,ac=0,gi=0,qr=0,El=null,si=null,hh=!1,sc=0,G_=0,rc=1/0,oc=null,_s=null,un=0,Vi=null,ar=null,sa=0,ph=0,mh=null,V_=null,Yr=null,jr=null,Zr=null,bl=0,lc=null;function _i(){return(Bt&2)!==0&&At!==0?At&-At:xe.T!==null?Th():Yo()}function k_(){if(gi===0)if((At&536870912)===0||yt){var e=ci;ci<<=1,(ci&3932160)===0&&(ci=262144),gi=e}else gi=536870912;return e=zn.current,e!==null&&(e.flags|=32),gi}function Kr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=Ev(ya(e.memoizedProps,a))),jr===null&&(jr=[]),jr.push(n.bind(null,r))}}function ri(e,n,a){(e===$t&&(kt===2||kt===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),vs(e,At,gi,!1)),Ja(e,a),((Bt&2)===0||e!==$t)&&(e===$t&&((Bt&2)===0&&(ir|=a),pn===4&&vs(e,At,gi,!1)),ra(e))}function X_(e,n,a){if((Bt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Qa(e,n),u=r?Py(e,n):_h(e,n,!0),f=r;do{if(u===0){Wr&&!r&&vs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Uy(a)){u=_h(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=e;u=El;var I=R.current.memoizedState.isDehydrated;if(I&&(Qr(R,v).flags|=256),v=_h(R,v,!1),v!==2&&v!==6){if(dh&&!I){R.errorRecoveryDisabledLanes|=f,ir|=f,u=4;break e}f=si,si=u,f!==null&&(si===null?si=f:si.push.apply(si,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Qr(e,0),vs(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:vs(r,n,gi,!ms);break e;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=sc+300-he(),10<u)){if(vs(r,n,gi,!ms),vr(r,0,!0)!==0)break e;sa=n,r.timeoutHandle=Ih(W_.bind(null,r,a,si,oc,hh,n,gi,ir,qr,ms,f,"Throttled",-0,0),u);break e}W_(r,a,si,oc,hh,n,gi,ir,qr,ms,f,null,-0,0)}}break}while(!0);ra(e)}function W_(e,n,a,r,u,f,v,R,I,K,le,Se,Y,ae){e.timeoutHandle=-1;var He=n.subtreeFlags,Ke=(f&335544064)===f;if(Se=null,(Ke||He&8192||(He&16785408)===16785408)&&(Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},pi=null,z_(n,f,Se),Ke&&(He=Se,Ke=e.containerInfo,Ke=(Ke.nodeType===9?Ke:Ke.ownerDocument).__reactViewTransition,Ke!=null&&(He.count++,He.waitingForViewTransition=!0,He=Ll.bind(He),Ke.finished.then(He,He))),He=(f&62914560)===f?sc-he():(f&4194048)===f?G_-he():0,He=zE(Se,He),He!==null)){sa=f,e.cancelPendingCommit=He($_.bind(null,e,n,f,a,r,u,v,R,I,K,le,Se,null,Y,ae)),vs(e,f,v,!K);return}$_(e,n,f,a,r,u,v,R,I,K,le,Se)}function Uy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!di(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vs(e,n,a,r){n=ko(e,n),n&=~ac,n&=~ir,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-qe(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Xo(e,a,n)}function uc(){return(Bt&6)===0?(Tl(0),!1):!0}function gh(){if(bt!==null){if(kt===0)var e=bt.return;else e=bt,Aa=Ws=null,bd(e),zr=null,ll=0,e=bt;for(;e!==null;)p_(e.alternate,e),e=e.return;bt=null}}function Qr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,iE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,gh(),$t=e,bt=a=ba(e.current,null),At=n,kt=0,mi=null,ms=!1,Wr=Qa(e,n),dh=!1,qr=gi=ac=ir=gs=pn=0,si=El=null,hh=!1,La=ko(e,n),_u(),a}function q_(e,n){_t=null,xe.H=Vu,n===Ir||n===Cu?(n=$0(),kt=3):n===fd?(n=$0(),kt=4):kt=n===Fd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,bt===null&&(pn=1,ku(e,Ti(n,e.current)))}function Y_(){var e=zn.current;return e===null?!0:(At&4194048)===At?kn===null:(At&62914560)===At||(At&536870912)!==0?e===kn:!1}function j_(){var e=xe.H;return xe.H=Vu,e===null?Vu:e}function Z_(){var e=xe.A;return xe.A=Dy,e}function cc(){pn=4,ms||(At&4194048)!==At&&zn.current!==null||(Wr=!0),(gs&134217727)===0&&(ir&134217727)===0||$t===null||vs($t,At,gi,!1)}function _h(e,n,a){var r=Bt;Bt|=2;var u=j_(),f=Z_();($t!==e||At!==n)&&(oc=null,Qr(e,n)),n=!1;var v=pn;e:do try{if(kt!==0&&bt!==null){var R=bt,I=mi;switch(kt){case 8:gh(),v=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var K=kt;if(kt=0,mi=null,Jr(e,R,I,K),a&&Wr){v=0;break e}break;default:K=kt,kt=0,mi=null,Jr(e,R,I,K)}}Oy(),v=pn;break}catch(le){q_(e,le)}while(!0);return n&&e.shellSuspendCounter++,Aa=Ws=null,Bt=r,xe.H=u,xe.A=f,bt===null&&($t=null,At=0,_u()),v}function Oy(){for(;bt!==null;)K_(bt)}function Py(e,n){var a=Bt;Bt|=2;var r=j_(),u=Z_();$t!==e||At!==n?(oc=null,rc=he()+500,Qr(e,n)):Wr=Qa(e,n);e:do try{if(kt!==0&&bt!==null){n=bt;var f=mi;t:switch(kt){case 1:kt=0,mi=null,Jr(e,n,f,1);break;case 2:case 9:if(Q0(f)){kt=0,mi=null,Q_(n);break}n=function(){kt!==2&&kt!==9||$t!==e||(kt=7),ra(e)},f.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Q0(f)?(kt=0,mi=null,Q_(n)):(kt=0,mi=null,Jr(e,n,f,7));break;case 5:var v=null;switch(bt.tag){case 26:v=bt.memoizedState;case 5:case 27:var R=bt;if(v?Vv(v):R.stateNode.complete){kt=0,mi=null;var I=R.sibling;if(I!==null)bt=I;else{var K=R.return;K!==null?(bt=K,fc(K)):bt=null}break t}}kt=0,mi=null,Jr(e,n,f,5);break;case 6:kt=0,mi=null,Jr(e,n,f,6);break;case 8:gh(),pn=6;break e;default:throw Error(s(462))}}Iy();break}catch(le){q_(e,le)}while(!0);return Aa=Ws=null,xe.H=r,xe.A=u,Bt=a,bt!==null?0:($t=null,At=0,_u(),pn)}function Iy(){for(;bt!==null&&!Le();)K_(bt)}function K_(e){var n=d_(e.alternate,e,La);e.memoizedProps=e.pendingProps,n===null?fc(e):bt=n}function Q_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=s_(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=s_(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:bd(n);var r=n;r===Dn&&(yt?(Eu(r),r.tag===5&&r.stateNode!=null&&(en=r.stateNode)):(Eu(r),yt=!0));default:p_(a,n),n=bt=H0(n,La),n=d_(a,n,La)}e.memoizedProps=e.pendingProps,n===null?fc(e):bt=n}function Jr(e,n,a,r){Aa=Ws=null,bd(n),zr=null,ll=0;var u=n.return;try{if(Ey(e,u,n,a,At)){pn=1,ku(e,Ti(a,e.current)),bt=null;return}}catch(f){if(u!==null)throw bt=u,f;pn=1,ku(e,Ti(a,e.current)),bt=null;return}n.flags&32768?(yt||r===1?e=!0:Wr||(At&536870912)!==0?e=!1:(ms=e=!0,(r===2||r===9||r===3||r===6)&&(r=zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),J_(n,e)):fc(n)}function fc(e){var n=e;do{if((n.flags&32768)!==0){J_(n,ms);return}e=n.return;var a=Ry(n.alternate,n,La);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=e}while(n!==null);pn===0&&(pn=5)}function J_(e,n){do{var a=Cy(e.alternate,e);if(a!==null){a.flags&=32767,bt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){bt=e;return}bt=e=a}while(e!==null);pn=6,bt=null}function $_(e,n,a,r,u,f,v,R,I,K,le,Se){e.cancelPendingCommit=null;do dc();while(un!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===$t&&(bt=$t=null,At=0),ar=n,Vi=e,sa=a,mh=u,V_=r,zy(e,n,a,v,R,I,Se)}}function zy(e,n,a,r,u,f,v){var R=n.lanes|n.childLanes;if(ph=R,R|=Jf,Mr(e,a,R,r,u,f),jr=null,(a&335544064)===a?(Zr=fy(e),r=10262):(Zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,ky(me,function(){return Mh(),null})):(e.callbackNode=null,e.callbackPriority=0),Qu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=xe.T,xe.T=null,u=Ce.p,Ce.p=2,f=Bt,Bt|=4;try{wy(e,n,a)}finally{Bt=f,Ce.p=u,xe.T=r}}un=1,Qu?Yr=uE(v,e.containerInfo,Zr,vh,xh,Fy,Sh,Mh,By):(vh(),xh(),Sh())}function By(e){if(un!==0){var n=Vi.onRecoverableError;n(e,{componentStack:null})}}function Fy(){un===3&&(un=0,P_(ar,Vi),un=4)}function vh(){if(un===1){un=0;var e=Vi,n=ar,a=sa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=xe.T,xe.T=null;var u=Ce.p;Ce.p=2;var f=Bt;Bt|=4;try{Sl=ec=!1,U_(n,e,a),a=Uh;var v=N0(e.containerInfo),R=a.focusedElem,I=a.selectionRange;if(v!==R&&R&&R.ownerDocument&&w0(R.ownerDocument.documentElement,R)){if(I!==null&&Yf(R)){var K=I.start,le=I.end;if(le===void 0&&(le=K),"selectionStart"in R)R.selectionStart=K,R.selectionEnd=Math.min(le,R.value.length);else{var Se=R.ownerDocument||document,Y=Se&&Se.defaultView||window;if(Y.getSelection){var ae=Y.getSelection(),He=R.textContent.length,Ke=Math.min(I.start,He),vt=I.end===void 0?Ke:Math.min(I.end,He);!ae.extend&&Ke>vt&&(v=vt,vt=Ke,Ke=v);var Z=C0(R,Ke),V=C0(R,vt);if(Z&&V&&(ae.rangeCount!==1||ae.anchorNode!==Z.node||ae.anchorOffset!==Z.offset||ae.focusNode!==V.node||ae.focusOffset!==V.offset)){var $=Se.createRange();$.setStart(Z.node,Z.offset),ae.removeAllRanges(),Ke>vt?(ae.addRange($),ae.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ae.addRange($))}}}}for(Se=[],ae=R;ae=ae.parentNode;)ae.nodeType===1&&Se.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var _e=Se[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}ro=!!Lh,Uh=Lh=null}finally{Bt=f,Ce.p=u,xe.T=r}}e.current=n,un=2}}function xh(){if(un===2){un=0;var e=Vi,n=ar,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xe.T,xe.T=null;var r=Ce.p;Ce.p=2;var u=Bt;Bt|=4;try{R_(e,n.alternate,n)}finally{Bt=u,Ce.p=r,xe.T=a}}un=3}}function Sh(){if(un===4||un===3){un=0;var e=Yr;Yr=null,Ie();var n=Vi,a=ar,r=sa,u=V_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?un=5:(un=0,ar=Vi=null,ev(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(_s=null),yr(r),a=a.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xe.T,f=Ce.p,Ce.p=2,xe.T=null;try{for(var v=n.onRecoverableError,R=0;R<u.length;R++){var I=u[R];v(I.value,{componentStack:I.stack})}}finally{xe.T=a,Ce.p=f}}if(u=jr,v=Zr,Zr=null,u!==null&&(jr=null,v===null&&(v=[]),e!==null))for(I=0;I<u.length;I++)a=(0,u[I])(v),a!==void 0&&e.finished.finally(a);(sa&3)!==0&&dc(),ra(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===lc?bl++:(bl=0,lc=n):(bl=0,lc=null),Tl(0)}}function ev(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,sl(n)))}function dc(){return Yr!==null&&(Yr.skipTransition(),Yr=null),vh(),xh(),Sh(),Mh()}function Mh(){if(un!==5)return!1;var e=Vi,n=ph;ph=0;var a=yr(sa),r=xe.T,u=Ce.p;try{Ce.p=32>a?32:a,xe.T=null,a=mh,mh=null;var f=Vi,v=sa;if(un=0,ar=Vi=null,sa=0,(Bt&6)!==0)throw Error(s(331));var R=Bt;if(Bt|=4,F_(f.current),I_(f,f.current,v,a),Bt=R,Tl(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Je,f)}catch{}return!0}finally{Ce.p=u,xe.T=r,ev(e,n)}}function tv(e,n,a){n=Ti(a,n),n=Bd(e.stateNode,n,2),e=us(e,n,2),e!==null&&(Ja(e,2),ra(e))}function Xt(e,n,a){if(e.tag===3)tv(e,e,a);else for(;n!==null;){if(n.tag===3){tv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_s===null||!_s.has(r))){e=Ti(a,e),a=Qg(2),r=us(n,a,2),r!==null&&(Jg(a,r,n,e),Ja(r,2),ra(r));break}}n=n.return}}function yh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ly;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(dh=!0,u.add(a),e=Hy.bind(null,e,n,a),n.then(e,e))}function Hy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$t===e&&(At&a)===a&&((pn===4||pn===3&&(At&62914560)===At&&300>he()-sc)&&(Bt&2)===0?Qr(e,0):ac|=a,qr===At&&(qr=0)),ra(e)}function nv(e,n){n===0&&(n=xr()),e=Vs(e,n),e!==null&&(Ja(e,n),ra(e))}function Gy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),nv(e,a)}function Vy(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),nv(e,a)}function ky(e,n){return Re(e,n)}var $r=null,eo=null,Eh=!1,hc=!1,bh=!1,xs=0;function ra(e){e!==eo&&e.next===null&&(eo===null?$r=eo=e:eo=eo.next=e),hc=!0,Eh||(Eh=!0,Wy())}function Tl(e,n){if(!bh&&hc){bh=!0;do for(var a=!1,r=$r;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-qe(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,rv(r,f))}else f=At,f=vr(r,r===$t?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Qa(r,f)||(a=!0,rv(r,f));r=r.next}while(a);bh=!1}}function Xy(){iv()}function iv(){hc=Eh=!1;var e=0;xs!==0&&nE()&&(e=xs);for(var n=he(),a=null,r=$r;r!==null;){var u=r.next,f=av(r,n);f===0?(r.next=null,a===null?$r=u:a.next=u,u===null&&(eo=a)):(a=r,(e!==0||(f&3)!==0)&&(hc=!0)),r=u}un!==0&&un!==5||Tl(e),xs!==0&&(xs=0)}function av(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-qe(f),R=1<<v,I=u[v];I===-1?((R&a)===0||(R&r)!==0)&&(u[v]=xa(R,n)):I<=n&&(e.expiredLanes|=R),f&=~R}if(n=$t,a=At,a=vr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(kt===2||kt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Me(r),yr(a)){case 2:case 8:a=B;break;case 32:a=me;break;case 268435456:a=Oe;break;default:a=me}return r=sv.bind(null,e),a=Re(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function sv(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var r=At;return r=vr(e,e===$t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(X_(e,r,n),av(e,he()),e.callbackNode!=null&&e.callbackNode===a?sv.bind(null,e):null)}function rv(e,n){if(dc())return null;X_(e,n,!0)}function Wy(){aE(function(){(Bt&6)!==0?Re(Ue,Xy):iv()})}function Th(){if(xs===0){var e=js;e===0&&(e=rn,rn<<=1,(rn&261888)===0&&(rn=256)),xs=e}return xs}function ov(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:uu(e)}function qy(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=ov((u[Pn]||null).action),v=r.submitter;v&&(n=(n=v[Pn]||null)?ov(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new hu("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xs!==0){var I=new FormData(u,v);Ud(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=new FormData(u,v),Ud(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Ah=0;Ah<Qf.length;Ah++){var Rh=Qf[Ah],Yy=Rh.toLowerCase(),jy=Rh[0].toUpperCase()+Rh.slice(1);Bi(Yy,"on"+jy)}Bi(U0,"onAnimationEnd"),Bi(O0,"onAnimationIteration"),Bi(P0,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(iy,"onTransitionRun"),Bi(ay,"onTransitionStart"),Bi(sy,"onTransitionCancel"),Bi(I0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function lv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var R=r[v],I=R.instance,K=R.currentTarget;if(R=R.listener,I!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=K;try{f(u)}catch(le){gu(le)}u.currentTarget=null,f=I}else for(v=0;v<r.length;v++){if(R=r[v],I=R.instance,K=R.currentTarget,R=R.listener,I!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=K;try{f(u)}catch(le){gu(le)}u.currentTarget=null,f=I}}}}function Tt(e,n){var a=n[G];a===void 0&&(a=n[G]=new Set);var r=e+"__bubble";a.has(r)||(uv(n,e,2,!1),a.add(r))}function Ch(e,n,a){var r=0;n&&(r|=4),uv(a,e,r,n)}var pc="_reactListening"+Math.random().toString(36).slice(2);function wh(e){if(!e[pc]){e[pc]=!0,on.forEach(function(a){a!=="selectionchange"&&(Zy.has(a)||Ch(a,!1,e),Ch(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pc]||(n[pc]=!0,Ch("selectionchange",!1,n))}}function uv(e,n,a,r){switch(Jv(n)){case 2:var u=GE;break;case 8:u=VE;break;default:u=Zh}a=u.bind(null,n,a,e),u=void 0,!zf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nh(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var R=r.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=r.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Fe(R),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){r=f=v;continue e}R=R.parentNode}}r=r.return}u0(function(){var K=f,le=Pf(a),Se=[];e:{var Y=z0.get(e);if(Y!==void 0){var ae=hu,He=e;switch(e){case"keypress":if(fu(a)===0)break e;case"keydown":case"keyup":ae=UM;break;case"focusin":He="focus",ae=Gf;break;case"focusout":He="blur",ae=Gf;break;case"beforeblur":case"afterblur":ae=Gf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=d0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=MM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=BM;break;case U0:case O0:case P0:ae=bM;break;case I0:ae=HM;break;case"scroll":case"scrollend":ae=xM;break;case"wheel":ae=VM;break;case"copy":case"cut":case"paste":ae=AM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=p0;break;case"submit":ae=IM;break;case"toggle":case"beforetoggle":ae=XM}var Ke=(n&4)!==0,vt=!Ke&&(e==="scroll"||e==="scrollend"),Z=Ke?Y!==null?Y+"Capture":null:Y;Ke=[];for(var V=K,$;V!==null;){var _e=V;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||Z===null||(_e=jo(V,Z),_e!=null&&Ke.push(Rl(V,_e,$))),vt)break;V=V.return}0<Ke.length&&(Y=new ae(Y,He,null,a,le),Se.push({event:Y,listeners:Ke}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",ae&&a!==Of&&(He=a.relatedTarget||a.fromElement)&&(Fe(He)||He[C]))break e;(Y||ae)&&(He=le.window===le?le:(ae=le.ownerDocument)?ae.defaultView||ae.parentWindow:window,Y?(ae=a.relatedTarget||a.toElement,Y=K,ae=ae?Fe(ae):null,ae!==null&&(vt=c(ae),Ke=ae.tag,ae!==vt||Ke!==5&&Ke!==27&&Ke!==6)&&(ae=null)):(Y=null,ae=K),Y!==ae&&(Ke=d0,_e="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Ke=p0,_e="onPointerLeave",Z="onPointerEnter",V="pointer"),vt=Y==null?He:st(Y),$=ae==null?He:st(ae),He=new Ke(_e,V+"leave",Y,a,le),He.target=vt,He.relatedTarget=$,_e=null,Fe(le)===K&&(Ke=new Ke(Z,V+"enter",ae,a,le),Ke.target=$,Ke.relatedTarget=vt,_e=Ke),vt=_e,Ke=Y&&ae?P(Y,ae,Ky):null,Y!==null&&cv(Se,He,Y,Ke,!1),ae!==null&&vt!==null&&cv(Se,vt,ae,Ke,!0)))}e:{if(Y=K?st(K):window,ae=Y.nodeName&&Y.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Y.type==="file")var Ye=y0;else if(S0(Y))if(E0)Ye=ey;else{Ye=JM;var Rt=QM}else ae=Y.nodeName,!ae||ae.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?K&&Uf(K.elementType)&&(Ye=y0):Ye=$M;if(Ye&&(Ye=Ye(e,K))){M0(Se,Ye,a,le);break e}Rt&&Rt(e,Y,K)}switch(Rt=K?st(K):window,e){case"focusin":(S0(Rt)||Rt.contentEditable==="true")&&(Cr=Rt,jf=K,nl=null);break;case"focusout":nl=jf=Cr=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,D0(Se,a,le);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":D0(Se,a,le)}var et;if(kf)e:{switch(e){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Rr?v0(e,a)&&(rt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(m0&&a.locale!=="ko"&&(Rr||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Rr&&(et=c0()):(es=le,Bf="value"in es?es.value:es.textContent,Rr=!0)),Rt=mc(K,rt),0<Rt.length&&(rt=new h0(rt,e,null,a,le),Se.push({event:rt,listeners:Rt}),et?rt.data=et:(et=x0(a),et!==null&&(rt.data=et)))),(et=qM?YM(e,a):jM(e,a))&&(rt=mc(K,"onBeforeInput"),0<rt.length&&(Rt=new h0("onBeforeInput","beforeinput",null,a,le),Se.push({event:Rt,listeners:rt}),Rt.data=et)),qy(Se,e,K,a,le)}lv(Se,n)})}function Rl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function mc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jo(e,a),u!=null&&r.unshift(Rl(e,u,f)),u=jo(e,n),u!=null&&r.push(Rl(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cv(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var R=a,I=R.alternate,K=R.stateNode;if(R=R.tag,I!==null&&I===r)break;R!==5&&R!==26&&R!==27||K===null||(I=K,u?(K=jo(a,f),K!=null&&v.unshift(Rl(a,K,I))):u||(K=jo(a,f),K!=null&&v.push(Rl(a,K,I)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Qy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function fv(e){return(typeof e=="string"?e:""+e).replace(Qy,`
`).replace(Jy,"")}function dv(e,n){return n=fv(n),fv(e)===n}function Wt(e,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||br(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&br(e,""+r);else return;break;case"className":Mi(e,"class",r);break;case"tabIndex":Mi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,a,r);break;case"style":o0(e,r,f);return;case"data":if(n!=="object"){Mi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=uu(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(e,n,"name",u.name,u,null),Wt(e,n,"formEncType",u.formEncType,u,null),Wt(e,n,"formMethod",u.formMethod,u,null),Wt(e,n,"formTarget",u.formTarget,u,null)):(Wt(e,n,"encType",u.encType,u,null),Wt(e,n,"method",u.method,u,null),Wt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=uu(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ki);return;case"onScroll":r!=null&&Tt("scroll",e);return;case"onScrollEnd":r!=null&&Tt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=uu(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),fi(e,"popover",r);break;case"xlinkActuate":gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":gt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":gt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":gt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":gt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":fi(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=_M.get(a)||a,fi(e,a,r);else return}ut=!0}function Dh(e,n,a,r,u,f){switch(a){case"style":o0(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")br(e,r);else if(typeof r=="number"||typeof r=="bigint")br(e,""+r);else return;break;case"onScroll":r!=null&&Tt("scroll",e);return;case"onScrollEnd":r!=null&&Tt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[Pn]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,u);break e}ut=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):fi(e,a,r)}return}ut=!0}function Hn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,f,v,a,null)}}u&&Wt(e,n,"srcSet",a.srcSet,a,null),r&&Wt(e,n,"src",a.src,a,null);return;case"input":Tt("invalid",e);var R=f=v=u=null,I=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var le=a[r];if(le!=null)switch(r){case"name":u=le;break;case"type":v=le;break;case"checked":I=le;break;case"defaultChecked":K=le;break;case"value":f=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Wt(e,n,r,le,a,null)}}i0(e,f,R,I,K,v,u,!1);return;case"select":Tt("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":r=R;default:Wt(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!r,n!=null?Er(e,!!r,n,!1):a!=null&&Er(e,!!r,a,!0);return;case"textarea":Tt("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Wt(e,n,v,R,a,null)}s0(e,r,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Wt(e,n,I,r,a,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(r=0;r<Al.length;r++)Tt(Al[r],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,K,r,a,null)}return;default:if(Uf(n)){for(le in a)a.hasOwnProperty(le)&&(r=a[le],r!==void 0&&Dh(e,n,le,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Wt(e,n,R,r,a,null))}var $y={};function eE(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,I=null,K=null,le=null;for(ae in a){var Se=a[ae];if(a.hasOwnProperty(ae)&&Se!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":I=Se;default:r.hasOwnProperty(ae)||Wt(e,n,ae,null,r,Se)}}for(var Y in r){var ae=r[Y];if(Se=a[Y],r.hasOwnProperty(Y)&&(ae!=null||Se!=null))switch(Y){case"type":ae!==Se&&(ut=!0),f=ae;break;case"name":ae!==Se&&(ut=!0),u=ae;break;case"checked":ae!==Se&&(ut=!0),K=ae;break;case"defaultChecked":ae!==Se&&(ut=!0),le=ae;break;case"value":ae!==Se&&(ut=!0),v=ae;break;case"defaultValue":ae!==Se&&(ut=!0),R=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:ae!==Se&&Wt(e,n,Y,ae,r,Se)}}Df(e,v,R,I,K,le,f,u);return;case"select":ae=v=R=Y=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ae=I;default:r.hasOwnProperty(f)||Wt(e,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":f!==I&&(ut=!0),Y=f;break;case"defaultValue":f!==I&&(ut=!0),R=f;break;case"multiple":f!==I&&(ut=!0),v=f;default:f!==I&&Wt(e,n,u,f,r,I)}n=R,a=v,r=ae,Y!=null?Er(e,!!a,Y,!1):!!r!=!!a&&(n!=null?Er(e,!!a,n,!0):Er(e,!!a,a?[]:"",!1));return;case"textarea":ae=Y=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(e,n,R,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":u!==f&&(ut=!0),Y=u;break;case"defaultValue":u!==f&&(ut=!0),ae=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(e,n,v,u,r,f)}a0(e,Y,ae);return;case"option":for(var He in a)if(Y=a[He],a.hasOwnProperty(He)&&Y!=null&&!r.hasOwnProperty(He))switch(He){case"selected":e.selected=!1;break;default:Wt(e,n,He,null,r,Y)}for(I in r)if(Y=r[I],ae=a[I],r.hasOwnProperty(I)&&Y!==ae&&(Y!=null||ae!=null))switch(I){case"selected":Y!==ae&&(ut=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Wt(e,n,I,Y,r,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ke in a)Y=a[Ke],a.hasOwnProperty(Ke)&&Y!=null&&!r.hasOwnProperty(Ke)&&Wt(e,n,Ke,null,r,Y);for(K in r)if(Y=r[K],ae=a[K],r.hasOwnProperty(K)&&Y!==ae&&(Y!=null||ae!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Wt(e,n,K,Y,r,ae)}return;default:if(Uf(n)){for(var vt in a)Y=a[vt],a.hasOwnProperty(vt)&&Y!==void 0&&!r.hasOwnProperty(vt)&&Dh(e,n,vt,void 0,r,Y);for(le in r)Y=r[le],ae=a[le],!r.hasOwnProperty(le)||Y===ae||Y===void 0&&ae===void 0||Dh(e,n,le,Y,r,ae);return}}for(var Z in a)Y=a[Z],a.hasOwnProperty(Z)&&Y!=null&&!r.hasOwnProperty(Z)&&Wt(e,n,Z,null,r,Y);for(Se in r)Y=r[Se],ae=a[Se],!r.hasOwnProperty(Se)||Y===ae||Y==null&&ae==null||Wt(e,n,Se,Y,r,ae)}function hv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&hv(v)){for(v=0,R=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],K=I.startTime;if(K>R)break;var le=I.transferSize,Se=I.initiatorType;le&&hv(Se)&&(I=I.responseEnd,v+=le*(I<R?1:(R-K)/(I-K)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lh=null,Uh=null;function Cl(e){return e.nodeType===9?e:e.ownerDocument}function pv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function gv(e,n,a,r){return a=Cl(a).createElement(e),a[Tn]=r,a[Pn]=n,Hn(a,e,n),ze(a),a}function Oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ph=null;function nE(){var e=window.event;return e&&e.type==="popstate"?e===Ph?!1:(Ph=e,!0):(Ph=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,vv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ih,aE=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(e){return _v.resolve(null).then(e).catch(sE)}:Ih;function sE(e){setTimeout(function(){throw e})}function Ss(e){return e==="head"}function xv(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),oo(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Xh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Xh(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ne]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Xh(e.ownerDocument.body);a=u}while(a);oo(n)}function Sv(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Mv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function yv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function rE(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function zh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return rE(n,a,e)}function oE(e){return e.documentElement.clientHeight}function lE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function uE(e,n,a,r,u,f,v,R,I){var K=n.nodeType===9?n:n.ownerDocument;try{var le=K.startViewTransition({update:function(){var Y=K.defaultView,ae=Y.navigation&&Y.navigation.transition,He=K.fonts.status;r();var Ke=[];if(He==="loaded"&&(oE(K),K.fonts.status==="loading"&&Ke.push(K.fonts.ready)),He=Ke.length,e!==null)for(var vt=e.suspenseyImages,Z=0,V=0;V<vt.length;V++){var $=vt[V];if(!$.complete){var _e=$.getBoundingClientRect();if(0<_e.bottom&&0<_e.right&&_e.top<Y.innerHeight&&_e.left<Y.innerWidth){if(Z+=kv($),Z>vc){Ke.length=He;break}$=new Promise(lE.bind($)),Ke.push($)}}}if(0<Ke.length)return Y=Promise.race([Promise.all(Ke),new Promise(function(Ye){return setTimeout(Ye,500)})]).then(u,u),(ae?Promise.allSettled([ae.finished,Y]):Y).then(f,f);if(u(),ae)return ae.finished.then(f,f);f()},types:a});K.__reactViewTransition=le;var Se=[];return le.ready.then(function(){for(var Y=K.documentElement.getAnimations({subtree:!0}),ae=0;ae<Y.length;ae++){var He=Y[ae],Ke=He.effect,vt=Ke.pseudoElement;if(vt!=null&&vt.startsWith("::view-transition")){Se.push(He),He=Ke.getKeyframes();for(var Z=vt=void 0,V=!0,$=0;$<He.length;$++){var _e=He[$],Ye=_e.width;if(vt===void 0)vt=Ye;else if(vt!==Ye){V=!1;break}if(Ye=_e.height,Z===void 0)Z=Ye;else if(Z!==Ye){V=!1;break}delete _e.width,delete _e.height,_e.transform==="none"&&delete _e.transform}V&&vt!==void 0&&Z!==void 0&&(Ke.setKeyframes(He),V=getComputedStyle(Ke.target,Ke.pseudoElement),V.width!==vt||V.height!==Z)&&(V=He[0],V.width=vt,V.height=Z,V=He[He.length-1],V.width=vt,V.height=Z,Ke.setKeyframes(He))}}v()},function(Y){K.__reactViewTransition===le&&(K.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{r(),u(),v()}}),le.finished.finally(function(){for(var Y=0;Y<Se.length;Y++)Se[Y].cancel();K.__reactViewTransition===le&&(K.__reactViewTransition=null),R()}),le}catch{return r(),u(),v(),null}}function sr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}sr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:y({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},sr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[u])}return r},sr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ev(e){return{name:e,group:new sr("group",e),imagePair:new sr("image-pair",e),old:new sr("old",e),new:new sr("new",e)}}function vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(e,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Tv(f,e,n,a)===-1){var v=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(I){v.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(u=v.removeEventListener.bind(v,e,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=to(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:u}),g(this._fragmentFiber.child,!1,cE,e,R,r)}this._eventListeners=f}};function cE(e,n,a,r){return M(e).addEventListener(n,a,r),!1}vi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=Tv(r,e,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=to(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,fE,e,a,u),r.splice(n,1),f!==null&&f()}};function fE(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function to(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function bv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Tv(e,n,a,r){if(e.length===0)return-1;r=bv(r);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&bv(f.optionsOrUseCapture)===r)return u}return-1}vi.prototype.dispatchEvent=function(e){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,to(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,to(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},vi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Av,e,void 0,void 0)};function Av(e,n){return e.tag===6?!1:(e=M(e),EE(e,n))}vi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Bh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Av(n[a],e);a--);};function Bh(e,n){return n.push(e),!1}vi.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=M(e),e=Cl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,dE,e,void 0,void 0))};function dE(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,hE,e,void 0,void 0)};function hE(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}vi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,pE,e,void 0,void 0);for(var a=n=0;a<ki.length;a++){var r=ki[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):ki[n++]=r}ki.length=n}};function pE(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var ki=[],Fh=!1;function mE(e,n,a){ki.push({fragmentInstance:e,observer:n,instance:a}),Fh||(Fh=!0,bE(function(){Fh=!1;var r=ki;ki=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}vi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,gE,e,void 0,void 0),e};function gE(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}vi.prototype.getRootNode=function(e){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},vi.prototype.compareDocumentPosition=function(e){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Bh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(e),R=u.compareDocumentPosition(e),I=v&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&f&&v&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&u===e||I||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||_E(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function _E(e,n,a,r,u){var f=Fe(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break e}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;e:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=P(a,f,F),n===null?n=!1:(g(n,!0,z,f,a),f=E,E=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=P(r,f,F),n===null?n=!1:(g(n,!0,U,f,r),f=E,D=E=null,n=f!==null)),n):!1}function Rv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Bh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),Rv(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),Rv(u,a)):M(u).scrollIntoView(e),r+=a?-1:1}};function vE(e,n){return e=M(e),Cv(e,n),!1}function Cv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function wv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.addEventListener(u.type,u.attachedListener,to(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var v=0,R=0;R<ki.length;R++){var I=ki[R];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(ki[v++]=I)}ki.length=v,f.observe(e)}),Cv(e,n))}function xE(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.removeEventListener(u.type,u.attachedListener,to(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?mE(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Hh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hh(a),De(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function SE(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ne])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function ME(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ni(e.nextSibling),e===null))return null;return e}function Nv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ni(e.nextSibling),e===null))return null;return e}function Gh(e){return e.data==="$?"||e.data==="$~"}function Vh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ni(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kh=null;function Dv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Lv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function EE(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function bE(e){vv(function(){vv(function(n){return e(n)})})}function Uv(e,n,a){switch(n=Cl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ov(e,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Wt(e,n,r,null,$y,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ki&&(e.onclick=null),De(e)}function Xh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);De(e)}var Di=new Map,Pv=new Set;function wl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ua=Ce.d;Ce.d={f:TE,r:AE,D:RE,C:CE,L:wE,m:NE,X:LE,S:DE,M:UE};function TE(){var e=Ua.f(),n=uc();return e||n}function AE(e){var n=je(e);n!==null&&n.tag===5&&n.type==="form"?zg(n):Ua.r(e)}var no=typeof document>"u"?null:document;function Iv(e,n,a){var r=no;if(r&&typeof n=="string"&&n){var u=Ei(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pv.has(u)||(Pv.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Hn(n,"link",e),ze(n),r.head.appendChild(n)))}}function RE(e){Ua.D(e),Iv("dns-prefetch",e,null)}function CE(e,n){Ua.C(e,n),Iv("preconnect",e,n)}function wE(e,n,a){Ua.L(e,n,a);var r=no;if(r&&e&&n){var u='link[rel="preload"][as="'+Ei(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ei(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ei(a.imageSizes)+'"]')):u+='[href="'+Ei(e)+'"]';var f=u;switch(n){case"style":f=io(e);break;case"script":f=ao(e)}if(!(Di.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Nl(f))||n==="script"&&r.querySelector(Dl(f))))){var v=r.createElement("link");Hn(v,"link",e),n==="style"&&(v[We]=!0,v.onload=v.onerror=function(){Mt(v)}),ze(v),r.head.appendChild(v)}}}function NE(e,n){Ua.m(e,n);var a=no;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ei(r)+'"][href="'+Ei(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ao(e)}if(!Di.has(f)&&(e=y({rel:"modulepreload",href:e},n),Di.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(f)))return}r=a.createElement("link"),Hn(r,"link",e),ze(r),a.head.appendChild(r)}}}function DE(e,n,a){Ua.S(e,n,a);var r=no;if(r&&e){var u=mt(r).hoistableStyles,f=io(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=r.querySelector(Nl(f)))R.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(f))&&Wh(e,a);var I=v=r.createElement("link");ze(I),Hn(I,"link",e),I._p=new Promise(function(K,le){I.onload=K,I.onerror=le}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,gc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function LE(e,n){Ua.X(e,n);var a=no;if(a&&e){var r=mt(a).hoistableScripts,u=ao(e),f=r.get(u);f||(f=a.querySelector(Dl(u)),f||(e=y({src:e,async:!0},n),(n=Di.get(u))&&qh(e,n),f=a.createElement("script"),ze(f),Hn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function UE(e,n){Ua.M(e,n);var a=no;if(a&&e){var r=mt(a).hoistableScripts,u=ao(e),f=r.get(u);f||(f=a.querySelector(Dl(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=Di.get(u))&&qh(e,n),f=a.createElement("script"),ze(f),Hn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function zv(e,n,a,r){var u=(u=Jt.current)?wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=io(a.href),n=mt(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=io(a.href);var f=mt(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Nl(e)))?f._p||(v.instance=f,v.state.loading=5):(f=Di.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,f)),OE(u,e,f,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ao(a),n=mt(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function io(e){return'href="'+Ei(e)+'"'}function Nl(e){return'link[rel="stylesheet"]['+e+"]"}function Bv(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function OE(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[We]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[We]=!0,n.onload=n.onerror=Mt.bind(null,n),Hn(n,"link",a),ze(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function ao(e){return'[src="'+Ei(e)+'"]'}function Dl(e){return"script[async]"+e}function Fv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ei(a.href)+'"]');if(r)return n.instance=r,ze(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ze(r),Hn(r,"style",u),gc(r,a.precedence,e),n.instance=r;case"stylesheet":u=io(a.href);var f=e.querySelector(Nl(u));if(f)return n.state.loading|=4,n.instance=f,ze(f),f;r=Bv(a),(u=Di.get(u))&&Wh(r,u),f=(e.ownerDocument||e).createElement("link"),ze(f);var v=f;return v._p=new Promise(function(R,I){v.onload=R,v.onerror=I}),Hn(f,"link",r),n.state.loading|=4,gc(f,a.precedence,e),n.instance=f;case"script":return f=ao(a.src),(u=e.querySelector(Dl(f)))?(n.instance=u,ze(u),u):(r=a,(u=Di.get(f))&&(r=y({},a),qh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),ze(u),Hn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,gc(r,a.precedence,e));return n.instance}function gc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var R=r[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _c=null;function Hv(e,n,a){if(_c===null){var r=new Map,u=_c=new Map;u.set(a,r)}else u=_c,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ne]||f[Tn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=r.get(v);R?R.push(f):r.set(v,[f])}}return r}function Yh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Xv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=kv(n),e.suspenseyImages.push(n)),e=BE.bind(e),n.decode().then(e,e))}function IE(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=io(r.href),f=n.querySelector(Nl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ll.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ze(f);return}f=n.ownerDocument||n,r=Bv(r),(u=Di.get(u))&&Wh(r,u),f=f.createElement("link"),ze(f);var v=f;v._p=new Promise(function(R,I){v.onload=R,v.onerror=I}),Hn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ll.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var vc=0;function zE(e,n){return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&vc===0&&(vc=62500*tE());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>vc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Wv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Sc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Ll(){this.count--,Wv(this)}function BE(){this.imgCount--,Wv(this)}var xc=null;function Sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,n.forEach(FE,e),xc=null,Ll.call(e))}function FE(e,n){if(!(n.state.loading&4)){var a=xc.get(e);if(a)var r=a.get(null);else{a=new Map,xc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=Ll.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var so={$$typeof:re,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function HE(e,n,a,r,u,f,v,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sr(0),this.hiddenUpdates=Sr(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function qv(e,n,a,r,u,f,v,R,I,K,le,Se){return e=new HE(e,n,a,v,I,K,le,Se,R),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=ld(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},dd(f),e}function Yv(e){return e?(e=Dr,e):Dr}function jv(e,n,a,r,u,f){u=Yv(u),r.context===null?r.context=u:r.pendingContext=u,r=ls(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=us(e,r,n),a!==null&&(ri(a,e,n),ul(a,e,n))}function Zv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jh(e,n){Zv(e,n),(e=e.alternate)&&Zv(e,n)}function Kv(e){if(e.tag===13||e.tag===31){var n=Vs(e,67108864);n!==null&&ri(n,e,67108864),jh(e,67108864)}}function Qv(e){if(e.tag===13||e.tag===31){var n=_i();n=qo(n);var a=Vs(e,n);a!==null&&ri(a,e,n),jh(e,n)}}var ro=!0;function GE(e,n,a,r){var u=xe.T;xe.T=null;var f=Ce.p;try{Ce.p=2,Zh(e,n,a,r)}finally{Ce.p=f,xe.T=u}}function VE(e,n,a,r){var u=xe.T;xe.T=null;var f=Ce.p;try{Ce.p=8,Zh(e,n,a,r)}finally{Ce.p=f,xe.T=u}}function Zh(e,n,a,r){if(ro){var u=Kh(r);if(u===null)Nh(e,n,r,Mc,a),$v(e,r);else if(XE(u,e,n,a,r))r.stopPropagation();else if($v(e,r),n&4&&-1<kE.indexOf(e)){for(;u!==null;){var f=je(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ii(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var I=1<<31-qe(v);R.entanglements[1]|=I,v&=~I}ra(f),(Bt&6)===0&&(rc=he()+500,Tl(0))}}break;case 31:case 13:R=Vs(f,2),R!==null&&ri(R,f,2),uc(),jh(f,2)}if(f=Kh(r),f===null&&Nh(e,n,r,Mc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Nh(e,n,r,null,a)}}function Kh(e){return e=Pf(e),Qh(e)}var Mc=null;function Qh(e){if(Mc=null,e=Fe(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mc=e,null}function Jv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case Ue:return 2;case B:return 8;case me:case pe:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Jh=!1,Ms=null,ys=null,Es=null,Ul=new Map,Ol=new Map,bs=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $v(e,n){switch(e){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":Ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(n.pointerId)}}function Pl(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=je(n),n!==null&&Kv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function XE(e,n,a,r,u){switch(n){case"focusin":return Ms=Pl(Ms,e,n,a,r,u),!0;case"dragenter":return ys=Pl(ys,e,n,a,r,u),!0;case"mouseover":return Es=Pl(Es,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Ul.set(f,Pl(Ul.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Ol.set(f,Pl(Ol.get(f)||null,e,n,a,r,u)),!0}return!1}function ex(e){var n=Fe(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,ou(e.priority,function(){Qv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,ou(e.priority,function(){Qv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Of=r,a.target.dispatchEvent(r),Of=null}else return n=je(a),n!==null&&Kv(n),e.blockedOn=a,!1;n.shift()}return!0}function tx(e,n,a){yc(e)&&a.delete(n)}function WE(){Jh=!1,Ms!==null&&yc(Ms)&&(Ms=null),ys!==null&&yc(ys)&&(ys=null),Es!==null&&yc(Es)&&(Es=null),Ul.forEach(tx),Ol.forEach(tx)}function Ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Jh||(Jh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,WE)))}var bc=null;function nx(e){bc!==e&&(bc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Qh(r||a)===null)continue;break}var f=je(a);f!==null&&(e.splice(n,3),n-=3,Ud(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function oo(e){function n(I){return Ec(I,e)}Ms!==null&&Ec(Ms,e),ys!==null&&Ec(ys,e),Es!==null&&Ec(Es,e),Ul.forEach(n),Ol.forEach(n);for(var a=0;a<bs.length;a++){var r=bs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<bs.length&&(a=bs[0],a.blockedOn===null);)ex(a),a.blockedOn===null&&bs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[Pn]||null;if(typeof f=="function")v||nx(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Pn]||null)R=v.formAction;else if(Qh(u)!==null)continue}else R=v.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),nx(a)}}}function ix(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $h(e){this._internalRoot=e}Tc.prototype.render=$h.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=_i();jv(a,r,e,n,null,null)},Tc.prototype.unmount=$h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jv(e.current,2,null,e,null,null),uc(),n[C]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<bs.length&&n!==0&&n<bs[a].priority;a++);bs.splice(a,0,e),a===0&&ex(e)}};var ax=t.version;if(ax!=="19.3.1")throw Error(s(527,ax,"19.3.1"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var qE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xe,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Je=Ac.inject(qE),nt=Ac}catch{}}return zl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Yg,f=jg,v=Zg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=qv(e,1,!1,null,null,a,r,null,u,f,v,ix),e[C]=n.current,wh(e),new $h(n)},zl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Yg,v=jg,R=Zg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=qv(e,1,!0,n,a??null,r,u,I,f,v,R,ix),n.context=Yv(null),a=n.current,r=_i(),r=qo(r),u=ls(r),u.callback=null,us(a,u,r),a=r,n.current.lanes=a,Ja(n,a),ra(n),e[C]=n.current,wh(e),new Tc(n)},zl.version="19.3.1",zl}var px;function nb(){if(px)return tp.exports;px=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),tp.exports=tb(),tp.exports}var ib=nb(),it=Im();const ab="modulepreload",sb=function(o,t){return new URL(o,t).href},mx={},rb=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let d=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const h=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=m?.nonce||m?.getAttribute("nonce");l=d(i.map(_=>{if(_=sb(_,s),_ in mx)return;mx[_]=!0;const g=_.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(!!s)for(let L=h.length-1;L>=0;L--){const M=h[L];if(M.href===_&&(!g||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${x}`))return;const T=document.createElement("link");if(T.rel=g?"stylesheet":ab,g||(T.as="script"),T.crossOrigin="",T.href=_,p&&T.setAttribute("nonce",p),document.head.appendChild(T),g)return new Promise((L,M)=>{T.addEventListener("load",L),T.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zm="187",Gw={ROTATE:0,DOLLY:1,PAN:2},Vw={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ob=0,gx=1,lb=2,tf=1,ub=2,Wl=3,dr=0,li=1,Ha=2,wo=0,jl=1,Fp=2,_x=3,vx=4,cb=5,Mo=100,fb=101,db=102,hb=103,pb=104,mb=200,gb=201,_b=202,vb=203,vS=204,xS=205,xb=206,Sb=207,Mb=208,yb=209,Eb=210,bb=211,Tb=212,Ab=213,Rb=214,Hp=0,Gp=1,Vp=2,Zl=3,kp=4,Xp=5,Wp=6,qp=7,SS=0,Cb=1,wb=2,Va=0,MS=1,yS=2,ES=3,bS=4,TS=5,AS=6,RS=7,CS=300,Lo=301,Kl=302,rp=303,op=304,Yp=1e3,Ga=1001,jp=1002,Vn=1003,Nb=1004,Rc=1005,oi=1006,lp=1007,Us=1008,Oi=1009,wS=1010,NS=1011,Ql=1012,Bm=1013,ga=1014,da=1015,_a=1016,Fm=1017,Hm=1018,Uo=1020,DS=35902,LS=35899,US=1021,OS=1022,ha=1023,Ps=1026,Os=1027,PS=1028,Gm=1029,hr=1030,Vm=1031,km=1033,nf=33776,af=33777,sf=33778,rf=33779,Zp=35840,Kp=35841,Qp=35842,Jp=35843,$p=36196,em=37492,tm=37496,nm=37488,im=37489,ff=37490,am=37491,sm=37808,rm=37809,om=37810,lm=37811,um=37812,cm=37813,fm=37814,dm=37815,hm=37816,pm=37817,mm=37818,gm=37819,_m=37820,vm=37821,xm=36492,Sm=36494,Mm=36495,ym=36283,Em=36284,df=36285,bm=36286,Db=3200,xx=0,Lb=1,Ls="",Ui="srgb",hf="srgb-linear",pf="linear",qt="srgb",up=7680,Ub=519,Ob=512,Pb=513,Ib=514,IS=515,zb=516,Bb=517,zS=518,BS=519,Fb=35044,Hb=35048,Sx="300 es",Zi=2e3,mf=2001;function Gb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function gf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vb(){const o=gf("canvas");return o.style.display="block",o}const Mx={};function yx(...o){const t="THREE."+o.shift();console.log(t,...o)}function FS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ft(...o){o=FS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ft(...o){o=FS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function of(...o){const t=o.join(" ");t in Mx||(Mx[t]=!0,ft(...o))}function kb(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Xb={[Hp]:Hp,[Vp]:Wp,[kp]:kp,[Zl]:Xp,[Gp]:Gp,[Wp]:Vp,[qp]:qp,[Xp]:Zl};class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=Math.PI/180,Tm=180/Math.PI;function tu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Xn[o&255]+Xn[o>>8&255]+Xn[o>>16&255]+Xn[o>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[i&63|128]+Xn[i>>8&255]+"-"+Xn[i>>16&255]+Xn[i>>24&255]+Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]).toLowerCase()}function Et(o,t,i){return Math.max(t,Math.min(i,o))}function Wb(o,t){return(o%t+t)%t}function cp(o,t,i){return(1-i)*o+i*t}function qb(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Xm(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yb(o,t){if(t.constructor===Float32Array)return o;const i=Xm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function jb(o,t){if(t.constructor===Float32Array)return o;const i=Xm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const kw={DEG2RAD:lf},$m=class $m{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$m.prototype.isVector2=!0;let Pt=$m;class Bo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],x=c[d+0],S=c[d+1],T=c[d+2],L=c[d+3];if(g!==L||m!==x||p!==S||_!==T){let M=m*x+p*S+_*T+g*L;M<0&&(x=-x,S=-S,T=-T,L=-L,M=-M);let E=1-h;if(M<.9995){const D=Math.acos(M),z=Math.sin(D);E=Math.sin(E*D)/z,h=Math.sin(h*D)/z,m=m*E+x*h,p=p*E+S*h,_=_*E+T*h,g=g*E+L*h}else{m=m*E+x*h,p=p*E+S*h,_=_*E+T*h,g=g*E+L*h;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[d],x=c[d+1],S=c[d+2],T=c[d+3];return t[i]=h*T+_*g+m*S-p*x,t[i+1]=m*T+_*x+p*g-h*S,t[i+2]=p*T+_*S+h*x-m*g,t[i+3]=_*T-h*g-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),x=m(s/2),S=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=x*_*g+p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g-x*S*T;break;case"YXZ":this._x=x*_*g+p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g+x*S*T;break;case"ZXY":this._x=x*_*g-p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g-x*S*T;break;case"ZYX":this._x=x*_*g-p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g+x*S*T;break;case"YZX":this._x=x*_*g+p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g-x*S*T;break;case"XZY":this._x=x*_*g-p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g+x*S*T;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+h+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-s*p,this._z=c*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const e0=class e0{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ex.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ex.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return fp.copy(this).projectOnVector(t),this.sub(fp)}reflect(t){return this.sub(fp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};e0.prototype.isVector3=!0;let oe=e0;const fp=new oe,Ex=new Bo,t0=class t0{constructor(t,i,s,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],S=s[5],T=s[8],L=l[0],M=l[3],E=l[6],D=l[1],z=l[4],U=l[7],F=l[2],P=l[5],y=l[8];return c[0]=d*L+h*D+m*F,c[3]=d*M+h*z+m*P,c[6]=d*E+h*U+m*y,c[1]=p*L+_*D+g*F,c[4]=p*M+_*z+g*P,c[7]=p*E+_*U+g*y,c[2]=x*L+S*D+T*F,c[5]=x*M+S*z+T*P,c[8]=x*E+S*U+T*y,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*c*_+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,x=h*m-_*c,S=p*c-d*m,T=i*g+s*x+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/T;return t[0]=g*L,t[1]=(l*p-_*s)*L,t[2]=(h*s-l*d)*L,t[3]=x*L,t[4]=(_*i-l*m)*L,t[5]=(l*c-h*i)*L,t[6]=S*L,t[7]=(s*m-p*i)*L,t[8]=(d*i-s*c)*L,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return of("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dp.makeScale(t,i)),this}rotate(t){return of("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dp.makeRotation(-t)),this}translate(t,i){return of("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};t0.prototype.isMatrix3=!0;let ht=t0;const dp=new ht,bx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zb(){const o={enabled:!0,workingColorSpace:hf,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=ka(l.r),l.g=ka(l.g),l.b=ka(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=No(l.r),l.g=No(l.g),l.b=No(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ls?pf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[hf]:{primaries:t,whitePoint:s,transfer:pf,toXYZ:bx,fromXYZ:Tx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:t,whitePoint:s,transfer:qt,toXYZ:bx,fromXYZ:Tx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),o}const wt=Zb();function ka(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function No(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lo;class Kb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{lo===void 0&&(lo=gf("canvas")),lo.width=t.width,lo.height=t.height;const l=lo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=lo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=gf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ka(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ka(i[s]/255)*255):i[s]=ka(i[s]);return{data:i,width:t.width,height:t.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qb=0;class Wm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=tu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width||0,i.height||0,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(hp(l[d].image)):c.push(hp(l[d]))}else c=hp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function hp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Kb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let Jb=0;const pp=new oe;class Jn extends zs{constructor(t=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Ga,l=Ga,c=oi,d=Us,h=ha,m=Oi,p=Jn.DEFAULT_ANISOTROPY,_=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=tu(),this.name="",this.source=new Wm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pp).x}get height(){return this.source.getSize(pp).y}get depth(){return this.source.getSize(pp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==CS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yp:t.x=t.x-Math.floor(t.x);break;case Ga:t.x=t.x<0?0:1;break;case jp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yp:t.y=t.y-Math.floor(t.y);break;case Ga:t.y=t.y<0?0:1;break;case jp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=CS;Jn.DEFAULT_ANISOTROPY=1;const n0=class n0{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],S=m[5],T=m[9],L=m[2],M=m[6],E=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-L)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+L)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,U=(S+1)/2,F=(E+1)/2,P=(_+x)/4,y=(g+L)/4,N=(T+M)/4;return z>U&&z>F?z<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(z),l=P/s,c=y/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=P/l,c=N/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=y/c,l=N/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(g-L)*(g-L)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(g-L)/D,this.z=(x-_)/D,this.w=Math.acos((p+S+E-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};n0.prototype.isVector4=!0;let mn=n0;class $b extends zs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new mn(0,0,t,i),this.scissorTest=!1,this.viewport=new mn(0,0,t,i),this.textures=[];const l=s.count;for(let c=0;c<l;c++)this.textures[c]=new Jn({width:t,height:i,depth:s.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ma extends $b{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class HS extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const yf=class yf{constructor(t,i,s,l,c,d,h,m,p,_,g,x,S,T,L,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,_,g,x,S,T,L,M)}set(t,i,s,l,c,d,h,m,p,_,g,x,S,T,L,M){const E=this.elements;return E[0]=t,E[4]=i,E[8]=s,E[12]=l,E[1]=c,E[5]=d,E[9]=h,E[13]=m,E[2]=p,E[6]=_,E[10]=g,E[14]=x,E[3]=S,E[7]=T,E[11]=L,E[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/uo.setFromMatrixColumn(t,0).length(),c=1/uo.setFromMatrixColumn(t,1).length(),d=1/uo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=d*_,S=d*g,T=h*_,L=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+T*p,i[5]=x-L*p,i[9]=-h*m,i[2]=L-x*p,i[6]=T+S*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*_,S=m*g,T=p*_,L=p*g;i[0]=x+L*h,i[4]=T*h-S,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=S*h-T,i[6]=L+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*_,S=m*g,T=p*_,L=p*g;i[0]=x-L*h,i[4]=-d*g,i[8]=T+S*h,i[1]=S+T*h,i[5]=d*_,i[9]=L-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*_,S=d*g,T=h*_,L=h*g;i[0]=m*_,i[4]=T*p-S,i[8]=x*p+L,i[1]=m*g,i[5]=L*p+x,i[9]=S*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,S=d*p,T=h*m,L=h*p;i[0]=m*_,i[4]=L-x*g,i[8]=T*g+S,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*g+T,i[10]=x-L*g}else if(t.order==="XZY"){const x=d*m,S=d*p,T=h*m,L=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+L,i[5]=d*_,i[9]=S*g-T,i[2]=T*g-S,i[6]=h*_,i[10]=L*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tT,t,nT)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),As.crossVectors(s,xi),As.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),As.crossVectors(s,xi)),As.normalize(),Cc.crossVectors(xi,As),l[0]=As.x,l[4]=Cc.x,l[8]=xi.x,l[1]=As.y,l[5]=Cc.y,l[9]=xi.y,l[2]=As.z,l[6]=Cc.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],S=s[13],T=s[2],L=s[6],M=s[10],E=s[14],D=s[3],z=s[7],U=s[11],F=s[15],P=l[0],y=l[4],N=l[8],J=l[12],k=l[1],j=l[5],se=l[9],de=l[13],H=l[2],re=l[6],X=l[10],q=l[14],ce=l[3],ne=l[7],fe=l[11],Ee=l[15];return c[0]=d*P+h*k+m*H+p*ce,c[4]=d*y+h*j+m*re+p*ne,c[8]=d*N+h*se+m*X+p*fe,c[12]=d*J+h*de+m*q+p*Ee,c[1]=_*P+g*k+x*H+S*ce,c[5]=_*y+g*j+x*re+S*ne,c[9]=_*N+g*se+x*X+S*fe,c[13]=_*J+g*de+x*q+S*Ee,c[2]=T*P+L*k+M*H+E*ce,c[6]=T*y+L*j+M*re+E*ne,c[10]=T*N+L*se+M*X+E*fe,c[14]=T*J+L*de+M*q+E*Ee,c[3]=D*P+z*k+U*H+F*ce,c[7]=D*y+z*j+U*re+F*ne,c[11]=D*N+z*se+U*X+F*fe,c[15]=D*J+z*de+U*q+F*Ee,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],S=t[14],T=t[3],L=t[7],M=t[11],E=t[15],D=m*S-p*x,z=h*S-p*g,U=h*x-m*g,F=d*S-p*_,P=d*x-m*_,y=d*g-h*_;return i*(L*D-M*z+E*U)-s*(T*D-M*F+E*P)+l*(T*z-L*F+E*y)-c*(T*U-L*P+M*y)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],d=t[5],h=t[9],m=t[2],p=t[6],_=t[10];return i*(d*_-h*p)-s*(c*_-h*m)+l*(c*p-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],S=t[11],T=t[12],L=t[13],M=t[14],E=t[15],D=i*h-s*d,z=i*m-l*d,U=i*p-c*d,F=s*m-l*h,P=s*p-c*h,y=l*p-c*m,N=_*L-g*T,J=_*M-x*T,k=_*E-S*T,j=g*M-x*L,se=g*E-S*L,de=x*E-S*M,H=D*de-z*se+U*j+F*k-P*J+y*N;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/H;return t[0]=(h*de-m*se+p*j)*re,t[1]=(l*se-s*de-c*j)*re,t[2]=(L*y-M*P+E*F)*re,t[3]=(x*P-g*y-S*F)*re,t[4]=(m*k-d*de-p*J)*re,t[5]=(i*de-l*k+c*J)*re,t[6]=(M*U-T*y-E*z)*re,t[7]=(_*y-x*U+S*z)*re,t[8]=(d*se-h*k+p*N)*re,t[9]=(s*k-i*se-c*N)*re,t[10]=(T*P-L*U+E*D)*re,t[11]=(g*U-_*P-S*D)*re,t[12]=(h*J-d*j-m*N)*re,t[13]=(i*j-s*J+l*N)*re,t[14]=(L*z-T*F-M*D)*re,t[15]=(_*F-g*z+x*D)*re,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,_=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,g=h+h,x=c*p,S=c*_,T=c*g,L=d*_,M=d*g,E=h*g,D=m*p,z=m*_,U=m*g,F=s.x,P=s.y,y=s.z;return l[0]=(1-(L+E))*F,l[1]=(S+U)*F,l[2]=(T-z)*F,l[3]=0,l[4]=(S-U)*P,l[5]=(1-(x+E))*P,l[6]=(M+D)*P,l[7]=0,l[8]=(T+z)*y,l[9]=(M-D)*y,l[10]=(1-(x+L))*y,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=uo.set(l[0],l[1],l[2]).length();const h=uo.set(l[4],l[5],l[6]).length(),m=uo.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Xi.copy(this);const p=1/d,_=1/h,g=1/m;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=_,Xi.elements[5]*=_,Xi.elements[6]*=_,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,i.setFromRotationMatrix(Xi),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,d,h=Zi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let T,L;if(m)T=c/(d-c),L=d*c/(d-c);else if(h===Zi)T=-(d+c)/(d-c),L=-2*d*c/(d-c);else if(h===mf)T=-d/(d-c),L=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=L,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Zi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,L;if(m)T=1/(d-c),L=d/(d-c);else if(h===Zi)T=-2/(d-c),L=-(d+c)/(d-c);else if(h===mf)T=-1/(d-c),L=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=L,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};yf.prototype.isMatrix4=!0;let fn=yf;const uo=new oe,Xi=new fn,tT=new oe(0,0,0),nT=new oe(1,1,1),As=new oe,Cc=new oe,xi=new oe,Ax=new fn,Rx=new Bo;class pr{constructor(t=0,i=0,s=0,l=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Ax.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ax,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Rx.setFromEuler(this),this.setFromQuaternion(Rx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class GS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iT=0;const Cx=new oe,co=new Bo,Oa=new fn,wc=new oe,Bl=new oe,aT=new oe,sT=new Bo,wx=new oe(1,0,0),Nx=new oe(0,1,0),Dx=new oe(0,0,1),Lx={type:"added"},rT={type:"removed"},fo={type:"childadded",child:null},mp={type:"childremoved",child:null};class ui extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=tu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new oe,i=new pr,s=new Bo,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ht}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new GS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return co.setFromAxisAngle(t,i),this.quaternion.multiply(co),this}rotateOnWorldAxis(t,i){return co.setFromAxisAngle(t,i),this.quaternion.premultiply(co),this}rotateX(t){return this.rotateOnAxis(wx,t)}rotateY(t){return this.rotateOnAxis(Nx,t)}rotateZ(t){return this.rotateOnAxis(Dx,t)}translateOnAxis(t,i){return Cx.copy(t).applyQuaternion(this.quaternion),this.position.add(Cx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wx,t)}translateY(t){return this.translateOnAxis(Nx,t)}translateZ(t){return this.translateOnAxis(Dx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?wc.copy(t):wc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(Bl,wc,this.up):Oa.lookAt(wc,Bl,this.up),this.quaternion.setFromRotationMatrix(Oa),l&&(Oa.extractRotation(l.matrixWorld),co.setFromRotationMatrix(Oa),this.quaternion.premultiply(co.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lx),fo.child=t,this.dispatchEvent(fo),fo.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rT),mp.child=t,this.dispatchEvent(mp),mp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lx),fo.child=t,this.dispatchEvent(fo),fo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bl,t,aT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bl,sT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),x=d(t.skeletons),S=d(t.animations),T=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ui.DEFAULT_UP=new oe(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class gp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const L of t.hand.values()){const M=i.getJointPose(L,s),E=this._getHandJoint(p,L);M!==null&&(E.matrix.fromArray(M.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=M.radius),E.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Nc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const VS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function _p(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ht{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=wt.workingColorSpace){return this.r=t,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=wt.workingColorSpace){if(t=Wb(t,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=_p(d,c,t+1/3),this.g=_p(d,c,t),this.b=_p(d,c,t-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(t,i=Ui){function s(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,i);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ui){const s=VS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ka(t.r),this.g=ka(t.g),this.b=ka(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return wt.workingToColorSpace(Wn.copy(this),t),Math.round(Et(Wn.r*255,0,255))*65536+Math.round(Et(Wn.g*255,0,255))*256+Math.round(Et(Wn.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.workingToColorSpace(Wn.copy(this),i);const s=Wn.r,l=Wn.g,c=Wn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=wt.workingColorSpace){return wt.workingToColorSpace(Wn.copy(this),i),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Ui){wt.workingToColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,l=Wn.b;return t!==Ui?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Rs),this.setHSL(Rs.h+t,Rs.s+i,Rs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Rs),t.getHSL(Dc);const s=cp(Rs.h,Dc.h,i),l=cp(Rs.s,Dc.s,i),c=cp(Rs.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ht;Ht.NAMES=VS;class lT extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Wi=new oe,Pa=new oe,vp=new oe,Ia=new oe,ho=new oe,po=new oe,Ux=new oe,xp=new oe,Sp=new oe,Mp=new oe,yp=new mn,Ep=new mn,bp=new mn;class ji{constructor(t=new oe,i=new oe,s=new oe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Wi.subVectors(t,i),l.cross(Wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Wi.subVectors(l,i),Pa.subVectors(s,i),vp.subVectors(t,i);const d=Wi.dot(Wi),h=Wi.dot(Pa),m=Wi.dot(vp),p=Pa.dot(Pa),_=Pa.dot(vp),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(p*m-h*_)*x,T=(d*_-h*m)*x;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,Ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ia.x),m.addScaledVector(d,Ia.y),m.addScaledVector(h,Ia.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return yp.setScalar(0),Ep.setScalar(0),bp.setScalar(0),yp.fromBufferAttribute(t,i),Ep.fromBufferAttribute(t,s),bp.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(yp,c.x),d.addScaledVector(Ep,c.y),d.addScaledVector(bp,c.z),d}static isFrontFacing(t,i,s,l){return Wi.subVectors(s,i),Pa.subVectors(t,i),Wi.cross(Pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Wi.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ji.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ji.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;ho.subVectors(l,s),po.subVectors(c,s),xp.subVectors(t,s);const m=ho.dot(xp),p=po.dot(xp);if(m<=0&&p<=0)return i.copy(s);Sp.subVectors(t,l);const _=ho.dot(Sp),g=po.dot(Sp);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0&&m-_>0)return d=m/(m-_),i.copy(s).addScaledVector(ho,d);Mp.subVectors(t,c);const S=ho.dot(Mp),T=po.dot(Mp);if(T>=0&&S<=T)return i.copy(c);const L=S*p-m*T;if(L<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(po,h);const M=_*T-S*g;if(M<=0&&g-_>=0&&S-T>=0)return Ux.subVectors(c,l),h=(g-_)/(g-_+(S-T)),i.copy(l).addScaledVector(Ux,h);const E=1/(M+L+x);return d=L*E,h=x*E,i.copy(s).addScaledVector(ho,d).addScaledVector(po,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nu{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(qi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(qi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=qi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,qi):qi.fromBufferAttribute(c,d),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Lc.copy(s.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fl),Uc.subVectors(this.max,Fl),mo.subVectors(t.a,Fl),go.subVectors(t.b,Fl),_o.subVectors(t.c,Fl),Cs.subVectors(go,mo),ws.subVectors(_o,go),rr.subVectors(mo,_o);let i=[0,-Cs.z,Cs.y,0,-ws.z,ws.y,0,-rr.z,rr.y,Cs.z,0,-Cs.x,ws.z,0,-ws.x,rr.z,0,-rr.x,-Cs.y,Cs.x,0,-ws.y,ws.x,0,-rr.y,rr.x,0];return!Tp(i,mo,go,_o,Uc)||(i=[1,0,0,0,1,0,0,0,1],!Tp(i,mo,go,_o,Uc))?!1:(Oc.crossVectors(Cs,ws),i=[Oc.x,Oc.y,Oc.z],Tp(i,mo,go,_o,Uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],qi=new oe,Lc=new nu,mo=new oe,go=new oe,_o=new oe,Cs=new oe,ws=new oe,rr=new oe,Fl=new oe,Uc=new oe,Oc=new oe,or=new oe;function Tp(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){or.fromArray(o,c);const h=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=t.dot(or),p=i.dot(or),_=s.dot(or);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const yn=new oe,Pc=new Pt;let uT=0;class Xa extends zs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Fb,this.updateRanges=[],this.gpuType=da,this.version=0,this._normalizationScale=t!==void 0?Xm(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(t),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=this._denormalize(s)),s}setComponent(t,i,s){return this.normalized&&(s=this._normalize(s)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l),c=this._normalize(c)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):Yb(t,this.array)}_normalize(t){const i=this._normalizationScale;return i!==void 0?Math.round(t*i):jb(t,this.array)}}class kS extends Xa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class XS extends Xa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Wa extends Xa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const cT=new nu,Hl=new oe,Ap=new oe;class iu{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hl.subVectors(t,this.center);const i=Hl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Hl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ap.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hl.copy(t.center).add(Ap)),this.expandByPoint(Hl.copy(t.center).sub(Ap))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fT=0;const Li=new fn,Rp=new ui,vo=new oe,Si=new nu,Gl=new nu,On=new oe;class Ya extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=tu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gb(t)?XS:kS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,i,s){return Li.makeTranslation(t,i,s),this.applyMatrix4(Li),this}scale(t,i,s){return Li.makeScale(t,i,s),this.applyMatrix4(Li),this}lookAt(t){return Rp.lookAt(t),Rp.updateMatrix(),this.applyMatrix4(Rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Wa(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Gl.setFromBufferAttribute(h),this.morphTargetsRelative?(On.addVectors(Si.min,Gl.min),Si.expandByPoint(On),On.addVectors(Si.max,Gl.max),Si.expandByPoint(On)):(Si.expandByPoint(Gl.min),Si.expandByPoint(Gl.max))}Si.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)On.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(On));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)On.fromBufferAttribute(h,p),m&&(vo.fromBufferAttribute(t,p),On.add(vo)),l=Math.max(l,s.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Xa(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[],p=new Uint8Array(s.count);for(let J=0;J<s.count;J++)h[J]=new oe,m[J]=new oe;const _=new oe,g=new oe,x=new oe,S=new Pt,T=new Pt,L=new Pt,M=new oe,E=new oe;function D(J,k,j){p[J]=p[k]=p[j]=1,_.fromBufferAttribute(s,J),g.fromBufferAttribute(s,k),x.fromBufferAttribute(s,j),S.fromBufferAttribute(c,J),T.fromBufferAttribute(c,k),L.fromBufferAttribute(c,j),g.sub(_),x.sub(_),T.sub(S),L.sub(S);const se=1/(T.x*L.y-L.x*T.y);isFinite(se)&&(M.copy(g).multiplyScalar(L.y).addScaledVector(x,-T.y).multiplyScalar(se),E.copy(x).multiplyScalar(T.x).addScaledVector(g,-L.x).multiplyScalar(se),h[J].add(M),h[k].add(M),h[j].add(M),m[J].add(E),m[k].add(E),m[j].add(E))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let J=0,k=z.length;J<k;++J){const j=z[J],se=j.start,de=j.count;for(let H=se,re=se+de;H<re;H+=3)D(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const U=new oe,F=new oe,P=new oe,y=new oe;function N(J){P.fromBufferAttribute(l,J),y.copy(P);const k=h[J];U.copy(k),U.sub(P.multiplyScalar(P.dot(k))).normalize(),F.crossVectors(y,k);const se=F.dot(m[J])<0?-1:1;d.setXYZW(J,U.x,U.y,U.z,se)}for(let J=0,k=s.count;J<k;++J)p[J]&&N(J);this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Xa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new oe,c=new oe,d=new oe,h=new oe,m=new oe,p=new oe,_=new oe,g=new oe;if(t)for(let x=0,S=t.count;x<S;x+=3){const T=t.getX(x+0),L=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,L),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(L,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)On.fromBufferAttribute(t,i),On.normalize(),t.setXYZ(i,On.x,On.y,On.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let S=0,T=0;for(let L=0,M=m.length;L<M;L++){h.isInterleavedBufferAttribute?S=m[L]*h.data.stride+h.offset:S=m[L]*_;for(let E=0;E<_;E++)x[T++]=p[S++]}return new Xa(x,_,g)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ya,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=t(x,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new oe,dT=new oe,hT=new ht;class Ds{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Cp.subVectors(s,i).cross(dT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Cp),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||hT.getNormalMatrix(t),l=this.coplanarPoint(Cp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let pT=0;class au extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=tu(),this.name="",this.type="Material",this.blending=jl,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vS,this.blendDst=xS,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ub,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=up,this.stencilZFail=up,this.stencilZPass=up,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Ds().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Pt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new oe,wp=new oe,Ic=new oe,zc=new oe;class WS{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wp.copy(t).add(i).multiplyScalar(.5),Ic.copy(i).sub(t).normalize(),zc.copy(this.origin).sub(wp);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Ic),h=zc.dot(this.direction),m=-zc.dot(Ic),p=zc.lengthSq(),_=Math.abs(1-d*d);let g,x,S,T;if(_>0)if(g=d*m-h,x=d*h-m,T=c*_,g>=0)if(x>=-T)if(x<=T){const L=1/_;g*=L,x*=L,S=g*(g+d*x+2*h)+x*(d*g+x+2*m)+p}else x=c,g=Math.max(0,-(d*x+h)),S=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(d*x+h)),S=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-d*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(g=Math.max(0,-(d*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p);else x=d>0?-c:c,g=Math.max(0,-(d*x+h)),S=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(wp).addScaledVector(Ic,x),S}intersectSphere(t,i){if(t.radius<0)return null;Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,d=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,d=(t.min.y-x.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,s,l,c){const d=this.origin,h=this.direction,m=h.x,p=h.y,_=h.z,g=t.x-d.x,x=t.y-d.y,S=t.z-d.z,T=i.x-d.x,L=i.y-d.y,M=i.z-d.z,E=s.x-d.x,D=s.y-d.y,z=s.z-d.z,U=Math.abs(m),F=Math.abs(p),P=Math.abs(_);let y,N,J,k,j,se,de,H,re,X,q,ce;if(U>=F&&U>=P?(J=m,se=g,re=T,ce=E,m>=0?(y=p,N=_,k=x,j=S,de=L,H=M,X=D,q=z):(y=_,N=p,k=S,j=x,de=M,H=L,X=z,q=D)):F>=P?(J=p,se=x,re=L,ce=D,p>=0?(y=_,N=m,k=S,j=g,de=M,H=T,X=z,q=E):(y=m,N=_,k=g,j=S,de=T,H=M,X=E,q=z)):(J=_,se=S,re=M,ce=z,_>=0?(y=m,N=p,k=g,j=x,de=T,H=L,X=E,q=D):(y=p,N=m,k=x,j=g,de=L,H=T,X=D,q=E)),J===0)return null;const ne=y/J,fe=N/J,Ee=1/J,ke=k-ne*se,$e=j-fe*se,w=de-ne*re,Q=H-fe*re,ve=X-ne*ce,be=q-fe*ce,Te=ve*Q-be*w,ye=ke*be-$e*ve,Xe=w*$e-Q*ke;if(l){if(Te<0||ye<0||Xe<0)return null}else if((Te<0||ye<0||Xe<0)&&(Te>0||ye>0||Xe>0))return null;const xe=Te+ye+Xe;if(xe===0)return null;const Ce=Ee*(Te*se+ye*re+Xe*ce);return(xe>0?Ce<0:Ce>0)?null:this.at(Ce/xe,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mT extends au{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ox=new fn,lr=new WS,Bc=new iu,Px=new oe,Fc=new oe,Hc=new oe,Gc=new oe,Np=new oe,Vc=new oe,Ix=new oe,kc=new oe;class mr extends ui{constructor(t=new Ya,i=new mT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Np.fromBufferAttribute(g,t),d?Vc.addScaledVector(Np,_):Vc.addScaledVector(Np.sub(i),_))}i.add(Vc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),lr.copy(t.ray).recast(t.near),!(Bc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Bc,Px)===null||lr.origin.distanceToSquared(Px)>(t.far-t.near)**2))&&(Ox.copy(c).invert(),lr.copy(t.ray).applyMatrix4(Ox),!(s.boundingBox!==null&&lr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,lr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,L=x.length;T<L;T++){const M=x[T],E=d[M.materialIndex],D=Math.max(M.start,S.start),z=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,F=z;U<F;U+=3){const P=h.getX(U),y=h.getX(U+1),N=h.getX(U+2);l=Xc(this,E,t,s,p,_,g,P,y,N),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),L=Math.min(h.count,S.start+S.count);for(let M=T,E=L;M<E;M+=3){const D=h.getX(M),z=h.getX(M+1),U=h.getX(M+2);l=Xc(this,d,t,s,p,_,g,D,z,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,L=x.length;T<L;T++){const M=x[T],E=d[M.materialIndex],D=Math.max(M.start,S.start),z=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,F=z;U<F;U+=3){const P=U,y=U+1,N=U+2;l=Xc(this,E,t,s,p,_,g,P,y,N),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),L=Math.min(m.count,S.start+S.count);for(let M=T,E=L;M<E;M+=3){const D=M,z=M+1,U=M+2;l=Xc(this,d,t,s,p,_,g,D,z,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function gT(o,t,i,s,l,c,d,h){let m;if(t.side===li?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===dr,h),m===null)return null;kc.copy(h),kc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:o}}function Xc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,Fc),o.getVertexPosition(m,Hc),o.getVertexPosition(p,Gc);const _=gT(o,t,i,s,Fc,Hc,Gc,Ix);if(_){const g=new oe;ji.getBarycoord(Ix,Fc,Hc,Gc,g),l&&(_.uv=ji.getInterpolatedAttribute(l,h,m,p,g,new Pt)),c&&(_.uv1=ji.getInterpolatedAttribute(c,h,m,p,g,new Pt)),d&&(_.normal=ji.getInterpolatedAttribute(d,h,m,p,g,new oe),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new oe,materialIndex:0};ji.getNormal(Fc,Hc,Gc,x.normal),_.face=x,_.barycoord=g}return _}class _T extends Jn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Vn,_=Vn,g,x){super(null,d,h,m,p,_,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ur=new iu,vT=new Pt(.5,.5),Wc=new oe;class _f{constructor(t=new Ds,i=new Ds,s=new Ds,l=new Ds,c=new Ds,d=new Ds){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Zi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],S=c[7],T=c[8],L=c[9],M=c[10],E=c[11],D=c[12],z=c[13],U=c[14],F=c[15];if(l[0].setComponents(p-d,S-_,E-T,F-D).normalize(),l[1].setComponents(p+d,S+_,E+T,F+D).normalize(),l[2].setComponents(p+h,S+g,E+L,F+z).normalize(),l[3].setComponents(p-h,S-g,E-L,F-z).normalize(),s)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,S-x,E-M,F-U).normalize();else if(l[4].setComponents(p-m,S-x,E-M,F-U).normalize(),i===Zi)l[5].setComponents(p+m,S+x,E+M,F+U).normalize();else if(i===mf)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);const i=vT.distanceTo(t.center);return ur.radius=.7071067811865476+i,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const zx=new fn;class qm{constructor(){this.coordinateSystem=Zi,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,s=this._frustums;for(let l=0;l<i.length;l++){const c=i[l];zx.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),s[l]===void 0&&(s[l]=new _f),s[l].setFromProjectionMatrix(zx,c.coordinateSystem,c.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,s=t._frustums;for(let l=0;l<t._count;l++)i[l]===void 0&&(i[l]=new _f),i[l].copy(s[l]);return this._count=t._count,this}clone(){return new qm().copy(this)}}class xT extends au{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bx=new fn,Am=new WS,qc=new iu,Yc=new oe;class ST extends ui{constructor(t=new Ya,i=new xT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;Bx.copy(l).invert(),Am.copy(t.ray).applyMatrix4(Bx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let T=x,L=S;T<L;T++){const M=p.getX(T);Yc.fromBufferAttribute(g,M),Fx(Yc,M,m,l,t,i,this)}}else{const x=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let T=x,L=S;T<L;T++)Yc.fromBufferAttribute(g,T),Fx(Yc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fx(o,t,i,s,l,c,d){const h=Am.distanceSqToPoint(o);if(h<i){const m=new oe;Am.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class qS extends Jn{constructor(t=[],i=Lo,s,l,c,d,h,m,p,_){super(t,i,s,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oo extends Jn{constructor(t,i,s=ga,l,c,d,h=Vn,m=Vn,p,_=Ps,g=1){if(_!==Ps&&_!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class YS extends Oo{constructor(t,i=ga,s=Lo,l,c,d=Vn,h=Vn,m,p=Ps){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class jS extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class su extends Ya{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Wa(p,3)),this.setAttribute("normal",new Wa(_,3)),this.setAttribute("uv",new Wa(g,2));function T(L,M,E,D,z,U,F,P,y,N,J){const k=U/y,j=F/N,se=U/2,de=F/2,H=P/2,re=y+1,X=N+1;let q=0,ce=0;const ne=new oe;for(let fe=0;fe<X;fe++){const Ee=fe*j-de;for(let ke=0;ke<re;ke++){const $e=ke*k-se;ne[L]=$e*D,ne[M]=Ee*z,ne[E]=H,p.push(ne.x,ne.y,ne.z),ne[L]=0,ne[M]=0,ne[E]=P>0?1:-1,_.push(ne.x,ne.y,ne.z),g.push(ke/y),g.push(1-fe/N),q+=1}}for(let fe=0;fe<N;fe++)for(let Ee=0;Ee<y;Ee++){const ke=x+Ee+re*fe,$e=x+Ee+re*(fe+1),w=x+(Ee+1)+re*(fe+1),Q=x+(Ee+1)+re*fe;m.push(ke,$e,Q),m.push($e,w,Q),ce+=6}h.addGroup(S,ce,J),S+=ce,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class MT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let d=1;d<=t;d++)s=this.getPoint(d/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let d;i?d=i:d=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-d,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===d)return l/(c-1);const _=s[l],x=s[l+1]-_,S=(d-_)/x;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const d=this.getPoint(l),h=this.getPoint(c),m=i||(d.isVector2?new Pt:new oe);return m.copy(h).sub(d).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new oe,l=[],c=[],d=[],h=new oe,m=new fn;for(let S=0;S<=t;S++){const T=S/t;l[S]=this.getTangentAt(T,new oe)}c[0]=new oe,d[0]=new oe;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),x<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),d[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),d[S]=d[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const T=Math.acos(Et(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,T))}d[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Et(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],S*T)),d[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function Ym(){let o=0,t=0,i=0,s=0;function l(c,d,h,m){o=c,t=h,i=-3*c+3*d-2*h-m,s=2*c-2*d+h+m}return{initCatmullRom:function(c,d,h,m,p){l(d,h,p*(h-c),p*(m-d))},initNonuniformCatmullRom:function(c,d,h,m,p,_,g){let x=(d-c)/p-(h-c)/(p+_)+(h-d)/_,S=(h-d)/_-(m-d)/(_+g)+(m-h)/g;x*=_,S*=_,l(d,h,x,S)},calc:function(c){const d=c*c,h=d*c;return o+t*c+i*d+s*h}}}const Hx=new oe,Gx=new oe,Dp=new Ym,Lp=new Ym,Up=new Ym;class yT extends MT{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new oe){const s=i,l=this.points,c=l.length,d=(c-(this.closed?0:1))*t;let h=Math.floor(d),m=d-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Gx.subVectors(l[0],l[1]).add(l[0]),p=Gx);const g=l[h%c],x=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Hx.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Hx),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(g),S),L=Math.pow(g.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(_),S);L<1e-4&&(L=1),T<1e-4&&(T=L),M<1e-4&&(M=L),Dp.initNonuniformCatmullRom(p.x,g.x,x.x,_.x,T,L,M),Lp.initNonuniformCatmullRom(p.y,g.y,x.y,_.y,T,L,M),Up.initNonuniformCatmullRom(p.z,g.z,x.z,_.z,T,L,M)}else this.curveType==="catmullrom"&&(Dp.initCatmullRom(p.x,g.x,x.x,_.x,this.tension),Lp.initCatmullRom(p.y,g.y,x.y,_.y,this.tension),Up.initCatmullRom(p.z,g.z,x.z,_.z,this.tension));return s.set(Dp.calc(m),Lp.calc(m),Up.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new oe().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ef extends Ya{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=t/h,x=i/m,S=[],T=[],L=[],M=[];for(let E=0;E<_;E++){const D=E*x-d;for(let z=0;z<p;z++){const U=z*g-c;T.push(U,-D,0),L.push(0,0,1),M.push(z/h),M.push(1-E/m)}}for(let E=0;E<m;E++)for(let D=0;D<h;D++){const z=D+p*E,U=D+p*(E+1),F=D+1+p*(E+1),P=D+1+p*E;S.push(z,U,P),S.push(U,F,P)}this.setIndex(S),this.setAttribute("position",new Wa(T,3)),this.setAttribute("normal",new Wa(L,3)),this.setAttribute("uv",new Wa(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ef(t.width,t.height,t.widthSegments,t.heightSegments)}}function Po(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(Vx(l))l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Vx(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Qn(o){const t={};for(let i=0;i<o.length;i++){const s=Po(o[i]);for(const l in s)t[l]=s[l]}return t}function Vx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function ET(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ZS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const bT={clone:Po,merge:Qn};var TT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Is extends au{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TT,this.fragmentShader=AT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Po(t.uniforms),this.uniformsGroups=ET(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Ht().setHex(l.value);break;case"v2":this.uniforms[s].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[s].value=new mn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[s].value=new fn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class RT extends Is{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CT extends au{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wT extends au{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jc=new oe,Zc=new Bo,oa=new oe;class KS extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jc,Zc,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Zc,oa.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(jc,Zc,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Zc,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new oe,kx=new Pt,Xx=new Pt;class Yi extends KS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Tm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tm*2*Math.atan(Math.tan(lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z)}getViewSize(t,i){return this.getViewBounds(t,kx,Xx),i.subVectors(Xx,kx)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(lf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class NT extends KS{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xo=-90,So=1;class Rm extends ui{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yi(xo,So,t,i);l.layers=this.layers,this.add(l);const c=new Yi(xo,So,t,i);c.layers=this.layers,this.add(c);const d=new Yi(xo,So,t,i);d.layers=this.layers,this.add(d);const h=new Yi(xo,So,t,i);h.layers=this.layers,this.add(h);const m=new Yi(xo,So,t,i);m.layers=this.layers,this.add(m);const p=new Yi(xo,So,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===mf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const L=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.mipmapsAutoUpdate=L,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(g,x,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class DT extends Yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Xw{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Et(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ww extends zs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Wx(o,t,i,s){const l=LT(s);switch(i){case US:return o*t;case PS:return o*t/l.components*l.byteLength;case Gm:return o*t/l.components*l.byteLength;case hr:return o*t*2/l.components*l.byteLength;case Vm:return o*t*2/l.components*l.byteLength;case OS:return o*t*3/l.components*l.byteLength;case ha:return o*t*4/l.components*l.byteLength;case km:return o*t*4/l.components*l.byteLength;case nf:case af:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sf:case rf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kp:case Jp:return Math.max(o,16)*Math.max(t,8)/4;case Zp:case Qp:return Math.max(o,8)*Math.max(t,8)/2;case $p:case em:case nm:case im:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case tm:case ff:case am:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case om:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case um:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case cm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case fm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case dm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case hm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case pm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case mm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case gm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case _m:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case vm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case xm:case Sm:case Mm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ym:case Em:return Math.ceil(o/4)*Math.ceil(t/4)*8;case df:case bm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LT(o){switch(o){case Oi:case wS:return{byteLength:1,components:1};case Ql:case NS:case _a:return{byteLength:2,components:1};case Fm:case Hm:return{byteLength:2,components:4};case ga:case Bm:case da:return{byteLength:4,components:1};case DS:case LS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function QS(){let o=null,t=!1,i=null,s=null;function l(c,d){s=o.requestAnimationFrame(l),i(c,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function UT(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],L=g[S];L.start<=T.start+T.count+1?T.count=Math.max(T.count,L.start+L.count-T.start):(++x,g[x]=L)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const L=g[S];o.bufferSubData(p,L.start*_.BYTES_PER_ELEMENT,_,L.start,L.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var OT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PT=`#ifdef USE_ALPHAHASH
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
#endif`,IT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HT=`#ifdef USE_AOMAP
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
#endif`,GT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
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
#endif`,kT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YT=`#ifdef USE_IRIDESCENCE
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
#endif`,jT=`#ifdef USE_BUMPMAP
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
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,i1=`#define PI 3.141592653589793
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
} // validated`,a1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
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
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T1=`#ifdef USE_ENVMAP
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
#endif`,A1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
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
#endif`,D1=`uniform sampler2D dfgLUT;
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
}`,L1=`
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
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
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nA=`#ifdef USE_NORMALMAP
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
#endif`,iA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vA=`float getShadowMask() {
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
}`,xA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SA=`#ifdef USE_SKINNING
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
#endif`,MA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yA=`#ifdef USE_SKINNING
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
#endif`,EA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#ifdef USE_TRANSMISSION
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OA=`uniform sampler2D t2D;
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`uniform float backgroundBlurriness;
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`#include <common>
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
}`,HA=`#if DEPTH_PACKING == 3200
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
}`,GA=`#define DISTANCE
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
}`,VA=`#define DISTANCE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`uniform float scale;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,jA=`uniform vec3 diffuse;
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
}`,ZA=`#define LAMBERT
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
}`,KA=`#define LAMBERT
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
}`,QA=`#define MATCAP
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
}`,JA=`#define MATCAP
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
}`,$A=`#define NORMAL
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
}`,eR=`#define NORMAL
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
}`,tR=`#define PHONG
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
}`,nR=`#define PHONG
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
}`,iR=`#define STANDARD
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
}`,aR=`#define STANDARD
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
}`,sR=`#define TOON
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
}`,rR=`#define TOON
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
}`,oR=`uniform float size;
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
}`,lR=`uniform vec3 diffuse;
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
}`,uR=`#include <common>
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
}`,cR=`uniform vec3 color;
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
}`,fR=`uniform float rotation;
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
}`,dR=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:OT,alphahash_pars_fragment:PT,alphamap_fragment:IT,alphamap_pars_fragment:zT,alphatest_fragment:BT,alphatest_pars_fragment:FT,aomap_fragment:HT,aomap_pars_fragment:GT,batching_pars_vertex:VT,batching_vertex:kT,begin_vertex:XT,beginnormal_vertex:WT,bsdfs:qT,iridescence_fragment:YT,bumpmap_pars_fragment:jT,clipping_planes_fragment:ZT,clipping_planes_pars_fragment:KT,clipping_planes_pars_vertex:QT,clipping_planes_vertex:JT,color_fragment:$T,color_pars_fragment:e1,color_pars_vertex:t1,color_vertex:n1,common:i1,defaultnormal_vertex:a1,displacementmap_pars_vertex:s1,displacementmap_vertex:r1,emissivemap_fragment:o1,emissivemap_pars_fragment:l1,colorspace_fragment:u1,colorspace_pars_fragment:c1,envmap_fragment:f1,envmap_common_pars_fragment:d1,envmap_pars_fragment:h1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:T1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:_1,fog_fragment:v1,fog_pars_fragment:x1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:M1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:E1,lights_pars_begin:b1,lights_toon_fragment:A1,lights_toon_pars_fragment:R1,lights_phong_fragment:C1,lights_phong_pars_fragment:w1,lights_physical_fragment:N1,lights_physical_pars_fragment:D1,lights_fragment_begin:L1,lights_fragment_maps:U1,lights_fragment_end:O1,lightprobes_pars_fragment:P1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:F1,map_fragment:H1,map_pars_fragment:G1,map_particle_fragment:V1,map_particle_pars_fragment:k1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:W1,morphinstance_vertex:q1,morphcolor_vertex:Y1,morphnormal_vertex:j1,morphtarget_pars_vertex:Z1,morphtarget_vertex:K1,normal_fragment_begin:Q1,normal_fragment_maps:J1,normal_pars_fragment:$1,normal_pars_vertex:eA,normal_vertex:tA,normalmap_pars_fragment:nA,clearcoat_normal_fragment_begin:iA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:sA,iridescence_pars_fragment:rA,opaque_fragment:oA,packing:lA,premultiplied_alpha_fragment:uA,project_vertex:cA,dithering_fragment:fA,dithering_pars_fragment:dA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:pA,shadowmap_pars_fragment:mA,shadowmap_pars_vertex:gA,shadowmap_vertex:_A,shadowmask_pars_fragment:vA,skinbase_vertex:xA,skinning_pars_vertex:SA,skinning_vertex:MA,skinnormal_vertex:yA,specularmap_fragment:EA,specularmap_pars_fragment:bA,tonemapping_fragment:TA,tonemapping_pars_fragment:AA,transmission_fragment:RA,transmission_pars_fragment:CA,uv_pars_fragment:wA,uv_pars_vertex:NA,uv_vertex:DA,worldpos_vertex:LA,background_vert:UA,background_frag:OA,backgroundCube_vert:PA,backgroundCube_frag:IA,cube_vert:zA,cube_frag:BA,depth_vert:FA,depth_frag:HA,distance_vert:GA,distance_frag:VA,equirect_vert:kA,equirect_frag:XA,linedashed_vert:WA,linedashed_frag:qA,meshbasic_vert:YA,meshbasic_frag:jA,meshlambert_vert:ZA,meshlambert_frag:KA,meshmatcap_vert:QA,meshmatcap_frag:JA,meshnormal_vert:$A,meshnormal_frag:eR,meshphong_vert:tR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:aR,meshtoon_vert:sR,meshtoon_frag:rR,points_vert:oR,points_frag:lR,shadow_vert:uR,shadow_frag:cR,sprite_vert:fR,sprite_frag:dR},Ve={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},fa={basic:{uniforms:Qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Qn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Qn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ht(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Qn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Qn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Qn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Qn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Qn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Qn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Qn([Ve.common,Ve.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Qn([Ve.lights,Ve.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};fa.physical={uniforms:Qn([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Kc={r:0,b:0,g:0},hR=new fn,JS=new ht;JS.set(-1,0,0,0,1,0,0,0,1);function pR(o,t,i,s,l,c){const d=new Ht(0);let h=l===!0?0:1,m,p,_=null,g=0,x=null;function S(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const U=D.backgroundBlurriness>0;z=t.get(z,U)}return z}function T(D){let z=!1;const U=S(D);U===null?M(d,h):U&&U.isColor&&(M(U,1),z=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function L(D,z){const U=S(z);U&&U.isCubeTexture?(p===void 0&&(p=new mr(new su(1,1,1),new Is({name:"BackgroundCubeMaterial",uniforms:Po(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(hR.makeRotationFromEuler(z.backgroundRotation)).transpose(),U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(JS),p.material.toneMapped=wt.getTransfer(U.colorSpace)!==qt,(_!==U||g!==U.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=U,g=U.version,x=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new mr(new Ef(2,2),new Is({name:"BackgroundMaterial",uniforms:Po(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=wt.getTransfer(U.colorSpace)!==qt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,_=U,g=U.version,x=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,z){D.getRGB(Kc,ZS(o)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,z,c)}function E(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,z=1){d.set(D),h=z,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,M(d,h)},render:T,addToRenderList:L,dispose:E}}function mR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,d=!1;function h(j,se,de,H,re){let X=!1;const q=g(j,H,de,se);c!==q&&(c=q,p(c.object)),X=S(j,H,de,re),X&&T(j,H,de,re),re!==null&&t.update(re,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,U(j,se,de,H),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function m(){return o.createVertexArray()}function p(j){return o.bindVertexArray(j)}function _(j){return o.deleteVertexArray(j)}function g(j,se,de,H){const re=H.wireframe===!0;let X=s[se.id];X===void 0&&(X={},s[se.id]=X);const q=j.isInstancedMesh===!0?j.id:0;let ce=X[q];ce===void 0&&(ce={},X[q]=ce);let ne=ce[de.id];ne===void 0&&(ne={},ce[de.id]=ne);let fe=ne[re];return fe===void 0&&(fe=x(m()),ne[re]=fe),fe}function x(j){const se=[],de=[],H=[];for(let re=0;re<i;re++)se[re]=0,de[re]=0,H[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:de,attributeDivisors:H,object:j,attributes:{},index:null}}function S(j,se,de,H){const re=c.attributes,X=se.attributes;let q=0;const ce=de.getAttributes();for(const ne in ce)if(ce[ne].location>=0){const Ee=re[ne];let ke=X[ne];if(ke===void 0&&(ne==="instanceMatrix"&&j.instanceMatrix&&(ke=j.instanceMatrix),ne==="instanceColor"&&j.instanceColor&&(ke=j.instanceColor)),Ee===void 0||Ee.attribute!==ke||ke&&Ee.data!==ke.data)return!0;q++}return c.attributesNum!==q||c.index!==H}function T(j,se,de,H){const re={},X=se.attributes;let q=0;const ce=de.getAttributes();for(const ne in ce)if(ce[ne].location>=0){let Ee=X[ne];Ee===void 0&&(ne==="instanceMatrix"&&j.instanceMatrix&&(Ee=j.instanceMatrix),ne==="instanceColor"&&j.instanceColor&&(Ee=j.instanceColor));const ke={};ke.attribute=Ee,Ee&&Ee.data&&(ke.data=Ee.data),re[ne]=ke,q++}c.attributes=re,c.attributesNum=q,c.index=H}function L(){const j=c.newAttributes;for(let se=0,de=j.length;se<de;se++)j[se]=0}function M(j){E(j,0)}function E(j,se){const de=c.newAttributes,H=c.enabledAttributes,re=c.attributeDivisors;de[j]=1,H[j]===0&&(o.enableVertexAttribArray(j),H[j]=1),re[j]!==se&&(o.vertexAttribDivisor(j,se),re[j]=se)}function D(){const j=c.newAttributes,se=c.enabledAttributes;for(let de=0,H=se.length;de<H;de++)se[de]!==j[de]&&(o.disableVertexAttribArray(de),se[de]=0)}function z(j,se,de,H,re,X,q){q===!0?o.vertexAttribIPointer(j,se,de,re,X):o.vertexAttribPointer(j,se,de,H,re,X)}function U(j,se,de,H){L();const re=H.attributes,X=de.getAttributes(),q=se.defaultAttributeValues;for(const ce in X){const ne=X[ce];if(ne.location>=0){let fe=re[ce];if(fe===void 0&&(ce==="instanceMatrix"&&j.instanceMatrix&&(fe=j.instanceMatrix),ce==="instanceColor"&&j.instanceColor&&(fe=j.instanceColor)),fe!==void 0){const Ee=fe.normalized,ke=fe.itemSize,$e=t.get(fe);if($e===void 0)continue;const w=$e.buffer,Q=$e.type,ve=$e.bytesPerElement,be=Q===o.INT||Q===o.UNSIGNED_INT||fe.gpuType===Bm;if(fe.isInterleavedBufferAttribute){const Te=fe.data,ye=Te.isInterleavedBuffer===!0?Te.stride:Te.itemSize,Xe=fe.offset;if(Te.isInstancedInterleavedBuffer||Te.isInstancedBufferAttribute){for(let xe=0;xe<ne.locationSize;xe++)E(ne.location+xe,Te.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let xe=0;xe<ne.locationSize;xe++)M(ne.location+xe);o.bindBuffer(o.ARRAY_BUFFER,w);for(let xe=0;xe<ne.locationSize;xe++)z(ne.location+xe,ke/ne.locationSize,Q,Ee,ye*ve,(Xe+ke/ne.locationSize*xe)*ve,be)}else{if(fe.isInstancedBufferAttribute){for(let Te=0;Te<ne.locationSize;Te++)E(ne.location+Te,fe.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Te=0;Te<ne.locationSize;Te++)M(ne.location+Te);o.bindBuffer(o.ARRAY_BUFFER,w);for(let Te=0;Te<ne.locationSize;Te++)z(ne.location+Te,ke/ne.locationSize,Q,Ee,ke*ve,ke/ne.locationSize*Te*ve,be)}}else if(q!==void 0){const Ee=q[ce];if(Ee!==void 0)switch(Ee.length){case 2:o.vertexAttrib2fv(ne.location,Ee);break;case 3:o.vertexAttrib3fv(ne.location,Ee);break;case 4:o.vertexAttrib4fv(ne.location,Ee);break;default:o.vertexAttrib1fv(ne.location,Ee)}}}}D()}function F(){J();for(const j in s){const se=s[j];for(const de in se){const H=se[de];for(const re in H){const X=H[re];for(const q in X)_(X[q].object),delete X[q];delete H[re]}}delete s[j]}}function P(j){if(s[j.id]===void 0)return;const se=s[j.id];for(const de in se){const H=se[de];for(const re in H){const X=H[re];for(const q in X)_(X[q].object),delete X[q];delete H[re]}}delete s[j.id]}function y(j){for(const se in s){const de=s[se];for(const H in de){const re=de[H];if(re[j.id]===void 0)continue;const X=re[j.id];for(const q in X)_(X[q].object),delete X[q];delete re[j.id]}}}function N(j){for(const se in s){const de=s[se],H=j.isInstancedMesh===!0?j.id:0,re=de[H];if(re!==void 0){for(const X in re){const q=re[X];for(const ce in q)_(q[ce].object),delete q[ce];delete re[X]}delete de[H],Object.keys(de).length===0&&delete s[se]}}}function J(){k(),d=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfObject:N,releaseStatesOfProgram:y,initAttributes:L,enableAttribute:M,disableUnusedAttributes:D}}function gR(o,t,i){let s;function l(m){s=m}function c(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,_){_!==0&&(o.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function h(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let x=0;for(let S=0;S<_;S++)x+=p[S];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function _R(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(y){return!(y!==ha&&s.convert(y)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(y){const N=y===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Oi&&y!==da&&!N&&s.convert(y)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(y){if(y==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ft("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.logarithmicDepthBuffer===!0&&g===!1;i.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&g===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:L,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:U,maxSamples:F,samples:P}}function vR(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Ds,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||l;return l=x,s=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,L=g.clipIntersection,M=g.clipShadows,E=o.get(g);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const D=c?0:s,z=D*4;let U=E.clippingState||null;m.value=U,U=_(T,x,z,S);for(let F=0;F!==z;++F)U[F]=i[F];E.clippingState=U,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,S,T){const L=g!==null?g.length:0;let M=null;if(L!==0){if(M=m.value,T!==!0||M===null){const E=S+L*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<E)&&(M=new Float32Array(E));for(let z=0,U=S;z!==L;++z,U+=4)d.copy(g[z]).applyMatrix4(D,h),d.normal.toArray(M,U),M[U+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=L,t.numIntersection=0,M}}class jm extends ma{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new qS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new su(5,5,5),c=new Is({name:"CubemapFromEquirect",uniforms:Po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:wo});c.uniforms.tEquirect.value=i;const d=new mr(l,c),h=i.minFilter;return i.minFilter===Us&&(i.minFilter=oi),new Rm(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}const qx=256,xR=3,SR=20,$S=256,eM=16,MR=3,yR=new oe,ER=new Ht;class vf{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rm(1,10,null),this._boxMesh=new mr(new su(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=yR}=c,m=this._renderer;this._setSize(d);const p=this._allocateTarget(),_=this._getSourceTarget(!0);i>0&&(_.texture.mipmapsAutoUpdate=!1);const g=m.autoClear,x=m.autoClearColor,S=m.autoClearDepth,T=m.autoClearStencil,L=t.background;m.autoClear=!0,m.autoClearColor=!0,m.autoClearDepth=!0,m.autoClearStencil=!0,L===null&&(t.background=m.getClearColor(ER));const M=new Rm(s,l,_);return M.position.copy(h),M.update(m,t),m.autoClear=g,m.autoClearColor=x,m.autoClearDepth=S,m.autoClearStencil=T,t.background=L,i>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,i)),this._applyPMREM(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(qx,qb(t))}_fromTexture(t,i){t.mapping===Lo||t.mapping===Kl?this._setSize(t.image.length===0?qx:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const s=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(s),s}_allocateTarget(){const t=this._cubeSize,i=Yx(t,!1,!1),s=Math.log2(t)-xR;for(let l=0;l<=s;l++)i.texture.mipmaps.push({width:t>>l,height:t>>l});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){const i=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==i||t&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=Yx(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,s){const l=this._boxMesh,c=this._cubeCamera;l.material=s,c.renderTarget=t,c.activeMipmapLevel=i;const d=t.width>>i;t.viewport.set(0,0,d,d),c.update(this._renderer,l),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===Lo||t.mapping===Kl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jx()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=bR(),this._integrationMaterial=TR());const i=this._cubeSize,s=t.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(i/eM);for(let d=0;d<=s;d++){const h=vf.lodToRoughness(d,s);if(d>s-MR)c.roughness.value=h,this._renderCube(t,d,this._integrationMaterial);else{const m=h>0?Math.log2(i)+.5*Math.log2(6/($S*Math.pow(h,4)))+.5:0;l.roughness.value=h,l.lodBias.value=m,this._renderCube(t,d,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=AR());const s=this._blurMaterial,l=s.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(t,0,s),l.envMap.value=t.texture,this._renderCube(c,0,s)}}function Yx(o,t,i){return new jm(o,{minFilter:Us,generateMipmaps:t,type:_a,colorSpace:hf,depthBuffer:i})}function ru(o,t,i){return new Is({name:o,uniforms:t,vertexShader:St.cube_vert,fragmentShader:i,side:li,blending:wo,depthTest:!1,depthWrite:!1})}function bR(){return ru("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$S}u

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
	`)}function TR(){return ru("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eM}},`

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
	`)}function AR(){return ru("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${SR}
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
	`)}function jx(){return ru("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Zx(){return ru("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function RR(o){let t=new WeakMap,i=new WeakMap,s=null;function l(x,S=!1){return x==null?null:S?d(x):c(x)}function c(x){if(x&&x.isTexture){const S=x.mapping;if(S===rp||S===op)if(t.has(x)){const T=t.get(x).texture;return h(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const L=new jm(T.height);return L.fromEquirectangularTexture(o,x),t.set(x,L),x.addEventListener("dispose",p),h(L.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture&&x.isPMREMTexture!==!0){const S=x.mapping,T=S===rp||S===op,L=S===Lo||S===Kl;if(T||L){let M=i.get(x);const E=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==E)return s===null&&(s=new vf(o)),M=T?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const D=x.image;return T&&D&&D.height>0||L&&D&&m(D)?(s===null&&(s=new vf(o)),M=T?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",_),M.texture):null}}}return x}function h(x,S){return S===rp?x.mapping=Lo:S===op&&(x.mapping=Kl),x}function m(x){let S=0;const T=6;for(let L=0;L<T;L++)x[L]!==void 0&&S++;return S===T}function p(x){const S=x.target;S.removeEventListener("dispose",p);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function _(x){const S=x.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function CR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&of("WebGLRenderer: "+s+" extension not supported."),l}}}function wR(o,t,i,s){const l={},c=new WeakMap,d=new FinalizationRegistry(T=>delete l[T]);function h(T){m(T.target)}function m(T){T.index!==null&&t.remove(T.index);for(const M in T.attributes)t.remove(T.attributes[M]);T.removeEventListener("dispose",h),delete l[T.id],d.unregister(T);const L=c.get(T);L&&(t.remove(L),c.delete(T)),s.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,i.memory.geometries--}function p(T,L){return l[L.id]!==void 0||(L.addEventListener("dispose",h),l[L.id]=new WeakRef(L),d.register(L,L.id,L),i.memory.geometries++),L}function _(T){const L=T.attributes;for(const M in L)t.update(L[M],o.ARRAY_BUFFER)}function g(T){const L=T.index,M=T.attributes.position;let E=0;if(M===void 0)return;const D=L!==null?L.array.length:M.array.length/3-1,z=M.count>=65535?XS:kS,U=new z(Math.ceil(D/3)*6,1),F=U.array;if(L!==null){const y=L.array;E=L.version;for(let N=0,J=0;N<D;N+=3){const k=y[N+0],j=y[N+1],se=y[N+2];F[J++]=k,F[J++]=j,F[J++]=j,F[J++]=se,F[J++]=se,F[J++]=k}}else{E=M.version;for(let y=0,N=0;y<D;y+=3){const J=y+0,k=y+1,j=y+2;F[N++]=J,F[N++]=k,F[N++]=k,F[N++]=j,F[N++]=j,F[N++]=J}}U.version=E;const P=c.get(T);P&&t.remove(P),c.set(T,U)}function x(T){const L=c.get(T);if(L){const M=T.index;M!==null&&L.version<M.version&&g(T)}else g(T);return c.get(T)}function S(){for(const T in l){const L=l[T].deref();L!==void 0&&m(L)}}return{get:p,update:_,getWireframeAttribute:x,dispose:S}}function NR(o,t,i){let s;function l(g){s=g}let c,d;function h(g){c=g.type,d=g.bytesPerElement}function m(g,x){o.drawElements(s,x,c,g*d),i.update(x,s,1)}function p(g,x,S){S!==0&&(o.drawElementsInstanced(s,x,c,g*d,S),i.update(x,s,S))}function _(g,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,g,0,S);let L=0;for(let M=0;M<S;M++)L+=x[M];i.update(L,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function DR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Ft("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LR(o,t,i){const s=new WeakMap,l=new mn;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let J=function(){y.dispose(),s.delete(h),h.removeEventListener("dispose",J)};x!==void 0&&x.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let z=0;S===!0&&(z=1),T===!0&&(z=2),L===!0&&(z=3);let U=h.attributes.position.count*z,F=1;U>t.maxTextureSize&&(F=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*F*4*g),y=new HS(P,U,F,g);y.type=da,y.needsUpdate=!0;const N=z*4;for(let k=0;k<g;k++){const j=M[k],se=E[k],de=D[k],H=U*F*4*k;for(let re=0;re<j.count;re++){const X=re*N;S===!0&&(l.fromBufferAttribute(j,re),P[H+X+0]=l.x,P[H+X+1]=l.y,P[H+X+2]=l.z,P[H+X+3]=0),T===!0&&(l.fromBufferAttribute(se,re),P[H+X+4]=l.x,P[H+X+5]=l.y,P[H+X+6]=l.z,P[H+X+7]=0),L===!0&&(l.fromBufferAttribute(de,re),P[H+X+8]=l.x,P[H+X+9]=l.y,P[H+X+10]=l.z,P[H+X+11]=de.itemSize===4?l.w:1)}}x={count:g,texture:y,size:new Pt(U,F)},s.set(h,x),h.addEventListener("dispose",J)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let S=0;for(let L=0;L<p.length;L++)S+=p[L];const T=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function UR(o,t,i,s,l){let c=new WeakMap;function d(p){const _=l.render.frame,g=p.geometry,x=t.get(p,g);if(c.get(x)!==_&&(t.update(x),c.set(x,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return x}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const OR={[MS]:"LINEAR_TONE_MAPPING",[yS]:"REINHARD_TONE_MAPPING",[ES]:"CINEON_TONE_MAPPING",[bS]:"ACES_FILMIC_TONE_MAPPING",[AS]:"AGX_TONE_MAPPING",[RS]:"NEUTRAL_TONE_MAPPING",[TS]:"CUSTOM_TONE_MAPPING"};function PR(o,t,i,s,l,c){const d=new ma(t,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null,p=null;const _=new Ya;_.setAttribute("position",new Wa([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Wa([0,2,0,0,2,0],2));const g=new RT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new mr(_,g),S=new NT(-1,1,1,-1,0,1);let T=null,L=null,M=!1,E,D=null,z=[],U=!1;this.setSize=function(F,P){d.setSize(F,P),h!==null&&h.setSize(F,P),m!==null&&m.setSize(F,P);for(let y=0;y<z.length;y++){const N=z[y];N.setSize&&N.setSize(F,P)}},this.setEffects=function(F){z=F,U=z.length>0&&z[0].isRenderPass===!0;const P=d.width,y=d.height;z.length>0&&h===null&&(h=new ma(P,y,{type:_a,depthBuffer:!1,stencilBuffer:!1}),m=new ma(P,y,{type:_a,depthBuffer:!1,stencilBuffer:!1}));const N=l===!0&&z.some(J=>J.needsDepthTexture===!0);N!==(d.depthTexture!==null)&&(N===!0&&p===null&&(p=new Oo(P,y),c===!0&&(p.format=Os,p.type=Uo)),d.dispose(),d.depthTexture=N?p:null,d.resolveDepthBuffer=N,d.storeMultisampledDepthBuffer=N);for(let J=0;J<z.length;J++){const k=z[J];k.setSize&&k.setSize(P,y),N&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(p)}},this.begin=function(F,P){if(M||F.toneMapping===Va&&z.length===0)return!1;if(D=P,P!==null){const y=P.width,N=P.height;(d.width!==y||d.height!==N)&&this.setSize(y,N)}return U===!1&&F.setRenderTarget(d),E=F.toneMapping,F.toneMapping=Va,!0},this.hasRenderPass=function(){return U},this.end=function(F,P){F.toneMapping=E,M=!0;let y=d,N=h;for(let J=0;J<z.length;J++){const k=z[J];k.enabled!==!1&&(k.render(F,N,y,P),k.needsSwap!==!1&&(y=N,N=N===h?m:h))}if(T!==F.outputColorSpace||L!==F.toneMapping){T=F.outputColorSpace,L=F.toneMapping,g.defines={},wt.getTransfer(T)===qt&&(g.defines.SRGB_TRANSFER="");const J=OR[L];J&&(g.defines[J]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=y.texture,F.setRenderTarget(D),F.render(x,S),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),_.dispose(),g.dispose()}}const tM=new Jn,nM=new Oo(1,1),iM=new YS(1),aM=new HS,sM=new eT,rM=new qS,Kx=[],Qx=[],Jx=new Float32Array(16),$x=new Float32Array(9),eS=new Float32Array(4);function Fo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Kx[l];if(c===void 0&&(c=new Float32Array(l),Kx[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function Rn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function bf(o,t){let i=Qx[t];i===void 0&&(i=new Int32Array(t),Qx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function IR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function zR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2fv(this.addr,t),Cn(i,t)}}function BR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;o.uniform3fv(this.addr,t),Cn(i,t)}}function FR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4fv(this.addr,t),Cn(i,t)}}function HR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;eS.set(s),o.uniformMatrix2fv(this.addr,!1,eS),Cn(i,s)}}function GR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;$x.set(s),o.uniformMatrix3fv(this.addr,!1,$x),Cn(i,s)}}function VR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;Jx.set(s),o.uniformMatrix4fv(this.addr,!1,Jx),Cn(i,s)}}function kR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function XR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2iv(this.addr,t),Cn(i,t)}}function WR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;o.uniform3iv(this.addr,t),Cn(i,t)}}function qR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4iv(this.addr,t),Cn(i,t)}}function YR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function jR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2uiv(this.addr,t),Cn(i,t)}}function ZR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;o.uniform3uiv(this.addr,t),Cn(i,t)}}function KR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4uiv(this.addr,t),Cn(i,t)}}function Tf(o){return o.version===0&&(o.compareFunction=BS,o.needsUpdate=!0),o}function QR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?c=Tf(nM):c=tM,i.setTexture2D(t||c,l)}function JR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||sM,l)}function $R(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_CUBE_SHADOW?c=Tf(iM):c=rM,i.setTextureCube(t||c,l)}function e3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||aM,l)}function t3(o){switch(o){case 5126:return IR;case 35664:return zR;case 35665:return BR;case 35666:return FR;case 35674:return HR;case 35675:return GR;case 35676:return VR;case 5124:case 35670:return kR;case 35667:case 35671:return XR;case 35668:case 35672:return WR;case 35669:case 35673:return qR;case 5125:return YR;case 36294:return jR;case 36295:return ZR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return e3}}function n3(o,t){o.uniform1fv(this.addr,t)}function i3(o,t){const i=Fo(t,this.size,2);o.uniform2fv(this.addr,i)}function a3(o,t){const i=Fo(t,this.size,3);o.uniform3fv(this.addr,i)}function s3(o,t){const i=Fo(t,this.size,4);o.uniform4fv(this.addr,i)}function r3(o,t){const i=Fo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function o3(o,t){const i=Fo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function l3(o,t){const i=Fo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function u3(o,t){o.uniform1iv(this.addr,t)}function c3(o,t){o.uniform2iv(this.addr,t)}function f3(o,t){o.uniform3iv(this.addr,t)}function d3(o,t){o.uniform4iv(this.addr,t)}function h3(o,t){o.uniform1uiv(this.addr,t)}function p3(o,t){o.uniform2uiv(this.addr,t)}function m3(o,t){o.uniform3uiv(this.addr,t)}function g3(o,t){o.uniform4uiv(this.addr,t)}function _3(o,t,i){const s=this.cache,l=t.length,c=bf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Tf(nM):d=tM;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function v3(o,t,i){const s=this.cache,l=t.length,c=bf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||sM,c[d])}function x3(o,t,i){const s=this.cache,l=t.length,c=bf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));let d;this.type===o.SAMPLER_CUBE_SHADOW?d=Tf(iM):d=rM;for(let h=0;h!==l;++h)i.setTextureCube(t[h]||d,c[h])}function S3(o,t,i){const s=this.cache,l=t.length,c=bf(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||aM,c[d])}function M3(o){switch(o){case 5126:return n3;case 35664:return i3;case 35665:return a3;case 35666:return s3;case 35674:return r3;case 35675:return o3;case 35676:return l3;case 5124:case 35670:return u3;case 35667:case 35671:return c3;case 35668:case 35672:return f3;case 35669:case 35673:return d3;case 5125:return h3;case 36294:return p3;case 36295:return m3;case 36296:return g3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return x3;case 36289:case 36303:case 36311:case 36292:return S3}}class y3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=t3(i.type)}}class E3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=M3(i.type)}}class b3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Op=/(\w+)(\])?(\[|\.)?/g;function tS(o,t){o.seq.push(t),o.map[t.id]=t}function T3(o,t,i){const s=o.name,l=s.length;for(Op.lastIndex=0;;){const c=Op.exec(s),d=Op.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){tS(i,p===void 0?new y3(h,o,t):new E3(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new b3(h),tS(i,g)),i=g}}}class uf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);T3(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function nS(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const A3=37297;let R3=0;function C3(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const iS=new ht;function w3(o){wt._getMatrix(iS,wt.workingColorSpace,o);const t=`mat3( ${iS.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(o)){case pf:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function aS(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+C3(o.getShaderSource(t),h)}else return c}function N3(o,t){const i=w3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const D3={[MS]:"Linear",[yS]:"Reinhard",[ES]:"Cineon",[bS]:"ACESFilmic",[AS]:"AgX",[RS]:"Neutral",[TS]:"Custom"};function L3(o,t){const i=D3[t];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new oe;function U3(){wt.getLuminanceCoefficients(Qc);const o=Qc.x.toFixed(4),t=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function P3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function I3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function ql(o){return o!==""}function sS(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function rS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cm(o){return o.replace(z3,B3)}function B3(o,t){const i=St[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Cm(i)}const F3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oS(o){return o.replace(F3,H3)}function H3(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function lS(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const G3={[tf]:"SHADOWMAP_TYPE_PCF",[Wl]:"SHADOWMAP_TYPE_VSM"};function V3(o){return G3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k3={[Kl]:"ENVMAP_MODE_REFRACTION"};function X3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":k3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W3={[SS]:"ENVMAP_BLENDING_MULTIPLY",[Cb]:"ENVMAP_BLENDING_MIX",[wb]:"ENVMAP_BLENDING_ADD"};function q3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":W3[o.combine]||"ENVMAP_BLENDING_NONE"}function Y3(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=V3(i),p=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=X3(i),g=q3(i),x=O3(i),S=P3(c),T=l.createProgram();let L,M,E=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(L=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(ql).join(`
`),L.length>0&&(L+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(ql).join(`
`),M.length>0&&(M+=`
`)):(L=[lS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),M=[lS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?St.tonemapping_pars_fragment:"",i.toneMapping!==Va?L3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,N3("linearToOutputTexel",i.outputColorSpace),U3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ql).join(`
`)),d=Cm(d),d=sS(d,i),d=rS(d,i),h=Cm(h),h=sS(h,i),h=rS(h,i),d=oS(d),h=oS(h),i.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,L=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,M=["#define varying in",i.glslVersion===Sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=E+L+d,z=E+M+h,U=nS(l,l.VERTEX_SHADER,D),F=nS(l,l.FRAGMENT_SHADER,z);l.attachShader(T,U),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(k){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(T)||"",se=l.getShaderInfoLog(U)||"",de=l.getShaderInfoLog(F)||"",H=j.trim(),re=se.trim(),X=de.trim();let q=!0,ce=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,U,F);else{const ne=aS(l,U,"vertex"),fe=aS(l,F,"fragment");Ft("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+H+`
`+ne+`
`+fe)}else H!==""?ft("WebGLProgram: Program Info Log:",H):(re===""||X==="")&&(ce=!1);ce&&(k.diagnostics={runnable:q,programLog:H,vertexShader:{log:re,prefix:L},fragmentShader:{log:X,prefix:M}})}l.deleteShader(U),l.deleteShader(F),y=new uf(l,T),N=I3(l,T)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(T,A3)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=R3++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=F,this}let j3=0;class Z3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new K3(t),i.set(t,s)),s}}class K3{constructor(t){this.id=j3++,this.code=t,this.usedTimes=0}}function Q3(o){return o===hr||o===ff||o===df}function J3(o,t,i,s,l,c){const d=new GS,h=new Z3,m=new Set,p=[],_=new Map,g=s.logarithmicDepthBuffer,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return m.add(y),y===0?"uv":`uv${y}`}function T(y,N,J,k,j,se){const de=k.fog,H=j.geometry,re=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=t.get(y.envMap||re,X),ce=x[y.type];let ne=s.precision;y.precision!==null&&(ne=s.getMaxPrecision(y.precision),ne!==y.precision&&ft("WebGLProgram.getParameters:",y.precision,"not supported, using",ne,"instead."));const fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let ke=0;H.morphAttributes.position!==void 0&&(ke=1),H.morphAttributes.normal!==void 0&&(ke=2),H.morphAttributes.color!==void 0&&(ke=3);let $e,w,Q,ve;if(ce){const Ge=fa[ce];$e=Ge.vertexShader,w=Ge.fragmentShader}else{$e=y.vertexShader,w=y.fragmentShader;const Ge=h.getVertexShaderStage(y),It=h.getFragmentShaderStage(y);h.update(y,Ge,It),Q=Ge.id,ve=It.id}const be=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),ye=j.isInstancedMesh===!0,Xe=j.isBatchedMesh===!0,xe=!!y.map,Ce=!!y.matcap,ct=!!q,ot=ct&&q.isPMREMTexture===!0,xt=!!y.aoMap,Ot=!!y.lightMap,Nt=!!y.bumpMap&&y.wireframe===!1,at=!!y.normalMap,Yt=!!y.displacementMap,jt=!!y.emissiveMap,Jt=!!y.metalnessMap,En=!!y.roughnessMap,bn=y.anisotropy>0,W=y.clearcoat>0,wn=y.diffuseRoughness>0,Ut=y.dispersion>0,Zt=y.retroreflectivity>0,Be=y.iridescence>0,Kt=y.sheen>0,tt=y.transmission>0,lt=bn&&!!y.anisotropyMap,O=W&&!!y.clearcoatMap,A=W&&!!y.clearcoatNormalMap,ee=W&&!!y.clearcoatRoughnessMap,Re=wn&&!!y.diffuseRoughnessMap,Me=Be&&!!y.iridescenceMap,Le=Be&&!!y.iridescenceThicknessMap,Ie=Kt&&!!y.sheenColorMap,he=Kt&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Ue=!!y.specularColorMap,B=!!y.specularIntensityMap,me=tt&&!!y.transmissionMap,pe=tt&&!!y.thicknessMap,Oe=!!y.gradientMap,we=!!y.alphaMap,Pe=y.alphaTest>0,Je=!!y.alphaHash,nt=!!y.extensions;let Ae=Va;y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const qe=ot?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,pt={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:$e,fragmentShader:w,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ne,batching:Xe,batchingColor:Xe&&j._colorsTexture!==null,instancing:ye,instancingColor:ye&&j.instanceColor!==null,instancingMorph:ye&&j.morphTexture!==null,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:Ce,envMap:ct,envMapMode:ct&&q.mapping,envMapPMREM:ot,envMapMaxLod:ot?qe.length-1:null,envMapSize:ot?qe[0].width:null,aoMap:xt,lightMap:Ot,bumpMap:Nt,normalMap:at,displacementMap:Yt,emissiveMap:jt,normalMapObjectSpace:at&&y.normalMapType===Lb,normalMapTangentSpace:at&&y.normalMapType===xx,packedNormalMap:at&&y.normalMapType===xx&&Q3(y.normalMap.format),metalnessMap:Jt,roughnessMap:En,anisotropy:bn,anisotropyMap:lt,clearcoat:W,clearcoatMap:O,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:wn,diffuseRoughnessMap:Re,dispersion:Ut,retroreflection:Zt,iridescence:Be,iridescenceMap:Me,iridescenceThicknessMap:Le,sheen:Kt,sheenColorMap:Ie,sheenRoughnessMap:he,specularMap:ge,specularColorMap:Ue,specularIntensityMap:B,transmission:tt,transmissionMap:me,thicknessMap:pe,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===jl&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:Je,combine:y.combine,mapUv:xe&&S(y.map.channel),aoMapUv:xt&&S(y.aoMap.channel),lightMapUv:Ot&&S(y.lightMap.channel),bumpMapUv:Nt&&S(y.bumpMap.channel),normalMapUv:at&&S(y.normalMap.channel),displacementMapUv:Yt&&S(y.displacementMap.channel),emissiveMapUv:jt&&S(y.emissiveMap.channel),metalnessMapUv:Jt&&S(y.metalnessMap.channel),roughnessMapUv:En&&S(y.roughnessMap.channel),anisotropyMapUv:lt&&S(y.anisotropyMap.channel),clearcoatMapUv:O&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:A&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&S(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&S(y.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&S(y.sheenRoughnessMap.channel),specularMapUv:ge&&S(y.specularMap.channel),specularColorMapUv:Ue&&S(y.specularColorMap.channel),specularIntensityMapUv:B&&S(y.specularIntensityMap.channel),transmissionMapUv:me&&S(y.transmissionMap.channel),thicknessMapUv:pe&&S(y.thicknessMap.channel),alphaMapUv:we&&S(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(at||bn),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(xe||we),fog:!!de,useFog:y.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&at===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:se.filter(Ge=>Ge.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&wt.getTransfer(y.map.colorSpace)===qt,decodeVideoTextureEmissive:jt&&y.emissiveMap.isVideoTexture===!0&&wt.getTransfer(y.emissiveMap.colorSpace)===qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ha,flipSided:y.side===li,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:nt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&y.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=m.has(1),pt.vertexUv2s=m.has(2),pt.vertexUv3s=m.has(3),m.clear(),pt}function L(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const J in y.defines)N.push(J),N.push(y.defines[J]);return y.isRawShaderMaterial===!1&&(M(N,y),E(N,y),N.push(o.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function M(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapPMREM),y.push(N.envMapMaxLod),y.push(N.envMapSize),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.diffuseRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.numSunLights),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numSunLightShadows),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.numLightProbeGrids),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function E(y,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.diffuseRoughness&&d.enable(25),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),y.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),y.push(d.mask)}function D(y){const N=x[y.type];let J;if(N){const k=fa[N];J=bT.clone(k.uniforms)}else J=y.uniforms;return J}function z(y,N){let J=_.get(N);return J!==void 0?++J.usedTimes:(J=new Y3(o,N,y,l),p.push(J),_.set(N,J)),J}function U(y){if(--y.usedTimes===0){const N=p.indexOf(y);p[N]=p[p.length-1],p.pop(),_.delete(y.cacheKey),y.destroy()}}function F(y){h.remove(y)}function P(){h.dispose()}return{getParameters:T,getProgramCacheKey:L,getUniforms:D,acquireProgram:z,releaseProgram:U,releaseShaderCache:F,programs:p,dispose:P}}function $3(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function eC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function uS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function cS(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(x){let S=0;return x.isInstancedMesh&&(S+=2),x.isSkinnedMesh&&(S+=1),S}function h(x,S,T,L,M,E){let D=o[t];return D===void 0?(D={id:x.id,object:x,geometry:S,material:T,materialVariant:d(x),groupOrder:L,renderOrder:x.renderOrder,z:M,group:E},o[t]=D):(D.id=x.id,D.object=x,D.geometry=S,D.material=T,D.materialVariant=d(x),D.groupOrder=L,D.renderOrder=x.renderOrder,D.z=M,D.group=E),t++,D}function m(x,S,T,L,M,E,D){D.reversedDepth===!0&&(M=-M);const z=h(x,S,T,L,M,E);T.transmission>0?s.push(z):T.transparent===!0?l.push(z):i.push(z)}function p(x,S,T,L,M,E){const D=h(x,S,T,L,M,E);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function _(x,S){i.length>1&&i.sort(x||eC),s.length>1&&s.sort(S||uS),l.length>1&&l.sort(S||uS)}function g(){for(let x=t,S=o.length;x<S;x++){const T=o[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:g,sort:_}}function tC(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new cS,o.set(s,[d])):l>=c.length?(d=new cS,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function nC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new oe,color:new Ht};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":i={color:new Ht,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return o[t.id]=i,i}}}function iC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let aC=0;function sC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function rC(o){const t=new nC,i=iC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const l=new oe,c=new fn,d=new fn;function h(p){let _=0,g=0,x=0;for(let se=0;se<9;se++)s.probe[se].set(0,0,0);let S=0,T=0,L=0,M=0,E=0,D=0,z=0,U=0,F=0,P=0,y=0,N=0,J=0,k=0;p.sort(sC);for(let se=0,de=p.length;se<de;se++){const H=p[se],re=H.color,X=H.intensity,q=H.distance;let ce=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===hr?ce=H.shadow.map.texture:ce=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=re.r*X,g+=re.g*X,x+=re.b*X;else if(H.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(H.sh.coefficients[ne],X);k++}else if(H.isSunLight){const ne=t.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const fe=H.shadow,Ee=i.get(H);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),s.sunShadow[T]=Ee,s.sunShadowMap[T]=ce;const ke=fe.getViewportCount();for(let $e=0;$e<ke;$e++)s.sunShadowMatrix[L+$e]=fe.getMatrix($e),s.sunShadowCascade[L+$e]=fe._cascadeData[$e];L+=ke,T++}s.sun[S]=ne,S++}else if(H.isDirectionalLight){const ne=t.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const fe=H.shadow,Ee=i.get(H);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize=fe.mapSize,s.directionalShadow[M]=Ee,s.directionalShadowMap[M]=ce,s.directionalShadowMatrix[M]=H.shadow.matrix,F++}s.directional[M]=ne,M++}else if(H.isSpotLight){const ne=t.get(H);ne.position.setFromMatrixPosition(H.matrixWorld),ne.color.copy(re).multiplyScalar(X),ne.distance=q,ne.coneCos=Math.cos(H.angle),ne.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ne.decay=H.decay,s.spot[D]=ne;const fe=H.shadow;if(H.map&&(s.spotLightMap[N]=H.map,N++,fe.updateMatrices(H),H.castShadow&&J++),s.spotLightMatrix[D]=fe.matrix,H.castShadow){const Ee=i.get(H);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize=fe.mapSize,s.spotShadow[D]=Ee,s.spotShadowMap[D]=ce,y++}D++}else if(H.isRectAreaLight){const ne=t.get(H);ne.color.copy(re).multiplyScalar(X),ne.halfWidth.set(H.width*.5,0,0),ne.halfHeight.set(0,H.height*.5,0),s.rectArea[z]=ne,z++}else if(H.isPointLight){const ne=t.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity),ne.distance=H.distance,ne.decay=H.decay,H.castShadow){const fe=H.shadow,Ee=i.get(H);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize=fe.mapSize,Ee.shadowCameraNear=fe.camera.near,Ee.shadowCameraFar=fe.camera.far,s.pointShadow[E]=Ee,s.pointShadowMap[E]=ce,s.pointShadowMatrix[E]=H.shadow.matrix,P++}s.point[E]=ne,E++}else if(H.isHemisphereLight){const ne=t.get(H);ne.skyColor.copy(H.color).multiplyScalar(X),ne.groundColor.copy(H.groundColor).multiplyScalar(X),s.hemi[U]=ne,U++}}z>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const j=s.hash;(j.sunLength!==S||j.directionalLength!==M||j.pointLength!==E||j.spotLength!==D||j.rectAreaLength!==z||j.hemiLength!==U||j.numSunShadows!==T||j.numDirectionalShadows!==F||j.numPointShadows!==P||j.numSpotShadows!==y||j.numSpotMaps!==N||j.numLightProbes!==k)&&(s.sun.length=S,s.directional.length=M,s.spot.length=D,s.rectArea.length=z,s.point.length=E,s.hemi.length=U,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=L,s.sunShadowCascade.length=L,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.directionalShadowMatrix.length=F,s.pointShadow.length=P,s.pointShadowMap.length=P,s.pointShadowMatrix.length=P,s.spotShadow.length=y,s.spotShadowMap.length=y,s.spotLightMatrix.length=y+N-J,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=k,j.sunLength=S,j.directionalLength=M,j.pointLength=E,j.spotLength=D,j.rectAreaLength=z,j.hemiLength=U,j.numSunShadows=T,j.numDirectionalShadows=F,j.numPointShadows=P,j.numSpotShadows=y,j.numSpotMaps=N,j.numLightProbes=k,s.version=aC++)}function m(p,_){let g=0,x=0,S=0,T=0,L=0,M=0;const E=_.matrixWorldInverse;for(let D=0,z=p.length;D<z;D++){const U=p[D];if(U.isSunLight){const F=s.sun[g];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(E),g++}else if(U.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(E),x++}else if(U.isSpotLight){const F=s.spot[T];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(E),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(E),T++}else if(U.isRectAreaLight){const F=s.rectArea[L];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(E),d.identity(),c.copy(U.matrixWorld),c.premultiply(E),d.extractRotation(c),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),L++}else if(U.isPointLight){const F=s.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(E),S++}else if(U.isHemisphereLight){const F=s.hemi[M];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(E),M++}}}return{setup:h,setupView:m,state:s}}function fS(o){const t=new rC(o),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function d(g){g.isLightProbeGrid?l.push(g):i.push(g)}function h(g){s.push(g)}function m(){t.setup(i),l.sort((g,x)=>g.priority-x.priority||g.id-x.id)}function p(g){t.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function oC(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new fS(o),t.set(l,[h])):c>=d.length?(h=new fS(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const lC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uC=`uniform sampler2D shadow_pass;
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
}`,cC=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],fC=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],dS=new fn,Vl=new oe,Pp=new oe;function dC(o,t,i){let s=new _f;const l=new Pt,c=new Pt,d=new mn,h=new CT,m=new wT,p={},_=i.maxTextureSize,g={[dr]:li,[li]:dr,[Ha]:Ha},x=new Is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:lC,fragmentShader:uC}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Ya;T.setAttribute("position",new Xa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new mr(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let E=this.type;this.render=function(P,y,N){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===ub&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tf);const J=o.getRenderTarget(),k=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),se=o.state;se.setBlending(wo),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const de=E!==this.type;de&&y.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(re=>re.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,re=P.length;H<re;H++){const X=P[H],q=X.shadow;if(q===void 0){ft("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ce=q.getFrameExtents();l.multiply(ce),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ce.x),l.x=c.x*ce.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ce.y),l.y=c.y*ce.y,q.mapSize.y=c.y));const ne=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ne,q.map===null||de===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Wl){if(X.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ma(l.x,l.y,{format:hr,type:_a,minFilter:oi,magFilter:oi,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new Oo(l.x,l.y,da),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=Ps,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Vn,q.map.depthTexture.magFilter=Vn}else X.isPointLight?(q.map=new jm(l.x),q.map.depthTexture=new YS(l.x,ga)):(q.map=new ma(l.x,l.y),q.map.depthTexture=new Oo(l.x,l.y,ga)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=Ps,this.type===tf?(q.map.depthTexture.compareFunction=ne?zS:IS,q.map.depthTexture.minFilter=oi,q.map.depthTexture.magFilter=oi):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Vn,q.map.depthTexture.magFilter=Vn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==l.x||q.map.height!==l.y)&&q.map.setSize(l.x,l.y);const fe=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,N);const Ee=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:N.layers;for(let ke=0;ke<fe;ke++){const $e=q.getCamera(ke);if(X.isPointLight){const w=q.camera,Q=q.matrix,ve=X.distance||w.far;ve!==w.far&&(w.far=ve,w.updateProjectionMatrix()),Vl.setFromMatrixPosition(X.matrixWorld),w.position.copy(Vl),Pp.copy(w.position),Pp.add(cC[ke]),w.up.copy(fC[ke]),w.lookAt(Pp),w.updateMatrixWorld(),Q.makeTranslation(-Vl.x,-Vl.y,-Vl.z),dS.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),q._frustum.setFromProjectionMatrix(dS,w.coordinateSystem,w.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,ke),o.clear();else{ke===0&&(o.setRenderTarget(q.map),o.clear());const w=q.getViewport(ke);d.set(c.x*w.x,c.y*w.y,c.x*w.z,c.y*w.w),se.viewport(d)}s=q.getFrustum(ke),U(y,N,$e,X,Ee,this.type)}q.isPointLightShadow!==!0&&this.type===Wl&&D(q,N),q.needsUpdate=!1}E=this.type,M.needsUpdate=!1,o.setRenderTarget(J,k,j)};function D(P,y){const N=t.update(L);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null?P.mapPass=new ma(l.x,l.y,{format:hr,type:_a}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(y,null,N,x,L,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value.set(P.map.width,P.map.height),S.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(y,null,N,S,L,null)}function z(P,y,N,J){let k=null;const j=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)k=j;else if(k=N.isPointLight===!0?m:h,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const se=k.uuid,de=y.uuid;let H=p[se];H===void 0&&(H={},p[se]=H);let re=H[de];re===void 0&&(re=k.clone(),H[de]=re,y.addEventListener("dispose",F)),k=re}if(k.visible=y.visible,k.wireframe=y.wireframe,J===Wl?k.side=y.shadowSide!==null?y.shadowSide:y.side:k.side=y.shadowSide!==null?y.shadowSide:g[y.side],k.alphaMap=y.alphaMap,k.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,k.map=y.map,k.clipShadows=y.clipShadows,k.clippingPlanes=y.clippingPlanes,k.clipIntersection=y.clipIntersection,k.displacementMap=y.displacementMap,k.displacementScale=y.displacementScale,k.displacementBias=y.displacementBias,k.wireframeLinewidth=y.wireframeLinewidth,k.linewidth=y.linewidth,N.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const se=o.properties.get(k);se.light=N}return k}function U(P,y,N,J,k,j){if(P.visible===!1)return;if(P.layers.test(k)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&j===Wl)&&(!P.frustumCulled||P.intersectsFrustum(s))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const H=t.update(P),re=P.material;if(Array.isArray(re)){const X=H.groups;for(let q=0,ce=X.length;q<ce;q++){const ne=X[q],fe=re[ne.materialIndex];if(fe&&fe.visible){const Ee=z(P,fe,J,j);P.onBeforeShadow(o,P,y,N,H,Ee,ne),o.renderBufferDirect(N,null,H,Ee,P,ne),P.onAfterShadow(o,P,y,N,H,Ee,ne)}}}else if(re.visible){const X=z(P,re,J,j);P.onBeforeShadow(o,P,y,N,H,X,null),o.renderBufferDirect(N,null,H,X,P,null),P.onAfterShadow(o,P,y,N,H,X,null)}}const de=P.children;for(let H=0,re=de.length;H<re;H++)U(de[H],y,N,J,k,j)}function F(P){P.target.removeEventListener("dispose",F);for(const N in p){const J=p[N],k=P.target.uuid;k in J&&(J[k].dispose(),delete J[k])}}}function hC(o,t){function i(){let B=!1;const me=new mn;let pe=null;const Oe=new mn(0,0,0,0);return{setMask:function(we){pe!==we&&!B&&(o.colorMask(we,we,we,we),pe=we)},setLocked:function(we){B=we},setClear:function(we,Pe,Je,nt,Ae){Ae===!0&&(we*=nt,Pe*=nt,Je*=nt),me.set(we,Pe,Je,nt),Oe.equals(me)===!1&&(o.clearColor(we,Pe,Je,nt),Oe.copy(me))},reset:function(){B=!1,pe=null,Oe.set(-1,0,0,0)}}}function s(){let B=!1,me=!1,pe=null,Oe=null,we=null;return{setReversed:function(Pe){if(me!==Pe){const Je=t.get("EXT_clip_control");Pe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),me=Pe;const nt=we;we=null,this.setClear(nt)}},getReversed:function(){return me},setTest:function(Pe){Pe?Te(o.DEPTH_TEST):ye(o.DEPTH_TEST)},setMask:function(Pe){pe!==Pe&&!B&&(o.depthMask(Pe),pe=Pe)},setFunc:function(Pe){if(me&&(Pe=Xb[Pe]),Oe!==Pe){switch(Pe){case Hp:o.depthFunc(o.NEVER);break;case Gp:o.depthFunc(o.ALWAYS);break;case Vp:o.depthFunc(o.LESS);break;case Zl:o.depthFunc(o.LEQUAL);break;case kp:o.depthFunc(o.EQUAL);break;case Xp:o.depthFunc(o.GEQUAL);break;case Wp:o.depthFunc(o.GREATER);break;case qp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Oe=Pe}},setLocked:function(Pe){B=Pe},setClear:function(Pe){we!==Pe&&(we=Pe,me&&(Pe=1-Pe),o.clearDepth(Pe))},reset:function(){B=!1,pe=null,Oe=null,we=null,me=!1}}}function l(){let B=!1,me=null,pe=null,Oe=null,we=null,Pe=null,Je=null,nt=null,Ae=null;return{setTest:function(qe){B||(qe?Te(o.STENCIL_TEST):ye(o.STENCIL_TEST))},setMask:function(qe){me!==qe&&!B&&(o.stencilMask(qe),me=qe)},setFunc:function(qe,pt,Ge){(pe!==qe||Oe!==pt||we!==Ge)&&(o.stencilFunc(qe,pt,Ge),pe=qe,Oe=pt,we=Ge)},setOp:function(qe,pt,Ge){(Pe!==qe||Je!==pt||nt!==Ge)&&(o.stencilOp(qe,pt,Ge),Pe=qe,Je=pt,nt=Ge)},setLocked:function(qe){B=qe},setClear:function(qe){Ae!==qe&&(o.clearStencil(qe),Ae=qe)},reset:function(){B=!1,me=null,pe=null,Oe=null,we=null,Pe=null,Je=null,nt=null,Ae=null}}}const c=new i,d=new s,h=new l;let m={};const p=new WeakMap;let _={},g={},x={},S=new WeakMap,T=[],L=null,M=!1,E=null,D=null,z=null,U=null,F=null,P=null,y=null,N=new Ht(0,0,0),J=0,k=!1,j=null,se=null,de=null,H=null,re=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ce=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=ce>=1):ne.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=ce>=2);let fe=null,Ee={};const ke=o.getParameter(o.SCISSOR_BOX),$e=o.getParameter(o.VIEWPORT),w=new mn().fromArray(ke),Q=new mn().fromArray($e);function ve(B,me,pe,Oe){const we=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(B,Pe),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<pe;Je++)B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY?o.texImage3D(me,0,o.RGBA,1,1,Oe,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(me+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return Pe}const be={};be[o.TEXTURE_2D]=ve(o.TEXTURE_2D,o.TEXTURE_2D,1),be[o.TEXTURE_CUBE_MAP]=ve(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[o.TEXTURE_2D_ARRAY]=ve(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),be[o.TEXTURE_3D]=ve(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Te(o.DEPTH_TEST),d.setFunc(Zl),Nt(!1),at(gx),Te(o.CULL_FACE),xt(wo);function Te(B){_[B]!==!0&&(o.enable(B),_[B]=!0)}function ye(B){_[B]!==!1&&(o.disable(B),_[B]=!1)}function Xe(B,me){return x[B]!==me?(o.bindFramebuffer(B,me),x[B]=me,B===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=me),B===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=me),!0):!1}function xe(B,me){let pe=T,Oe=!1;if(B){pe=S.get(me),pe===void 0&&(pe=[],S.set(me,pe));const we=B.textures;if(pe.length!==we.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,Je=we.length;Pe<Je;Pe++)pe[Pe]=o.COLOR_ATTACHMENT0+Pe;pe.length=we.length,Oe=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,Oe=!0);Oe&&o.drawBuffers(pe)}function Ce(B){return L!==B?(o.useProgram(B),L=B,!0):!1}const ct={[Mo]:o.FUNC_ADD,[fb]:o.FUNC_SUBTRACT,[db]:o.FUNC_REVERSE_SUBTRACT};ct[hb]=o.MIN,ct[pb]=o.MAX;const ot={[mb]:o.ZERO,[gb]:o.ONE,[_b]:o.SRC_COLOR,[vS]:o.SRC_ALPHA,[Eb]:o.SRC_ALPHA_SATURATE,[Mb]:o.DST_COLOR,[xb]:o.DST_ALPHA,[vb]:o.ONE_MINUS_SRC_COLOR,[xS]:o.ONE_MINUS_SRC_ALPHA,[yb]:o.ONE_MINUS_DST_COLOR,[Sb]:o.ONE_MINUS_DST_ALPHA,[bb]:o.CONSTANT_COLOR,[Tb]:o.ONE_MINUS_CONSTANT_COLOR,[Ab]:o.CONSTANT_ALPHA,[Rb]:o.ONE_MINUS_CONSTANT_ALPHA};function xt(B,me,pe,Oe,we,Pe,Je,nt,Ae,qe){if(B===wo){M===!0&&(ye(o.BLEND),M=!1);return}if(M===!1&&(Te(o.BLEND),M=!0),B!==cb){if(B!==E||qe!==k){if((D!==Mo||F!==Mo)&&(o.blendEquation(o.FUNC_ADD),D=Mo,F=Mo),qe)switch(B){case jl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fp:o.blendFunc(o.ONE,o.ONE);break;case _x:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ft("WebGLState: Invalid blending: ",B);break}else switch(B){case jl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _x:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vx:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",B);break}z=null,U=null,P=null,y=null,N.set(0,0,0),J=0,E=B,k=qe}return}we=we||me,Pe=Pe||pe,Je=Je||Oe,(me!==D||we!==F)&&(o.blendEquationSeparate(ct[me],ct[we]),D=me,F=we),(pe!==z||Oe!==U||Pe!==P||Je!==y)&&(o.blendFuncSeparate(ot[pe],ot[Oe],ot[Pe],ot[Je]),z=pe,U=Oe,P=Pe,y=Je),(nt.equals(N)===!1||Ae!==J)&&(o.blendColor(nt.r,nt.g,nt.b,Ae),N.copy(nt),J=Ae),E=B,k=!1}function Ot(B,me){B.side===Ha?ye(o.CULL_FACE):Te(o.CULL_FACE);let pe=B.side===li;me&&(pe=!pe),Nt(pe),B.blending===jl&&B.transparent===!1?xt(wo):xt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),c.setMask(B.colorWrite);const Oe=B.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),jt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Te(o.SAMPLE_ALPHA_TO_COVERAGE):ye(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(B){j!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),j=B)}function at(B){B!==ob?(Te(o.CULL_FACE),B!==se&&(B===gx?o.cullFace(o.BACK):B===lb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ye(o.CULL_FACE),se=B}function Yt(B){B!==de&&(q&&o.lineWidth(B),de=B)}function jt(B,me,pe){B?(Te(o.POLYGON_OFFSET_FILL),(H!==me||re!==pe)&&(H=me,re=pe,d.getReversed()&&(me=-me,pe=-pe),o.polygonOffset(me,pe))):ye(o.POLYGON_OFFSET_FILL)}function Jt(B){B?Te(o.SCISSOR_TEST):ye(o.SCISSOR_TEST)}function En(B){B===void 0&&(B=o.TEXTURE0+X-1),fe!==B&&(o.activeTexture(B),fe=B)}function bn(B,me,pe){pe===void 0&&(fe===null?pe=o.TEXTURE0+X-1:pe=fe);let Oe=Ee[pe];Oe===void 0&&(Oe={type:void 0,texture:void 0},Ee[pe]=Oe),(Oe.type!==B||Oe.texture!==me)&&(fe!==pe&&(o.activeTexture(pe),fe=pe),o.bindTexture(B,me||be[B]),Oe.type=B,Oe.texture=me)}function W(){const B=Ee[fe];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function wn(){try{o.compressedTexImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Ut(){try{o.compressedTexImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Zt(){try{o.texSubImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Be(){try{o.texSubImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Kt(){try{o.compressedTexSubImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function tt(){try{o.compressedTexSubImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function lt(){try{o.texStorage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function O(){try{o.texStorage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function A(){try{o.texImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function ee(){try{o.texImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Re(B){return g[B]!==void 0?g[B]:o.getParameter(B)}function Me(B,me){g[B]!==me&&(o.pixelStorei(B,me),g[B]=me)}function Le(B){w.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),w.copy(B))}function Ie(B){Q.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),Q.copy(B))}function he(B,me){let pe=p.get(me);pe===void 0&&(pe=new WeakMap,p.set(me,pe));let Oe=pe.get(B);Oe===void 0&&(Oe=o.getUniformBlockIndex(me,B.name),o.uniformBlockBinding(me,Oe,Oe),pe.set(B,Oe))}function ge(B,me,pe){const we=p.get(me).get(B);m[we]!==pe&&(o.bindBufferBase(o.UNIFORM_BUFFER,we,pe),m[we]=pe)}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},g={},fe=null,Ee={},x={},m={},S=new WeakMap,T=[],L=null,M=!1,E=null,D=null,z=null,U=null,F=null,P=null,y=null,N=new Ht(0,0,0),J=0,k=!1,j=null,se=null,de=null,H=null,re=null,w.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Te,disable:ye,bindFramebuffer:Xe,drawBuffers:xe,useProgram:Ce,setBlending:xt,setMaterial:Ot,setFlipSided:Nt,setCullFace:at,setLineWidth:Yt,setPolygonOffset:jt,setScissorTest:Jt,activeTexture:En,bindTexture:bn,unbindTexture:W,compressedTexImage2D:wn,compressedTexImage3D:Ut,texImage2D:A,texImage3D:ee,pixelStorei:Me,getParameter:Re,updateUBOMapping:he,uniformBlockBinding:ge,texStorage2D:lt,texStorage3D:O,texSubImage2D:Zt,texSubImage3D:Be,compressedTexSubImage2D:Kt,compressedTexSubImage3D:tt,scissor:Le,viewport:Ie,reset:Ue}}function pC(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,g=new Set;let x;const S=new WeakMap,T=new Set,L=new FinalizationRegistry(O=>T.delete(O));let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return M?new OffscreenCanvas(O,A):gf("canvas")}function D(O,A,ee){let Re=1;const Me=lt(O);if((Me.width>ee||Me.height>ee)&&(Re=ee/Math.max(Me.width,Me.height)),Re<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Le=Math.floor(Re*Me.width),Ie=Math.floor(Re*Me.height);x===void 0&&(x=E(Le,Ie));const he=A?E(Le,Ie):x;return he.width=Le,he.height=Ie,he.getContext("2d").drawImage(O,0,0,Le,Ie),ft("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Le+"x"+Ie+")."),he}else return"data"in O&&ft("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),O;return O}function z(O){return O.generateMipmaps}function U(O){o.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,A,ee,Re,Me,Le=!1){if(O!==null){if(o[O]!==void 0)return o[O];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ie;Re&&(Ie=t.get("EXT_texture_norm16"),Ie||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=A;if(A===o.RED&&(ee===o.FLOAT&&(he=o.R32F),ee===o.HALF_FLOAT&&(he=o.R16F),ee===o.UNSIGNED_BYTE&&(he=o.R8),ee===o.UNSIGNED_SHORT&&Ie&&(he=Ie.R16_EXT),ee===o.SHORT&&Ie&&(he=Ie.R16_SNORM_EXT)),A===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.R8UI),ee===o.UNSIGNED_SHORT&&(he=o.R16UI),ee===o.UNSIGNED_INT&&(he=o.R32UI),ee===o.BYTE&&(he=o.R8I),ee===o.SHORT&&(he=o.R16I),ee===o.INT&&(he=o.R32I)),A===o.RG&&(ee===o.FLOAT&&(he=o.RG32F),ee===o.HALF_FLOAT&&(he=o.RG16F),ee===o.UNSIGNED_BYTE&&(he=o.RG8),ee===o.UNSIGNED_SHORT&&Ie&&(he=Ie.RG16_EXT),ee===o.SHORT&&Ie&&(he=Ie.RG16_SNORM_EXT)),A===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.RG8UI),ee===o.UNSIGNED_SHORT&&(he=o.RG16UI),ee===o.UNSIGNED_INT&&(he=o.RG32UI),ee===o.BYTE&&(he=o.RG8I),ee===o.SHORT&&(he=o.RG16I),ee===o.INT&&(he=o.RG32I)),A===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(he=o.RGB16UI),ee===o.UNSIGNED_INT&&(he=o.RGB32UI),ee===o.BYTE&&(he=o.RGB8I),ee===o.SHORT&&(he=o.RGB16I),ee===o.INT&&(he=o.RGB32I)),A===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),ee===o.UNSIGNED_INT&&(he=o.RGBA32UI),ee===o.BYTE&&(he=o.RGBA8I),ee===o.SHORT&&(he=o.RGBA16I),ee===o.INT&&(he=o.RGBA32I)),A===o.RGB&&(ee===o.UNSIGNED_SHORT&&Ie&&(he=Ie.RGB16_EXT),ee===o.SHORT&&Ie&&(he=Ie.RGB16_SNORM_EXT),ee===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),ee===o.UNSIGNED_INT_10F_11F_11F_REV&&(he=o.R11F_G11F_B10F)),A===o.RGBA){const ge=Le?pf:wt.getTransfer(Me);ee===o.FLOAT&&(he=o.RGBA32F),ee===o.HALF_FLOAT&&(he=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(he=ge===qt?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT&&Ie&&(he=Ie.RGBA16_EXT),ee===o.SHORT&&Ie&&(he=Ie.RGBA16_SNORM_EXT),ee===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function y(O,A){let ee;return O?A===null||A===ga||A===Uo?ee=o.DEPTH24_STENCIL8:A===da?ee=o.DEPTH32F_STENCIL8:A===Ql&&(ee=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ga||A===Uo?ee=o.DEPTH_COMPONENT24:A===da?ee=o.DEPTH_COMPONENT32F:A===Ql&&(ee=o.DEPTH_COMPONENT16),ee}function N(O,A){return z(O)===!0||O.isFramebufferTexture&&O.minFilter!==Vn&&O.minFilter!==oi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function J(O){const A=new WeakRef(O);s.get(O).__ref=A,T.add(A),L.register(O,A,A)}function k(O){const A=s.get(O).__ref;A!==void 0&&(T.delete(A),L.unregister(A))}function j(O){de(O.target)}function se(O){H(O.target)}function de(O){O.removeEventListener("dispose",j),k(O),X(O),O.isVideoTexture&&_.delete(O),O.isHTMLTexture&&g.delete(O)}function H(O){O.removeEventListener("dispose",se),k(O),ce(O)}function re(){for(const O of T){const A=O.deref();A!==void 0&&(A.isRenderTarget===!0?H(A):de(A))}T.clear(),g.clear()}function X(O){const A=s.get(O);if(A.__webglInit===void 0)return;const ee=O.source,Re=S.get(ee);if(Re){const Me=Re[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&q(O),Object.keys(Re).length===0&&S.delete(ee)}s.remove(O)}function q(O){const A=s.get(O);o.deleteTexture(A.__webglTexture);const ee=O.source,Re=S.get(ee);delete Re[A.__cacheKey],d.memory.textures--}function ce(O){const A=s.get(O);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ee=O.depthTexture;if(ee&&ee.renderTarget===O&&de(ee),O.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(A.__webglFramebuffer[Me]))for(let Le=0;Le<A.__webglFramebuffer[Me].length;Le++)o.deleteFramebuffer(A.__webglFramebuffer[Me][Le]);else o.deleteFramebuffer(A.__webglFramebuffer[Me]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[Me])}else{if(Array.isArray(A.__webglFramebuffer))for(let Me=0;Me<A.__webglFramebuffer.length;Me++)o.deleteFramebuffer(A.__webglFramebuffer[Me]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Me=0;Me<A.__webglColorRenderbuffer.length;Me++)A.__webglColorRenderbuffer[Me]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[Me]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Re=O.textures;for(let Me=0,Le=Re.length;Me<Le;Me++){const Ie=s.get(Re[Me]);Ie.__webglTexture&&(o.deleteTexture(Ie.__webglTexture),d.memory.textures--),s.remove(Re[Me])}s.remove(O)}let ne=0;function fe(){ne=0}function Ee(){return ne}function ke(O){ne=O}function $e(){const O=ne;return O>=l.maxTextures&&ft("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),ne+=1,O}function w(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.mipmapsAutoUpdate),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function Q(O,A){const ee=s.get(O);if(O.isVideoTexture&&Kt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){const Re=O.image;if(Re===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(ee,O,A);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+A)}function ve(O,A){const ee=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Ot(ee,O,A);return}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+A)}function be(O,A){const ee=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Ot(ee,O,A);return}i.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+A)}function Te(O,A){const ee=s.get(O);if(O.version>0&&ee.__version!==O.version){Nt(ee,O,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+A)}const ye={[Yp]:o.REPEAT,[Ga]:o.CLAMP_TO_EDGE,[jp]:o.MIRRORED_REPEAT},Xe={[Vn]:o.NEAREST,[Nb]:o.NEAREST_MIPMAP_NEAREST,[Rc]:o.NEAREST_MIPMAP_LINEAR,[oi]:o.LINEAR,[lp]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},xe={[Ob]:o.NEVER,[BS]:o.ALWAYS,[Pb]:o.LESS,[IS]:o.LEQUAL,[Ib]:o.EQUAL,[zS]:o.GEQUAL,[zb]:o.GREATER,[Bb]:o.NOTEQUAL};function Ce(O,A){if(A.type===da&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===oi||A.magFilter===lp||A.magFilter===Rc||A.magFilter===Us||A.minFilter===oi||A.minFilter===lp||A.minFilter===Rc||A.minFilter===Us)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ye[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ye[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ye[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Xe[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Xe[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,xe[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Vn||A.minFilter!==Rc&&A.minFilter!==Us||A.type===da&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ee=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function ct(O,A){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",j),J(A));const Re=A.source;let Me=S.get(Re);Me===void 0&&(Me={},S.set(Re,Me));const Le=w(A);if(Le!==O.__cacheKey){Me[Le]===void 0&&(Me[Le]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),Me[Le].usedTimes++;const Ie=Me[O.__cacheKey];Ie!==void 0&&(Me[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&q(A)),O.__cacheKey=Le,O.__webglTexture=Me[Le].texture}return ee}function ot(O,A,ee){return Math.floor(Math.floor(O/ee)/A)}function xt(O,A,ee,Re){const Le=O.updateRanges;if(Le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,ee,Re,A.data);else{Le.sort((B,me)=>B.start-me.start);let Ie=0;for(let B=1;B<Le.length;B++){const me=Le[Ie],pe=Le[B],Oe=me.start+me.count,we=ot(pe.start,A.width,4),Pe=ot(me.start,A.width,4);pe.start<=Oe+1&&we===Pe&&ot(pe.start+pe.count-1,A.width,4)===we?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++Ie,Le[Ie]=pe)}Le.length=Ie+1;const he=i.getParameter(o.UNPACK_ROW_LENGTH),ge=i.getParameter(o.UNPACK_SKIP_PIXELS),Ue=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let B=0,me=Le.length;B<me;B++){const pe=Le[B],Oe=Math.floor(pe.start/4),we=Math.ceil(pe.count/4),Pe=Oe%A.width,Je=Math.floor(Oe/A.width),nt=we,Ae=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(o.UNPACK_SKIP_ROWS,Je),i.texSubImage2D(o.TEXTURE_2D,0,Pe,Je,nt,Ae,ee,Re,A.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,he),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ue)}}function Ot(O,A,ee){let Re=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Re=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Re=o.TEXTURE_3D);const Me=ct(O,A),Le=A.source;i.bindTexture(Re,O.__webglTexture,o.TEXTURE0+ee);const Ie=s.get(Le);if(Le.version!==Ie.__version||Me===!0){if(i.activeTexture(o.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Ae=wt.getPrimaries(wt.workingColorSpace),qe=A.colorSpace===Ls?null:wt.getPrimaries(A.colorSpace),pt=A.colorSpace===Ls||Ae===qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}i.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment);let ge=D(A.image,!1,l.maxTextureSize);ge=tt(A,ge);const Ue=c.convert(A.format,A.colorSpace),B=c.convert(A.type);let me=P(A.internalFormat,Ue,B,A.normalized,A.colorSpace,A.isVideoTexture);Ce(Re,A);let pe;const Oe=A.mipmaps,we=A.isVideoTexture!==!0,Pe=Ie.__version===void 0||Me===!0,Je=Le.dataReady,nt=N(A,ge);if(A.isDepthTexture)me=y(A.format===Os,A.type),Pe&&(we?i.texStorage2D(o.TEXTURE_2D,1,me,ge.width,ge.height):i.texImage2D(o.TEXTURE_2D,0,me,ge.width,ge.height,0,Ue,B,null));else if(A.isDataTexture)if(Oe.length>0){we&&Pe&&i.texStorage2D(o.TEXTURE_2D,nt,me,Oe[0].width,Oe[0].height);for(let Ae=0,qe=Oe.length;Ae<qe;Ae++)pe=Oe[Ae],we?Je&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,pe.width,pe.height,Ue,B,pe.data):i.texImage2D(o.TEXTURE_2D,Ae,me,pe.width,pe.height,0,Ue,B,pe.data);A.generateMipmaps=!1}else we?(Pe&&i.texStorage2D(o.TEXTURE_2D,nt,me,ge.width,ge.height),Je&&xt(A,ge,Ue,B)):i.texImage2D(o.TEXTURE_2D,0,me,ge.width,ge.height,0,Ue,B,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){we&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,nt,me,Oe[0].width,Oe[0].height,ge.depth);for(let Ae=0,qe=Oe.length;Ae<qe;Ae++)if(pe=Oe[Ae],A.format!==ha)if(Ue!==null)if(we){if(Je)if(A.layerUpdates.size>0){const pt=Wx(pe.width,pe.height,A.format,A.type);for(const Ge of A.layerUpdates){const It=pe.data.subarray(Ge*pt/pe.data.BYTES_PER_ELEMENT,(Ge+1)*pt/pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,Ge,pe.width,pe.height,1,Ue,It)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,pe.width,pe.height,ge.depth,Ue,pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ae,me,pe.width,pe.height,ge.depth,0,pe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Je&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,pe.width,pe.height,ge.depth,Ue,B,pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ae,me,pe.width,pe.height,ge.depth,0,Ue,B,pe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{we&&Pe&&i.texStorage2D(o.TEXTURE_2D,nt,me,Oe[0].width,Oe[0].height);for(let Ae=0,qe=Oe.length;Ae<qe;Ae++)pe=Oe[Ae],A.format!==ha?Ue!==null?we?Je&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ae,0,0,pe.width,pe.height,Ue,pe.data):i.compressedTexImage2D(o.TEXTURE_2D,Ae,me,pe.width,pe.height,0,pe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Je&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,pe.width,pe.height,Ue,B,pe.data):i.texImage2D(o.TEXTURE_2D,Ae,me,pe.width,pe.height,0,Ue,B,pe.data)}else if(A.isDataArrayTexture)if(we){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,nt,me,ge.width,ge.height,ge.depth),Je)if(A.layerUpdates.size>0){const Ae=Wx(ge.width,ge.height,A.format,A.type);for(const qe of A.layerUpdates){const pt=ge.data.subarray(qe*Ae/ge.data.BYTES_PER_ELEMENT,(qe+1)*Ae/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,qe,ge.width,ge.height,1,Ue,B,pt)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ue,B,ge.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,me,ge.width,ge.height,ge.depth,0,Ue,B,ge.data);else if(A.isData3DTexture)we?(Pe&&i.texStorage3D(o.TEXTURE_3D,nt,me,ge.width,ge.height,ge.depth),Je&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ue,B,ge.data)):i.texImage3D(o.TEXTURE_3D,0,me,ge.width,ge.height,ge.depth,0,Ue,B,ge.data);else if(A.isFramebufferTexture){if(Pe)if(we)i.texStorage2D(o.TEXTURE_2D,nt,me,ge.width,ge.height);else{let Ae=ge.width,qe=ge.height;for(let pt=0;pt<nt;pt++)i.texImage2D(o.TEXTURE_2D,pt,me,Ae,qe,0,Ue,B,null),Ae>>=1,qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in o){const Ae=o.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),ge.parentNode!==Ae){Ae.appendChild(ge),g.add(A),Ae.onpaint=qe=>{const pt=qe.changedElements;for(const Ge of g)pt.includes(Ge.image)&&(Ge.needsUpdate=!0)},Ae.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ge);else{const pt=o.RGBA,Ge=o.RGBA,It=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,pt,Ge,It,ge)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(we&&Pe){const Ae=lt(Oe[0]);i.texStorage2D(o.TEXTURE_2D,nt,me,Ae.width,Ae.height)}for(let Ae=0,qe=Oe.length;Ae<qe;Ae++)pe=Oe[Ae],we?Je&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Ue,B,pe):i.texImage2D(o.TEXTURE_2D,Ae,me,Ue,B,pe);A.generateMipmaps=!1}else if(we){if(Pe){const Ae=lt(ge);i.texStorage2D(o.TEXTURE_2D,nt,me,Ae.width,Ae.height)}Je&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,B,ge)}else i.texImage2D(o.TEXTURE_2D,0,me,Ue,B,ge);z(A)&&A.mipmapsAutoUpdate===!0&&U(Re),Ie.__version=Le.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Nt(O,A,ee){if(A.image.length!==6)return;const Re=ct(O,A),Me=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ee);const Le=s.get(Me);if(Me.version!==Le.__version||Re===!0){i.activeTexture(o.TEXTURE0+ee);const Ie=wt.getPrimaries(wt.workingColorSpace),he=A.colorSpace===Ls?null:wt.getPrimaries(A.colorSpace),ge=A.colorSpace===Ls||Ie===he?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,me=[];for(let Ge=0;Ge<6;Ge++)!Ue&&!B?me[Ge]=D(A.image[Ge],!0,l.maxCubemapSize):me[Ge]=B?A.image[Ge].image:A.image[Ge],me[Ge]=tt(A,me[Ge]);const pe=me[0],Oe=c.convert(A.format,A.colorSpace),we=c.convert(A.type);let Pe=P(A.internalFormat,Oe,we,A.normalized,A.colorSpace);const Je=A.isVideoTexture!==!0,nt=Le.__version===void 0||Re===!0,Ae=Me.dataReady;let qe=N(A,pe);Ce(o.TEXTURE_CUBE_MAP,A);let pt;if(A.isDepthTexture){if(Pe=y(A.format===Os,A.type),nt)if(Je)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,Pe,pe.width,pe.height);else for(let Ge=0;Ge<6;Ge++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Pe,pe.width,pe.height,0,Oe,we,null)}else if(Ue){Je&&nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,qe,Pe,pe.width,pe.height);for(let Ge=0;Ge<6;Ge++){pt=me[Ge].mipmaps;for(let It=0;It<pt.length;It++){const rn=pt[It];A.format!==ha?Oe!==null?Je?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It,0,0,rn.width,rn.height,Oe,rn.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It,Pe,rn.width,rn.height,0,rn.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It,0,0,rn.width,rn.height,Oe,we,rn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It,Pe,rn.width,rn.height,0,Oe,we,rn.data)}}}else{if(pt=A.mipmaps,Je&&nt){pt.length>0&&qe++;const Ge=lt(me[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,qe,Pe,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if(B){Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,me[Ge].width,me[Ge].height,Oe,we,me[Ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Pe,me[Ge].width,me[Ge].height,0,Oe,we,me[Ge].data);for(let It=0;It<pt.length;It++){const ci=pt[It].image[Ge].image;Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It+1,0,0,ci.width,ci.height,Oe,we,ci.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It+1,Pe,ci.width,ci.height,0,Oe,we,ci.data)}}else{Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Oe,we,me[Ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Pe,Oe,we,me[Ge]);for(let It=0;It<pt.length;It++){const rn=pt[It];Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It+1,0,0,Oe,we,rn.image[Ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,It+1,Pe,Oe,we,rn.image[Ge])}}}z(A)&&A.mipmapsAutoUpdate===!0&&U(o.TEXTURE_CUBE_MAP),Le.__version=Me.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function at(O,A,ee,Re,Me,Le){const Ie=c.convert(ee.format,ee.colorSpace),he=c.convert(ee.type),ge=P(ee.internalFormat,Ie,he,ee.normalized,ee.colorSpace),Ue=s.get(A),B=s.get(ee);if(B.__renderTarget=A,!Ue.__hasExternalTextures){const me=Math.max(1,A.width>>Le),pe=Math.max(1,A.height>>Le);Me===o.TEXTURE_3D||Me===o.TEXTURE_2D_ARRAY?i.texImage3D(Me,Le,ge,me,pe,A.depth,0,Ie,he,null):i.texImage2D(Me,Le,ge,me,pe,0,Ie,he,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Be(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Re,Me,B.__webglTexture,0,Zt(A)):(Me===o.TEXTURE_2D||Me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Re,Me,B.__webglTexture,Le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(O,A,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const Re=A.depthTexture,Me=Re&&Re.isDepthTexture?Re.type:null,Le=y(A.stencilBuffer,Me),Ie=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Be(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt(A),Le,A.width,A.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt(A),Le,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Le,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,O)}else{const Re=A.textures;for(let Me=0;Me<Re.length;Me++){const Le=Re[Me],Ie=c.convert(Le.format,Le.colorSpace),he=c.convert(Le.type),ge=P(Le.internalFormat,Ie,he,Le.normalized,Le.colorSpace);Be(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt(A),ge,A.width,A.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt(A),ge,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ge,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function jt(O,A,ee){const Re=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=s.get(A.depthTexture);Me.__renderTarget=A;const Le=Re?A.depthTexture.image[0]:A.depthTexture.image;(!Me.__webglTexture||Le.width!==A.width||Le.height!==A.height)&&(Le.width=A.width,Le.height=A.height,A.depthTexture.needsUpdate=!0),Re?Te(A.depthTexture,0):Q(A.depthTexture,0);const Ie=Me.__webglTexture,he=Zt(A),ge=Re?o.TEXTURE_CUBE_MAP_POSITIVE_X+ee:o.TEXTURE_2D,Ue=A.depthTexture.format===Os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ps)Be(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ue,ge,Ie,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,Ue,ge,Ie,0);else if(A.depthTexture.format===Os)Be(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ue,ge,Ie,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,Ue,ge,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(O){const A=s.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const Re=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Re){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Re.removeEventListener("dispose",Me)};Re.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=Re}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let Re=0;Re<6;Re++)jt(A.__webglFramebuffer[Re],O,Re);else O.texture.mipmaps.length>0?jt(A.__webglFramebuffer[0],O,0):jt(A.__webglFramebuffer,O,0);else if(ee){A.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[Re]),A.__webglDepthbuffer[Re]===void 0)A.__webglDepthbuffer[Re]=o.createRenderbuffer(),Yt(A.__webglDepthbuffer[Re],O,!1);else{const Me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=A.__webglDepthbuffer[Re];o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Me,o.RENDERBUFFER,Le)}}else if(O.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Yt(A.__webglDepthbuffer,O,!1);else{const Me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Me,o.RENDERBUFFER,Le)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function En(O,A,ee){const Re=s.get(O);A!==void 0&&at(Re.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&Jt(O)}function bn(O){const A=O.texture,ee=s.get(O),Re=s.get(A);O.addEventListener("dispose",se),J(O);const Me=O.textures,Le=O.isWebGLCubeRenderTarget===!0,Ie=Me.length>1;if(Ie||(Re.__webglTexture===void 0&&(Re.__webglTexture=o.createTexture()),Re.__version=A.version,d.memory.textures++),Le){ee.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps.length>0){ee.__webglFramebuffer[he]=[];for(let ge=0;ge<A.mipmaps.length;ge++)ee.__webglFramebuffer[he][ge]=o.createFramebuffer()}else ee.__webglFramebuffer[he]=o.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)ee.__webglFramebuffer[he]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let he=0,ge=Me.length;he<ge;he++){const Ue=s.get(Me[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Be(O)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let he=0;he<Me.length;he++){const ge=Me[he];ee.__webglColorRenderbuffer[he]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);const Ue=c.convert(ge.format,ge.colorSpace),B=c.convert(ge.type),me=P(ge.internalFormat,Ue,B,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),pe=Zt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,me,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,ee.__webglColorRenderbuffer[he])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt(ee.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Le){i.bindTexture(o.TEXTURE_CUBE_MAP,Re.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)at(ee.__webglFramebuffer[he][ge],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else at(ee.__webglFramebuffer[he],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);z(A)?U(o.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),i.unbindTexture()}else if(Ie){for(let he=0,ge=Me.length;he<ge;he++){const Ue=Me[he],B=s.get(Ue);let me=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(me=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(me,B.__webglTexture),Ce(me,Ue),at(ee.__webglFramebuffer,O,Ue,o.COLOR_ATTACHMENT0+he,me,0),z(Ue)&&U(me)}i.unbindTexture()}else{let he=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(he,Re.__webglTexture),Ce(he,A),A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)at(ee.__webglFramebuffer[ge],O,A,o.COLOR_ATTACHMENT0,he,ge);else at(ee.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,he,0);z(A)?U(he):A.mipmaps.length>0&&o.texParameteri(he,o.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),i.unbindTexture()}O.depthBuffer&&Jt(O)}function W(O){const A=O.textures;for(let ee=0,Re=A.length;ee<Re;ee++){const Me=A[ee];if(z(Me)&&Me.mipmapsAutoUpdate===!0){const Le=F(O),Ie=s.get(Me).__webglTexture;i.bindTexture(Le,Ie),U(Le),i.unbindTexture()}}}const wn=[];function Ut(O){if(O.samples>0){if(Be(O)===!1){const A=O.textures,ee=O.width,Re=O.height;let Me=o.COLOR_BUFFER_BIT;const Le=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=s.get(O),he=A.length>1;if(he)for(let Ue=0;Ue<A.length;Ue++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Me|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Me|=o.STENCIL_BUFFER_BIT)),he){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const B=s.get(A[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,B,0)}o.blitFramebuffer(0,0,ee,Re,0,0,ee,Re,Me,o.NEAREST),m===!0&&(wn.length=0,wn.push(o.COLOR_ATTACHMENT0+Ue),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&wn.push(Le),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,wn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),he)for(let Ue=0;Ue<A.length;Ue++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const B=s.get(A[Ue]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,B,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&m){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Zt(O){return Math.min(l.maxSamples,O.samples)}function Be(O){const A=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Kt(O){const A=d.render.frame;_.get(O)!==A&&(_.set(O,A),O.update())}function tt(O,A){const ee=O.colorSpace,Re=O.format,Me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==hf&&ee!==Ls&&(wt.getTransfer(ee)===qt?(Re!==ha||Me!==Oi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",ee)),A}function lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=$e,this.resetTextureUnits=fe,this.getTextureUnits=Ee,this.setTextureUnits=ke,this.setTexture2D=Q,this.setTexture2DArray=ve,this.setTexture3D=be,this.setTextureCube=Te,this.rebindTextures=En,this.setupRenderTarget=bn,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Be,this.dispose=re}function mC(o,t){function i(s,l=Ls){let c;const d=wt.getTransfer(l);if(s===Oi)return o.UNSIGNED_BYTE;if(s===Fm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Hm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===DS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===LS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===wS)return o.BYTE;if(s===NS)return o.SHORT;if(s===Ql)return o.UNSIGNED_SHORT;if(s===Bm)return o.INT;if(s===ga)return o.UNSIGNED_INT;if(s===da)return o.FLOAT;if(s===_a)return o.HALF_FLOAT;if(s===US)return o.ALPHA;if(s===OS)return o.RGB;if(s===ha)return o.RGBA;if(s===Ps)return o.DEPTH_COMPONENT;if(s===Os)return o.DEPTH_STENCIL;if(s===PS)return o.RED;if(s===Gm)return o.RED_INTEGER;if(s===hr)return o.RG;if(s===Vm)return o.RG_INTEGER;if(s===km)return o.RGBA_INTEGER;if(s===nf||s===af||s===sf||s===rf)if(d===qt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===af)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===af)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zp||s===Kp||s===Qp||s===Jp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$p||s===em||s===tm||s===nm||s===im||s===ff||s===am)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$p||s===em)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===tm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===nm)return c.COMPRESSED_R11_EAC;if(s===im)return c.COMPRESSED_SIGNED_R11_EAC;if(s===ff)return c.COMPRESSED_RG11_EAC;if(s===am)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sm||s===rm||s===om||s===lm||s===um||s===cm||s===fm||s===dm||s===hm||s===pm||s===mm||s===gm||s===_m||s===vm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===sm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===om)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===um)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_m)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vm)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xm||s===Sm||s===Mm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===xm)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ym||s===Em||s===df||s===bm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ym)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Em)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===df)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Uo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const gC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_C=`
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

}`;class vC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new jS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Is({vertexShader:gC,fragmentShader:_C,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mr(new Ef(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xC extends zs{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,S=null,T=null;const L=typeof XRWebGLBinding<"u",M=new vC,E={},D=i.getContextAttributes();let z=null,U=null;const F=[],P=[],y=new Pt;let N=null,J=null;const k=new Yi;k.viewport=new mn;const j=new Yi;j.viewport=new mn;const se=[k,j],de=new DT;let H=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let Q=F[w];return Q===void 0&&(Q=new gp,F[w]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(w){let Q=F[w];return Q===void 0&&(Q=new gp,F[w]=Q),Q.getGripSpace()},this.getHand=function(w){let Q=F[w];return Q===void 0&&(Q=new gp,F[w]=Q),Q.getHandSpace()};function X(w){const Q=P.indexOf(w.inputSource);if(Q===-1)return;const ve=F[Q];ve!==void 0&&(ve.update(w.inputSource,w.frame,p||d),ve.dispatchEvent({type:w.type,data:w.inputSource}))}function q(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",ce);for(let w=0;w<F.length;w++){const Q=P[w];Q!==null&&(P[w]=null,F[w].disconnect(Q))}H=null,re=null,M.reset();for(const w in E)delete E[w];if(t.setRenderTarget(z),S=null,x=null,g=null,l=null,U=null,$e.stop(),s.isPresenting=!1,t.setPixelRatio(N),t.setSize(y.width,y.height,!1),J!==null){const w=J.camera;w.fov=J.fov,w.zoom=J.zoom,w.updateProjectionMatrix(),J=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){c=w,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){h=w,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(w){p=w},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&L&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(w){if(l=w,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",q),l.addEventListener("inputsourceschange",ce),D.xrCompatible!==!0&&await i.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(y),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,be=null,Te=null;D.depth&&(Te=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=D.stencil?Os:Ps,be=D.stencil?Uo:ga);const ye={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ye),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new ma(x.textureWidth,x.textureHeight,{format:ha,type:Oi,depthTexture:new Oo(x.textureWidth,x.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const ve={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,ve),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new ma(S.framebufferWidth,S.framebufferHeight,{format:ha,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),$e.setContext(l),$e.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(w){for(let Q=0;Q<w.removed.length;Q++){const ve=w.removed[Q],be=P.indexOf(ve);be>=0&&(P[be]=null,F[be].disconnect(ve))}for(let Q=0;Q<w.added.length;Q++){const ve=w.added[Q];let be=P.indexOf(ve);if(be===-1){for(let ye=0;ye<F.length;ye++)if(ye>=P.length){P.push(ve),be=ye;break}else if(P[ye]===null){P[ye]=ve,be=ye;break}if(be===-1)break}const Te=F[be];Te&&Te.connect(ve)}}function ne(w,Q){Q===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(Q.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(l===null)return;let Q=w.near,ve=w.far;M.texture!==null&&(M.depthNear>0&&(Q=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),de.near=j.near=k.near=Q,de.far=j.far=k.far=ve,(H!==de.near||re!==de.far)&&(l.updateRenderState({depthNear:de.near,depthFar:de.far}),H=de.near,re=de.far),de.layers.mask=w.layers.mask|6,k.layers.mask=de.layers.mask&-5,j.layers.mask=de.layers.mask&-3;const be=w.parent,Te=de.cameras;ne(de,be);for(let ye=0;ye<Te.length;ye++)ne(Te[ye],be);de.projectionMatrix.copy(k.projectionMatrix),de.projectionMatrixInverse.copy(k.projectionMatrixInverse),J===null&&w.isPerspectiveCamera&&(J={camera:w,fov:w.fov,zoom:w.zoom}),fe(w,de,be)};function fe(w,Q,ve){ve===null?w.matrix.copy(Q.matrixWorld):(w.matrix.copy(ve.matrixWorld),w.matrix.invert(),w.matrix.multiply(Q.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(Q.projectionMatrix),w.projectionMatrixInverse.copy(Q.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Tm*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return de},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(w){m=w,x!==null&&(x.fixedFoveation=w),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=w)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(de)},this.getCameraTexture=function(w){return E[w]};let Ee=null;function ke(w,Q){if(_=Q.getViewerPose(p||d),T=Q,_!==null){const ve=_.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let be=!1;ve.length!==de.cameras.length&&(de.cameras.length=0,be=!0);for(let xe=0;xe<ve.length;xe++){const Ce=ve[xe];let ct=null;if(S!==null)ct=S.getViewport(Ce);else{const xt=g.getViewSubImage(x,Ce);ct=xt.viewport,xe===0&&(t.setRenderTargetTextures(U,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(U))}let ot=se[xe];ot===void 0&&(ot=new Yi,ot.layers.enable(xe),ot.viewport=new mn,se[xe]=ot),ot.matrix.fromArray(Ce.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Ce.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ct.x,ct.y,ct.width,ct.height),xe===0&&(de.matrix.copy(ot.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale)),be===!0&&de.cameras.push(ot)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){g=s.getBinding();const xe=g.getDepthInformation(ve[0]);xe&&xe.isValid&&xe.texture&&M.init(xe,l.renderState)}if(Te&&Te.includes("camera-access")&&L){t.state.unbindTexture(),g=s.getBinding();for(let xe=0;xe<ve.length;xe++){const Ce=ve[xe].camera;if(Ce){let ct=E[Ce];ct||(ct=new jS,E[Ce]=ct);const ot=g.getCameraImage(Ce);ct.sourceTexture=ot}}}}for(let ve=0;ve<F.length;ve++){const be=P[ve],Te=F[ve];be!==null&&Te!==void 0&&Te.update(be,Q,p||d)}Ee&&Ee(w,Q),Q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Q}),T=null}const $e=new QS;$e.setAnimationLoop(ke),this.setAnimationLoop=function(w){Ee=w},this.dispose=function(){}}}const SC=new fn,oM=new ht;oM.set(-1,0,0,0,1,0,0,0,1);function MC(o,t){function i(M,E){M.matrixAutoUpdate===!0&&M.updateMatrix(),E.value.copy(M.matrix)}function s(M,E){E.color.getRGB(M.fogColor.value,ZS(o)),E.isFog?(M.fogNear.value=E.near,M.fogFar.value=E.far):E.isFogExp2&&(M.fogDensity.value=E.density)}function l(M,E,D,z,U){E.isNodeMaterial?E.uniformsNeedUpdate=!1:E.isMeshBasicMaterial?c(M,E):E.isMeshLambertMaterial?(c(M,E),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)):E.isMeshToonMaterial?(c(M,E),g(M,E)):E.isMeshPhongMaterial?(c(M,E),_(M,E),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)):E.isMeshStandardMaterial?(c(M,E),x(M,E),E.isMeshPhysicalMaterial&&S(M,E,U)):E.isMeshMatcapMaterial?(c(M,E),T(M,E)):E.isMeshDepthMaterial?c(M,E):E.isMeshDistanceMaterial?(c(M,E),L(M,E)):E.isMeshNormalMaterial?c(M,E):E.isLineBasicMaterial?(d(M,E),E.isLineDashedMaterial&&h(M,E)):E.isPointsMaterial?m(M,E,D,z):E.isSpriteMaterial?p(M,E):E.isShadowMaterial?(M.color.value.copy(E.color),M.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function c(M,E){M.opacity.value=E.opacity,E.color&&M.diffuse.value.copy(E.color),E.emissive&&M.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(M.map.value=E.map,i(E.map,M.mapTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.bumpMap&&(M.bumpMap.value=E.bumpMap,i(E.bumpMap,M.bumpMapTransform),M.bumpScale.value=E.bumpScale,E.side===li&&(M.bumpScale.value*=-1)),E.normalMap&&(M.normalMap.value=E.normalMap,i(E.normalMap,M.normalMapTransform),M.normalScale.value.copy(E.normalScale),E.side===li&&M.normalScale.value.negate()),E.displacementMap&&(M.displacementMap.value=E.displacementMap,i(E.displacementMap,M.displacementMapTransform),M.displacementScale.value=E.displacementScale,M.displacementBias.value=E.displacementBias),E.emissiveMap&&(M.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,M.emissiveMapTransform)),E.specularMap&&(M.specularMap.value=E.specularMap,i(E.specularMap,M.specularMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest);const D=t.get(E),z=D.envMap,U=D.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(U)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(oM),M.reflectivity.value=E.reflectivity,M.ior.value=E.ior,M.refractionRatio.value=E.refractionRatio),E.lightMap&&(M.lightMap.value=E.lightMap,M.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,M.lightMapTransform)),E.aoMap&&(M.aoMap.value=E.aoMap,M.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,M.aoMapTransform))}function d(M,E){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,E.map&&(M.map.value=E.map,i(E.map,M.mapTransform))}function h(M,E){M.dashSize.value=E.dashSize,M.totalSize.value=E.dashSize+E.gapSize,M.scale.value=E.scale}function m(M,E,D,z){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,M.size.value=E.size*D,M.scale.value=z*.5,E.map&&(M.map.value=E.map,i(E.map,M.uvTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest)}function p(M,E){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,M.rotation.value=E.rotation,E.map&&(M.map.value=E.map,i(E.map,M.mapTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest)}function _(M,E){M.specular.value.copy(E.specular),M.shininess.value=Math.max(E.shininess,1e-4)}function g(M,E){E.gradientMap&&(M.gradientMap.value=E.gradientMap)}function x(M,E){M.metalness.value=E.metalness,E.metalnessMap&&(M.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,M.metalnessMapTransform)),M.roughness.value=E.roughness,E.roughnessMap&&(M.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,M.roughnessMapTransform)),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)}function S(M,E,D){M.ior.value=E.ior,E.diffuseRoughness>0&&(M.diffuseRoughness.value=E.diffuseRoughness,E.diffuseRoughnessMap&&(M.diffuseRoughnessMap.value=E.diffuseRoughnessMap,i(E.diffuseRoughnessMap,M.diffuseRoughnessMapTransform))),E.sheen>0&&(M.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),M.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(M.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,M.sheenColorMapTransform)),E.sheenRoughnessMap&&(M.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,M.sheenRoughnessMapTransform))),E.clearcoat>0&&(M.clearcoat.value=E.clearcoat,M.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(M.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,M.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(M.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===li&&M.clearcoatNormalScale.value.negate())),E.dispersion>0&&(M.dispersion.value=E.dispersion),E.retroreflectivity>0&&(M.retroreflectivity.value=E.retroreflectivity),E.iridescence>0&&(M.iridescence.value=E.iridescence,M.iridescenceIOR.value=E.iridescenceIOR,M.iridescenceThicknessMinimum.value=E.iridescenceThicknessMinimum,M.iridescenceThicknessMaximum.value=E.iridescenceThicknessMaximum,E.iridescenceMap&&(M.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,M.iridescenceMapTransform)),E.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),E.transmission>0&&(M.transmission.value=E.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),E.transmissionMap&&(M.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,M.transmissionMapTransform)),M.thickness.value=E.thickness,E.thicknessMap&&(M.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=E.attenuationDistance,M.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(M.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(M.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=E.specularIntensity,M.specularColor.value.copy(E.specularColor),E.specularColorMap&&(M.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,M.specularColorMapTransform)),E.specularIntensityMap&&(M.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,E){E.matcap&&(M.matcap.value=E.matcap)}function L(M,E){const D=t.get(E).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function yC(o,t,i,s){let l={},c={};function d(D,z){const U=z.program;s.uniformBlockBinding(D,U,l[D.id])}function h(D,z){let U=l[D.id];U===void 0&&(T(D),U=m(D),l[D.id]=U,D.addEventListener("dispose",M));const F=z.program;s.updateUBOMapping(D,F);const P=t.render.frame;c[D.id]!==P&&(p(D),c[D.id]=P)}function m(D){const z=o.createBuffer(),U=D.__size,F=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,U,F),o.bindBuffer(o.UNIFORM_BUFFER,null),z}function p(D){const z=l[D.id],U=D.uniforms,F=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let P=0,y=U.length;P<y;P++){const N=U[P];if(Array.isArray(N))for(let J=0,k=N.length;J<k;J++)_(N[J],P,J,F);else _(N,P,0,F)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(D,z,U,F){if(x(D,z,U,F)===!0){const P=D.__offset,y=D.value;if(Array.isArray(y)){let N=0;for(let J=0;J<y.length;J++){const k=y[J],j=L(k,!0);g(k,D.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else g(y,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,P,D.__data)}}function g(D,z,U){typeof D=="number"||typeof D=="boolean"?z[U]=D:D.isMatrix3?(z[U]=D.elements[0],z[U+1]=D.elements[1],z[U+2]=D.elements[2],z[U+3]=0,z[U+4]=D.elements[3],z[U+5]=D.elements[4],z[U+6]=D.elements[5],z[U+7]=0,z[U+8]=D.elements[6],z[U+9]=D.elements[7],z[U+10]=D.elements[8],z[U+11]=0):ArrayBuffer.isView(D)?z.set(D.subarray(0,z.length-U),U):D.toArray(z,U)}function x(D,z,U,F){const P=D.value,y=z+"_"+U;if(Array.isArray(P)){F[y]===void 0&&(F[y]=[]);const N=F[y];let J=!1;for(let k=0;k<P.length;k++)S(P[k],N,k)===!0&&(J=!0);return J}return S(P,F,y)}function S(D,z,U){if(z[U]===void 0)return typeof D=="number"||typeof D=="boolean"?z[U]=D:ArrayBuffer.isView(D)?z[U]=D.slice():z[U]=D.clone(),!0;{const F=z[U];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return z[U]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(F.equals(D)===!1)return F.copy(D),!0}}return!1}function T(D){const z=D.uniforms;let U=0;const F=16;for(let y=0,N=z.length;y<N;y++){const J=Array.isArray(z[y])?z[y]:[z[y]];for(let k=0,j=J.length;k<j;k++){const se=J[k],de=Array.isArray(se.value)?se.value:[se.value],H=Array.isArray(z[y])||Array.isArray(se.value);let re=U;for(let q=0,ce=de.length;q<ce;q++){const ne=de[q],fe=L(ne,H),Ee=U%F,ke=Ee%fe.boundary,$e=Ee+ke;U+=ke,$e!==0&&F-$e<fe.storage&&(U+=F-$e),q===0&&(re=U),U+=fe.storage}const X=se.type==="int"?Int32Array:se.type==="uint"?Uint32Array:Float32Array;se.__data=new X((U-re)/Float32Array.BYTES_PER_ELEMENT),se.__offset=re}}const P=U%F;return P>0&&(U+=F-P),D.__size=U,D.__cache={},this}function L(D,z){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=16,U.storage=48):D.isMatrix4?(U.boundary=16,U.storage=64):D.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(U.boundary=16,U.storage=D.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",D),z===!0&&(U.boundary=16,U.storage=Math.ceil(U.storage/16)*16),U}function M(D){const z=D.target;z.removeEventListener("dispose",M),o.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function E(){for(const D in l)o.deleteBuffer(l[D]);l={},c={}}return{bind:d,update:h,dispose:E}}const EC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function bC(){return la===null&&(la=new _T(EC,16,16,hr,_a),la.name="DFG_LUT",la.minFilter=oi,la.magFilter=oi,la.wrapS=Ga,la.wrapT=Ga,la.generateMipmaps=!1,la.needsUpdate=!0),la}class TC{constructor(t={}){const{canvas:i=Vb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:S=Oi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const L=S,M=new Set([km,Vm,Gm]),E=new Set([Oi,ga,Ql,Uo,Fm,Hm]),D=new Uint32Array(4),z=new Int32Array(4),U={textures:[],min:[],max:[],resolution:[]};let F=null,P=null;const y=[],N=[];let J=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let j=!1,se=null,de=null,H=null,re=null;this._outputColorSpace=Ui;let X=0,q=0,ce=null,ne=-1,fe=null;const Ee=new mn,ke=new mn;let $e=null;const w=new Ht(0);let Q=0,ve=i.width,be=i.height,Te=1,ye=null,Xe=null;const xe=new mn(0,0,ve,be),Ce=new mn(0,0,ve,be);let ct=!1;const ot=new _f,xt=new qm;let Ot=!1,Nt=!1;const at=new fn,Yt=new oe,jt=new mn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let En=!1;function bn(){return ce===null?Te:1}let W=s;function wn(C,G){return i.getContext(C,G)}let Ut,Zt,Be,Kt,tt,lt,O,A,ee,Re,Me,Le,Ie,he,ge,Ue,B,me,pe,Oe,we,Pe,Je;try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zm}`),i.addEventListener("webglcontextlost",qe,!1),i.addEventListener("webglcontextrestored",pt,!1),i.addEventListener("webglcontextcreationerror",Ge,!1),W===null){const G="webgl2";if(W=wn(G,C),W===null)throw wn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(C){throw i.removeEventListener("webglcontextlost",qe,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",Ge,!1),Ft("WebGLRenderer: "+C.message),C}function nt(){Ut=new CR(W),Ut.init(),we=new mC(W,Ut),Zt=new _R(W,Ut,t,we),Be=new hC(W,Ut),Zt.reversedDepthBuffer&&x&&Be.buffers.depth.setReversed(!0),de=W.createFramebuffer(),H=W.createFramebuffer(),re=W.createFramebuffer(),Kt=new DR(W),tt=new $3,lt=new pC(W,Ut,Be,tt,Zt,we,Kt),O=new RR(k),A=new UT(W),Pe=new mR(W,A),ee=new wR(W,A,Kt,Pe),Re=new UR(W,ee,A,Pe,Kt),me=new LR(W,Zt,lt),ge=new vR(tt),Me=new J3(k,O,Ut,Zt,Pe,ge),Le=new MC(k,tt),Ie=new tC,he=new oC(Ut),B=new pR(k,O,Be,Re,T,m),Ue=new dC(k,Re,Zt),Je=new yC(W,Kt,Zt,Be),pe=new gR(W,Ut,Kt),Oe=new NR(W,Ut,Kt),Kt.programs=Me.programs,k.capabilities=Zt,k.extensions=Ut,k.properties=tt,k.renderLists=Ie,k.shadowMap=Ue,k.state=Be,k.info=Kt}L!==Oi&&(J=new PR(L,i.width,i.height,h,l,c));const Ae=new xC(k,W);this.xr=Ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(C){C!==void 0&&(Te=C,this.setSize(ve,be,!1))},this.getSize=function(C){return C.set(ve,be)},this.setSize=function(C,G,ue=!0){if(Ae.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=C,be=G,i.width=Math.floor(C*Te),i.height=Math.floor(G*Te),ue===!0&&(i.style.width=C+"px",i.style.height=G+"px"),J!==null&&J.setSize(i.width,i.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ve*Te,be*Te).floor()},this.setDrawingBufferSize=function(C,G,ue){ve=C,be=G,Te=ue,i.width=Math.floor(C*ue),i.height=Math.floor(G*ue),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(L===Oi){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Ee)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,G,ue,te){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,G,ue,te),Be.viewport(Ee.copy(xe).multiplyScalar(bn()).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,G,ue,te){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,G,ue,te),Be.scissor(ke.copy(Ce).multiplyScalar(bn()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(C){Be.setScissorTest(ct=C)},this.setOpaqueSort=function(C){ye=C},this.setTransparentSort=function(C){Xe=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,ue=!0){let te=0;if(C){let ie=!1;if(ce!==null){const Ne=ce.texture.format;ie=M.has(Ne)}if(ie){const Ne=ce.texture.type,We=E.has(Ne),De=B.getClearColor(),Fe=B.getClearAlpha(),je=De.r,st=De.g,mt=De.b;We?(D[0]=je,D[1]=st,D[2]=mt,D[3]=Fe,W.clearBufferuiv(W.COLOR,0,D)):(z[0]=je,z[1]=st,z[2]=mt,z[3]=Fe,W.clearBufferiv(W.COLOR,0,z))}else te|=W.COLOR_BUFFER_BIT}G&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),se=C},this.dispose=function(){i.removeEventListener("webglcontextlost",qe,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",Ge,!1),B.dispose(),Ie.dispose(),he.dispose(),lt.dispose(),tt.dispose(),O.dispose(),Re.dispose(),ee.dispose(),Pe.dispose(),Je.dispose(),Me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Qa),Ae.removeEventListener("sessionend",ko),xa.stop()};function qe(C){C.preventDefault(),yx("WebGLRenderer: Context Lost."),j=!0}function pt(){yx("WebGLRenderer: Context Restored."),j=!1;const C=Kt.autoReset,G=Ue.enabled,ue=Ue.autoUpdate,te=Ue.needsUpdate,ie=Ue.type;nt(),Kt.autoReset=C,Ue.enabled=G,Ue.autoUpdate=ue,Ue.needsUpdate=te,Ue.type=ie}function Ge(C){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){const G=C.target;G.removeEventListener("dispose",It),rn(G)}function rn(C){ci(C),tt.remove(C)}function ci(C){const G=tt.get(C).programs;G!==void 0&&(G.forEach(function(ue){Me.releaseProgram(ue)}),C.isShaderMaterial&&Me.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ue,te,ie,Ne){G===null&&(G=Jt);const We=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,De=ou(C,G,ue,te,ie);Be.setMaterial(te,We);let Fe=ue.index,je=1;if(te.wireframe===!0){if(Fe=ee.getWireframeAttribute(ue),Fe===void 0)return;je=2}const st=ue.drawRange,mt=ue.attributes.position;let ze=st.start*je,Mt=(st.start+st.count)*je;Ne!==null&&(ze=Math.max(ze,Ne.start*je),Mt=Math.min(Mt,(Ne.start+Ne.count)*je)),Fe!==null?(ze=Math.max(ze,0),Mt=Math.min(Mt,Fe.count)):mt!=null&&(ze=Math.max(ze,0),Mt=Math.min(Mt,mt.count));const on=Mt-ze;if(on<0||on===1/0)return;Pe.setup(ie,te,De,ue,Fe);let Vt,Ct=pe;if(Fe!==null&&(Vt=A.get(Fe),Ct=Oe,Ct.setIndex(Vt)),ie.isMesh)te.wireframe===!0?(Be.setLineWidth(te.wireframeLinewidth*bn()),Ct.setMode(W.LINES)):Ct.setMode(W.TRIANGLES);else if(ie.isLine){let ln=te.linewidth;ln===void 0&&(ln=1),Be.setLineWidth(ln*bn()),ie.isLineSegments?Ct.setMode(W.LINES):ie.isLineLoop?Ct.setMode(W.LINE_LOOP):Ct.setMode(W.LINE_STRIP)}else ie.isPoints?Ct.setMode(W.POINTS):ie.isSprite&&Ct.setMode(W.TRIANGLES);if(ie.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const ln=ie._multiDrawStarts,Ze=ie._multiDrawCounts,Nn=ie._multiDrawCount,Dt=Fe?A.get(Fe).bytesPerElement:1,Sa=tt.get(te).currentProgram.getUniforms();for(let ut=0;ut<Nn;ut++)Sa.setValue(W,"_gl_DrawID",ut),Ct.render(ln[ut]/Dt,Ze[ut])}else if(ie.isInstancedMesh)Ct.renderInstances(ze,on,ie.count);else if(ue.isInstancedBufferGeometry){const ln=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ze=Math.min(ue.instanceCount,ln);Ct.renderInstances(ze,on,Ze)}else Ct.render(ze,on)};function Bs(C,G,ue,te){se!==null&&C.isNodeMaterial&&se.setObject(te,C),Ot===!0&&ge.setState(C,ue,!1),C.transparent===!0&&C.side===Ha&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,$a(C,G,te),C.side=dr,C.needsUpdate=!0,$a(C,G,te),C.side=Ha):$a(C,G,te)}this.compile=function(C,G,ue=null){ue===null&&(ue=C),se!==null&&se.renderStart(C,G,ue),P=he.get(ue),P.init(G),N.push(P),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(G.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),C!==ue&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(G.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),P.setupLights(),se!==null&&se.updateLights(P.state.lightsArray),Nt=this.localClippingEnabled,Ot=ge.init(this.clippingPlanes,Nt),Ot===!0&&ge.setGlobalState(this.clippingPlanes,G),se!==null&&Ue.render(P.state.shadowsArray,ue,G);const te=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ne=ie.material;if(Ne)if(Array.isArray(Ne))for(let We=0;We<Ne.length;We++){const De=Ne[We];Bs(De,ue,G,ie),te.add(De)}else Bs(Ne,ue,G,ie),te.add(Ne)}),P=N.pop(),se!==null&&se.renderEnd(),te},this.compileAsync=function(C,G,ue=null){const te=this.compile(C,G,ue);return new Promise(ie=>{function Ne(){if(te.forEach(function(We){const Fe=tt.get(We).currentProgram;(Fe===void 0||Fe.isReady())&&te.delete(We)}),te.size===0){ie(C);return}setTimeout(Ne,10)}Ut.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ii=null;function vr(C){Ii&&Ii(C)}function Qa(){xa.stop()}function ko(){xa.start()}const xa=new QS;xa.setAnimationLoop(vr),typeof self<"u"&&xa.setContext(self),this.setAnimationLoop=function(C){Ii=C,Ae.setAnimationLoop(C),C===null?xa.stop():xa.start()},Ae.addEventListener("sessionstart",Qa),Ae.addEventListener("sessionend",ko),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;se!==null&&se.renderStart(C,G);const ue=Ae.enabled===!0&&Ae.isPresenting===!0,te=J!==null&&(ce===null||ue)&&J.begin(k,ce);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(G),G=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(k,C,G,ce),P=he.get(C,N.length),P.init(G),P.state.textureUnits=lt.getTextureUnits(),N.push(P),at.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?xt.setFromArrayCamera(G):ot.setFromProjectionMatrix(at,Zi,G.reversedDepth),Nt=this.localClippingEnabled,Ot=ge.init(this.clippingPlanes,Nt),F=Ie.get(C,y.length),F.init(),y.push(F),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const We=k.xr.getDepthSensingMesh();We!==null&&xr(We,G,-1/0,k.sortObjects)}xr(C,G,0,k.sortObjects),F.finish(),se!==null&&se.updateLights(P.state.lightsArray),k.sortObjects===!0&&F.sort(ye,Xe),En=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,En&&B.addToRenderList(F,C),this.info.autoReset===!0&&this.info.reset(),Ot===!0&&ge.beginShadows();const ie=P.state.shadowsArray;if(Ue.render(ie,C,G),Ot===!0&&ge.endShadows(),(te&&J.hasRenderPass())===!1){const We=F.opaque,De=F.transmissive;if(P.setupLights(),G.isArrayCamera){const Fe=G.cameras;if(De.length>0)for(let je=0,st=Fe.length;je<st;je++){const mt=Fe[je];Ja(We,De,C,mt)}En&&B.render(C);for(let je=0,st=Fe.length;je<st;je++){const mt=Fe[je];Sr(F,C,mt,mt.viewport)}}else De.length>0&&Ja(We,De,C,G),En&&B.render(C),Sr(F,C,G)}ce!==null&&q===0&&(lt.updateMultisampleRenderTarget(ce),lt.updateRenderTargetMipmap(ce)),te&&J.end(k),C.isScene===!0&&C.onAfterRender(k,C,G),Pe.resetDefaultState(),ne=-1,fe=null,N.pop(),N.length>0?(P=N[N.length-1],lt.setTextureUnits(P.state.textureUnits),Ot===!0&&ge.setGlobalState(k.clippingPlanes,P.state.camera)):P=null,y.pop(),y.length>0?F=y[y.length-1]:F=null,se!==null&&se.renderEnd()};function xr(C,G,ue,te){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){const We=G.isArrayCamera?xt:ot;if(!C.frustumCulled||C.intersectsFrustum(We)){te&&jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(at);const De=Re.update(C),Fe=C.material;Fe.visible&&F.push(C,De,Fe,ue,jt.z,null,G)}}else if(C.isMesh||C.isLine||C.isPoints){const We=G.isArrayCamera?xt:ot;if(!C.frustumCulled||C.intersectsFrustum(We)){const De=Re.update(C),Fe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),jt.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),jt.copy(De.boundingSphere.center)),jt.applyMatrix4(C.matrixWorld).applyMatrix4(at)),Array.isArray(Fe)){const je=De.groups;for(let st=0,mt=je.length;st<mt;st++){const ze=je[st],Mt=Fe[ze.materialIndex];Mt&&Mt.visible&&F.push(C,De,Mt,ue,jt.z,ze,G)}}else Fe.visible&&F.push(C,De,Fe,ue,jt.z,null,G)}}}const Ne=C.children;for(let We=0,De=Ne.length;We<De;We++)xr(Ne[We],G,ue,te)}function Sr(C,G,ue,te){const{opaque:ie,transmissive:Ne,transparent:We}=C;P.setupLightsView(ue),Ot===!0&&ge.setGlobalState(k.clippingPlanes,ue),te&&Be.viewport(Ee.copy(te)),ie.length>0&&Mr(ie,G,ue),Ne.length>0&&Mr(Ne,G,ue),We.length>0&&Mr(We,G,ue),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Ja(C,G,ue,te){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const ze=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new ma(1,1,{generateMipmaps:!0,type:ze?_a:Oi,minFilter:Us,samples:Math.max(4,Zt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[te.id],We=te.viewport||Ee;Ne.setSize(We.z*k.transmissionResolutionScale,We.w*k.transmissionResolutionScale);const De=k.getRenderTarget(),Fe=k.getActiveCubeFace(),je=k.getActiveMipmapLevel();k.setRenderTarget(Ne),k.getClearColor(w),Q=k.getClearAlpha(),Q<1&&k.setClearColor(16777215,.5),k.clear(),En&&B.render(ue);const st=k.toneMapping;k.toneMapping=Va;const mt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),Ot===!0&&ge.setGlobalState(k.clippingPlanes,te),Mr(C,ue,te),lt.updateMultisampleRenderTarget(Ne),lt.updateRenderTargetMipmap(Ne),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Mt=0,on=G.length;Mt<on;Mt++){const Vt=G[Mt],{object:Ct,geometry:ln,material:Ze,group:Nn}=Vt;if(Ze.side===Ha&&Ct.layers.test(te.layers)){const Dt=Ze.side;Ze.side=li,Ze.needsUpdate=!0,Xo(Ct,ue,te,ln,Ze,Nn),Ze.side=Dt,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(lt.updateMultisampleRenderTarget(Ne),lt.updateRenderTargetMipmap(Ne))}k.setRenderTarget(De,Fe,je),k.setClearColor(w,Q),mt!==void 0&&(te.viewport=mt),k.toneMapping=st}function Mr(C,G,ue){const te=G.isScene===!0?G.overrideMaterial:null;for(let ie=0,Ne=C.length;ie<Ne;ie++){const We=C[ie],{object:De,geometry:Fe,group:je}=We;let st=We.material;st.allowOverride===!0&&te!==null&&(st=te),De.layers.test(ue.layers)&&Xo(De,G,ue,Fe,st,je)}}function Xo(C,G,ue,te,ie,Ne){se!==null&&ie.isNodeMaterial&&se.setObject(C,ie),C.onBeforeRender(k,G,ue,te,ie,Ne),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(k,G,ue,te,C,Ne),ie.transparent===!0&&ie.side===Ha&&ie.forceSinglePass===!1?(ie.side=li,ie.needsUpdate=!0,k.renderBufferDirect(ue,G,te,ie,C,Ne),ie.side=dr,ie.needsUpdate=!0,k.renderBufferDirect(ue,G,te,ie,C,Ne),ie.side=Ha):k.renderBufferDirect(ue,G,te,ie,C,Ne),C.onAfterRender(k,G,ue,te,ie,Ne)}function Wo(C){let G=0;for(const ue of C)ue.texture!==null&&G++;return G}function $a(C,G,ue){G.isScene!==!0&&(G=Jt);const te=tt.get(C),ie=P.state.lights,Ne=P.state.shadowsArray,We=ie.state.version,De=Me.getParameters(C,ie.state,Ne,G,ue,P.state.lightProbeGridArray),Fe=Me.getProgramCacheKey(De);let je=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;const st=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=O.get(C.envMap||te.environment,st),te.envMapRotation=te.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",It),je=new Map,te.programs=je,te.programVariants=new Map);let mt=je.get(Fe);if(mt!==void 0){if(te.currentProgram===mt&&te.lightsStateVersion===We)return Yo(C,De),mt}else De.uniforms=Me.getUniforms(C),se!==null&&C.isNodeMaterial&&se.build(C,ue,De),C.onBeforeCompile(De,k),mt=Me.acquireProgram(De,Fe),je.set(Fe,mt),te.uniforms=De.uniforms;const ze=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=ge.uniform),Yo(C,De),te.needsLights=Tn(C),te.lightsStateVersion=We,te.needsLights&&(ze.ambientLightColor.value=ie.state.ambient,ze.lightProbe.value=ie.state.probe,ze.sunLights.value=ie.state.sun,ze.sunLightShadows.value=ie.state.sunShadow,ze.directionalLights.value=ie.state.directional,ze.directionalLightShadows.value=ie.state.directionalShadow,ze.spotLights.value=ie.state.spot,ze.spotLightShadows.value=ie.state.spotShadow,ze.rectAreaLights.value=ie.state.rectArea,ze.ltc_1.value=ie.state.rectAreaLTC1,ze.ltc_2.value=ie.state.rectAreaLTC2,ze.pointLights.value=ie.state.point,ze.pointLightShadows.value=ie.state.pointShadow,ze.hemisphereLights.value=ie.state.hemi,ze.sunShadowMatrix.value=ie.state.sunShadowMatrix,ze.sunShadowCascade.value=ie.state.sunShadowCascade,ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ze.spotLightMatrix.value=ie.state.spotLightMatrix,ze.spotLightMap.value=ie.state.spotLightMap,ze.pointShadowMatrix.value=ie.state.pointShadowMatrix),te.numLightProbeGrids=Wo(P.state.lightProbeGridArray),te.currentProgram=mt,te.uniformsList=null,mt}function qo(C,G,ue,te,ie){const Ne=tt.get(C),We=Ne.currentProgram.id+","+te+","+ie;let De=Ne.programVariants.get(We);return De===void 0?(De=$a(C,G,ue),Ne.programVariants.set(We,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=te,Ne.toneMapping=ie),De}function yr(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=uf.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Yo(C,G){const ue=tt.get(C);ue.outputColorSpace=G.outputColorSpace,ue.batching=G.batching,ue.batchingColor=G.batchingColor,ue.instancing=G.instancing,ue.instancingColor=G.instancingColor,ue.instancingMorph=G.instancingMorph,ue.skinning=G.skinning,ue.morphTargets=G.morphTargets,ue.morphNormals=G.morphNormals,ue.morphColors=G.morphColors,ue.morphTargetsCount=G.morphTargetsCount,ue.numClippingPlanes=G.numClippingPlanes,ue.numIntersection=G.numClipIntersection,ue.vertexAlphas=G.vertexAlphas,ue.vertexTangents=G.vertexTangents,ue.toneMapping=G.toneMapping}function ou(C,G,ue,te,ie){G.isScene!==!0&&(G=Jt),lt.resetTextureUnits();const Ne=G.fog,We=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,De=ce===null?k.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:wt.workingColorSpace,Fe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,je=O.get(te.envMap||We,Fe),st=te.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!ue.morphAttributes.position,Mt=!!ue.morphAttributes.normal,on=!!ue.morphAttributes.color;let Vt=Va;te.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Vt=k.toneMapping);const Ct=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ln=Ct!==void 0?Ct.length:0,Ze=tt.get(te),Nn=P.state.lights;if(Ot===!0&&(Nt===!0||C!==fe)){const nn=C===fe&&te.id===ne;ge.setState(te,C,nn)}let Dt=!1,Sa=!1;te.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Nn.state.version||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==je||te.fog===!0&&Ze.fog!==Ne||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ge.numPlanes||Ze.numIntersection!==ge.numIntersection)||Ze.vertexAlphas!==st||Ze.vertexTangents!==mt||Ze.morphTargets!==ze||Ze.morphNormals!==Mt||Ze.morphColors!==on||Ze.morphTargetsCount!==ln||Ze.numLightProbeGrids!==Wo(P.state.lightProbeGridArray)?Dt=!0:(Ze.outputColorSpace!==De||Ze.toneMapping!==Vt)&&(Sa=!0):(Dt=!0,Ze.__version=te.version);let ut=Ze.currentProgram;(Dt===!0||Sa===!0)&&(ut=Sa===!0?qo(te,G,ie,De,Vt):$a(te,G,ie),se&&te.isNodeMaterial&&se.onUpdateProgram(te,ut,Ze));let Fs=!1,fi=!1,Mi=!1;const gt=ut.getUniforms(),zt=Ze.uniforms;if(Be.useProgram(ut.program)&&(Fs=!0,fi=!0,Mi=!0),te.id!==ne&&(ne=te.id,fi=!0),Fs||fe!==C){Be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),gt.setValue(W,"projectionMatrix",C.projectionMatrix),gt.setValue(W,"viewMatrix",C.matrixWorldInverse);const dn=gt.map.cameraPosition;dn!==void 0&&dn.setValue(W,Yt.setFromMatrixPosition(C.matrixWorld)),Zt.logarithmicDepthBuffer&&gt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&gt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),fe!==C&&(fe=C,fi=!0,Mi=!0)}if(Ze.needsLights&&(Nn.state.sunShadowMap.length>0&&gt.setValue(W,"sunShadowMap",Nn.state.sunShadowMap,lt),Nn.state.directionalShadowMap.length>0&&gt.setValue(W,"directionalShadowMap",Nn.state.directionalShadowMap,lt),Nn.state.spotShadowMap.length>0&&gt.setValue(W,"spotShadowMap",Nn.state.spotShadowMap,lt),Nn.state.pointShadowMap.length>0&&gt.setValue(W,"pointShadowMap",Nn.state.pointShadowMap,lt)),ie.isSkinnedMesh){gt.setOptional(W,ie,"bindMatrix"),gt.setOptional(W,ie,"bindMatrixInverse");const nn=ie.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),gt.setValue(W,"boneTexture",nn.boneTexture,lt))}ie.isBatchedMesh&&(gt.setOptional(W,ie,"batchingTexture"),gt.setValue(W,"batchingTexture",ie._matricesTexture,lt),gt.setOptional(W,ie,"batchingIdTexture"),gt.setValue(W,"batchingIdTexture",ie._indirectTexture,lt),gt.setOptional(W,ie,"batchingColorTexture"),ie._colorsTexture!==null&&gt.setValue(W,"batchingColorTexture",ie._colorsTexture,lt));const ti=ue.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&me.update(ie,ue,ut),(fi||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,gt.setValue(W,"receiveShadow",ie.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(zt.envMapIntensity.value=G.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=bC()),fi){if(gt.setValue(W,"toneMappingExposure",k.toneMappingExposure),Ze.needsLights&&zi(zt,Mi),Ne&&te.fog===!0&&Le.refreshFogUniforms(zt,Ne),Le.refreshMaterialUniforms(zt,te,Te,be,P.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const nn=U;let dn=0;for(const yi of P.state.lightProbeGridArray)yi.texture!==null&&(nn.textures[dn]=yi.texture,nn.min[dn]=yi.boundingBox.min,nn.max[dn]=yi.boundingBox.max,nn.resolution[dn]=yi.resolution,dn++);for(const yi in nn)nn[yi].length=dn;zt.probesSH.value=nn.textures,zt.probesMin.value=nn.min,zt.probesMax.value=nn.max,zt.probesResolution.value=nn.resolution}uf.upload(W,yr(Ze),zt,lt)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(uf.upload(W,yr(Ze),zt,lt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&gt.setValue(W,"center",ie.center),gt.setValue(W,"modelViewMatrix",ie.modelViewMatrix),gt.setValue(W,"normalMatrix",ie.normalMatrix),gt.setValue(W,"modelMatrix",ie.matrixWorld),te.uniformsGroups!==void 0){const nn=te.uniformsGroups;for(let dn=0,yi=nn.length;dn<yi;dn++){const lu=nn[dn];Je.update(lu,ut),Je.bind(lu,ut)}}return ut}function zi(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Tn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(C,G,ue){const te=tt.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),tt.get(C.texture).__webglTexture=G,tt.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ue,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const ue=tt.get(C);ue.__webglFramebuffer=G,ue.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ue=0){ce=C,X=G,q=ue;let te=null,ie=!1,Ne=!1;if(C){const De=tt.get(C);if(De.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(W.FRAMEBUFFER,De.__webglFramebuffer),Ee.copy(C.viewport),ke.copy(C.scissor),$e=C.scissorTest,Be.viewport(Ee),Be.scissor(ke),Be.setScissorTest($e),ne=-1;return}else if(De.__webglFramebuffer===void 0)lt.setupRenderTarget(C);else if(De.__hasExternalTextures)lt.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const st=C.depthTexture;if(De.__boundDepthTexture!==st){if(st!==null&&tt.has(st)&&(C.width!==st.image.width||C.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ne=!0);const je=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[G])?te=je[G][ue]:te=je[G],ie=!0):C.samples>0&&lt.useMultisampledRTT(C)===!1?te=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?te=je[ue]:te=je,Ee.copy(C.viewport),ke.copy(C.scissor),$e=C.scissorTest}else Ee.copy(xe).multiplyScalar(Te).floor(),ke.copy(Ce).multiplyScalar(Te).floor(),$e=ct;if(ue!==0&&(te=de),Be.bindFramebuffer(W.FRAMEBUFFER,te)&&Be.drawBuffers(C,te),Be.viewport(Ee),Be.scissor(ke),Be.setScissorTest($e),ie){const De=tt.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,ue)}else if(Ne){const De=G;for(let Fe=0;Fe<C.textures.length;Fe++){const je=tt.get(C.textures[Fe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Fe,je.__webglTexture,ue,De)}}else if(C!==null&&ue!==0){const De=tt.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,De.__webglTexture,ue)}ne=-1};function Pn(C){const G=tt.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=Zt.textureFormatReadable(C.format),G.__typeReadable=Zt.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,ue,te,ie,Ne,We,De=0){if(!(C&&C.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Fe=Fe[We],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){Be.bindFramebuffer(W.FRAMEBUFFER,Fe);try{const je=C.textures[De],st=je.format,mt=je.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);const ze=Pn(je);if(ze.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-te&&ue>=0&&ue<=C.height-ie&&W.readPixels(G,ue,te,ie,we.convert(st),we.convert(mt),Ne)}finally{const je=ce!==null?tt.get(ce).__webglFramebuffer:null;Be.bindFramebuffer(W.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,G,ue,te,ie,Ne,We,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Fe=Fe[We],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(G>=0&&G<=C.width-te&&ue>=0&&ue<=C.height-ie){Be.bindFramebuffer(W.FRAMEBUFFER,Fe);const je=C.textures[De],st=je.format,mt=je.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);const ze=Pn(je);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.bufferData(W.PIXEL_PACK_BUFFER,Ne.byteLength,W.STREAM_READ),W.readPixels(G,ue,te,ie,we.convert(st),we.convert(mt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const on=ce!==null?tt.get(ce).__webglFramebuffer:null;Be.bindFramebuffer(W.FRAMEBUFFER,on);const Vt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await kb(W,Vt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ne),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Mt),W.deleteSync(Vt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,ue=0){const te=Math.pow(2,-ue),ie=Math.floor(C.image.width*te),Ne=Math.floor(C.image.height*te),We=G!==null?G.x:0,De=G!==null?G.y:0;lt.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,ue,0,0,We,De,ie,Ne),Be.unbindTexture()},this.copyTextureToTexture=function(C,G,ue=null,te=null,ie=0,Ne=0){let We,De,Fe,je,st,mt,ze,Mt,on;const Vt=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(ue!==null)We=ue.max.x-ue.min.x,De=ue.max.y-ue.min.y,Fe=ue.isBox3?ue.max.z-ue.min.z:1,je=ue.min.x,st=ue.min.y,mt=ue.isBox3?ue.min.z:0;else{const gt=Math.pow(2,-ie);We=Math.floor(Vt.width*gt),De=Math.floor(Vt.height*gt),C.isDataArrayTexture?Fe=Vt.depth:C.isData3DTexture?Fe=Math.floor(Vt.depth*gt):Fe=1,je=0,st=0,mt=0}te!==null?(ze=te.x,Mt=te.y,on=te.z):(ze=0,Mt=0,on=0);const Ct=we.convert(G.format),ln=we.convert(G.type);let Ze;G.isData3DTexture?(lt.setTexture3D(G,0),Ze=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(lt.setTexture2DArray(G,0),Ze=W.TEXTURE_2D_ARRAY):(lt.setTexture2D(G,0),Ze=W.TEXTURE_2D),Be.activeTexture(W.TEXTURE0),Be.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),Be.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Be.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const Nn=Be.getParameter(W.UNPACK_ROW_LENGTH),Dt=Be.getParameter(W.UNPACK_IMAGE_HEIGHT),Sa=Be.getParameter(W.UNPACK_SKIP_PIXELS),ut=Be.getParameter(W.UNPACK_SKIP_ROWS),Fs=Be.getParameter(W.UNPACK_SKIP_IMAGES);Be.pixelStorei(W.UNPACK_ROW_LENGTH,Vt.width),Be.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Vt.height),Be.pixelStorei(W.UNPACK_SKIP_PIXELS,je),Be.pixelStorei(W.UNPACK_SKIP_ROWS,st),Be.pixelStorei(W.UNPACK_SKIP_IMAGES,mt);const fi=C.isDataArrayTexture||C.isData3DTexture,Mi=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const gt=tt.get(C),zt=tt.get(G),ti=tt.get(gt.__renderTarget),nn=tt.get(zt.__renderTarget);Be.bindFramebuffer(W.READ_FRAMEBUFFER,ti.__webglFramebuffer),Be.bindFramebuffer(W.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let dn=0;dn<Fe;dn++)fi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tt.get(C).__webglTexture,ie,mt+dn),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tt.get(G).__webglTexture,Ne,on+dn)),W.blitFramebuffer(je,st,je+We,st+De,ze,Mt,ze+We,Mt+De,W.DEPTH_BUFFER_BIT,W.NEAREST);Be.bindFramebuffer(W.READ_FRAMEBUFFER,null),Be.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||tt.has(C)){const gt=tt.get(C),zt=tt.get(G);Be.bindFramebuffer(W.READ_FRAMEBUFFER,H),Be.bindFramebuffer(W.DRAW_FRAMEBUFFER,re);for(let ti=0;ti<Fe;ti++)fi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,gt.__webglTexture,ie,mt+ti):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,gt.__webglTexture,ie),Mi?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,zt.__webglTexture,Ne,on+ti):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,zt.__webglTexture,Ne),ie!==0?W.blitFramebuffer(je,st,je+We,st+De,ze,Mt,ze+We,Mt+De,W.COLOR_BUFFER_BIT,W.NEAREST):Mi?W.copyTexSubImage3D(Ze,Ne,ze,Mt,on+ti,je,st,We,De):W.copyTexSubImage2D(Ze,Ne,ze,Mt,je,st,We,De);Be.bindFramebuffer(W.READ_FRAMEBUFFER,null),Be.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Mi?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(Ze,Ne,ze,Mt,on,We,De,Fe,Ct,ln,Vt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Ze,Ne,ze,Mt,on,We,De,Fe,Ct,Vt.data):W.texSubImage3D(Ze,Ne,ze,Mt,on,We,De,Fe,Ct,ln,Vt):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ne,ze,Mt,We,De,Ct,ln,Vt.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ne,ze,Mt,Vt.width,Vt.height,Ct,Vt.data):W.texSubImage2D(W.TEXTURE_2D,Ne,ze,Mt,We,De,Ct,ln,Vt);Be.pixelStorei(W.UNPACK_ROW_LENGTH,Nn),Be.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Dt),Be.pixelStorei(W.UNPACK_SKIP_PIXELS,Sa),Be.pixelStorei(W.UNPACK_SKIP_ROWS,ut),Be.pixelStorei(W.UNPACK_SKIP_IMAGES,Fs),Ne===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&W.generateMipmap(Ze),Be.unbindTexture()},this.initRenderTarget=function(C){tt.get(C).__webglFramebuffer===void 0&&lt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?lt.setTextureCube(C,0):C.isData3DTexture?lt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?lt.setTexture2DArray(C,0):lt.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){X=0,q=0,ce=null,Be.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const Qe={cream:[.95,.9,.83],ember:[1,.46,.22],leaf:[.6,.8,.48],amber:[.88,.62,.36],dark:[.6,.36,.2],water:[.72,.8,.82],dim:[.3,.24,.19]};function lM(o){return()=>{o=o+1831565813|0;let t=Math.imul(o^o>>>15,1|o);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ho=(o,t,i)=>[o[0]+(t[0]-o[0])*i,o[1]+(t[1]-o[1])*i,o[2]+(t[2]-o[2])*i],qa=(o,t)=>[o[0]*t,o[1]*t,o[2]*t];function ja(o){const t=2*o()-1,i=2*Math.PI*o(),s=Math.sqrt(1-t*t);return[s*Math.cos(i),t,s*Math.sin(i)]}const Zm=o=>{const t=Math.hypot(o[0],o[1],o[2])||1;return[o[0]/t,o[1]/t,o[2]/t]},Jl=(o,t,i,s=0)=>l=>{const c=ja(l);return s&&(c[1]=Math.abs(c[1])*s),{p:[o[0]+c[0]*t[0],o[1]+c[1]*t[1],o[2]+c[2]*t[2]],n:Zm([c[0]/t[0],c[1]/t[1],c[2]/t[2]]),c:typeof i=="function"?i(l,c):i}},$l=(o,t,i,s,l,c)=>d=>{const h=2*Math.PI*d(),m=d(),p=t+(i-t)*m;return{p:[o[0]+Math.cos(h)*p,o[1]+s+(l-s)*m,o[2]+Math.sin(h)*p],n:[Math.cos(h),0,Math.sin(h)],c:typeof c=="function"?c(m):c}},Pi=(o,t,i,s,l=0)=>c=>{const d=Math.sqrt(t*t+(i*i-t*t)*c()),h=2*Math.PI*c();return{p:[o[0]+Math.cos(h)*d,o[1]+l*(d/i)**2,o[2]+Math.sin(h)*d],n:[0,1,0],c:s}},Go=(o,t,i,s,l=!1,c=Math.PI)=>d=>{const h=(d()*2-1)*c,m=d()*2*Math.PI,p=t+i*Math.cos(m),_=typeof s=="function"?s(m):s;return l?{p:[o[0]+p*Math.cos(h),o[1]+p*Math.sin(h),o[2]+i*Math.sin(m)],n:[Math.cos(m)*Math.cos(h),Math.cos(m)*Math.sin(h),Math.sin(m)],c:_}:{p:[o[0]+p*Math.cos(h),o[1]+i*Math.sin(m),o[2]+p*Math.sin(h)],n:[Math.cos(m)*Math.cos(h),Math.sin(m),Math.cos(m)*Math.sin(h)],c:_}},AC=(o,t,i)=>s=>{const l=Math.floor(s()*6),c=(s()-.5)*t,d=(s()-.5)*t,h=t/2,m=l>>1,p=l&1?1:-1,_=[0,0,0],g=[0,0,0];return _[m]=p*h,g[m]=p,_[(m+1)%3]=c,_[(m+2)%3]=d,{p:[o[0]+_[0],o[1]+_[1],o[2]+_[2]],n:g,c:i}};function $n(o,t,i){const s=lM(i),l=t.reduce((p,_)=>p+_.w,0),c=new Float32Array(o*3),d=new Float32Array(o*3),h=new Float32Array(o*3);let m=0;return t.forEach((p,_)=>{const g=_===t.length-1?o-m:Math.round(o*p.w/l);for(let x=0;x<g&&m<o;x++,m++){const S=p.f(s),T=.8+s()*.35;c.set(S.p,m*3),d.set(S.n,m*3),h.set([S.c[0]*T,S.c[1]*T,S.c[2]*T],m*3)}}),{p:c,n:d,c:h}}const RC=o=>$n(o,[{w:.86,f:t=>{const i=ja(t),s=i[0]*i[0]+i[2]*i[2],l=Math.exp(-s/.05),c=i[1]*.9-(i[1]>0?.3:-.14)*l,d=1+.08*i[1];return{p:[i[0]*d,c,i[2]*d],n:i,c:Ho(Qe.leaf,Qe.cream,t()*.3)}}},{w:.03,f:t=>{const i=t();return{p:[.08*i+(t()-.5)*.04,.55+.5*i,(t()-.5)*.04],n:[1,0,0],c:Qe.dark}}},{w:.11,f:t=>{const i=t()*2-1,s=(t()*2-1)*.2*(1-i*i);return{p:[.32+i*.3,.98+i*.12+s*.3,s],n:[0,.6,.8],c:Qe.leaf}}}],11),CC=o=>$n(o,[{w:.36,f:$l([0,0,0],.6,.78,-.45,.55,Qe.cream)},{w:.04,f:Pi([0,-.45,0],0,.6,Qe.cream)},{w:.15,f:Pi([0,.44,0],0,.75,Qe.dark)},{w:.08,f:Go([.86,.06,0],.27,.065,Qe.cream,!0,1.35)},{w:.25,f:Pi([0,-.52,0],.3,1.4,qa(Qe.cream,.75),.08)},{w:.12,f:t=>{const i=Math.floor(t()*3),s=t();return{p:[(i-1)*.25+.12*Math.sin(s*7+i*2),.62+s*1.15,.1*Math.cos(s*5+i)],n:[0,0,1],c:qa(Qe.cream,.55*(1-s))}}}],12),uM=o=>Jl([0,.1,0],[1.25,.85,1.25],o,-1),wC=o=>$n(o,[{w:.44,f:uM(Qe.cream)},{w:.08,f:Go([0,.1,0],1.25,.05,Qe.cream)},{w:.32,f:Pi([0,.02,0],0,1.18,Qe.amber)},{w:.16,f:t=>{const i=Math.floor(t()*14),s=i*2.4,l=.25+i%5*.18,c=ja(t);return{p:[Math.cos(s)*l+c[0]*.08,.05+Math.abs(c[1])*.06,Math.sin(s)*l+c[2]*.08],n:c,c:i%3?Qe.leaf:Qe.cream}}}],13),NC=o=>$n(o,[{w:.9,f:Go([0,0,0],.78,.38,t=>Math.sin(t)>-.15?Qe.ember:Qe.amber)},{w:.1,f:t=>{const i=t()*2*Math.PI,s=t()*2.6+.3,l=.78+.4*Math.cos(s);return{p:[l*Math.cos(i),.4*Math.sin(s),l*Math.sin(i)],n:[0,1,0],c:Qe.cream}}}],14),wm=o=>[{w:o*.8,f:Pi([0,-.2,0],0,1.65,qa(Qe.cream,.8),.1)},{w:o*.2,f:Go([0,-.1,0],1.65,.06,Qe.cream)}],DC=o=>$n(o,[...wm(.42),{w:.3,f:Jl([0,.08,-.1],[.95,.26,.24],t=>Ho(Qe.amber,Qe.cream,t()*.5))},{w:.06,f:t=>{const i=t(),s=(t()*2-1)*i*.45;return{p:[.9+i*.45,.08+s,-.1],n:[0,0,1],c:Qe.amber}}},{w:.16,f:t=>{const i=Math.floor(t()*4),s=[[-.7,0,.75],[0,0,.9],[.7,-.02,.72],[-1.05,-.05,.1]][i];return Jl(s,[.24,.16,.24],Qe.leaf,1)(t)}},{w:.06,f:Pi([-.85,-.08,-.85],0,.26,Qe.amber)}],15),LC=o=>$n(o,[{w:1,f:t=>{const i=ja(t),s=3.2+t()*3.5;return{p:[i[0]*s*1.4,i[1]*s*.7,i[2]*s-1],n:i,c:Qe.dim}}}],16),UC=o=>$n(o,[{w:.28,f:Jl([0,.38,0],[1.05,.62,1.05],Qe.amber,1)},{w:.04,f:t=>{const i=ja(t);i[1]=Math.abs(i[1]),i[1]<.35&&(i[1]=.35+t()*.6);const s=Zm(i);return{p:[s[0]*1.07,.38+s[1]*.64,s[2]*1.07],n:s,c:Qe.cream}}},{w:.1,f:t=>{const i=t()*2*Math.PI,s=.7+t()*.45;return{p:[Math.cos(i)*s,.33+.06*Math.sin(i*8),Math.sin(i)*s],n:[0,1,0],c:Qe.leaf}}},{w:.08,f:t=>{const i=(t()-.5)*1.75,s=(t()-.5)*1.75,l=Math.SQRT1_2;return{p:[(i-s)*l,.25,(i+s)*l],n:[0,1,0],c:Ho(Qe.ember,Qe.cream,.45)}}},{w:.22,f:$l([0,0,0],1.05,1.05,-.06,.22,qa(Qe.ember,.72))},{w:.06,f:Pi([0,.22,0],0,1.05,qa(Qe.ember,.72))},{w:.16,f:$l([0,0,0],1,1,-.44,-.1,Qe.amber)},{w:.06,f:Pi([0,-.44,0],0,1,Qe.amber)}],17),OC=o=>$n(o,[{w:.36,f:uM(Qe.cream)},{w:.06,f:Go([0,.1,0],1.25,.05,Qe.cream)},{w:.46,f:t=>{const i=ja(t);i[1]=Math.abs(i[1]);const s=1+.12*Math.sin(i[0]*9)*Math.sin(i[2]*8);return{p:[i[0]*1.1*s,.1+i[1]*.55*s,i[2]*1.1*s],n:i,c:Ho(Qe.leaf,Qe.cream,t()*.25)}}},{w:.12,f:t=>{const i=Math.floor(t()*6),s=i*1.05+.3,l=[Math.cos(s)*.6,.48+i%2*.08,Math.sin(s)*.6];return Jl(l,[.17,.12,.17],i%2?Qe.amber:Qe.cream)(t)}}],18),PC=o=>$n(o,[{w:.72,f:$l([0,0,0],.58,.58,-1,1,t=>t>.3&&t<.72?Qe.ember:Qe.cream)},{w:.12,f:Pi([0,1,0],0,.5,Qe.cream)},{w:.06,f:Go([0,1,0],.52,.04,Qe.cream)},{w:.1,f:Pi([0,-1,0],0,.58,qa(Qe.cream,.7))}],19),IC=o=>$n(o,[{w:.5,f:$l([0,0,0],.5,.64,-.95,1,qa(Qe.water,.75))},{w:.14,f:Pi([0,.55,0],0,.6,Qe.water)},{w:.12,f:t=>{const i=Math.sqrt(t())*.26,s=t()*Math.PI*2;return{p:[.55+Math.cos(s)*i,.95+Math.sin(s)*i,0],n:[0,0,1],c:Qe.leaf}}},{w:.14,f:t=>{const i=Math.sqrt(t())*.46,s=t()*Math.PI*2;return{p:[Math.cos(s)*i,-.9+t()*1.4,Math.sin(s)*i],n:ja(t),c:qa(Qe.water,1.1)}}},{w:.1,f:Pi([0,-.95,0],0,.5,qa(Qe.water,.6))}],20);function zC(o,t){const i=Math.round(t/4);if(!i)return $n(o,[{w:1,f:m=>{const p=ja(m),_=Math.max(0,p[1]);return{p:[p[0]*(1-_*.85)*.8,p[1]>0?p[1]*1.35:p[1]*.8,p[2]*(1-_*.85)*.8],n:p,c:Qe.water}}}],21);const s=.5,l=.07,c=[4,3,2,1],d=[];c.forEach((m,p)=>{for(let _=0;_<m;_++)d.push([(_-(m-1)/2)*(s+l),-.8+p*s+s/2,0])});const h=d.slice(0,i).map((m,p)=>({w:1,f:AC(m,s,(p+1)*4>30?Qe.ember:Qe.cream)}));return $n(o,h,22)}const BC={veg:Qe.leaf,grain:Qe.amber,protein:Ho(Qe.amber,Qe.cream,.5),dairy:Qe.cream,treat:Qe.ember};function FC(o,t){if(!t.length)return $n(o,wm(1),23);const i=[...wm(.4)];return t.forEach((s,l)=>{const c=l/t.length*Math.PI*2+.4,d=t.length===1?0:.85;i.push({w:.6/t.length,f:h=>{const m=ja(h);m[1]=Math.abs(m[1]);const p=1+.1*Math.sin(m[0]*11+l)*Math.sin(m[2]*9);return{p:[Math.cos(c)*d+m[0]*.42*p,-.18+m[1]*.3*p,Math.sin(c)*d+m[2]*.42*p],n:m,c:BC[s]??Qe.cream}}})}),$n(o,i,24)}function HC(o,t){const i=document.createElement("canvas");i.width=640,i.height=300;const s=i.getContext("2d"),l=[];if(s){s.fillStyle="#fff",s.font='600 230px "Unbounded Variable", "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(t,320,160,600);const h=s.getImageData(0,0,640,300).data;for(let m=0;m<300;m+=2)for(let p=0;p<640;p+=2)h[(m*640+p)*4+3]>128&&l.push(p,m)}const c=lM(25),d=l.length/2;return $n(o,[{w:1,f:()=>{if(!d)return{p:[0,0,0],n:[0,0,1],c:Qe.ember};const h=Math.floor(c()*d),m=(l[h*2]-320)/640*4+(c()-.5)*.012,p=-(l[h*2+1]-160)/640*4;return{p:[m,p,(c()-.5)*.3],n:Zm([(c()-.5)*.6,(c()-.5)*.6,1]),c:Ho(Qe.ember,Qe.cream,c()*.45)}}}],26)}const Jc=new Map;function $c(o,t){const i=`${o}:${t}`;let s=Jc.get(i);if(s)return s;const[l,c=""]=t.split(":"),d={apple:()=>RC(o),cup:()=>CC(o),soup:()=>wC(o),donut:()=>NC(o),fish:()=>DC(o),cloud:()=>LC(o),burger:()=>UC(o),salad:()=>OC(o),can:()=>PC(o),glass:()=>IC(o),sugar:()=>zC(o,Number(c)),plate:()=>FC(o,c?c.split(","):[]),text:()=>HC(o,c)};return s=(d[l]??d.cloud)(),Jc.size>40&&Jc.clear(),Jc.set(i,s),s}class GC{constructor(t,i=6){this.x=t,this.omega=i,this.v=0}step(t,i){const s=1+2*i*this.omega,l=this.omega*this.omega,c=i*l,d=i*c,h=1/(s+d),m=(s*this.x+i*this.v+d*t)*h;return this.v=(this.v+c*(t-this.x))*h,this.x=m,m}set(t){this.x=t,this.v=0}}const cf=o=>Math.min(1,Math.max(0,o)),Nm=new Set,cM=o=>(Nm.add(o),()=>void Nm.delete(o)),qn={stage:0,rawStage:0,page:0,anchorY:NaN},VC=matchMedia("(prefers-reduced-motion: reduce)"),kl=new GC(0,4.2),kC=o=>{const t=Math.floor(o),i=cf((o-t-.22)/.56);return t+i*i*(3-2*i)};let Dm=[],Lm=0,Km=!0;function XC(){const o=scrollY;Dm=Array.from(document.querySelectorAll("[data-stage]"),t=>{const i=t.getBoundingClientRect(),s=t.querySelector(".stage-space")?.getBoundingClientRect(),l=t.dataset.stageEnd;return{el:t,top:i.top+o,h:i.height,s0:Number(t.dataset.stage),end:l===void 0?null:Number(l),winTop:s?s.top+o:NaN,winH:s?.height??0,q:-1}}),Lm=document.documentElement.scrollHeight,Km=!1}const Af=()=>void(Km=!0);addEventListener("resize",Af);addEventListener("load",Af);new ResizeObserver(Af).observe(document.body);document.fonts?.ready.then(Af);function WC(){Km&&XC();const o=innerHeight,t=scrollY,i=[];let s=-1;for(const d of Dm)if(d.end!==null){const h=Math.max(1,d.h-o),m=kC(cf((t-d.top)/h)*(d.end-d.s0));m!==d.q&&(d.el.style.setProperty("--q",String(m)),d.q=m),i.push([d.top,d.s0],[d.top+h,d.end]),t>=d.top&&t<=d.top+h&&(s=d.s0+m)}else i.push([d.top+d.h/2-o/2,d.s0]);if(s>=0)qn.rawStage=s;else if(i.length)if(i.sort((d,h)=>d[0]-h[0]),t<=i[0][0])qn.rawStage=i[0][1];else if(t>=i[i.length-1][0])qn.rawStage=i[i.length-1][1];else for(let d=0;d<i.length-1;d++){const[h,m]=i[d],[p,_]=i[d+1];if(t>=h&&t<=p){const g=p>h?(t-h)/(p-h):0,x=cf((g-.2)/.6);qn.rawStage=m+(_-m)*x*x*(3-2*x);break}}qn.anchorY=NaN;const l=Math.round(qn.rawStage),c=Dm.find(d=>d.s0===l&&d.winH>0);c&&(qn.anchorY=(c.winTop-t+c.winH/2)/o),qn.page=Lm>o?cf(t/(Lm-o)):0}let hS=performance.now();function fM(o){const t=Math.min(.05,(o-hS)/1e3);if(hS=o,WC(),VC.matches)kl.set(qn.rawStage);else{const i=16*t;kl.step(kl.x+Math.max(-i,Math.min(i,qn.rawStage-kl.x)),t)}qn.stage=kl.x,Nm.forEach(i=>i(t,o/1e3)),requestAnimationFrame(fM)}requestAnimationFrame(fM);const xf={navMeals:{en:"Meals",ru:"Приёмы пищи"},navSwap:{en:"Swap",ru:"Замена"},navLabel:{en:"Label",ru:"Этикетка"},navDrinks:{en:"Drinks",ru:"Напитки"},navPlate:{en:"Plate",ru:"Тарелка"},navPractice:{en:"Practice",ru:"Практика"},navWords:{en:"Words",ru:"Слова"},navTop:{en:"Lesson",ru:"Урок"},panel:{en:"Panel",ru:"Панель"},heroKicker:{en:"English lesson · B1 · 45 min",ru:"Урок английского · B1 · 45 минут"},heroTitle:{en:"What's on your plate?",ru:"What's on your plate?"},heroSub:{en:"Meals of the day, healthy and unhealthy food, food labels and sugar in drinks. Nine tasks, 62 words, a certificate at the end.",ru:"Приёмы пищи, полезная и вредная еда, этикетки и сахар в напитках. Девять заданий, 62 слова, в конце сертификат."},heroStart:{en:"Start the lesson",ru:"Начать урок"},heroWords:{en:"Open the word bank",ru:"Открыть словарь"},heroHint:{en:"Scroll: the light rebuilds itself into food",ru:"Прокрутите: свет пересобирается в еду"},mealsKicker:{en:"01 · Meals of the day",ru:"01 · Приёмы пищи"},mealsTitle:{en:"Four meals, one day",ru:"Четыре приёма пищи за день"},listen:{en:"Listen",ru:"Слушать"},addWord:{en:"Save word",ru:"В мои слова"},saved:{en:"Saved",ru:"Сохранено"},phrasesKicker:{en:"02 · Useful phrases",ru:"02 · Полезные фразы"},phrasesTitle:{en:"How to talk about food",ru:"Как говорить о еде"},phrasesSub:{en:"Tap a phrase to hear it. These eight sentences come back in the tasks.",ru:"Нажмите на фразу, чтобы услышать её. Эти восемь предложений встретятся в заданиях."},swapKicker:{en:"03 · Swap it",ru:"03 · Замени"},swapTitle:{en:"Drag to swap the meal",ru:"Потяните, чтобы заменить блюдо"},swapSub:{en:"The handle rebuilds the food in the scene. The table compares the two, the sentence below uses comparatives.",ru:"Ручка пересобирает еду в сцене. Таблица сравнивает оба варианта, предложение ниже построено на сравнительной степени."},approx:{en:"approx. values",ru:"усреднённые значения"},labelKicker:{en:"04 · Read the label",ru:"04 · Читаем этикетку"},labelTitle:{en:"Red, amber, green",ru:"Красный, жёлтый, зелёный"},labelSub:{en:"UK front-of-pack labels use colours per 100 g. Tap a row to see the limits, then answer three questions.",ru:"В Великобритании цвет на упаковке ставят по количеству на 100 г. Нажмите на строку, чтобы увидеть пороги, и ответьте на три вопроса."},low:{en:"low",ru:"мало"},medium:{en:"medium",ru:"средне"},high:{en:"high",ru:"много"},drinksKicker:{en:"05 · Sugar in drinks",ru:"05 · Сахар в напитках"},drinksTitle:{en:"Count the sugar cubes",ru:"Посчитайте кубики сахара"},drinksSub:{en:"One cube is about 4 g of sugar. The NHS says adults should have no more than 30 g of free sugar a day. Cubes over the limit glow orange.",ru:"Один кубик это примерно 4 г сахара. NHS советует взрослым не больше 30 г свободного сахара в день. Кубики сверх нормы светятся оранжевым."},drinksQ:{en:"Which drink alone is over the daily limit?",ru:"Какой напиток один превышает дневную норму?"},plateKicker:{en:"06 · Build a plate",ru:"06 · Соберите тарелку"},plateTitle:{en:"Make a balanced lunch",ru:"Соберите сбалансированный обед"},plateSub:{en:"Choose up to six foods. Score 80 or more to complete the task.",ru:"Выберите до шести продуктов. Наберите 80 баллов или больше, чтобы засчитать задание."},plateEmpty:{en:"The plate is empty. Tap a food to put it on the plate.",ru:"Тарелка пустая. Нажмите на продукт, чтобы положить его."},plateFull:{en:"Six foods is the maximum. Remove one first.",ru:"Максимум шесть продуктов. Сначала уберите один."},clearPlate:{en:"Clear the plate",ru:"Очистить тарелку"},score:{en:"Score",ru:"Баллы"},practiceKicker:{en:"07 · Practice",ru:"07 · Практика"},practiceTitle:{en:"Six tasks, your pace",ru:"Шесть заданий в своём темпе"},check:{en:"Check",ru:"Проверить"},next:{en:"Next",ru:"Дальше"},retry:{en:"Try again",ru:"Ещё раз"},correct:{en:"Correct",ru:"Верно"},wrong:{en:"Not quite",ru:"Не совсем"},done:{en:"Done",ru:"Готово"},healthy:{en:"Healthy",ru:"Полезно"},unhealthy:{en:"Unhealthy",ru:"Вредно"},wordsKicker:{en:"08 · Word bank",ru:"08 · Словарь"},wordsTitle:{en:"Every word of the lesson",ru:"Все слова урока"},search:{en:"Search a word",ru:"Найти слово"},noWords:{en:"No words match. Clear the search or pick another group.",ru:"Таких слов нет. Очистите поиск или выберите другую группу."},onlySaved:{en:"Only my words",ru:"Только мои"},finKicker:{en:"09 · Certificate",ru:"09 · Сертификат"},finTitle:{en:"Finish the lesson",ru:"Завершите урок"},finSub:{en:"Your result is stored on this device. Type your name and the certificate is ready to print.",ru:"Результат хранится на этом устройстве. Введите имя, и сертификат можно распечатать."},name:{en:"Your name",ru:"Ваше имя"},group:{en:"Group (optional)",ru:"Группа (необязательно)"},nameErr:{en:"Use 2 to 40 letters",ru:"От 2 до 40 букв"},groupErr:{en:"Up to 20 characters",ru:"До 20 символов"},makeCert:{en:"Create certificate",ru:"Создать сертификат"},making:{en:"Creating…",ru:"Создаём…"},print:{en:"Print",ru:"Распечатать"},editCert:{en:"Change name",ru:"Изменить имя"},certFor:{en:"This certifies that",ru:"Настоящим подтверждается, что"},certDid:{en:"completed the lesson “Meals. Healthy and unhealthy food”",ru:"прошёл(ла) урок «Meals. Healthy and unhealthy food»"},tasksDone:{en:"tasks",ru:"заданий"},wordsSaved:{en:"words saved",ru:"слов сохранено"},progress:{en:"Lesson progress",ru:"Прогресс урока"},myWords:{en:"My words",ru:"Мои слова"},noMyWords:{en:"Save words with the star in the word bank or the meal cards.",ru:"Сохраняйте слова звёздочкой в словаре или на карточках."},reset:{en:"Reset the lesson",ru:"Сбросить урок"},resetSure:{en:"Tap again to erase progress",ru:"Нажмите ещё раз, чтобы стереть прогресс"},goTask:{en:"Go",ru:"Перейти"},close:{en:"Close",ru:"Закрыть"},offline:{en:"Offline",ru:"Без сети"},noSpeech:{en:"This browser has no speech voice. Read the translation instead.",ru:"В этом браузере нет голоса. Ориентируйтесь на перевод."},footer:{en:"Concept lesson site. Nutrition figures are approximate. Sources of limits: NHS (free sugars, 30 g a day for adults), FSA front-of-pack guidance (per 100 g).",ru:"Концепт сайта-урока. Цифры по питанию усреднённые. Нормы: NHS (свободный сахар, 30 г в день для взрослых), памятка FSA по маркировке (на 100 г)."},xpToast:{en:"XP",ru:"XP"},wordAdded:{en:"Added to my words",ru:"Добавлено в мои слова"},wordRemoved:{en:"Removed from my words",ru:"Убрано из моих слов"},hold:{en:"Hold and speak",ru:"Удерживайте и говорите"},listening:{en:"Listening… release to check",ru:"Слушаю… отпустите для проверки"},youSaid:{en:"You said",ru:"Вы сказали"},selfCheck:{en:"I said it out loud",ru:"Я произнёс(ла) вслух"},micBlocked:{en:"Microphone is blocked. Allow it in the browser or use the self-check button.",ru:"Микрофон запрещён. Разрешите его в браузере или отметьте сами."},noMic:{en:"Speech recognition is not available here: listen, repeat aloud and mark it yourself.",ru:"Распознавание речи здесь недоступно: послушайте, повторите вслух и отметьте сами."}},qC=`breakfast|завтрак|meal|c
brunch|поздний завтрак|meal|c
lunch|обед|meal|c
dinner|ужин (главный приём пищи)|meal|c
supper|лёгкий поздний ужин|meal|c
snack|перекус|meal|c
dessert|десерт|meal|c
starter|закуска перед основным блюдом|meal|c
main course|основное блюдо|meal|c
portion|порция|meal|c
vegetables|овощи|healthy|c
fruit|фрукты|healthy|u
porridge|овсяная каша|healthy|u
wholemeal bread|цельнозерновой хлеб|healthy|u
brown rice|бурый рис|healthy|u
beans|фасоль|healthy|c
lentils|чечевица|healthy|c
fish|рыба|healthy|u
chicken|курица|healthy|u
eggs|яйца|healthy|c
yoghurt|йогурт|healthy|u
nuts|орехи|healthy|c
salad|салат|healthy|c
broccoli|брокколи|healthy|u
carrots|морковь|healthy|c
apple|яблоко|healthy|c
water|вода|healthy|u
crisps|чипсы|unhealthy|c
chips|картофель фри (брит.)|unhealthy|c
burger|бургер|unhealthy|c
fizzy drink|газировка|unhealthy|c
sweets|конфеты|unhealthy|c
doughnut|пончик|unhealthy|c
cake|торт|unhealthy|c
biscuits|печенье|unhealthy|c
fast food|фастфуд|unhealthy|u
sausages|сосиски|unhealthy|c
chocolate|шоколад|unhealthy|u
ketchup|кетчуп|unhealthy|u
pizza|пицца|unhealthy|c
sugar|сахар|nutrient|u
salt|соль|nutrient|u
fat|жир|nutrient|u
protein|белок|nutrient|u
fibre|клетчатка|nutrient|u
vitamins|витамины|nutrient|c
calories|калории|nutrient|c
carbohydrates|углеводы|nutrient|c
have breakfast|завтракать|verb|-
skip a meal|пропустить приём пищи|verb|-
cook|готовить|verb|-
boil|варить|verb|-
fry|жарить|verb|-
bake|печь|verb|-
grill|жарить на гриле|verb|-
cut down on|сократить, есть меньше|verb|-
fresh|свежий|adj|-
fried|жареный|adj|-
sweet|сладкий|adj|-
salty|солёный|adj|-
spicy|острый|adj|-
homemade|домашний|adj|-`,Io=qC.split(`
`).map(o=>{const[t,i,s,l]=o.split("|");return{id:t.replace(/\s+/g,"-"),en:t,ru:i,cat:s,count:l}}),YC=[{id:"all",label:{en:"All",ru:"Все"}},{id:"meal",label:{en:"Meals",ru:"Приёмы пищи"}},{id:"healthy",label:{en:"Healthy",ru:"Полезное"}},{id:"unhealthy",label:{en:"Unhealthy",ru:"Вредное"}},{id:"nutrient",label:{en:"Nutrients",ru:"Вещества"}},{id:"verb",label:{en:"Verbs",ru:"Глаголы"}},{id:"adj",label:{en:"Adjectives",ru:"Прилагательные"}}],Co=[{id:"breakfast",time:"07:30",ipa:"/ˈbrek.fəst/",word:"Breakfast",ru:"Завтрак",ex:{en:"I usually have porridge and a cup of tea for breakfast.",ru:"На завтрак я обычно ем овсянку и пью чашку чая."},dishes:["porridge","eggs","wholemeal-bread","yoghurt"],note:{en:"Break + fast: the first meal “breaks” the night without food.",ru:"Break + fast: первый приём пищи «прерывает» ночь без еды."}},{id:"lunch",time:"13:00",ipa:"/lʌntʃ/",word:"Lunch",ru:"Обед",ex:{en:"We have soup and a salad for lunch at school.",ru:"В школе на обед у нас суп и салат."},dishes:["salad","lentils","brown-rice","chicken"],note:{en:"Have lunch, not “eat a lunch”: we use have with meals.",ru:"Have lunch, а не «eat a lunch»: с приёмами пищи используем have."}},{id:"snack",time:"16:30",ipa:"/snæk/",word:"Snack",ru:"Перекус",ex:{en:"A doughnut is a sweet snack. Nuts are a better one.",ru:"Пончик это сладкий перекус. Орехи лучше."},dishes:["nuts","apple","doughnut","crisps"],note:{en:"Snack is also a verb: “Try not to snack after 8 pm.”",ru:"Snack бывает и глаголом: «Try not to snack after 8 pm»."}},{id:"dinner",time:"19:00",ipa:"/ˈdɪn.ər/",word:"Dinner",ru:"Ужин",ex:{en:"For dinner we often have grilled fish with vegetables.",ru:"На ужин у нас часто рыба на гриле с овощами."},dishes:["fish","vegetables","grill","dessert"],note:{en:"In parts of northern England people call the evening meal “tea” and lunch “dinner”.",ru:"На севере Англии вечерний приём пищи часто называют «tea», а обед «dinner»."}}],jC=[{en:"It's good for you.",ru:"Это полезно."},{en:"It's high in sugar.",ru:"В этом много сахара."},{en:"It's low in fat.",ru:"В этом мало жира."},{en:"It's full of vitamins.",ru:"Здесь много витаминов."},{en:"It's bad for your teeth.",ru:"Это вредно для зубов."},{en:"I try to cut down on salt.",ru:"Я стараюсь есть меньше соли."},{en:"I never skip breakfast.",ru:"Я никогда не пропускаю завтрак."},{en:"I'd rather have water, please.",ru:"Я бы лучше выпил(а) воды, пожалуйста."}],Sf=[{a:{name:{en:"Cheeseburger and fries",ru:"Чизбургер с картошкой фри"},shape:"burger",n:{kcal:640,sugar:8,fat:30,salt:2.2,fibre:5}},b:{name:{en:"Chicken salad bowl",ru:"Салат с курицей"},shape:"salad",n:{kcal:420,sugar:7,fat:16,salt:1.2,fibre:8}},note:{en:"The salad bowl has less fat and less salt than the burger meal.",ru:"В салате меньше жира и соли, чем в бургере с картошкой."}},{a:{name:{en:"A can of cola, 330 ml",ru:"Банка колы, 330 мл"},shape:"can",n:{kcal:139,sugar:35,fat:0,salt:0,fibre:0}},b:{name:{en:"A glass of water with lemon",ru:"Стакан воды с лимоном"},shape:"glass",n:{kcal:2,sugar:0,fat:0,salt:0,fibre:0}},note:{en:"Water has no sugar at all. Cola has more sugar than the daily limit.",ru:"В воде нет сахара. В коле сахара больше дневной нормы."}},{a:{name:{en:"A glazed doughnut",ru:"Пончик в глазури"},shape:"donut",n:{kcal:250,sugar:14,fat:13,salt:.6,fibre:1}},b:{name:{en:"A medium apple",ru:"Среднее яблоко"},shape:"apple",n:{kcal:95,sugar:19,fat:.3,salt:0,fibre:4.4}},note:{en:"The apple has more sugar, but it is natural sugar with fibre. It has fewer calories.",ru:"В яблоке сахара больше, но он природный и с клетчаткой. Калорий меньше."}}],ZC=[{k:"kcal",label:{en:"Energy",ru:"Энергия"},unit:"kcal"},{k:"sugar",label:{en:"Sugar",ru:"Сахар"},unit:"g"},{k:"fat",label:{en:"Fat",ru:"Жир"},unit:"g"},{k:"salt",label:{en:"Salt",ru:"Соль"},unit:"g"},{k:"fibre",label:{en:"Fibre",ru:"Клетчатка"},unit:"g"}],KC={en:"Crunchy honey cereal",ru:"Хрустящие хлопья с мёдом"},QC=[{id:"fat",name:{en:"Fat",ru:"Жир"},value:3.5,unit:"g",low:3,high:17.5,hint:{en:"Low is 3 g or less, high is more than 17.5 g.",ru:"Мало: до 3 г, много: больше 17,5 г."}},{id:"sat",name:{en:"Saturates",ru:"Насыщенные жиры"},value:.8,unit:"g",low:1.5,high:5,hint:{en:"Low is 1.5 g or less, high is more than 5 g.",ru:"Мало: до 1,5 г, много: больше 5 г."}},{id:"sugar",name:{en:"Sugars",ru:"Сахара"},value:32,unit:"g",low:5,high:22.5,hint:{en:"Low is 5 g or less, high is more than 22.5 g.",ru:"Мало: до 5 г, много: больше 22,5 г."}},{id:"salt",name:{en:"Salt",ru:"Соль"},value:.9,unit:"g",low:.3,high:1.5,hint:{en:"Low is 0.3 g or less, high is more than 1.5 g.",ru:"Мало: до 0,3 г, много: больше 1,5 г."}}],JC=o=>o.value<=o.low?"low":o.value>o.high?"high":"medium",Yl=[{q:{en:"Is this cereal high in sugar?",ru:"В этих хлопьях много сахара?"},options:["Yes, it is.","No, it isn't."],answer:0,why:{en:"32 g is more than 22.5 g, so the row is red.",ru:"32 г больше 22,5 г, поэтому строка красная."}},{q:{en:"Which nutrient is low?",ru:"Чего здесь мало?"},options:["Fat","Saturates","Salt"],answer:1,why:{en:"0.8 g of saturates is under 1.5 g.",ru:"0,8 г насыщенных жиров меньше 1,5 г."}},{q:{en:"How much salt is there in 100 g?",ru:"Сколько соли в 100 г?"},options:["0.3 g","0.9 g","1.5 g"],answer:1,why:{en:"The label says 0.9 g: medium.",ru:"На этикетке 0,9 г: средне."}}],Xl=30,yo=[{id:"water",name:{en:"Water",ru:"Вода"},phrase:"a bottle of water, 500 ml",sugar:0},{id:"milk",name:{en:"Milk",ru:"Молоко"},phrase:"a glass of milk, 250 ml",sugar:12,natural:!0},{id:"juice",name:{en:"Orange juice",ru:"Апельсиновый сок"},phrase:"a glass of orange juice, 250 ml",sugar:22},{id:"energy",name:{en:"Energy drink",ru:"Энергетик"},phrase:"a can of energy drink, 250 ml",sugar:27.5},{id:"cola",name:{en:"Cola",ru:"Кола"},phrase:"a can of cola, 330 ml",sugar:35}],Mf=[{id:"broccoli",en:"broccoli",ru:"брокколи",cat:"veg"},{id:"carrots",en:"carrots",ru:"морковь",cat:"veg"},{id:"apple",en:"an apple",ru:"яблоко",cat:"veg"},{id:"rice",en:"brown rice",ru:"бурый рис",cat:"grain"},{id:"bread",en:"wholemeal bread",ru:"цельнозерновой хлеб",cat:"grain"},{id:"chicken",en:"chicken",ru:"курица",cat:"protein"},{id:"fish",en:"fish",ru:"рыба",cat:"protein"},{id:"beans",en:"beans",ru:"фасоль",cat:"protein"},{id:"yoghurt",en:"yoghurt",ru:"йогурт",cat:"dairy"},{id:"chips",en:"chips",ru:"картофель фри",cat:"treat"},{id:"cake",en:"cake",ru:"торт",cat:"treat"},{id:"fizzy",en:"a fizzy drink",ru:"газировка",cat:"treat"}],$C=6;function ew(o){const t=o.map(g=>Mf.find(x=>x.id===g)?.cat),i=g=>t.filter(x=>x===g).length,s=i("veg"),l=i("grain"),c=i("protein"),d=i("dairy"),h=i("treat"),m=(s>=2?35:s*17)+(l?20:0)+(c?20:0)+(d?10:0)+(h===0&&o.length?15:0)-h*10,p=Math.max(0,Math.min(100,m)),_=[];return o.length?(s<2&&_.push({en:"Add some vegetables or fruit.",ru:"Добавьте овощи или фрукты."}),l||_.push({en:"Add some grains: rice or bread.",ru:"Добавьте крупы: рис или хлеб."}),c||_.push({en:"You need some protein: fish, chicken or beans.",ru:"Нужен белок: рыба, курица или фасоль."}),h&&_.push({en:"There are too many treats. Try to cut down on sugar and fat.",ru:"Слишком много вредного. Попробуйте сократить сахар и жир."}),p>=80&&_.unshift({en:"That's a balanced plate. Well done!",ru:"Сбалансированная тарелка. Отлично!"}),{score:p,tips:_}):{score:0,tips:_}}const Fa=[{w:"an apple",h:!0},{w:"crisps",h:!1},{w:"porridge",h:!0},{w:"a fizzy drink",h:!1},{w:"lentils",h:!0},{w:"a doughnut",h:!1},{w:"broccoli",h:!0},{w:"sweets",h:!1},{w:"yoghurt",h:!0},{w:"a burger",h:!1},{w:"water",h:!0},{w:"sausages",h:!1}],cr=[{s:"How ___ sugar do you eat?",opts:["much","many"],a:0,rule:{en:"Sugar is uncountable: how much.",ru:"Sugar неисчисляемое: how much."}},{s:"How ___ apples are there?",opts:["much","many"],a:1,rule:{en:"Apples are countable: how many.",ru:"Apples исчисляемое: how many."}},{s:"There isn't ___ milk in the fridge.",opts:["some","any"],a:1,rule:{en:"Negatives take any.",ru:"В отрицаниях any."}},{s:"Would you like ___ tea?",opts:["some","any"],a:0,rule:{en:"Offers take some.",ru:"В предложениях-угощениях some."}},{s:"I eat ___ egg every morning.",opts:["a","an"],a:1,rule:{en:"An before a vowel sound: an egg.",ru:"An перед гласным звуком: an egg."}},{s:"We don't eat ___ fast food.",opts:["many","much"],a:1,rule:{en:"Fast food is uncountable: much.",ru:"Fast food неисчисляемое: much."}},{s:"There are ___ carrots in the soup.",opts:["a few","a little"],a:0,rule:{en:"Countable plural: a few.",ru:"Исчисляемое во множественном: a few."}},{s:"Add ___ salt, please.",opts:["a few","a little"],a:1,rule:{en:"Uncountable: a little.",ru:"Неисчисляемое: a little."}}],Eo=[{say:"lentils",opts:["lentils","lettuce","lemons","lollies"]},{say:"porridge",opts:["portion","porridge","parsley","pudding"]},{say:"crisps",opts:["chips","crisps","crumbs","creams"]},{say:"wholemeal bread",opts:["white bread","homemade bread","wholemeal bread","garlic bread"]},{say:"yoghurt",opts:["yoghurt","yolk","jogging","yogurt drink"]},{say:"carbohydrates",opts:["calories","carrots","carbohydrates","cardamom"]}],bo=["I usually have porridge for breakfast.","We should eat more vegetables.","Fizzy drinks are high in sugar.","She never skips lunch."],To=[{dish:"porridge with berries",ru:"овсянка с ягодами",meal:0},{dish:"a cheese sandwich and soup",ru:"сэндвич с сыром и суп",meal:1},{dish:"a handful of nuts",ru:"горсть орехов",meal:2},{dish:"roast chicken with vegetables",ru:"запечённая курица с овощами",meal:3},{dish:"toast with scrambled eggs",ru:"тост с омлетом",meal:0},{dish:"an apple and yoghurt",ru:"яблоко и йогурт",meal:2}],Ao=["I'd like a glass of water, please.","Vegetables are good for you.","I try to cut down on sugar."],gr=[{id:"label",name:{en:"Read the label",ru:"Этикетка"},max:Yl.length,anchor:"label"},{id:"drink",name:{en:"Sugar in drinks",ru:"Сахар в напитках"},max:1,anchor:"drinks"},{id:"plate",name:{en:"Balanced plate",ru:"Тарелка"},max:1,anchor:"plate"},{id:"sort",name:{en:"Healthy or not",ru:"Полезно или нет"},max:Fa.length,anchor:"practice"},{id:"grammar",name:{en:"Much, many, some, any",ru:"Much, many, some, any"},max:cr.length,anchor:"practice"},{id:"listen",name:{en:"Listening",ru:"Аудирование"},max:Eo.length,anchor:"practice"},{id:"build",name:{en:"Build a sentence",ru:"Собери предложение"},max:bo.length,anchor:"practice"},{id:"match",name:{en:"Meal match",ru:"Блюдо и приём пищи"},max:To.length,anchor:"practice"},{id:"speak",name:{en:"Speaking",ru:"Говорение"},max:Ao.length,anchor:"practice"}],Do=gr.reduce((o,t)=>o+t.max,0),pS=o=>o>=90?"A+":o>=75?"A":o>=60?"B":o>=40?"C":"D",dM="plate-lesson-v1",Um=["lang","done","words","plate","swapPair","drink","cert"],Ip={lang:"en",done:{},words:[],plate:["broccoli","rice"],swapPair:0,swap:0,drink:"cola",cert:null,panel:!1,toasts:[],gl:!0};function tw(){try{const o=localStorage.getItem(dM);if(!o)return{...Ip};const t=JSON.parse(o),i={...Ip};for(const s of Um)t[s]!==void 0&&(i[s]=t[s]);return i}catch{return{...Ip}}}let pa=tw();const Om=new Set,eu=()=>pa;function _n(o){const t=typeof o=="function"?o(pa):o;if(pa={...pa,...t},Um.some(i=>i in t))try{const i={};for(const s of Um)i[s]=pa[s];localStorage.setItem(dM,JSON.stringify(i))}catch{}Om.forEach(i=>i())}const hM=o=>(Om.add(o),()=>void Om.delete(o));function cn(o){return it.useSyncExternalStore(hM,()=>o(pa),()=>o(pa))}const nw=(o,t=pa.lang)=>xf[o][t];let iw=0;function Rf(o){const t=++iw;_n(i=>({toasts:[...i.toasts.slice(-3),{id:t,text:o}]})),window.setTimeout(()=>_n(i=>({toasts:i.toasts.filter(s=>s.id!==t)})),2600)}const Cf=o=>gr.reduce((t,i)=>t+Math.min(i.max,o.done[i.id]??0),0),Qm=o=>Math.round(Cf(o)/Do*100);function Za(o,t){const i=pa.done[o]??0;t<=i||(_n(s=>({done:{...s.done,[o]:t}})),Rf(`+${(t-i)*10} XP`))}function pM(o){const t=pa.words.includes(o);_n(i=>({words:t?i.words.filter(s=>s!==o):[...i.words,o]})),Rf(nw(t?"wordRemoved":"wordAdded"))}function aw(){_n({done:{},words:[],plate:[],cert:null,swap:0})}function zo(o){_n({panel:!1});const t=document.getElementById(o);if(!t)return;const i=matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-8,behavior:i?"auto":"smooth"})}const ca=(o,t,i=32,s=.21,l=.2)=>({pos:o,tgt:t,fov:i,ox:s,oy:l}),zp=ca([0,.4,9.5],[0,0,0],35,0,0),Ro=[ca([.4,.5,6.2],[0,.05,0]),ca([1.8,2.3,5.6],[0,.1,0]),ca([.9,3.4,5],[0,-.1,0]),ca([-1.4,2.8,5.2],[0,0,0]),ca([.8,2.9,7],[0,-.1,0]),zp,ca([1.3,1.4,6.6],[0,.1,0]),zp,ca([1.4,1.6,6.3],[0,.05,0]),ca([0,5.6,5.2],[0,-.2,0]),zp,ca([0,0,6.8],[0,0,0],32,.2,.22)],Bp=Ro.length-1,ua=14e3,sw=["apple","cup","soup","donut","fish","cloud","burger","salad","can","glass"];function rw(o){const t=eu();switch(o){case 0:return"apple";case 1:return"cup";case 2:return"soup";case 3:return"donut";case 4:return"fish";case 6:return"swap";case 8:return`sugar:${yo.find(i=>i.id===t.drink)?.sugar??0}`;case 9:return`plate:${t.plate.map(i=>Mf.find(s=>s.id===i)?.cat??"veg").join(",")}`;case 11:return`text:${Qm(t)}%`;default:return"cloud"}}const ow=`
attribute vec3 aCol; attribute vec4 aRnd;
attribute vec3 aPosB; attribute vec3 aNorB; attribute vec3 aColB;
uniform float uTime, uScatter, uSize, uPR, uFlow, uMix;
varying vec3 vCol; varying float vA;
void main(){
  vec3 p = mix(position, aPosB, uMix);
  vec3 nrm = normalize(mix(normal, aNorB, uMix) + vec3(0.0001));
  vec3 col = mix(aCol, aColB, uMix);
  float ph = aRnd.x * 6.2831;
  p += nrm * sin(uTime * 0.8 + ph) * 0.014 * uFlow;
  vec3 d = normalize(aRnd.xyz - 0.5 + 0.0001);
  vec3 drift = vec3(sin(uTime * 0.6 + ph), cos(uTime * 0.5 + ph * 1.3), sin(uTime * 0.4 + ph * 0.7));
  p += (d * (0.5 + aRnd.w * 1.5) + drift * 0.3) * uScatter;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vec3 n = normalize(normalMatrix * nrm);
  vec3 v = normalize(-mv.xyz);
  // три источника в пространстве камеры: рисующий сверху-слева, заполняющий справа, контровой по краю
  float key = max(dot(n, normalize(vec3(-0.5, 0.8, 0.6))), 0.0);
  float fill = max(dot(n, normalize(vec3(0.9, 0.1, 0.4))), 0.0) * 0.35;
  float rim = pow(1.0 - abs(dot(n, v)), 2.5);
  vCol = col * (0.2 + key * 0.95 + fill) + vec3(1.0, 0.7, 0.48) * rim * 0.5;
  vA = 0.5 + 0.5 * aRnd.z;
  gl_PointSize = uSize * (0.55 + aRnd.w * 0.9) * uPR / -mv.z;
}`,lw=`
uniform float uAlpha;
varying vec3 vCol; varying float vA;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c);
  if (d > 0.25) discard;
  gl_FragColor = vec4(vCol, exp(-d * 14.0) * vA * uAlpha);
}`;function uw(o){let t;try{t=new TC({canvas:o,antialias:!1,powerPreference:"high-performance"})}catch{return null}const i=matchMedia("(prefers-reduced-motion: reduce)").matches;t.setClearColor(1182471,1);const s=Math.min(devicePixelRatio,2);t.setPixelRatio(s);const l=new lT,c=new Yi(32,1,.1,60),d=new Ya,h=new Float32Array(ua*4);for(let ye=0;ye<h.length;ye++)h[ye]=Math.random();const m=ye=>{const Xe=new Xa(new Float32Array(ua*3),3).setUsage(Hb);return d.setAttribute(ye,Xe),Xe},p={p:m("position"),n:m("normal"),c:m("aCol"),sig:""},_={p:m("aPosB"),n:m("aNorB"),c:m("aColB"),sig:""};d.setAttribute("aRnd",new Xa(h,4)),d.boundingSphere=new iu(new oe,20);const g={uTime:{value:0},uScatter:{value:1.6},uSize:{value:innerWidth<860?30:26},uPR:{value:s},uFlow:{value:i?0:1},uAlpha:{value:.55},uMix:{value:0}},x=new Is({vertexShader:ow,fragmentShader:lw,uniforms:g,transparent:!0,depthWrite:!1,blending:Fp}),S=new ST(d,x);l.add(S);const T=ye=>new yT(Ro.map(Xe=>new oe(...ye(Xe))),!1,"catmullrom",.5),L=T(ye=>ye.pos),M=T(ye=>ye.tgt),E=new oe(...Ro[0].pos),D=new oe(...Ro[0].tgt),z=new oe,U=new oe;let F=0,P=0,y=32,N=1,J=1,k=innerWidth<860;function j(){N=innerWidth,J=innerHeight,k=N<860,t.setSize(N,J,!1),c.aspect=N/J,c.updateProjectionMatrix()}j(),addEventListener("resize",j);let se=null,de=null;new URLSearchParams(location.search).has("cam")&&(o.style.pointerEvents="auto",rb(async()=>{const{OrbitControls:ye}=await import("./OrbitControls-D6kcbB5a.js");return{OrbitControls:ye}},[],import.meta.url).then(({OrbitControls:ye})=>{const Xe=new ye(c,o);Xe.target.copy(D),se=Xe,de=document.createElement("div"),de.className="cam-readout",document.body.appendChild(de)}));const H=ye=>ye*ye*(3-2*ye);let re=null,X="";function q(){const ye=eu(),Xe=Sf[ye.swapPair]??Sf[0],xe=`${ye.swapPair}:${ye.swap.toFixed(3)}`;if(re&&xe===X)return re;const Ce=$c(ua,Xe.a.shape),ct=$c(ua,Xe.b.shape);re??(re={p:new Float32Array(ua*3),n:new Float32Array(ua*3),c:new Float32Array(ua*3)});const ot=H(ye.swap);for(let xt=0;xt<ua*3;xt++)re.p[xt]=Ce.p[xt]+(ct.p[xt]-Ce.p[xt])*ot,re.n[xt]=Ce.n[xt]+(ct.n[xt]-Ce.n[xt])*ot,re.c[xt]=Ce.c[xt]+(ct.c[xt]-Ce.c[xt])*ot;return X=xe,re}function ce(ye,Xe){const xe=rw(Xe),Ce=xe==="swap"?q():$c(ua,xe),ct=xe==="swap"?`swap:${X}`:xe;ct!==ye.sig&&(ye.p.array.set(Ce.p),ye.n.array.set(Ce.n),ye.c.array.set(Ce.c),ye.p.needsUpdate=ye.n.needsUpdate=ye.c.needsUpdate=!0,ye.sig=ct)}let ne=!1;const fe=ye=>typeof requestIdleCallback=="function"?requestIdleCallback(ye,{timeout:400}):setTimeout(ye,50),Ee=[...sw],ke=()=>{const ye=Ee.shift();!ye||ne||($c(ua,ye),fe(ke))};fe(ke);let $e=0,w=-1;const Q=hM(()=>$e++);document.fonts?.ready.then(()=>{p.sig=_.sig="",$e++});let ve=-1,be=-1;const Te=cM((ye,Xe)=>{ve<0&&(ve=Xe);const xe=Math.min(Bp,Math.max(0,qn.stage)),Ce=Math.min(Bp-1,Math.floor(xe)),ct=xe-Ce,ot=H(ct);(Ce!==be||$e!==w)&&(ce(p,Ce),ce(_,Ce+1),be=Ce,w=$e),g.uMix.value=ot;const xt=i?0:Math.max(0,1-(Xe-ve)/1.8)**2*1.6,Ot=Math.max(0,1-Math.abs(xe-6)*2),Nt=eu().swap;g.uScatter.value=i?0:Math.max(xt,Math.sin(Math.PI*ct)*.85,Math.sin(Math.PI*Nt)*.35*Ot),g.uTime.value=Xe;const at=xe/Bp;L.getPoint(at,z),M.getPoint(at,U);const Yt=Ro[Ce],jt=Ro[Ce+1],Jt=i?1:1-Math.exp(-ye/.3);if(se)se.update(),de&&(de.textContent=`stage ${xe.toFixed(2)} · pos ${c.position.toArray().map(Ut=>Ut.toFixed(2)).join(", ")}`);else{const Ut=Math.max(1,.75/c.aspect);z.sub(U).multiplyScalar(Ut).add(U),E.lerp(z,Jt),D.lerp(U,Jt),c.position.copy(E),c.lookAt(D)}S.rotation.y=i?0:Math.sin(Xe*.18)*.35;const En=Yt.fov+(jt.fov-Yt.fov)*ot,bn=k?0:Yt.ox+(jt.ox-Yt.ox)*ot,W=Yt.oy+(jt.oy-Yt.oy)*ot,wn=k?Number.isNaN(qn.anchorY)?W:Math.max(-.9,Math.min(.9,.5-qn.anchorY)):0;y+=(En-y)*Jt,F+=(bn-F)*Jt,P+=(wn-P)*Jt,c.fov=y,c.setViewOffset(N,J,-F*N,P*J,N,J),t.render(l,c)});return()=>{ne=!0,Te(),Q(),removeEventListener("resize",j),se?.dispose(),de?.remove(),d.dispose(),x.dispose(),t.dispose()}}const Jm=typeof window<"u"&&"speechSynthesis"in window;let Pm=null;function mS(){const o=speechSynthesis.getVoices();Pm=o.find(t=>t.lang==="en-GB")??o.find(t=>t.lang.startsWith("en"))??null}Jm&&(mS(),speechSynthesis.addEventListener?.("voiceschanged",mS));function wf(o,t=.9){if(!Jm)return!1;speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(o);return i.lang="en-GB",i.rate=t,Pm&&(i.voice=Pm),speechSynthesis.speak(i),!0}const gS=window,ef=gS.SpeechRecognition??gS.webkitSpeechRecognition??null;function cw(o,t){const i=c=>c.toLowerCase().replace(/[^a-z' ]/g," ").split(/\s+/).filter(Boolean),s=i(o),l=new Set(i(t));return s.length?s.filter(c=>l.has(c)).length/s.length:0}const ei=()=>cn(o=>o.lang);function sn(){const o=ei();return t=>xf[t][o]}function Ka({kicker:o,title:t,sub:i,children:s}){return b.jsxs("header",{className:"sec-head reveal",children:[b.jsx("p",{className:"kicker mono",children:o}),b.jsx("h2",{className:"h2",children:t}),i&&b.jsx("p",{className:"lead",children:i}),s]})}function va({text:o,small:t}){const i=sn();return b.jsx("button",{type:"button",className:`icon-btn${t?" sm":""}`,"data-cursor":i("listen"),"aria-label":`${i("listen")}: ${o}`,onClick:s=>{s.stopPropagation(),wf(o)||Rf(i("noSpeech"))},children:b.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[b.jsx("path",{d:"M4 9v6h4l5 4V5L8 9H4z"}),b.jsx("path",{d:"M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12",fill:"none"})]})})}function mM({id:o}){const t=cn(s=>s.words.includes(o)),i=sn();return b.jsx("button",{type:"button",className:`icon-btn star${t?" on":""}`,"aria-pressed":t,"aria-label":i(t?"saved":"addWord"),"data-cursor":i(t?"saved":"addWord"),onClick:s=>(s.stopPropagation(),pM(o)),children:b.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:b.jsx("path",{d:"M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"})})})}function Nf({items:o,value:t,onChange:i,label:s}){const l=Math.max(0,o.findIndex(c=>c.id===t));return b.jsxs("div",{className:"seg",role:"radiogroup","aria-label":s,style:{"--n":o.length,"--i":l},children:[b.jsx("span",{className:"seg-pill","aria-hidden":"true"}),o.map(c=>b.jsx("button",{type:"button",role:"radio","aria-checked":c.id===t,className:c.id===t?"on":"",onClick:()=>i(c.id),children:c.label},String(c.id)))]})}function fw({value:o,onChange:t,left:i,right:s,label:l,cursor:c}){const d=it.useRef(null),h=p=>{const _=d.current?.getBoundingClientRect();_&&t(Math.min(1,Math.max(0,(p.clientX-_.left)/_.width)))},m=p=>{const _=p.key==="ArrowRight"||p.key==="ArrowUp"?.05:p.key==="ArrowLeft"||p.key==="ArrowDown"?-.05:p.key==="Home"?-1:p.key==="End"?1:0;_&&(p.preventDefault(),t(Math.min(1,Math.max(0,o+_))))};return b.jsxs("div",{className:"scrub",children:[b.jsxs("div",{className:"scrub-ends mono",children:[b.jsx("span",{className:o<.5?"on":"",children:i}),b.jsx("span",{className:o>=.5?"on":"",children:s})]}),b.jsxs("div",{ref:d,className:"scrub-track",role:"slider",tabIndex:0,"aria-label":l,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(o*100),"data-cursor":c,onPointerDown:p=>(p.currentTarget.setPointerCapture(p.pointerId),h(p)),onPointerMove:p=>p.currentTarget.hasPointerCapture(p.pointerId)&&h(p),onKeyDown:m,style:{"--v":o},children:[b.jsx("span",{className:"scrub-fill"}),b.jsx("span",{className:"scrub-handle",children:b.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:b.jsx("path",{d:"M9 7l-5 5 5 5M15 7l5 5-5 5",fill:"none"})})})]})]})}function _r({ok:o,children:t}){const i=sn();return b.jsxs("p",{className:`fb ${o?"ok":"no"}`,role:"status",children:[b.jsxs("b",{children:[i(o?"correct":"wrong"),"."]})," ",t]})}const dw=[["meals","navMeals"],["swap","navSwap"],["label","navLabel"],["drinks","navDrinks"],["plate","navPlate"],["practice","navPractice"],["words","navWords"]];function hw(){const[o,t]=it.useState(navigator.onLine);return it.useEffect(()=>{const i=()=>t(navigator.onLine);return addEventListener("online",i),addEventListener("offline",i),()=>(removeEventListener("online",i),removeEventListener("offline",i))},[]),o}function pw(){const o=sn(),t=ei(),i=cn(Qm),s=cn(Cf)*10,l=hw(),c=it.useRef(null);return it.useEffect(()=>{let d=-1;return cM(()=>{Math.abs(qn.page-d)<5e-4||(d=qn.page,c.current?.style.setProperty("transform",`scaleX(${d})`))})},[]),b.jsxs("header",{className:"top",children:[b.jsx("span",{ref:c,className:"top-bar","aria-hidden":"true"}),b.jsxs("button",{type:"button",className:"logo",onClick:()=>zo("top"),"aria-label":"Plate",children:["Plate",b.jsx("i",{children:"."})]}),b.jsx("nav",{className:"top-nav","aria-label":"Sections",children:dw.map(([d,h])=>b.jsx("button",{type:"button",onClick:()=>zo(d),children:o(h)},d))}),b.jsxs("div",{className:"top-right",children:[!l&&b.jsx("span",{className:"badge mono",children:o("offline")}),b.jsxs("span",{className:"xp mono",title:o("progress"),children:[b.jsxs("svg",{viewBox:"0 0 36 36","aria-hidden":"true",children:[b.jsx("circle",{cx:"18",cy:"18",r:"15"}),b.jsx("circle",{cx:"18",cy:"18",r:"15",className:"ring",style:{strokeDashoffset:94.25*(1-i/100)}})]}),b.jsxs("span",{children:[s,b.jsx("small",{children:" XP"})]})]}),b.jsx(Nf,{items:[{id:"en",label:"EN"},{id:"ru",label:"RU"}],value:t,onChange:d=>_n({lang:d}),label:"Language"}),b.jsx("button",{type:"button",className:"btn sm mag hide-m",onClick:()=>_n({panel:!0}),children:o("panel")})]})]})}function mw(){const o=sn(),t=[["top","navTop"],["practice","navPractice"],["words","navWords"]];return b.jsxs("nav",{className:"bottom","aria-label":"Quick",children:[t.map(([i,s])=>b.jsx("button",{type:"button",onClick:()=>zo(i),children:o(s)},i)),b.jsx("button",{type:"button",className:"on",onClick:()=>_n({panel:!0}),children:o("panel")})]})}function gw(){const o=sn(),t=ei(),i=cn(p=>p.panel),s=cn(p=>p.done),l=cn(p=>p.words),c=cn(Cf),[d,h]=it.useState(!1),m=it.useRef(null);return it.useEffect(()=>{if(!i)return h(!1);m.current?.focus();const p=_=>_.key==="Escape"&&_n({panel:!1});return addEventListener("keydown",p),()=>removeEventListener("keydown",p)},[i]),b.jsxs(b.Fragment,{children:[b.jsx("div",{className:`veil${i?" on":""}`,onClick:()=>_n({panel:!1}),"aria-hidden":"true"}),b.jsxs("aside",{className:`panel${i?" on":""}`,"aria-hidden":!i,"aria-label":o("progress"),inert:!i,children:[b.jsxs("div",{className:"panel-head",children:[b.jsx("p",{className:"kicker mono",children:o("progress")}),b.jsx("button",{ref:m,type:"button",className:"icon-btn","aria-label":o("close"),onClick:()=>_n({panel:!1}),children:b.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:b.jsx("path",{d:"M6 6l12 12M18 6L6 18",fill:"none"})})})]}),b.jsxs("p",{className:"panel-total mono",children:[b.jsx("b",{children:c})," / ",Do," · ",c*10," XP"]}),b.jsx("ul",{className:"tasks",children:gr.map(p=>{const _=Math.min(p.max,s[p.id]??0);return b.jsxs("li",{children:[b.jsx("span",{children:p.name[t]}),b.jsxs("span",{className:"mono",children:[_,"/",p.max]}),b.jsx("span",{className:"mini-bar",children:b.jsx("i",{style:{width:`${_/p.max*100}%`}})}),b.jsx("button",{type:"button",className:"link",onClick:()=>zo(p.anchor),children:o("goTask")})]},p.id)})}),b.jsxs("p",{className:"kicker mono",children:[o("myWords")," · ",l.length]}),l.length?b.jsx("ul",{className:"my-words",children:l.map(p=>{const _=Io.find(g=>g.id===p);return _?b.jsxs("li",{children:[b.jsxs("span",{children:[_.en,t==="ru"&&b.jsxs("small",{children:[" · ",_.ru]})]}),b.jsx(va,{text:_.en,small:!0}),b.jsx("button",{type:"button",className:"icon-btn sm","aria-label":o("wordRemoved"),onClick:()=>pM(p),children:b.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:b.jsx("path",{d:"M7 7l10 10M17 7L7 17",fill:"none"})})})]},p):null})}):b.jsx("p",{className:"muted",children:o("noMyWords")}),b.jsx("button",{type:"button",className:`btn ghost danger${d?" sure":""}`,onClick:()=>d?(aw(),h(!1)):h(!0),children:o(d?"resetSure":"reset")})]})]})}function _w(){const o=cn(t=>t.toasts);return b.jsx("div",{className:"toasts","aria-live":"polite",children:o.map((t,i)=>b.jsx("div",{className:"toast mono",style:{"--k":o.length-1-i},children:t.text},t.id))})}function vw(){const o=it.useRef(null);return it.useEffect(()=>{if(!matchMedia("(pointer: fine)").matches)return;document.body.classList.add("has-cursor");let t=null;const i=l=>{const c=o.current;if(!c)return;if(l.pointerType!=="mouse")return void c.classList.remove("live");c.classList.add("live"),c.style.transform=`translate3d(${l.clientX}px, ${l.clientY}px, 0)`;const d=l.target;c.classList.toggle("hot",!!d.closest('button, a, label, [role="slider"], [data-cursor]')),c.classList.toggle("text",!!d.closest('input:not([type="checkbox"])'));const h=d.closest(".mag");if(t&&t!==h&&(t.style.transform=""),t=h,h){const m=h.getBoundingClientRect();h.style.transform=`translate(${(l.clientX-m.left-m.width/2)*.18}px, ${(l.clientY-m.top-m.height/2)*.25}px)`}},s=()=>o.current?.classList.remove("live");return addEventListener("pointermove",i,{passive:!0}),document.documentElement.addEventListener("pointerleave",s),()=>{removeEventListener("pointermove",i),document.documentElement.removeEventListener("pointerleave",s),document.body.classList.remove("has-cursor")}},[]),b.jsx("div",{ref:o,className:"cursor","aria-hidden":"true"})}function xw(){const o=sn(),t=ei();return b.jsxs("section",{id:"top",className:"hero","data-stage":"0",children:[b.jsxs("div",{className:"wrap hero-in",children:[b.jsx("p",{className:"kicker mono",children:o("heroKicker")}),b.jsxs("h1",{className:"h1",children:[b.jsx("span",{className:"line",children:b.jsx("span",{children:"What's on"})}),b.jsx("span",{className:"line",children:b.jsx("span",{children:"your plate?"})})]}),t==="ru"&&b.jsx("p",{className:"hero-ru",children:"Что у вас на тарелке?"}),b.jsx("p",{className:"lead",children:o("heroSub")}),b.jsxs("div",{className:"row",children:[b.jsx("button",{type:"button",className:"btn mag",onClick:()=>zo("meals"),children:o("heroStart")}),b.jsx("button",{type:"button",className:"btn ghost",onClick:()=>zo("words"),children:o("heroWords")})]}),b.jsxs("dl",{className:"stats mono",children:[b.jsxs("div",{children:[b.jsx("dt",{children:t==="ru"?"приёма пищи":"meals"}),b.jsx("dd",{children:Co.length})]}),b.jsxs("div",{children:[b.jsx("dt",{children:t==="ru"?"заданий":"tasks"}),b.jsx("dd",{children:gr.length})]}),b.jsxs("div",{children:[b.jsx("dt",{children:t==="ru"?"слова":"words"}),b.jsx("dd",{children:Io.length})]}),b.jsxs("div",{children:[b.jsx("dt",{children:"XP max"}),b.jsx("dd",{children:Do*10})]})]})]}),b.jsx("p",{className:"hint mono","aria-hidden":"true",children:o("heroHint")})]})}function Sw(){const o=sn(),t=ei();return b.jsx("section",{id:"meals",className:"meals","data-stage":"1","data-stage-end":Co.length,children:b.jsx("div",{className:"meals-pin",children:b.jsxs("div",{className:"wrap meals-grid",children:[b.jsx(Ka,{kicker:o("mealsKicker"),title:o("mealsTitle")}),b.jsxs("div",{className:"clock mono","aria-hidden":"true",children:[Co.map(i=>b.jsx("span",{children:i.time},i.id)),b.jsx("i",{className:"clock-fill"})]}),b.jsx("div",{className:"meals-window",children:b.jsx("div",{className:"track","data-track":!0,style:{"--n":Co.length},children:Co.map((i,s)=>b.jsxs("article",{className:"meal","aria-label":i.word,children:[b.jsxs("p",{className:"mono meal-time",children:[String(s+1).padStart(2,"0")," · ",i.time]}),b.jsxs("div",{className:"meal-word",children:[b.jsx("h3",{className:"h3",children:i.word}),b.jsx(va,{text:i.word}),b.jsx(mM,{id:i.id})]}),b.jsxs("p",{className:"mono ipa",children:[i.ipa,t==="ru"&&b.jsxs("span",{children:[" · ",i.ru]})]}),b.jsxs("p",{className:"meal-ex",children:[i.ex.en," ",b.jsx(va,{text:i.ex.en,small:!0})]}),t==="ru"&&b.jsx("p",{className:"muted",children:i.ex.ru}),b.jsx("div",{className:"chips",children:i.dishes.map(l=>{const c=Io.find(d=>d.id===l);return c?b.jsxs("button",{type:"button",className:"chip","data-cursor":o("listen"),onClick:()=>wf(c.en),children:[c.en,t==="ru"&&b.jsxs("small",{children:[" ",c.ru]})]},l):null})}),b.jsx("p",{className:"note",children:i.note[t]})]},i.id))})})]})})})}function Mw(){const o=sn(),t=ei();return b.jsx("section",{id:"phrases",className:"calm","data-stage":"5",children:b.jsxs("div",{className:"wrap",children:[b.jsx(Ka,{kicker:o("phrasesKicker"),title:o("phrasesTitle"),sub:o("phrasesSub")}),b.jsx("ol",{className:"phrases",children:jC.map((i,s)=>b.jsx("li",{className:"reveal",style:{"--i":s},children:b.jsxs("button",{type:"button",className:"phrase","data-cursor":o("listen"),onClick:()=>wf(i.en),children:[b.jsx("span",{className:"mono",children:String(s+1).padStart(2,"0")}),b.jsx("span",{className:"phrase-en",children:i.en}),t==="ru"&&b.jsx("span",{className:"muted",children:i.ru})]})},i.en))})]})})}const yw=["Burger → salad","Cola → water","Doughnut → apple"],fr=o=>Number.isInteger(o)?String(o):o.toFixed(1);function Ew(){const o=sn(),t=ei(),i=cn(c=>c.swapPair),s=cn(c=>c.swap),l=Sf[i]??Sf[0];return b.jsx("section",{id:"swap",className:"split","data-stage":"6",children:b.jsxs("div",{className:"wrap split-grid",children:[b.jsxs("div",{className:"split-ui",children:[b.jsx(Ka,{kicker:o("swapKicker"),title:o("swapTitle"),sub:o("swapSub")}),b.jsx(Nf,{label:o("navSwap"),items:yw.map((c,d)=>({id:d,label:c})),value:i,onChange:c=>_n({swapPair:c,swap:0})}),b.jsx(fw,{value:s,onChange:c=>_n({swap:c}),left:l.a.name[t],right:l.b.name[t],label:o("swapTitle"),cursor:o("navSwap")}),b.jsxs("table",{className:"cmp mono",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{}),b.jsx("th",{className:s<.5?"on":"",children:"A"}),b.jsx("th",{className:s>=.5?"on":"",children:"B"}),b.jsx("th",{children:"Δ"})]})}),b.jsx("tbody",{children:ZC.map(({k:c,label:d,unit:h})=>{const m=l.a.n[c],p=l.b.n[c],_=p-m;return b.jsxs("tr",{children:[b.jsx("th",{children:d[t]}),b.jsxs("td",{className:s<.5?"on":"",children:[fr(m)," ",h]}),b.jsxs("td",{className:s>=.5?"on":"",children:[fr(p)," ",h]}),b.jsxs("td",{className:_<0?"down":_>0?"up":"",children:[_>0?"+":_<0?"−":"",fr(Math.abs(_))]})]},c)})})]}),b.jsx("p",{className:"muted mono small",children:o("approx")}),b.jsxs("p",{className:"sentence",children:[l.note.en," ",b.jsx(va,{text:l.note.en,small:!0})]}),t==="ru"&&b.jsx("p",{className:"muted",children:l.note.ru})]}),b.jsx("div",{className:"stage-space","aria-hidden":"true"})]})})}function bw(){const o=sn(),t=ei(),[i,s]=it.useState("sugar"),[l,c]=it.useState(Yl.map(()=>null));return it.useEffect(()=>{l.every(d=>d!==null)&&Za("label",l.filter((d,h)=>d===Yl[h].answer).length)},[l]),b.jsx("section",{id:"label",className:"calm","data-stage":"7",children:b.jsxs("div",{className:"wrap label-grid",children:[b.jsx(Ka,{kicker:o("labelKicker"),title:o("labelTitle"),sub:o("labelSub")}),b.jsxs("div",{className:"label-card reveal",children:[b.jsx("p",{className:"label-name",children:KC[t]}),b.jsxs("p",{className:"mono muted small",children:[t==="ru"?"на 100 г":"per 100 g"," · 1620 kJ / 383 kcal"]}),b.jsx("ul",{children:QC.map(d=>{const h=JC(d);return b.jsxs("li",{className:`lv-${h}${i===d.id?" open":""}`,children:[b.jsxs("button",{type:"button",onClick:()=>s(i===d.id?null:d.id),"aria-expanded":i===d.id,"data-cursor":h,children:[b.jsx("span",{className:"dot","aria-hidden":"true"}),b.jsx("span",{children:d.name[t]}),b.jsxs("span",{className:"mono",children:[fr(d.value)," ",d.unit]}),b.jsx("span",{className:"pill mono",children:o(h)})]}),i===d.id&&b.jsx("p",{className:"hint-row",children:d.hint[t]})]},d.id)})})]}),b.jsxs("div",{className:"qs",children:[Yl.map((d,h)=>b.jsxs("div",{className:"q reveal",style:{"--i":h},children:[b.jsxs("p",{className:"q-text",children:[d.q.en,t==="ru"&&b.jsxs("small",{className:"muted",children:[" ",d.q.ru]})]}),b.jsx("div",{className:"opts",children:d.options.map((m,p)=>b.jsx("button",{type:"button",disabled:l[h]!==null,className:`opt${l[h]===p?p===d.answer?" ok":" no":l[h]!==null&&p===d.answer?" ok":""}`,onClick:()=>c(_=>_.map((g,x)=>x===h?p:g)),children:m},m))}),l[h]!==null&&b.jsx(_r,{ok:l[h]===d.answer,children:d.why[t]})]},h)),l.every(d=>d!==null)&&b.jsx("button",{type:"button",className:"btn ghost sm",onClick:()=>c(Yl.map(()=>null)),children:o("retry")})]})]})})}function Tw(){const o=sn(),t=ei(),i=cn(p=>p.drink),s=yo.find(p=>p.id===i)??yo[0],l=Math.round(s.sugar/4),[c,d]=it.useState(null),h=yo.filter(p=>p.sugar>Xl).map(p=>p.id),m=`${s.phrase.split(",")[0].replace(/^a/,"A")} has ${s.sugar?`about ${fr(s.sugar)} grams of sugar`:"no sugar"}.`;return b.jsx("section",{id:"drinks",className:"split","data-stage":"8",children:b.jsxs("div",{className:"wrap split-grid",children:[b.jsxs("div",{className:"split-ui",children:[b.jsx(Ka,{kicker:o("drinksKicker"),title:o("drinksTitle"),sub:o("drinksSub")}),b.jsx(Nf,{label:o("drinksTitle"),items:yo.map(p=>({id:p.id,label:p.name[t]})),value:i,onChange:p=>_n({drink:p})}),b.jsxs("div",{className:"big-num mono",children:[b.jsxs("span",{children:[fr(s.sugar),b.jsx("small",{children:" g"})]}),b.jsxs("span",{className:"eq",children:["≈ ",l," ",l===1?"cube":"cubes"]})]}),b.jsxs("div",{className:"limit",role:"img","aria-label":`${fr(s.sugar)} g / ${Xl} g`,children:[b.jsx("i",{style:{width:`${Math.min(100,s.sugar/Xl*100)}%`},className:s.sugar>Xl?"over":""}),b.jsxs("span",{className:"mono",children:[Xl," g · NHS"]})]}),b.jsxs("p",{className:"sentence",children:[m," ",b.jsx(va,{text:m,small:!0})]}),b.jsxs("p",{className:"muted mono small",children:[s.phrase,s.natural?t==="ru"?" · сахар молока природный, не «свободный»":" · milk sugar is natural, not “free” sugar":""]}),b.jsxs("div",{className:"q",children:[b.jsx("p",{className:"q-text",children:o("drinksQ")}),b.jsx("div",{className:"opts",children:yo.map(p=>b.jsx("button",{type:"button",className:`opt${c===p.id?h.includes(p.id)?" ok":" no":""}`,onClick:()=>{d(p.id),_n({drink:p.id}),h.includes(p.id)&&Za("drink",1)},children:p.name.en},p.id))}),c&&b.jsx(_r,{ok:h.includes(c),children:h.includes(c)?t==="ru"?"35 г больше 30 г: банка колы одна превышает норму.":"35 g is more than 30 g: one can is over the limit.":t==="ru"?"Посмотрите, у какого напитка кубики стали оранжевыми.":"Look for the drink with orange cubes."})]})]}),b.jsx("div",{className:"stage-space","aria-hidden":"true"})]})})}function Aw(){const o=sn(),t=ei(),i=cn(p=>p.plate),{score:s,tips:l}=ew(i);it.useEffect(()=>{s>=80&&Za("plate",1)},[s]);const c=i.map(p=>Mf.find(_=>_.id===p)?.en??p),d=c.length>1?`${c.slice(0,-1).join(", ")} and ${c[c.length-1]}`:c[0],h=c.length?`I've got ${d} on my plate.`:"",m=p=>{if(i.includes(p))return _n({plate:i.filter(_=>_!==p)});if(i.length>=$C)return Rf(o("plateFull"));_n({plate:[...i,p]})};return b.jsx("section",{id:"plate",className:"split","data-stage":"9",children:b.jsxs("div",{className:"wrap split-grid",children:[b.jsxs("div",{className:"split-ui",children:[b.jsx(Ka,{kicker:o("plateKicker"),title:o("plateTitle"),sub:o("plateSub")}),b.jsx("div",{className:"foods",children:Mf.map(p=>b.jsxs("button",{type:"button",className:`food cat-${p.cat}${i.includes(p.id)?" on":""}`,"aria-pressed":i.includes(p.id),onClick:()=>m(p.id),"data-cursor":i.includes(p.id)?"−":"+",children:[b.jsx("span",{children:p.en}),t==="ru"&&b.jsx("small",{children:p.ru})]},p.id))}),b.jsxs("div",{className:"meter",children:[b.jsx("span",{className:"mono",children:o("score")}),b.jsx("span",{className:"meter-bar",children:b.jsx("i",{style:{width:`${s}%`},className:s>=80?"good":""})}),b.jsxs("b",{className:"mono",children:[s,"/100"]})]}),i.length?b.jsxs(b.Fragment,{children:[b.jsxs("p",{className:"sentence",children:[h," ",b.jsx(va,{text:h,small:!0})]}),b.jsx("ul",{className:"tips",children:l.map(p=>b.jsxs("li",{children:[p.en,t==="ru"&&b.jsxs("small",{className:"muted",children:[" ",p.ru]})]},p.en))}),b.jsx("button",{type:"button",className:"btn ghost sm",onClick:()=>_n({plate:[]}),children:o("clearPlate")})]}):b.jsx("p",{className:"muted",children:o("plateEmpty")})]}),b.jsx("div",{className:"stage-space","aria-hidden":"true"})]})})}function Rw(o,t){const i=[...o];let s=t;for(let l=i.length-1;l>0;l--){s=(s*9301+49297)%233280;const c=Math.floor(s/233280*(l+1));[i[l],i[c]]=[i[c],i[l]]}return i}function Vo({score:o,max:t,onRetry:i}){const s=sn();return b.jsxs("div",{className:"result",children:[b.jsxs("p",{className:"mono big-score",children:[o,"/",t]}),b.jsxs("p",{className:"muted",children:["+",o*10," XP · ",s("done")]}),b.jsx("button",{type:"button",className:"btn ghost sm",onClick:i,children:s("retry")})]})}function Cw(){const o=sn(),[t,i]=it.useState(0),[s,l]=it.useState(0),[c,d]=it.useState(null),h=t>=Fa.length,m=_=>{if(h)return;const g=Fa[t].h===_,x=s+(g?1:0);d(g),l(x),i(t+1),t+1>=Fa.length&&Za("sort",x)};if(it.useEffect(()=>{const _=g=>{!(g.target instanceof HTMLElement)||!g.target.closest("#task-sort")||(g.key==="ArrowLeft"&&m(!0),g.key==="ArrowRight"&&m(!1))};return addEventListener("keydown",_),()=>removeEventListener("keydown",_)}),h)return b.jsx(Vo,{score:s,max:Fa.length,onRetry:()=>(i(0),l(0),d(null))});const p=Fa[t];return b.jsxs("div",{id:"task-sort",className:"sort",children:[b.jsxs("p",{className:"mono muted",children:[t+1,"/",Fa.length," · ← / →"]}),b.jsxs("p",{className:"sort-word",children:[p.w," ",b.jsx(va,{text:p.w,small:!0})]}),b.jsxs("div",{className:"row",children:[b.jsx("button",{type:"button",className:"btn leaf",onClick:()=>m(!0),children:o("healthy")}),b.jsx("button",{type:"button",className:"btn ember",onClick:()=>m(!1),children:o("unhealthy")})]}),c!==null&&b.jsxs(_r,{ok:c,children:[Fa[t-1].w,": ",Fa[t-1].h?"healthy":"unhealthy"]})]})}function ww(){const o=sn(),t=ei(),[i,s]=it.useState(cr.map(()=>null)),l=i.every(d=>d!==null),c=i.filter((d,h)=>d===cr[h].a).length;return it.useEffect(()=>{l&&Za("grammar",c)},[l,c]),b.jsxs("div",{className:"gram",children:[cr.map((d,h)=>{const[m,p]=d.s.split("___"),_=i[h];return b.jsxs("div",{className:"gram-row",children:[b.jsxs("p",{children:[m,b.jsx("span",{className:"gap",children:_===null?"…":d.opts[_]}),p]}),b.jsx("div",{className:"opts",children:d.opts.map((g,x)=>b.jsx("button",{type:"button",disabled:_!==null,className:`opt sm${_===x?x===d.a?" ok":" no":_!==null&&x===d.a?" ok":""}`,onClick:()=>s(S=>S.map((T,L)=>L===h?x:T)),children:g},g))}),_!==null&&b.jsx(_r,{ok:_===d.a,children:d.rule[t]})]},d.s)}),l&&b.jsx(Vo,{score:c,max:cr.length,onRetry:()=>s(cr.map(()=>null))}),!l&&b.jsxs("p",{className:"muted mono",children:[i.filter(d=>d!==null).length,"/",cr.length," · ",o("check"),": ",t==="ru"?"проверяется сразу":"checked instantly"]})]})}function Nw(){const o=sn(),[t,i]=it.useState(0),[s,l]=it.useState(0),[c,d]=it.useState(null);if(t>=Eo.length)return b.jsx(Vo,{score:s,max:Eo.length,onRetry:()=>(i(0),l(0),d(null))});const h=Eo[t],m=Io.find(p=>p.en===h.say)?.ru;return b.jsxs("div",{className:"listen",children:[b.jsxs("p",{className:"mono muted",children:[t+1,"/",Eo.length]}),b.jsx("button",{type:"button",className:"play",onClick:()=>wf(h.say,.85),"data-cursor":o("listen"),"aria-label":o("listen"),children:b.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:b.jsx("path",{d:"M8 5v14l11-7z"})})}),!Jm&&b.jsxs("p",{className:"muted",children:[o("noSpeech")," «",m,"»"]}),b.jsx("div",{className:"opts",children:h.opts.map(p=>b.jsx("button",{type:"button",disabled:c!==null,className:`opt${c===p?p===h.say?" ok":" no":c&&p===h.say?" ok":""}`,onClick:()=>{d(p);const _=s+(p===h.say?1:0);l(_),t+1>=Eo.length&&Za("listen",_)},children:p},p))}),c&&b.jsxs(b.Fragment,{children:[b.jsx(_r,{ok:c===h.say,children:h.say}),b.jsx("button",{type:"button",className:"btn sm",onClick:()=>(i(t+1),d(null)),children:o("next")})]})]})}function Dw(){const o=sn(),[t,i]=it.useState(0),[s,l]=it.useState(0),[c,d]=it.useState([]),[h,m]=it.useState(null),p=bo[t]??"",_=it.useMemo(()=>Rw(p.split(" ").map((x,S)=>({w:x,k:S})),t*7+3),[p,t]);if(t>=bo.length)return b.jsx(Vo,{score:s,max:bo.length,onRetry:()=>(i(0),l(0),d([]),m(null))});const g=c.map(x=>_[x].w).join(" ");return b.jsxs("div",{className:"build",children:[b.jsxs("p",{className:"mono muted",children:[t+1,"/",bo.length]}),b.jsx("div",{className:`built${h===null?"":h?" ok":" no"}`,"aria-live":"polite",children:c.length?c.map(x=>b.jsx("button",{type:"button",className:"chip on",disabled:h!==null,onClick:()=>d(c.filter(S=>S!==x)),children:_[x].w},x)):b.jsx("span",{className:"muted",children:"…"})}),b.jsx("div",{className:"chips",children:_.map((x,S)=>b.jsx("button",{type:"button",className:"chip",disabled:c.includes(S)||h!==null,onClick:()=>d([...c,S]),children:x.w},S))}),h===null?b.jsx("button",{type:"button",className:"btn sm",disabled:c.length!==_.length,onClick:()=>{const x=g===p;m(x);const S=s+(x?1:0);l(S),t+1>=bo.length&&Za("build",S)},children:o("check")}):b.jsxs(b.Fragment,{children:[b.jsxs(_r,{ok:h,children:[p," ",b.jsx(va,{text:p,small:!0})]}),b.jsx("button",{type:"button",className:"btn sm",onClick:()=>(i(t+1),d([]),m(null)),children:o("next")})]})]})}function Lw(){const o=sn(),t=ei(),[i,s]=it.useState(To.map(()=>null)),[l,c]=it.useState(!1),d=i.filter((h,m)=>h===To[m].meal).length;return b.jsxs("div",{className:"match",children:[To.map((h,m)=>b.jsxs("div",{className:`match-row${l?i[m]===h.meal?" ok":" no":""}`,children:[b.jsxs("p",{children:[h.dish,t==="ru"&&b.jsxs("small",{className:"muted",children:[" ",h.ru]})]}),b.jsx("div",{className:"opts",children:Co.map((p,_)=>b.jsx("button",{type:"button",disabled:l,className:`opt sm${i[m]===_?" picked":""}${l&&_===h.meal?" ok":""}`,onClick:()=>s(i.map((g,x)=>x===m?_:g)),children:p.word},p.id))})]},h.dish)),l?b.jsx(Vo,{score:d,max:To.length,onRetry:()=>(s(To.map(()=>null)),c(!1))}):b.jsx("button",{type:"button",className:"btn sm",disabled:i.some(h=>h===null),onClick:()=>(c(!0),Za("match",d)),children:o("check")})]})}function Uw(){const o=sn(),[t,i]=it.useState(0),[s,l]=it.useState(0),[c,d]=it.useState("idle"),[h,m]=it.useState(""),[p,_]=it.useState(""),g=it.useRef(null),x=it.useRef("");if(it.useEffect(()=>()=>g.current?.abort(),[]),t>=Ao.length)return b.jsx(Vo,{score:s,max:Ao.length,onRetry:()=>(i(0),l(0),d("idle"),m(""))});const S=Ao[t],T=D=>{d(D?"ok":"no");const z=s+(D?1:0);l(z),t+1>=Ao.length&&Za("speak",z)},L=()=>{if(!ef||c==="rec")return;const D=new ef;D.lang="en-GB",D.interimResults=!1,D.maxAlternatives=1,x.current="",D.onresult=U=>{x.current=U.results[0]?.[0]?.transcript??""};let z=!1;D.onerror=U=>{if(z=!0,U.error==="no-speech"||U.error==="aborted")return d("idle");_(U.error==="not-allowed"||U.error==="service-not-allowed"?o("micBlocked"):`${o("noMic")} (${U.error})`),d("err")},D.onend=()=>{if(g.current=null,!z){if(!x.current)return d("idle");m(x.current),T(cw(S,x.current)>=.7)}},g.current=D,d("rec"),m(""),_(""),D.start()},M=()=>g.current?.stop(),E=c==="ok"||c==="no";return b.jsxs("div",{className:"speak",children:[b.jsxs("p",{className:"mono muted",children:[t+1,"/",Ao.length]}),b.jsxs("p",{className:"sort-word",children:[S," ",b.jsx(va,{text:S,small:!0})]}),ef?b.jsxs("button",{type:"button",className:`hold${c==="rec"?" rec":""}`,disabled:E,onPointerDown:D=>(D.currentTarget.setPointerCapture(D.pointerId),L()),onPointerUp:M,onPointerCancel:M,onKeyDown:D=>(D.key===" "||D.key==="Enter")&&!D.repeat&&(D.preventDefault(),L()),onKeyUp:D=>(D.key===" "||D.key==="Enter")&&M(),children:[b.jsx("span",{className:"hold-ring","aria-hidden":"true"}),o(c==="rec"?"listening":"hold")]}):b.jsx("p",{className:"muted",children:o("noMic")}),c==="err"&&b.jsx("p",{className:"fb no",children:p}),(!ef||c==="err")&&!E&&b.jsx("button",{type:"button",className:"btn ghost sm",onClick:()=>T(!0),children:o("selfCheck")}),E&&b.jsxs(b.Fragment,{children:[b.jsx(_r,{ok:c==="ok",children:h?`${o("youSaid")}: “${h}”`:""}),b.jsx("button",{type:"button",className:"btn sm",onClick:()=>(i(t+1),d("idle"),m("")),children:o("next")})]})]})}const Ow={sort:Cw,grammar:ww,listen:Nw,build:Dw,match:Lw,speak:Uw},_S=gr.filter(o=>o.anchor==="practice");function Pw(){const o=sn(),t=ei(),i=cn(d=>d.done),[s,l]=it.useState(_S[0].id),c=Ow[s];return b.jsx("section",{id:"practice",className:"calm","data-stage":"10",children:b.jsxs("div",{className:"wrap",children:[b.jsx(Ka,{kicker:o("practiceKicker"),title:o("practiceTitle")}),b.jsx("div",{className:"tabs",role:"tablist",children:_S.map((d,h)=>{const m=i[d.id]??0;return b.jsxs("button",{type:"button",role:"tab","aria-selected":s===d.id,className:`tab${s===d.id?" on":""}`,onClick:()=>l(d.id),children:[b.jsx("span",{className:"mono",children:String(h+1).padStart(2,"0")}),b.jsx("span",{children:d.name[t]}),b.jsxs("span",{className:`mono tab-score${m>=d.max?" full":""}`,children:[m,"/",d.max]})]},d.id)})}),b.jsx("div",{className:"pane",role:"tabpanel",children:b.jsx(c,{})},s)]})})}function Iw(){const o=sn(),t=ei(),i=cn(g=>g.words),[s,l]=it.useState("all"),[c,d]=it.useState(""),[h,m]=it.useState(!1),p=c.trim().toLowerCase(),_=Io.filter(g=>(s==="all"||g.cat===s)&&(!h||i.includes(g.id))&&(!p||g.en.includes(p)||g.ru.toLowerCase().includes(p)));return b.jsx("section",{id:"words",className:"calm","data-stage":"10",children:b.jsxs("div",{className:"wrap",children:[b.jsx(Ka,{kicker:o("wordsKicker"),title:o("wordsTitle")}),b.jsxs("div",{className:"filters",children:[b.jsx("div",{className:"seg-scroll",children:b.jsx(Nf,{label:o("wordsTitle"),items:YC.map(g=>({id:g.id,label:g.label[t]})),value:s,onChange:l})}),b.jsx("input",{className:"input",type:"search",placeholder:o("search"),"aria-label":o("search"),value:c,onChange:g=>d(g.target.value)}),b.jsxs("label",{className:"check",children:[b.jsx("input",{type:"checkbox",checked:h,onChange:g=>m(g.target.checked)})," ",o("onlySaved")," · ",b.jsx("span",{className:"mono",children:i.length})]})]}),b.jsxs("p",{className:"mono muted small",children:[_.length," / ",Io.length]}),_.length?b.jsx("ul",{className:"wordgrid",children:_.map(g=>b.jsxs("li",{className:`word cat-${g.cat}`,children:[b.jsxs("div",{children:[b.jsx("p",{className:"word-en",children:g.en}),b.jsxs("p",{className:"mono muted small",children:[g.count==="c"?"countable":g.count==="u"?"uncountable":g.cat,t==="ru"&&` · ${g.ru}`]})]}),b.jsx(va,{text:g.en,small:!0}),b.jsx(mM,{id:g.id})]},g.id))}):b.jsxs("div",{className:"empty",children:[b.jsx("p",{children:o("noWords")}),b.jsx("button",{type:"button",className:"btn ghost sm",onClick:()=>(d(""),l("all"),m(!1)),children:t==="ru"?"Сбросить фильтры":"Reset filters"})]})]})})}const zw=/^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё' -]{1,39}$/;function Bw(){const o=sn(),t=ei(),i=cn(Cf),s=cn(Qm),l=cn(y=>y.done),c=cn(y=>y.words.length),d=cn(y=>y.cert),[h,m]=it.useState(d?.name??""),[p,_]=it.useState(d?.group??""),[g,x]=it.useState({name:!1,group:!1}),[S,T]=it.useState(!1),[L,M]=it.useState(!1),E=zw.test(h.trim()),D=p.trim().length<=20,z=gr.filter(y=>(l[y.id]??0)>=y.max).length,U=pS(s),F=y=>{y.preventDefault(),x({name:!0,group:!0}),!(!E||!D||S)&&(T(!0),window.setTimeout(()=>{const N=new Date,J=`PL-${N.getFullYear()}${String(N.getMonth()+1).padStart(2,"0")}${String(N.getDate()).padStart(2,"0")}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;_n({cert:{name:h.trim(),group:p.trim(),id:J,date:N.toLocaleDateString(t==="ru"?"ru-RU":"en-GB"),points:i}}),T(!1),M(!1)},700))},P=!d||L;return b.jsx("section",{id:"finish",className:"split finale","data-stage":"11",children:b.jsxs("div",{className:"wrap split-grid",children:[b.jsxs("div",{className:"split-ui",children:[b.jsx(Ka,{kicker:o("finKicker"),title:o("finTitle"),sub:o("finSub")}),b.jsxs("dl",{className:"stats mono",children:[b.jsxs("div",{children:[b.jsx("dt",{children:"points"}),b.jsxs("dd",{children:[i,"/",Do]})]}),b.jsxs("div",{children:[b.jsx("dt",{children:t==="ru"?"оценка":"grade"}),b.jsx("dd",{className:"accent",children:U})]}),b.jsxs("div",{children:[b.jsx("dt",{children:o("tasksDone")}),b.jsxs("dd",{children:[z,"/",gr.length]})]}),b.jsxs("div",{children:[b.jsx("dt",{children:o("wordsSaved")}),b.jsx("dd",{children:c})]})]}),P?b.jsxs("form",{className:"form",onSubmit:F,noValidate:!0,children:[b.jsxs("label",{className:"field",children:[b.jsx("span",{children:o("name")}),b.jsx("input",{className:`input${g.name&&!E?" bad":""}`,value:h,maxLength:40,autoComplete:"name",onChange:y=>m(y.target.value),onBlur:()=>x(y=>({...y,name:!0})),"aria-invalid":g.name&&!E}),g.name&&!E&&b.jsx("small",{className:"err",children:o("nameErr")})]}),b.jsxs("label",{className:"field",children:[b.jsx("span",{children:o("group")}),b.jsx("input",{className:`input${D?"":" bad"}`,value:p,maxLength:24,onChange:y=>_(y.target.value),"aria-invalid":!D}),!D&&b.jsx("small",{className:"err",children:o("groupErr")})]}),b.jsx("button",{type:"submit",className:"btn mag",disabled:S,children:o(S?"making":"makeCert")})]}):d&&b.jsxs("div",{className:"cert-wrap",children:[b.jsxs("article",{className:"cert","aria-label":"Certificate",children:[b.jsxs("p",{className:"mono small",children:["Plate. · ",d.id]}),b.jsx("p",{className:"muted",children:xf.certFor[t]}),b.jsx("p",{className:"cert-name",children:d.name}),d.group&&b.jsx("p",{className:"mono small",children:d.group}),b.jsx("p",{children:xf.certDid[t]}),b.jsxs("p",{className:"cert-grade mono",children:[pS(Math.round(d.points/Do*100))," · ",d.points,"/",Do]}),b.jsx("p",{className:"mono small muted",children:d.date})]}),b.jsxs("div",{className:"row",children:[b.jsx("button",{type:"button",className:"btn",onClick:()=>print(),children:o("print")}),b.jsx("button",{type:"button",className:"btn ghost",onClick:()=>M(!0),children:o("editCert")})]}),d.points!==i&&b.jsx("p",{className:"muted small",children:t==="ru"?`Сейчас у вас ${i} баллов: создайте сертификат заново, чтобы обновить.`:`You now have ${i} points: create it again to update.`})]})]}),b.jsx("div",{className:"stage-space","aria-hidden":"true"})]})})}function Fw(){const o=sn();return b.jsxs("footer",{className:"foot wrap",children:[b.jsxs("p",{className:"logo",children:["Plate",b.jsx("i",{children:"."})]}),b.jsx("p",{className:"muted small",children:o("footer")}),b.jsx("p",{className:"mono muted small",children:"EN · RU · 2026"})]})}function Hw(){const o=it.useRef(null),t=cn(l=>l.gl),i=cn(l=>l.lang);it.useEffect(()=>{if(!o.current)return;const l=uw(o.current);return l||_n({gl:!1}),l??void 0},[]),it.useEffect(()=>{document.documentElement.lang=i},[i]),it.useEffect(()=>{const l=new IntersectionObserver(h=>h.forEach(m=>m.isIntersecting&&(m.target.classList.add("in"),l.unobserve(m.target))),{rootMargin:"0px 0px -8% 0px"}),c=()=>document.querySelectorAll(".reveal:not(.in)").forEach(h=>l.observe(h));c();const d=new MutationObserver(c);return d.observe(document.getElementById("root"),{childList:!0,subtree:!0}),()=>(l.disconnect(),d.disconnect())},[]);const s=cn(l=>l.panel);return it.useEffect(()=>{document.body.classList.toggle("lock",s)},[s]),b.jsxs(b.Fragment,{children:[b.jsx("canvas",{ref:o,className:`scene${t?"":" off"}`,"aria-hidden":"true"}),!t&&b.jsx("div",{className:"scene-fallback","aria-hidden":"true"}),b.jsx(pw,{}),b.jsxs("main",{children:[b.jsx(xw,{}),b.jsx(Sw,{}),b.jsx(Mw,{}),b.jsx(Ew,{}),b.jsx(bw,{}),b.jsx(Tw,{}),b.jsx(Aw,{}),b.jsx(Pw,{}),b.jsx(Iw,{}),b.jsx(Bw,{})]}),b.jsx(Fw,{}),b.jsx(mw,{}),b.jsx(gw,{}),b.jsx(_w,{}),b.jsx(vw,{})]})}window.__plate=eu;document.documentElement.lang=eu().lang;ib.createRoot(document.getElementById("root")).render(b.jsx(Hw,{}));"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));export{Ww as C,Gw as M,Ds as P,Bo as Q,WS as R,Xw as S,Vw as T,oe as V,Pt as a,kw as b};
